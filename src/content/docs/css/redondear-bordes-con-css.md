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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IRD3EZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhbfsdkZkUH1vQfBgNVa7LMdQt5SVFvvvIQUNJqxlYiAiAlr%2F9%2BbEffUz6MuhAI5PqW%2BDITS0B95ZmvJksWjB4qZir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSGxpwNuJc1tOvoP1KtwDZqjAtQ9WVOKb4ILB6fuH%2BWSnwmKQKoz4UxMkeJVRrATpDJdfi%2FVoe8dV6ZLMwDJIjJgcqw9pBnVGlK3jJrvVslVtccvEKC966npl32QlvSyY94DvTq8pCnF21TfFGVXJxmSrnygOyn3iuX7Z8%2FYnMAvnrOeoIgfwnPrXk6FTIzAI7x%2BXthO27h1hHTKMF7Dzm3T0gj5X5fHCyBNKsvwmbhFUt8iuijI9i2R07HDeLJNZbQEqRZxDDbRhNyxXfSU9GRyKIWdwMW8pfpjCyZM2L2Tj7TYrKKFdhaLoLOvIDYxRZUbl%2BVg3BAd%2B10GFz7OCufJdd1ebavSZ3yGVRdwE5uPlrbZlVOMSa%2BB7FmFXpla0hRy7RWj2BWQ97c%2B9jiwta5tB%2FDa%2FJzyH3qF3F9UQct%2FbLoYy7vf432rtMAgwTUpkWd0965bRaf1ANJlse1R%2BMnNhnFfxyRyLhJOvos2RDpJZeqqx3vdoT%2BRhOhwUP%2B0VaOjO2UCixXyVANsPE%2Bvc%2BwXTeJO32iYOb2HtrYXx5XL3kkOwu%2FUFGhyQ9VN178zntWQFIAxJj%2FqwPpRbA1gXYEA1p8ac4uyQg21iz1fsjjEDG%2Bxv6Kvr1B2B1qC3YjCYYOyrLYsWuxv4tBAw1tPSyQY6pgE2SkrYJmIgOO4EkkKt3iag7aRrUjK1Bq%2Bk6k09YBd7VVCCY6QNTE58bjmunBX3OeGAlEaTOuKiQOjhc8yGiQ%2BULZY8r8OqPa%2Beuc8O%2BsHipB6TrBhWg6hoyibkXsUUUUFEBEJfarjCYprhjQ%2BbVI%2FtD4%2BVLButeV6bXSNankEzr8cwe34ZCAuOLzHfOW2PwUAZIQwYBU5PxfbaxKdUchgQsB%2B8uusY&X-Amz-Signature=e75065050c3a8af791cba36c8c31aa0a3a18276cbb5480f30067f7a316f88d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IRD3EZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhbfsdkZkUH1vQfBgNVa7LMdQt5SVFvvvIQUNJqxlYiAiAlr%2F9%2BbEffUz6MuhAI5PqW%2BDITS0B95ZmvJksWjB4qZir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMSGxpwNuJc1tOvoP1KtwDZqjAtQ9WVOKb4ILB6fuH%2BWSnwmKQKoz4UxMkeJVRrATpDJdfi%2FVoe8dV6ZLMwDJIjJgcqw9pBnVGlK3jJrvVslVtccvEKC966npl32QlvSyY94DvTq8pCnF21TfFGVXJxmSrnygOyn3iuX7Z8%2FYnMAvnrOeoIgfwnPrXk6FTIzAI7x%2BXthO27h1hHTKMF7Dzm3T0gj5X5fHCyBNKsvwmbhFUt8iuijI9i2R07HDeLJNZbQEqRZxDDbRhNyxXfSU9GRyKIWdwMW8pfpjCyZM2L2Tj7TYrKKFdhaLoLOvIDYxRZUbl%2BVg3BAd%2B10GFz7OCufJdd1ebavSZ3yGVRdwE5uPlrbZlVOMSa%2BB7FmFXpla0hRy7RWj2BWQ97c%2B9jiwta5tB%2FDa%2FJzyH3qF3F9UQct%2FbLoYy7vf432rtMAgwTUpkWd0965bRaf1ANJlse1R%2BMnNhnFfxyRyLhJOvos2RDpJZeqqx3vdoT%2BRhOhwUP%2B0VaOjO2UCixXyVANsPE%2Bvc%2BwXTeJO32iYOb2HtrYXx5XL3kkOwu%2FUFGhyQ9VN178zntWQFIAxJj%2FqwPpRbA1gXYEA1p8ac4uyQg21iz1fsjjEDG%2Bxv6Kvr1B2B1qC3YjCYYOyrLYsWuxv4tBAw1tPSyQY6pgE2SkrYJmIgOO4EkkKt3iag7aRrUjK1Bq%2Bk6k09YBd7VVCCY6QNTE58bjmunBX3OeGAlEaTOuKiQOjhc8yGiQ%2BULZY8r8OqPa%2Beuc8O%2BsHipB6TrBhWg6hoyibkXsUUUUFEBEJfarjCYprhjQ%2BbVI%2FtD4%2BVLButeV6bXSNankEzr8cwe34ZCAuOLzHfOW2PwUAZIQwYBU5PxfbaxKdUchgQsB%2B8uusY&X-Amz-Signature=1f0afa72815d26459e5504be2d891df5afe722530041abe9ab113303927bc605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
