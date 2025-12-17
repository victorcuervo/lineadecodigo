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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJQMQXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fkl6v04feVIQ1lgFnWQExaNmoiDzRXw7iPwir6wATHAiEAgoojhcdNsH8sceMBATdC9Yhajo8o%2FnWsRHIviNuZWXcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7PGWtT9sohr3R8TCrcA1MF6TVXortg5Vu3ggxeFXukxrmh3Rj9z%2FrmnU%2BQR8OLHtcQwFUlADnRdPe6bvK%2Fsynxtae7FZ7fAYX4ZjVT8g%2Bdg%2Bt7wTgZ6RhLKVjv4LuZ0jvZBlwCSeX702lYfdp4%2FTXGcekGfyIxzYT4LdPTRWChPtgRqr1u89JQOejXRTlqwxBSxlTpR1HBr4rT7zfmdw%2BcNyebch%2FA3dXcXgoMjNCd5Bmu4SjBmvUteLLJ7ij%2F8Sg2bpzclXH9a%2BloA9R8jwlTY33iCx%2FztR7kZvekV9%2FwPgoZnTn3ZwwCDwOSp2HTa4dBbZdVr2T7bcMgPTb5LFzbn2avFKxrVArEbsxEPvZpRp3wewuJKNO4oyT7XKMkMAPxhvz%2BrrXzFW%2BQM5%2B0W133ZS7iGGLzq%2FuLAABLIT1RxQm57bsUynhbKRx77KOF9P3V6%2BWMvl3mjvXCJ9d7WYzt0aRk9QYtrwGuRZVRXcA95%2F8Y02z8dWFhpkvVUUR3w%2BHHMLbdbAuQ3ZKYghiuNZUjAXo3RRCD%2Fs3LIIeKkQs3MhE%2F%2FLbQdHoPHwfgZ8MzK7AeGGVAUYF%2FuIC%2B8w48%2BVYfQJZdYJXf9ODpb9QS2N44aIzw9XVNLPFuCv1zFdpj6SVjmZimCjKlLiPaMIuujMoGOqUBijMLN4H9fBBYGn46Mdyi2Fwz%2FMs6jocB6l2qOX4OQbN3bXKqojFBXG%2B09B1E%2FwOiQpQBkNKUooC4tRwAsm8NwCH7WhrXzbl2xMsTACAtZsnWFZWOuboJHLUqosjVKtfi26uBteHSsvIwBYiv3tGDZRu7eCS8m%2F4Ljtya2ySg7JCYU0Xgzjn4c%2B2DbO7Rxm%2Fhwi0DEbz5uc4Gi2fZfnssg7dmtsUH&X-Amz-Signature=20fda36950c2cf455f5a4789a9a9cf9defcf51e9c1908aa7e45698b82f851164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJQMQXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fkl6v04feVIQ1lgFnWQExaNmoiDzRXw7iPwir6wATHAiEAgoojhcdNsH8sceMBATdC9Yhajo8o%2FnWsRHIviNuZWXcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7PGWtT9sohr3R8TCrcA1MF6TVXortg5Vu3ggxeFXukxrmh3Rj9z%2FrmnU%2BQR8OLHtcQwFUlADnRdPe6bvK%2Fsynxtae7FZ7fAYX4ZjVT8g%2Bdg%2Bt7wTgZ6RhLKVjv4LuZ0jvZBlwCSeX702lYfdp4%2FTXGcekGfyIxzYT4LdPTRWChPtgRqr1u89JQOejXRTlqwxBSxlTpR1HBr4rT7zfmdw%2BcNyebch%2FA3dXcXgoMjNCd5Bmu4SjBmvUteLLJ7ij%2F8Sg2bpzclXH9a%2BloA9R8jwlTY33iCx%2FztR7kZvekV9%2FwPgoZnTn3ZwwCDwOSp2HTa4dBbZdVr2T7bcMgPTb5LFzbn2avFKxrVArEbsxEPvZpRp3wewuJKNO4oyT7XKMkMAPxhvz%2BrrXzFW%2BQM5%2B0W133ZS7iGGLzq%2FuLAABLIT1RxQm57bsUynhbKRx77KOF9P3V6%2BWMvl3mjvXCJ9d7WYzt0aRk9QYtrwGuRZVRXcA95%2F8Y02z8dWFhpkvVUUR3w%2BHHMLbdbAuQ3ZKYghiuNZUjAXo3RRCD%2Fs3LIIeKkQs3MhE%2F%2FLbQdHoPHwfgZ8MzK7AeGGVAUYF%2FuIC%2B8w48%2BVYfQJZdYJXf9ODpb9QS2N44aIzw9XVNLPFuCv1zFdpj6SVjmZimCjKlLiPaMIuujMoGOqUBijMLN4H9fBBYGn46Mdyi2Fwz%2FMs6jocB6l2qOX4OQbN3bXKqojFBXG%2B09B1E%2FwOiQpQBkNKUooC4tRwAsm8NwCH7WhrXzbl2xMsTACAtZsnWFZWOuboJHLUqosjVKtfi26uBteHSsvIwBYiv3tGDZRu7eCS8m%2F4Ljtya2ySg7JCYU0Xgzjn4c%2B2DbO7Rxm%2Fhwi0DEbz5uc4Gi2fZfnssg7dmtsUH&X-Amz-Signature=fe6d449819859198a0be90c48bf824cf59f6915250fe76ddcf345ab2e890c342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
