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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6OAKUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAevacLAaL2CY6YaMbs2dQOcHMkldAwVV8nQOkxl4%2FEdAiEA3m4%2FYOtJFLsO6ZxqJZzeGYvCr87HSKVgYjkVGaYw6PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxiE%2Fnt9dCUidxu1ircAyLtbSayN0Eedf7ozZ8jpymAwq4%2FS1b6JkCRtfS5zwS8xk8WIctMDaj6WW42U70GNtp2vz5oyj84cAQpZFm3QGEOzlLG8L7fADq5TnyIOcXXnSXb%2Fsa4fMIL%2BrpTBjHM0LOaLLmwQgcEnSblU6J5wybLxkyAvEYR%2FbuuFbYpQLOGV0v9MfaseO2PefCII4KsU2v6WM%2Bvqk%2Bn4TkTlOnJYT3NbHiySERwbGIjYiTAwbuwf2s3or%2B6sHyE1bZgqahVIR4S0xHOjV%2BUFINddl12m7n695OTuYtZMl2Td%2FR8hBXBmYx%2BpsVZUi9pxUXTzRbQbKpu3SAMn4RhwFpgGzgsdDVHgAKx1825p2kIvyIsxWNZvgBd5wT426oSnPE5MmsJKM3hxnn19jVxVxxDeEaHK2E0HXzCchR4EhJN4hjkvqrGFsUVAZWp%2B1PfQqGXik1GmnJLbG3LyfYjZCRaeDSVtooxer6UvKVei8AYFoTAbdEHJaztC3Bis6JFCjEZzlUW43UTsjZuz12Kan3DrACeKYF5KaksS7s%2FCVL7OjCy32PUcN4QS3%2FeGR4xBAWCADKxt2%2FPfE%2FUjtuNTtQI4Mg9Bx%2FKnUGDz1sWgTLFg8lrkoLCgWLdEgl7hHIp7nr0MLOBi8oGOqUB9N7MGUu3avLfVX7kJahaWcz51QoMHwDoobG7%2BZyYkSAHqyMzc7tpvz8sRnfHY7A5hiLJ22Bvls%2BNPEPL5EuhadYrxUkyZ9dsUDh1b0WOh3x8DOoPpWe5UEKyqM5%2BGzn3V7s1q8E05hExB1%2BSRHiKBNq%2FG3BeTdXlzW02nXNdSWWXYzhAjt0Cu6K1bKR3rdScM624q9KB3tbFCnHIPOpcTBFUeJnn&X-Amz-Signature=09ad4df3a181e57b40690426d4148cb6c27543f9cc9674db7bf278df1cd91353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6OAKUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAevacLAaL2CY6YaMbs2dQOcHMkldAwVV8nQOkxl4%2FEdAiEA3m4%2FYOtJFLsO6ZxqJZzeGYvCr87HSKVgYjkVGaYw6PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxiE%2Fnt9dCUidxu1ircAyLtbSayN0Eedf7ozZ8jpymAwq4%2FS1b6JkCRtfS5zwS8xk8WIctMDaj6WW42U70GNtp2vz5oyj84cAQpZFm3QGEOzlLG8L7fADq5TnyIOcXXnSXb%2Fsa4fMIL%2BrpTBjHM0LOaLLmwQgcEnSblU6J5wybLxkyAvEYR%2FbuuFbYpQLOGV0v9MfaseO2PefCII4KsU2v6WM%2Bvqk%2Bn4TkTlOnJYT3NbHiySERwbGIjYiTAwbuwf2s3or%2B6sHyE1bZgqahVIR4S0xHOjV%2BUFINddl12m7n695OTuYtZMl2Td%2FR8hBXBmYx%2BpsVZUi9pxUXTzRbQbKpu3SAMn4RhwFpgGzgsdDVHgAKx1825p2kIvyIsxWNZvgBd5wT426oSnPE5MmsJKM3hxnn19jVxVxxDeEaHK2E0HXzCchR4EhJN4hjkvqrGFsUVAZWp%2B1PfQqGXik1GmnJLbG3LyfYjZCRaeDSVtooxer6UvKVei8AYFoTAbdEHJaztC3Bis6JFCjEZzlUW43UTsjZuz12Kan3DrACeKYF5KaksS7s%2FCVL7OjCy32PUcN4QS3%2FeGR4xBAWCADKxt2%2FPfE%2FUjtuNTtQI4Mg9Bx%2FKnUGDz1sWgTLFg8lrkoLCgWLdEgl7hHIp7nr0MLOBi8oGOqUB9N7MGUu3avLfVX7kJahaWcz51QoMHwDoobG7%2BZyYkSAHqyMzc7tpvz8sRnfHY7A5hiLJ22Bvls%2BNPEPL5EuhadYrxUkyZ9dsUDh1b0WOh3x8DOoPpWe5UEKyqM5%2BGzn3V7s1q8E05hExB1%2BSRHiKBNq%2FG3BeTdXlzW02nXNdSWWXYzhAjt0Cu6K1bKR3rdScM624q9KB3tbFCnHIPOpcTBFUeJnn&X-Amz-Signature=dd18619d40791854fd1813f86e48e11fc6567fb360f557961bc5d4eb90b3eb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
