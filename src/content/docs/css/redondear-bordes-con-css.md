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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6MPWOR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoxHDcv9MhiqfQdHEMuOZAlBtxZsiBui4SB173pFlsrAiAxZiruGBylnKpSpraB15%2F33%2FrjRoHcR%2FZD9TaCz3fqESqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzB7QqhlooL%2FCv6ufKtwD6NkxTlw8klbqkOixgDWwaz3J0zzzhJW2x5eDsl%2FxYMNYkdXN4MdAERAOhYf%2BPs%2FQlOlBA1w5XhZ%2FRB%2FDYCGwbJp7a5LqKWLiYSuwwXfzTjoIu37fWmbJCCW3BDAPXc4GaiRu%2F4ivAbfDVpEpErDzdC90F38fpqRvj5a2k6CVj04fXJOP655bgr3hPhmjLY7Zj%2Bu9LLd7csrJjHxkuk5mZVvcy8IEvcB6A0fGtJfZpXXtU32PfTDZXikOP9yPZn2B773zVja5V0QmKhULy3rbGy3lRzdh5TjTF7xcD9XsJxvwPfIvGXdOriWCIns9XxpJWhm95PZHGFBkM3ds3HTnjGnFTfQX8nQYGD%2FXEDC7%2BVwK45k37uv5ftR7Ba7D5MJCUbGsq3zjJISxXj5rWL2wHUhblbHwOfUcBCq2QckBS4S4QiQUvlf7Y3uM9fb48WNqOdu9ri4FEBtq%2BzG5M3BI2QZPWCE8xoRPQ2Eki8n%2Fr3%2FEi%2BsWZ8j5SyfnZS0WG6gCPDmo00Q6NuX%2F8jsieHpsbFdrweodstF9dfoqdbUiYlhuko9lkhXWeqOeQS4e4%2FHMYmXaFxpBy8V%2FUA4ldrz6I3VXawLXyzU7dsRhEpYNhlsUmhvoxhU3vmAWLvEwwd3cyQY6pgEAEknZVmgWlkqmAEnMgqLKwSGtDurlcEa%2B8gresEqocpir3OV9FKYJWgFVoSggno4vxNOE5OoV2qLwoNb7n9W%2F7erTEqeudbt9L2FUW2Bo9MQ47V%2Fz4L7WFna3vLvyqYdFS%2FCto51T4hNOH3ib9MRZ3hEu2xY%2FNaK4cgt8aEnMc7GX%2BQx4iNMkuQCNLNDyYsNEfx1HGqIePHRKODNpXQ5LFAHn6pDj&X-Amz-Signature=56df94b03a73ae358c45767d9d9b066185144b8c9a95111fc281c2259fbca386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6MPWOR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoxHDcv9MhiqfQdHEMuOZAlBtxZsiBui4SB173pFlsrAiAxZiruGBylnKpSpraB15%2F33%2FrjRoHcR%2FZD9TaCz3fqESqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzB7QqhlooL%2FCv6ufKtwD6NkxTlw8klbqkOixgDWwaz3J0zzzhJW2x5eDsl%2FxYMNYkdXN4MdAERAOhYf%2BPs%2FQlOlBA1w5XhZ%2FRB%2FDYCGwbJp7a5LqKWLiYSuwwXfzTjoIu37fWmbJCCW3BDAPXc4GaiRu%2F4ivAbfDVpEpErDzdC90F38fpqRvj5a2k6CVj04fXJOP655bgr3hPhmjLY7Zj%2Bu9LLd7csrJjHxkuk5mZVvcy8IEvcB6A0fGtJfZpXXtU32PfTDZXikOP9yPZn2B773zVja5V0QmKhULy3rbGy3lRzdh5TjTF7xcD9XsJxvwPfIvGXdOriWCIns9XxpJWhm95PZHGFBkM3ds3HTnjGnFTfQX8nQYGD%2FXEDC7%2BVwK45k37uv5ftR7Ba7D5MJCUbGsq3zjJISxXj5rWL2wHUhblbHwOfUcBCq2QckBS4S4QiQUvlf7Y3uM9fb48WNqOdu9ri4FEBtq%2BzG5M3BI2QZPWCE8xoRPQ2Eki8n%2Fr3%2FEi%2BsWZ8j5SyfnZS0WG6gCPDmo00Q6NuX%2F8jsieHpsbFdrweodstF9dfoqdbUiYlhuko9lkhXWeqOeQS4e4%2FHMYmXaFxpBy8V%2FUA4ldrz6I3VXawLXyzU7dsRhEpYNhlsUmhvoxhU3vmAWLvEwwd3cyQY6pgEAEknZVmgWlkqmAEnMgqLKwSGtDurlcEa%2B8gresEqocpir3OV9FKYJWgFVoSggno4vxNOE5OoV2qLwoNb7n9W%2F7erTEqeudbt9L2FUW2Bo9MQ47V%2Fz4L7WFna3vLvyqYdFS%2FCto51T4hNOH3ib9MRZ3hEu2xY%2FNaK4cgt8aEnMc7GX%2BQx4iNMkuQCNLNDyYsNEfx1HGqIePHRKODNpXQ5LFAHn6pDj&X-Amz-Signature=dcbe9490f0aa73262efbb6d6c9b190592413307b8aaac3da5be5242b118958ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
