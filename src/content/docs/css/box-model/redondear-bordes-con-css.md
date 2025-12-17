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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVL3KXRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOJ4dx8p6jykSYfQDh8OZkA2R4zIihYufD4csBEpsjjAIgUnqClswtNz%2FysxnwGbqtg2WZRy60nCb3wVW8cx2iaBUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBGp62qefq5F23AggSrcA%2BVf0dwFkluWkooLhdnpxrZdePUGmwPaCGm3ffAh2TrzGxrz7Nn6nYkbvOmaMBTbz3MwwvvP3sQ2r1AdTn2JUtPahfTSJF2p%2FLSbxLZ6As2itH7DVg1m2y%2BdbzUsh19zvFOSjkuu4%2FbO2NABdGwbaLfAXosvmFkFAnGVgictgkHUdfM4of1Ml%2FPTosAguBvqyPY%2F80e1hGGu0Pa4KIkLbJvBC3tdSE9w1k8g4Ai2%2B%2Blb5E7PSVgJzq%2F8M4lXozHF5saZcr70x%2BwVmmyz1IghyRza734fYinRAk3zS2YJfLzWLnTrnmB0aTZG7RRR%2BGfryPPePltHcjPhz736FJi3EkOlZhoakce8aBtuyAr9UlNNmcwuluPCRg1w7g4KMJ3w1L49jD%2FOHsgsEBCeFKYea%2Fl7g0%2BuODsHcssQ5%2B9w1nEsaFRI8%2BWCZGW5x7uJKEeZJ%2FIkenfhGLDtp9uLlwBXg4DxnfZkx%2FiEYn3LgP17EdQx3fRG9l5oTUDCMhYPXAq85qYZuRbJRvrUCNK2nl897el3zhjh1b3BuwANuCPZ72GjQ9D0QY91x2BgizL2t9liwGbPAo%2FMkQdtAh5ygHc8TMWVBkBVBsiqFb%2FSIMgEOZRr%2FUi3O9lYHhSJ37tVMJ%2B4icoGOqUBkUF8IXkrn9XQ3p4s5kcHXuj5RJGaYJHz5qi90OTlKdqvkejxx072%2BZs8nrK7pDSeTcPgJKgui9OhWrcmj2l9VVZ5zLVtUmZDDm1eoGOlmwFD1290LPTvCQg8bE8n%2F7H%2F8SFHVztTBnIl2GjvKmZHdahQDHg%2BlcJTxpN7SwTsAVv8QTdmnQXhfgoaO6GrPPRuNlBUKQzOr4hE51t4lgMVgv9UXcME&X-Amz-Signature=7899d8647f0447ec1956ba298f88de1f0c9d2e5fbb5e384f0026b75583a8e9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVL3KXRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOJ4dx8p6jykSYfQDh8OZkA2R4zIihYufD4csBEpsjjAIgUnqClswtNz%2FysxnwGbqtg2WZRy60nCb3wVW8cx2iaBUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBGp62qefq5F23AggSrcA%2BVf0dwFkluWkooLhdnpxrZdePUGmwPaCGm3ffAh2TrzGxrz7Nn6nYkbvOmaMBTbz3MwwvvP3sQ2r1AdTn2JUtPahfTSJF2p%2FLSbxLZ6As2itH7DVg1m2y%2BdbzUsh19zvFOSjkuu4%2FbO2NABdGwbaLfAXosvmFkFAnGVgictgkHUdfM4of1Ml%2FPTosAguBvqyPY%2F80e1hGGu0Pa4KIkLbJvBC3tdSE9w1k8g4Ai2%2B%2Blb5E7PSVgJzq%2F8M4lXozHF5saZcr70x%2BwVmmyz1IghyRza734fYinRAk3zS2YJfLzWLnTrnmB0aTZG7RRR%2BGfryPPePltHcjPhz736FJi3EkOlZhoakce8aBtuyAr9UlNNmcwuluPCRg1w7g4KMJ3w1L49jD%2FOHsgsEBCeFKYea%2Fl7g0%2BuODsHcssQ5%2B9w1nEsaFRI8%2BWCZGW5x7uJKEeZJ%2FIkenfhGLDtp9uLlwBXg4DxnfZkx%2FiEYn3LgP17EdQx3fRG9l5oTUDCMhYPXAq85qYZuRbJRvrUCNK2nl897el3zhjh1b3BuwANuCPZ72GjQ9D0QY91x2BgizL2t9liwGbPAo%2FMkQdtAh5ygHc8TMWVBkBVBsiqFb%2FSIMgEOZRr%2FUi3O9lYHhSJ37tVMJ%2B4icoGOqUBkUF8IXkrn9XQ3p4s5kcHXuj5RJGaYJHz5qi90OTlKdqvkejxx072%2BZs8nrK7pDSeTcPgJKgui9OhWrcmj2l9VVZ5zLVtUmZDDm1eoGOlmwFD1290LPTvCQg8bE8n%2F7H%2F8SFHVztTBnIl2GjvKmZHdahQDHg%2BlcJTxpN7SwTsAVv8QTdmnQXhfgoaO6GrPPRuNlBUKQzOr4hE51t4lgMVgv9UXcME&X-Amz-Signature=3a51f4ee2c5eaef6fb1c013038a9e1f05c809e13f03ef068a5999f44bef84fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
