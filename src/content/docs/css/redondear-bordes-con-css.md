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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXN7YGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnbgA5fs1G%2F8TeLgo7Ilr3dBtJIjkfEo33LqBt%2BzsZ1wIhAKEUtAslXuLhYnOEPOXlW2ltAemTvOjSVgcvBYuOsitEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1R8QP5IgfxjRgYvEq3AOwPyfenDM1eVQbyR3SS7JxHTChcLuvnb%2BePYg%2B5YriyIccvi2zp6kNIk9lBfzP0mowXr3k%2BkCc4gXL%2B35kml8EUHCPJahZ4l7peqUd3Wq7FviXVKwMI2aFD1suheLLjffvRm9z%2F3gJthpXC9KNzl0c1TFtnJVcWhAQ%2FJMUMYShjmCxxMhlayTUNi731siKyeZGj2mg7JzEmEx6oLjjGZpZCraMjyOBh3slkaDFSBLV0ZJ2JDHTig%2BE4SnGfdszZAGIyWsmBlpFKLPFTNrsKhlJ3V6SA7Wt1a%2FP7i5FvNcmKtDzwdkwudolXXJ02x0qym%2F0SK%2BZGXTFKYr4YuSNX674GVdVuBUrt02q7WTZx8hTE7ysNSEUpoLLU5c%2BcbUJlBxEsr%2BUr0%2FbvF7NNRSp5ituyMle51b13VTBeA0IVwTX0Zh3xs4ODpe8koaHsiLfQuArN7RJg6vLC0vzvR0WzhlrUDSG9tl9h0TPYCRJirTKQh1j4o4u98Ufu4l1UDeC9XrqH79O4D8GbFum5Pm1TSfeHlf39VpxoMxaOelmzpeRWvrACDcKDPOQ9gMAzT3%2BRYVmhjQ7GH3IUnUQkPbD0AUIfTNo3TGcD9j5RM0K4PFF5E00gSCHL3LsD23RnTComdXJBjqkAYHIp4ePG0vJfLKJeJ8UVpsbIZ%2B0PXweZUeehPvzsRUXVICh98Kf8z%2B%2B%2B535llz4FQIAO4bOKOSi24g9gc1zwywNOZ5CThyAxFYG%2Fm2vjuBOt5zROHa2LHmrHp72BOPbq1Od5jkVkOvmc6ci8W%2B0Mh0KH9XJOo16xna3Y4CaqMFW5nPAspDWwNa599NzzFcZlTOsGqsXOHMhTgg1olvMbG%2BWCBUE&X-Amz-Signature=e4a67c32e85b434305b37dae186429d8156ca0466cb8238b87481aeb1fbc582b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXN7YGH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnbgA5fs1G%2F8TeLgo7Ilr3dBtJIjkfEo33LqBt%2BzsZ1wIhAKEUtAslXuLhYnOEPOXlW2ltAemTvOjSVgcvBYuOsitEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1R8QP5IgfxjRgYvEq3AOwPyfenDM1eVQbyR3SS7JxHTChcLuvnb%2BePYg%2B5YriyIccvi2zp6kNIk9lBfzP0mowXr3k%2BkCc4gXL%2B35kml8EUHCPJahZ4l7peqUd3Wq7FviXVKwMI2aFD1suheLLjffvRm9z%2F3gJthpXC9KNzl0c1TFtnJVcWhAQ%2FJMUMYShjmCxxMhlayTUNi731siKyeZGj2mg7JzEmEx6oLjjGZpZCraMjyOBh3slkaDFSBLV0ZJ2JDHTig%2BE4SnGfdszZAGIyWsmBlpFKLPFTNrsKhlJ3V6SA7Wt1a%2FP7i5FvNcmKtDzwdkwudolXXJ02x0qym%2F0SK%2BZGXTFKYr4YuSNX674GVdVuBUrt02q7WTZx8hTE7ysNSEUpoLLU5c%2BcbUJlBxEsr%2BUr0%2FbvF7NNRSp5ituyMle51b13VTBeA0IVwTX0Zh3xs4ODpe8koaHsiLfQuArN7RJg6vLC0vzvR0WzhlrUDSG9tl9h0TPYCRJirTKQh1j4o4u98Ufu4l1UDeC9XrqH79O4D8GbFum5Pm1TSfeHlf39VpxoMxaOelmzpeRWvrACDcKDPOQ9gMAzT3%2BRYVmhjQ7GH3IUnUQkPbD0AUIfTNo3TGcD9j5RM0K4PFF5E00gSCHL3LsD23RnTComdXJBjqkAYHIp4ePG0vJfLKJeJ8UVpsbIZ%2B0PXweZUeehPvzsRUXVICh98Kf8z%2B%2B%2B535llz4FQIAO4bOKOSi24g9gc1zwywNOZ5CThyAxFYG%2Fm2vjuBOt5zROHa2LHmrHp72BOPbq1Od5jkVkOvmc6ci8W%2B0Mh0KH9XJOo16xna3Y4CaqMFW5nPAspDWwNa599NzzFcZlTOsGqsXOHMhTgg1olvMbG%2BWCBUE&X-Amz-Signature=acd9894777c7caec8c5672ed860ad77dd321be7543de5af81ef01fddb927c097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
