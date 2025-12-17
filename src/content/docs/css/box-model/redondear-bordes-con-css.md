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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXSXCS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRs7I12Rf3j6GVOyfuS99IoKlMvkds%2FECeFh38N4GApAiEA8V3iFzgr2b0EJnJkJxUzAn%2BH8uC9m4YOLTXYALqqRswqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIYFI%2BMUFr2uDVWrSrcA6zEsZ7OnRHJAifgurf3zzEzqRvymdhICHm%2BxSZ%2FJ9DV0%2FfE4xFibDr7rnviwsY0ufVKzPkp7Z%2BVT2vXd8mFYYnPE8tduZTxG%2B2by%2FAWyWfLZSsn3z%2BRq%2BUmD7vmAHgcmWqplVycPIL48WgKdd3q00hPyZEdB2hWlzCzPTpBD%2F9%2BTK%2FtUFmsmfk3axzkr8CGYmwr8TVxxgTqQfGN9iJDikXsc16vjj3rkei0OvAMUu1fKTV9AWOdOgYMDQRI%2B7L3vobb%2FIgR5k%2FiMSe0rBYDPUoYuzrAKTl25m8aOWJoDmLYlizRZ6TefOB3JsSZpgADLgXQerQNhDnglIdk%2BiPUszK00ZGo0WXy6%2FZqkyWKTUG9vodNGjLqxkhh4kUZjI1jRrnWrRm89DvDJn6xU8wkP4pfsOOwSBinMiFeoaHHsIC40%2F4MXFqF3MpCxEPeiWqKCqdZ0GdHxEsLx47RBJ5HSZgBrIPBJooxjevguyTzStUjKQYAEJ9EWHKJiXsG%2FmUVawiGpG5NX9AdHbeRpujZX0pBfhpAhs4TDf%2BLoP2OcJ2J9ejbqTzLltzksCtneKi7W7xgOy8hIJPDwHUkRXQuvSiDhSmhU2trBpvy3LPZtmvD3yKHwkVcVZntGwLHMNOLjMoGOqUByNir%2FFmzPgDBdGXxBA5hGwivXHyv9tRC%2Fi6uAuX1rAo2uy%2FijUvOgH3RPgsMStCfIxK%2FSrCUqxnzCV4Sa%2FdXdg%2BekaqUqgYB1wsmqifjpfa2yQTCd3NRiyiAKmXUmu22ofDgOntDlCr6Ouvq7FjutEuuLBfAZTxKkT%2BQDWRaFyCNy8WYZ7qX8gq607VeA3vd3RB338%2BXOOswz668nzkZb%2BJFqR4h&X-Amz-Signature=8a77cd17a56c18d6484861c5daec70f350ff3f16b17de8500878a76b13d2096f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXSXCS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRs7I12Rf3j6GVOyfuS99IoKlMvkds%2FECeFh38N4GApAiEA8V3iFzgr2b0EJnJkJxUzAn%2BH8uC9m4YOLTXYALqqRswqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIYFI%2BMUFr2uDVWrSrcA6zEsZ7OnRHJAifgurf3zzEzqRvymdhICHm%2BxSZ%2FJ9DV0%2FfE4xFibDr7rnviwsY0ufVKzPkp7Z%2BVT2vXd8mFYYnPE8tduZTxG%2B2by%2FAWyWfLZSsn3z%2BRq%2BUmD7vmAHgcmWqplVycPIL48WgKdd3q00hPyZEdB2hWlzCzPTpBD%2F9%2BTK%2FtUFmsmfk3axzkr8CGYmwr8TVxxgTqQfGN9iJDikXsc16vjj3rkei0OvAMUu1fKTV9AWOdOgYMDQRI%2B7L3vobb%2FIgR5k%2FiMSe0rBYDPUoYuzrAKTl25m8aOWJoDmLYlizRZ6TefOB3JsSZpgADLgXQerQNhDnglIdk%2BiPUszK00ZGo0WXy6%2FZqkyWKTUG9vodNGjLqxkhh4kUZjI1jRrnWrRm89DvDJn6xU8wkP4pfsOOwSBinMiFeoaHHsIC40%2F4MXFqF3MpCxEPeiWqKCqdZ0GdHxEsLx47RBJ5HSZgBrIPBJooxjevguyTzStUjKQYAEJ9EWHKJiXsG%2FmUVawiGpG5NX9AdHbeRpujZX0pBfhpAhs4TDf%2BLoP2OcJ2J9ejbqTzLltzksCtneKi7W7xgOy8hIJPDwHUkRXQuvSiDhSmhU2trBpvy3LPZtmvD3yKHwkVcVZntGwLHMNOLjMoGOqUByNir%2FFmzPgDBdGXxBA5hGwivXHyv9tRC%2Fi6uAuX1rAo2uy%2FijUvOgH3RPgsMStCfIxK%2FSrCUqxnzCV4Sa%2FdXdg%2BekaqUqgYB1wsmqifjpfa2yQTCd3NRiyiAKmXUmu22ofDgOntDlCr6Ouvq7FjutEuuLBfAZTxKkT%2BQDWRaFyCNy8WYZ7qX8gq607VeA3vd3RB338%2BXOOswz668nzkZb%2BJFqR4h&X-Amz-Signature=6a1b6aced31a73c30c34e6091a642df99f8f2c64f08c673af469a3af56c740d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
