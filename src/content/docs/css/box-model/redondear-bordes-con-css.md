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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654G556YS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgBK5c7Cjt16%2F%2F5khCvcVqiDUZ2s2akyVl6buQesSJwIhAP5cDyQNrwYK9VgQU6r4J1xTAotrQkLrxsVP8HU9nQyQKv8DCH0QABoMNjM3NDIzMTgzODA1Igykq61Cmc3lE57uUuUq3APV1XiWiet9cKuOwpvALLErPN1xULEkO1sosHQol6bqfLRGSDRl8r7NvThRqx7Y3In15O86l8ymi%2B21l%2B%2Bv5nufTnf37QyW%2FRnOHvctOPPoPZjE%2F5Vgs0hGBFD1a5bV883BssKanuZ7mHhA3ekJ2PfoCoVDLXa9rX4zWmtub4mID8PekWmotnug7oUv6tuJm4rD7b5dSad1nCCxf18wKdi4zzbo9VmVOXISrPJzZ7G%2Fb9N0R4R4pj06KMBBVhcKdl3Xiju%2BjpMoW4Z1Mkozwl8gBuQ%2FU%2BGAgg%2FiYK50ijO%2FD9w%2BLWuM%2FgI%2BfPK7qcNgeCh9UuDHRHtEm2Qb7edJex6WrH08GOyu%2FDGsLGLNtaybtsIA4DKRS8wZ45DwxjPfO7NQDfiIBPlxAHslZe5qJxGZFE%2BgThI%2BP6n9nmo5zO6cuDswtY%2B5BCPkHnL9hMwXIAOdqqlFrMrWui8IusuMQCltMdd99PdmuRd52r9Wf4qXRVzhAIgSXL1XVB%2Ba7uDMZpIJ93yMjOidqxe1B85d%2BgA8N693RrmspPgDYHTsaFCQBHeesq877Zs8QzQLgpsQiPnZEV%2FrzGr8vHSytnih4jD%2FJxkNtT6iHeb55Dnr8xMCsSEgxjTqJfolzcypojCWqorKBjqkATpC3v8QRqJYitSXNdKQEtd56HckLePt%2BC6Kf3Lebjy8JayEaXfjVP6oVivS%2FnQykcjPcCbA1Xv7k4qkxzh0SU4Zr21xU1hpJCHPXXi%2FQb1zex9rln6EiDVOrVw7Wmqwsl6KO%2FEZ3pGdPnEYNDIUMkt5hy5vmvm4B481vESI1Fx8wukGe0zOKH9Er2MrkLzD8VTH4ZTHCEOa4kyEIWsl45%2F9gl40&X-Amz-Signature=b7a3822b36d3a6a57f99e2b27294258ab0cb7bff1373077596978a2d2b506805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654G556YS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzgBK5c7Cjt16%2F%2F5khCvcVqiDUZ2s2akyVl6buQesSJwIhAP5cDyQNrwYK9VgQU6r4J1xTAotrQkLrxsVP8HU9nQyQKv8DCH0QABoMNjM3NDIzMTgzODA1Igykq61Cmc3lE57uUuUq3APV1XiWiet9cKuOwpvALLErPN1xULEkO1sosHQol6bqfLRGSDRl8r7NvThRqx7Y3In15O86l8ymi%2B21l%2B%2Bv5nufTnf37QyW%2FRnOHvctOPPoPZjE%2F5Vgs0hGBFD1a5bV883BssKanuZ7mHhA3ekJ2PfoCoVDLXa9rX4zWmtub4mID8PekWmotnug7oUv6tuJm4rD7b5dSad1nCCxf18wKdi4zzbo9VmVOXISrPJzZ7G%2Fb9N0R4R4pj06KMBBVhcKdl3Xiju%2BjpMoW4Z1Mkozwl8gBuQ%2FU%2BGAgg%2FiYK50ijO%2FD9w%2BLWuM%2FgI%2BfPK7qcNgeCh9UuDHRHtEm2Qb7edJex6WrH08GOyu%2FDGsLGLNtaybtsIA4DKRS8wZ45DwxjPfO7NQDfiIBPlxAHslZe5qJxGZFE%2BgThI%2BP6n9nmo5zO6cuDswtY%2B5BCPkHnL9hMwXIAOdqqlFrMrWui8IusuMQCltMdd99PdmuRd52r9Wf4qXRVzhAIgSXL1XVB%2Ba7uDMZpIJ93yMjOidqxe1B85d%2BgA8N693RrmspPgDYHTsaFCQBHeesq877Zs8QzQLgpsQiPnZEV%2FrzGr8vHSytnih4jD%2FJxkNtT6iHeb55Dnr8xMCsSEgxjTqJfolzcypojCWqorKBjqkATpC3v8QRqJYitSXNdKQEtd56HckLePt%2BC6Kf3Lebjy8JayEaXfjVP6oVivS%2FnQykcjPcCbA1Xv7k4qkxzh0SU4Zr21xU1hpJCHPXXi%2FQb1zex9rln6EiDVOrVw7Wmqwsl6KO%2FEZ3pGdPnEYNDIUMkt5hy5vmvm4B481vESI1Fx8wukGe0zOKH9Er2MrkLzD8VTH4ZTHCEOa4kyEIWsl45%2F9gl40&X-Amz-Signature=f2303b61e4ede8af6b7a853a45341ddd8db08f850be96159af34a73ccca38ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
