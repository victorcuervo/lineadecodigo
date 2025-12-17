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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFL2JNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFw%2FmFGP28f%2FmhP%2FGUZAc7TFW2k087uh1TXa8roS0emQIgHPoar7R5syD3k1nbmZ0bG%2BStGkTaM1X9KkKqj9R4GSUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF%2F3F7qryCxCdN%2BUrCrcAxZbGDWs6K7UCMWtmydvxGeFmlMkIkcuyCoiuGS7NtXVVA0%2FEeD%2FCBbEESz9mp32%2FQ%2FS5rw%2FNk9cRiKU1y%2BDoClS9iltIjq%2FBw2b%2FlF%2Bm8iOj7U%2F5UhZYoGSpMmXc3gPtrOexr01qR0U5kvdPam16%2B2lUztme3u5X1IQEFlueY2n7YcHQUgXCbI%2Bak0cf3tAn0Hr2hM%2BKrQu4%2BzJowbq6%2FZJNQvrffKn6W9OHinyZ%2F7OcNK8OXitgbg46Cn5CAz9TfI8fQLLeVBXie%2Bx5LpZWmioNqoo1IPmSPhGnUdGq3LRLCd2izrW0%2F8ObPK0X%2B2WYF%2F65O0d%2F76hPLa%2BZmw7YwHPpSoZ5lHZ5YJvUJkYZEEzuZ7nPadepAw7HLWPMJCZ84iqpMj0bPbDIBHxj9kZT16sggKsevro1y1R14J7DlzZoCSYFS2UAvXwltr%2Fmi84kykh18e84jFIiaOWdCTdqJztVHXORTQiMaNqMHIOjgVG%2Fk%2FqgmwZn9TBeYvNT72AuKPgYF6jlMF5Lw0Slfvh6lZCWABs7W%2FLi4GD8x5yC29Tsvh6117orHX74XhypY008l%2FSsYiFM0ihvAAhpIAxSPL%2Bp53elQ4BOg%2BovKADNAT1Q%2BAVUwqWk%2FZZl4AbMJODicoGOqUB%2FtaYt7%2Fwu8QqiK9Y2P9DNDm3THKhGElsk%2F9rYiUvjhDQWs0rPoQkzzo3V7geDSPYky4l5utVqHwrCfb12zTJtmKawRtGndL7r4BgOZLT8LtRoliMHfHQdJBWSnMomkzaKX7RFa3h532YaYX4FiauFvdiXyQ2R%2FiGiUx9%2BirNytFNGN%2Fv%2BX4aAl9vO3jj2DlDp7%2Bc2yMeeT4pOBOjyZdMiKuXmPjT&X-Amz-Signature=af141bbaa93cba68b58bb865be4656e8db5d13cd1a8341bb17487e618d7868c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFL2JNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFw%2FmFGP28f%2FmhP%2FGUZAc7TFW2k087uh1TXa8roS0emQIgHPoar7R5syD3k1nbmZ0bG%2BStGkTaM1X9KkKqj9R4GSUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF%2F3F7qryCxCdN%2BUrCrcAxZbGDWs6K7UCMWtmydvxGeFmlMkIkcuyCoiuGS7NtXVVA0%2FEeD%2FCBbEESz9mp32%2FQ%2FS5rw%2FNk9cRiKU1y%2BDoClS9iltIjq%2FBw2b%2FlF%2Bm8iOj7U%2F5UhZYoGSpMmXc3gPtrOexr01qR0U5kvdPam16%2B2lUztme3u5X1IQEFlueY2n7YcHQUgXCbI%2Bak0cf3tAn0Hr2hM%2BKrQu4%2BzJowbq6%2FZJNQvrffKn6W9OHinyZ%2F7OcNK8OXitgbg46Cn5CAz9TfI8fQLLeVBXie%2Bx5LpZWmioNqoo1IPmSPhGnUdGq3LRLCd2izrW0%2F8ObPK0X%2B2WYF%2F65O0d%2F76hPLa%2BZmw7YwHPpSoZ5lHZ5YJvUJkYZEEzuZ7nPadepAw7HLWPMJCZ84iqpMj0bPbDIBHxj9kZT16sggKsevro1y1R14J7DlzZoCSYFS2UAvXwltr%2Fmi84kykh18e84jFIiaOWdCTdqJztVHXORTQiMaNqMHIOjgVG%2Fk%2FqgmwZn9TBeYvNT72AuKPgYF6jlMF5Lw0Slfvh6lZCWABs7W%2FLi4GD8x5yC29Tsvh6117orHX74XhypY008l%2FSsYiFM0ihvAAhpIAxSPL%2Bp53elQ4BOg%2BovKADNAT1Q%2BAVUwqWk%2FZZl4AbMJODicoGOqUB%2FtaYt7%2Fwu8QqiK9Y2P9DNDm3THKhGElsk%2F9rYiUvjhDQWs0rPoQkzzo3V7geDSPYky4l5utVqHwrCfb12zTJtmKawRtGndL7r4BgOZLT8LtRoliMHfHQdJBWSnMomkzaKX7RFa3h532YaYX4FiauFvdiXyQ2R%2FiGiUx9%2BirNytFNGN%2Fv%2BX4aAl9vO3jj2DlDp7%2Bc2yMeeT4pOBOjyZdMiKuXmPjT&X-Amz-Signature=3e4d60c8805dc63016699014c65e94af50c216faa0f74a8abd8dbaf1dc5a1f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
