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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSEUEWP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDacwBcvbsd%2B8ebfNyL3xAuewZsB92SKhx3ycRamY5fsgIhAO69kaXH5O6eBiU3ioj1jHOurTLqqzxfj%2B3UHppLILGbKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7jGNoJpc1NYyenSoq3AOCFwcCpc27hCscQyEaSAOnqYCR5KEQ7KxnFkQazILM50qc7QqD0w7pKA9f1hs52xcXsChybIb1CQv4sbDiNjoGyrJ8nWz6IN7Zsy%2F7GZcdjSLD12zyDjaSCC0XUdJbQSbHcJQ0cXkV9Lqm%2Bd3a5EOd4n48vPE1qCWCNYxxDv1OKJjgQlCIf4M7LKvsoX7kMFMM8dv8%2FXb2HgCE0bx8SwcVYNYrVeZyQYOSQuqGUf2yjaZSP1xaLNMeUgzzTDvQUXA%2FcEEH8CRQBH0XTmuJkw32pYOWOGq3whsIupNXlKTWXDX2OcN74AX3NnFc4cXVt71xtqbVTQ9ceIsm2fp13kd5Fp%2BDeWCRZxr0cniR5phr2eZQZgwoTyqEbFDhypa7WDaFFMErqg6lbFFuuXHECmTfSXOb46Oc1TL%2BhqKm3zPLLxY4SJzmWQzsXZA2hITRlnRofStHhrlYkrxZ8RTX4Fw4gsohfDLlfP133mU1Yon7KuE0TgzVW%2BwxGmBfyeffC4tCL%2BAQBUWLVegQCMhOmd8jgoPEZHVPUFeEPKCyi4SYovZkp6%2FXmxw5%2F7LhbKxGtbUfhFpSZwOyRii1BK9YFERIFbfGCCuQQPLPvJjsjN6kRLM9LD%2Bz7nFb6IcV6zDA5NvJBjqkAaa8qVPgVgPk937JuY5RfKDa0Tr%2F98nHuAXCLml82n9i8qgcYTo0vAjbaZL2r6JU70WIDvIZHUxGc6Hgm8yCKq9UYmjFpuFeefnNuuWXIT0R5jcBWdX97Bby36t0zx5DeN%2FjinBtdRx8X%2FAKIyHOd3bWb%2Fx7soZ%2BqJ6ywXGalFE88aRD6GxSJgpGRwXgBLyzsMCfE%2FUovBytiEFFxg6MtJd0ifXO&X-Amz-Signature=1e7d03233c0b2ff650fcf47813b22522ef409c3feacbf360cc0e036ceba3dfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSEUEWP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDacwBcvbsd%2B8ebfNyL3xAuewZsB92SKhx3ycRamY5fsgIhAO69kaXH5O6eBiU3ioj1jHOurTLqqzxfj%2B3UHppLILGbKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7jGNoJpc1NYyenSoq3AOCFwcCpc27hCscQyEaSAOnqYCR5KEQ7KxnFkQazILM50qc7QqD0w7pKA9f1hs52xcXsChybIb1CQv4sbDiNjoGyrJ8nWz6IN7Zsy%2F7GZcdjSLD12zyDjaSCC0XUdJbQSbHcJQ0cXkV9Lqm%2Bd3a5EOd4n48vPE1qCWCNYxxDv1OKJjgQlCIf4M7LKvsoX7kMFMM8dv8%2FXb2HgCE0bx8SwcVYNYrVeZyQYOSQuqGUf2yjaZSP1xaLNMeUgzzTDvQUXA%2FcEEH8CRQBH0XTmuJkw32pYOWOGq3whsIupNXlKTWXDX2OcN74AX3NnFc4cXVt71xtqbVTQ9ceIsm2fp13kd5Fp%2BDeWCRZxr0cniR5phr2eZQZgwoTyqEbFDhypa7WDaFFMErqg6lbFFuuXHECmTfSXOb46Oc1TL%2BhqKm3zPLLxY4SJzmWQzsXZA2hITRlnRofStHhrlYkrxZ8RTX4Fw4gsohfDLlfP133mU1Yon7KuE0TgzVW%2BwxGmBfyeffC4tCL%2BAQBUWLVegQCMhOmd8jgoPEZHVPUFeEPKCyi4SYovZkp6%2FXmxw5%2F7LhbKxGtbUfhFpSZwOyRii1BK9YFERIFbfGCCuQQPLPvJjsjN6kRLM9LD%2Bz7nFb6IcV6zDA5NvJBjqkAaa8qVPgVgPk937JuY5RfKDa0Tr%2F98nHuAXCLml82n9i8qgcYTo0vAjbaZL2r6JU70WIDvIZHUxGc6Hgm8yCKq9UYmjFpuFeefnNuuWXIT0R5jcBWdX97Bby36t0zx5DeN%2FjinBtdRx8X%2FAKIyHOd3bWb%2Fx7soZ%2BqJ6ywXGalFE88aRD6GxSJgpGRwXgBLyzsMCfE%2FUovBytiEFFxg6MtJd0ifXO&X-Amz-Signature=24b04134f96a199ffe00a01245e26820e9b8fb109004673b3e2861266d5855a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
