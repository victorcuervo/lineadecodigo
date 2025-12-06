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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZE4PPJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObmV19jektdX%2BLcLcVLxpICHscTOmjST2wE77wR5y8QIhAMGPiprmiUr8wajvFj4f58GxA4VBnFjh6Vgb1eDRdPjoKv8DCH8QABoMNjM3NDIzMTgzODA1Igzk1seLyAle6w3jkR4q3AOZGWtwF5vaOCFCvinN4d9bJ2xqVCbuNyXVkhq0y27FN4PPLW0Bw11heOxm7W6GNbLy2p0cEMxk6kHCbQrnB5wt36EBWKGhg0nAdQJO%2Fzpi%2BoY0dW8i2yDN4MkXJBtcvGuFsp5bHM98r9b5lCs7wzaYfAOy74JbW%2BHUUmXU8JITE4LdteBZ%2FQZF49blMn0Cq1wbQmEQQuHnrNiH6i93JKwavu5W1ZGK1%2BVYCaC%2Fso1b3ZyFdcIk80nbvr8NjFCWYtq7TRd7LFcwvK2AmuSfJFY%2BuVRzS5XAQxuLAHzuDNTmAbqW7pXsj408pd7y46HFvFeRLxF234tfLWjKIYd0datM940tWeJA5nNFpEPOp51b%2BRUh35jaNZIpYxiVEpj7uLVq%2BTi8A%2Fcnox17jnagy8BeXmcqzeTMM6283Z1Jh4WI8ybCVjVhhgisS6%2BXehpbndPm%2FYYQdjwFMA%2BSa74jjlBQaL9MAuc795aCtTEp7MJlQWndrO%2FUZYJrJW3nP8%2FFTBEcTklu6D8uP%2BpltJSEOU5tRqgyzRjjlm51da0dZ7QOOGMs23lt6KX0uVEZ4fWCkbav4QWST8%2B86XTbvCG0DDhjIShEzN7ljG94n%2FP9GDwBPix%2F94Bn75k2hZZ5ZjCr1NLJBjqkAYlK%2BcEeQxG%2Fmu2OCpyhJku%2Bdvu8bmYum4xPeyOsxCkMkX7Ixe1WLBhK0huI0NGkGFjRDjj43yY%2F3ydTi7yAc2%2BodxfGjNU2rDg%2B4adEGLDPbyUGWLwTwy7kCKlp9cQz4MmRy2PDvmG9aIBxraUo1xvHynuPvuX0usForVNamACAiDQFwviwt3fzKgoS79XmBNAifu1qjtfTV81lu8LakIcH56dY&X-Amz-Signature=930a610572e28f8db31f88ceee804842414e138e1f1da8eba613753b08cd85ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZE4PPJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObmV19jektdX%2BLcLcVLxpICHscTOmjST2wE77wR5y8QIhAMGPiprmiUr8wajvFj4f58GxA4VBnFjh6Vgb1eDRdPjoKv8DCH8QABoMNjM3NDIzMTgzODA1Igzk1seLyAle6w3jkR4q3AOZGWtwF5vaOCFCvinN4d9bJ2xqVCbuNyXVkhq0y27FN4PPLW0Bw11heOxm7W6GNbLy2p0cEMxk6kHCbQrnB5wt36EBWKGhg0nAdQJO%2Fzpi%2BoY0dW8i2yDN4MkXJBtcvGuFsp5bHM98r9b5lCs7wzaYfAOy74JbW%2BHUUmXU8JITE4LdteBZ%2FQZF49blMn0Cq1wbQmEQQuHnrNiH6i93JKwavu5W1ZGK1%2BVYCaC%2Fso1b3ZyFdcIk80nbvr8NjFCWYtq7TRd7LFcwvK2AmuSfJFY%2BuVRzS5XAQxuLAHzuDNTmAbqW7pXsj408pd7y46HFvFeRLxF234tfLWjKIYd0datM940tWeJA5nNFpEPOp51b%2BRUh35jaNZIpYxiVEpj7uLVq%2BTi8A%2Fcnox17jnagy8BeXmcqzeTMM6283Z1Jh4WI8ybCVjVhhgisS6%2BXehpbndPm%2FYYQdjwFMA%2BSa74jjlBQaL9MAuc795aCtTEp7MJlQWndrO%2FUZYJrJW3nP8%2FFTBEcTklu6D8uP%2BpltJSEOU5tRqgyzRjjlm51da0dZ7QOOGMs23lt6KX0uVEZ4fWCkbav4QWST8%2B86XTbvCG0DDhjIShEzN7ljG94n%2FP9GDwBPix%2F94Bn75k2hZZ5ZjCr1NLJBjqkAYlK%2BcEeQxG%2Fmu2OCpyhJku%2Bdvu8bmYum4xPeyOsxCkMkX7Ixe1WLBhK0huI0NGkGFjRDjj43yY%2F3ydTi7yAc2%2BodxfGjNU2rDg%2B4adEGLDPbyUGWLwTwy7kCKlp9cQz4MmRy2PDvmG9aIBxraUo1xvHynuPvuX0usForVNamACAiDQFwviwt3fzKgoS79XmBNAifu1qjtfTV81lu8LakIcH56dY&X-Amz-Signature=cd971fb844ec2550cc1b3659008afe988dfcbbe7f0789db90a3cbe232fc9f1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
