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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUA75ZFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4hUq5LfKYDLWlQ3fO6JjxuBs3owBs2rZY1tpfTfBmbwIgQucXklWKmHbkujQf2UP%2BPNhHKhtL6smrT6IywYoRyvwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAFTRMW%2FInCc7dpPcSrcA%2BT0XP84lKCgLpStgcOhUees5vqUiJ8YT6fI9itj33xNZJ8dU8zWkxJRJDw%2FuduAGpnpt8SB4afq9kV4SGBNTHPb6sNwukpQDDyW4XwhrIKZVIp64rNRRMX93rvkLzUDR6Gk%2BZLCavgvuju2VJmp9kAL7FtjCuwmXxfJfNS4yW15%2FKiXTeYB4DcejsiKy8P%2FW5pochhdNCHv%2F2pU%2F5RQFfy3jXdOTurvo3RdTRjeVL6%2BQw8%2FPv%2FdWcnrdyBeY2y80L0HQzbpAVgmEww5lJIu7zQhLvs7L3EgardJ8LrI5JWX6NXgxqSjqKeeivsvYTF2FrtyLZFJsCxA27lH6DGmANSX2q3bdXqCx4soiLP3KXf0Eg5uMU4bOOTkv5kuVzTawNg67sWlSZw7nuP%2BF7fNEFPvLe6mnJrXubWgSAEdlrkzK5jB1o1oxkHwjUg9uMKtnx0qR0kIjt3K1l1ASGuKcD%2FKJm1IrmS8VlXD1s5b743NKfJgozJrN3WFJ3qOxyNWtFUZErCqu7iVpVfajyai1Q79Co22zLgdAiSg9iapzBefbyEP9aAbiq5ZFgieDnOFsA1UI6Up6p6XAs5TinUIg2GvYGW4aIayjCH%2FSI2wQkJQYsalVONzu5LRYxy0MLGxyckGOqUBoVnvRqjSVUTNnv1CvU4KbTVY%2B9AK80GnXc23ICY71GiCxSjMssXuk8YXcSf2H9Nt2zunn7T95yvAzJ2erkEw3HILeaH3uKOJeiizOcW5IUTAhJsGSBunYyYmDWSAuzto3aOSRjo7QvQX%2FCXSR37qjo7%2FX%2F642fUMXaxzMwiUE82LgDO4djT2iSqMn%2BhANbesNnOaIcBgeOaPCXc%2BntX67Z5vSUXa&X-Amz-Signature=a22d63c7c46358ee048322db4004c604905bd4456ef9847677fe55d43c64c9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUA75ZFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4hUq5LfKYDLWlQ3fO6JjxuBs3owBs2rZY1tpfTfBmbwIgQucXklWKmHbkujQf2UP%2BPNhHKhtL6smrT6IywYoRyvwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAFTRMW%2FInCc7dpPcSrcA%2BT0XP84lKCgLpStgcOhUees5vqUiJ8YT6fI9itj33xNZJ8dU8zWkxJRJDw%2FuduAGpnpt8SB4afq9kV4SGBNTHPb6sNwukpQDDyW4XwhrIKZVIp64rNRRMX93rvkLzUDR6Gk%2BZLCavgvuju2VJmp9kAL7FtjCuwmXxfJfNS4yW15%2FKiXTeYB4DcejsiKy8P%2FW5pochhdNCHv%2F2pU%2F5RQFfy3jXdOTurvo3RdTRjeVL6%2BQw8%2FPv%2FdWcnrdyBeY2y80L0HQzbpAVgmEww5lJIu7zQhLvs7L3EgardJ8LrI5JWX6NXgxqSjqKeeivsvYTF2FrtyLZFJsCxA27lH6DGmANSX2q3bdXqCx4soiLP3KXf0Eg5uMU4bOOTkv5kuVzTawNg67sWlSZw7nuP%2BF7fNEFPvLe6mnJrXubWgSAEdlrkzK5jB1o1oxkHwjUg9uMKtnx0qR0kIjt3K1l1ASGuKcD%2FKJm1IrmS8VlXD1s5b743NKfJgozJrN3WFJ3qOxyNWtFUZErCqu7iVpVfajyai1Q79Co22zLgdAiSg9iapzBefbyEP9aAbiq5ZFgieDnOFsA1UI6Up6p6XAs5TinUIg2GvYGW4aIayjCH%2FSI2wQkJQYsalVONzu5LRYxy0MLGxyckGOqUBoVnvRqjSVUTNnv1CvU4KbTVY%2B9AK80GnXc23ICY71GiCxSjMssXuk8YXcSf2H9Nt2zunn7T95yvAzJ2erkEw3HILeaH3uKOJeiizOcW5IUTAhJsGSBunYyYmDWSAuzto3aOSRjo7QvQX%2FCXSR37qjo7%2FX%2F642fUMXaxzMwiUE82LgDO4djT2iSqMn%2BhANbesNnOaIcBgeOaPCXc%2BntX67Z5vSUXa&X-Amz-Signature=6b2930ed1380b1d82b47746f3fabe914085faed97583d3327bd5ffc06e97c550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
