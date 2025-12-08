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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXFHTYI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyHSTtWv7V%2Bi6JT3LZL5mTYgCcWe%2B0nntj9bJIL08euwIhALHvgrqtM2ixdRchBqorQQEiTL5kWSEV0tzlGl3DbmsFKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXniZnSq7ypVCcw5Iq3AN3%2FFLRdnWYWAqCbk3q1FUzQwR7R%2Fn7mLvA%2BLk21a2VHiTtu5RaAPv2gto347%2By8lpWeEDPK9aCmxmQqEf%2BMiBBR90fyQQI9U%2Fl%2BUVeBZPJUg9tLcHQ%2FH4ZqskzBq4th22ccqHQbMruazDjQvuyMd0VEtaJFyzAx9%2FEXprF%2BeRGAXS%2BSq2V11dgAd7jxpJ4NL4ojT4hE5JK9CGUlLieUCQHQYVuRILzUsud2bxhJVhO24eC7Y9Y5K0BHffLewPcfQibVBKjwG4ODGIfRmS%2B1bQYZmtXnRWA7lF7lGvdkCugoZeIERMyhfhwWxdQSoygvj3eMfqXf%2BmPwexjYT%2FyzNupvEcFUjTiYnheZ%2B3LRoTMLPL%2FiYE8vXsEksnYgMvfQ2kAvivbyedHXDxzEVSGSOkCBhxvH1JQeoZlSP37gPXYz3P2BBEJNFB6echs%2FX21SNkmiUzNke5oxuyAAWRVxPEU%2FwPevh8gZ6CnOCd63DJhQiywppdxqN1ipErNEryZGGIE8Tdfflbc4D4BZIMhDS0aYMuNChQacTvtNRVnhB9hrXcdKarkF335Gvn8NOUa6PNtrmVF0ixUIRlVJ46iHS85GbpfDLJZ9ovu0Mei5a3ThMS6W1elNWq2icTeCzC8wtvJBjqkASOJBuRLlpTIzzQmeKFifVTpCfvJimMgs%2FFvYzqxG1gAMuhArhX2Z9p7yJ%2FHlASNc2fMX1kEckwVTv56u%2B01%2FQx4KDIkAGWmaHrDCbXv2%2BlYCYR9pUioCHQb9%2F2s2DELhzOpc5YSL5j%2BsiylN%2B7kQqWQVCuo9k2DY8NSnPrE06NFuBGan%2B0rD6eKI%2BYasfplAKm13vp7GnMkKAcGgz4%2B2nams7Sy&X-Amz-Signature=4f78a463fc7eaef160f299c805a46858afa66cf58dca62c9b6867d838a767266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXFHTYI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyHSTtWv7V%2Bi6JT3LZL5mTYgCcWe%2B0nntj9bJIL08euwIhALHvgrqtM2ixdRchBqorQQEiTL5kWSEV0tzlGl3DbmsFKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXniZnSq7ypVCcw5Iq3AN3%2FFLRdnWYWAqCbk3q1FUzQwR7R%2Fn7mLvA%2BLk21a2VHiTtu5RaAPv2gto347%2By8lpWeEDPK9aCmxmQqEf%2BMiBBR90fyQQI9U%2Fl%2BUVeBZPJUg9tLcHQ%2FH4ZqskzBq4th22ccqHQbMruazDjQvuyMd0VEtaJFyzAx9%2FEXprF%2BeRGAXS%2BSq2V11dgAd7jxpJ4NL4ojT4hE5JK9CGUlLieUCQHQYVuRILzUsud2bxhJVhO24eC7Y9Y5K0BHffLewPcfQibVBKjwG4ODGIfRmS%2B1bQYZmtXnRWA7lF7lGvdkCugoZeIERMyhfhwWxdQSoygvj3eMfqXf%2BmPwexjYT%2FyzNupvEcFUjTiYnheZ%2B3LRoTMLPL%2FiYE8vXsEksnYgMvfQ2kAvivbyedHXDxzEVSGSOkCBhxvH1JQeoZlSP37gPXYz3P2BBEJNFB6echs%2FX21SNkmiUzNke5oxuyAAWRVxPEU%2FwPevh8gZ6CnOCd63DJhQiywppdxqN1ipErNEryZGGIE8Tdfflbc4D4BZIMhDS0aYMuNChQacTvtNRVnhB9hrXcdKarkF335Gvn8NOUa6PNtrmVF0ixUIRlVJ46iHS85GbpfDLJZ9ovu0Mei5a3ThMS6W1elNWq2icTeCzC8wtvJBjqkASOJBuRLlpTIzzQmeKFifVTpCfvJimMgs%2FFvYzqxG1gAMuhArhX2Z9p7yJ%2FHlASNc2fMX1kEckwVTv56u%2B01%2FQx4KDIkAGWmaHrDCbXv2%2BlYCYR9pUioCHQb9%2F2s2DELhzOpc5YSL5j%2BsiylN%2B7kQqWQVCuo9k2DY8NSnPrE06NFuBGan%2B0rD6eKI%2BYasfplAKm13vp7GnMkKAcGgz4%2B2nams7Sy&X-Amz-Signature=32fceab99501b5dcc12feb42545d6cbcf94f0c331d23570d640ee2f362b1a2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
