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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2M6T22O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCou1yInuJFJQCeUyNvv3mrvP8IKMemTIU2Xc2rzaVR8gIhAOqF9NOjhWDt44f08r1Uz%2BII3UtyaHN1mEbIoRsz9LDuKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx83ZbH%2FNRRNuJzR3wq3AM7fn%2BooQ88ZZ9%2BS3EsJ2nMc1GmBtu66eFXxJ90k13Jn3XJcUEnwaVCoMlgRl6b43CYoOCEJ56LEy4Tt%2FdanuJra5l%2Fs6OZrpffnOFRpCfiGt0AsfM01fmhooXINerBN9mNSLxUasCQ7oQ0gX4ShMSgESdtFX5i8mH%2FDAOxGbCT8wXn0e3k8nnFLCW9zOpc%2B014hAwtwqrxwC5NgIN5c3XjZPgBRnoUDVLdJgrzgRJroJVAUqWBDUlUTdrucONJ6%2BeC7ttF0jxIrNQc51mpFg41Icgt9%2BECtOx%2F9Hpqs0RQriJzATyb9wcdhawPyLn37Erh8CgxysgH0SSXQIWIG5Th1NNspSKeE3qL0UWEdMmg0DCbdNnu1dL93Gt8ocZ871t2qb41CEWYeSwcBj4KJWxepeSwH4k6alPtGg2tyooNBZkgYuG9h3CwNRIge3%2FVzt5IDJsz4CoYZvIxRQVpIFrx86FT1cId%2F6zeQgls9vzT24cZrPVNdlahrRobtlRVH9REX7dP9n0hzpcxlklwYBfJ8m8qhHm841r8gZJ0S71LiQedvnDLvqoQloLu%2F2pg0UdcykEHXV9TT1geogHM2vDLxArkONG49L98lj%2Bwz0LzoIys1%2Ff06ZqSSm4aXDDDs9zJBjqkAZsooUrqc54N5Y01Qa6fJwc6aKVolQ3QIza4yuHAIGuP4gNvEjy6ftEICJ6TLfkVWQA91E9tMuI0rNSn6U1Sulbid362cbWYHeO6sQHSpNGgFYbiMJ6co8qUE8MYyG7M9OoOWo4Js2FQViMYb%2BSgLf6ne%2FlABMQkSF%2F62x1bDOkXwQHM0soFgGELMjydJiT2pkXeueQe9MrymFKFu4HBAWa3ONJO&X-Amz-Signature=125adba30fa19fb9326b6bfd89801ac2a562e4ab48ef9f793c85bf54259e6379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2M6T22O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCou1yInuJFJQCeUyNvv3mrvP8IKMemTIU2Xc2rzaVR8gIhAOqF9NOjhWDt44f08r1Uz%2BII3UtyaHN1mEbIoRsz9LDuKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx83ZbH%2FNRRNuJzR3wq3AM7fn%2BooQ88ZZ9%2BS3EsJ2nMc1GmBtu66eFXxJ90k13Jn3XJcUEnwaVCoMlgRl6b43CYoOCEJ56LEy4Tt%2FdanuJra5l%2Fs6OZrpffnOFRpCfiGt0AsfM01fmhooXINerBN9mNSLxUasCQ7oQ0gX4ShMSgESdtFX5i8mH%2FDAOxGbCT8wXn0e3k8nnFLCW9zOpc%2B014hAwtwqrxwC5NgIN5c3XjZPgBRnoUDVLdJgrzgRJroJVAUqWBDUlUTdrucONJ6%2BeC7ttF0jxIrNQc51mpFg41Icgt9%2BECtOx%2F9Hpqs0RQriJzATyb9wcdhawPyLn37Erh8CgxysgH0SSXQIWIG5Th1NNspSKeE3qL0UWEdMmg0DCbdNnu1dL93Gt8ocZ871t2qb41CEWYeSwcBj4KJWxepeSwH4k6alPtGg2tyooNBZkgYuG9h3CwNRIge3%2FVzt5IDJsz4CoYZvIxRQVpIFrx86FT1cId%2F6zeQgls9vzT24cZrPVNdlahrRobtlRVH9REX7dP9n0hzpcxlklwYBfJ8m8qhHm841r8gZJ0S71LiQedvnDLvqoQloLu%2F2pg0UdcykEHXV9TT1geogHM2vDLxArkONG49L98lj%2Bwz0LzoIys1%2Ff06ZqSSm4aXDDDs9zJBjqkAZsooUrqc54N5Y01Qa6fJwc6aKVolQ3QIza4yuHAIGuP4gNvEjy6ftEICJ6TLfkVWQA91E9tMuI0rNSn6U1Sulbid362cbWYHeO6sQHSpNGgFYbiMJ6co8qUE8MYyG7M9OoOWo4Js2FQViMYb%2BSgLf6ne%2FlABMQkSF%2F62x1bDOkXwQHM0soFgGELMjydJiT2pkXeueQe9MrymFKFu4HBAWa3ONJO&X-Amz-Signature=5e9b65933f65cb7a591754340617d12ccb926220219c21888190b63601a11097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
