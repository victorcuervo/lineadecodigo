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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPPUUUQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC71TAm82zVrDNMH6GqBLWbRuyKLqwR6%2FjyuAZ0W%2BZvWAiEA0Ba6pOQystZrqE9CP%2B4lFRAKu9q%2Fn8rcGjQIl%2BQqlJIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGQfY2ZK9%2FauWbvWSrcA4aanGNvjCd3BQ82tqdRBXj81HV7QSC9OpwcE3D2MnoqtTBnr0oml4nLcRwz%2FzGv72%2BlAh9lQxFmGWC7We2Jt1zo50yVBmRhlwtlcnSboaT4kuqELpWeZXv1Vg7tR7hchDoe7%2Fkhz30nQ%2F%2B8ON2aWmkEvNgq7w1sCl7NfoS%2B0R%2FEbzZVqtQ8BHyNpkZO1yn4SDEeHkC2dfnhNKaGJgYY22PAcL45BNwS%2FftsCvnr4B12HBW4RJuKRvVrSE%2BwUCjHg0G3VFLcMtHINkNuNgGgEQHl7z7sW8Hh353rgiyq9V9Z0I9ndvGMopACyYEvTqhlErvb29tcD1qc2LnXRRJFnp2O8h3pkicZlDhYtzvC3ZINehIQSgLOxXj3%2FmC3wqNxkXOsOmHQy7ex7Tv6uWgJA12dgEsZsy6l5XlMMCTG0ARXuTeVRapzklnf2f80C%2BxUyUCUD8FGUnHMNqo8JAEIhrFxcalUNXfZ5jMmoPz1wwdXu7GxU1L4C9Sv0F%2Fajj491B2TeGzqyf0uoQHZpWddBaeg5y%2FF7nrOMcoJfZEwSPFjoXiIiWyipcfke8s35RJ%2Bsy8LaVxC38Zn%2B0XQWIdm9vCYE%2BQeusnDyxv90AxZUZUmDy%2FywMGK2oJAxdmvMOvt2ckGOqUBpu3uWGj5ZZL8Kxt9sERY3l8c%2BzGds47LFFkrgcLeWPY0cnEBsnkGN3U5KIHWQii4XiC92HuTxLnoCG15xmllOyFhjpcu2KzrsV17wv2rFO4feVegmnuseV6HdXn3fkXSVrn%2FMJHMT01aGHIVKOK7EdMJl%2Bc0ehgSzutGlNbMnXJ5kJ5dEHu5V1xdVlAxxQzDpslrzYlfTNytrpGINY8bvaZxgZrN&X-Amz-Signature=adbfb9ae5643726da338e01b5cfe1eb0845695f6b242104f8ce74fa9ec6a4727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEPPUUUQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC71TAm82zVrDNMH6GqBLWbRuyKLqwR6%2FjyuAZ0W%2BZvWAiEA0Ba6pOQystZrqE9CP%2B4lFRAKu9q%2Fn8rcGjQIl%2BQqlJIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGQfY2ZK9%2FauWbvWSrcA4aanGNvjCd3BQ82tqdRBXj81HV7QSC9OpwcE3D2MnoqtTBnr0oml4nLcRwz%2FzGv72%2BlAh9lQxFmGWC7We2Jt1zo50yVBmRhlwtlcnSboaT4kuqELpWeZXv1Vg7tR7hchDoe7%2Fkhz30nQ%2F%2B8ON2aWmkEvNgq7w1sCl7NfoS%2B0R%2FEbzZVqtQ8BHyNpkZO1yn4SDEeHkC2dfnhNKaGJgYY22PAcL45BNwS%2FftsCvnr4B12HBW4RJuKRvVrSE%2BwUCjHg0G3VFLcMtHINkNuNgGgEQHl7z7sW8Hh353rgiyq9V9Z0I9ndvGMopACyYEvTqhlErvb29tcD1qc2LnXRRJFnp2O8h3pkicZlDhYtzvC3ZINehIQSgLOxXj3%2FmC3wqNxkXOsOmHQy7ex7Tv6uWgJA12dgEsZsy6l5XlMMCTG0ARXuTeVRapzklnf2f80C%2BxUyUCUD8FGUnHMNqo8JAEIhrFxcalUNXfZ5jMmoPz1wwdXu7GxU1L4C9Sv0F%2Fajj491B2TeGzqyf0uoQHZpWddBaeg5y%2FF7nrOMcoJfZEwSPFjoXiIiWyipcfke8s35RJ%2Bsy8LaVxC38Zn%2B0XQWIdm9vCYE%2BQeusnDyxv90AxZUZUmDy%2FywMGK2oJAxdmvMOvt2ckGOqUBpu3uWGj5ZZL8Kxt9sERY3l8c%2BzGds47LFFkrgcLeWPY0cnEBsnkGN3U5KIHWQii4XiC92HuTxLnoCG15xmllOyFhjpcu2KzrsV17wv2rFO4feVegmnuseV6HdXn3fkXSVrn%2FMJHMT01aGHIVKOK7EdMJl%2Bc0ehgSzutGlNbMnXJ5kJ5dEHu5V1xdVlAxxQzDpslrzYlfTNytrpGINY8bvaZxgZrN&X-Amz-Signature=9dd35015309d8f5500d6da120cecbe5a69b9a4c15c5882b3690192f4502d9a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
