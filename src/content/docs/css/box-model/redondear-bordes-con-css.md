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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDPS27D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDENVkAScH3oXb2aXVOKKyqDVck1n8QYLsefLSjeob58QIgLNSdMdKCMdlZYFzZMPRS906JuS41EyQzc%2Fe504mL5GEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7wKpYm5TQO%2FrJEKircA7yzuF6lChrCb069vP5GYfBKFC%2BsF4BSbHOvxOhp4DePLzWoEpMzNVgHUrktiR3jQZTCC8NyMTOgQhO6N%2BplHMF7Ey0jFg5nhtCJ3kGGQE1%2FRetwHEaoUjD6YhBiTU7ZBehJm3sKVPx5iFjwAPHTauQP4z3TckFvRjBJHjZ45yew8W%2BLykasesQy1bdinvEtW9DY9Q5vmAyRKasIyUakZceOpb5zvIXapILWbo%2FEbXTOhs7US6tNrhMz2opkZC2Tuhn2z6E367z18KX9w39YhyGCuw4gs6ertKd4NyAkHSXDS4PJb1cSPyX6V7gxrif%2BCFuQkuT1lSp1yO8dWdi5h5B%2BsP1%2BRAs8zlL3xomqJzct1CAh36AmH8QQHtLmFSMkMSTPUbGUFcMldemp90KDeyNLRUTbiur92OvRfEV%2BDVkL42F4GVWCQpJnA2SQGf%2FSvBwa5isy%2B5N4VvU6bwOVvExWz1g16tDRchCS3VWy93CBG3ZRw65Y9QUYvJ4NvThZ3TtCi3vNx01XPiU6Bm4wXK13%2FUWz%2B9oSLX4An%2BqBQCceVgoiR8jsNTTFgQm9digLfQjrgxdpO3XYJUY81QAemggsGT8UfXgxxtN%2FHZE5gdfEGC97KNrzSt8LmPHEMP3%2FisoGOqUBzZMA%2BKv2CvX%2BGfEFUwO%2BxqQzi1r%2BC1drHsin4JPdj8xC9ge0WVWGGjGYdMEIH4jXSYodVmHS8KWNrrh2jb8aMZR8gkEw28aBxltxabyDkbaUkFPax3UMIZeZFubKk5J3GnNl7ibpqsmsflI6wr%2FUpjErM%2FAMGHKKvRVN%2BFuLe5X%2F9S4WqB8PUMHJ3Iph%2F7POE9l4TIfDrOQDmOxEW3m7vr5DAY1C&X-Amz-Signature=0581027ce16f91c7ad0c3a788d566948c375e4cece76397f424acbedf3a60bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDPS27D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDENVkAScH3oXb2aXVOKKyqDVck1n8QYLsefLSjeob58QIgLNSdMdKCMdlZYFzZMPRS906JuS41EyQzc%2Fe504mL5GEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7wKpYm5TQO%2FrJEKircA7yzuF6lChrCb069vP5GYfBKFC%2BsF4BSbHOvxOhp4DePLzWoEpMzNVgHUrktiR3jQZTCC8NyMTOgQhO6N%2BplHMF7Ey0jFg5nhtCJ3kGGQE1%2FRetwHEaoUjD6YhBiTU7ZBehJm3sKVPx5iFjwAPHTauQP4z3TckFvRjBJHjZ45yew8W%2BLykasesQy1bdinvEtW9DY9Q5vmAyRKasIyUakZceOpb5zvIXapILWbo%2FEbXTOhs7US6tNrhMz2opkZC2Tuhn2z6E367z18KX9w39YhyGCuw4gs6ertKd4NyAkHSXDS4PJb1cSPyX6V7gxrif%2BCFuQkuT1lSp1yO8dWdi5h5B%2BsP1%2BRAs8zlL3xomqJzct1CAh36AmH8QQHtLmFSMkMSTPUbGUFcMldemp90KDeyNLRUTbiur92OvRfEV%2BDVkL42F4GVWCQpJnA2SQGf%2FSvBwa5isy%2B5N4VvU6bwOVvExWz1g16tDRchCS3VWy93CBG3ZRw65Y9QUYvJ4NvThZ3TtCi3vNx01XPiU6Bm4wXK13%2FUWz%2B9oSLX4An%2BqBQCceVgoiR8jsNTTFgQm9digLfQjrgxdpO3XYJUY81QAemggsGT8UfXgxxtN%2FHZE5gdfEGC97KNrzSt8LmPHEMP3%2FisoGOqUBzZMA%2BKv2CvX%2BGfEFUwO%2BxqQzi1r%2BC1drHsin4JPdj8xC9ge0WVWGGjGYdMEIH4jXSYodVmHS8KWNrrh2jb8aMZR8gkEw28aBxltxabyDkbaUkFPax3UMIZeZFubKk5J3GnNl7ibpqsmsflI6wr%2FUpjErM%2FAMGHKKvRVN%2BFuLe5X%2F9S4WqB8PUMHJ3Iph%2F7POE9l4TIfDrOQDmOxEW3m7vr5DAY1C&X-Amz-Signature=537318cb3a356eb07dea6cfaa050eb8e46846164568dc4c62184c2bf6f1cf1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
