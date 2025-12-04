---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVN77OR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAUqS4xWolbbecPz8cyoTpkadqaJe9FvmRwSYSRybWGhAiEA%2FT%2Fa%2FvOo84DakglK8kPMFl8EAKD4B6XreDJda0L7QrMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOOhq4pv0lgMQ630UCrcA5PPD4eGhIwfAxgcesGtrLmLZmDR7jI92grjgIesDjpgEotKHlnyZy7BWjRnIJUQ%2Fxjwl9lNHEw%2B1X26m0c59Z5eHAqPfPdyResFjqBFPZstrYQ%2FEssfVgEJhlinBtQX%2B1%2FtNMYJzjKgw5eD8W89343gMy4U3GNBCsps%2F1QKmPjACDLu20DHeMr7oS9rmtrhRvxUNd6rlbI%2FKCIQ%2B6WJ67jsmjV5frQCRRKcMCjQwddCbZ77HSWlghzpcPG8kTBXTPaARXfOHTA16qdZ22bpbLjqu00KxUaGiiV6w3aHzNgcjpPQjh%2BVszCmLEz8EhI8X0cM2LIFnXX7JvouGd%2BAF6e6LlKVt51xd8JtqLuevQziySAnrk%2BtnbP9vyjzxV3XSzSCbANjFM0kH0JwmUiBqxKH3T%2BztCRD7M22NuaghxANRLrgMSXFIWsBHGFLgVTdfHy9tEfiTGjFk8Kln3M%2Fzb%2F2GVKasEajbXDd6atEgJ432w7qqbmwdfphNHo1%2Ba99bvID7Gc%2FnQDgrC4EcCK2ZPt2PO84qFJwE2yNzP2ZPfydD%2BA5KZqSTUN%2FYsH4hYcr%2BMY9VxgnBTxU5tgN8HOcp%2B50tVaSFYBGGbjgJ1dzSkxawORTZH8Emhw22z4KMK20w8kGOqUBe%2BWOn2P%2B7VOWnB5mSbqk007GdfOOeZS0x62vwo7tCF6TSNwXcu76Vc4Z%2F1tAnKPjhlAnoV88HcgwxdK2od20fCZ6QdH70PQG1ZVY4UUlhDIMGoBNVkt0ZEJNaOX5PGhlvQbAeU10TVRDjLw9cvKejCyZIJHFC3RxokVGt2dmpggVDk%2Fuv%2BwysKukf0eTb87t54BsGFa%2Bcvj8cgvrPBydct7lLyJ9&X-Amz-Signature=e70da90f855de8e543e7b1e1205df937f8f0e7d658e8e75a8fc36fa97a76c2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVN77OR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAUqS4xWolbbecPz8cyoTpkadqaJe9FvmRwSYSRybWGhAiEA%2FT%2Fa%2FvOo84DakglK8kPMFl8EAKD4B6XreDJda0L7QrMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOOhq4pv0lgMQ630UCrcA5PPD4eGhIwfAxgcesGtrLmLZmDR7jI92grjgIesDjpgEotKHlnyZy7BWjRnIJUQ%2Fxjwl9lNHEw%2B1X26m0c59Z5eHAqPfPdyResFjqBFPZstrYQ%2FEssfVgEJhlinBtQX%2B1%2FtNMYJzjKgw5eD8W89343gMy4U3GNBCsps%2F1QKmPjACDLu20DHeMr7oS9rmtrhRvxUNd6rlbI%2FKCIQ%2B6WJ67jsmjV5frQCRRKcMCjQwddCbZ77HSWlghzpcPG8kTBXTPaARXfOHTA16qdZ22bpbLjqu00KxUaGiiV6w3aHzNgcjpPQjh%2BVszCmLEz8EhI8X0cM2LIFnXX7JvouGd%2BAF6e6LlKVt51xd8JtqLuevQziySAnrk%2BtnbP9vyjzxV3XSzSCbANjFM0kH0JwmUiBqxKH3T%2BztCRD7M22NuaghxANRLrgMSXFIWsBHGFLgVTdfHy9tEfiTGjFk8Kln3M%2Fzb%2F2GVKasEajbXDd6atEgJ432w7qqbmwdfphNHo1%2Ba99bvID7Gc%2FnQDgrC4EcCK2ZPt2PO84qFJwE2yNzP2ZPfydD%2BA5KZqSTUN%2FYsH4hYcr%2BMY9VxgnBTxU5tgN8HOcp%2B50tVaSFYBGGbjgJ1dzSkxawORTZH8Emhw22z4KMK20w8kGOqUBe%2BWOn2P%2B7VOWnB5mSbqk007GdfOOeZS0x62vwo7tCF6TSNwXcu76Vc4Z%2F1tAnKPjhlAnoV88HcgwxdK2od20fCZ6QdH70PQG1ZVY4UUlhDIMGoBNVkt0ZEJNaOX5PGhlvQbAeU10TVRDjLw9cvKejCyZIJHFC3RxokVGt2dmpggVDk%2Fuv%2BwysKukf0eTb87t54BsGFa%2Bcvj8cgvrPBydct7lLyJ9&X-Amz-Signature=66bfe7cc5e2072fa629c38ac20559b18f46705fdbcc23f518c8eb33128a5d9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
