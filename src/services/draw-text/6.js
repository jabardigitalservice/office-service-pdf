import { rgb } from 'pdf-lib';

export function drawText6(req, page, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl) {
    // Draw a string of text diagonally across the each page
    page.drawText('Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi', {
        x: 111,
        y: 33,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('Elektronik (BSrE) Badan Siber dan Sandi Negara. Dokumen digital yang asli dapat diperoleh dengan memindai QR Code atau', {
        x: 105,
        y: 23,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('memasukkan kode pada Aplikasi NDE Pemerintah Daerah Provinsi Jawa Barat.', {
        x: 185,
        y: 13,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    // Draw the QRCode
    page.drawImage(QRCodeImagePng, {
        x: 42,
        y: 10,
        width: 35,
        height: 35,
    })
    // Draw the Logo QRCode Manually
    page.drawImage(QRCodeImageLogo, {
        x: 52,
        y: 20,
        width: 15,
        height: 15,
    })
    // Add title on bottom QRCode
    page.drawText(req.body.code, {
        x: 36,
        y: 2,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
}