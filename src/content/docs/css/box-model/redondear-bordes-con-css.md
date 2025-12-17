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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDKPYHJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGl3%2BRfJ4sF7kBl2mW%2Fm6pUdySmx5kOYno2%2F%2BQPbpLSAiEAy29vXF%2FoMkbwO4wP4XRAsj7Meq78WyXB5TScKNIixUUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD50V4y9oRDwLco%2FwyrcA0pbNsgFiOhbDbR8Uhu5qBmmNmvhUPpMMUZDmL4G9twed3FB2vmLmB%2BOuUke6cXpPrNlt39fbdr8DCIo5Pxk31GchjYuajqEonJ8P9QaARRC9KUneV4OWFIg%2Bjuwmj0xB%2F8sIIc8L8jlgjl8Xvw1eaDFeZT61i%2ByOhcF3Z%2Fft1d48abOIaY2ROmfZSO7LAunhTPm11BKiXzcrcEe8VR9KRGzg9j7iZp9wmJoNMxk0OYLjbwhwcwDHRPFVO4oSjAtw%2B6q2SNzUHPTSaB8Omsqr7PjYZyf9z8NL7Btppom5bN2rvZ5Z14W4ebBoI6CJZhc0mmedNgdvX%2BTu9rGzD2kVckASNyWbJhs%2FneCg3F%2BsbEpzERf%2F1R5F6abbA4hpNfDxZnCnQwvznM6pcAhYUfWyzcZLS0YdVZ8vdISJ0c1EHQcrcvqNaMeodxc%2BCFgo%2Fy3bnhK0Vo9Dqce5PlZvOxtcrXbdq%2FpBK7NFOGIu%2Bfq1wlAn9AUhOWC5d1yXwhXd5ZsYEcDOmORYgNCd%2FkW793VGRjWn%2FFpopX3NUNc5t9NY6%2BjwazqqwhqVBC2RnRhGgr5Bte1p3wNCf2tk91aKm%2F71EIxWbdHHaXs9RUMBOB6uo8b%2FlPWiaCDMBpxwHRyMOrRicoGOqUBVB6O87hrZf9PWuJIIzk8oafV98HyNQI9Eb5kJhBtU6UHYcw%2F9coRlvoM3t7qEHi1Jny6Rznh41KR0YVYCwcmvHnPhALI393bOn13VKnqJRPCnDKYzzcFX%2B02Z091KBxig%2FmfThskvxHixN2lTHbiFX%2BJXDo%2B4Y92FJqErqmoLb7olSpIHWF1ykrYc2qygBn3aryyQTwMRH6qhYeMcSdoLyfbsCQK&X-Amz-Signature=0161d2c1c5d9ac55b0d12ca455b3379ba2ca47c26403155ca6beaaaaf3d379fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDKPYHJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGl3%2BRfJ4sF7kBl2mW%2Fm6pUdySmx5kOYno2%2F%2BQPbpLSAiEAy29vXF%2FoMkbwO4wP4XRAsj7Meq78WyXB5TScKNIixUUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD50V4y9oRDwLco%2FwyrcA0pbNsgFiOhbDbR8Uhu5qBmmNmvhUPpMMUZDmL4G9twed3FB2vmLmB%2BOuUke6cXpPrNlt39fbdr8DCIo5Pxk31GchjYuajqEonJ8P9QaARRC9KUneV4OWFIg%2Bjuwmj0xB%2F8sIIc8L8jlgjl8Xvw1eaDFeZT61i%2ByOhcF3Z%2Fft1d48abOIaY2ROmfZSO7LAunhTPm11BKiXzcrcEe8VR9KRGzg9j7iZp9wmJoNMxk0OYLjbwhwcwDHRPFVO4oSjAtw%2B6q2SNzUHPTSaB8Omsqr7PjYZyf9z8NL7Btppom5bN2rvZ5Z14W4ebBoI6CJZhc0mmedNgdvX%2BTu9rGzD2kVckASNyWbJhs%2FneCg3F%2BsbEpzERf%2F1R5F6abbA4hpNfDxZnCnQwvznM6pcAhYUfWyzcZLS0YdVZ8vdISJ0c1EHQcrcvqNaMeodxc%2BCFgo%2Fy3bnhK0Vo9Dqce5PlZvOxtcrXbdq%2FpBK7NFOGIu%2Bfq1wlAn9AUhOWC5d1yXwhXd5ZsYEcDOmORYgNCd%2FkW793VGRjWn%2FFpopX3NUNc5t9NY6%2BjwazqqwhqVBC2RnRhGgr5Bte1p3wNCf2tk91aKm%2F71EIxWbdHHaXs9RUMBOB6uo8b%2FlPWiaCDMBpxwHRyMOrRicoGOqUBVB6O87hrZf9PWuJIIzk8oafV98HyNQI9Eb5kJhBtU6UHYcw%2F9coRlvoM3t7qEHi1Jny6Rznh41KR0YVYCwcmvHnPhALI393bOn13VKnqJRPCnDKYzzcFX%2B02Z091KBxig%2FmfThskvxHixN2lTHbiFX%2BJXDo%2B4Y92FJqErqmoLb7olSpIHWF1ykrYc2qygBn3aryyQTwMRH6qhYeMcSdoLyfbsCQK&X-Amz-Signature=8c9a27ffa495673cb2242b9f6c133a18298f8c44f2b308be65f2367755f50ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
