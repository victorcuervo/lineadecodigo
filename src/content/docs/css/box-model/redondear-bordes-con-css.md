---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4WQBUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRvzpX8wQeQqNnAOBoDN7wnj4%2BlUEztxS9dun4rMM9AIhALBLgnHoxtuDRfiMg9kk6Z6oHBHeROwgOHv9z7k29LajKv8DCHcQABoMNjM3NDIzMTgzODA1Igyb2D2vXM0X97Wggh8q3ANfLVQkIhltYwA0TVpDiHepncDB5udsxqW834%2BUj2ywJ%2FbirBqfiDM3%2Fy8oMK1SRtqqYCTdn0KalUL1IMKSwIREVawNlnSAOhb8CnaoSYE9G4wR0ccEgyR1awhqACws%2BNEXditHzZGTAa0qwBY01rd1FR7LYk2w1oPTRPS6LB5yOn2AOJJRVS7GGz13jdTPxIor8Z7hnKbB2EDBmG%2B4%2FSOPbTUgtOOr%2Bd2HTj4lfr5eh4RKbG7l564TjSZI%2FePNr%2B%2BtkNsikCRJ%2BPkcmGgaHXtc%2Fl3l2h1prV0kzlT%2Fmpe%2FbphRBENawSHfKjKtxgNSHRudmOi%2BKIrpJKIGjVdP005rwp3i9c3TK1gkOGgQurrRghlqbhQ3sSAuEL6SLnXpJ1iW4hMd5m3a6arCwtZHF7W1XPJiDhj3neP2HT2484SHwvlaPEnGSgaqeuvDPbzZiMe10SgmZmB1izWE8MGpOCoaXpikanY1VA66%2BzM9xD5wx5i8s07jTXhYQCgGuONQ1z21%2FBhTJ1W%2FViLU5RQKzUzqe8Hl8qCSe1S%2FedQTfi0O1CdpzMdDGNHbCDSo1HQKcxdOe3y1M9SChIa5mmM%2BF1gLzy1Ej4yUSniGfixLPrT9XeIJdF439ziMk1HzDTCmgonKBjqkAdHjze31YTohtrPTCTVisSI4dzsyiNxRWUIP65zIb18oq0ylem92nK%2Ffz5cG3oor6pzzmUmn8aCT1Y0PnAMpUKJgq9I0gKtWa3tm%2FO6BjO6Yxz%2FWGvoHOK3ir9FEVkWvIekNReKBNLYK8wAPgiuf9sGca4geVNZlcV3QN071EeSx5%2Fccj29yyUrBGWE8wZxm2jrqdYk4qm188umVnPn5Dg6VV7hv&X-Amz-Signature=94ab2250fb55d75386735f428db2a97c638a25da9a4304b66c8574650a9e67ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4WQBUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRvzpX8wQeQqNnAOBoDN7wnj4%2BlUEztxS9dun4rMM9AIhALBLgnHoxtuDRfiMg9kk6Z6oHBHeROwgOHv9z7k29LajKv8DCHcQABoMNjM3NDIzMTgzODA1Igyb2D2vXM0X97Wggh8q3ANfLVQkIhltYwA0TVpDiHepncDB5udsxqW834%2BUj2ywJ%2FbirBqfiDM3%2Fy8oMK1SRtqqYCTdn0KalUL1IMKSwIREVawNlnSAOhb8CnaoSYE9G4wR0ccEgyR1awhqACws%2BNEXditHzZGTAa0qwBY01rd1FR7LYk2w1oPTRPS6LB5yOn2AOJJRVS7GGz13jdTPxIor8Z7hnKbB2EDBmG%2B4%2FSOPbTUgtOOr%2Bd2HTj4lfr5eh4RKbG7l564TjSZI%2FePNr%2B%2BtkNsikCRJ%2BPkcmGgaHXtc%2Fl3l2h1prV0kzlT%2Fmpe%2FbphRBENawSHfKjKtxgNSHRudmOi%2BKIrpJKIGjVdP005rwp3i9c3TK1gkOGgQurrRghlqbhQ3sSAuEL6SLnXpJ1iW4hMd5m3a6arCwtZHF7W1XPJiDhj3neP2HT2484SHwvlaPEnGSgaqeuvDPbzZiMe10SgmZmB1izWE8MGpOCoaXpikanY1VA66%2BzM9xD5wx5i8s07jTXhYQCgGuONQ1z21%2FBhTJ1W%2FViLU5RQKzUzqe8Hl8qCSe1S%2FedQTfi0O1CdpzMdDGNHbCDSo1HQKcxdOe3y1M9SChIa5mmM%2BF1gLzy1Ej4yUSniGfixLPrT9XeIJdF439ziMk1HzDTCmgonKBjqkAdHjze31YTohtrPTCTVisSI4dzsyiNxRWUIP65zIb18oq0ylem92nK%2Ffz5cG3oor6pzzmUmn8aCT1Y0PnAMpUKJgq9I0gKtWa3tm%2FO6BjO6Yxz%2FWGvoHOK3ir9FEVkWvIekNReKBNLYK8wAPgiuf9sGca4geVNZlcV3QN071EeSx5%2Fccj29yyUrBGWE8wZxm2jrqdYk4qm188umVnPn5Dg6VV7hv&X-Amz-Signature=9f33b768740e0bf5bb132bfd199821f675fdd29d427a82838600e37fb416ab7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
