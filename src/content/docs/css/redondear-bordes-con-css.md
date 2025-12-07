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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNWRKEM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2QLUuNRpUiWibUcfgf5WLiFFA7Z2qsPVdXercxBUdpAiBWyd0fI4lO3PmsCYgHLnbJQ77rcQxymv2Ro5RslcpiASqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3mc5tsPoSEqKGML2KtwDCxIQfHeDAcSRVDhzkf1BSD%2FjubFXBAhD7WeLG2AFF3IEzFtKSKsxa4rvlnVBgjHSAZysW7iCpTxd%2FBU6nFDg397VNTmQ3OrIbf%2Fl6PLq36PZmUjUdZ7H1krjBz%2BjXXmPpx8eGIqlC6agIrUxe0w5teyHVHSHXXLUojJqvBLmviuXfoJZSh5Pqjpw5ZKzPwYsTv7G%2FUE3an8SlIdIBz3BTuLHfma45Zpnf3mdBWg4elcnhO%2BAh6OWtedtXhJoqWOmzOydU6Bgm%2F1gXsGwnzaeB%2BrBBYyHomPUIlbBSCDwvHJly2oE7GMkBRphJOWgjFs6ZjK0rl8y7UHFJqW8IgLHWg3%2FZjclYCDOc4dSAhRDuA77L2LMAIfTrruZQRBAQ2pLKDUs7p2R7AFZchj%2B3yB2Oeq0KA%2F4DE5VLRc%2B1Y0yrMdN8%2Bj8WL6HU%2B6mxH%2BPAwIoQj57FrvmdDRDHKMEUm2%2B62U5UxYV076txPUNLkNBTV4NWUrbgggRU8GHeHgidmvSEA0uPtoYQenqr2a90ClS%2FVvTQRRUh5EYonqr5WKOC2hD1BQSYvtM23hxQ1gcBx642aoNu2BLBds2ZzIJjFKVvHnTgJ%2FB75JAY1CdDooZVoAj%2BROFTyx9RCvweqcwmprUyQY6pgHwyXMxaZzx5p6JHs13ci6xBzvDVFnIzO7U3wfU9pPWxXyDjstcdkx999Jq3ayCe9LH0ddUy5ug%2Bjvg95qTCkWAvPJpGRRne6KvXueCoA18xxhb8H%2F7OCOWErUK9NE3i80aRRzBztJge9BEUXoxQEw%2BTIeUEeEnQZQdYRIeALSRLLaNTQsubkB%2Bwdg%2BmKli4r2UpG1Bgr8lOuZWxvB5lo0GT9by7WLe&X-Amz-Signature=7924aea07d8df3c46ebb8fe253dec92a1a11b6049d1f2db2be3fe0c7433f71ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNWRKEM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2QLUuNRpUiWibUcfgf5WLiFFA7Z2qsPVdXercxBUdpAiBWyd0fI4lO3PmsCYgHLnbJQ77rcQxymv2Ro5RslcpiASqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3mc5tsPoSEqKGML2KtwDCxIQfHeDAcSRVDhzkf1BSD%2FjubFXBAhD7WeLG2AFF3IEzFtKSKsxa4rvlnVBgjHSAZysW7iCpTxd%2FBU6nFDg397VNTmQ3OrIbf%2Fl6PLq36PZmUjUdZ7H1krjBz%2BjXXmPpx8eGIqlC6agIrUxe0w5teyHVHSHXXLUojJqvBLmviuXfoJZSh5Pqjpw5ZKzPwYsTv7G%2FUE3an8SlIdIBz3BTuLHfma45Zpnf3mdBWg4elcnhO%2BAh6OWtedtXhJoqWOmzOydU6Bgm%2F1gXsGwnzaeB%2BrBBYyHomPUIlbBSCDwvHJly2oE7GMkBRphJOWgjFs6ZjK0rl8y7UHFJqW8IgLHWg3%2FZjclYCDOc4dSAhRDuA77L2LMAIfTrruZQRBAQ2pLKDUs7p2R7AFZchj%2B3yB2Oeq0KA%2F4DE5VLRc%2B1Y0yrMdN8%2Bj8WL6HU%2B6mxH%2BPAwIoQj57FrvmdDRDHKMEUm2%2B62U5UxYV076txPUNLkNBTV4NWUrbgggRU8GHeHgidmvSEA0uPtoYQenqr2a90ClS%2FVvTQRRUh5EYonqr5WKOC2hD1BQSYvtM23hxQ1gcBx642aoNu2BLBds2ZzIJjFKVvHnTgJ%2FB75JAY1CdDooZVoAj%2BROFTyx9RCvweqcwmprUyQY6pgHwyXMxaZzx5p6JHs13ci6xBzvDVFnIzO7U3wfU9pPWxXyDjstcdkx999Jq3ayCe9LH0ddUy5ug%2Bjvg95qTCkWAvPJpGRRne6KvXueCoA18xxhb8H%2F7OCOWErUK9NE3i80aRRzBztJge9BEUXoxQEw%2BTIeUEeEnQZQdYRIeALSRLLaNTQsubkB%2Bwdg%2BmKli4r2UpG1Bgr8lOuZWxvB5lo0GT9by7WLe&X-Amz-Signature=d6085be4bfedf58d9db6046078e9dfaa341507cbfd61e7b92fd9f58367ff27ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
