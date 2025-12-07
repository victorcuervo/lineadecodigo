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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7VD4XH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8LbdSKLLv6J9Q%2F6MmyRCwPcNWV7D1IcHbnNE%2BPlEuvAiBoXJyMx108Jy87KqYKgCV0Ztt2Qc4H1c3zoBSZybrGDyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl18x%2Bgj6eo0zfgmAKtwDZY%2FP4D7IhXLMu188DvGvS%2FGzQ%2FLX9lPARo7IjT%2BbePTpVRDdMDYNsvwCyhP1jVeAPqfTgVVzFtZZnpg3drjLUXTqz9zls2nCk9buhAB50uflJHwsjKRJGWNJqVDQ9WUgjOo6gWOyMUjXi3%2Bvl3yUrNxHH44PN8G%2FRSlmk5cjYX3Sve9PhKKQ6g0iY44vSqN2HQCBtwM7dGIXnuvEi1RB9OQ9wRBNwlnXQj6HzVLEO32BYfDVZC3p%2Bq46UMhDkhGQ%2F3pQaAl%2FXnL%2BS%2Blh0WZ7A6H86AcM9SvNXuEW%2Fc3JkNpmaEpGAfNE%2BsWNkp%2BAHBG%2F%2BFUNjl0Gy1cOFEAlK91CQydOGwxqsSecIrjiwFjieZT8rWlEi%2BhZ54VE6Yj4%2FuuLfCO2l2Af06lrKge8eHpMeD4Djkd%2BMQz33XjUaimsYUVQ%2FWr6KGEIZVkaH07de7ak0QaAwNgmjMbNXtJ2p8tYTJngiH0%2FCN8E6rD8%2FIQyBp%2BQ895D2onuvfbIOoxHWMhsvDUzqrDIlsDXkXZs0WxUBcwukHBawfBD%2FXNzka9pWMNlkP7wZZFrgxtw8OtCXDt4aCLXIQqudsCAC96nwpxKQq3At6kLmuJKsBpC7nmG9z8frSy0NH%2B3oNsvhCkwpZrVyQY6pgG9Z2gTxcOQtv3dso47fo2n%2F3QrdBRGPLNflCFYHROY149%2BkZOIKm881xJ4a6QEh%2BHJQHYmQIYd1f3EwCnbWRKAXNPkflEV%2F1ntzMLGZ0jwJlxOwTIPwuc5vPM0AMZM7H8jx%2B931HbuTRzl9hjZvchb3ndRmpdbiXc4aRjwWtEn7RSuiDgmWFZoS17x1%2F9YBMMF98mdhUject8LI2iZ738oC3tMpejg&X-Amz-Signature=1579fc521cbd23b4109420c24f7b3980844776969188053a8925d3a42bd7e087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US7VD4XH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8LbdSKLLv6J9Q%2F6MmyRCwPcNWV7D1IcHbnNE%2BPlEuvAiBoXJyMx108Jy87KqYKgCV0Ztt2Qc4H1c3zoBSZybrGDyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl18x%2Bgj6eo0zfgmAKtwDZY%2FP4D7IhXLMu188DvGvS%2FGzQ%2FLX9lPARo7IjT%2BbePTpVRDdMDYNsvwCyhP1jVeAPqfTgVVzFtZZnpg3drjLUXTqz9zls2nCk9buhAB50uflJHwsjKRJGWNJqVDQ9WUgjOo6gWOyMUjXi3%2Bvl3yUrNxHH44PN8G%2FRSlmk5cjYX3Sve9PhKKQ6g0iY44vSqN2HQCBtwM7dGIXnuvEi1RB9OQ9wRBNwlnXQj6HzVLEO32BYfDVZC3p%2Bq46UMhDkhGQ%2F3pQaAl%2FXnL%2BS%2Blh0WZ7A6H86AcM9SvNXuEW%2Fc3JkNpmaEpGAfNE%2BsWNkp%2BAHBG%2F%2BFUNjl0Gy1cOFEAlK91CQydOGwxqsSecIrjiwFjieZT8rWlEi%2BhZ54VE6Yj4%2FuuLfCO2l2Af06lrKge8eHpMeD4Djkd%2BMQz33XjUaimsYUVQ%2FWr6KGEIZVkaH07de7ak0QaAwNgmjMbNXtJ2p8tYTJngiH0%2FCN8E6rD8%2FIQyBp%2BQ895D2onuvfbIOoxHWMhsvDUzqrDIlsDXkXZs0WxUBcwukHBawfBD%2FXNzka9pWMNlkP7wZZFrgxtw8OtCXDt4aCLXIQqudsCAC96nwpxKQq3At6kLmuJKsBpC7nmG9z8frSy0NH%2B3oNsvhCkwpZrVyQY6pgG9Z2gTxcOQtv3dso47fo2n%2F3QrdBRGPLNflCFYHROY149%2BkZOIKm881xJ4a6QEh%2BHJQHYmQIYd1f3EwCnbWRKAXNPkflEV%2F1ntzMLGZ0jwJlxOwTIPwuc5vPM0AMZM7H8jx%2B931HbuTRzl9hjZvchb3ndRmpdbiXc4aRjwWtEn7RSuiDgmWFZoS17x1%2F9YBMMF98mdhUject8LI2iZ738oC3tMpejg&X-Amz-Signature=f8baa7fa1719559aa9203b3f1f7bf96b2f11f709272d335e7ebcbecc2e0fdd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
