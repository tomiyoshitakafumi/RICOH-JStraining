﻿const TYPES = {
    PDF: [[
        0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xc3, 0xa4,
        0xc3, 0xbc, 0xc3, 0xb6,
    ]],
    ZIP: [[0x50, 0x4b, 0x03, 0x04, 0x00, 0x00, 0x00], [0x50, 0x4b, 0x05, 0x06, 0x00, 0x00], [0x50, 0x4b, 0x07, 0x08, 0x00, 0x00]],
    GIF: [[0x47, 0x49, 0x46, 0x38, 0x37, 0x61, 0x00, 0x00], [0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x00, 0x00]],
    PNG: [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00]],
};

export function detectFileType(buffer) {
    const data = new Uint8Array(buffer);
    // type
    for (const [type, magicBytes] of Object.entries(TYPES)) {
        //同じtypeでも複数のmagicBytesがある場合があるので、それぞれのmagicBytesに対してチェック
        for (const bytes of magicBytes) {
            //magicBytesがbufferの先頭と完全一致するか
            if (bytes.every((byte, i) => data[i] === byte)) {
                return type;
            }
        }
    }
    return 'UNKNOWN';
}