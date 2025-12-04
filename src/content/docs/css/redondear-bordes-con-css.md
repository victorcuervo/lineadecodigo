---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4OS54T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIB5eMLrkc4y%2BO4UmCHSs0yTVuIEguTahdOz09EP0sJi4AiBfOca5tdSisSKbwhqz5hhUJfusr4fqERc84CxdglZaHyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMA08j9urfxL19Dc5mKtwDXBmavAQSbPKwuBLiG1vHU9odJZ0QSjYUewcfiuviGMQSfI%2FqDCyIjMsFTPSRSNNgFZsnwmcenzrI7BRfJA5pj8KVOPPznUrBe%2BtmXtr5wHzHuNF7uf6qJ3Tlj%2B%2BykZUWfoaugWcAQCoOzf0JYMZ9Y46WhBNcWFFIpWIup9IOZ5HYUVMuNwEoXoUSljUOj%2BwWQM7Ml2TjrNNeJqwcTBNLiskz9e2eVZuUOXffPsKqv4GLJl3pl%2Bqo7f1py4pMu4c7st0%2Bvu4x1vdf7UDbPnfzSSWnadrnyvp4qn91h0b%2F%2BDHdes8TqjJAEXpqtcJC9Nc%2B5pujibbVkz0GZHhQ8pRWFH%2FrmDhfKqNuShi9RDEaBjU9UHSCvm7Uwkn%2BgITRD%2BCaIojqGJgsvvBi%2BZR%2Ban21eKt4bN4K1gH9Rzd9N4jVRVEcjDviNLFOH4z%2FDvGWC9RNH2Mu95Ba41UY%2FH%2BvUaysIu8oGnErVP4PcGQfeFTPttenihYuAnS4KZ374qBV%2BMPHSn2g6VWD1UM%2BeW6hmi4at0FdZ9drfl76zTY0y2jABlaE8WrpbHZjhrbGTKUQ9gf%2FlVJCK0FxUquVuONP68oMQ8nIuhCHmy2Ej3z8ypamZ%2FmjZpKBAh6EmYRqMl8w767EyQY6pgGER8e9hJjLAsK0o3oQeEHSL%2F7jwPLH6l8N3AswESEBshJTae0sbcbMmd8KkcoQlrRzW5KdmVZhIApWtS1jzPW%2B4kRaYMieVPQKQqt8I8YKmXQb2ovkLXECKIPo%2FoxV6LtqVaD7WvTxOTKtekPpIASCWTj3lmuZEKZE2YW9xK%2Bjv9136epehf2bRW6IiaCnpzj9OSHJyA1rMFvw4xRr6Xepk0pX5UhR&X-Amz-Signature=0f384095f63072cf375cf8f8179eb967c44824b90e6b909222f04a8f1105c109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4OS54T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIB5eMLrkc4y%2BO4UmCHSs0yTVuIEguTahdOz09EP0sJi4AiBfOca5tdSisSKbwhqz5hhUJfusr4fqERc84CxdglZaHyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMA08j9urfxL19Dc5mKtwDXBmavAQSbPKwuBLiG1vHU9odJZ0QSjYUewcfiuviGMQSfI%2FqDCyIjMsFTPSRSNNgFZsnwmcenzrI7BRfJA5pj8KVOPPznUrBe%2BtmXtr5wHzHuNF7uf6qJ3Tlj%2B%2BykZUWfoaugWcAQCoOzf0JYMZ9Y46WhBNcWFFIpWIup9IOZ5HYUVMuNwEoXoUSljUOj%2BwWQM7Ml2TjrNNeJqwcTBNLiskz9e2eVZuUOXffPsKqv4GLJl3pl%2Bqo7f1py4pMu4c7st0%2Bvu4x1vdf7UDbPnfzSSWnadrnyvp4qn91h0b%2F%2BDHdes8TqjJAEXpqtcJC9Nc%2B5pujibbVkz0GZHhQ8pRWFH%2FrmDhfKqNuShi9RDEaBjU9UHSCvm7Uwkn%2BgITRD%2BCaIojqGJgsvvBi%2BZR%2Ban21eKt4bN4K1gH9Rzd9N4jVRVEcjDviNLFOH4z%2FDvGWC9RNH2Mu95Ba41UY%2FH%2BvUaysIu8oGnErVP4PcGQfeFTPttenihYuAnS4KZ374qBV%2BMPHSn2g6VWD1UM%2BeW6hmi4at0FdZ9drfl76zTY0y2jABlaE8WrpbHZjhrbGTKUQ9gf%2FlVJCK0FxUquVuONP68oMQ8nIuhCHmy2Ej3z8ypamZ%2FmjZpKBAh6EmYRqMl8w767EyQY6pgGER8e9hJjLAsK0o3oQeEHSL%2F7jwPLH6l8N3AswESEBshJTae0sbcbMmd8KkcoQlrRzW5KdmVZhIApWtS1jzPW%2B4kRaYMieVPQKQqt8I8YKmXQb2ovkLXECKIPo%2FoxV6LtqVaD7WvTxOTKtekPpIASCWTj3lmuZEKZE2YW9xK%2Bjv9136epehf2bRW6IiaCnpzj9OSHJyA1rMFvw4xRr6Xepk0pX5UhR&X-Amz-Signature=ff6c9d4202dea57225fc0ad81f1c1b9e7139000edfc8d1846358b5794606ba43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
