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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOBMMOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvMk7Zt4EnHvm0cWCAbWxnVCjexRX3Iw0xWWq5IznnOQIgRHn%2BjybBhI26xXHylT66On67iZOik44eYfvP26X5DmIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJjrkh4atvVCxA%2FxZyrcAyQtBQtqLRvB6i198Z8phLFCaTaJk%2FOZiir5%2BWMxULrdO2h8DAtrOFxAU4oc3CLorQi2S1oBtJgonspR%2FLSZRBgCLd%2FAimY0oHFdSguNOvQ5oy9za%2Bfr2whacrGDOUld%2BDsAefh3VYi4a5ONWUWr6rnIig0KyzOKgJh8FxHFgvCidu8wO3li2E7eKZGweiLh%2BSdVHvZQBS0RSCIncy9AGQgROMcY5cJqQ458BhGkquUs8LS5hz%2FBroTNlF41UW1hQCo1YXiHi%2BI%2F2mlusf%2FryzWDyjiiYqJzqoYQurQ87a8POzNG3HfLycX65NchOyf9B4apQUWnsp7sKrxfIk6vxcd25qlSjayZS2YPNH0GkUBcXtwEmEk7DaCkFno9aA227mhy2tVQQh7OW%2F0e8qfMa2oIXVUoleGNaUBsFaiWOIYhaxAz8rwkvghSngD9ntMb8pRmTV6w7h2k4FFAkGgj4IofeJTJRs9Bisx9QhWEvke7I6QTIm1btjpcGoP042yYGWaM%2F9PJp1q3QEHGxeS47APCgqr%2Bkr1ese965SwW%2Bvfh%2BexR3pSNK72q%2FukdPGL%2FI7DXNt3b70FozA5OYHgDryl2qo6ckoGz%2By%2BGtJlpVfl0%2BUSzVGefynSJFMYwMOqdicoGOqUBmqI7HEXJWtaslTbZaSAPze93zKpWABYY8blZhaoatlWoGDBZMvB4eUfykax%2F%2BlaM25BUyLassfnwVbMxixSH3PQu4nGeEjZe3xfzpb16fsiYd9Ud9gjL%2F6MVrJyD4sMlQz7mFMHMBFRr8KXYOjtk7DobXxQexVJYRntawPF4b5k8nfI8WPjOlGbh8k0F%2Fi3sGvhcfQ29nKkKM%2FhdVdBEGqdtFrFw&X-Amz-Signature=54f45d245c98f77b897fd33cc732905744ec7dff6963d8d0c128f43495be2dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOBMMOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvMk7Zt4EnHvm0cWCAbWxnVCjexRX3Iw0xWWq5IznnOQIgRHn%2BjybBhI26xXHylT66On67iZOik44eYfvP26X5DmIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJjrkh4atvVCxA%2FxZyrcAyQtBQtqLRvB6i198Z8phLFCaTaJk%2FOZiir5%2BWMxULrdO2h8DAtrOFxAU4oc3CLorQi2S1oBtJgonspR%2FLSZRBgCLd%2FAimY0oHFdSguNOvQ5oy9za%2Bfr2whacrGDOUld%2BDsAefh3VYi4a5ONWUWr6rnIig0KyzOKgJh8FxHFgvCidu8wO3li2E7eKZGweiLh%2BSdVHvZQBS0RSCIncy9AGQgROMcY5cJqQ458BhGkquUs8LS5hz%2FBroTNlF41UW1hQCo1YXiHi%2BI%2F2mlusf%2FryzWDyjiiYqJzqoYQurQ87a8POzNG3HfLycX65NchOyf9B4apQUWnsp7sKrxfIk6vxcd25qlSjayZS2YPNH0GkUBcXtwEmEk7DaCkFno9aA227mhy2tVQQh7OW%2F0e8qfMa2oIXVUoleGNaUBsFaiWOIYhaxAz8rwkvghSngD9ntMb8pRmTV6w7h2k4FFAkGgj4IofeJTJRs9Bisx9QhWEvke7I6QTIm1btjpcGoP042yYGWaM%2F9PJp1q3QEHGxeS47APCgqr%2Bkr1ese965SwW%2Bvfh%2BexR3pSNK72q%2FukdPGL%2FI7DXNt3b70FozA5OYHgDryl2qo6ckoGz%2By%2BGtJlpVfl0%2BUSzVGefynSJFMYwMOqdicoGOqUBmqI7HEXJWtaslTbZaSAPze93zKpWABYY8blZhaoatlWoGDBZMvB4eUfykax%2F%2BlaM25BUyLassfnwVbMxixSH3PQu4nGeEjZe3xfzpb16fsiYd9Ud9gjL%2F6MVrJyD4sMlQz7mFMHMBFRr8KXYOjtk7DobXxQexVJYRntawPF4b5k8nfI8WPjOlGbh8k0F%2Fi3sGvhcfQ29nKkKM%2FhdVdBEGqdtFrFw&X-Amz-Signature=95d82fc03ed74fa1c40ecbddf168f91c783c6eaf291950041e7733f659853b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
