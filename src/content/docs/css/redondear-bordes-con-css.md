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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6EC2KOK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJkr3RRTOIEkK8o7w5YKfYNVs%2FMN0OYEHy2s6AFZOnJgIgB5WPCbbRzU554IHlIYDQpvqAB6aWoKMAlfQi8Qo3aPgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeWcb5pZZkmS%2FdZcircA8Q6MBRdhzQgKYAwdgoB%2BgKpRzi6xYv%2FWVj8KcDnBMakI4PWgdQbxWmdV0UXOqO8qIcB8Iq1l0foCfuVjdmvUuwEnHj7%2FP8Jj715lf7t46GOHD6Np5EFE8eWuH8Voe1hQaEAQx7QXUyXJlbvalecgALuNnS3HOjI07HWO5qMCza4OrLtE41d7QFuPedi0cVH%2FcpgK1heHYoADZgVT7l57nk%2F9gIXrrzyGb82rkxcLopFdRKPZqJrFIAnbaU67TY6seyox80YjO40R7BTIJBW4RTaheZqgUZm5EjBtZaDs0wUUem0nY27ZeDw5tAkONC3iZFilEGDZxLrCJFv3Kku87j%2FqhoyZ8Yw%2Ft64HcwPwsNwRJfqda6Zo6DLkoD0wH2rg1wR%2B25dD1ZVE7AN%2FZae%2BsVw2Z%2BVWHhkEj%2B60INVMh84WMRrFznnbfG%2FVQ51ZtPLU9Pog%2FgXEvmd7geKa4sHz%2F4nUnCeOB5IAUH3qoBWLKKIAVbdJchXJx0hM5alRqCFTnwYp2AzkNVNA4SofjwfoV9j12Q3f3iDdOxoNqVkhUBtI5bdS4CgBZg3IqwqJgZLRDfqNfpGMj5cbVKYh1rGEW5jX434uf3Q2crxlYh2vc5XrxKa8WJEHSmz%2FinzMLrt2ckGOqUB6nfASefrmwCl3h1HOiZex6F4ggwMUyfiNSY2dcsQDNuPBKcRedawPtTFipKxG5TzbUYMYvjKLlAPya%2B0D5lKC7V1CqDVAI4wrpCgJubOiWeZppJ3xnMTCvn9XOhVrB1a3IZLqER6kYVOzBKLOg%2F4I%2BjjqGSaMWoWVawZ%2FRsEyx6NSpK6T7XDh3fVA8rR2K6BQxVwQDRHkySeXBX9OZ2z1nJlwo6f&X-Amz-Signature=c58410bb37566bf56b89fb58fd5209f03f7cf79818199f9eabfabd81c0ce3c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6EC2KOK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJkr3RRTOIEkK8o7w5YKfYNVs%2FMN0OYEHy2s6AFZOnJgIgB5WPCbbRzU554IHlIYDQpvqAB6aWoKMAlfQi8Qo3aPgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeWcb5pZZkmS%2FdZcircA8Q6MBRdhzQgKYAwdgoB%2BgKpRzi6xYv%2FWVj8KcDnBMakI4PWgdQbxWmdV0UXOqO8qIcB8Iq1l0foCfuVjdmvUuwEnHj7%2FP8Jj715lf7t46GOHD6Np5EFE8eWuH8Voe1hQaEAQx7QXUyXJlbvalecgALuNnS3HOjI07HWO5qMCza4OrLtE41d7QFuPedi0cVH%2FcpgK1heHYoADZgVT7l57nk%2F9gIXrrzyGb82rkxcLopFdRKPZqJrFIAnbaU67TY6seyox80YjO40R7BTIJBW4RTaheZqgUZm5EjBtZaDs0wUUem0nY27ZeDw5tAkONC3iZFilEGDZxLrCJFv3Kku87j%2FqhoyZ8Yw%2Ft64HcwPwsNwRJfqda6Zo6DLkoD0wH2rg1wR%2B25dD1ZVE7AN%2FZae%2BsVw2Z%2BVWHhkEj%2B60INVMh84WMRrFznnbfG%2FVQ51ZtPLU9Pog%2FgXEvmd7geKa4sHz%2F4nUnCeOB5IAUH3qoBWLKKIAVbdJchXJx0hM5alRqCFTnwYp2AzkNVNA4SofjwfoV9j12Q3f3iDdOxoNqVkhUBtI5bdS4CgBZg3IqwqJgZLRDfqNfpGMj5cbVKYh1rGEW5jX434uf3Q2crxlYh2vc5XrxKa8WJEHSmz%2FinzMLrt2ckGOqUB6nfASefrmwCl3h1HOiZex6F4ggwMUyfiNSY2dcsQDNuPBKcRedawPtTFipKxG5TzbUYMYvjKLlAPya%2B0D5lKC7V1CqDVAI4wrpCgJubOiWeZppJ3xnMTCvn9XOhVrB1a3IZLqER6kYVOzBKLOg%2F4I%2BjjqGSaMWoWVawZ%2FRsEyx6NSpK6T7XDh3fVA8rR2K6BQxVwQDRHkySeXBX9OZ2z1nJlwo6f&X-Amz-Signature=0e6e28f475d6d434480621e95ca95262de33e9119f1eb1cced25c128776dfedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
