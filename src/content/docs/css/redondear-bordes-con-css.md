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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBWGSFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6bb%2Bg2HLb5qN5zGvxL8Cyx1B4vMZJh4SwwWzfgqpNHAiBTqZa4ruP%2BoUTdXnunkr9QwEsMuOND68kspS4F8%2F0upiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLp%2FGyiY5qXIQS0b6KtwD0KOd%2BqHtsfpxoijj1ePd%2Fmdlc3y5EBvOyE8dFJlP9X5xvJxkpu%2BYGrcxf8rABk28dh8BvXziDYNYtxzzGagz8iTKLIu99KpGZq27DzsMwg3QsM8nw4aPPhjcSleQ8cfFbOXaYfDTaOinxi%2FIY2ivyXu4b4IFBqVWixxi2vot84MD0sYsDgUbO8A9yATVgfh%2Fb4Dl36LFDIOKR9Zn6GkHgk02r3naRhUCZzsl4XSEywdqffr%2Badq7e7n1uNXkExVkw2t1Svxr6DwQzb8BnFrW3CfVvS2x3eshtT2iwGG5XSSjCd7ri1H5MMmKrZSXc3yRHv%2FqUcuF1wRzb4FL5vicN4seF5uMbQ1Gl3boWq6P0bkgQ%2Bsm55PMo4WWJgPhcAC5cZh8XQ1hpULLbpgkflWWZTNBqxeXars10p6tURa7osyMARcyQdtJEEkWvRC2sk8Mn22%2FbbN9P59oW0%2FTujRUdfqX2SgGZjNzHt%2Bbe8Rr9ZDi3eYrfqMmYADXPpc7g3kAkwGPmpz8Z%2BkUWaTllSgx26dSl2%2Bbo9%2FcV%2B%2FfqV%2FwAPyAy0XzBTfU03i7vOCAHjBLUW7wx4e85MH5rZcuOPsKi2iX1cSHS63zirDfGVHKHDC9MzW9AlD498MGfjswsf7SyQY6pgFJvU54E1JeNU1%2FRpmnm2%2BdcflUgDeiP1HWUgbFcDJrqma2RysVTiv9VPZahRC5SGBy257qGDVOw7mo%2BdQxc1qyLyv49X3cxT2ArIlqSlc7iCHrVy5zuOFDGg53oqlSumfGwFoOesjpmUF65FOhtZuud4goraQLov%2BfNLRJCUfdNiT9XWhoRPkjU1OhzMbnKq2jzBBPVy3%2FCiGu5kUG1Hr9q8%2BVUMxF&X-Amz-Signature=8ea3b8b7489eef5190d7366ad5a2348196ef898cd078fb88568b7dfcf9103bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBWGSFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6bb%2Bg2HLb5qN5zGvxL8Cyx1B4vMZJh4SwwWzfgqpNHAiBTqZa4ruP%2BoUTdXnunkr9QwEsMuOND68kspS4F8%2F0upiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLp%2FGyiY5qXIQS0b6KtwD0KOd%2BqHtsfpxoijj1ePd%2Fmdlc3y5EBvOyE8dFJlP9X5xvJxkpu%2BYGrcxf8rABk28dh8BvXziDYNYtxzzGagz8iTKLIu99KpGZq27DzsMwg3QsM8nw4aPPhjcSleQ8cfFbOXaYfDTaOinxi%2FIY2ivyXu4b4IFBqVWixxi2vot84MD0sYsDgUbO8A9yATVgfh%2Fb4Dl36LFDIOKR9Zn6GkHgk02r3naRhUCZzsl4XSEywdqffr%2Badq7e7n1uNXkExVkw2t1Svxr6DwQzb8BnFrW3CfVvS2x3eshtT2iwGG5XSSjCd7ri1H5MMmKrZSXc3yRHv%2FqUcuF1wRzb4FL5vicN4seF5uMbQ1Gl3boWq6P0bkgQ%2Bsm55PMo4WWJgPhcAC5cZh8XQ1hpULLbpgkflWWZTNBqxeXars10p6tURa7osyMARcyQdtJEEkWvRC2sk8Mn22%2FbbN9P59oW0%2FTujRUdfqX2SgGZjNzHt%2Bbe8Rr9ZDi3eYrfqMmYADXPpc7g3kAkwGPmpz8Z%2BkUWaTllSgx26dSl2%2Bbo9%2FcV%2B%2FfqV%2FwAPyAy0XzBTfU03i7vOCAHjBLUW7wx4e85MH5rZcuOPsKi2iX1cSHS63zirDfGVHKHDC9MzW9AlD498MGfjswsf7SyQY6pgFJvU54E1JeNU1%2FRpmnm2%2BdcflUgDeiP1HWUgbFcDJrqma2RysVTiv9VPZahRC5SGBy257qGDVOw7mo%2BdQxc1qyLyv49X3cxT2ArIlqSlc7iCHrVy5zuOFDGg53oqlSumfGwFoOesjpmUF65FOhtZuud4goraQLov%2BfNLRJCUfdNiT9XWhoRPkjU1OhzMbnKq2jzBBPVy3%2FCiGu5kUG1Hr9q8%2BVUMxF&X-Amz-Signature=668c0e324cd736619a62c187dadfa9ab8111c23e5b9bec3270aa5e1cc5c9e3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
