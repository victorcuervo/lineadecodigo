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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GPY46N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPUl%2FcvuGRcEjT6phB2AT5go519drusWE6y5%2F37t08rQIhAK%2FLRhn3PpTgejcKVQNi8SwGQ8rympymlLowPla2uqbFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEoYIxMOQPxBR%2BbW8q3ANHE3OvcX0U4XazS14JwI93LkWS0%2FJsXlmcZ9%2BrlMJsAoLR9KnqZvMyJFMVTDX7HAhlJ%2Bu5lSp1p7QnfAfylxsFzR9HxwuyJATFEd0cD4yYHIqTfKh4%2FA30pCW1THQw6yY02On4a0WXt1zhfZDXjFMyWEFJrdjS%2BSiIPaIBwCEaSt3jf5kPHou9exEVaJLdG6Cmi38VaCINzJep%2BSKFfavbyxzCBy8j8Ilxw5KxyP7of99WaxJVSpGvPyeKyJKPASNDovj0XRETYIDfENXKWSF7ziCSA9g26hVFbo3UgAG7FH7WrFNkdphABmsPGeDZbfVfhDx%2FhLH%2BUBG3BlHq5jxx7dMjtfVQmNAPfArkhd4Y0T0I83cxmstUOUhIzKgVKIhR%2FpLgHNRuumb19R56tX4%2FIDNqBjCclQLdpW3cbI6eZL%2Fx%2FygpNmP%2BIt1CC333Fhba45pcUYvZI7j6z4vKAEKGz%2FUiZXs65r7xuid9AfVE6lkdFnIa90aiv%2BusqeIgWsEbfei03RdFthTjG9EusJos28i21K%2F%2BDvQ1XKGeX4On5iUwYmcp1tRthkLrdRafYY0xrDy9%2BJ3R98qfWQHhH6gGAEi5i0NWOQ6Q71ArSMyCuzP0qx3gA0Xcv9EdpzDMrYzKBjqkASD7jJgnquFHGvJlbqR4VS5VEYMBOynKTke3w9lM%2BJs4W6cBby%2BMIJU%2BJqu8QPKfYdgzOG%2F3%2BAufLXzur4l%2FODv6hkWV0%2BZvY%2F0bYyywBLKRjeYNpFMl1lFADVb7KsJ6x9nTx2jdBBZdmlKLZveaO5A3RmPsotRm2qUx5fJU0hUwMAD1vpscblBtR98rEeaal8NRESJSshFZ%2BpyowA%2BaXQyLGGFr&X-Amz-Signature=b8d0b8427b8dda8271922295a8df628da180266faade45e9f0ebb03847c3f805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GPY46N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPUl%2FcvuGRcEjT6phB2AT5go519drusWE6y5%2F37t08rQIhAK%2FLRhn3PpTgejcKVQNi8SwGQ8rympymlLowPla2uqbFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEoYIxMOQPxBR%2BbW8q3ANHE3OvcX0U4XazS14JwI93LkWS0%2FJsXlmcZ9%2BrlMJsAoLR9KnqZvMyJFMVTDX7HAhlJ%2Bu5lSp1p7QnfAfylxsFzR9HxwuyJATFEd0cD4yYHIqTfKh4%2FA30pCW1THQw6yY02On4a0WXt1zhfZDXjFMyWEFJrdjS%2BSiIPaIBwCEaSt3jf5kPHou9exEVaJLdG6Cmi38VaCINzJep%2BSKFfavbyxzCBy8j8Ilxw5KxyP7of99WaxJVSpGvPyeKyJKPASNDovj0XRETYIDfENXKWSF7ziCSA9g26hVFbo3UgAG7FH7WrFNkdphABmsPGeDZbfVfhDx%2FhLH%2BUBG3BlHq5jxx7dMjtfVQmNAPfArkhd4Y0T0I83cxmstUOUhIzKgVKIhR%2FpLgHNRuumb19R56tX4%2FIDNqBjCclQLdpW3cbI6eZL%2Fx%2FygpNmP%2BIt1CC333Fhba45pcUYvZI7j6z4vKAEKGz%2FUiZXs65r7xuid9AfVE6lkdFnIa90aiv%2BusqeIgWsEbfei03RdFthTjG9EusJos28i21K%2F%2BDvQ1XKGeX4On5iUwYmcp1tRthkLrdRafYY0xrDy9%2BJ3R98qfWQHhH6gGAEi5i0NWOQ6Q71ArSMyCuzP0qx3gA0Xcv9EdpzDMrYzKBjqkASD7jJgnquFHGvJlbqR4VS5VEYMBOynKTke3w9lM%2BJs4W6cBby%2BMIJU%2BJqu8QPKfYdgzOG%2F3%2BAufLXzur4l%2FODv6hkWV0%2BZvY%2F0bYyywBLKRjeYNpFMl1lFADVb7KsJ6x9nTx2jdBBZdmlKLZveaO5A3RmPsotRm2qUx5fJU0hUwMAD1vpscblBtR98rEeaal8NRESJSshFZ%2BpyowA%2BaXQyLGGFr&X-Amz-Signature=a094dcb4509fab1d11723950f7d2f6d8c7d2a323af115803d3339f7358d4c979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
