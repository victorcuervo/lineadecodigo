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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIYA3OA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMKrsFqqoe1EXKKI21IcWkyt9noWhQqCu0DuYQFOqrPwIhAPVMdyUq%2BEJ61rDVwL0pkU%2FHFLomh%2BeqQPLk9AABLPdoKv8DCGEQABoMNjM3NDIzMTgzODA1IgxLkiNgtRjAs1htwuoq3AP5c8jizXR5lIEW76GZK5d108nOZBZ1601NmTiTUOWxNJxYi7vV9XlQGOzrYGGbHX0eUFEBBJTzXXma3qP9IOZILd%2FzsgjWfmmhXZ5TVzn0IJbza0GQbuG%2F0RaFww0iCpNDgAaOWcolv0YwTK1bM7LsuWtZ%2FBx7ifL3NLaqWQ4tfiIawrBVFyojnKdAXiBHl1FmIoZFx2qkCcDKkFwUA30mS121t3RfX3yIuKx5UGIxooWuLOdg3OxGmjxnTwt1f2TEixBoeQk%2BtOCdiSkqfBQ1yzDvVpP5QdQLJnNt1iPdh5tSJOdM2G7q%2FjI78xz5mGNrxACNprGEX5UioaUXb2lmQ%2FVZUASywc7VKr0pFZnY0UzqkLY2b27m4RbLgKykt2lDB6cVn%2Bfz7tUjXoYxhWuSELEnlXAFIuTw8xvU3Fk9bW3UqIa4BKbbvtYSd9IJR5v6OydSOX2irDpC%2B0zEZVRtQgIEEnvA9ju2fLQA6AXfTlMzQKVnzr6wM%2FaohM38xWXz0r25dIrm6kjuIs6jNT8SMlS5FimQgYFSiX2vGoVZF6qeq5VeoXyG6FqWqEpcXMzeYbIpifC2Os1%2Frxg10HNe6010owQfDEoWq%2F%2BNXbiP2z8qSUFNPBgdr13YYDC888vJBjqkAblmFnfQ4JdX5dNiugKVGLJsXsRAAmvUExfOTXBrfUkuVUm1AeMzxhE885%2FDEz9U%2BQiamdFUNGtdwRhE1cdYmPpI6F3oFVs1Y4xwdMbkqX0vzQUV4Yw0D7%2FxFo6rRa8ZFoswBkDFTAxIqzvG%2Fx0AN%2BQEYuzqV6liphr3YvDGc1Q8kyq1pwT8Os1u1lJuXI%2FcRcgxxWovhmLeh3YZc0cKI0Hmc2y9&X-Amz-Signature=3b0c413554623d02f9377a061a2023a735660d51060b7caebbeeb2088da7f6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIYA3OA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMKrsFqqoe1EXKKI21IcWkyt9noWhQqCu0DuYQFOqrPwIhAPVMdyUq%2BEJ61rDVwL0pkU%2FHFLomh%2BeqQPLk9AABLPdoKv8DCGEQABoMNjM3NDIzMTgzODA1IgxLkiNgtRjAs1htwuoq3AP5c8jizXR5lIEW76GZK5d108nOZBZ1601NmTiTUOWxNJxYi7vV9XlQGOzrYGGbHX0eUFEBBJTzXXma3qP9IOZILd%2FzsgjWfmmhXZ5TVzn0IJbza0GQbuG%2F0RaFww0iCpNDgAaOWcolv0YwTK1bM7LsuWtZ%2FBx7ifL3NLaqWQ4tfiIawrBVFyojnKdAXiBHl1FmIoZFx2qkCcDKkFwUA30mS121t3RfX3yIuKx5UGIxooWuLOdg3OxGmjxnTwt1f2TEixBoeQk%2BtOCdiSkqfBQ1yzDvVpP5QdQLJnNt1iPdh5tSJOdM2G7q%2FjI78xz5mGNrxACNprGEX5UioaUXb2lmQ%2FVZUASywc7VKr0pFZnY0UzqkLY2b27m4RbLgKykt2lDB6cVn%2Bfz7tUjXoYxhWuSELEnlXAFIuTw8xvU3Fk9bW3UqIa4BKbbvtYSd9IJR5v6OydSOX2irDpC%2B0zEZVRtQgIEEnvA9ju2fLQA6AXfTlMzQKVnzr6wM%2FaohM38xWXz0r25dIrm6kjuIs6jNT8SMlS5FimQgYFSiX2vGoVZF6qeq5VeoXyG6FqWqEpcXMzeYbIpifC2Os1%2Frxg10HNe6010owQfDEoWq%2F%2BNXbiP2z8qSUFNPBgdr13YYDC888vJBjqkAblmFnfQ4JdX5dNiugKVGLJsXsRAAmvUExfOTXBrfUkuVUm1AeMzxhE885%2FDEz9U%2BQiamdFUNGtdwRhE1cdYmPpI6F3oFVs1Y4xwdMbkqX0vzQUV4Yw0D7%2FxFo6rRa8ZFoswBkDFTAxIqzvG%2Fx0AN%2BQEYuzqV6liphr3YvDGc1Q8kyq1pwT8Os1u1lJuXI%2FcRcgxxWovhmLeh3YZc0cKI0Hmc2y9&X-Amz-Signature=4a8092bb64930f688cd6bb57e8de172e2ab55d738e6b6e5f3881840f88052c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
