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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JTLIEI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvzkwYMY%2B0KIBDgss4Mq0IfhmyR16IY164mI6GkvlyzAiEA9K73RXt8gB5qAz6HRPF42sieS9OJ5Nhnp3cWt3TvvYsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1FH6Qrs%2BU16Nvp1SrcAzBunbDwdUmlP30lJy%2FenGJxOu00ja9P7nUV1VzBvT4nAOwdS9qz4WgVAbml%2BaWlrJVWZy04YK3INmYVfmVMrT7r9rULLbJqmCgu0HDFjyXeYa1rsIq6fI8xQVLlY0Z%2BeywTrwHTiU9%2F3bzzC9nPBc95j%2BWJNqDQEpRszoFlApk8NkpkCYDNNxcDTh8ixywn4eRK8o2pX%2FO1tH%2FslTJuZXAUQbVBzP%2F66taA%2BjCgMG%2FEk7osgizxdV5L4wC%2FS2RnwmDtgfeZhRURBAXEon8C0U9QNsPrUL9NCR17K1SO2hKcCF32q%2Bc6lqAkYWHC7iEwIsGXxdTa%2Bwoz9JS1TyYG0RT2zSvFPLFI%2FZNanwbLo8Qz3MjWnYFS0WXSHT1s4%2Ff%2BK91chEAtP2RiiZNoCwTpsPjUXAx4aQkGPTlQEJOvmYr26F0SyThRL9Kp1%2FIIKZCnZiNTS%2FkBTG216bPycjP4lJBhK6QLQn%2FKHrjHsrM9ei8m8de4A%2BIYooCDVfrna1u8bWvtQyg%2BI0ymdE05ciBnAuYqOVM9cR%2FirGNSYzp8O6Yze6UcCVWt4Ywo39bCZFFvV1ULgXriWxciI5631ywvkrgx00AbcQ5j0i03VqoV9LvpyR0ejfxi4oKMHf0aMMnu2ckGOqUB6j3cUtgKXLMh3Ujj8gdo%2FSQN0l5%2FIMNJ0nk7gCrX%2B501rBOUppRYMfnpz5mpfAcZPbh8CddCGYXwwf0bURh11VvadEL8qAER0VPNEJYaXY5MUOjz7vs72nS5eMZt5PWjDJDaU2BG2KHsQhAKiE7NDuDHfWEneJzsod2p8PAFWNttmeiYIisMuzvawTpbxNes1rGdEL3mkRtK5ljEfL%2BazarzgFZu&X-Amz-Signature=b1931a4e947b4076611c36aaf507073587f4c4fd55157daefa5be0ceac09cafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JTLIEI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvzkwYMY%2B0KIBDgss4Mq0IfhmyR16IY164mI6GkvlyzAiEA9K73RXt8gB5qAz6HRPF42sieS9OJ5Nhnp3cWt3TvvYsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1FH6Qrs%2BU16Nvp1SrcAzBunbDwdUmlP30lJy%2FenGJxOu00ja9P7nUV1VzBvT4nAOwdS9qz4WgVAbml%2BaWlrJVWZy04YK3INmYVfmVMrT7r9rULLbJqmCgu0HDFjyXeYa1rsIq6fI8xQVLlY0Z%2BeywTrwHTiU9%2F3bzzC9nPBc95j%2BWJNqDQEpRszoFlApk8NkpkCYDNNxcDTh8ixywn4eRK8o2pX%2FO1tH%2FslTJuZXAUQbVBzP%2F66taA%2BjCgMG%2FEk7osgizxdV5L4wC%2FS2RnwmDtgfeZhRURBAXEon8C0U9QNsPrUL9NCR17K1SO2hKcCF32q%2Bc6lqAkYWHC7iEwIsGXxdTa%2Bwoz9JS1TyYG0RT2zSvFPLFI%2FZNanwbLo8Qz3MjWnYFS0WXSHT1s4%2Ff%2BK91chEAtP2RiiZNoCwTpsPjUXAx4aQkGPTlQEJOvmYr26F0SyThRL9Kp1%2FIIKZCnZiNTS%2FkBTG216bPycjP4lJBhK6QLQn%2FKHrjHsrM9ei8m8de4A%2BIYooCDVfrna1u8bWvtQyg%2BI0ymdE05ciBnAuYqOVM9cR%2FirGNSYzp8O6Yze6UcCVWt4Ywo39bCZFFvV1ULgXriWxciI5631ywvkrgx00AbcQ5j0i03VqoV9LvpyR0ejfxi4oKMHf0aMMnu2ckGOqUB6j3cUtgKXLMh3Ujj8gdo%2FSQN0l5%2FIMNJ0nk7gCrX%2B501rBOUppRYMfnpz5mpfAcZPbh8CddCGYXwwf0bURh11VvadEL8qAER0VPNEJYaXY5MUOjz7vs72nS5eMZt5PWjDJDaU2BG2KHsQhAKiE7NDuDHfWEneJzsod2p8PAFWNttmeiYIisMuzvawTpbxNes1rGdEL3mkRtK5ljEfL%2BazarzgFZu&X-Amz-Signature=14fb072d146cc5de308ccab5b91065eef584dea55f7fd952020320aec8f10a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
