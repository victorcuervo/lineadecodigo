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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32ZZPNZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzkMVpOVlzNfdic6YHFw556BJUQAtbJvtG%2BjHHM2xCLAIhAKZp5ZS2UwwbE%2BDiXXDHgWKRfFd5GVlaiFkORCSilZ%2FdKv8DCHcQABoMNjM3NDIzMTgzODA1IgyH%2FDtgOlM%2FNJuQzzMq3ANd%2BIOD7fdcnXmV5zX5c%2FPFm%2Bu%2FN8AlfiUEkOUn9ZsLqYJeamIiiXzILFzYanJncEa0rNkL1sZIWF0Z8Zhs7kn7l2ZYr92gRRD9naHcvDZr5%2F%2FaVPt7%2B%2BrOslPjPing8Ecu6f%2FOPgtpA6exQJ7eCjhqNhgp5GFjWr9NluryAo%2FVpELi8p86ap2GznsagPublRQRnjryZhGryTexb%2F5B8tOsmpcBkhTjwvHvBuiUh38N%2FDkDkqvGeJRf5ORmjrjbY0XH3mq3vkl%2FPAec1bqpBL677sVwlJLos6%2FYIOxSf0lHK1wJtGTT6vnozc%2BPKyeq2bN3BhjDvafgP8Kaa2P5Bprxq3IBzmmXEUPIlAKUGjrjh3j1AluSRHckL0qYgU7caAvmjGpH3PUoFjThrLk4HpDfX6LBUBAy3sW2uNn8pEopXkJRoh%2Bc6qmwVxYFCqEZLZLhnNlXc61Pa02ywQo1HCWsBTSKIqLxa7a3uNqAb%2Br5A5fGicvf7MxSfDYsdVwOA0nGxbEwwR6rX%2BdcHyhD0wEow87rUrxGckfvCWDLrdOpm%2BLHByLdXjvuEMYBFQSL4mIWQDLYPU%2FXOIXGwX3L2maQo%2FwEGGMAHnMEg0ue9lnEHUDV5StYFdE8R0Fw6jDkgonKBjqkAcCbJAU5QMD4zKBLKgJGGrxQqL5KL5WiuXMz04Y8MGmm0RIl%2FbEboL7UY%2F2fvHjRwF7sWU1D2dQMxjQnngqKSodv3H8JeniJDDbPumoWegmlLUTNFyXqwNdTVJxjAsIXFnkM2Mst8rU%2FbNOOMgeQrQHKOImg5lN%2BD4rpTDCOkerSwpmvZ1fzFN5%2B1f%2Bu%2BgLbbSM20ZJAtCgVQ3D07osbTtpNru83&X-Amz-Signature=fda9d2430ae9f8fba686af8375a0b85929c89a421ae64045464a9926ae00048f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32ZZPNZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzkMVpOVlzNfdic6YHFw556BJUQAtbJvtG%2BjHHM2xCLAIhAKZp5ZS2UwwbE%2BDiXXDHgWKRfFd5GVlaiFkORCSilZ%2FdKv8DCHcQABoMNjM3NDIzMTgzODA1IgyH%2FDtgOlM%2FNJuQzzMq3ANd%2BIOD7fdcnXmV5zX5c%2FPFm%2Bu%2FN8AlfiUEkOUn9ZsLqYJeamIiiXzILFzYanJncEa0rNkL1sZIWF0Z8Zhs7kn7l2ZYr92gRRD9naHcvDZr5%2F%2FaVPt7%2B%2BrOslPjPing8Ecu6f%2FOPgtpA6exQJ7eCjhqNhgp5GFjWr9NluryAo%2FVpELi8p86ap2GznsagPublRQRnjryZhGryTexb%2F5B8tOsmpcBkhTjwvHvBuiUh38N%2FDkDkqvGeJRf5ORmjrjbY0XH3mq3vkl%2FPAec1bqpBL677sVwlJLos6%2FYIOxSf0lHK1wJtGTT6vnozc%2BPKyeq2bN3BhjDvafgP8Kaa2P5Bprxq3IBzmmXEUPIlAKUGjrjh3j1AluSRHckL0qYgU7caAvmjGpH3PUoFjThrLk4HpDfX6LBUBAy3sW2uNn8pEopXkJRoh%2Bc6qmwVxYFCqEZLZLhnNlXc61Pa02ywQo1HCWsBTSKIqLxa7a3uNqAb%2Br5A5fGicvf7MxSfDYsdVwOA0nGxbEwwR6rX%2BdcHyhD0wEow87rUrxGckfvCWDLrdOpm%2BLHByLdXjvuEMYBFQSL4mIWQDLYPU%2FXOIXGwX3L2maQo%2FwEGGMAHnMEg0ue9lnEHUDV5StYFdE8R0Fw6jDkgonKBjqkAcCbJAU5QMD4zKBLKgJGGrxQqL5KL5WiuXMz04Y8MGmm0RIl%2FbEboL7UY%2F2fvHjRwF7sWU1D2dQMxjQnngqKSodv3H8JeniJDDbPumoWegmlLUTNFyXqwNdTVJxjAsIXFnkM2Mst8rU%2FbNOOMgeQrQHKOImg5lN%2BD4rpTDCOkerSwpmvZ1fzFN5%2B1f%2Bu%2BgLbbSM20ZJAtCgVQ3D07osbTtpNru83&X-Amz-Signature=fa1aa17927f2a608f5d2f610d4f17670e8a3b1f577b48fab197e26af08abe153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
