---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXID4LJ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDzgerX7vMVrGhn%2BW3J%2Fr0ne2wFT9GZcGVhyKFJIQMEvAIhAPXM%2B%2BCc5ERWKi9RJxPiiCSSMiD6eLF0KsILORS6yESJKv8DCDYQABoMNjM3NDIzMTgzODA1IgzU0loReUWrdug5xGwq3AM57p3R3rTalrW4Js5W4WZrGWPfayNjB0bwGBE0u8AG1qkGy549uUqU2aL7KUsNyl72X8DTu0Qnvv%2FByscFmM8nVmq3nEQxp%2FfaQtf7RwNAjHghnmj1%2B7j0S%2FdE2N9REdneyzFd6bamkcO5RN6NPM7wwS%2FdZV7efldhpYKkeYxoAefvhH6FmMDyM59FE2BL37ox%2B%2BRsdOLItvotslRrc9thhActk9YTtZGgem%2FNJDD9uDTOCk%2B7SO%2BisHF34oVZ%2FcX0XQLT0bduml8yz4PYI8zF0Y8mIxDA1Af4uTRqwcLRGjEUX5e8BG1eQncbyhzAtkG1H%2FT66H%2BwwIHF8e7xzfaREJFz84Cqs%2B33ExfusxKSZGYoZpVSFzxbz047QBo461Ox%2BZL7bdgAiLf4AZfaG2qU1qYx771jNKUmsQ0lZbDzT7NkQuyB6gMSxvbycvXxWj8k85ffBKeSf6892zUQQ7bk3x7GwVWPUfymptnUxIfub%2BlsaR5jJmwVvwUn0fcmJDgGHe7hY1Q%2FBTPyf7jCO%2FAk6GHNPx312qHxKzwBo2sdcUwhSxYp7PsKFnsGGNAda3wcp8XTvdLroIn4eYhkrQoCweNfpMt369fojR7ITpmYtqSePhMJQdAwixqB0DCcvsLJBjqkAc5CsTecoCwKZYhFBA811tIKMDyL%2BzpNOgS2qHEqcCARx8agH6pYIJ%2FYREhVThCkC6prPqInNcopcfTv7hUNDfxAwuGHHIHerZ%2Fw54pA1kkf2KGJisiFqdbo%2B2OMYkA5SAEdAHT1zvUwh46S9kihlU4IPB5xypmOEX699cxYaGNJSOVmluwYpxwco8f5bjGA0zUgnauudwVf0jyjrOElXzthBf6%2F&X-Amz-Signature=0063ee67c1b28685957f23c7855f0fa89f1ad700cbe08f16e80fa17c90ef6adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXID4LJ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDzgerX7vMVrGhn%2BW3J%2Fr0ne2wFT9GZcGVhyKFJIQMEvAIhAPXM%2B%2BCc5ERWKi9RJxPiiCSSMiD6eLF0KsILORS6yESJKv8DCDYQABoMNjM3NDIzMTgzODA1IgzU0loReUWrdug5xGwq3AM57p3R3rTalrW4Js5W4WZrGWPfayNjB0bwGBE0u8AG1qkGy549uUqU2aL7KUsNyl72X8DTu0Qnvv%2FByscFmM8nVmq3nEQxp%2FfaQtf7RwNAjHghnmj1%2B7j0S%2FdE2N9REdneyzFd6bamkcO5RN6NPM7wwS%2FdZV7efldhpYKkeYxoAefvhH6FmMDyM59FE2BL37ox%2B%2BRsdOLItvotslRrc9thhActk9YTtZGgem%2FNJDD9uDTOCk%2B7SO%2BisHF34oVZ%2FcX0XQLT0bduml8yz4PYI8zF0Y8mIxDA1Af4uTRqwcLRGjEUX5e8BG1eQncbyhzAtkG1H%2FT66H%2BwwIHF8e7xzfaREJFz84Cqs%2B33ExfusxKSZGYoZpVSFzxbz047QBo461Ox%2BZL7bdgAiLf4AZfaG2qU1qYx771jNKUmsQ0lZbDzT7NkQuyB6gMSxvbycvXxWj8k85ffBKeSf6892zUQQ7bk3x7GwVWPUfymptnUxIfub%2BlsaR5jJmwVvwUn0fcmJDgGHe7hY1Q%2FBTPyf7jCO%2FAk6GHNPx312qHxKzwBo2sdcUwhSxYp7PsKFnsGGNAda3wcp8XTvdLroIn4eYhkrQoCweNfpMt369fojR7ITpmYtqSePhMJQdAwixqB0DCcvsLJBjqkAc5CsTecoCwKZYhFBA811tIKMDyL%2BzpNOgS2qHEqcCARx8agH6pYIJ%2FYREhVThCkC6prPqInNcopcfTv7hUNDfxAwuGHHIHerZ%2Fw54pA1kkf2KGJisiFqdbo%2B2OMYkA5SAEdAHT1zvUwh46S9kihlU4IPB5xypmOEX699cxYaGNJSOVmluwYpxwco8f5bjGA0zUgnauudwVf0jyjrOElXzthBf6%2F&X-Amz-Signature=a8b5d9adcf22ff09139ef576f01e21b3964119945d70538df6e790785d673fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
