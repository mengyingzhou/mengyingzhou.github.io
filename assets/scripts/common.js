/* GL(Get|Set)(Local|Session)Storage
** Gets/sets a non-stale local/session storage value.
**
** Get methods:
**         name: [required] The key.
** defaultValue: [optional] The default value.
** The default value will be returned in case:
** - There is an error accessing the storage.
** - The value in the storage is stale.
**
** Set methods:
**   name: [required] The key name.
**  value: [optional] The value.
** expiry: [optional] The expiry.
** If value == null, the value is removed.
** If expiry == null, the value does not expire.
** If expiry instanceof Date, it represents
**     the actual time the value expires.
** Otherwise, expiry is converted to a number,
**     which represents the number of seconds
**     from now until the value expires.
** If the expiry is NaN, the value does not expire.
*/
(function (getWebStorage, setWebStorage)
{
    getWebStorage = function (stg, name, defaultValue)
    {
        try
        {
            var expiry = stg[name + '!e'];
            /* Immune to NaN. */
            if (expiry != '+inf' && !(Number(expiry) > (new Date()).getTime()))
            {
                stg.removeItem(name + '!e');
                stg.removeItem(name + '!v');
                return defaultValue;
            }
            var value = stg[name + '!v'];
            if (value == null)
            {
                stg.removeItem(name + '!e');
                stg.removeItem(name + '!v');
                return defaultValue;
            }
            return value;
        }
        catch (err)
        {
            return defaultValue;
        }    
    };
    setWebStorage = function (stg, name, value, expiry)
    {
        try
        {
            if (value == null)
            {
                stg.removeItem(name + '!v');
                stg.removeItem(name + '!e');
                return;
            }
            if (expiry == null)
            {
                expiry = '+inf';
            }
            else if (expiry instanceof Date)
            {
                expiry = expiry.getTime();
            }
            else
            {
                expiry = Number(expiry);
                /* Immune to NaN. */
                if (!(expiry == expiry))
                {
                    expiry = '+inf';
                }
                else
                {
                    expiry = (new Date()).getTime() + expiry * 1000;
                }
            }
            stg[name + '!e'] = expiry;
            stg[name + '!v'] = value;
        }
        catch (err)
        {
        }
    };
    window.GLGetLocalStorage = function (name, defaultValue)
    {
        return getWebStorage(window.localStorage, name, defaultValue);
    };
    window.GLSetLocalStorage = function (name, value, expiry)
    {
        setWebStorage(window.localStorage, name, value, expiry);
    };
    window.GLGetSessionStorage = function (name, defaultValue)
    {
        return getWebStorage(window.sessionStorage, name, defaultValue);
    };
    window.GLSetSessionStorage = function (name, value, expiry)
    {
        setWebStorage(window.sessionStorage, name, value, expiry);
    };
})();

/* Compatibility shim, to be removed in 2020.
** Translates legacy values into new format.
** v0_theme  ===> szTheme
** v0_notice ===> guidNotice
*/
(function ()
{
    try
    {
        var v0_notice = window.localStorage['v0_notice'];
        window.localStorage.removeItem('v0_notice');
        if (v0_notice)
        {
            window.GLSetLocalStorage('guidNotice', v0_notice);
        }
    }
    catch (err)
    {
    }
    try
    {
        var v0_theme = window.localStorage['v0_theme'];
        var v0_expiry = window.localStorage['v0_expiry'];
        window.localStorage.removeItem('v0_theme');
        window.localStorage.removeItem('v0_expiry');
        if (v0_theme && v0_expiry)
        {
            v0_expiry = new Date(Number(v0_expiry));
            window.GLSetLocalStorage('szTheme', v0_theme, v0_expiry);
        }
    }
    catch (err)
    {
    }
})();

