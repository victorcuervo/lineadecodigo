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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G37C67I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzrv091dxNT6QctZtx5t%2FWjN99q1LJiIGcCIhggfvlwIgLYpvjqiIQ1CR8PfDgpkwdPljWB2JNLVNvI5BtowwNPEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG60Z%2FAvDs8MVX95zCrcA9BdfkUEfzB3mz%2BWs0Ce%2FLKuH3ltrro3JoOG5R6Zq5vHWA0EvSynU%2FsRVbeGKOAP%2FGfhVhXUX5pYy2aS2o0D3xR1cZRYM9SfC0NI0SVxjMcWVpBh3B8IfVVIe4sJPMNYomzgSBCzgQpbjAkUN1fifkv1jNRNwUq%2BbL8T%2Bhb0RrrQSYksQulw9Dyp9pG0SaK5GWDpKfWuLcXmjkpiFitiXhfhNsXHvnrVvjPSTbsLYQLkTlMVUK%2BlRcM21ahUa2bwIcXBAGB%2FGHEsGr%2BDbLtlQcPv%2FWbzXiAv%2FsjM89Fdaspm8VuxbF6yXFTd%2Bjx2W8GbkXfzPbbTW23L4PSTnh8DU%2Fi1BoAwikGsPb9bEcRGCPzYPuQEcec6N51efny5%2BLBTshv7hPhVTpb4P5Vukh9y%2Bam85y40CQ6cJLkyof4capPMWmX7rS4l8x5USrj5ZUlmTRCv%2B29e7s0FB5nxLDR7H1UEWbEn0fImj67Ap6qywwIhTVh3T5f2qFJ4ZzwQHcIH2M9ty2JFQ0y7rh7nYaKtMC3t386KCmL%2FDSD8dHmxd8Q3L7D5tRAdd17tRTKhBnkqdy3qEv9RGw1yzplwfSGOBz6s5NMYYr%2BHTGyx6KeeCeURibUjZ4HkSo8ZvdolMKG4icoGOqUB7QKRX2p%2BOuAWITr6BrvBeq8aYbbxWHcC1lhT8PkSk%2FLCxJ5ZXVLt1KAmfrPGCKfbdExB7l6yVOjxLBLNEY7KEJVpV3r%2F823ke435wMLM9iAcX3xLmTg9t6DFrbNvryQPrHwO3CStfPZNd%2BeydJHjRPSqKRNcyDhgKVDb2WdrdCKXoPPmOZqPUnpIybEcuoed2nOPeb7%2FDUtc95NSHFj5JnGGQiHB&X-Amz-Signature=2b6acf878b25961266de2171c17814c58e900a5a6716155ca42135a54f481e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G37C67I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzrv091dxNT6QctZtx5t%2FWjN99q1LJiIGcCIhggfvlwIgLYpvjqiIQ1CR8PfDgpkwdPljWB2JNLVNvI5BtowwNPEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG60Z%2FAvDs8MVX95zCrcA9BdfkUEfzB3mz%2BWs0Ce%2FLKuH3ltrro3JoOG5R6Zq5vHWA0EvSynU%2FsRVbeGKOAP%2FGfhVhXUX5pYy2aS2o0D3xR1cZRYM9SfC0NI0SVxjMcWVpBh3B8IfVVIe4sJPMNYomzgSBCzgQpbjAkUN1fifkv1jNRNwUq%2BbL8T%2Bhb0RrrQSYksQulw9Dyp9pG0SaK5GWDpKfWuLcXmjkpiFitiXhfhNsXHvnrVvjPSTbsLYQLkTlMVUK%2BlRcM21ahUa2bwIcXBAGB%2FGHEsGr%2BDbLtlQcPv%2FWbzXiAv%2FsjM89Fdaspm8VuxbF6yXFTd%2Bjx2W8GbkXfzPbbTW23L4PSTnh8DU%2Fi1BoAwikGsPb9bEcRGCPzYPuQEcec6N51efny5%2BLBTshv7hPhVTpb4P5Vukh9y%2Bam85y40CQ6cJLkyof4capPMWmX7rS4l8x5USrj5ZUlmTRCv%2B29e7s0FB5nxLDR7H1UEWbEn0fImj67Ap6qywwIhTVh3T5f2qFJ4ZzwQHcIH2M9ty2JFQ0y7rh7nYaKtMC3t386KCmL%2FDSD8dHmxd8Q3L7D5tRAdd17tRTKhBnkqdy3qEv9RGw1yzplwfSGOBz6s5NMYYr%2BHTGyx6KeeCeURibUjZ4HkSo8ZvdolMKG4icoGOqUB7QKRX2p%2BOuAWITr6BrvBeq8aYbbxWHcC1lhT8PkSk%2FLCxJ5ZXVLt1KAmfrPGCKfbdExB7l6yVOjxLBLNEY7KEJVpV3r%2F823ke435wMLM9iAcX3xLmTg9t6DFrbNvryQPrHwO3CStfPZNd%2BeydJHjRPSqKRNcyDhgKVDb2WdrdCKXoPPmOZqPUnpIybEcuoed2nOPeb7%2FDUtc95NSHFj5JnGGQiHB&X-Amz-Signature=3c4036ab1e493d581993a4902224df445718bb725c78620355f5542a4dd6c983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
