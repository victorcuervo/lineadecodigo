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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOA6W77J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLE3kPt5ezbfmT2l66ZpFO7kRDArfMp6jC3Ac6MfNMAAiA3i2gawrSmx0weLUNGWh6xwMP9aJfWtdx7hwg7sqGBESr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMIHPdImSGdkRdBEN8KtwDO4hcU8PibJmvVQvPUQc3GRqPFxVTfge9qmedLlPoC83KBs96CIKdxSvNR%2BQC3v%2BaGmdO0Yf%2FWM8t0nb42VRmRam02Mn%2FuQ8SI39V5pe0mx74bixDJv6m5mgGaF%2FwMXSREBO1AXjj37LhHqEP%2BMt%2BthY%2BLMsa1OEwF7FwgFxj9yF9rK3R5myeUfxvbCwzKwqDH7e87T8Dv6oXpqLdtAANKEoP63YZzFuBromcC5LcEacVL281gkWgwB%2BrbYbwmmGiXQxi4INEGy4%2BP5XQ2TSO0gPfcLvOfMi5NsWi9Lvnvyzd6R0pQw2%2FsTf3n9NnUKn9NTK1KimvVSr74M9Mbpr8Rb4tjrPIxG%2FollxJ2L4MVPNox5LcgSeD4of2BxLPkHw73ApEltofKd8eRmfyam3FPz9YU%2BswSpHE9E5tCaU3C6FenzU2UML%2BeuZKcrmpyS7C72OmcQVFz%2BkiVtjis0u6XDeT2ITWLJaoepPXAspe5Qw22WS8arupUuYZDe7bVsGOvJ9qvFf0%2FMloLzNMlvuK4ooCXSzjr5rEdNdy5U9jtNh8uacRMtqJDy6scziWLEbUo68UrpdAvKSMwsdqVfpgodVcRBJtAYvLQ3%2Bmc%2BUkANPdeYEPw75%2FzwhL4RwwlMbNyQY6pgFcnMuErm7zLlKNhaSCS8zUsu3FEIGWHk7NqAuFGv2rkG1ohI4IL8fjzEpzccvPE2Q8SUnIF2v1sJGafkChM6S%2BBxlyuTLofEs3XRKqQsGQnQgZBd5mBwP38K3B7re78p2mV7luuukROHWGXkHRQ2lwdY6cuTcKalBE7lnz3SK%2Fa5PokTkMnQ1PMuXtrYAdyhn1e9D6z8gzw7X7r70LpzRA64SFT8IX&X-Amz-Signature=7a825eaf7bb223aa1e2e8a2a86a9ef7bb20bc6cfe23f836307f30b2bf14c4593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOA6W77J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLE3kPt5ezbfmT2l66ZpFO7kRDArfMp6jC3Ac6MfNMAAiA3i2gawrSmx0weLUNGWh6xwMP9aJfWtdx7hwg7sqGBESr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMIHPdImSGdkRdBEN8KtwDO4hcU8PibJmvVQvPUQc3GRqPFxVTfge9qmedLlPoC83KBs96CIKdxSvNR%2BQC3v%2BaGmdO0Yf%2FWM8t0nb42VRmRam02Mn%2FuQ8SI39V5pe0mx74bixDJv6m5mgGaF%2FwMXSREBO1AXjj37LhHqEP%2BMt%2BthY%2BLMsa1OEwF7FwgFxj9yF9rK3R5myeUfxvbCwzKwqDH7e87T8Dv6oXpqLdtAANKEoP63YZzFuBromcC5LcEacVL281gkWgwB%2BrbYbwmmGiXQxi4INEGy4%2BP5XQ2TSO0gPfcLvOfMi5NsWi9Lvnvyzd6R0pQw2%2FsTf3n9NnUKn9NTK1KimvVSr74M9Mbpr8Rb4tjrPIxG%2FollxJ2L4MVPNox5LcgSeD4of2BxLPkHw73ApEltofKd8eRmfyam3FPz9YU%2BswSpHE9E5tCaU3C6FenzU2UML%2BeuZKcrmpyS7C72OmcQVFz%2BkiVtjis0u6XDeT2ITWLJaoepPXAspe5Qw22WS8arupUuYZDe7bVsGOvJ9qvFf0%2FMloLzNMlvuK4ooCXSzjr5rEdNdy5U9jtNh8uacRMtqJDy6scziWLEbUo68UrpdAvKSMwsdqVfpgodVcRBJtAYvLQ3%2Bmc%2BUkANPdeYEPw75%2FzwhL4RwwlMbNyQY6pgFcnMuErm7zLlKNhaSCS8zUsu3FEIGWHk7NqAuFGv2rkG1ohI4IL8fjzEpzccvPE2Q8SUnIF2v1sJGafkChM6S%2BBxlyuTLofEs3XRKqQsGQnQgZBd5mBwP38K3B7re78p2mV7luuukROHWGXkHRQ2lwdY6cuTcKalBE7lnz3SK%2Fa5PokTkMnQ1PMuXtrYAdyhn1e9D6z8gzw7X7r70LpzRA64SFT8IX&X-Amz-Signature=8e3b0bcb81b6d6c3203ed8d6d78afb50c92fc68b857c28197489ee2f435b6ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
