---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAQ72SP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDsbrbmxGETvcjtr6223I6DUYz375DmUHR6vNtpXCIG4AiA1lFUyyTBSa9EL6jcd01K1eXLvjqmf8vcIFSKlfhBtAir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMguvMyfn7uEbCeTzLKtwDemRoXuQvCnxSs0zhKLjIEpVWVvnrNsbVh0WuRccKDtiGN8200RSt%2F%2FCTB%2FT8hm8Wvw9ga1VBJPfcXLVZZqTv1WOGDiVEL3MVj21DKaTuYUDJttkI%2BAD0aHrf6XGA4Qrr690PORPr%2BcJ%2F3ucKJ1wRZ5F5igPGLXD96F7Ti5yJVvzAgfJV5BGA%2BdLcf7dYpVw%2BkbRc%2B0HCvQO7siorHKRbHt2q9Dc7qN83B%2BsEFK2JjSQfCDX44nRPF926UA9p5MMScPK6DsZi%2Fnxle6fiprBC660R%2BOMMqJwg8QPiBKcDCZarPccE3qV84fhm1jKUNb4Vj4ZrEx43MIi9Zb1jb9XXU%2FuXbeH9nrNYSb27qTZHOvg%2B38FKuH6QVmILGtdZjMuQW1nZerx2A%2BgBL3Ag3DuKpuPLD4ryCz3YdNwKMYiw6VQSQc3IazmhwiuUmf3PO2X7VXYFIK4JIXnsBMyYFnBP%2F6NkicA3LHyne2kllYXbMOsjcfVxnWSl4qQKuaenkauuEaPJKXXHuB1fNsSmyAGIiDNXWrip%2B5RLSOIEcCeXuYYpZDFeOXSC5sWx3rXrd94SkT367DSb%2FDw4PWMO2D0XWD6TMlLvPhvj%2Bfy23Dm4sfxcQkeR1pgzm4ZWD6wwidzCyQY6pgHlFXvQxdnaDUg%2FCyKWeO7O%2BessIq74%2FDAcDuFaMDacLA1cPCZlY0KhqRQKlp%2FDCBMpsbnsuNA5HKE8eTcIrpYQHPJZK388L%2BpbdF%2BxTndKpv4xj%2BWigX2VTU8hSfEVN0tZliUQTo9KgR8iiJqEIbMfSk8Qzu9LbKBNO3LAB7VamPw6yk0PcfJoWt2dcynaulEoVuKG65%2Bkh4hxHJqBTZuGcCT0OrF9&X-Amz-Signature=947a59789f586513884172e9c796e4923a2aa7b6eec12b4cbc28592036673d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCAQ72SP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDsbrbmxGETvcjtr6223I6DUYz375DmUHR6vNtpXCIG4AiA1lFUyyTBSa9EL6jcd01K1eXLvjqmf8vcIFSKlfhBtAir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMguvMyfn7uEbCeTzLKtwDemRoXuQvCnxSs0zhKLjIEpVWVvnrNsbVh0WuRccKDtiGN8200RSt%2F%2FCTB%2FT8hm8Wvw9ga1VBJPfcXLVZZqTv1WOGDiVEL3MVj21DKaTuYUDJttkI%2BAD0aHrf6XGA4Qrr690PORPr%2BcJ%2F3ucKJ1wRZ5F5igPGLXD96F7Ti5yJVvzAgfJV5BGA%2BdLcf7dYpVw%2BkbRc%2B0HCvQO7siorHKRbHt2q9Dc7qN83B%2BsEFK2JjSQfCDX44nRPF926UA9p5MMScPK6DsZi%2Fnxle6fiprBC660R%2BOMMqJwg8QPiBKcDCZarPccE3qV84fhm1jKUNb4Vj4ZrEx43MIi9Zb1jb9XXU%2FuXbeH9nrNYSb27qTZHOvg%2B38FKuH6QVmILGtdZjMuQW1nZerx2A%2BgBL3Ag3DuKpuPLD4ryCz3YdNwKMYiw6VQSQc3IazmhwiuUmf3PO2X7VXYFIK4JIXnsBMyYFnBP%2F6NkicA3LHyne2kllYXbMOsjcfVxnWSl4qQKuaenkauuEaPJKXXHuB1fNsSmyAGIiDNXWrip%2B5RLSOIEcCeXuYYpZDFeOXSC5sWx3rXrd94SkT367DSb%2FDw4PWMO2D0XWD6TMlLvPhvj%2Bfy23Dm4sfxcQkeR1pgzm4ZWD6wwidzCyQY6pgHlFXvQxdnaDUg%2FCyKWeO7O%2BessIq74%2FDAcDuFaMDacLA1cPCZlY0KhqRQKlp%2FDCBMpsbnsuNA5HKE8eTcIrpYQHPJZK388L%2BpbdF%2BxTndKpv4xj%2BWigX2VTU8hSfEVN0tZliUQTo9KgR8iiJqEIbMfSk8Qzu9LbKBNO3LAB7VamPw6yk0PcfJoWt2dcynaulEoVuKG65%2Bkh4hxHJqBTZuGcCT0OrF9&X-Amz-Signature=55d20a6ec4d80bc6c94755a49cf3e056bd5a1cf4ab6f7cb0571f239cc25e7b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
