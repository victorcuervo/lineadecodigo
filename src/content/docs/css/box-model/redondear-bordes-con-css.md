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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYF7ITW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkLdblCliKNp1OOtJpOh6Jl5wkAPcNeTEXiSB8h9IH5AiBn1jafU8sWD1bh1LsYKLT0OgOU79hyyk6vXsC4bMSHmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6%2FsSadsKfziE7m6KtwD3XbDVdJgvmkfy9XyCr3NnFtFBAhY4xM6VbNzMT72G5Z%2BQgmkrjULWpsQfyAAct9aM4c2W9YfP%2FzfIVpd%2FjNCSQl58m%2BnJYCVkrqTIXdbYtsoWVnUwmzBh93J%2FJon9kGmLVhtKYDf9egfqNL8HOMUHPgxN1veNoWizeOk5FUVQhVkp%2FmB0hVWm5Hfk2dc3oLpIQl7yNMLZf3qqfFHAQk8MvDlIixKhWIcqMBHTLNYusuYmAgUNn7Y2Zng9bq24NhDeavce31K8iFkimL5LDworR32QJO6jG9%2B1EwAd1eEJJkTME%2BKC9WoHJcBDmorfDgJlrYmT1jqiu%2BGIKw3li0%2FUVvUDZ8BebRcrJWhdwC8eHh%2BEivEkzNVLL8k2KZRdFIKV75m8qYpujeKQB%2FvmNarylugfYtWRBcxM1mxNQDAgKEq6YaCfE8N755AYS%2FlC0cIQN2pwEJ7tOgmho0BDNrHU1qaYQwe3w8ZzwjeqWoto00HZRkerbtAquMMNrZQ3OwPEOZrg1hKFMfdY8L5qeeggDtGox0H9r4oCUVBDDALw6Gs2FaFxJyT0mnlAOBgMOhaIFf2BToLszZ%2FrPrZMMaakl7QqkurRhAMu82cUkMfton0MLBto%2B52xkYvCXswkIKLygY6pgF7EwzT93%2B646D%2FCRvtprswP%2F5HiLpEVL5G58L0aGE0uZ2ruLb0TBdxTQPnH7%2BFsXAVB%2Bd3MJ%2FOqoCK4zBCTDEno9LJB5ZT1BtqJxrxfnlQ14IpjBMxcr8MwiqXeId2e1hH2TcFkxtvRhfcc5xpfZTcf7YfvyyXucK1vu41Ka2PjNsCT8ziwRMmXlL3BzaerSLjJZoI7eGZK7jMBj6RlBHf1C0Vkwnf&X-Amz-Signature=a0b8d477dbecc6152dbb01ed6979284aaf663c8db1eff6e8f943b83f36a8eb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYF7ITW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkLdblCliKNp1OOtJpOh6Jl5wkAPcNeTEXiSB8h9IH5AiBn1jafU8sWD1bh1LsYKLT0OgOU79hyyk6vXsC4bMSHmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb6%2FsSadsKfziE7m6KtwD3XbDVdJgvmkfy9XyCr3NnFtFBAhY4xM6VbNzMT72G5Z%2BQgmkrjULWpsQfyAAct9aM4c2W9YfP%2FzfIVpd%2FjNCSQl58m%2BnJYCVkrqTIXdbYtsoWVnUwmzBh93J%2FJon9kGmLVhtKYDf9egfqNL8HOMUHPgxN1veNoWizeOk5FUVQhVkp%2FmB0hVWm5Hfk2dc3oLpIQl7yNMLZf3qqfFHAQk8MvDlIixKhWIcqMBHTLNYusuYmAgUNn7Y2Zng9bq24NhDeavce31K8iFkimL5LDworR32QJO6jG9%2B1EwAd1eEJJkTME%2BKC9WoHJcBDmorfDgJlrYmT1jqiu%2BGIKw3li0%2FUVvUDZ8BebRcrJWhdwC8eHh%2BEivEkzNVLL8k2KZRdFIKV75m8qYpujeKQB%2FvmNarylugfYtWRBcxM1mxNQDAgKEq6YaCfE8N755AYS%2FlC0cIQN2pwEJ7tOgmho0BDNrHU1qaYQwe3w8ZzwjeqWoto00HZRkerbtAquMMNrZQ3OwPEOZrg1hKFMfdY8L5qeeggDtGox0H9r4oCUVBDDALw6Gs2FaFxJyT0mnlAOBgMOhaIFf2BToLszZ%2FrPrZMMaakl7QqkurRhAMu82cUkMfton0MLBto%2B52xkYvCXswkIKLygY6pgF7EwzT93%2B646D%2FCRvtprswP%2F5HiLpEVL5G58L0aGE0uZ2ruLb0TBdxTQPnH7%2BFsXAVB%2Bd3MJ%2FOqoCK4zBCTDEno9LJB5ZT1BtqJxrxfnlQ14IpjBMxcr8MwiqXeId2e1hH2TcFkxtvRhfcc5xpfZTcf7YfvyyXucK1vu41Ka2PjNsCT8ziwRMmXlL3BzaerSLjJZoI7eGZK7jMBj6RlBHf1C0Vkwnf&X-Amz-Signature=51b1827ad2abb7b9d7231311ff1e512a4ad8afe5f63b848d69aedf9dd688c796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
