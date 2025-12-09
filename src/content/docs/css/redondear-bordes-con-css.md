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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF66HDEC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3Q0em8rmbCudqvqZXy3I8Clph8wJjsaphlMsaTVQHAIhAMJ2vh1sHDWCO%2FBsyHQ8Mjzi1aSSoFdYwg1Iw2q2Gj7XKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPeUCnktw%2FSfcvUgYq3APULb1IRnhrQSTz%2Fg1EiCtflgtWsCUFYqkpV28yJkibqKnZbZggeblzNUPXwuzwtlXAZafkKXJPCdYmqifXnEQYg9%2F4tknjQcj6NYE8DwSCyF2oKncTAIyUeGkkC9ITLizjxauMfFOTGGpgZXB6uKWhv2%2BNS2YOBbpHKvtEG6BSLGI%2Fn6yn%2F6eM6uCoO8NpGz4Y9XqBKRQeoEu88QNiNfdcksJ%2B%2Bwqg9cE3ofKj6XZRqJecMXT5mKokwlctIZankBok5aIigB0ShlZlYkiSJyo3h%2FXutM379OHHwLDn%2BSMiXSsBiQapSJbu5JiMrWhV1pl8tUohLGs4Ib4Gc%2F%2FAKuZ%2BjGgbQSWH3fCkcNlDEsuH59U3vAbo6nmIN%2BpRYRHCCSUy30ltJH6SOtaM0lQ7OuJf73uSuo8flvgVeso1VUW4fDqsGBak5lHPjbEY65nNd3pl4SrcahTkKPD5RHEvY7H01Nbi6RnM7uw%2B%2BXyQVSTL24JvDvIYCL9uqwfC%2FYB2I3gGTEln6M2KDL0y2RK7O5QgYwZWzY47Dm1hD0pNfy0GRflCG8Qk7OMnC832H1yv4hGKMzNRX%2FlMURkGyPITcH3H%2Fbml%2Bl309Sc8r3f5hqS7yG%2F42EMEFqmG4vVqYzDHpd%2FJBjqkAVk3HKLVAIbmRYdus7gz4ENFHzDg%2B5jqEe24GPKxHsjJGFGwKDhKc%2Fwk%2F2ZSFBxUDwq7z9qunSk%2BgnDzQD%2ByCQgWGRN7tOi360gLmNK%2B10tP35dkqC3ZzIAdEaDAiVHyozwVv8KGln1BNRSmtM%2Bi%2Fl4Oz%2BHo6zj3qJrSeK3ufQzBc2dI5kIQNuHADn5ad2O%2FhFiMAJCC7EpHReoSwf7Br1j1A0%2Be&X-Amz-Signature=30b6f70f2f78d3b1de132599ca7f35af97b335887694121bdfb2eca763437b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF66HDEC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3Q0em8rmbCudqvqZXy3I8Clph8wJjsaphlMsaTVQHAIhAMJ2vh1sHDWCO%2FBsyHQ8Mjzi1aSSoFdYwg1Iw2q2Gj7XKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPeUCnktw%2FSfcvUgYq3APULb1IRnhrQSTz%2Fg1EiCtflgtWsCUFYqkpV28yJkibqKnZbZggeblzNUPXwuzwtlXAZafkKXJPCdYmqifXnEQYg9%2F4tknjQcj6NYE8DwSCyF2oKncTAIyUeGkkC9ITLizjxauMfFOTGGpgZXB6uKWhv2%2BNS2YOBbpHKvtEG6BSLGI%2Fn6yn%2F6eM6uCoO8NpGz4Y9XqBKRQeoEu88QNiNfdcksJ%2B%2Bwqg9cE3ofKj6XZRqJecMXT5mKokwlctIZankBok5aIigB0ShlZlYkiSJyo3h%2FXutM379OHHwLDn%2BSMiXSsBiQapSJbu5JiMrWhV1pl8tUohLGs4Ib4Gc%2F%2FAKuZ%2BjGgbQSWH3fCkcNlDEsuH59U3vAbo6nmIN%2BpRYRHCCSUy30ltJH6SOtaM0lQ7OuJf73uSuo8flvgVeso1VUW4fDqsGBak5lHPjbEY65nNd3pl4SrcahTkKPD5RHEvY7H01Nbi6RnM7uw%2B%2BXyQVSTL24JvDvIYCL9uqwfC%2FYB2I3gGTEln6M2KDL0y2RK7O5QgYwZWzY47Dm1hD0pNfy0GRflCG8Qk7OMnC832H1yv4hGKMzNRX%2FlMURkGyPITcH3H%2Fbml%2Bl309Sc8r3f5hqS7yG%2F42EMEFqmG4vVqYzDHpd%2FJBjqkAVk3HKLVAIbmRYdus7gz4ENFHzDg%2B5jqEe24GPKxHsjJGFGwKDhKc%2Fwk%2F2ZSFBxUDwq7z9qunSk%2BgnDzQD%2ByCQgWGRN7tOi360gLmNK%2B10tP35dkqC3ZzIAdEaDAiVHyozwVv8KGln1BNRSmtM%2Bi%2Fl4Oz%2BHo6zj3qJrSeK3ufQzBc2dI5kIQNuHADn5ad2O%2FhFiMAJCC7EpHReoSwf7Br1j1A0%2Be&X-Amz-Signature=804dd7dae6666f8268bd3cd6ce8faa73023a23d26ecbd9174eef92fc7b8069f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