/* Polyfills classList.contains/add/remove. */
(function (htm)
{
    var hasClassForward = function (element, theClass)
    {
        return element.classList.contains(theClass);
    };
    var addClassForward = function (element, theClass)
    {
        return element.classList.add(theClass);
    };
    var removeClassForward = function (element, theClass)
    {
        return element.classList.remove(theClass);
    };
    var hasClassShim = function (element, theClass)
    {
        var currentClasses = element.className || '';
        var paddedClasses = ' ' + currentClasses + ' ';
        return paddedClasses.indexOf(theClass) >= 0;
    };
    var addClassShim  = function (element, theClass)
    {
        var currentClasses = element.className || '';
        var paddedClasses = ' ' + currentClasses + ' ';
        if (paddedClasses.indexOf(theClass) < 0);
        {
            element.className = currentClasses + ' ' + theClass;
        }
    };
    var removeClassShim = function (element, theClass)
    {
        var currentClasses = element.className || '';
        var paddedClasses = ' ' + currentClasses + ' ';
        theClass = ' ' + theClass + ' ';
        var replacedClasses = paddedClasses.replace(theClass, ' ');
        while (replacedClasses != paddedClasses)
        {
            paddedClasses = replacedClasses;
            replacedClasses = paddedClasses.replace(theClass, ' ');
        }
        element.className = replacedClasses;
    };
    window.GLHasClass = (htm.classList && htm.classList.contains
        ? hasClassForward
        : hasClassShim);
    window.GLAddClass = (htm.classList && htm.classList.add
        ? addClassForward
        : addClassShim);
    window.GLRemoveClass = (htm.classList && htm.classList.remove
        ? removeClassForward
        : removeClassShim);
})(document.documentElement);

/* Adds an event listener.
**  target: [required] The target element.
**   event: [required] E.g., 'hashchange'.
** handler: [required] The handler.
** options: [optional] Options for `addEventListener`.
**
** If the event is attached, returns a function to detach the event.
** Otherwise, Boolean value false is returned.
*/
window.GLAddEventListenerHelper = function (target, event, handler, options)
{
    if (target.addEventListener)
    {
        target.addEventListener(event, handler, options);
        return (function ()
        {
            target.removeEventListener(event, handle, options);
        });
    }
    if (target.attachEvent)
    {
        target.attachEvent('on' + event, handler);
        return (function ()
        {
            target.detachEvent('on' + event, handler);
        });
    }
    return false;
};

/* Uses the browser's scroll functionality. */
window.GLScrollIntoViewWithValues = function (element,
    nowTop, nowLeft, nowBottom, nowRight,
    viewHeight, viewWidth)
{
    if (nowTop < 0 || nowLeft < 0)
    {
        element.scrollIntoView(true);
    }
    else if (nowBottom > viewHeight || nowRight > viewWidth)
    {
        element.scrollIntoView(false);
    }
};

/* Compatibility shim. */
window.GLScrollIntoView = function (element)
{
    var boundingRect = element.getBoundingClientRect();
    window.GLScrollIntoViewWithValues(element,
        boundingRect.top, boundingRect.left,
        boundingRect.bottom, boundingRect.right,
        window.innerHeight, window.innerWidth);
};

/* Some browsers use <body> to scroll the document
** while some other use <html>.
*/
(function (cachedScrlElem, cachedBodyWrapper)
{
    var isScrollable = function (elem)
    {
        if (!elem)
        {
            return false;
        }
        if (window.getComputedStyle)
        {
            return window.getComputedStyle(elem).overflowY == 'visible';
        }
        return elem.currentStyle.overflowY == 'visible';
    };
    window.GLVerticalScroll = function (byAmount)
    {
        cachedScrlElem = (cachedScrlElem
            || document.scrollingElement
            || (document.body && document.body.scrollTop > 0
                ? document.body
                : document.documentElement.scrollTop > 0
                ? document.documentElement
                : undefined));
        if (isScrollable(cachedScrlElem))
        {
            cachedScrlElem.scrollTop += byAmount;
            return;
        }
        if (isScrollable(document.body))
        {
            document.body.scrollTop += byAmount;
        }
        if (isScrollable(document.documentElement))
        {
            document.documentElement.scrollTop += byAmount;
        }
    };
    window.GLCanHorizontalScroll = function (elem)
    {
        cachedBodyWrapper = (cachedBodyWrapper
            || document.querySelector('.gl-body-wrapper'));
        return (cachedBodyWrapper != null
            && cachedBodyWrapper.contains(elem));
    }
    window.GLHorizontalScroll = function (byAmount)
    {
        cachedBodyWrapper = (cachedBodyWrapper
            || document.querySelector('.gl-body-wrapper'));
        if (cachedBodyWrapper != null)
        {
            cachedBodyWrapper.scrollLeft += byAmount;
        }
    };
})();

