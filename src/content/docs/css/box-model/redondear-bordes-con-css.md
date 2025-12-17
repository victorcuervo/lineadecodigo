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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HQ2ZGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhz%2FLV%2Fw4BNbyInl2JjRYK5e6zw3KY1VRkehmmXezYOAiApPhziRnPZyT0D3NQ%2Bf0%2BeAer%2Ba01MxKbCEfNWBZU0CSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsOy55%2FbBBesTLFJeKtwD%2By4A4Sse8sffYyFKHtvJYOu0X6MrBy%2BSRuxsD43wF5bQ%2F4KvTII8qaQowVCkSHYzz4juqKzUfDBLArfpBGWcPyAJazBkrvhFwHo3sQ8zyAv%2Bfy3fJJD8CpEtMWvjMtnt3Sl%2FO%2FwuKvF1QpA9t49R%2FFJOBkt6GDkqYRlJRjYHsGACx50nE1wUiuHJPA7NHys4oPcRlVQgVPxiFDdsTDEsocZZjJ1RjhTUPnU%2BpBbSE84s5KJC%2FXpMbKjLTWK%2BqrgLaHb86rMwqqONtkGTX8M%2BEnDiLEUraRmJBTbhyXzetoTDvawlLmNjSide8N9EddmGcT0dWUSdpuNL98ws4Pr0H5fy8SSH7ZicJSAkqi6bvPMeVagufPJrYs33vbX6QgoqRHVXxT%2FQGwofBM03P2yAvFkkdHLT6nkjVJZotbw4sip41fFtcIWPXcUAGBofpbLPuFia9ackG1tHFxKFF8CQi5SOCFMYlTHTvlmsEvdl%2FYUNmre7%2BjGmOKnFr7MowGPNr6cn000e3%2B7%2BYFWrlqYZhokcFBa4jEZDct2YSO%2Bt8r36EYFz43huewjcMTAND5DSOuVcbMz7PEhDiUybnPBufPJPikY0LZJjOEY6wtYZ6a1%2FjBYyqHA%2FNrGmEAgwhZ%2BLygY6pgGqKqRmLOd%2FkbU5EaHJ56CwSjPur9OjUulYSjSvAvqP%2BKrSjt1ZuFQr5Lai58EEP%2BS2meSWq8nSeJYzhhnYtRZfq8sm7SKxdAL78WCG4qtSRUE5Er6DM5PCQxxQXvuwiP%2FU%2BPlJQKX9lDUKNOmEMFW0l%2FxTF7qcxo30%2B7pS%2BB7zQ8c1bhE223XkmvpibJD8Jb31beumI%2FtuzwMSaTyYN3pZhIxl7WWT&X-Amz-Signature=5454f5908ba813df05ed979f1c6c00dbeedcdf6c671d9fc5b5b1c05fc3d1385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HQ2ZGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhz%2FLV%2Fw4BNbyInl2JjRYK5e6zw3KY1VRkehmmXezYOAiApPhziRnPZyT0D3NQ%2Bf0%2BeAer%2Ba01MxKbCEfNWBZU0CSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsOy55%2FbBBesTLFJeKtwD%2By4A4Sse8sffYyFKHtvJYOu0X6MrBy%2BSRuxsD43wF5bQ%2F4KvTII8qaQowVCkSHYzz4juqKzUfDBLArfpBGWcPyAJazBkrvhFwHo3sQ8zyAv%2Bfy3fJJD8CpEtMWvjMtnt3Sl%2FO%2FwuKvF1QpA9t49R%2FFJOBkt6GDkqYRlJRjYHsGACx50nE1wUiuHJPA7NHys4oPcRlVQgVPxiFDdsTDEsocZZjJ1RjhTUPnU%2BpBbSE84s5KJC%2FXpMbKjLTWK%2BqrgLaHb86rMwqqONtkGTX8M%2BEnDiLEUraRmJBTbhyXzetoTDvawlLmNjSide8N9EddmGcT0dWUSdpuNL98ws4Pr0H5fy8SSH7ZicJSAkqi6bvPMeVagufPJrYs33vbX6QgoqRHVXxT%2FQGwofBM03P2yAvFkkdHLT6nkjVJZotbw4sip41fFtcIWPXcUAGBofpbLPuFia9ackG1tHFxKFF8CQi5SOCFMYlTHTvlmsEvdl%2FYUNmre7%2BjGmOKnFr7MowGPNr6cn000e3%2B7%2BYFWrlqYZhokcFBa4jEZDct2YSO%2Bt8r36EYFz43huewjcMTAND5DSOuVcbMz7PEhDiUybnPBufPJPikY0LZJjOEY6wtYZ6a1%2FjBYyqHA%2FNrGmEAgwhZ%2BLygY6pgGqKqRmLOd%2FkbU5EaHJ56CwSjPur9OjUulYSjSvAvqP%2BKrSjt1ZuFQr5Lai58EEP%2BS2meSWq8nSeJYzhhnYtRZfq8sm7SKxdAL78WCG4qtSRUE5Er6DM5PCQxxQXvuwiP%2FU%2BPlJQKX9lDUKNOmEMFW0l%2FxTF7qcxo30%2B7pS%2BB7zQ8c1bhE223XkmvpibJD8Jb31beumI%2FtuzwMSaTyYN3pZhIxl7WWT&X-Amz-Signature=5bf0d5649f23e3571888e3e925ccbef86c38151ae11987322450ab74a1deb5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
