
//задача 1 
//Требуется посчитать сумму целых чисел, расположенных между числами 1 и N включительно.
"use sctrict";

    let n= prompt("введите число n: ");
    let sum=0;
    if (n>0 && n!=0) {
        for (let i =1;i<=n;i++)
        sum+=i;
    } else  { 
        for (let i=1;i>=n;i--)
        sum+=i;
    }

console.log(sum);


// задача 2
//Требуется найти самую длинную непрерывную цепочку нулей в последовательности нулей и единиц.

  let result = 0, max_val = 0; 
  let str= prompt("введите строку состояющую из 0 и 1");
  
  for(let i = 0; i < str.length; i++) {
      if(str[i] == '0')
          result +=1;
      else{
          if(max_val < result)
              max_val = result;
          result = 0;
      }
  }
  if(max_val < result)
      max_val = result;
 console.log(max_val);


    //задача 4

    let sum, pr, x, y;
    sum = prompt("Петя, введи 1 подсказку- x+y "); 
    pr = prompt("Петя, введи 2 подсказку-  x*y "); 
    for ( x = 0; x <= 1000; x++) {
        for (y = 0; y <= 1000; y++) {
        if (x + y == sum && x*y == pr) {
       console.log(x);
       console.log(y);
      } 
    }
    };

//задача 5

    let word1  = prompt("слово"); 
    let word2 =  prompt("анограма"); 
    let i;
    if (word1.length != word2.length ) 
        console.log ("не сходится количество символов");
        else  console.log ("сходится количество символов");


    for (i = 0; i < word1.length; ++i) 
    if (word1[i] == word2[i]) {
        console.log("не подходит");//если буквы на одном и том же месте одинаковые
      
    }  else console.log("подходит буквы разные на местах");

    function alphabetize(str) {
        return str.split('').sort().join('');
    }

    if(alphabetize(word1) == alphabetize(word2))  
        console.log("подходит"); 
        else console.log("не подходит"); 

//задача 6

let n =  prompt("введите число n "); 
    for (let i = 0; i < n; ++i) {
        let str =  prompt("введите str из 0 и 1  "); 
      let x;
        //for(i = 0; i < str.length; ++i)
           // x = (x * 2 + str[i] - 48) % 7;
        for(i = 0; i < n; ++i)
           x= parseInt( str, 2 )%7;
        if(x)
           console.log("No");
        else
           console.log("Yes");
    }

//задача 7

    const a =  prompt("введите коэф a"); 
    const b =  prompt("введите коэф b"); 
    const c =  prompt("введите коэф c"); 
    
    let bol1 = false, bol2 = false;
//член, коэффициент при котором равен нулю, опускается (кроме случая, когда все коэффициенты равны нулю, тогда трехчлен состоит из одной цифры 0);
    //if(a == 1 && b == 1 && c == 1) 
    //console.log("x" + "+" + "y" );

    if(a == 0 && b == 0 && c == 0){
        console.log("0");
    }

    if(a != 0){
        console.log(a);
        bol1 = true;
    }

    if(b != 0)
        if(!(a == 0 && b != 0 && c == 0)){ 
            if(b == -1)
            console.log(-x);
            //если есть значение а 
            if(b == 1 && bol1)
            console.log(+x);
            //если нету значения а 
            if(b == 1 && bol1 == 0)
            console.log(x);
            if(b > 1 && bol1)
            console.log("+" + b + "x") ;
            if(b > 1 && bol1 == 0)
            console.log(b+ "x");
            if(b < -1)
            console.log(b+"x") ;
            bol2 = true;
    }

    if(c != 0 )
        if(!(a == 0 && b == 0 && c != 0)){
            if(c == -1)
            console.log("-y");
            if(c == 1 && (bol2 || bol1))
            console.log("+y");
            if(c > 1 && (bol1 || bol2))
            console.log("+" +c + "y");
            if(c < -1)
            console.log( c + "y") ;
    }
 
    if(a == 0 && b != 0 && c == 0)
        if(b == 1)
        console.log("x");
        else if(b == -1)
            console.log("-x");
        else
        console.log(b+ "x");
 
    if(a == 0 && b == 0 && c != 0)
        if(c == 1)
        console.log("y");
        else if(c == -1)
            console.log("-y");
        else
        console.log (c+ "y");
   

//задача 8

function buss() {
       let bus;
       let n =  +prompt("введите количество детей- n"); 
       let m =  +prompt("введите количество взрослых m"); 
       let k =  +prompt("введите k"); 
//взрослых не хватает или мест не хватит
       if (k<3 || m<2) {
             console.log(0);
             return 0;
       } 
//влазят в один автобус
       if (n + m <= k ) { 
           console.log(1); 
            return 0; 
        } 
    
       bus =  parseInt(n/(k-2)); 
       if ((n % (k - 2))>0)  bus++;  

       if (m < bus * 2) {
            console.log(0);  
            return 0;
              
       }

       if (m == bus * 2) {
            console.log(bus); 
            return 0;
       }
       //считаем количество автобусов если учителей оказалось больше 
       if (m > bus * 2) { // Нужно распределить оставшихся учителей
             bus = parseInt((m + n) / k); 
             if ((m + n) % k>0) bus++;
       }
       else { console.log(0);  return 0; }
       console.log(bus);
       return 0;
    }
buss();

//задача 9

function metro() 
{
    let a;
    let n =  +prompt(" N – общее количество станций кольцевой линии"); 
    let i =  +prompt("введите номер станции, на которой Витя садится");
    let j =  +prompt("введите норме станции, на которой он должен выйти");

    if( i < j)  
       a = i + Math.abs(j - n) - 1;
    else
    a = j + Math.abs(i - n) - 1;

    let b = Math.abs(i - j) - 1;


    if(a < b)
       console.log (a);
    else
        console.log(b);
    return 0;
}

metro();


//задача 10

function strFind()
{
    let s =  prompt(" введите строку s состояющую из символов A, G, С, T "); 
    let t =  prompt(" введите строку t состояющую из символов A, G, С, T "); 

    //for ( let i=0; i<s.length; i++)
    //if (s[i] != 'A' || s[i] != 'G' || s[i] != 'C' || s[i] != 'T' ) 
    //s =  prompt(" введите строку s состояющую из символов A, G, С, T "); 
    

    let ind = 0;
    for(let i = 0; i < s.length ; ++i){
        ind = t.indexOf(s[i], ind);
        //console.log(ind);
        if(ind < 0){
           console.log("NO");
            return 0;
        }
    }
    console.log("YES");
    return 0;
}
strFind();