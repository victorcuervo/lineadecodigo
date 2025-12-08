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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJZCQGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJhHFP1NRPk%2Fw3SXTaYY33IJUN6VC2ML7ClcWokMvAqAiEA84aKzYjm27JGC1UcUu2W8orjw1YlSU%2F7r%2BvoTnqv4IoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRYqKmyq5Bg6rgSkyrcA5r90Roug2Qim7ootJNusa4IBtuGUDfdqMS8NzmsJy98a0ousEAtyoQatLgU1MD5o4zgzmp%2FwuL%2Fu1v1cu4OUbT7g9tiUdfcynu5sgbmhiZuYeEh6fQRaj3lNfHQ84lLSwtNecZixalK1Xc43qn%2Fq39IdyzfmAJIZbCeWEOV9dC6CclLd0osTrXZs25L%2B%2Fe8%2Bf9OwxlufbNqmPxCkr2YQrbpRmYt%2BgEeDX3yhqSba4M2eaTZVCDZj1sBuRZa%2BVlOnHB1qgjoF4%2BeOWAPq7nfOoxcK0uJM162UjWy14WBfkcDqtec9E3Fq8ECRQNdp7l0o7312wZGfGVFH1Oh%2Bbh5kdYAda9%2FREofyMOqbR8s0duHAeXtQw9THvNedr9AzeFvX7hGH6d4jzs%2FywBuDa0pR23Hf%2F5RkGreewj4m%2BwrqLhztIQDskkRoudCV%2F7SR3E6S4kfWF2c8X6E9WNqRJuNLKuEW0s75e17oVcwdAcZWWdrovl6tGtKpW0EI%2BK3XvPDvSkRkM7EclzuN4TO8wyUNRDPaTs%2BSeSmTAD44g0jwlhnvkP6eWPyBt8npSnEN6Qkss%2BZYeVd23YHgU0jbwlQKIomg01HO5WTOFRZBU97xsmigs1Z%2F5RI2O0RiBFYMLnt2ckGOqUB4lKflVSSTPdZYVDO7qF%2F%2BnoucWuIM60w9KHiXK3ekvhc8BzTSnAxwpFMb8JVrWMyspdhxKwZHddQclHN4esZuSKYnK%2B7V%2Fkun%2FnMRSvLUgAVUyy9ZsXtAYBH37LUjmR2Q1OadouCwv2dcGwWYHlSkFIewFsf9I6uTQD1zceikVruBCBBIY2GDAt%2FpSpX5RIhSEtt%2BHMbH%2Bf3x6usnLN4HyFq92Xo&X-Amz-Signature=b163abdb007bf241b24faa2972ee75258088aad2175866444bd75b2b81deab71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJZCQGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJhHFP1NRPk%2Fw3SXTaYY33IJUN6VC2ML7ClcWokMvAqAiEA84aKzYjm27JGC1UcUu2W8orjw1YlSU%2F7r%2BvoTnqv4IoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRYqKmyq5Bg6rgSkyrcA5r90Roug2Qim7ootJNusa4IBtuGUDfdqMS8NzmsJy98a0ousEAtyoQatLgU1MD5o4zgzmp%2FwuL%2Fu1v1cu4OUbT7g9tiUdfcynu5sgbmhiZuYeEh6fQRaj3lNfHQ84lLSwtNecZixalK1Xc43qn%2Fq39IdyzfmAJIZbCeWEOV9dC6CclLd0osTrXZs25L%2B%2Fe8%2Bf9OwxlufbNqmPxCkr2YQrbpRmYt%2BgEeDX3yhqSba4M2eaTZVCDZj1sBuRZa%2BVlOnHB1qgjoF4%2BeOWAPq7nfOoxcK0uJM162UjWy14WBfkcDqtec9E3Fq8ECRQNdp7l0o7312wZGfGVFH1Oh%2Bbh5kdYAda9%2FREofyMOqbR8s0duHAeXtQw9THvNedr9AzeFvX7hGH6d4jzs%2FywBuDa0pR23Hf%2F5RkGreewj4m%2BwrqLhztIQDskkRoudCV%2F7SR3E6S4kfWF2c8X6E9WNqRJuNLKuEW0s75e17oVcwdAcZWWdrovl6tGtKpW0EI%2BK3XvPDvSkRkM7EclzuN4TO8wyUNRDPaTs%2BSeSmTAD44g0jwlhnvkP6eWPyBt8npSnEN6Qkss%2BZYeVd23YHgU0jbwlQKIomg01HO5WTOFRZBU97xsmigs1Z%2F5RI2O0RiBFYMLnt2ckGOqUB4lKflVSSTPdZYVDO7qF%2F%2BnoucWuIM60w9KHiXK3ekvhc8BzTSnAxwpFMb8JVrWMyspdhxKwZHddQclHN4esZuSKYnK%2B7V%2Fkun%2FnMRSvLUgAVUyy9ZsXtAYBH37LUjmR2Q1OadouCwv2dcGwWYHlSkFIewFsf9I6uTQD1zceikVruBCBBIY2GDAt%2FpSpX5RIhSEtt%2BHMbH%2Bf3x6usnLN4HyFq92Xo&X-Amz-Signature=9c37343db65367a7b4812d3845a44d641b4f39724a51f99b871ff1ea4532f092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
