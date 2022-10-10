import { rgb } from 'pdf-lib';

export function drawText2(req, page, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl) {
    // Draw a string of text diagonally across the each page
    page.drawText('Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE) Badan Siber dan Sandi Negara.', {
        x: 115,
        y: 28,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('Dokumen digital yang asli dapat diperoleh dengan memindai QR Code, memasukkan kode pada Aplikasi NDE Pemerintah Daerah Provinsi Jawa Barat, atau mengakses', {
        x: 124,
        y: 18,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    // Draw text link footer
    page.drawText('tautan berikut', {
        x: 320,
        y: 8,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText(footerUrl, {
        x: 371,
        y: 8,
        size: 8,
        font: arialRegularFont,
        color: rgb(30/255, 136/255, 229/255),
    })
    // Draw the QRCode
    page.drawImage(QRCodeImagePng, {
        x: 117,
        y: 52,
        width: 40,
        height: 40,
    })
    // Draw the Logo QRCode Manually
    page.drawImage(QRCodeImageLogo, {
        x: 130,
        y: 65,
        width: 15,
        height: 15,
    })
    // Add title on bottom QRCode
    page.drawText(req.body.code, {
        x: 115,
        y: 42,
        size: 7,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
}