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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4DN3FR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2Bwb8MYsaACVaeZmAtQzMBClm%2FIsyjtXsjrnaCYiDVgIhAMqDDLHAIqsRDjMv6sYE%2BhluB5pptObQs5ww%2Bnn1kQgqKv8DCHcQABoMNjM3NDIzMTgzODA1Igy7sZXd7c9cdetJQmsq3ANkW3oQNjCL4QzJn4B886llyVy%2B5NzwhaJbDPtUe2URl7wcTYGYZMaQdqxFYsm1WDvs%2Fgo4dIYCFQknqSNIzMKM1zcMKDZQCyPY3CmCcOPeSeX9hevO4o6tfoIJupwYHx1f%2BUfdiJenpct9qd45wO1e7iwctMjaZ8ayncRc4F99uTRL1C2S3KUlZYs3LvWyxxNJVuXJ5c9FU7RiBeIAElQt5ob8TIKAUrKHZlj%2BLB55UTv70Yp%2F8b7mO5GNR2EjbSCE%2FgeXLTo5hBGyru%2FHLDuOBg2L8k7d5fY0WkowoQerLlpMusefd8nl0bSN%2B6hwneOBFl7avxNtBa3LxNu2QDf3Q7xjgp2eukc7jzQUPhD9C%2FJfmELtMgm7Y55oyg7%2FH9aXxCi4jLScOlITi25wF%2B76%2BkHm1vYFX7VZm8XGrJpU9YNaSgLJJe6c7lfkF3L%2BfFoNIDKs0bGU89rHCw5LJ4A6IeJlGp049FLbpn8D1zgM51NWVG8AVkAu9mk0%2Bfp1ISaDjYMCQ07o77RvZj5N%2FU2YuoccQ1isT7XtuedPdu2bPOJY2g03UaDAroN80l0ViR%2BW0FO4qd7hNkhFSifiDSJQeag2q4w%2B7p878BGKyRq5lXsJVIpMOoEHT7OfoDCCg4nKBjqkAaHIIC%2BVMBCApf7VMY%2FmMzg4NIO%2BG9PnqAqJ3VgKFBVdo3Kh5mS7HDnrvJJTOSN1B%2BOVDkrLPmxX1UJBkhSzLlNr0rOjEpEvayZI41TEa%2FkDCimsccwt5PXm8P2EmdjrQWoYs9RhsU2pjkH8jiqpSan9Gi3uFzHrVVjSJhR1rhSRdgK48V5Ke6PvlHvGDs9lI%2FQl7lmn41mFLMwdKfNmgvO0ESDs&X-Amz-Signature=e5469014d9de1f14fac25077ec7c2a538dbd0f8bfb74b01c665615826c351634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4DN3FR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2Bwb8MYsaACVaeZmAtQzMBClm%2FIsyjtXsjrnaCYiDVgIhAMqDDLHAIqsRDjMv6sYE%2BhluB5pptObQs5ww%2Bnn1kQgqKv8DCHcQABoMNjM3NDIzMTgzODA1Igy7sZXd7c9cdetJQmsq3ANkW3oQNjCL4QzJn4B886llyVy%2B5NzwhaJbDPtUe2URl7wcTYGYZMaQdqxFYsm1WDvs%2Fgo4dIYCFQknqSNIzMKM1zcMKDZQCyPY3CmCcOPeSeX9hevO4o6tfoIJupwYHx1f%2BUfdiJenpct9qd45wO1e7iwctMjaZ8ayncRc4F99uTRL1C2S3KUlZYs3LvWyxxNJVuXJ5c9FU7RiBeIAElQt5ob8TIKAUrKHZlj%2BLB55UTv70Yp%2F8b7mO5GNR2EjbSCE%2FgeXLTo5hBGyru%2FHLDuOBg2L8k7d5fY0WkowoQerLlpMusefd8nl0bSN%2B6hwneOBFl7avxNtBa3LxNu2QDf3Q7xjgp2eukc7jzQUPhD9C%2FJfmELtMgm7Y55oyg7%2FH9aXxCi4jLScOlITi25wF%2B76%2BkHm1vYFX7VZm8XGrJpU9YNaSgLJJe6c7lfkF3L%2BfFoNIDKs0bGU89rHCw5LJ4A6IeJlGp049FLbpn8D1zgM51NWVG8AVkAu9mk0%2Bfp1ISaDjYMCQ07o77RvZj5N%2FU2YuoccQ1isT7XtuedPdu2bPOJY2g03UaDAroN80l0ViR%2BW0FO4qd7hNkhFSifiDSJQeag2q4w%2B7p878BGKyRq5lXsJVIpMOoEHT7OfoDCCg4nKBjqkAaHIIC%2BVMBCApf7VMY%2FmMzg4NIO%2BG9PnqAqJ3VgKFBVdo3Kh5mS7HDnrvJJTOSN1B%2BOVDkrLPmxX1UJBkhSzLlNr0rOjEpEvayZI41TEa%2FkDCimsccwt5PXm8P2EmdjrQWoYs9RhsU2pjkH8jiqpSan9Gi3uFzHrVVjSJhR1rhSRdgK48V5Ke6PvlHvGDs9lI%2FQl7lmn41mFLMwdKfNmgvO0ESDs&X-Amz-Signature=09460e7497c928ec61d4acd7c012a946572c9d33a6fbb97ac9bd4c039ff03da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
