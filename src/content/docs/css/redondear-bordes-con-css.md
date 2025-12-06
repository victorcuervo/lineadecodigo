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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGJKFZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1IqNq1A5FcYQKONSfb0i3CoPS%2F357c9pmsIgW12UDjAiEAmY%2BBAj9bc8UH9tZpfDZlowuNvV3mBcOeWH5k8q%2BVS04q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJl7K7AlqJbaq%2FVb%2BSrcA9%2FYlXw1Mm6ntiylYJ1OGn2Z%2F3WvISKnsCvLkMQu32FqZP0nsiJAM6Bt1PZX4GzbcvukS8MPZzfkOqK1P6dykwn1ZIygur6XoTmXaQppHl1hWZbyPVskI%2BtI0QGGCThHN%2FZcQb5fcmcC2%2FpQa%2Br7U%2FJqu8aGKxRqiYRW%2BV37Xq80Cr%2BmMoTZfvweM%2B7decNc5sAneo86RqSARVuDxpb0VwnEVA%2BRNgABrBQxXFTBMWKutQ6D%2FKY2IvsWEmUzrF9Ub6GRLS48qabouW5BouCzyD9o0qxm1DnnhU7xr2TRTLupGF1FwGe2NbNGeHKa0P8aeO1nihmpnNHkIB6P8pejntnE9YdOhBRgo%2FzybkJtd13ywjqNHB1q3VMbNQBN9wnIPIyf886t8lHJ%2B43ZGEdqH03Xp8Y%2FPgzKRtE%2BCNbxWgt5t2Su4ruV5jcz1%2FXBHl7C2ZMGxDB1HELfCOhd9Xmsazt4xsfakZxc%2FeBUg04oEFc6eAum7RYEG6YW%2FfC6OWuFcnGlIS04U6vCJfAMeZThrfnb6e3A44AeNLpy2XZqVK08mbfQodTBGkZ9e0nweDchtTtDxYf4H5GcT5VJOnmDdgtrXJ6m2eIx%2FyAH7%2BR7DjxBCOcJNEo5fFe7kkxBMK7U0skGOqUBj1HQZnImLKLNYoDWHXyTMmfdL3f4hBcZGOI1QR56R5VK4EnKBy%2B23zCl7%2BscMBAo4uXPFfEMM4WW%2BBvpaHueRJEiMzHV%2FCydz8c20I6dhWAv3NWILAJvVcuPzB8NuVlappRIVAL8IrGUHi6OVME1boJYZQO33lmR6RQWa87Rsl%2Fj%2Bg1uPfQfSNI2LYDmKcOGJeOSVWXoHO7qeasN%2BoAJBO0p6K9D&X-Amz-Signature=4591ef64841ae95e8fb9dbc228a491f97c369d2279ed6972ce8ca68ef538a276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGJKFZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1IqNq1A5FcYQKONSfb0i3CoPS%2F357c9pmsIgW12UDjAiEAmY%2BBAj9bc8UH9tZpfDZlowuNvV3mBcOeWH5k8q%2BVS04q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJl7K7AlqJbaq%2FVb%2BSrcA9%2FYlXw1Mm6ntiylYJ1OGn2Z%2F3WvISKnsCvLkMQu32FqZP0nsiJAM6Bt1PZX4GzbcvukS8MPZzfkOqK1P6dykwn1ZIygur6XoTmXaQppHl1hWZbyPVskI%2BtI0QGGCThHN%2FZcQb5fcmcC2%2FpQa%2Br7U%2FJqu8aGKxRqiYRW%2BV37Xq80Cr%2BmMoTZfvweM%2B7decNc5sAneo86RqSARVuDxpb0VwnEVA%2BRNgABrBQxXFTBMWKutQ6D%2FKY2IvsWEmUzrF9Ub6GRLS48qabouW5BouCzyD9o0qxm1DnnhU7xr2TRTLupGF1FwGe2NbNGeHKa0P8aeO1nihmpnNHkIB6P8pejntnE9YdOhBRgo%2FzybkJtd13ywjqNHB1q3VMbNQBN9wnIPIyf886t8lHJ%2B43ZGEdqH03Xp8Y%2FPgzKRtE%2BCNbxWgt5t2Su4ruV5jcz1%2FXBHl7C2ZMGxDB1HELfCOhd9Xmsazt4xsfakZxc%2FeBUg04oEFc6eAum7RYEG6YW%2FfC6OWuFcnGlIS04U6vCJfAMeZThrfnb6e3A44AeNLpy2XZqVK08mbfQodTBGkZ9e0nweDchtTtDxYf4H5GcT5VJOnmDdgtrXJ6m2eIx%2FyAH7%2BR7DjxBCOcJNEo5fFe7kkxBMK7U0skGOqUBj1HQZnImLKLNYoDWHXyTMmfdL3f4hBcZGOI1QR56R5VK4EnKBy%2B23zCl7%2BscMBAo4uXPFfEMM4WW%2BBvpaHueRJEiMzHV%2FCydz8c20I6dhWAv3NWILAJvVcuPzB8NuVlappRIVAL8IrGUHi6OVME1boJYZQO33lmR6RQWa87Rsl%2Fj%2Bg1uPfQfSNI2LYDmKcOGJeOSVWXoHO7qeasN%2BoAJBO0p6K9D&X-Amz-Signature=d8e4ac9e1ae06b71af026b0740af60adb34634b7b982bfbd298841a30d61dcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
