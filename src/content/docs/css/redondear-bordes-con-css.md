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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PM3XKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDceMsgZuKHLZ32NYPa1E9hFPTOdfcaXHfWvcLiZnZD9AIgcjr0Zodfw8IdVZjhuu5OeAydkflSvtc1MVZT3FvDQ9Aq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLZefgXb5eF70W2LdyrcA1Ml2S1gFnhvi6%2BSX%2FoAlIc3lDybEMWOyJbsrf4q1N9xmmLxQUn5sVXBSjtA4a1UwPehwrlOq5UrEpvd%2BJACfcnxDy2kEC%2BJdMTTrQfwEQ3qctW1qjlcYHhmplZhep6EiXCwqTf1o%2B3ocUH6WgXIpGWNioOsPF1QEdCKGOPRPANhHSEkA8tqsBd0WVefnHxUxEBYeKtp7qEfTDjT8XqZ3nnG1jCjNYAA1ZvLWKVpfLPHXIiXOu4LdQ8J%2F%2FvsoezokhtZQ3IaW5QW5mubwaQ6xzaPDOdLY57hoMBrSiZt5h9R4blIuIEMlrktkSvdqBjhZcdtUY%2BIjUMsWIMrRTjIheXw4fvKNqoadsaY8QTkeZlvUMX3UBkhuV6CrmurWr4owdagIGcr2U%2BQJSLZuKrXosvutmu0h%2B8aVCmkcTOq%2BYDWbKzVtHNpKPE4NCfcbX8X9ZiCbYPF%2FlMRoAG9BaiS3CFxZv87Tn8vdOtNR4%2BI91E8IQKS%2FohflnXTBu%2FsSpfSeEI9K326%2FRaE0lJtq58uWoLRITn2Kx25fy3MA6HRVovu6z%2FF5vBoz6eJ54wVduKfvrQLcfWjfvhWjBMf4ZjRNxM8Yhls3Wm8NX9Pm%2Fp5ASl9H4L2AdO0XgQCWlPpMI%2BJ0MkGOqUBVizX5K0232fGtXs8cHSdofqxq5AEol5jXERKPDTU9MKvx3Hb7ZpGrAZFSdr2z%2BnROOy7y9rp5lsjivxANpJr6pH2bXi7L01V3Vd9IT4smpV6JkYCVf0xniIQYIJNZyyYotP3jKjs1een6mAnWf8WFnChBibAS94Vaakkzunh9zxh5nyI6e8dQy%2B7KSSk12mZVu9VTvoqxClfTHQGg3k2RCaGtBia&X-Amz-Signature=1160a723f3ce6900694283c03cf93ab05eea288c323bd96c9a2da23509970a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2PM3XKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDceMsgZuKHLZ32NYPa1E9hFPTOdfcaXHfWvcLiZnZD9AIgcjr0Zodfw8IdVZjhuu5OeAydkflSvtc1MVZT3FvDQ9Aq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLZefgXb5eF70W2LdyrcA1Ml2S1gFnhvi6%2BSX%2FoAlIc3lDybEMWOyJbsrf4q1N9xmmLxQUn5sVXBSjtA4a1UwPehwrlOq5UrEpvd%2BJACfcnxDy2kEC%2BJdMTTrQfwEQ3qctW1qjlcYHhmplZhep6EiXCwqTf1o%2B3ocUH6WgXIpGWNioOsPF1QEdCKGOPRPANhHSEkA8tqsBd0WVefnHxUxEBYeKtp7qEfTDjT8XqZ3nnG1jCjNYAA1ZvLWKVpfLPHXIiXOu4LdQ8J%2F%2FvsoezokhtZQ3IaW5QW5mubwaQ6xzaPDOdLY57hoMBrSiZt5h9R4blIuIEMlrktkSvdqBjhZcdtUY%2BIjUMsWIMrRTjIheXw4fvKNqoadsaY8QTkeZlvUMX3UBkhuV6CrmurWr4owdagIGcr2U%2BQJSLZuKrXosvutmu0h%2B8aVCmkcTOq%2BYDWbKzVtHNpKPE4NCfcbX8X9ZiCbYPF%2FlMRoAG9BaiS3CFxZv87Tn8vdOtNR4%2BI91E8IQKS%2FohflnXTBu%2FsSpfSeEI9K326%2FRaE0lJtq58uWoLRITn2Kx25fy3MA6HRVovu6z%2FF5vBoz6eJ54wVduKfvrQLcfWjfvhWjBMf4ZjRNxM8Yhls3Wm8NX9Pm%2Fp5ASl9H4L2AdO0XgQCWlPpMI%2BJ0MkGOqUBVizX5K0232fGtXs8cHSdofqxq5AEol5jXERKPDTU9MKvx3Hb7ZpGrAZFSdr2z%2BnROOy7y9rp5lsjivxANpJr6pH2bXi7L01V3Vd9IT4smpV6JkYCVf0xniIQYIJNZyyYotP3jKjs1een6mAnWf8WFnChBibAS94Vaakkzunh9zxh5nyI6e8dQy%2B7KSSk12mZVu9VTvoqxClfTHQGg3k2RCaGtBia&X-Amz-Signature=986c72d9175296e56d1f96d676e5a95cd1443b72b4dbb2398d2a903658c1e213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
