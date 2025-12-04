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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBP7XQD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDZZk8kda53Zih3I1pJ5z1YX3R5BGGRbNrwCWkeQMwmDQIhALpNQjGkA4iM3Xu7H3G4GOsURND1wqE5iVEAPvaHAYrPKv8DCEEQABoMNjM3NDIzMTgzODA1IgyjCDNsLs6mWxc%2B8uMq3ANDFub5NkSRDb8tKwmWLQU4FuKC7evmqe%2FQxoD74ZrMqOg2Tzb4VB5qjF6puaqf9AONZI2YFui%2F2TJKX6nILcuxCI4CJZB8yrJb%2BxgQMe0alvyMaNTRQnVQIiMHmtdWKI%2Fu4Z37hFOJlONvHAr9WTcK7hg%2FDeNp%2FBRoMwtN2TVrX1P8f%2BA5mkE%2BSIwFdZzbxYe3rW6qXHHDLaiv4B3CUjIKmwq2azN5GJ6nFeFrZ8HHnKlrFf1P%2B74vZ9ounJ8Urx6YDEHRpKMl2qK1CBxokX6VowYJDgvQ9Vp6EUc510FVAEmBCVzs4PXf5PxkBdVWpFdQhpaB5XeLuiIqrd%2BsrpCPpz8XG7oo6tnXYiQ1H5Z1GpdqoG6cEvze9d0uPJPCRK6WgYZ6r%2Baq549KZEPIUcRljFafxzRagVBWrP7stO%2F5Xi6Vfu54IAm8zFk9wZpLTYTDRRb8cSfw%2FLX8dbIJaGCFSWmqqyybqsoLXzf4C0EBH8UEVOw7UdfyrblUlXjUpybdV%2FEuoIZOxNX%2FAZetjXSeb%2FCX6ovJfZMdE2p6EtIKM45tHifeYBEhBsw524voG2Hj6BmY%2FB77ulB8BQIxjrFtXTQGsJpHGKRt69HH%2F%2FQPCvNZZI5T4KpxsBeFfjDzhcXJBjqkAcbs%2FVO7d8CTUpPOCW3ICiA3%2B4Ji6EpiJe7GBdzoSyD3aOtLnFArMGqD6Po7q9FZ73JIJu%2Fo91zDPJehYkEs8YUZCoNHRKXwFFWnmy4%2Fq6TKzmTW0HkMtIsZRBbjK6GKijKLLVhtuX9J44eh5kiIzDYxJ9FXM3D%2FY9tXn9QV4cu%2BWDM75Jr9a0W3%2F9vHOAcOB2wPgKwzd2Xnu9imFUOiyRTOuZJ4&X-Amz-Signature=5651b3e2a8c4d316e8ed1ea3c83ae44bf9fafe91f6f4a0147476593e3e4f3cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBP7XQD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDZZk8kda53Zih3I1pJ5z1YX3R5BGGRbNrwCWkeQMwmDQIhALpNQjGkA4iM3Xu7H3G4GOsURND1wqE5iVEAPvaHAYrPKv8DCEEQABoMNjM3NDIzMTgzODA1IgyjCDNsLs6mWxc%2B8uMq3ANDFub5NkSRDb8tKwmWLQU4FuKC7evmqe%2FQxoD74ZrMqOg2Tzb4VB5qjF6puaqf9AONZI2YFui%2F2TJKX6nILcuxCI4CJZB8yrJb%2BxgQMe0alvyMaNTRQnVQIiMHmtdWKI%2Fu4Z37hFOJlONvHAr9WTcK7hg%2FDeNp%2FBRoMwtN2TVrX1P8f%2BA5mkE%2BSIwFdZzbxYe3rW6qXHHDLaiv4B3CUjIKmwq2azN5GJ6nFeFrZ8HHnKlrFf1P%2B74vZ9ounJ8Urx6YDEHRpKMl2qK1CBxokX6VowYJDgvQ9Vp6EUc510FVAEmBCVzs4PXf5PxkBdVWpFdQhpaB5XeLuiIqrd%2BsrpCPpz8XG7oo6tnXYiQ1H5Z1GpdqoG6cEvze9d0uPJPCRK6WgYZ6r%2Baq549KZEPIUcRljFafxzRagVBWrP7stO%2F5Xi6Vfu54IAm8zFk9wZpLTYTDRRb8cSfw%2FLX8dbIJaGCFSWmqqyybqsoLXzf4C0EBH8UEVOw7UdfyrblUlXjUpybdV%2FEuoIZOxNX%2FAZetjXSeb%2FCX6ovJfZMdE2p6EtIKM45tHifeYBEhBsw524voG2Hj6BmY%2FB77ulB8BQIxjrFtXTQGsJpHGKRt69HH%2F%2FQPCvNZZI5T4KpxsBeFfjDzhcXJBjqkAcbs%2FVO7d8CTUpPOCW3ICiA3%2B4Ji6EpiJe7GBdzoSyD3aOtLnFArMGqD6Po7q9FZ73JIJu%2Fo91zDPJehYkEs8YUZCoNHRKXwFFWnmy4%2Fq6TKzmTW0HkMtIsZRBbjK6GKijKLLVhtuX9J44eh5kiIzDYxJ9FXM3D%2FY9tXn9QV4cu%2BWDM75Jr9a0W3%2F9vHOAcOB2wPgKwzd2Xnu9imFUOiyRTOuZJ4&X-Amz-Signature=fdca8606e3bb8e48751c289d564082c3600ffe20a42be6c3bb4d260e0c10decf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
