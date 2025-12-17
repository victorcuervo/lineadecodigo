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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGV7KFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6NTaVeNgOKZg245LdfjoBfvMYNUf6ELePZfmUK9iZwIhANAIzFOS1ofYTfE1TwSd1ufIoryJyxyh4OaQucQ7ePgAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwungYKVXPj5v15%2BVsq3APNzoEXyp%2F%2FfBKCfcpmDe3yLNsMZJbQZQPU7r6y3qotaUNncA6R7tdty%2FCkM7Si9vQ9u4Gs48BEzIpbJhwt%2FY21C1XSTcCaAfwL9bbHiH7VqA18ytyTEdgwqJxWN2k8RsfutHjq5MfonpIaqP1n3M4rSDdB10uO1LknYY9HiIZdH3Nogkzhhs%2BTn2roxzYvtx59LnNyXmWqDnB36vZPuCp%2BgkNdo00DkRwu%2F06A52rmtsSeJ0%2FH1rItv%2Fxul97nKWMRl3PUUtkUD1RSMTOhnbfw70ThLcuNqvnvqmlA3x%2BTQWkYLWzuaTR5M6%2Bs7G6LSr7otujmUwH2mFJPdcRljbednARvX1wFtVUFTzT1BEdZOcgF4gkUEOv%2BH7T4KZTaTNJ1NpkuZIVuIW%2FiwGErXmU62qA3mpY%2FayfDIVGBPgsnCstAqe27%2FH8FqPvuqZRI5uv64YMC8TwSx9DIDhI1PQWauH0YUmgu6zJ5epMXoaioutbKD7MlDbIMEzYOo50xJfrtPF%2BxUPy9lLxN14k7kqD20qDtjGCsAB3yBVAo6BDesF6gaEdDlUGcKHBtnc5ZmCgHWTKCQtfja3qfPwZJI9sUZy%2BkoSw7UruHaP%2FoAS%2BfkZ8uFZSCsjQKD%2FhWKzDMrYzKBjqkAdZmF3BMiZ7ixbpFicWrkpt8OrE46%2BZcrQ69sGFkwi7O8NtojipZNhUZ7HczNkF%2Fejmvafswb0G1hYzpPWCa8z%2B8fkPfTDoBMsZeg%2BTbinYNkFiopo9TjdTI63f2n5ga4Lw8b6cgQ6xbslGL7bq%2FVGbhqJE33NwF5pzGFA7rskruBfhxNUBVI%2BkFtbswxs0K66YSlchYQZrFASrHmXXOU5utxrto&X-Amz-Signature=f83b1d3842e5aa07e2ac2c26fed9eb8193a12788f3a53338cef3d4cd6d25e6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGV7KFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6NTaVeNgOKZg245LdfjoBfvMYNUf6ELePZfmUK9iZwIhANAIzFOS1ofYTfE1TwSd1ufIoryJyxyh4OaQucQ7ePgAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwungYKVXPj5v15%2BVsq3APNzoEXyp%2F%2FfBKCfcpmDe3yLNsMZJbQZQPU7r6y3qotaUNncA6R7tdty%2FCkM7Si9vQ9u4Gs48BEzIpbJhwt%2FY21C1XSTcCaAfwL9bbHiH7VqA18ytyTEdgwqJxWN2k8RsfutHjq5MfonpIaqP1n3M4rSDdB10uO1LknYY9HiIZdH3Nogkzhhs%2BTn2roxzYvtx59LnNyXmWqDnB36vZPuCp%2BgkNdo00DkRwu%2F06A52rmtsSeJ0%2FH1rItv%2Fxul97nKWMRl3PUUtkUD1RSMTOhnbfw70ThLcuNqvnvqmlA3x%2BTQWkYLWzuaTR5M6%2Bs7G6LSr7otujmUwH2mFJPdcRljbednARvX1wFtVUFTzT1BEdZOcgF4gkUEOv%2BH7T4KZTaTNJ1NpkuZIVuIW%2FiwGErXmU62qA3mpY%2FayfDIVGBPgsnCstAqe27%2FH8FqPvuqZRI5uv64YMC8TwSx9DIDhI1PQWauH0YUmgu6zJ5epMXoaioutbKD7MlDbIMEzYOo50xJfrtPF%2BxUPy9lLxN14k7kqD20qDtjGCsAB3yBVAo6BDesF6gaEdDlUGcKHBtnc5ZmCgHWTKCQtfja3qfPwZJI9sUZy%2BkoSw7UruHaP%2FoAS%2BfkZ8uFZSCsjQKD%2FhWKzDMrYzKBjqkAdZmF3BMiZ7ixbpFicWrkpt8OrE46%2BZcrQ69sGFkwi7O8NtojipZNhUZ7HczNkF%2Fejmvafswb0G1hYzpPWCa8z%2B8fkPfTDoBMsZeg%2BTbinYNkFiopo9TjdTI63f2n5ga4Lw8b6cgQ6xbslGL7bq%2FVGbhqJE33NwF5pzGFA7rskruBfhxNUBVI%2BkFtbswxs0K66YSlchYQZrFASrHmXXOU5utxrto&X-Amz-Signature=bbd9f43bd1965c03979a60098388c9ddfae79b88c7da922b3bb34792155fd8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
