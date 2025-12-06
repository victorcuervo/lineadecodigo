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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNAJTIL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4hZa9SwfkAQUIMgRofhs%2FHC5yYdCgLdZ4Fx92X5j7YAiEAr26tCY5ZHEpfa9wItfd0pxeUoK3toB8tQm4S2d%2BTR20q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJqKiNCc3pNKsM1oyircA6y07PPtGBfpSwnKbIlByrcyBMXpXCf2y26p6ky96x9mLdMacdbR0tdqV5Un%2BQeKQgbVjrOhZmXLrCRAcCK6Ovx2socc7gRThsBYBVy0F3O0WB3riGEYuevfZz9gB1vbf%2BQysLTmnnjRI4ukGzBwwQ6W%2BcbJI3E%2BurzwrfVAp9TrKhPoMcYJnd418RnEhIWw6qWTlUI8R5RhVxVXkaJzfFwGJ%2BknBb2Y%2BrT5fPHQ5vxS3Wy1UeKrJhhssBgEDBf9SweAhqzxxGQRiYm0rLmgtFXmwFH0Rv%2BehZMPCViYG7KPWmfnEFzjuNNhV1n5SvcjVXB%2BPJMoqBOFY4tQ%2BKlthPS%2BDyIOYXoYKYOZFpeTcV8059YNVlGzBqIIV2xwxkkNL11cMyOOUgQlnb5hsXlFXFhYiDZf2VgtxyUvux7PxXWaxiDC3sGHVk1S%2BiRmXbqLWmgUksSsX1yYkaz3G4qWo7TTn1Iiaiiutq7UfL1lSrfX7QZZG16KRhV4H3s3t8hM%2FsyzqJV%2BLnKuH6W8qDCh2CJSKTvWH2FPRt4mHRH7y1GSKXMSDaNYUZH8TvvPy3brjRw7rO2xesQvbRfiK9G3In8daMqqIgGoffKptAxh%2Fl1IEzCqvOpSvviPt6zyMOSm0MkGOqUBAXgOLO1HtE%2Bu%2FpqO1vjqQtXzeiJ8wkP8zDpGWRclPpBbdBZuggJT4p%2BDmrX4MewlTrFasq0CPqpwea%2BiIA2qYScMThF7fcEDcM%2FzZoFe1aJ7BPhf5sTBtHf6TBB9Fw0AunaUTrgvE8es8%2F%2BGaHmjY2IGdJe4CgoQddK9B%2FhF7s8PSr25A%2BQzd2QZZVuXjqOahyNvEseFsi8VJgTJ%2F03JxNb88pAk&X-Amz-Signature=af5c4e87285144a75ba17f72aa7df17c2d27a0b4a02237b511d741876f786077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNAJTIL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4hZa9SwfkAQUIMgRofhs%2FHC5yYdCgLdZ4Fx92X5j7YAiEAr26tCY5ZHEpfa9wItfd0pxeUoK3toB8tQm4S2d%2BTR20q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJqKiNCc3pNKsM1oyircA6y07PPtGBfpSwnKbIlByrcyBMXpXCf2y26p6ky96x9mLdMacdbR0tdqV5Un%2BQeKQgbVjrOhZmXLrCRAcCK6Ovx2socc7gRThsBYBVy0F3O0WB3riGEYuevfZz9gB1vbf%2BQysLTmnnjRI4ukGzBwwQ6W%2BcbJI3E%2BurzwrfVAp9TrKhPoMcYJnd418RnEhIWw6qWTlUI8R5RhVxVXkaJzfFwGJ%2BknBb2Y%2BrT5fPHQ5vxS3Wy1UeKrJhhssBgEDBf9SweAhqzxxGQRiYm0rLmgtFXmwFH0Rv%2BehZMPCViYG7KPWmfnEFzjuNNhV1n5SvcjVXB%2BPJMoqBOFY4tQ%2BKlthPS%2BDyIOYXoYKYOZFpeTcV8059YNVlGzBqIIV2xwxkkNL11cMyOOUgQlnb5hsXlFXFhYiDZf2VgtxyUvux7PxXWaxiDC3sGHVk1S%2BiRmXbqLWmgUksSsX1yYkaz3G4qWo7TTn1Iiaiiutq7UfL1lSrfX7QZZG16KRhV4H3s3t8hM%2FsyzqJV%2BLnKuH6W8qDCh2CJSKTvWH2FPRt4mHRH7y1GSKXMSDaNYUZH8TvvPy3brjRw7rO2xesQvbRfiK9G3In8daMqqIgGoffKptAxh%2Fl1IEzCqvOpSvviPt6zyMOSm0MkGOqUBAXgOLO1HtE%2Bu%2FpqO1vjqQtXzeiJ8wkP8zDpGWRclPpBbdBZuggJT4p%2BDmrX4MewlTrFasq0CPqpwea%2BiIA2qYScMThF7fcEDcM%2FzZoFe1aJ7BPhf5sTBtHf6TBB9Fw0AunaUTrgvE8es8%2F%2BGaHmjY2IGdJe4CgoQddK9B%2FhF7s8PSr25A%2BQzd2QZZVuXjqOahyNvEseFsi8VJgTJ%2F03JxNb88pAk&X-Amz-Signature=c143ce8e4a133c85b0ebaa391e43f364c85c17699f6e8fffca7843fb733a009b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
