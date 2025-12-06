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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDKC3PB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKKRFlDDqHM0Gxp5%2BVTz244f3U5XCKU9wKZvQQ3%2Fx4pAiBrBqkbFFAsYPyglEMll%2FWeDHNgq2H6NVRZMcp8Bw0dyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmhcqorbdlwfolYg5KtwDvW9TrsVh%2Bn6oU50neS33p7H27cth9QC8EYUe2ejv0ywiP4OMl%2BwAg8nBUHO7vjB4EcAp%2BI%2BJIiYX02l8SkzUiUKrlXGvDl6hh0MtpeCJXDE4JZ2rzLmhKrdvE2P4dd3CqDjo4e4R1duQ4eHaF%2BJ5c3nr9CP9TFMtZZMXG0QwhZkQxTkpm0JieE%2BrvWG28AB7wx93U58qtoQ5wGZrOL4f%2Ff9NZKQcgsMplZz7OD1uLxNMmeRK3t%2BkWqH3QO7Xgm3UqKwki1qe9juN1hfQIkl0WatjXYQLlnSWhZVt8fcs7osG%2BrNgzHAWQFqOwgkyn%2BiQWTvhAO0f0JeSPjDU8XMWAnnWezPPgIXDSZhUjB4JoaXNej5%2FHQvAorocCGNPcbJ%2BuiJeporAjN69EPNrwUtmcd43c4Spg%2FQcXrbufNkLELIc%2BahVzh8EL2w6duxrnBKepG9l2zUn3a8XyzrmwDsCflg%2FeKaAMblihpZrtc9zqGv69FBDMwOTa2CTzwHquQFEt19UUrrubpn%2FrhgTahHSl%2BDBYseBPt074%2FkFn%2BsypUWfhsVtWvm5bv1D3K62Ff3g1sVnTI9fa0EvQKzqexDmMLZqmjxGHnc1OG0%2FKXfWOUzdlIlZaxKL6A4bAVww5evPyQY6pgHb8nEWQfQHoici8%2BsSa1VOf6r6qJzalZvkDAPVLndkI7YN86%2Fu2e0bUz1aDKx%2F7UTwebpq%2F%2F4RTQBiD1ow5JhlOyex%2F%2B2mnPYxeyGg0k6JyUepI1AHj2oitj2FfGgCMMM3UASEenNQX7gKS8FnomoFW3ZdPXChrXyCqiaP8PtFkZXorIAiRnQ%2F1JBv84EbUsFLsm5ZvoDFvVz%2F%2BmbXoHIgB5%2BTJEVK&X-Amz-Signature=fe700d1523579134fa85dd2be07456dfb89bb46335f472e56a4ccfcf881a77c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDKC3PB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKKRFlDDqHM0Gxp5%2BVTz244f3U5XCKU9wKZvQQ3%2Fx4pAiBrBqkbFFAsYPyglEMll%2FWeDHNgq2H6NVRZMcp8Bw0dyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmhcqorbdlwfolYg5KtwDvW9TrsVh%2Bn6oU50neS33p7H27cth9QC8EYUe2ejv0ywiP4OMl%2BwAg8nBUHO7vjB4EcAp%2BI%2BJIiYX02l8SkzUiUKrlXGvDl6hh0MtpeCJXDE4JZ2rzLmhKrdvE2P4dd3CqDjo4e4R1duQ4eHaF%2BJ5c3nr9CP9TFMtZZMXG0QwhZkQxTkpm0JieE%2BrvWG28AB7wx93U58qtoQ5wGZrOL4f%2Ff9NZKQcgsMplZz7OD1uLxNMmeRK3t%2BkWqH3QO7Xgm3UqKwki1qe9juN1hfQIkl0WatjXYQLlnSWhZVt8fcs7osG%2BrNgzHAWQFqOwgkyn%2BiQWTvhAO0f0JeSPjDU8XMWAnnWezPPgIXDSZhUjB4JoaXNej5%2FHQvAorocCGNPcbJ%2BuiJeporAjN69EPNrwUtmcd43c4Spg%2FQcXrbufNkLELIc%2BahVzh8EL2w6duxrnBKepG9l2zUn3a8XyzrmwDsCflg%2FeKaAMblihpZrtc9zqGv69FBDMwOTa2CTzwHquQFEt19UUrrubpn%2FrhgTahHSl%2BDBYseBPt074%2FkFn%2BsypUWfhsVtWvm5bv1D3K62Ff3g1sVnTI9fa0EvQKzqexDmMLZqmjxGHnc1OG0%2FKXfWOUzdlIlZaxKL6A4bAVww5evPyQY6pgHb8nEWQfQHoici8%2BsSa1VOf6r6qJzalZvkDAPVLndkI7YN86%2Fu2e0bUz1aDKx%2F7UTwebpq%2F%2F4RTQBiD1ow5JhlOyex%2F%2B2mnPYxeyGg0k6JyUepI1AHj2oitj2FfGgCMMM3UASEenNQX7gKS8FnomoFW3ZdPXChrXyCqiaP8PtFkZXorIAiRnQ%2F1JBv84EbUsFLsm5ZvoDFvVz%2F%2BmbXoHIgB5%2BTJEVK&X-Amz-Signature=720f00e0d310a6f99c02ae1025cbe588d61c0acbecb79d7d59aa5d74ab918dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
