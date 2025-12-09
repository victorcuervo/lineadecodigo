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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBE33J73%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJAaPpRacdvOsUADRZB11mXTIeK7PW%2Bh3BI3001KBULQIgA32o8M0NiUxBrllf6oiwHWrFWN5S%2B6Q8T7hrv1UIFN0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYGBAeq4A5iABfMOSrcA7%2Fa8387ax3pnq7d6utApFcru612vL9diEJ0maHhU0m%2FdhzHMnHIkqth0t%2BT%2FJlRmUufV7vpsMQxCQHQnYNwqdf2Md1FbWZwYJgob70hLbsvO9Y78JGsuWQkjy9APWCsPYtClcR%2BnGa9Y7WL4sEyryjz2MjKvplEArdRzrH26yJaTBPaZ9bp8%2BtxHiYhayp2pD6MB%2Bgxsltx7o%2BEU3RGq7agLTX4%2Fg0w%2FG63Yua0xDFYXqFawdqM9J22RSkU2S4bI2LE6j%2FkCey9MlzioOzrVs1zI6s69Y2abYfdYwmcEfD6MvwKoXp%2F2EuqhTaVXQpJIqDIYFNFUIRItBXLSwBudWZbWyRkrq27E72NTnJOnu2gbL9W89nIOM92eLsZSuKLB3%2FJgv0s%2B%2Bwl5HaD6cFEntmXxxwIPq5KsRmubtcIfeHZG4wYgRpoj7RU5vt0cLZpxXYFdi5gpouNYTVCjn3xhcONA%2FxsxjH2yBAJEbLxTmXkohvtJ6WcjpTW5N%2B0IWla7gyiY%2FNhd%2FS71iOS%2FiqKPMdUAWwlYpT9W3l00mq6av1nGTn5NZYlNdZS04gfOgPcgbu90wHHKxhFmXjtPNH4fLVqu%2B3L39t%2FbirdCnXYq8JOqd9e3tFOdKP8pM97ML3J3skGOqUBbZKW1rH9a0zy9I4CYP3cpVsNFDqMgh%2Bfn%2BQWY4xyaZaAKPOkUCjwezPGMHq5ZHoGmfCil%2BpN7UCP4rogeDQOpWdzNweMiKhux36cOwdHyxyuZOFO%2F6reTy%2BzpxCIfpkhzwdn%2FB2abQFsD78NMPgRQ7i0sv9yKcH%2B8lU7WaoxE21STgoXPDvJyC3tEcmwGWFo4LuHURP5f5hxvWpy63C4NZXJI5uT&X-Amz-Signature=cd611802bcf9a267786b6f3a4998890e702f1a8c6c0aff8b72a195ce21f97844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBE33J73%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJAaPpRacdvOsUADRZB11mXTIeK7PW%2Bh3BI3001KBULQIgA32o8M0NiUxBrllf6oiwHWrFWN5S%2B6Q8T7hrv1UIFN0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYGBAeq4A5iABfMOSrcA7%2Fa8387ax3pnq7d6utApFcru612vL9diEJ0maHhU0m%2FdhzHMnHIkqth0t%2BT%2FJlRmUufV7vpsMQxCQHQnYNwqdf2Md1FbWZwYJgob70hLbsvO9Y78JGsuWQkjy9APWCsPYtClcR%2BnGa9Y7WL4sEyryjz2MjKvplEArdRzrH26yJaTBPaZ9bp8%2BtxHiYhayp2pD6MB%2Bgxsltx7o%2BEU3RGq7agLTX4%2Fg0w%2FG63Yua0xDFYXqFawdqM9J22RSkU2S4bI2LE6j%2FkCey9MlzioOzrVs1zI6s69Y2abYfdYwmcEfD6MvwKoXp%2F2EuqhTaVXQpJIqDIYFNFUIRItBXLSwBudWZbWyRkrq27E72NTnJOnu2gbL9W89nIOM92eLsZSuKLB3%2FJgv0s%2B%2Bwl5HaD6cFEntmXxxwIPq5KsRmubtcIfeHZG4wYgRpoj7RU5vt0cLZpxXYFdi5gpouNYTVCjn3xhcONA%2FxsxjH2yBAJEbLxTmXkohvtJ6WcjpTW5N%2B0IWla7gyiY%2FNhd%2FS71iOS%2FiqKPMdUAWwlYpT9W3l00mq6av1nGTn5NZYlNdZS04gfOgPcgbu90wHHKxhFmXjtPNH4fLVqu%2B3L39t%2FbirdCnXYq8JOqd9e3tFOdKP8pM97ML3J3skGOqUBbZKW1rH9a0zy9I4CYP3cpVsNFDqMgh%2Bfn%2BQWY4xyaZaAKPOkUCjwezPGMHq5ZHoGmfCil%2BpN7UCP4rogeDQOpWdzNweMiKhux36cOwdHyxyuZOFO%2F6reTy%2BzpxCIfpkhzwdn%2FB2abQFsD78NMPgRQ7i0sv9yKcH%2B8lU7WaoxE21STgoXPDvJyC3tEcmwGWFo4LuHURP5f5hxvWpy63C4NZXJI5uT&X-Amz-Signature=91f229247017c88cc07d130957f48cd41c659c0b62f178a4e0527519efd35eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
