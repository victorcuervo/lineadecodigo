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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LOGCWCG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATlDWsoMo58vJh2wSzpSEpVGBt%2FGh6GTqRYg%2FdPbtfAAiEAqarB9LvpC2KzkTsuPYhnW%2F%2BjwAJwPmhYqB4qFfn%2B%2FxkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrXDeENp6wyd94JwyrcA8l41EMh5bn2Yh9h2lhSqXeiFWETmLgLsWmoK2nM65AB37gABqyJKDzy%2FaUwlT4QDFkKjc%2BRg5HM2W4LdRzfUEEf5zLi4Gzz5%2FeKHAcSsLfng06iLcf7DTPfmPIB0Ibj%2Fhgwvv2hvHaKyRA%2BYyXXQ463FI3SMwrR9F1ZdoYuQ71DA1WPkyH3mDoKMKm6AXxmFMKwbz4bc1VDkSikrI0T4zeYiDULsIslSNBVYJiAmU%2F%2B1mDn6JqmyVd%2BVbrwqAOEW4IYHmf%2FrGtPV0BIIRkdPSG4fMlXZe%2BQnAOeA6w0BdYB1tZ%2FGJ4JyNx9vIlR%2BiiAo1nJy%2FNUFHg4OM1iCmCm6ZkWmjlAS1b5sOhj%2F1Mc2uToV%2FFRZF2fl1la97U%2FwtqKv58DoCpsbjWkbVPqNCmhU5zjA6Y%2BmBtc3qy7SyLpU7gIhHcSkQzqW4YBJzfVuGCTYMdE6GhiD0%2FeQ3RH6uE8G7vwQgUUurFBrC5cZpdEtKOe7ZiTviWaDSl21KZslwLxSEnUJ%2BnHhJC%2FOCnyJ9cBL54pZ7DUW6SyUVkoHPjXbeHDIU7nTkiyjhFKOB3y834%2BOC%2F3WhNkh3pQnQwjecyFjxpuPo1o2S24UT4C8rQFFiU5Lwt7npnGIOSL2qZgMNTt2ckGOqUBs714Hhgv6T1jXWejc%2FBi8%2FOO6ExDzjMItmulkH7gKkNOkBtBb4TlnmPCI18WI95zdQ2py7aEU4w6a66%2FG5X1KclvT6tizDFlLIZo901CsSrcScfEBXiJ4U568xW6dji3Q0rKk714tMJtl8h20jzFF%2F6XyDIwxHPdmyRnX29HOchlu4DuxV%2F6CsChV%2FfGmsF84fsiaujyFLZnjiMUrFq0T97gAlHF&X-Amz-Signature=c3afe31a336d5eee6b0996d2d2c8beb3f3f020964dbf47782d09a7a824d0beee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LOGCWCG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATlDWsoMo58vJh2wSzpSEpVGBt%2FGh6GTqRYg%2FdPbtfAAiEAqarB9LvpC2KzkTsuPYhnW%2F%2BjwAJwPmhYqB4qFfn%2B%2FxkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrXDeENp6wyd94JwyrcA8l41EMh5bn2Yh9h2lhSqXeiFWETmLgLsWmoK2nM65AB37gABqyJKDzy%2FaUwlT4QDFkKjc%2BRg5HM2W4LdRzfUEEf5zLi4Gzz5%2FeKHAcSsLfng06iLcf7DTPfmPIB0Ibj%2Fhgwvv2hvHaKyRA%2BYyXXQ463FI3SMwrR9F1ZdoYuQ71DA1WPkyH3mDoKMKm6AXxmFMKwbz4bc1VDkSikrI0T4zeYiDULsIslSNBVYJiAmU%2F%2B1mDn6JqmyVd%2BVbrwqAOEW4IYHmf%2FrGtPV0BIIRkdPSG4fMlXZe%2BQnAOeA6w0BdYB1tZ%2FGJ4JyNx9vIlR%2BiiAo1nJy%2FNUFHg4OM1iCmCm6ZkWmjlAS1b5sOhj%2F1Mc2uToV%2FFRZF2fl1la97U%2FwtqKv58DoCpsbjWkbVPqNCmhU5zjA6Y%2BmBtc3qy7SyLpU7gIhHcSkQzqW4YBJzfVuGCTYMdE6GhiD0%2FeQ3RH6uE8G7vwQgUUurFBrC5cZpdEtKOe7ZiTviWaDSl21KZslwLxSEnUJ%2BnHhJC%2FOCnyJ9cBL54pZ7DUW6SyUVkoHPjXbeHDIU7nTkiyjhFKOB3y834%2BOC%2F3WhNkh3pQnQwjecyFjxpuPo1o2S24UT4C8rQFFiU5Lwt7npnGIOSL2qZgMNTt2ckGOqUBs714Hhgv6T1jXWejc%2FBi8%2FOO6ExDzjMItmulkH7gKkNOkBtBb4TlnmPCI18WI95zdQ2py7aEU4w6a66%2FG5X1KclvT6tizDFlLIZo901CsSrcScfEBXiJ4U568xW6dji3Q0rKk714tMJtl8h20jzFF%2F6XyDIwxHPdmyRnX29HOchlu4DuxV%2F6CsChV%2FfGmsF84fsiaujyFLZnjiMUrFq0T97gAlHF&X-Amz-Signature=b231fffb37748aecc1881fd3f92a9e2d81a0db9148405eb2dec05cfdb102a428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
