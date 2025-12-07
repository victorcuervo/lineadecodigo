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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPTLA2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsSpOyISc%2B%2FVPBQZCdOcEQhCqZwlMRoLlnUSzdqGkV3AiB%2BHDLd7vWiSVqK5KAG7KT3rBJjoyKTa%2BOPI1MJpNeGkyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjCAKQpUzL4P4Yto7KtwDHCD9HsIR56boas86HqtA4z1EkEK%2FlwiC1p17JPNF5i%2FBrnwb1Qn30IQyhVSGkMo%2BXhOopu4w8M1d4lxURuQO6dUwprLaohXeQ1V5uVGJhFPsZ7cBmllmJ0BUUHlRQ%2BkBw80sg%2FT3bgecbO9xAj3DZmbN38TItIuEhZFf%2B3pmaLsUb8LkDFpUu6IoSoWpRNIXHuF6mL5f7nOjnFhAQ5cbdyZ5PRc055I%2FDFBWQsCwWWdgwv1fLUHoZGQ1TCYE%2Fd2bsR8kVGsCcyFkFRpXEUpSiwgFt6PRQuc4gdHrFFSSOpmzRUmHForUQdykdnOMmRSd%2BqeP859%2FH7gbwgKUi7inhAFOSMFpU19mdNby2QfimgCETkWqvWe8Acg5SIplcfH6lWHIK8bDwiYUJOEIc8Jla6AlZ%2FLXEQiQCgpdjKMBZQKH1m01ByzE6ePeiBuKQF5kOWL9mKzkz45AtbR54zec6Fmn9DWt9mAMUL0tCKz4JNtr3iXKq7xTxo1H%2BTfAFizYGX5BsLagJplhiB8KT1OwkI7rD8UJrv52jUgYBdhebkcpBaORsz7say0pmr5ywbJLXFdLzbYE4rqYgsxOkkj1Hn0O56VTEuC6GeAxtKq9FqkepN9vmWe1k%2F9PeTEw0pnUyQY6pgG9ddANsCcF6V5zLTZa35IZcdJQjF9tGOi6fhWOv1zGqPffSLdqQlybImgOLlDjeGtcdM7tx0nOBVxFFdvw48q6i08g1VicH3ugVl2ZnrWQDKvjvo5AqFGQA89IeMJkRp6egC6isuejw7tdJ4BwAWFvkwDdNk1vmyHE3qzUmpLolLVdSdaOGo8sC8i4nXkZCxIm78cTBMB3Be0uB470d3mP%2FCggcDAQ&X-Amz-Signature=589092cd70a94349e5fe4083ad65a34bd411f90c181534bdc15f3f3dc2a1dada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPTLA2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsSpOyISc%2B%2FVPBQZCdOcEQhCqZwlMRoLlnUSzdqGkV3AiB%2BHDLd7vWiSVqK5KAG7KT3rBJjoyKTa%2BOPI1MJpNeGkyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjCAKQpUzL4P4Yto7KtwDHCD9HsIR56boas86HqtA4z1EkEK%2FlwiC1p17JPNF5i%2FBrnwb1Qn30IQyhVSGkMo%2BXhOopu4w8M1d4lxURuQO6dUwprLaohXeQ1V5uVGJhFPsZ7cBmllmJ0BUUHlRQ%2BkBw80sg%2FT3bgecbO9xAj3DZmbN38TItIuEhZFf%2B3pmaLsUb8LkDFpUu6IoSoWpRNIXHuF6mL5f7nOjnFhAQ5cbdyZ5PRc055I%2FDFBWQsCwWWdgwv1fLUHoZGQ1TCYE%2Fd2bsR8kVGsCcyFkFRpXEUpSiwgFt6PRQuc4gdHrFFSSOpmzRUmHForUQdykdnOMmRSd%2BqeP859%2FH7gbwgKUi7inhAFOSMFpU19mdNby2QfimgCETkWqvWe8Acg5SIplcfH6lWHIK8bDwiYUJOEIc8Jla6AlZ%2FLXEQiQCgpdjKMBZQKH1m01ByzE6ePeiBuKQF5kOWL9mKzkz45AtbR54zec6Fmn9DWt9mAMUL0tCKz4JNtr3iXKq7xTxo1H%2BTfAFizYGX5BsLagJplhiB8KT1OwkI7rD8UJrv52jUgYBdhebkcpBaORsz7say0pmr5ywbJLXFdLzbYE4rqYgsxOkkj1Hn0O56VTEuC6GeAxtKq9FqkepN9vmWe1k%2F9PeTEw0pnUyQY6pgG9ddANsCcF6V5zLTZa35IZcdJQjF9tGOi6fhWOv1zGqPffSLdqQlybImgOLlDjeGtcdM7tx0nOBVxFFdvw48q6i08g1VicH3ugVl2ZnrWQDKvjvo5AqFGQA89IeMJkRp6egC6isuejw7tdJ4BwAWFvkwDdNk1vmyHE3qzUmpLolLVdSdaOGo8sC8i4nXkZCxIm78cTBMB3Be0uB470d3mP%2FCggcDAQ&X-Amz-Signature=45fdb8724d068056ece98663d687d66a45c39f3ff3279ec9acebb95c4995b208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
