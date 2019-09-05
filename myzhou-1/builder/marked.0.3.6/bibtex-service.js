(function ()
{
const BibTeX = require('./bibtex.js');
const Utils = require('./bibtex-utils.js');

function field(entry, field)
{
    const field1 = entry.Fields[field];
    if (!field1)
    {
        return BibTeX.Strings.Literal.Empty;
    }
    const field2 = field1.Resolve();
    return field2 || BibTeX.Strings.Literal.Empty;
}

function RenderTitle(entry, result)
{
    const url = field(entry, 'biosite_url').Raw;
    result.push('<div class="gl-bibtex-entry-title"><span class="gl-bibtex-entry-bullet" aria-label="bullet symbol">&#8226; </span><a');
    if (url)
    {
        result.push(' href="', Utils.HtmlEncode(url), '" rel="nofollow"');
    }
    result.push('>',
        Utils.TeX2Html(false, field(entry, 'title').Raw),
        '</a></div>\n');
}

const AuthorFormat = BibTeX.ParsePersonNameFormat('{ff }{vv~}{ll}{, jj}');
function RenderAuthors(entry, result)
{
    result.push('<div class="gl-bibtex-entry-authors">');
    const people = BibTeX.ParsePersonNames(field(entry, 'author'));
    const realpeople = [];
    let etal = false;
    for (const person of people)
    {
        if (person.IsEtal())
        {
            etal = true;
        }
        else
        {
            const formatted = AuthorFormat.Format(person);
            if (formatted.replace(/[ \t\v\f\r\n~-]+/g, '') !== '')
            {
                realpeople.push(Utils.TeX2Html(false, formatted));
            }
        }
    }
    if (realpeople.length === 0)
    {
        result.push('Anonymous');
    }
    else if (realpeople.length === 1)
    {
        result.push(realpeople[0]);
        if (etal)
        {
            result.push(' et&nbsp;al.');
        }
    }
    else if (etal)
    {
        result.push(realpeople.join(', '));
        result.push(', et&nbsp;al.');
    }
    else if (realpeople.length === 2)
    {
        result.push(realpeople[0]);
        result.push(' and ');
        result.push(realpeople[1]);
    }
    else
    {
        const lastPerson = realpeople.pop();
        result.push(realpeople.join(', '));
        result.push(', and ');
        result.push(lastPerson);
    }
    result.push('</div>\n');
}

const ExtrasLinks = [
{
    field: 'arxiv',
    name: 'arXiv',
    href1html: 'https://arxiv.org/abs/',
    href2html: '',
    arialabel: 'archive'
},
{
    field: 'eprint',
    name: 'ePrint',
    href1html: 'https://eprint.iacr.org/',
    href2html: ''
},
];
function RenderExtras(entry, result)
{
    result.push('<div class="gl-bibtex-entry-extras">');
    let first = true;
    const info = field(entry, 'biosite_info').Raw;
    if (info)
    {
        result.push('<span class="gl-bibtex-entry-extras-info">',
            Utils.TeX2Html(false, info),
            '</span>');
        first = false;
    }
    for (const item of ExtrasLinks)
    {
        const value = Utils.HtmlEncode(
            field(entry, 'biosite_' + item.field).Raw);
        if (!value)
        {
            continue;
        }
        if (!first)
        {
            result.push('<span aria-hidden="true"> | </span>');
        }
        else
        {
            first = false;
        }
        result.push('<span class="gl-bibtex-entry-extras-',
            item.field, '" data-value="', value,
            '"><a href="',
            item.href1html, value, item.href2html,
            '" rel="nofollow"');
        if (item.arialabel)
        {
            result.push(' aria-label="', item.arialabel, '"');
        }
        result.push('>',
            Utils.TeX2Html(false, item.name),
            '</a></span>');
    }
    if (!first)
    {
        result.push('</div>\n');
    }
    else
    {
        result.pop();
    }
}

function RenderDatabase(parsed)
{
    const result = ['<div class="gl-bibtex-bst-bio">\n'];
    let className = 'gl-bibtex-entry';
    const preamble = Utils.RenderPreambleHtml(parsed);
    if (preamble)
    {
        result.push('<div class="gl-bibtex-preamble">',
            preamble, '</div>\n');
        className = 'gl-bibtex-entry gl-bibtex-notfirstentry';
    }
    for (const entry of parsed.Entries)
    {
        result.push('<div class="', className, '" id="bibitem_',
            entry.Id, '">\n');
        RenderTitle(entry, result);
        RenderAuthors(entry, result);
        RenderExtras(entry, result);
        result.push('</div>\n');
        className = 'gl-bibtex-entry gl-bibtex-notfirstentry';
    }
    result.push('</div>');
    return result.join('');
}

function Handler(content)
{
    const parsed = BibTeX.ParseDatabase(content);
    return RenderDatabase(parsed);
}

const BlogBibTeX = {
    BibTeX: BibTeX,
    Handler: Handler
};

if (typeof module !== 'undefined' && typeof exports === 'object')
{
    module.exports = BlogBibTeX;
}
else if (typeof define === 'function' && define.amd)
{
    define(function() { return BlogBibTeX; });
}
else if (this)
{
    this.GL_BlogBibTeX = BlogBibTeX;
}
else if (typeof window !== 'undefined')
{
    window.GL_BlogBibTeX = BlogBibTeX;
}
else
{
    global.GL_BlogBibTeX = BlogBibTeX;
}
})();
