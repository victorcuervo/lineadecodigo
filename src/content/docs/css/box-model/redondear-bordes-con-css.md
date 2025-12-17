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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PI2N5LC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL8S7skYpr6RHxGVo%2FfWWpQlO1xzZ66iMqcH%2FH9kWsSAiB7sGNSXIU6MPsoUX2pHbRZwJoyrMlmJWzgIDuV05UQ2Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM7S%2BnF2rWHRbV0sbfKtwDfXk24JZWJwrJlxQltMjzOWSZuLQAzgXDyBK5dTI6kxgEd5l3HRRncg4322KsITVH5LKyr2vm%2B%2FMAcRysKL8N6x9k25MoZu8ZmDdVMPdat0jNRK0s3INN8CDYa7c5UzESm%2B2vIuVgVDbJHgnFANBZXtetE%2Fw6E3scU1NOWGMswiwgsbUyFRe1lzpTgOadpETQUcPe3qPeN3RymhMBAX9b4qbbE56enYGJ6NAOYScA0B918z6VAKZsSzLeFdCw9sCCk0103VUcdDPZsjPlqIwtWOFWj9zRbLJKs%2FAC7B8ZPJRPVOwZeJF%2FAT4ZPxTQaLkR8J9E7nRnuvjNRyoepF7J6K5dy9FeiC5vmYHHkIwoknOvxvWvsYT%2FvZHfDzk8A13I762D%2FyiqZkVFHyFCiOEDlM9ZEObVP7YV9Z2SB306WCbbA5RH8bCYILe5D4OApqK%2Bc7u5NGz527LcA5E9UVG9ZaH79Jz3IRZHtca%2BTmxoMcIAUQ99ZTTbXsotkEnvwNwcMVDZ3s7GDPwP2mENyuo2XjRkgJR55EbTlFYNme2guS%2FM0Y6A6hjN5tAP4AZr3qKFDr9sficoRV0B%2BM0gsGAeWNncxojtGS3gH2xDq%2FmtwbROJqbb6heNG7mJiGIwlMaKygY6pgFTpWSi0L72k44myX4NQLquJhO67jgfVaQeNreLL8CoZkIzx%2F5xYMaor5VMJAUrM4zlvOB9ruRNUe%2BB%2BjPGg%2B7V88p8ArxKy01mqBW51w178yXLMPHIDlSDiI87q%2BVwjDRhpUGgEQaa6JE%2F%2FbEItErxvvH1DTusgheSfPU6pA2WPO55DavuiurtoMARYqkbJ%2Bf11FulrVETMJU21mfftEd%2B57RrPK7H&X-Amz-Signature=e3783374fa4612f6d04d5b3171b228735c75892e49d80ddfb0b19dee14fd3ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PI2N5LC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL8S7skYpr6RHxGVo%2FfWWpQlO1xzZ66iMqcH%2FH9kWsSAiB7sGNSXIU6MPsoUX2pHbRZwJoyrMlmJWzgIDuV05UQ2Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM7S%2BnF2rWHRbV0sbfKtwDfXk24JZWJwrJlxQltMjzOWSZuLQAzgXDyBK5dTI6kxgEd5l3HRRncg4322KsITVH5LKyr2vm%2B%2FMAcRysKL8N6x9k25MoZu8ZmDdVMPdat0jNRK0s3INN8CDYa7c5UzESm%2B2vIuVgVDbJHgnFANBZXtetE%2Fw6E3scU1NOWGMswiwgsbUyFRe1lzpTgOadpETQUcPe3qPeN3RymhMBAX9b4qbbE56enYGJ6NAOYScA0B918z6VAKZsSzLeFdCw9sCCk0103VUcdDPZsjPlqIwtWOFWj9zRbLJKs%2FAC7B8ZPJRPVOwZeJF%2FAT4ZPxTQaLkR8J9E7nRnuvjNRyoepF7J6K5dy9FeiC5vmYHHkIwoknOvxvWvsYT%2FvZHfDzk8A13I762D%2FyiqZkVFHyFCiOEDlM9ZEObVP7YV9Z2SB306WCbbA5RH8bCYILe5D4OApqK%2Bc7u5NGz527LcA5E9UVG9ZaH79Jz3IRZHtca%2BTmxoMcIAUQ99ZTTbXsotkEnvwNwcMVDZ3s7GDPwP2mENyuo2XjRkgJR55EbTlFYNme2guS%2FM0Y6A6hjN5tAP4AZr3qKFDr9sficoRV0B%2BM0gsGAeWNncxojtGS3gH2xDq%2FmtwbROJqbb6heNG7mJiGIwlMaKygY6pgFTpWSi0L72k44myX4NQLquJhO67jgfVaQeNreLL8CoZkIzx%2F5xYMaor5VMJAUrM4zlvOB9ruRNUe%2BB%2BjPGg%2B7V88p8ArxKy01mqBW51w178yXLMPHIDlSDiI87q%2BVwjDRhpUGgEQaa6JE%2F%2FbEItErxvvH1DTusgheSfPU6pA2WPO55DavuiurtoMARYqkbJ%2Bf11FulrVETMJU21mfftEd%2B57RrPK7H&X-Amz-Signature=0f6029d21b71d8ca26c27b4fa87dee58c3c799025cee4f2d2782bf5fd7e7d4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
