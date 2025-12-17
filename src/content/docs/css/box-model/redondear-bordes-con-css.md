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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7G63MY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoPa2kLsZk%2FvjBc9k7jPBr1gVou%2Fr%2FA911u8eqftvT9gIgIxCsCmxR0L3yCuvo4uen9NlaXd%2B%2FZ2Jc%2FJOwl4Jq%2BiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG03xJUeTO7vN8WLRCrcA7QT%2BGnlaM%2B6nY2uGJkZUhqTRMEvQKU0QmckjEGtBv9RpoO85ndAtb96GgbBf4iayE5NvtK%2B7hkOJTcQnPbng%2B5fbsCTN0SPbbeeE6i%2FBWAW8tPTAc2eZAwXLlqnc2Ug6gWtGWqU0u5WbluHjsMqyzq8AClOE5zP86szlSYk68j2JYk9lE2OIARJZfKr0liBnMkLAIqFGWfuANgf1KvQmpdjRbP3pwkoybqnd0JnTJZbeLmJa6%2FxK6iU4HlmQIWDcHBxuFsWmr7KJHqSzI1skpHV5PSYesZptY%2BPn8V6zkrtRl14zW4Xcwnjbw%2FzViI9220HPB%2FCWT%2Fc5vf0yS%2BTIfzevbqBiUkHBnwZ4RXTZmUz3Tvwf83dvP64X2NUNapPWuv0xfSGyPgP4lLk%2FOAq11dlexYGQmIgWAEMH6PkJ224SVru6oR2%2FKBC1rUmqLJDLR%2Bgr65hmxPkqbWLI8UaMBF8yIgn5NMAMmV3IY%2FqibupFaSMiyCQFapf3%2F0jsHWJkXGyAPs%2F50O9uAaLZlafjujcj2b8g3XrUYvQ%2BWYH9M%2Bpvl0sxB6UDwVg3sa3eg8%2FUQ63RKHHzYmT3%2Fz9J8tWzRim9D8FCYiOJS8FdrP9IKhzocAyFNIEdYh9BxLwMJafi8oGOqUBrheMRH%2FbC0X6deCqv3%2Be%2FFoK4nnWyUxTwJNwJS5kvRWkBat0YJjFu%2BmRHWONUXRPoc2PGLmVPEmwzlCD%2F2KXBX4O%2BukLdMWPQ0y%2BEEz8OGETyrGMh%2BB2Q0wM%2B69NSfVTjpqIyjpFJ2C54Et8cowKWzaxBuaLqlCEur0R3wK6hyn3ufPKpKqfP2tZcd7mw%2FUqcQ%2Flj8dkYT%2FhuzMl247rWqJgdnPD&X-Amz-Signature=12324e73daf31f3ecb57ef141508dd43774b3d427ef95e9856731a38e5faf362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7G63MY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoPa2kLsZk%2FvjBc9k7jPBr1gVou%2Fr%2FA911u8eqftvT9gIgIxCsCmxR0L3yCuvo4uen9NlaXd%2B%2FZ2Jc%2FJOwl4Jq%2BiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG03xJUeTO7vN8WLRCrcA7QT%2BGnlaM%2B6nY2uGJkZUhqTRMEvQKU0QmckjEGtBv9RpoO85ndAtb96GgbBf4iayE5NvtK%2B7hkOJTcQnPbng%2B5fbsCTN0SPbbeeE6i%2FBWAW8tPTAc2eZAwXLlqnc2Ug6gWtGWqU0u5WbluHjsMqyzq8AClOE5zP86szlSYk68j2JYk9lE2OIARJZfKr0liBnMkLAIqFGWfuANgf1KvQmpdjRbP3pwkoybqnd0JnTJZbeLmJa6%2FxK6iU4HlmQIWDcHBxuFsWmr7KJHqSzI1skpHV5PSYesZptY%2BPn8V6zkrtRl14zW4Xcwnjbw%2FzViI9220HPB%2FCWT%2Fc5vf0yS%2BTIfzevbqBiUkHBnwZ4RXTZmUz3Tvwf83dvP64X2NUNapPWuv0xfSGyPgP4lLk%2FOAq11dlexYGQmIgWAEMH6PkJ224SVru6oR2%2FKBC1rUmqLJDLR%2Bgr65hmxPkqbWLI8UaMBF8yIgn5NMAMmV3IY%2FqibupFaSMiyCQFapf3%2F0jsHWJkXGyAPs%2F50O9uAaLZlafjujcj2b8g3XrUYvQ%2BWYH9M%2Bpvl0sxB6UDwVg3sa3eg8%2FUQ63RKHHzYmT3%2Fz9J8tWzRim9D8FCYiOJS8FdrP9IKhzocAyFNIEdYh9BxLwMJafi8oGOqUBrheMRH%2FbC0X6deCqv3%2Be%2FFoK4nnWyUxTwJNwJS5kvRWkBat0YJjFu%2BmRHWONUXRPoc2PGLmVPEmwzlCD%2F2KXBX4O%2BukLdMWPQ0y%2BEEz8OGETyrGMh%2BB2Q0wM%2B69NSfVTjpqIyjpFJ2C54Et8cowKWzaxBuaLqlCEur0R3wK6hyn3ufPKpKqfP2tZcd7mw%2FUqcQ%2Flj8dkYT%2FhuzMl247rWqJgdnPD&X-Amz-Signature=b9b63496d1fe28d4879bfb3fee6e18274b2d79203350a38068c0daed56cbbc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
