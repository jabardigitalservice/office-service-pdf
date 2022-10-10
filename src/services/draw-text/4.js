import { rgb } from 'pdf-lib';

export function drawText4(req, page, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl) {
    // Draw a string of text diagonally across the each page
    page.drawText('Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE) Badan', {
        x: 90,
        y: 50,
        size: 7,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('Siber dan Sandi Negara. Dokumen digital yang asli dapat diperoleh dengan memindai QR Code, memasukkan kode pada Aplikasi NDE Pemerintah', {
        x: 92,
        y: 40,
        size: 7,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('Daerah Provinsi Jawa Barat, atau mengakses tautan berikut', {
        x: 155,
        y: 30,
        size: 7,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    // Draw text link footer
    page.drawText(footerUrl, {
        x: 343,
        y: 30,
        size: 7,
        font: arialRegularFont,
        color: rgb(30/255, 136/255, 229/255),
    })
    // Draw the QRCode
    page.drawImage(QRCodeImagePng, {
        x: 35,
        y: 20,
        width: 40,
        height: 40,
    })
    // Draw the Logo QRCode Manually
    page.drawImage(QRCodeImageLogo, {
        x: 49,
        y: 34,
        width: 12,
        height: 12,
    })
    // Add title on bottom QRCode
    page.drawText(req.body.code, {
        x: 33,
        y: 13,
        size: 7,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
}