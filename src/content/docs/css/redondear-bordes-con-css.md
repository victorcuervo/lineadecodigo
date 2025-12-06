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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWBYPJ6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTg61DZNqIMrw3wcHokWRxImq9rgOQoqb6D7i2Rxsd2gIhANbNCq258TPplBU%2F2b%2BcrF5YwqFt1WV%2F7itJHNMU%2BKytKv8DCGgQABoMNjM3NDIzMTgzODA1IgxVWtfK0q06v2WuAmoq3AMqXk6gIJY8sZwC1E5rT5D3XJm8tWGTgr6uhlcaCxr3FZafexgBoDk3rSWp6inN9eYpeUMWXiSFqNwWtw9Mf145W1FCQ5DPB1HBDlY8iJ6SdXNQaH%2Bw2ISIiJoEIop1ogZkwiRhd91nzAM8%2BRqeRzz2zl2DkUWMbq7f87SNt0O0Gz2Cs93hq4qDOOIPY7FMGYIt3gWuS12AEurn6WthVHa4L4jE4uWrlY9vKWX3hcksqzq%2B61HqaLMW5W0MzZ514SJqoieLpbez6P7Lz6rwmi4DSe7s8r8xfDmWMdAMFHHgxVAsCV5bOM6S2UfKBv5cSKcDBzHHul%2FBMYKwRYVzUYBe8naCOgjawgyNQ8Bfasipy8eAYgKCUzKCncUIiZBqIgWMQe5wNzuTBzk%2FkJTLLzTNn7UCsHIomZkgAW0AGFQmiykGXqZ7Ab%2F5DxPn7t34jFqrzXl5kzjQgZcQF40hUjrJWC5n5qC5xlg6oLXWnQg0YDCMmH7TgTMKNUNQZkPj3PQ7178Gqajws6Ny4CH%2FgkrPU8W6VJN4TCYZ45mAuo%2Fxxgtt%2FFk2CvlzdlZYU2fqveXcfZEy1%2BM5PW7fLX9hEZIM8Bh8%2B%2BJvaSU8k%2Be%2BqGu%2BLiuotnBL74ZKVQ%2FVKzCIxs3JBjqkAVODZtDeLhpI8%2FlIGGYXN5sAaxXthc1mjGSZyaT5AeSMowUYOEIXGTrP3DPlKXYRZBVflL1LFtpK2uLkYpwdNYgUF%2BUXTJbbzk%2BZulnDJQPXD1iYJtb0OYmvsjYrxvxW5dGHkDpl4tlcR1hV1HL4ZG5DlchccNEauUVs7LBamp8Qqq%2FciRz%2F2JktK0nqLALe4e88e9GE7kzEJxn0r94WIpP0%2FkNR&X-Amz-Signature=038f4fbc8896c4fc1c7b75c2da338c7ab7170e618922edbf55e76f0898a04f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWBYPJ6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTg61DZNqIMrw3wcHokWRxImq9rgOQoqb6D7i2Rxsd2gIhANbNCq258TPplBU%2F2b%2BcrF5YwqFt1WV%2F7itJHNMU%2BKytKv8DCGgQABoMNjM3NDIzMTgzODA1IgxVWtfK0q06v2WuAmoq3AMqXk6gIJY8sZwC1E5rT5D3XJm8tWGTgr6uhlcaCxr3FZafexgBoDk3rSWp6inN9eYpeUMWXiSFqNwWtw9Mf145W1FCQ5DPB1HBDlY8iJ6SdXNQaH%2Bw2ISIiJoEIop1ogZkwiRhd91nzAM8%2BRqeRzz2zl2DkUWMbq7f87SNt0O0Gz2Cs93hq4qDOOIPY7FMGYIt3gWuS12AEurn6WthVHa4L4jE4uWrlY9vKWX3hcksqzq%2B61HqaLMW5W0MzZ514SJqoieLpbez6P7Lz6rwmi4DSe7s8r8xfDmWMdAMFHHgxVAsCV5bOM6S2UfKBv5cSKcDBzHHul%2FBMYKwRYVzUYBe8naCOgjawgyNQ8Bfasipy8eAYgKCUzKCncUIiZBqIgWMQe5wNzuTBzk%2FkJTLLzTNn7UCsHIomZkgAW0AGFQmiykGXqZ7Ab%2F5DxPn7t34jFqrzXl5kzjQgZcQF40hUjrJWC5n5qC5xlg6oLXWnQg0YDCMmH7TgTMKNUNQZkPj3PQ7178Gqajws6Ny4CH%2FgkrPU8W6VJN4TCYZ45mAuo%2Fxxgtt%2FFk2CvlzdlZYU2fqveXcfZEy1%2BM5PW7fLX9hEZIM8Bh8%2B%2BJvaSU8k%2Be%2BqGu%2BLiuotnBL74ZKVQ%2FVKzCIxs3JBjqkAVODZtDeLhpI8%2FlIGGYXN5sAaxXthc1mjGSZyaT5AeSMowUYOEIXGTrP3DPlKXYRZBVflL1LFtpK2uLkYpwdNYgUF%2BUXTJbbzk%2BZulnDJQPXD1iYJtb0OYmvsjYrxvxW5dGHkDpl4tlcR1hV1HL4ZG5DlchccNEauUVs7LBamp8Qqq%2FciRz%2F2JktK0nqLALe4e88e9GE7kzEJxn0r94WIpP0%2FkNR&X-Amz-Signature=bb1dde2e0fe30504c38f315fa0d7d115e7623b7dcb1aabbeb436935c1b355404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
