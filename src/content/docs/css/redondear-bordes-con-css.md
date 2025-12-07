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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QFIUQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL3pbW9CkXXyR3gg%2B82K5kWGcP4LTWuvHGcBcuDM2XtAiEAkwsGO2Gi%2FOpyIQ1I9VntMfDLOQxvlradFmt%2FKYap1coqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCytcKwxhB09bDSSyrcA0CZN5WpMrDaLkCaxvHDpxLas1khQEwSmskojrVuC0Rik8FsO1Zrn0Fut%2BBMyJMXku4RogmqThWVYobXt4m55FB9o%2BMSd8iPl3uEK72OUx8PKJnB6qZA%2FIAVLgmUZos%2FSPMdsdvnYdNqBF6JglVXsdtiiwMfUH4ttvk%2FY4JKsEkVpgI%2BpVxuyy2iCHNk%2B6cN5T%2Bk8nftyADniCMeYILrNwrx9HElv40cCGOsv0AiPscDGOb8GRNqxt8xCdVyicq5OtRdc1io95IM1j7%2FlkpvQrvkzPWg7EsgncIOAxzJhPSv3pOrJ14y51m899Q5LJAjeFYpP4tkaQ%2FE3TXeGXtNy05lIqJRf3vZuzgMYyPgUpvNr7tK7vrQeFJ8UGmHafeyTtkJx6fdKd0KR01VblKXvL8mEjwWYLiGdoj%2BJAOrUQrOVyU6oWnB8pUBmV4iNRFbkrt%2FAyxPLhiDwRnxqmz3%2Ffr59aCcV3izvm7c0Tj9hkvm%2BIsQz9EwzJZxLc7EdEyawNnOnqe6PqAcH1tHqTzXkyZwQABXoiAp5GnSFG4IxORQT%2Blh682qIBIwgt1LKl7NGJvG5tFvQyYNpEgoZfpxPPCPnvxKKpzJZp6SxjK0rLr%2Bz15JUUuazLA%2FQNuyMNuj1MkGOqUByYOzrg7OAYbFgdgWEV%2FA6ALBViTvkQ%2FnIBWnvhsLkq7MyUYnPF8wsXRYUVg7%2F3GfbyIOv2n0v7MR03WEdIj8UOvM344%2BsIirzZP0bCoCBF9PkxCsDF5Fn8FI2RWUTqkWvNnFjzKkss4n9nGnawSuHL23C5BO65%2BOmZPZWZqtM2NYliMhAbUOOVg970GX1uUCCb%2F95ndWlxDtorPCAUssnhGiBXS5&X-Amz-Signature=9a578f05dcf34a5bece43a7c98677485adcc16ed94765f1c907419a627e1fa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QFIUQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL3pbW9CkXXyR3gg%2B82K5kWGcP4LTWuvHGcBcuDM2XtAiEAkwsGO2Gi%2FOpyIQ1I9VntMfDLOQxvlradFmt%2FKYap1coqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCytcKwxhB09bDSSyrcA0CZN5WpMrDaLkCaxvHDpxLas1khQEwSmskojrVuC0Rik8FsO1Zrn0Fut%2BBMyJMXku4RogmqThWVYobXt4m55FB9o%2BMSd8iPl3uEK72OUx8PKJnB6qZA%2FIAVLgmUZos%2FSPMdsdvnYdNqBF6JglVXsdtiiwMfUH4ttvk%2FY4JKsEkVpgI%2BpVxuyy2iCHNk%2B6cN5T%2Bk8nftyADniCMeYILrNwrx9HElv40cCGOsv0AiPscDGOb8GRNqxt8xCdVyicq5OtRdc1io95IM1j7%2FlkpvQrvkzPWg7EsgncIOAxzJhPSv3pOrJ14y51m899Q5LJAjeFYpP4tkaQ%2FE3TXeGXtNy05lIqJRf3vZuzgMYyPgUpvNr7tK7vrQeFJ8UGmHafeyTtkJx6fdKd0KR01VblKXvL8mEjwWYLiGdoj%2BJAOrUQrOVyU6oWnB8pUBmV4iNRFbkrt%2FAyxPLhiDwRnxqmz3%2Ffr59aCcV3izvm7c0Tj9hkvm%2BIsQz9EwzJZxLc7EdEyawNnOnqe6PqAcH1tHqTzXkyZwQABXoiAp5GnSFG4IxORQT%2Blh682qIBIwgt1LKl7NGJvG5tFvQyYNpEgoZfpxPPCPnvxKKpzJZp6SxjK0rLr%2Bz15JUUuazLA%2FQNuyMNuj1MkGOqUByYOzrg7OAYbFgdgWEV%2FA6ALBViTvkQ%2FnIBWnvhsLkq7MyUYnPF8wsXRYUVg7%2F3GfbyIOv2n0v7MR03WEdIj8UOvM344%2BsIirzZP0bCoCBF9PkxCsDF5Fn8FI2RWUTqkWvNnFjzKkss4n9nGnawSuHL23C5BO65%2BOmZPZWZqtM2NYliMhAbUOOVg970GX1uUCCb%2F95ndWlxDtorPCAUssnhGiBXS5&X-Amz-Signature=7e1e7fcb0eb2349f42d677e1beae7c9b7625f44d6625376fac1637179711418b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
