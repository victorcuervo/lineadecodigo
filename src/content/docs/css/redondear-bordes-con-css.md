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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7MFYOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLtAgKY1XRnECUqucUmhtTzfKqTQoIASM%2BKY0dQkFVGQIhAPm3cT8mQB6I%2BaTgyC3buMbzMIi7ArlNdPjVPCdROLvXKv8DCG0QABoMNjM3NDIzMTgzODA1IgzAK1eyq1tXTL%2FOLqIq3ANwvK7Uh40y9DBsBM6G1vmUdxFYRVFAfOXmJluN%2F01ylmRV6Mw5hufK%2FDDzMDRaEASPFSdrTpj49W6027JYX1mwINn%2BrPzU7ImbpzV4rFhjA9mbbGWZ9L7w9Px9kYpOmOMtHygOr76Jd1bkPw5%2Fp6v5Zpih3%2Fev0zozohvS4kSpCWoKh8j27hCbryPNPc8QXJXW8GDKnW9eo9PENldpUvrvzt7GeMjc%2BnF4G0rvj%2FQSQDg%2BXNa8gjrtW5aBDLSz2R74Yyf73J7CaQttXa%2FjKvhur5t3s1WXn5bPBbunWQaLPyoNR2Qdw6WFeYt8ISrj5Yd4ohr%2FC0Rnr593kgGXLRTWmlqafcbuSTK1k0uRzZPBtSlmL5j142THcxIaO6JM5IIFf1c6mRb68Gugkxk4%2BxG%2BNrhT0oQ%2Fcyuaf3gB0hrG9PrjYq4PrOSNLf4qGZawvQoFHs4w%2FYf%2BOoO8%2BAlv1D1JxO%2Bg%2FAthl5%2FuqsGAMlzcivAb7Y9xVA7YHZH6ondEjXYLLcGRlY3VuUzKcGTEiWCydqBVhE5AdJKDYCDUTbsMy26SjwoRBmW5Izntgcg7TwvgYHRcwH%2BcMS5s%2B2S2e1hPcGmpLTgA3xJI4q2QFHhY3g1uyxcmcy76hdyciDCl3s7JBjqkAWv5a2nVenzCrDPzOQSGR8O4QFm5qvPld7UGZDtPEirmvA6XDeZUhqVkHUdXo5TtolkzdwTSCcMIiNmLwyalcL%2BZcSdeqFLb0J3t4a4WeiV2VCEN%2BjVo1PJZICMVhZdQ3JKCtVI2CXyppvpjG8sUT1jku%2BcU%2FQHWm%2B6JaT63Yr2ucIqrhpTbQeHxFYP2BqwXPl69Ddme9rV4tpJ0cRBeaOJuK1Cd&X-Amz-Signature=7aa8270b34833722df7e42125bc92a9c4e17c766f82e8f8cd72ef356b5dc4ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7MFYOR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLtAgKY1XRnECUqucUmhtTzfKqTQoIASM%2BKY0dQkFVGQIhAPm3cT8mQB6I%2BaTgyC3buMbzMIi7ArlNdPjVPCdROLvXKv8DCG0QABoMNjM3NDIzMTgzODA1IgzAK1eyq1tXTL%2FOLqIq3ANwvK7Uh40y9DBsBM6G1vmUdxFYRVFAfOXmJluN%2F01ylmRV6Mw5hufK%2FDDzMDRaEASPFSdrTpj49W6027JYX1mwINn%2BrPzU7ImbpzV4rFhjA9mbbGWZ9L7w9Px9kYpOmOMtHygOr76Jd1bkPw5%2Fp6v5Zpih3%2Fev0zozohvS4kSpCWoKh8j27hCbryPNPc8QXJXW8GDKnW9eo9PENldpUvrvzt7GeMjc%2BnF4G0rvj%2FQSQDg%2BXNa8gjrtW5aBDLSz2R74Yyf73J7CaQttXa%2FjKvhur5t3s1WXn5bPBbunWQaLPyoNR2Qdw6WFeYt8ISrj5Yd4ohr%2FC0Rnr593kgGXLRTWmlqafcbuSTK1k0uRzZPBtSlmL5j142THcxIaO6JM5IIFf1c6mRb68Gugkxk4%2BxG%2BNrhT0oQ%2Fcyuaf3gB0hrG9PrjYq4PrOSNLf4qGZawvQoFHs4w%2FYf%2BOoO8%2BAlv1D1JxO%2Bg%2FAthl5%2FuqsGAMlzcivAb7Y9xVA7YHZH6ondEjXYLLcGRlY3VuUzKcGTEiWCydqBVhE5AdJKDYCDUTbsMy26SjwoRBmW5Izntgcg7TwvgYHRcwH%2BcMS5s%2B2S2e1hPcGmpLTgA3xJI4q2QFHhY3g1uyxcmcy76hdyciDCl3s7JBjqkAWv5a2nVenzCrDPzOQSGR8O4QFm5qvPld7UGZDtPEirmvA6XDeZUhqVkHUdXo5TtolkzdwTSCcMIiNmLwyalcL%2BZcSdeqFLb0J3t4a4WeiV2VCEN%2BjVo1PJZICMVhZdQ3JKCtVI2CXyppvpjG8sUT1jku%2BcU%2FQHWm%2B6JaT63Yr2ucIqrhpTbQeHxFYP2BqwXPl69Ddme9rV4tpJ0cRBeaOJuK1Cd&X-Amz-Signature=5a9e7a818502edcfbd37f92933692b3dff3c18e64a834636adffe3cb72e2f0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
