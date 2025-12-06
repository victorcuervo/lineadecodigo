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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UYNP7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMqOqL6mhixmCObM1XdT4M9MSU%2BDKt%2BpTkJ3PY05vbAIgHhZlk5gqzODdTx%2BlPR1KRBTJYeXQ3fVAOkL9XNFePrYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBuatKN7et9ICe0rbyrcAxTOp5sCHSnTEufaLCpy4RGhTSdkWMbwMN%2BaRp5KWuX3sKyFpKfKaQ%2FWEJyNgzRnRBiH25ynGN4TPsKZc33IqpDDypzMR%2BvgIrhIRcrgFiDRNgQKGGhvXP4oFv2YKpZUDeHG%2Bjj2LyhP08GDklkll4FhCox75ljZtzn7WmlOg5zaXVfAWzWScEVDkYfv9h38%2BKyyLglNca8LymJ4koWtzo%2BiJAHQPi5anQVMn7dxDKK06Uk7k979PWZXV4Ioc1wuaLIwD64FFpJRVyfwoY6G9bdgB0Xtb0RtzwmIiwiK9nyRqx4ZCw5jMbdOv88skGLvPifF4TPIODLyAGX%2BmOwUGRSuQUxq3bBAURkRQ4O83swWa2AsxOAHyHluW3KgkUDZtxG7LUPVXBduS5ftBqFj%2F40cQghJzy58DJmbb7CiyMmVYHDXcbyY%2FkdOLXz01UjAtSEplg%2BeykDy4tOneIb2bCo5ZoOpG383vOs3SfiyYF67ZVrrHhmRT%2FRoG7ie%2BRQ6Xc4Ejr6i3K6lKRgjXO2eH9iTzv1EnOp0pSs8Ako%2F6UPhRkYBf7st9HO8unTojU8agdS1t2iiM2ZX3oZLNPZVcG%2BNxmyjQxUaIlCoI%2Fdo%2BTU8rRkclCZtz12KqeL4MIvT0skGOqUB%2FWllNTxFaVrYB%2F8nNrQiFwOsJ72oFkbUZ%2FxdKjZwo1P7TMgn9En1f%2Fey0NWCheh0hHU8vy8ri9j3w7ao%2BeTELmcyL7hOhBpApYokMpz6lU2XpfPzE%2BTFVdOO4GM2UgDo5h9Ix%2Fjn8vn4NyWdHEr4oXIBEe8fhbaZJb0zWiY1N8M9vHvel58Xncj6NVTrjqBmGSHMoweZgglyDNk%2FhNOakeF9mkXM&X-Amz-Signature=0c261bf90eed6f264506da05ad79ca238293ba229df6305c77718ce0e8c6a766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UYNP7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMqOqL6mhixmCObM1XdT4M9MSU%2BDKt%2BpTkJ3PY05vbAIgHhZlk5gqzODdTx%2BlPR1KRBTJYeXQ3fVAOkL9XNFePrYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBuatKN7et9ICe0rbyrcAxTOp5sCHSnTEufaLCpy4RGhTSdkWMbwMN%2BaRp5KWuX3sKyFpKfKaQ%2FWEJyNgzRnRBiH25ynGN4TPsKZc33IqpDDypzMR%2BvgIrhIRcrgFiDRNgQKGGhvXP4oFv2YKpZUDeHG%2Bjj2LyhP08GDklkll4FhCox75ljZtzn7WmlOg5zaXVfAWzWScEVDkYfv9h38%2BKyyLglNca8LymJ4koWtzo%2BiJAHQPi5anQVMn7dxDKK06Uk7k979PWZXV4Ioc1wuaLIwD64FFpJRVyfwoY6G9bdgB0Xtb0RtzwmIiwiK9nyRqx4ZCw5jMbdOv88skGLvPifF4TPIODLyAGX%2BmOwUGRSuQUxq3bBAURkRQ4O83swWa2AsxOAHyHluW3KgkUDZtxG7LUPVXBduS5ftBqFj%2F40cQghJzy58DJmbb7CiyMmVYHDXcbyY%2FkdOLXz01UjAtSEplg%2BeykDy4tOneIb2bCo5ZoOpG383vOs3SfiyYF67ZVrrHhmRT%2FRoG7ie%2BRQ6Xc4Ejr6i3K6lKRgjXO2eH9iTzv1EnOp0pSs8Ako%2F6UPhRkYBf7st9HO8unTojU8agdS1t2iiM2ZX3oZLNPZVcG%2BNxmyjQxUaIlCoI%2Fdo%2BTU8rRkclCZtz12KqeL4MIvT0skGOqUB%2FWllNTxFaVrYB%2F8nNrQiFwOsJ72oFkbUZ%2FxdKjZwo1P7TMgn9En1f%2Fey0NWCheh0hHU8vy8ri9j3w7ao%2BeTELmcyL7hOhBpApYokMpz6lU2XpfPzE%2BTFVdOO4GM2UgDo5h9Ix%2Fjn8vn4NyWdHEr4oXIBEe8fhbaZJb0zWiY1N8M9vHvel58Xncj6NVTrjqBmGSHMoweZgglyDNk%2FhNOakeF9mkXM&X-Amz-Signature=bca53c61484b5a5434dede4d4fc3492307950db8b4b36e3c965e41806d1890f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
