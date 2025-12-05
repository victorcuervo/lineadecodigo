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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6IZ5BB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl6A9zrHNl047RtEvXz%2FwJCbw72IDj2sdH9SY%2BcnDBPAIgc6gfwmPx%2F4jEXm3MHLpbJa7y%2FJLT6Ikw5Xed71WT2t0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDM0rmO0rYP3Tov%2FDlCrcAzbeZ3%2B8nuEotNE49zuMOEUzWWOrZB5JyUggMi1SvxEeEIAaBooO3otdCV2wqEURom0FNuHLvV0qnq8NeWbDPq8oNQ1YRQXxL5yJVArAmDzWPlMGE%2BctEeSG%2F4Tx1foR%2F%2BcRe3E4ZBSm%2B3XvIMi5j286fpfSBc7zhrPeAPlmi1LB5mhsIbg8wWPJqH02fbAJASlAw9f1HLuMKoE6ZmgLA0h95A2UjB7bpEbyvY5kmuTtc5gCQupoEqLPDN260bxSoVPr6Q2eh2dbv0ajoY7chYk5hPbIsJtAuITQ6GOvwV9ij99h2aYFa0LWiO564FARC%2BNOVroLQuAeB0RLJHe2LkUiyME1Ev9qOwAwNKE6cJ1OimUXICbhdl%2F1MqtSWsOeflmaqn7aMLYkptqEF6s8%2FKeQLfWZE1nnEszpGbjtkKzJSWyfSlznjrhl2I2BrBm9twFpQ3%2BVJr%2BEBrO%2F166YVKAAdWXegx7Plwrzy6OsVUr3ybzSTbeUxVOId3jFJLrILxJPDBGxTk04IzTE30kSs8fUzSFWbcWtVHwj8FO4KnvWu3%2BpikKz2CcZpnFojXCe%2FZSCC%2B3NMj8DOBww6iIasZKa%2BjLzn1dGR%2BwD%2FFHCt%2B1vbgxBW9aQqHhRUfUZMOz8y8kGOqUBUWt1KK9qJ%2B1SUdMRW5d0e61dmuUDFxv2RvJTU05UA09e9HKN6dL5%2BqfSx6X8PsZCUyIk0ES0MlDijHpR8Ic5WifZnSbKXDRPmvzsOpQlKWdQkpS21ocOGbflxa8IvFFPuhRKoJqpPIi5x%2BUanQBl0oFI5WbzpNrprNYRsNJFXkWLIFRQppNpT%2FqINZeWT7SpVUX%2BTEwmTXHsOnktsaX%2FDFTEB4aQ&X-Amz-Signature=52d8cc10cc3a6046cc8497e99759015ecf42751d23a4c90b542d09aa497f4d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6IZ5BB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl6A9zrHNl047RtEvXz%2FwJCbw72IDj2sdH9SY%2BcnDBPAIgc6gfwmPx%2F4jEXm3MHLpbJa7y%2FJLT6Ikw5Xed71WT2t0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDM0rmO0rYP3Tov%2FDlCrcAzbeZ3%2B8nuEotNE49zuMOEUzWWOrZB5JyUggMi1SvxEeEIAaBooO3otdCV2wqEURom0FNuHLvV0qnq8NeWbDPq8oNQ1YRQXxL5yJVArAmDzWPlMGE%2BctEeSG%2F4Tx1foR%2F%2BcRe3E4ZBSm%2B3XvIMi5j286fpfSBc7zhrPeAPlmi1LB5mhsIbg8wWPJqH02fbAJASlAw9f1HLuMKoE6ZmgLA0h95A2UjB7bpEbyvY5kmuTtc5gCQupoEqLPDN260bxSoVPr6Q2eh2dbv0ajoY7chYk5hPbIsJtAuITQ6GOvwV9ij99h2aYFa0LWiO564FARC%2BNOVroLQuAeB0RLJHe2LkUiyME1Ev9qOwAwNKE6cJ1OimUXICbhdl%2F1MqtSWsOeflmaqn7aMLYkptqEF6s8%2FKeQLfWZE1nnEszpGbjtkKzJSWyfSlznjrhl2I2BrBm9twFpQ3%2BVJr%2BEBrO%2F166YVKAAdWXegx7Plwrzy6OsVUr3ybzSTbeUxVOId3jFJLrILxJPDBGxTk04IzTE30kSs8fUzSFWbcWtVHwj8FO4KnvWu3%2BpikKz2CcZpnFojXCe%2FZSCC%2B3NMj8DOBww6iIasZKa%2BjLzn1dGR%2BwD%2FFHCt%2B1vbgxBW9aQqHhRUfUZMOz8y8kGOqUBUWt1KK9qJ%2B1SUdMRW5d0e61dmuUDFxv2RvJTU05UA09e9HKN6dL5%2BqfSx6X8PsZCUyIk0ES0MlDijHpR8Ic5WifZnSbKXDRPmvzsOpQlKWdQkpS21ocOGbflxa8IvFFPuhRKoJqpPIi5x%2BUanQBl0oFI5WbzpNrprNYRsNJFXkWLIFRQppNpT%2FqINZeWT7SpVUX%2BTEwmTXHsOnktsaX%2FDFTEB4aQ&X-Amz-Signature=63ac29522f9dc3b791615dfddb80c6f5782ee71367be12991ff959b3a526c586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
