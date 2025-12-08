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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76ND6AY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzkZFqGtbTv7bvIalw5Imw77fHAx4tUgsXJrHRgPOg8wIgLvikzXG%2BhVFFCyTC61Wj1rc4QJr3dqw21yuFIgbovMsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVg2ygVKeAfQIUlYircAw7zpMlVwP2OquM9gXgDaKGdpLlfUTqox2%2Bg9p4yAb88jfCm3Dw0LtNbQk5crvyFnOwWWorLY%2FJospSWEy1lbUeto%2FstMIMcI6is91idTCG4IGtd5W32PQpYNq8OJrMxp6pqEvWFl0NTWx7ZOvvlqatpf8PVXyP%2BSMfaxdBqhWlbFQ5S31g%2BJ9UoYT1I6DZG0VVV3Vw2b6bT4erz06bHuxux%2FzoClF3QXK5rJ0B7tdqrQzD2FMtlCCbsBDIGtL2Di9UApz3Y%2BxR%2BzctU76BBwOtboMwVk9Q9iBLjYkkxVHnfBVA9J3YSUw47HCtsmxHvn42JQcu5cFEI3wBg6vrzIcWe8OXn8o7SqVzDnbl81K0%2FCH1LMAhnxcMIaDwb%2FYoR07cxmtdOGjiTuwwQfj0D2zITwMvQV4y0vqMsdHFD92nnfOi3ikcVaDcDbwgalXbNHP%2B0Jo6DcABvmmXl5Ro%2FxYBH%2FKpRJKiDQmvPgNEA7vPayUmj1ollxO8dvER2HcyW5mMRnaku0Tbh9yYNXtnBMXk6siusfubTNkfmbAAdGFw6brWo76k1l3xQoWLrcOkh7pQBnS%2F%2Fgr67ACOFv76oYf6Y846MXZYFJV7Yy0V2gRVhMVukjZ%2BoOFy8ZrRPMM%2Ft2ckGOqUBlgjg8BtJtCJx9WfPFThE3Y8FFgfWM5rW5a4ykQ45gjhR5llowO0D5zqemfHicEemEFBkbxC5JW3d8Xd429mS3I7BCE6CB4LDER%2B3GzTX2GxGtY5vXQ8P%2F5i8pLOM8RQV9LY8Nj9Ci%2Been47j4Z2zP4ULlhU%2FFd25awNtKJ2ZW6E7CguJ8CK7kJrp8aMHdEiFmbrFOzAsx3ledc5uJwS5IPVZ0eGM&X-Amz-Signature=47fbb54247ea2f462a08d620f7fdd47493fe3dfa50318f4490856557bb9ae020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76ND6AY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzkZFqGtbTv7bvIalw5Imw77fHAx4tUgsXJrHRgPOg8wIgLvikzXG%2BhVFFCyTC61Wj1rc4QJr3dqw21yuFIgbovMsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVg2ygVKeAfQIUlYircAw7zpMlVwP2OquM9gXgDaKGdpLlfUTqox2%2Bg9p4yAb88jfCm3Dw0LtNbQk5crvyFnOwWWorLY%2FJospSWEy1lbUeto%2FstMIMcI6is91idTCG4IGtd5W32PQpYNq8OJrMxp6pqEvWFl0NTWx7ZOvvlqatpf8PVXyP%2BSMfaxdBqhWlbFQ5S31g%2BJ9UoYT1I6DZG0VVV3Vw2b6bT4erz06bHuxux%2FzoClF3QXK5rJ0B7tdqrQzD2FMtlCCbsBDIGtL2Di9UApz3Y%2BxR%2BzctU76BBwOtboMwVk9Q9iBLjYkkxVHnfBVA9J3YSUw47HCtsmxHvn42JQcu5cFEI3wBg6vrzIcWe8OXn8o7SqVzDnbl81K0%2FCH1LMAhnxcMIaDwb%2FYoR07cxmtdOGjiTuwwQfj0D2zITwMvQV4y0vqMsdHFD92nnfOi3ikcVaDcDbwgalXbNHP%2B0Jo6DcABvmmXl5Ro%2FxYBH%2FKpRJKiDQmvPgNEA7vPayUmj1ollxO8dvER2HcyW5mMRnaku0Tbh9yYNXtnBMXk6siusfubTNkfmbAAdGFw6brWo76k1l3xQoWLrcOkh7pQBnS%2F%2Fgr67ACOFv76oYf6Y846MXZYFJV7Yy0V2gRVhMVukjZ%2BoOFy8ZrRPMM%2Ft2ckGOqUBlgjg8BtJtCJx9WfPFThE3Y8FFgfWM5rW5a4ykQ45gjhR5llowO0D5zqemfHicEemEFBkbxC5JW3d8Xd429mS3I7BCE6CB4LDER%2B3GzTX2GxGtY5vXQ8P%2F5i8pLOM8RQV9LY8Nj9Ci%2Been47j4Z2zP4ULlhU%2FFd25awNtKJ2ZW6E7CguJ8CK7kJrp8aMHdEiFmbrFOzAsx3ledc5uJwS5IPVZ0eGM&X-Amz-Signature=f8e7ee9ccd18ea2be489c116cca57ac28d2307d456682f62a3212ec994c5f87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
