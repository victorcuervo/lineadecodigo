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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDZE6DH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WLdfr9wTCBfwK7rLmH0MwhKSXGchtx8sD7DG36fTfwIgGAFeYjoOGM8y753T3N0PLtSnLRdrEpNWhlNXKvcMwAgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDF%2FPypnSIEbf7XYuuSrcA%2F6T9UtrKocS0JOfsagLbXWJGTcgSH0KECPmvkIe%2FQLL7ZcywCEIUtBY%2B4o6ryj9gJoyYGUWi29xa6B7196lXqHYrrFWMQr3kCu83NHsNnwj77%2Ff8Bf97nG9V1ote7DFHcbdjSz%2FupnSgHwPLeVvQ%2FSIHdTP%2B0zJ%2Bd2B84JSYOYiH29hYKyHcllkFTL2x%2FDFg2vgVtweJBlGNHxTKxp%2BV8qEnnKmfqOKdE264Vm0cUenKoOpjCgmMyqMALGCB%2FIn3wrvRa0s0R1xPXN3ybD9AoSRsBviAR3%2F2SNgFoObYAuCjKfsKXutC8g9Llqe9A%2FDX%2BrZv%2F%2B15iEsbOhQdkI%2Bqbm%2FKEa7fHiFjShpKqJEqJK0s1rEcIAiRt3071803WjNweB8mcARcl09hlnUy8vdEWEtdaJ7p4j5TaNPScPR9RQG6MQwOwFzF6Hkg1qtkGbDEz%2BuidFTCB1MMigDSYI0OUM88HsooazcJhF3zKBhfUM8Lvi8E1tGohRYF5HCO%2BWgaJsPAbue4ZMdeUZh3k2gVtU2FYE9JyDJrz2aqm9uI1a0S51w%2Ba9im3qR85i8l%2FiDs1iWQ868UOhG887EZIYqNSKcszJnC%2F1kcWR%2BeznjdFHUHeMBG2vdW%2B2XaIh4MKOziMoGOqUBVLvh278ODwpxHhmlVY35lEeb2tgsHbGaHQAOGFdiqI9l6PZOWHveJUiahy9%2BC5PhkMHHJRksCn93o04sebQgVoslc7Hhs95itzUlcc7Mg2%2FhG%2BpeBGhzilZeHIooKQWycX0tckin2V5hc4rxw0qFRg4KHy4OdQMI42E32x4I4EAqLDVE2MJEK3hisUWsWcnUheNwoWubLhGoxtXoITnsDNHrf4Pq&X-Amz-Signature=6b58399079592bf9190c93309495fb4baf52a47f26bbaf213794b54d07283c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDZE6DH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WLdfr9wTCBfwK7rLmH0MwhKSXGchtx8sD7DG36fTfwIgGAFeYjoOGM8y753T3N0PLtSnLRdrEpNWhlNXKvcMwAgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDF%2FPypnSIEbf7XYuuSrcA%2F6T9UtrKocS0JOfsagLbXWJGTcgSH0KECPmvkIe%2FQLL7ZcywCEIUtBY%2B4o6ryj9gJoyYGUWi29xa6B7196lXqHYrrFWMQr3kCu83NHsNnwj77%2Ff8Bf97nG9V1ote7DFHcbdjSz%2FupnSgHwPLeVvQ%2FSIHdTP%2B0zJ%2Bd2B84JSYOYiH29hYKyHcllkFTL2x%2FDFg2vgVtweJBlGNHxTKxp%2BV8qEnnKmfqOKdE264Vm0cUenKoOpjCgmMyqMALGCB%2FIn3wrvRa0s0R1xPXN3ybD9AoSRsBviAR3%2F2SNgFoObYAuCjKfsKXutC8g9Llqe9A%2FDX%2BrZv%2F%2B15iEsbOhQdkI%2Bqbm%2FKEa7fHiFjShpKqJEqJK0s1rEcIAiRt3071803WjNweB8mcARcl09hlnUy8vdEWEtdaJ7p4j5TaNPScPR9RQG6MQwOwFzF6Hkg1qtkGbDEz%2BuidFTCB1MMigDSYI0OUM88HsooazcJhF3zKBhfUM8Lvi8E1tGohRYF5HCO%2BWgaJsPAbue4ZMdeUZh3k2gVtU2FYE9JyDJrz2aqm9uI1a0S51w%2Ba9im3qR85i8l%2FiDs1iWQ868UOhG887EZIYqNSKcszJnC%2F1kcWR%2BeznjdFHUHeMBG2vdW%2B2XaIh4MKOziMoGOqUBVLvh278ODwpxHhmlVY35lEeb2tgsHbGaHQAOGFdiqI9l6PZOWHveJUiahy9%2BC5PhkMHHJRksCn93o04sebQgVoslc7Hhs95itzUlcc7Mg2%2FhG%2BpeBGhzilZeHIooKQWycX0tckin2V5hc4rxw0qFRg4KHy4OdQMI42E32x4I4EAqLDVE2MJEK3hisUWsWcnUheNwoWubLhGoxtXoITnsDNHrf4Pq&X-Amz-Signature=fcf95f918780f7bcf721665ae9d5a30b26b00f0fe029471c0d210c3bb56e7dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
