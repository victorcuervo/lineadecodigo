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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DLADZ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHEY2Jg1CDrJyt%2FHtn53%2F77kP5BlH5o9tYXYzWbRNl2iAh9qqgkAV7vDS7vUM9cGnKqJxE%2BhLOuz0wOjRX1WSawmKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbvifkm9VXizJ397wq3AMF8%2FxwSgN1OWGmaEs7j3gX%2BYEcsF6hXiNK68mUQkO6SF36nF7q9dV6Yi2X0neLnPF6dYhprgU%2F7%2BqY9KM2A7oEPSxhQenrLGJuMIUlcDKdVQOzYEedv%2FSaRTpa%2BFZBvKo6fmFy%2BMirfO5PpipiAruWwsjpiMxf1kjpUvs1WlXZUlm%2BLYNiWFea5StOIWg0dvIITTEVRWgtjmZPh5rHDQNH3wj8VCmOKtfuHkx0fuAwKKcX%2BL3bLLf7koq8wn%2BaYdQXntDJp60EPUs6yFEEX9ASf13imJtSJoYPhjzGYfQxOX%2BQ2qDLuXeVRfqMRg%2Fal0XSUdj5SolQKwTG0dUU4AGZi%2BVBZEg6GtAfqriten4XM9qr%2BQod5tBFmjKY4YpYw%2BCkLDb0stRDkXcB8Ca5Spc1TgNv8u8y9gyV6vVMTw2%2Fb3bCDMxek8%2FaB%2FYr1tZV2KIroffLOCglehBDwt8%2FKOYf3HmrNAuBCIcp1cY1vupxP9ttC4MdZpUhB%2BUYonqrXlZmQK7WI0rv%2FpAeNUlq5Zj4Ny0xknT0aulOLBKsL0gubFjotYtRbXAa5ZB9K9%2FG2DGYHw3Io9XU%2B19%2FoxJU5z0goG4%2BGm%2Fb3fLVM7a%2FtSOCWaF%2BYana84ljRUuHfTCIotTJBjqnAdmtj73uYGLEiOeSPK8pwgcF3lozg3hppYv4mlVy7bJEaYg0zZAyyHcjEfs97AJBz60Rjn6%2BNakHm1Nr22ZVAUQNS6IKi8vdoj2Zz%2F4tiht5UjUWOICVgdJ0mWu12S3QdBbKYsmH2qQxKzuDjoeU%2B4FAIshnFROO6zWCO57H1ezNh1OAyP9pMWCvedVPdDoLHudhPN1576RK%2BEwlb8IMTWVyD6pj4nHs&X-Amz-Signature=10bf305302da320b4bb6eb760202a082a0fded80ecd59e56d60a9f1505c89b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DLADZ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHEY2Jg1CDrJyt%2FHtn53%2F77kP5BlH5o9tYXYzWbRNl2iAh9qqgkAV7vDS7vUM9cGnKqJxE%2BhLOuz0wOjRX1WSawmKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbvifkm9VXizJ397wq3AMF8%2FxwSgN1OWGmaEs7j3gX%2BYEcsF6hXiNK68mUQkO6SF36nF7q9dV6Yi2X0neLnPF6dYhprgU%2F7%2BqY9KM2A7oEPSxhQenrLGJuMIUlcDKdVQOzYEedv%2FSaRTpa%2BFZBvKo6fmFy%2BMirfO5PpipiAruWwsjpiMxf1kjpUvs1WlXZUlm%2BLYNiWFea5StOIWg0dvIITTEVRWgtjmZPh5rHDQNH3wj8VCmOKtfuHkx0fuAwKKcX%2BL3bLLf7koq8wn%2BaYdQXntDJp60EPUs6yFEEX9ASf13imJtSJoYPhjzGYfQxOX%2BQ2qDLuXeVRfqMRg%2Fal0XSUdj5SolQKwTG0dUU4AGZi%2BVBZEg6GtAfqriten4XM9qr%2BQod5tBFmjKY4YpYw%2BCkLDb0stRDkXcB8Ca5Spc1TgNv8u8y9gyV6vVMTw2%2Fb3bCDMxek8%2FaB%2FYr1tZV2KIroffLOCglehBDwt8%2FKOYf3HmrNAuBCIcp1cY1vupxP9ttC4MdZpUhB%2BUYonqrXlZmQK7WI0rv%2FpAeNUlq5Zj4Ny0xknT0aulOLBKsL0gubFjotYtRbXAa5ZB9K9%2FG2DGYHw3Io9XU%2B19%2FoxJU5z0goG4%2BGm%2Fb3fLVM7a%2FtSOCWaF%2BYana84ljRUuHfTCIotTJBjqnAdmtj73uYGLEiOeSPK8pwgcF3lozg3hppYv4mlVy7bJEaYg0zZAyyHcjEfs97AJBz60Rjn6%2BNakHm1Nr22ZVAUQNS6IKi8vdoj2Zz%2F4tiht5UjUWOICVgdJ0mWu12S3QdBbKYsmH2qQxKzuDjoeU%2B4FAIshnFROO6zWCO57H1ezNh1OAyP9pMWCvedVPdDoLHudhPN1576RK%2BEwlb8IMTWVyD6pj4nHs&X-Amz-Signature=977f41703f75393e5146bda6457f0021613dd23bcb1289e80a7eec587978fa2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
