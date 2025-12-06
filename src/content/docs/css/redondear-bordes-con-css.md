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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CC6JPVD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJjgKsnfGKHeGC2JPecqDCjRueuZRGlF593252i7YDywIhAKDasKyDVWh3kFiDJ7twx379v%2BYOoxqmisx%2F%2ByAx4DUyKv8DCGwQABoMNjM3NDIzMTgzODA1Igx6Y7gSf6zT8z2qBmQq3APRabCw83Ev3n0EHosKrhFQZn8q7mWrgDFUojUVaxqhzG4JZEAoZnengut4YOovNoP%2FqLmTaw83iPFZto6gREGYxJMZVDdBufAbEcQvWlg6X1ZC962PZf4zNHud5jHNFVL28gdwNej4OJj0vbyVuetkIPnE6a2KrOfnL2i0AVSHDoIdD%2B8Ikv8oBnrT1NIdZ03kF%2BQuuaHkFThxb7EpuamVuarbKzbZAVQFMxU77TDtgCtc8YIDVwIkmCfwGcuywaK%2F%2BZNG4gggH0dPOw8VSjCNP%2FdaLkvQ3NHS4qrpgGIShuuZE2i2bxRC6QxvMhcfuoRPoMwNaJMx1jVyU4hkpzQ440hPwm6Da5sK1oAxlN476TuYBvGfGtnc3N4h2xpAbybzPOlyr2qhDLHoFHTS%2Fyc9LPwJDGBNBY1Pj92PTVuUDLeI7xHIo93aptLZUwLoSwVcDI2N88TBPJaSeUNAY%2FMyIzrvkY%2BqoCnu6o7LzYTECBQp7sKjTapWycLTecVjmAZzKgaVrogrFOrdiPBjtf8yKoAH27UKE3wmK0wemPIUnADGpUGWaGtXS9f52Q0ByHK8NZoC2SKn7b7AxdHatxl1kSuqaPzQjt1GtmYrXKRZuUN7hiP%2BikEwnjmryjCow87JBjqkAVTCaawRtUq4Us1wV8hK%2Brr0uT%2F2RjpY%2FrmwSpMgCr7M4Y7MQm%2BgYU%2FNW5f5foil2ziOPmhMneVNxXktjerzKAdFPUKbNw2GQtucdsvKxRL6ICqaQHUjdr31CNyp9gsgY2952IFJ9PRndDPx9yfYW8HTBQqAztA28v2%2BsPooDhEUhVFdpK2%2BRDg2bp%2BjuouEo3GwpYYo9Sii1KmgI0yzsf7ju7hB&X-Amz-Signature=c71a977b7b9fd256ccc1b10bb92606c127a8368abeb517344afc16559fbde1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CC6JPVD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJjgKsnfGKHeGC2JPecqDCjRueuZRGlF593252i7YDywIhAKDasKyDVWh3kFiDJ7twx379v%2BYOoxqmisx%2F%2ByAx4DUyKv8DCGwQABoMNjM3NDIzMTgzODA1Igx6Y7gSf6zT8z2qBmQq3APRabCw83Ev3n0EHosKrhFQZn8q7mWrgDFUojUVaxqhzG4JZEAoZnengut4YOovNoP%2FqLmTaw83iPFZto6gREGYxJMZVDdBufAbEcQvWlg6X1ZC962PZf4zNHud5jHNFVL28gdwNej4OJj0vbyVuetkIPnE6a2KrOfnL2i0AVSHDoIdD%2B8Ikv8oBnrT1NIdZ03kF%2BQuuaHkFThxb7EpuamVuarbKzbZAVQFMxU77TDtgCtc8YIDVwIkmCfwGcuywaK%2F%2BZNG4gggH0dPOw8VSjCNP%2FdaLkvQ3NHS4qrpgGIShuuZE2i2bxRC6QxvMhcfuoRPoMwNaJMx1jVyU4hkpzQ440hPwm6Da5sK1oAxlN476TuYBvGfGtnc3N4h2xpAbybzPOlyr2qhDLHoFHTS%2Fyc9LPwJDGBNBY1Pj92PTVuUDLeI7xHIo93aptLZUwLoSwVcDI2N88TBPJaSeUNAY%2FMyIzrvkY%2BqoCnu6o7LzYTECBQp7sKjTapWycLTecVjmAZzKgaVrogrFOrdiPBjtf8yKoAH27UKE3wmK0wemPIUnADGpUGWaGtXS9f52Q0ByHK8NZoC2SKn7b7AxdHatxl1kSuqaPzQjt1GtmYrXKRZuUN7hiP%2BikEwnjmryjCow87JBjqkAVTCaawRtUq4Us1wV8hK%2Brr0uT%2F2RjpY%2FrmwSpMgCr7M4Y7MQm%2BgYU%2FNW5f5foil2ziOPmhMneVNxXktjerzKAdFPUKbNw2GQtucdsvKxRL6ICqaQHUjdr31CNyp9gsgY2952IFJ9PRndDPx9yfYW8HTBQqAztA28v2%2BsPooDhEUhVFdpK2%2BRDg2bp%2BjuouEo3GwpYYo9Sii1KmgI0yzsf7ju7hB&X-Amz-Signature=95ffc4d17ae99f823435e4ecb30350c857b933c4060d67daea3cad1ae7d526fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
