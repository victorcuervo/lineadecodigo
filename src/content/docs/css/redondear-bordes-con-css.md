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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQJVZJ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuRDImQnC5HpctGOM0R5ts427Bs3A93KuGaD%2FJg%2FLs5AiEAy742MPqS1fJU30wWpgBu4Z%2Bfme2UJJNl6w8zyXObA%2Bsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBGCM0hdOBC2GguciircA%2F%2B1%2B%2FxmF98qAoD8a3QGofi7syoWp%2FX5QP6vVPi0qdmy5PQoO%2BKPfXe8rCjHa4EhB16KEFvMR7TzGxhnQ47xWysDc1MSnlFz7ev86ZRca3P157Tl9SCUGtuEYUAdVb15WEnk5bQ45KFzr4ljgY391M%2FHegBq9%2BjerMzPMNCEs29nsjSbupn2PDqDlKpAHeT8CJdPsZVKhvb1JKg2Qgp2%2BtNPFcZ5QzxGt%2B2NB1E1Occ64by%2BUL2OXnknW26xsRIZeBAKiZNO2htDMweYVgt4ZMtSvAnaQ%2Bs1a1DjY7SAd6hxJbYr%2Bg4DAf6NohYizTayj82s8Janh6yLFI3ACgLS6Ctnr2MBOFsWrVeu3SPt7Ef7Cx8L4%2BjWOv6nuQhSzFHvWFpz9uLOUA8VZegRWAf9fB7A%2Bg26%2Bu3%2FydWYxaDXlZBV5dT1q4zyPSId0eMwcGbeLEBsEhfcpM%2B5ybVJG3V4Qv089vvb7YJ3QqdXBgCASYzEMkW%2B4SUWHST2oUfQy7vKlqUVN11b6Vy11RqOKRFcRfO6USpj7IyD1n8gveaUVJzL0i2XTDbMHJrCUpiIvvEd7iwtWzkpvplQiDdbST4RS4b8mhqt0FBD8gNMD0ajuxOF9UVp1Ixzg2%2FD4yy9MLf9zskGOqUBxVJpoF%2BPZuG3%2BlkhZ6VWjMgzvdEvpTw8BJANnzDgPRIuhvf8GkkSQ%2B1I5X2Ja%2FSriDDSL0m33q26gCYgnp%2FBh0UWiwx%2BlqvrFnM5LuahuaCB6%2B3zujir0YoadaWFP1wdi%2F9T5vza%2FA%2FQgO6qSKXDEp9m0Jw6yqiHRGCAXe1mCy9sDhubB5RQkkEPveshO%2F%2B9I3gqexsGkb%2BmQvrv3ADVYC197CXO&X-Amz-Signature=b6190962a088974c381b3725e8decc735e0a79a92936bf5c9becb50887951816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQJVZJ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuRDImQnC5HpctGOM0R5ts427Bs3A93KuGaD%2FJg%2FLs5AiEAy742MPqS1fJU30wWpgBu4Z%2Bfme2UJJNl6w8zyXObA%2Bsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBGCM0hdOBC2GguciircA%2F%2B1%2B%2FxmF98qAoD8a3QGofi7syoWp%2FX5QP6vVPi0qdmy5PQoO%2BKPfXe8rCjHa4EhB16KEFvMR7TzGxhnQ47xWysDc1MSnlFz7ev86ZRca3P157Tl9SCUGtuEYUAdVb15WEnk5bQ45KFzr4ljgY391M%2FHegBq9%2BjerMzPMNCEs29nsjSbupn2PDqDlKpAHeT8CJdPsZVKhvb1JKg2Qgp2%2BtNPFcZ5QzxGt%2B2NB1E1Occ64by%2BUL2OXnknW26xsRIZeBAKiZNO2htDMweYVgt4ZMtSvAnaQ%2Bs1a1DjY7SAd6hxJbYr%2Bg4DAf6NohYizTayj82s8Janh6yLFI3ACgLS6Ctnr2MBOFsWrVeu3SPt7Ef7Cx8L4%2BjWOv6nuQhSzFHvWFpz9uLOUA8VZegRWAf9fB7A%2Bg26%2Bu3%2FydWYxaDXlZBV5dT1q4zyPSId0eMwcGbeLEBsEhfcpM%2B5ybVJG3V4Qv089vvb7YJ3QqdXBgCASYzEMkW%2B4SUWHST2oUfQy7vKlqUVN11b6Vy11RqOKRFcRfO6USpj7IyD1n8gveaUVJzL0i2XTDbMHJrCUpiIvvEd7iwtWzkpvplQiDdbST4RS4b8mhqt0FBD8gNMD0ajuxOF9UVp1Ixzg2%2FD4yy9MLf9zskGOqUBxVJpoF%2BPZuG3%2BlkhZ6VWjMgzvdEvpTw8BJANnzDgPRIuhvf8GkkSQ%2B1I5X2Ja%2FSriDDSL0m33q26gCYgnp%2FBh0UWiwx%2BlqvrFnM5LuahuaCB6%2B3zujir0YoadaWFP1wdi%2F9T5vza%2FA%2FQgO6qSKXDEp9m0Jw6yqiHRGCAXe1mCy9sDhubB5RQkkEPveshO%2F%2B9I3gqexsGkb%2BmQvrv3ADVYC197CXO&X-Amz-Signature=33083fb9bdea50ff6c27581b9467b11b0fd44553898df9613ac15c18982f47b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
