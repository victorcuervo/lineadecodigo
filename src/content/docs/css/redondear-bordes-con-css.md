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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVVQVSS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUXN%2Fqc6T3ebm%2B8MKm7QlW%2FNXgQ4g8cqJpJxPE3%2Bu3AiBqpXB3DQEbJoR5PTtnbP3lyHjjQQZ6vxC1KKGteHz6FCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrukpEsNg%2BEoz3w0AKtwD6V%2Bkuw1xdxUyDmoF091sRjmMP30XrUpmhq8vVubcyH2yLvzMMRrCKzn5Z0zkQTSanaFImvXYQtO6QkWwC5DIvqW4mlewCyF%2Bvgd3vJzECanfL9tGv3YIZ0mlUgdFJDApyP%2B3V7zGLZhGniYgCtRdCvXXxRnH62nDGV9CuBjFoGNw9t5w88l0gPFSWDGDbdu%2F3bL5upTHisas9uP%2FRDo0z8m4NUbf7gBmx4uHT5qfPR9b9IiRXDfMx1cksMA3Q6VTU6Iz9Kir9hiPCX7QirneeQxFuZbmrlB1odxt4flncylo7%2F32F%2FhbAE8l3mEA2onq7TBUzeM35itVugxeZiu0RJuTjQsXqcJOxNbz%2BQMqjrPjwEFSyQHUpYKhJOZkIDmcDQJmgsV3WakKhJG%2Fssfq7r8WOOic%2Bsjto7Eja9q3ERY5rXiIKEf8HeBLu1bRw96Sh8q4BDXhvHFTFJLsu7ofjvBs7qi5p5D6%2BXLYj0T5E0gZbnPnzGes2T6c45kKXMKWB0TA1loONX7gHsyx2Umax8SeAJIOejJEvjS05MQo48LGwdIneBn9P%2BQEWchlWFAcDk81hYoGWTtMyj%2BvJkDq2EMym%2BMiBSvOuc8eyaqFhpH2ywhQ2P56PoJzaxQwqozIyQY6pgGxPkv2Ns%2BcH2oeuywlwWvnJ5iJjI3iIHHv3XAl%2Fyayx4f87NmGJrM5ZN%2BQw4owfRjq1Fdo98hd6mrS6mK0re1xzn6Z81R1i8U0FTWSD8hmHsuYF%2BXOBn1fPIF7rIAvr6P38ajOB9CJ7OHz%2Bxs9ed2sOyQ3%2BWyhfSOHzjLSTdadfRaGtOdIxgPZarwfpLesSiPUKLufvNabKNdG%2BTdtVxpNQqJ3lE4F&X-Amz-Signature=8cdb8dc4501a750266d2e41c3c73e32f6e2c4cc201a1654f061c5651ac62e2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVVQVSS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUXN%2Fqc6T3ebm%2B8MKm7QlW%2FNXgQ4g8cqJpJxPE3%2Bu3AiBqpXB3DQEbJoR5PTtnbP3lyHjjQQZ6vxC1KKGteHz6FCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrukpEsNg%2BEoz3w0AKtwD6V%2Bkuw1xdxUyDmoF091sRjmMP30XrUpmhq8vVubcyH2yLvzMMRrCKzn5Z0zkQTSanaFImvXYQtO6QkWwC5DIvqW4mlewCyF%2Bvgd3vJzECanfL9tGv3YIZ0mlUgdFJDApyP%2B3V7zGLZhGniYgCtRdCvXXxRnH62nDGV9CuBjFoGNw9t5w88l0gPFSWDGDbdu%2F3bL5upTHisas9uP%2FRDo0z8m4NUbf7gBmx4uHT5qfPR9b9IiRXDfMx1cksMA3Q6VTU6Iz9Kir9hiPCX7QirneeQxFuZbmrlB1odxt4flncylo7%2F32F%2FhbAE8l3mEA2onq7TBUzeM35itVugxeZiu0RJuTjQsXqcJOxNbz%2BQMqjrPjwEFSyQHUpYKhJOZkIDmcDQJmgsV3WakKhJG%2Fssfq7r8WOOic%2Bsjto7Eja9q3ERY5rXiIKEf8HeBLu1bRw96Sh8q4BDXhvHFTFJLsu7ofjvBs7qi5p5D6%2BXLYj0T5E0gZbnPnzGes2T6c45kKXMKWB0TA1loONX7gHsyx2Umax8SeAJIOejJEvjS05MQo48LGwdIneBn9P%2BQEWchlWFAcDk81hYoGWTtMyj%2BvJkDq2EMym%2BMiBSvOuc8eyaqFhpH2ywhQ2P56PoJzaxQwqozIyQY6pgGxPkv2Ns%2BcH2oeuywlwWvnJ5iJjI3iIHHv3XAl%2Fyayx4f87NmGJrM5ZN%2BQw4owfRjq1Fdo98hd6mrS6mK0re1xzn6Z81R1i8U0FTWSD8hmHsuYF%2BXOBn1fPIF7rIAvr6P38ajOB9CJ7OHz%2Bxs9ed2sOyQ3%2BWyhfSOHzjLSTdadfRaGtOdIxgPZarwfpLesSiPUKLufvNabKNdG%2BTdtVxpNQqJ3lE4F&X-Amz-Signature=1499ebbf6d261241270ec4b311f0d395cac8adb89a87d157a487438c0b12fb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
