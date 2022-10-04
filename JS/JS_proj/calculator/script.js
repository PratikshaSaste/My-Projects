function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
   return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num="")
    {
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getformatted(num);
    }
}

function getFormattedNumber(num){
    var n=Number(num);
    var value=n.toLocalString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.operator(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        if(this.id="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        
        else{
            var output=getOutput();
            var history=getHistory();
             if(output!=""){
                 output=reverseNumberFormat(output);
                 history=history+output;
                 if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                 }
                 else{
                     history=history+this.id;
                     printHistory(history);
                     printOutput("");
                 }
             }
        }
    });
        if(this.id="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                history=history+output;
                if(this.id==""){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
            }
            else{
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
