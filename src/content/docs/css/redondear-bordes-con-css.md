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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4BM3GH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIACzpodlWemLbosrJfBfD398h5kQLGASGz7I1dEaGV6SAiAQjUfb45krF8C2ka2v7vYPxYfYbp9lSo3zFGAl94M1CCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1ckQIqjnxDGpNnueKtwDFj%2FKEmR0npqtBVP6%2Fq%2FVH%2FZLYdbzdXZJgdKmzuF%2FbYvE2FeyJJ72ntjbS8K3ktCUfSNU2tJutlCvovzftqwAdB9SjgKy7xJOLC2I0vRrQ7a49VI4Ntm7n13OuFseb3ldi5qZ9f2S8UjJmW8HKzEF3fYglqxxM92nVF8ZyJOFx30dS3dXYv5bUBmSzsErn7SuQgtMKHGypMRlN49k6rAIH1Tkwo7b94IkXMT%2F5TxyPrKkOPmYR5jU7e%2F5nOwOUQh9KP2ceZrEqnb3pQsd75PXca7MIK56MhVg6GFKxUPn3hRwC%2FVxBob%2B3Pt%2BwVZu8MFoed2vrwvGxXma01aBAipq43PqWQsRGLJDa3ynDZLPqntiYbCExEuNGpiLItKtKPG4wSGebublfgk1SuDAs2nPmRScOyZxyRkzmyClObvgv9lSB5hcXUrt249AOZ1WmZ5qmIo%2B83sQQo1OzW7lMCz0utdrCUp6oHgNs6i%2Bb0NjPGbDdvZp%2FbkqgU8%2B2UF0fogCLPVLKoTpaXa%2FKqX5Fk1zq5jlVWKPLOJkfRPn0yJZ0VP%2BS2PM%2BwiXBmjT34CPT0E3zijC4uNy8X%2Bsk33df35UNotw%2Fvw77hRz16bbtiICI96FohhlXbuWzRlfLfMw2oTGyQY6pgEZm5MgDJLufIdX1w%2BWXH0TNyEh76T02tkYIscNKS%2FaG%2BHbbzccZBDMKmttOs0b0X7g9RolXE%2BKnpevEtQQW3pfQkTQhgLIvxchm%2BITBA8AFtW7S2xc93IJLz60IK%2FgDaoGck%2FQ5UIuhgoq6G0g3Ld1a8EQCq75NPfWPZfTmW4X0hCx1wclF7OqFY4cU%2BnxCXXzGoLQEghBrYb0MsLGYL0ZXUMUcuzM&X-Amz-Signature=b6bef069a0e275fb3658731b660423d2e3ad03c31a168d5e74cc7d985d466c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4BM3GH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIACzpodlWemLbosrJfBfD398h5kQLGASGz7I1dEaGV6SAiAQjUfb45krF8C2ka2v7vYPxYfYbp9lSo3zFGAl94M1CCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1ckQIqjnxDGpNnueKtwDFj%2FKEmR0npqtBVP6%2Fq%2FVH%2FZLYdbzdXZJgdKmzuF%2FbYvE2FeyJJ72ntjbS8K3ktCUfSNU2tJutlCvovzftqwAdB9SjgKy7xJOLC2I0vRrQ7a49VI4Ntm7n13OuFseb3ldi5qZ9f2S8UjJmW8HKzEF3fYglqxxM92nVF8ZyJOFx30dS3dXYv5bUBmSzsErn7SuQgtMKHGypMRlN49k6rAIH1Tkwo7b94IkXMT%2F5TxyPrKkOPmYR5jU7e%2F5nOwOUQh9KP2ceZrEqnb3pQsd75PXca7MIK56MhVg6GFKxUPn3hRwC%2FVxBob%2B3Pt%2BwVZu8MFoed2vrwvGxXma01aBAipq43PqWQsRGLJDa3ynDZLPqntiYbCExEuNGpiLItKtKPG4wSGebublfgk1SuDAs2nPmRScOyZxyRkzmyClObvgv9lSB5hcXUrt249AOZ1WmZ5qmIo%2B83sQQo1OzW7lMCz0utdrCUp6oHgNs6i%2Bb0NjPGbDdvZp%2FbkqgU8%2B2UF0fogCLPVLKoTpaXa%2FKqX5Fk1zq5jlVWKPLOJkfRPn0yJZ0VP%2BS2PM%2BwiXBmjT34CPT0E3zijC4uNy8X%2Bsk33df35UNotw%2Fvw77hRz16bbtiICI96FohhlXbuWzRlfLfMw2oTGyQY6pgEZm5MgDJLufIdX1w%2BWXH0TNyEh76T02tkYIscNKS%2FaG%2BHbbzccZBDMKmttOs0b0X7g9RolXE%2BKnpevEtQQW3pfQkTQhgLIvxchm%2BITBA8AFtW7S2xc93IJLz60IK%2FgDaoGck%2FQ5UIuhgoq6G0g3Ld1a8EQCq75NPfWPZfTmW4X0hCx1wclF7OqFY4cU%2BnxCXXzGoLQEghBrYb0MsLGYL0ZXUMUcuzM&X-Amz-Signature=81e90b077b3cf19fcd8980ed73bbec6a8afcfa6a74f5afb6199e1013a1e5a693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
