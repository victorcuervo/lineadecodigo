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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24E4LJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaFG7HBVKwzVxFPm969qyWQL1mTN2kQw1cQQjyqOaHogIhAOc4xtgRnTeWECPTdqAdiwfxXxGTQRR0tJdKWCwycK5BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBEbZAcc9635dJRyEq3AMwNlIkuVgPqeYA63CSBpFzm9ubQ47C%2FCFo1LMXPdkal0AnluBPb0XMMuwgTvsKhOEQcAbeIX8U9%2B4fmq2szMwiB%2FmdPOea23RFge5bbxmPwwTHGccrsNpObe2wCfGWwgMONHXiUeZFx0xdSDyiE2K6pB0Oo2abLt75XzThlN%2F3FG15RAzSnUu4pgXsgITmhWOS6xhpsOohHgZ3PuPsKNNeiUNguVEEeoQVq%2FpTiP5z3gjpf8peRhx%2FNpxwSaFwvnvc7C%2F%2BoAoeGC8Y%2BKg4T0HuQfIyQHFeRsX3kZih67yr0UtW7IkN9h5U1Ex5LSmEz2QaYixQ0oHU%2BN3KvkxDU2IXt4tJgd2uqVTj89uwrVobgHAO9ClTp6OIBKom4xiNKy9EJfjx31hI8marlNepK%2BlS60G1KNL51sezw2hNl7JYiSHEJKZfQ9b6vKc6Ys0Ot1yTTtYrzOjO2fI0LCscgmMr6E7nDBEspnxe7W3d8aF6IpJ6%2Bqb2qbzFYFc3EtLZcM0pKwKVPrcpOPt0SPKB43CUUeuCESuruvp%2FgXTQSdheuHJ0rNWyM5e0OQ94RGUFDcixHvmMqjr5QINweUAt8GqdC44DIA3jQU3Hs472h9%2Bn0c9pFY2ljIu6NtxwaDCwn4vKBjqkAVa15paljcfNh8dwarHuDc0bu4pNVhTExqFZWKIOrnWCdvjFgUvr6OHqbsdE9PygZfmyO2kb0eIGDcxT0DoSo2dclFbB27whkmI7A3lczjp14DxTJmlG8yip8CxLPrZ5GdJ2ibZeVRrAQE5b7c8yOAvLlAFKn%2B6ZT%2FLLq2ofA0LCWiyf2KYF5rIYCRECzTSS%2B%2FglKV0vcPGEe5ztPHR4gqWAFhH0&X-Amz-Signature=b23c2cd4b170d89be887e28c241635ee310b6d714e844c41982b8e9ceaff6879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24E4LJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaFG7HBVKwzVxFPm969qyWQL1mTN2kQw1cQQjyqOaHogIhAOc4xtgRnTeWECPTdqAdiwfxXxGTQRR0tJdKWCwycK5BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBEbZAcc9635dJRyEq3AMwNlIkuVgPqeYA63CSBpFzm9ubQ47C%2FCFo1LMXPdkal0AnluBPb0XMMuwgTvsKhOEQcAbeIX8U9%2B4fmq2szMwiB%2FmdPOea23RFge5bbxmPwwTHGccrsNpObe2wCfGWwgMONHXiUeZFx0xdSDyiE2K6pB0Oo2abLt75XzThlN%2F3FG15RAzSnUu4pgXsgITmhWOS6xhpsOohHgZ3PuPsKNNeiUNguVEEeoQVq%2FpTiP5z3gjpf8peRhx%2FNpxwSaFwvnvc7C%2F%2BoAoeGC8Y%2BKg4T0HuQfIyQHFeRsX3kZih67yr0UtW7IkN9h5U1Ex5LSmEz2QaYixQ0oHU%2BN3KvkxDU2IXt4tJgd2uqVTj89uwrVobgHAO9ClTp6OIBKom4xiNKy9EJfjx31hI8marlNepK%2BlS60G1KNL51sezw2hNl7JYiSHEJKZfQ9b6vKc6Ys0Ot1yTTtYrzOjO2fI0LCscgmMr6E7nDBEspnxe7W3d8aF6IpJ6%2Bqb2qbzFYFc3EtLZcM0pKwKVPrcpOPt0SPKB43CUUeuCESuruvp%2FgXTQSdheuHJ0rNWyM5e0OQ94RGUFDcixHvmMqjr5QINweUAt8GqdC44DIA3jQU3Hs472h9%2Bn0c9pFY2ljIu6NtxwaDCwn4vKBjqkAVa15paljcfNh8dwarHuDc0bu4pNVhTExqFZWKIOrnWCdvjFgUvr6OHqbsdE9PygZfmyO2kb0eIGDcxT0DoSo2dclFbB27whkmI7A3lczjp14DxTJmlG8yip8CxLPrZ5GdJ2ibZeVRrAQE5b7c8yOAvLlAFKn%2B6ZT%2FLLq2ofA0LCWiyf2KYF5rIYCRECzTSS%2B%2FglKV0vcPGEe5ztPHR4gqWAFhH0&X-Amz-Signature=1ee79cab023326fcec967a5e09d50aec9bcb704fc74a6217ab94ee3cdec918fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