window.GLResolveBringIntoViewRect = function (element)
{
    var altTarget = element.getAttribute('gl-bringintoviewnicely-union');
    if (altTarget)
    {
        altTarget = document.getElementById(altTarget);
    }
    var boundingRect = element.getBoundingClientRect();
    var altBoundingRect = (altTarget
        ? altTarget.getBoundingClientRect()
        : boundingRect);
    return {
        top: Math.min(boundingRect.top, altBoundingRect.top),
        left: Math.min(boundingRect.left, altBoundingRect.left),
        bottom: Math.max(boundingRect.bottom, altBoundingRect.bottom),
        right: Math.max(boundingRect.right, altBoundingRect.right)
    };
}

/* Scrolls an element into the view with nice placement.
** element: [required]
**          The element to be brought into view.
*/
window.GLBringIntoViewNicely = function (element)
{
    var boundingRect = GLResolveBringIntoViewRect(element);
    var nowTop = boundingRect.top;
    var nowLeft = boundingRect.left;
    var nowBottom = boundingRect.bottom;
    var nowRight = boundingRect.right;
    var viewHeight = window.innerHeight;
    var viewWidth = window.innerWidth;
    /* Fall back to the browser-provided behaviour
    ** if we cannot scroll this element horizontally.
    */
    if (!window.GLCanHorizontalScroll(element))
    {
        window.GLScrollIntoViewWithValues(element,
            nowTop, nowLeft, nowBottom, nowRight,
            viewHeight, viewWidth);
        return;
    }
    nowBottom = Math.min(nowTop + viewHeight, nowBottom);
    var columnWidthEstimate = undefined;
    var countColumn = 1;
    for (columnWidthEstimate = (viewWidth - 96) / ++countColumn;
        columnWidthEstimate >= 720;
        columnWidthEstimate = (viewWidth - 96) / ++countColumn)
        ;
    columnWidthEstimate = (viewWidth - 96) / --countColumn;
    nowRight = Math.min(nowLeft + viewWidth, nowRight);
    /* Specialised GLSetViewportPos */
    window.GLVerticalScroll((nowTop + nowBottom - viewHeight) / 2);
    window.GLHorizontalScroll((nowLeft + nowRight - viewWidth) / 2);
    return;
};

window.GLBringIntoViewNicelyLater = function (element)
{
    window.setTimeout(function ()
    {
        window.GLBringIntoViewNicely(element);
    }, 0);
};

/* Gets the position of an element's top-left corner
** relative to the viewport.
** element: [required] The element of interest.
** Returns { top: 1, left: 1 }.
*/
window.GLGetViewportPos = function (element)
{
    var boundingRect = element.getBoundingClientRect();
    return { top: boundingRect.top, left: boundingRect.left };
};

/* Sets the position of an element's top-left corner
** to the specified position relative to the viewport.
** element: [required] The element to be moved.
**   point: [required] { top: 1, left: 1 }.
*/
window.GLSetViewportPos = function (element, point)
{
    var boundingRect = element.getBoundingClientRect();
    var nowTop = boundingRect.top;
    var nowLeft = boundingRect.left;
    /* The browser deals with overflow of the x/y range.
    ** In all cases, at most one scrolling could be effective.
    */
    var isHorizontal = (window.innerWidth >= 1540);
    if (!isHorizontal && point.top != null)
    {
        window.GLVerticalScroll(nowTop - point.top);
    }
    if (isHorizontal
        && point.left != null
        && window.GLCanHorizontalScroll(element))
    {
        window.GLHorizontalScroll(nowLeft - point.left);
    }
};

