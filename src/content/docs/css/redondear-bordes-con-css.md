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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JQMU5K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0AzjOj%2Bxznzr8puNqDQ%2BUZSJiInfq8RT74K%2BZunlorAiBaojTwR7t7tBeVUlhNjmBbI%2Bx267OH1ghd6RvoNs2CSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVVNCh8r128so4EtEKtwDbvkQOp%2BP6T0G1n9YDJdbz99nmvX6Dc8O%2BOwz2NCriIJLJMlgQkdxhetmYPtA2ZB7Wn%2FcFaBuSFc2tGvzNFLZQ6y3BRn978DIYPF%2F8TM945K8zHpg00D%2FenXQE%2B0hHFglL4OGlMIq0ImNlaGI7b575VWolg%2FSPIb6RFFsLHRAXSZXt0TO3L%2Fzn1g28X8Q4WmvStxvPgHbFvmMXhMYMDzBr5uDu9IlEdJ3xiKU07wH7D6%2BqEF8oVm6QteSZD5oHEc0uzAzLgzsqxlj7tJlH1x%2BipeDXepMEINsUZrxFkTcAq4eaNv0WqvO2XHnuJoA%2B2Uqr40Pl%2FsFHh%2FxdXir2oTO%2F19CLU%2FyFXtGAE66h%2FyerOClbrBn8brOcmMwGiXiH%2BwDCH1UxcLQ3LGHM2ICPlYStyG%2F6vbWA378HmeLCOedadJDYkooCYSf5KwORjIAhU0JlJyU%2Fyso%2FV64zs9v5yPkV2h9ArkrtZJoZxNcInWDyTOcsODxo%2BHuTM1A4M%2BT%2BIN1YMwCHmlKNHKgo3iOWsivsd4QxyEL8mKKxmxh5Relxy6FFBkPdBaC8SifUdukwFvmOnHFj%2BYBHJViBNKNQ5Ucg6%2FjjyJy2qzCBW3cl16VqyajkzkMbJb64n2oDdgw9f%2FcyQY6pgGrUfAg08AF8hVk0S%2BGw9%2FATF6qywMkcDwJ2IpEf8lvfgnPlhMyLB9aDQKA44Wxn2Cxy6zE8tbLaJ43IlKCeK%2BtUwSf248uJjKafUprIVjEohCNCCuxDZQ8%2B%2Bqzz47PyrFAFWnSoOl%2FTH2JkARKEocATa0cP9uy5QqmqdvRizbEPrNc2pxtX2inZ3FxFX27VJVnht1HHtdmrfeGGmpq1TQaNKiMYnRz&X-Amz-Signature=aea0c5815761acf38dabdb40c82fdf523653c1920f4ecf4e0fe4165414ee186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JQMU5K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0AzjOj%2Bxznzr8puNqDQ%2BUZSJiInfq8RT74K%2BZunlorAiBaojTwR7t7tBeVUlhNjmBbI%2Bx267OH1ghd6RvoNs2CSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVVNCh8r128so4EtEKtwDbvkQOp%2BP6T0G1n9YDJdbz99nmvX6Dc8O%2BOwz2NCriIJLJMlgQkdxhetmYPtA2ZB7Wn%2FcFaBuSFc2tGvzNFLZQ6y3BRn978DIYPF%2F8TM945K8zHpg00D%2FenXQE%2B0hHFglL4OGlMIq0ImNlaGI7b575VWolg%2FSPIb6RFFsLHRAXSZXt0TO3L%2Fzn1g28X8Q4WmvStxvPgHbFvmMXhMYMDzBr5uDu9IlEdJ3xiKU07wH7D6%2BqEF8oVm6QteSZD5oHEc0uzAzLgzsqxlj7tJlH1x%2BipeDXepMEINsUZrxFkTcAq4eaNv0WqvO2XHnuJoA%2B2Uqr40Pl%2FsFHh%2FxdXir2oTO%2F19CLU%2FyFXtGAE66h%2FyerOClbrBn8brOcmMwGiXiH%2BwDCH1UxcLQ3LGHM2ICPlYStyG%2F6vbWA378HmeLCOedadJDYkooCYSf5KwORjIAhU0JlJyU%2Fyso%2FV64zs9v5yPkV2h9ArkrtZJoZxNcInWDyTOcsODxo%2BHuTM1A4M%2BT%2BIN1YMwCHmlKNHKgo3iOWsivsd4QxyEL8mKKxmxh5Relxy6FFBkPdBaC8SifUdukwFvmOnHFj%2BYBHJViBNKNQ5Ucg6%2FjjyJy2qzCBW3cl16VqyajkzkMbJb64n2oDdgw9f%2FcyQY6pgGrUfAg08AF8hVk0S%2BGw9%2FATF6qywMkcDwJ2IpEf8lvfgnPlhMyLB9aDQKA44Wxn2Cxy6zE8tbLaJ43IlKCeK%2BtUwSf248uJjKafUprIVjEohCNCCuxDZQ8%2B%2Bqzz47PyrFAFWnSoOl%2FTH2JkARKEocATa0cP9uy5QqmqdvRizbEPrNc2pxtX2inZ3FxFX27VJVnht1HHtdmrfeGGmpq1TQaNKiMYnRz&X-Amz-Signature=ed07e2300513f5490139f7e81c10dffcdf24611285355d0e02c0a4c6ba295c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
