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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAZ6BRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiNOwFVsH0VWvnCK4t%2BAUn7umrgwYWwF4t7VVLwIU17AiEAgrLR1BRedK3PBTQqMxe3VZP6rkyQB6ghjtRfub7sG5gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKyC5KzO9yc89a18XircA54uSwKB3RG9Zq2it%2Fsy636CpdqEunmHeh0g8T3ityRGIpDZWh5OH%2F7vVWJOM2zzuB%2BbzzfnrFAeWMo20ICQPuWr8qwU36LB6gUnXo9tXyRyNefnBXMJroLC5%2FNUpWuwzLdZagUQsWEmGG3JVziHOAUwc%2BQHwMj%2BpswG6BwYEKafSK9vsrrvL3UZ%2FOQdltrSzAJVNAe3V%2BvkFfxjZl52dxpEdynfreOB0xSaMEOqxrMaOdtSkb2vACQkuJAue3S3A6NU0KLAiQB41%2BUQ9EVe9CHBT4XHBzlJ5RndtJaqukHTDOaatGVJnR%2FyXUIaP0Ohbq5OaA8zxgY%2FmmFZYbDf9cYtYkfmVMVQVLLOEEoqWe6Z856694Zj4akTgYja82fEs7l3A4sr1FIRxWIjDCxxqCcnhR7xi0zu33svMbiDHVTJq8RbxaCNaF5kboFhiYs8VCRjZzgt7%2BqNKpR7Ds31sf2jiip7%2BZCaq1l3BVeBA9jNKzLrJ06T2bN3XfrLQvY9BHI8ACickGTU%2BnVKWP9rgpjco3N1n6HKQWFWYvkIIYijiL1k6SXz8qT1O2pC55CcZ%2FP0KXz3Xt3VQqsK02zAOks8FKILr0iVHdRals6WUwGVBK08GsZVlZYzRH3PMNawyckGOqUB3ACOHf2OGO58zwTv%2BD5bbHKHqEeK2BAKb%2FYy25LoafzMlNH9Hxd6VD9n%2F0SYcCDv2HcZ9e3o%2F1oEdpyVnozp0uE4%2BokRrER%2BX%2FOMTl63KtiUrn1R8GRLJaOTi%2F%2FKMr6SIMw61iet06mNIPu4ccZAPv4tr3lqWPYCNFBk3hHBi1Mdq1wEbpAUOyEH8Le%2FQjTBJov4AZS7QsDrM3cqcNI1CcW%2BnC0O&X-Amz-Signature=eafc607c66d68185552cfec7f5324bb9e5bb5a1c92dcf3cd6654cbb0a7c6df66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAZ6BRS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiNOwFVsH0VWvnCK4t%2BAUn7umrgwYWwF4t7VVLwIU17AiEAgrLR1BRedK3PBTQqMxe3VZP6rkyQB6ghjtRfub7sG5gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKyC5KzO9yc89a18XircA54uSwKB3RG9Zq2it%2Fsy636CpdqEunmHeh0g8T3ityRGIpDZWh5OH%2F7vVWJOM2zzuB%2BbzzfnrFAeWMo20ICQPuWr8qwU36LB6gUnXo9tXyRyNefnBXMJroLC5%2FNUpWuwzLdZagUQsWEmGG3JVziHOAUwc%2BQHwMj%2BpswG6BwYEKafSK9vsrrvL3UZ%2FOQdltrSzAJVNAe3V%2BvkFfxjZl52dxpEdynfreOB0xSaMEOqxrMaOdtSkb2vACQkuJAue3S3A6NU0KLAiQB41%2BUQ9EVe9CHBT4XHBzlJ5RndtJaqukHTDOaatGVJnR%2FyXUIaP0Ohbq5OaA8zxgY%2FmmFZYbDf9cYtYkfmVMVQVLLOEEoqWe6Z856694Zj4akTgYja82fEs7l3A4sr1FIRxWIjDCxxqCcnhR7xi0zu33svMbiDHVTJq8RbxaCNaF5kboFhiYs8VCRjZzgt7%2BqNKpR7Ds31sf2jiip7%2BZCaq1l3BVeBA9jNKzLrJ06T2bN3XfrLQvY9BHI8ACickGTU%2BnVKWP9rgpjco3N1n6HKQWFWYvkIIYijiL1k6SXz8qT1O2pC55CcZ%2FP0KXz3Xt3VQqsK02zAOks8FKILr0iVHdRals6WUwGVBK08GsZVlZYzRH3PMNawyckGOqUB3ACOHf2OGO58zwTv%2BD5bbHKHqEeK2BAKb%2FYy25LoafzMlNH9Hxd6VD9n%2F0SYcCDv2HcZ9e3o%2F1oEdpyVnozp0uE4%2BokRrER%2BX%2FOMTl63KtiUrn1R8GRLJaOTi%2F%2FKMr6SIMw61iet06mNIPu4ccZAPv4tr3lqWPYCNFBk3hHBi1Mdq1wEbpAUOyEH8Le%2FQjTBJov4AZS7QsDrM3cqcNI1CcW%2BnC0O&X-Amz-Signature=fce11a58867aafb11adfea8373e012901d2e7aad3252f8f78913bea652767dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
