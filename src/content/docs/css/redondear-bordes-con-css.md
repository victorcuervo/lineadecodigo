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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBBFBF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEG6IcgfWWAo9JSsp1MQXXeo4aoh6lhNnbf4iSDw2SgIgf3mNbngEWuPbhmJS3hDj8m1a5zVvxDLudN6rHeTJASUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUTSzkoaAKr2Vbr7SrcA9MCW2U88DNYmPSjd9iaLiVY6WSvKmvJeSTIO%2BJRgLaouIlVEDfZ%2BkaEWbgTZAo85sON8vgEpQUkq9Me4A1GvF7j6Bzk2iZrYjKHJeVaJzQ9iafUE40593Kt5ScjyGz7jooCyHvhfxBYV35jodMgJdtnECGtRGYetkNid%2Fhj98jBvMe3IRvJukoWy7FRIJtj15lYd70HzMfiRXslMLHqKATviFUN7jMNzwiQBsOz%2BQ6EIwEOhm%2BvZSoQftnipwmgr%2B%2FSoP1uzKg81B2C39FyLXEhmYvz8VLVgS1JCoa6%2FjDzMeq1iTnBtPeBSJkru%2FyuXQ0E6qzkvGhzyBP05MLDvuReUtx5Y45%2BQHKuhTP06zhOnhTi7lCFIP0X2RM1NC%2BprRfsYFIDf97LixQ6X7rgcT3qU4MqBNkwdHZl6GExFsik%2Bi8lakbTDNcTdxQyAuf16NI0Fp95xCb7m0a5Utb%2FihvlLbIguPf6M48Z65E90aY3S60S4obz4WKFevOnyiSLfNBBr%2BEFQ6MEgrxyz%2Bx8c1kajkkZ78LdYAgDxQfDwzaBam7aQA%2F7RQWXid%2FByUnLSG2Y05UnivKrm0Wd8G%2BnTBWC7r4pvuvcJu%2FmaKkgYDQD%2BFKaB2aknFGLBhrCMN6a1ckGOqUBQbv6hPZ8ifTflpjdA2s5dmP8cQnLMgmF8C%2Fja%2BqH6cxkULd8AAIU5jqkxw%2B%2FB4%2B1y7UMyyUoYMkqrkDww3NuaVz%2B1mW2%2BuWEaeZ1YtGKoRUkGpknKVw5lj%2B%2BBBhr1Sk0TFL%2B30%2FyE3w3AiLnfK2%2BZvEICXg2jPtRRIOkshejZTBO%2BEV4DSiTS7GXq75V9OaXVeqU6NcFwdOR%2Bfh%2BJvI1Ya1qFRnk&X-Amz-Signature=d642ffba4bc66a826a14dd2839041c0245cacdb02dd5ece623b290ad6969f810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBBFBF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEG6IcgfWWAo9JSsp1MQXXeo4aoh6lhNnbf4iSDw2SgIgf3mNbngEWuPbhmJS3hDj8m1a5zVvxDLudN6rHeTJASUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUTSzkoaAKr2Vbr7SrcA9MCW2U88DNYmPSjd9iaLiVY6WSvKmvJeSTIO%2BJRgLaouIlVEDfZ%2BkaEWbgTZAo85sON8vgEpQUkq9Me4A1GvF7j6Bzk2iZrYjKHJeVaJzQ9iafUE40593Kt5ScjyGz7jooCyHvhfxBYV35jodMgJdtnECGtRGYetkNid%2Fhj98jBvMe3IRvJukoWy7FRIJtj15lYd70HzMfiRXslMLHqKATviFUN7jMNzwiQBsOz%2BQ6EIwEOhm%2BvZSoQftnipwmgr%2B%2FSoP1uzKg81B2C39FyLXEhmYvz8VLVgS1JCoa6%2FjDzMeq1iTnBtPeBSJkru%2FyuXQ0E6qzkvGhzyBP05MLDvuReUtx5Y45%2BQHKuhTP06zhOnhTi7lCFIP0X2RM1NC%2BprRfsYFIDf97LixQ6X7rgcT3qU4MqBNkwdHZl6GExFsik%2Bi8lakbTDNcTdxQyAuf16NI0Fp95xCb7m0a5Utb%2FihvlLbIguPf6M48Z65E90aY3S60S4obz4WKFevOnyiSLfNBBr%2BEFQ6MEgrxyz%2Bx8c1kajkkZ78LdYAgDxQfDwzaBam7aQA%2F7RQWXid%2FByUnLSG2Y05UnivKrm0Wd8G%2BnTBWC7r4pvuvcJu%2FmaKkgYDQD%2BFKaB2aknFGLBhrCMN6a1ckGOqUBQbv6hPZ8ifTflpjdA2s5dmP8cQnLMgmF8C%2Fja%2BqH6cxkULd8AAIU5jqkxw%2B%2FB4%2B1y7UMyyUoYMkqrkDww3NuaVz%2B1mW2%2BuWEaeZ1YtGKoRUkGpknKVw5lj%2B%2BBBhr1Sk0TFL%2B30%2FyE3w3AiLnfK2%2BZvEICXg2jPtRRIOkshejZTBO%2BEV4DSiTS7GXq75V9OaXVeqU6NcFwdOR%2Bfh%2BJvI1Ya1qFRnk&X-Amz-Signature=872d03fe2762eae219ac9b6f4f11d3e12084a7528a1848651bb3aee37886791b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
