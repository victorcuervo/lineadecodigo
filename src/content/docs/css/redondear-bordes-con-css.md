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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJXZJKL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBK0MRKTaTDzaWcJQIKaN7G8t4vi1bc0%2FGB7%2FsSsyjRAiB3V%2B4TAiFNSUn5M0cm911xGwgiXi0eSHixvCBnQhqvayr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0g9KGM6uZBjM0NhfKtwDVL5IPUmB9fRDkh1iAFYO%2FEv0d8KMK3L0M%2FEYqJaWk8XPItkHyzUZWAHf%2B%2BAh8TbHiRmhJ%2Bb950rS9mWGFiZRfT4%2F%2FpcpytViLYRwVBvxDvs5famClm4cRo1%2FSgKOB56f0mgFU62zwOnHCBBev6flFTu6eID7gm2hg1Y3Z5WDi4zZCtAtnVAUzZE7JLPYtbXbIj%2FGB%2F7z1hDA%2FT4h6HxPc19Qr2GKYec2nTY6%2ByjdTJX1r3p9uArhVzKjkrietXA2a9x%2B21rXFx9RQ1fkkSbRzOxhYjk1rDSQWszZ2m2vXqiWPO5OPkV7M45YXT0oG4mX%2FXARA6ZcsQpY2j7ZQES8Rz1X6eR7yVGXW6z5nDXsiY8m5YFCdeN19i7zX8VF%2BghrbK5%2FkCJyWvKpaiy9eZSiq%2F%2BYi4bsru630DOZxtMRbZVMFdRASbzfAZxqGCgS5aASb7rBQd4wn65Mpe6GxRB9tzRV%2BKMIN%2BofHwKn65UWTbTG%2FU6Ca8eQXHIETPWKwapzr41aY6LP9ZUGYnoiNSlwI9xCd2iW%2BSJGinvMLY3o%2BPxBKPwbD5L5vnX%2FVBWC9LINKmjzqW5asrT6IiUTDSprx4452q3VE9Find8EYbtugdfvXe07ZWMynmiW2ZEwrtTSyQY6pgFM3jij6rznG27PPj5E1CmD%2BvgHR48GEZNR%2BQwi25LHjmNaCKsFonooZHAwQNlfNpN7kSqqoiz6S9YHSoyFlD5Hcsz344Ub2wRE0RrK1DZHmNn5mp%2BvKqtvszMU50JLPW1rjDPLzy8ua%2BSbTEUuyu3PqW0ErsWZQbXsYWMYW9%2BAyNZby%2FwV0UazgiyImIYHUBCygMcBwA4ZgYTPhKZbe8sDn6rN8o2v&X-Amz-Signature=60998a3bd488552f3fa0e827ba8db63568854d1ad813902675c772ccc584d694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJXZJKL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBK0MRKTaTDzaWcJQIKaN7G8t4vi1bc0%2FGB7%2FsSsyjRAiB3V%2B4TAiFNSUn5M0cm911xGwgiXi0eSHixvCBnQhqvayr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0g9KGM6uZBjM0NhfKtwDVL5IPUmB9fRDkh1iAFYO%2FEv0d8KMK3L0M%2FEYqJaWk8XPItkHyzUZWAHf%2B%2BAh8TbHiRmhJ%2Bb950rS9mWGFiZRfT4%2F%2FpcpytViLYRwVBvxDvs5famClm4cRo1%2FSgKOB56f0mgFU62zwOnHCBBev6flFTu6eID7gm2hg1Y3Z5WDi4zZCtAtnVAUzZE7JLPYtbXbIj%2FGB%2F7z1hDA%2FT4h6HxPc19Qr2GKYec2nTY6%2ByjdTJX1r3p9uArhVzKjkrietXA2a9x%2B21rXFx9RQ1fkkSbRzOxhYjk1rDSQWszZ2m2vXqiWPO5OPkV7M45YXT0oG4mX%2FXARA6ZcsQpY2j7ZQES8Rz1X6eR7yVGXW6z5nDXsiY8m5YFCdeN19i7zX8VF%2BghrbK5%2FkCJyWvKpaiy9eZSiq%2F%2BYi4bsru630DOZxtMRbZVMFdRASbzfAZxqGCgS5aASb7rBQd4wn65Mpe6GxRB9tzRV%2BKMIN%2BofHwKn65UWTbTG%2FU6Ca8eQXHIETPWKwapzr41aY6LP9ZUGYnoiNSlwI9xCd2iW%2BSJGinvMLY3o%2BPxBKPwbD5L5vnX%2FVBWC9LINKmjzqW5asrT6IiUTDSprx4452q3VE9Find8EYbtugdfvXe07ZWMynmiW2ZEwrtTSyQY6pgFM3jij6rznG27PPj5E1CmD%2BvgHR48GEZNR%2BQwi25LHjmNaCKsFonooZHAwQNlfNpN7kSqqoiz6S9YHSoyFlD5Hcsz344Ub2wRE0RrK1DZHmNn5mp%2BvKqtvszMU50JLPW1rjDPLzy8ua%2BSbTEUuyu3PqW0ErsWZQbXsYWMYW9%2BAyNZby%2FwV0UazgiyImIYHUBCygMcBwA4ZgYTPhKZbe8sDn6rN8o2v&X-Amz-Signature=75db02967dc2bc8d6af842c847d68a744b03e0090a2e3a9858f95e2e9bce5ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
