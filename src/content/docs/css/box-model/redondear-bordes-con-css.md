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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2LCMOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP2lVlvUWShCAFqM%2Fc8M%2BGOUB9lvXZryCqxQZFbq4TywIgTsBAi30KDeN86bEKX8Gu8Ivy3fHcnhZkuKaJ0Sw%2FLocq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP9IHPoLK9n%2BTMH4hyrcAzrTct1URXQI%2FcEK1LqyCcRQdAL04sN%2FpMyL%2FspItrXt95UBi3il7hys54Ie1VdcseEtPDULuR1dYrNX4S%2B4agFex%2BaAuZcH5ZbNFOHA1D%2Bzy981H2JVfZk0Xc0mk%2B0eNJMPZpJE3g3BeMT3uaDXdKPy27BH3NHSgwg6LnboJ6HNF5GaZ2S11fKGORt56R%2B3XkDO3QJ4F1wB%2Fv2PUyluvSYhg5uRwFpcH3fk%2BWIr%2FK7mlep0H89AodHff1fx0J%2FBAe4ZCWjDj5RuQ4iTEUxD7bZgT2ojSXsnm1uQwM%2FsSt7ICOqZJavRusXX8kB1c4orKzm%2F9MGV85ebKT08nM0e9pZ8PO23UE3gW5b9HbUCPaJgSwJN2M6FboRM8NPL5bVtKGWb4LIphjqC1Xij92iB4b79dnKVQHEhyJrGLvlhi%2F8C8usxxzyl5EEZ97QH4vrh4Cvr6nl%2BLx7iegTw0Ct5PFpj%2FyHwbRMdRKke4i6OanBlgGiLFBxT%2BTE1aUw0Rtyrg2GGjJLmhCiNBntncMPstQmN5THJ8kyWyoIjGthXP6x9QC7r4qPp%2BXXCIxYaQzukecTCSkgikdOzkds1f%2Fk8JL2ESEfq6Dr1m73PWq1LZBW9IJ0IHjkOA%2BQUDghEMK64icoGOqUBmL7JZIs4zV%2FzmTvX5U8O%2BeUAtEYPbUmwQ5cMuFUm3AD7%2Fl4QDEl3sw3dgdoMX8A0w6EnlWMDzmH4JhPqCaYoNnbt5ClMbOBTKdBoq9XaiP2ljfQfjXGZPQUQPWPoRKgS89pYXthengQGPpg51ERZcQfL2uj%2FDRFq6QESwwSqyyWPUZdNHlOSwiBg6IrhkoW5HxKezcAkdXN6FSZjryFPEZDlVhJy&X-Amz-Signature=44bc770b68de223464e49c67c9a46ecbee984be4e6b82fd973201e564702666b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2LCMOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP2lVlvUWShCAFqM%2Fc8M%2BGOUB9lvXZryCqxQZFbq4TywIgTsBAi30KDeN86bEKX8Gu8Ivy3fHcnhZkuKaJ0Sw%2FLocq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP9IHPoLK9n%2BTMH4hyrcAzrTct1URXQI%2FcEK1LqyCcRQdAL04sN%2FpMyL%2FspItrXt95UBi3il7hys54Ie1VdcseEtPDULuR1dYrNX4S%2B4agFex%2BaAuZcH5ZbNFOHA1D%2Bzy981H2JVfZk0Xc0mk%2B0eNJMPZpJE3g3BeMT3uaDXdKPy27BH3NHSgwg6LnboJ6HNF5GaZ2S11fKGORt56R%2B3XkDO3QJ4F1wB%2Fv2PUyluvSYhg5uRwFpcH3fk%2BWIr%2FK7mlep0H89AodHff1fx0J%2FBAe4ZCWjDj5RuQ4iTEUxD7bZgT2ojSXsnm1uQwM%2FsSt7ICOqZJavRusXX8kB1c4orKzm%2F9MGV85ebKT08nM0e9pZ8PO23UE3gW5b9HbUCPaJgSwJN2M6FboRM8NPL5bVtKGWb4LIphjqC1Xij92iB4b79dnKVQHEhyJrGLvlhi%2F8C8usxxzyl5EEZ97QH4vrh4Cvr6nl%2BLx7iegTw0Ct5PFpj%2FyHwbRMdRKke4i6OanBlgGiLFBxT%2BTE1aUw0Rtyrg2GGjJLmhCiNBntncMPstQmN5THJ8kyWyoIjGthXP6x9QC7r4qPp%2BXXCIxYaQzukecTCSkgikdOzkds1f%2Fk8JL2ESEfq6Dr1m73PWq1LZBW9IJ0IHjkOA%2BQUDghEMK64icoGOqUBmL7JZIs4zV%2FzmTvX5U8O%2BeUAtEYPbUmwQ5cMuFUm3AD7%2Fl4QDEl3sw3dgdoMX8A0w6EnlWMDzmH4JhPqCaYoNnbt5ClMbOBTKdBoq9XaiP2ljfQfjXGZPQUQPWPoRKgS89pYXthengQGPpg51ERZcQfL2uj%2FDRFq6QESwwSqyyWPUZdNHlOSwiBg6IrhkoW5HxKezcAkdXN6FSZjryFPEZDlVhJy&X-Amz-Signature=68d6b35eef43e1f2ce9e680a4afdbf86a9524b3a3ce779a2cf5a522b52b20eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
