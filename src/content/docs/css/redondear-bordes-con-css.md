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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2KKYCB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOUGD%2Bgs%2F%2B%2FHT4GFdCG8H5Dxsl3qA%2FlxgxyFMSXWG7RAiAfOuJ7xi4yYw42Qdy4pjlyvtzto%2BrH0Y7eC38blM40dyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMstDVzW8n6g%2FoQs29KtwDXIvuJrgW2Cd4Ha9Lvq2U%2FkpNE%2B2aNWBQNJLsjX%2BpZ%2Br9oqxzv747I2IRRqXfAxdscphvdqVwEOXsgTTBF9RM2GfLrZ0%2B6%2FfNPqo0K7TldMsjHYTvMCmguIURPK6aLdkTS3qNRp%2F7dcIb38zrntU9mcGerhGsIB9ccEEMcRYMwxcFg%2B4hIEzxf2fFQ%2B9wIlZtt8eBFo0f3KT0ylNE3SQFmB0I24xR7nxkeNDMVmk6T5UuVpUGs33lXRxdf9cbT%2FIEQbK2IDOkHb2lxJ1RonjuExMXw5PNRJEoy1b8jk%2B1RHW6g5rY5eD1svPjw5awOCVcA6UBoe41sO0POOCv6dYb%2BgcCJ6ZfiM2Ze13vfssftrNYd7ttpYqWZYu36g9jO3ltGGLR%2BXE2jL04rG%2Bi%2FBgr0eN94jilL697LwfANU2vYtVyaGUamMujSj3wYLDQijpY8MemOVqhDFSo0bDtO2tbNzIVD9WpD14lecI186Rhxmf%2BWxgB63YjmU1hfFqZnQ87llw4%2F201xZyVfEoj2%2FR7hxx9dsCl%2Bq%2Bla1plMrUWnikaMXU8SiEmkEbileHjkExp0MfaB%2FxJrheSjg1k3GOP4jkVquo%2FzjFVU2yDO%2BW0l8ERH6hKBFSp0OG0uegw%2BOjdyQY6pgHL%2F02I7m3nHisVf%2FdlSd58uK2EQXqKCcchSR5K8ph%2Bx3tk%2B3CVCFRpFkdDPgpQfepFixZb9fcMp7pGgcYlN1mHwsdgBryGnsFuztYzx%2FP0B9HIQwLfcmJcVReiMm%2BiQRpuA1Iyod%2FChEHYObC6fTL1kAG2tBufbvBsBDEKOPsaN3Y696ISqcPGwKsvZuAl1JXp54jSQ6NznHN8Z22UTrGpnelgtPEH&X-Amz-Signature=1abefdfe4483dbd6cb7709cea58960fae899fa8db0ddd7b87cd94b9933f6a48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2KKYCB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOUGD%2Bgs%2F%2B%2FHT4GFdCG8H5Dxsl3qA%2FlxgxyFMSXWG7RAiAfOuJ7xi4yYw42Qdy4pjlyvtzto%2BrH0Y7eC38blM40dyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMstDVzW8n6g%2FoQs29KtwDXIvuJrgW2Cd4Ha9Lvq2U%2FkpNE%2B2aNWBQNJLsjX%2BpZ%2Br9oqxzv747I2IRRqXfAxdscphvdqVwEOXsgTTBF9RM2GfLrZ0%2B6%2FfNPqo0K7TldMsjHYTvMCmguIURPK6aLdkTS3qNRp%2F7dcIb38zrntU9mcGerhGsIB9ccEEMcRYMwxcFg%2B4hIEzxf2fFQ%2B9wIlZtt8eBFo0f3KT0ylNE3SQFmB0I24xR7nxkeNDMVmk6T5UuVpUGs33lXRxdf9cbT%2FIEQbK2IDOkHb2lxJ1RonjuExMXw5PNRJEoy1b8jk%2B1RHW6g5rY5eD1svPjw5awOCVcA6UBoe41sO0POOCv6dYb%2BgcCJ6ZfiM2Ze13vfssftrNYd7ttpYqWZYu36g9jO3ltGGLR%2BXE2jL04rG%2Bi%2FBgr0eN94jilL697LwfANU2vYtVyaGUamMujSj3wYLDQijpY8MemOVqhDFSo0bDtO2tbNzIVD9WpD14lecI186Rhxmf%2BWxgB63YjmU1hfFqZnQ87llw4%2F201xZyVfEoj2%2FR7hxx9dsCl%2Bq%2Bla1plMrUWnikaMXU8SiEmkEbileHjkExp0MfaB%2FxJrheSjg1k3GOP4jkVquo%2FzjFVU2yDO%2BW0l8ERH6hKBFSp0OG0uegw%2BOjdyQY6pgHL%2F02I7m3nHisVf%2FdlSd58uK2EQXqKCcchSR5K8ph%2Bx3tk%2B3CVCFRpFkdDPgpQfepFixZb9fcMp7pGgcYlN1mHwsdgBryGnsFuztYzx%2FP0B9HIQwLfcmJcVReiMm%2BiQRpuA1Iyod%2FChEHYObC6fTL1kAG2tBufbvBsBDEKOPsaN3Y696ISqcPGwKsvZuAl1JXp54jSQ6NznHN8Z22UTrGpnelgtPEH&X-Amz-Signature=17b5b9435898936dff49dbb374daf98944036ea469b15fa3f0cefd1b60515fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
