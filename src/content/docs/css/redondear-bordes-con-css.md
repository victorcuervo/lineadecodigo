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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVX5LD6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBWi1UW3Q9FfrpfPNeKhj969QPpSYM5k3rnSYVCW%2BVVAiBxdDp%2Bje37uV8cP5pQfE9UxPseZP4VOCySkX%2FWR6yIwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs%2FegwvBTPYvhYnG2KtwDYpLyktCyPboVFXImII8UTaPyR1pkbxN2lg%2FgzeJSaKBtar%2BTydURQ0QO92r8jfSgaEsj0SbCLa%2FZb9FZckI8lF8bn8XRBqfNUhR9gFfEL%2FuG1oxU5R894F57LbmnVqyrKAy4x61p%2Bm%2FjEPf9cpSgvBvp7jnMRoiJ5Ogzn4A4fZ3eKBA5JCtQkxw6kQQSNCaU8%2F3y%2B6N%2FWGjOLkaQ9mB9gKinPGYKn4nC1JYsdN06zRBg5S50LwHz0HUoLJ8pq%2Bw1hQm28eOwuyZZL5TSk83QtSaRiCm9zOwXAULC3YStiBEwJOydCB9UeYjnVdJrsGJkb%2BM4IdDOHYum4Z8U7GgXfe6rXIC0UMqwbYiN9Jjl6YPzLGACqIiN03bOZBlN%2Fr6dtVGELFdUxjcWEpkH7IxkK%2B4PNm%2BMLY9%2BNSkPn7M7VnDfGw5k9jmdfejQy8f5LqaKP50Rcwlt5ucTRLhs6zF5ttoHJsU%2BWc7EiveANb3zrfRZWa%2FTFOiAUWWNhp1j5Bdbc26OEd%2B%2BJzIpH5OdaUV7DNPtZyHos8GnnqlqoSebxzLXH%2FR4ioJe%2FjEOat%2FTnzuY4P2fdXUruMfclQLkF5VHVODIorsBaxVFfsyBqj%2BbTpG%2BY6DfiWqPbkVEM9owrcHRyQY6pgGJsSJ8%2FwkWq1EnklMSNjcXLnimsMAy3rmmJDkqkrU8n93vvfrKVKg5zfexEbq%2FjwWvhXSV1QYmAp0x6Ueyv6Vv8ADr5T7eudLpP6PfRzuG5giV9NYKkARuoZHq7AeGbUCIGwjZm2vq484lgBfon05ZEfRHRLfzu3Xe%2BScRCIih9B7mktYQyC5IfosVAzmrCq%2FTzxxp%2BFW5lU3EZHENbF7E3P6DK%2F4y&X-Amz-Signature=bb51949687cabce0fa093f0746392820daafc255f8e4f9ea602b21dcfafe9699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVX5LD6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBWi1UW3Q9FfrpfPNeKhj969QPpSYM5k3rnSYVCW%2BVVAiBxdDp%2Bje37uV8cP5pQfE9UxPseZP4VOCySkX%2FWR6yIwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs%2FegwvBTPYvhYnG2KtwDYpLyktCyPboVFXImII8UTaPyR1pkbxN2lg%2FgzeJSaKBtar%2BTydURQ0QO92r8jfSgaEsj0SbCLa%2FZb9FZckI8lF8bn8XRBqfNUhR9gFfEL%2FuG1oxU5R894F57LbmnVqyrKAy4x61p%2Bm%2FjEPf9cpSgvBvp7jnMRoiJ5Ogzn4A4fZ3eKBA5JCtQkxw6kQQSNCaU8%2F3y%2B6N%2FWGjOLkaQ9mB9gKinPGYKn4nC1JYsdN06zRBg5S50LwHz0HUoLJ8pq%2Bw1hQm28eOwuyZZL5TSk83QtSaRiCm9zOwXAULC3YStiBEwJOydCB9UeYjnVdJrsGJkb%2BM4IdDOHYum4Z8U7GgXfe6rXIC0UMqwbYiN9Jjl6YPzLGACqIiN03bOZBlN%2Fr6dtVGELFdUxjcWEpkH7IxkK%2B4PNm%2BMLY9%2BNSkPn7M7VnDfGw5k9jmdfejQy8f5LqaKP50Rcwlt5ucTRLhs6zF5ttoHJsU%2BWc7EiveANb3zrfRZWa%2FTFOiAUWWNhp1j5Bdbc26OEd%2B%2BJzIpH5OdaUV7DNPtZyHos8GnnqlqoSebxzLXH%2FR4ioJe%2FjEOat%2FTnzuY4P2fdXUruMfclQLkF5VHVODIorsBaxVFfsyBqj%2BbTpG%2BY6DfiWqPbkVEM9owrcHRyQY6pgGJsSJ8%2FwkWq1EnklMSNjcXLnimsMAy3rmmJDkqkrU8n93vvfrKVKg5zfexEbq%2FjwWvhXSV1QYmAp0x6Ueyv6Vv8ADr5T7eudLpP6PfRzuG5giV9NYKkARuoZHq7AeGbUCIGwjZm2vq484lgBfon05ZEfRHRLfzu3Xe%2BScRCIih9B7mktYQyC5IfosVAzmrCq%2FTzxxp%2BFW5lU3EZHENbF7E3P6DK%2F4y&X-Amz-Signature=0784d283a2c49dc1c9344cd00abafcf7850f0fe96ca0f8dedc6d0eb34d1b7c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
