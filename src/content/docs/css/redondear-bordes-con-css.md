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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCN5CLL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdDnXWTyI6uTXQvA341%2F3kAc%2BrGrFsAhjPWiXD9x32yAiAKStIelMl7eck1rjnHrX7AQjzkqZACkTWkSfMVpF17kyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCeNBod6qzfNVPrrbKtwDkrRSHG4WQJlN3In%2BUkmyuPMNbF5%2BN64mtvkfUAhNZbf8SqSYJplBpUKhn%2BBZilSx0%2FqCBqFX9%2B6RJJciIDO37Y3bKsgLzXHPd8J243dCTN4q9LmYKttI02A7%2B0seN5c4UqILhcKWx96P0Nhpx1A0cp%2F8kMLtfeKzXM0tkMpx%2FAEa0%2F9RSqDljovbnG1OmuKVE0OnXQ%2Bmu21%2FlNWlsutPBhcvusCpzCUqECaPg7FEE9mlfIaCeCju%2Fly3v8%2F6jujhXv1HTX8kS2dQTV4M3qu%2F9BFrLo4sLAXys%2Ba3sZVfZy1B5q40D0cunTJYygYazgqUi1KV32eavo75YMsagD%2F7a6v3VFYZVuBXDsq6ogHZE%2FAcyifteqAoEYEz5NVt%2B8OLpHSrFqmonBbJzz7XNXV0vt9weS3pG07REK5kGV67lpcLPWoh0c54%2BYBHazNjHtYjMz3skoLhh9oaisP44bnpd1SFmKw%2FKTiaSd2hGg5JvPpGm5e54KzDGzo919vh4%2FxYqnyMrnVb5hCZQLxJ5FN2pegA9PCDRFx4VF%2BQ3Ya8dghvyG4VyKIrmqIDPY%2FL1Qu5sdEaj7VU3vh5L88xEG0KohHNvyiTTDQcdeT%2FuJ4qK%2BlM6i3UYcBxRPI9DlAwnKjXyQY6pgHfqv2ia91eISydjw8ZwYajNjyRj2TgJj83FB%2FJ%2Bmh9eLtU6AsAdA0uHdnYC%2BLsTjpX3AvDRRtvbGAUoBtkm%2Bc9DENZMwtrj5hgfVqOJfn1hh9pxbrxKH1rIHqwhVZxRo83Yf1d4EQav%2BUeYtBY2BWkK95%2FYNOu%2Fm%2FEjcUIBjYNXXHsKiHjBFE864dPBAaiYpXdwEw0UcjXXqNBrGzJpftlEZmlGO1%2B&X-Amz-Signature=c27bb651700684446165dcfc39ee7258403e01835f8542692f23d3c1a65e74bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCN5CLL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdDnXWTyI6uTXQvA341%2F3kAc%2BrGrFsAhjPWiXD9x32yAiAKStIelMl7eck1rjnHrX7AQjzkqZACkTWkSfMVpF17kyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCeNBod6qzfNVPrrbKtwDkrRSHG4WQJlN3In%2BUkmyuPMNbF5%2BN64mtvkfUAhNZbf8SqSYJplBpUKhn%2BBZilSx0%2FqCBqFX9%2B6RJJciIDO37Y3bKsgLzXHPd8J243dCTN4q9LmYKttI02A7%2B0seN5c4UqILhcKWx96P0Nhpx1A0cp%2F8kMLtfeKzXM0tkMpx%2FAEa0%2F9RSqDljovbnG1OmuKVE0OnXQ%2Bmu21%2FlNWlsutPBhcvusCpzCUqECaPg7FEE9mlfIaCeCju%2Fly3v8%2F6jujhXv1HTX8kS2dQTV4M3qu%2F9BFrLo4sLAXys%2Ba3sZVfZy1B5q40D0cunTJYygYazgqUi1KV32eavo75YMsagD%2F7a6v3VFYZVuBXDsq6ogHZE%2FAcyifteqAoEYEz5NVt%2B8OLpHSrFqmonBbJzz7XNXV0vt9weS3pG07REK5kGV67lpcLPWoh0c54%2BYBHazNjHtYjMz3skoLhh9oaisP44bnpd1SFmKw%2FKTiaSd2hGg5JvPpGm5e54KzDGzo919vh4%2FxYqnyMrnVb5hCZQLxJ5FN2pegA9PCDRFx4VF%2BQ3Ya8dghvyG4VyKIrmqIDPY%2FL1Qu5sdEaj7VU3vh5L88xEG0KohHNvyiTTDQcdeT%2FuJ4qK%2BlM6i3UYcBxRPI9DlAwnKjXyQY6pgHfqv2ia91eISydjw8ZwYajNjyRj2TgJj83FB%2FJ%2Bmh9eLtU6AsAdA0uHdnYC%2BLsTjpX3AvDRRtvbGAUoBtkm%2Bc9DENZMwtrj5hgfVqOJfn1hh9pxbrxKH1rIHqwhVZxRo83Yf1d4EQav%2BUeYtBY2BWkK95%2FYNOu%2Fm%2FEjcUIBjYNXXHsKiHjBFE864dPBAaiYpXdwEw0UcjXXqNBrGzJpftlEZmlGO1%2B&X-Amz-Signature=342ad2e8bb0c60d1be09e3b34c6137c36539a322134e8ff2026ec343b22be269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
