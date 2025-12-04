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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAFNIUE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy7f7LWwxL1UXmeV70jkNvRktvwtIfr0QjeuXRWagsJAiEAksUnV6Ku3uvlItwFQQpOWCcoQrYxtFq9dQ9QnMz602Qq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL5VCHjlxcBD8tDrXyrcA5Mo2wm7xDoXN0i82zGqtTwhNtmsIwOJ1Qp42%2BTyONGDMQzIbpXQtdba4nfAvAHVI1fb6Ey7qgvoJEkI52i5ff%2Bg%2BWbQZfrkbUaSzTDhpvD5S3k2zVLKeQlqRPqqQpNePOmg9zJTGCmsbMs7iUe9m08bPYksw%2Ftm2wCw5fWYl0h5zWC83njPDTXEUVlcRspsVXVjnpH7F3sGybNjoSkiUv9eztrbAHs%2FTsLK%2FYiRLGnPpfb2xWBgVGckQq%2Fm5rvsu%2Bwc3uLKbGYv4TbhhCBCJkpP%2FqFlGGdemlrsBsUT8CoHbsJkfggkysSjj%2FSrBVHnO39BOfwHXtk6U%2FzU6hodM0aQY4hR5xTHH%2BJS8T%2FVrre%2Bcx9EtA3XsPSI0dyg2IYVysmoSDFwH7Vtxqk6WLZulsWLODJmdhw3vkpT9KnxKuJamsnKUmYqUDtANSGKZpokwpIYQNa2V10UPvR0KzUuTyPXi6vuNR%2FkCFeI%2Fe8%2BkKLAlrw1tpJ%2B1A3yRhX3qku6bp6tZbJP5x1mHJrXpBXbTYsNm%2FGgy%2BTuz88ZNZUL8SP2%2BZLq4AoVi5kQqESTy%2B7m3cXbFWSDkF9k7jP7bnrVLe38a1FBgxOsHX0xXZndvdr7Xr%2BcnBIeASgeKfnmMIzcxskGOqUBDPQQLUr3jRKvZSKOqlSWKmoXya%2FXuwZgZTTekaOzkt6cobIiIJrzcGyZGdXphg67HT0%2BhFF1Fo1QHe5fcWAXleXgini5wSUPCEu%2FQUjKx7NecpvGF6Z%2B4u%2B88ZQQ0383NWrsYLXWIsNOx1wQlVEC5AySF9slgA5Kb%2FdTz2ovsDliAItpj2aDCXm2rNR6V0K1hxUR5v5eoiaY%2B5lsZ9OfGrdHedN1&X-Amz-Signature=88be251b68fb05c261e6d73e457377568569ae8cd28d27bd014a50cd2ac7ad57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAFNIUE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy7f7LWwxL1UXmeV70jkNvRktvwtIfr0QjeuXRWagsJAiEAksUnV6Ku3uvlItwFQQpOWCcoQrYxtFq9dQ9QnMz602Qq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL5VCHjlxcBD8tDrXyrcA5Mo2wm7xDoXN0i82zGqtTwhNtmsIwOJ1Qp42%2BTyONGDMQzIbpXQtdba4nfAvAHVI1fb6Ey7qgvoJEkI52i5ff%2Bg%2BWbQZfrkbUaSzTDhpvD5S3k2zVLKeQlqRPqqQpNePOmg9zJTGCmsbMs7iUe9m08bPYksw%2Ftm2wCw5fWYl0h5zWC83njPDTXEUVlcRspsVXVjnpH7F3sGybNjoSkiUv9eztrbAHs%2FTsLK%2FYiRLGnPpfb2xWBgVGckQq%2Fm5rvsu%2Bwc3uLKbGYv4TbhhCBCJkpP%2FqFlGGdemlrsBsUT8CoHbsJkfggkysSjj%2FSrBVHnO39BOfwHXtk6U%2FzU6hodM0aQY4hR5xTHH%2BJS8T%2FVrre%2Bcx9EtA3XsPSI0dyg2IYVysmoSDFwH7Vtxqk6WLZulsWLODJmdhw3vkpT9KnxKuJamsnKUmYqUDtANSGKZpokwpIYQNa2V10UPvR0KzUuTyPXi6vuNR%2FkCFeI%2Fe8%2BkKLAlrw1tpJ%2B1A3yRhX3qku6bp6tZbJP5x1mHJrXpBXbTYsNm%2FGgy%2BTuz88ZNZUL8SP2%2BZLq4AoVi5kQqESTy%2B7m3cXbFWSDkF9k7jP7bnrVLe38a1FBgxOsHX0xXZndvdr7Xr%2BcnBIeASgeKfnmMIzcxskGOqUBDPQQLUr3jRKvZSKOqlSWKmoXya%2FXuwZgZTTekaOzkt6cobIiIJrzcGyZGdXphg67HT0%2BhFF1Fo1QHe5fcWAXleXgini5wSUPCEu%2FQUjKx7NecpvGF6Z%2B4u%2B88ZQQ0383NWrsYLXWIsNOx1wQlVEC5AySF9slgA5Kb%2FdTz2ovsDliAItpj2aDCXm2rNR6V0K1hxUR5v5eoiaY%2B5lsZ9OfGrdHedN1&X-Amz-Signature=6e504186822640094d475d3b13cd540ba1a60051290ebfdf05302e39602dcbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
