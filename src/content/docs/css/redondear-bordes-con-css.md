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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2VTIJH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdqDO9bcRmd%2FHlEBY%2Ficg%2FsEmdJCH0QhE1OZbbzy40eAiEAt8ismdd1JI3ioLmHH%2BUP7q%2Bb9PlrU7z6jyhd8mm7hY0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIE2HvEHBbANSA1RDSrcA%2FfRDsyJAt%2F4qAw7r%2FowHluXOkPcsUqpPDu0UecCT3ciD9d8UGcEMJdz2eFDqngE9R8NIP7lkyEe9EHnILe4le%2BU7HeKHXa8TSFx83mZTufRFp6zynaZojVmspZ5rWy7elXMu%2FSqdds6qXpVc8DN6uVc%2Fwnub5kTgkhbG%2Fftg%2FDS7A8VG43pT6oEXsqg2e2jNIo9G0GDIfPEDDuF8J1xmIQHAQfB9lyMEGZwfcjX8%2F1PFPF0CpeZO7hckl8Ob3qIQXUYT3gBCR%2FRQ9l158IxqPZXwN41mBC1EsCaBiCI3ceKkveTLuhcmf37FSdiLA9QnMOZRouAEzUan8lyAaw4tD4xPKxoJJncUVh5nLTzLhWSI2kNCHMJX1jzM7i8KBS1%2BCFUmd1U%2FLQMHOFpaseZPAnJn6YzlaqXENS4un2qKYkok9DPVIMy%2FPqcEnDGFH5qLJ0eHHgstoEYDQIhyHO0XkqdCt3iuW4AkcuCsQfvYFDR4N4QgXV4Ndw02%2Bq4L2ke5a8eEpvChtyuJzHEsG2IPiqL4NY%2FZBsOyIHKREq0MqiRvfOM%2FmmrwWp%2BpeL1QWxNp5WlBq%2B%2FlBpekRl2AHl4e%2BzT0XekGri1gj8xWggaD0ppMhq0RN0yA0OojMwBMO6J0MkGOqUBRgJTSotY3kLYxGDYwm%2B%2FdZSUMqrYdRYtL75qSPyPjxxHx9sSMRV7rjEfFncLorX3bglYGYL%2B4U7UoT5ez8aL8DEypli4fHVNuR18fzh5jIpzFiwpZ%2Frni%2ByRpQUW3kivqzDKRjR8PoE9KdWdEEqNAiDXYKfeCQT7fFJ3kCnfO0wuH7UFaUvAxonQWk1qvNcDysnIjbouVTmvcEjikzXbVLXAojGf&X-Amz-Signature=11d75a9f777345b71a7c3b67a523b96436ee62f98f64264c337a74b7a79a3b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2VTIJH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdqDO9bcRmd%2FHlEBY%2Ficg%2FsEmdJCH0QhE1OZbbzy40eAiEAt8ismdd1JI3ioLmHH%2BUP7q%2Bb9PlrU7z6jyhd8mm7hY0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIE2HvEHBbANSA1RDSrcA%2FfRDsyJAt%2F4qAw7r%2FowHluXOkPcsUqpPDu0UecCT3ciD9d8UGcEMJdz2eFDqngE9R8NIP7lkyEe9EHnILe4le%2BU7HeKHXa8TSFx83mZTufRFp6zynaZojVmspZ5rWy7elXMu%2FSqdds6qXpVc8DN6uVc%2Fwnub5kTgkhbG%2Fftg%2FDS7A8VG43pT6oEXsqg2e2jNIo9G0GDIfPEDDuF8J1xmIQHAQfB9lyMEGZwfcjX8%2F1PFPF0CpeZO7hckl8Ob3qIQXUYT3gBCR%2FRQ9l158IxqPZXwN41mBC1EsCaBiCI3ceKkveTLuhcmf37FSdiLA9QnMOZRouAEzUan8lyAaw4tD4xPKxoJJncUVh5nLTzLhWSI2kNCHMJX1jzM7i8KBS1%2BCFUmd1U%2FLQMHOFpaseZPAnJn6YzlaqXENS4un2qKYkok9DPVIMy%2FPqcEnDGFH5qLJ0eHHgstoEYDQIhyHO0XkqdCt3iuW4AkcuCsQfvYFDR4N4QgXV4Ndw02%2Bq4L2ke5a8eEpvChtyuJzHEsG2IPiqL4NY%2FZBsOyIHKREq0MqiRvfOM%2FmmrwWp%2BpeL1QWxNp5WlBq%2B%2FlBpekRl2AHl4e%2BzT0XekGri1gj8xWggaD0ppMhq0RN0yA0OojMwBMO6J0MkGOqUBRgJTSotY3kLYxGDYwm%2B%2FdZSUMqrYdRYtL75qSPyPjxxHx9sSMRV7rjEfFncLorX3bglYGYL%2B4U7UoT5ez8aL8DEypli4fHVNuR18fzh5jIpzFiwpZ%2Frni%2ByRpQUW3kivqzDKRjR8PoE9KdWdEEqNAiDXYKfeCQT7fFJ3kCnfO0wuH7UFaUvAxonQWk1qvNcDysnIjbouVTmvcEjikzXbVLXAojGf&X-Amz-Signature=422a9d972c9dd548913ea52cf15fd97f9b34510733a5d48e4a9f33cebb088d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
