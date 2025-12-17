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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T652JCJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyLq6V%2F0sif8QWFlRL0Eiiv3KiHlajQ7J69i7XAzOOeQIhAJRSSNmqQ%2F3S1lso3GNmKbTkxbfSfH%2FaFa4rBBXHBgFHKv8DCHwQABoMNjM3NDIzMTgzODA1IgwelHsvK7ZslymlAW8q3AMODQzZ5TgtlnhaA8t%2BDxdqSwuG2ejn3j0hNSsdwwREpx%2FeFtJJ2orVlpH7g%2FyqWc%2BVDOqocPpZXW6M2P9d0H1e3ZIh2pySF8JsuT5fYdU41hcuZn4B0IB5VZzp6AutLfQAKd2bvHUW3XnoJDOTzgjFaSqrxPefTTWVsk%2Fkn27A%2FaEfkPIdVGPyfZNU9h0Bg2AmaEJw%2F%2BLbRhnnINbXqQquizsP7L9c2agm7polGtcJlSgiPE8kH0lxkcqGs1XVfM8hjs7LAArh%2Bj3kD8quQ5YYWWpwODnofSmVvh7MwACH3h5%2FYWxQTdIQ3ARjSj9gLCCOcMJ08e0JLfiE11VzYkD%2FLDcAhSoH%2F%2F5KQmaNnLMM3b7yv0To3B8Pz4cG6r9yy8yNw3p%2Fqlg3vksKQy9Ev59o7zQ%2FgPAyVrg5jpA6OVwTqq%2BE50P07ap9%2FG3eSGnL3Eh%2FQhaW0arM06X9Tnujg8xG3p15%2F7Ukze9lJR6RHqzg3M9ZQr00wN4%2FfuIDeUsU5gRPrsVUGhIlcrdhQdLQYF3I2k6DjrPuvnt1flqh%2Fxf6TLwLdY61EFCZxr%2BB2jb1FOTykdUs85ZHiBR8BK2uE4VuZeHE%2FPNxSA7XNHVtKhZJj%2F7MqnmYS4jD2KnPRzCcj4rKBjqkAQS09I5Zdh50Vp5kGGbZpbzcWBMt8i3EiGaa6da7iwZUxLz8gjxyBAwwEX5WMwN2A988HhT7PGko34fVDXn6Kx96E3ULvRGFQfbYmFNFGpmRR56UF3UWOGXQcx9vV0FhSvLFc8Rz%2FvankquQ7EMQ4K0F%2FCTBeWDbaLwAOCRvtL4xKo022XGann7uDG6VcFM0RccOVwOe8HPakORzLmVze%2BPRTTbI&X-Amz-Signature=d3bf010cf823c287d46b700a9918d11ddf2fdc19e4d2774d3cef099ccaae5f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T652JCJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyLq6V%2F0sif8QWFlRL0Eiiv3KiHlajQ7J69i7XAzOOeQIhAJRSSNmqQ%2F3S1lso3GNmKbTkxbfSfH%2FaFa4rBBXHBgFHKv8DCHwQABoMNjM3NDIzMTgzODA1IgwelHsvK7ZslymlAW8q3AMODQzZ5TgtlnhaA8t%2BDxdqSwuG2ejn3j0hNSsdwwREpx%2FeFtJJ2orVlpH7g%2FyqWc%2BVDOqocPpZXW6M2P9d0H1e3ZIh2pySF8JsuT5fYdU41hcuZn4B0IB5VZzp6AutLfQAKd2bvHUW3XnoJDOTzgjFaSqrxPefTTWVsk%2Fkn27A%2FaEfkPIdVGPyfZNU9h0Bg2AmaEJw%2F%2BLbRhnnINbXqQquizsP7L9c2agm7polGtcJlSgiPE8kH0lxkcqGs1XVfM8hjs7LAArh%2Bj3kD8quQ5YYWWpwODnofSmVvh7MwACH3h5%2FYWxQTdIQ3ARjSj9gLCCOcMJ08e0JLfiE11VzYkD%2FLDcAhSoH%2F%2F5KQmaNnLMM3b7yv0To3B8Pz4cG6r9yy8yNw3p%2Fqlg3vksKQy9Ev59o7zQ%2FgPAyVrg5jpA6OVwTqq%2BE50P07ap9%2FG3eSGnL3Eh%2FQhaW0arM06X9Tnujg8xG3p15%2F7Ukze9lJR6RHqzg3M9ZQr00wN4%2FfuIDeUsU5gRPrsVUGhIlcrdhQdLQYF3I2k6DjrPuvnt1flqh%2Fxf6TLwLdY61EFCZxr%2BB2jb1FOTykdUs85ZHiBR8BK2uE4VuZeHE%2FPNxSA7XNHVtKhZJj%2F7MqnmYS4jD2KnPRzCcj4rKBjqkAQS09I5Zdh50Vp5kGGbZpbzcWBMt8i3EiGaa6da7iwZUxLz8gjxyBAwwEX5WMwN2A988HhT7PGko34fVDXn6Kx96E3ULvRGFQfbYmFNFGpmRR56UF3UWOGXQcx9vV0FhSvLFc8Rz%2FvankquQ7EMQ4K0F%2FCTBeWDbaLwAOCRvtL4xKo022XGann7uDG6VcFM0RccOVwOe8HPakORzLmVze%2BPRTTbI&X-Amz-Signature=24940400f643b8568b82ae91a269c7c35277487480da5db9d579b2faf273d6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
