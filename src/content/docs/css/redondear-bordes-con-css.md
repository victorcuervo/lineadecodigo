---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWVM2MX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDscevukPKCnFnbme%2FSy4a9FDDOrjXg4%2BNGXLtacs7bUgIhAOVzbDt%2FQvFzvEH%2FQLBHixvIqXcHRfkfyOlXOC13EVGrKv8DCDgQABoMNjM3NDIzMTgzODA1IgwfYEC0fpo7ADKvMzcq3ANlYk0wbdAqMjwFYtjJREurQ9OBFQTtRRjDm%2Fq1UQsMOg%2B2prgTJncM4tGGcPTaH7nCO%2FoHr5m41jyNzHkbFKutTZflkPmcSnCfMqA%2BZR%2BKl5JLkDWzj27GBDIzcABqDKtOzOC5rWmNZrhUDMHJ5LGqS%2BLUcYx6v9p%2F6FpxgRMKIz17Jy3T2LmSSpeSIRIEzPSDWLFeKA9zF5guq9MYLH3zmG0BzE4NEk%2B9iQzX2Zeh%2BrJv2hY0PN5icqQzbCglT541D0BpEs4bCA%2B%2FbGoFRgstUQ16xXe0pZIqa2N3R1uEwwDFpekQpZY%2FghNtyLFnWVGh9HaXr66i3Ut1xBDWWY0wB2ysXw9DKgj%2BdJXfoQgPOIR87%2BvF7a5mqD7DogftJ3qrlo%2FWPBKY4i4LDHTDkPWNdUhO74pg2JunrJdNNvtKUHxhF%2BRblshtxlxDCmhCRTIPE%2FUiekbEtEV6AYki7Eiu7BVjhIfZ1t9G%2FkYIDsLsmG0Yd3GWe7qkCbfGHEc1T2FQSGHN0pVtXmriiMF9bo3gIkgkNwH%2FzQ%2FutNWmVjkt0aIOmFcMerkzFfh20zkJit9zQXItWNqu3h9J8FOV9yqPoA0LtEhLZ%2B2MSRGukRiGHnEBzaks87NCO%2B0yjDCB%2BMLJBjqkAa5iw2GDaZXUBgyYWRV5DXF%2FlC%2FQydfQhMDloharrj%2BTqwa6Nm%2BYfT8a1qLDvR6SLlxTWl3LT0r%2BL3%2FLNyZOv%2B4wLm2O6oyfzetTeEXgIpQ8SdATrLcmAQVKdEXOn8Eck4s%2Fxe6h2bPEjsyTlijw23WXEA%2FStoPa0o3TuQcdwOPkluCZm%2FCYSjYxIK78KO4Oei%2Bj7qRuE28RUkuB0D4r6BoWW4hQ&X-Amz-Signature=3d319e4229c156046725774d6199ce00f30b7994e8e75cd4edfb83bc57b86ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWVM2MX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDscevukPKCnFnbme%2FSy4a9FDDOrjXg4%2BNGXLtacs7bUgIhAOVzbDt%2FQvFzvEH%2FQLBHixvIqXcHRfkfyOlXOC13EVGrKv8DCDgQABoMNjM3NDIzMTgzODA1IgwfYEC0fpo7ADKvMzcq3ANlYk0wbdAqMjwFYtjJREurQ9OBFQTtRRjDm%2Fq1UQsMOg%2B2prgTJncM4tGGcPTaH7nCO%2FoHr5m41jyNzHkbFKutTZflkPmcSnCfMqA%2BZR%2BKl5JLkDWzj27GBDIzcABqDKtOzOC5rWmNZrhUDMHJ5LGqS%2BLUcYx6v9p%2F6FpxgRMKIz17Jy3T2LmSSpeSIRIEzPSDWLFeKA9zF5guq9MYLH3zmG0BzE4NEk%2B9iQzX2Zeh%2BrJv2hY0PN5icqQzbCglT541D0BpEs4bCA%2B%2FbGoFRgstUQ16xXe0pZIqa2N3R1uEwwDFpekQpZY%2FghNtyLFnWVGh9HaXr66i3Ut1xBDWWY0wB2ysXw9DKgj%2BdJXfoQgPOIR87%2BvF7a5mqD7DogftJ3qrlo%2FWPBKY4i4LDHTDkPWNdUhO74pg2JunrJdNNvtKUHxhF%2BRblshtxlxDCmhCRTIPE%2FUiekbEtEV6AYki7Eiu7BVjhIfZ1t9G%2FkYIDsLsmG0Yd3GWe7qkCbfGHEc1T2FQSGHN0pVtXmriiMF9bo3gIkgkNwH%2FzQ%2FutNWmVjkt0aIOmFcMerkzFfh20zkJit9zQXItWNqu3h9J8FOV9yqPoA0LtEhLZ%2B2MSRGukRiGHnEBzaks87NCO%2B0yjDCB%2BMLJBjqkAa5iw2GDaZXUBgyYWRV5DXF%2FlC%2FQydfQhMDloharrj%2BTqwa6Nm%2BYfT8a1qLDvR6SLlxTWl3LT0r%2BL3%2FLNyZOv%2B4wLm2O6oyfzetTeEXgIpQ8SdATrLcmAQVKdEXOn8Eck4s%2Fxe6h2bPEjsyTlijw23WXEA%2FStoPa0o3TuQcdwOPkluCZm%2FCYSjYxIK78KO4Oei%2Bj7qRuE28RUkuB0D4r6BoWW4hQ&X-Amz-Signature=510d3d77b2cbc6cb07e97e1caae4fa9f46c8ea907665dc431051c3b814b9267a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
