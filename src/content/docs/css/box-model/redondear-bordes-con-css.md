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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE67WPT7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPuLX1rbzHiRRDziD2LrnhSfAn%2BegKCDP3VBOWbj5vwAiEAnJd4egrDV%2BiHJ9Fp7FdrNLI8hpRKq5DOOH2%2Fu7H8Y%2B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNDPYrdTOjnDrbM7MSrcAy03Z5JMYaBhWE9IF6EoYCPy7kJ%2F%2FGr6jL8RSylfrqm8SMsv3qFzG8Ni%2B1bmLVWgdRL0Yq0MGtlOrjt%2BMQ2PNDn8VQgwl73X6pCEyvgQNY0Qo2N9RBBRsTR3ivzsQh%2BgWRYdR%2BxuINMvpvhQVWQ0EzdyIRHsjqK6WsPXHLpPqT0pQLwRXRS4bhXu8w4O7Q68lAIo8MXuyuZXBh7BBChTlC1B4Jd7uopma2p8DjO57ySesGxYMAa7WCrwiBzqKGlbyv4%2Bns9cus5J%2FnER2uJq4uk%2FhKI9bDSC5dCNmITPec1SqyQuH5C4lhILvkJ4CkA0Xlfz6j12sib%2FmVdtW%2Bh0ubBWmqyMhiF7oAs7T%2FItV7LCi3t5FUCkEEF0KtYrKBavMbhPz6YE4QKzwncE%2F%2BUxxrXVfFsyuqTZ2WLFD6m5mqrv%2BgvLVs5EnbwTFsi%2BZVZH6K8ghAy8kIBTjcO3wWNKdkgV1z1pKEjWqD%2F7q6CteSqGzjXi2hzX4xPy7DFfnbcezWT6EOYmoX6fDLIF7J%2BhZfnb%2B2m7uImVKPTk5iBO0j5J1QStlkYfe4iXGfZPNSZlwNuBgqP8lOtpxCm6h8sj%2FQfGgWMc8QTaU6TIyocZ%2Bfb7Fg0d%2FM9OMYSv6GhGMND7h8oGOqUBwLxyCt0X%2BUKhsO3naSy4j1OCnNCS4%2Fw4BqttonzcQpNfmYL9IfhLu58POUys5klUcE7KxEJIRG8EvEyzWgXSINGNTqx2rc2mLUHkIHds0A4WTjLGZVZzGkYQpOrEtocepgGc8FnPX9YCxn0bz2AQEOYzO0h6CV%2FbOvf5HoJJY7lrlAuaxj1AWbhHlwiCyqm62GYQz0V5rDqFDBWuAZpfkhsvpPJh&X-Amz-Signature=090602c6fa01a3415a8f33f351bd211e1b50a06ad7c8f172deea7ae74dfd7dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE67WPT7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPuLX1rbzHiRRDziD2LrnhSfAn%2BegKCDP3VBOWbj5vwAiEAnJd4egrDV%2BiHJ9Fp7FdrNLI8hpRKq5DOOH2%2Fu7H8Y%2B8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNDPYrdTOjnDrbM7MSrcAy03Z5JMYaBhWE9IF6EoYCPy7kJ%2F%2FGr6jL8RSylfrqm8SMsv3qFzG8Ni%2B1bmLVWgdRL0Yq0MGtlOrjt%2BMQ2PNDn8VQgwl73X6pCEyvgQNY0Qo2N9RBBRsTR3ivzsQh%2BgWRYdR%2BxuINMvpvhQVWQ0EzdyIRHsjqK6WsPXHLpPqT0pQLwRXRS4bhXu8w4O7Q68lAIo8MXuyuZXBh7BBChTlC1B4Jd7uopma2p8DjO57ySesGxYMAa7WCrwiBzqKGlbyv4%2Bns9cus5J%2FnER2uJq4uk%2FhKI9bDSC5dCNmITPec1SqyQuH5C4lhILvkJ4CkA0Xlfz6j12sib%2FmVdtW%2Bh0ubBWmqyMhiF7oAs7T%2FItV7LCi3t5FUCkEEF0KtYrKBavMbhPz6YE4QKzwncE%2F%2BUxxrXVfFsyuqTZ2WLFD6m5mqrv%2BgvLVs5EnbwTFsi%2BZVZH6K8ghAy8kIBTjcO3wWNKdkgV1z1pKEjWqD%2F7q6CteSqGzjXi2hzX4xPy7DFfnbcezWT6EOYmoX6fDLIF7J%2BhZfnb%2B2m7uImVKPTk5iBO0j5J1QStlkYfe4iXGfZPNSZlwNuBgqP8lOtpxCm6h8sj%2FQfGgWMc8QTaU6TIyocZ%2Bfb7Fg0d%2FM9OMYSv6GhGMND7h8oGOqUBwLxyCt0X%2BUKhsO3naSy4j1OCnNCS4%2Fw4BqttonzcQpNfmYL9IfhLu58POUys5klUcE7KxEJIRG8EvEyzWgXSINGNTqx2rc2mLUHkIHds0A4WTjLGZVZzGkYQpOrEtocepgGc8FnPX9YCxn0bz2AQEOYzO0h6CV%2FbOvf5HoJJY7lrlAuaxj1AWbhHlwiCyqm62GYQz0V5rDqFDBWuAZpfkhsvpPJh&X-Amz-Signature=ff7a3ecde248c57f601b5686a30cbc304fe79a891e70111e764adb7c4702e628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
