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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSIB44Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl60OiK%2BUpKSsYzCk4IP1w1%2BN1HQRplHkkDlcAqAmH2AiEAuz0upJuoSxus0TZ%2BJW2WdMxsy6nTJAQjICIbOJdCdQcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKV5yZkfwj8MY5RdTCrcAwxtzBuKTCLPs4p5ajp%2B%2B3HiT3yoVxDNG94LUulzbyM0hogWzm8aqyTs7u2JaIUbkiOtidYKkGf3Tj10aAbkMWRUeG5RgVqxmffvU57n9qloh%2BqGpVq2jUCJ%2BPfjWcoDttwSvD%2FqzG2zOxICwkrMyuYHYg2SFFXkrpF8S1074teBvgDYEhEW0igIn0uFFDVafzZFnKs%2Bn9%2Fu94nZag3i5%2Fgrr2otzSA9%2FOI%2B%2FaxHU98r85U1Q9Wg0P0Y2fmGTkOss6BjCgDZKy%2Fw%2BFdRfSSlRqeIKvOPDLrcFRQax8OyBAe2JK6nYTZoYz5yJ4ERygtF8sUFCYHeTbJLcTFRGjQcWmmW5Zz1hBRIboa7KcyQH3vNBo6u4UcLaZs%2FiqMpe8Tdpid1t7UgulvBsYuFjgi%2B2hrorxhWC1FUQAz9SexR7HxUtql0zGRygnjb0WnYsUeh0rDm4l5qui%2Foouqkei2uqO377O5p6yZU8DqpGgchslNzX6YVs0WgqUhcWr%2BWDTWPlcRl6lVfqNxRm%2FunXrbtDB0d4li5cu9fCq9B6Kpo0ySdEaLnlQ03vdaO2N5XtRCSNPzW43eaek8lwvarhSn7HrIXCKBPLL2X5m9srdsanDiFgcn6iewhM%2FE0nICiMJXU0skGOqUBeqcDsg9CA1fg2foZvUAcKuVqsFn10kGxUaQSLInFIB5gIXt%2BzfL8p%2FNjqiSeWXtn%2F1MDD2X5cz3lwhsmqUb%2BDjMLhfSIZkfzVNdsuVO4lbwEDslqM98NRzC7Vz5p5jKoVD%2BZkNkm4BWLtB8kb7l%2BnQIyGXio%2FR7IaFcHEeIP5Ha47V96YK%2Bz2tAe1d9%2Fu1dwOBasBkdg1zZFPO2BruGtM4JqRaaY&X-Amz-Signature=6a4e9c5c2797785ea23c2c325a35173ed6ec6b93e96599ac781a0949d73d58a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSIB44Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl60OiK%2BUpKSsYzCk4IP1w1%2BN1HQRplHkkDlcAqAmH2AiEAuz0upJuoSxus0TZ%2BJW2WdMxsy6nTJAQjICIbOJdCdQcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKV5yZkfwj8MY5RdTCrcAwxtzBuKTCLPs4p5ajp%2B%2B3HiT3yoVxDNG94LUulzbyM0hogWzm8aqyTs7u2JaIUbkiOtidYKkGf3Tj10aAbkMWRUeG5RgVqxmffvU57n9qloh%2BqGpVq2jUCJ%2BPfjWcoDttwSvD%2FqzG2zOxICwkrMyuYHYg2SFFXkrpF8S1074teBvgDYEhEW0igIn0uFFDVafzZFnKs%2Bn9%2Fu94nZag3i5%2Fgrr2otzSA9%2FOI%2B%2FaxHU98r85U1Q9Wg0P0Y2fmGTkOss6BjCgDZKy%2Fw%2BFdRfSSlRqeIKvOPDLrcFRQax8OyBAe2JK6nYTZoYz5yJ4ERygtF8sUFCYHeTbJLcTFRGjQcWmmW5Zz1hBRIboa7KcyQH3vNBo6u4UcLaZs%2FiqMpe8Tdpid1t7UgulvBsYuFjgi%2B2hrorxhWC1FUQAz9SexR7HxUtql0zGRygnjb0WnYsUeh0rDm4l5qui%2Foouqkei2uqO377O5p6yZU8DqpGgchslNzX6YVs0WgqUhcWr%2BWDTWPlcRl6lVfqNxRm%2FunXrbtDB0d4li5cu9fCq9B6Kpo0ySdEaLnlQ03vdaO2N5XtRCSNPzW43eaek8lwvarhSn7HrIXCKBPLL2X5m9srdsanDiFgcn6iewhM%2FE0nICiMJXU0skGOqUBeqcDsg9CA1fg2foZvUAcKuVqsFn10kGxUaQSLInFIB5gIXt%2BzfL8p%2FNjqiSeWXtn%2F1MDD2X5cz3lwhsmqUb%2BDjMLhfSIZkfzVNdsuVO4lbwEDslqM98NRzC7Vz5p5jKoVD%2BZkNkm4BWLtB8kb7l%2BnQIyGXio%2FR7IaFcHEeIP5Ha47V96YK%2Bz2tAe1d9%2Fu1dwOBasBkdg1zZFPO2BruGtM4JqRaaY&X-Amz-Signature=91262955fed2e6fd1cef6063929d9acbe7e74f72c41276d6ac69123b207bde21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
