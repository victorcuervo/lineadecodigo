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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OYXRZL3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo3oBhFs95ctgahe03mLU4RTMzi1ri%2BQ%2FSm58y0VjStAiEAnC%2FFB4sOLrUyiDdfDMqrtQE%2F4pg583pA5ppYgIRyrukq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDG%2FFQmER8aO1eJ%2F1yrcA07HI%2BkZ3yl4npkPV90fzgx8pxJic3guRHS014sZp21tE7H3w8SyLVFHsQnBsVvBrfzbS%2FrAm5HPTEFqpNLIwpE8owa6gDUzy0knqVNPkn4dOO4DZrx%2FrkfwFvoytz%2FPgIkr1PqdaV0xl5hJ4MC9el6d04pjNLcU3Sv1UBrYpdDsD56ipxZwYnVSo54zWe6x2dikOlX6WDxLLmleM3MkxfJHUNCEITfcn8ic9Yxfl1LI%2BNUn9hT2rnnXtG%2Frw%2B4xUnFUXGXP3I7QDW9Gw%2FxsIC7qQQNBI5O6SX2r3DUolcPv47z8veQHbREtwXF9hy%2F7QI14lcXA6KrNjvK4G7Klek6wjudmynn6S%2FncF5vL4rzDhBuBU%2F5ZR65YDqYUhHgLhVbtNvqaerwzrF%2B%2F8Qen6p0RO1lnbPTOTf%2F6TEsXwlYUR%2F9wHU3LdH1JsUNaNiocV42ybKFqqM8k0Ad2kUw4nW2ApQQ9bKl84rvPTCrI1iSY7UBfYyezS7X1u3Ty3FgS4El%2BKLbFECNc%2FFcyhYosHFyqHUIawCKVH9JYJplKRR94767l0T%2BlJfnT0sJpdzG65c8YazWlBsXL7P%2B18HgBzArnXNZibUMyuNpGf4XQIpEVFU1pFQ4zqZEqn34xML6xyckGOqUBh2XpsYfjGQyLZQO9Xnka0KeG%2FeLpe%2Bn%2FiCFhOVBT4sq4pFYzqN2lVIu%2BrKUCdehMj77VUV1c18U%2BI4jwaCSd9Uf8cGMU%2BoR2w4rYfRf5bG6nNZ6c5io3bTZ4woYGUrB6s%2B0WevaRM8mO8myby%2FGTsMGNZCazAeUIlk5miEcDfoPpXqGaFz60ZawlmMzAPl%2BTIhm5fAthctjlrPjZ%2FjN2HPsxInkz&X-Amz-Signature=5967782961386050793c6f78e69166a7a56a8b361ee68bf61e1d58acd0d4983e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OYXRZL3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo3oBhFs95ctgahe03mLU4RTMzi1ri%2BQ%2FSm58y0VjStAiEAnC%2FFB4sOLrUyiDdfDMqrtQE%2F4pg583pA5ppYgIRyrukq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDG%2FFQmER8aO1eJ%2F1yrcA07HI%2BkZ3yl4npkPV90fzgx8pxJic3guRHS014sZp21tE7H3w8SyLVFHsQnBsVvBrfzbS%2FrAm5HPTEFqpNLIwpE8owa6gDUzy0knqVNPkn4dOO4DZrx%2FrkfwFvoytz%2FPgIkr1PqdaV0xl5hJ4MC9el6d04pjNLcU3Sv1UBrYpdDsD56ipxZwYnVSo54zWe6x2dikOlX6WDxLLmleM3MkxfJHUNCEITfcn8ic9Yxfl1LI%2BNUn9hT2rnnXtG%2Frw%2B4xUnFUXGXP3I7QDW9Gw%2FxsIC7qQQNBI5O6SX2r3DUolcPv47z8veQHbREtwXF9hy%2F7QI14lcXA6KrNjvK4G7Klek6wjudmynn6S%2FncF5vL4rzDhBuBU%2F5ZR65YDqYUhHgLhVbtNvqaerwzrF%2B%2F8Qen6p0RO1lnbPTOTf%2F6TEsXwlYUR%2F9wHU3LdH1JsUNaNiocV42ybKFqqM8k0Ad2kUw4nW2ApQQ9bKl84rvPTCrI1iSY7UBfYyezS7X1u3Ty3FgS4El%2BKLbFECNc%2FFcyhYosHFyqHUIawCKVH9JYJplKRR94767l0T%2BlJfnT0sJpdzG65c8YazWlBsXL7P%2B18HgBzArnXNZibUMyuNpGf4XQIpEVFU1pFQ4zqZEqn34xML6xyckGOqUBh2XpsYfjGQyLZQO9Xnka0KeG%2FeLpe%2Bn%2FiCFhOVBT4sq4pFYzqN2lVIu%2BrKUCdehMj77VUV1c18U%2BI4jwaCSd9Uf8cGMU%2BoR2w4rYfRf5bG6nNZ6c5io3bTZ4woYGUrB6s%2B0WevaRM8mO8myby%2FGTsMGNZCazAeUIlk5miEcDfoPpXqGaFz60ZawlmMzAPl%2BTIhm5fAthctjlrPjZ%2FjN2HPsxInkz&X-Amz-Signature=40d4b43bb9b7f2a20cdf0973e84cf52e3e56c5a43e7f5bbde4b1a2cbec088a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
