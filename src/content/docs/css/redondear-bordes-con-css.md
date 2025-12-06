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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBZNEKB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhjnCLsgfdT6DJ9x5EntDQiS2vSGU8qvnslEK9yM3NgIgLPNXmFBoPjyPsdVF6qxgh9JtlsdUnInB%2FELkXjbke2Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDT96LOLScod9GchAircA%2FJOLO1dnMgTb70EVz0K6xDw3pnGooUW%2BpwhoqnPLc3dRrEe8QVYpdKstuGlT8f2RO%2BZYDhD6L5OQJpSchDVrnNhfc5JhBXDuNZchVM2l1U1ubXoY1U59gmytiZVi%2FUF0HEvTXUZwZEjOHrN33CUXa6eYetcLkAZtjZD%2BqifxTkXJMx6Xc%2F3nCCpNAAOi7KB1mvEdgIXuOjUuHU0ZMYOL2BcuEOokn%2Bv%2FN73%2FevfUCq%2BZLu12NZIpseh7yuPC%2BT6oeJG%2BolVa9TT0iHPXh7wZmCrrtG%2Bexbg0TD3Q2MRyb9B63j%2FHX5mHa3weEw25lbpJcmYfHEeelxBeQ4U0yylw8H07EnYyfsFB5q9V4Gj4LiTgNd0dW97JaSSJcNnoLxqGUd5uXaep96h1p56oh574cJl3AIJl7%2F8VijN0OPoNiqgAfaaudqBanvRFTsECYJaYxzSgA0lp5DGlzQkDZ5lB3JfuQVDxpeNsEswLvU1LpCdAW8AceLx36OUCanRkSXbnJKEU8JoJFIibSr0ybC7wzJR9ndQg89MTJ5U9Se7EzQ%2FK0g%2Fy7KES%2FqUszGIbJVDQRN4ylFhHsN5%2Fb0mOw%2FfmL5p4c7q%2FP8MCBQal857CfrpTiPPnCadcVuBazjBMMWm0MkGOqUBu%2FiJKFM6Jt4z8lwtgYWjoeBl1BdiDtQ%2BmSF76JPI%2BDq65HOj%2BGSHnSGM1%2BmjGeycnpxA2IRYqXXetVjBGIp%2FE1hVC887mtpZ3TjB486Drs32qj5Ub31eIt1%2FjdGnvDY0yImclzEyWjULjsJ1zHJCliFqfo1q2msFCsi0AsjWhLDDZ9S0pDEH1Z8GQQqRFLJiLyc8dmwhRo9QYe1XiA7TMuOGVpv7&X-Amz-Signature=81da0faf85871bf56d6f6fc6540ff48dfbfece7183d6ed062aeffbba1b4d4557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBZNEKB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhjnCLsgfdT6DJ9x5EntDQiS2vSGU8qvnslEK9yM3NgIgLPNXmFBoPjyPsdVF6qxgh9JtlsdUnInB%2FELkXjbke2Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDT96LOLScod9GchAircA%2FJOLO1dnMgTb70EVz0K6xDw3pnGooUW%2BpwhoqnPLc3dRrEe8QVYpdKstuGlT8f2RO%2BZYDhD6L5OQJpSchDVrnNhfc5JhBXDuNZchVM2l1U1ubXoY1U59gmytiZVi%2FUF0HEvTXUZwZEjOHrN33CUXa6eYetcLkAZtjZD%2BqifxTkXJMx6Xc%2F3nCCpNAAOi7KB1mvEdgIXuOjUuHU0ZMYOL2BcuEOokn%2Bv%2FN73%2FevfUCq%2BZLu12NZIpseh7yuPC%2BT6oeJG%2BolVa9TT0iHPXh7wZmCrrtG%2Bexbg0TD3Q2MRyb9B63j%2FHX5mHa3weEw25lbpJcmYfHEeelxBeQ4U0yylw8H07EnYyfsFB5q9V4Gj4LiTgNd0dW97JaSSJcNnoLxqGUd5uXaep96h1p56oh574cJl3AIJl7%2F8VijN0OPoNiqgAfaaudqBanvRFTsECYJaYxzSgA0lp5DGlzQkDZ5lB3JfuQVDxpeNsEswLvU1LpCdAW8AceLx36OUCanRkSXbnJKEU8JoJFIibSr0ybC7wzJR9ndQg89MTJ5U9Se7EzQ%2FK0g%2Fy7KES%2FqUszGIbJVDQRN4ylFhHsN5%2Fb0mOw%2FfmL5p4c7q%2FP8MCBQal857CfrpTiPPnCadcVuBazjBMMWm0MkGOqUBu%2FiJKFM6Jt4z8lwtgYWjoeBl1BdiDtQ%2BmSF76JPI%2BDq65HOj%2BGSHnSGM1%2BmjGeycnpxA2IRYqXXetVjBGIp%2FE1hVC887mtpZ3TjB486Drs32qj5Ub31eIt1%2FjdGnvDY0yImclzEyWjULjsJ1zHJCliFqfo1q2msFCsi0AsjWhLDDZ9S0pDEH1Z8GQQqRFLJiLyc8dmwhRo9QYe1XiA7TMuOGVpv7&X-Amz-Signature=08c888170b83706f6e55067b31b41a2a2d037980c184c9515a4f248eebaaf4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
