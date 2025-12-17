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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIDI367%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbW3yidxySYQ29UZdTOWokiM7JT%2BY29jAv3qm25wSZwIgE8i3K6ovJVYhrNOTFJJY4%2FsnFAczzNtxEwGfKVeBbn0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPjagr6k2d3O7wd3yyrcA03PRWL%2BOpTgsTOlDzJAKe%2FAs%2FrPtq8754ksOmEBzOzY6Q2US6ilOlAOcta6ssv4fqTgqtLFi5ujEzrw4pwgILWKfZedvvdnwDnhigCZ%2FlqqmMKepRD9foUQ9SCopfFlniwiCpOsjWiPm%2FI4XQ3%2FtUDuPEYrIVlKSKgjILKQRsYwX%2FCYRFJKk%2BgfH4%2FnC%2Fq4tRXRn42mghiplo3m7%2BzYBxIjoZOCEp4yoBBPgydyZpWJF0WYulykiUUFHXZizg%2F%2BPgr%2BB%2BSDDAX%2BmFor5BZ5CsTWrkK7c10qwq1ufgh3AN3lJ08l2bgGYJ44qQpQmBkxgA7mNuir%2BStLOyetKFQvjU5%2BkhbbiyKFvoIKgt%2BbJVg1tYOfrCFV8WnbBM2sh2BlR830KJMvkAJI8yHLI0yFaNQY2nJ%2B5RAGKH7zimImrdRRZXRNod3aA0MaASJfmzCfQg7Xfr9dZk7gI0nnZOPNb9uP8teuBkUJEy7m1oh7ctwne7Jn0kjwNkH4EeCw6vOwGpT%2BNfC0r7EoGbqrsVKlsmbYupReeEVFqWUjYEDrRefm7hLXoTEkWRZw1uJ2LnMlJq28vginaqlfr8UeTxcZfYvgIKqiUX%2B3sI7npp0tVoZLXllPZwRa4cT5Cr1AMJyqisoGOqUBnbr3QlV5vPjPwKD3CS%2Ba589H7Toxwt0qB9WJn9oOq4BwuE1BBy7%2BLzh2RiIE1XXbN5Oj0gai4XPgzBJe9N%2F4c3o1mICJcGXgGKXMgKpBJSG4nEss2w7xn8i2Ko5MJSNJqYBNEPyDV39QpHUKvouCapXQwshD39GcU3aCNTxoiIivugBw2VtA%2BStCzZr00T6qxGxIU%2Fk7SjdOPt6syJ1QKRhttBkK&X-Amz-Signature=ae94d393bfa6d78b6bf7c489e939d92c6e88ac7065c93b2f262a689d26a6a872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIDI367%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbW3yidxySYQ29UZdTOWokiM7JT%2BY29jAv3qm25wSZwIgE8i3K6ovJVYhrNOTFJJY4%2FsnFAczzNtxEwGfKVeBbn0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPjagr6k2d3O7wd3yyrcA03PRWL%2BOpTgsTOlDzJAKe%2FAs%2FrPtq8754ksOmEBzOzY6Q2US6ilOlAOcta6ssv4fqTgqtLFi5ujEzrw4pwgILWKfZedvvdnwDnhigCZ%2FlqqmMKepRD9foUQ9SCopfFlniwiCpOsjWiPm%2FI4XQ3%2FtUDuPEYrIVlKSKgjILKQRsYwX%2FCYRFJKk%2BgfH4%2FnC%2Fq4tRXRn42mghiplo3m7%2BzYBxIjoZOCEp4yoBBPgydyZpWJF0WYulykiUUFHXZizg%2F%2BPgr%2BB%2BSDDAX%2BmFor5BZ5CsTWrkK7c10qwq1ufgh3AN3lJ08l2bgGYJ44qQpQmBkxgA7mNuir%2BStLOyetKFQvjU5%2BkhbbiyKFvoIKgt%2BbJVg1tYOfrCFV8WnbBM2sh2BlR830KJMvkAJI8yHLI0yFaNQY2nJ%2B5RAGKH7zimImrdRRZXRNod3aA0MaASJfmzCfQg7Xfr9dZk7gI0nnZOPNb9uP8teuBkUJEy7m1oh7ctwne7Jn0kjwNkH4EeCw6vOwGpT%2BNfC0r7EoGbqrsVKlsmbYupReeEVFqWUjYEDrRefm7hLXoTEkWRZw1uJ2LnMlJq28vginaqlfr8UeTxcZfYvgIKqiUX%2B3sI7npp0tVoZLXllPZwRa4cT5Cr1AMJyqisoGOqUBnbr3QlV5vPjPwKD3CS%2Ba589H7Toxwt0qB9WJn9oOq4BwuE1BBy7%2BLzh2RiIE1XXbN5Oj0gai4XPgzBJe9N%2F4c3o1mICJcGXgGKXMgKpBJSG4nEss2w7xn8i2Ko5MJSNJqYBNEPyDV39QpHUKvouCapXQwshD39GcU3aCNTxoiIivugBw2VtA%2BStCzZr00T6qxGxIU%2Fk7SjdOPt6syJ1QKRhttBkK&X-Amz-Signature=8223b5991979c7a4cb553b800527580d8873293fb3f3d3177a24c560ade0d329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
