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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RREKYPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKmhuPcinR8IkBKF8oCaNsmIseZ%2FWa%2BkqJdnf9KOOVCwIgZIHVQj53u6O1MWsKMAa7ydpswhJxu9snMBby7jRuACcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSg2I5HCzyzdJLy9SrcA8JJwdOLaleL3b35jgXmwTqVYv1zHiK0GsjXNxM8OT6UUOS00SamvFqzdY0KPSWW9fm%2FcevBD7%2ByCxlfzMwgsbx4Gg39bVvJTQki3ITzHvXMlqQcLhlK6WW9ZbjSq5eEZ8gd9m7ZdMjEKdnqfCGiYx8CH6NFVzKhfByI6diNKoHZDNp8AJYCZg19AqHfeiJ42fCtEVgbKLS6uwMp71Z88Ke6m2QqGt4i66dkyfNP3eAnwVRpQ4E4FpvKLVlJeVcj4gluFh86M96ac512mf6tuYJmDws3SHH4aju7HgUyVRA8hTG0aYM96enxPaXC4Bz7n2y749kNVMmx6hlRTtMrXDjbnf5l2Q%2FucN3M5Gfz2NF7IQhSPb9DsTT4BmrbWj%2Fqz8srwVb3CIk3TSjhkbQyB%2BPO7i0p1BbNgnq7OdO5skET1O08Opx8a5ZTj6Be5Q8%2BATIhFWLsZ93yAjl4liYOhtdz61VwFlrpQ0%2BGIJlnoNnJ7SwzlKCRN7h93L%2FrSUAAHbhTlweRe6jafV2v6yaD%2B4%2BRkJwcUkG9puSmGxvqTHpsQUiOLQu%2BayIsy16pWxvFbqRI%2BaIuiYGB2aM6hGegRTV5CoDvsnHFk7x3Uhx6%2FIDS6RAcMVycQgcJ8%2BFYMKGfi8oGOqUBAMfi9YsFkyzoHyYIe%2BQokcQFPufyERBYOVj1hj4Hcs0QVe1MVKRgYnH7B9nRMVRCOQgB6L6L8nbzHNPbxVi%2F3%2FZN0bKR1dJBK1souwuyxG%2FJZwFGgUEZUTLkWxNvUbPt%2FuQx0L6GYO1KSnIo0ETSo8JLaupqJRFftWKCfZSltBp423xF3aDUwdH%2FBr4iglHwHHr1vi56c5Mb1MVaQMluCPUCpdL1&X-Amz-Signature=5b1a827a096f3fde48ad8cf7411507ade45a449ab9598179ffbe6363c2c2837f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RREKYPN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKmhuPcinR8IkBKF8oCaNsmIseZ%2FWa%2BkqJdnf9KOOVCwIgZIHVQj53u6O1MWsKMAa7ydpswhJxu9snMBby7jRuACcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSg2I5HCzyzdJLy9SrcA8JJwdOLaleL3b35jgXmwTqVYv1zHiK0GsjXNxM8OT6UUOS00SamvFqzdY0KPSWW9fm%2FcevBD7%2ByCxlfzMwgsbx4Gg39bVvJTQki3ITzHvXMlqQcLhlK6WW9ZbjSq5eEZ8gd9m7ZdMjEKdnqfCGiYx8CH6NFVzKhfByI6diNKoHZDNp8AJYCZg19AqHfeiJ42fCtEVgbKLS6uwMp71Z88Ke6m2QqGt4i66dkyfNP3eAnwVRpQ4E4FpvKLVlJeVcj4gluFh86M96ac512mf6tuYJmDws3SHH4aju7HgUyVRA8hTG0aYM96enxPaXC4Bz7n2y749kNVMmx6hlRTtMrXDjbnf5l2Q%2FucN3M5Gfz2NF7IQhSPb9DsTT4BmrbWj%2Fqz8srwVb3CIk3TSjhkbQyB%2BPO7i0p1BbNgnq7OdO5skET1O08Opx8a5ZTj6Be5Q8%2BATIhFWLsZ93yAjl4liYOhtdz61VwFlrpQ0%2BGIJlnoNnJ7SwzlKCRN7h93L%2FrSUAAHbhTlweRe6jafV2v6yaD%2B4%2BRkJwcUkG9puSmGxvqTHpsQUiOLQu%2BayIsy16pWxvFbqRI%2BaIuiYGB2aM6hGegRTV5CoDvsnHFk7x3Uhx6%2FIDS6RAcMVycQgcJ8%2BFYMKGfi8oGOqUBAMfi9YsFkyzoHyYIe%2BQokcQFPufyERBYOVj1hj4Hcs0QVe1MVKRgYnH7B9nRMVRCOQgB6L6L8nbzHNPbxVi%2F3%2FZN0bKR1dJBK1souwuyxG%2FJZwFGgUEZUTLkWxNvUbPt%2FuQx0L6GYO1KSnIo0ETSo8JLaupqJRFftWKCfZSltBp423xF3aDUwdH%2FBr4iglHwHHr1vi56c5Mb1MVaQMluCPUCpdL1&X-Amz-Signature=66d855b3a27af4aebadd04ea2dae1d0bac9c51b30d7310c2872c10a943a436a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
