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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR7CXJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzk2l1Il%2BAvjCHTVvTdHro%2FmxBLaflZ0UcuyHSR6o4wgIgGuGsvFr8OtvZO2ql%2FnsaclXDZ0BeqWNuFv8TiHhbnO8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLf3BuJa1H3pYDtykSrcAxIvLUBbhc%2Bjxu9CZ03nb29RZ%2FD%2FBBll3Mz7tExy70pSTPeUsSPiSCwEkVuoyiP1%2FQOD17j1p0HM8FA%2FVA7yxtTYJnUIV5JhluDyqWZIB1v5%2B9HzeSwwd8Z%2BrETVmUOpFF97aScDx3LJ8%2FBCcnwtgVMYSobbuejPQmWFQCBN859Ff8F%2Bn51CwhBAwn1BQ7galgXMUsO%2BahTa%2FSxZM8KPiAmxHeS8o%2B%2Fyuj6ogF6heoMKUlLl3nPIZzkLBMf0kv1pyBw7Qc0g473dyCJHkgrURlD0N5MMA3kHTL3eNyVCugnC61dDZ786I1kUz5XhYH40WQKDKAk%2FgiTTWo7QW0T4QIU1MWdcuf99bkjoCH%2BVQheWMvqh%2BW%2FABcM2vC98sAeiIlMldpY3qaER84F%2Fq3AnMs2iBraDnu%2BOHeyO5bOINyago8545AW0nnPbjKZN95w44MoLXvTiKb%2B9RRCvTyx2c7XROuMoaB6iGcpFMoYH0b%2Fw1KG27xh%2BDr0wYTzsmGVz2P5DgBKEWBoWaE2eubJlV4ImDYc4mbCVJDkdIRjUjouIXBz%2B0ZgGkg%2B763a8whel4GOZ4z%2BSu8luPah23kC5Fg4vURrdG3J2EuZd0rjnwZaZXJZ7IW32hsbrMYClML3GyskGOqUBpfFZDt27p4jMKp9XZzP9Y2YbiODEUYyuoNohDYYd6TQ5GFoR%2Fw25IlevWiVvhpy2wprwvy71%2BOttY1CmepmVhEbd03Y7rqPN65ELOTtp1a7YZ6m0RV6eEkQC8uoOR0uJt7YJKnr9PhVoVjc1rv4vU%2BFTlx0lNLIEyuiuGy5X8b0Y18fSCNERbSRINxIqtJzRAM8DhOLrUEJJZ8NAHEYeVYvwy%2BFh&X-Amz-Signature=b2bd49c9bcd9b0c96e73a167721f5f1c3731fe6dedfe037d20dcd97a87a2d894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR7CXJU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzk2l1Il%2BAvjCHTVvTdHro%2FmxBLaflZ0UcuyHSR6o4wgIgGuGsvFr8OtvZO2ql%2FnsaclXDZ0BeqWNuFv8TiHhbnO8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLf3BuJa1H3pYDtykSrcAxIvLUBbhc%2Bjxu9CZ03nb29RZ%2FD%2FBBll3Mz7tExy70pSTPeUsSPiSCwEkVuoyiP1%2FQOD17j1p0HM8FA%2FVA7yxtTYJnUIV5JhluDyqWZIB1v5%2B9HzeSwwd8Z%2BrETVmUOpFF97aScDx3LJ8%2FBCcnwtgVMYSobbuejPQmWFQCBN859Ff8F%2Bn51CwhBAwn1BQ7galgXMUsO%2BahTa%2FSxZM8KPiAmxHeS8o%2B%2Fyuj6ogF6heoMKUlLl3nPIZzkLBMf0kv1pyBw7Qc0g473dyCJHkgrURlD0N5MMA3kHTL3eNyVCugnC61dDZ786I1kUz5XhYH40WQKDKAk%2FgiTTWo7QW0T4QIU1MWdcuf99bkjoCH%2BVQheWMvqh%2BW%2FABcM2vC98sAeiIlMldpY3qaER84F%2Fq3AnMs2iBraDnu%2BOHeyO5bOINyago8545AW0nnPbjKZN95w44MoLXvTiKb%2B9RRCvTyx2c7XROuMoaB6iGcpFMoYH0b%2Fw1KG27xh%2BDr0wYTzsmGVz2P5DgBKEWBoWaE2eubJlV4ImDYc4mbCVJDkdIRjUjouIXBz%2B0ZgGkg%2B763a8whel4GOZ4z%2BSu8luPah23kC5Fg4vURrdG3J2EuZd0rjnwZaZXJZ7IW32hsbrMYClML3GyskGOqUBpfFZDt27p4jMKp9XZzP9Y2YbiODEUYyuoNohDYYd6TQ5GFoR%2Fw25IlevWiVvhpy2wprwvy71%2BOttY1CmepmVhEbd03Y7rqPN65ELOTtp1a7YZ6m0RV6eEkQC8uoOR0uJt7YJKnr9PhVoVjc1rv4vU%2BFTlx0lNLIEyuiuGy5X8b0Y18fSCNERbSRINxIqtJzRAM8DhOLrUEJJZ8NAHEYeVYvwy%2BFh&X-Amz-Signature=30a60fe50a601f738d9f68df02f9090881cdd1cfd5075942ace8184ab8c6e4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
