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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6AVX4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbmI%2FqvwuZTgXVDT68U5uUSOU8T5JNn7vj3A%2FMRJeWGQIhAKJdp1IqUt2o%2BERsTDOFMPEG%2FZvAeuwA6PjjhJPJjNVVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeCIt%2F1OeybjSoLkq3APj78jcr%2FOHX9cRbFPPg8AjxffOOLvjDAd8PRoMCt0cqFdotq8C0bgaFEettJaPLpB20YDJrgULVMuhYfnZ8IN9izwmSdi5TWyeJfGWNnhohxLGaaTJQ0zkgTQA74uLqbsMid76THCIpRNMWJzqy2qIdUD8%2BItzB2a8ilIKf84F7w2mjbnoiWwae66qsYMNXJQn3NwVGtXtyaMADbpp6qjtF2vkVHW%2FvTEyfjAkz8eo5iEMwyRCbpLvT7SzgFYP3sJFXaEYtULa9IIJZopbpQULPyaXNRO9Ros%2F7XR2jz%2BxpjNvZIJothpEXXwARN0Z9WTKSNPkQJ6Z97120O%2BHqcSWaUBO%2F8IO0tTfJ3J1YBIgdB%2BBfwr0nDvKt%2FU8HOxFo%2BFkD8bGB9qLz2dJnZty6VgQq2KSj5AjKEwj%2BFDd%2FU6gkfOws9GYXasga52CYMWayCtzlNFl%2BvNGNsWSuOTOKc8xiyGT%2FBQA4B%2BCVxzztYGZ7jPJ%2FRZj6bCQoxv9niXkmvU%2FrhVgUVm4R3swdLX%2BNoaMbY%2Fug45Tapp5ZRMd9zjxiDpSQ3nsA46CFwqBdT8k2YRQ5tUC%2F4GHtt0JchFUBoxES0PGv0f0Pew7BPissOVh5AsMqh2aer%2BWOao5cDDZ%2FdLJBjqkAT183%2Fee7vq%2BpgY%2BJeLriMdghOGP%2BSb9OznQIuN3upphlC%2BnYDq6KCyaJK7cT%2BpubUnTMmGGkdPoLLZ6BpnNMgrrseiJTL%2BR5T34pY4bBSCsrAH4xLcu7tmbSq5DGvcKxOch2McH7Y1E%2FkYWMGvO1ESM3Ozvrz0msUjA61fTVtCfn%2Ff4l4jtF9t%2BRwwBQ%2FvK1yM2fHU7qlTEMkxqZAAjLqxcZE49&X-Amz-Signature=0fbd84a4beacf2d0d434ced1bdd10e11b8a126d2ac5657d33cd8132b864b5f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6AVX4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbmI%2FqvwuZTgXVDT68U5uUSOU8T5JNn7vj3A%2FMRJeWGQIhAKJdp1IqUt2o%2BERsTDOFMPEG%2FZvAeuwA6PjjhJPJjNVVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeCIt%2F1OeybjSoLkq3APj78jcr%2FOHX9cRbFPPg8AjxffOOLvjDAd8PRoMCt0cqFdotq8C0bgaFEettJaPLpB20YDJrgULVMuhYfnZ8IN9izwmSdi5TWyeJfGWNnhohxLGaaTJQ0zkgTQA74uLqbsMid76THCIpRNMWJzqy2qIdUD8%2BItzB2a8ilIKf84F7w2mjbnoiWwae66qsYMNXJQn3NwVGtXtyaMADbpp6qjtF2vkVHW%2FvTEyfjAkz8eo5iEMwyRCbpLvT7SzgFYP3sJFXaEYtULa9IIJZopbpQULPyaXNRO9Ros%2F7XR2jz%2BxpjNvZIJothpEXXwARN0Z9WTKSNPkQJ6Z97120O%2BHqcSWaUBO%2F8IO0tTfJ3J1YBIgdB%2BBfwr0nDvKt%2FU8HOxFo%2BFkD8bGB9qLz2dJnZty6VgQq2KSj5AjKEwj%2BFDd%2FU6gkfOws9GYXasga52CYMWayCtzlNFl%2BvNGNsWSuOTOKc8xiyGT%2FBQA4B%2BCVxzztYGZ7jPJ%2FRZj6bCQoxv9niXkmvU%2FrhVgUVm4R3swdLX%2BNoaMbY%2Fug45Tapp5ZRMd9zjxiDpSQ3nsA46CFwqBdT8k2YRQ5tUC%2F4GHtt0JchFUBoxES0PGv0f0Pew7BPissOVh5AsMqh2aer%2BWOao5cDDZ%2FdLJBjqkAT183%2Fee7vq%2BpgY%2BJeLriMdghOGP%2BSb9OznQIuN3upphlC%2BnYDq6KCyaJK7cT%2BpubUnTMmGGkdPoLLZ6BpnNMgrrseiJTL%2BR5T34pY4bBSCsrAH4xLcu7tmbSq5DGvcKxOch2McH7Y1E%2FkYWMGvO1ESM3Ozvrz0msUjA61fTVtCfn%2Ff4l4jtF9t%2BRwwBQ%2FvK1yM2fHU7qlTEMkxqZAAjLqxcZE49&X-Amz-Signature=cf48ca14c56c4a1ee718324dd586e3b0eea51d4e1919f7a111d37255a6e27db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
