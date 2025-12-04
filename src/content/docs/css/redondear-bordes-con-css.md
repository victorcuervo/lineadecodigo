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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG2JU4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDnYe7XgqkUpOmRgW8LqgJ3RQ64kaOU%2FtoB0LpcMp2bWAiEA%2B54CaOO4ghNocE9DyY603iSnimod31ZaB0T0ycQ%2FtaAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCtiNk3%2B%2FyRWvQ4yJyrcA5nNR7Egg2bSbOcn7iZrxjxhR4ahKPiYK4Y3ZQ7F7uj67FiiNyAyIk857xkAHVra2Lh4g2W6haPx8%2FqKO2iu1Smn6LP8AVgkOxPfcxXq5wMVEpMCdi43e2KEJb8P57adNtYCcnH%2Bo4EDH%2FyMS1sfyLBsSwKj%2FluS5v5S68zpPCsRceLgnFOzNeVP8ElTBkGwo7EhlF7ZhiTe5puMAG%2BDT4YLaoDqdv6rXyK8enOpBwwwUUO3N2rerc%2F8FzchMy0WPrWMaSSO9zZX%2BhH%2Ba5LjegkfanmbkK4mvF24%2FEccS5oQ9RfrYT0AOgBolxSYp38jKe6z4BC8TVO50ZR7SpP8Wt7whpmmvhXeAi%2BSD%2F%2BVFX6k6OOD6%2B967%2FbEf9Hl6gPT6MyQBNcVqWPpSojRaxYjebWeTut6uYwEGnMw3cRWN6lewvOHQcgVoJpXD24hvJ3J4ryztM9ev1qSDfjqPTzfWYBISBRGlktpsxq7HyhmgwJO5mUnnjcYCSg0tGMKfEt0GrFCDQv%2FTuMS%2Bd%2Bd1aqc7Skkdxy3kmNdSCCH2i4YQvSd4a3vgD%2BzVm1By66SpotJgnTOwSKtTxNe7%2BoHAnL2INYDQIhV%2BgyEQmShZZVcrz0KOqilPhH5WLwsJOpFMOutxMkGOqUBarpJ0ah7sRrKL37H2UB5EohYNq%2FXCv99g45JqvviwXhlMLasDHco4VZiFQ6vYdOlw4lj8YtdaVHUio6x9NfW2agqP0wQe6HQERbvgzsKGW9%2BEKHayltSP%2Bl1XqxjoJDPT9MovqSBgXKstyupo2SD9DKbt5Wma8CisPCMTeWPoWBaj5kY2SycCrC7UgcBx2yhzAxmAcQN7orA18Its2ZfYCy4dbZN&X-Amz-Signature=cc7217c4c01c49031f14dfc66a8cd894818a7525831ac3e6bb633a738076409b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG2JU4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDnYe7XgqkUpOmRgW8LqgJ3RQ64kaOU%2FtoB0LpcMp2bWAiEA%2B54CaOO4ghNocE9DyY603iSnimod31ZaB0T0ycQ%2FtaAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCtiNk3%2B%2FyRWvQ4yJyrcA5nNR7Egg2bSbOcn7iZrxjxhR4ahKPiYK4Y3ZQ7F7uj67FiiNyAyIk857xkAHVra2Lh4g2W6haPx8%2FqKO2iu1Smn6LP8AVgkOxPfcxXq5wMVEpMCdi43e2KEJb8P57adNtYCcnH%2Bo4EDH%2FyMS1sfyLBsSwKj%2FluS5v5S68zpPCsRceLgnFOzNeVP8ElTBkGwo7EhlF7ZhiTe5puMAG%2BDT4YLaoDqdv6rXyK8enOpBwwwUUO3N2rerc%2F8FzchMy0WPrWMaSSO9zZX%2BhH%2Ba5LjegkfanmbkK4mvF24%2FEccS5oQ9RfrYT0AOgBolxSYp38jKe6z4BC8TVO50ZR7SpP8Wt7whpmmvhXeAi%2BSD%2F%2BVFX6k6OOD6%2B967%2FbEf9Hl6gPT6MyQBNcVqWPpSojRaxYjebWeTut6uYwEGnMw3cRWN6lewvOHQcgVoJpXD24hvJ3J4ryztM9ev1qSDfjqPTzfWYBISBRGlktpsxq7HyhmgwJO5mUnnjcYCSg0tGMKfEt0GrFCDQv%2FTuMS%2Bd%2Bd1aqc7Skkdxy3kmNdSCCH2i4YQvSd4a3vgD%2BzVm1By66SpotJgnTOwSKtTxNe7%2BoHAnL2INYDQIhV%2BgyEQmShZZVcrz0KOqilPhH5WLwsJOpFMOutxMkGOqUBarpJ0ah7sRrKL37H2UB5EohYNq%2FXCv99g45JqvviwXhlMLasDHco4VZiFQ6vYdOlw4lj8YtdaVHUio6x9NfW2agqP0wQe6HQERbvgzsKGW9%2BEKHayltSP%2Bl1XqxjoJDPT9MovqSBgXKstyupo2SD9DKbt5Wma8CisPCMTeWPoWBaj5kY2SycCrC7UgcBx2yhzAxmAcQN7orA18Its2ZfYCy4dbZN&X-Amz-Signature=e6d96a0d84dafb502dded0d40f710e18d466328227e828e9788ba7c1deb24ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
