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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5BQX2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcd%2FboyWvC0F6TeFt02s3gj2dGHb1W%2FKAYZYmc48nzUAIgf090bR1Cx2Ia9SJ1V1HXJhhmTZtsWenYV9HMLLzQHTgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBd0ew7UnoDN18ZvqCrcAxF75BnhCJgQnYatdxQogm4XopOiHmlZu7uxpAPiCPdNyZzy%2BB8UvGOfdFEVFnXW5WZJ4F249TU%2FSVADXsoO9HqLwttAOFYvtrtv1L63NNhNpVsdBY38SzFsUKYfaLidbvo8dfuBCN6zU4NWGAFy7pfsDYjNVX90UDR7FtCE619k0sl9%2FQnqPWMxBpU7nOJK7%2FBbroX2GHzFbHet7S%2FfYn9UsLgBLQFwMii13ZeHAv7j0SFwB6A5GWDp9X4QBKibQ8Qi1kiLD2h%2BC4cLZ8RaCPKv7%2B%2BwtTV%2FU7J1hT8vOv%2BYldeXclBJZW9605%2BL84KpFsT6FTceZ8wf2K4nxboXU7CHzFte%2FyGfLCoSpHmtDy%2F6sJ4c24GBdWQecvJPVbU8JcbywHbArBXlSm4qsRrp0aev34Pka4ui0U5RhYWqUDQ6wHtUZYJ%2FutQyhevDUubarbDgrQX2QHEbnsLY7XYPq%2FUgHGJ8M787Y9Ve4VKHKObMjOTdZWNEqLpBiFwah3qbM8G4VT%2FRBxkCYtpdzKLl02vzqn4D%2BDVl2M4l3appFynG%2BVW6RWzTGm8A5PyWitzTEBBFNnHSeqrtBu2KYz%2B8ekCMqzmFesOsDhSeMDczOIPTxZ1xUPiXaSpLZzscMKXRicoGOqUB3kkJ%2BGcjpp4qzK29F9%2BXq6ccyamrOfeK3kuupJosfDvkXg6zBldtytvQlD7AnjRamJNDzfj36Fy53jjLPaea5%2BE4wGSjND3qRnmCxSrXBpGXjPs1oDCNDvEtXzSHHFes8onLx1tKMzBQw5ReUvIKktFpuCEWBXEAJR7dftV%2BfB%2FbzOvg3t3OFisEecaBS7HKi8kX5HyY7WBkygVllY3GpWaEqcaU&X-Amz-Signature=e280012d04123db1c33babf347fa05345afd069ab2c38218766fb532903f367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5BQX2W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcd%2FboyWvC0F6TeFt02s3gj2dGHb1W%2FKAYZYmc48nzUAIgf090bR1Cx2Ia9SJ1V1HXJhhmTZtsWenYV9HMLLzQHTgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBd0ew7UnoDN18ZvqCrcAxF75BnhCJgQnYatdxQogm4XopOiHmlZu7uxpAPiCPdNyZzy%2BB8UvGOfdFEVFnXW5WZJ4F249TU%2FSVADXsoO9HqLwttAOFYvtrtv1L63NNhNpVsdBY38SzFsUKYfaLidbvo8dfuBCN6zU4NWGAFy7pfsDYjNVX90UDR7FtCE619k0sl9%2FQnqPWMxBpU7nOJK7%2FBbroX2GHzFbHet7S%2FfYn9UsLgBLQFwMii13ZeHAv7j0SFwB6A5GWDp9X4QBKibQ8Qi1kiLD2h%2BC4cLZ8RaCPKv7%2B%2BwtTV%2FU7J1hT8vOv%2BYldeXclBJZW9605%2BL84KpFsT6FTceZ8wf2K4nxboXU7CHzFte%2FyGfLCoSpHmtDy%2F6sJ4c24GBdWQecvJPVbU8JcbywHbArBXlSm4qsRrp0aev34Pka4ui0U5RhYWqUDQ6wHtUZYJ%2FutQyhevDUubarbDgrQX2QHEbnsLY7XYPq%2FUgHGJ8M787Y9Ve4VKHKObMjOTdZWNEqLpBiFwah3qbM8G4VT%2FRBxkCYtpdzKLl02vzqn4D%2BDVl2M4l3appFynG%2BVW6RWzTGm8A5PyWitzTEBBFNnHSeqrtBu2KYz%2B8ekCMqzmFesOsDhSeMDczOIPTxZ1xUPiXaSpLZzscMKXRicoGOqUB3kkJ%2BGcjpp4qzK29F9%2BXq6ccyamrOfeK3kuupJosfDvkXg6zBldtytvQlD7AnjRamJNDzfj36Fy53jjLPaea5%2BE4wGSjND3qRnmCxSrXBpGXjPs1oDCNDvEtXzSHHFes8onLx1tKMzBQw5ReUvIKktFpuCEWBXEAJR7dftV%2BfB%2FbzOvg3t3OFisEecaBS7HKi8kX5HyY7WBkygVllY3GpWaEqcaU&X-Amz-Signature=baa1e1032e1e9733824706a6ad62ae096b05255b2c8d0748a16b227079b22408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
