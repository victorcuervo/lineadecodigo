---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7JHJ6KZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz1umC1GYZ9Vqfz3%2Fz5LrXwKoJ%2FuvcIw%2FfPGIZkIirNAiBdfmiIJMzg1USbCN1xlXIit6WcBocEck%2FQfEDwkyTRyCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMvs2v7RCjX2jJvcakKtwDYYl319wYlhlJiUQhcAegf0CMOGF6ybPFDa7ln7kU1er%2FwPu2Pv1MVAn%2BCBk94YL%2FN7saPsgUKmSEgkUl4DS76jk%2BneFpjWZUto%2FfQty16pK2ZGDA1d3t2fgXn%2BCpiCRU%2FMnqiP63EnL8NKeHZ2bN97lxWpp3RcjcoXjn4kshBm4ZmsLnuTND5I46CPEi4%2BGk%2F%2FTDaryKeeVhImS1%2BXaRk2bDDRRW7XCSoslGN8ztKr3xCWG0SenRPmjKH4luOUl4bEdtmmXqEZDTd%2BZDqGdJUcJbTUIkLzDJm0t2bD2BnTc6A74w6sYrGQdHc30zvQuxJakNukh6gxlL2HBRjp8Oaup0qwN8SZ68wVRp73inDuvUNhcqfahpwMYrwFeyjka6CV%2BXZcvQokr2MKnh%2FdIS%2B%2Fd82H9nbYxBf%2FWIUvgNCqLh6ETvO6gKtteLhlR%2BKvnZsFaU21dogql9%2FVlKWxbFz78%2FG0q2knEeIRgdy32eFfmp34zY%2BoOGsbN7M71Jx9LxYAIn3T9BtsASM7nJUfs3nxoMPBrchugosu%2FWVCJFTCkGqcot9k05ZCdDgaCEWr3PGov6tMnHbfomU6GpceTkBbmlmWKtStL5v3Q0vlyCRSj4Q9mWEIudl0jlVGMw1LzPyQY6pgEusEwrYsuERyH1xziMXywOKFUchuKJ7h76j%2FywvmJcJ0Fyx%2BEm9e79iIw%2BNjp%2B%2FJEqfp5sErnh5yj9%2Fuzoek%2BdSFqmv5IV0YLBiyHqwySbcwi0vDr3Q8XMm8TCc2SfoMtStBNyeDVSm7HAdkHwx9ZdoLG71X3UiDgCA%2FTQMb5ODjsQcap28jXlHW0X5PdrrOFOfsAWP4pw33vY%2BtCqEbN0Un%2BlM%2BjQ&X-Amz-Signature=5e940dcb1e5cf6155d80f71c220d345dcfecb9856a4b5c3462c1be50e4eea5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7JHJ6KZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz1umC1GYZ9Vqfz3%2Fz5LrXwKoJ%2FuvcIw%2FfPGIZkIirNAiBdfmiIJMzg1USbCN1xlXIit6WcBocEck%2FQfEDwkyTRyCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMvs2v7RCjX2jJvcakKtwDYYl319wYlhlJiUQhcAegf0CMOGF6ybPFDa7ln7kU1er%2FwPu2Pv1MVAn%2BCBk94YL%2FN7saPsgUKmSEgkUl4DS76jk%2BneFpjWZUto%2FfQty16pK2ZGDA1d3t2fgXn%2BCpiCRU%2FMnqiP63EnL8NKeHZ2bN97lxWpp3RcjcoXjn4kshBm4ZmsLnuTND5I46CPEi4%2BGk%2F%2FTDaryKeeVhImS1%2BXaRk2bDDRRW7XCSoslGN8ztKr3xCWG0SenRPmjKH4luOUl4bEdtmmXqEZDTd%2BZDqGdJUcJbTUIkLzDJm0t2bD2BnTc6A74w6sYrGQdHc30zvQuxJakNukh6gxlL2HBRjp8Oaup0qwN8SZ68wVRp73inDuvUNhcqfahpwMYrwFeyjka6CV%2BXZcvQokr2MKnh%2FdIS%2B%2Fd82H9nbYxBf%2FWIUvgNCqLh6ETvO6gKtteLhlR%2BKvnZsFaU21dogql9%2FVlKWxbFz78%2FG0q2knEeIRgdy32eFfmp34zY%2BoOGsbN7M71Jx9LxYAIn3T9BtsASM7nJUfs3nxoMPBrchugosu%2FWVCJFTCkGqcot9k05ZCdDgaCEWr3PGov6tMnHbfomU6GpceTkBbmlmWKtStL5v3Q0vlyCRSj4Q9mWEIudl0jlVGMw1LzPyQY6pgEusEwrYsuERyH1xziMXywOKFUchuKJ7h76j%2FywvmJcJ0Fyx%2BEm9e79iIw%2BNjp%2B%2FJEqfp5sErnh5yj9%2Fuzoek%2BdSFqmv5IV0YLBiyHqwySbcwi0vDr3Q8XMm8TCc2SfoMtStBNyeDVSm7HAdkHwx9ZdoLG71X3UiDgCA%2FTQMb5ODjsQcap28jXlHW0X5PdrrOFOfsAWP4pw33vY%2BtCqEbN0Un%2BlM%2BjQ&X-Amz-Signature=5633d53e2e45ebe77151cf4f0ae1e170fdc53a41ef26ade5b6747f64049528c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
