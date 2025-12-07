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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XDTEBN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe4KEubkguFuf%2BrL6W1sdxyu%2BivXbmrCtPVUdyzGRy0AiAW0dG48UsWJGOG6%2F2Hz7g2D17l2mhNs%2B%2FTEWPvEA6yPyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SYMXdYziGT6cCBvKtwDu9WiHZPUb%2FKWURjfu80%2B2Xd9GLCGnmJDtD%2FobgzUS922xxTAFI%2BWDApxF3Tbr0VB%2BYDwbekH8KYMKswwOcZABY85J%2BNpwH4GIX0b2iahjTqVGUlQP7vXCN1ePVorSLQgBczosVncghJsN2%2Fj4adSFsvI5lnE0jkzVd2sE0s%2FHtq7BDdSjAtP51uXmA7rppzF%2BLZCI%2BJrGiCRc06AKKLX4sCARqwpGwEChwMHP%2Bgo7DKW46pltVpQAK%2BqeNTVDkcrMdG7tU17ev6KVH3wm5%2BJGYXbpMtfP62i15kPmXVZTp7Y86jDTpU4o5Z8gjfVFF5WGrACVZ%2BHIUkAvL%2FQxHSsEx3WMPt6pLp3Qfc6dNP1gbdwGWsU3jDdCRcMdNi35fE67SFijq7xKtY3tevrX%2Fr1itEB7Q%2Be0oIcdQ2osFhLo9JMlbeDGzr7juzacBm%2BZdpAyj4arUjlwmDZMuXCrE%2BFhwsXlDE96gSFdHDjQ%2FdItMWczYKwl4ZBKlxzFrBc5B8P%2FPp09iQR72gjtAfEOvjWS7O5U%2B9%2FIYeQk6dUEmuMgphzhb%2B6ivg9VyPm21UZM97BS5QbhcKYK2C5ZMqGipIfUulTRbgYZvVgSMx8nAEkk67MOE9Zr9BUxAr6htcw6P3SyQY6pgF7pl5kojxBd6BTNzLIWX%2Bm7w5n05R0fVTmpR2vR6c%2FB0N%2BbI0U0EZBIlyToWaiGmiZDU9YdM5KN1S5TFQjt%2B9V2guzBuBHMtfdJ22RCUJHgZAthIZZSE69piDtvKPryPHGHVeBaKH5Qufr7DRxoEqCJdsV%2BKTzyfhN9lcb%2B9FmaUV%2FWiqjHZ0NnreeBKVy6PCmzwhjTgdCKBTktz47klGU%2B%2BVD1zWr&X-Amz-Signature=bc128a7fc6db9fbf02b42a45249ee40d2092c502aa2422ef8269c933a1f77ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XDTEBN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe4KEubkguFuf%2BrL6W1sdxyu%2BivXbmrCtPVUdyzGRy0AiAW0dG48UsWJGOG6%2F2Hz7g2D17l2mhNs%2B%2FTEWPvEA6yPyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2SYMXdYziGT6cCBvKtwDu9WiHZPUb%2FKWURjfu80%2B2Xd9GLCGnmJDtD%2FobgzUS922xxTAFI%2BWDApxF3Tbr0VB%2BYDwbekH8KYMKswwOcZABY85J%2BNpwH4GIX0b2iahjTqVGUlQP7vXCN1ePVorSLQgBczosVncghJsN2%2Fj4adSFsvI5lnE0jkzVd2sE0s%2FHtq7BDdSjAtP51uXmA7rppzF%2BLZCI%2BJrGiCRc06AKKLX4sCARqwpGwEChwMHP%2Bgo7DKW46pltVpQAK%2BqeNTVDkcrMdG7tU17ev6KVH3wm5%2BJGYXbpMtfP62i15kPmXVZTp7Y86jDTpU4o5Z8gjfVFF5WGrACVZ%2BHIUkAvL%2FQxHSsEx3WMPt6pLp3Qfc6dNP1gbdwGWsU3jDdCRcMdNi35fE67SFijq7xKtY3tevrX%2Fr1itEB7Q%2Be0oIcdQ2osFhLo9JMlbeDGzr7juzacBm%2BZdpAyj4arUjlwmDZMuXCrE%2BFhwsXlDE96gSFdHDjQ%2FdItMWczYKwl4ZBKlxzFrBc5B8P%2FPp09iQR72gjtAfEOvjWS7O5U%2B9%2FIYeQk6dUEmuMgphzhb%2B6ivg9VyPm21UZM97BS5QbhcKYK2C5ZMqGipIfUulTRbgYZvVgSMx8nAEkk67MOE9Zr9BUxAr6htcw6P3SyQY6pgF7pl5kojxBd6BTNzLIWX%2Bm7w5n05R0fVTmpR2vR6c%2FB0N%2BbI0U0EZBIlyToWaiGmiZDU9YdM5KN1S5TFQjt%2B9V2guzBuBHMtfdJ22RCUJHgZAthIZZSE69piDtvKPryPHGHVeBaKH5Qufr7DRxoEqCJdsV%2BKTzyfhN9lcb%2B9FmaUV%2FWiqjHZ0NnreeBKVy6PCmzwhjTgdCKBTktz47klGU%2B%2BVD1zWr&X-Amz-Signature=254df9f4744eacdecde6030d38b9d732665eb1e37c18243ff06cf76c232b560e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
