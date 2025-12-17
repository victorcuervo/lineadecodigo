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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKJ3CSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCigZTdqPUCztauKf8kIaX1rAIoBBwRkyfGR%2FpzLRsJPgIhAJBjmeeapPabZUpBOQ3aJHhgREOlb7ilrKeV%2B3h3Hob7Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzH7TDP3sSmcwY%2BOOQq3ANU5jpE2pgqM7OBPpQiyDyMIdMmI5MfxYw2cvvX7HQhdcYYeDvwQisf5BUk%2FHybfWXRhWAFUUTQeZ2QAx8pN4ZZzUeoypYuAyXgI5POrKbO4Q4ATWVY17btS9OKsJpyYwV0u%2BgWyaTg2D3GYCpeoAb9LIMPN7aZaD9WchF0%2BqMnVMoCgyo3PQ%2FaNVo5IWZ5U2tqmDl5oIeADN5XgAWW5lVkwG3E4i1wdW%2B5cMGXQKbwGAiQQRJo8WAcUSiHlf%2B68YUnhmRDDP6TpJmTpv5dw3z52Pish6rTiCeUaxhhnI94M9e6TGizVIFs4HHaLokpG23DICrun5dGMXjyzvBqFX%2FaWDVRgEI2wShlc3MEKe2KTd%2F4pJJMlSkQiAOJS0akdVsi6RvPYXSUzm79x6rr95yGtEYVanptlWGQpovxyhKlo4ZpPfWiyahQTMFgrWTE9PbH9Jmb232Y11HTpTH78zBPO9KRJTPCns3yncljcZhJSWrJW%2FMNeKu1NZgK7mTLjuUygKOPmAhUnRoFUhysDn%2F5PyUzY1eQof7MP%2BfOaNI8Fy%2BjgHp6sO8lJ4maV1S7sZLgSEDH9Z4%2BJTaYxJWAgF5%2B2DvFC2wjjW6sxnWtFg8p%2B%2BOJ%2FGZh8HkVcvIroTDh0onKBjqkAYqbkZUOQPGs2TbICCXBi0WRBn7vbO%2Bh9kBaaIRIahbM23jqGXrU%2F%2FxUyhsyXHRgG%2B5RvV3pzo7FRDQMrV%2B0P6cOcYk2CQ15EQV7%2FF%2BtfjJ9%2FOpJUY34x5txEeVMEHdVE5bO3RSQBzHprJuJwsPrR72H396Teo9zJFWQh3NsV4IpWDw%2BTyh01H4U%2FMnhq7x2M9mKmcZyKJCw9cvDxND0G%2BW7bdJC&X-Amz-Signature=c5379026fb64da7d3cb285cb3a2e976df72d69e89b9e97d139d5bae6c89582be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKJ3CSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCigZTdqPUCztauKf8kIaX1rAIoBBwRkyfGR%2FpzLRsJPgIhAJBjmeeapPabZUpBOQ3aJHhgREOlb7ilrKeV%2B3h3Hob7Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzH7TDP3sSmcwY%2BOOQq3ANU5jpE2pgqM7OBPpQiyDyMIdMmI5MfxYw2cvvX7HQhdcYYeDvwQisf5BUk%2FHybfWXRhWAFUUTQeZ2QAx8pN4ZZzUeoypYuAyXgI5POrKbO4Q4ATWVY17btS9OKsJpyYwV0u%2BgWyaTg2D3GYCpeoAb9LIMPN7aZaD9WchF0%2BqMnVMoCgyo3PQ%2FaNVo5IWZ5U2tqmDl5oIeADN5XgAWW5lVkwG3E4i1wdW%2B5cMGXQKbwGAiQQRJo8WAcUSiHlf%2B68YUnhmRDDP6TpJmTpv5dw3z52Pish6rTiCeUaxhhnI94M9e6TGizVIFs4HHaLokpG23DICrun5dGMXjyzvBqFX%2FaWDVRgEI2wShlc3MEKe2KTd%2F4pJJMlSkQiAOJS0akdVsi6RvPYXSUzm79x6rr95yGtEYVanptlWGQpovxyhKlo4ZpPfWiyahQTMFgrWTE9PbH9Jmb232Y11HTpTH78zBPO9KRJTPCns3yncljcZhJSWrJW%2FMNeKu1NZgK7mTLjuUygKOPmAhUnRoFUhysDn%2F5PyUzY1eQof7MP%2BfOaNI8Fy%2BjgHp6sO8lJ4maV1S7sZLgSEDH9Z4%2BJTaYxJWAgF5%2B2DvFC2wjjW6sxnWtFg8p%2B%2BOJ%2FGZh8HkVcvIroTDh0onKBjqkAYqbkZUOQPGs2TbICCXBi0WRBn7vbO%2Bh9kBaaIRIahbM23jqGXrU%2F%2FxUyhsyXHRgG%2B5RvV3pzo7FRDQMrV%2B0P6cOcYk2CQ15EQV7%2FF%2BtfjJ9%2FOpJUY34x5txEeVMEHdVE5bO3RSQBzHprJuJwsPrR72H396Teo9zJFWQh3NsV4IpWDw%2BTyh01H4U%2FMnhq7x2M9mKmcZyKJCw9cvDxND0G%2BW7bdJC&X-Amz-Signature=ad09196a807a8582f04c5414652a6bf240e9a494e19d6efb8e535642ca3dae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
