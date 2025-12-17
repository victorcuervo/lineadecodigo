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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNCEOJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC06S6roLGnX0m928W%2B7sI1Dp7nsa1PdDpIWPIQkjdZwAiEA%2B5dTHqTAgiwd9Vp0D4eFy8u4kN7gjokxtBKMIoqfy0oq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEUK%2F7lvmAcfBxdUFircA5Rs5kAnqPTP%2BZ3GftmQB%2F7HDALLm4ASRXHNRc5mRD2T92Gc%2BBXjytyUvOTAxGEAwIDPstnz%2FRt%2FHb3gX2RNE%2B89xE3oeZHPIRn%2BQEaNrYgmma5p%2F%2BnxHq2McXMJm9lsuMq7Q90D0%2BbDKfGTb4WxGutHBsF9oxO1B2kgn0phXFU7MiIZpU666oWG3JZtaEwX0XRdVzL8IjM0xqYPw3EJtgN205nbhaOF3v9FCstGmqohLiiWrtdi8JB9lk0PoB05I1AUqny17YiojelnemKI1Pv8IdeJiqsZRirwXiKy7euKQP%2Bfp%2FMcmqVVtTfKdXqM1aRF4%2BKql0oWoure7CFlz%2FjidP%2FchQW5e0vEmln4cnbZGMyhr71UFyiUhFxn6q%2BA6004OybRzkfx203sDcrWAN5PQjTy6tMiq7L20o3XP4%2F9KlL%2BtLr2UpWo87oeWqMJA8g39FUWc4jm4JQO%2BU7niFU%2B%2FLMEITut0M5J%2FjoCgPUJKE7ATB5rq1Rw3Oaob54ku6Hu3yUJQSw3J8MwMOMwqeYqL4GDs6OEbaUTwbBhNUHTC4obLMciEJSxO%2BbhjDh%2Be09q5zF4l7UUh1PO3R1L1%2Bc5DHZ24zdrWJdZWda9h8OIBiZG6bWm%2BKnvltz4MKHpiMoGOqUB89Vgn2Jo08ctHK0%2Bqe%2FgyAOHk9PPFTPJbp5JVW46uusmyREBp0VDnHqwYBTZp2noIQNrGmPSTNXQRxO4XcV8kQSjrx%2Ftapsvc3naje3R7nbIVwIx9I4LdnHKpn4qZ9Kvwo%2BV6%2B6c2nAG0XqqrDSPpCdIdnk%2BIJseENhTr5jAA4lEM5fm6vZlEC%2BVxiNZDJo6u8gGxuRedkZjjwfxxVe1oqC2tTQ1&X-Amz-Signature=f97e83c6bf02751695a2896ab33d04c6b8186d130ac5e6f04c055a509019a068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNCEOJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC06S6roLGnX0m928W%2B7sI1Dp7nsa1PdDpIWPIQkjdZwAiEA%2B5dTHqTAgiwd9Vp0D4eFy8u4kN7gjokxtBKMIoqfy0oq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEUK%2F7lvmAcfBxdUFircA5Rs5kAnqPTP%2BZ3GftmQB%2F7HDALLm4ASRXHNRc5mRD2T92Gc%2BBXjytyUvOTAxGEAwIDPstnz%2FRt%2FHb3gX2RNE%2B89xE3oeZHPIRn%2BQEaNrYgmma5p%2F%2BnxHq2McXMJm9lsuMq7Q90D0%2BbDKfGTb4WxGutHBsF9oxO1B2kgn0phXFU7MiIZpU666oWG3JZtaEwX0XRdVzL8IjM0xqYPw3EJtgN205nbhaOF3v9FCstGmqohLiiWrtdi8JB9lk0PoB05I1AUqny17YiojelnemKI1Pv8IdeJiqsZRirwXiKy7euKQP%2Bfp%2FMcmqVVtTfKdXqM1aRF4%2BKql0oWoure7CFlz%2FjidP%2FchQW5e0vEmln4cnbZGMyhr71UFyiUhFxn6q%2BA6004OybRzkfx203sDcrWAN5PQjTy6tMiq7L20o3XP4%2F9KlL%2BtLr2UpWo87oeWqMJA8g39FUWc4jm4JQO%2BU7niFU%2B%2FLMEITut0M5J%2FjoCgPUJKE7ATB5rq1Rw3Oaob54ku6Hu3yUJQSw3J8MwMOMwqeYqL4GDs6OEbaUTwbBhNUHTC4obLMciEJSxO%2BbhjDh%2Be09q5zF4l7UUh1PO3R1L1%2Bc5DHZ24zdrWJdZWda9h8OIBiZG6bWm%2BKnvltz4MKHpiMoGOqUB89Vgn2Jo08ctHK0%2Bqe%2FgyAOHk9PPFTPJbp5JVW46uusmyREBp0VDnHqwYBTZp2noIQNrGmPSTNXQRxO4XcV8kQSjrx%2Ftapsvc3naje3R7nbIVwIx9I4LdnHKpn4qZ9Kvwo%2BV6%2B6c2nAG0XqqrDSPpCdIdnk%2BIJseENhTr5jAA4lEM5fm6vZlEC%2BVxiNZDJo6u8gGxuRedkZjjwfxxVe1oqC2tTQ1&X-Amz-Signature=7a979d3ca0d4d93ff3636d702e2f1b71c333e17ec507564c8ba1783a4483bba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
