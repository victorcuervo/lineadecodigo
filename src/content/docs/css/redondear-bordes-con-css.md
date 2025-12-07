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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XMPWNU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2AWqZX%2F%2BMrRoq5m%2FaSUftvABggp78kOcCqo%2B2UeJCuAiA1CnE8WTqE9WIMvt2iGT4skR0A9MakwfG2NHe8I56ScCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZv1cgZwC3oY0gD1KtwDsLow7BcndzmO09uobUnqmcIsH0brqBfAFOwQZBzLXHzE7dyOZBk0DvPD%2BJw2lqAVnXoYpH%2FsXWBsBMX9AaeJX4vQHxsUqczEc6eTpWJnLlYSHn%2FPlCNSpBN9WQMOX5AlvnsWsG1vV8o03lR36m6xLDksc6hkReXJwm7h3LIKTOCOfbokaDud%2BAgH9Sh8xBvNbolAuWWx1LgM7rfmqWoEwsaQw7BZJoNW1hHbseVeFEOgySP8T8pIr3%2BXdSfsX4xCWA8TAhl37RxfPgbhuFhv1dmTYA3TCX5B493ZlYl0JmVWK8tEQPZVvachBlbo2DkHCEKyvabISwY3v4QRcS%2BY3qH7TPmvicrNqtcjkeXNecazDMQ4T9jKi9F43%2BfrLTybsnsslKgrQUKXCCGfV0Ed%2BPiCN8WyhZDoyFuoc4iPrlvHgRD5bHKGGl9ta3%2B10Cd%2BcFGQmBXEiRmE%2FAzaC3D8Q4E%2B4hZVvcNsYHb5OTWlT0Ps%2FzqXdWOcGuZf7QBk8C%2BYG37lFZ1PRVF%2B5jOlOWm0XowgevuMuDD3tBqqIL8xOiZWdMj7Uy4nRpPMBvhhl2uIfGq7r9%2BMYPxMccCfMUCm7Guii8tXjfDuV%2FqTZsHKIWSzz9k7zRTxp4%2Fr4YQwx5rVyQY6pgFszk5qt26UcDZgIx%2BrnGWAsLFrR28ErCDnN8hvjeasQjrs9cRRhWgBda%2BnrqKdvXX7QnWSYSLf%2B2RokUWZ2noLfJMG6qQ0aTlot0LIQ8NRmmX%2F7eWqyJfuKzWSHqhrdPJn7tOiCKL5J%2Fs860s26j1lZhL35C3ZfVkFE9eJokmVSFKg6YkNFaXDQObSvYYpNiCm4Yjt6eb35CmISUYe6%2BN87K%2Bjzu8h&X-Amz-Signature=7763045caef9f63bbe8b18da269216d1a03feb859339a3893e781062c961f6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XMPWNU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2AWqZX%2F%2BMrRoq5m%2FaSUftvABggp78kOcCqo%2B2UeJCuAiA1CnE8WTqE9WIMvt2iGT4skR0A9MakwfG2NHe8I56ScCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZv1cgZwC3oY0gD1KtwDsLow7BcndzmO09uobUnqmcIsH0brqBfAFOwQZBzLXHzE7dyOZBk0DvPD%2BJw2lqAVnXoYpH%2FsXWBsBMX9AaeJX4vQHxsUqczEc6eTpWJnLlYSHn%2FPlCNSpBN9WQMOX5AlvnsWsG1vV8o03lR36m6xLDksc6hkReXJwm7h3LIKTOCOfbokaDud%2BAgH9Sh8xBvNbolAuWWx1LgM7rfmqWoEwsaQw7BZJoNW1hHbseVeFEOgySP8T8pIr3%2BXdSfsX4xCWA8TAhl37RxfPgbhuFhv1dmTYA3TCX5B493ZlYl0JmVWK8tEQPZVvachBlbo2DkHCEKyvabISwY3v4QRcS%2BY3qH7TPmvicrNqtcjkeXNecazDMQ4T9jKi9F43%2BfrLTybsnsslKgrQUKXCCGfV0Ed%2BPiCN8WyhZDoyFuoc4iPrlvHgRD5bHKGGl9ta3%2B10Cd%2BcFGQmBXEiRmE%2FAzaC3D8Q4E%2B4hZVvcNsYHb5OTWlT0Ps%2FzqXdWOcGuZf7QBk8C%2BYG37lFZ1PRVF%2B5jOlOWm0XowgevuMuDD3tBqqIL8xOiZWdMj7Uy4nRpPMBvhhl2uIfGq7r9%2BMYPxMccCfMUCm7Guii8tXjfDuV%2FqTZsHKIWSzz9k7zRTxp4%2Fr4YQwx5rVyQY6pgFszk5qt26UcDZgIx%2BrnGWAsLFrR28ErCDnN8hvjeasQjrs9cRRhWgBda%2BnrqKdvXX7QnWSYSLf%2B2RokUWZ2noLfJMG6qQ0aTlot0LIQ8NRmmX%2F7eWqyJfuKzWSHqhrdPJn7tOiCKL5J%2Fs860s26j1lZhL35C3ZfVkFE9eJokmVSFKg6YkNFaXDQObSvYYpNiCm4Yjt6eb35CmISUYe6%2BN87K%2Bjzu8h&X-Amz-Signature=b6eabe228610b0e59caf25f65a66a9362a3709eafc951644e13a314bf66478c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
