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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLU7TZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhqU6WKPmJdgYB7ztThAfqk3GHaGzhh7ORazSmfJp13AiBk7mQLucFAuYy8Cx9P9DY9b1lhXpYWkcSKf46PrHfY5CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRqQgkerQBWR%2BmLqKtwDzMvnR5JIqgKm3LvlB4bb1lxinf3Xs%2FrIn6Y2ac289EOr3n6JnPVOlnZLAy9zj2TnU7oQAG4HG2EocXLwBlQ4xP8NEf4of5E7emYYoHYaUBYiU33O9%2F85O%2F1IbLhS5Kvmrr5pMpZ18A0q8cKShD8T7NLOpPayz%2F%2B6lHQepJkqPKJOAmvqpZYDCVcOJlromA9ymyKncfw5inghhEvytM%2F1bFkGVfGYiAXci%2BzSnO1Rhkl5ZJYm8IKiX0nfLx%2BJsKuc1TUe0aEsO0qWzQDiJcK6tPKzDlDz%2BUybKk%2BteoeIgMlRi4bG%2Fgvjt44A1GBMyj8u%2FSCEU1JVGbQjTVZrJGWfdJbgtD%2B8WS3GkEpQdpRb41DHDIT9%2FvVySXbZy8oplJ8gsknWdAgvFi7wYw2MZnhtGrJ7MiondfcMdWiec1sVi%2Bi85sEJfmGfBce%2FMY6c8YY%2FbnwNx6WsZmupCvtAxaXrDmRU6x4itTrtjw37Hw2CrU88DzMOeJc%2F5R1h6lJq%2Fqppz90PxSJFtp4V2mojxY8jsEUcOTqibq5i3KPWNkNly1TRn8N0BPwxyoAQIJUoFsyh5LPAjVdhw3d9LYpg%2BDuvtm7zpOYHccNkjGr%2BCobO1xJJ%2FiUc2Zs1ybfXJUww76CLygY6pgEMQCK7yy8MMnpKA1oeyis9TGsnhp%2BBlEAfd5Oc7yf91VnUwnA6y4aMladMPV%2BVIvGYyZEKdy1ILJ%2BRQ%2Bjaf44O3xNe4PMscNKDlHPqvXmDPfNe0QYpZQbBw8mjkqV5%2FE%2B99n900gAt5Xl06NURzxzFTJdHV3P4BgCdtJ1waQVt2GN%2Fiva6CwxFL9qDA4yQCrgmISfJkVxPIrPDvtaE5WA2A%2BWb%2FGq%2F&X-Amz-Signature=10a2bcaf02a05361fc788c6b08de959866687eb8e5d057acecf85465f310aae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLU7TZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhqU6WKPmJdgYB7ztThAfqk3GHaGzhh7ORazSmfJp13AiBk7mQLucFAuYy8Cx9P9DY9b1lhXpYWkcSKf46PrHfY5CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRqQgkerQBWR%2BmLqKtwDzMvnR5JIqgKm3LvlB4bb1lxinf3Xs%2FrIn6Y2ac289EOr3n6JnPVOlnZLAy9zj2TnU7oQAG4HG2EocXLwBlQ4xP8NEf4of5E7emYYoHYaUBYiU33O9%2F85O%2F1IbLhS5Kvmrr5pMpZ18A0q8cKShD8T7NLOpPayz%2F%2B6lHQepJkqPKJOAmvqpZYDCVcOJlromA9ymyKncfw5inghhEvytM%2F1bFkGVfGYiAXci%2BzSnO1Rhkl5ZJYm8IKiX0nfLx%2BJsKuc1TUe0aEsO0qWzQDiJcK6tPKzDlDz%2BUybKk%2BteoeIgMlRi4bG%2Fgvjt44A1GBMyj8u%2FSCEU1JVGbQjTVZrJGWfdJbgtD%2B8WS3GkEpQdpRb41DHDIT9%2FvVySXbZy8oplJ8gsknWdAgvFi7wYw2MZnhtGrJ7MiondfcMdWiec1sVi%2Bi85sEJfmGfBce%2FMY6c8YY%2FbnwNx6WsZmupCvtAxaXrDmRU6x4itTrtjw37Hw2CrU88DzMOeJc%2F5R1h6lJq%2Fqppz90PxSJFtp4V2mojxY8jsEUcOTqibq5i3KPWNkNly1TRn8N0BPwxyoAQIJUoFsyh5LPAjVdhw3d9LYpg%2BDuvtm7zpOYHccNkjGr%2BCobO1xJJ%2FiUc2Zs1ybfXJUww76CLygY6pgEMQCK7yy8MMnpKA1oeyis9TGsnhp%2BBlEAfd5Oc7yf91VnUwnA6y4aMladMPV%2BVIvGYyZEKdy1ILJ%2BRQ%2Bjaf44O3xNe4PMscNKDlHPqvXmDPfNe0QYpZQbBw8mjkqV5%2FE%2B99n900gAt5Xl06NURzxzFTJdHV3P4BgCdtJ1waQVt2GN%2Fiva6CwxFL9qDA4yQCrgmISfJkVxPIrPDvtaE5WA2A%2BWb%2FGq%2F&X-Amz-Signature=d1c47ebad3486a95f10d2c791f38b2950f7830f74911a21647bd6ff68237f82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
