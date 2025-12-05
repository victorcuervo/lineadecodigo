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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKQ6N7W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWqvnQKcZwxrVuU2%2FI59B9g3nEt2uH5lrHFcG%2FriJPAiEAtD5kSQVxnadgQqB0C8iRk8urnoiqYTO6efa8t%2BPAXtwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGYgXXFlNYBqkvKNiSrcA3Dpp1cif7ziClezeM7yD4EnGVT6i6ZElcvIrM9zcjVdLcghQEKdS%2FIhbT3E9P7cyP%2F3OwRt7UN54UU7x%2BSs5UldSGrYrSBaD4fVr0Gi3WzdtNsdulrs864evpHk6NMmEjkv46pVuVPxwOulkbUcQlIu1F%2B%2B7GpRo5xlSb1NC%2Fd3pJTdx81RXnVYUy0OAf4aJ8bRPIDENhU0FbBgTohB5EMtgq38JhB3Qh5miNQSNDP3fmPUJ%2BenIDP9S6fXrLAN427GGzKJXNlIGAv00h5ja2q6z6KuK2BvXZlO6nLCEJcroV5rc%2FoK1V3n2%2FAnWsII2AGfC0rSufZZPlj%2BbAoLh83LWnyTLzwO%2BU7tgBMA42kD70WcchqVliQ7jqeUNb4uOFi5QE4uuZzsyWtVWt57U2kAdxtdxOG96ToswKCD0DbW4RTostLNf2Xkrc%2BHiX3%2Bervv4%2Fhw%2BrAHWGSAw2hOvCXeeXoE4ND9ioEY%2FlyUAevf03OA7ZbcWPLAAbXvWSwlxhdkE%2B2YbCkzE9LoTiIriObqxx%2BZJXVVpYRMfjSj18JgT6pMTeEbkXX30ohluMYb%2BoIilSsj88aFnj5P337t6PP%2Bx6Vtgb07EMbIgkaBTBQHBaBfk3%2BGdwmJq%2FHbMI%2Fvy8kGOqUBUnbCA%2FiN9gmsKFeqXo%2BKMYg4xnlNN0RXC%2BNFIexvrkf6Uzpc6BKMTdGHE8TtS6%2FUlJpZc9dr3xOZLuBMNOyZcdGrjQ%2F%2B5Dgw00olsBtOTEmsOpRd3bM7BSTMTo%2FehnkquQISTC8pe877QKsKj0FQ4Ctqzir62VpCOgLtUM9YxXUA4mBy%2BW8RR5wMWu5TOC3Xp4%2B8z8Pgh5%2FILY7NyF3M6abFpwsv&X-Amz-Signature=fb995a7a62816555554ea8fff61c0753ef35243573736f62a444ee4b41efd2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKQ6N7W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWqvnQKcZwxrVuU2%2FI59B9g3nEt2uH5lrHFcG%2FriJPAiEAtD5kSQVxnadgQqB0C8iRk8urnoiqYTO6efa8t%2BPAXtwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGYgXXFlNYBqkvKNiSrcA3Dpp1cif7ziClezeM7yD4EnGVT6i6ZElcvIrM9zcjVdLcghQEKdS%2FIhbT3E9P7cyP%2F3OwRt7UN54UU7x%2BSs5UldSGrYrSBaD4fVr0Gi3WzdtNsdulrs864evpHk6NMmEjkv46pVuVPxwOulkbUcQlIu1F%2B%2B7GpRo5xlSb1NC%2Fd3pJTdx81RXnVYUy0OAf4aJ8bRPIDENhU0FbBgTohB5EMtgq38JhB3Qh5miNQSNDP3fmPUJ%2BenIDP9S6fXrLAN427GGzKJXNlIGAv00h5ja2q6z6KuK2BvXZlO6nLCEJcroV5rc%2FoK1V3n2%2FAnWsII2AGfC0rSufZZPlj%2BbAoLh83LWnyTLzwO%2BU7tgBMA42kD70WcchqVliQ7jqeUNb4uOFi5QE4uuZzsyWtVWt57U2kAdxtdxOG96ToswKCD0DbW4RTostLNf2Xkrc%2BHiX3%2Bervv4%2Fhw%2BrAHWGSAw2hOvCXeeXoE4ND9ioEY%2FlyUAevf03OA7ZbcWPLAAbXvWSwlxhdkE%2B2YbCkzE9LoTiIriObqxx%2BZJXVVpYRMfjSj18JgT6pMTeEbkXX30ohluMYb%2BoIilSsj88aFnj5P337t6PP%2Bx6Vtgb07EMbIgkaBTBQHBaBfk3%2BGdwmJq%2FHbMI%2Fvy8kGOqUBUnbCA%2FiN9gmsKFeqXo%2BKMYg4xnlNN0RXC%2BNFIexvrkf6Uzpc6BKMTdGHE8TtS6%2FUlJpZc9dr3xOZLuBMNOyZcdGrjQ%2F%2B5Dgw00olsBtOTEmsOpRd3bM7BSTMTo%2FehnkquQISTC8pe877QKsKj0FQ4Ctqzir62VpCOgLtUM9YxXUA4mBy%2BW8RR5wMWu5TOC3Xp4%2B8z8Pgh5%2FILY7NyF3M6abFpwsv&X-Amz-Signature=d56c3f168e5081a55ffeb4537275d904da3b0dac33e127576f60d3342941377d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
