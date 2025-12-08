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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGSURKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B1pE%2FPl7Kyf9xEhhd1MuLVCsO%2BcEBxHExA2zTYHsskAIhAPR%2BtnZ2jh0fJ1Tp5JhU18sR%2FEo8H%2FXAkghgWwzfemJcKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXYruVm5EOTIIAx4q3AOBGJsFZ06ZsH4I%2BlLMBl8KYS3qEOi5cVuQOWFtlGpWRuyTUU%2BLLKMRoZEooHdNsF1UcTCkBSG2rkyHa9l7NxNUf0Bj08XSY97ctck0km3e4qCdCHQYomxjNNw9IjF11vAP9Ums8UM5jYV%2BA4NWFf4P4HtjKgZwsgXL77OFZZ3XDXSC%2FM0QoLI5zhN2IfiV83%2FDNyhXXeo4ryUhR%2FytGvKatY9nyeWzxu3oGl8oZ9jWGnC93S2BGgZHovnsMknNH4emt5g5cca1YQsAU0TKOjP8xrbNbHwQCbbs%2FjAqPL7u3mnUW6IdRwCOTML%2B6vwOrnZrKo%2F9KddfYD%2FMsS3KjltDUl4owB4WSwdD9vo7mvP73RMBJ23IGEv49Xq2U8W%2FEYt3agVBGD2gN9VV934ip73zHc4MD72aj%2B4aNJnydCZgt7ZayuaPZFbhVhO%2BqkPRdZxuTK%2BwpgtAuLAcl86dp8TIVnudM%2BAewgKzI2Nnlgt9Vvg%2FBacTk4QiK3lJp5ncCeP97OLTz9gI28eU9tytcLOXTg8ubueZr8udB4UPsix1qzrrR9CbCa3qN24HEthEL54aaZeFwwvqnncE%2FVZHR5RJW5FqfX6OKvOg7n%2BgdiB40B6YaY%2FbU11kDXhUPTCFwtvJBjqkAaD%2B2pDUSq%2Bow6cPHDYk33TTOeREeqCkiXMAQ5eaf6OuR54c4ztUb0PLdAsx7MhCcWkfYR%2F9G%2BGYRIi4VKxDvGQDFRNm3ZfVRX8htkIRHLOCjk5uQuFcXKapUlpEpN5sbzjn%2B5A8uZ63kYO%2BNNMzeDnepmdM4U%2FmtPyfKxhDeGoDWri9sMvCbQIXMVJ17cTJGIvtpF22iGo2apQT7VoXjrqYQPXe&X-Amz-Signature=956ad6779dfb19e97ed792e3d09d48c653267fc6af99024d9621290814a060e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGSURKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B1pE%2FPl7Kyf9xEhhd1MuLVCsO%2BcEBxHExA2zTYHsskAIhAPR%2BtnZ2jh0fJ1Tp5JhU18sR%2FEo8H%2FXAkghgWwzfemJcKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXYruVm5EOTIIAx4q3AOBGJsFZ06ZsH4I%2BlLMBl8KYS3qEOi5cVuQOWFtlGpWRuyTUU%2BLLKMRoZEooHdNsF1UcTCkBSG2rkyHa9l7NxNUf0Bj08XSY97ctck0km3e4qCdCHQYomxjNNw9IjF11vAP9Ums8UM5jYV%2BA4NWFf4P4HtjKgZwsgXL77OFZZ3XDXSC%2FM0QoLI5zhN2IfiV83%2FDNyhXXeo4ryUhR%2FytGvKatY9nyeWzxu3oGl8oZ9jWGnC93S2BGgZHovnsMknNH4emt5g5cca1YQsAU0TKOjP8xrbNbHwQCbbs%2FjAqPL7u3mnUW6IdRwCOTML%2B6vwOrnZrKo%2F9KddfYD%2FMsS3KjltDUl4owB4WSwdD9vo7mvP73RMBJ23IGEv49Xq2U8W%2FEYt3agVBGD2gN9VV934ip73zHc4MD72aj%2B4aNJnydCZgt7ZayuaPZFbhVhO%2BqkPRdZxuTK%2BwpgtAuLAcl86dp8TIVnudM%2BAewgKzI2Nnlgt9Vvg%2FBacTk4QiK3lJp5ncCeP97OLTz9gI28eU9tytcLOXTg8ubueZr8udB4UPsix1qzrrR9CbCa3qN24HEthEL54aaZeFwwvqnncE%2FVZHR5RJW5FqfX6OKvOg7n%2BgdiB40B6YaY%2FbU11kDXhUPTCFwtvJBjqkAaD%2B2pDUSq%2Bow6cPHDYk33TTOeREeqCkiXMAQ5eaf6OuR54c4ztUb0PLdAsx7MhCcWkfYR%2F9G%2BGYRIi4VKxDvGQDFRNm3ZfVRX8htkIRHLOCjk5uQuFcXKapUlpEpN5sbzjn%2B5A8uZ63kYO%2BNNMzeDnepmdM4U%2FmtPyfKxhDeGoDWri9sMvCbQIXMVJ17cTJGIvtpF22iGo2apQT7VoXjrqYQPXe&X-Amz-Signature=47d02e6dcbb135a1ae1692b6c034916d6a139c80c59cbc148a9a960d0300a4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
