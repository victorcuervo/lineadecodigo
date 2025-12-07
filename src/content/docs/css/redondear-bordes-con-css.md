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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPPG2Q2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE824LrUyDXP2X4FOpWJiBtNUgYCOqP4nv%2F3Oeb2AAOMAiEA%2BVOpNkDUQooBwS8bd52JYBOkYqOTR91qvi0aFkWsHuQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNVAZqqnNBJlHkBrCrcA45ok17rUXz%2FIioVLwWnpeSy9ssuHEmcxl6RMBo0Ab6jI%2FA1xFd6qskTvqdg5lh47zo113uw0DBlnhvYO7kfhvA%2BEklSK7oRj7d%2F5b4O4wRzajxPXiAI%2BbJ6HKQt2ufi3QAiMKya59WTvo4js9IjBthflm7Os%2BZA49fNUfRSjH7i1QKPjkcjWaeTGCkmKUv8UMfaOL10vgemPrf17Gv5OMNC689%2FD6rYXRDf51AALCvo%2BJltYp1ND43OYWjtUsMS9QrnzKMEforIeQETkis8bpdL0P8dw4SGSCKG8%2FXuWl182JMrz517H7Kh0KLwHxSF6Ajyc4qiHJ5Ofmd0qG9E4aYBro1eQR9%2BUQgjMbchrk6QF5tWV%2BBVOJH%2F43GHLU2WL1qknejma5U%2Ft4JpC66J6q3QBDqnOu6uAn8%2BTwxHNcUjrLEmlPpHKn%2Fa2BVdvatqxknuuBCzvMmiZnwAo%2FPnyvzmuUbf%2BmjTcdf%2FcBD%2FfvjINOt4Nr%2FMlQfwrdE67zXXBMKQVYnZTf7EuU6JrqjAiYwxvJkP493LntE0vR44Iad5btkwebvDMgbziIGuvbNwx%2F3TT%2BJyDw4AGyPeHi5TcGJFeve3maA%2BiqslYx2ol5VBgIZkjAILlm482%2FDHMKmF2MkGOqUBwBAFGlC08B3H0Kq5Js2jaleXt%2BhAhhARyuaSjw7IUsPW8UmL6gUzc8q3pn1wJSHPahEOlf53WWmuABn8EpSAnUoDLW22qRSE7Gk%2FZHBNBFFt49JDjvVDy7LLFkZgElnNv7Fcd%2BU8qwSjznw0UmdBvTnt7OjNBdkwltMXBIfW5fi1oluNJ8bUn3yeXT4iIJoWOm%2Bpy45k27Bfe%2Bw38Lf7U3jXK%2FJR&X-Amz-Signature=e969ef49877494efad943135d0c60af2679e838aa95ac83e936e01ec341e1ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPPG2Q2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE824LrUyDXP2X4FOpWJiBtNUgYCOqP4nv%2F3Oeb2AAOMAiEA%2BVOpNkDUQooBwS8bd52JYBOkYqOTR91qvi0aFkWsHuQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNVAZqqnNBJlHkBrCrcA45ok17rUXz%2FIioVLwWnpeSy9ssuHEmcxl6RMBo0Ab6jI%2FA1xFd6qskTvqdg5lh47zo113uw0DBlnhvYO7kfhvA%2BEklSK7oRj7d%2F5b4O4wRzajxPXiAI%2BbJ6HKQt2ufi3QAiMKya59WTvo4js9IjBthflm7Os%2BZA49fNUfRSjH7i1QKPjkcjWaeTGCkmKUv8UMfaOL10vgemPrf17Gv5OMNC689%2FD6rYXRDf51AALCvo%2BJltYp1ND43OYWjtUsMS9QrnzKMEforIeQETkis8bpdL0P8dw4SGSCKG8%2FXuWl182JMrz517H7Kh0KLwHxSF6Ajyc4qiHJ5Ofmd0qG9E4aYBro1eQR9%2BUQgjMbchrk6QF5tWV%2BBVOJH%2F43GHLU2WL1qknejma5U%2Ft4JpC66J6q3QBDqnOu6uAn8%2BTwxHNcUjrLEmlPpHKn%2Fa2BVdvatqxknuuBCzvMmiZnwAo%2FPnyvzmuUbf%2BmjTcdf%2FcBD%2FfvjINOt4Nr%2FMlQfwrdE67zXXBMKQVYnZTf7EuU6JrqjAiYwxvJkP493LntE0vR44Iad5btkwebvDMgbziIGuvbNwx%2F3TT%2BJyDw4AGyPeHi5TcGJFeve3maA%2BiqslYx2ol5VBgIZkjAILlm482%2FDHMKmF2MkGOqUBwBAFGlC08B3H0Kq5Js2jaleXt%2BhAhhARyuaSjw7IUsPW8UmL6gUzc8q3pn1wJSHPahEOlf53WWmuABn8EpSAnUoDLW22qRSE7Gk%2FZHBNBFFt49JDjvVDy7LLFkZgElnNv7Fcd%2BU8qwSjznw0UmdBvTnt7OjNBdkwltMXBIfW5fi1oluNJ8bUn3yeXT4iIJoWOm%2Bpy45k27Bfe%2Bw38Lf7U3jXK%2FJR&X-Amz-Signature=c0ca94bc7c45514dd4328b606f6d7b82e1ddcf65de5bacdc49bb672704f8a7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
