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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2KX7NY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOG0fkqqMlxZLHy7XAjn0QpKqZ3S8BPDQfZ%2B4J%2FlOQjAiACjJtTnqh9n9ynrvUMMHqZTNi7x8tF89VX0bVjd7hZTiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1BN%2FguPHXeVCtfqvKtwDuN7KAUcnouoY%2B14R1frO7n6ng%2BOD%2ByBhUMWdlN%2Fyz%2FUeHvs2YZs5XRwJy8R5p7DSXok4mKsGN5%2FVQ82BHyOKUpiXsWJUCLku4qfc7SbgnQqnKYZBeL5pBXr3zXQib0K8XQGfMVET4TBK%2FW6bvKTvwPEV90uWC4oWIB8pDxYQCm41Pui7LFjv%2F32C6J%2FVwAnkqWrSQE3cLGh323tJ8qVOdDVWjFvLFQHsZE5IxQ4%2FXqpQbT8PPqm%2FAc2TDAjoW1uXtCYtJC5y4mgv4y9%2BwuT%2BHsvP2zcS0ebECkPR7zdlmiSeMxGoEHO5RfJbRUCcpheZNr%2F4tdbChdm7y6wH464AFIu9LK7Is43VUZhhlD3roYZ9bwp%2BSuyEeJMs6rLPiTZh8BLUnvGj2shPZ3w4CR2WrCKFcJGXh0V%2FaaQQaXRJHr%2FTi3csaI1ZFQVoEI84r%2FFxMBJVZna%2BW1KCWE8jLNfzExt1iRD55PAsngrvmWLIoeQ1sHZr1DmEIoVvDiJydUvLtjzpwC%2F0t6hAcD8uSuCjbGF2HbNBV4eYRtJwpK1OkoSJIZbNKogtwl87Schjk2pdfZsL1IytCRZQv5FsYA3N90hEKppG%2FPkVZxjTA%2BLU1RiRNjLQIrgbCXFOLDYwv9DYyQY6pgF4YWLyF4RTkDlYYYhCeWRnMYXrhnHPEfa9v496SjzAW4g4nhhEcnh3BZ7WhTSte%2Fs7SmbzuwisK9VP9KJgKjrXTiVsd6rICDzcNZOkUctzFwZ88Ftw6yJ4gf438RiCfJFPwXA%2FYUpP6OLVWsWrU7acmUK53GQe3edP7hsb0SVUwPEYMiO0nqJNYNiZTqiAIy%2BUaj0Pf4mm3Mka%2FhQBM0yR8RGXxEwd&X-Amz-Signature=a3b0e0778bb7c1c9a9e8e28743492d6245717e3ff78b03a3c6319a3e40b66ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2KX7NY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOG0fkqqMlxZLHy7XAjn0QpKqZ3S8BPDQfZ%2B4J%2FlOQjAiACjJtTnqh9n9ynrvUMMHqZTNi7x8tF89VX0bVjd7hZTiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1BN%2FguPHXeVCtfqvKtwDuN7KAUcnouoY%2B14R1frO7n6ng%2BOD%2ByBhUMWdlN%2Fyz%2FUeHvs2YZs5XRwJy8R5p7DSXok4mKsGN5%2FVQ82BHyOKUpiXsWJUCLku4qfc7SbgnQqnKYZBeL5pBXr3zXQib0K8XQGfMVET4TBK%2FW6bvKTvwPEV90uWC4oWIB8pDxYQCm41Pui7LFjv%2F32C6J%2FVwAnkqWrSQE3cLGh323tJ8qVOdDVWjFvLFQHsZE5IxQ4%2FXqpQbT8PPqm%2FAc2TDAjoW1uXtCYtJC5y4mgv4y9%2BwuT%2BHsvP2zcS0ebECkPR7zdlmiSeMxGoEHO5RfJbRUCcpheZNr%2F4tdbChdm7y6wH464AFIu9LK7Is43VUZhhlD3roYZ9bwp%2BSuyEeJMs6rLPiTZh8BLUnvGj2shPZ3w4CR2WrCKFcJGXh0V%2FaaQQaXRJHr%2FTi3csaI1ZFQVoEI84r%2FFxMBJVZna%2BW1KCWE8jLNfzExt1iRD55PAsngrvmWLIoeQ1sHZr1DmEIoVvDiJydUvLtjzpwC%2F0t6hAcD8uSuCjbGF2HbNBV4eYRtJwpK1OkoSJIZbNKogtwl87Schjk2pdfZsL1IytCRZQv5FsYA3N90hEKppG%2FPkVZxjTA%2BLU1RiRNjLQIrgbCXFOLDYwv9DYyQY6pgF4YWLyF4RTkDlYYYhCeWRnMYXrhnHPEfa9v496SjzAW4g4nhhEcnh3BZ7WhTSte%2Fs7SmbzuwisK9VP9KJgKjrXTiVsd6rICDzcNZOkUctzFwZ88Ftw6yJ4gf438RiCfJFPwXA%2FYUpP6OLVWsWrU7acmUK53GQe3edP7hsb0SVUwPEYMiO0nqJNYNiZTqiAIy%2BUaj0Pf4mm3Mka%2FhQBM0yR8RGXxEwd&X-Amz-Signature=9c70771fbcbc36e085aa28f9347f6a5fdfcb7b7846224acb54339d414aa414e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
