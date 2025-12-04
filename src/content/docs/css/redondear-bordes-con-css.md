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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUZ73R2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4u%2FV%2BL9kQj8NUR5twSBz%2FryGn%2FywQNwnJGoJNHUG6lQIhAJJdswFI2thl3JvUnw3nOJCZo09qv%2FodLYboas%2BM3mKFKv8DCDwQABoMNjM3NDIzMTgzODA1IgwCpBan5%2BS5Kj7YWAsq3APITYLhBXYkCNBWg0lOKRfMv%2Bt4J7ogDcc70ayIi4jt%2BoLWV%2BWYJ53593BbOopr%2FmBU78Scu7k5mHAjwncDwrYPH8eLslrlYoUZU8BhY2ZpoTjcXXj0G94BbzZ2P0sbVOPnUqGAsUBuvjGc0pTaeAQURt%2FEZLSXnKDULX9LIBi2vBmn%2BziOuwYqYay2cY2bdITnWcunKWKQM1O0aGgp7YlwbCQJqBfc5ObZyukLhXcwE4nZAUy8HepWmzi9OOdWW5rn3h4C5Oartb0CUfvjSccaV7vxq2LS0X0EaTWxlywtI7QRPwM3v7nIY3kAj5bWVLayF3UTmYQO9ID64FS6eLejH0oZsiXat6Qx%2BlpC0%2Bgiu1C7A0ydKnVCtkGdO2ehAGdVHWDhi8E5Q3obcIsfuQW9e%2FML5oAu9eZyMuGo0jFN5Js9eH6IPKJfB3f5gxVOM%2FNyCtDaooZOjHhuMkrd8M6p6taJOnitmcqR5%2BPV1HYAzNY7TSy1FKqZxfWNMiC7EbJm%2F7B0xP53xDPgK4WaVCt2ScKOY8MRZwMLgGGQGRfdiVo%2F6Aa0QodzeSk6UjUhJ6hCj2ry%2FH6KDjysEeeZRQYBLCQG65ZAnUTYgnVsANSfWIRPP8t0WSYvVAKGFDDi8sPJBjqkAb2HDDCm1mVqYHWBl6tYO2ESo4KMrjNdP066fRo%2BTYxBbqo293Fk%2BYjcH4%2BrQD6r3dgQidFjJ6wn%2BUpo0uUUxASZ%2BXZXEmwE6fDxwe5Sdc0nQdyn2dXe0iBkTSzQwWByIbu%2F89G90ojcimkaUXU5dQ76v1cR242RKQXovdJv8%2B%2F%2BoscU%2BnzHvuHHuHPAiuG%2BLbIwCwQJKuhnR8LiEI0f4Wo13SAC&X-Amz-Signature=a56b5582570415d3f286a33333b65e4cfd8cf65efa779155418b6822276cbab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUZ73R2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4u%2FV%2BL9kQj8NUR5twSBz%2FryGn%2FywQNwnJGoJNHUG6lQIhAJJdswFI2thl3JvUnw3nOJCZo09qv%2FodLYboas%2BM3mKFKv8DCDwQABoMNjM3NDIzMTgzODA1IgwCpBan5%2BS5Kj7YWAsq3APITYLhBXYkCNBWg0lOKRfMv%2Bt4J7ogDcc70ayIi4jt%2BoLWV%2BWYJ53593BbOopr%2FmBU78Scu7k5mHAjwncDwrYPH8eLslrlYoUZU8BhY2ZpoTjcXXj0G94BbzZ2P0sbVOPnUqGAsUBuvjGc0pTaeAQURt%2FEZLSXnKDULX9LIBi2vBmn%2BziOuwYqYay2cY2bdITnWcunKWKQM1O0aGgp7YlwbCQJqBfc5ObZyukLhXcwE4nZAUy8HepWmzi9OOdWW5rn3h4C5Oartb0CUfvjSccaV7vxq2LS0X0EaTWxlywtI7QRPwM3v7nIY3kAj5bWVLayF3UTmYQO9ID64FS6eLejH0oZsiXat6Qx%2BlpC0%2Bgiu1C7A0ydKnVCtkGdO2ehAGdVHWDhi8E5Q3obcIsfuQW9e%2FML5oAu9eZyMuGo0jFN5Js9eH6IPKJfB3f5gxVOM%2FNyCtDaooZOjHhuMkrd8M6p6taJOnitmcqR5%2BPV1HYAzNY7TSy1FKqZxfWNMiC7EbJm%2F7B0xP53xDPgK4WaVCt2ScKOY8MRZwMLgGGQGRfdiVo%2F6Aa0QodzeSk6UjUhJ6hCj2ry%2FH6KDjysEeeZRQYBLCQG65ZAnUTYgnVsANSfWIRPP8t0WSYvVAKGFDDi8sPJBjqkAb2HDDCm1mVqYHWBl6tYO2ESo4KMrjNdP066fRo%2BTYxBbqo293Fk%2BYjcH4%2BrQD6r3dgQidFjJ6wn%2BUpo0uUUxASZ%2BXZXEmwE6fDxwe5Sdc0nQdyn2dXe0iBkTSzQwWByIbu%2F89G90ojcimkaUXU5dQ76v1cR242RKQXovdJv8%2B%2F%2BoscU%2BnzHvuHHuHPAiuG%2BLbIwCwQJKuhnR8LiEI0f4Wo13SAC&X-Amz-Signature=6059783d11eac1feb53bc4f615ee356d644c252e5901f782e5d5e430f03adb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
