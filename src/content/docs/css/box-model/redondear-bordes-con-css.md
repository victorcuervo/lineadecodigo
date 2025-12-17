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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRDNFIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FunaZDNmBCG8oKkeRZ%2B2jPuyGOo%2BKgxYVH15cFWZT4gIhAPDAdk4BRc50kIOPxloJjPTYoS3pkn9JkgANauYe%2FP2QKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbajsVUPS8s1HdJ08q3AO36PtLUerwVHmAveTM8360FbWtLAsw%2F1o0lDboCha6H9l3QuLvjqnYlbO0ZZhK22qig5XnQn8CNEsFWoW9SEBsNnM0%2B%2B2DgMCxp0cUfYuh4dGCB%2FOzxWKMqbAe8h8UVcXzIeJquXpe0OgjcdMUT7Z1hLqsoS%2BIKkGa1dxSN32jVeDa2q%2FOxlgRZ9FKlqOWi0Fuh758w05olLtqh%2FlN5%2BlKJGBd5UlQTOXf3VRReq%2Fl6qbw3oljhqzG%2BvJuURA7DsxMNvoZk2mmxaP0xi3nMY3M98diOqN87rozYMPsmOd4Cv%2ByhlDvevS6lLuomtRxFiZp9SAWUYeDnM2WhydKh6ivMrJhx3sUplSipTkUHDnLUgRB%2FVYFBRgstZrDkX8Hga%2Bh2JSmPeIZYQE3yfDCaAHlE0W%2B%2BWzkoUlwY5ijY%2Ff3cJhdn0vLy7yX17UsRAhv3AG3LZ7zh1Dh9uifL%2By0l9YdK5PBoqosbJIH0NP8fxmKGn64uHvZr4Y%2FFh2TROMAVFu%2Bi%2B%2BQeom4q4FYQ11%2BVgXXvWd2zZtjoXLqegua93HKbgk0MSKLHZ9xUVnUHwrr98BJZvdjWYZ9RlLibioo184bhdveve%2Fy31CjT%2Bqw9riT7kis5k1OzbHSMqox6DCT6YjKBjqkAVjYK%2Fjmv3ggajHLE9QWejTCkb5JO6UBedz4Mu802a%2Fvuqzfg43K7YdbC6lHX3YG1zoB9yl227KgxI2IoiaahIvBpKxesJqtZItUtNcgm9vEc3GQIknZsDuEPp2uraJdnRvLzM49L6iUg81bSOAQ%2BMtWOi32vvrrBkz3N6UY%2B7TR7OIGMWlgouH%2FTJLPS5jl43y9dNmYJ1qeV5hGqbZpJA23%2Fn84&X-Amz-Signature=bcea86fad60a81af2304a47938f31c15a0e8b0655d07c6e6291adacb41acfb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRDNFIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FunaZDNmBCG8oKkeRZ%2B2jPuyGOo%2BKgxYVH15cFWZT4gIhAPDAdk4BRc50kIOPxloJjPTYoS3pkn9JkgANauYe%2FP2QKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbajsVUPS8s1HdJ08q3AO36PtLUerwVHmAveTM8360FbWtLAsw%2F1o0lDboCha6H9l3QuLvjqnYlbO0ZZhK22qig5XnQn8CNEsFWoW9SEBsNnM0%2B%2B2DgMCxp0cUfYuh4dGCB%2FOzxWKMqbAe8h8UVcXzIeJquXpe0OgjcdMUT7Z1hLqsoS%2BIKkGa1dxSN32jVeDa2q%2FOxlgRZ9FKlqOWi0Fuh758w05olLtqh%2FlN5%2BlKJGBd5UlQTOXf3VRReq%2Fl6qbw3oljhqzG%2BvJuURA7DsxMNvoZk2mmxaP0xi3nMY3M98diOqN87rozYMPsmOd4Cv%2ByhlDvevS6lLuomtRxFiZp9SAWUYeDnM2WhydKh6ivMrJhx3sUplSipTkUHDnLUgRB%2FVYFBRgstZrDkX8Hga%2Bh2JSmPeIZYQE3yfDCaAHlE0W%2B%2BWzkoUlwY5ijY%2Ff3cJhdn0vLy7yX17UsRAhv3AG3LZ7zh1Dh9uifL%2By0l9YdK5PBoqosbJIH0NP8fxmKGn64uHvZr4Y%2FFh2TROMAVFu%2Bi%2B%2BQeom4q4FYQ11%2BVgXXvWd2zZtjoXLqegua93HKbgk0MSKLHZ9xUVnUHwrr98BJZvdjWYZ9RlLibioo184bhdveve%2Fy31CjT%2Bqw9riT7kis5k1OzbHSMqox6DCT6YjKBjqkAVjYK%2Fjmv3ggajHLE9QWejTCkb5JO6UBedz4Mu802a%2Fvuqzfg43K7YdbC6lHX3YG1zoB9yl227KgxI2IoiaahIvBpKxesJqtZItUtNcgm9vEc3GQIknZsDuEPp2uraJdnRvLzM49L6iUg81bSOAQ%2BMtWOi32vvrrBkz3N6UY%2B7TR7OIGMWlgouH%2FTJLPS5jl43y9dNmYJ1qeV5hGqbZpJA23%2Fn84&X-Amz-Signature=fbf0ae3532d3d468b0867b7302fc0fedcb9d6f97eaf9685113c56eda1cae696a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
