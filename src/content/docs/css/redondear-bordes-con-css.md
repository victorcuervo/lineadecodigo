---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWPIH5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCikksKsOxC4TDKMnr5l6oGvpMTfVKdXXcav%2FHzN7XqQQIgM5pCm3ONV6nyI8JTAqPdhkRcP%2FhbIRwhObRMYlr3PZgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJFM1muLIO7MCdPauyrcAxvLUa4XbXmzM1b3nufUwIAQh1JbJ1FnhpEd1s7jzxoVi1SN7we%2FixU7dNBxT6hYQyT2MlyOA2GtZu%2F2Q3BNkaBiLzDvnRXK7N5Ycz73HTuWtenIRYQ5HK425qDXjf3tIA066wQNTjw05wTNb49nR820I0F77%2F97Q30PFa50tgIwhNE9b2R2TppzLbGbVnCxvulqUVMwQ%2BpnRtfi6bv6JbXhBX7YSODtHxSYGGsaTiCgcPpyob3XSNeTXjQnL%2BY5yop37nm0yp7jEIMmVYc6vggkAEQ5Tw8cofm6ilpdYwT%2FkOFzrTG3IBbmpIo5i602Giy4Rjmh0N53TvN5gVoxyTnoYuh%2F0aiDNTDTQwun7MNNzkDAt7dQOKLj%2FgizOw4S4ttqJ%2B5UnecHV49j7w%2BgUL%2BtNfx7ruWrWk%2FidF5LkEB52tsLbGTiHEjNrrtJrBbHlNTQxbX1F9GgncA4UFRY%2BuTUrqWpxoxlUbO3q1pokHTYuILmGmwU%2BDqnQFT5cnOTf%2F5hiftPs0CMTZNevqHsXk0a6aiTRCWIruLDxQoW79o%2F8z2Gfw4xw8L%2F4uvqQACCElJ7b0BZ6aqpC2lgxPHu6LMejLkUE%2B5PnzleEkt3TTohABZOD9WhjIPL43SHMKmQxMkGOqUBvVJvH1ZfkwI5C1YSnj74rOEYTmAL6y5Jx52B67%2B9auGbP0jpQ54fcOGLBdZksd2F3ro8cINvjyfvxI6nXKtyFxypSTXOzpHvdSW8YgK9hZhCyOa878BFh5rPl9iTS92dkHykj0KGQhbGwsytl70GpEMWhk97NyakTRri5AZ2xfU3j%2B9CoQXcbTmH03i6qEE1mrkgsnK7zZ%2BsVa%2BMFtm2rQ7cIH0i&X-Amz-Signature=32b3e23588e3634eaadd68ea8a37ac0a15f59a4454610073c4c253f8cb5c2f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWPIH5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCikksKsOxC4TDKMnr5l6oGvpMTfVKdXXcav%2FHzN7XqQQIgM5pCm3ONV6nyI8JTAqPdhkRcP%2FhbIRwhObRMYlr3PZgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJFM1muLIO7MCdPauyrcAxvLUa4XbXmzM1b3nufUwIAQh1JbJ1FnhpEd1s7jzxoVi1SN7we%2FixU7dNBxT6hYQyT2MlyOA2GtZu%2F2Q3BNkaBiLzDvnRXK7N5Ycz73HTuWtenIRYQ5HK425qDXjf3tIA066wQNTjw05wTNb49nR820I0F77%2F97Q30PFa50tgIwhNE9b2R2TppzLbGbVnCxvulqUVMwQ%2BpnRtfi6bv6JbXhBX7YSODtHxSYGGsaTiCgcPpyob3XSNeTXjQnL%2BY5yop37nm0yp7jEIMmVYc6vggkAEQ5Tw8cofm6ilpdYwT%2FkOFzrTG3IBbmpIo5i602Giy4Rjmh0N53TvN5gVoxyTnoYuh%2F0aiDNTDTQwun7MNNzkDAt7dQOKLj%2FgizOw4S4ttqJ%2B5UnecHV49j7w%2BgUL%2BtNfx7ruWrWk%2FidF5LkEB52tsLbGTiHEjNrrtJrBbHlNTQxbX1F9GgncA4UFRY%2BuTUrqWpxoxlUbO3q1pokHTYuILmGmwU%2BDqnQFT5cnOTf%2F5hiftPs0CMTZNevqHsXk0a6aiTRCWIruLDxQoW79o%2F8z2Gfw4xw8L%2F4uvqQACCElJ7b0BZ6aqpC2lgxPHu6LMejLkUE%2B5PnzleEkt3TTohABZOD9WhjIPL43SHMKmQxMkGOqUBvVJvH1ZfkwI5C1YSnj74rOEYTmAL6y5Jx52B67%2B9auGbP0jpQ54fcOGLBdZksd2F3ro8cINvjyfvxI6nXKtyFxypSTXOzpHvdSW8YgK9hZhCyOa878BFh5rPl9iTS92dkHykj0KGQhbGwsytl70GpEMWhk97NyakTRri5AZ2xfU3j%2B9CoQXcbTmH03i6qEE1mrkgsnK7zZ%2BsVa%2BMFtm2rQ7cIH0i&X-Amz-Signature=1543a5fc200e651f472dacaa4a6d2d5c06d939ee191c9d450aeaeade4c6a547b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
