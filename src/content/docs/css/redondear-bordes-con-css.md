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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPI5FPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjHCrA1%2Fk78jEznLCBamXAkFlA8QC8AzZYtjyAswQBAIhAPeBT1bCFgIW1AZU%2Fm%2BRtk%2BJmAELhMSeL76iSYBfZFfNKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetZZZWvvMgw3G3U0q3AM2cgdNfCwHSWsrcNGtDLuiF5ZRueQfbgrerx5al1lTEorFMrkADiTH3Bb9%2FGHDLKh9BrpcfYfZGXIcFBE7eJMLVEhO%2FaqS%2FWy%2F95ZI6uPZRet0NFZw5zFELXk0Mqrpzgb6ZOnLd1UhTonD9oUjM4srE4XJLl6PgNc%2F8%2Fe%2B7t1bhQ86r43V45bYNZHh6ZaNDXqnnSqzVMKm0BPx8CRpHyXjIf755yikzhhubXfzH0Kr383WqcOM%2BURbbIfCtSpC6rr8y03qVV7m%2B%2Fx%2BSnfjk95VoKiR7zkblOHORIOv8UZwtpdZtMpCFdr3gOR7NC%2BFeeD%2F8X0MUpDoCBKLkIXkzaYol%2FH2cLC2BnnWD27aqZMQ7koCm2nTnoCNPtAmMvMa%2FvkT3Lpq%2Bpy5DHulsR42tLq7ZrK2tDn8sPXF8BsEr5LNhK8SIfC1gr1sQMbWkPQeApp7e6%2BvOapRn85RVybbCiQSghYSo6lfYMI7iB5IqyzZF9vWIHt%2FWR0gM3a5biwezu6%2FK%2BVvW9f4EsgWzdYPlGHIiilsXrTCvnLhv8XT9o1t6PbvaO98AfLbKpReP17kep8NelZNtoH5rIhfzhyQM4jhmdD8CFoNcAdS7wPJcQ7HaWaCTf2LmZtQwZFxRzC7wtvJBjqkARHrzM9d5RMho5kPKQJrGyfJhcfHffMnO2zAtQ8Vj4M26ZVJYNG88Rt%2B0fSYWbF7NzCMnUDoq%2Fisg9PZiDt8DrXgs1K3XqsCyLPK76dwcJDKlDT3YGnSGi%2BiQtooK9Y7NB40cjovJBzeRqym9CfKYhJJBVSFr4UA4jpsZzk6Hr0qjRZ%2BAGZCiCCqAhV%2BVO3JFWi9ge%2FR5eNTT4Wa9ZVcuqMk%2BGJT&X-Amz-Signature=d773cfe0b935a278e7ca97fa3f3359ebc014aa6b33a068b871e10538a0c57270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPI5FPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjHCrA1%2Fk78jEznLCBamXAkFlA8QC8AzZYtjyAswQBAIhAPeBT1bCFgIW1AZU%2Fm%2BRtk%2BJmAELhMSeL76iSYBfZFfNKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyetZZZWvvMgw3G3U0q3AM2cgdNfCwHSWsrcNGtDLuiF5ZRueQfbgrerx5al1lTEorFMrkADiTH3Bb9%2FGHDLKh9BrpcfYfZGXIcFBE7eJMLVEhO%2FaqS%2FWy%2F95ZI6uPZRet0NFZw5zFELXk0Mqrpzgb6ZOnLd1UhTonD9oUjM4srE4XJLl6PgNc%2F8%2Fe%2B7t1bhQ86r43V45bYNZHh6ZaNDXqnnSqzVMKm0BPx8CRpHyXjIf755yikzhhubXfzH0Kr383WqcOM%2BURbbIfCtSpC6rr8y03qVV7m%2B%2Fx%2BSnfjk95VoKiR7zkblOHORIOv8UZwtpdZtMpCFdr3gOR7NC%2BFeeD%2F8X0MUpDoCBKLkIXkzaYol%2FH2cLC2BnnWD27aqZMQ7koCm2nTnoCNPtAmMvMa%2FvkT3Lpq%2Bpy5DHulsR42tLq7ZrK2tDn8sPXF8BsEr5LNhK8SIfC1gr1sQMbWkPQeApp7e6%2BvOapRn85RVybbCiQSghYSo6lfYMI7iB5IqyzZF9vWIHt%2FWR0gM3a5biwezu6%2FK%2BVvW9f4EsgWzdYPlGHIiilsXrTCvnLhv8XT9o1t6PbvaO98AfLbKpReP17kep8NelZNtoH5rIhfzhyQM4jhmdD8CFoNcAdS7wPJcQ7HaWaCTf2LmZtQwZFxRzC7wtvJBjqkARHrzM9d5RMho5kPKQJrGyfJhcfHffMnO2zAtQ8Vj4M26ZVJYNG88Rt%2B0fSYWbF7NzCMnUDoq%2Fisg9PZiDt8DrXgs1K3XqsCyLPK76dwcJDKlDT3YGnSGi%2BiQtooK9Y7NB40cjovJBzeRqym9CfKYhJJBVSFr4UA4jpsZzk6Hr0qjRZ%2BAGZCiCCqAhV%2BVO3JFWi9ge%2FR5eNTT4Wa9ZVcuqMk%2BGJT&X-Amz-Signature=aa9293a0e86fb7a23b8aa460de9e13a97ab8eac73e6c2e0e6d8a8291e8040ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
