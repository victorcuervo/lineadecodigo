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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKDUPT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm08W48vdTuyFAwy3Uanq1uCoD7mOatOAuXBPrWOHWYAIgKpRzWJislggWmeDiCiEqBOSjsVTEaoI4CcZ8vCDeHOwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBxWqGUD%2Fys7miyo3yrcAwxUPDNrQ1kU6fIGwIil9X210SubA%2BV5qYcAlbBtiQMkOJhj7KwpI1VubRhCqAlYId7WFRpVGTg%2BhZ24x468ju00is%2BqjfbZ5Jou0w29DH6fIdJihDpYnv8XMHC85c4l2c4ys718BYQ1iVLwWdPJtzHSNKKLS81tXMsm3h4vw4PKbwyzG1d7T8xPddAIwNQFrzNNAmkpXutJnjfmM7tVe0wabiGW6qkswFEwrY0e%2Fe5y6Zptk4aV5b0PGRs0Xdz0pLJOkpoeQg5EI%2B9nvHIwYHRnVVax4PZH9f1xo%2BbuJjjy7bq1BnbO1azkhRI99EsqNhtqKx1u1WCZXMzPxWyXuTGJlV4sbDUMB4gDmhwvNgXMolhX0I1ZvudPiTHHZL0Y11%2FEkEMCWmbRT3uOkHwtOmvMmvuUE%2BpzstJTUq6MsQ9Bwhtrz7WrNgspPsN9rSa29BCRPFml%2Bnn4gxcEL6Yy8tdwGsVp75ncVmqcSgYZP4iGZ%2FME%2FSxkLbHiNHsn1tO9MwRaIB%2BXf%2BoQWvkbzlk%2FyEv9lDg9RztLNOrX5A7pwPpiDzHgylaEHFoltAjHOfljSqoKbOtQLiec6KaL207L4H1k6waRJPdsLOMzCSt83ysNG8OxEOFxcefqpBCNMLT5xskGOqUBtPWewo0LVdgyMzenhDzqcFTpDA8Yipxe7Easg4o1S31YlGEJBgy%2FR2W4tKb00Ox5zwcuGgx6Sc%2BZ0%2F6zE31CaA4V28%2BAt%2BW79Jn%2BJ48m1dHPn7TB1exLNvw%2BiW923UT8LmWKSFlGb%2FRwcn0rjcod4nUWYT81%2Fa1a2%2BqjRyW%2BzaQuUykWNNKF7IbgUET6odneboG6HZ9VOdm2IhNHpyCkHGClrpSm&X-Amz-Signature=0243ceaa19482f0900f40892f03a5a1a42b93334c87acfbda70bb2caae3d5e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKDUPT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm08W48vdTuyFAwy3Uanq1uCoD7mOatOAuXBPrWOHWYAIgKpRzWJislggWmeDiCiEqBOSjsVTEaoI4CcZ8vCDeHOwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBxWqGUD%2Fys7miyo3yrcAwxUPDNrQ1kU6fIGwIil9X210SubA%2BV5qYcAlbBtiQMkOJhj7KwpI1VubRhCqAlYId7WFRpVGTg%2BhZ24x468ju00is%2BqjfbZ5Jou0w29DH6fIdJihDpYnv8XMHC85c4l2c4ys718BYQ1iVLwWdPJtzHSNKKLS81tXMsm3h4vw4PKbwyzG1d7T8xPddAIwNQFrzNNAmkpXutJnjfmM7tVe0wabiGW6qkswFEwrY0e%2Fe5y6Zptk4aV5b0PGRs0Xdz0pLJOkpoeQg5EI%2B9nvHIwYHRnVVax4PZH9f1xo%2BbuJjjy7bq1BnbO1azkhRI99EsqNhtqKx1u1WCZXMzPxWyXuTGJlV4sbDUMB4gDmhwvNgXMolhX0I1ZvudPiTHHZL0Y11%2FEkEMCWmbRT3uOkHwtOmvMmvuUE%2BpzstJTUq6MsQ9Bwhtrz7WrNgspPsN9rSa29BCRPFml%2Bnn4gxcEL6Yy8tdwGsVp75ncVmqcSgYZP4iGZ%2FME%2FSxkLbHiNHsn1tO9MwRaIB%2BXf%2BoQWvkbzlk%2FyEv9lDg9RztLNOrX5A7pwPpiDzHgylaEHFoltAjHOfljSqoKbOtQLiec6KaL207L4H1k6waRJPdsLOMzCSt83ysNG8OxEOFxcefqpBCNMLT5xskGOqUBtPWewo0LVdgyMzenhDzqcFTpDA8Yipxe7Easg4o1S31YlGEJBgy%2FR2W4tKb00Ox5zwcuGgx6Sc%2BZ0%2F6zE31CaA4V28%2BAt%2BW79Jn%2BJ48m1dHPn7TB1exLNvw%2BiW923UT8LmWKSFlGb%2FRwcn0rjcod4nUWYT81%2Fa1a2%2BqjRyW%2BzaQuUykWNNKF7IbgUET6odneboG6HZ9VOdm2IhNHpyCkHGClrpSm&X-Amz-Signature=e707be921fdc3269e6dba2b2c4de92e72a4a0eab9070787f731accbe209a9db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
