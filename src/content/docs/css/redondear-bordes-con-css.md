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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MHQIR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9WCFYtsi%2FSds0e6IGrfYT9RACLsvOQIhY0BwVBq8ixAIhAOwooSlrhXIP1N35IEF3HGUPi7oSLeDOcvuDTKTpgDOKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjJIDF2Is2r2wmamYq3AOuMFnJvpJbvg5JlRu9FFO0gCC3dSzLB4JQxSWll8tf%2Fr%2FXzTp09V9KZ%2B1%2B75WnkfBBshKY%2FtJwDkrDuJbeRtaeVhN9lEeOmSreuQ0FNvgADEcX5GdP1bx2PZIAr0WP2%2BDr%2B949gDRTiKnmmBMoiiilDYtIZHgao9VZrcIgr9lATAfgDWOBu9EYHbUAQcgRO6rmiV6VaJJIKcqhtImOhh7ULQytEs7RDQ6F0Cdo8Bz4XML%2F%2BVKQxHHhx5VQj3CFx94OpH%2B0qbDJNm1I3K5uQiI%2Fjil9k3edNU1swejzjOBKlHtUNmgDDeM%2FChmx1ou7RjLpqrGQ0uBWHtDkO61AdC1RAIYBh%2FUYeiB3e6In0cwQPOZjYvIPdmpbRF3n1dJXdx%2FUSa9JzHZUX1j9w0AWeTWQwumq9QeWmttaE0abvr2zf4QAgIE8s2oPkQazeIVxhuCtJtg%2BNy2HvjqyY1H9V2BSjHWoJhc3xhahayM8xxSYAWWxc8r0rjv9WqO6wwNcvA%2BqukYIIazQPWzS9jMdsrYTrwKVZZdQ63aKeygf05x2%2B9To5S9omsUG86m30uRheT02THrRPwnIcP%2FnBfRIf6j2tKmQxzZ8B58jgUn6piiBwm8rVhA6g8i3raqRzDCv%2FtLJBjqkARv6qMDAhTcBW6%2BrsAlXsKpmNCc%2BxeHL91CLK%2BW3%2B2dP1urrT8p6u8iWaKcLyq3pUDRslvZEZSHY1vzgVo95prdjkhXJWwK29%2B1ZyN8ZOcgJ0y98F%2FwzF50FZKk7Wc6bTE0RFq035siotBvD9UYcfIvkO%2Fvdr%2F8NUP678rieSRFn%2FFD1ErU8cGRWe65k9hryCPlrtffZKcNm4pjnUmJJs7evqh2R&X-Amz-Signature=c85845e24e86f60dfe4733bcf4f76870964f805a89b05ed04977989c22cb0613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MHQIR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9WCFYtsi%2FSds0e6IGrfYT9RACLsvOQIhY0BwVBq8ixAIhAOwooSlrhXIP1N35IEF3HGUPi7oSLeDOcvuDTKTpgDOKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjJIDF2Is2r2wmamYq3AOuMFnJvpJbvg5JlRu9FFO0gCC3dSzLB4JQxSWll8tf%2Fr%2FXzTp09V9KZ%2B1%2B75WnkfBBshKY%2FtJwDkrDuJbeRtaeVhN9lEeOmSreuQ0FNvgADEcX5GdP1bx2PZIAr0WP2%2BDr%2B949gDRTiKnmmBMoiiilDYtIZHgao9VZrcIgr9lATAfgDWOBu9EYHbUAQcgRO6rmiV6VaJJIKcqhtImOhh7ULQytEs7RDQ6F0Cdo8Bz4XML%2F%2BVKQxHHhx5VQj3CFx94OpH%2B0qbDJNm1I3K5uQiI%2Fjil9k3edNU1swejzjOBKlHtUNmgDDeM%2FChmx1ou7RjLpqrGQ0uBWHtDkO61AdC1RAIYBh%2FUYeiB3e6In0cwQPOZjYvIPdmpbRF3n1dJXdx%2FUSa9JzHZUX1j9w0AWeTWQwumq9QeWmttaE0abvr2zf4QAgIE8s2oPkQazeIVxhuCtJtg%2BNy2HvjqyY1H9V2BSjHWoJhc3xhahayM8xxSYAWWxc8r0rjv9WqO6wwNcvA%2BqukYIIazQPWzS9jMdsrYTrwKVZZdQ63aKeygf05x2%2B9To5S9omsUG86m30uRheT02THrRPwnIcP%2FnBfRIf6j2tKmQxzZ8B58jgUn6piiBwm8rVhA6g8i3raqRzDCv%2FtLJBjqkARv6qMDAhTcBW6%2BrsAlXsKpmNCc%2BxeHL91CLK%2BW3%2B2dP1urrT8p6u8iWaKcLyq3pUDRslvZEZSHY1vzgVo95prdjkhXJWwK29%2B1ZyN8ZOcgJ0y98F%2FwzF50FZKk7Wc6bTE0RFq035siotBvD9UYcfIvkO%2Fvdr%2F8NUP678rieSRFn%2FFD1ErU8cGRWe65k9hryCPlrtffZKcNm4pjnUmJJs7evqh2R&X-Amz-Signature=6480e7b5a5fdf26fa4eb4362cac518d46813e9337a213e7784093eb73c0f474b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
