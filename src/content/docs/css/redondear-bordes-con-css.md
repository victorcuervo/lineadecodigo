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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J2KU5J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmJ8%2FNBHrHNJqYL1%2FaxO4uLjsmZRlWFeS%2FqyPLJxb73AiEA1fErDFej5Horc8d%2FO7%2Fy5A6H2c6VzjP8jao01YTbyCgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCUyPXiCY61z16e9lCrcA9OViIDRi5olRKKTsnQ2T6JkC71gr%2BL6LIdnL5ysFSNydAkLU%2BmenZN0gXzW5uobxDjiiFTmhMqpArKEQn2WP4gewI57UiGpx66GX9bQ0TQ%2BYMJnlkKudvooSEbAxbNfn5Gxhxk0V%2BcAeOCXewBEU4Mvx8AtWmwUkjTE%2BmagikgC3YHBp0I9FgC6CS%2B4%2BMC6f0f8%2BZ1W8%2FWtoFVqpESAddSylnorM58cFKh%2BTABYvZ0FlGnOilSMMK6b5Kuwice0EURHeUqgJG5gHgqj70JVxATRZd%2BXoOr25E2Epgjq1m3xDys53CvX3nJ57ZODLaWGx8xmmpYD5T%2F%2BvE01ZABRZItYRnokumz34EdISgXxY9up%2BFeGFSo%2B1uKpUSe2xpNRemtq09v7PtmAUAObh63qmH5dbl0SN90cvAOcRwhavgN0PRFugfzDNQv1SePn907HDOdBKHX8VMpR6UM1LE63oRhIwe%2B06sKQWdHQK%2BTjJ3YJtjKeaotC9yYoxt7SY7UiPajSyVUYdm5UM5%2BQf3H5c6zv%2BtaO2lqvaZoLZEbxI7YbujGU5%2Fz2gfNecQvP0VDHbmdjoEdnamVmimyliK3dm1KBXPL%2BXzJYOLGhG9V9Yq4ZfdMkqdJiiYFVrXX5MLjny8kGOqUBW18Yh9%2FgBQwbKRshHtQZWDjZh8mCoXzG33JAc9j99djBt8lbR%2BFwuFHTTEEP%2BE2hW5RXuGuc2aTwThXB0HjwOcHoOIcVqjyXPfIJCGTskae4E%2BOvmB33ngBox%2FdhDG8Wphcxb29DJQnLW0A6uOakLu4k1THKefil%2FeUBKR5S2dpSK9ogaeHKoHCsMI3uulDBz972Mtq0d2%2FGJ5tV0fNYlUPaWjNB&X-Amz-Signature=3497c745509202ebd830d040494ab27633dcb31f423aeed81de766d9bc47f134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J2KU5J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmJ8%2FNBHrHNJqYL1%2FaxO4uLjsmZRlWFeS%2FqyPLJxb73AiEA1fErDFej5Horc8d%2FO7%2Fy5A6H2c6VzjP8jao01YTbyCgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCUyPXiCY61z16e9lCrcA9OViIDRi5olRKKTsnQ2T6JkC71gr%2BL6LIdnL5ysFSNydAkLU%2BmenZN0gXzW5uobxDjiiFTmhMqpArKEQn2WP4gewI57UiGpx66GX9bQ0TQ%2BYMJnlkKudvooSEbAxbNfn5Gxhxk0V%2BcAeOCXewBEU4Mvx8AtWmwUkjTE%2BmagikgC3YHBp0I9FgC6CS%2B4%2BMC6f0f8%2BZ1W8%2FWtoFVqpESAddSylnorM58cFKh%2BTABYvZ0FlGnOilSMMK6b5Kuwice0EURHeUqgJG5gHgqj70JVxATRZd%2BXoOr25E2Epgjq1m3xDys53CvX3nJ57ZODLaWGx8xmmpYD5T%2F%2BvE01ZABRZItYRnokumz34EdISgXxY9up%2BFeGFSo%2B1uKpUSe2xpNRemtq09v7PtmAUAObh63qmH5dbl0SN90cvAOcRwhavgN0PRFugfzDNQv1SePn907HDOdBKHX8VMpR6UM1LE63oRhIwe%2B06sKQWdHQK%2BTjJ3YJtjKeaotC9yYoxt7SY7UiPajSyVUYdm5UM5%2BQf3H5c6zv%2BtaO2lqvaZoLZEbxI7YbujGU5%2Fz2gfNecQvP0VDHbmdjoEdnamVmimyliK3dm1KBXPL%2BXzJYOLGhG9V9Yq4ZfdMkqdJiiYFVrXX5MLjny8kGOqUBW18Yh9%2FgBQwbKRshHtQZWDjZh8mCoXzG33JAc9j99djBt8lbR%2BFwuFHTTEEP%2BE2hW5RXuGuc2aTwThXB0HjwOcHoOIcVqjyXPfIJCGTskae4E%2BOvmB33ngBox%2FdhDG8Wphcxb29DJQnLW0A6uOakLu4k1THKefil%2FeUBKR5S2dpSK9ogaeHKoHCsMI3uulDBz972Mtq0d2%2FGJ5tV0fNYlUPaWjNB&X-Amz-Signature=91eca4b7f53db3adebfe9c606cd0ddb9950f0a4ece1c515c14c1c7a2bb8087f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
