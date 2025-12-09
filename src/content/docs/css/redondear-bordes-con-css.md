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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEA55VVV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDMW2asfzC5MHijDMM7oNHmCELUCIZF18VBx5GLvdmdAiEAn4lZdJ4u9em6ZkGSMd3SN5DrThQk9aKGNAjxwQirBL0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BtPezbyncRhUzbtircA6QewkCl5z6RSz8%2FfTZOyYe%2B%2B3fU%2FqVYqeelVF0fWuuMEGKDwqLH5EURWqLXy9DU5alB1jCQ4sSbH9iWH6a15CsRjXRJ1FLdHQRA83eFL6jpGFT4%2Fv9eERZX0jnDCi%2FrlovbBziNwUqYNXEF%2FUJAkMVFlzQtYa0PlyQxFEhBaRFMZ%2F6%2BAazmpBRxReQy6WJuHeOW8Z7o4H7EAVKbEdAdDtwtGBdtxaxl5ZmhfkVtcBUtYOwV5HgOWt2aiEV3F8nTXyhBjwN%2BkL7outTMrVFEvdb60yv34H0lUqtBuiZbx3TxbQJW3XyoXXconVa3SBf7BUI%2B%2B8pWQYXeLbx5Ga4opCuURzHSsBUenQmkLwXErEje20BBuiZ0RcOmhGjhlh92L%2Fe6hBejtYqpItsF26OwOpIIJzMSLBttG1r178u7zNcdFDVZ8PVSuobaPsPrgKWYtG5HTjZS9h5neCyLa%2BmjiClDOvWXZXs%2FFPFIfkrGDQP59GbwDYfYHxqRI4AOSsVbZwR6su2hhEM2rOWlc6lu5Qkv4Qvc%2FNI5JLQQEFRrWZ1jnMQeymwmWDr46MgP9Pv5cc5P10BH%2FM12mQE6tZ14QFEiwHUXI4lLDwl2epR8D72BLK2AyRxQzHf8VIqTMISu3skGOqUBrIuRlOA78NmRVy%2BG2Nqo%2BxzjTdmwfGnFMFRF3v4rzEvIJGwOR%2Bekqh2AJsRe6UVxmyQ4eLZUJ7c2ZQD0%2BOnxLDe8Fj8FcNuJ0xX8vebhySp9rrWu35YvBIn%2B2CZ1a%2B9D6PNkOevavC8g68MP32QluyaDpC0VhOPdd%2FDdz%2B9cuU6ZKqLw%2BVn5TNDzzimUv20ENd0JluPRmsu8HfJc6zl910Ah%2B9ZS&X-Amz-Signature=333c6789cc58b204d27e5556b964944febf7ad09ce91a638e58d1ee5aa422e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEA55VVV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDMW2asfzC5MHijDMM7oNHmCELUCIZF18VBx5GLvdmdAiEAn4lZdJ4u9em6ZkGSMd3SN5DrThQk9aKGNAjxwQirBL0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BtPezbyncRhUzbtircA6QewkCl5z6RSz8%2FfTZOyYe%2B%2B3fU%2FqVYqeelVF0fWuuMEGKDwqLH5EURWqLXy9DU5alB1jCQ4sSbH9iWH6a15CsRjXRJ1FLdHQRA83eFL6jpGFT4%2Fv9eERZX0jnDCi%2FrlovbBziNwUqYNXEF%2FUJAkMVFlzQtYa0PlyQxFEhBaRFMZ%2F6%2BAazmpBRxReQy6WJuHeOW8Z7o4H7EAVKbEdAdDtwtGBdtxaxl5ZmhfkVtcBUtYOwV5HgOWt2aiEV3F8nTXyhBjwN%2BkL7outTMrVFEvdb60yv34H0lUqtBuiZbx3TxbQJW3XyoXXconVa3SBf7BUI%2B%2B8pWQYXeLbx5Ga4opCuURzHSsBUenQmkLwXErEje20BBuiZ0RcOmhGjhlh92L%2Fe6hBejtYqpItsF26OwOpIIJzMSLBttG1r178u7zNcdFDVZ8PVSuobaPsPrgKWYtG5HTjZS9h5neCyLa%2BmjiClDOvWXZXs%2FFPFIfkrGDQP59GbwDYfYHxqRI4AOSsVbZwR6su2hhEM2rOWlc6lu5Qkv4Qvc%2FNI5JLQQEFRrWZ1jnMQeymwmWDr46MgP9Pv5cc5P10BH%2FM12mQE6tZ14QFEiwHUXI4lLDwl2epR8D72BLK2AyRxQzHf8VIqTMISu3skGOqUBrIuRlOA78NmRVy%2BG2Nqo%2BxzjTdmwfGnFMFRF3v4rzEvIJGwOR%2Bekqh2AJsRe6UVxmyQ4eLZUJ7c2ZQD0%2BOnxLDe8Fj8FcNuJ0xX8vebhySp9rrWu35YvBIn%2B2CZ1a%2B9D6PNkOevavC8g68MP32QluyaDpC0VhOPdd%2FDdz%2B9cuU6ZKqLw%2BVn5TNDzzimUv20ENd0JluPRmsu8HfJc6zl910Ah%2B9ZS&X-Amz-Signature=de7c19827a93aac08061c9ec6bf4cc5d7cfab1e62ff551df456597123cee1a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
