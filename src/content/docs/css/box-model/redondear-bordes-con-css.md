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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34YCXRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLTo%2BVj%2BtDWGCviMMdsHxk9IDwXHlfweDn0KGnpM9GjgIgYXdaIGwVmYB4dOOtSKX%2FlWu%2B0IpbC%2BIG8u5h7d%2B7YEoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGDeZSNTfaw04Ho4KCrcA3Oxw%2FX2m%2BfRryZDDN4%2Boat6Ks3GqvuV5tIYCWy%2FiJ4EVBIKe9sTyNr0lMRO1i0rMnlLJ4MPMbgddl4XbYwET%2F3%2BKK%2BVx2TLwZpvVvLYpgMRhDEUkz0LEuXOeAxKcEvDIlHRyyEM%2Bx2VuObSQWY%2BM4l1LPY7swA7ZlLRNR7LFit5tfVYozY0tddDqnyh1fZf5K2FyomlnvPOkc3YXFqVleevIsekjbMSWa9eh0RHYUESh3wQtfNgUbJ%2F3x4O3%2BUb6S6XAPAY1LaL4krYo42bEIGgo7ntWT12wj0GsvaW6dgtMGwmZJq%2Fuh5T7YixZaBrT6LgJ%2FJWnTUUih4M7O1Rg3mq6giZ3f0nnAAqZ4yQa9A962eOmMRq8qAmOR5TdK069Iztv6u%2B%2FQUi48s37vbKBTPQW3%2BPR5lzE7Mp7JsZwDPnExbWNrmuRF5%2FGItzE1qaTykQ206UivUjsetI23T9Mi5%2B9KYoqCY5aPbWcYilaRQ87U%2FBjjfqd21r1QcsS2RZat4JYlcgL986F9tm%2BQBZoWVQmGvIS6%2FGXqWAxOCwyPCvEuJRtQNHxODysCKUpE1n3S8Gq31qHVbC9QwHAILHcVlTNESrcCOqsPc0DwkZ8q1QSK5gd1bw6a1R8H7gMM2ViMoGOqUBlfOuT1KwsaJd0eAT7A5Wq%2BRg6e3Ee44RSZQ%2FgoO7pXx4NSWFa4mZzBxh8eOSqgeCPTkbM1ZG%2F59AtSKHqP79uKRX8Z3OnaPl9OkOqiZlhqPWmo8%2Ba3mW0xFAsHts7eyAtpqb9X%2BBja9V27bnBuPMeXTuphuZRBj%2FUopz054r2ZaHZIGJyPJZ2Q%2FolrUWdOcqFZ%2FUaz%2F%2F8XUV5TWnYGtkCxlVfypu&X-Amz-Signature=62d0208cfd02c38b8bf049a691b3d9f4086c77f7d32a5f572d16edacbed944eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S34YCXRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLTo%2BVj%2BtDWGCviMMdsHxk9IDwXHlfweDn0KGnpM9GjgIgYXdaIGwVmYB4dOOtSKX%2FlWu%2B0IpbC%2BIG8u5h7d%2B7YEoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGDeZSNTfaw04Ho4KCrcA3Oxw%2FX2m%2BfRryZDDN4%2Boat6Ks3GqvuV5tIYCWy%2FiJ4EVBIKe9sTyNr0lMRO1i0rMnlLJ4MPMbgddl4XbYwET%2F3%2BKK%2BVx2TLwZpvVvLYpgMRhDEUkz0LEuXOeAxKcEvDIlHRyyEM%2Bx2VuObSQWY%2BM4l1LPY7swA7ZlLRNR7LFit5tfVYozY0tddDqnyh1fZf5K2FyomlnvPOkc3YXFqVleevIsekjbMSWa9eh0RHYUESh3wQtfNgUbJ%2F3x4O3%2BUb6S6XAPAY1LaL4krYo42bEIGgo7ntWT12wj0GsvaW6dgtMGwmZJq%2Fuh5T7YixZaBrT6LgJ%2FJWnTUUih4M7O1Rg3mq6giZ3f0nnAAqZ4yQa9A962eOmMRq8qAmOR5TdK069Iztv6u%2B%2FQUi48s37vbKBTPQW3%2BPR5lzE7Mp7JsZwDPnExbWNrmuRF5%2FGItzE1qaTykQ206UivUjsetI23T9Mi5%2B9KYoqCY5aPbWcYilaRQ87U%2FBjjfqd21r1QcsS2RZat4JYlcgL986F9tm%2BQBZoWVQmGvIS6%2FGXqWAxOCwyPCvEuJRtQNHxODysCKUpE1n3S8Gq31qHVbC9QwHAILHcVlTNESrcCOqsPc0DwkZ8q1QSK5gd1bw6a1R8H7gMM2ViMoGOqUBlfOuT1KwsaJd0eAT7A5Wq%2BRg6e3Ee44RSZQ%2FgoO7pXx4NSWFa4mZzBxh8eOSqgeCPTkbM1ZG%2F59AtSKHqP79uKRX8Z3OnaPl9OkOqiZlhqPWmo8%2Ba3mW0xFAsHts7eyAtpqb9X%2BBja9V27bnBuPMeXTuphuZRBj%2FUopz054r2ZaHZIGJyPJZ2Q%2FolrUWdOcqFZ%2FUaz%2F%2F8XUV5TWnYGtkCxlVfypu&X-Amz-Signature=4aa87cfa73c10ce29c5e68f20448033f4d60d5d70bc809b72709b3de1f82199b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
