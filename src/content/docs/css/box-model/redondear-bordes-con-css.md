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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CPKZMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlrPMFBakULkpvGhj6zLV%2FtvvfI9pJ825SNzY0puvNAAiBww%2Bq0J3et1fMMO8YQFJiQTA4h3tRy7Y2iR29Li5Ep4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVmE2cHsyDKC19WGXKtwDdDFeql8h4n%2B40hmMkMC%2F1yCjjFxeGRiakmG5lohf04Zmq90MYBa%2BvS70EKDYwVO%2Bf5e34S1rY9X629kG8QdDqEpMnSnh7iy1ZVM1eyTIED60PgtIX%2FLrTQlpNfyIHzIb0MvMtHcNCD8IjBSSc%2FpP%2BDHZeXAEx9kxqoh5h6OR2YeJPjgBJ113vs805t%2FEHlS4kCHkkSV7ojTdyxffb4cHyUcYyckR5QGXMijyEZgcU9LIw2reix0%2B9B%2FqEQiFruGC6Gk5QXitc0le3%2BMA5tyav7tYipoW2Ungufzr88VorwzDiVBkzimKTR99OPsFEEGt3Jup3uj8UGlcG3HMm3UIMkU5%2BFz3dlBKHdjxGuZhqs7NcE0BdnxE84ErdrGWE67E3YnJZkhjTyzY3X4nXlZYGA1MfqflITJ9E4U%2Fk1247G2%2F2%2BNcEyzu2pxK9EB6VUdF6EJEVmfP10IdA5HJ1JbXS0cGwk5wOgBwwBD0zLzGdrTkS6wLQ2KbzOpMZxWOV0WvDFsCWNOZJLSavAtLUo2%2Fz%2Bdmna3803p76VOGQQZvCKSoLXVeXG18lvHEnHmRzeFV1yVnKRauC2kCEisGzDKTCbrO%2FN9Ta1aOV91Sluq3uR1niTb8Ovt%2FaTGST8wwyp6LygY6pgEgFcTR9%2FEeRVS8ql%2F%2FgVFYsm72lJjhTgcuQhOXSOeLI3nzswUXawqDrnEVXdcDtDqQsTv6xbMC%2B4C9PXiWDL15GYjDUGn54PUKtmu9UVkLEdwt%2Bxw%2BsCi4wcJWStu3K0ggQcu9bwoOR%2BFCPrkfX2bMZUMJFZZCPDWPDpzFBewBVDFeKnLKOZ4vOYKbyauzL%2BAzbSlG09c9F%2FGNyBYdDigA0zarfkiO&X-Amz-Signature=ae375c5d817a55f7662d79d7828cbfb6171a6e73305a9d3b681fcf3ecb1bb9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CPKZMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlrPMFBakULkpvGhj6zLV%2FtvvfI9pJ825SNzY0puvNAAiBww%2Bq0J3et1fMMO8YQFJiQTA4h3tRy7Y2iR29Li5Ep4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVmE2cHsyDKC19WGXKtwDdDFeql8h4n%2B40hmMkMC%2F1yCjjFxeGRiakmG5lohf04Zmq90MYBa%2BvS70EKDYwVO%2Bf5e34S1rY9X629kG8QdDqEpMnSnh7iy1ZVM1eyTIED60PgtIX%2FLrTQlpNfyIHzIb0MvMtHcNCD8IjBSSc%2FpP%2BDHZeXAEx9kxqoh5h6OR2YeJPjgBJ113vs805t%2FEHlS4kCHkkSV7ojTdyxffb4cHyUcYyckR5QGXMijyEZgcU9LIw2reix0%2B9B%2FqEQiFruGC6Gk5QXitc0le3%2BMA5tyav7tYipoW2Ungufzr88VorwzDiVBkzimKTR99OPsFEEGt3Jup3uj8UGlcG3HMm3UIMkU5%2BFz3dlBKHdjxGuZhqs7NcE0BdnxE84ErdrGWE67E3YnJZkhjTyzY3X4nXlZYGA1MfqflITJ9E4U%2Fk1247G2%2F2%2BNcEyzu2pxK9EB6VUdF6EJEVmfP10IdA5HJ1JbXS0cGwk5wOgBwwBD0zLzGdrTkS6wLQ2KbzOpMZxWOV0WvDFsCWNOZJLSavAtLUo2%2Fz%2Bdmna3803p76VOGQQZvCKSoLXVeXG18lvHEnHmRzeFV1yVnKRauC2kCEisGzDKTCbrO%2FN9Ta1aOV91Sluq3uR1niTb8Ovt%2FaTGST8wwyp6LygY6pgEgFcTR9%2FEeRVS8ql%2F%2FgVFYsm72lJjhTgcuQhOXSOeLI3nzswUXawqDrnEVXdcDtDqQsTv6xbMC%2B4C9PXiWDL15GYjDUGn54PUKtmu9UVkLEdwt%2Bxw%2BsCi4wcJWStu3K0ggQcu9bwoOR%2BFCPrkfX2bMZUMJFZZCPDWPDpzFBewBVDFeKnLKOZ4vOYKbyauzL%2BAzbSlG09c9F%2FGNyBYdDigA0zarfkiO&X-Amz-Signature=7c82ae7a30d24890029da88770d720ad4594d6c5faba53f6172bb235c435c852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
