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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642V5VVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fw6vJlOx9UksDxrOOrcECf92%2FN4lb5AeZOcv%2BJwtejAiBegcznOYxGfpPtf2kvDpGevaMfnIpQPNRJ5CZw%2FgDjjCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiJNU1fdT9cZBnBqRKtwDVd6lCJbr%2BAF5UKTZqLDti7Gq6BjQhlXL38xXUfr%2Bz8KeBju5u23Z426HHXPT7kx2SCatWo0BJ7eKHyrkZuqDpSM6plHefIFpgV1PTO%2FkZ3DKUR0%2BdLUdu%2BsGmsSWXB8WQtnOeitjqh73m2JJ07SsBdZMn2y4Jx9sdhCuWd2Bs%2FhBUAjJjcVL020E4VxISsSsmI%2FiUE1yuBucth31I9L3xk89zOXQIeF9Bc9g%2BTD6LkJTzdyAcsNMRisyxh8U1sGhkhQjC3QbamAtFg8jLHac5X91U0cRN5MbbDKRPx%2BAb%2F6dk88V9fFfPPrbXaav2M%2Bq7uDJA1%2BwrkiHKIDilepaHhWBZfoTkLySzOQs9pS8UHc94G%2Fjj9MmsF7YJzk4%2Biwa8XytROGO2F%2BGYgGF%2FQ9Hnwx9wnr5u1A86vdXs0sH%2Br2cLrC0fLzjsAZyoBfONAGgn4JFJbQAeSc5cfP4LoGM5imDhQzT18SV78G4Q%2B0BPUi0LYIwxqfdvDWCNjjczwUCHJ2nFfKriOrqse9RWBL8XupgLetEwwyMZtNDIqWu2OpVQ7e6mg2t9BTGSmm8uoKCO02Pk0HST8hJcnAdCAKIpfHvQUxH0w%2Fadab4gv%2BPIOqW4We%2B2piIP0Y3xhAwrIzIyQY6pgHLBe74xL6NI4SM8AnVSorBQEIhI0%2FFtHNLwcl6nkO1v7NE%2F69hUVMt2np71zCrcLx9T3g2F13a65ZMMr0nW8eSd2L%2FSG45tmO867tqH8M6wBLayG68NjRxtdaZTLbWHvI%2FLZ1%2Fr29%2FYHOOWU53sPV8jAoOcSsOQ2L8wwl0w9ik0xSe80xnaIENYQCOfaFKfqkRhBUYLh48hZgYNm3i6eJaKpq0%2Fjrc&X-Amz-Signature=2d9abd5b2abcc7cf63eba55283f593b6df39981039d10b78f005db86388159be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642V5VVRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fw6vJlOx9UksDxrOOrcECf92%2FN4lb5AeZOcv%2BJwtejAiBegcznOYxGfpPtf2kvDpGevaMfnIpQPNRJ5CZw%2FgDjjCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMiJNU1fdT9cZBnBqRKtwDVd6lCJbr%2BAF5UKTZqLDti7Gq6BjQhlXL38xXUfr%2Bz8KeBju5u23Z426HHXPT7kx2SCatWo0BJ7eKHyrkZuqDpSM6plHefIFpgV1PTO%2FkZ3DKUR0%2BdLUdu%2BsGmsSWXB8WQtnOeitjqh73m2JJ07SsBdZMn2y4Jx9sdhCuWd2Bs%2FhBUAjJjcVL020E4VxISsSsmI%2FiUE1yuBucth31I9L3xk89zOXQIeF9Bc9g%2BTD6LkJTzdyAcsNMRisyxh8U1sGhkhQjC3QbamAtFg8jLHac5X91U0cRN5MbbDKRPx%2BAb%2F6dk88V9fFfPPrbXaav2M%2Bq7uDJA1%2BwrkiHKIDilepaHhWBZfoTkLySzOQs9pS8UHc94G%2Fjj9MmsF7YJzk4%2Biwa8XytROGO2F%2BGYgGF%2FQ9Hnwx9wnr5u1A86vdXs0sH%2Br2cLrC0fLzjsAZyoBfONAGgn4JFJbQAeSc5cfP4LoGM5imDhQzT18SV78G4Q%2B0BPUi0LYIwxqfdvDWCNjjczwUCHJ2nFfKriOrqse9RWBL8XupgLetEwwyMZtNDIqWu2OpVQ7e6mg2t9BTGSmm8uoKCO02Pk0HST8hJcnAdCAKIpfHvQUxH0w%2Fadab4gv%2BPIOqW4We%2B2piIP0Y3xhAwrIzIyQY6pgHLBe74xL6NI4SM8AnVSorBQEIhI0%2FFtHNLwcl6nkO1v7NE%2F69hUVMt2np71zCrcLx9T3g2F13a65ZMMr0nW8eSd2L%2FSG45tmO867tqH8M6wBLayG68NjRxtdaZTLbWHvI%2FLZ1%2Fr29%2FYHOOWU53sPV8jAoOcSsOQ2L8wwl0w9ik0xSe80xnaIENYQCOfaFKfqkRhBUYLh48hZgYNm3i6eJaKpq0%2Fjrc&X-Amz-Signature=1dd30f64aa05ea524c55c6e139a6a5821c394633f9eb30d55fa5d915950a0e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
