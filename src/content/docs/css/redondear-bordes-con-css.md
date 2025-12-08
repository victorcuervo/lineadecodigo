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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZ3NEBX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaNblv6AkJJRspWzGfkQpozI3HxoVpoEwbWFQH8fPRugIhAL5%2FUjQe6OENdnBnGXNNWPk5JTL%2BtkgYCDCgfr7WFFn1KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFhHbT7fRRseqDo7Mq3AM6gvgOxpolGUxQrHYBVi6UplsFj8h6SCtoT45vJ2Q9waxR2RnmCKcv37A6liiCgMlSL2Bvjo0tZt1ESRgbXaNoIBfNqnRP68RQ0yOu8P8YKy9J1AF8y0b0RvGM6A13TbjTDKx68LYn54RDInu8iZsxZDNgoJgykHrMHjbQtgSs5S9F1mEEqwZ%2FUrMdjYOAKEh77ta6Qkuz%2BT8ThhWMn54MoOfzOArDQS%2BX7gmZ6vaoCSyzHIdzx7DR0cyethDWl%2FsT%2BB%2BlRZEWnKRDyu6jC9lF14T03wNxFdz6B%2BkWZ0JhdjknFuYdrsL2IIb3zM1p8MAJfl%2BMtmNM%2BziQwF7TSYAGuFkx1X%2BzeygmGFtYXy307EcCtefIfj0gn8k8aszjnnURf2%2B63z9UAjgQZ1k7sUZbtFN9WhNOfDnnqfSi2iCGmlwSMHKSPW%2BEvVoa3G94mR6v6Z8Q6M0638FcG7z%2BuBMFdHEZgO1LNgRpRlIMzVEIHDUfu2%2FOCn1SRMifTn5c1mnFkHCSy8ApGAayeheC1lgWH6hsZy4rmbIPIwex5Gt7bl6k8q73BradUbuG6jLQCO4LUXFPuCHl0cSFKdkMLpL3Yq2YWVjfmaMGKRFvFtUIKR%2BFQ48zz9N3JN5FCjDRlNnJBjqkAV993YY8Ck5WhX7fFT%2BP4NeCb85GVSErlVaTuTTeXqZGpZUNeGbxBuHdzuiU2WZY4JMiXX9zlGDkCOl9aujjeR9x6Ks7QmIhsBRjPjWCc%2FnT%2FwCW%2F0B%2FMMakkOQr6cxOhbgWUKQdlCF0Tv%2FiT3eAUAL8KtNP6kV6QOhcY09X55AEFzplUCKZIa73kvs2WfKGEKiQjSLleO3k8wjkxOfZ1%2FXbcj1i&X-Amz-Signature=9cec73e32c5198621b16915e598265d3a518d8c072b8e796e0d2316a4fe58b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZ3NEBX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaNblv6AkJJRspWzGfkQpozI3HxoVpoEwbWFQH8fPRugIhAL5%2FUjQe6OENdnBnGXNNWPk5JTL%2BtkgYCDCgfr7WFFn1KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFhHbT7fRRseqDo7Mq3AM6gvgOxpolGUxQrHYBVi6UplsFj8h6SCtoT45vJ2Q9waxR2RnmCKcv37A6liiCgMlSL2Bvjo0tZt1ESRgbXaNoIBfNqnRP68RQ0yOu8P8YKy9J1AF8y0b0RvGM6A13TbjTDKx68LYn54RDInu8iZsxZDNgoJgykHrMHjbQtgSs5S9F1mEEqwZ%2FUrMdjYOAKEh77ta6Qkuz%2BT8ThhWMn54MoOfzOArDQS%2BX7gmZ6vaoCSyzHIdzx7DR0cyethDWl%2FsT%2BB%2BlRZEWnKRDyu6jC9lF14T03wNxFdz6B%2BkWZ0JhdjknFuYdrsL2IIb3zM1p8MAJfl%2BMtmNM%2BziQwF7TSYAGuFkx1X%2BzeygmGFtYXy307EcCtefIfj0gn8k8aszjnnURf2%2B63z9UAjgQZ1k7sUZbtFN9WhNOfDnnqfSi2iCGmlwSMHKSPW%2BEvVoa3G94mR6v6Z8Q6M0638FcG7z%2BuBMFdHEZgO1LNgRpRlIMzVEIHDUfu2%2FOCn1SRMifTn5c1mnFkHCSy8ApGAayeheC1lgWH6hsZy4rmbIPIwex5Gt7bl6k8q73BradUbuG6jLQCO4LUXFPuCHl0cSFKdkMLpL3Yq2YWVjfmaMGKRFvFtUIKR%2BFQ48zz9N3JN5FCjDRlNnJBjqkAV993YY8Ck5WhX7fFT%2BP4NeCb85GVSErlVaTuTTeXqZGpZUNeGbxBuHdzuiU2WZY4JMiXX9zlGDkCOl9aujjeR9x6Ks7QmIhsBRjPjWCc%2FnT%2FwCW%2F0B%2FMMakkOQr6cxOhbgWUKQdlCF0Tv%2FiT3eAUAL8KtNP6kV6QOhcY09X55AEFzplUCKZIa73kvs2WfKGEKiQjSLleO3k8wjkxOfZ1%2FXbcj1i&X-Amz-Signature=075e1daa0f73106ed27bd7074b0fa3c6b414a259169a3fcd0e988aca933d5afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
