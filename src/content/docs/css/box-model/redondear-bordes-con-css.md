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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSD4V2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCd7g2cL3teCEqgKWiBkcrMNlYlI833gF8TmIU784boQIhALMu0ysp%2FAiFvUFLlp8Wc2q033BLdGpJsxzw%2FT5flFdHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdxuFY9yM8QYP8dcwq3AOLjQ1CVoFyON07dDx00FQ91eoWA80KVxSq3mUVUmthJV6AX%2F1lnGL1svU2aDc0HcwsU%2BikZiQXMjSQbSvlEbF58%2FNXC0EPu3DryvoHwaPFeOAHk0dQAcnvTQjoY2V3ScAgT3tVlyr%2BBjMJ4sIxDbvOs1K02gZTnXmLw4iXKBoXtAe2TQi4zbd7YJdK7pqecE1TIhgIE8ECUgDqp9COasb5SwIYuD9WhhX3CUuKZKOcUbDaJmdyi%2BCh%2Bk%2Bskrb8qx%2FFt4jq4DXLJ5ZtZm34cjYAVZ9ysRWnAuKZ3wASakShCJVxFEE5q%2FpaKQm62FJdp4amN7rcnk7OnVifxdRUDntnDlAm6p4Yo8xDLPgAhbz9V%2BxUcQTWIK%2FAmbI16Hc2LIBGzLRYaxUH0QdMovLwMeCHvpJPMVs%2B%2BT%2Bt8qQssrZrI9OYBTEZ5xODqVN09Kpnh65RI4TgAWxUWJ40cVj%2BLG3UBpO7Slzqwb7vO03G3%2FzVk7xU8xMLbf7Hgc4CbmZ6bgsAe89evCkES%2FD%2F%2FdodfWmQq29MaIc55XPgZyfNnoo%2BSH3RWRGix8Z2yDtENxIAyLwLM3SKQRHaLv7GHSSfqy0MQUW6JJ7JYTjXLoggZl4eiaCk1cRwl6I21OzdrjCZgYvKBjqkATO78%2BylBOwShivSvkvYxYYT8q8KtON%2BiH9ud1E5MB5YEPvPhs5bEeSmdx71jSmZhgamxlzrVrVNRbGrmpGfnyhAtcyXG4zC%2B6zwX3sbWk9RfHnzTkvprnNuEbd2p1G7F3qpdvYwwcGHmWyasSpPjAnX3j%2FL%2Fu8gcvlDOQ0VcTvFABGDZmwcd%2FavPkfWfnIQvvdpVUfybQI3rw9WYxiWA5oy%2FIv0&X-Amz-Signature=5bac7487c034345d8a8ee587734541ac99fbf29b8046263fe24e2e6d87f689cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSD4V2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCd7g2cL3teCEqgKWiBkcrMNlYlI833gF8TmIU784boQIhALMu0ysp%2FAiFvUFLlp8Wc2q033BLdGpJsxzw%2FT5flFdHKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdxuFY9yM8QYP8dcwq3AOLjQ1CVoFyON07dDx00FQ91eoWA80KVxSq3mUVUmthJV6AX%2F1lnGL1svU2aDc0HcwsU%2BikZiQXMjSQbSvlEbF58%2FNXC0EPu3DryvoHwaPFeOAHk0dQAcnvTQjoY2V3ScAgT3tVlyr%2BBjMJ4sIxDbvOs1K02gZTnXmLw4iXKBoXtAe2TQi4zbd7YJdK7pqecE1TIhgIE8ECUgDqp9COasb5SwIYuD9WhhX3CUuKZKOcUbDaJmdyi%2BCh%2Bk%2Bskrb8qx%2FFt4jq4DXLJ5ZtZm34cjYAVZ9ysRWnAuKZ3wASakShCJVxFEE5q%2FpaKQm62FJdp4amN7rcnk7OnVifxdRUDntnDlAm6p4Yo8xDLPgAhbz9V%2BxUcQTWIK%2FAmbI16Hc2LIBGzLRYaxUH0QdMovLwMeCHvpJPMVs%2B%2BT%2Bt8qQssrZrI9OYBTEZ5xODqVN09Kpnh65RI4TgAWxUWJ40cVj%2BLG3UBpO7Slzqwb7vO03G3%2FzVk7xU8xMLbf7Hgc4CbmZ6bgsAe89evCkES%2FD%2F%2FdodfWmQq29MaIc55XPgZyfNnoo%2BSH3RWRGix8Z2yDtENxIAyLwLM3SKQRHaLv7GHSSfqy0MQUW6JJ7JYTjXLoggZl4eiaCk1cRwl6I21OzdrjCZgYvKBjqkATO78%2BylBOwShivSvkvYxYYT8q8KtON%2BiH9ud1E5MB5YEPvPhs5bEeSmdx71jSmZhgamxlzrVrVNRbGrmpGfnyhAtcyXG4zC%2B6zwX3sbWk9RfHnzTkvprnNuEbd2p1G7F3qpdvYwwcGHmWyasSpPjAnX3j%2FL%2Fu8gcvlDOQ0VcTvFABGDZmwcd%2FavPkfWfnIQvvdpVUfybQI3rw9WYxiWA5oy%2FIv0&X-Amz-Signature=40d3f5fbb44df0a991190facbf4be7bc4ead0a9a341ba54f1eebc2de88618338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
