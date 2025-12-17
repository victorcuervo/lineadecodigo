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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336VYFUR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gagAYVzKx1HhgDIKiRX0WfoCMuU5QStdrztOQiH9swIhAJAdEgMiNduhkPCqGOUjyGSzDDXLezSFf6ZvJFv2mzRXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiMPOT0HSMy8cDLM4q3AMWo%2F1jdUCmgqjyjwA0p6RXO15W1sHJt3nQ3rGG%2BeZRZx7Hs2uAuf%2BfmWD2DxAqbyrcG9gA6kazOjeiysL%2B8hQe1tVwK7PTyzsBvFox1SKBCzcjkeC%2BbrN%2FZ%2BtKzY%2BiCWt6dyZ7y6yJuvbDnS1smHksuZL0VCnfPU%2BgFyunSlFkXxxpnZihgtUsgtOsJJc66xSh%2B%2Bkmxgl2QArPRhbHSQj3IaEjX5f8w0V7wJf1PTBRCQnamtwsE6Oqb6vG29LwN45Lm8krec3vu6TfK29MxkY4%2B8v%2BUYwvhBPbdOuKRJRpIC%2BfLzU5DtU2R6z4accM%2FeffKhXiOY1N8kClDFF6kckQ1NLo%2B25ZzHVhtCctWSRNJ%2FUx1ToMaFIiR70%2FhmyQxHvIERK40JL3Z4Hz1ZflCy0Ig99JHxyirsG%2BGCZNNII3QSrRyI95L4K71KNvtOJ%2FTv8V8M93KIz0yQ3bOZX2JK1zrtp6o%2FA3F2v6CSKDbdxGcLLgZzTPiP1E5J6xNI9NdLlmiHGOoOHJ7YZQzgwsjZHWb96C8g23Q%2F3DuC6qtu4d8lwAq4ud3RbAMDzF6eJ1m5E%2Be%2F%2B8RLDZ0F%2ByAC7of90qCqT67jgZ%2FEusCteBj9v3qGbyP6bzY3pROWWJsjDeoIvKBjqkAUb23Ztx9xDNK6tNjoYymsu1ggUV9soBsOnqdbZ5G1tA%2BYSON9EsbBTv%2FQ8VmDD4YmZZGyzWJfSt%2B4qVOG%2FB3gIFexIH4gL8Uct6%2Bo65I2HxrTiWevEQv7p35kS%2FD2qupAs4IvkHIOTAmCdzYfpSV6x588RvpVm%2BWT%2Br1Qi3c2mKTk4IJlXMxFHZG%2FY9Igrb6Vs8qA6vsxGaHXlCV%2FoXBHkYd%2BqU&X-Amz-Signature=156017a495b8cd08248a8762fa36e7aa2bdf4fd9e7d849324b9e71268c1feaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336VYFUR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gagAYVzKx1HhgDIKiRX0WfoCMuU5QStdrztOQiH9swIhAJAdEgMiNduhkPCqGOUjyGSzDDXLezSFf6ZvJFv2mzRXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiMPOT0HSMy8cDLM4q3AMWo%2F1jdUCmgqjyjwA0p6RXO15W1sHJt3nQ3rGG%2BeZRZx7Hs2uAuf%2BfmWD2DxAqbyrcG9gA6kazOjeiysL%2B8hQe1tVwK7PTyzsBvFox1SKBCzcjkeC%2BbrN%2FZ%2BtKzY%2BiCWt6dyZ7y6yJuvbDnS1smHksuZL0VCnfPU%2BgFyunSlFkXxxpnZihgtUsgtOsJJc66xSh%2B%2Bkmxgl2QArPRhbHSQj3IaEjX5f8w0V7wJf1PTBRCQnamtwsE6Oqb6vG29LwN45Lm8krec3vu6TfK29MxkY4%2B8v%2BUYwvhBPbdOuKRJRpIC%2BfLzU5DtU2R6z4accM%2FeffKhXiOY1N8kClDFF6kckQ1NLo%2B25ZzHVhtCctWSRNJ%2FUx1ToMaFIiR70%2FhmyQxHvIERK40JL3Z4Hz1ZflCy0Ig99JHxyirsG%2BGCZNNII3QSrRyI95L4K71KNvtOJ%2FTv8V8M93KIz0yQ3bOZX2JK1zrtp6o%2FA3F2v6CSKDbdxGcLLgZzTPiP1E5J6xNI9NdLlmiHGOoOHJ7YZQzgwsjZHWb96C8g23Q%2F3DuC6qtu4d8lwAq4ud3RbAMDzF6eJ1m5E%2Be%2F%2B8RLDZ0F%2ByAC7of90qCqT67jgZ%2FEusCteBj9v3qGbyP6bzY3pROWWJsjDeoIvKBjqkAUb23Ztx9xDNK6tNjoYymsu1ggUV9soBsOnqdbZ5G1tA%2BYSON9EsbBTv%2FQ8VmDD4YmZZGyzWJfSt%2B4qVOG%2FB3gIFexIH4gL8Uct6%2Bo65I2HxrTiWevEQv7p35kS%2FD2qupAs4IvkHIOTAmCdzYfpSV6x588RvpVm%2BWT%2Br1Qi3c2mKTk4IJlXMxFHZG%2FY9Igrb6Vs8qA6vsxGaHXlCV%2FoXBHkYd%2BqU&X-Amz-Signature=09fa6ff98697f64d90f80710e597637f879719df6645cb4cd280402176d2c77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
