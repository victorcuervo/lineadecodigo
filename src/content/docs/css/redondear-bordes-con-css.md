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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQEEXQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFih%2BzpPk%2Bzkzc1h307Vkg50Ao2mDHe0YCtDLqwLrPMoAiEAtfSqOrgVCNTbUtwULO35al9d00UMfS%2BGOhMTXQypMVMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBj2YFakSaw87Uz4lircA60fMq8mOg6%2BuU%2Fi6IPTjDRDG14lnS5jr6q0V06txnnbFmB8SidFt5GL4WffqroYfDVTIJAm%2FDoyv%2F2q%2BKbegMChtzS%2B2kjbgKuiy9zYovOhX9Rw8g2UbZl8tXxy81CEy5nnEXG3TVOV10pqLfmLRq%2Fi1JHfFPOs7qpudeI2qY8QPPV%2F1NRjvHRliTvAta584uwny8BrX6bKgOaFolcaE%2Bbow%2BbR4lbxhgf6phJA3i%2FM2dq3wT1OR2XbV8VpV1uu5%2BmF%2FfQY7jMFSGzhcyqPrl4wc73yNNZJiXckECPoji9wJwuuRNJjL9dh0N7XJ8N526F4gDLHN26okp%2F2jj2n6C%2BRX6fz%2BOMYoJtU7zsIpxXFwRhXSxbZN2gNdDHL5YuXqSRCuKFBE9ht3emAt4p0qziwqhgHD6%2BB49GqSoX2pF4jFGToA5HXKeGNH4ohEmnhqKXYqYhMBRZVuo3V%2BmADq%2BA8cjCd55zf8QkI2kyqvfGcYU1e26Jv65hlTPLg6IOR1EApUvPZWD%2BqWdBptU8BY9d9o67jmdTEadq%2B8GUKGAPOm9Ftsd3vt4qJR50qa3lgX9OGB%2F2o5k1cjNhUU37aFA8qyNkTLBs8lF46Memytyji%2BoOIFhFNvjaQxt8mMMWm0MkGOqUBuU2dUumxnR8UeYOuMAHpcYhPkdhgYhKPBAL%2BCZe2n9TsvXrkGI4SngyQ998KZ%2FV7uOxda5vYv1ZP4b%2BZxKcFC6DMPnAxV35EeVoK3YrM4sE6gqVPPQ%2B5qwETCNj4T%2BA3ZrHePjR5e8aW4tV%2Bpl3FATJpZsmtV1R2dvvgJsXd75Wc0htYUNBDSaP9%2BJW0yE4r3N5acAL5OSegHJuV65YTiNRy1QuJ&X-Amz-Signature=ca95a23459d7b7d9c3414711a5df9e7162914a64043c2cf3e486651d1d8d53e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVQEEXQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFih%2BzpPk%2Bzkzc1h307Vkg50Ao2mDHe0YCtDLqwLrPMoAiEAtfSqOrgVCNTbUtwULO35al9d00UMfS%2BGOhMTXQypMVMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBj2YFakSaw87Uz4lircA60fMq8mOg6%2BuU%2Fi6IPTjDRDG14lnS5jr6q0V06txnnbFmB8SidFt5GL4WffqroYfDVTIJAm%2FDoyv%2F2q%2BKbegMChtzS%2B2kjbgKuiy9zYovOhX9Rw8g2UbZl8tXxy81CEy5nnEXG3TVOV10pqLfmLRq%2Fi1JHfFPOs7qpudeI2qY8QPPV%2F1NRjvHRliTvAta584uwny8BrX6bKgOaFolcaE%2Bbow%2BbR4lbxhgf6phJA3i%2FM2dq3wT1OR2XbV8VpV1uu5%2BmF%2FfQY7jMFSGzhcyqPrl4wc73yNNZJiXckECPoji9wJwuuRNJjL9dh0N7XJ8N526F4gDLHN26okp%2F2jj2n6C%2BRX6fz%2BOMYoJtU7zsIpxXFwRhXSxbZN2gNdDHL5YuXqSRCuKFBE9ht3emAt4p0qziwqhgHD6%2BB49GqSoX2pF4jFGToA5HXKeGNH4ohEmnhqKXYqYhMBRZVuo3V%2BmADq%2BA8cjCd55zf8QkI2kyqvfGcYU1e26Jv65hlTPLg6IOR1EApUvPZWD%2BqWdBptU8BY9d9o67jmdTEadq%2B8GUKGAPOm9Ftsd3vt4qJR50qa3lgX9OGB%2F2o5k1cjNhUU37aFA8qyNkTLBs8lF46Memytyji%2BoOIFhFNvjaQxt8mMMWm0MkGOqUBuU2dUumxnR8UeYOuMAHpcYhPkdhgYhKPBAL%2BCZe2n9TsvXrkGI4SngyQ998KZ%2FV7uOxda5vYv1ZP4b%2BZxKcFC6DMPnAxV35EeVoK3YrM4sE6gqVPPQ%2B5qwETCNj4T%2BA3ZrHePjR5e8aW4tV%2Bpl3FATJpZsmtV1R2dvvgJsXd75Wc0htYUNBDSaP9%2BJW0yE4r3N5acAL5OSegHJuV65YTiNRy1QuJ&X-Amz-Signature=12aaca7c722d2b1a18349374bcc2ec958152985d793fcf866fbbfe739aadc5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
