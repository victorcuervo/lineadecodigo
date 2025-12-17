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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURVTHIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBshe6FZYMdGBqGvCMsFtX5SZHLZucNnR7AYpPerfuHWAiEAv6sxwPXMjSk5VCssMnz5chMkkKDKLzrBWNpXINmXVMsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHXsrP%2FfY7BvxUFVBCrcAyGpHh5TRsd6O8TzRWNuDEaqJuyDsfA7Rn%2BgkWWfHYBdeQdfjWL8cIw2u7VT5OmSnVWILkI4YYW88MDDEfGymHLqRenf9apyWmV1iBpexmfJBFxqb5NDHNo3KYQ4nnxStdSO2%2Bp1fhOZyqaxk2JKmVxB8opXvzzHkfXeen38IVMsskd3ZjvYSuDD9%2FhNLSUFinVDKqC32RDsYE7wMeeQ1X84G0t6f0Y495oTrdFCPr8eVfAx5eTrsUZOJ3d3YlksV016glz2C3JF0%2FC%2FE%2BVJ4iGPw5d0Tx1HLOF4MGD4UEo%2BhucBhie4nnUJErNYK7EXqAFn5rk3vERvQbfusF3O4AS7CYqoLF2Jw4rAtZdofkJhxC%2B1%2BfE6wZtpsWDF%2BsNkUwWUUZ0hB9ax8ITXk887l7CfpoEgbn4IRncU5fQK2I8yjbLZQQc33zrzRwm0Fh9cWw3KbMegBiVofdu8aIofC1%2BTtrlDH%2BBgCekxf912a8T%2B%2Bg5Mk7akStYAQtemD8e4UCdOIfFaAmF3U7sbI51ccUn8l7EFB7MacOMCicvAXjOMte22ff4EPnSdvXo274cFXWHXjFIr5vFCk3N%2BHdjK2AqsupWRXDFFiAKDAieYZhd5gKrnSPLIFQFL4jtOMOvvicoGOqUBD4AFKNqDPT4dwFLlxwHct5KNX5DBa%2Fy8s%2B0Q5YkZ8cB5aeUJCAbuGZR8WXgffKPIfFYuIsHv1HyuqHqM0lBeLRw12LgJjSwwfLhiHltzK%2F%2B9oRS1euM0ZC6EFHNneBt9SHaFs29nPXMar1DUfOFG3bnTDqs%2Bd9hZY%2FWiCYwQ3vfs38AMHSEV45DvCoWjzHx8d7ulM5%2Fda%2FM78Ktc4OH7v3UFii44&X-Amz-Signature=aa516e7e61183062ca745ed1aa8ce69f97eee46a61d1049ee9cac4df02fbf22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURVTHIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBshe6FZYMdGBqGvCMsFtX5SZHLZucNnR7AYpPerfuHWAiEAv6sxwPXMjSk5VCssMnz5chMkkKDKLzrBWNpXINmXVMsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHXsrP%2FfY7BvxUFVBCrcAyGpHh5TRsd6O8TzRWNuDEaqJuyDsfA7Rn%2BgkWWfHYBdeQdfjWL8cIw2u7VT5OmSnVWILkI4YYW88MDDEfGymHLqRenf9apyWmV1iBpexmfJBFxqb5NDHNo3KYQ4nnxStdSO2%2Bp1fhOZyqaxk2JKmVxB8opXvzzHkfXeen38IVMsskd3ZjvYSuDD9%2FhNLSUFinVDKqC32RDsYE7wMeeQ1X84G0t6f0Y495oTrdFCPr8eVfAx5eTrsUZOJ3d3YlksV016glz2C3JF0%2FC%2FE%2BVJ4iGPw5d0Tx1HLOF4MGD4UEo%2BhucBhie4nnUJErNYK7EXqAFn5rk3vERvQbfusF3O4AS7CYqoLF2Jw4rAtZdofkJhxC%2B1%2BfE6wZtpsWDF%2BsNkUwWUUZ0hB9ax8ITXk887l7CfpoEgbn4IRncU5fQK2I8yjbLZQQc33zrzRwm0Fh9cWw3KbMegBiVofdu8aIofC1%2BTtrlDH%2BBgCekxf912a8T%2B%2Bg5Mk7akStYAQtemD8e4UCdOIfFaAmF3U7sbI51ccUn8l7EFB7MacOMCicvAXjOMte22ff4EPnSdvXo274cFXWHXjFIr5vFCk3N%2BHdjK2AqsupWRXDFFiAKDAieYZhd5gKrnSPLIFQFL4jtOMOvvicoGOqUBD4AFKNqDPT4dwFLlxwHct5KNX5DBa%2Fy8s%2B0Q5YkZ8cB5aeUJCAbuGZR8WXgffKPIfFYuIsHv1HyuqHqM0lBeLRw12LgJjSwwfLhiHltzK%2F%2B9oRS1euM0ZC6EFHNneBt9SHaFs29nPXMar1DUfOFG3bnTDqs%2Bd9hZY%2FWiCYwQ3vfs38AMHSEV45DvCoWjzHx8d7ulM5%2Fda%2FM78Ktc4OH7v3UFii44&X-Amz-Signature=46459b8d4039fa5c9845dcb15b32d72a75c9ad2a450d5fd4d4aad594fdff3ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
