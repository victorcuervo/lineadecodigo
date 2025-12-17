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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAY2BSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAo0fqBPxiOviUQufBI%2BjInHEVXzx5dmjEioImigDjWAiEA06aFVDKzgdrbO8dnAK4WXOF0YvyBOwb1K%2BXMijRPo8EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJqojJh2tw%2F5piguyrcA%2F%2FJHF%2FNFKX3JzWd7KdYqLzmnH2lyLIZCqBvaU6SGU0dwetOkecGYpiqITVEOPkmLyK6S9kP2HkANyEX9b2yudbgavX9UCJ0jnqHwqesOnFFk3l0TkioaLdtAi4lUcvw%2B0dyi1su8KSLtpi3X0kbJEyqsQLhO8bG8N%2FpQa10IbYsCpjiWQdStm%2Bkt0PWa8ZA%2FBPA646oQSeyTTeWhJMJNUOcqTCOj8s5rZ1Ea874ELEyXrypAuyJYqYMbhhNz3AvzWTw8at0MF7AFrIUzRg7rLWrTprN8ZVwF3ziaMm6AZSj%2B8o1JKYC9Ay1D7NsQq6OoTJR57Qb8PuW%2BpoWwLMKSH7sy%2F3s3MNTL23k271OQewbGMueLSmvioNVm7Df4W9PPN3%2FGklHDhP0kzNYY8S%2FXNm0axgrmTWQTY15uei3KY6f%2BKoMvfFcNWn%2FFusYAetmh52%2B2nJmBVhjIrRzb6%2Bttbazj1Nov4JXTDGkDoLVSSzxsqvsdEHtjz68SwzQNFZMeKIIKrtQa1dWJHnuN%2BSbHalj7MMqMHtP0PHXXGJbNjzurS6FKPUydR3kTR1FNxWE8FAotu3Z%2BYFk5UvNxA14K3P%2BcqoeZE6shYGWrkLq4Kh3%2Fdy07KbzHP0ggITZMKeujMoGOqUBdUbBPOyPtNFXqb%2FVLo%2BF69LKQ0Mhf%2BV637btMhKIenXJ1mcMKVHR5BvxblYZLKkgJDfk%2FMugPAgT7FVT1O7PU4X4PI1AKm78lIn4I1vP4yZyfGziSIqu%2FXAS2w9UAy4JRha1%2F6QhlCOrLx94%2BtBqppK6iB4SxQ20iUR8gw1Xq3kdnc2AdopsJCx2uBPT9%2BKE1OVwKdXlxQBJcbt6oNj%2BWcxgKQlu&X-Amz-Signature=fc8ede950963009517aa73c5712b89073004ab53744b3c6d7a9e07195dde3fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAY2BSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAo0fqBPxiOviUQufBI%2BjInHEVXzx5dmjEioImigDjWAiEA06aFVDKzgdrbO8dnAK4WXOF0YvyBOwb1K%2BXMijRPo8EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJqojJh2tw%2F5piguyrcA%2F%2FJHF%2FNFKX3JzWd7KdYqLzmnH2lyLIZCqBvaU6SGU0dwetOkecGYpiqITVEOPkmLyK6S9kP2HkANyEX9b2yudbgavX9UCJ0jnqHwqesOnFFk3l0TkioaLdtAi4lUcvw%2B0dyi1su8KSLtpi3X0kbJEyqsQLhO8bG8N%2FpQa10IbYsCpjiWQdStm%2Bkt0PWa8ZA%2FBPA646oQSeyTTeWhJMJNUOcqTCOj8s5rZ1Ea874ELEyXrypAuyJYqYMbhhNz3AvzWTw8at0MF7AFrIUzRg7rLWrTprN8ZVwF3ziaMm6AZSj%2B8o1JKYC9Ay1D7NsQq6OoTJR57Qb8PuW%2BpoWwLMKSH7sy%2F3s3MNTL23k271OQewbGMueLSmvioNVm7Df4W9PPN3%2FGklHDhP0kzNYY8S%2FXNm0axgrmTWQTY15uei3KY6f%2BKoMvfFcNWn%2FFusYAetmh52%2B2nJmBVhjIrRzb6%2Bttbazj1Nov4JXTDGkDoLVSSzxsqvsdEHtjz68SwzQNFZMeKIIKrtQa1dWJHnuN%2BSbHalj7MMqMHtP0PHXXGJbNjzurS6FKPUydR3kTR1FNxWE8FAotu3Z%2BYFk5UvNxA14K3P%2BcqoeZE6shYGWrkLq4Kh3%2Fdy07KbzHP0ggITZMKeujMoGOqUBdUbBPOyPtNFXqb%2FVLo%2BF69LKQ0Mhf%2BV637btMhKIenXJ1mcMKVHR5BvxblYZLKkgJDfk%2FMugPAgT7FVT1O7PU4X4PI1AKm78lIn4I1vP4yZyfGziSIqu%2FXAS2w9UAy4JRha1%2F6QhlCOrLx94%2BtBqppK6iB4SxQ20iUR8gw1Xq3kdnc2AdopsJCx2uBPT9%2BKE1OVwKdXlxQBJcbt6oNj%2BWcxgKQlu&X-Amz-Signature=0aab12e8a1356984bdf49bf880d48312788aaad1747b36e1e189cb148c43296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
