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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VDSNHY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LJ1r2Rq7dkGcuBM81mDiFULsE2ZvpV7fQbqtWWRXrwIgNIpHRyo1Rrmpkxpah1GBAIyTYs0Y53oNQQaY%2F4BpQGAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBGRr4N833XhTFlr6ircA7aw9c2ZKebxVVM4D%2FzAoYmONcujLRqhQOzhaPNuFzvgXXYgy4IcWIjgvHZR0fm7g1OPOAmINUfFSZB2VyPDHi4L%2FxPOQ%2FDjWQPJ0prh%2F03ohlcNYWlU5iQG1SI6rsNwPFD%2BX%2Br1jGCWtHyK%2B%2BjQ37iy9oL0c%2FxWFILbXolsTd6CRWrVhcFunh3Bfi%2BixRO1rLjReFiYhDvpXVUqTbSPdmIKnxxBqUhcjwoq19DdW2KL1KybaPnfDwQ5EeBNDo32YQxkR%2FT6IjrpiX4CU6zY4qgr54j1kGPycZF0ynszJTJzbGB2wdPo5F1wBpYHJfHY9tFNaGCx9WbJimRa1PjmVa2zj%2BPYXtbETGgDn947rprIGt5EWscqpMZjFBeOsBlA5hbdYO8S7MoPJnfr7yuvrMuGEsT5Z7BsovU%2BEVlyr5gmFgkRbuMrZBaG6p%2B6AIbO%2BrLIVl3O8qPyfeHJZdPZfeWe0NwBzcePQ6hJx2YHAla32epRNxbRUdikKRZhnvGvGxZxH4S1pEJvQwBfBM78dldcPmB3rLlsC%2BwGEr2z1zHIn1cZklwJzR4NSJLt2XLQjnuXmXxACQ1PxVuAL0NJAqrfDE8ZgfCabFPCMYoTyOvIguywTek6BYBuC%2BEzMOXFisoGOqUBbIMdgPMwzFgjmuF1ShYSmwYzhRyYgWGQdiZiQS7EvpLaaFxpERzwRf%2BPClmJ2vGHe%2Fhy8odNgzEgt1cH8BowNm0y1eo3dPbg19DfxEaeyBKiUh8PBReqmO0EKgMchZotQO0nva9ijvvr%2F9ZeMdSTkdh6x5qqzPYFREWfuY4xantCIOIitaHFEUrhIoQqEHEkcxsxxHq5pFFSqKaik1Fo1R9BfBih&X-Amz-Signature=df437f4d4c24325ca9a41fc89f12d7786aa361c43a58120aade45770eea1c5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VDSNHY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LJ1r2Rq7dkGcuBM81mDiFULsE2ZvpV7fQbqtWWRXrwIgNIpHRyo1Rrmpkxpah1GBAIyTYs0Y53oNQQaY%2F4BpQGAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBGRr4N833XhTFlr6ircA7aw9c2ZKebxVVM4D%2FzAoYmONcujLRqhQOzhaPNuFzvgXXYgy4IcWIjgvHZR0fm7g1OPOAmINUfFSZB2VyPDHi4L%2FxPOQ%2FDjWQPJ0prh%2F03ohlcNYWlU5iQG1SI6rsNwPFD%2BX%2Br1jGCWtHyK%2B%2BjQ37iy9oL0c%2FxWFILbXolsTd6CRWrVhcFunh3Bfi%2BixRO1rLjReFiYhDvpXVUqTbSPdmIKnxxBqUhcjwoq19DdW2KL1KybaPnfDwQ5EeBNDo32YQxkR%2FT6IjrpiX4CU6zY4qgr54j1kGPycZF0ynszJTJzbGB2wdPo5F1wBpYHJfHY9tFNaGCx9WbJimRa1PjmVa2zj%2BPYXtbETGgDn947rprIGt5EWscqpMZjFBeOsBlA5hbdYO8S7MoPJnfr7yuvrMuGEsT5Z7BsovU%2BEVlyr5gmFgkRbuMrZBaG6p%2B6AIbO%2BrLIVl3O8qPyfeHJZdPZfeWe0NwBzcePQ6hJx2YHAla32epRNxbRUdikKRZhnvGvGxZxH4S1pEJvQwBfBM78dldcPmB3rLlsC%2BwGEr2z1zHIn1cZklwJzR4NSJLt2XLQjnuXmXxACQ1PxVuAL0NJAqrfDE8ZgfCabFPCMYoTyOvIguywTek6BYBuC%2BEzMOXFisoGOqUBbIMdgPMwzFgjmuF1ShYSmwYzhRyYgWGQdiZiQS7EvpLaaFxpERzwRf%2BPClmJ2vGHe%2Fhy8odNgzEgt1cH8BowNm0y1eo3dPbg19DfxEaeyBKiUh8PBReqmO0EKgMchZotQO0nva9ijvvr%2F9ZeMdSTkdh6x5qqzPYFREWfuY4xantCIOIitaHFEUrhIoQqEHEkcxsxxHq5pFFSqKaik1Fo1R9BfBih&X-Amz-Signature=d2d9e270a80295928f1a03a625229f0ba6886d5fe750e8c9052e99f1104a0098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
