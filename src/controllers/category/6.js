import convert from 'convert-length';
import { drawText6 } from '../../services/draw-text/6.js'

export function drawTemplate6(req, pages, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl) {
    for (const page of pages) {
        let { width, height } = page.getSize();

        // Convert from point (pt) to centimeter (cm)
        width = Math.ceil(convert(width, 'pt', 'cm'));
        height = Math.ceil(convert(height, 'pt', 'cm'));
        // this document only potrait mode
        drawText6(req, page, arialRegularFont, QRCodeImagePng, QRCodeImageLogo, footerUrl)
    }
}