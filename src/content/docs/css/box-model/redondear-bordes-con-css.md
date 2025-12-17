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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDS3JPSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjDNuwrKYfkVlrcUso3uhRCGWt1MfcsRAI98Uq7Dh1QQIhAPpULbC%2FF0awHZgLeV0WvT82QVh79%2B2VTxi14ShWVq9uKv8DCHYQABoMNjM3NDIzMTgzODA1IgzhxeSEicEnKf4a%2FAwq3ANeqxSc0bwqcKVF4YWZmpj7K%2Fgx0%2F3aTVJlcOPA7NceshsT4LoK5KeZ283zGwe8mgyjXxeIQR3bfjvBXK763AyC0buC1FmSxv3CwHIBKKgdbh90zjyuoFZYBCZr3mcYE8D%2FrKU%2Blj%2FOlMyc0sLm1B17KDvImsfuyL97ztWE8JYH%2BW%2BHPnuQl5MDpKeDFJ3mmlpPPygCvxg5tbvnGEGfbSHS8o0emA3JIgW%2FI09rTgFBc%2Fa57j%2BEMkhrLtGTunVmFBP%2BmGqv%2FsQx1i2vWkx4ARvVWf2koDUSXbFIwM1IaQolOvpv0nmP68fC2Q%2BjHkiPZ%2Bpufhfub2WPHmG2ge2TKnUHaMAAAwVwESvoy%2Bn8W0xt8IW9BZtNhVReerjL5ctjbEvVDoBeE3PNn5FvhzRuedRdHlmgGX9ypqRa1fOWfcdwtMPnHjXY7a83ZTXGET%2BQI%2FioNsR0FAFezbnRTCC6TQ7kx%2BZQm5vcbFpZjMpiThxptUPYUgnAqUerSy0GIGYGu83b1UjKKVVQnoR2TD%2BuoFWroNKCp6ET4qEtXwtRcORjlMgF3JiBbtGZi42wr2fYqYzX8ffMzw3lCE3D%2FE2%2FVslpbebLG%2FBsyXaeBVfv8SRJgWocVr5bVoJNCHHkwjDB6YjKBjqkAXqdK%2B6laQ%2FxCJycpfwD021OZ%2FS0DUhgnmKDzi2u2D1UE2ATy7%2FC%2Bo8TkUp%2BUKcVKYuDso%2BDoiIM%2Bv6S0TRSel%2BJWO19bXZbjAm%2BNHiD6rAC1j0iP5bAejamOw9skdMD7Kg8na%2FgXN8wUKqfWcJub2j6kTQvUasAfKHrXbm5I47JqTCQj50GKsOIAs09OO%2Bru7R%2Fwn%2B%2BzcSDWPPWUSpatD6QwAbw&X-Amz-Signature=a5fe26fe1909b2a39a7d166c50752589b74cb8720706c4bb77d8fea298567887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDS3JPSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjDNuwrKYfkVlrcUso3uhRCGWt1MfcsRAI98Uq7Dh1QQIhAPpULbC%2FF0awHZgLeV0WvT82QVh79%2B2VTxi14ShWVq9uKv8DCHYQABoMNjM3NDIzMTgzODA1IgzhxeSEicEnKf4a%2FAwq3ANeqxSc0bwqcKVF4YWZmpj7K%2Fgx0%2F3aTVJlcOPA7NceshsT4LoK5KeZ283zGwe8mgyjXxeIQR3bfjvBXK763AyC0buC1FmSxv3CwHIBKKgdbh90zjyuoFZYBCZr3mcYE8D%2FrKU%2Blj%2FOlMyc0sLm1B17KDvImsfuyL97ztWE8JYH%2BW%2BHPnuQl5MDpKeDFJ3mmlpPPygCvxg5tbvnGEGfbSHS8o0emA3JIgW%2FI09rTgFBc%2Fa57j%2BEMkhrLtGTunVmFBP%2BmGqv%2FsQx1i2vWkx4ARvVWf2koDUSXbFIwM1IaQolOvpv0nmP68fC2Q%2BjHkiPZ%2Bpufhfub2WPHmG2ge2TKnUHaMAAAwVwESvoy%2Bn8W0xt8IW9BZtNhVReerjL5ctjbEvVDoBeE3PNn5FvhzRuedRdHlmgGX9ypqRa1fOWfcdwtMPnHjXY7a83ZTXGET%2BQI%2FioNsR0FAFezbnRTCC6TQ7kx%2BZQm5vcbFpZjMpiThxptUPYUgnAqUerSy0GIGYGu83b1UjKKVVQnoR2TD%2BuoFWroNKCp6ET4qEtXwtRcORjlMgF3JiBbtGZi42wr2fYqYzX8ffMzw3lCE3D%2FE2%2FVslpbebLG%2FBsyXaeBVfv8SRJgWocVr5bVoJNCHHkwjDB6YjKBjqkAXqdK%2B6laQ%2FxCJycpfwD021OZ%2FS0DUhgnmKDzi2u2D1UE2ATy7%2FC%2Bo8TkUp%2BUKcVKYuDso%2BDoiIM%2Bv6S0TRSel%2BJWO19bXZbjAm%2BNHiD6rAC1j0iP5bAejamOw9skdMD7Kg8na%2FgXN8wUKqfWcJub2j6kTQvUasAfKHrXbm5I47JqTCQj50GKsOIAs09OO%2Bru7R%2Fwn%2B%2BzcSDWPPWUSpatD6QwAbw&X-Amz-Signature=ef865e7eebcfa94a4952d072b28f1c4e6d38a92f2b4e5f32dc6f649d8131b60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
