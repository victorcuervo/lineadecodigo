---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JVSGHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCBycttOm1qWLbS%2FBIeJhjrxEELGMqIKP4yiYUijpcZwgIgPAbyrrbzojsU22ENYpeWFyJcyPl2wsM3rRYlARp%2BBfAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGAH5XZDIS6YWL%2BYaCrcA0b4QQN2pw4kRgTKkakT0x%2F6RCk7Yxg5K7jl2Q5FxfXCmPcMLv%2FwZsX3o72I%2BrtTi8xamCjY9Y68hpcmIOppCrFD65Z796jEFpEJa2VOl6EVqoDdLPko7l3mF6lb49bYbc1RXng9aZKjJJC48o6DfLpbjLyZSl7Pzeg7LtOGg%2B4Lzd5%2Bodxp%2B4hdGa9eStgnku56dKi%2B67oXj42l3BOde6RKGX6wfFyUBbAaRuVchnY12x7SqOAOHfnfSNI6guhHvbjkuLIqKYJ95y7QGygZlRrriDa5ckktDgjt2tqXoWDvzHQftDRVC024QNjIBCLxyjcZUsfjhFQrHtb545YvthGVcspg3L9khrPLi4gx8eu8SX5pgo7ILhVvbBUfM3qJWPq5Gkn0GTz0DYOpVtrVlTShXfaomSQpcwNm7fRhEmlXco2KVf9nI5RK5uXIji3yl0q5bqRfl6S5J7x9kR2unFUIiDm9LVDRE9PYG5ZIXahnwcslo6eeIfxC%2FkCIhqs8Jtp1Fkx4qkvinNeN%2Fma1faEJtQ%2Fu8TVMsJBU4ZeKiTfSDQfulLumvPxrE50Rju3N1SGYhEDZAUf03LSxFOO5%2BHa%2FiMe%2BRem2UaIqZqCQe7iDyCLrTO%2Fkj%2Fi8J8WsMPvUw8kGOqUBqVzJgPAB721Fv5bS3%2FeYzQv3tovtfT6idx%2BWyDH2XhmKyVCEvNLyY0jyRMMGCtxHvBzJ%2FgInaqJ0cplGkNdKJCeId%2FVAs%2F%2FYxpWllhBK08659QIsfS%2BXHHm6ALWVaQF%2B7uJivJMMGCZ8eI0ffzXDjd6gPk1BH77ADhhNrBlT1g9k5zOPHAhbG8laQxGWUVVP80nKrwYYbFwOCIYU8IYf%2Fr1yE1uy&X-Amz-Signature=28c4599c0e9b89309cc9253bb138ff58d9f8c5e33a26cc94daaa116731c6ea27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JVSGHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCBycttOm1qWLbS%2FBIeJhjrxEELGMqIKP4yiYUijpcZwgIgPAbyrrbzojsU22ENYpeWFyJcyPl2wsM3rRYlARp%2BBfAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGAH5XZDIS6YWL%2BYaCrcA0b4QQN2pw4kRgTKkakT0x%2F6RCk7Yxg5K7jl2Q5FxfXCmPcMLv%2FwZsX3o72I%2BrtTi8xamCjY9Y68hpcmIOppCrFD65Z796jEFpEJa2VOl6EVqoDdLPko7l3mF6lb49bYbc1RXng9aZKjJJC48o6DfLpbjLyZSl7Pzeg7LtOGg%2B4Lzd5%2Bodxp%2B4hdGa9eStgnku56dKi%2B67oXj42l3BOde6RKGX6wfFyUBbAaRuVchnY12x7SqOAOHfnfSNI6guhHvbjkuLIqKYJ95y7QGygZlRrriDa5ckktDgjt2tqXoWDvzHQftDRVC024QNjIBCLxyjcZUsfjhFQrHtb545YvthGVcspg3L9khrPLi4gx8eu8SX5pgo7ILhVvbBUfM3qJWPq5Gkn0GTz0DYOpVtrVlTShXfaomSQpcwNm7fRhEmlXco2KVf9nI5RK5uXIji3yl0q5bqRfl6S5J7x9kR2unFUIiDm9LVDRE9PYG5ZIXahnwcslo6eeIfxC%2FkCIhqs8Jtp1Fkx4qkvinNeN%2Fma1faEJtQ%2Fu8TVMsJBU4ZeKiTfSDQfulLumvPxrE50Rju3N1SGYhEDZAUf03LSxFOO5%2BHa%2FiMe%2BRem2UaIqZqCQe7iDyCLrTO%2Fkj%2Fi8J8WsMPvUw8kGOqUBqVzJgPAB721Fv5bS3%2FeYzQv3tovtfT6idx%2BWyDH2XhmKyVCEvNLyY0jyRMMGCtxHvBzJ%2FgInaqJ0cplGkNdKJCeId%2FVAs%2F%2FYxpWllhBK08659QIsfS%2BXHHm6ALWVaQF%2B7uJivJMMGCZ8eI0ffzXDjd6gPk1BH77ADhhNrBlT1g9k5zOPHAhbG8laQxGWUVVP80nKrwYYbFwOCIYU8IYf%2Fr1yE1uy&X-Amz-Signature=eb3c74106512133a8259bae04208a93d24cfd69b944d9408c46cebc9f2eb7e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
