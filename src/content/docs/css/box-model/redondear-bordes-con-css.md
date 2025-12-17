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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5R25BQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7GCTaKz3RrWqYU7KuRIYPh6U2wzodFmiY1q2QKeMmwAiEAuRGnu0Kc1FGU1AeMO2of%2Fp%2B15gTdhW2YkUCO4CBbfS0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTu9Mfd1BkpSicBnircA2uhJu9RQAe4WFVp%2FbeHfXwoVWTw5gDv%2F4%2Fdumxo1fPy%2BR1J3OsiGXAkLy9I7OI7DTv8%2BSyIdlh%2BKfyr2VHikeixbAcXJLkgxqaKAUPcRwLIPXb7WM0P5XTZKSMXVMM9MoBRBPtxTUy5M1deOlgmEI7Q5cD4mW0bilMLsm%2BM32v0dyAqykFRQQNEIuibAqeXJyj0KAY4D3o8Cd4DY%2BHF65Q1pMtLujkpeLloAa5V%2F5COssQqpuZA02o7KqOL1aSLsK098tKtFFtp2uYOQw008x4j0UO6xo4PYRWNxD5JacZoKjJce6Xi0du8wZYYFFn%2FGKWBWVZwN11frFXGHJKpEqyIP8FJqBRWCd5VhCDmdmmn6GsFARZackwhiHIJi4zVx3CQc3B8I%2F8T%2FpNN%2FgKjwfXyW%2B11NL6hKFhjwlV37aKuQtBTUhDUx3lyf%2BqP7XcnUiPUwI%2BRhY8Rzcix4FFRNusf1FXa2nKVIRjw1dENqnB8K8qYxypA0EOLkOCMgcVeEHrkYmG1m3iRotTBkSRVARSIAZ%2Bglyg7LBgRcHK7oYMA%2FjEPjHIWBOy6k%2FaM%2FzrQQTaQDbGUNzHELqvXEJsThLw4tt%2BMPLfb36cevX06MTOYurT3D8%2FIEG%2BhU1z3MJvPiMoGOqUBQbf6BBvuUQhv9z2XAAOYex443hB0d2kFdc2R9RvvB1BWJo6P1b9c5XoyCBugzxvJpgQ7ZqWWBSf%2B8%2BK6yxuAMephYESIgAzP%2BCcruiUhEtQQVR7Ft3SxbNApZX4opgBSEGgtLDRo0JwYLC%2FgeGeVCFDEsqs7WFFdNXjWcOEbPJUChseduKTxCCsgQGpYf1ZDFtjpyxUQGt3EpAnIkizCYQFi%2BfF5&X-Amz-Signature=63e679a118d42a5d69b66df4ecb203823b2969107846cc71e68dd846979d88f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5R25BQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7GCTaKz3RrWqYU7KuRIYPh6U2wzodFmiY1q2QKeMmwAiEAuRGnu0Kc1FGU1AeMO2of%2Fp%2B15gTdhW2YkUCO4CBbfS0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTu9Mfd1BkpSicBnircA2uhJu9RQAe4WFVp%2FbeHfXwoVWTw5gDv%2F4%2Fdumxo1fPy%2BR1J3OsiGXAkLy9I7OI7DTv8%2BSyIdlh%2BKfyr2VHikeixbAcXJLkgxqaKAUPcRwLIPXb7WM0P5XTZKSMXVMM9MoBRBPtxTUy5M1deOlgmEI7Q5cD4mW0bilMLsm%2BM32v0dyAqykFRQQNEIuibAqeXJyj0KAY4D3o8Cd4DY%2BHF65Q1pMtLujkpeLloAa5V%2F5COssQqpuZA02o7KqOL1aSLsK098tKtFFtp2uYOQw008x4j0UO6xo4PYRWNxD5JacZoKjJce6Xi0du8wZYYFFn%2FGKWBWVZwN11frFXGHJKpEqyIP8FJqBRWCd5VhCDmdmmn6GsFARZackwhiHIJi4zVx3CQc3B8I%2F8T%2FpNN%2FgKjwfXyW%2B11NL6hKFhjwlV37aKuQtBTUhDUx3lyf%2BqP7XcnUiPUwI%2BRhY8Rzcix4FFRNusf1FXa2nKVIRjw1dENqnB8K8qYxypA0EOLkOCMgcVeEHrkYmG1m3iRotTBkSRVARSIAZ%2Bglyg7LBgRcHK7oYMA%2FjEPjHIWBOy6k%2FaM%2FzrQQTaQDbGUNzHELqvXEJsThLw4tt%2BMPLfb36cevX06MTOYurT3D8%2FIEG%2BhU1z3MJvPiMoGOqUBQbf6BBvuUQhv9z2XAAOYex443hB0d2kFdc2R9RvvB1BWJo6P1b9c5XoyCBugzxvJpgQ7ZqWWBSf%2B8%2BK6yxuAMephYESIgAzP%2BCcruiUhEtQQVR7Ft3SxbNApZX4opgBSEGgtLDRo0JwYLC%2FgeGeVCFDEsqs7WFFdNXjWcOEbPJUChseduKTxCCsgQGpYf1ZDFtjpyxUQGt3EpAnIkizCYQFi%2BfF5&X-Amz-Signature=0cae2588cc9b23b509e812e9c804db1aa939a4bbdd6507a2b365911769685c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
