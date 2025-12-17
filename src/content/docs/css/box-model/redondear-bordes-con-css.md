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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SWV2B4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZfyzj%2BsKkI8WphHp3xiUOEBkrUF9qplYCDuNxrrOV8QIhAOhW%2Fi%2B733vo70DmHe%2B2VZRAmIYxiMCFYHGS2154ChqeKv8DCHYQABoMNjM3NDIzMTgzODA1IgzNWxB0qrmmXet4k88q3AOMCNWq8O78QxAZg%2FFxjHyEaP730PH4gQLSt9%2BeyPTGKPW2ku7ku6T%2BcM3iF1cgkL2xLmn80RTISHSsUoJkNzgKg8vQHaUr8Nwo%2FQGA3a8fBbf3LcHjj5cXRRLytUtWUlLOlCc2QR%2FD5gmAoyPw35qvt7EQoB7GY0brEKLN57OTraRvx9a10ACH8YE0JADTVLbX2QsEV7WMsvRw%2FSwtVkWFJX6moU7oiwSwSBKS1Si8kuoUJmgxaXkOu3dZhldAqyOndxF7chi0tMzw8PPDYcCegHLCnum%2FYhSBXGdpFWJ1UOf6Qu8u7adcbgknJxXKP5DZCYWuGka10st35DaDPTcPIVDwHOMjEufr12hNZRuarqmDUA%2FF%2BMyixK4BCo8RBgkW93Y0sqoJj9zkTaczx006OeMH5nGco2S9h91HAKkNWpmuIhADIyDjm7wM8TCrfqcCe6Urdzgq84I0NDj1Mtq0pcYOAHdtIBKa6LO5b%2BpI6YKs9JWuyzpTpkqIjRyjzHcfWFXM8IHWgPY6NUqTX3GbYbB9xpnwvwx%2Bg8CkFN4HVUo60X1HbLpbQbJ1lq8H%2BwHoI69FoKrZXVGiXoB1FtB2IGf7cp0hDPI2uIsDZSipZFbWgCrZ6uEqTQUGcDDu6YjKBjqkAYiwvY9dBMTrqWoX2L5dPNq%2BS237I1nmn8x2ElfKUDqBrqS5KLigdtWTn9eOI6JPHn1U53BoDF2tA1mEJ1CnorFNrfYnnxopxNS1ec2NKhZUzovzwITxVgi1kIzjDHER0sR4oS6H5xvVYU2CsA92A8IoSkYDkIh0Q3P967y3hEiHdvFYZH2Qr5FIGaKy93J8j3J2Bdga5gIudiEKjSuWDkjn7LFN&X-Amz-Signature=5e7555ac71c29b22f0e0612cb71ee80a6a2425e94956f3e844150f61fa1fe5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SWV2B4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZfyzj%2BsKkI8WphHp3xiUOEBkrUF9qplYCDuNxrrOV8QIhAOhW%2Fi%2B733vo70DmHe%2B2VZRAmIYxiMCFYHGS2154ChqeKv8DCHYQABoMNjM3NDIzMTgzODA1IgzNWxB0qrmmXet4k88q3AOMCNWq8O78QxAZg%2FFxjHyEaP730PH4gQLSt9%2BeyPTGKPW2ku7ku6T%2BcM3iF1cgkL2xLmn80RTISHSsUoJkNzgKg8vQHaUr8Nwo%2FQGA3a8fBbf3LcHjj5cXRRLytUtWUlLOlCc2QR%2FD5gmAoyPw35qvt7EQoB7GY0brEKLN57OTraRvx9a10ACH8YE0JADTVLbX2QsEV7WMsvRw%2FSwtVkWFJX6moU7oiwSwSBKS1Si8kuoUJmgxaXkOu3dZhldAqyOndxF7chi0tMzw8PPDYcCegHLCnum%2FYhSBXGdpFWJ1UOf6Qu8u7adcbgknJxXKP5DZCYWuGka10st35DaDPTcPIVDwHOMjEufr12hNZRuarqmDUA%2FF%2BMyixK4BCo8RBgkW93Y0sqoJj9zkTaczx006OeMH5nGco2S9h91HAKkNWpmuIhADIyDjm7wM8TCrfqcCe6Urdzgq84I0NDj1Mtq0pcYOAHdtIBKa6LO5b%2BpI6YKs9JWuyzpTpkqIjRyjzHcfWFXM8IHWgPY6NUqTX3GbYbB9xpnwvwx%2Bg8CkFN4HVUo60X1HbLpbQbJ1lq8H%2BwHoI69FoKrZXVGiXoB1FtB2IGf7cp0hDPI2uIsDZSipZFbWgCrZ6uEqTQUGcDDu6YjKBjqkAYiwvY9dBMTrqWoX2L5dPNq%2BS237I1nmn8x2ElfKUDqBrqS5KLigdtWTn9eOI6JPHn1U53BoDF2tA1mEJ1CnorFNrfYnnxopxNS1ec2NKhZUzovzwITxVgi1kIzjDHER0sR4oS6H5xvVYU2CsA92A8IoSkYDkIh0Q3P967y3hEiHdvFYZH2Qr5FIGaKy93J8j3J2Bdga5gIudiEKjSuWDkjn7LFN&X-Amz-Signature=100b9fb316192b19080ee4101ed9d3af3b8a9bea0eebaa38f92115df2c4672c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
