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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3VZ4XM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFatZTc3o431RYFqKn4cNVO34h0tU7Qb5J99DrwCbSoZAiEA4i64tUzF26mReo1hCwftt9bcPaulDLgc8%2BqvIZjGoi4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKXGFbafNWrWOYaoTyrcA9aAk5rqq6stQy4RQRp2vw7MucM0Mb5BSmZo%2FsGmcbKviio%2BLkyJ7A7FP94PVUitJy0EvkRrJVlff0BCTphX4eFFhvH2IzsvUcZumz0wmGE7v4%2BUdpPacCOU1Dwz95awzH7td5oubnF2cPf7iFmCdrVkk0sZ4IFmfenid1eUJVg3%2Fgsc%2Far5QxKUEuipNkXg9E%2FOWzoo4zNDD6Y5lT1o%2FbbkCwZsSgM7mc9OiM8HSEnCB%2F17ZkrVNwbfRnML5%2BMeKPoU14FSGL43gmRK7dhhP8ixR0jQKWD5hxu7aAGbgSB9gWRIQCcToiwR4r1B7AAYNQemLgKGPDDrw9hngB9mSRjWeDeI5W7AhugoFgcTORFXIAG03bxRHwwW%2Br3zFU4zOcogSx7hNWfUBLTDXHqI3SlQzY5TiCelqthXgHJ2EeIgFEnT%2FwenhJXGi%2Brcoh9OX1NBstmpRl8chXFWoCCopwxuzN5iVKeqcAj2c9xwSWpW8WSmYpjSlWieqPARs54ankJH57xTCFNGQm5AhKrAlx9S%2BIY3eeUqtuJl%2F%2BUPk6JymLRX277Wyi1dG%2B3vbBk7QQ2O3%2FGFmdDTM4%2FdTT5d27CIabYqR9THTqOuPB%2BgwlDhGf4YYSpO6hq4gCq7MMbrz8kGOqUBLycDsO3kscL20Sp%2FwaS7ytzx9Qtz8wyYfDee9BqaVrJNyPmcF0%2F85ZWDTXupKm%2F50oKxncPkZoPp%2BURwi980NKa9kOukPFrqs3v4HjAPTpIVeWBsB4LffSDoLek5qW77Hw%2BNh7kIkqBNPv9d%2BnN14YfYlwxiSgcJzafpkpkGzASn2FZEiJuh72%2F92OX8XCBuh4KvtCcpwSsUocFZxIMIrkrJIuMb&X-Amz-Signature=fcf53df7c9ce7e5330302f1b06f9640c75c4473379f02f09730fd30190232270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU3VZ4XM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFatZTc3o431RYFqKn4cNVO34h0tU7Qb5J99DrwCbSoZAiEA4i64tUzF26mReo1hCwftt9bcPaulDLgc8%2BqvIZjGoi4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKXGFbafNWrWOYaoTyrcA9aAk5rqq6stQy4RQRp2vw7MucM0Mb5BSmZo%2FsGmcbKviio%2BLkyJ7A7FP94PVUitJy0EvkRrJVlff0BCTphX4eFFhvH2IzsvUcZumz0wmGE7v4%2BUdpPacCOU1Dwz95awzH7td5oubnF2cPf7iFmCdrVkk0sZ4IFmfenid1eUJVg3%2Fgsc%2Far5QxKUEuipNkXg9E%2FOWzoo4zNDD6Y5lT1o%2FbbkCwZsSgM7mc9OiM8HSEnCB%2F17ZkrVNwbfRnML5%2BMeKPoU14FSGL43gmRK7dhhP8ixR0jQKWD5hxu7aAGbgSB9gWRIQCcToiwR4r1B7AAYNQemLgKGPDDrw9hngB9mSRjWeDeI5W7AhugoFgcTORFXIAG03bxRHwwW%2Br3zFU4zOcogSx7hNWfUBLTDXHqI3SlQzY5TiCelqthXgHJ2EeIgFEnT%2FwenhJXGi%2Brcoh9OX1NBstmpRl8chXFWoCCopwxuzN5iVKeqcAj2c9xwSWpW8WSmYpjSlWieqPARs54ankJH57xTCFNGQm5AhKrAlx9S%2BIY3eeUqtuJl%2F%2BUPk6JymLRX277Wyi1dG%2B3vbBk7QQ2O3%2FGFmdDTM4%2FdTT5d27CIabYqR9THTqOuPB%2BgwlDhGf4YYSpO6hq4gCq7MMbrz8kGOqUBLycDsO3kscL20Sp%2FwaS7ytzx9Qtz8wyYfDee9BqaVrJNyPmcF0%2F85ZWDTXupKm%2F50oKxncPkZoPp%2BURwi980NKa9kOukPFrqs3v4HjAPTpIVeWBsB4LffSDoLek5qW77Hw%2BNh7kIkqBNPv9d%2BnN14YfYlwxiSgcJzafpkpkGzASn2FZEiJuh72%2F92OX8XCBuh4KvtCcpwSsUocFZxIMIrkrJIuMb&X-Amz-Signature=0f7d0f7f12b5dac7fdc77f2933892997f4fac43936abaf8c0b36bc9e0b709c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
