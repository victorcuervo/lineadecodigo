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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMNO3AZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXdTtXxZZqX8wITfd7V7Y0uh6dmyUIm%2Fk%2BkZp3rThf9gIgH%2FYq7i5OPoeT2OpfWgvfgk1wOBX8GHG9C%2BKLZeEGHjMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrWWdiEu2YwVTPOnircA53OkLuf5PLzZSHOrgcqn%2F66YN78x%2B%2By86hzFITutI8WLsY60pnYVTh%2B2XWdTJh5juJWCB5Q2030Hi7pTY1fbjmZS4NXFQDdyysqF6s9EbWiTDX9ya6OByjKXp7NmexIET1%2BcroK93qfeDpwtN%2BOyCyB%2BTzpbDCA15qmcBfprCv8f8WnSIliI%2F0ucJMn56HBhykV7JdCl8VnuZbDOMI%2FehwsLE9vR%2FhuiPfgY1PAo8KgXmHmnZdgcCUdLL3Uh0qInTZDiVCQXogcRqupZdqEeNgzCWf%2FfFW0kK2inlAWQcx8GoSt6EOx9MpwG2rLog5aKD3A4SfV7f7tXONmwMjWva54fctQkj3hN%2BvrK32CeyINo22j3%2FSkPuymQBs2LWHhDrDvTA%2Fwt67l%2Bdowmyj6ntKssPVNhkpoEDoa%2BHsjoqLugZo64ulYejYq%2F9Y%2BlEbipCBWuSU6cKQjqhCdCv3km6w52aOARqNLdPXiXn2MkVyWXgweFQc4wlAvzgeXKK8OqZeXPtv%2FuZc5tdTXAnRQAwxx0r2hH7aYuUxfmF6Fz1TUif0Jd53U7OdXMMbjLqlIsa%2BI9Bufj3PhRoe6VIsJcI62SAeG7kOZ8nwF0tWNpW3%2BPd4LM%2Fr3MKk0hR5XMKCfi8oGOqUBA8J0Q5kguIe6WkByyUg8M%2BnhYmDM3atxxquTvdUFUukuNuOcfsVqfIrqO32h5fkymFH9HxNr%2BHz5C1bY4cq00YR8zfOmiVSovtLyQ7aSqpXKpUmd0S5JKrVMsMhfQ1FA7Ptr1e9zbhOFDmexOx4SC3IEmYRcq6MGNtyggkrshNE1xZ3Owp0zO21zY0P3NCv9rV18MjMkyk7smQDncCUAgvple2c6&X-Amz-Signature=41808f4042f468b63c364c7b5fed988033f507ac8141adea48370ccfdffae737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMNO3AZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXdTtXxZZqX8wITfd7V7Y0uh6dmyUIm%2Fk%2BkZp3rThf9gIgH%2FYq7i5OPoeT2OpfWgvfgk1wOBX8GHG9C%2BKLZeEGHjMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrWWdiEu2YwVTPOnircA53OkLuf5PLzZSHOrgcqn%2F66YN78x%2B%2By86hzFITutI8WLsY60pnYVTh%2B2XWdTJh5juJWCB5Q2030Hi7pTY1fbjmZS4NXFQDdyysqF6s9EbWiTDX9ya6OByjKXp7NmexIET1%2BcroK93qfeDpwtN%2BOyCyB%2BTzpbDCA15qmcBfprCv8f8WnSIliI%2F0ucJMn56HBhykV7JdCl8VnuZbDOMI%2FehwsLE9vR%2FhuiPfgY1PAo8KgXmHmnZdgcCUdLL3Uh0qInTZDiVCQXogcRqupZdqEeNgzCWf%2FfFW0kK2inlAWQcx8GoSt6EOx9MpwG2rLog5aKD3A4SfV7f7tXONmwMjWva54fctQkj3hN%2BvrK32CeyINo22j3%2FSkPuymQBs2LWHhDrDvTA%2Fwt67l%2Bdowmyj6ntKssPVNhkpoEDoa%2BHsjoqLugZo64ulYejYq%2F9Y%2BlEbipCBWuSU6cKQjqhCdCv3km6w52aOARqNLdPXiXn2MkVyWXgweFQc4wlAvzgeXKK8OqZeXPtv%2FuZc5tdTXAnRQAwxx0r2hH7aYuUxfmF6Fz1TUif0Jd53U7OdXMMbjLqlIsa%2BI9Bufj3PhRoe6VIsJcI62SAeG7kOZ8nwF0tWNpW3%2BPd4LM%2Fr3MKk0hR5XMKCfi8oGOqUBA8J0Q5kguIe6WkByyUg8M%2BnhYmDM3atxxquTvdUFUukuNuOcfsVqfIrqO32h5fkymFH9HxNr%2BHz5C1bY4cq00YR8zfOmiVSovtLyQ7aSqpXKpUmd0S5JKrVMsMhfQ1FA7Ptr1e9zbhOFDmexOx4SC3IEmYRcq6MGNtyggkrshNE1xZ3Owp0zO21zY0P3NCv9rV18MjMkyk7smQDncCUAgvple2c6&X-Amz-Signature=dda7839d7ddd51a1a3f5fabc775543e1d1c332976cbbb1e674dfa55e2b8f50cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
