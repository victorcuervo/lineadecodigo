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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DXAKN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESSQfrCjsczKr9N3Mxr45gLM5R8CFbGS%2FDJ0mO15GyAIgMxyvYDaMgvCjjClpfoh7bvCBjd17x97xuVGu1A%2B6t4kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPKOn4t3cteru4agjircA666knxNhzzJdGfiJYkNIJTn0RsMtsj3ROx8S%2BbN3i3ymKz1Ez3Vj1%2BmkUmyjCGBAACcnhyVxAQ%2FaCxHnnbg%2Bgy9RPUySYZfjHoxlXuZIiK6sgrmLE9Q1%2FKZEd8YKFeYR4OksK1yaxgyuUy66hyeXrqJsKSBrXzUnbkpYOA0ireF5jkj588p0nIf3bxLpFoB8rs6tLAruuC1nrQZMKg2jhmqrGIlOjqB0c8vICUynUJpUwWpXi5G1j8uoiUHVLP5RiPFYq9xhxtNi1NOO4KGFgTVtOgB4simpeJxQtjYxJ80Ers4ndcU6MgWv%2B6MfPwl32M4Dpsk%2Brrv%2BsUVfucnm8dzRqgLyMF3ZcK3ZFPE16a4Sj890tgHLKyhnMq1kHLbhKOL7T%2BYgtrrzOjZXsBYmMq0ttKP9r0CiNP%2B6kzPRphyG34kWL5jlTCR7NuEG1KiQ1lZ%2B9GEDLGsXzLzWvLD9uogEPI8eeSIDThyJCHOh62KpgEGkx%2FU7xmFILRtIEJoSwMiSjLfUG%2FePQsBfCcXAkvkcbV4MOmGmCKgnfyIZcx7tBX2%2BSFXeNw0QprHltw6zb9Rweari8TDbGD4U6s7JtoAscoI8qVm4VdSCejbbsNd6YLrCkLzsWZRw6oYMK%2F2y8kGOqUBK%2B0nF3IFnRnFNh1yO%2B2NDQ64VrE02B5r6A02O6q9a1C9c2dceW48hGGsCmkLHeW%2FvEp3fQEEAhr3flPVTL23Pk2unwJxLq7npnEwcHYUMooRAY8XVB5nttLXqFgvniVOj0LX%2BYA6nM11K0pUev9x4Jh4ELiKdrIxO6x6pNnwUftKVnYNu5O3QL4HBes%2FPfkcJWU95A0idv8pq1W7Z%2BUVS5XXpEQR&X-Amz-Signature=7daae3d49339d183cc905c1ce7371c631fdf1993ed242d4f393934e20116840f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DXAKN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESSQfrCjsczKr9N3Mxr45gLM5R8CFbGS%2FDJ0mO15GyAIgMxyvYDaMgvCjjClpfoh7bvCBjd17x97xuVGu1A%2B6t4kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPKOn4t3cteru4agjircA666knxNhzzJdGfiJYkNIJTn0RsMtsj3ROx8S%2BbN3i3ymKz1Ez3Vj1%2BmkUmyjCGBAACcnhyVxAQ%2FaCxHnnbg%2Bgy9RPUySYZfjHoxlXuZIiK6sgrmLE9Q1%2FKZEd8YKFeYR4OksK1yaxgyuUy66hyeXrqJsKSBrXzUnbkpYOA0ireF5jkj588p0nIf3bxLpFoB8rs6tLAruuC1nrQZMKg2jhmqrGIlOjqB0c8vICUynUJpUwWpXi5G1j8uoiUHVLP5RiPFYq9xhxtNi1NOO4KGFgTVtOgB4simpeJxQtjYxJ80Ers4ndcU6MgWv%2B6MfPwl32M4Dpsk%2Brrv%2BsUVfucnm8dzRqgLyMF3ZcK3ZFPE16a4Sj890tgHLKyhnMq1kHLbhKOL7T%2BYgtrrzOjZXsBYmMq0ttKP9r0CiNP%2B6kzPRphyG34kWL5jlTCR7NuEG1KiQ1lZ%2B9GEDLGsXzLzWvLD9uogEPI8eeSIDThyJCHOh62KpgEGkx%2FU7xmFILRtIEJoSwMiSjLfUG%2FePQsBfCcXAkvkcbV4MOmGmCKgnfyIZcx7tBX2%2BSFXeNw0QprHltw6zb9Rweari8TDbGD4U6s7JtoAscoI8qVm4VdSCejbbsNd6YLrCkLzsWZRw6oYMK%2F2y8kGOqUBK%2B0nF3IFnRnFNh1yO%2B2NDQ64VrE02B5r6A02O6q9a1C9c2dceW48hGGsCmkLHeW%2FvEp3fQEEAhr3flPVTL23Pk2unwJxLq7npnEwcHYUMooRAY8XVB5nttLXqFgvniVOj0LX%2BYA6nM11K0pUev9x4Jh4ELiKdrIxO6x6pNnwUftKVnYNu5O3QL4HBes%2FPfkcJWU95A0idv8pq1W7Z%2BUVS5XXpEQR&X-Amz-Signature=bf6fc0caf720bc15b4da7e785b53ce9e6f1901c6ce0f57c8567b73d4179d2ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
