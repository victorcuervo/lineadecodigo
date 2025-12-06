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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7OM6DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBf%2FaJ5qaDDFAQiqtfzElOG3rJnIYnCmjJyaMbkXstJnAiAsH0abvDQeeHFBzC5Z20UXykLOgjRLr5Y4GwPDhC38NSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMt4Y0mzi2DUEmBbPpKtwD0kJjnL9J%2FEeGn4dny0Dy%2FYk8dOAisb%2BLgi3x%2FvtVoLhl1T27twwRRzWHq9UqTEzpF3bCfAvESDQZkUJ8CO3V7E2eiwW3rdUzVnTI5FrGvl5ZK4VLM7x1uOssWWptFcmHrsFvj9dZXCuc7EFhddKcaki7En6xgydQB7KhhUmu8LnuZIgVb4SccbNgRECvU6n9a7oA3HuXe00ovdP%2FpmTFjnI9pheI3%2FCSKmogFQHF2BwKo%2FHlyzPMLj6QCS%2BcMedHonYHhMyDlqUaXsmthfuZKT%2FWejZe%2FkBxO%2FWNj7OL%2F7rZkNsJlRDKl9sRkHr5Mp%2BipANPjkTr6X1Bvv%2Fa1r2xiZlErp2v1gh3rs4PMhK77jl41OKAZG8eBT0fk%2F0CwQwvbgEAodA0POCNqphyyoHDyrSvTv7lu2LEU74YWpn0XsAeUhohMchiJPHC%2Fs3uzeoqBDJXzKmQ5EIMOYsbdtoL%2BgIrk360jE0RQmwhdzdXK2G58eyqZ6evWERsFs1F6hqoh%2FWDP4oRG9%2F3xpumImjU02RT3BwDfTo3LT2JBvqKcTPAFgCseI%2B0zN79NUOTPefEVP3pwH5vQg11nwWF1RuwpdZ7uhHQRmyGiZR%2BMq6a7QGfj8DELXRXQxSeuZ8wlrzPyQY6pgHwT31UYe968LhnWlRMUHIlnLvyWxZk%2FFlvb%2Bij4ABP5%2BDbluQJng%2F9Z%2FIzkDaSQ2o4kspO0R8FKOPZEpm7eYyONHZtvStdB86LcRabAEu%2FJ8YD8fPUT2D12V5gBGGNfkLfyaVHVAZH8yWgW%2FImNAsNNx2GLpILtag0LqeXggMFHWZHWkBIfMJjHqygafhEiHGMI6KxZ3f6Jv9yLE9tJMmLEjwa6TwC&X-Amz-Signature=2b575cff801099b96ab9582741dadf6b2ca028753d1ba7660631ffa0a2e61c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7OM6DG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBf%2FaJ5qaDDFAQiqtfzElOG3rJnIYnCmjJyaMbkXstJnAiAsH0abvDQeeHFBzC5Z20UXykLOgjRLr5Y4GwPDhC38NSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMt4Y0mzi2DUEmBbPpKtwD0kJjnL9J%2FEeGn4dny0Dy%2FYk8dOAisb%2BLgi3x%2FvtVoLhl1T27twwRRzWHq9UqTEzpF3bCfAvESDQZkUJ8CO3V7E2eiwW3rdUzVnTI5FrGvl5ZK4VLM7x1uOssWWptFcmHrsFvj9dZXCuc7EFhddKcaki7En6xgydQB7KhhUmu8LnuZIgVb4SccbNgRECvU6n9a7oA3HuXe00ovdP%2FpmTFjnI9pheI3%2FCSKmogFQHF2BwKo%2FHlyzPMLj6QCS%2BcMedHonYHhMyDlqUaXsmthfuZKT%2FWejZe%2FkBxO%2FWNj7OL%2F7rZkNsJlRDKl9sRkHr5Mp%2BipANPjkTr6X1Bvv%2Fa1r2xiZlErp2v1gh3rs4PMhK77jl41OKAZG8eBT0fk%2F0CwQwvbgEAodA0POCNqphyyoHDyrSvTv7lu2LEU74YWpn0XsAeUhohMchiJPHC%2Fs3uzeoqBDJXzKmQ5EIMOYsbdtoL%2BgIrk360jE0RQmwhdzdXK2G58eyqZ6evWERsFs1F6hqoh%2FWDP4oRG9%2F3xpumImjU02RT3BwDfTo3LT2JBvqKcTPAFgCseI%2B0zN79NUOTPefEVP3pwH5vQg11nwWF1RuwpdZ7uhHQRmyGiZR%2BMq6a7QGfj8DELXRXQxSeuZ8wlrzPyQY6pgHwT31UYe968LhnWlRMUHIlnLvyWxZk%2FFlvb%2Bij4ABP5%2BDbluQJng%2F9Z%2FIzkDaSQ2o4kspO0R8FKOPZEpm7eYyONHZtvStdB86LcRabAEu%2FJ8YD8fPUT2D12V5gBGGNfkLfyaVHVAZH8yWgW%2FImNAsNNx2GLpILtag0LqeXggMFHWZHWkBIfMJjHqygafhEiHGMI6KxZ3f6Jv9yLE9tJMmLEjwa6TwC&X-Amz-Signature=b2ad642bc6704122f39be4fe877589b78ad88efa9087847648203f21fc5f2a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
