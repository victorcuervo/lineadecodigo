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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4I7ODS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2B%2FpY5CbfHhXDhgigmDHyfcZaXxafZ3UAW1XlbDbGAIgRhBKNkpmnH4XL5MJriKbB5AaIRSvc0WrWY2MSF%2BBNYgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvMs%2BmDcnu9aTIqoSrcA9agscLaZ2x0pCoh1fHAvtvUJFA5dfZAYfzyFohJ8PVrxyv6tjR6NoxwcOXRZ3fsKEftH%2F6%2FG8J1W3FoLdFNgOzie4DM5nBc7xhuQ6e5gAHwkQra7uQKmmUt7ErEqD%2BdT0fZV99rVKVMPD8GQz5ZiZ8PmPeSl4k%2FqeVsV11KPwXeGDVL45P3pXzI5GaHQn%2BklFtdOjQ1U8lMTaYH3%2FkmHFKmWfDVjjgONNonWnQNeqpOvS%2BXnbertfVDxaOoihJMEY5GFXH01aT4dzBhvOZrqQPkK0gZ%2BMwRR%2FpjlI%2FuidR99akW4hcW6MvIFX0oNAH9%2FeGt7rmhNfkuCu3OgyQVqjyIv9CE9aUftGmUqi2eKtOOJPfMuW6CUKHgxcmfeiN88Yk4tI%2BichCUAhEt09Sd5Hjx%2FWNJEqyIkTSI9zjpEJdFeBaK%2B4OhbHsZl5GgxOv4sbZZXbHTs7bJ0mQkE0NKbECEARa42LSI2IxJHCgO9FG%2FUE8CXVr8aYlJE20ADtIhOlnFvhx2WeOTZikUc9glg%2FX28DBA4iwvw2DOlTqI5c3S8LTOfDus8DwBnBu5no8wVAYPb6wuXx3LsdLSYr3lt1Gztgkhze1GP%2BETflxtxlTkTYF9RdNGosZ4Z0rjMM2Q28kGOqUBbIPxCXpMGien%2FA5a1vzi2NzcZXBJtkaoLzngS7aTWmkL2NSXXwVkUFTUwZQKcpUL0Q4Wx%2BepmTJLkHwGam%2BO1vBmACjHZiVVP4hKTSfakO6VFYfBUnqMogTk6Mjfhn6vKuFycc%2F2Sb3Ut8kiC%2Fmv60I%2BM0Pd5DshJYWx26s0lBPLeotABPqYKWXUgtdmAJZnMrDqHtUCVD52fjWTKMqA86eIgcoU&X-Amz-Signature=44243dcc510858468334579d3417724a31e903f2a6f53f2b42a9333894716f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4I7ODS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx2B%2FpY5CbfHhXDhgigmDHyfcZaXxafZ3UAW1XlbDbGAIgRhBKNkpmnH4XL5MJriKbB5AaIRSvc0WrWY2MSF%2BBNYgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvMs%2BmDcnu9aTIqoSrcA9agscLaZ2x0pCoh1fHAvtvUJFA5dfZAYfzyFohJ8PVrxyv6tjR6NoxwcOXRZ3fsKEftH%2F6%2FG8J1W3FoLdFNgOzie4DM5nBc7xhuQ6e5gAHwkQra7uQKmmUt7ErEqD%2BdT0fZV99rVKVMPD8GQz5ZiZ8PmPeSl4k%2FqeVsV11KPwXeGDVL45P3pXzI5GaHQn%2BklFtdOjQ1U8lMTaYH3%2FkmHFKmWfDVjjgONNonWnQNeqpOvS%2BXnbertfVDxaOoihJMEY5GFXH01aT4dzBhvOZrqQPkK0gZ%2BMwRR%2FpjlI%2FuidR99akW4hcW6MvIFX0oNAH9%2FeGt7rmhNfkuCu3OgyQVqjyIv9CE9aUftGmUqi2eKtOOJPfMuW6CUKHgxcmfeiN88Yk4tI%2BichCUAhEt09Sd5Hjx%2FWNJEqyIkTSI9zjpEJdFeBaK%2B4OhbHsZl5GgxOv4sbZZXbHTs7bJ0mQkE0NKbECEARa42LSI2IxJHCgO9FG%2FUE8CXVr8aYlJE20ADtIhOlnFvhx2WeOTZikUc9glg%2FX28DBA4iwvw2DOlTqI5c3S8LTOfDus8DwBnBu5no8wVAYPb6wuXx3LsdLSYr3lt1Gztgkhze1GP%2BETflxtxlTkTYF9RdNGosZ4Z0rjMM2Q28kGOqUBbIPxCXpMGien%2FA5a1vzi2NzcZXBJtkaoLzngS7aTWmkL2NSXXwVkUFTUwZQKcpUL0Q4Wx%2BepmTJLkHwGam%2BO1vBmACjHZiVVP4hKTSfakO6VFYfBUnqMogTk6Mjfhn6vKuFycc%2F2Sb3Ut8kiC%2Fmv60I%2BM0Pd5DshJYWx26s0lBPLeotABPqYKWXUgtdmAJZnMrDqHtUCVD52fjWTKMqA86eIgcoU&X-Amz-Signature=495669a6d955debc10b580f1dc239450da3853d1f9a3262a0d09fc61a2b006b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
