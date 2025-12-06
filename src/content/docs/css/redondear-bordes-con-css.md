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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXRU5BO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDieeRiayM%2FgjtX1waS20B%2BSTZPPut2MB3ZtP32zw1EXAiB7V0Bt%2BdnFXRBnjt07dwOiypcbGYBpaYThbX%2BEdknd8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTvYfuYzk33m3qwiKtwDFdUgDvWAx1x%2FN%2FuW%2F%2FPnFM7I5KBoRtVVwgBHCeNIPMhDHTjzBQy40UpuSw4mO1ZRRB1SZy0QPJuq8gdpI%2F5cfcLzO37JTUvcsAyfoogFhiNFgPmnz9XH7vBWDikuPjQ4TN9%2BrWyBaHwdMF0NI5O6XIJCaIvTNZergLI9oJMi47UEnSO3jCeY5nKOv5Vq0Gq2Nt3JyzEWP%2FNViFABbWzFll37uMUGR2CH4gExGXZFbTtxmIKx5n%2F%2BZGSReLh0EXRHOCpo%2BWvGjtDOYsybn7FZEEuvIS85Ea6KXE2cekzG24outo9RjwYarjLReuI%2Fa3pTyGU5Lha3OwPIWDPsSUaFsa1%2BifsEk59JGKE%2FASGr%2FcMxIVKbEsbCABtYyMO7cghq%2FVbSZoTMzNRYVORjawSOWAQqIxYcro9Y6zSSjpS24cWX6fTJK40BxpJfxyORzl1ZphQMUgffaEMyNpZHY3CHr%2FwtkaL3Sr2b5%2BxLaZD0RvbiXvUIRIzcK2Vh63%2B2QniX2sFcrXVUVtuOPtsgOH9fk8ZueLSz1MR%2F56IoHEx1%2B%2F%2BrWPqx5IYIbjNJuH%2F2t5HWyg8%2FzG40H9YWD16vgi4TpQO11J3dUO%2FuKHRu6AeJeqtYbRSuGQ3HLKQQhikw6P3SyQY6pgEA6VTfDrgXBPLwemW4XHYu0ZKFviArMS6b6ygWwIhBHrKl9NFJdYcZ4Vv2RiS%2FNRwgNQ3i%2B7cb23YjiNw%2FohSZYUtwMmJg8TZra5MxaUPSQ886Isr3piLb5XpOFoZi5rnc1BcHzsO8uS7MHQLhtKiuSbgnsT6RE0GilW7u6uxLUaS1EqmyjWDju6AkACcqHZogR7nFTNigTf2f0BNra%2Ff1zouPZP7x&X-Amz-Signature=02e8c7fc2a5cc9bf2e425c87343325fa29511a6e67bf0889aa5263191feb38cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXRU5BO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDieeRiayM%2FgjtX1waS20B%2BSTZPPut2MB3ZtP32zw1EXAiB7V0Bt%2BdnFXRBnjt07dwOiypcbGYBpaYThbX%2BEdknd8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTvYfuYzk33m3qwiKtwDFdUgDvWAx1x%2FN%2FuW%2F%2FPnFM7I5KBoRtVVwgBHCeNIPMhDHTjzBQy40UpuSw4mO1ZRRB1SZy0QPJuq8gdpI%2F5cfcLzO37JTUvcsAyfoogFhiNFgPmnz9XH7vBWDikuPjQ4TN9%2BrWyBaHwdMF0NI5O6XIJCaIvTNZergLI9oJMi47UEnSO3jCeY5nKOv5Vq0Gq2Nt3JyzEWP%2FNViFABbWzFll37uMUGR2CH4gExGXZFbTtxmIKx5n%2F%2BZGSReLh0EXRHOCpo%2BWvGjtDOYsybn7FZEEuvIS85Ea6KXE2cekzG24outo9RjwYarjLReuI%2Fa3pTyGU5Lha3OwPIWDPsSUaFsa1%2BifsEk59JGKE%2FASGr%2FcMxIVKbEsbCABtYyMO7cghq%2FVbSZoTMzNRYVORjawSOWAQqIxYcro9Y6zSSjpS24cWX6fTJK40BxpJfxyORzl1ZphQMUgffaEMyNpZHY3CHr%2FwtkaL3Sr2b5%2BxLaZD0RvbiXvUIRIzcK2Vh63%2B2QniX2sFcrXVUVtuOPtsgOH9fk8ZueLSz1MR%2F56IoHEx1%2B%2F%2BrWPqx5IYIbjNJuH%2F2t5HWyg8%2FzG40H9YWD16vgi4TpQO11J3dUO%2FuKHRu6AeJeqtYbRSuGQ3HLKQQhikw6P3SyQY6pgEA6VTfDrgXBPLwemW4XHYu0ZKFviArMS6b6ygWwIhBHrKl9NFJdYcZ4Vv2RiS%2FNRwgNQ3i%2B7cb23YjiNw%2FohSZYUtwMmJg8TZra5MxaUPSQ886Isr3piLb5XpOFoZi5rnc1BcHzsO8uS7MHQLhtKiuSbgnsT6RE0GilW7u6uxLUaS1EqmyjWDju6AkACcqHZogR7nFTNigTf2f0BNra%2Ff1zouPZP7x&X-Amz-Signature=f9befc44083f4000831b71f123540d6d0d8595a75aad05c945e4c510aea7c25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
