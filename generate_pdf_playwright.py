#!/usr/bin/env python3
"""
Script untuk mengkonversi portfolio HTML ke PDF menggunakan Playwright
Membutuhkan library playwright

Install dependencies:
pip install playwright
playwright install chromium
"""

import asyncio
import os
from pathlib import Path

async def generate_pdf_with_playwright():
    """Generate PDF menggunakan Playwright"""
    try:
        from playwright.async_api import async_playwright
        
        # Path file
        html_file = Path(__file__).parent / 'portfolio-pdf.html'
        pdf_file = Path(__file__).parent / 'Raihan_Faiq_Portfolio.pdf'
        
        print(f"Mengkonversi {html_file} ke PDF menggunakan Playwright...")
        
        async with async_playwright() as p:
            # Launch browser
            browser = await p.chromium.launch()
            page = await browser.new_page()
            
            # Load HTML file
            await page.goto(f'file://{html_file.absolute()}')
            
            # Wait for page to load completely
            await page.wait_for_load_state('networkidle')
            
            # Generate PDF
            await page.pdf(
                path=str(pdf_file),
                format='A4',
                margin={
                    'top': '1.5cm',
                    'right': '1.5cm',
                    'bottom': '1.5cm',
                    'left': '1.5cm'
                },
                print_background=True,
                prefer_css_page_size=True
            )
            
            await browser.close()
        
        print(f"✅ PDF berhasil dibuat: {pdf_file}")
        return True
        
    except ImportError:
        print("❌ Playwright tidak terinstall. Install dengan:")
        print("   pip install playwright")
        print("   playwright install chromium")
        return False
    except Exception as e:
        print(f"❌ Error saat generate PDF dengan Playwright: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Memulai konversi Portfolio HTML ke PDF dengan Playwright...")
    print("="*60)
    
    # Cek apakah file HTML ada
    html_file = Path(__file__).parent / 'portfolio-pdf.html'
    if not html_file.exists():
        print(f"❌ File HTML tidak ditemukan: {html_file}")
        return
    
    # Generate PDF
    success = asyncio.run(generate_pdf_with_playwright())
    
    if not success:
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