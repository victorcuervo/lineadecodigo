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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WA6IN6V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxAuh3uH9%2BAsV47mjAqpqX2fDQjZeeaIpqmc9bjUz7ECIC6uAQSeh2bst65rLysuBTXlLWqAzwxVy4%2FSjh6udpjCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynIhY7%2BGm3qO1MmFgq3AOM4MAxMbM6WKbJMs5f8ugtjb2jdZ3PQC%2BHoJMi4UY9f4NPfLbQMY0rrUY0yQ1TVz7TjJs653534l1V6G4417zIZLc0cLFTwdALElPq5V5J0Z7i0MxV7gev6hiwfCi2VHzzFDDDJO7NHvbZQF9ail%2B%2B00jkqq2BDHAE%2BKdHhKekYy4PUfmEFqh6ShkKKK64HlXXZ0rccZIXL0hzRVP0hBI15ljH%2Fp6sw9%2Bxv6PQHDh4EDoE71QnYSIjQyQYS%2FuV0Yewk7YTFx1YP1wl7TlnYd3HfAWKFF84kewLC%2F%2FODjjaK3EugCAeMw3y61JJKnWf3s28nyubJsbHV5A6UCmqulBsJodPYNVaD%2BNv53SnJq1EexEqwOkBnDt0s1KwzjBJKLnOKmFkvr5DXc5R9LgshYgKeB2lye3tWfGi7aEcp1vZeTktob2Ma1%2Bw2%2BQGBnNgMvCgEcKvmBIXMf5jUVBergsFwyXFqvhTg3qLDW8nAIMcjvU0md2Ql41JULGFC1iDjgFbqTTEAksRfBlvOUgCzqqLGFCqF4VMKEUyI0eA5x4egXt97rodhkvblP3MJeCgpGBsBSDU%2B0l2PlgRqT1wdYffHIYpLTarpVg9mSYBCeQSNBCEIH9wWh5%2FUzK1nDCWtNzJBjqnAeaALycyryvzMKe6lazw0TBHrw3FkVIQS8h0LMzP1L009FmO78tPhmmgiJh3wSGfEnSDlLY4SymkM%2BLaWyaTj49y%2BkEchKbBth7AQPnA%2Fu1jiqZbmItRsQxY3Qq4FOLaj6LvF9ewHcLfdMgRhccivlxKf1%2F%2FxzyAQixCjdxQaIjHZYS%2FyJKSBMDtCCNPt0QWLx16Ya%2BKIBEbEFBh4tJFGBVzGxcls743&X-Amz-Signature=189779579bc964d0607260e3088904ae8fc95af26256dc1b4a60ee0f0ea4843e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WA6IN6V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxAuh3uH9%2BAsV47mjAqpqX2fDQjZeeaIpqmc9bjUz7ECIC6uAQSeh2bst65rLysuBTXlLWqAzwxVy4%2FSjh6udpjCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynIhY7%2BGm3qO1MmFgq3AOM4MAxMbM6WKbJMs5f8ugtjb2jdZ3PQC%2BHoJMi4UY9f4NPfLbQMY0rrUY0yQ1TVz7TjJs653534l1V6G4417zIZLc0cLFTwdALElPq5V5J0Z7i0MxV7gev6hiwfCi2VHzzFDDDJO7NHvbZQF9ail%2B%2B00jkqq2BDHAE%2BKdHhKekYy4PUfmEFqh6ShkKKK64HlXXZ0rccZIXL0hzRVP0hBI15ljH%2Fp6sw9%2Bxv6PQHDh4EDoE71QnYSIjQyQYS%2FuV0Yewk7YTFx1YP1wl7TlnYd3HfAWKFF84kewLC%2F%2FODjjaK3EugCAeMw3y61JJKnWf3s28nyubJsbHV5A6UCmqulBsJodPYNVaD%2BNv53SnJq1EexEqwOkBnDt0s1KwzjBJKLnOKmFkvr5DXc5R9LgshYgKeB2lye3tWfGi7aEcp1vZeTktob2Ma1%2Bw2%2BQGBnNgMvCgEcKvmBIXMf5jUVBergsFwyXFqvhTg3qLDW8nAIMcjvU0md2Ql41JULGFC1iDjgFbqTTEAksRfBlvOUgCzqqLGFCqF4VMKEUyI0eA5x4egXt97rodhkvblP3MJeCgpGBsBSDU%2B0l2PlgRqT1wdYffHIYpLTarpVg9mSYBCeQSNBCEIH9wWh5%2FUzK1nDCWtNzJBjqnAeaALycyryvzMKe6lazw0TBHrw3FkVIQS8h0LMzP1L009FmO78tPhmmgiJh3wSGfEnSDlLY4SymkM%2BLaWyaTj49y%2BkEchKbBth7AQPnA%2Fu1jiqZbmItRsQxY3Qq4FOLaj6LvF9ewHcLfdMgRhccivlxKf1%2F%2FxzyAQixCjdxQaIjHZYS%2FyJKSBMDtCCNPt0QWLx16Ya%2BKIBEbEFBh4tJFGBVzGxcls743&X-Amz-Signature=6b7bc75656724ae357eb025e35b9cc53579c5735cf28343178c95ec55bddfedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
