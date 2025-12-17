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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HCZH36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjv8Xvjd3VtrqDtSBnb%2BxnhbpAA4tXtSXmaFTbQuacoQIhAJBym4wr9fqpyeufQho9m2POPmERUgsr%2FR7sx1Ke3Zt%2BKv8DCHQQABoMNjM3NDIzMTgzODA1Igy5Rrr8UmfXjGqaKa8q3AN1wn73pezCI2B87WItRviAB0oQSwKSzLjYQRwN%2Bvi8kof7PGCL1Zgo62hBRYI1vW9lCeBP%2FpEQc2%2FY3hiV1n1ufdx%2Bj3A7h%2FW1eOiHpWEY6%2Fx12KB0cB5QFxYCGhl8L0WBJfNB2gZrBDmF2Xaf3xiJDvVzzUmERgu6kumhpseS46B8RoYIeJfDqDUwRKfLfxi7dZJ%2BS5hXxaeMyDsLebhc0Q22Qvb4TZpQ6oohMaCmR7hwgMgBV1S5Ucv0mylpw45lW7TdQ1b%2FpFHmtGntktc0Px5JJ0MDQwppVh4jV%2FoIu34RrUi%2FxPv0FJSkQp9FlPhgNtbmaxuGdTbvRPoAIsFN3JmIeQ0qOWZO3o2dCJPEOdhKRd8yWRH0FDjNDDSfohliU65bh8v0Pn0cTcUTOSuCBij8furGZliYuBq%2FphLWnYYk7NyF0YiQymvZBiwGNQxT5bZBDPoQU8WOZITu4ztj3FNRq2ktvhI9cSa8%2BbLXeC6KMi4bQsqkMLUtrTbuAdwt9OtTO0a18Gwh6vyX9pvWluhOrxNjqlYBfbxN1%2FtGUDG9%2FmdBJV%2FVuRjl%2FI3c4igJ09GtNLhdYgH2%2FLPBPD3xQY6tZmsrZiF4xBJzEFCezQzV0TdTQ02WTsptQjDZsojKBjqkAfTu1pFhFAhmMPdCbxKd%2BxTvbWZrD7KLPOuLtfbLF9ZtbES3rJl0PQPXCSNxdPQzSfh5TespRQ8tfdqBQrUylU6IZTiyu5VDr68BApTM8oibUQWpX4PGOJnno03Tw3v%2Bv2G3yb5tiPJMCUEQgoK5mBZMoCo6tu1XLBd7YUYIpLcN6m0rXHpJm4ZvlShFKTOOuhGzArc4d%2B5mZAwjvRBQ5c3nk3iA&X-Amz-Signature=bfa5915768cc38af53e65156fb7a4cd87a4d4fc8299e271f4f0e3d29b9909c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HCZH36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjv8Xvjd3VtrqDtSBnb%2BxnhbpAA4tXtSXmaFTbQuacoQIhAJBym4wr9fqpyeufQho9m2POPmERUgsr%2FR7sx1Ke3Zt%2BKv8DCHQQABoMNjM3NDIzMTgzODA1Igy5Rrr8UmfXjGqaKa8q3AN1wn73pezCI2B87WItRviAB0oQSwKSzLjYQRwN%2Bvi8kof7PGCL1Zgo62hBRYI1vW9lCeBP%2FpEQc2%2FY3hiV1n1ufdx%2Bj3A7h%2FW1eOiHpWEY6%2Fx12KB0cB5QFxYCGhl8L0WBJfNB2gZrBDmF2Xaf3xiJDvVzzUmERgu6kumhpseS46B8RoYIeJfDqDUwRKfLfxi7dZJ%2BS5hXxaeMyDsLebhc0Q22Qvb4TZpQ6oohMaCmR7hwgMgBV1S5Ucv0mylpw45lW7TdQ1b%2FpFHmtGntktc0Px5JJ0MDQwppVh4jV%2FoIu34RrUi%2FxPv0FJSkQp9FlPhgNtbmaxuGdTbvRPoAIsFN3JmIeQ0qOWZO3o2dCJPEOdhKRd8yWRH0FDjNDDSfohliU65bh8v0Pn0cTcUTOSuCBij8furGZliYuBq%2FphLWnYYk7NyF0YiQymvZBiwGNQxT5bZBDPoQU8WOZITu4ztj3FNRq2ktvhI9cSa8%2BbLXeC6KMi4bQsqkMLUtrTbuAdwt9OtTO0a18Gwh6vyX9pvWluhOrxNjqlYBfbxN1%2FtGUDG9%2FmdBJV%2FVuRjl%2FI3c4igJ09GtNLhdYgH2%2FLPBPD3xQY6tZmsrZiF4xBJzEFCezQzV0TdTQ02WTsptQjDZsojKBjqkAfTu1pFhFAhmMPdCbxKd%2BxTvbWZrD7KLPOuLtfbLF9ZtbES3rJl0PQPXCSNxdPQzSfh5TespRQ8tfdqBQrUylU6IZTiyu5VDr68BApTM8oibUQWpX4PGOJnno03Tw3v%2Bv2G3yb5tiPJMCUEQgoK5mBZMoCo6tu1XLBd7YUYIpLcN6m0rXHpJm4ZvlShFKTOOuhGzArc4d%2B5mZAwjvRBQ5c3nk3iA&X-Amz-Signature=0a34c1e7439324ee8b5cd61cacef46febb4ae390fe203fc1cb270f4db7aee91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
