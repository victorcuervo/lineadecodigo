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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDGW27I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyuLqWesZTT4jQWoNitZsP0y4ljKHjhNxkPB%2BaP4L6AgIhANVDZLMiBxnDm3q2EHXoKQyinRWe6UXARzv9FPJfxjgzKv8DCDkQABoMNjM3NDIzMTgzODA1IgxAyAqp7T6BGXAyvTMq3AMRLVGTZw5e78zRpvDGj244nwBggkYoQeQgOUYOkZq5KV2HoDjKggVEi8C67E9RQiWob7roUEHUjTr25a%2BlbzM4Dh%2BgvrA5M9l0ZX8OJiB9Xvip9Q31wQIszv9iE7f%2F%2FII8Yo2N7QuydrSYWILI4yu25T6CGn5c5%2BufLfx0LI8uKSxQScjkZwt4WSYNlxAZROyqLuiLJXmpsohjRBvq%2BiopIas%2BZzb%2Bs6yQ1ucco90YAwXAWe%2B0n49TLY9tFefL0gCKRkxRszlYpo3gaQXg8jgxUGSn2UAwTCoxZYGtTDLawDI%2FYC%2FJuMGb%2FrXZIdYsNoDCKW%2FFqj1Pe%2B5efPlhgXwRacOxXazUBeH%2FanR9Yifbx9aFrUGvVYo3Wn5RqYjjysNtYBMsCFFTiqgFvaVKTe%2Fwq7zE7Jv068Mr8CtzVq7YuWF7Og%2FJgl0HEGUO6eL0Odg2AO0j4lzbIV9yhcC%2B35ifOr0pdundrEMCi7h7revZb49bqI7GRwvE3TcX8LgMhDqTc2j3Tbck0uv%2B3dAQbK8r0fkWc70EnfszRNLQqjc%2B4N6%2Bz8DiSIkafiI9vu8czykFl5HeKdQ%2BJRGZSF0KXIrK2ZJnlird7HrFpj3rZ3KYqFw%2Bi5IUw%2FfuO6LtWzCTlcPJBjqkARFVEdu8ziQtVmodzdYj8H3uyqJEM3DBwLbgYoOBP8aGo3ejzVMZegvQLnOjt9%2BWreNCW%2BciwS0F7GPsojqN4Dup1LjsOrjnjKryGfP1KizVDm92bNTLORpBXJT3d8hBuxu7FquRA0qCscnQC0Om3SiQ8GsKdiA19H4MRMulIQjcbzwV6i3YXVEOZJckxrMesN4s3%2FyY3I%2B4ku%2F1vJ4gmCVTfs1N&X-Amz-Signature=767ccf3a53193b018d0aabf1fd2c0a6136357e6e8e6f53e2433f9c338deb6e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDGW27I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDyuLqWesZTT4jQWoNitZsP0y4ljKHjhNxkPB%2BaP4L6AgIhANVDZLMiBxnDm3q2EHXoKQyinRWe6UXARzv9FPJfxjgzKv8DCDkQABoMNjM3NDIzMTgzODA1IgxAyAqp7T6BGXAyvTMq3AMRLVGTZw5e78zRpvDGj244nwBggkYoQeQgOUYOkZq5KV2HoDjKggVEi8C67E9RQiWob7roUEHUjTr25a%2BlbzM4Dh%2BgvrA5M9l0ZX8OJiB9Xvip9Q31wQIszv9iE7f%2F%2FII8Yo2N7QuydrSYWILI4yu25T6CGn5c5%2BufLfx0LI8uKSxQScjkZwt4WSYNlxAZROyqLuiLJXmpsohjRBvq%2BiopIas%2BZzb%2Bs6yQ1ucco90YAwXAWe%2B0n49TLY9tFefL0gCKRkxRszlYpo3gaQXg8jgxUGSn2UAwTCoxZYGtTDLawDI%2FYC%2FJuMGb%2FrXZIdYsNoDCKW%2FFqj1Pe%2B5efPlhgXwRacOxXazUBeH%2FanR9Yifbx9aFrUGvVYo3Wn5RqYjjysNtYBMsCFFTiqgFvaVKTe%2Fwq7zE7Jv068Mr8CtzVq7YuWF7Og%2FJgl0HEGUO6eL0Odg2AO0j4lzbIV9yhcC%2B35ifOr0pdundrEMCi7h7revZb49bqI7GRwvE3TcX8LgMhDqTc2j3Tbck0uv%2B3dAQbK8r0fkWc70EnfszRNLQqjc%2B4N6%2Bz8DiSIkafiI9vu8czykFl5HeKdQ%2BJRGZSF0KXIrK2ZJnlird7HrFpj3rZ3KYqFw%2Bi5IUw%2FfuO6LtWzCTlcPJBjqkARFVEdu8ziQtVmodzdYj8H3uyqJEM3DBwLbgYoOBP8aGo3ejzVMZegvQLnOjt9%2BWreNCW%2BciwS0F7GPsojqN4Dup1LjsOrjnjKryGfP1KizVDm92bNTLORpBXJT3d8hBuxu7FquRA0qCscnQC0Om3SiQ8GsKdiA19H4MRMulIQjcbzwV6i3YXVEOZJckxrMesN4s3%2FyY3I%2B4ku%2F1vJ4gmCVTfs1N&X-Amz-Signature=1d61b8a5291410ffe33cb1cddfb26d9bc539af4e6fcf51100ebdde89939d42e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
