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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7A4MMK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClm1WArm645XZwEkv1JOhuMRH0Szavjnh6NYhPLrGpdQIgGWbhTZJ3Y%2F45dwostj4cjxZINtvQBrXEsAHvjd%2BENlYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHt%2BtT53lcavpnPeCCrcA8SYza%2F%2FVUnVYGB3LmSFMiIyUiTcQMDnizMWjs0ogBvm%2FkARMDhgBDuCkegZqPDEjNkP2IcJJ5dg5JavZ1xJzI4Y7viy%2BhD5YYdMe0ZLOEeLwipH5UoKVkGV%2F%2FSaeayB4wSZnjMlryz6Q7UxaofIe0hLsgG%2BdZulIEt4xDvNFytqayWdB1%2F60Mts8zuy3Yy3Fd%2BvHUABvQ%2B%2BvdIaNg9P06F0waHzyz5j55IA4TvuS5RXXp8x3advKoP%2BtcCyVfqQteE1vzD1N8DUiXVIDLnDSauy02T6owQx3YeOLEsMsd2qQ5L15OTgE3L1Vqf6RYukEmnpAa3tpR3FYldvzEY87Iwh57a7PehINkP5WyXRVoq5pu6qDFfWOyegHfIo%2B4tdspsKVNd5FseUmsknGzNXwgsmPrWaR0fmtoMaGWUxxbK9DHwxPF2i8xt4ATxHmDikJaVPZeE8dd4GbB80MFxkvUs%2BR%2B1M13T3fZlHRfkQOT8rOppL0%2FCVMu6XZ6h%2BInN4qXKTHgaH%2B3hvOOSqyXY6vneEQs6M8CXI7L3KRMH%2B1PpC3qBexSQGsnN5ep8JcrjKGN66irGkOptD4oPnQCHMbbIlBb2TAZGYw3aOCoLiHOjor5JKmUMLaHbRgCNqMLvty8kGOqUBv%2BrYetnSRT2xxMDa462P3ui4WFWCymwbuX2G6wHc1gw0SZPZ5sRQKSatDGAwaFOGsDBIhammbSgqI%2FfzywmHnxURRlGj%2FJLQO4RpaimMlMe3z7DH%2B%2BcnWbI5LjWSSeyJn2atxdN721RcPoA3Iu6FmS1jNguHFW6V4CqIEFH%2BGp1b%2FiuWFiurqZbCDRr5mNwX5s6QpUDGP%2FXVKCf9f%2FHrMgvD7U0o&X-Amz-Signature=af63763522170a8ab47530c09ba1b3d951e96b79a7623dc72f2eca737101313e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7A4MMK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClm1WArm645XZwEkv1JOhuMRH0Szavjnh6NYhPLrGpdQIgGWbhTZJ3Y%2F45dwostj4cjxZINtvQBrXEsAHvjd%2BENlYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHt%2BtT53lcavpnPeCCrcA8SYza%2F%2FVUnVYGB3LmSFMiIyUiTcQMDnizMWjs0ogBvm%2FkARMDhgBDuCkegZqPDEjNkP2IcJJ5dg5JavZ1xJzI4Y7viy%2BhD5YYdMe0ZLOEeLwipH5UoKVkGV%2F%2FSaeayB4wSZnjMlryz6Q7UxaofIe0hLsgG%2BdZulIEt4xDvNFytqayWdB1%2F60Mts8zuy3Yy3Fd%2BvHUABvQ%2B%2BvdIaNg9P06F0waHzyz5j55IA4TvuS5RXXp8x3advKoP%2BtcCyVfqQteE1vzD1N8DUiXVIDLnDSauy02T6owQx3YeOLEsMsd2qQ5L15OTgE3L1Vqf6RYukEmnpAa3tpR3FYldvzEY87Iwh57a7PehINkP5WyXRVoq5pu6qDFfWOyegHfIo%2B4tdspsKVNd5FseUmsknGzNXwgsmPrWaR0fmtoMaGWUxxbK9DHwxPF2i8xt4ATxHmDikJaVPZeE8dd4GbB80MFxkvUs%2BR%2B1M13T3fZlHRfkQOT8rOppL0%2FCVMu6XZ6h%2BInN4qXKTHgaH%2B3hvOOSqyXY6vneEQs6M8CXI7L3KRMH%2B1PpC3qBexSQGsnN5ep8JcrjKGN66irGkOptD4oPnQCHMbbIlBb2TAZGYw3aOCoLiHOjor5JKmUMLaHbRgCNqMLvty8kGOqUBv%2BrYetnSRT2xxMDa462P3ui4WFWCymwbuX2G6wHc1gw0SZPZ5sRQKSatDGAwaFOGsDBIhammbSgqI%2FfzywmHnxURRlGj%2FJLQO4RpaimMlMe3z7DH%2B%2BcnWbI5LjWSSeyJn2atxdN721RcPoA3Iu6FmS1jNguHFW6V4CqIEFH%2BGp1b%2FiuWFiurqZbCDRr5mNwX5s6QpUDGP%2FXVKCf9f%2FHrMgvD7U0o&X-Amz-Signature=9ca28d4d8ad654b2aab7ab6aa7c92655bd5a7e2d6c90c31ca8ea9ac1c3e2222f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
