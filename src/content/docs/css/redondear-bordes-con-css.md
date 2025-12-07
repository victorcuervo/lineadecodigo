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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BZ6MDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCgz0LKlUMkcNuym6Af4xkjiZSsb87fEOtmq%2F16yHLtAiEA%2F8KImTmk5Hd42I0xSO6UnMsTsgSTsd3ytN%2FiRYwWxaUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhfcNlbPjSeu8MDXyrcA8SS83G1Ag6NwtZk33lgL1BDU59zFIu%2F4DBKnUa7Gh30VtHGyG8fSTenrsJ0UF9PvlC7Iwp9NpKVLmtDlY5D3owVOFXsW7oSU9IhE7vsB2omGCOz3wlYFy%2FyIV4qXNBtFxQQJZwiitUGnIe5iYSI9Mk5NiCzHs94Uzzv4L8JPQ0U51nPt1OZYQyV4iyyNcT0gZqH8UoAb4qHFEQ0Dc2gOQb4zyh%2FVxUOkzgnPYQvgj60dlGMR5D%2F9WNmlcODzK0eVo%2F6Qx3gMwJGqAxYAM2b0IF%2BPqa1Kgo32vUw5efkfy1Kd6M1oWicUFte0ub99xwxYSDXBIyRPwTTIpaFc66J2ET9KD%2BYOiFLgTBxZgemjHyo6QY48u5%2Blo1nsVpQ1gN%2F3lINxKJXvzTJpJWXiJGPnSjHLk2%2FMsz2fY%2FppAbxy2KFmiheFLqu%2BaBFIAHBN3PfJVZ7Iy%2F0pyH9BQOJRamMT5A6UQ53BtraNjHo1WOOn7MT7GJA1S7KYqtmvgKyY%2F6mRK8l68SZi%2FFty0O%2FQQBSE7LamfSfsdASyVzn6A1O4JzFaz9J9GmVZVOu6asYqJ8RUotmOpNcS%2BklIBDr8M0BaUxX00fo5NsFIOVpZfD4yW8F0dszOw9hpvVM8HnbMNG81skGOqUBYWOyoBW5tPwVcTat6dj27P6KwqlR9exTB35YL0qq5aPd%2BtutBl5%2FmB8n%2ByFuQiBU8FFJEMkvPiUy7xDjcwQ6iHHetcTmXGi8VpG66K4ejaPuTPxsXvDDiyWwOW4hYadyGsAvd1fVzDcGZaFnyV8en%2Bx15YpX1wT%2BTRPM945y9KlnBPet%2B9Cvu2nlidbnOcbUnc90fB9YIw6hox2ZVJ5O5AiMHRMk&X-Amz-Signature=a4c2b5ec2e130a45c5f2d880d58cd1a4bc3d82add823ae8cb4c2d9071cc10986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BZ6MDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCgz0LKlUMkcNuym6Af4xkjiZSsb87fEOtmq%2F16yHLtAiEA%2F8KImTmk5Hd42I0xSO6UnMsTsgSTsd3ytN%2FiRYwWxaUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhfcNlbPjSeu8MDXyrcA8SS83G1Ag6NwtZk33lgL1BDU59zFIu%2F4DBKnUa7Gh30VtHGyG8fSTenrsJ0UF9PvlC7Iwp9NpKVLmtDlY5D3owVOFXsW7oSU9IhE7vsB2omGCOz3wlYFy%2FyIV4qXNBtFxQQJZwiitUGnIe5iYSI9Mk5NiCzHs94Uzzv4L8JPQ0U51nPt1OZYQyV4iyyNcT0gZqH8UoAb4qHFEQ0Dc2gOQb4zyh%2FVxUOkzgnPYQvgj60dlGMR5D%2F9WNmlcODzK0eVo%2F6Qx3gMwJGqAxYAM2b0IF%2BPqa1Kgo32vUw5efkfy1Kd6M1oWicUFte0ub99xwxYSDXBIyRPwTTIpaFc66J2ET9KD%2BYOiFLgTBxZgemjHyo6QY48u5%2Blo1nsVpQ1gN%2F3lINxKJXvzTJpJWXiJGPnSjHLk2%2FMsz2fY%2FppAbxy2KFmiheFLqu%2BaBFIAHBN3PfJVZ7Iy%2F0pyH9BQOJRamMT5A6UQ53BtraNjHo1WOOn7MT7GJA1S7KYqtmvgKyY%2F6mRK8l68SZi%2FFty0O%2FQQBSE7LamfSfsdASyVzn6A1O4JzFaz9J9GmVZVOu6asYqJ8RUotmOpNcS%2BklIBDr8M0BaUxX00fo5NsFIOVpZfD4yW8F0dszOw9hpvVM8HnbMNG81skGOqUBYWOyoBW5tPwVcTat6dj27P6KwqlR9exTB35YL0qq5aPd%2BtutBl5%2FmB8n%2ByFuQiBU8FFJEMkvPiUy7xDjcwQ6iHHetcTmXGi8VpG66K4ejaPuTPxsXvDDiyWwOW4hYadyGsAvd1fVzDcGZaFnyV8en%2Bx15YpX1wT%2BTRPM945y9KlnBPet%2B9Cvu2nlidbnOcbUnc90fB9YIw6hox2ZVJ5O5AiMHRMk&X-Amz-Signature=783867ad523e3ee8f2f37bbf19bafbab42ea46b2f6af5cbd7b4d111abffca318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
