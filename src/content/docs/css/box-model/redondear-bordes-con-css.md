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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCC23GL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbp2BBKMe%2BQYZeu8ZORmXBsQ66ur9nVGla38I9tlhs8QIgK6znEmwXzN8HboNRK0ru2I4%2B3fAHymf1i1dZLZkMStwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNEl4x8OGZRyfYCjlircAw7LOqfuUyuMYSWAmz%2B9ZNCaMRnCqlhze%2FF%2FlkIORvBs8GEprBFhI7pOJzpXbLI5Z%2F6k9AZkkNzOVx%2BodNBeY1kkoObr9bApOYsy8OZCvBpnBOm4kOMALV3dXJ9v4MFu3WgXnSm1AdhzSSM0g1GLX5iRz3tnMBUOgZMxjFPARUj0ZBIgRm9wtvdfdn2Zyq9IgU8AvIuGAsaKdv91m4SRJFvkNmyANWK9PUPechhDupakonV%2Bit7vo7O%2BIqtjlFpynfQSRk6l%2FNBC8elSh1Dt%2B9hiadM9SCY05hholMstCK%2Fd4z5n3SbiA6JAfDtwfUC15ml%2Bkeq0%2BLuEHTbYguESJecbBY6TybXufvU%2FsOem6KrFB7MLcdswT4VIqzyYdG5xUCIZIrvCaeUR0TYMVMauCvlaXejQAEkcxpyqbNRXxDrHCtOZy%2Fjv9%2FrFv8ipujNX5fzlcNY84x4TF4XoPaZdWP3sib9dTL1alurSCJpQlipDs5rOsSCFQIKdzS1VWAWqH8RKMLEKatL%2FnpyIBol4eKNrm0bB5hmp6FOSWVDEh1fYLj0rJmwPrLlEnUSIO72bEXW5CxukzS%2B6HJo%2Ffce0b7XsMDD9pG4MHd93rpUV%2BYGXxaZh5YZZh0kUsWPnMOHpiMoGOqUB7FvNnhu%2FCu4H%2FXQUCcQ2r3Mn7ds24rvn4Aqysg42kyQb%2BNaL1aipCTwg1LGgEA3fBidd4RVxPrTSuXX24J437poUg8nG1JngqOr4pi2orSmBY8%2FvdaSCjfGs7ipMQppFAsNAa0imWmkmxp75%2Bk39EOIZCvX1%2FS%2BLt5X4iDfvRvrevH26M5s1%2BgAZdG8OqIRpD9YaaDC9OEI6%2F5%2FB68cqEi6lCVGd&X-Amz-Signature=dc4ba12a14e87f1062b8135e714fb156fdcf10140081b47cd1689a36c4865cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCC23GL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbp2BBKMe%2BQYZeu8ZORmXBsQ66ur9nVGla38I9tlhs8QIgK6znEmwXzN8HboNRK0ru2I4%2B3fAHymf1i1dZLZkMStwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNEl4x8OGZRyfYCjlircAw7LOqfuUyuMYSWAmz%2B9ZNCaMRnCqlhze%2FF%2FlkIORvBs8GEprBFhI7pOJzpXbLI5Z%2F6k9AZkkNzOVx%2BodNBeY1kkoObr9bApOYsy8OZCvBpnBOm4kOMALV3dXJ9v4MFu3WgXnSm1AdhzSSM0g1GLX5iRz3tnMBUOgZMxjFPARUj0ZBIgRm9wtvdfdn2Zyq9IgU8AvIuGAsaKdv91m4SRJFvkNmyANWK9PUPechhDupakonV%2Bit7vo7O%2BIqtjlFpynfQSRk6l%2FNBC8elSh1Dt%2B9hiadM9SCY05hholMstCK%2Fd4z5n3SbiA6JAfDtwfUC15ml%2Bkeq0%2BLuEHTbYguESJecbBY6TybXufvU%2FsOem6KrFB7MLcdswT4VIqzyYdG5xUCIZIrvCaeUR0TYMVMauCvlaXejQAEkcxpyqbNRXxDrHCtOZy%2Fjv9%2FrFv8ipujNX5fzlcNY84x4TF4XoPaZdWP3sib9dTL1alurSCJpQlipDs5rOsSCFQIKdzS1VWAWqH8RKMLEKatL%2FnpyIBol4eKNrm0bB5hmp6FOSWVDEh1fYLj0rJmwPrLlEnUSIO72bEXW5CxukzS%2B6HJo%2Ffce0b7XsMDD9pG4MHd93rpUV%2BYGXxaZh5YZZh0kUsWPnMOHpiMoGOqUB7FvNnhu%2FCu4H%2FXQUCcQ2r3Mn7ds24rvn4Aqysg42kyQb%2BNaL1aipCTwg1LGgEA3fBidd4RVxPrTSuXX24J437poUg8nG1JngqOr4pi2orSmBY8%2FvdaSCjfGs7ipMQppFAsNAa0imWmkmxp75%2Bk39EOIZCvX1%2FS%2BLt5X4iDfvRvrevH26M5s1%2BgAZdG8OqIRpD9YaaDC9OEI6%2F5%2FB68cqEi6lCVGd&X-Amz-Signature=9b204d84ae18d245d869636346379730307779e15f696938723b911d4af0232b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
