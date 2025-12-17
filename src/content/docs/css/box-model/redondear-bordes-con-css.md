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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOQ27VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg%2BvT61rn8%2FgZau943BGtjGpQ4nxAmoaeu5yJNZQBd7AiEA7rFfOxZLambNd0clyy%2FOIFgUwhUCA3602GQ%2BdzFqjSsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP4i1eA9FuJOIfb%2BbCrcA6aXDa2fd799flCoaZM%2BYg4GyYvE6TxBJ%2ByemNxOH5qAwaYeXBNnu4780FNCKKrJq1uvbr2anldAQC7pSYhpMkWoUnleQVXWNwT2o9N9bOO0wj4rrhPBdcZXXd0hToMDu%2FYpSNXLl4VCdD5t1K1rkjTkId4wI9iMIKbp8C90lvUuT%2BZpmgE3iZNzWJdRikqVbwea2QBpHjRFWGMvIf0xRXBPQmhEW1E5KAj8lbgVYS9sdbcHJ0dk4EJvZt0d3lPEtkWYYxow5Np2MSr%2BsRi6cHY3M4kHqtXIR425M2C2X0GsWD3qAvBf2kcQe7MzMdJr0Q7rT7IBeBDLFWUm449dRlKRwB0z5g1MyWCcSjsq7TB83blX21qbh4hb3RNWv5Mk0O3lghrei98uqL306W1fcy%2F%2Bm2F%2BYu7htJjkVpK6FpjXN9w7rtM2odx8DqU1qHjworIBoPoGwuQlRkNRHdFYJYANY5QzFf2VVX9q%2B%2FOEX5A9%2BKnYgtL9zNIxj2a445t38YHMiI9gV0jKgJBDPczuy9xrWsZCky64F6PsTcMjhHHW2xmMvzV5HpC7YHIIPAE%2Bl4b1yzDNvhpXsHSBPS3%2FQAGPHIhfoqF3GaeLAUbzbfUX6OR4X4XGnuxJlRZXMO7wicoGOqUBmVTR4hBZElduAlEVnpXw2bM4TrFPySFdSc1uLzY6UDh5%2FbsNFlVfm1OYEkH0qDNbyllYl7LyHnyJs2npBNtKufLRXvuw3lriGfGdHimJHzb0gDD36vfXeWqLaqreQf0M1qzMoIur76fFBFv3X3Y7eCJfyNSk3SwMfK0HG79W0RMByCqyHw6aFFrSpbYCE6txq1Yd8yOrntijjDRoXR56M4%2F1t5wH&X-Amz-Signature=c2b611eb33c95983165874dea638e5a041453a0eea607933a352e14a72360c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOQ27VB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg%2BvT61rn8%2FgZau943BGtjGpQ4nxAmoaeu5yJNZQBd7AiEA7rFfOxZLambNd0clyy%2FOIFgUwhUCA3602GQ%2BdzFqjSsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP4i1eA9FuJOIfb%2BbCrcA6aXDa2fd799flCoaZM%2BYg4GyYvE6TxBJ%2ByemNxOH5qAwaYeXBNnu4780FNCKKrJq1uvbr2anldAQC7pSYhpMkWoUnleQVXWNwT2o9N9bOO0wj4rrhPBdcZXXd0hToMDu%2FYpSNXLl4VCdD5t1K1rkjTkId4wI9iMIKbp8C90lvUuT%2BZpmgE3iZNzWJdRikqVbwea2QBpHjRFWGMvIf0xRXBPQmhEW1E5KAj8lbgVYS9sdbcHJ0dk4EJvZt0d3lPEtkWYYxow5Np2MSr%2BsRi6cHY3M4kHqtXIR425M2C2X0GsWD3qAvBf2kcQe7MzMdJr0Q7rT7IBeBDLFWUm449dRlKRwB0z5g1MyWCcSjsq7TB83blX21qbh4hb3RNWv5Mk0O3lghrei98uqL306W1fcy%2F%2Bm2F%2BYu7htJjkVpK6FpjXN9w7rtM2odx8DqU1qHjworIBoPoGwuQlRkNRHdFYJYANY5QzFf2VVX9q%2B%2FOEX5A9%2BKnYgtL9zNIxj2a445t38YHMiI9gV0jKgJBDPczuy9xrWsZCky64F6PsTcMjhHHW2xmMvzV5HpC7YHIIPAE%2Bl4b1yzDNvhpXsHSBPS3%2FQAGPHIhfoqF3GaeLAUbzbfUX6OR4X4XGnuxJlRZXMO7wicoGOqUBmVTR4hBZElduAlEVnpXw2bM4TrFPySFdSc1uLzY6UDh5%2FbsNFlVfm1OYEkH0qDNbyllYl7LyHnyJs2npBNtKufLRXvuw3lriGfGdHimJHzb0gDD36vfXeWqLaqreQf0M1qzMoIur76fFBFv3X3Y7eCJfyNSk3SwMfK0HG79W0RMByCqyHw6aFFrSpbYCE6txq1Yd8yOrntijjDRoXR56M4%2F1t5wH&X-Amz-Signature=f7b11389b642b6b912e3e8b09c31a5541b6c0820ddfaecdb74b0fd634162cca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
