import crypto from "crypto";
// ここを埋める
import fs from "fs";

// 鍵を生成する
function generateKey() {
    // 32バイトの暗号論的疑似乱数を生成する
    // ここを埋める
    return crypto.randomBytes(32);
}

// 平文を鍵とAES-256-CBCで暗号化する。次に、暗号文と初期化ベクトル(IV)を、Base64エンコードして返す。
function encrypt64(text, key) {
    // 16バイトの暗号論的疑似乱数を初期化ベクトル (IV) とする
    // ここを埋める
    const iv = crypto.randomBytes(16);

    // 暗号化とBase64エンコード
    // ここを埋める
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    //textを暗号化
    let encryptedBase64 = cipher.update(text, "utf8", "base64");
    //encryptedBase64
    encryptedBase64 += cipher.final("base64");

    console.log("iv", iv.toString("base64"));
    // 暗号文とIVをbase64で返す
    return {
        value: encryptedBase64,
        iv: iv.toString("base64"),
    };
}

// generateKeyの返り値を、JSON形式でファイルに保存する(非同期)
async function writeKey(key) {
    // ここを埋める（fs.promisesで鍵を保存）
    //keyをbase64に変換して保存
    await fs.promises.writeFile("key.json", JSON.stringify({ data: key.toString('base64') }));
}

// encrypt64の返り値を、JSON形式でファイルに保存する(非同期)
async function writeEncrypt64(data) {
    // ここを埋める（fs.promisesで暗号データを保存）
    await fs.promises.writeFile("data.json", JSON.stringify(data));
}

async function readKey() {
    // ここを埋める（return Promise<鍵>）
    let key = await fs.promises.readFile("key.json", "utf-8");
    return Buffer.from(JSON.parse(key).data, 'base64');
}

// ファイルから暗号データを読み込む (非同期)
async function readEncrypt64() {
    // ここを埋める（return Promise<data>）
    //書き込みはデフォルトでutf-8だが読み込みはshit-jisがデフォルト?
    let data =  await fs.promises.readFile("data.json", "utf-8");
    return JSON.parse(data);
}

// 復号して平文を返す
function decrypt64(data, key) {
    // ここを埋める
    //複合機を生成
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, Buffer.from(data.iv, "base64"));
    // 復号
    let decryptedText = decipher.update(data.value, "base64", "utf8");
    decryptedText += decipher.final("utf8");
    return decryptedText;
}

// 指定の平文を暗号化とBase64エンコードし、後に復号する一連の処理
(async () => {
    // 平文
    const text = "Hello, World!";

    // 暗号化とBase64エンコード
    const key = generateKey();
    const encryptedData = encrypt64(text, key);
    // 鍵と暗号データをJSONで保存
    await writeKey(key);
    await writeEncrypt64(encryptedData);

    console.log("Encrypted Text (Base64):", encryptedData.value);

    // Base64デコードと復号
    const storedKey = await readKey();
    const storedEncryptedData = await readEncrypt64();
    const decryptedText = decrypt64(storedEncryptedData, storedKey);

    console.log("Decrypted Text:", decryptedText);
})();
