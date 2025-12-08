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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSAO2PX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkFNz%2FfUG%2FFLm0Oy%2F%2BnshNIYkvDXZ%2BSkGPxB4mm9PKSAiEA%2BmJlHeTH3Qy6gk%2BeN5Cxt%2FjbxWL6m3sqzmPUBzys8CcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5mo8hu6O7Jbw6P1CrcA5RG9U4eVHe45BsLXC%2B6YG%2F2gNuNMWYWvN7e1jVhMxJ3s4mZKzKyrb0paTLpQiMfU%2BDSMC7NdGBRamW%2BACslYxT3NblWTgJC0HtruJZsv%2B9k7dygfICFgN7EPVwtnf3n2zFwIQc1e80j3UcZGYWWyu91q%2B0GahQPBpbIdtbMIL3QbWaoKEaOU%2FVQZcjXoNSMY%2BF6cMLeo8CLUVf6Fa%2FA9wDUdEGEnOnb5z%2Bi0l4UCkGpO1sPJ25OclC9LNVKWIPK5Kb7E7lTqZWP%2FLT6TCWIGa%2BNVzSvTcfKNgxooTKK2ZWIys4vzwUGmDve4h7EJeC7962RpYec%2Fwiv4ppmiCWZMuSpltwS45LVpPF5qP6lY6QrW%2BqMg9udHvnrpk1Og43RGXBcej3PhX6T334D%2FMck%2FQA1IoU8uQu6JTuD3kxA0vsVe1pCssUitWm9z2n0cgvD95YviFYODlKhK5%2BECUTOr0ZISWcWq1UGsZXFuX0JhlpBnJuabNd4SjT4NLH2IvYWSp0A5OHYOeCup7Bbx%2F33hHCmRt%2F7HY28RQpHegZcRMpyzBhtFING55WTGQFtfV6xWWcD80fj2uQSlKWaxY5kAevFsKisEHtLJpdOWq1UAOGmJBbLCOOJkKKAHUv9MLqA3ckGOqUBLUQ2Z72TxHWvxzM%2FFXGkegeqXdytM8QwBSg%2FOSemNr7POe989O5lop%2Brn5azFZyBv3mlQNBbYHlBcmq29NSjn6RHGeYBj7Qj%2BnrLWaI9v3MwBON823yhz9lF3tCsa6b1vwzUYJdgQzmLVD8PafDW33OMV%2FLcLXVb%2BNr%2FzdAyyZWynKO%2FFFuoYlBMNq2ITD9naonKHfWtsnSVLl%2BWbLZbchJfneZF&X-Amz-Signature=fe402367a29a5fd5eb9c9779f237fed1dd321b1dbbd869bc984d893cc413a1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSAO2PX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkFNz%2FfUG%2FFLm0Oy%2F%2BnshNIYkvDXZ%2BSkGPxB4mm9PKSAiEA%2BmJlHeTH3Qy6gk%2BeN5Cxt%2FjbxWL6m3sqzmPUBzys8CcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5mo8hu6O7Jbw6P1CrcA5RG9U4eVHe45BsLXC%2B6YG%2F2gNuNMWYWvN7e1jVhMxJ3s4mZKzKyrb0paTLpQiMfU%2BDSMC7NdGBRamW%2BACslYxT3NblWTgJC0HtruJZsv%2B9k7dygfICFgN7EPVwtnf3n2zFwIQc1e80j3UcZGYWWyu91q%2B0GahQPBpbIdtbMIL3QbWaoKEaOU%2FVQZcjXoNSMY%2BF6cMLeo8CLUVf6Fa%2FA9wDUdEGEnOnb5z%2Bi0l4UCkGpO1sPJ25OclC9LNVKWIPK5Kb7E7lTqZWP%2FLT6TCWIGa%2BNVzSvTcfKNgxooTKK2ZWIys4vzwUGmDve4h7EJeC7962RpYec%2Fwiv4ppmiCWZMuSpltwS45LVpPF5qP6lY6QrW%2BqMg9udHvnrpk1Og43RGXBcej3PhX6T334D%2FMck%2FQA1IoU8uQu6JTuD3kxA0vsVe1pCssUitWm9z2n0cgvD95YviFYODlKhK5%2BECUTOr0ZISWcWq1UGsZXFuX0JhlpBnJuabNd4SjT4NLH2IvYWSp0A5OHYOeCup7Bbx%2F33hHCmRt%2F7HY28RQpHegZcRMpyzBhtFING55WTGQFtfV6xWWcD80fj2uQSlKWaxY5kAevFsKisEHtLJpdOWq1UAOGmJBbLCOOJkKKAHUv9MLqA3ckGOqUBLUQ2Z72TxHWvxzM%2FFXGkegeqXdytM8QwBSg%2FOSemNr7POe989O5lop%2Brn5azFZyBv3mlQNBbYHlBcmq29NSjn6RHGeYBj7Qj%2BnrLWaI9v3MwBON823yhz9lF3tCsa6b1vwzUYJdgQzmLVD8PafDW33OMV%2FLcLXVb%2BNr%2FzdAyyZWynKO%2FFFuoYlBMNq2ITD9naonKHfWtsnSVLl%2BWbLZbchJfneZF&X-Amz-Signature=98323a13d234488e1d06bc4a23289b231cc09bcf499912556ad1e4c4d229cb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
