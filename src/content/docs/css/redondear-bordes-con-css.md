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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42DFALP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB273b5u7aBS8trbd9FUb3Bnv1y5hFswRxEz7KGQAfA7AiEAhnZk4S7Gew9OppC8yl0yLpvS%2FZwOv7JBydG05Vi99S0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEH9BtMS%2FxQLLNypOyrcA3%2BZ8A5mU3uxs52ruQ8cT2tQmKxKLDexhduOV%2FHqmodH%2Bj0L1tbJOvvYERSdDl%2BCXz4drgdy32vHB5BfgepGU4mnUS1WY8gkfJ4%2FNqoivxvS4hkx0lC1WDhCliVWPfQ%2BaOJHECgYDFP3YdNA%2BMzmThI2ujxKFZmwNWkdxNfwbJdzzinKCW0yFzxKVTjHaq%2BEN%2F4bEknkJBMHgRc%2FWzPnikC1APnGHrYP7FyJgLGjsIueXqcD9%2FW75id2YOBjMeS15j5POHa%2B%2F3GX%2Ffnw8UdqvJh6T0hsfmbDFbOqUERuhFvrSLmpIqv8%2FMNhgnWCL58Lf%2F2dOfD6XL7qp1WzUZRVPvmOc9BYreMe0UnPj7xf%2BO1DuAz2jTIJVIcYBKNUvPF%2FCcnVrbE3PDfShTxO6QJWcXSEfj2H7WApaJWMYB7c%2BSh29%2BJO4xha3HiHQ1EZl5zztKV6j3Es9DkI92GafnVr6Cbes8HworDspTqjj6lOpIULnC9XXbDOf8c5yxCWLRrcp1I8kRS5aK%2FEi32zZhaNcBqzjyDUAnKri7B6aYIz5DYGh31vV6J96X34Fz7WrIerl1E57BoAl6saGuYYPbTT%2F8gS%2BRfFutxSrt47M1Nyoa6xPwqKUUz237QB26UJMLPOyskGOqUBbIL%2B7N8fN1IN%2B%2F7yIzg1DS5qmdgeBqYJP40FCQ2d7UFXLB2lLL5K%2BLfBtLlxRgFqFOgS8u7rjjs4a2BQnIEqkNoFTZUM26XjWV%2Fyw6F%2B9%2BOK%2BgYi7VExL8be%2BgZ9%2FR9ZcEz%2FuWZ%2FK0JFhaHYk7svYEnXK8FYiOp2Qj2sdeYgsA5juyRHvKPizQcBVtzcgCIAtLvVu%2F5kFm0Sp9sEIHgXRE%2Fblh4k&X-Amz-Signature=9388d8944f77fc27ddca352148a1a0ade80d07168a83aa21fcbc0ec9efe883a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42DFALP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB273b5u7aBS8trbd9FUb3Bnv1y5hFswRxEz7KGQAfA7AiEAhnZk4S7Gew9OppC8yl0yLpvS%2FZwOv7JBydG05Vi99S0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEH9BtMS%2FxQLLNypOyrcA3%2BZ8A5mU3uxs52ruQ8cT2tQmKxKLDexhduOV%2FHqmodH%2Bj0L1tbJOvvYERSdDl%2BCXz4drgdy32vHB5BfgepGU4mnUS1WY8gkfJ4%2FNqoivxvS4hkx0lC1WDhCliVWPfQ%2BaOJHECgYDFP3YdNA%2BMzmThI2ujxKFZmwNWkdxNfwbJdzzinKCW0yFzxKVTjHaq%2BEN%2F4bEknkJBMHgRc%2FWzPnikC1APnGHrYP7FyJgLGjsIueXqcD9%2FW75id2YOBjMeS15j5POHa%2B%2F3GX%2Ffnw8UdqvJh6T0hsfmbDFbOqUERuhFvrSLmpIqv8%2FMNhgnWCL58Lf%2F2dOfD6XL7qp1WzUZRVPvmOc9BYreMe0UnPj7xf%2BO1DuAz2jTIJVIcYBKNUvPF%2FCcnVrbE3PDfShTxO6QJWcXSEfj2H7WApaJWMYB7c%2BSh29%2BJO4xha3HiHQ1EZl5zztKV6j3Es9DkI92GafnVr6Cbes8HworDspTqjj6lOpIULnC9XXbDOf8c5yxCWLRrcp1I8kRS5aK%2FEi32zZhaNcBqzjyDUAnKri7B6aYIz5DYGh31vV6J96X34Fz7WrIerl1E57BoAl6saGuYYPbTT%2F8gS%2BRfFutxSrt47M1Nyoa6xPwqKUUz237QB26UJMLPOyskGOqUBbIL%2B7N8fN1IN%2B%2F7yIzg1DS5qmdgeBqYJP40FCQ2d7UFXLB2lLL5K%2BLfBtLlxRgFqFOgS8u7rjjs4a2BQnIEqkNoFTZUM26XjWV%2Fyw6F%2B9%2BOK%2BgYi7VExL8be%2BgZ9%2FR9ZcEz%2FuWZ%2FK0JFhaHYk7svYEnXK8FYiOp2Qj2sdeYgsA5juyRHvKPizQcBVtzcgCIAtLvVu%2F5kFm0Sp9sEIHgXRE%2Fblh4k&X-Amz-Signature=d16d962017a5fa6a3a0b714f55c8c94fbadfc848ef52306f7ef4e06ba5465a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
