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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBPAAXU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfqSGe8L5I%2BCkNHSqDzpezsLVOB2SNcuf7%2BhOXHvkgnQIgXIeAiGLrWUjo%2BnxAcF0IyJf95LEOLB9z6QDLdsBQkh4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxdsDBrPqiryOGHhircA8pTQ8EBnwAtzlGOkXVUYoJBqDtn6rVk6%2BMM6jITfS%2BHWUMwuTjmAmJ5apLtIJAM0td4wKxYkGVGJuto1aDU%2Fliq8J9ubqXxjPhbdM7b5vMPY%2B8GsCDvEbYbkn3KzZfN1%2FdT3cma1vqreC9n%2B1wmmxOJz5PzgXjchTFlrYBN7EBulCYYuow1kV89ns1HtR1bPutXs3%2FieX6uDDR5S%2FswDo4xPWYaxgj3DlRgXAH6dKn7bwoXbMcoCPp4aY8kocJEK5GcwkGK9%2Bz%2FHZyur9%2Btq5hDaS7uc8DomaGVMWmATRXL7tIpbAfpUwsQUQLjNrmCrYRioj9QlDIYi17SmCn0XiYVpjCt7zHMQcW2szsQUz%2FybNSU4ckEdupsV2m%2BkrRIQ31gC7Ck0qWV1p1YaTmABMC8AZBdM4TRME40g4NHVX%2BRy1RRuKcNzch%2FV4OMi06XoaozAEEBrc2na3gsRGMD%2FpIvoEqu2JbuS11fEKCqClZMYhoGehXHbyxarimZjPGopl0JmRiI%2F50Z4yslKFZgcr13gaSG2NZFU4SiMV2U%2B2olIBdO%2BsupbytdfW%2B2LnXv1r0G6RCa0pS%2FjSOeQHoUC56rABoXfvr%2BgosrzHucjSdN1J8ZJGBSgXnPmEa0MInK3skGOqUBPAbF1yL62Rpt2UXkB4EuDhZY3zr5jKGG6A0ag6shHNaWx9xF6fb5OxiyLXxZLa5tGT2LrezcOSivAI8vwCtE0wne%2BwYr2b%2BSwBVWkoNVdo8UO274Ta2BqOQlRHw9D1Gnv7SZVzdwduNcEqbYHLFs7g3DeVk45Wva1lBnQ00Icd3p%2FbOLVK%2BYLZUiCntP9Dy3zps8d66rglEtyiiRvZ1lYszylgWa&X-Amz-Signature=2fa184d115ba4a152890453cd57fa7401e7d7005a106cec6844e541b407ff5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYBPAAXU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfqSGe8L5I%2BCkNHSqDzpezsLVOB2SNcuf7%2BhOXHvkgnQIgXIeAiGLrWUjo%2BnxAcF0IyJf95LEOLB9z6QDLdsBQkh4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxdsDBrPqiryOGHhircA8pTQ8EBnwAtzlGOkXVUYoJBqDtn6rVk6%2BMM6jITfS%2BHWUMwuTjmAmJ5apLtIJAM0td4wKxYkGVGJuto1aDU%2Fliq8J9ubqXxjPhbdM7b5vMPY%2B8GsCDvEbYbkn3KzZfN1%2FdT3cma1vqreC9n%2B1wmmxOJz5PzgXjchTFlrYBN7EBulCYYuow1kV89ns1HtR1bPutXs3%2FieX6uDDR5S%2FswDo4xPWYaxgj3DlRgXAH6dKn7bwoXbMcoCPp4aY8kocJEK5GcwkGK9%2Bz%2FHZyur9%2Btq5hDaS7uc8DomaGVMWmATRXL7tIpbAfpUwsQUQLjNrmCrYRioj9QlDIYi17SmCn0XiYVpjCt7zHMQcW2szsQUz%2FybNSU4ckEdupsV2m%2BkrRIQ31gC7Ck0qWV1p1YaTmABMC8AZBdM4TRME40g4NHVX%2BRy1RRuKcNzch%2FV4OMi06XoaozAEEBrc2na3gsRGMD%2FpIvoEqu2JbuS11fEKCqClZMYhoGehXHbyxarimZjPGopl0JmRiI%2F50Z4yslKFZgcr13gaSG2NZFU4SiMV2U%2B2olIBdO%2BsupbytdfW%2B2LnXv1r0G6RCa0pS%2FjSOeQHoUC56rABoXfvr%2BgosrzHucjSdN1J8ZJGBSgXnPmEa0MInK3skGOqUBPAbF1yL62Rpt2UXkB4EuDhZY3zr5jKGG6A0ag6shHNaWx9xF6fb5OxiyLXxZLa5tGT2LrezcOSivAI8vwCtE0wne%2BwYr2b%2BSwBVWkoNVdo8UO274Ta2BqOQlRHw9D1Gnv7SZVzdwduNcEqbYHLFs7g3DeVk45Wva1lBnQ00Icd3p%2FbOLVK%2BYLZUiCntP9Dy3zps8d66rglEtyiiRvZ1lYszylgWa&X-Amz-Signature=84ee0331a9bdd889b28c0fe2868ccc2099ecb4321969bbcdb4c56ef6fbf0665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
