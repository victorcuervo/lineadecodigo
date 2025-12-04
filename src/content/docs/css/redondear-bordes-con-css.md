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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774GHTT5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlXpJ%2BgFO18xPMkAhrn%2F7j2JtT2I3mPlY3WwoALXZhLwIgXdbdSqedTdrdEDZocPqAMhbmGVFX6FH0m%2F0DYQ3WsIQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHiE5BVod8MZpvvvAyrcA60Bj6i%2B0m3w82qDbakpzaxWIs8z6FNmMoOmYZKXUszNeBoM%2BStOzKU7ZDvf3jEgyXC10oN42BG5yUChloroYz2fEYeWOeedLkoGTbHjy2BO4Qg1TwU57zf0vcMORtbEHBtzkqoURpd26RjFdg6aJoHMe7VpPYNyI5DviBX7lw2KZt8TelCealqN9bkeiHvLhFP%2F1q%2FaGvnvFopmQYfLwnpVhuHbXC35CMbEiMnmcsTr3rDAiK69aoorIOcQgl%2FzuvJI7vka%2BvAtdOWYdQ0HGo3pRCQHCudZz%2BhZiLvTcucKc9quvJYC2wB%2FbIKcw3i0f%2FHRFi64xxjZQy04ftpbMpThX9lGVNz%2F9rgiNXlenDNDnHHepxUyx8BmGXQgTqUN5NrYP73Qsy%2FAk51Wjy96zdsq8aC4dcxo6FH2i%2F%2BLFw1C%2BLHbV8yZo8%2F3U9UEIo2%2FXgSQvHwhQLsrTMe3OFAbhLD%2BiHqMUwPN6n%2F6Ht7OyLvDzed%2Be91g41VqiPeZIRYj%2F%2FlcFxV0%2BcuGsDCHb%2FhzZUiufCC40N%2BeHtO0CSFHRXXfacFadSq%2B1Eq3fyhuSuLx7%2F%2FbbAf9qoGauAo%2F0exe0rHankyVkJCid8t0EUJFKZAGboXNNR70t2tYU4NTMIL6xskGOqUBwMSgaWO5GZP9jKTMK0%2BWEHlYBXcmnQevUbyfE5ZVS3i2Wfs4bkpgS%2BX81lobtq2b%2FCzSiHL6Zocu1M7vVndVrPi48c1BkWSaiOJ8defrUUtipIvkYdrF37HBAWw3m%2FOPaYe3fqolw6rB0PcyI7uxYUVvLHAkRgTwfm%2FEyoEOQSDX5%2Fhc73ZzoGQ4UBbkET8x1gUtCRPGXMIrPopCuV5GVRGbCkT9&X-Amz-Signature=2bfc967b224dc2dc596c1fc0bfef87f9ce1446582531f401fef971c0b3e70fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774GHTT5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlXpJ%2BgFO18xPMkAhrn%2F7j2JtT2I3mPlY3WwoALXZhLwIgXdbdSqedTdrdEDZocPqAMhbmGVFX6FH0m%2F0DYQ3WsIQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHiE5BVod8MZpvvvAyrcA60Bj6i%2B0m3w82qDbakpzaxWIs8z6FNmMoOmYZKXUszNeBoM%2BStOzKU7ZDvf3jEgyXC10oN42BG5yUChloroYz2fEYeWOeedLkoGTbHjy2BO4Qg1TwU57zf0vcMORtbEHBtzkqoURpd26RjFdg6aJoHMe7VpPYNyI5DviBX7lw2KZt8TelCealqN9bkeiHvLhFP%2F1q%2FaGvnvFopmQYfLwnpVhuHbXC35CMbEiMnmcsTr3rDAiK69aoorIOcQgl%2FzuvJI7vka%2BvAtdOWYdQ0HGo3pRCQHCudZz%2BhZiLvTcucKc9quvJYC2wB%2FbIKcw3i0f%2FHRFi64xxjZQy04ftpbMpThX9lGVNz%2F9rgiNXlenDNDnHHepxUyx8BmGXQgTqUN5NrYP73Qsy%2FAk51Wjy96zdsq8aC4dcxo6FH2i%2F%2BLFw1C%2BLHbV8yZo8%2F3U9UEIo2%2FXgSQvHwhQLsrTMe3OFAbhLD%2BiHqMUwPN6n%2F6Ht7OyLvDzed%2Be91g41VqiPeZIRYj%2F%2FlcFxV0%2BcuGsDCHb%2FhzZUiufCC40N%2BeHtO0CSFHRXXfacFadSq%2B1Eq3fyhuSuLx7%2F%2FbbAf9qoGauAo%2F0exe0rHankyVkJCid8t0EUJFKZAGboXNNR70t2tYU4NTMIL6xskGOqUBwMSgaWO5GZP9jKTMK0%2BWEHlYBXcmnQevUbyfE5ZVS3i2Wfs4bkpgS%2BX81lobtq2b%2FCzSiHL6Zocu1M7vVndVrPi48c1BkWSaiOJ8defrUUtipIvkYdrF37HBAWw3m%2FOPaYe3fqolw6rB0PcyI7uxYUVvLHAkRgTwfm%2FEyoEOQSDX5%2Fhc73ZzoGQ4UBbkET8x1gUtCRPGXMIrPopCuV5GVRGbCkT9&X-Amz-Signature=e103db7b90b5c5656f4aa78d7b09099815504cab23f1f7e23980117d612ca901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
