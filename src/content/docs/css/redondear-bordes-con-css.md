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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NN4B7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUZENiSDH6O96R0RAQsFDSc27WN95KV2CR3BL57oADAiA75Y0S6Hs2PS5eTIztTUAmKzsQZVT%2Fzy1IrnH0wdw1Xir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2lmMETkBxdecboitKtwDnS3PvVZ9HVGMusRbLSXH%2B2bgnqbRWOJtfNnrIRB%2BGugw%2FEB%2BVMj0ByFswNIDHEsuz5UQ8fdkHQqP%2FNKuahqJum2WXZVobuEwB9Zi8SlBXefe%2BHMgtbc%2FghPQhdOaSJnx5gORo7Z6lai9ETVm2Q8EaUAhgAJkQ84uGBC00z%2FPMuLI35TqBjLtEpuyFazozDjlkzheehd%2FJ12sPVmD26SH3DiEiNPxYAf3nvr7HrLqpBf91JZXREjPkCfNkFd3qguNsuKuzCtvOh05d5264LjbmjfGjoL35Tv8%2B8vOU6RjzMtxmbPbyZDuT%2F382UbY%2FKCSDpkBVbs5EDvio2Eqf5LQzyBqktui28VxF9UUgyl28oxOFzB16VZ66yTZP%2FiokfxWjVNDQW75m6vejHHxuW7cucb95y4pPnPbPnHgtNiOZTQrU5%2B%2FM11k9tTdm%2F6PnBhL6NdJSesO45Q%2FXrgz9C4PKK75xed0sZHw5qOQSYGlZFUB76M2t4PmiN3BiUYymebWk1SG5HT28k%2B3I61RrH7eygjRH1BehZSAL4xOAsI16CQvGr7ysqmQXLsE15tdQRzOU0V7nqGLXAR7QH5472yEpQfiOGlan%2FmbpgAp33W%2B9zOPnRfALgeQ5yC3LSIwqsfRyQY6pgGu3klsiPjmOUGscEvlNhTctUI8orzj9EGs9Wh0rP17Ombg%2F0wOD%2F6KOFXNEev86hTZoi%2B9anr5JccvHx8qosL8ZvuRRcZLJLENmRPP11N2W2RpqpwYL1xKzuc8yE63vq6InGhfN1OBDuLsFDb537W%2B43fAGhqPNjOy1hZ0i7leTGOuFp%2B3N%2FR%2BjKfn3IeZXyHmcrrFaKM87wUIk9Bu1%2FlPKw3uRI%2B1&X-Amz-Signature=df5d8564a4b7137408200431884facabc6b4525674684e1b5a1dbe8717de585c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NN4B7E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIUZENiSDH6O96R0RAQsFDSc27WN95KV2CR3BL57oADAiA75Y0S6Hs2PS5eTIztTUAmKzsQZVT%2Fzy1IrnH0wdw1Xir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM2lmMETkBxdecboitKtwDnS3PvVZ9HVGMusRbLSXH%2B2bgnqbRWOJtfNnrIRB%2BGugw%2FEB%2BVMj0ByFswNIDHEsuz5UQ8fdkHQqP%2FNKuahqJum2WXZVobuEwB9Zi8SlBXefe%2BHMgtbc%2FghPQhdOaSJnx5gORo7Z6lai9ETVm2Q8EaUAhgAJkQ84uGBC00z%2FPMuLI35TqBjLtEpuyFazozDjlkzheehd%2FJ12sPVmD26SH3DiEiNPxYAf3nvr7HrLqpBf91JZXREjPkCfNkFd3qguNsuKuzCtvOh05d5264LjbmjfGjoL35Tv8%2B8vOU6RjzMtxmbPbyZDuT%2F382UbY%2FKCSDpkBVbs5EDvio2Eqf5LQzyBqktui28VxF9UUgyl28oxOFzB16VZ66yTZP%2FiokfxWjVNDQW75m6vejHHxuW7cucb95y4pPnPbPnHgtNiOZTQrU5%2B%2FM11k9tTdm%2F6PnBhL6NdJSesO45Q%2FXrgz9C4PKK75xed0sZHw5qOQSYGlZFUB76M2t4PmiN3BiUYymebWk1SG5HT28k%2B3I61RrH7eygjRH1BehZSAL4xOAsI16CQvGr7ysqmQXLsE15tdQRzOU0V7nqGLXAR7QH5472yEpQfiOGlan%2FmbpgAp33W%2B9zOPnRfALgeQ5yC3LSIwqsfRyQY6pgGu3klsiPjmOUGscEvlNhTctUI8orzj9EGs9Wh0rP17Ombg%2F0wOD%2F6KOFXNEev86hTZoi%2B9anr5JccvHx8qosL8ZvuRRcZLJLENmRPP11N2W2RpqpwYL1xKzuc8yE63vq6InGhfN1OBDuLsFDb537W%2B43fAGhqPNjOy1hZ0i7leTGOuFp%2B3N%2FR%2BjKfn3IeZXyHmcrrFaKM87wUIk9Bu1%2FlPKw3uRI%2B1&X-Amz-Signature=e87c30247149253fcfad1babd113996f06e578a3ac3f5673ba7a546d333d1356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
