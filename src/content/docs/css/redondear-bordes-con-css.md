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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4ZQNIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6w48BsVIcZD%2BGwzJVH6GEGty3%2FcH6cCdL0ER3TQbe7QIgRlXk0alceJu7vjXfhwzHnlU6AzZcZiTFO15rNcEi7t0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClJK5JNQYUioZFQmCrcA9TnHa0oNkZXeDEwVpkB3ecWllhhue5E1ILZu9Bpxt8Yd%2Bu51%2F4kUGJKzC7DA4nLJEmGAA8XVbneQV9UMytcI7ZuOgNP01bTKzRg60gQXDL%2Brsh4J8gSVrs5bw2tVKZm%2BIfwQyi6CviryQAeHX%2FyXzCgOwW5w%2FGvSxBTIbS5QzRftYi4CHqMbS%2FAKVpZ3Y0WnFf5dPiHc7oE54R8N64lrSNy%2BoLgrmqUyKcXgzd0HAfjrF4YPyqt8wOHYuOtPJMiJOAWe8mjvA%2F5esEo87JmHy7mmhO3Eho6LNdCRNirkSxqb4dojiVnS5M9MhlVbzspsELXA5VG4CkfhVjLMv1MaEBiY5MruB%2B5F3w7DtHhZqB%2BIIak6v2t%2BhikUZagl5mWfYc9yD7gqSB9SzM1BW8H%2BGI%2Bnb68yHxSqyFHD8tqeNQ5snTOzP0DMkxxCGi%2FXUhCSBhoB27rEZSVw3eyRrc4iaZmakohh8g0%2BJU6VRH8%2BlJM8sNx0r0T%2FBvAIdX1chs2f4KC93OiobzYnmMwekkpp74qvNDKaV7RybZtaoFDPGDv3q6u9hYGiavbJsD27KaL6ieg9X3q9err52Ops%2BBt9X1mosrtI9%2FYG7akHWgpgs5zJQKG2BU28GuzB1dvMIvd3MkGOqUBxvzZ%2Fr7DmLXw0M1j7nQhP54vPAGr3L7y9b%2FIeSwz3knfweeil2iruwyfv9HpkbS6nRglF9MfY6f0cHTVLG7VJCeqEa4PIC3BU3XNLww0ofm9kUdOk39qInclCqp7u6A2R7i0IyI1nxv6G0%2BwALAyQ8IsMjCg4n3Nl1qESK%2BEQ%2Fre0CYtmmyKE6A7zzypsV2sV%2FmYiGo3cxOSwPszTiY8XXzRPPUM&X-Amz-Signature=2caeca06deb2c2188334904be2f46f905bd12b5fb9bfe64180f6ebf6f2a21a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4ZQNIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6w48BsVIcZD%2BGwzJVH6GEGty3%2FcH6cCdL0ER3TQbe7QIgRlXk0alceJu7vjXfhwzHnlU6AzZcZiTFO15rNcEi7t0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClJK5JNQYUioZFQmCrcA9TnHa0oNkZXeDEwVpkB3ecWllhhue5E1ILZu9Bpxt8Yd%2Bu51%2F4kUGJKzC7DA4nLJEmGAA8XVbneQV9UMytcI7ZuOgNP01bTKzRg60gQXDL%2Brsh4J8gSVrs5bw2tVKZm%2BIfwQyi6CviryQAeHX%2FyXzCgOwW5w%2FGvSxBTIbS5QzRftYi4CHqMbS%2FAKVpZ3Y0WnFf5dPiHc7oE54R8N64lrSNy%2BoLgrmqUyKcXgzd0HAfjrF4YPyqt8wOHYuOtPJMiJOAWe8mjvA%2F5esEo87JmHy7mmhO3Eho6LNdCRNirkSxqb4dojiVnS5M9MhlVbzspsELXA5VG4CkfhVjLMv1MaEBiY5MruB%2B5F3w7DtHhZqB%2BIIak6v2t%2BhikUZagl5mWfYc9yD7gqSB9SzM1BW8H%2BGI%2Bnb68yHxSqyFHD8tqeNQ5snTOzP0DMkxxCGi%2FXUhCSBhoB27rEZSVw3eyRrc4iaZmakohh8g0%2BJU6VRH8%2BlJM8sNx0r0T%2FBvAIdX1chs2f4KC93OiobzYnmMwekkpp74qvNDKaV7RybZtaoFDPGDv3q6u9hYGiavbJsD27KaL6ieg9X3q9err52Ops%2BBt9X1mosrtI9%2FYG7akHWgpgs5zJQKG2BU28GuzB1dvMIvd3MkGOqUBxvzZ%2Fr7DmLXw0M1j7nQhP54vPAGr3L7y9b%2FIeSwz3knfweeil2iruwyfv9HpkbS6nRglF9MfY6f0cHTVLG7VJCeqEa4PIC3BU3XNLww0ofm9kUdOk39qInclCqp7u6A2R7i0IyI1nxv6G0%2BwALAyQ8IsMjCg4n3Nl1qESK%2BEQ%2Fre0CYtmmyKE6A7zzypsV2sV%2FmYiGo3cxOSwPszTiY8XXzRPPUM&X-Amz-Signature=e32df0396f86d755b9e9102c105fd21baa60828c7c2ddde64abb3ea0e0e0f355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
