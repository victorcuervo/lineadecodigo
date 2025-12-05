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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5ARGXI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkGwNKGaPdPmfriFdQ8kKr4fbSqkLTViy3q8gLI8gxaAiEA9hwZtCTHGjJzmmNJeGWMMBpZjpcXV%2BZAuQ87pvca7gAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDC0xuRqGD6zg8neebyrcA7fJnwhz%2BC7QxIkUiqcnvm4lOoacoxxmV%2BX5PtlABsB13vCnoZox9Cg84XKZqtd6HayGa1VEasgffE2t2iUYgJtjB%2BraFYhjraV757hNanzpYR92ui5A7fSU8yxapCmuUrTNTN37MiiM1UTnrwu1%2FVwrPhciPVqtvKA%2FGazcLn5K5r8SK029UQP5gMilV2idYixkJvelNbgDV7jYcjKEpjoNUoBKo53q5V7t8IAif5cNuGrMgHj6jp9Zfy8CQRBlNVS1te6AS64NoQnYRA2klKP6xRM6gjA924LnhMx8QpXNXRxOX58evU%2F%2BhbfMCYZ6Gb%2BpQuz9GhydhTuLBV29nVXUOc0Ls071nynh7t1EKmIq3GgC3YURSJwfAanK%2FkEhDTFYQKQKyLFp2m7pvScvNI3UyZcL4oy4Uu1VvkmEjw9L%2F95AEZVOJPpf8lX3nTrox5PsBbJsLBVQk05hs2%2BZcLpxpcbzDuA3csFgS2Pev%2BJtoB9XJhcJzsOWDX8H7oUFd6Wr5diRW4S0JOFNXjnnATQOqdRfjhaH%2B3XH16olspKEioav%2BSaIdI90EL9SVZbcA0K7tFn4qoikd9snxWQG1c4aBX2tmqKZ0IttEVi0LBJGJO9aR4PNv7gqQLpZMJ7uy8kGOqUBIQE6Z6955IJhrzM7enIYj%2FpIbGdDrI5qs58tSuitW%2B8Cz5Dz9tm9p6fyWbUIpOycXcawVtX17yI7qkqdNIef2nLkK3u85eUe2RPlNl%2BaTSmZkKh97ZBTf7r907XFK1DI7iaI%2FQW%2Fu7dXE%2FI1sUY%2F62i6SqkRLoV6T0MSmj2f7D0ARaS09vOVLlYZLHYuFWnRk4xD68agswsOUHOVfAizlfELU%2BRc&X-Amz-Signature=bc683edc867243d984bc9ce897db49f689695960fb6cac5106fc5775e52a41f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5ARGXI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkGwNKGaPdPmfriFdQ8kKr4fbSqkLTViy3q8gLI8gxaAiEA9hwZtCTHGjJzmmNJeGWMMBpZjpcXV%2BZAuQ87pvca7gAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDC0xuRqGD6zg8neebyrcA7fJnwhz%2BC7QxIkUiqcnvm4lOoacoxxmV%2BX5PtlABsB13vCnoZox9Cg84XKZqtd6HayGa1VEasgffE2t2iUYgJtjB%2BraFYhjraV757hNanzpYR92ui5A7fSU8yxapCmuUrTNTN37MiiM1UTnrwu1%2FVwrPhciPVqtvKA%2FGazcLn5K5r8SK029UQP5gMilV2idYixkJvelNbgDV7jYcjKEpjoNUoBKo53q5V7t8IAif5cNuGrMgHj6jp9Zfy8CQRBlNVS1te6AS64NoQnYRA2klKP6xRM6gjA924LnhMx8QpXNXRxOX58evU%2F%2BhbfMCYZ6Gb%2BpQuz9GhydhTuLBV29nVXUOc0Ls071nynh7t1EKmIq3GgC3YURSJwfAanK%2FkEhDTFYQKQKyLFp2m7pvScvNI3UyZcL4oy4Uu1VvkmEjw9L%2F95AEZVOJPpf8lX3nTrox5PsBbJsLBVQk05hs2%2BZcLpxpcbzDuA3csFgS2Pev%2BJtoB9XJhcJzsOWDX8H7oUFd6Wr5diRW4S0JOFNXjnnATQOqdRfjhaH%2B3XH16olspKEioav%2BSaIdI90EL9SVZbcA0K7tFn4qoikd9snxWQG1c4aBX2tmqKZ0IttEVi0LBJGJO9aR4PNv7gqQLpZMJ7uy8kGOqUBIQE6Z6955IJhrzM7enIYj%2FpIbGdDrI5qs58tSuitW%2B8Cz5Dz9tm9p6fyWbUIpOycXcawVtX17yI7qkqdNIef2nLkK3u85eUe2RPlNl%2BaTSmZkKh97ZBTf7r907XFK1DI7iaI%2FQW%2Fu7dXE%2FI1sUY%2F62i6SqkRLoV6T0MSmj2f7D0ARaS09vOVLlYZLHYuFWnRk4xD68agswsOUHOVfAizlfELU%2BRc&X-Amz-Signature=8854911d2e24b759768aefac2ecfd1878b50a7380426c1969dbd73fd59aa1be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
