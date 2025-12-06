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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVZ5IV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUGym1xXeLFh2YCoZhTK8ddm5G8MO7VwTq2XNodk40QIgO1MPqLsXrlvRpNN1EOlcm4dd6iM0oBFcOB%2BREaYa9a8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDII7U8fFQ0Ci8nnK%2FircA2BufC2SCwOVf2ILnnVSyDMKvYa0F%2FZrqGuly%2BZ21sup9XMcziuu0tVDo38XspqRLl4KBYToXywrkpLBh%2Fbh3Rl7udboNulZ6sckxkSj2RM6OyKvb7Ro%2BwbnN84qqGyoftSNc8PpN6G6HbJ6haV6IS0y0X281ygxt2anV7TDGryeJrAHAOlnbva%2BNYpbT1zxYkhJjJOk696WszY3qGpNzX%2FnxE6q1EorCSfGVMc3tFrCQuPR2VjqyiIbGPuAiogCt6iCahaFoZuvUxroawYNj730zbstQmf39lXOFAa%2FQ3r2TsQ95OoWMS%2BDWB8vE4UW4gAiG9iPpETYudrmlKTMkqn1DnwckyOxPb9r4EFetLn4iRJhX3MW9ugEqRft4l59i7%2BliEhpckJxsQEoucYh2bb71ayDuV9NSruwhwovRj6H4KDBf%2FPSQELcd%2BFUVLs%2BB197dvBL5t7kh13IZ5uPsSz4vT7i%2BNVNpTuRv5%2BUKW%2BAGL8aNU%2Bi7hHYA7CdxT0u4nQGuOPkvzCAqOoy2RuVbqmKor6d%2FxNzBkfkHsSpI7eVQEmiTmq%2FNvqNnwEJLVcM0ak7vO5A3aryRpuDTUoAgIsw8A4MCSSjeQNdLyIfLi78FlzzqXS8CmIycXBXMKn9zskGOqUBV7lYzwfgoOPkReStF4hYY3E%2FBYVmHTD4DDldIdzn0yk73J0vQTPrbdUXJJAQu5FsAgC2l3fOgkjmdfuFPin5Jrr9%2BmJ8%2FNvXXiWDc1LpZaVu%2FMQCPB71j0kyTqF%2BVPF%2Fi4YlzcIiUHoiRI6MiV%2BmijWMpdy3l5adMydO2vWNcj14r6gvlG0gocuKtsXTJEj7R7zCHk09K8xGQJHhn%2Fc%2BfjoCYd%2Fk&X-Amz-Signature=444b23a7ad764dc5cb09148dbc5994084f99513d2f192e1bd9d1a3dbdb8bc26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVZ5IV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGUGym1xXeLFh2YCoZhTK8ddm5G8MO7VwTq2XNodk40QIgO1MPqLsXrlvRpNN1EOlcm4dd6iM0oBFcOB%2BREaYa9a8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDII7U8fFQ0Ci8nnK%2FircA2BufC2SCwOVf2ILnnVSyDMKvYa0F%2FZrqGuly%2BZ21sup9XMcziuu0tVDo38XspqRLl4KBYToXywrkpLBh%2Fbh3Rl7udboNulZ6sckxkSj2RM6OyKvb7Ro%2BwbnN84qqGyoftSNc8PpN6G6HbJ6haV6IS0y0X281ygxt2anV7TDGryeJrAHAOlnbva%2BNYpbT1zxYkhJjJOk696WszY3qGpNzX%2FnxE6q1EorCSfGVMc3tFrCQuPR2VjqyiIbGPuAiogCt6iCahaFoZuvUxroawYNj730zbstQmf39lXOFAa%2FQ3r2TsQ95OoWMS%2BDWB8vE4UW4gAiG9iPpETYudrmlKTMkqn1DnwckyOxPb9r4EFetLn4iRJhX3MW9ugEqRft4l59i7%2BliEhpckJxsQEoucYh2bb71ayDuV9NSruwhwovRj6H4KDBf%2FPSQELcd%2BFUVLs%2BB197dvBL5t7kh13IZ5uPsSz4vT7i%2BNVNpTuRv5%2BUKW%2BAGL8aNU%2Bi7hHYA7CdxT0u4nQGuOPkvzCAqOoy2RuVbqmKor6d%2FxNzBkfkHsSpI7eVQEmiTmq%2FNvqNnwEJLVcM0ak7vO5A3aryRpuDTUoAgIsw8A4MCSSjeQNdLyIfLi78FlzzqXS8CmIycXBXMKn9zskGOqUBV7lYzwfgoOPkReStF4hYY3E%2FBYVmHTD4DDldIdzn0yk73J0vQTPrbdUXJJAQu5FsAgC2l3fOgkjmdfuFPin5Jrr9%2BmJ8%2FNvXXiWDc1LpZaVu%2FMQCPB71j0kyTqF%2BVPF%2Fi4YlzcIiUHoiRI6MiV%2BmijWMpdy3l5adMydO2vWNcj14r6gvlG0gocuKtsXTJEj7R7zCHk09K8xGQJHhn%2Fc%2BfjoCYd%2Fk&X-Amz-Signature=1859cb40546741ea8642d4e0e6a5704e9b625e9c30ed8ae1b73aa9ce29988f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
