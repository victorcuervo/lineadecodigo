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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEZCZRH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTGAKRalt8ixHDEXu5ADMxgbyb1JWSXEn9g7BgZLPANgIgBdwni03%2FQPbPhqDED5E8OC%2BdYwYdFMWnIyV2AL%2FoGSkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8tUYcmLorjEZN6MyrcA%2B4TxUyStkV7NcS2wyyXc6KROhup0%2B89reDftAntXmiUn4wFr0%2BrqMeoyozt6Ir6yfSwX3V8NCJvdeD3bFGtax241oluBzA8HDMNYKdMFh25iq1E0OYJlhzVzx2Fd81%2FZ%2F4BcsSQznJTnN%2BywuJlg9VCEUFLXioQAp%2F2hAFwTo%2FP%2BBxzCcRphCaYzpfPKY6o5e%2Fu1rhmolf%2BDkNqSO8STzbkA%2BEsRxGtRcgZNHGhAVrJG7N0u3cguEAh3hUScyib4%2FxX1S%2B3etYWFGeVaVRguKkjPfUknrB3Tu1qwfgtpL3zi5r29XlwTF1IggyyBFlLA030rafYzFNKdWxfvlpL1esm9U9fJAs3PTikRVJvDBimAH8uhpggEOFuJVNZkvnmbiLLYUMkK7F1Yh6Iw2XqIWyASBrwiGPSdAUNuxu4pPRWUC%2Ft7G1lxydinKP4NBl9STQLMvwkU2fPaIQOSutFhVg2GmKjOaUvAaTGlg4X%2FOLhR0lKp24IlPGvrNYN6sSFIj15GGVOrMqPn5kzN77dOQLQLTUR7nIOURM1mFQ1FY5LAdK7%2Bknh6Ah138tF7fu5PXx4qrLKEk46w8nq18kepWDP6hA5t%2FpSq9VIoIYMDou8mBaSPLI6rhcbstfBMI251skGOqUBmdiIUhaUbtLyI4x18r%2BQyVziedRPqHX%2FVCFtKW2q29Z7wsYjE6qSSN5XLqyl4LizmeWn0%2BMCKZqzqzS9wK0IdNKPMzJNGWCy4%2FZNShbJmtf%2FesOF%2BDB72C9pStC0Hb9TPJVqVxt1uOn0I0mHzJcZ5mwburx%2FF1QG6iTl43RTtm%2FnSbo01JpKici9pm0zrq79RihYQ0ZNzRDQK4q5Fszc6ITE82Cv&X-Amz-Signature=e90e7c7bc10c17c1e90cbc818d547759e817227820fcebaeb873695d3a9ba9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEZCZRH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTGAKRalt8ixHDEXu5ADMxgbyb1JWSXEn9g7BgZLPANgIgBdwni03%2FQPbPhqDED5E8OC%2BdYwYdFMWnIyV2AL%2FoGSkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8tUYcmLorjEZN6MyrcA%2B4TxUyStkV7NcS2wyyXc6KROhup0%2B89reDftAntXmiUn4wFr0%2BrqMeoyozt6Ir6yfSwX3V8NCJvdeD3bFGtax241oluBzA8HDMNYKdMFh25iq1E0OYJlhzVzx2Fd81%2FZ%2F4BcsSQznJTnN%2BywuJlg9VCEUFLXioQAp%2F2hAFwTo%2FP%2BBxzCcRphCaYzpfPKY6o5e%2Fu1rhmolf%2BDkNqSO8STzbkA%2BEsRxGtRcgZNHGhAVrJG7N0u3cguEAh3hUScyib4%2FxX1S%2B3etYWFGeVaVRguKkjPfUknrB3Tu1qwfgtpL3zi5r29XlwTF1IggyyBFlLA030rafYzFNKdWxfvlpL1esm9U9fJAs3PTikRVJvDBimAH8uhpggEOFuJVNZkvnmbiLLYUMkK7F1Yh6Iw2XqIWyASBrwiGPSdAUNuxu4pPRWUC%2Ft7G1lxydinKP4NBl9STQLMvwkU2fPaIQOSutFhVg2GmKjOaUvAaTGlg4X%2FOLhR0lKp24IlPGvrNYN6sSFIj15GGVOrMqPn5kzN77dOQLQLTUR7nIOURM1mFQ1FY5LAdK7%2Bknh6Ah138tF7fu5PXx4qrLKEk46w8nq18kepWDP6hA5t%2FpSq9VIoIYMDou8mBaSPLI6rhcbstfBMI251skGOqUBmdiIUhaUbtLyI4x18r%2BQyVziedRPqHX%2FVCFtKW2q29Z7wsYjE6qSSN5XLqyl4LizmeWn0%2BMCKZqzqzS9wK0IdNKPMzJNGWCy4%2FZNShbJmtf%2FesOF%2BDB72C9pStC0Hb9TPJVqVxt1uOn0I0mHzJcZ5mwburx%2FF1QG6iTl43RTtm%2FnSbo01JpKici9pm0zrq79RihYQ0ZNzRDQK4q5Fszc6ITE82Cv&X-Amz-Signature=3589f0180abb633adc5511ccb587dcf162acb60712c28f35fe1fe42c23d1a391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
