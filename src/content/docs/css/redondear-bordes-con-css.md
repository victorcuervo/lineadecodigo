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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3AIWE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BSJRMtqQsLyrL3NPC1JtI0DXU7O8AqsT5swbvvEjMHAiEAnmkG07aoXcnjVf1ptw54hXjsFKvg0ForLsVqKNWUEK4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD9TdMnHmLIPvcmc%2ByrcAxiQGM1tj%2FUkB4InfzMZIWQS4vLg5lvqhGHJ8LRVqweJuGoyMpMAN158IvgYxowdsgyA2d%2FyAVJTpi0APWAD8MxjHJVIIDGDLokeCWkzRUCCDwK0TpPXB1fUdHODMFJG9dor%2FhWY2NKkHRn82qWsdjkYuzBnnNCYWrni0F404UX5TRAjYDJ6RI4gjAnnKdpfY0pGDBfEa6BeLOcy03QUDRjSeKT3No5%2Fz1vb%2BPLbqkx1Y41VltYY0Da%2B%2BQuWry6DJp6uTDcX%2Fj6EjwVObvWkjvaOG1qGmx82PLfyHoWpmPH7PrR9RIZgiq8Eb8H69tPnfQo%2B8w4BRsVlQkk6NPhCSAjOcrZhnTq8OrXbhqMQ3CZUEua%2BmDBNccMaWCnoE0ehAzOMw%2BKuM8FpV9Cnl9omo03vxhVRKy2N02cDcUsyfdP3AtzjbHC3EoXIHOt7rwJcQr67URxDDWJyJDOnrIwsq9G15LfGnlcrnbZiiBGMo1%2FLera%2BjMSybyHdrPsrBzlaWhmIAATlWYmosc%2FdIEuXBlkydtuZ8KAv4thWIZzfqGX4oIEAFhnq1JtwClKF1Fc4Ms34PlGPNG4HUFE3jP9U3KGVSWkuo3%2BoKE3Fcqv6qS5vEgpPRHCXJqZ%2FMXkFML6MyMkGOqUB0bzSQJVPcT21%2FzYdDgfgPmr9NX5wzhgXdQLjX3WvGaKAfgqfkeadiodRrktUei%2FKqykIn18DM9lxlrCbxhjVtQV14KkwiwuwHhD%2FHNZgmRmX3%2F8mhg1TtG09E8s2MKzxuWMjmh5ApS3r1i9ROkrEyILakYFsMe1JKCI%2Bozb6CngU1RHmDFUS7Ni4q6P1tRfAdIb1nSp0%2BDEnr9Pm%2BKTPIUSVmw%2Bs&X-Amz-Signature=9bb7653846f130411586f51986af0b340068e78e8ab06ca5244a4cfb2b6a245c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3AIWE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BSJRMtqQsLyrL3NPC1JtI0DXU7O8AqsT5swbvvEjMHAiEAnmkG07aoXcnjVf1ptw54hXjsFKvg0ForLsVqKNWUEK4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD9TdMnHmLIPvcmc%2ByrcAxiQGM1tj%2FUkB4InfzMZIWQS4vLg5lvqhGHJ8LRVqweJuGoyMpMAN158IvgYxowdsgyA2d%2FyAVJTpi0APWAD8MxjHJVIIDGDLokeCWkzRUCCDwK0TpPXB1fUdHODMFJG9dor%2FhWY2NKkHRn82qWsdjkYuzBnnNCYWrni0F404UX5TRAjYDJ6RI4gjAnnKdpfY0pGDBfEa6BeLOcy03QUDRjSeKT3No5%2Fz1vb%2BPLbqkx1Y41VltYY0Da%2B%2BQuWry6DJp6uTDcX%2Fj6EjwVObvWkjvaOG1qGmx82PLfyHoWpmPH7PrR9RIZgiq8Eb8H69tPnfQo%2B8w4BRsVlQkk6NPhCSAjOcrZhnTq8OrXbhqMQ3CZUEua%2BmDBNccMaWCnoE0ehAzOMw%2BKuM8FpV9Cnl9omo03vxhVRKy2N02cDcUsyfdP3AtzjbHC3EoXIHOt7rwJcQr67URxDDWJyJDOnrIwsq9G15LfGnlcrnbZiiBGMo1%2FLera%2BjMSybyHdrPsrBzlaWhmIAATlWYmosc%2FdIEuXBlkydtuZ8KAv4thWIZzfqGX4oIEAFhnq1JtwClKF1Fc4Ms34PlGPNG4HUFE3jP9U3KGVSWkuo3%2BoKE3Fcqv6qS5vEgpPRHCXJqZ%2FMXkFML6MyMkGOqUB0bzSQJVPcT21%2FzYdDgfgPmr9NX5wzhgXdQLjX3WvGaKAfgqfkeadiodRrktUei%2FKqykIn18DM9lxlrCbxhjVtQV14KkwiwuwHhD%2FHNZgmRmX3%2F8mhg1TtG09E8s2MKzxuWMjmh5ApS3r1i9ROkrEyILakYFsMe1JKCI%2Bozb6CngU1RHmDFUS7Ni4q6P1tRfAdIb1nSp0%2BDEnr9Pm%2BKTPIUSVmw%2Bs&X-Amz-Signature=614bd843d480ebe84c7c48e1822dfd40183af58ae1d3ed09f006a3af117fac3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
