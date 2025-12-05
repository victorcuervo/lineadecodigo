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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNSWDAG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3UbfgDfNWFbTjWVM%2BNjqQ1DjnP3aK2L4immmolRKCNAiEAl%2FsCKiPLhAI0YBycUVHYXDven2kTHw%2BWuHWcXOoWr1Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC4lcAYvJNV8eSgTDCrcA7ClKQ1k%2FEEY1deOLEFWn4wC1kjvGTgCxdO6noitFUORTDuuSRK1p4lzcsgZDlJkppyqhgSFxuhq%2FH5l7rieHBoxAPRwWAg5ZKNCT5Uoo0XUYZfmNJ2n1w7z4tAb1E7wJ6iE%2FPSpg77PXoulseV5gldffWk%2Bkmow%2BEgA9IR9gfZ3VcZzpiFrukL%2Fojy9CN0vGDNMtvubAHM7jXeI8u%2BXEetSXKIXpZ7JJwa6wPZst%2BIYKQvpTLpdCQxdR9fu656hWoAQuq7pD7LuD9acy1wl1wHOt0JkUTCbD7c1%2BsK7GtTdjzbs3Hgj4q7hz%2FsbBKghSow0vjBEAfUkh19ocLNERBu%2FPGiFmIhGgTOMa7N0vXvK36CCCogZgSi0CB3J1eXBa6L3HgzB4hs5zUfZFA2GQhOB%2F71%2Fngf3%2FgxHd7bvU4e4%2BWRyTvGg9rM5xnuPTs%2Bhp%2B7BL9gXOqtq2e%2F2Hzqog7AkGfMXuJGyVEzl30uuXfqruZeWq7%2F0bUVoVT0NyX5xN0XURpguPavLMjdIQTJgYmKXFxn%2FCVDaGGfTCOcELWDTb6fzuTBU7yh6U9t1luzQn75%2BQ%2FiTRnw2w3Szu5lj4dHOy2m179W04EinW7agciLflBahzVgeBYLDl%2FzuML6xyckGOqUBWKNnC1Oh0Fatp%2F4WoYAXMbjYM70%2F0WvibxXB%2FdNZawOH2NxwEWAcCOW1uc2pUn02usUrpSO7cn40ML2YibbIEJXJmP2T6bSsyB5iM6iWchOxEDqrpIxMUCXXcziXNyo3b44lIVR%2FoPgBSSJw4uqukt%2FR%2FaFt0e1n0mtGJo2fj9BqNRKuHL21OWS8zK8PG9wmrynjh7O8Aev%2F2hW26VfDLtIHlSet&X-Amz-Signature=8662d6b00b52afadde0efab8cf837b4fd9da36c1bac9c0c8070f78f5ed5bfa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNSWDAG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3UbfgDfNWFbTjWVM%2BNjqQ1DjnP3aK2L4immmolRKCNAiEAl%2FsCKiPLhAI0YBycUVHYXDven2kTHw%2BWuHWcXOoWr1Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC4lcAYvJNV8eSgTDCrcA7ClKQ1k%2FEEY1deOLEFWn4wC1kjvGTgCxdO6noitFUORTDuuSRK1p4lzcsgZDlJkppyqhgSFxuhq%2FH5l7rieHBoxAPRwWAg5ZKNCT5Uoo0XUYZfmNJ2n1w7z4tAb1E7wJ6iE%2FPSpg77PXoulseV5gldffWk%2Bkmow%2BEgA9IR9gfZ3VcZzpiFrukL%2Fojy9CN0vGDNMtvubAHM7jXeI8u%2BXEetSXKIXpZ7JJwa6wPZst%2BIYKQvpTLpdCQxdR9fu656hWoAQuq7pD7LuD9acy1wl1wHOt0JkUTCbD7c1%2BsK7GtTdjzbs3Hgj4q7hz%2FsbBKghSow0vjBEAfUkh19ocLNERBu%2FPGiFmIhGgTOMa7N0vXvK36CCCogZgSi0CB3J1eXBa6L3HgzB4hs5zUfZFA2GQhOB%2F71%2Fngf3%2FgxHd7bvU4e4%2BWRyTvGg9rM5xnuPTs%2Bhp%2B7BL9gXOqtq2e%2F2Hzqog7AkGfMXuJGyVEzl30uuXfqruZeWq7%2F0bUVoVT0NyX5xN0XURpguPavLMjdIQTJgYmKXFxn%2FCVDaGGfTCOcELWDTb6fzuTBU7yh6U9t1luzQn75%2BQ%2FiTRnw2w3Szu5lj4dHOy2m179W04EinW7agciLflBahzVgeBYLDl%2FzuML6xyckGOqUBWKNnC1Oh0Fatp%2F4WoYAXMbjYM70%2F0WvibxXB%2FdNZawOH2NxwEWAcCOW1uc2pUn02usUrpSO7cn40ML2YibbIEJXJmP2T6bSsyB5iM6iWchOxEDqrpIxMUCXXcziXNyo3b44lIVR%2FoPgBSSJw4uqukt%2FR%2FaFt0e1n0mtGJo2fj9BqNRKuHL21OWS8zK8PG9wmrynjh7O8Aev%2F2hW26VfDLtIHlSet&X-Amz-Signature=ef83b2bc52225d394ba36f80c5f8c89c75318efe363bcb3b241999e7f5fdce14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
