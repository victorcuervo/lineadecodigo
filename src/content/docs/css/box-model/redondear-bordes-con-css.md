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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEPXUVSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRD9pftekymk49zHQk05AW4jGpnj86P0PY1brU2miWAiA5b5Pebyv693%2Berj%2BUXxaExEa0lDONknotAHnr7k6JRyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTdbF7b8dRjy6ESD0KtwD%2BI92SkOlxKa1PNcEaalOiodlaOHEj%2BMX6kearCzlHMBdrGiuu71c72%2BHzVjw4B6Rqd9k22RBcExCNp1JBO2K4lnsEcNPo9VpuHNFheQrbK7rSajLP6ibcndwzGGdf9x0zt%2FWcxYgJgme4F7d95CgSvtjAmNgPGA6zZy8bLONxMN%2FzUum76xCdhdpIUHfYIJ%2BeypMs5QmvkATCPaHUVPNT1LVoKh9tjsqboNuWf8Gp%2FMtIM9nMiAqklKyD1V8zlD2JveQ%2BJIBtuGW7Fx04%2BDj2QdpKtunLHURzXqB2fxR5dJ2m9eGOTecWME1z9oiQ%2BLT7agXvjk%2BU1sg%2BV1votBgz1CQx4PlwXk1nHiJmdP7aJXonB%2B4hCjS7r%2BfRe02VU0poWcAp1e%2F5QwWuV%2FDGN8bRkcQhTAwEDOd2VPWMEiqiwRCgzhceg5Zg2t9C5H8GFT448nRxW5o04D%2FIQ%2BK5KT7IAna1nD8d%2BPal2X3GaBUJPXTxTzmIssgWXjXmMjCZJpYjAzVNitQsESLckzlvqwvaG3yWyV23lb3%2BAO%2FKYeGcQBUVITsj80uKXU91ruMIYiaNIIAXrWdOe1sU6Ps%2FfHzTWoFXoTvxrniKLXdcVqSJQA32hP%2Fg76%2F7gA18U0wrYKJygY6pgFuixWRbuSn6iplAn4LXPnAo3q6yfYJEz5Pi0BRDcjKVw3Do8mr6GMbk7CdUotSXrnRNhAlN8qDwYxOELsQYFv7JW7lvxi6xYK2n5RgbcW6u7N4a3T4VljPjyA1THHpekrAA6mlZQO4GLYd6TB0IkSNxeJsKh9JYTJrCw63fN1luIcYqLAv%2BZOZNn57p3HLNAQVZ2H4X%2BDIoFZK4fM0Ny31fwsQI8xp&X-Amz-Signature=9b2d69c1e2dbcf718bb12dcd11da628088907d0026671ae4fc8182bd0355c614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEPXUVSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRD9pftekymk49zHQk05AW4jGpnj86P0PY1brU2miWAiA5b5Pebyv693%2Berj%2BUXxaExEa0lDONknotAHnr7k6JRyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTdbF7b8dRjy6ESD0KtwD%2BI92SkOlxKa1PNcEaalOiodlaOHEj%2BMX6kearCzlHMBdrGiuu71c72%2BHzVjw4B6Rqd9k22RBcExCNp1JBO2K4lnsEcNPo9VpuHNFheQrbK7rSajLP6ibcndwzGGdf9x0zt%2FWcxYgJgme4F7d95CgSvtjAmNgPGA6zZy8bLONxMN%2FzUum76xCdhdpIUHfYIJ%2BeypMs5QmvkATCPaHUVPNT1LVoKh9tjsqboNuWf8Gp%2FMtIM9nMiAqklKyD1V8zlD2JveQ%2BJIBtuGW7Fx04%2BDj2QdpKtunLHURzXqB2fxR5dJ2m9eGOTecWME1z9oiQ%2BLT7agXvjk%2BU1sg%2BV1votBgz1CQx4PlwXk1nHiJmdP7aJXonB%2B4hCjS7r%2BfRe02VU0poWcAp1e%2F5QwWuV%2FDGN8bRkcQhTAwEDOd2VPWMEiqiwRCgzhceg5Zg2t9C5H8GFT448nRxW5o04D%2FIQ%2BK5KT7IAna1nD8d%2BPal2X3GaBUJPXTxTzmIssgWXjXmMjCZJpYjAzVNitQsESLckzlvqwvaG3yWyV23lb3%2BAO%2FKYeGcQBUVITsj80uKXU91ruMIYiaNIIAXrWdOe1sU6Ps%2FfHzTWoFXoTvxrniKLXdcVqSJQA32hP%2Fg76%2F7gA18U0wrYKJygY6pgFuixWRbuSn6iplAn4LXPnAo3q6yfYJEz5Pi0BRDcjKVw3Do8mr6GMbk7CdUotSXrnRNhAlN8qDwYxOELsQYFv7JW7lvxi6xYK2n5RgbcW6u7N4a3T4VljPjyA1THHpekrAA6mlZQO4GLYd6TB0IkSNxeJsKh9JYTJrCw63fN1luIcYqLAv%2BZOZNn57p3HLNAQVZ2H4X%2BDIoFZK4fM0Ny31fwsQI8xp&X-Amz-Signature=b88466fb77554cb631bddf33a9634a9fff2454e7f1763930903a862685b97122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
