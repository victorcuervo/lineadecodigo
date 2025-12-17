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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWPQBZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQpD2NwY9D73kGWesqRWNuuCcwE0BzKo8J0XvBw25p7AiEAngTH6cWP6YjzmktrDTHKx3JupFf9CDjQDNamM1sobAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK5q1ve60D%2Flc1NeYCrcA%2F1YFuzfQsRJIo6ylVDMkQhtzUCJGOsxcArMS%2BsHkv3MgWZ%2Fgvw9HaApE3ZuWY7ea1kDg%2BQ9GWx6XwS1TkMsCx1eT8RbKls9y%2FoDRX27Ef89Nc7ucnXyUGjOdwYR9Xlra5%2FV0xCunnWlaU2c%2FQLy%2FGwGIMYrfln2O9p4r1fE2lOh9j3RCweyXXtewkSP1FR7oH4RsOdP1hhuGKnnN%2FEPU%2FfMAW1K35Imnbbkq2D2ENxKoA9FXsANbExRSaRW3ToLuOij%2BLzibbbEW3Fkowc9n9VBz0dbyI7TYq08jRKiAePa1bwWaQI8KNWNoORpUF47Lz5Mg2sdrVISaqwkQ2zEcUG76ciDnWm3ChTbUR9AMJ4oImqyAwsUKfTweMYIlTapd82EBWvMpL2oc%2B8wAMlJ4197iFM%2Bh3I%2BdFPD33lGCNOJTzlDLXMnBg%2BkUkykKHiAnKt%2Byq1rKUemwD2S2f5njrPLosegt%2Fpj%2Bd9QAEAbPqtVrS0ofiXO37RFvAzYObXHm6eLIosDH79dcDTn4mkMa1ncRj5Rk8vBkaAxR5fBh2MpNET1RA2hc23XHC%2FJivNJ03Z8%2BohLmVkFD9paHTEVHbAj7WCLoGGUG3nMy7Zt2aunY73c5zEtPR%2B1yfOKMLSDicoGOqUBWKIZtfmhq43wP4sJMEzDz%2FfI8VHqd1fIyIg4H%2Fgqwm7jcgR9F165xvtrLqaetTqdqNF9sXtJ4ACezUzZc7N70NOJ3wacSFzYP86ibSNq6iNRHnC2mIOixmQpEguUhw1H%2B6P7ZfzI3KPkSZ0BYlAPDlW%2FCdaCUNMkvklRDGta6v4Mvol%2B2vW7GDxnaostlGcmzFmghEtuViEgc2pyJzz0o9PpOGOu&X-Amz-Signature=4db0867c87a2ffdfbfd92f51b09c1721bec114c06dbba9e8c61f0215fe2330e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPWPQBZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQpD2NwY9D73kGWesqRWNuuCcwE0BzKo8J0XvBw25p7AiEAngTH6cWP6YjzmktrDTHKx3JupFf9CDjQDNamM1sobAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK5q1ve60D%2Flc1NeYCrcA%2F1YFuzfQsRJIo6ylVDMkQhtzUCJGOsxcArMS%2BsHkv3MgWZ%2Fgvw9HaApE3ZuWY7ea1kDg%2BQ9GWx6XwS1TkMsCx1eT8RbKls9y%2FoDRX27Ef89Nc7ucnXyUGjOdwYR9Xlra5%2FV0xCunnWlaU2c%2FQLy%2FGwGIMYrfln2O9p4r1fE2lOh9j3RCweyXXtewkSP1FR7oH4RsOdP1hhuGKnnN%2FEPU%2FfMAW1K35Imnbbkq2D2ENxKoA9FXsANbExRSaRW3ToLuOij%2BLzibbbEW3Fkowc9n9VBz0dbyI7TYq08jRKiAePa1bwWaQI8KNWNoORpUF47Lz5Mg2sdrVISaqwkQ2zEcUG76ciDnWm3ChTbUR9AMJ4oImqyAwsUKfTweMYIlTapd82EBWvMpL2oc%2B8wAMlJ4197iFM%2Bh3I%2BdFPD33lGCNOJTzlDLXMnBg%2BkUkykKHiAnKt%2Byq1rKUemwD2S2f5njrPLosegt%2Fpj%2Bd9QAEAbPqtVrS0ofiXO37RFvAzYObXHm6eLIosDH79dcDTn4mkMa1ncRj5Rk8vBkaAxR5fBh2MpNET1RA2hc23XHC%2FJivNJ03Z8%2BohLmVkFD9paHTEVHbAj7WCLoGGUG3nMy7Zt2aunY73c5zEtPR%2B1yfOKMLSDicoGOqUBWKIZtfmhq43wP4sJMEzDz%2FfI8VHqd1fIyIg4H%2Fgqwm7jcgR9F165xvtrLqaetTqdqNF9sXtJ4ACezUzZc7N70NOJ3wacSFzYP86ibSNq6iNRHnC2mIOixmQpEguUhw1H%2B6P7ZfzI3KPkSZ0BYlAPDlW%2FCdaCUNMkvklRDGta6v4Mvol%2B2vW7GDxnaostlGcmzFmghEtuViEgc2pyJzz0o9PpOGOu&X-Amz-Signature=8ce68a9d0ba54bea34cee383a93c48d86fcba03e3dd9470fb78560884dd9373a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
