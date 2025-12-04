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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VWIMGTD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxNEV0V6ad4gtmrO54WL1WrHwsAX6Xwmfpd8JcWuf8KQIgMQL5DNUlHIlSy%2FnXEqt%2B7rZDEprwEpRopXKdxkAsugEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLIL0VGv8usPP4%2FZdSrcA95Q9a9vEeig%2F49E%2BrUJKN1UdN1yNmbFK%2F1TFQ%2Bhdw7AA4aLbMkd7S0TEanaqAbyYCQ%2FPpkchrqSz9oQvs45M12mk6fJubCENRJb1PYptCkuUooNJtQTO7wxFpMIVH34Qon%2B4O0gN07bMsDMh%2FFZt%2BlyMJzBr6sbKBvNIU1QMlH%2BcFhjiXWumNiokC0Ms8n1fKPkbhllZhyPQ9ldTUZtE72DSesEdjO8V8dTvPVsQ9Qfho5FY3LnCzkH2PL%2FMqakVuuN%2FbAySyd6%2BeLEQr1572yVpeHvgA5KpZeiJl3kQcoAuWlgozhA0OhQMJndqESbYoWNm1legfCPd%2F1rARzGQnuiAWBTwcCNKlzrFeG0bV3A0zRZKgFrwLUx1WxyJYcstDU%2B%2FlakKTGDjlfuQL%2Fvfh24xyeW3jEYzIaRipFERCXBa6EVXTzITP2NM39Isu5MCH68iy%2FjKHiY4RqzmH7ljHItZHW0BvUHUUgQVxkSZkW5AAqG7RGna4lxuzeMTLx6lQlXvyDxlUgCQ42hZfBiHvl9FA8A1DNIKxuYikR%2FqB2IbIpBKU9WB4efko7l%2BPeMWa1XdFjsKbZ6Pa7DK4ibAVeFbf3TP2JnNhl9PR1ogmJbo2dnTMWBEWZhcOObMKqMyMkGOqUB0PezEcFA0c1s6PsIXtpDrHwPhYK2TdwGOnIBvUqCS45jqDUFaU0WY3ji19a6kzc%2FZ5PvT0oT3cRcIdBpwGA8YzphlKWw74xbHbOHnc3FR7%2F1KrgBHL%2FKPDnFHqwWOx6KXxxonV%2B3J5bw9%2B2W%2B1F804ESoX%2Ff2a5%2FMABkGVbfcmU04AL8DLfWAOQ%2FFoDvOCVCEmxEqRftdKneNqcfdlCt95Acj9iD&X-Amz-Signature=824bc1c466479b27e752bb203614fa0bcc4d33f31cd14abd1b93ff1a1a17c69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VWIMGTD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxNEV0V6ad4gtmrO54WL1WrHwsAX6Xwmfpd8JcWuf8KQIgMQL5DNUlHIlSy%2FnXEqt%2B7rZDEprwEpRopXKdxkAsugEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLIL0VGv8usPP4%2FZdSrcA95Q9a9vEeig%2F49E%2BrUJKN1UdN1yNmbFK%2F1TFQ%2Bhdw7AA4aLbMkd7S0TEanaqAbyYCQ%2FPpkchrqSz9oQvs45M12mk6fJubCENRJb1PYptCkuUooNJtQTO7wxFpMIVH34Qon%2B4O0gN07bMsDMh%2FFZt%2BlyMJzBr6sbKBvNIU1QMlH%2BcFhjiXWumNiokC0Ms8n1fKPkbhllZhyPQ9ldTUZtE72DSesEdjO8V8dTvPVsQ9Qfho5FY3LnCzkH2PL%2FMqakVuuN%2FbAySyd6%2BeLEQr1572yVpeHvgA5KpZeiJl3kQcoAuWlgozhA0OhQMJndqESbYoWNm1legfCPd%2F1rARzGQnuiAWBTwcCNKlzrFeG0bV3A0zRZKgFrwLUx1WxyJYcstDU%2B%2FlakKTGDjlfuQL%2Fvfh24xyeW3jEYzIaRipFERCXBa6EVXTzITP2NM39Isu5MCH68iy%2FjKHiY4RqzmH7ljHItZHW0BvUHUUgQVxkSZkW5AAqG7RGna4lxuzeMTLx6lQlXvyDxlUgCQ42hZfBiHvl9FA8A1DNIKxuYikR%2FqB2IbIpBKU9WB4efko7l%2BPeMWa1XdFjsKbZ6Pa7DK4ibAVeFbf3TP2JnNhl9PR1ogmJbo2dnTMWBEWZhcOObMKqMyMkGOqUB0PezEcFA0c1s6PsIXtpDrHwPhYK2TdwGOnIBvUqCS45jqDUFaU0WY3ji19a6kzc%2FZ5PvT0oT3cRcIdBpwGA8YzphlKWw74xbHbOHnc3FR7%2F1KrgBHL%2FKPDnFHqwWOx6KXxxonV%2B3J5bw9%2B2W%2B1F804ESoX%2Ff2a5%2FMABkGVbfcmU04AL8DLfWAOQ%2FFoDvOCVCEmxEqRftdKneNqcfdlCt95Acj9iD&X-Amz-Signature=d4b50d0dab16fa5162ade5e4dc4f36d09e6af7f43574a50bf383df333c3a3b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
