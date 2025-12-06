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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVBFTSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqh%2FHFRcotV139ALnwJRmb3HQeRtccYnxOSaBoLPCcygIhAKipqWOkpxJtf9Irvi%2B9k7b5bFDuy24%2BoG21wLaV4BXZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwX9gKCboDjaRVuKyEq3AOSSADBJ1priJYogOBkLUI8LySJ4jl6xQ3zDoIuW%2FPFUKX73%2FXId5HCcFjfeqYp7lKWPN5xcVOTrzoWW7sAo3bG%2FXh5dQo8X3Uor4F7w5AodLIq3gIJYYdZb6pim3qIuhH9yXrADORgWgLHzLbXElbbf5gs0IjCy8a8kVDU45Xamz68KmelK9ieeL2LoAzFhUsDZMdvv%2FGMYKOOBjo6vSM0TmUlfxPUPjham1PihZogXrimP1uhuKY%2FrlRpuPbdpEHaX%2FAOUomeGaIeUGLuURfXxrpYXDU0RzEiXYtx4JmM3W8pzMuxNiY8rgfUxkAbY34s%2BeZxFphEEQzwRfUhbEUIPTpE6TnECCwPlNskPpYzuWAcCn7Uz1fDv4O4YgpC4AmuLRbevtWcmXnSAyCkL12j6l2hgnm8CDG3PnwhU0RTlPRGQyTyWa8E4kJKUL3c7hO8CwD1WN9aaMVB6UOzyVMILkiqL0wsL%2Fjn9gLtRpeBB7KBRxkYDeoLISVrVvu9%2FMuuKbRsU9FX8oefipz7voB8OwSktjw01fKL0J7d6lvLPfrndIVe1HrQ%2B8TP3Cof0uMGtQGWkYluBtK26KDWQF7FPePVI6o1dMHtHiFQ9CEEIDDwZmaxqbJ%2FonxbuTC2idDJBjqkAYxuROIaGWwpQzzC5RgqEV6tqX6ZfdF8h2yNz5T1Q0EtJ%2BVjik%2F1odYg%2B5cBtxkzz2auK0WfqM%2BHNz%2FapHz6IesXGcfL%2Fcru%2Bik2w0BQt6qIVUo2H7VjFYhzVpk6lEORq42HbUZjOPV9zzqpqRaK80cpXa4m8FCRpN7CxqaA%2FpJN5t1Jk1kDCTI2Cankgw0%2Bv2a%2FcaXaS7QkAQn5pptAxzemND2l&X-Amz-Signature=62f45530b1916b19856bc820a861ffd26844e378e86ba9a8df717941c78ecb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVBFTSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqh%2FHFRcotV139ALnwJRmb3HQeRtccYnxOSaBoLPCcygIhAKipqWOkpxJtf9Irvi%2B9k7b5bFDuy24%2BoG21wLaV4BXZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwX9gKCboDjaRVuKyEq3AOSSADBJ1priJYogOBkLUI8LySJ4jl6xQ3zDoIuW%2FPFUKX73%2FXId5HCcFjfeqYp7lKWPN5xcVOTrzoWW7sAo3bG%2FXh5dQo8X3Uor4F7w5AodLIq3gIJYYdZb6pim3qIuhH9yXrADORgWgLHzLbXElbbf5gs0IjCy8a8kVDU45Xamz68KmelK9ieeL2LoAzFhUsDZMdvv%2FGMYKOOBjo6vSM0TmUlfxPUPjham1PihZogXrimP1uhuKY%2FrlRpuPbdpEHaX%2FAOUomeGaIeUGLuURfXxrpYXDU0RzEiXYtx4JmM3W8pzMuxNiY8rgfUxkAbY34s%2BeZxFphEEQzwRfUhbEUIPTpE6TnECCwPlNskPpYzuWAcCn7Uz1fDv4O4YgpC4AmuLRbevtWcmXnSAyCkL12j6l2hgnm8CDG3PnwhU0RTlPRGQyTyWa8E4kJKUL3c7hO8CwD1WN9aaMVB6UOzyVMILkiqL0wsL%2Fjn9gLtRpeBB7KBRxkYDeoLISVrVvu9%2FMuuKbRsU9FX8oefipz7voB8OwSktjw01fKL0J7d6lvLPfrndIVe1HrQ%2B8TP3Cof0uMGtQGWkYluBtK26KDWQF7FPePVI6o1dMHtHiFQ9CEEIDDwZmaxqbJ%2FonxbuTC2idDJBjqkAYxuROIaGWwpQzzC5RgqEV6tqX6ZfdF8h2yNz5T1Q0EtJ%2BVjik%2F1odYg%2B5cBtxkzz2auK0WfqM%2BHNz%2FapHz6IesXGcfL%2Fcru%2Bik2w0BQt6qIVUo2H7VjFYhzVpk6lEORq42HbUZjOPV9zzqpqRaK80cpXa4m8FCRpN7CxqaA%2FpJN5t1Jk1kDCTI2Cankgw0%2Bv2a%2FcaXaS7QkAQn5pptAxzemND2l&X-Amz-Signature=ca74025dde0b1a0ebda2cd799210c4798eaf90d1014c9b87061ed1c9c96b5cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
