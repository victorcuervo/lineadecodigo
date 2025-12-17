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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONGGVJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD0%2BSOwlEYpxkHU5LmuLId%2BuKMZpVsixuJrkfrhlzBaAIgZ1%2BrnE3JjlKnA668ajrr%2FHK%2FQ3KKOFrtOU%2BFmFdHUukqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSSb2mioRorwjXLCyrcA%2BjnlefDTkLDfWmIuDf5AE%2FRc%2BMaf4Q2o%2B%2Bs1paliSN08T4SzfYg9CLy%2FRFOzdpStJ296xIjeQC8wZoKBI5xNqvI2mz5BLQkeOiuTiwaCQPvOhZFxzkMGeCAZSDmudELBT2PQOH95kBt78e84T0UQtXFqKZDZBbBVR2%2BSqSnRmM9NYHcViajx3f5pNJVxkTWWcZ8LEUuNS%2FSHd7es%2FcOu0YGQOZIgmPuCuSsvYEmAajh7TQfchnOSK4%2F5g9mLRohgRETHpvhZJXN62QyQuJKkJ8Unnh%2BBUdgPPi0GpyjounMUZO2GT6Css65efzM12MDqRMQZEO4GUCHQ1c%2F%2BkCqzRRBKQ8uAiwCfSA%2Ff1YUX51Q4xnEY0v6wcEehoPpo8eqHIhz1DHTv%2BbgJ%2BYSUBffvvZybP52LafzcJCHz9WwiFX7fZFkshwm%2B7wqBdmgrFhhtTRRIIw1zedhaGVXdb8o30bwAOBypE05Oi81ejx%2BXrAuCj%2FEFidCMsDAvLwBrwkVlFMwq%2Fvj88cqWrMWfaxKTnsWpS9nBHnfab4zyRRZarbpmoKZsx0SrmS8lomWOl4HbK9hL2y86wkS8Z44VlJxs2rUyaobCLr59P0b%2Fx2RpRQjhwrGM8zzURGuIT48MKWBi8oGOqUB%2F%2FaWUjnHcwULnB4wR%2B1r8UDvVvj37BsFM%2F8AzVGeDzvMFIcN1elTo%2Fyy6UM%2BxbIQLxF5JX%2Bd6zIcBKk9TjeeKiydOOiCaToTD3Wc0fXOQ2W%2FNJIZlG%2BUet10SNDm7Oqsp15drczqStASmFHQhEuw9TKbsCt3HmRWjgpBsyVPb5bP0j2pQHO5qyLsM%2FC3OtHsZnlVJvuWtsJe7yARxRzANYjOmPq8&X-Amz-Signature=a3d41633743ae6a15c549eef7a600eead57250be23a69deaba38f05551cd1943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONGGVJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD0%2BSOwlEYpxkHU5LmuLId%2BuKMZpVsixuJrkfrhlzBaAIgZ1%2BrnE3JjlKnA668ajrr%2FHK%2FQ3KKOFrtOU%2BFmFdHUukqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSSb2mioRorwjXLCyrcA%2BjnlefDTkLDfWmIuDf5AE%2FRc%2BMaf4Q2o%2B%2Bs1paliSN08T4SzfYg9CLy%2FRFOzdpStJ296xIjeQC8wZoKBI5xNqvI2mz5BLQkeOiuTiwaCQPvOhZFxzkMGeCAZSDmudELBT2PQOH95kBt78e84T0UQtXFqKZDZBbBVR2%2BSqSnRmM9NYHcViajx3f5pNJVxkTWWcZ8LEUuNS%2FSHd7es%2FcOu0YGQOZIgmPuCuSsvYEmAajh7TQfchnOSK4%2F5g9mLRohgRETHpvhZJXN62QyQuJKkJ8Unnh%2BBUdgPPi0GpyjounMUZO2GT6Css65efzM12MDqRMQZEO4GUCHQ1c%2F%2BkCqzRRBKQ8uAiwCfSA%2Ff1YUX51Q4xnEY0v6wcEehoPpo8eqHIhz1DHTv%2BbgJ%2BYSUBffvvZybP52LafzcJCHz9WwiFX7fZFkshwm%2B7wqBdmgrFhhtTRRIIw1zedhaGVXdb8o30bwAOBypE05Oi81ejx%2BXrAuCj%2FEFidCMsDAvLwBrwkVlFMwq%2Fvj88cqWrMWfaxKTnsWpS9nBHnfab4zyRRZarbpmoKZsx0SrmS8lomWOl4HbK9hL2y86wkS8Z44VlJxs2rUyaobCLr59P0b%2Fx2RpRQjhwrGM8zzURGuIT48MKWBi8oGOqUB%2F%2FaWUjnHcwULnB4wR%2B1r8UDvVvj37BsFM%2F8AzVGeDzvMFIcN1elTo%2Fyy6UM%2BxbIQLxF5JX%2Bd6zIcBKk9TjeeKiydOOiCaToTD3Wc0fXOQ2W%2FNJIZlG%2BUet10SNDm7Oqsp15drczqStASmFHQhEuw9TKbsCt3HmRWjgpBsyVPb5bP0j2pQHO5qyLsM%2FC3OtHsZnlVJvuWtsJe7yARxRzANYjOmPq8&X-Amz-Signature=40af71a98007aa5db6401d7636107150e5ce145fe84f69da317d3052e5e5f8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
