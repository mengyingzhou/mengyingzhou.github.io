from docx import Document
import os
from PIL import Image
from io import BytesIO
import zipfile

# Load the document
doc_path = "./material/2019-2.docx"
doc = Document(doc_path)

# Extract images
image_dir = "2019/img"
os.makedirs(image_dir, exist_ok=True)
image_list = []

# Helper function to extract image bytes
def extract_images(doc):
    rels = doc.part._rels
    image_data = []
    for rel in rels:
        rel = rels[rel]
        if "image" in rel.target_ref:
            image_bytes = rel.target_part.blob
            image_data.append(image_bytes)
    return image_data

raw_images = extract_images(doc)
for i, img_bytes in enumerate(raw_images):
    image = Image.open(BytesIO(img_bytes))
    img_path = os.path.join(image_dir, f"icsc{i+1}.png")
    image.save(img_path)
    image_list.append(img_path)