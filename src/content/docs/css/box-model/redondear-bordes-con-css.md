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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6A24NO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq2dmdOWVqhtDxjAHCxr0lDwobT6w9gZy2J%2BAwHBygpQIgMWd7%2FolKTOwxgIHFfk1qHHWdWg715GDR3hJkz%2B4u%2BT4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHMby30%2BPWCB9OjV%2ByrcA5ZIzduSGQCMfOfzeODSd%2FnKAOXLpOLg7djnUEIQlyPlheA5QzQU4w%2FLqCY5tFYuaae7vkHw%2FNxQuXRcavYti43OHAPYHrDl7Bk4yDtGG4km%2FetFZ50HzDW67dbKM%2FUvMTlZ44%2B8wMHheI%2ByPI9LGfzuptifG1POQHwStn1oHk7Fga6VGlrhMBYctrAlhzYSwtVqqm4149FsgAFELnCzUAc8u2GBgjH8TfOA0fkxKB04AEe2qVthhJy%2BuYkcW6f73KKETleP7T%2B08tHVBEdbr0W0Gmiup9UT24ZVGKBihti8IlvRnW71JPqHO%2BjY3R7dSnkkojbfMW2iX62lpcXaQeazxmRghJHCdRxpKoImGRFk3pLhNfTuxUcNWM8mkvN3V8H3U%2B9v3p64qKBp7JVhkhonRXVYjk96ecHXz8OJxQ5e9qmSn1XyXuimW%2BwlVcbwuFKK0cM4%2B%2FlzgySiTd8vjhAc%2FPBV3QzXAECcGoROuvAIKZLpbEl9byxoJ6rbaJwwIeo6365UZ7ytuo09GKyX1xedlUcR49r0vI8QW8ICESQWDZiXCIR7ZXBYKTSHmSRobJFH%2BmmWcBLfiAyMjteeY22DpYUIKBiFxT7W2Bbu5pt0acFREYT2txFuOPZ4MNfSicoGOqUBSSIojU1FHsixRXBuJGcYugzUIOhJtoxrutXyZPhwPHaLraRQks66vVlia7p%2BDp44iXjn1RCgJDee78Hs9%2F8iGGyesrE6Tpgy3cn0av1QjYUPgE1sNluar4lNor21tfQITtokZKhBk8HziE1SLYjofdCeOSGrR0JAGaQqBFjH8fmGOC2cYxMPG%2BKt%2FbH0Ob%2F5rueR%2FfWSK%2BmKhxHDg5ArE2QUmXpA&X-Amz-Signature=1c8e4cc4e39ca370b62678cb8016fa79366308d1c0939c32702ed48000f0210c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6A24NO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq2dmdOWVqhtDxjAHCxr0lDwobT6w9gZy2J%2BAwHBygpQIgMWd7%2FolKTOwxgIHFfk1qHHWdWg715GDR3hJkz%2B4u%2BT4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHMby30%2BPWCB9OjV%2ByrcA5ZIzduSGQCMfOfzeODSd%2FnKAOXLpOLg7djnUEIQlyPlheA5QzQU4w%2FLqCY5tFYuaae7vkHw%2FNxQuXRcavYti43OHAPYHrDl7Bk4yDtGG4km%2FetFZ50HzDW67dbKM%2FUvMTlZ44%2B8wMHheI%2ByPI9LGfzuptifG1POQHwStn1oHk7Fga6VGlrhMBYctrAlhzYSwtVqqm4149FsgAFELnCzUAc8u2GBgjH8TfOA0fkxKB04AEe2qVthhJy%2BuYkcW6f73KKETleP7T%2B08tHVBEdbr0W0Gmiup9UT24ZVGKBihti8IlvRnW71JPqHO%2BjY3R7dSnkkojbfMW2iX62lpcXaQeazxmRghJHCdRxpKoImGRFk3pLhNfTuxUcNWM8mkvN3V8H3U%2B9v3p64qKBp7JVhkhonRXVYjk96ecHXz8OJxQ5e9qmSn1XyXuimW%2BwlVcbwuFKK0cM4%2B%2FlzgySiTd8vjhAc%2FPBV3QzXAECcGoROuvAIKZLpbEl9byxoJ6rbaJwwIeo6365UZ7ytuo09GKyX1xedlUcR49r0vI8QW8ICESQWDZiXCIR7ZXBYKTSHmSRobJFH%2BmmWcBLfiAyMjteeY22DpYUIKBiFxT7W2Bbu5pt0acFREYT2txFuOPZ4MNfSicoGOqUBSSIojU1FHsixRXBuJGcYugzUIOhJtoxrutXyZPhwPHaLraRQks66vVlia7p%2BDp44iXjn1RCgJDee78Hs9%2F8iGGyesrE6Tpgy3cn0av1QjYUPgE1sNluar4lNor21tfQITtokZKhBk8HziE1SLYjofdCeOSGrR0JAGaQqBFjH8fmGOC2cYxMPG%2BKt%2FbH0Ob%2F5rueR%2FfWSK%2BmKhxHDg5ArE2QUmXpA&X-Amz-Signature=39b6090f9be88c426f07eef97f3ae277077281a57aa3f7d9803a35ebeb7f32f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