/* Event handler for collapsing/expanding
** a collapsible area. It scrolls the view
** after changing the state. State mutation
** elements set `data-collapsion-scroll`
** attribute to indicate that they wish to
** scroll the view after state change.
** This is typically used when the collapsible
** content is long, and a collapsion button at
** the end of the area is provided. After
** collapsing the content with the button
** at the end, the expansion button roughly
** appears where the collapsion button was.
** This avoids diverting the logical/contextual
** focus of the user the user.
*/
window.GLCollapseHandler = function (element)
{
    var result = element.getAttribute('data-collapsion');
    if (result == 'expand')
    {
        result = 'visible';
    }
    else if (result == 'collapse')
    {
        result = 'collapsed';
    }
    else
    {
        return;
    }
    var shouldScroll = (element.getAttribute('data-collapsion-scroll') != null);
    var oldPos = null;
    if (shouldScroll)
    {
        oldPos = window.GLGetViewportPos(element);        
    }
    for (element = element.parentElement;
        element != null
            && !window.GLHasClass(element, 'gl-collapsible');
        element = element.parentElement)
        ;
    if (element == null)
    {
        return;
    }
    element.setAttribute('data-collapsion', result);
    var collapsionId = element.getAttribute('data-collapsion-id');
    if (collapsionId)
    {
        /* The state expires in a week. */
        window.GLSetLocalStorage('fClpsbl!' + collapsionId, result, 604800);
    }
    if (shouldScroll)
    {
        window.GLSetViewportPos(element, oldPos);
    }
};

/* Registers handlers for collapsible areas.
** This is supposed to be called when new DOM
** elements are inserted. The method is idempotent.
*/
window.ResetGLCollapseHandlers = function ()
{
    [].forEach.call(document.querySelectorAll('.gl-collapsible a[data-collapsion]:not([data-collapsion-event-set])'), function (x)
    {
        if (x.href == '')
        {
            x.href = 'javascript:void(0);';
        }
        window.GLAddEventListenerHelper(x, 'click', function ()
        {
            window.GLCollapseHandler(x);
        }, true);
        x.setAttribute('role', 'button');
        x.setAttribute('data-collapsion-event-set', 'true');
    });
};

/* Resets all collapsible sections to their initial states.
** consultPreferences: [optional; default = false]
**     Whether or not to consult the local storage.
*/
window.ResetGLCollapsibleSections = function (consultPreferences)
{
    var noconsultLS = function (x)
    {
        var initialState = x.getAttribute('data-collapsion-initial') || 'collapsed';
        x.setAttribute('data-collapsion', initialState);
    };
    var consultLS = function (x)
    {
        var collapsionId = x.getAttribute('data-collapsion-id');
        if (!collapsionId)
        {
            return noconsultLS(x);
        }
        var storedState = window.GLGetLocalStorage('fClpsbl!' + collapsionId);
        if (!storedState)
        {
            return noconsultLS(x);
        }
        /* Extend the expiry because the user is again accustomed
        ** to this section being expanded.
        */
        window.GLSetLocalStorage('fClpsbl!' + collapsionId, storedState, 604800);
        x.setAttribute('data-collapsion', storedState);
    };
    [].forEach.call(document.querySelectorAll('.gl-collapsible'),
        consultPreferences ? consultLS : noconsultLS);
};

/* Finds an unused identifier.
** This method is deprecated.
*/
window.GLCreateSurrogateName = (function (i)
{
    return function ()
    {
        for (; document.getElementById('__surrogate_' + i) != null; ++i)
            ;
        return '__surrogate_' + (i++);
    };
})(0);

