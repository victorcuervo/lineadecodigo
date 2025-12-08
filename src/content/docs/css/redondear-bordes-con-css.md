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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYLKXKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz4a56CqR8%2F19G5KNzI8t%2Bf3QnD%2BTolVDsBLuzDy04GAiEA4nEQbuLbEE2HtyjLUxsyAbe%2BS3aXXf0tq5SgVQ3wXsoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uYh5XqgNDGxBB6SrcA9AZXb82xjYV8Dv%2Fznuvwn7cJhDgq2HDHzvuVA0pgyj2HjhrrUzWM8I4aVq5wPt3Cxsj5xRlBfNPDXtaukJVOg7hoFeWJThff63FCgXl9g6WCnSlmlwBtXRuy05DziwtQiNs3q%2Bd%2BdpJJ7qJGlfqRBKBghKtXlLlIaouEtXX%2FKky5c3q6lVzQqvictPveOZMSK5UuA2alGovwX5%2B9Yg9JtQcMP%2B%2BA%2F7p6kRj5KsIaAGbGDiGfhbHo%2B6yDcHHieDiNwwHmrwPTx2EPj%2FG9Xjw5Ul%2BhNSexkRo8AudEN%2FQJpVS9HEpoJ0G7iE%2Fko65HCQZ07Pxs%2Fs3kpIGGNmskX6bot4UrvW%2B%2FaWajBUzH1aONs57m4OKsQg8PU5EmOSG8UsFiF0JwCq9hTXJcVP%2BQch%2BWaC56OdmYfh%2FvcF2rLfPLV6D1zgVawNH1JgNmnXv%2FxZN7a6UUWEYg5Mvr6Q8U2AFK6yI5WbfL4APzao7n3OUHuFd5r4t6d54X8sCoFJMvDRC4W7eQzC7O8Qx%2FWol%2BQvleVRLn1OXvv7MsQeIDGLhg2LBJWm4kPQ215n3on63u6gABEsHeP5TYpP6QL6Qsm96GV9gNVvIM3%2BNYhwFXTEpqOt10OvVy4ZEXlYQYQfnMJi02ckGOqUBaT9S%2BxkJE6fzBF5fB3g9bmgIGdDTlDoGI8ObdWBhpyqdQ5jNSM9%2BkLkwvL1hhIaajZDQixzzLLZRmgxRfMH0fLePjnAeOqRwHWrL9AVIIe4H5NziWaO9DVTKMzhNLYWF0ZPHcdTyeMyZ5PHQtM5ZN%2Fc%2FUHZ1X0a4ruVuCqKfqS1yrn%2BBMkrMx89VZ0Bhl7TWJT%2BBJjp5qIqvxSK522v79ixHF4hF&X-Amz-Signature=178e91d394b309e76c3de9ad35db6e38dc41fa74be6aeff6c1158f8cdb7ded37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYLKXKO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz4a56CqR8%2F19G5KNzI8t%2Bf3QnD%2BTolVDsBLuzDy04GAiEA4nEQbuLbEE2HtyjLUxsyAbe%2BS3aXXf0tq5SgVQ3wXsoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uYh5XqgNDGxBB6SrcA9AZXb82xjYV8Dv%2Fznuvwn7cJhDgq2HDHzvuVA0pgyj2HjhrrUzWM8I4aVq5wPt3Cxsj5xRlBfNPDXtaukJVOg7hoFeWJThff63FCgXl9g6WCnSlmlwBtXRuy05DziwtQiNs3q%2Bd%2BdpJJ7qJGlfqRBKBghKtXlLlIaouEtXX%2FKky5c3q6lVzQqvictPveOZMSK5UuA2alGovwX5%2B9Yg9JtQcMP%2B%2BA%2F7p6kRj5KsIaAGbGDiGfhbHo%2B6yDcHHieDiNwwHmrwPTx2EPj%2FG9Xjw5Ul%2BhNSexkRo8AudEN%2FQJpVS9HEpoJ0G7iE%2Fko65HCQZ07Pxs%2Fs3kpIGGNmskX6bot4UrvW%2B%2FaWajBUzH1aONs57m4OKsQg8PU5EmOSG8UsFiF0JwCq9hTXJcVP%2BQch%2BWaC56OdmYfh%2FvcF2rLfPLV6D1zgVawNH1JgNmnXv%2FxZN7a6UUWEYg5Mvr6Q8U2AFK6yI5WbfL4APzao7n3OUHuFd5r4t6d54X8sCoFJMvDRC4W7eQzC7O8Qx%2FWol%2BQvleVRLn1OXvv7MsQeIDGLhg2LBJWm4kPQ215n3on63u6gABEsHeP5TYpP6QL6Qsm96GV9gNVvIM3%2BNYhwFXTEpqOt10OvVy4ZEXlYQYQfnMJi02ckGOqUBaT9S%2BxkJE6fzBF5fB3g9bmgIGdDTlDoGI8ObdWBhpyqdQ5jNSM9%2BkLkwvL1hhIaajZDQixzzLLZRmgxRfMH0fLePjnAeOqRwHWrL9AVIIe4H5NziWaO9DVTKMzhNLYWF0ZPHcdTyeMyZ5PHQtM5ZN%2Fc%2FUHZ1X0a4ruVuCqKfqS1yrn%2BBMkrMx89VZ0Bhl7TWJT%2BBJjp5qIqvxSK522v79ixHF4hF&X-Amz-Signature=65804f78f8b7edda19658aab0cf824ffdcf46a23dff9ca3d745abff7baecd741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
