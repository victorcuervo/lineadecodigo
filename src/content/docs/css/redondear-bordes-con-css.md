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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RFNEYF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdWG4%2F8tsJjKHF%2FVuhuGSWn8wayH4IKe%2FZDJuqF5qs2AiEAkMwemj1rKlzb5O3dXQL7t70XQ9pucDptp0ywtWeTY2oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8Sud7dCD2X2qpfpCrcA5bV6%2Bn%2BBG75YTvwYgCW5VASkWtyxPRF%2B1mRK7R4a6gbFniLYvAH2fHAjtGvqKAhxuBvh9VEKeSVc%2F0pyzXZIkrMu7NE0nKqiITPT4Orud8n2Vu9fb9gitygdKePOdxqotxHNvDbv5VZvvd%2BhZ%2BhOwxtmN01LQBr0hZzaOxQ0u4c0t3bBpdyRnjFAlbx56z%2F0MzifYgD8%2BcGiQThT2tW3kcRqVSi%2B8m5%2FPNrs1TapNRidkB83J3VpGMZ0gzMkxY0mwyZwPHVze0EMDzBXmOxOscAR0YfUaOb8IOAEVdvU%2FzHvOJ3Cr7pdENK%2FsVrQlhM8JodwJU3S81YIQ96JWLiph0K9B4IJwz%2FAxL1NFnLVATwyXc5%2BDnAGa%2BYT5x0aqBS6GoUSCHxxWGvkQ8JD1q1pB%2Fy9Y2S4h9HaR%2FHV6pzoLLgpsfnIeQbL8CACMh3ArsnxOvkGxq3fOCHbGCnCMVdrekxCz2o0gp%2FwkcK8janb6vZgy6EaUhnkyRvwYxU9Zh800JN4F2u78SiaiglNRoUXEC7nTtXXECrHwS4ZXrA8riHJB7xFkv1jrNMVCGHFhMg5Get6P%2BHrFoLMmIX0byl2m%2Bs6%2FpVSfRulZ4kL7z5xNMPi24KGHV0%2FVqvQ5TcMKu71skGOqUBsRqAtzIAEK1VzpacqEJeewicmqr2z3JC7WmAoGwRVXZ%2BhUhQCXW45HxpuZxfoN1iZ9lzDgYq2KzOzSGP7zo64gSuiwOnDPK1cjeSNQk4R2bJb70mODJ2vDxPlAYxVlmD2Mf53PiGP2JNNZv%2FxDKslpenIi0rBAvDix1PX62zErcYrwYZ9bOteIv97KyP26dO6Iat7thla8YcVOW7%2B1OmVb0iqEun&X-Amz-Signature=41c22e8f85415172c857d4f85e090b8b736e1aa7f8c190d664184e8b65743bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RFNEYF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdWG4%2F8tsJjKHF%2FVuhuGSWn8wayH4IKe%2FZDJuqF5qs2AiEAkMwemj1rKlzb5O3dXQL7t70XQ9pucDptp0ywtWeTY2oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8Sud7dCD2X2qpfpCrcA5bV6%2Bn%2BBG75YTvwYgCW5VASkWtyxPRF%2B1mRK7R4a6gbFniLYvAH2fHAjtGvqKAhxuBvh9VEKeSVc%2F0pyzXZIkrMu7NE0nKqiITPT4Orud8n2Vu9fb9gitygdKePOdxqotxHNvDbv5VZvvd%2BhZ%2BhOwxtmN01LQBr0hZzaOxQ0u4c0t3bBpdyRnjFAlbx56z%2F0MzifYgD8%2BcGiQThT2tW3kcRqVSi%2B8m5%2FPNrs1TapNRidkB83J3VpGMZ0gzMkxY0mwyZwPHVze0EMDzBXmOxOscAR0YfUaOb8IOAEVdvU%2FzHvOJ3Cr7pdENK%2FsVrQlhM8JodwJU3S81YIQ96JWLiph0K9B4IJwz%2FAxL1NFnLVATwyXc5%2BDnAGa%2BYT5x0aqBS6GoUSCHxxWGvkQ8JD1q1pB%2Fy9Y2S4h9HaR%2FHV6pzoLLgpsfnIeQbL8CACMh3ArsnxOvkGxq3fOCHbGCnCMVdrekxCz2o0gp%2FwkcK8janb6vZgy6EaUhnkyRvwYxU9Zh800JN4F2u78SiaiglNRoUXEC7nTtXXECrHwS4ZXrA8riHJB7xFkv1jrNMVCGHFhMg5Get6P%2BHrFoLMmIX0byl2m%2Bs6%2FpVSfRulZ4kL7z5xNMPi24KGHV0%2FVqvQ5TcMKu71skGOqUBsRqAtzIAEK1VzpacqEJeewicmqr2z3JC7WmAoGwRVXZ%2BhUhQCXW45HxpuZxfoN1iZ9lzDgYq2KzOzSGP7zo64gSuiwOnDPK1cjeSNQk4R2bJb70mODJ2vDxPlAYxVlmD2Mf53PiGP2JNNZv%2FxDKslpenIi0rBAvDix1PX62zErcYrwYZ9bOteIv97KyP26dO6Iat7thla8YcVOW7%2B1OmVb0iqEun&X-Amz-Signature=cb08c5bbc7ad03314bd36bcb055ff6f2884de429f5eac63d28b2c4223358eca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
