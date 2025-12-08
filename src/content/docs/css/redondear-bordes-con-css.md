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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYU2NVU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGkxRsdVkAMLJ2EqMZvEUOHrktgaPRrBz%2Fm9rQwfAu4QIgQNFgcnZJ2bp%2FKUUt2moIts6yowPgYPrRMBph4rrI%2BGwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBoTOXqoQrSPp4m%2FCrcA7jU1w%2F7aLtt8Y65Bsf8HVO5R%2BRrb5Zlmo3AB4JAZaJUzYndpjHIBT%2BDmP1PvweSIqKh9Rm%2FGwkFIDODIdEQAqXUgIHAOQQ312v4W7Mjv0o%2FtHCApeLki5f0COAR91zd%2Fqscwr5m4CZtOMhtlPsmu5BGUiYpHhmtvpl%2BwQh%2Fz7PmdYBcbVBzDKJ7wFESTuH%2F6x7K1ojjOPXU9s4XOmNLQ1TpPaK%2Bc0yanLCUh44DPkBFXFxFVX07V5tTMPfMeaC8XKPyemdSaSXTUyvi0BOP3fTch172Ua3M8KwcVzKHFULb1xDBBTMwu3NtKYKPdwThY%2FXfv2NmAw6Sm4xgvr4gm7%2BGdYt08RKytqbah0h3PT9m1qO76IK9AgvaY49SvrbdUhXqxMSsg9iGN7D1IZGo%2FJEs1EEEqcJM01aMOo2E2IYsY%2FgXCdqi3OHUQvCJqgHsNsQQC5utjwjKdSnJNx0Sf0Zo2rVk07%2Bl2IbOGMLpD9mAuz2IOo5uHS2s2YylzqdemJ5SwLpXHUiLg3lrKMdCWr5A%2FvbeOEOeA8FUHy3IR2TT8J6y%2BNqkZ4VWWgb5TfqEkGzLq4HjH%2FOTkME5vTGcBOZwPDoGSwRcJ0F0pzIwfwepAli7pdEF8PbF8P2GMLuA3ckGOqUB1vCQ0Na4iijnxzpGWpLxoCxzcF8yKhls0K0XCIjLLqqjERVdaZ1Zyt1TuPEGvHohz6gOpcb8PrKNAf0ujqYoIkxbqm%2F%2BvaSEwR0zzR8DHLqVjM5tWrEQLhsYYG4u3fkhfRmYlEN0ACarZoT0vMG2%2BE0jJrFI2%2B3xVimgdVdQg5WTWM5WlUlOfliFFrIAewg2PgPRBcBsMBjBQ4ON5AXzymV8mCrT&X-Amz-Signature=6575a16cc228e7c9040af211d6df4f11ad4c1cdaa954009c967b7a082be2a40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYU2NVU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGkxRsdVkAMLJ2EqMZvEUOHrktgaPRrBz%2Fm9rQwfAu4QIgQNFgcnZJ2bp%2FKUUt2moIts6yowPgYPrRMBph4rrI%2BGwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBoTOXqoQrSPp4m%2FCrcA7jU1w%2F7aLtt8Y65Bsf8HVO5R%2BRrb5Zlmo3AB4JAZaJUzYndpjHIBT%2BDmP1PvweSIqKh9Rm%2FGwkFIDODIdEQAqXUgIHAOQQ312v4W7Mjv0o%2FtHCApeLki5f0COAR91zd%2Fqscwr5m4CZtOMhtlPsmu5BGUiYpHhmtvpl%2BwQh%2Fz7PmdYBcbVBzDKJ7wFESTuH%2F6x7K1ojjOPXU9s4XOmNLQ1TpPaK%2Bc0yanLCUh44DPkBFXFxFVX07V5tTMPfMeaC8XKPyemdSaSXTUyvi0BOP3fTch172Ua3M8KwcVzKHFULb1xDBBTMwu3NtKYKPdwThY%2FXfv2NmAw6Sm4xgvr4gm7%2BGdYt08RKytqbah0h3PT9m1qO76IK9AgvaY49SvrbdUhXqxMSsg9iGN7D1IZGo%2FJEs1EEEqcJM01aMOo2E2IYsY%2FgXCdqi3OHUQvCJqgHsNsQQC5utjwjKdSnJNx0Sf0Zo2rVk07%2Bl2IbOGMLpD9mAuz2IOo5uHS2s2YylzqdemJ5SwLpXHUiLg3lrKMdCWr5A%2FvbeOEOeA8FUHy3IR2TT8J6y%2BNqkZ4VWWgb5TfqEkGzLq4HjH%2FOTkME5vTGcBOZwPDoGSwRcJ0F0pzIwfwepAli7pdEF8PbF8P2GMLuA3ckGOqUB1vCQ0Na4iijnxzpGWpLxoCxzcF8yKhls0K0XCIjLLqqjERVdaZ1Zyt1TuPEGvHohz6gOpcb8PrKNAf0ujqYoIkxbqm%2F%2BvaSEwR0zzR8DHLqVjM5tWrEQLhsYYG4u3fkhfRmYlEN0ACarZoT0vMG2%2BE0jJrFI2%2B3xVimgdVdQg5WTWM5WlUlOfliFFrIAewg2PgPRBcBsMBjBQ4ON5AXzymV8mCrT&X-Amz-Signature=80af3de0f7def8b3929657ead252a57e23eb37b0e0bad8cfadb716f1ab5df457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
