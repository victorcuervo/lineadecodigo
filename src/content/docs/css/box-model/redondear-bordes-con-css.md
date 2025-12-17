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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3HHC2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV0ZXZ7nRRE54%2B4aabwz05Jka8lNbjV6F0Cwit7FIT0QIgN4OCQMthIoFZvDQ8YIxtYBzF96ssOD4tP3MYADgNv%2F0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDbL%2Fv65rbQRzUN9ircA8nJMyhd9l5O2m8B9H7%2BctdzTjvx13izpwhci%2F6e%2B194NrOd9OlxMutTeEpmfdI1K4a%2BhqLGL9Bb8KrTYAhe6cPKpczy8yfyOElYaeaH%2F0D4lvubA5jDh%2BQ37u9Ggi6xPA%2Fy1QcK4vVSZMbMVHhiTQoeJ7cwOJ0de8u6QyYhp594oKvLiinRwJ3Qd%2BZXtElM3NTluP6qCxVU14%2ByS3%2FAp8%2BZkDuSafReRVjTZV6bqSR6K89VY584BzYEpasMKU2BsK9acItHTd7fpip6rCBz2sE0KKx%2B0%2FiOTHS%2BTb%2F4q5GzxBWWGD2lfAssuy1rFQ03OfInCYoW%2FtnCFgsKrcYWclRsEmi7hJIqbC6%2Fq42XndDtYhu3o7TvomihbqXufcqiuVaN%2BHOgqas2nrvqkUOwYuvkMzDVjer3hAUzKp1411FCiVCAFHVpZlgASyfa6tq4SC5IL0OvaCjbNjD9WtVJzrtKjxdRAey68fIgA6q6QP8QvEBA5YpYn4hDQ5Cm8FseDqIG%2BnL3YsyQIz2rdd0xAVzzm30ntp848XcQGfajz%2FZo%2F8wqRD9%2BCFxVttqFIzGon%2FQhD%2Bepim%2BVO8UnRaQRVl9%2B%2F2EFPGQFKPRp5czgz3Mg%2Fm%2BR60SYCXbfonHSMKegi8oGOqUBgDxGEGvgZ6PSm%2Fh1ftFSuxc2WlYYnbhNNMVbKoBtEYDlp7LA2%2FKv23Kjkl09he8p3fyQdeHoL45qwLGFvcxyByRa2d40rZSfvcFN4I2d6aq%2B1WQYc2csd91aLK1OsvfAfToQcj%2BjGyCqQxeS8BVBtIOpAJsIRgk4y52SKpUdkg%2BlOBJpKKCEtjGEt3LLPXuy3ayaqn2zX%2Bg%2FlE8oJM9f10h%2FJA32&X-Amz-Signature=28dd3e70f89bdb13024250549d42f099c8e96d3e4caa821aebf84f8a35015e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3HHC2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV0ZXZ7nRRE54%2B4aabwz05Jka8lNbjV6F0Cwit7FIT0QIgN4OCQMthIoFZvDQ8YIxtYBzF96ssOD4tP3MYADgNv%2F0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDbL%2Fv65rbQRzUN9ircA8nJMyhd9l5O2m8B9H7%2BctdzTjvx13izpwhci%2F6e%2B194NrOd9OlxMutTeEpmfdI1K4a%2BhqLGL9Bb8KrTYAhe6cPKpczy8yfyOElYaeaH%2F0D4lvubA5jDh%2BQ37u9Ggi6xPA%2Fy1QcK4vVSZMbMVHhiTQoeJ7cwOJ0de8u6QyYhp594oKvLiinRwJ3Qd%2BZXtElM3NTluP6qCxVU14%2ByS3%2FAp8%2BZkDuSafReRVjTZV6bqSR6K89VY584BzYEpasMKU2BsK9acItHTd7fpip6rCBz2sE0KKx%2B0%2FiOTHS%2BTb%2F4q5GzxBWWGD2lfAssuy1rFQ03OfInCYoW%2FtnCFgsKrcYWclRsEmi7hJIqbC6%2Fq42XndDtYhu3o7TvomihbqXufcqiuVaN%2BHOgqas2nrvqkUOwYuvkMzDVjer3hAUzKp1411FCiVCAFHVpZlgASyfa6tq4SC5IL0OvaCjbNjD9WtVJzrtKjxdRAey68fIgA6q6QP8QvEBA5YpYn4hDQ5Cm8FseDqIG%2BnL3YsyQIz2rdd0xAVzzm30ntp848XcQGfajz%2FZo%2F8wqRD9%2BCFxVttqFIzGon%2FQhD%2Bepim%2BVO8UnRaQRVl9%2B%2F2EFPGQFKPRp5czgz3Mg%2Fm%2BR60SYCXbfonHSMKegi8oGOqUBgDxGEGvgZ6PSm%2Fh1ftFSuxc2WlYYnbhNNMVbKoBtEYDlp7LA2%2FKv23Kjkl09he8p3fyQdeHoL45qwLGFvcxyByRa2d40rZSfvcFN4I2d6aq%2B1WQYc2csd91aLK1OsvfAfToQcj%2BjGyCqQxeS8BVBtIOpAJsIRgk4y52SKpUdkg%2BlOBJpKKCEtjGEt3LLPXuy3ayaqn2zX%2Bg%2FlE8oJM9f10h%2FJA32&X-Amz-Signature=ee5d77d2e16a8a8931221a59721429580e43a797aa42f6dee2b5aaff2cf8b5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
