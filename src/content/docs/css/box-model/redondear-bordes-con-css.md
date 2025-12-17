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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WCJDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3vtiULQMtLb0%2BwprjyNyfPGFNNeW0H8J3oQ9pHZpz6AiAz35uVUF9woA46ZTI3t8f7xSncNQclhjdePinGQEzBPCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLcsoooqSCefiglBlKtwDmK3DegQXA0xrxuMgQDhk23YFHGgqnyI7%2BcNWKSwyQOvvJyXRj45efL8HJ%2F6l5Z1yHxrD%2FTcy5fVFUNtiqloUI1izmkWqLTasoglL6ppLWTzLHzyP%2BqxOOlQSegyxkPDPIilcdpHmiDmkzOGbYKGD2gwFYXcS%2FXcfRe76Jj5EU%2FthfECgNqS6ua6LFMUD6I0IAQxIwFr3VxkiVBImj4%2FxfwoVyVcBHy94C1MDc14LtVTBtmr%2FWNRzlkRd8ikzvyb2lOyNC%2BLlYat4pv%2BYidt5HVBPzA9YoJRPu09lpovMFCZ0CwmnobN9M%2ByZeUnvY17Vo3H4EJv6wdJFEy8%2B3cQR%2BJIqJ%2BcgrADlChIdm%2BFAMcr992OS9QcwI0UdBe5n6Mm8q6g6qYcl8GiHtIpFwwzWU8ZhGX%2Bo7jyhvIBTgyGrBCJyILUjurZvST24lknSDFCjPG%2BNJrEd1V1XwX6JkANOa4YyCytQiPPz7u8rQajmxqD5NROKER26Crqx2xpYH0%2FoBrcwfr09H429G0lDC1pE9YE5WkT65iib0i9bvFWqT1nrFrAaCO36ekfMyWjQ7YSiUcsAxbpUGo2FE8rgJQ%2F6ibzgawZ70ENOr3eEs9PvOCLXjxqhtL9nmGFI6%2FYwiouMygY6pgFGY6XD%2B2EfyYj3e6c%2B9piCX5ar9rYbklt4Z4NpkIUfbtnYixkExcodscP1rHY5UNsxsAAehEJJ%2FmBif7gkfXqww2K6z7AtFuO4uGxdx7NDh3f5OMu4PEndeepme4eCWcXzxjVkg45hQSaGRoXyJsIgo6w1YhZCC1pTOZ%2FPfdrIFHsxQxa4uEiEMqN5ldrI88GcLJP9wguGRdyCbHMy4XVReYga1j5w&X-Amz-Signature=b2d2caf478df1b4973d4464d2710d9d47802e1b3743ca2c4e6498c9ef09020a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WCJDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3vtiULQMtLb0%2BwprjyNyfPGFNNeW0H8J3oQ9pHZpz6AiAz35uVUF9woA46ZTI3t8f7xSncNQclhjdePinGQEzBPCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLcsoooqSCefiglBlKtwDmK3DegQXA0xrxuMgQDhk23YFHGgqnyI7%2BcNWKSwyQOvvJyXRj45efL8HJ%2F6l5Z1yHxrD%2FTcy5fVFUNtiqloUI1izmkWqLTasoglL6ppLWTzLHzyP%2BqxOOlQSegyxkPDPIilcdpHmiDmkzOGbYKGD2gwFYXcS%2FXcfRe76Jj5EU%2FthfECgNqS6ua6LFMUD6I0IAQxIwFr3VxkiVBImj4%2FxfwoVyVcBHy94C1MDc14LtVTBtmr%2FWNRzlkRd8ikzvyb2lOyNC%2BLlYat4pv%2BYidt5HVBPzA9YoJRPu09lpovMFCZ0CwmnobN9M%2ByZeUnvY17Vo3H4EJv6wdJFEy8%2B3cQR%2BJIqJ%2BcgrADlChIdm%2BFAMcr992OS9QcwI0UdBe5n6Mm8q6g6qYcl8GiHtIpFwwzWU8ZhGX%2Bo7jyhvIBTgyGrBCJyILUjurZvST24lknSDFCjPG%2BNJrEd1V1XwX6JkANOa4YyCytQiPPz7u8rQajmxqD5NROKER26Crqx2xpYH0%2FoBrcwfr09H429G0lDC1pE9YE5WkT65iib0i9bvFWqT1nrFrAaCO36ekfMyWjQ7YSiUcsAxbpUGo2FE8rgJQ%2F6ibzgawZ70ENOr3eEs9PvOCLXjxqhtL9nmGFI6%2FYwiouMygY6pgFGY6XD%2B2EfyYj3e6c%2B9piCX5ar9rYbklt4Z4NpkIUfbtnYixkExcodscP1rHY5UNsxsAAehEJJ%2FmBif7gkfXqww2K6z7AtFuO4uGxdx7NDh3f5OMu4PEndeepme4eCWcXzxjVkg45hQSaGRoXyJsIgo6w1YhZCC1pTOZ%2FPfdrIFHsxQxa4uEiEMqN5ldrI88GcLJP9wguGRdyCbHMy4XVReYga1j5w&X-Amz-Signature=8577bcd738f1faf613e840b875e06baceaea2e034c4d761cc8ec96c3f5f084c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
