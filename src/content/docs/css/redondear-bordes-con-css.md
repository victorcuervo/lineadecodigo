---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXECXS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC%2BQyd%2B6xNuI9uazROzFy%2B07vyc13MMSslbS8uaxF2%2BfAIgPQUWm1HeQvbdN0KsPq7avv9lToaKunHBawQj9VyesMIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNppOIpF3Ouw7HxRNyrcA4z%2FtFeuCV1933G7rgQyXuIoT%2BWV7dZ5UbHBrALq0waNi%2FNWovIPYCuQzYUeCJdkwEgcknmOec1pGRrde7YsjTaFDp6XFfDi8RO6ipzGD15lgfSJQZS4sxTY3i7vrKbeYfmQQ6GWW9lD2gzbznj%2FnoQ8K9ZOISX1PO6xuMLJ98WRnmjt8Z49RTlAUdUBNacOMxEh%2BvzUtsWXUm%2FhHbsPXCCbpURz90T8%2F0OoKwGFufW9U%2FalbzM5G8H9qC2PnYhYS6YLuD0dp6g5QtnPrjCzt9iqiChktzG77zxizzkTwdmGI8ne%2Ba0vFLFQ3JToADW0i0V%2Bq8OGrtZ7W3QPYl1xwxmchuWx7G9nEAgiEbjaxqQNix2Ivap7eKxu2GeCX%2Bokozs8iOsI6S4OJAK32%2BKDP5pcxCIbgtBmLdDRCcLLPj2ybvgRA3jiPbl8WzOhdIsg4as4TAVG914hGGh6shW6ppkGjv7PXdO%2BxGH4aC1NkPj4ib%2F8A2cVVe3STat0UfL6ktLh4URIKtsTSnjitoanMaMNUNKquq9MOPbYpI4OhfyjdhmC8iMmBz572nvUHTGws2tp9OfsNebQL9ogtZfPo%2BUv%2BSIQZV9tP%2FDgs%2Fu2s03pRpZcjltl163cpdsmMMuUw8kGOqUBiqzg3aqCFyx04ZbtRNu4eukHTiw2R0lzBLYfc4uWRxTHDmP0KFh86e6qa8SCSCdaKWQX7%2B%2FIoPGYBmGCq9FXuvLo%2BP%2FimfMZ38Cr%2Bt0A7LxgqhCHrkGtzIo9mJleUeoB%2BFe3ZMVDBUXOWgkLnyf0avpEvqJ1vgz3UzwNAdW73qGDGtolmQJtwkTm1LmDuRlvl2%2B85GHxG3%2FYPff%2BmbaX%2BHf0nu4Y&X-Amz-Signature=b3d6a1c2b311dff356454532b2f0ae72bbf0ac21464edb4f55e0edd69bf1237c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXECXS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC%2BQyd%2B6xNuI9uazROzFy%2B07vyc13MMSslbS8uaxF2%2BfAIgPQUWm1HeQvbdN0KsPq7avv9lToaKunHBawQj9VyesMIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNppOIpF3Ouw7HxRNyrcA4z%2FtFeuCV1933G7rgQyXuIoT%2BWV7dZ5UbHBrALq0waNi%2FNWovIPYCuQzYUeCJdkwEgcknmOec1pGRrde7YsjTaFDp6XFfDi8RO6ipzGD15lgfSJQZS4sxTY3i7vrKbeYfmQQ6GWW9lD2gzbznj%2FnoQ8K9ZOISX1PO6xuMLJ98WRnmjt8Z49RTlAUdUBNacOMxEh%2BvzUtsWXUm%2FhHbsPXCCbpURz90T8%2F0OoKwGFufW9U%2FalbzM5G8H9qC2PnYhYS6YLuD0dp6g5QtnPrjCzt9iqiChktzG77zxizzkTwdmGI8ne%2Ba0vFLFQ3JToADW0i0V%2Bq8OGrtZ7W3QPYl1xwxmchuWx7G9nEAgiEbjaxqQNix2Ivap7eKxu2GeCX%2Bokozs8iOsI6S4OJAK32%2BKDP5pcxCIbgtBmLdDRCcLLPj2ybvgRA3jiPbl8WzOhdIsg4as4TAVG914hGGh6shW6ppkGjv7PXdO%2BxGH4aC1NkPj4ib%2F8A2cVVe3STat0UfL6ktLh4URIKtsTSnjitoanMaMNUNKquq9MOPbYpI4OhfyjdhmC8iMmBz572nvUHTGws2tp9OfsNebQL9ogtZfPo%2BUv%2BSIQZV9tP%2FDgs%2Fu2s03pRpZcjltl163cpdsmMMuUw8kGOqUBiqzg3aqCFyx04ZbtRNu4eukHTiw2R0lzBLYfc4uWRxTHDmP0KFh86e6qa8SCSCdaKWQX7%2B%2FIoPGYBmGCq9FXuvLo%2BP%2FimfMZ38Cr%2Bt0A7LxgqhCHrkGtzIo9mJleUeoB%2BFe3ZMVDBUXOWgkLnyf0avpEvqJ1vgz3UzwNAdW73qGDGtolmQJtwkTm1LmDuRlvl2%2B85GHxG3%2FYPff%2BmbaX%2BHf0nu4Y&X-Amz-Signature=0c832b341e97a08eb159b3d735c06d04ea1f79563f039adf8cffa6bda3534bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
