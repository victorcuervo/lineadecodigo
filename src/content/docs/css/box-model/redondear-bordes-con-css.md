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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNXEMV7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbgU6JPmJuR3zsZ0DPECr3Fl0cpHn48KpDRgR20R6tAiBBlFD1UEGAM7sM07Q03ixtUgBtuayb2QSQ3onDF2yCgir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUazjZGXvMG0aqyttKtwDlz2aB1IZA%2BzpStJeK2kaBx52Jp%2B%2BzKLC%2BcWItKDLbEZCToR2ZbAl5F%2FJKGJK4dRmlWpMwCpkgeWPDLrbkKk45inihAjpblLiizciA9WUg6icjouShvHNn7wHnoUrxZgzKEcEkfGGTlXcNHh9u5hmF4%2BLwRqYDb%2FusKgaL8OSIDejYnXNGlQYZDRMYwHM4ZBGNwtzWYPJ9c9cR6Awn1wdZR0jjkxEn3rzC8UghXK%2BOxIqSdcnYHJnvL3fE%2FdVL9Nt8LJ1TquAcnTvhnzP4qryS7GgjRuOLmG0y7My9CbPm7thoa6qZsU7Pj0kGqhdHeXml30Tmsh8Z57T06zmrt4ZhbkWaJlV91j5ZeUrXueoSycSDaRzE2HJuYngIP8JZjwk4gkcl38kbWHFbYmRGeW8mIJjN9z0%2BRPOqcReeHesTagWnyUvJCXZRGYXhU%2FaggtFwf%2BSVx5cAzpWZZiK4AP2CHYEHWOpbM4e0X0HeVaFpZtUl1cS013cQjDwSBoGIaVxN1fyson3VjNNQQbrtAq0pXvTC9rZVySG7TZgZgNmdiz12O0PZLH3IO5pT7lfXALq128NzrwfD%2FrW9bKA%2Bk77Xunbtb9%2FD0jyfga%2BvtXr6vDwDraqZ4Cn4DtdrakwxsaKygY6pgF%2BbCRM4VT51yTeiNiWfZ0wrgITNm9zY1iLJxnywTjnHrJfNsMEw9Ub6BoZNx3QxepK7NLZcqmk%2FdxU%2F1jU8uHWptOCBUDEWkD06gYt2WiengNCk686mN9EIWNR6ZFZjWcJKBOr%2BdGO59pBYJ%2BlqsYYocdk5Egq5pqAL1DsEX83NQyvP8zwQoNfz3gLWbGxAMe6tZPWi9v%2Fe9rIR44FsyiAFSFSnHPP&X-Amz-Signature=5813bd7908a7275ccc440402d48a6882fb6e168c5e97da0e21a5f0d151b70d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNXEMV7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbgU6JPmJuR3zsZ0DPECr3Fl0cpHn48KpDRgR20R6tAiBBlFD1UEGAM7sM07Q03ixtUgBtuayb2QSQ3onDF2yCgir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMUazjZGXvMG0aqyttKtwDlz2aB1IZA%2BzpStJeK2kaBx52Jp%2B%2BzKLC%2BcWItKDLbEZCToR2ZbAl5F%2FJKGJK4dRmlWpMwCpkgeWPDLrbkKk45inihAjpblLiizciA9WUg6icjouShvHNn7wHnoUrxZgzKEcEkfGGTlXcNHh9u5hmF4%2BLwRqYDb%2FusKgaL8OSIDejYnXNGlQYZDRMYwHM4ZBGNwtzWYPJ9c9cR6Awn1wdZR0jjkxEn3rzC8UghXK%2BOxIqSdcnYHJnvL3fE%2FdVL9Nt8LJ1TquAcnTvhnzP4qryS7GgjRuOLmG0y7My9CbPm7thoa6qZsU7Pj0kGqhdHeXml30Tmsh8Z57T06zmrt4ZhbkWaJlV91j5ZeUrXueoSycSDaRzE2HJuYngIP8JZjwk4gkcl38kbWHFbYmRGeW8mIJjN9z0%2BRPOqcReeHesTagWnyUvJCXZRGYXhU%2FaggtFwf%2BSVx5cAzpWZZiK4AP2CHYEHWOpbM4e0X0HeVaFpZtUl1cS013cQjDwSBoGIaVxN1fyson3VjNNQQbrtAq0pXvTC9rZVySG7TZgZgNmdiz12O0PZLH3IO5pT7lfXALq128NzrwfD%2FrW9bKA%2Bk77Xunbtb9%2FD0jyfga%2BvtXr6vDwDraqZ4Cn4DtdrakwxsaKygY6pgF%2BbCRM4VT51yTeiNiWfZ0wrgITNm9zY1iLJxnywTjnHrJfNsMEw9Ub6BoZNx3QxepK7NLZcqmk%2FdxU%2F1jU8uHWptOCBUDEWkD06gYt2WiengNCk686mN9EIWNR6ZFZjWcJKBOr%2BdGO59pBYJ%2BlqsYYocdk5Egq5pqAL1DsEX83NQyvP8zwQoNfz3gLWbGxAMe6tZPWi9v%2Fe9rIR44FsyiAFSFSnHPP&X-Amz-Signature=a6c8733924d989d2e2aa5710f679acc3c8db017934a04ced216d89f3e531f70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
