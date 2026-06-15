import os
import glob

def fix_files(directory):
    for filepath in glob.glob(directory + '/**/*.html', recursive=True) + glob.glob(directory + '/**/*.js', recursive=True):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix links
            content = content.replace('contact us.html', 'contact.html')
            
            # Fix uppercase issues that might have happened during the find/replace
            content = content.replace('contact us Us</a>', 'Contact Us</a>')
            content = content.replace('>contact us</a>', '>Contact</a>')
            content = content.replace('<!-- Top contact us Bar -->', '<!-- Top Contact Bar -->')
            content = content.replace('// Mobile contact us button', '// Mobile Contact button')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
                
            print(f"Processed {filepath}")
        except Exception as e:
            print(f"Error on {filepath}: {e}")

if __name__ == "__main__":
    fix_files('c:/Users/sakthi/Downloads/zigma-software-main/zigma-software-main')
    fix_files('c:/Users/sakthi/Downloads/zigma-software')
