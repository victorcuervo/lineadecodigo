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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOLCSRBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhijyQZYdMVnKuz1Gvohej9FMsazuhvqqQCYw%2FXKn%2BlgIgW5OJOUjOPMyu%2BwmHCHFifoP8uEfjIEMPsP6c6jdHTc4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOrNsLItNZlYk3tbBCrcA6zzIvi%2B8b6ExeBO%2Fyarprq66DtL%2Buw0VGaWUQvQIxBctoTuKSWxkXfWCRMncpcTzfwldT36CHqjGjcu7z0edF%2BvFnurzlTgDVmmI65dMY5muZnAkCRc1XRZWa%2Bn8Zwn%2FcRRzrmwLSY4C8o15sZFP%2Fh0DVmlmFOYd3dukehVFFwkRBo7N3kPZZewdd9pMTFNg4wvkTkXSun7wjM1%2BuluBT8MI%2FR8dt5KlyqFnHRIsxjjMT5EEM8R4QMrJYUXhCJNgl7NEWD8dHmOakkuwIn5%2FizC2xF8c4YBL3RE7o9DOBkh5Zm1JfrHmhjyMb6aB1X5U8%2BcfxCyfKDazvfl7w7pOJF2luJQitcR%2BQI18br6MvvKPbiB4TI5Pgjl7kyws3vSBExhbLVlnEVMBFH%2B3k2tKiOESbVpri0i0mL6EVsoajO2gudbhNB3vCh0NpqXbda73XzerNdO69eO3nSAxNcfOMC4ZnQ3ftSME9jNBw%2BpguCGc3QkmYCyd8OFXqkBZUrsYTk9HXPoIAi8kkkm0dejDCmPbkxhRQRU20ybz9ABROGlKcw6yiO0yF36htKXsaB9HCpcerlEOXmZzsCnOlpXCcp6s6M3mSIV3FNVVrDWUdnqbSWDgRcd5iNOEu2dMPHvy8kGOqUBzksUNab9hThTJ%2BsGtuhaOxnTwA15sAk1YBBvtK4eik08Re2BlreBGlqg1baNPJPm54j3mLZEHreB%2F%2Fl%2By5XZhTZwpqI7Ia%2FfN3z3n67%2FGCSDZUeWHzgqGjnL1jKjj6vrQaBcodvbe7%2Fz3MqutIaRTLsUbiHWqD6Jn%2F%2FIqEqHDmcMapKaluhc7qKhnf8z79xpZsbckgfce7MZ0KOKirUpYq9S5XzY&X-Amz-Signature=36181939be7cad74a19f83f2aec293f088592c1e7f561b0810bafda68a31a3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOLCSRBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhijyQZYdMVnKuz1Gvohej9FMsazuhvqqQCYw%2FXKn%2BlgIgW5OJOUjOPMyu%2BwmHCHFifoP8uEfjIEMPsP6c6jdHTc4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOrNsLItNZlYk3tbBCrcA6zzIvi%2B8b6ExeBO%2Fyarprq66DtL%2Buw0VGaWUQvQIxBctoTuKSWxkXfWCRMncpcTzfwldT36CHqjGjcu7z0edF%2BvFnurzlTgDVmmI65dMY5muZnAkCRc1XRZWa%2Bn8Zwn%2FcRRzrmwLSY4C8o15sZFP%2Fh0DVmlmFOYd3dukehVFFwkRBo7N3kPZZewdd9pMTFNg4wvkTkXSun7wjM1%2BuluBT8MI%2FR8dt5KlyqFnHRIsxjjMT5EEM8R4QMrJYUXhCJNgl7NEWD8dHmOakkuwIn5%2FizC2xF8c4YBL3RE7o9DOBkh5Zm1JfrHmhjyMb6aB1X5U8%2BcfxCyfKDazvfl7w7pOJF2luJQitcR%2BQI18br6MvvKPbiB4TI5Pgjl7kyws3vSBExhbLVlnEVMBFH%2B3k2tKiOESbVpri0i0mL6EVsoajO2gudbhNB3vCh0NpqXbda73XzerNdO69eO3nSAxNcfOMC4ZnQ3ftSME9jNBw%2BpguCGc3QkmYCyd8OFXqkBZUrsYTk9HXPoIAi8kkkm0dejDCmPbkxhRQRU20ybz9ABROGlKcw6yiO0yF36htKXsaB9HCpcerlEOXmZzsCnOlpXCcp6s6M3mSIV3FNVVrDWUdnqbSWDgRcd5iNOEu2dMPHvy8kGOqUBzksUNab9hThTJ%2BsGtuhaOxnTwA15sAk1YBBvtK4eik08Re2BlreBGlqg1baNPJPm54j3mLZEHreB%2F%2Fl%2By5XZhTZwpqI7Ia%2FfN3z3n67%2FGCSDZUeWHzgqGjnL1jKjj6vrQaBcodvbe7%2Fz3MqutIaRTLsUbiHWqD6Jn%2F%2FIqEqHDmcMapKaluhc7qKhnf8z79xpZsbckgfce7MZ0KOKirUpYq9S5XzY&X-Amz-Signature=fafe84d6f9c541784704f25d1e86c69094d01a653f48fe097aa049189a9de476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
