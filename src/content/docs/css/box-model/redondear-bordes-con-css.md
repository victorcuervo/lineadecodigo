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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIAG4BU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO1dUPUe4uiBvgx2rs7gHrCm2iK8F%2BCMOOMvPQ1FZHgIhANVJVoI3V0Nlsejl5qhpPfguoROBubl98IOX1jVQe9A%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyugJh0OkfgnUF5%2FFEq3APO7b35xH8mdS1fxukEkcMbiek88yd7PIFRy%2BQO1m%2BUVt6g9anpgZb8DQqxePSzL0MgyHoJtIculNd3YN64a%2Fej%2BI%2FrDKPWyHGDZuXPSJlAk2FbrMdmxRQttckmHKo8yzKtfqMhMxDcq5zZoue5OY%2FcPmnYnzVWVS8UNdvOZrfGjs6qhcu9ihO0Vrg0duK%2FGHuNSxJQ99kZaH%2BJGqsR8KtKz3aEcgwcOQSUicJQU%2FOhOyK1iaPFLSxblu3rJgYYwZVKI166vqEGgEnO4hwX6GflyLUp4%2FoqHluBKlizVZc8U1flvZZ8AahLdZ42zabX0Wuyz6Hrk%2B7K6RprdH6wDpwMvU4ZmXltbF%2FmBsTT6fAJFAngmGtGx7O8yKu8ptrlkGqLaK5HiApKGkbzF9fP7Id0kyMPtbk9GSpQr5mV5ELc2s%2BWjLkJbwqZxzDT462oy5%2BjKGBiqlBUALSkST5%2FXwt8OJW7mmtWpyYtRPohq13yWzXMCKBMnOw0p2xcgbYlFdKOLPhWi3LjPazri19aFTBTaordRkwAdGr%2F4R75i9k6hm5xZTG8qy8%2B33cApPYJBxI1HLvVfG1RzgZ7uJF%2ByX1PNprEp2B4vwZ0wX30VStybjBF3bWiaKeib0yUPTC1oIvKBjqkAVm6tdTsfWgm4Wxjnim7ycCErAhw%2FwTTbk%2F63L15YGswBeQ0lTXeb3exm09kIe0QzxXTmbd6GVb4GS9ICyviA8%2F1%2FnstBmtQD7idlWuvb6%2B1K0BIfRaIcaLZqS91lL4XI0FavnOFW6gXmN9Umb2f%2FSYJs2KSXR5w15I6pKyE7ELEHkl4UP1Ac45lJFJF2TQV491E0Yni4vcMcsVQP53us7owjRQ7&X-Amz-Signature=98da9e98dab450d15b7375f0613a5a3735381e46f66bec06c7f4ef06c3d0676a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIAG4BU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO1dUPUe4uiBvgx2rs7gHrCm2iK8F%2BCMOOMvPQ1FZHgIhANVJVoI3V0Nlsejl5qhpPfguoROBubl98IOX1jVQe9A%2BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyugJh0OkfgnUF5%2FFEq3APO7b35xH8mdS1fxukEkcMbiek88yd7PIFRy%2BQO1m%2BUVt6g9anpgZb8DQqxePSzL0MgyHoJtIculNd3YN64a%2Fej%2BI%2FrDKPWyHGDZuXPSJlAk2FbrMdmxRQttckmHKo8yzKtfqMhMxDcq5zZoue5OY%2FcPmnYnzVWVS8UNdvOZrfGjs6qhcu9ihO0Vrg0duK%2FGHuNSxJQ99kZaH%2BJGqsR8KtKz3aEcgwcOQSUicJQU%2FOhOyK1iaPFLSxblu3rJgYYwZVKI166vqEGgEnO4hwX6GflyLUp4%2FoqHluBKlizVZc8U1flvZZ8AahLdZ42zabX0Wuyz6Hrk%2B7K6RprdH6wDpwMvU4ZmXltbF%2FmBsTT6fAJFAngmGtGx7O8yKu8ptrlkGqLaK5HiApKGkbzF9fP7Id0kyMPtbk9GSpQr5mV5ELc2s%2BWjLkJbwqZxzDT462oy5%2BjKGBiqlBUALSkST5%2FXwt8OJW7mmtWpyYtRPohq13yWzXMCKBMnOw0p2xcgbYlFdKOLPhWi3LjPazri19aFTBTaordRkwAdGr%2F4R75i9k6hm5xZTG8qy8%2B33cApPYJBxI1HLvVfG1RzgZ7uJF%2ByX1PNprEp2B4vwZ0wX30VStybjBF3bWiaKeib0yUPTC1oIvKBjqkAVm6tdTsfWgm4Wxjnim7ycCErAhw%2FwTTbk%2F63L15YGswBeQ0lTXeb3exm09kIe0QzxXTmbd6GVb4GS9ICyviA8%2F1%2FnstBmtQD7idlWuvb6%2B1K0BIfRaIcaLZqS91lL4XI0FavnOFW6gXmN9Umb2f%2FSYJs2KSXR5w15I6pKyE7ELEHkl4UP1Ac45lJFJF2TQV491E0Yni4vcMcsVQP53us7owjRQ7&X-Amz-Signature=94525afa785330d38e8ea6fe6106ccd3d99602e36aeb1c02265635b9d7aae999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
