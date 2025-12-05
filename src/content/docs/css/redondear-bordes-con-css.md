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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J4ALOR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChMLwHTM%2FOHw%2FpF%2FLnQ%2BB0wR5pK6Z6FLynwD8Lo3dKSAiB99ZUGNNbYY8XLKMxVDsHZSMz3%2FNjb470RzElWkhJU0yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMlTJdYunOOqz0qSNiKtwDaPygmSCMwSjkwoZR2fv0MVIFj05q0IewZs1PKxd%2BMZy2p6EB0Y8nDX9ssDJ2w%2Fb%2BZ7b0l73v0GnnvuJkU1X88kaS87YTaojmbqUmq%2FW3NJkSc1y9NOqQlsjrmASWLN%2F57hXZPG8ZZw48Ztz%2FCgaXKHQrMtoeWYsLT8qXjLXHJfYb3nGZ5YptN0Fd2uqK5%2FUmmzc5OFN4zKrLgRXkpJZApbafXC%2BFjF8%2FYpd7VfcHgCvHwUq5CtoCpxHxQa9HkbxrDAf6fW0XNpFpDT%2FNwazxy%2FYp549%2FryQ5rIv%2B6yghCvot2qGHNOyHxHHp3d4FSv8NLxxrVbeuw3Mv0JyaSuGXm%2FQAsjHD8e3a0%2FMBxjyQhEKSvInPNoqXqsL9nrIkv3z0JxP2ZlB3A0vzF4AvgJlrrzO8j%2BXhWSYavYlGjXobWVbGzVXWE5VBGMzlGysYbxfCfSf8%2BpsTXehIebgpMm42IRZWVBfr%2Frbr4Zy%2FX5zGrDxHsd%2BfK%2FMeCy6NeWnHB8weTbyrRB86RSARJDHY%2FNZ6GXNiyPo0roZm3ZCoSh7PR%2B1NMRbmJ22HMgaYuCFg5YlZKfSQtpt5baIX0b%2BtyYqaF7T5AgqiltIsU1jEo30OTAa%2BVxxlOoUeodeC6%2Bgw1%2BHLyQY6pgFDkfcehXV9mhEXDKLhWCx58i9zIcctl9ekwsdI%2BEu2MbBLBdsyqDssS6YZtjMS2uBnUr5kRKUq0aSCZmGOg2nxyCPtSosAlDeAu9XizPrQVD9UxZCUjYDL4DW8AMIRUOYCbZLREEUauNmauanHum2phRaKAym5p7g5qdlkym1RoXhKjCZrg5HYo%2Bq1NC3S54QJ8H6ZZlL1t2CMYvPNYeArJcOmTWiZ&X-Amz-Signature=c36c5a56b2555fd9680fcc9336a00c7175af053092d47ef957f6013eeaf732f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J4ALOR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChMLwHTM%2FOHw%2FpF%2FLnQ%2BB0wR5pK6Z6FLynwD8Lo3dKSAiB99ZUGNNbYY8XLKMxVDsHZSMz3%2FNjb470RzElWkhJU0yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMlTJdYunOOqz0qSNiKtwDaPygmSCMwSjkwoZR2fv0MVIFj05q0IewZs1PKxd%2BMZy2p6EB0Y8nDX9ssDJ2w%2Fb%2BZ7b0l73v0GnnvuJkU1X88kaS87YTaojmbqUmq%2FW3NJkSc1y9NOqQlsjrmASWLN%2F57hXZPG8ZZw48Ztz%2FCgaXKHQrMtoeWYsLT8qXjLXHJfYb3nGZ5YptN0Fd2uqK5%2FUmmzc5OFN4zKrLgRXkpJZApbafXC%2BFjF8%2FYpd7VfcHgCvHwUq5CtoCpxHxQa9HkbxrDAf6fW0XNpFpDT%2FNwazxy%2FYp549%2FryQ5rIv%2B6yghCvot2qGHNOyHxHHp3d4FSv8NLxxrVbeuw3Mv0JyaSuGXm%2FQAsjHD8e3a0%2FMBxjyQhEKSvInPNoqXqsL9nrIkv3z0JxP2ZlB3A0vzF4AvgJlrrzO8j%2BXhWSYavYlGjXobWVbGzVXWE5VBGMzlGysYbxfCfSf8%2BpsTXehIebgpMm42IRZWVBfr%2Frbr4Zy%2FX5zGrDxHsd%2BfK%2FMeCy6NeWnHB8weTbyrRB86RSARJDHY%2FNZ6GXNiyPo0roZm3ZCoSh7PR%2B1NMRbmJ22HMgaYuCFg5YlZKfSQtpt5baIX0b%2BtyYqaF7T5AgqiltIsU1jEo30OTAa%2BVxxlOoUeodeC6%2Bgw1%2BHLyQY6pgFDkfcehXV9mhEXDKLhWCx58i9zIcctl9ekwsdI%2BEu2MbBLBdsyqDssS6YZtjMS2uBnUr5kRKUq0aSCZmGOg2nxyCPtSosAlDeAu9XizPrQVD9UxZCUjYDL4DW8AMIRUOYCbZLREEUauNmauanHum2phRaKAym5p7g5qdlkym1RoXhKjCZrg5HYo%2Bq1NC3S54QJ8H6ZZlL1t2CMYvPNYeArJcOmTWiZ&X-Amz-Signature=3c4b163592c40a13984913e89737432c5583467f16407f2982a6c6a3f13df3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
