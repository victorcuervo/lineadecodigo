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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WVQ75J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PtRw%2BTD8OKeuZLPcxXVWeqX8bqPBaX3BNoXJQ7bVhwIgFmpVO33zWqbpoVfOU5gKFba1%2BNsTnsWpUmL6%2BVFpnqEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLMkNCP0GC%2F%2B%2F0CxMCrcA0k%2BGlFh7YkAafoDsA9JX4BTUbfzw2XWnOgst9ja48oGlQ0CX2zPlTQ4wscavrOt9n2rXrDSvC%2BKGEYZ0L9fJu3Kf%2FJ0%2BM7dZYmev5l9vGS9eJuVGGMoDor42FYmQV68nwOAjI31EBi2kMs%2F5js3eY5eO1BGM0NUu0%2Bnp%2Bh7KCK4uTOCQMMKNOz%2BSHYAlQYolFvPHBMc70N6BDfZgM%2BktKIueTeSovPS9O%2B8Iz6veP%2BHtX0RkS6v8qRo%2BOEBdtKQheNzqXN9QJzUdWhX2KBUBrgQ4%2BMqn8a%2FbQatiBBtNcWeHY0v2DSFpWaMP1DsfcBoGkCxnlNdw9wIe7KSHK4qNLAqo8tGXqZOpjOB6BH6CiTxhBMBO8VRXoa7ZabcNcOakc8kmRf8TJRFUwMPLTmMVhjto4%2FZeQ0oy5V5PxmmSBUjhYUI9iMnwPNeBLB1h1vgabHcZuJcTLnFRph8AD8dl0maEM4gCqdUNK8EMm5CQ7ScDPcdFM0ceReQVwJF%2FO2u7TzCKCN%2F1hn5iS%2BYv7qP%2BuYsFqBDLweaLVnjzZOWBBpuTxyTczgVq14dwz%2FEs0lrBrzonJ6KMbIfdFJNMr2bnFAdEeA9k3k3hW%2FeaSa0DqnCmeodt3GQPDY3oW5EMMSsyckGOqUBtTYH6UwU4KXLp4o82PNk6rtbqJqRS64J2adFWBKUqFRXZ%2FutnyUnSmy0yWA4t7v7TiV56nMfu7pjcH3ga1QLF77SzOch%2FF%2BoqZeEt4v7qAL78ajpp0Abd0sUNvpYMqk4wPO2C41loMU0jj2P%2Fr2RdMrpK8Ds%2FVkNMhO4hXBvkSo5k3TzrRm4ze3Wp%2Bm0VuiT21uBkjUAJCpZ2F52m8cDhnx8ldBH&X-Amz-Signature=2e37de2a93c834a3d318ee87891d7ab79ee03b7ff79b4b42f2ea8963f68422f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WVQ75J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8PtRw%2BTD8OKeuZLPcxXVWeqX8bqPBaX3BNoXJQ7bVhwIgFmpVO33zWqbpoVfOU5gKFba1%2BNsTnsWpUmL6%2BVFpnqEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLMkNCP0GC%2F%2B%2F0CxMCrcA0k%2BGlFh7YkAafoDsA9JX4BTUbfzw2XWnOgst9ja48oGlQ0CX2zPlTQ4wscavrOt9n2rXrDSvC%2BKGEYZ0L9fJu3Kf%2FJ0%2BM7dZYmev5l9vGS9eJuVGGMoDor42FYmQV68nwOAjI31EBi2kMs%2F5js3eY5eO1BGM0NUu0%2Bnp%2Bh7KCK4uTOCQMMKNOz%2BSHYAlQYolFvPHBMc70N6BDfZgM%2BktKIueTeSovPS9O%2B8Iz6veP%2BHtX0RkS6v8qRo%2BOEBdtKQheNzqXN9QJzUdWhX2KBUBrgQ4%2BMqn8a%2FbQatiBBtNcWeHY0v2DSFpWaMP1DsfcBoGkCxnlNdw9wIe7KSHK4qNLAqo8tGXqZOpjOB6BH6CiTxhBMBO8VRXoa7ZabcNcOakc8kmRf8TJRFUwMPLTmMVhjto4%2FZeQ0oy5V5PxmmSBUjhYUI9iMnwPNeBLB1h1vgabHcZuJcTLnFRph8AD8dl0maEM4gCqdUNK8EMm5CQ7ScDPcdFM0ceReQVwJF%2FO2u7TzCKCN%2F1hn5iS%2BYv7qP%2BuYsFqBDLweaLVnjzZOWBBpuTxyTczgVq14dwz%2FEs0lrBrzonJ6KMbIfdFJNMr2bnFAdEeA9k3k3hW%2FeaSa0DqnCmeodt3GQPDY3oW5EMMSsyckGOqUBtTYH6UwU4KXLp4o82PNk6rtbqJqRS64J2adFWBKUqFRXZ%2FutnyUnSmy0yWA4t7v7TiV56nMfu7pjcH3ga1QLF77SzOch%2FF%2BoqZeEt4v7qAL78ajpp0Abd0sUNvpYMqk4wPO2C41loMU0jj2P%2Fr2RdMrpK8Ds%2FVkNMhO4hXBvkSo5k3TzrRm4ze3Wp%2Bm0VuiT21uBkjUAJCpZ2F52m8cDhnx8ldBH&X-Amz-Signature=d257f1db3a4613842fe2f558d4441cd0c7e5ad4f49ac0944dc50464c219648a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
