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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGKTWJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbRKInUwdHF9ZU%2Fydy84Bh1l9M0Jnp3CQeoPPOUlCFdAiEAzghtd3dUa3d9PyVkZ6pzpwBaSRMF6XBtLu2tRE6DG%2BAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKph%2BjiKnEph0ItxSyrcA7aLI0HiUnWG7GI%2FMT6oSOcHFfOKwMvJPX8k9PSlLpwmehL7XzAQg0vFxqjhKgPJJbnZqQiB8YDeuDThzg18x9BtSzcqG%2BAMjA16hpcJOXDNNq0ZKJbfAVR8VW6UrXWaRl6IMnXGXjwLgEktBRxvqFvLDFZJcWz7yFZifQuFc4FpE6FRFURDDasxDGrVliEjRyYhSnBAgBgRJ1DxzdJBBFyoFTLbDV5ocJwWv4w%2F%2B5LI5%2FN92BEBWj%2FsMRZ2Ukbuo%2FfkmkObikukinILZJo4dXZzyTrjJ5rFBBb0o1vNF01ACqcoVuepyF%2BXk9%2B7TH2QQUPOEwt7af4UAw5Od%2B2b%2Bplwle3RqSWatTa4GCI8lboJKCruo%2BfOebrOMf28IDp6MsOivOMsz5XJvBhBuDFbfLtp2uCPLkihYdQVDr6f12iopvD21j8ZLNo9of%2Bz%2F6gmCd8BKJR2UpzzVZnScTNZsS6VJlsG0PBLy75W9%2BxvrV01dCQQOGLQIdbcwk49Gco0W5r3yoSi6BDoB2gYs7RfZNSrNzRyJxbbWxD%2FuMEAsMSeHLqslT9gfYCwXgo9lC54GRYH4NrFRDHhipn5pnmBJgbKDS62%2Fd5jOqcIXEuLU3gSCoQXs%2F%2BlvhjQ%2Bm3eMJX7h8oGOqUBpTHaY0giK9c0wbuV8XW5IzWVDb3yo6Okgtp3XS%2FGtxRb%2FkGjYP5481%2BQajdrSHa%2FaSw%2Fkt5qm3o0aWvxh7Imh2gik9HkHcirAjFGXgirTWN5hVg%2BdO3WX04VIr0tesgX4moOvWe9WTSjdg%2BwL5omfeV8fbKj8igeOnIBbRT9IUcfAVtJp%2BELuZvjUE4TDt0eUgXUi%2Ft2w6XfXRYk0v0L4E5xJYMJ&X-Amz-Signature=a21a7b71165a73eaeb3ae131100f161f36ed2eb6ea45454085031be4680c7efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGKTWJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbRKInUwdHF9ZU%2Fydy84Bh1l9M0Jnp3CQeoPPOUlCFdAiEAzghtd3dUa3d9PyVkZ6pzpwBaSRMF6XBtLu2tRE6DG%2BAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKph%2BjiKnEph0ItxSyrcA7aLI0HiUnWG7GI%2FMT6oSOcHFfOKwMvJPX8k9PSlLpwmehL7XzAQg0vFxqjhKgPJJbnZqQiB8YDeuDThzg18x9BtSzcqG%2BAMjA16hpcJOXDNNq0ZKJbfAVR8VW6UrXWaRl6IMnXGXjwLgEktBRxvqFvLDFZJcWz7yFZifQuFc4FpE6FRFURDDasxDGrVliEjRyYhSnBAgBgRJ1DxzdJBBFyoFTLbDV5ocJwWv4w%2F%2B5LI5%2FN92BEBWj%2FsMRZ2Ukbuo%2FfkmkObikukinILZJo4dXZzyTrjJ5rFBBb0o1vNF01ACqcoVuepyF%2BXk9%2B7TH2QQUPOEwt7af4UAw5Od%2B2b%2Bplwle3RqSWatTa4GCI8lboJKCruo%2BfOebrOMf28IDp6MsOivOMsz5XJvBhBuDFbfLtp2uCPLkihYdQVDr6f12iopvD21j8ZLNo9of%2Bz%2F6gmCd8BKJR2UpzzVZnScTNZsS6VJlsG0PBLy75W9%2BxvrV01dCQQOGLQIdbcwk49Gco0W5r3yoSi6BDoB2gYs7RfZNSrNzRyJxbbWxD%2FuMEAsMSeHLqslT9gfYCwXgo9lC54GRYH4NrFRDHhipn5pnmBJgbKDS62%2Fd5jOqcIXEuLU3gSCoQXs%2F%2BlvhjQ%2Bm3eMJX7h8oGOqUBpTHaY0giK9c0wbuV8XW5IzWVDb3yo6Okgtp3XS%2FGtxRb%2FkGjYP5481%2BQajdrSHa%2FaSw%2Fkt5qm3o0aWvxh7Imh2gik9HkHcirAjFGXgirTWN5hVg%2BdO3WX04VIr0tesgX4moOvWe9WTSjdg%2BwL5omfeV8fbKj8igeOnIBbRT9IUcfAVtJp%2BELuZvjUE4TDt0eUgXUi%2Ft2w6XfXRYk0v0L4E5xJYMJ&X-Amz-Signature=93709db4ec9eaee08cb66adc53bba4cb02565191d079cae28c0b6594197e57c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
