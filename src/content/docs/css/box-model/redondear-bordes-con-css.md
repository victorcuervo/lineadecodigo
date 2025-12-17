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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSR6VOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSIxAR%2FaW59eTAnRnoZJ9cBdiNkAhyQvKPiHNyCbheMAiAXL35XoMmuc2KsSG0jjvOCzpJ9lzRF%2F00oI%2FhiAQZy%2FSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMVSTpREbZQcALkFqHKtwDzMPHMNUclU1m8FZ8L5qpcGjS%2FcJ3mqOFlAaXm9qpo%2B4YBhJxQQ9a1vaPxXCrEKSXYaE00%2B2eOcAt807RVx6obZzLke5ip69KytZQ6zupy8r3r2AiqVWn9yjhgSOe3O7%2FIuXjQqTov7XvEgYqUNiMZmt4VrnrGIEt7mJlRCj9ZIjGFXxgAGM4uFNgPJeRfMjQlDYYmmwFB6PSGC%2BYnA9s7XsqLbxgBRgWP5Os6eCL9W%2BaT7BzS4abj0jJB0NU45ei1CqzQq9VA%2F4%2FuHcNpVjVCW84d1CBzQ2uhe6Y5AhgEJVum9XCLg4KrONt1F8toaG9%2F4bhiK8sWXwRhR5WVxpnl8iL5jNCwcRrNJFD6QQe5vZRpbtDUXfncBMmndVz4RxcRybZoatR%2FbWxkY%2B%2F5p4CDA84ip0wy%2FY4ilvAaUa5z%2BpzdktN0%2BdSe%2B7bb%2BYPj97ol4A0SqLDC4X9fBKV%2BiEccFw%2BnnpD2zPcgBkx14Ct9S85oWEJHXcpqZiDjXbquiOBkd5wssjAfoNZEV28hWvn9fMu46CQnDtU6xOHXW8L2jGMOZtrnOK6WTMplZcqI0BLA8DmrHSuEZjLsewKsUVTqJgv0butk4uOlcoJRjq7%2Fu0gzSyfQ7ZD%2BlG4ehEwjp6JygY6pgF0MVck7a%2FGd075ZJug4TNDoRRfzWn1pme4yCy3ulil2YBv3G2EhdCBB9SpI8EufnAO2iIDo6i7rbcZ%2B3FdjhyfIZ%2FZJXMSnEBb4iz9VMMuBRMajfWm0cI6aGSn0MCpCDquJPHiStvL5zE%2B6IPJfurrisqNSliziPs8KkNTtxilJ115J9ECiHXOCkrXWsAGHvngZ8t%2BclqYjyv75pPuI1VaMsmihx%2FY&X-Amz-Signature=b4ab8e81cab0af8e1fa3a2375b34ba1999c82b8e5914edb0353247acdb866d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSR6VOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSIxAR%2FaW59eTAnRnoZJ9cBdiNkAhyQvKPiHNyCbheMAiAXL35XoMmuc2KsSG0jjvOCzpJ9lzRF%2F00oI%2FhiAQZy%2FSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMVSTpREbZQcALkFqHKtwDzMPHMNUclU1m8FZ8L5qpcGjS%2FcJ3mqOFlAaXm9qpo%2B4YBhJxQQ9a1vaPxXCrEKSXYaE00%2B2eOcAt807RVx6obZzLke5ip69KytZQ6zupy8r3r2AiqVWn9yjhgSOe3O7%2FIuXjQqTov7XvEgYqUNiMZmt4VrnrGIEt7mJlRCj9ZIjGFXxgAGM4uFNgPJeRfMjQlDYYmmwFB6PSGC%2BYnA9s7XsqLbxgBRgWP5Os6eCL9W%2BaT7BzS4abj0jJB0NU45ei1CqzQq9VA%2F4%2FuHcNpVjVCW84d1CBzQ2uhe6Y5AhgEJVum9XCLg4KrONt1F8toaG9%2F4bhiK8sWXwRhR5WVxpnl8iL5jNCwcRrNJFD6QQe5vZRpbtDUXfncBMmndVz4RxcRybZoatR%2FbWxkY%2B%2F5p4CDA84ip0wy%2FY4ilvAaUa5z%2BpzdktN0%2BdSe%2B7bb%2BYPj97ol4A0SqLDC4X9fBKV%2BiEccFw%2BnnpD2zPcgBkx14Ct9S85oWEJHXcpqZiDjXbquiOBkd5wssjAfoNZEV28hWvn9fMu46CQnDtU6xOHXW8L2jGMOZtrnOK6WTMplZcqI0BLA8DmrHSuEZjLsewKsUVTqJgv0butk4uOlcoJRjq7%2Fu0gzSyfQ7ZD%2BlG4ehEwjp6JygY6pgF0MVck7a%2FGd075ZJug4TNDoRRfzWn1pme4yCy3ulil2YBv3G2EhdCBB9SpI8EufnAO2iIDo6i7rbcZ%2B3FdjhyfIZ%2FZJXMSnEBb4iz9VMMuBRMajfWm0cI6aGSn0MCpCDquJPHiStvL5zE%2B6IPJfurrisqNSliziPs8KkNTtxilJ115J9ECiHXOCkrXWsAGHvngZ8t%2BclqYjyv75pPuI1VaMsmihx%2FY&X-Amz-Signature=a75b42d8299b25b4dc379fb7968ff58517a324f734d51ea20b14e21bbe4c825d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
