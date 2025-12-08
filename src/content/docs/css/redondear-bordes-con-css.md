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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662H7Y7HL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfryfprGuWvxLbZpfTsmIJsXRcbUtnw4%2Fp%2FkXlf8QIuQIgGCwb0rFI%2FNsn5kbvSQNSVMcrEkEC2ekga2RmQI%2FQyIgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaU18ixpsE2%2FoOxNCrcA5SzDv1CaXC%2FQ29%2BQhxgOLoZTaQIyIFe0YDhVsDVnonxmjRiTKMp6%2BnEpMG8YEcMWkK3c9oDnWKOOsQaW1vWQlIw9Jg8YwEp%2BfQegMQOVewq3Cpd6L8%2F56df%2BDilFP3GOdN3nPhQRIQs7J0427%2BvtInk6HCqPGao%2BRbIIZ0E4ciocmpwbcS9WoCblnv%2Fw%2BJ8pPe3tX8jnQMjkXPWW1RetLtGpcCewypVKqLxl8cWAQBkPWCD2PEd9dcBwbIYE4RbtidnELousLcRKiLj7taxeJHRhqPanDmMZZ1AuMj%2FN6EOyEBP%2Fs4V2THQUKNkIfzztP6wCs54GlbnAO9sVDV%2FCFuKLDj50uk22qbkWC%2FByK%2FnCfTkAdc1pvHi5d0N4pip1H87augZ3IPTIj0LqxvXwk6AX17PapKUtrpHf6iRq6RtnURkA%2FhgtVYjXcFjN5WtKUMn%2F7pkyBPGboRxXkyN7hu5zgAA3KWhghEO8C0PctbP00Fn2VV1sX3GDy07UXJZFLIg%2FO2rapcAuxDNkYmXPGK8fKzwRBe7i16T0blOs4fe95z9BYjH2zIHkf7E%2BIxNu%2BeMbX69E%2B4xSQfN5seAuLWgA%2B0jn6uPPnK40JgiOL9XHo%2Bn2BNyFGAk2LknMJmi3ckGOqUBvoy5qYurPSs65EaFx7wzwi3HI5fStrIvPq90XpLRh04mZ6mX10OddKKc7giWn54OxjvWb71Q0DQFYqc8pU5liOdWXbQACXfQO6FstqLYuYe0fosfDjz8uKDI7%2Frmob2Yfv9If7%2BHUhjKsGSQ5z6BYelxAWmhzu3spgmoM80o6cmNsiiZeK4KsZskKYOwDs7XRxR2BOldXW0mWg9b8XrSBNOGLHR4&X-Amz-Signature=ef44345a7040d9efc3b565d30355d65e4f4b3ddcdab231341be64bf975a5f09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662H7Y7HL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfryfprGuWvxLbZpfTsmIJsXRcbUtnw4%2Fp%2FkXlf8QIuQIgGCwb0rFI%2FNsn5kbvSQNSVMcrEkEC2ekga2RmQI%2FQyIgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaU18ixpsE2%2FoOxNCrcA5SzDv1CaXC%2FQ29%2BQhxgOLoZTaQIyIFe0YDhVsDVnonxmjRiTKMp6%2BnEpMG8YEcMWkK3c9oDnWKOOsQaW1vWQlIw9Jg8YwEp%2BfQegMQOVewq3Cpd6L8%2F56df%2BDilFP3GOdN3nPhQRIQs7J0427%2BvtInk6HCqPGao%2BRbIIZ0E4ciocmpwbcS9WoCblnv%2Fw%2BJ8pPe3tX8jnQMjkXPWW1RetLtGpcCewypVKqLxl8cWAQBkPWCD2PEd9dcBwbIYE4RbtidnELousLcRKiLj7taxeJHRhqPanDmMZZ1AuMj%2FN6EOyEBP%2Fs4V2THQUKNkIfzztP6wCs54GlbnAO9sVDV%2FCFuKLDj50uk22qbkWC%2FByK%2FnCfTkAdc1pvHi5d0N4pip1H87augZ3IPTIj0LqxvXwk6AX17PapKUtrpHf6iRq6RtnURkA%2FhgtVYjXcFjN5WtKUMn%2F7pkyBPGboRxXkyN7hu5zgAA3KWhghEO8C0PctbP00Fn2VV1sX3GDy07UXJZFLIg%2FO2rapcAuxDNkYmXPGK8fKzwRBe7i16T0blOs4fe95z9BYjH2zIHkf7E%2BIxNu%2BeMbX69E%2B4xSQfN5seAuLWgA%2B0jn6uPPnK40JgiOL9XHo%2Bn2BNyFGAk2LknMJmi3ckGOqUBvoy5qYurPSs65EaFx7wzwi3HI5fStrIvPq90XpLRh04mZ6mX10OddKKc7giWn54OxjvWb71Q0DQFYqc8pU5liOdWXbQACXfQO6FstqLYuYe0fosfDjz8uKDI7%2Frmob2Yfv9If7%2BHUhjKsGSQ5z6BYelxAWmhzu3spgmoM80o6cmNsiiZeK4KsZskKYOwDs7XRxR2BOldXW0mWg9b8XrSBNOGLHR4&X-Amz-Signature=d34a77fa49c2a169a46d2f8cbd9e56ecbf9527b58d276afcec8b5241c79eb749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
