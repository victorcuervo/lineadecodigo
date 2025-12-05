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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YVID7H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9sOGtJC5yC1PisZerfoRUMsMjrnfj1LKScl4GDiFrRAiBb7C%2FGB6Kgi5VmdfHUvkA1zUdztEhsSpnwsAQFh6cnIyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCsMFekJ8HSNPrPfsKtwD6yJJorLcM%2BrWhNdxcWqVm4MrYCHNlvBDumA5G45qFH5K18o7kSVhbiwwLmsim32wATD2zbiHK8yx231YP2qQGcNQ%2FdTjRQA8Xj9RXguINPVNR2DVg8qij5cnU%2BR%2Fu7r%2BfTWhakFDhHiDMcsY5o2kAgb1%2F2R%2FyC8nKzlTMLVBKksFfrP2MQnIvZivSdlTMzGJmuJyZtjQJI5xs4CTOx7oGZaHnF%2FpiWXVj8qhxvrOiCGgUeeDgWjf5j9Xyh3oxDjMBNUiTEKNygJNr0tzK%2BVozhlpOFglcen1xTanatqSm3v06089u7duOEbji7IjRCrqrnpL666btzmS0%2BwYYHSAGotYxyqlRAs2FSy6aZ92qm6l5tsDrh1cjHnXqYsAWzmGazCQejeCNh8Q47S%2FAr%2BBbmhTYuiKwbrTbnNcTZe7AOngPModyfJfxiMCuoafSCtFo9ekjcY47GtAx28JDsFcbRV2WldiVlATL%2Fn3fNFdVN4hqS90L7jq8uoKUT%2BaUEUE1L8zMcjYdvRXZ5bKoCLQcx8n9HhfCisaMmOH%2B5ih9oge0lpR4dGJbOkai0DpZkhO0SqI%2BqJ6ayE3ppp7d%2Fywa6P%2F%2BrECW1ghcH9t6mOrH11%2F7vaWf1EG50futEcw0bLLyQY6pgGjYxQLp44knqadkdZX2Q3G0%2B%2Bl87eb6EZEUJk3G%2F6RfBtCEZkejjXCrv46aOQJif0WDkYpnTWB30cfJh8xJeL8IRbMv80RkcRSl54t2Ve%2BRjMUz5F4%2FEn7xxrZ5A9Qe4hfZd4AomQmNwPabyH27xi4zkoBzIdC8QQRemXoOHpWLvV1FLT6Z5kSckvYNpOwKQXtOgvmXjJAcFj009F%2BVh0z2BsliAX9&X-Amz-Signature=9f5d73237ec5e8dd959bd7d75ab8699486999a439c54866ffe2d1aadf3505a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YVID7H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9sOGtJC5yC1PisZerfoRUMsMjrnfj1LKScl4GDiFrRAiBb7C%2FGB6Kgi5VmdfHUvkA1zUdztEhsSpnwsAQFh6cnIyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCsMFekJ8HSNPrPfsKtwD6yJJorLcM%2BrWhNdxcWqVm4MrYCHNlvBDumA5G45qFH5K18o7kSVhbiwwLmsim32wATD2zbiHK8yx231YP2qQGcNQ%2FdTjRQA8Xj9RXguINPVNR2DVg8qij5cnU%2BR%2Fu7r%2BfTWhakFDhHiDMcsY5o2kAgb1%2F2R%2FyC8nKzlTMLVBKksFfrP2MQnIvZivSdlTMzGJmuJyZtjQJI5xs4CTOx7oGZaHnF%2FpiWXVj8qhxvrOiCGgUeeDgWjf5j9Xyh3oxDjMBNUiTEKNygJNr0tzK%2BVozhlpOFglcen1xTanatqSm3v06089u7duOEbji7IjRCrqrnpL666btzmS0%2BwYYHSAGotYxyqlRAs2FSy6aZ92qm6l5tsDrh1cjHnXqYsAWzmGazCQejeCNh8Q47S%2FAr%2BBbmhTYuiKwbrTbnNcTZe7AOngPModyfJfxiMCuoafSCtFo9ekjcY47GtAx28JDsFcbRV2WldiVlATL%2Fn3fNFdVN4hqS90L7jq8uoKUT%2BaUEUE1L8zMcjYdvRXZ5bKoCLQcx8n9HhfCisaMmOH%2B5ih9oge0lpR4dGJbOkai0DpZkhO0SqI%2BqJ6ayE3ppp7d%2Fywa6P%2F%2BrECW1ghcH9t6mOrH11%2F7vaWf1EG50futEcw0bLLyQY6pgGjYxQLp44knqadkdZX2Q3G0%2B%2Bl87eb6EZEUJk3G%2F6RfBtCEZkejjXCrv46aOQJif0WDkYpnTWB30cfJh8xJeL8IRbMv80RkcRSl54t2Ve%2BRjMUz5F4%2FEn7xxrZ5A9Qe4hfZd4AomQmNwPabyH27xi4zkoBzIdC8QQRemXoOHpWLvV1FLT6Z5kSckvYNpOwKQXtOgvmXjJAcFj009F%2BVh0z2BsliAX9&X-Amz-Signature=4f2868e41fe37179a87e98ff373adf42d3f3bfdbd716e429b0f78fd499f7d1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