/* Handles hash change event. */
window.GLHashHandler = new (function ()
{
    var commentsArea = null;
    var bringCommentsAreaIntoView = function ()
    {
        commentsArea = commentsArea || document.getElementById('comments-area');
        if (commentsArea != null)
        {
            window.GLBringIntoViewNicely(commentsArea);
        }
    };
    /* UNDOCUMENTED AND UNSUPPORTED HACK.
    ** See comments.js for explanation. */
    var lastSeenTop = null;
    var HackDisqusScroll = function (newTop)
    {
        commentsArea = commentsArea || document.getElementById('comments-area');
        if (commentsArea == null)
        {
            return;
        }
        if (newTop == null)
        {
            newTop = lastSeenTop;
        }
        if (newTop == null)
        {
            bringCommentsAreaIntoView();
            return;
        }
        lastSeenTop = newTop;
        window.GLSetViewportPos(commentsArea, { top: -newTop, left: 0 });
    };
    var lastSeenHash = '*';
    var pretendHashChange = false;
    var HandleHashChange = function ()
    {
        var target = location.hash || '*';
        var oldHash = lastSeenHash;
        lastSeenHash = target;
        /* Abort when there is no actual change. */
        if (!pretendHashChange && oldHash == target)
        {
            return;
        }
        /* In-page elements have priority over Disqus comments. */
        var elem = document.getElementById(target.substring(1));
        if (elem == null)
        {
            /* If it should be handled by Disqus, bring it into view. */
            if (window.GLHasDisqus
                && target.substring(0, 9) == '#comment-')
            {
                if (oldHash == target)
                {
                    HackDisqusScroll();
                }
                else /* HackDisqusScroll is called later. */
                {
                    bringCommentsAreaIntoView();
                }
            }
            return;
        }
        /* Scroll the element into view after the browser
        ** finishes its own placement job.
        */
        window.GLBringIntoViewNicelyLater(elem);
        /* Force replaying the blinking animation. */
        if (!window.GLHasClass(elem, 'gl-reset-animations'))
        {
            window.GLAddClass(elem, 'gl-reset-animations');
            window.setTimeout(function ()
            {
                window.GLRemoveClass(elem, 'gl-reset-animations');
            }, 5);
        }
    };
    var PretendHashChange = function (newValue)
    {
        var oldValue = pretendHashChange;
        pretendHashChange = newValue;
        return oldValue;
    };
    this.HandleHashChange = HandleHashChange;
    this.PretendHashChange = PretendHashChange;
    this.HackDisqusScroll = HackDisqusScroll;
});

window.GLBookmarkHashHandler = new (function ()
{
    var hashHandler = window.GLHashHandler;
    var HandleBookmarkClick = function (target)
    {
        var evt = target || window.event;
        target = evt.target || evt.srcElement;
        for (; target != null && !target.hasAttribute('href');
            target = target.parentElement)
            ;
        if (target == null || !target.hasAttribute('href'))
        {
            return;
        }
        target = target.getAttribute('href');
        if (target[0] == '#' && location.hash == target)
        {
            var oldValue = hashHandler.PretendHashChange(true);
            hashHandler.HandleHashChange();
            hashHandler.PretendHashChange(oldValue);
        }
    };
    this.HandleBookmarkClick = HandleBookmarkClick;
});

/* Handles a bookmark link.
** When JavaScript is enabled, we make sure
** the targeted element blinks and is placed
** close to the center of the viewport.
** We also have to consider Disqus comment hash.
*/
window.GLHandleBookmarkJumps = function ()
{
    var hashHandler = window.GLHashHandler;
    var bkmkHander = window.GLBookmarkHashHandler;
    window.GLAddEventListenerHelper(window, 'hashchange', function ()
    {
        hashHandler.HandleHashChange();
    }, true);
    window.GLAddEventListenerHelper(document, 'click', function (e)
    {
        bkmkHander.HandleBookmarkClick(e);
    }, true);
    window.GLAddClass(document.body, 'gl-targeted-animation');
    /* When the page is first navigated to,
    ** Microsoft Edge will need another knock.
    ** All browsers work fine when refreshed.
    */
    window.setTimeout(function ()
    {
        var oldValue = hashHandler.PretendHashChange(true);
        hashHandler.HandleHashChange();
        hashHandler.PretendHashChange(oldValue);
    }, 100);
};

/* Placeholder. If a prompt is desired, fill this function. */
window.GLBringFocusToPromptNotice = function () { };

/* Placeholder. If Disqus should be enabled, fill this function. */
window.GLLoadDisqus = function () { };

