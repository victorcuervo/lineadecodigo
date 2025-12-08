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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4YIX7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYJNmzvntAPGv3U9pzRNiPJ0zIf0cgkz7CMisKLK8MAiAjOdxBHTyj40IdDPmqs7OpFrHa3ur800XB0k1Uk6m2nyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhKZRfQEONNrrYApKtwDSmFnIjDR4vhr0lW8uG0oGdoLEXgS5F2NTj09YVnpBXJPWgTgKvlNseSITq1LjyNy0Tj0ouZZ1J0wperYxcKvHWl2ufTqE6dXsr3dgC4Qy6lDLV%2FLi56Sh7p17tQCOQIDJ19V6k2K%2Bzw4expqCa9ifsHR6AzhvQEkeaKcWs%2B5HSATnoXCo6HUBFBz1685VLPl4BhhIgBg3O%2BKkcEFPeLExYPjY0flaKlmeJek8HwMOMGx2p8PCeh4EHfYxPh8hirRqyPasWYNRmOsU3yuDlWP26WyDoS%2F2pgm%2FDPGvVEcvrBgv795cMs4%2FdyQhhb8U6zdXFQI4BlKlQX5QxztyBx2IortEz209VlanIGt2L9ETwsdW0BZm2Y%2FMviLG8przvBlnILP0%2FVo7utedBRT5B%2BweiYBggtl6ZwaOpkKKin1L6k37oty%2BEbKiZLMjuyX1bEzbWtKfFi6LAC0JtnaakDza86j4i5Ov2SLhyw5c6Pa6x9nHgOutfzDW%2BV3eRKsazkgd%2BT7Kvoh2Kc305exwkq9MbIBCx1ZtlaLXW5JhVjun6I2uboIYWF0Glf01KJYazy5EQV%2F4MvXaVKf0PN1Sarb1K%2FHwShTEcbaicz7fYeRz715eUeyCWpB%2F%2BcaOW4wpqLYyQY6pgGy0WGv01V48NXBO%2B2fS6q2d7miEQVj02jQ20mocYykoBGlZUA0F7Y49Q3sgekQVeLs7bZAk2yCNlXVMuEdgKABNjuhGIA5rt7Yk%2BaZ1PYiTGt2g%2BukjKlEQobvZor8Tv66KWQIeYaVT27Jw0m0am%2Fzd66bktR3NQ3VhlR0qhPDyAVURR6GQ0NkhoAAcCKkZPsmI5LXzLyGEEfGfClPmziAYNJ5J1d9&X-Amz-Signature=b5eed4db8d3feb4721b86b4279af0a563d7327d3261d7dac44942088db718663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4YIX7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWYJNmzvntAPGv3U9pzRNiPJ0zIf0cgkz7CMisKLK8MAiAjOdxBHTyj40IdDPmqs7OpFrHa3ur800XB0k1Uk6m2nyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhKZRfQEONNrrYApKtwDSmFnIjDR4vhr0lW8uG0oGdoLEXgS5F2NTj09YVnpBXJPWgTgKvlNseSITq1LjyNy0Tj0ouZZ1J0wperYxcKvHWl2ufTqE6dXsr3dgC4Qy6lDLV%2FLi56Sh7p17tQCOQIDJ19V6k2K%2Bzw4expqCa9ifsHR6AzhvQEkeaKcWs%2B5HSATnoXCo6HUBFBz1685VLPl4BhhIgBg3O%2BKkcEFPeLExYPjY0flaKlmeJek8HwMOMGx2p8PCeh4EHfYxPh8hirRqyPasWYNRmOsU3yuDlWP26WyDoS%2F2pgm%2FDPGvVEcvrBgv795cMs4%2FdyQhhb8U6zdXFQI4BlKlQX5QxztyBx2IortEz209VlanIGt2L9ETwsdW0BZm2Y%2FMviLG8przvBlnILP0%2FVo7utedBRT5B%2BweiYBggtl6ZwaOpkKKin1L6k37oty%2BEbKiZLMjuyX1bEzbWtKfFi6LAC0JtnaakDza86j4i5Ov2SLhyw5c6Pa6x9nHgOutfzDW%2BV3eRKsazkgd%2BT7Kvoh2Kc305exwkq9MbIBCx1ZtlaLXW5JhVjun6I2uboIYWF0Glf01KJYazy5EQV%2F4MvXaVKf0PN1Sarb1K%2FHwShTEcbaicz7fYeRz715eUeyCWpB%2F%2BcaOW4wpqLYyQY6pgGy0WGv01V48NXBO%2B2fS6q2d7miEQVj02jQ20mocYykoBGlZUA0F7Y49Q3sgekQVeLs7bZAk2yCNlXVMuEdgKABNjuhGIA5rt7Yk%2BaZ1PYiTGt2g%2BukjKlEQobvZor8Tv66KWQIeYaVT27Jw0m0am%2Fzd66bktR3NQ3VhlR0qhPDyAVURR6GQ0NkhoAAcCKkZPsmI5LXzLyGEEfGfClPmziAYNJ5J1d9&X-Amz-Signature=d3d242ffba5c5339d49ee194c82f44a2950247b9b1f8ad8911bddee7b6ab326b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
