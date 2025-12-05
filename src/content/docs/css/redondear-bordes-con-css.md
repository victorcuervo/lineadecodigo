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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELFXIOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEHJV%2B27y8AwiBIW9msnT0Q%2BCkTrJMkwq0IkOv90IhIAiAMiFIHpNMmYElEe%2FGulJbB%2BJBcwquvVcc4No04XAZ6pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8nHG%2FbdDdULug9brKtwD9yTEtdf0Nh4tSI4jnVJ9PeCC7BUqyzU%2B7F7Os5OcYr7JpLYqoUYTC545ELnpiV6sEDO5Xsq6QbEAgLTRxIuIPDAQVt4w9y%2BXVsx7G2cLGwj3ssqHpvb3lNvTu5Lry4mi1kWdVrczKxhuoSu5eX86Ms3DatILDYdrPY1Ou88zdEm738CwiL0zpdn3y87zs1D4ei8PQXRFUqC9ZrRu7TmtpL7HA3k%2BR439gVFj5%2BAHRYgKpPT%2Fjz77M7PP5LbHPgAAaHyh5soqtVBD%2BCLd9UlRwo%2BoxUYaR9vtYYr1BIsfeYNzdf5ZZ%2BD25E229J6oGi7ZFsZ3LxEWafenFAGed1SQ%2F3fpLT5gDOcUbjrWzCfZ3zZ99KnNH2y3NKzB1io7Su7WHgtFcUtSxVwBnhMWsB47Cc1ykSJwDCi8VN0OefoiSgr4hY1dZeS%2Bsm07R3rfhoIr%2Fl9jNR1kLQeHO6bcu%2BciB3c9%2Bc7vaLS4bxu2jW0r8WKMpLJMAcbnvUpe34TlxJkuxctvCMjgIVOh%2FXKAMVahOuJl1drKq3RhWje9PbsKJhnStLjy6uU%2FP0cNcSxUs1n3RynfwzeKyz2XL6fNZSe42QrIbaLyJCmUITsrCCBP9D2Pdyb0tLKMaMPzNugw3qrJyQY6pgEIIq%2Fq2rDkp63UF3yhyl1FT6%2FbeU9Sh2chTx2oXhm5%2BAhvtT3oFgVFd6ni3oTJHt0nXMu2AvGFZn0nXtFOws%2FPCzFneEJNQ8S6fEfbHejO05dWOTdk5ghKgSNOns6sJAcFzuWJeEUYTIJ0zRBYNAT6Y6SuGLC7YDOBJNWFG02RWQ5TPHPKVrPHpLKjlOvn2%2Fc0x6hICN0eE1BKWOYqa%2B1DmMsaB5he&X-Amz-Signature=3bb614077bcac00f8814e451e518088233f2d5efc31e8053872f5be12434331f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELFXIOA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEHJV%2B27y8AwiBIW9msnT0Q%2BCkTrJMkwq0IkOv90IhIAiAMiFIHpNMmYElEe%2FGulJbB%2BJBcwquvVcc4No04XAZ6pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8nHG%2FbdDdULug9brKtwD9yTEtdf0Nh4tSI4jnVJ9PeCC7BUqyzU%2B7F7Os5OcYr7JpLYqoUYTC545ELnpiV6sEDO5Xsq6QbEAgLTRxIuIPDAQVt4w9y%2BXVsx7G2cLGwj3ssqHpvb3lNvTu5Lry4mi1kWdVrczKxhuoSu5eX86Ms3DatILDYdrPY1Ou88zdEm738CwiL0zpdn3y87zs1D4ei8PQXRFUqC9ZrRu7TmtpL7HA3k%2BR439gVFj5%2BAHRYgKpPT%2Fjz77M7PP5LbHPgAAaHyh5soqtVBD%2BCLd9UlRwo%2BoxUYaR9vtYYr1BIsfeYNzdf5ZZ%2BD25E229J6oGi7ZFsZ3LxEWafenFAGed1SQ%2F3fpLT5gDOcUbjrWzCfZ3zZ99KnNH2y3NKzB1io7Su7WHgtFcUtSxVwBnhMWsB47Cc1ykSJwDCi8VN0OefoiSgr4hY1dZeS%2Bsm07R3rfhoIr%2Fl9jNR1kLQeHO6bcu%2BciB3c9%2Bc7vaLS4bxu2jW0r8WKMpLJMAcbnvUpe34TlxJkuxctvCMjgIVOh%2FXKAMVahOuJl1drKq3RhWje9PbsKJhnStLjy6uU%2FP0cNcSxUs1n3RynfwzeKyz2XL6fNZSe42QrIbaLyJCmUITsrCCBP9D2Pdyb0tLKMaMPzNugw3qrJyQY6pgEIIq%2Fq2rDkp63UF3yhyl1FT6%2FbeU9Sh2chTx2oXhm5%2BAhvtT3oFgVFd6ni3oTJHt0nXMu2AvGFZn0nXtFOws%2FPCzFneEJNQ8S6fEfbHejO05dWOTdk5ghKgSNOns6sJAcFzuWJeEUYTIJ0zRBYNAT6Y6SuGLC7YDOBJNWFG02RWQ5TPHPKVrPHpLKjlOvn2%2Fc0x6hICN0eE1BKWOYqa%2B1DmMsaB5he&X-Amz-Signature=f8417a83fecc53a9178c1b0d258806bb76582ee3e46f02d52e0ac3a93052fa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
