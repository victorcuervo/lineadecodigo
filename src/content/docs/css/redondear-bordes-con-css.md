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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERQ3C2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lO%2Fh39275G8ynK%2FKwn3%2BXHxzyV90HBpQtPCH2gyEWAIgal208sN%2BFby%2BG8TDHt3OcwO9jqkKmE6HXxS7vzIht1QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDckvvBfR0HYErUNgyrcAyAcBXRRm6zSqZ4SPFCB8gwpqhJLUC4Zl%2FmN6T1s8KS7fPdJtb%2Fz4pVFGQJTCoWDWh5qmcHjtOJrr4k2uWr8X%2Bo2UMolXII17%2Fk%2BM0QWZMvWOWcLPcKmYT9bqF8PDTx98dSm1%2BAOwep8H3cfJHFz2Cm0C7zOTo3%2Bx36smOW%2FSvtCqVPsqB23JFTsx0P%2B7G%2By51OpHGLZH0Ts5wPWdKIyV5ZdQ5T2QBJkvKY7Fpfyus9MMmIuo23R8faAA%2BZkdQ2ErM3cxUmh83R8zR57WqCjIIygM0%2BVfxvG3AmoxFE4zSb6AM%2Bqm978kUK2GEUggat%2B46XFjclvb4dvYeqx0WQ%2FDNH8w0WjFI1Do6mxLB8HBIwLEyfBCa%2BZwqCL0YI1OrDbhLdvjhWcCUp5brP2UDgYLX6MCEYZuKAfFvKQIxwd2lXugtLau3A67vxoubSC3IBBFhdDsfNrF3PzLeBf%2Bqiav0XBMAYomTM2USClU9ysWXlAp76COaJJA%2FNnNvry%2B6a0F0SYmO1OoGUwYGvppw3DE0OWqHNndsjN0XQcgE6gC7YiD5UVcr7EoKK0mISTwGP%2FT7zfu1j26rNk9769jOuT%2FeCId6Fi24CTgKEGBN4sNYp7VZ7UC4mg91VFvF26MJnl3skGOqUBp1Pmh4oZS72SgaYRiDQs0R9GvVQ0iVTrmnEXBYLwn4zu%2BGtm7AwqrtcCPuitwZ7NNL3hmF7YZjaiSXx9ONc4tcpdiBCz%2F3zAD2F74pCWUcl2APNBE92AStz5q3HC%2BEVjSNISQi3X5vSoc8B3%2Fh30cDjIOO9VKOEDIvfG2iCLAh7NGXYZNLvXIJsm2ZZlVD5gv7kYpTPY5k3S5xqklLr9c2KNdwiI&X-Amz-Signature=e578db7266730627edc16286f55421df8088a70c68e6d1fef971f6b9bfbe5b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERQ3C2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lO%2Fh39275G8ynK%2FKwn3%2BXHxzyV90HBpQtPCH2gyEWAIgal208sN%2BFby%2BG8TDHt3OcwO9jqkKmE6HXxS7vzIht1QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDckvvBfR0HYErUNgyrcAyAcBXRRm6zSqZ4SPFCB8gwpqhJLUC4Zl%2FmN6T1s8KS7fPdJtb%2Fz4pVFGQJTCoWDWh5qmcHjtOJrr4k2uWr8X%2Bo2UMolXII17%2Fk%2BM0QWZMvWOWcLPcKmYT9bqF8PDTx98dSm1%2BAOwep8H3cfJHFz2Cm0C7zOTo3%2Bx36smOW%2FSvtCqVPsqB23JFTsx0P%2B7G%2By51OpHGLZH0Ts5wPWdKIyV5ZdQ5T2QBJkvKY7Fpfyus9MMmIuo23R8faAA%2BZkdQ2ErM3cxUmh83R8zR57WqCjIIygM0%2BVfxvG3AmoxFE4zSb6AM%2Bqm978kUK2GEUggat%2B46XFjclvb4dvYeqx0WQ%2FDNH8w0WjFI1Do6mxLB8HBIwLEyfBCa%2BZwqCL0YI1OrDbhLdvjhWcCUp5brP2UDgYLX6MCEYZuKAfFvKQIxwd2lXugtLau3A67vxoubSC3IBBFhdDsfNrF3PzLeBf%2Bqiav0XBMAYomTM2USClU9ysWXlAp76COaJJA%2FNnNvry%2B6a0F0SYmO1OoGUwYGvppw3DE0OWqHNndsjN0XQcgE6gC7YiD5UVcr7EoKK0mISTwGP%2FT7zfu1j26rNk9769jOuT%2FeCId6Fi24CTgKEGBN4sNYp7VZ7UC4mg91VFvF26MJnl3skGOqUBp1Pmh4oZS72SgaYRiDQs0R9GvVQ0iVTrmnEXBYLwn4zu%2BGtm7AwqrtcCPuitwZ7NNL3hmF7YZjaiSXx9ONc4tcpdiBCz%2F3zAD2F74pCWUcl2APNBE92AStz5q3HC%2BEVjSNISQi3X5vSoc8B3%2Fh30cDjIOO9VKOEDIvfG2iCLAh7NGXYZNLvXIJsm2ZZlVD5gv7kYpTPY5k3S5xqklLr9c2KNdwiI&X-Amz-Signature=13a6b56f8dced6d08d712c50e4abeb2e3b522608232c5a8d1c70827b0f491fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
