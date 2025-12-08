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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DVIO2J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIZuIHXwqUz%2Blnv4NkaUaHbwebpW7S2vDrIbymcoDKIgIhAOPOotwfDrhLSTuBrZeWcfzi1C4ZCF3IY54QXK4g6vqZKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnrHbRy8nGNxFyPpUq3AMhs4UDd7aakFe%2FqeEWuCHqmFdCq4tJLvF3%2BuikH10qKjrBqGSmwdled6JgbaTrGVxu1WYwH5czdGFmbODvIJ0Y0JTbDfj2zkiLCnDoNRK8%2BUjOAiobMl10uSP%2F9j8nOHT4zP5xHeUHX8uckvTsTK%2BUHKxJncxWUunIwAHKA610fc5MUVhjQn%2FDT5rbgqxcTqpm%2FLDRZNJVi0Q%2FDx9%2BVCW82%2F2OBC7t9cX9ioSAhi3%2FY9HeMStVn7ZJRiPBy7CTnnYxgPAUgpT2G5mkQQnlqzRkw0yPFT3WBmAp2QKz1OfPBobJI%2BSg7Ofz2bi7gNIA4NFVzNBBvmgxwACpBU8Hi4u0worJquPDEP62fGW%2F9%2FpoKlekYeJP5%2FWy8j8avcpFpSFFxJvrl%2FFIFg%2FfomT5i6DHxII8%2BlAnt3MB67ZjQyq3yDuJrlabwDSEtrqqXEYKorKvayBiUDXidD4wtQzZfL3JH0%2B4HE84qX0GiuLRN3DZsktCLmgjTTXWISkyLquNSPto0PXmrWrsc%2BEK77C2lmfSwApMfYxURJMiZjxF6KcpwBoi1UkfsZlQjIf3o%2FHG%2BsHu1CQd5xX9XigHg371%2BAWR6q6CZTq04t1dGVi6mvSe1px63UwYPBpTvHFyUzCvodjJBjqkAa0LuIaf7qnd0Nype90kPufG%2B%2BT%2Bv1rtgnJEEKyhbpf5koaE6Imjoh4Lmnras%2BOziyZXgm80V%2B8jVLLqPPOzh%2BqoPblwp1y1kdUBq1I2DPryfls%2BqCa4FCDskQcrRIUWjfPL2U1RguGLPuH9rt%2FhHCzqrm3yEhc%2FdrBDmqyY6NovkpcZ1NaUX7%2B8C%2FpI2zzPsrCvYLYDFcxBVm3Ucd%2FWWdfKwMCH&X-Amz-Signature=0713b4c632659515f7159264f6fa8595367130c0aaf8c21670a6eb43b7a4f0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DVIO2J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIZuIHXwqUz%2Blnv4NkaUaHbwebpW7S2vDrIbymcoDKIgIhAOPOotwfDrhLSTuBrZeWcfzi1C4ZCF3IY54QXK4g6vqZKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnrHbRy8nGNxFyPpUq3AMhs4UDd7aakFe%2FqeEWuCHqmFdCq4tJLvF3%2BuikH10qKjrBqGSmwdled6JgbaTrGVxu1WYwH5czdGFmbODvIJ0Y0JTbDfj2zkiLCnDoNRK8%2BUjOAiobMl10uSP%2F9j8nOHT4zP5xHeUHX8uckvTsTK%2BUHKxJncxWUunIwAHKA610fc5MUVhjQn%2FDT5rbgqxcTqpm%2FLDRZNJVi0Q%2FDx9%2BVCW82%2F2OBC7t9cX9ioSAhi3%2FY9HeMStVn7ZJRiPBy7CTnnYxgPAUgpT2G5mkQQnlqzRkw0yPFT3WBmAp2QKz1OfPBobJI%2BSg7Ofz2bi7gNIA4NFVzNBBvmgxwACpBU8Hi4u0worJquPDEP62fGW%2F9%2FpoKlekYeJP5%2FWy8j8avcpFpSFFxJvrl%2FFIFg%2FfomT5i6DHxII8%2BlAnt3MB67ZjQyq3yDuJrlabwDSEtrqqXEYKorKvayBiUDXidD4wtQzZfL3JH0%2B4HE84qX0GiuLRN3DZsktCLmgjTTXWISkyLquNSPto0PXmrWrsc%2BEK77C2lmfSwApMfYxURJMiZjxF6KcpwBoi1UkfsZlQjIf3o%2FHG%2BsHu1CQd5xX9XigHg371%2BAWR6q6CZTq04t1dGVi6mvSe1px63UwYPBpTvHFyUzCvodjJBjqkAa0LuIaf7qnd0Nype90kPufG%2B%2BT%2Bv1rtgnJEEKyhbpf5koaE6Imjoh4Lmnras%2BOziyZXgm80V%2B8jVLLqPPOzh%2BqoPblwp1y1kdUBq1I2DPryfls%2BqCa4FCDskQcrRIUWjfPL2U1RguGLPuH9rt%2FhHCzqrm3yEhc%2FdrBDmqyY6NovkpcZ1NaUX7%2B8C%2FpI2zzPsrCvYLYDFcxBVm3Ucd%2FWWdfKwMCH&X-Amz-Signature=73ef9c82c42134263bfa56d51097c8c00a195ed7f1ea67589e972202068e903a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
