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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5L5VWP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCND46su8jwH9ck4xVFjbHuWxd%2B5yC%2FMmgi7Q%2FRS%2BkwxQIhAOpoM%2Fvn983LQn%2BzzVyugW0VnhmEy6DavyHQp9wHFhg3KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkwLyHgnf%2F5LUJXEwq3AMKVKAuIwJrVdwiU4QuCXtYqM%2BYLJucM2sU5yUFyq4vxhKO9dxN1YKdD6pacMrqSv56LOPTHQGhak3%2BJKicuHeX1MFcgdsEv%2FO%2B23ZQ0DIUoX2b%2FMgabnpjdPSkTxYTWYfJ24YrHOnFLLq9pIW2BsiFA2HjqkeBaO4l%2FvouKW3SDfeXiyOs1RGC%2Flf%2BB%2BmJwcEdBlHQiYzGC8OJ1klwf5cgHByUjVuM5NUXZhNCb0NSM8gQd%2BjYvZrfls0PbNUV3qZvKHtTVGdhkLZGYEArEl5MPKyDEJvUe%2F5P5alble0%2BiIY1WmxVcYlyNu6Q%2Bt49CUkOpzQWW2itW9xT17notgib262GAwu02bwj2ajmZuzKVWUEH8fs%2FXeu1JNnL%2Fobb4g92DTE2BHwm0tUvnlYBlkGITDIBrOtOMoBboCSCcndw7uezzeaD4jRo3y0x1BGMXvpPGH7d3fZEY02wCBosw2WD2f40KbmKthIrToqX3JxP4kJPMY4fgoNkF6lxhBGwmKWi4xeQIcmQqSEtNAowgoKRwcTT0BGtYDsmEOVw4qC76jHPGCWbN%2Bi7%2FcvTV7vfy0k%2B8iuTgN%2FyH4yigo0BAb3jmGkJy0YjCBXr%2B9tyuO6w4PSJGN7BW%2BuQUBeKzCyx9fJBjqkAW6UouIDQtruAD0NJzo7nPSLJI9BxMSYrfnr052Ataru6pE3qwxb%2Fpxl6p9beUepzQ77FNvYIcUgtzYydjmf%2FYPq76Ep45j%2BsLtzaVtzjAHie2P3l5PyhMgZ2bQWIIknlIIIecq4pK6MIJ849jIHEa9CeBZId3Y4WjdCbga7Xo8Q2tQpygCqGiu6U%2Fyeh%2BuW3DUX1OO85Qc%2FwrOFIFhG9RwrQCRn&X-Amz-Signature=84ef37ad8800d8d0523944cd47e2d100e893d0f62cbee948a55a29331a7176d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5L5VWP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCND46su8jwH9ck4xVFjbHuWxd%2B5yC%2FMmgi7Q%2FRS%2BkwxQIhAOpoM%2Fvn983LQn%2BzzVyugW0VnhmEy6DavyHQp9wHFhg3KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkwLyHgnf%2F5LUJXEwq3AMKVKAuIwJrVdwiU4QuCXtYqM%2BYLJucM2sU5yUFyq4vxhKO9dxN1YKdD6pacMrqSv56LOPTHQGhak3%2BJKicuHeX1MFcgdsEv%2FO%2B23ZQ0DIUoX2b%2FMgabnpjdPSkTxYTWYfJ24YrHOnFLLq9pIW2BsiFA2HjqkeBaO4l%2FvouKW3SDfeXiyOs1RGC%2Flf%2BB%2BmJwcEdBlHQiYzGC8OJ1klwf5cgHByUjVuM5NUXZhNCb0NSM8gQd%2BjYvZrfls0PbNUV3qZvKHtTVGdhkLZGYEArEl5MPKyDEJvUe%2F5P5alble0%2BiIY1WmxVcYlyNu6Q%2Bt49CUkOpzQWW2itW9xT17notgib262GAwu02bwj2ajmZuzKVWUEH8fs%2FXeu1JNnL%2Fobb4g92DTE2BHwm0tUvnlYBlkGITDIBrOtOMoBboCSCcndw7uezzeaD4jRo3y0x1BGMXvpPGH7d3fZEY02wCBosw2WD2f40KbmKthIrToqX3JxP4kJPMY4fgoNkF6lxhBGwmKWi4xeQIcmQqSEtNAowgoKRwcTT0BGtYDsmEOVw4qC76jHPGCWbN%2Bi7%2FcvTV7vfy0k%2B8iuTgN%2FyH4yigo0BAb3jmGkJy0YjCBXr%2B9tyuO6w4PSJGN7BW%2BuQUBeKzCyx9fJBjqkAW6UouIDQtruAD0NJzo7nPSLJI9BxMSYrfnr052Ataru6pE3qwxb%2Fpxl6p9beUepzQ77FNvYIcUgtzYydjmf%2FYPq76Ep45j%2BsLtzaVtzjAHie2P3l5PyhMgZ2bQWIIknlIIIecq4pK6MIJ849jIHEa9CeBZId3Y4WjdCbga7Xo8Q2tQpygCqGiu6U%2Fyeh%2BuW3DUX1OO85Qc%2FwrOFIFhG9RwrQCRn&X-Amz-Signature=6e0049610e38a4eb8d55e57f830a2572826c49eb88c594807468e794d0ef82af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
