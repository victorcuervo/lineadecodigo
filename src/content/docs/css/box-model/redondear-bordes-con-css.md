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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMZ3PRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgrSvFcAbQxOgDqjAtnJLV7VDvtRxiFCJjYcWAjIB1%2FgIhAIe1ZGQ3QnOY6HE2wq%2BCk%2B%2BcO64zgj%2FwrNaSxQ0%2FPzKGKv8DCHwQABoMNjM3NDIzMTgzODA1Igw8Vf2XNwjHtfWxOhwq3AP6Tftq7mB4p9Tnvh4Vn9fcjm6qPvA5WYUrKIt2WIhQFMiRYrjnKwuGdFAUuW%2BlM44zdsSZgarvQRwqVJMd7HrTLRLgu%2FKDN14Kb0zyeIyu5llsbfg%2FJUtLP8DdIQPLufsMVAVSS6gNrKmC8SaF%2F6BWuc904NClEZS4PgVqKM1xsQu35itfpg5WZjlCnh2RaZgryXsssz9IZkg941tbCx2RILwuL2sTkNKUdRVALd6puIBpjCSIOTlBomPR8OyPU1gpWz%2B9UcMU4PkdIJ0vzmOjXHYW2WV0pEgvj3%2BE5tRr7fAjGLVHETjVwdapwh4PLz2WoI25qktH463WIBJFnPQ3AzCVHcu%2BsfauGzjLKQEusifDCAZGopbpNDVX9swy%2FYd3VaJpjtd8uBlwDgD9DjDuh1OaeJ4RIOSy0Dbce%2B1YIJodVMRCMNvR6p0FHJZOrehta1hDvpvgwxl5UL7r6xwoQPilEbEmpgAMams5VMBVsmZQL%2FuqL7YnTMfGD3wcUtqVsW04wRHHhqs9iNidfL34pcPb94UQkC7hl0ktO58S%2B9R%2FfG9ITNn%2BE8S6tOuOvNBrHVOHNqBnysSXGf3F099ush99HWqjZg6tFDwbrWD4iSBcl0QcGdJsGzUIzzDujorKBjqkAb3C2lkOZdqGDbPnzErtTn%2FgW%2FeOhxo7ld562wZ%2BHS%2BHdyBNoqOH2lcQfTKd1lxBbR%2FBno9l5ivdieP1EnZl%2FEbMj7Aor%2BNyhMYQjkhuyiZqgpDxT4MSGR7gCRpU9TOFfxlIGL4C%2Fp20boe5JHv401sOaQlT5hNrRFf%2By7wzTKQYKN9Kd8ZYv9G561asVsXkDrX7rn5d7qbP8KBJhKQGQfurgMBC&X-Amz-Signature=82bb5bd605a13acf0423d629281d67ff63017a88547f2ded4ddfcd8d2993f9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMZ3PRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgrSvFcAbQxOgDqjAtnJLV7VDvtRxiFCJjYcWAjIB1%2FgIhAIe1ZGQ3QnOY6HE2wq%2BCk%2B%2BcO64zgj%2FwrNaSxQ0%2FPzKGKv8DCHwQABoMNjM3NDIzMTgzODA1Igw8Vf2XNwjHtfWxOhwq3AP6Tftq7mB4p9Tnvh4Vn9fcjm6qPvA5WYUrKIt2WIhQFMiRYrjnKwuGdFAUuW%2BlM44zdsSZgarvQRwqVJMd7HrTLRLgu%2FKDN14Kb0zyeIyu5llsbfg%2FJUtLP8DdIQPLufsMVAVSS6gNrKmC8SaF%2F6BWuc904NClEZS4PgVqKM1xsQu35itfpg5WZjlCnh2RaZgryXsssz9IZkg941tbCx2RILwuL2sTkNKUdRVALd6puIBpjCSIOTlBomPR8OyPU1gpWz%2B9UcMU4PkdIJ0vzmOjXHYW2WV0pEgvj3%2BE5tRr7fAjGLVHETjVwdapwh4PLz2WoI25qktH463WIBJFnPQ3AzCVHcu%2BsfauGzjLKQEusifDCAZGopbpNDVX9swy%2FYd3VaJpjtd8uBlwDgD9DjDuh1OaeJ4RIOSy0Dbce%2B1YIJodVMRCMNvR6p0FHJZOrehta1hDvpvgwxl5UL7r6xwoQPilEbEmpgAMams5VMBVsmZQL%2FuqL7YnTMfGD3wcUtqVsW04wRHHhqs9iNidfL34pcPb94UQkC7hl0ktO58S%2B9R%2FfG9ITNn%2BE8S6tOuOvNBrHVOHNqBnysSXGf3F099ush99HWqjZg6tFDwbrWD4iSBcl0QcGdJsGzUIzzDujorKBjqkAb3C2lkOZdqGDbPnzErtTn%2FgW%2FeOhxo7ld562wZ%2BHS%2BHdyBNoqOH2lcQfTKd1lxBbR%2FBno9l5ivdieP1EnZl%2FEbMj7Aor%2BNyhMYQjkhuyiZqgpDxT4MSGR7gCRpU9TOFfxlIGL4C%2Fp20boe5JHv401sOaQlT5hNrRFf%2By7wzTKQYKN9Kd8ZYv9G561asVsXkDrX7rn5d7qbP8KBJhKQGQfurgMBC&X-Amz-Signature=0dbb04d3e6d59af42b43e07899832f76846ff834d346ce237e15793a7e60ced0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
