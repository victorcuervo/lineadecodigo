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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCTCS3H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGBKXZ3rPPu%2BQMWgMD382%2FXYAunNf8j1LXOh%2BZGVBwcQIhAN9EfUBdACsSpWkPFpOaJCfsZMuJWmRn51fvHmuAteI2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igz%2FfEICtfcc%2BRj44qQq3APT24UtqysC4YIyKAFX5biGDH%2F%2FygGJ%2FFi4YXXr21l%2BlXIZ3kCqpz9acSQCg8EUNJ4l130Htb4EmlcBH9vyM45tGi3sG8hvPO8GaJ87JGXKdH5ORnEVdZaTcPHVxdBZF3x6tzK5m5k2IPxxZsrebiEnSCOec2iF33gQpZNv0sjPUKbXsEz5QqtnTdEjw8QAlqg0TZLRhUACOg%2Bsbcki6LqePZZo1r4fKhpTQ%2FkgagayBUiUEotBVityNcdHW2UnbMxp9w8Ililq5bCBRBkwIouYuffo2ssz9K0dj%2Fz9FBl1RaTFWSfh1kIhaVjwFRGFX0QaA1Q6M6OY9jAgDdhm2xmHAJQS6vEXaEgxhnIvsGw4ktwpuQZMVndp8MfKjiVboquK8BkvI30qx9F4Pzs18%2BY8HYHNdymD7hzwnZBDHH9lhyVGKntk%2F9lCbvOStaHEcZSYo5qRFpXzUbB0mobWxBr4kL3v1upDG2UQcDbBF%2BwrYg%2B%2FNEVMAiQmuyzj42zfNBWeOx6oO1fvwR1c1kaf119SO90ou3wYijbj%2FdmOdifRT5ScshLi1oOoK3A8CF4jR9p0v3ZHMelweem%2F0zH0dtffbxdVRn32goBdxn7SlEMbDgrt4plKOlLiVoZDQjDWxs3JBjqkAdXohXMO3IH3R6lZQ3WjnIyppFQj9lw3ZFn7bdKCYkwWXxcegT7q8jzjdqfIVUAyWvK5QZNma5%2BA1PPvq8VcOHUHFLf5qBtOhSZxGGPDqaErXAtfD4%2Bq2Esg0Fa4d9ya5M%2FQT%2Bm9yf57RIMeaGMLXIHfD2qsUy7RiF8O86tCa3fOJppCGQvEGsLSdiB2VES2ZHmSX0cy5pAzs4N8E1ptweRzF%2F3L&X-Amz-Signature=71df595ad1a5cff7abdb3e43dd5cfa80d72d6be1456abb0a03de743194b8a11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCTCS3H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGBKXZ3rPPu%2BQMWgMD382%2FXYAunNf8j1LXOh%2BZGVBwcQIhAN9EfUBdACsSpWkPFpOaJCfsZMuJWmRn51fvHmuAteI2Kv8DCGgQABoMNjM3NDIzMTgzODA1Igz%2FfEICtfcc%2BRj44qQq3APT24UtqysC4YIyKAFX5biGDH%2F%2FygGJ%2FFi4YXXr21l%2BlXIZ3kCqpz9acSQCg8EUNJ4l130Htb4EmlcBH9vyM45tGi3sG8hvPO8GaJ87JGXKdH5ORnEVdZaTcPHVxdBZF3x6tzK5m5k2IPxxZsrebiEnSCOec2iF33gQpZNv0sjPUKbXsEz5QqtnTdEjw8QAlqg0TZLRhUACOg%2Bsbcki6LqePZZo1r4fKhpTQ%2FkgagayBUiUEotBVityNcdHW2UnbMxp9w8Ililq5bCBRBkwIouYuffo2ssz9K0dj%2Fz9FBl1RaTFWSfh1kIhaVjwFRGFX0QaA1Q6M6OY9jAgDdhm2xmHAJQS6vEXaEgxhnIvsGw4ktwpuQZMVndp8MfKjiVboquK8BkvI30qx9F4Pzs18%2BY8HYHNdymD7hzwnZBDHH9lhyVGKntk%2F9lCbvOStaHEcZSYo5qRFpXzUbB0mobWxBr4kL3v1upDG2UQcDbBF%2BwrYg%2B%2FNEVMAiQmuyzj42zfNBWeOx6oO1fvwR1c1kaf119SO90ou3wYijbj%2FdmOdifRT5ScshLi1oOoK3A8CF4jR9p0v3ZHMelweem%2F0zH0dtffbxdVRn32goBdxn7SlEMbDgrt4plKOlLiVoZDQjDWxs3JBjqkAdXohXMO3IH3R6lZQ3WjnIyppFQj9lw3ZFn7bdKCYkwWXxcegT7q8jzjdqfIVUAyWvK5QZNma5%2BA1PPvq8VcOHUHFLf5qBtOhSZxGGPDqaErXAtfD4%2Bq2Esg0Fa4d9ya5M%2FQT%2Bm9yf57RIMeaGMLXIHfD2qsUy7RiF8O86tCa3fOJppCGQvEGsLSdiB2VES2ZHmSX0cy5pAzs4N8E1ptweRzF%2F3L&X-Amz-Signature=bdb9c20b0de0e8a3f8ed32486a4f2f988c9604856d0f1537d923219201aded27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
