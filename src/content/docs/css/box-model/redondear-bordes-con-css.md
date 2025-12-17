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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRTZPLI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR%2BHIALfgu0sicPDNG%2B2bNcCBiDrUklai17ZSYlvSS4AiBLAGiBd4isW7UNTMLvan%2BysScVnOFbc%2BxwnnsUiF2cNir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMxT33ycX3Xn202iOrKtwDxdaYiNY8Gk3q%2F4L9qC3DeE7%2FkLXRm4Kx6JWFFSgBk1h1REeFqWQASIeYqHlfE8p4LjcU4qqJOQ4vgor47vi5lVXlTLqBcqH%2Bc3IUSeWwcfIplG1sewf%2BCdL3iXU0ErxTQrdiLLYevgV8OPhqkobMSGB7ihczJldpw1vhtFhag1pmCbULkLJfd2kJ0FRJNpHevlXv8%2F8XM%2BkJNQmWEGwd3ZNqGLjquPxUDlZ3Nnd7Rt8LbfBSRRWakh%2FQ7%2BAqyjrKr0uXLqkSLMuwihKROgAhvCw4lZ38kVVLY12XVlrq%2B9ybv5xBn28Ob7OToQOYFw%2BjqXqapae6MDhJVUfYo2Wmlx9ZB54FvPVwtnugmlROh52NOQ0xONRl%2BdCOF9atHCq68GzPlgGw0UznCa6XfUdIjo4l6uAjbOIE2JoY8hIb4tY79NnytqBuUZQzBKG9j78yFkIgXsI6%2FVtJrRDzy%2FutXn6InGIH3xcp1re1CTE51Akp01yuh2YDquw%2BqZgyo%2F%2B5GslF%2FyC8JbnAq6BZjM31B3vOl3eGbekBnS8NwAVG%2BFC7F9kFJiocLs1DxMjW6adbTbO1vCsfQKfzWLIn7wLOLkn9NEaqBbuuv6KzpkgQMYHuJaTus8e%2FzkpBxIUwn4OJygY6pgEDVFQH0gVcHVj7k1V02IWMcIqvleK9S23eLi96IVHtu8jq5lWf6AL6HT5Mw5PsPqRiSEruTNUUIKIgNtns%2FgBy0SM7eUmTwwdbI73nuc6cedQ3h9aCSTCHQS0jRlIi86NGRIvVSO4JwVamn8XTwn2ZcSe4eGf6pEAM6W2HhBZJgwxEHpuPmGjxXF7iWF7ezlLnsT6zd3CKZef%2BaqrQS6t5fHdTF6c7&X-Amz-Signature=78f327448073b3adc1709a33ce17d84a27be954c0613503efe65949b719258bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRTZPLI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR%2BHIALfgu0sicPDNG%2B2bNcCBiDrUklai17ZSYlvSS4AiBLAGiBd4isW7UNTMLvan%2BysScVnOFbc%2BxwnnsUiF2cNir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMxT33ycX3Xn202iOrKtwDxdaYiNY8Gk3q%2F4L9qC3DeE7%2FkLXRm4Kx6JWFFSgBk1h1REeFqWQASIeYqHlfE8p4LjcU4qqJOQ4vgor47vi5lVXlTLqBcqH%2Bc3IUSeWwcfIplG1sewf%2BCdL3iXU0ErxTQrdiLLYevgV8OPhqkobMSGB7ihczJldpw1vhtFhag1pmCbULkLJfd2kJ0FRJNpHevlXv8%2F8XM%2BkJNQmWEGwd3ZNqGLjquPxUDlZ3Nnd7Rt8LbfBSRRWakh%2FQ7%2BAqyjrKr0uXLqkSLMuwihKROgAhvCw4lZ38kVVLY12XVlrq%2B9ybv5xBn28Ob7OToQOYFw%2BjqXqapae6MDhJVUfYo2Wmlx9ZB54FvPVwtnugmlROh52NOQ0xONRl%2BdCOF9atHCq68GzPlgGw0UznCa6XfUdIjo4l6uAjbOIE2JoY8hIb4tY79NnytqBuUZQzBKG9j78yFkIgXsI6%2FVtJrRDzy%2FutXn6InGIH3xcp1re1CTE51Akp01yuh2YDquw%2BqZgyo%2F%2B5GslF%2FyC8JbnAq6BZjM31B3vOl3eGbekBnS8NwAVG%2BFC7F9kFJiocLs1DxMjW6adbTbO1vCsfQKfzWLIn7wLOLkn9NEaqBbuuv6KzpkgQMYHuJaTus8e%2FzkpBxIUwn4OJygY6pgEDVFQH0gVcHVj7k1V02IWMcIqvleK9S23eLi96IVHtu8jq5lWf6AL6HT5Mw5PsPqRiSEruTNUUIKIgNtns%2FgBy0SM7eUmTwwdbI73nuc6cedQ3h9aCSTCHQS0jRlIi86NGRIvVSO4JwVamn8XTwn2ZcSe4eGf6pEAM6W2HhBZJgwxEHpuPmGjxXF7iWF7ezlLnsT6zd3CKZef%2BaqrQS6t5fHdTF6c7&X-Amz-Signature=227c2777309256500322364380e084e636d7f541affff39842c6f4a7a27b48a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
