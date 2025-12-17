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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERQ4H6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8RjZhsYiMuEYNYFjOxYIfhY0OpI7nsgflwc5KThDrCAiAkI%2Frsjv398X5q9Shzlbd1MYxQXYGnxQG4aw8kL5RPaSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg59uAhvZDMEtQMMoKtwDuufSESIHE3iQXKkx0GhkYHAXOoW5GCUpWrs%2BBfFpQZnfhyINbMo7tm3J2FqOQ6D39D%2FT%2B53FBW1mpCsTztcFeHVHQWu9jpEYNY0bqSI1Lw6wL3J385l%2BVR26GDZJDsfDub0mzrdOZX3iNy9gOHaQZD7pw0golv%2BaseUppuXlWqZT2z2wtjkkm2MnHNMIgBIiO3lQ7rpNAqUlXRdQKH55RWS1WSuUtYT4bebPBq%2Bp9HUZrX9VzBPWNa2pCgywktzO%2BCXySTyowh3%2BADfjy5AMWm%2BLfqrEuWj%2F8XtWY4urjgghOijmkyDVRAmzBwsfrlcaYRQa74GSWJaofUi%2Fjzr7%2Flnur5%2BEJgIyiG0M%2B6CFl%2BG0w5i02fa2jW9pj8JE4GykfI96TN11yvb3BG3wn7ppJMHzJX7Y8RF%2BS4T%2FlbSn%2FgH9KD4fpz3%2FlZFfpyQYmFslg99iEAmOteWJwFBZluu5WHxZRi8RxPWjZR9yBwIeshlGnC5KEbUNrntBPU9cl1TKRyZ94NYwXFbFcbOewKvh33e5tESl0lfBCqw%2BblwT7Lr3RghlXQc7jp8s6qU026f9uBPcrFJLQBFh3vWLBmW7JThfncO3xHb7NQmb3s5%2BfGUh7mCE4B6J1FW6EQUw%2Ft6HygY6pgGMAxJ%2BCGlRXt%2FFIc5u%2FlQyTifn78kMSGNCyBLhljvLjZfjjeyRzgtz3gTmQ43F3AunEDQsGT7fUvrtTALvi5j8psdt6Rbanl2LdPMJ38I63yurkOB5xQDgbT6IVww4wiDe4cSnbbGH%2BAyrPyEHqrgcBOhPFLsiyyyoOmWppbCys5Pk%2FEzFxEPo5mh7LhyM3qZ4ccZ4G8omGCUn2KJ17dMgvM1tu9Xh&X-Amz-Signature=db686407c77c4701cb59b2063510c1b9255b827856bd4f482443f90b385f8ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERQ4H6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8RjZhsYiMuEYNYFjOxYIfhY0OpI7nsgflwc5KThDrCAiAkI%2Frsjv398X5q9Shzlbd1MYxQXYGnxQG4aw8kL5RPaSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMg59uAhvZDMEtQMMoKtwDuufSESIHE3iQXKkx0GhkYHAXOoW5GCUpWrs%2BBfFpQZnfhyINbMo7tm3J2FqOQ6D39D%2FT%2B53FBW1mpCsTztcFeHVHQWu9jpEYNY0bqSI1Lw6wL3J385l%2BVR26GDZJDsfDub0mzrdOZX3iNy9gOHaQZD7pw0golv%2BaseUppuXlWqZT2z2wtjkkm2MnHNMIgBIiO3lQ7rpNAqUlXRdQKH55RWS1WSuUtYT4bebPBq%2Bp9HUZrX9VzBPWNa2pCgywktzO%2BCXySTyowh3%2BADfjy5AMWm%2BLfqrEuWj%2F8XtWY4urjgghOijmkyDVRAmzBwsfrlcaYRQa74GSWJaofUi%2Fjzr7%2Flnur5%2BEJgIyiG0M%2B6CFl%2BG0w5i02fa2jW9pj8JE4GykfI96TN11yvb3BG3wn7ppJMHzJX7Y8RF%2BS4T%2FlbSn%2FgH9KD4fpz3%2FlZFfpyQYmFslg99iEAmOteWJwFBZluu5WHxZRi8RxPWjZR9yBwIeshlGnC5KEbUNrntBPU9cl1TKRyZ94NYwXFbFcbOewKvh33e5tESl0lfBCqw%2BblwT7Lr3RghlXQc7jp8s6qU026f9uBPcrFJLQBFh3vWLBmW7JThfncO3xHb7NQmb3s5%2BfGUh7mCE4B6J1FW6EQUw%2Ft6HygY6pgGMAxJ%2BCGlRXt%2FFIc5u%2FlQyTifn78kMSGNCyBLhljvLjZfjjeyRzgtz3gTmQ43F3AunEDQsGT7fUvrtTALvi5j8psdt6Rbanl2LdPMJ38I63yurkOB5xQDgbT6IVww4wiDe4cSnbbGH%2BAyrPyEHqrgcBOhPFLsiyyyoOmWppbCys5Pk%2FEzFxEPo5mh7LhyM3qZ4ccZ4G8omGCUn2KJ17dMgvM1tu9Xh&X-Amz-Signature=672cf9137d02143399e2a7f2f5c38876457827bb0e74fbd7f66fc0ec4b15b224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
