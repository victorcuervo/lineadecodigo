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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTACUJ3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmw9xfCCUWJD6%2F6VCYXilz7d5QwrMnkWACI5Ttfs%2FwGQIgGuk1shIykFeNZSXDm8LG%2BSxnSpE2rWYzJA7So5FfcrYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOCREpJeZ8%2F99FmsRircA6luQd1CJQBNpqBO0w4U5hfAkU8mGLnRo8FWUVA89STkIa2v%2BHFB6NRTsMkyOth%2Ftu1nQ7HiI6JgPCF3No8dig0OsTvw4ggb2YEjZBEIYIrRsyCBH0iNGkjNJoO4ETyAg%2B7zXh%2FTdZPvAzNr8SYfjlzBLqZ9Z3DKlOoAfebsasPzVwaxo9OLcY15FVsSzU7PKYfZxA7VwgeYuZk5ytKfxX%2B627m7rr40L7ZSRe6H894O5n1Ptg0FKwTKHSvrtQ%2BNt%2BH1%2F1%2FQ0t%2FIKRTXP3v%2FfKetEPoMAb9OplnXewtYkkmoa3%2BekROIPZm1q9IAauXkCgyaiEFX4MJz7h8th1%2F%2Bx9yOPZQqgan1O3tMkQTe5bTANIpp0uWp0IvfvrS6l7l5ghUzBiacmW1hfHQp4mWm0HFvTThGd%2FawyBXlda3pnEdkA4KAiZERVajmM%2B24%2BqTU6lGNYJwTAWRnw9rpXUqE65Wo%2BdS3gNwp%2BjJRmNkhb%2BfAoO6CjLHaDw1A%2B7AOW0yre%2FHIsP7x9NDIFWCjxvykuf71G5ebDrQlE31Gu%2F7poCMUqQn8Kimg2KTdQZ%2F%2FuNPEb%2Fq%2FhgK4fGQ8DcJv%2BRS6Bsv%2Bg7Xxw0Qa%2BqMwuE8PrHthkSI3kwv3BOcBnATuMOzOiMoGOqUBef6kmUk%2BzaoVQxFrVsMDv2MlY%2BbFg%2F3SR6IbxfxZU6CFd%2Bud3a9PTvo3sObRXgWf4QMdoYNmsoMwZy3nXrCN4Tr7ujTP4HZySK%2F7sayhZNa89QMHpWBknlbrxLV1%2BfLeEV%2FBf4U72GabccF8iD3Rt%2BOTkBFB6J8GDPfbJNMtWNggSO6Jhc%2Bv6EMVJkmJGlIRDYLeK%2Bc%2BHU%2BggR7o6Q%2Fp151kvtQh&X-Amz-Signature=b2745c2f348c070896e67a52db79113a868188323c6e57b2eaa33f022f9bdda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTACUJ3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmw9xfCCUWJD6%2F6VCYXilz7d5QwrMnkWACI5Ttfs%2FwGQIgGuk1shIykFeNZSXDm8LG%2BSxnSpE2rWYzJA7So5FfcrYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOCREpJeZ8%2F99FmsRircA6luQd1CJQBNpqBO0w4U5hfAkU8mGLnRo8FWUVA89STkIa2v%2BHFB6NRTsMkyOth%2Ftu1nQ7HiI6JgPCF3No8dig0OsTvw4ggb2YEjZBEIYIrRsyCBH0iNGkjNJoO4ETyAg%2B7zXh%2FTdZPvAzNr8SYfjlzBLqZ9Z3DKlOoAfebsasPzVwaxo9OLcY15FVsSzU7PKYfZxA7VwgeYuZk5ytKfxX%2B627m7rr40L7ZSRe6H894O5n1Ptg0FKwTKHSvrtQ%2BNt%2BH1%2F1%2FQ0t%2FIKRTXP3v%2FfKetEPoMAb9OplnXewtYkkmoa3%2BekROIPZm1q9IAauXkCgyaiEFX4MJz7h8th1%2F%2Bx9yOPZQqgan1O3tMkQTe5bTANIpp0uWp0IvfvrS6l7l5ghUzBiacmW1hfHQp4mWm0HFvTThGd%2FawyBXlda3pnEdkA4KAiZERVajmM%2B24%2BqTU6lGNYJwTAWRnw9rpXUqE65Wo%2BdS3gNwp%2BjJRmNkhb%2BfAoO6CjLHaDw1A%2B7AOW0yre%2FHIsP7x9NDIFWCjxvykuf71G5ebDrQlE31Gu%2F7poCMUqQn8Kimg2KTdQZ%2F%2FuNPEb%2Fq%2FhgK4fGQ8DcJv%2BRS6Bsv%2Bg7Xxw0Qa%2BqMwuE8PrHthkSI3kwv3BOcBnATuMOzOiMoGOqUBef6kmUk%2BzaoVQxFrVsMDv2MlY%2BbFg%2F3SR6IbxfxZU6CFd%2Bud3a9PTvo3sObRXgWf4QMdoYNmsoMwZy3nXrCN4Tr7ujTP4HZySK%2F7sayhZNa89QMHpWBknlbrxLV1%2BfLeEV%2FBf4U72GabccF8iD3Rt%2BOTkBFB6J8GDPfbJNMtWNggSO6Jhc%2Bv6EMVJkmJGlIRDYLeK%2Bc%2BHU%2BggR7o6Q%2Fp151kvtQh&X-Amz-Signature=7ba150b34b6cd824f4ae1b0f70afbcbc94c65a85446750ac4c6baba1df2022c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
