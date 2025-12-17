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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGZQQ2M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIilPlRKYLWVdiaOeYSbwzmr%2BiEjsA%2FFsD5JydYSqOUQIgR03NuxJPJG1B%2F97958MDb8JSLn%2B%2FzdyAmF%2FFE2z%2FguYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJnAmyNlFfAH7NiXuCrcA5dSxQQObveseXScx6jgC8swfWXMZmxnKawCTRK2%2B9u0xdboL%2B%2FGEsOcZS3U6Ok5fP2WMr1f3CG4l2cAp6GcPRt9iCk1rmBHGjEtH82%2BUK4k9oTcvrFbiEbTUX9DvFpO934MZ%2BHo2cnevohyy3oujzvVIJ%2BpINXkDm4yZAuvRIqEZlAwjqtZKdl5%2F4esqSBP%2FnTeB3i38VdMCy65EilVVcHNI%2FwDhMu2NG1Pf6wF4Y%2Bfc8XnY80xkeyzHZqZSOUJTAecPDYf1QWjupCnrblxvCxQPHe8hUtbCt7GNGu0iXE2VaHX0RUqDFBekbT9uUob8nQJSxbddm6xY94aU23k3ZB1gvatRXbkD6tUd40MiB9xpHL8EfYzxCmD1JsqH59qdKOzL7789UL1twgh3FFxh%2FCJNVeD5%2B34zN5OsDktR1Gap1VBO63oFTvYKrHOkS%2Bgk6IggoTspGCHRfcH37lZwhszugAAKDQ6SJSr3ZNQieztFEN%2ByCoPAitdp6x6FABCqvup%2BqX516pP6MB4ITSQE5etvdxj5j8we%2BrPlszAKdMQZLBLNadD4WCqf8rUAJ28NddOalHGlmINSUZHH%2F%2BvCmCMJ48pTdW917AVGEHKqPKRNdNOQbZEygLbXo%2BaMIODicoGOqUByrkyez8Ky7Bvj6Mt9F1W7TKV4IIpI2hSM8YaR%2Bk4XsD2rBiBVgdgux8nDnvLObOcyO%2BNC9BmziOZIf%2FzHMyqpvZL%2BEHHrcr69VGEOM5x%2Ba4R4XOXq%2FOW03iSYxjBR7LpWFo05KacFGQZhso4%2FKEWqTY37cQTXq7TtAyRZxyCJpZGKovh43boDPJfA5gGBsIsvgIuJEr3%2FX0uAP2PUNTetGvLN1xK&X-Amz-Signature=1e325abac05731433dd116fabf86b2bd769dea1fd223794199b485cdcc715e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGZQQ2M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIilPlRKYLWVdiaOeYSbwzmr%2BiEjsA%2FFsD5JydYSqOUQIgR03NuxJPJG1B%2F97958MDb8JSLn%2B%2FzdyAmF%2FFE2z%2FguYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJnAmyNlFfAH7NiXuCrcA5dSxQQObveseXScx6jgC8swfWXMZmxnKawCTRK2%2B9u0xdboL%2B%2FGEsOcZS3U6Ok5fP2WMr1f3CG4l2cAp6GcPRt9iCk1rmBHGjEtH82%2BUK4k9oTcvrFbiEbTUX9DvFpO934MZ%2BHo2cnevohyy3oujzvVIJ%2BpINXkDm4yZAuvRIqEZlAwjqtZKdl5%2F4esqSBP%2FnTeB3i38VdMCy65EilVVcHNI%2FwDhMu2NG1Pf6wF4Y%2Bfc8XnY80xkeyzHZqZSOUJTAecPDYf1QWjupCnrblxvCxQPHe8hUtbCt7GNGu0iXE2VaHX0RUqDFBekbT9uUob8nQJSxbddm6xY94aU23k3ZB1gvatRXbkD6tUd40MiB9xpHL8EfYzxCmD1JsqH59qdKOzL7789UL1twgh3FFxh%2FCJNVeD5%2B34zN5OsDktR1Gap1VBO63oFTvYKrHOkS%2Bgk6IggoTspGCHRfcH37lZwhszugAAKDQ6SJSr3ZNQieztFEN%2ByCoPAitdp6x6FABCqvup%2BqX516pP6MB4ITSQE5etvdxj5j8we%2BrPlszAKdMQZLBLNadD4WCqf8rUAJ28NddOalHGlmINSUZHH%2F%2BvCmCMJ48pTdW917AVGEHKqPKRNdNOQbZEygLbXo%2BaMIODicoGOqUByrkyez8Ky7Bvj6Mt9F1W7TKV4IIpI2hSM8YaR%2Bk4XsD2rBiBVgdgux8nDnvLObOcyO%2BNC9BmziOZIf%2FzHMyqpvZL%2BEHHrcr69VGEOM5x%2Ba4R4XOXq%2FOW03iSYxjBR7LpWFo05KacFGQZhso4%2FKEWqTY37cQTXq7TtAyRZxyCJpZGKovh43boDPJfA5gGBsIsvgIuJEr3%2FX0uAP2PUNTetGvLN1xK&X-Amz-Signature=5d67ef84ddf07c4a765e31d3c9cda958466b951cedae30a62bd2e5e551853338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
