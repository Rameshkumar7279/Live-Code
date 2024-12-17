function run()
{
    let firstcode = document.getElementById("html__space").value;
    let secondcode = document.getElementById("css__space").value;
    let thirdcode = document.getElementById("jscript__space").value;
    let output = document.getElementById("output__box");


    output.contentDocument.body.innerHTML = firstcode + "<style>" + secondcode + "</style>";
    output.contentWindow.eval(thirdcode);
}