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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RERCGZG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTbJkNYZz738OwAl9WY%2BukQXjbmC7OwefR8EbM7UdnrgIhAIFFcPvVX3I9fm0StX%2FhcX%2FQH1t2kf%2FSjDBt0GkZoFynKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLb%2BP2M94Gr31osEsq3AOYPwu6s2x0xcs7iwnzZ%2F4CD2ZlvmtE8HVjw4AUNa5VmXUdlX4dXI0CNBswuhotHpej2eER4hv6RVZZH1wsriuDj0xWUexjRwNXWcAApbeN1suVzQlUZwHMZNMIRiayJ4krI3fRyJuTRRaxcLOf4QbM2W0yQXkjpVMCFgSU9Hc7BNSz5PGc7UnonKw1%2FIVS9QBYMEUArAl9piRGUafQPHXkecpmlW1LMIWpuIwd7Uv3siq2sv28G%2FOhX%2FsOTrhmLA7NV9FqaQD8o3PD4Yuurpk8YzLsaeM14T7OxSKkftQY6HXHPVQXMHcnr5h0WLNFPiktI53Eh9NvodcAzkf5AeIjRC6W49TrTmItgS3abi4PVN3WdvIkzNGsqNhErvNH9sgYGIm%2FFdJtw2NYcSKUCiHIMMf5lZOYd52Z9uDU%2FT7FeCd%2Bbljl%2BD2cWW9heqtfYKMlxpjsZcdFYYf7MefueF0cj1AQjR%2B3hHltFezXvjRPGz3Yk13LobBrwI58R%2FqHDpWITCHXFqfqU7YiFhHGCjUJe8bG72tdmrJR5fzL6x0iP9WBHcxrLSvpWnx4sWvXHvBVWlPSnl5buL2dVauvStL1d55vS0FzVcgYEZ0OfaP2XyHyo8R2KkDXhsfH0DCGgIvKBjqkARm9DeWDlaAXls8u0N24uJ9mI9OR0hnFtFW1xyNHGqGs%2B8QiH51xCqqHRu0CdgWOXapbxnwYXJKtJ51yl3%2FJ9PVyW72u%2BLTqyxi2QU4jCYn4wSdAmQLmK8VuutGIVtki5QwG2a6MzLyAzoCrgwhMITEabX5ky89F9AJv4gokUhHvMLWPelDgqfYINAttapvgl6J39yd57kGl09b1uqYP8I3Rv6zH&X-Amz-Signature=99e6334a051ac7e4da0d1fb6713ac87e221e0b77e7fc7d320caa340d4932057c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RERCGZG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTbJkNYZz738OwAl9WY%2BukQXjbmC7OwefR8EbM7UdnrgIhAIFFcPvVX3I9fm0StX%2FhcX%2FQH1t2kf%2FSjDBt0GkZoFynKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLb%2BP2M94Gr31osEsq3AOYPwu6s2x0xcs7iwnzZ%2F4CD2ZlvmtE8HVjw4AUNa5VmXUdlX4dXI0CNBswuhotHpej2eER4hv6RVZZH1wsriuDj0xWUexjRwNXWcAApbeN1suVzQlUZwHMZNMIRiayJ4krI3fRyJuTRRaxcLOf4QbM2W0yQXkjpVMCFgSU9Hc7BNSz5PGc7UnonKw1%2FIVS9QBYMEUArAl9piRGUafQPHXkecpmlW1LMIWpuIwd7Uv3siq2sv28G%2FOhX%2FsOTrhmLA7NV9FqaQD8o3PD4Yuurpk8YzLsaeM14T7OxSKkftQY6HXHPVQXMHcnr5h0WLNFPiktI53Eh9NvodcAzkf5AeIjRC6W49TrTmItgS3abi4PVN3WdvIkzNGsqNhErvNH9sgYGIm%2FFdJtw2NYcSKUCiHIMMf5lZOYd52Z9uDU%2FT7FeCd%2Bbljl%2BD2cWW9heqtfYKMlxpjsZcdFYYf7MefueF0cj1AQjR%2B3hHltFezXvjRPGz3Yk13LobBrwI58R%2FqHDpWITCHXFqfqU7YiFhHGCjUJe8bG72tdmrJR5fzL6x0iP9WBHcxrLSvpWnx4sWvXHvBVWlPSnl5buL2dVauvStL1d55vS0FzVcgYEZ0OfaP2XyHyo8R2KkDXhsfH0DCGgIvKBjqkARm9DeWDlaAXls8u0N24uJ9mI9OR0hnFtFW1xyNHGqGs%2B8QiH51xCqqHRu0CdgWOXapbxnwYXJKtJ51yl3%2FJ9PVyW72u%2BLTqyxi2QU4jCYn4wSdAmQLmK8VuutGIVtki5QwG2a6MzLyAzoCrgwhMITEabX5ky89F9AJv4gokUhHvMLWPelDgqfYINAttapvgl6J39yd57kGl09b1uqYP8I3Rv6zH&X-Amz-Signature=a2bf012366a2d569d083caa0d7169dadcc1b9ca697361d5ba0de5e10737c10c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