window.GLHandleSessionContinuity = function ()
{
    var sessionPageId = 'vwPos!' + window.location.pathname;
    var wrpr = document.querySelector('.gl-body-wrapper');
    var stateSaved = false;
    var saveStateHandler = function ()
    {
        if (stateSaved)
        {
            return;
        }
        stateSaved = true;
        var state = {
            vw: window.innerWidth << 0,
            vh: window.innerHeight << 0,
            bodyTop: -window.GLGetViewportPos(document.body).top,
            wprLeft: wrpr && wrpr.scrollLeft,
            pctg: 0
        };
        if (state.vw < 1540 || !wrpr)
        {
            var br = document.body.getBoundingClientRect();
            state.pctg = state.bodyTop / (br.bottom - br.top);
        }
        else
        {
            state.pctg = state.wprLeft / wrpr.scrollWidth;
        }
        window.GLSetSessionStorage(sessionPageId, JSON.stringify(state));
    };
    ['beforeunload', 'unload', 'pagehide'].forEach(function (evtName)
    {
        window.GLAddEventListenerHelper(window, evtName, saveStateHandler, true);
    });
    var uriData = window.GLGetSessionStorage(sessionPageId);
    window.GLSetSessionStorage(sessionPageId, null);
    if (uriData == null)
    {
        return;
    }
    uriData = JSON.parse(uriData);
    var resizeNegligible = function (sz1, sz2)
    {
        return (sz1 + sz2 >= 2000
            ? sz1 <= sz2 + 40 && sz2 <= sz1 + 40
            : sz1 <= sz2 * 1.04 && sz2 <= sz1 * 1.04);
    };
    var restorePagePos = function ()
    {
        var vw = window.innerWidth << 0;
        var vh = window.innerHeight << 0;
        if ((vw < 1540) ^ (uriData.vw < 1540))
        {
            return;
        }
        /* Is the change negligible so that
        ** we can reuse the coordinates? */
        if (vw < 1540 || !wrpr
            ? resizeNegligible(vw, uriData.vw)
            : resizeNegligible(vh, uriData.vh))
        {
            window.GLSetViewportPos(document.body, { top: -uriData.bodyTop });
            if (wrpr)
            {
                window.GLSetViewportPos(wrpr, { left: -uriData.wprLeft });
            }
        }
        else
        {
            var br = document.body.getBoundingClientRect();
            window.GLSetViewportPos(document.body, { top: -uriData.pctg * (br.bottom - br.top) });
            if (wrpr)
            {
                window.GLSetViewportPos(wrpr, { left: -uriData.pctg * wrpr.scrollWidth });
            }
        }
    };
    window.setTimeout(restorePagePos, 60);
};

/* When all resources are loaded, enable these functionalities. */
window.GLFinishLoading = function ()
{
    window.ResetGLCollapseHandlers();
    window.ResetGLCollapsibleSections(true);
    window.GLBringFocusToPromptNotice();
    window.GLLoadDisqus();
    window.GLHandleSessionContinuity();
    window.GLHandleBookmarkJumps();
};

/* Sets the current theme. */
window.SetTheme = function (theme, user_action)
{
    var themes = ['light', 'dark'];
    var hr = (new Date()).getHours();
    var resolved = (6 <= hr && hr < 19 ? 'light' : 'dark');
    var v0_theme = window.GLGetLocalStorage('szTheme', 'unknown');
    if (themes.indexOf(v0_theme) >= 0)
    {
        resolved = v0_theme;
    }
    if (themes.indexOf(theme) >= 0)
    {
        resolved = theme;
    }
    document.documentElement.setAttribute('gl-theme', resolved);
    if (user_action)
    {
        window.GLSetLocalStorage('szTheme', resolved, 60 * 60 * 2);
    }
};
(function ()
{
    window.SetTheme();
    /* Extend the lifetime of user preferred theme
    ** every time the user refreshes the page.
    */
    var preferred = window.GLGetLocalStorage('szTheme');
    if (preferred)
    {
        window.GLSetLocalStorage('szTheme', preferred, 60 * 60 * 2);
    }
})();

/* Pride months. */
(function (month)
{
    if (month == 6 || month == 7 || month == 8)
    {
        window.GLAddClass(document.documentElement, 'gl-show-rainbow');
    }
})((new Date()).getMonth() + 1);

/* Privacy notice. */
window.GLDismissNotice = function(){};
