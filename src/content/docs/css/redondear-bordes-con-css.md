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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGN66NC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUmJ9jevUGkofkDTTEbBjP5Y%2FBvg9DU0h1IXdWcCWSAiEA4%2Bw7n%2FPpDprCBpghQ6%2F32oqbNlr%2F3LFK8C3%2BgohHky0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BzLAvmDARQrLHByrcA3qCjfoJgR7Nfvws%2FBo4Yjaf68mHJRf%2FhZO7w7K%2B75b4fGRLISWTPepj%2FfqGc%2FgWYBXTnkAA%2BGCy1HzflYmmScrhVhEAMSGpZojhal2CbvGEm%2FZdDFUHCClD5wxGXtqeN%2BUU%2Bw860X1MFR%2B5C3y4NpN4AU9GpneBQ1XuTpBRoUr%2FuyOiNE%2FOTh5SJzobtoB%2FS%2BHvGaj6CIxPNCqz8CdqvE4bFwrVoOt%2BepNIPm2x3lmvTJYfL4XWbOHbUapYw%2F9cUavjZXsy0ylKf271UuDdCGMqfsKhJbrh8OPEihUpJRE1HdifTVQDNyO8sASkSETzknwx7rfEaederU0UIkZG%2FQciqZ1gzb16s%2BwI2jg5pJ6LTLy75x0RKVkbU4vqejIJ6rlHHqXrMRb9uBpTaifT%2FVzlutAzFBDfOhrbKtERaIwc12RH6QIj0r3ZiPfDYRgT1a65qHs6IYic%2FP8CCHuFg9uOKsrGdK4BMUrkjVMfkfYftwfjWKTmJtt4papRY%2FlvIVWMh6i0GGl2Oya2Fpycuc9r0eK1vgJPn12Z2tI4Xm4nBvqNVrVSbdqAOYhEiyA0cRFBoy3uQU8647JT7zYugnDXWYg%2FtBCgS3C41CWHktt8mluqjX5Q3e827NneML6a1ckGOqUBA7mZVoUfGi2Nb4D2DyH8tTRQJAsqBeb7azr8xML82JBZ%2Bu9jICSA6sOqReFluQiZpS3s3W6r%2FGXtx1h%2BcjioTmRApsS2DbIdxs2HYHQ7lF2a0hZYSng5q5oeA8JRzVpxFy6JcbeqUO1yJDrbsVeMOqA%2FkrtJZ5wZgscuhzKJIcIU6V2sHaQVGECZuJn21iBlRJPN4SZ%2FZw49sghpS0KcHaTeAK9D&X-Amz-Signature=28acea08222a7943dab5aeb3be6cc17929eae8b7de482e841f872fcc0ad5bccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGN66NC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIUmJ9jevUGkofkDTTEbBjP5Y%2FBvg9DU0h1IXdWcCWSAiEA4%2Bw7n%2FPpDprCBpghQ6%2F32oqbNlr%2F3LFK8C3%2BgohHky0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2BzLAvmDARQrLHByrcA3qCjfoJgR7Nfvws%2FBo4Yjaf68mHJRf%2FhZO7w7K%2B75b4fGRLISWTPepj%2FfqGc%2FgWYBXTnkAA%2BGCy1HzflYmmScrhVhEAMSGpZojhal2CbvGEm%2FZdDFUHCClD5wxGXtqeN%2BUU%2Bw860X1MFR%2B5C3y4NpN4AU9GpneBQ1XuTpBRoUr%2FuyOiNE%2FOTh5SJzobtoB%2FS%2BHvGaj6CIxPNCqz8CdqvE4bFwrVoOt%2BepNIPm2x3lmvTJYfL4XWbOHbUapYw%2F9cUavjZXsy0ylKf271UuDdCGMqfsKhJbrh8OPEihUpJRE1HdifTVQDNyO8sASkSETzknwx7rfEaederU0UIkZG%2FQciqZ1gzb16s%2BwI2jg5pJ6LTLy75x0RKVkbU4vqejIJ6rlHHqXrMRb9uBpTaifT%2FVzlutAzFBDfOhrbKtERaIwc12RH6QIj0r3ZiPfDYRgT1a65qHs6IYic%2FP8CCHuFg9uOKsrGdK4BMUrkjVMfkfYftwfjWKTmJtt4papRY%2FlvIVWMh6i0GGl2Oya2Fpycuc9r0eK1vgJPn12Z2tI4Xm4nBvqNVrVSbdqAOYhEiyA0cRFBoy3uQU8647JT7zYugnDXWYg%2FtBCgS3C41CWHktt8mluqjX5Q3e827NneML6a1ckGOqUBA7mZVoUfGi2Nb4D2DyH8tTRQJAsqBeb7azr8xML82JBZ%2Bu9jICSA6sOqReFluQiZpS3s3W6r%2FGXtx1h%2BcjioTmRApsS2DbIdxs2HYHQ7lF2a0hZYSng5q5oeA8JRzVpxFy6JcbeqUO1yJDrbsVeMOqA%2FkrtJZ5wZgscuhzKJIcIU6V2sHaQVGECZuJn21iBlRJPN4SZ%2FZw49sghpS0KcHaTeAK9D&X-Amz-Signature=9b60504a97419050b7e91f70afc53048c465efea7a20eb2dd77335a21bce4dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
