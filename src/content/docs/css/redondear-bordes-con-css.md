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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3G5HAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkA5uXSlBW96%2FlAGbq1pO9cOcm3eYpFMuvVQCsA%2BSskAIgUZ7d4gxM%2F0QvXtEVr%2B%2Fq9n43We2mCDUY7kuSMNLX%2BQIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgblaMTRC95QiEQMSrcA2Z7i4rQil6sEhYLUsDhIlL%2BR1SY5DVY184IZITCY5W12r4nI5%2FJcYigOTrWzIZ5%2B9vQFg2WOFXw1AOe6NxUIMoKtKxQSPYO9kzC5l%2FIPNtT1AdDac8n3reVjoJGSBXpQEEYkgO7MkG3PK0r1PJW4dMt2%2FKw%2B2ID4rK%2FN6%2B0UECKJTywcsa7W%2Fg8QH3bfxMwQPjZLuRoaW9WpHOiySojnrupg%2FONNa0QrvgAfTKOK5IUnlkGD0bJTlhNUiUKAQ6LHfylMPGsraQ4gSrgvvzYoUkR6yfZZYPzx4g3vZtrd2mPsRYnd74IpEZ%2B8ip6HS3olaT3ihhNLRO2QP384pLt7w7eylkqnh3s7zMLUcRvuM3YiIkwnIa74pc%2F24ESa6rTOjn%2Fy9JjvMFMeXVUfDhoY5qiyWO3%2Fwk94tY5dBhQTlRjYlelIuZC1RKYLgTCxdmgcWF%2FdRo0%2BiP0aOB1Od807nr7C1o8RnWCnGDYVl3b3j%2B8EH3Oqs1TmdTIJQoYU%2BGUqVYcHqIHg9KmsgMnjbaK7NfKcnBLjSVSe4%2BQ01ldIfVPoTwd8EirzZ6HhK4nITn5RoQ4%2Fn7XLll8rRpCi9Bbn5NQFldxFM5HXfhrFqTqpFStRMD0INTYTj4QxPzqMLvt2ckGOqUB8k0Dyw1Fe6Xbbd3adzFoLlnBnjkuv%2B8ucDjREfJ7CZ3pfUnyK2AhVJkU0MgCFmRfjMN8QsAgc9De2Z7nIBMmsLVEp%2BohYmfUS%2FuPCaXp0%2BLRNQpbCHzZS15ZPvLG6SmJOA0GZhkWqyrM5liewbdf9G3TojpjYNa9qJxSfXRrfbNeMhkPC272vi2Q0jlD1l8Fx0Lg9TPiEsw%2BGihIKZsqhXRyn9hE&X-Amz-Signature=a7bfc215991439d035a99b9ffeb7c1d8b14f9880724c3949ac31f1a1f3588a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3G5HAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkA5uXSlBW96%2FlAGbq1pO9cOcm3eYpFMuvVQCsA%2BSskAIgUZ7d4gxM%2F0QvXtEVr%2B%2Fq9n43We2mCDUY7kuSMNLX%2BQIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgblaMTRC95QiEQMSrcA2Z7i4rQil6sEhYLUsDhIlL%2BR1SY5DVY184IZITCY5W12r4nI5%2FJcYigOTrWzIZ5%2B9vQFg2WOFXw1AOe6NxUIMoKtKxQSPYO9kzC5l%2FIPNtT1AdDac8n3reVjoJGSBXpQEEYkgO7MkG3PK0r1PJW4dMt2%2FKw%2B2ID4rK%2FN6%2B0UECKJTywcsa7W%2Fg8QH3bfxMwQPjZLuRoaW9WpHOiySojnrupg%2FONNa0QrvgAfTKOK5IUnlkGD0bJTlhNUiUKAQ6LHfylMPGsraQ4gSrgvvzYoUkR6yfZZYPzx4g3vZtrd2mPsRYnd74IpEZ%2B8ip6HS3olaT3ihhNLRO2QP384pLt7w7eylkqnh3s7zMLUcRvuM3YiIkwnIa74pc%2F24ESa6rTOjn%2Fy9JjvMFMeXVUfDhoY5qiyWO3%2Fwk94tY5dBhQTlRjYlelIuZC1RKYLgTCxdmgcWF%2FdRo0%2BiP0aOB1Od807nr7C1o8RnWCnGDYVl3b3j%2B8EH3Oqs1TmdTIJQoYU%2BGUqVYcHqIHg9KmsgMnjbaK7NfKcnBLjSVSe4%2BQ01ldIfVPoTwd8EirzZ6HhK4nITn5RoQ4%2Fn7XLll8rRpCi9Bbn5NQFldxFM5HXfhrFqTqpFStRMD0INTYTj4QxPzqMLvt2ckGOqUB8k0Dyw1Fe6Xbbd3adzFoLlnBnjkuv%2B8ucDjREfJ7CZ3pfUnyK2AhVJkU0MgCFmRfjMN8QsAgc9De2Z7nIBMmsLVEp%2BohYmfUS%2FuPCaXp0%2BLRNQpbCHzZS15ZPvLG6SmJOA0GZhkWqyrM5liewbdf9G3TojpjYNa9qJxSfXRrfbNeMhkPC272vi2Q0jlD1l8Fx0Lg9TPiEsw%2BGihIKZsqhXRyn9hE&X-Amz-Signature=bb3b48f176a54189a4908d38805d351fa50415a4b0a3c9e96e99907e70f648a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
