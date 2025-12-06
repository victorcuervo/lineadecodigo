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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZMR2LC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwR7T2d1cx7kw14DWOa%2FI%2FuukU8AV4DkFCthJDGxsNYAiBejDpIrPftpHmo0Y9CZadZu3sZpQSYfYxPU5ueLUMfxyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHi9FfDZpccKl9O9hKtwDfIDOZ9uh2KI5IqLmM9Gukk%2BixyDEfR9013mFwipzBFUszKNXJ%2FCEMa6sUhzjHiHKhs8NYOc9TfA13LSaDtWE6eYDFDj7l9fg%2FBxLSQgMPBNzl5uUBOR34Uem5bMT6ZmSDVfqr%2BvLCZQzV%2F7crs4j4z8zuQXxHRsowbH%2FR4oBu3GpkT1clxKLJHwdZWxR8vsPNbEHnvaNsZxDeBZXq0t1ZzfShVcr5bilPylOeBKa0Lp6vrv3WuL6lXhEfexJW3sWICXh59hWtOqWhhcFgMupXAQhevcAPNkWTVqoHm4SidTut4%2Fx3YTrHMJrY69XTVVf7VzLWgFOMQWWT9Svb1aJCWA77aQ25Qe4rJ8c1u%2F4bRFJ%2Fr6PagO2gqkc4THjyceHjH%2BK%2Fzxd67jNUkZCET2Eb4Qeur0PgFJiuJZKa2N9g2sUxg8IThPe9lZyEj2iZ3gwGtheAQ6XYo6Ak%2BJ9hLdx2VtdlsdLMRQp7sPXW72NhvMHRhPd2hcANDjqeFe89rmbCG6YJwIOAmmLa5zPm5YDpJqBPWCal9uWHlCZE71p1nu7dxKAhpVQEiUUKuk2VSg4Y5w2FGMzzXKXYug37m3236KvI%2B6njf%2FQsvURgEhC88CnG2osPdPiP8PeM7wwkqfQyQY6pgFGLq86aWkwt%2BO%2FPtWKPVXp%2FGCN%2FD8V4oj0nnkTNiPA6dVtptYHYyk7%2B9DP0EmFXhxGHNYQt5HtRt7jEVAX1gB9JDD87TgKl7STPIjK9pfLfXMZio8xHKmp7z4jNqkZlpgEnA%2FcMZdo9Z%2Bc5u67qEPLpC2exU0E27McrTo8EO1A29pB%2FMiXMLr9w8g21v9Pv6xcnZVwtZt4IntwkXYOldkVQSX50dbk&X-Amz-Signature=64ca56f78aa1331ec76f5ea9f9cbf06d048708438a8be16fb67a350e34b32c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ZMR2LC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwR7T2d1cx7kw14DWOa%2FI%2FuukU8AV4DkFCthJDGxsNYAiBejDpIrPftpHmo0Y9CZadZu3sZpQSYfYxPU5ueLUMfxyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHi9FfDZpccKl9O9hKtwDfIDOZ9uh2KI5IqLmM9Gukk%2BixyDEfR9013mFwipzBFUszKNXJ%2FCEMa6sUhzjHiHKhs8NYOc9TfA13LSaDtWE6eYDFDj7l9fg%2FBxLSQgMPBNzl5uUBOR34Uem5bMT6ZmSDVfqr%2BvLCZQzV%2F7crs4j4z8zuQXxHRsowbH%2FR4oBu3GpkT1clxKLJHwdZWxR8vsPNbEHnvaNsZxDeBZXq0t1ZzfShVcr5bilPylOeBKa0Lp6vrv3WuL6lXhEfexJW3sWICXh59hWtOqWhhcFgMupXAQhevcAPNkWTVqoHm4SidTut4%2Fx3YTrHMJrY69XTVVf7VzLWgFOMQWWT9Svb1aJCWA77aQ25Qe4rJ8c1u%2F4bRFJ%2Fr6PagO2gqkc4THjyceHjH%2BK%2Fzxd67jNUkZCET2Eb4Qeur0PgFJiuJZKa2N9g2sUxg8IThPe9lZyEj2iZ3gwGtheAQ6XYo6Ak%2BJ9hLdx2VtdlsdLMRQp7sPXW72NhvMHRhPd2hcANDjqeFe89rmbCG6YJwIOAmmLa5zPm5YDpJqBPWCal9uWHlCZE71p1nu7dxKAhpVQEiUUKuk2VSg4Y5w2FGMzzXKXYug37m3236KvI%2B6njf%2FQsvURgEhC88CnG2osPdPiP8PeM7wwkqfQyQY6pgFGLq86aWkwt%2BO%2FPtWKPVXp%2FGCN%2FD8V4oj0nnkTNiPA6dVtptYHYyk7%2B9DP0EmFXhxGHNYQt5HtRt7jEVAX1gB9JDD87TgKl7STPIjK9pfLfXMZio8xHKmp7z4jNqkZlpgEnA%2FcMZdo9Z%2Bc5u67qEPLpC2exU0E27McrTo8EO1A29pB%2FMiXMLr9w8g21v9Pv6xcnZVwtZt4IntwkXYOldkVQSX50dbk&X-Amz-Signature=2e1bb5d91b26dd54913460088a59412b621205f15175f436ea9f6319710f0cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
