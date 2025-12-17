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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65MIAYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIxDpDcSU%2FgpQzVT4BydF6qpWfZBHFDQhR%2Bi7DJnbWVAiEAjCL3ZsIYUecUS59p%2FSxTUg6qjC6ArS0Gf%2Bce0BzHlZUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCmQysIGoA%2Be3rwMeircAzdFYQ%2FEOfaG4s4j%2FeBAe99IUATefIkZjtrPXyycYQjtoScVHImZpxm4%2FBb1Ka7qAFNXbcsFb%2FXCIwmmjFu6uVb07khetSEqu2mvRRcXQO%2By9v3xtjoyXNNStKFvwyK2tRPf8ccZD6dVSzsrk%2B0ooovg2i5pR6c5F2XkQ5qy72OOUAFJkzzMRkw6hzoVEGAlLLM2We06u8qpc%2FtzEtm8Zlt1220%2FoI2ZLISlLL2AgD5JJtoOm%2F8dKbvTSoBLuRowa1VF6q3iFm%2BmnJ3l1g%2FyxnCCobmF5%2FLyx8I9nMGtZ4qZ3cnJj7AOxnchlmOKWPfPIwis8aXQrxBgP7dWU3IEMTGcuZ41G2jCxc%2BpNOf2dQ3BV60VEFI27Bfir91ZWty0hx1syb0STJDavvP4Qq4cMzjtLZDc0J3MvEdSGOXx7v0YcnXhx9DK3VcDCJlzbu%2Fv2cgEmQ4Whpa8yIEKsGxmmAtO7aySd%2BC55gFELGiSal75GwXETaVB1fSMPKCaAiQFLZGFFgT7h%2BW5y%2FeVU%2Fxef9ZPx4TiT%2BYsiJjmVc%2BQ0hND6mgNWm2JlN9eEACnw274GmFeVIqIDnR5Tfq%2BYPYZCd0vB4wrL4HRUPG9etN9qTP0tJnHt9vvhFbNfQT1MO3vicoGOqUBas66HAhQupoa5hScB93e2FEd2pVIIcVPAcyuGtDEHdniYbysoI%2F1%2FmLmgiS%2BlTNawu%2BOLpQ%2B3RE%2B0l1MdN%2FyGUonukY1gj8HUh5S%2FSJ%2B90immBkFWZ19C0KTXnDgQ9FpL4x0xtxXAIf14WAu%2FJMBZfXR1NyFc2%2FRZO5T4D92l6%2B4Jsu%2Feq%2BEa8ENSIyGIpinMENSPp%2Ba10sSVhOA4VK32JG6FBXr&X-Amz-Signature=871dd3f521d7dbdf897ba5c5d1a7460142ed73aa4eaafd0d111249ad11b37d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65MIAYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIxDpDcSU%2FgpQzVT4BydF6qpWfZBHFDQhR%2Bi7DJnbWVAiEAjCL3ZsIYUecUS59p%2FSxTUg6qjC6ArS0Gf%2Bce0BzHlZUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCmQysIGoA%2Be3rwMeircAzdFYQ%2FEOfaG4s4j%2FeBAe99IUATefIkZjtrPXyycYQjtoScVHImZpxm4%2FBb1Ka7qAFNXbcsFb%2FXCIwmmjFu6uVb07khetSEqu2mvRRcXQO%2By9v3xtjoyXNNStKFvwyK2tRPf8ccZD6dVSzsrk%2B0ooovg2i5pR6c5F2XkQ5qy72OOUAFJkzzMRkw6hzoVEGAlLLM2We06u8qpc%2FtzEtm8Zlt1220%2FoI2ZLISlLL2AgD5JJtoOm%2F8dKbvTSoBLuRowa1VF6q3iFm%2BmnJ3l1g%2FyxnCCobmF5%2FLyx8I9nMGtZ4qZ3cnJj7AOxnchlmOKWPfPIwis8aXQrxBgP7dWU3IEMTGcuZ41G2jCxc%2BpNOf2dQ3BV60VEFI27Bfir91ZWty0hx1syb0STJDavvP4Qq4cMzjtLZDc0J3MvEdSGOXx7v0YcnXhx9DK3VcDCJlzbu%2Fv2cgEmQ4Whpa8yIEKsGxmmAtO7aySd%2BC55gFELGiSal75GwXETaVB1fSMPKCaAiQFLZGFFgT7h%2BW5y%2FeVU%2Fxef9ZPx4TiT%2BYsiJjmVc%2BQ0hND6mgNWm2JlN9eEACnw274GmFeVIqIDnR5Tfq%2BYPYZCd0vB4wrL4HRUPG9etN9qTP0tJnHt9vvhFbNfQT1MO3vicoGOqUBas66HAhQupoa5hScB93e2FEd2pVIIcVPAcyuGtDEHdniYbysoI%2F1%2FmLmgiS%2BlTNawu%2BOLpQ%2B3RE%2B0l1MdN%2FyGUonukY1gj8HUh5S%2FSJ%2B90immBkFWZ19C0KTXnDgQ9FpL4x0xtxXAIf14WAu%2FJMBZfXR1NyFc2%2FRZO5T4D92l6%2B4Jsu%2Feq%2BEa8ENSIyGIpinMENSPp%2Ba10sSVhOA4VK32JG6FBXr&X-Amz-Signature=f0a6995ff3652399d13a8fe73ad87d5f33149c23d35ca99e108e5b4461930f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
