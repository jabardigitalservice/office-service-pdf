import { rgb } from 'pdf-lib';

export function drawText1(req, page, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl) {
    // Draw a string of text diagonally across the each page
    page.drawText('Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi', {
        x: 111,
        y: 53,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('Elektronik (BSrE) Badan Siber dan Sandi Negara. Dokumen digital yang asli dapat diperoleh dengan memindai QR Code,', {
        x: 112,
        y: 43,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    page.drawText('memasukkan kode pada Aplikasi NDE Pemerintah Daerah Provinsi Jawa Barat, atau mengakses tautan berikut', {
        x: 130,
        y: 33,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
    // Draw text link footer
    page.drawText(footerUrl, {
        x: 245,
        y: 23,
        size: 8,
        font: arialRegularFont,
        color: rgb(30/255, 136/255, 229/255),
    })
    // Draw the QRCode
    page.drawImage(QRCodeImagePng, {
        x: 40,
        y: 20,
        width: 45,
        height: 45,
    })
    // Draw the Logo QRCode Manually
    page.drawImage(QRCodeImageLogo, {
        x: 53,
        y: 33,
        width: 20,
        height: 20,
    })
    // Add title on bottom QRCode
    page.drawText(req.body.code, {
        x: 37,
        y: 10,
        size: 8,
        font: arialRegularFont,
        color: rgb(0, 0, 0),
    })
}