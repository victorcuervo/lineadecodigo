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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIR63CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADw0MLNNDSQ%2BMNzzaR3ZwjY2%2BXNg6HciJ3h9rVQCkwIhALvWW0i0bGpfLXU%2FZMStnlowi1ghNKOX2Ve8fTf35emrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBwZ%2BFKTEBY%2BQLfC8q3APIHNtVkGfETD%2FXOSV5n9xl8qQ%2BQCCLxjFKKbNFoW9M0Kh%2B6Y0Gpc4I0lyOoPPm%2FSm0BL%2FdwZO8Fn%2BCkCab8kaTAdoGrABg1BPFzd2Yz3zIZ6wqVJBn40b7gPrdaGjPXPy%2F3YGxEveVbTPOk7Ybbc68aTjN0OKUzc9%2BcMG2f3eA3YWdIwxX7xi16EWe4QzYNXqzlh89LSq4bGpwsMZpeouB1%2B1OmXJU9R99jAvxDo%2Bao0kduUmMtJMI6C%2F4n8wbABS52eQj7dwZ1GiokFJGxtlXGrJgDg%2Bu57wu0rvTG61bSAa%2BzoD7xTnt21DPDQln9TFqk1UFmJZWbHRpin8ctezi57WekFv8kroQA%2F2VYT8xSyh1VaJuU8MRMxEXVMxyF8wqnzquSrytEDh9qRxDQ95Tws0haNg3MvVGcxmSgOwY3JiggjG8wNaXbq5ppqxvaSzbwOhbZK%2BKyjON6ElO%2FUxxb7hUEol0B%2Ba4n%2FucIx0fhgPchd6xvtP5VcfuktmU9gqDdg7wtbOBzdQUNr6lHJAcfJeKYuNIElVZfSLl0UsV3FkYCBexCZs3XxsJzlwxfzeIFC7PWrYznwtloZadjGp6Cjv%2Bs5FOQrnxL9ygrRU%2BW8WWRcQYdPvKA%2FjmWDDknovKBjqkAWDQDFuxXyt%2B%2BBgmOwsHiV9nOjYQfiVl%2FH6GdTxFZNJ4GoizzckBJIbiUCMRah2DzTjEHNPk3ucujUIxKMxQ9gQeekgPN9m%2FVhK3f4zAq1GaHUBIB1hLhyDYmnOzjtoCSpHkqvBi15TpvrmdD%2FT7b32FOo%2FMU7u106vZfTMmjx7J4mJhHwbrezgtn6ybIAGvX1IZIRV1gM5Dqy4bHcYaVbibdQ9a&X-Amz-Signature=255917e74e6b784f7a10275771e9c5afb3caec1bdb94a4718b0f8154b2da66c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIR63CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADw0MLNNDSQ%2BMNzzaR3ZwjY2%2BXNg6HciJ3h9rVQCkwIhALvWW0i0bGpfLXU%2FZMStnlowi1ghNKOX2Ve8fTf35emrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBwZ%2BFKTEBY%2BQLfC8q3APIHNtVkGfETD%2FXOSV5n9xl8qQ%2BQCCLxjFKKbNFoW9M0Kh%2B6Y0Gpc4I0lyOoPPm%2FSm0BL%2FdwZO8Fn%2BCkCab8kaTAdoGrABg1BPFzd2Yz3zIZ6wqVJBn40b7gPrdaGjPXPy%2F3YGxEveVbTPOk7Ybbc68aTjN0OKUzc9%2BcMG2f3eA3YWdIwxX7xi16EWe4QzYNXqzlh89LSq4bGpwsMZpeouB1%2B1OmXJU9R99jAvxDo%2Bao0kduUmMtJMI6C%2F4n8wbABS52eQj7dwZ1GiokFJGxtlXGrJgDg%2Bu57wu0rvTG61bSAa%2BzoD7xTnt21DPDQln9TFqk1UFmJZWbHRpin8ctezi57WekFv8kroQA%2F2VYT8xSyh1VaJuU8MRMxEXVMxyF8wqnzquSrytEDh9qRxDQ95Tws0haNg3MvVGcxmSgOwY3JiggjG8wNaXbq5ppqxvaSzbwOhbZK%2BKyjON6ElO%2FUxxb7hUEol0B%2Ba4n%2FucIx0fhgPchd6xvtP5VcfuktmU9gqDdg7wtbOBzdQUNr6lHJAcfJeKYuNIElVZfSLl0UsV3FkYCBexCZs3XxsJzlwxfzeIFC7PWrYznwtloZadjGp6Cjv%2Bs5FOQrnxL9ygrRU%2BW8WWRcQYdPvKA%2FjmWDDknovKBjqkAWDQDFuxXyt%2B%2BBgmOwsHiV9nOjYQfiVl%2FH6GdTxFZNJ4GoizzckBJIbiUCMRah2DzTjEHNPk3ucujUIxKMxQ9gQeekgPN9m%2FVhK3f4zAq1GaHUBIB1hLhyDYmnOzjtoCSpHkqvBi15TpvrmdD%2FT7b32FOo%2FMU7u106vZfTMmjx7J4mJhHwbrezgtn6ybIAGvX1IZIRV1gM5Dqy4bHcYaVbibdQ9a&X-Amz-Signature=0c7e81e49c24f91d945de728c0b60db6089262270a9b5d834fb6b946745b6284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
