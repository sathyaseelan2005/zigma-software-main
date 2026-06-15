import os
import glob
import re

def fix_files(directory):
    files = glob.glob(directory + '/**/*.html', recursive=True) + glob.glob(directory + '/**/*.js', recursive=True)
    for filepath in files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Replace visible "Contact Us" or "Contact" with "contact us"
            # We are carefully targeting the nav menu links, footer links, breadcrumbs, title, and headings
            
            content = content.replace('>Contact Us<', '>contact us<')
            content = content.replace('>Contact<', '>contact us<')
            content = content.replace('>Contact Us | Zigma Software<', '>contact us | Zigma Software<')
            
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated text in {filepath}")
        except Exception as e:
            pass

if __name__ == "__main__":
    fix_files('c:/Users/sakthi/Downloads/zigma-software-main/zigma-software-main')
    fix_files('c:/Users/sakthi/Downloads/zigma-software')
