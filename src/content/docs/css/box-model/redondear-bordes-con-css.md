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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3NZFCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRu%2FMR8rXLZVG0QWX%2F4ewMpVXKLe2ObeVcFyzvNFlPhQIgQ6WbNccUoK03Vbr3XBy4X1MY89BIuXDLlSeJE%2BuSJWwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIOmWGXDPZRRZQZEircA%2FmfpvfrBYLg8ZnOEngfORiNU%2FRWfLz1H4wVamcMckl9jCpVg1sbBbmoqobB7bUuRH1rLIgnOLa8mjAXaol2QHT6q2gtFrY6TrC01kfFcFYzTVdmqM3gxNHKBwv0yyA0LVdrlMoJjUZS%2ByWWGEgOoWUoTV6nP5wUkVMa3L7tG%2FwGWy7df9Cnn3leZ%2FhqsakEZgeWovSKbcoJOW9IL2uqxFXrbtttD2vzJ1McO46Dehb%2Fv%2BMPLWoHy431BxaZkmcyzkkyv35I0okT%2F%2FdwaqXqpKTIjcz5PinpOSRZnpzleZVuGuPlh5Yl5K3ZbsnWGPSmdjGgejaHmFI0A2z%2BWcvSGvuygq9vfqKtKiTaEOCsRxZjvefE1AAXSWLdDneZQgPSQhgf4cXrjXI0%2FC0Sj1QYSNRgP1UIJzw4dPAlNVK9t%2FxhFXBwtnXGD2aB4ZFaXnsRJfVr2hP4HacwCUxgiLcMtWQME2SyU9IIN2HyRIJW0DCV4168sHNpITAhpulXV98cRiMAEm82%2F8iDPCCFaAveuLbiF269MbN7Am2%2FoUyyImhGRG2z8HtEoMZa2%2FUNLSh6FBdDU12rTDZGb%2FNzct6geQVfZh3J19AJQdgRs95pQJzxCL6A9Zjz6qqVvgp8MMqgi8oGOqUBzQWQ%2BcXGcVEdyvM3qN1cVXOEcRz4TrP6QC3rSW98QhCCZbiW4RAccGt6lurr1wlhmmRd44a8BVcItJzyA%2Bjni596fHfDU4X%2F%2FgYxt604FmVsmkhnq7NvznAlpRUDgeNoUH9xRmham%2ByuSOUxspgyMseF%2FA5clN6EwGzOEwU1%2Bnt%2Bzv1VH9tIFj5h9BcrAoLgqhHnKmh3qa3fQtR4ld%2BmhnZJFAKx&X-Amz-Signature=3647a7b747e2e97663e23be8e882d844d77d38909c2f86f851c4f28c8a2ad6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3NZFCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRu%2FMR8rXLZVG0QWX%2F4ewMpVXKLe2ObeVcFyzvNFlPhQIgQ6WbNccUoK03Vbr3XBy4X1MY89BIuXDLlSeJE%2BuSJWwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIOmWGXDPZRRZQZEircA%2FmfpvfrBYLg8ZnOEngfORiNU%2FRWfLz1H4wVamcMckl9jCpVg1sbBbmoqobB7bUuRH1rLIgnOLa8mjAXaol2QHT6q2gtFrY6TrC01kfFcFYzTVdmqM3gxNHKBwv0yyA0LVdrlMoJjUZS%2ByWWGEgOoWUoTV6nP5wUkVMa3L7tG%2FwGWy7df9Cnn3leZ%2FhqsakEZgeWovSKbcoJOW9IL2uqxFXrbtttD2vzJ1McO46Dehb%2Fv%2BMPLWoHy431BxaZkmcyzkkyv35I0okT%2F%2FdwaqXqpKTIjcz5PinpOSRZnpzleZVuGuPlh5Yl5K3ZbsnWGPSmdjGgejaHmFI0A2z%2BWcvSGvuygq9vfqKtKiTaEOCsRxZjvefE1AAXSWLdDneZQgPSQhgf4cXrjXI0%2FC0Sj1QYSNRgP1UIJzw4dPAlNVK9t%2FxhFXBwtnXGD2aB4ZFaXnsRJfVr2hP4HacwCUxgiLcMtWQME2SyU9IIN2HyRIJW0DCV4168sHNpITAhpulXV98cRiMAEm82%2F8iDPCCFaAveuLbiF269MbN7Am2%2FoUyyImhGRG2z8HtEoMZa2%2FUNLSh6FBdDU12rTDZGb%2FNzct6geQVfZh3J19AJQdgRs95pQJzxCL6A9Zjz6qqVvgp8MMqgi8oGOqUBzQWQ%2BcXGcVEdyvM3qN1cVXOEcRz4TrP6QC3rSW98QhCCZbiW4RAccGt6lurr1wlhmmRd44a8BVcItJzyA%2Bjni596fHfDU4X%2F%2FgYxt604FmVsmkhnq7NvznAlpRUDgeNoUH9xRmham%2ByuSOUxspgyMseF%2FA5clN6EwGzOEwU1%2Bnt%2Bzv1VH9tIFj5h9BcrAoLgqhHnKmh3qa3fQtR4ld%2BmhnZJFAKx&X-Amz-Signature=7469ff2cbf8d9bd1c51b4ce6bc0da6cbf41bf89003a1a06e6c6be7802b7b650b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
