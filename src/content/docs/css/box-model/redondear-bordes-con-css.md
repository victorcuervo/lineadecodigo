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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJGMYXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNv5WUfLqsfwJQqAAE3%2BmCYJEzQeFn564YeaSpg4GdnAIhANa4x3DU5QYkX44Ao5tJGd71nefhDAtgLX4xupnZMEqvKv8DCHUQABoMNjM3NDIzMTgzODA1Igxwt9Q2E9AOz%2BRmYXsq3AMgtpx6ZDAMcL8pAMSCb5Tk1LqaIFC9A0rneBMLuSFIzfWPrmI30mgGjkJQCTdPgVmu5WLLfMHMZO3wfablFfpl24VxTCTStuyYg584oN5iMomgITci%2FK3D7EVSlvsgpr3T0Dvgei7DDO7TWiEp5zOWYSxuStMMKXg4TS8MNGqP2v%2FztY0Tm2lknUWuQSsWh1mXO93Vs6bTX5pT5EqnIlNVCpJ3jmiQSaIaYXC3q1VmNYTCP4KXaRmycCi0QrLb5ya%2F616wqHEJX5aRHL9FXFG22YY2Ib%2FYqrPStmZ1%2F3rvPheYQRnUYqlXg0xk%2Fb4r2P4aIN7ZaWX3MC94Ix2sSyZKoBWWge8MPk0BLUf31%2F%2Bc5siTnnEPa10d73kW0XvGMUKMnprPMHmPpfYNoPz9JYZHy9sFFTGI7qcm59Ro5Ddg9Vu4XACK8rXYSA1%2FzfYuTvNuW5bmCZfn9Vk1dT5vgPKxyAIOED%2BOXvExnAOd%2F66V9jht%2FSZeUJjWjojs3iC6hceKkz19Po%2B0Qkdqt9ubLG5h3SVgBCN6TQf3klCY8q5DCphwxCFdxwsEAYhu4GJucPxWeolD%2BDeADx0b8CAtwu18uKwWC0lwcCogaT8IXTzXZ5V9jke%2FsTMJQCxawTDIzojKBjqkAQUl7Cg8M98EgJP2tYEQuCmiM1BEbL8p9tYqVScjipLAv86yLx6kwr%2Bs3gu%2F1KhSxXhWP4zZUNX2NgtMZu%2Bz6kTAhXI2KdWBwjSXJaV2Qk2wMq9RPeYzTZpIjhzsIGvlwxDGcyIg1XOUsWJW4nuNP6Gy8rSRWKNVvUKqChxUr6PMrfB%2BwX%2Fh3QMOG5MVeFqsIaJN3ZJodCw0al2QE2Db09Tf489N&X-Amz-Signature=66330ed369ded2e99ce2895f7dcd4c7d4a5bfde4a15e6a1e8174b9fbc541bd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJGMYXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNv5WUfLqsfwJQqAAE3%2BmCYJEzQeFn564YeaSpg4GdnAIhANa4x3DU5QYkX44Ao5tJGd71nefhDAtgLX4xupnZMEqvKv8DCHUQABoMNjM3NDIzMTgzODA1Igxwt9Q2E9AOz%2BRmYXsq3AMgtpx6ZDAMcL8pAMSCb5Tk1LqaIFC9A0rneBMLuSFIzfWPrmI30mgGjkJQCTdPgVmu5WLLfMHMZO3wfablFfpl24VxTCTStuyYg584oN5iMomgITci%2FK3D7EVSlvsgpr3T0Dvgei7DDO7TWiEp5zOWYSxuStMMKXg4TS8MNGqP2v%2FztY0Tm2lknUWuQSsWh1mXO93Vs6bTX5pT5EqnIlNVCpJ3jmiQSaIaYXC3q1VmNYTCP4KXaRmycCi0QrLb5ya%2F616wqHEJX5aRHL9FXFG22YY2Ib%2FYqrPStmZ1%2F3rvPheYQRnUYqlXg0xk%2Fb4r2P4aIN7ZaWX3MC94Ix2sSyZKoBWWge8MPk0BLUf31%2F%2Bc5siTnnEPa10d73kW0XvGMUKMnprPMHmPpfYNoPz9JYZHy9sFFTGI7qcm59Ro5Ddg9Vu4XACK8rXYSA1%2FzfYuTvNuW5bmCZfn9Vk1dT5vgPKxyAIOED%2BOXvExnAOd%2F66V9jht%2FSZeUJjWjojs3iC6hceKkz19Po%2B0Qkdqt9ubLG5h3SVgBCN6TQf3klCY8q5DCphwxCFdxwsEAYhu4GJucPxWeolD%2BDeADx0b8CAtwu18uKwWC0lwcCogaT8IXTzXZ5V9jke%2FsTMJQCxawTDIzojKBjqkAQUl7Cg8M98EgJP2tYEQuCmiM1BEbL8p9tYqVScjipLAv86yLx6kwr%2Bs3gu%2F1KhSxXhWP4zZUNX2NgtMZu%2Bz6kTAhXI2KdWBwjSXJaV2Qk2wMq9RPeYzTZpIjhzsIGvlwxDGcyIg1XOUsWJW4nuNP6Gy8rSRWKNVvUKqChxUr6PMrfB%2BwX%2Fh3QMOG5MVeFqsIaJN3ZJodCw0al2QE2Db09Tf489N&X-Amz-Signature=bc1ccdcad7940c7eff5d9a99381ec1d1bc70020e94f62c656e330b698148ede3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
