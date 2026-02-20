import os
from rembg import remove
from PIL import Image

# Setup paths
base_dir = r"c:\GitHub Repository for b0r1v0j3\public"
input_path = os.path.join(base_dir, 'morpheus.png')
output_path = os.path.join(base_dir, 'morpheus-clear.png')

# Load the original image
input_img = Image.open(input_path)

# Remove the background
print("Removing background from Morpheus image...")
output_img = remove(input_img)

# Save as transparent PNG
output_img.save(output_path)
print(f"Saved transparent image to {output_path}")
