import { applyY2KEffect } from "./transformText";
import * as readLine from "readline";

const args = process.argv.slice(2);

if (args.length > 0) {
    const text = args.join(" ");
    console.log("입력 : ", text);
    console.log("변환 결과 : ", applyY2KEffect(text));
    process.exit(0);
}

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Y2K 한글 변환기 CLI");

function promptUser() {
    rl.question("변환할 텍스트를 입력하세요 : ", (input) => {
        if (input.toLowerCase() === "exit") {
            rl.close();
            return;
        }

        console.log("변환 결과 : ", applyY2KEffect(input));
        console.log();
        promptUser();
    })
}

promptUser();

rl.on("close", () => {
    console.log("종료");
    process.exit(0);
})