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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2AYRCXF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDloWA7tt%2FfxF7Mm5jdRnGHJ7wpBZqd2CGO1UgagEplWQIhAMHgxfVZJFDLN03qblEA8ZyLmPmQNdxHXxWUO%2BeR%2BWTfKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUe%2FxuQWKMwO4wil0q3AMeDlAFsJJ%2FSHqIzPo2R99ftBIj6kUnDWOMYey66iXAvG4pQYNu1L5D008KwoS3BtEa31UtvuWNhRZ0tywThvxALiWhbHdKIrNQVP1zkX5PQHN40ozFzkF0e3rWlIR3lQSRN6fK0NzTxdlK9hMMxbr0PScGR6i4jZyxchdhi4zOIeSc1YUUVBUrT59B348DeM8pxAnrAqWUX%2Fv%2B2e0O3lVXVVy8L4ACLsqgeN5%2FdWTCRT8wJAvmVF%2FqQft7CruY%2Bcjl31fQg9nqkBLt4XxyI6Cgg2FAnIjZdQfq1YUEHk6DHvp9mj7E2RP0oSJ%2B%2BA%2Bj4YwfIeRQAzUmpI6a7dv%2BLvrSrtBwn72Him%2F68VejzbihzM23DXDjSLsx1qNS2HRHkIHIC9CyC990iy41jfmRiz%2BEgQ7ifE9hpjjhagYz6skIrZtP1S8N7C2GoIzyPsyOHXJSJj5iTsVCFK9mA7hWwdgpB49qAlK6M0qc4r%2BSsxSAwKbacLVdaacZbYO2c6fhmKQM36xIIhwXzl%2F5bxqE9h8oWA1EnZnoUPXH%2FCl%2FrRWhqP%2Bp7eBuLPKd0wRXO9DIyY1%2FMUkFvzs63bQk8PlvlJaFPWmXP97Ri0T4L%2F4q1oQux4dgy0W%2BDtIeINW3VTCrn4vKBjqkAQRhpEkQPlDib572ZtoaK2R0h%2BaHC%2Bev%2FpQJsHQSe%2FAiVGm7FrrMEP80MHtVJpTD6t2CRAum4n5q0k%2B6zQDjNB8FIzdD%2BZdi3n51iq1ycQ%2FDRWX5Gkx243hNLeLBP5A7LHJOGubekuVo%2Fl7ZDe3s3gDcXnAHI2DQSb%2BJBu7fNKNB%2B8z9JTiN7iO9HTISn%2FHbFKLMFlhFS0u%2B2I%2Bx2l%2B5Uc5z8xWj&X-Amz-Signature=ddd904bae962a8d281009fe08d090c939d7933d5d11664b8c4af7121d2cf35c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2AYRCXF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDloWA7tt%2FfxF7Mm5jdRnGHJ7wpBZqd2CGO1UgagEplWQIhAMHgxfVZJFDLN03qblEA8ZyLmPmQNdxHXxWUO%2BeR%2BWTfKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUe%2FxuQWKMwO4wil0q3AMeDlAFsJJ%2FSHqIzPo2R99ftBIj6kUnDWOMYey66iXAvG4pQYNu1L5D008KwoS3BtEa31UtvuWNhRZ0tywThvxALiWhbHdKIrNQVP1zkX5PQHN40ozFzkF0e3rWlIR3lQSRN6fK0NzTxdlK9hMMxbr0PScGR6i4jZyxchdhi4zOIeSc1YUUVBUrT59B348DeM8pxAnrAqWUX%2Fv%2B2e0O3lVXVVy8L4ACLsqgeN5%2FdWTCRT8wJAvmVF%2FqQft7CruY%2Bcjl31fQg9nqkBLt4XxyI6Cgg2FAnIjZdQfq1YUEHk6DHvp9mj7E2RP0oSJ%2B%2BA%2Bj4YwfIeRQAzUmpI6a7dv%2BLvrSrtBwn72Him%2F68VejzbihzM23DXDjSLsx1qNS2HRHkIHIC9CyC990iy41jfmRiz%2BEgQ7ifE9hpjjhagYz6skIrZtP1S8N7C2GoIzyPsyOHXJSJj5iTsVCFK9mA7hWwdgpB49qAlK6M0qc4r%2BSsxSAwKbacLVdaacZbYO2c6fhmKQM36xIIhwXzl%2F5bxqE9h8oWA1EnZnoUPXH%2FCl%2FrRWhqP%2Bp7eBuLPKd0wRXO9DIyY1%2FMUkFvzs63bQk8PlvlJaFPWmXP97Ri0T4L%2F4q1oQux4dgy0W%2BDtIeINW3VTCrn4vKBjqkAQRhpEkQPlDib572ZtoaK2R0h%2BaHC%2Bev%2FpQJsHQSe%2FAiVGm7FrrMEP80MHtVJpTD6t2CRAum4n5q0k%2B6zQDjNB8FIzdD%2BZdi3n51iq1ycQ%2FDRWX5Gkx243hNLeLBP5A7LHJOGubekuVo%2Fl7ZDe3s3gDcXnAHI2DQSb%2BJBu7fNKNB%2B8z9JTiN7iO9HTISn%2FHbFKLMFlhFS0u%2B2I%2Bx2l%2B5Uc5z8xWj&X-Amz-Signature=c1a8b150244c56ea4418f0103746c75569621a2f4c17b22072160eb2503168ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
