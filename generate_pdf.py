#!/usr/bin/env python3
"""
Script untuk mengkonversi portfolio HTML ke PDF
Membutuhkan library weasyprint atau pdfkit

Install dependencies:
pip install weasyprint
atau
pip install pdfkit
"""

import os
import sys
from pathlib import Path

def generate_pdf_weasyprint():
    """Generate PDF menggunakan WeasyPrint"""
    try:
        from weasyprint import HTML, CSS
        
        # Path file
        html_file = Path(__file__).parent / 'portfolio-pdf.html'
        pdf_file = Path(__file__).parent / 'Raihan_Faiq_Portfolio.pdf'
        
        print(f"Mengkonversi {html_file} ke PDF...")
        
        # Generate PDF
        HTML(filename=str(html_file)).write_pdf(
            str(pdf_file),
            stylesheets=[
                CSS(string='''
                    @page {
                        size: A4;
                        margin: 1.5cm;
                    }
                    
                    body {
                        font-size: 11pt;
                        line-height: 1.4;
                    }
                    
                    .header {
                        margin-bottom: 30px;
                    }
                    
                    .section {
                        margin-bottom: 25px;
                    }
                    
                    .timeline-item {
                        margin-bottom: 15px;
                        break-inside: avoid;
                    }
                    
                    .project-card,
                    .education-card,
                    .skill-category {
                        break-inside: avoid;
                    }
                ''')
            ]
        )
        
        print(f"✅ PDF berhasil dibuat: {pdf_file}")
        return True
        
    except ImportError:
        print("❌ WeasyPrint tidak terinstall. Install dengan: pip install weasyprint")
        return False
    except Exception as e:
        print(f"❌ Error saat generate PDF dengan WeasyPrint: {e}")
        return False

def generate_pdf_pdfkit():
    """Generate PDF menggunakan pdfkit (membutuhkan wkhtmltopdf)"""
    try:
        import pdfkit
        
        # Path file
        html_file = Path(__file__).parent / 'portfolio-pdf.html'
        pdf_file = Path(__file__).parent / 'Raihan_Faiq_Portfolio.pdf'
        
        print(f"Mengkonversi {html_file} ke PDF menggunakan pdfkit...")
        
        # Options untuk PDF
        options = {
            'page-size': 'A4',
            'margin-top': '1.5cm',
            'margin-right': '1.5cm',
            'margin-bottom': '1.5cm',
            'margin-left': '1.5cm',
            'encoding': "UTF-8",
            'no-outline': None,
            'enable-local-file-access': None
        }
        
        # Generate PDF
        pdfkit.from_file(str(html_file), str(pdf_file), options=options)
        
        print(f"✅ PDF berhasil dibuat: {pdf_file}")
        return True
        
    except ImportError:
        print("❌ pdfkit tidak terinstall. Install dengan: pip install pdfkit")
        print("❌ Juga pastikan wkhtmltopdf terinstall: brew install wkhtmltopdf (macOS)")
        return False
    except Exception as e:
        print(f"❌ Error saat generate PDF dengan pdfkit: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Memulai konversi Portfolio HTML ke PDF...")
    print("="*50)
    
    # Cek apakah file HTML ada
    html_file = Path(__file__).parent / 'portfolio-pdf.html'
    if not html_file.exists():
        print(f"❌ File HTML tidak ditemukan: {html_file}")
        sys.exit(1)
    
    # Coba WeasyPrint terlebih dahulu
    print("🔄 Mencoba WeasyPrint...")
    if generate_pdf_weasyprint():
        return
    
    # Jika WeasyPrint gagal, coba pdfkit
    print("\n🔄 Mencoba pdfkit...")
    if generate_pdf_pdfkit():
        return
    
    # Jika semua gagal
    print("\n❌ Semua metode konversi PDF gagal.")
    print("\n📋 Solusi alternatif:")
    print("1. Buka portfolio-pdf.html di browser")
    print("2. Tekan Ctrl+P (Cmd+P di Mac)")
    print("3. Pilih 'Save as PDF'")
    print("4. Simpan sebagai 'Raihan_Faiq_Portfolio.pdf'")
    
    # Buka file HTML di browser sebagai fallback
    try:
        import webbrowser
        webbrowser.open(f'file://{html_file.absolute()}')
        print(f"\n🌐 Membuka {html_file} di browser...")
    except Exception as e:
        print(f"❌ Gagal membuka browser: {e}")

if __name__ == "__main__":
    main()