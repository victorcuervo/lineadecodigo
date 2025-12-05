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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYP5HVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVr4AZ%2FzL2EM432LXudUb5NvBCxhZ2UHOvYuTy2YarxwIhAImQsp9ekHYJnQGbdyKCdbKPX8uhJP0we%2FBbZfbHHHUcKv8DCFsQABoMNjM3NDIzMTgzODA1Igw0moTBQtGvyJtllbYq3AMijptlHeIKd7aZU%2F3G%2F3EPOvuWQFWCAFeayLWaA7aEUkBiIHPpUT5vvz0S%2Bj9uQdBo1Z4RGgn3DZF42dozr%2FYuWqHIlVzRCyVkLLo0MDkmx3CiF4V5YfPYns8xmkaWjvHDHU9i6oKhhfh1A06gVObgfimnVol96RReWFjweKMj3mek6cDd9iqOKOEhMMsIRM6c4fDXCrHxnE0k3b8lk4WhpXWCeZ16UfXOL2EzJTYXIo25kSjervNEX9FfMKn9qCZIiuQvlZ%2Bj14hw536AefQkk0tsOkT85wkdDcYmhQ28dF6lDs2JohVxn2UnipZB5LDA219bDZT9hnojMe76Hl5ae6GPsI7oAIpv1aSSnlRNKJnvjadJUpmDRsWEX2qKhTq8IzArxyjL6P6%2FZtPI3H9OyFTK%2BBf0HQGM6LFKatIn%2F3xi88ljMtlGki1kSPuQpGegwbKrVwtaGVeTKPsJmL6yJws7KAaId0Wqh3MAI6TfbqecIvnwa5AqprzzPiJNvD%2FJgPT3aGyiNyMGwEY4BkHF8ab0fCZzzJfmGMd3BR8bVtmIrXB6lvopkpHHnrXt7WrUpSkrUlUCcgM6BehmstrvBslkPL4%2Bd97oliOuaqN2gmfSPpkh5HPf5dWJUzCH0MrJBjqkARs1qENYs0TC2JvonNDeyZrPuA1r7bNQDX14J3nPvBKz4vB%2BDiX7eYnCNpFg%2Bbw%2FozDoxK4TqSVs8fkLgfIi7d8JNNkZwsTZ5AntqSd8KEXeM2dfBNgwS3yYLdjJrYaggPqAaeXzgBbT4xO0kzeer7m9T%2FfzPEiHqOGmQBtzlU9ygOjE8YVssnKuLd%2F4oas3CweK41GIqLvDmlWbmBirvn7vwVpa&X-Amz-Signature=68fbf6a7532aba6e5a8142e545f2aacf7a680ae41b74f6104bc71a6c92477074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYP5HVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVr4AZ%2FzL2EM432LXudUb5NvBCxhZ2UHOvYuTy2YarxwIhAImQsp9ekHYJnQGbdyKCdbKPX8uhJP0we%2FBbZfbHHHUcKv8DCFsQABoMNjM3NDIzMTgzODA1Igw0moTBQtGvyJtllbYq3AMijptlHeIKd7aZU%2F3G%2F3EPOvuWQFWCAFeayLWaA7aEUkBiIHPpUT5vvz0S%2Bj9uQdBo1Z4RGgn3DZF42dozr%2FYuWqHIlVzRCyVkLLo0MDkmx3CiF4V5YfPYns8xmkaWjvHDHU9i6oKhhfh1A06gVObgfimnVol96RReWFjweKMj3mek6cDd9iqOKOEhMMsIRM6c4fDXCrHxnE0k3b8lk4WhpXWCeZ16UfXOL2EzJTYXIo25kSjervNEX9FfMKn9qCZIiuQvlZ%2Bj14hw536AefQkk0tsOkT85wkdDcYmhQ28dF6lDs2JohVxn2UnipZB5LDA219bDZT9hnojMe76Hl5ae6GPsI7oAIpv1aSSnlRNKJnvjadJUpmDRsWEX2qKhTq8IzArxyjL6P6%2FZtPI3H9OyFTK%2BBf0HQGM6LFKatIn%2F3xi88ljMtlGki1kSPuQpGegwbKrVwtaGVeTKPsJmL6yJws7KAaId0Wqh3MAI6TfbqecIvnwa5AqprzzPiJNvD%2FJgPT3aGyiNyMGwEY4BkHF8ab0fCZzzJfmGMd3BR8bVtmIrXB6lvopkpHHnrXt7WrUpSkrUlUCcgM6BehmstrvBslkPL4%2Bd97oliOuaqN2gmfSPpkh5HPf5dWJUzCH0MrJBjqkARs1qENYs0TC2JvonNDeyZrPuA1r7bNQDX14J3nPvBKz4vB%2BDiX7eYnCNpFg%2Bbw%2FozDoxK4TqSVs8fkLgfIi7d8JNNkZwsTZ5AntqSd8KEXeM2dfBNgwS3yYLdjJrYaggPqAaeXzgBbT4xO0kzeer7m9T%2FfzPEiHqOGmQBtzlU9ygOjE8YVssnKuLd%2F4oas3CweK41GIqLvDmlWbmBirvn7vwVpa&X-Amz-Signature=132d4bac9f14ca8ec367d507d14f4adf1db55e651b7e61432c10b461d8cebf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
