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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB4PAHG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhQoCB2wleGazIcL0H7EYbYPx8oehYXc9Zwjr5QOwtmAiACm4W%2BH5hQmKDa2NddWv09%2BzDUEJP9diyh9XUGPvrAZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7WhQvkTjx6stwEBKtwDea5kcIew1VE54W4w%2BxjH7rhm3ixu3mWz%2B3gHeqxdIqn%2FqnpiZ%2F2PgAK1F3kAwwKkfAoD%2BUeSSI3gcaeFvMeBeyyrKUG%2FItC6HB1w5D07K%2BMmc%2Bab3pXtg6nbvcqBpNw13pYC1Oo2UxKtNQlGZZ5Bub5%2BV7mHZqA6UomX865OZGmaemMX39ErsEH7DrSivPft8jZ8bs8teVsc3H%2BSgyWNsj16Ki3kXaeYQGr8aO1wGd0BPM7mMQv2V50cEd1UKSUBn%2FCsUn2y1KEww9J43MRZDMFXHw6dXPVdanmgGXcwZJpSChIbuJpAmGhr2pyc%2FQZAp4Vamg%2FcBrPrF5cwmMld%2BLdQv8vnw%2FHwcjhGJ2EJH%2BoPBQJ0DbhIyKQONMDz6pTynxHP0By9iqNYwKwdeFKesQ5INLQM%2Fldv67fwAXvEnoGdok9ViHK0duK5blR9SqfTmg9a6q2M7sdVxSaht%2FBwWg6YRmOVzQf2WHjAdBrrhh4I2n%2FubnStoU5ITvRE6VofzafdWcEj%2BaQM%2FPsimN8m2DC33UKkRd0mTJpkQ5Mz1yqBNXhiPyvtB1w9DMPCvBCelmT9oUbbNzfSAE3EV7fIhSinCVdJX6YAOHm7Lx79J3pEl24XT2SM%2Fe6t2YAwt%2F3SyQY6pgERd6YFdAiUdAoVhdLdEaOe4WNSbb0aDsAlLVmyccl%2FccY3SK%2FchdPqasHIKmDnDyY%2FousVIa6%2Bi6U40ETl8yDfcrRdfE8zg4Halwv40WuzSCIvijVC7ooTDs%2BZZY3v2H9b3AMn1bsgeQlobHypZYfJDcZr%2B%2F0q9y7oTHkW%2Fy6rOc6tTDbfVWkhJVFxwFqT8Fwtb3d7mjYvpBMFAOYdBl5t1HPioGuG&X-Amz-Signature=71b00a535dc4bfe4d000e345729fd878050d1f9e9f8ca4a915579b4d55e1025e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB4PAHG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhQoCB2wleGazIcL0H7EYbYPx8oehYXc9Zwjr5QOwtmAiACm4W%2BH5hQmKDa2NddWv09%2BzDUEJP9diyh9XUGPvrAZiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM7WhQvkTjx6stwEBKtwDea5kcIew1VE54W4w%2BxjH7rhm3ixu3mWz%2B3gHeqxdIqn%2FqnpiZ%2F2PgAK1F3kAwwKkfAoD%2BUeSSI3gcaeFvMeBeyyrKUG%2FItC6HB1w5D07K%2BMmc%2Bab3pXtg6nbvcqBpNw13pYC1Oo2UxKtNQlGZZ5Bub5%2BV7mHZqA6UomX865OZGmaemMX39ErsEH7DrSivPft8jZ8bs8teVsc3H%2BSgyWNsj16Ki3kXaeYQGr8aO1wGd0BPM7mMQv2V50cEd1UKSUBn%2FCsUn2y1KEww9J43MRZDMFXHw6dXPVdanmgGXcwZJpSChIbuJpAmGhr2pyc%2FQZAp4Vamg%2FcBrPrF5cwmMld%2BLdQv8vnw%2FHwcjhGJ2EJH%2BoPBQJ0DbhIyKQONMDz6pTynxHP0By9iqNYwKwdeFKesQ5INLQM%2Fldv67fwAXvEnoGdok9ViHK0duK5blR9SqfTmg9a6q2M7sdVxSaht%2FBwWg6YRmOVzQf2WHjAdBrrhh4I2n%2FubnStoU5ITvRE6VofzafdWcEj%2BaQM%2FPsimN8m2DC33UKkRd0mTJpkQ5Mz1yqBNXhiPyvtB1w9DMPCvBCelmT9oUbbNzfSAE3EV7fIhSinCVdJX6YAOHm7Lx79J3pEl24XT2SM%2Fe6t2YAwt%2F3SyQY6pgERd6YFdAiUdAoVhdLdEaOe4WNSbb0aDsAlLVmyccl%2FccY3SK%2FchdPqasHIKmDnDyY%2FousVIa6%2Bi6U40ETl8yDfcrRdfE8zg4Halwv40WuzSCIvijVC7ooTDs%2BZZY3v2H9b3AMn1bsgeQlobHypZYfJDcZr%2B%2F0q9y7oTHkW%2Fy6rOc6tTDbfVWkhJVFxwFqT8Fwtb3d7mjYvpBMFAOYdBl5t1HPioGuG&X-Amz-Signature=26990b75cd6cdcba977131237ea007e8695ef86039cf6ff259f11f880e33ead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
