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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R4ZBPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQHVfC7WaIHXIYQUg%2BUHnSJaaZRYRyqxa%2FPtld2vz%2FAIgBUeVXqoy1EqdGJ7RNkM%2FySkFJjdbgkUmlrUStXGIc6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCVm8Se5H2%2BuKOvPyrcA%2BFc4kfDMr0M7LkFjPwWAY9piTBVtmR0eTgZOOSiu8AW3deblnaOB28%2BmswPWdGQXN7PmRSAmVE4INqhPEzo%2BWo%2FWHyAYooRiZSuQJEWX7Py4TQDiANvS%2BRqqpf7teTCgPvqcYwPW%2Bv0A4jcdbzuQjY3Uh80UAcpEXMl2acvJBl%2BmyRFEZaRoAEXFHjUvmAFt4yofyhZPT4MHN9MdaKU0UcDsfGM430gblWzj%2FEy4UbpFVteloHtCEslLsSaHgUlG1JOEBvsYTKcnJnWvrqcGvarykQANXbqHiO7EyvD1mtZa8vqTpDITrlXvrd72CeD8dy9tLXMDwNdX5in1EwzNPshUNuy5%2B3xGql9hUBJnAMtO0XTaS6Smk7do6kQYwfk4e%2BXf0qJ5eTWNOo9IeymbQzF1IgA1CwW6sd7%2FaIdF2pfnXz1eMaptmwo0CA3DTUnnbhZ1YLHPy4d%2FjyhFaCnD8bFWiWIkA4udNEzE7gFGooIVhmDhXmzKIldvVZcHzdSDF55FMqzvEOA9fv2OAkiX823B0UNCVUFezj9TtoYskEMYORKg8hdnIZ6lNW2cyX0UiC00DyGh3AwmV79g1QhivJkEMt6BooStG1ONyFH2bnwFYcgD5x6a7BFAWZfMMKMyMkGOqUBlB0Tl0Ayf%2Bj1I4GOLghlG3SFS7YVUn6iasl%2FKWJB8QsrYHAD3ZyQixQk0w%2FxLWXykPHDYnFoOfiYgMY7ox5FNvLMPCVai1w6ETRQs9A%2FAOJ%2BposOyQqGmIkr18mpL%2Bfvy96hqQpISYCX10O57mMr3iSmpNkIIZXZFbI8%2FAZKJ851lOZrSfWRvFVWZ87Z%2FOHpLB6LU%2B5bVbMf2aOZSNxFN2TuTk30&X-Amz-Signature=97be2eab8087724c0ee9743421868a81e23ba9c4334749064214a9e99a24cd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R4ZBPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQHVfC7WaIHXIYQUg%2BUHnSJaaZRYRyqxa%2FPtld2vz%2FAIgBUeVXqoy1EqdGJ7RNkM%2FySkFJjdbgkUmlrUStXGIc6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCVm8Se5H2%2BuKOvPyrcA%2BFc4kfDMr0M7LkFjPwWAY9piTBVtmR0eTgZOOSiu8AW3deblnaOB28%2BmswPWdGQXN7PmRSAmVE4INqhPEzo%2BWo%2FWHyAYooRiZSuQJEWX7Py4TQDiANvS%2BRqqpf7teTCgPvqcYwPW%2Bv0A4jcdbzuQjY3Uh80UAcpEXMl2acvJBl%2BmyRFEZaRoAEXFHjUvmAFt4yofyhZPT4MHN9MdaKU0UcDsfGM430gblWzj%2FEy4UbpFVteloHtCEslLsSaHgUlG1JOEBvsYTKcnJnWvrqcGvarykQANXbqHiO7EyvD1mtZa8vqTpDITrlXvrd72CeD8dy9tLXMDwNdX5in1EwzNPshUNuy5%2B3xGql9hUBJnAMtO0XTaS6Smk7do6kQYwfk4e%2BXf0qJ5eTWNOo9IeymbQzF1IgA1CwW6sd7%2FaIdF2pfnXz1eMaptmwo0CA3DTUnnbhZ1YLHPy4d%2FjyhFaCnD8bFWiWIkA4udNEzE7gFGooIVhmDhXmzKIldvVZcHzdSDF55FMqzvEOA9fv2OAkiX823B0UNCVUFezj9TtoYskEMYORKg8hdnIZ6lNW2cyX0UiC00DyGh3AwmV79g1QhivJkEMt6BooStG1ONyFH2bnwFYcgD5x6a7BFAWZfMMKMyMkGOqUBlB0Tl0Ayf%2Bj1I4GOLghlG3SFS7YVUn6iasl%2FKWJB8QsrYHAD3ZyQixQk0w%2FxLWXykPHDYnFoOfiYgMY7ox5FNvLMPCVai1w6ETRQs9A%2FAOJ%2BposOyQqGmIkr18mpL%2Bfvy96hqQpISYCX10O57mMr3iSmpNkIIZXZFbI8%2FAZKJ851lOZrSfWRvFVWZ87Z%2FOHpLB6LU%2B5bVbMf2aOZSNxFN2TuTk30&X-Amz-Signature=d83ef460620fb510e674780f8dec0c1db2dd71e43a423d6291a9dec0268370e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
