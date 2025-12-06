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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4GGSB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8Lur5p8S6pMw8CjQT1rHkdaJ5r1I0ay9rUUP3%2FDtZQIhAOXjtf2HxdS01kaAUUDhzJyPlk0YWoRYy%2BiJy1IJrSyLKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7KIiOjKsCy0%2BfeN0q3APMyzJjixjw2T%2FA7xCwWVuV%2FfnqittWlSV40j6xSyXH%2BveNhm8YIaxWAeELa0hYXDoB%2BKNYRR02jRLlTPRvDLlHDKxDV9Ond2ZmB48apN8Xri0%2BeFwfaqEvtQDLfAu9y8PZosPgt2nkcRFny%2F9OCr3tlqP%2FsLnHxAioKxrB9z4oi9GFJZ0rpNzVx7E%2FuhoWmlc8UczVd4KlCCM%2BCX1UGhEMOi6PgOZvng4YvMl4itq1IVju5S6Atzdhdm4PAn%2BcrosJ8iTLh1WM2Y%2FpGB5VrcmFccOMcf8N0SQ7yxOGF5ePCWToPph4xa%2BNvun1mU1pOGH%2FWexlKwl4P0qmH4ccKgMHgzxmUSkxPyG4t3tt7WvP8fs%2BSJk1gC96aVAYiOaqzhivtuSnVcKQ1rTbZTPk0ss5hBpXyx%2BYSM61JFN4UWda0Mggr%2Bqo0fCZD7QjusDS1xqwXogUZbWnU52apeaeYQe%2BXDJGH39RSz1o8oTM0VnADdn4h%2BzS3G0xB777Pj2Mv0MVZAke8%2FTUSPtjzcQw3GWjDfiaJwO903Q5n3%2Bpxw2ZAvHjS9QR3hFX3XGsWe2ttzOrowf5hkmdkPtCM4LqItP1Y84yUK5uwwFeZdGK5ItrkYOnhY%2BV0AGIRIpqhjDWptDJBjqkAU97d06O9Zq3NSAW5%2FgbPvVGH2b3STaCM0cPbsv0TcO7YgZHY8yPu3tDYNcxU4W%2F69tFwV0vDGx4rscs68FD1ztXpT3K2PzrW0xLKxzb1ZIh1qN1jjAjuXe4N0JVL6gKiDIs0MRPi4BBv4P3MZnxAGjHmkUkNc2mIcaRtrPisPy%2BrltEzwKaVG%2FSjqYuk3XMqJMTKgmZC%2FHqJbTrD%2Bgi6mXznpzY&X-Amz-Signature=fa033f3f00c1276336bd5f23612c7c19fd57702c9dde08df2f1e51935d3ed680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4GGSB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8Lur5p8S6pMw8CjQT1rHkdaJ5r1I0ay9rUUP3%2FDtZQIhAOXjtf2HxdS01kaAUUDhzJyPlk0YWoRYy%2BiJy1IJrSyLKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7KIiOjKsCy0%2BfeN0q3APMyzJjixjw2T%2FA7xCwWVuV%2FfnqittWlSV40j6xSyXH%2BveNhm8YIaxWAeELa0hYXDoB%2BKNYRR02jRLlTPRvDLlHDKxDV9Ond2ZmB48apN8Xri0%2BeFwfaqEvtQDLfAu9y8PZosPgt2nkcRFny%2F9OCr3tlqP%2FsLnHxAioKxrB9z4oi9GFJZ0rpNzVx7E%2FuhoWmlc8UczVd4KlCCM%2BCX1UGhEMOi6PgOZvng4YvMl4itq1IVju5S6Atzdhdm4PAn%2BcrosJ8iTLh1WM2Y%2FpGB5VrcmFccOMcf8N0SQ7yxOGF5ePCWToPph4xa%2BNvun1mU1pOGH%2FWexlKwl4P0qmH4ccKgMHgzxmUSkxPyG4t3tt7WvP8fs%2BSJk1gC96aVAYiOaqzhivtuSnVcKQ1rTbZTPk0ss5hBpXyx%2BYSM61JFN4UWda0Mggr%2Bqo0fCZD7QjusDS1xqwXogUZbWnU52apeaeYQe%2BXDJGH39RSz1o8oTM0VnADdn4h%2BzS3G0xB777Pj2Mv0MVZAke8%2FTUSPtjzcQw3GWjDfiaJwO903Q5n3%2Bpxw2ZAvHjS9QR3hFX3XGsWe2ttzOrowf5hkmdkPtCM4LqItP1Y84yUK5uwwFeZdGK5ItrkYOnhY%2BV0AGIRIpqhjDWptDJBjqkAU97d06O9Zq3NSAW5%2FgbPvVGH2b3STaCM0cPbsv0TcO7YgZHY8yPu3tDYNcxU4W%2F69tFwV0vDGx4rscs68FD1ztXpT3K2PzrW0xLKxzb1ZIh1qN1jjAjuXe4N0JVL6gKiDIs0MRPi4BBv4P3MZnxAGjHmkUkNc2mIcaRtrPisPy%2BrltEzwKaVG%2FSjqYuk3XMqJMTKgmZC%2FHqJbTrD%2Bgi6mXznpzY&X-Amz-Signature=3a8f7a63442ef3438f1fb45742ede22dd44afcfe28d860f3081b8e6457d3ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
