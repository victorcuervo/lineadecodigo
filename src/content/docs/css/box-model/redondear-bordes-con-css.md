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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ED536MO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExO7T%2F8P38dw1DfqJUAuKpvpKuGDD1H2kGBkdcW1ujWAiASCQb45XtrvrJ0%2FS2v9%2BYNvByjBZQXHB2siw2tRDI91Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMyXXDQgrQljPrXscAKtwDd3nrBnCySj0gfLGIl4Fki8L8M5CJwqN%2BnWI88oL4B87rHMTLSpkpHr6VrOrWFeDIeW3t0d%2Bf6WUKvLA5hU6blZp7j%2FVAQCEqXDOOtuTbMmhTQDLrck9JfD%2FhmYw%2BMuQ%2FjTBYWVdqxCngvXUHRqgJ%2FQADK%2BwB0ryraUQzhdkywbe%2FENyzz4H1epSqaSGf0ry2bHIusQTdB%2BPacdiSDsAQRpP328SH2TX2%2FhTsT5gQszJowIvNy8poSrprnXe6ruRtNTeOyYJt9F3Kkir%2BxazkSSVZAuDDH7oDi7BjhsUzdCVtiM5FOJ9IPv78yDrf6VTqQQfXvyA%2BBmpY%2Boj532FZy%2BXjC30XyZs%2B%2BWRZxu2to4vvHOpRbR6hwVYurQi0YjuS69DvdMKewDedcMkLhDveIkhU%2BsMiJV7HCoTjAzXrrkHrInTPrkHfPCoIBetRmCDAzC%2B0fwUABqcdztvpHOmV%2FHFQEOLA4mmevo5QmkIT6%2Bo4bXwelXnmA9oGzjAkTKyACOVRI0U43oruwfzw%2FUHq%2F%2B5ta6ev3C5p07d5vNiuNqNt8jx1wLU%2FXPnU36oG2BdwX55q3x892YsMEdoZR6jmGS3Pm1WjITJEdAkVwrR07VwqnggUxGMGlBOtzfowu7eJygY6pgFiKLM2cJbzBLPY9psCJVsORJpLfaOU9pLR%2BjrR9yl%2FF5vnYoBzC3byd8FkxpviesqlNgFfC5hTC44uUmZD43KgyuCGmQa7SCzHof%2F%2BZrLxVbG0TzX0esWyjdWmGYtjMHzlaqiLTI0EtfWufkcF%2BFVvvVzsKxtrIRS3h4wSyrCTEP6lj0x0NxAk9QXGXayuYQLr5ci8ZS5XmwNpf86BGMyJ6JXRFb2Q&X-Amz-Signature=5a2f9bad8771f76c10100344190c17176af548dcab44fdc9c5252fd41587170e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ED536MO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExO7T%2F8P38dw1DfqJUAuKpvpKuGDD1H2kGBkdcW1ujWAiASCQb45XtrvrJ0%2FS2v9%2BYNvByjBZQXHB2siw2tRDI91Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMyXXDQgrQljPrXscAKtwDd3nrBnCySj0gfLGIl4Fki8L8M5CJwqN%2BnWI88oL4B87rHMTLSpkpHr6VrOrWFeDIeW3t0d%2Bf6WUKvLA5hU6blZp7j%2FVAQCEqXDOOtuTbMmhTQDLrck9JfD%2FhmYw%2BMuQ%2FjTBYWVdqxCngvXUHRqgJ%2FQADK%2BwB0ryraUQzhdkywbe%2FENyzz4H1epSqaSGf0ry2bHIusQTdB%2BPacdiSDsAQRpP328SH2TX2%2FhTsT5gQszJowIvNy8poSrprnXe6ruRtNTeOyYJt9F3Kkir%2BxazkSSVZAuDDH7oDi7BjhsUzdCVtiM5FOJ9IPv78yDrf6VTqQQfXvyA%2BBmpY%2Boj532FZy%2BXjC30XyZs%2B%2BWRZxu2to4vvHOpRbR6hwVYurQi0YjuS69DvdMKewDedcMkLhDveIkhU%2BsMiJV7HCoTjAzXrrkHrInTPrkHfPCoIBetRmCDAzC%2B0fwUABqcdztvpHOmV%2FHFQEOLA4mmevo5QmkIT6%2Bo4bXwelXnmA9oGzjAkTKyACOVRI0U43oruwfzw%2FUHq%2F%2B5ta6ev3C5p07d5vNiuNqNt8jx1wLU%2FXPnU36oG2BdwX55q3x892YsMEdoZR6jmGS3Pm1WjITJEdAkVwrR07VwqnggUxGMGlBOtzfowu7eJygY6pgFiKLM2cJbzBLPY9psCJVsORJpLfaOU9pLR%2BjrR9yl%2FF5vnYoBzC3byd8FkxpviesqlNgFfC5hTC44uUmZD43KgyuCGmQa7SCzHof%2F%2BZrLxVbG0TzX0esWyjdWmGYtjMHzlaqiLTI0EtfWufkcF%2BFVvvVzsKxtrIRS3h4wSyrCTEP6lj0x0NxAk9QXGXayuYQLr5ci8ZS5XmwNpf86BGMyJ6JXRFb2Q&X-Amz-Signature=d545df278f3a72231ce1c80b5f81f90909b233913dc8aa57b45513f3dac7bdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
