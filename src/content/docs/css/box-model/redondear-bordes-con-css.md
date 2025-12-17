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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2DBBJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFchnJUShCtx08rdGjAMvk0Vvh3M%2BFPqM0UP9cNNCI3yAiBC7ZIv7FH5oaacv2KmXwMyf7SZY8yA3VClIDX8imlplyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMupKZDuqb8XYS%2FqVxKtwD3B62JSkk0sZX6GBUvBU7TVlGTpn2yYFHql2uhtIDdhDlDkqefWm91CYHhUKq77elz9s0yutzTIPv7EZEImdeb7rMXzxRFMcUaFd77Kb5mbmpD0CpbFsgmVRh%2FerVHKcIKZSHoE4X07OTUW7fX8uZ6EodFnH7wLBr1sZ49oPQlFO0BE80HP7aOB5y0%2FxAJXa9uGuLh3zao7diWa83WhzzsDJBi9wvcGvmP0dEe072xENPqUDVWmkN%2FBokKZLTuEwiRCFTuGjTlembeyx6YkAp48BTqrrXbbXlrBoI92tqgk%2FkRE3dMEnuTsRYqQENmEdTk8l3ortL4JweBkK10Hoq60t76TX0ciCiGvgCwP37zZ7o6ikQHC3cAjkqcJ4wBcJV%2BzMwIqyFHV3wlrvSDT1O2Abz239CyaJagytAJ3KXM1wCXRkyC%2BKEKVg5HebFPYknit33pfrCg1cF3hfINjS%2FTxB0nezFS9YUqGQBXtWycOOl%2B3K63HxtcUP4nD6qt6lKsqfVVFIt%2BAyWCdRpujwsNy7CYJ9NSFV9uxjNuhlo95Nun%2BoYId%2Bjiq9M%2BOczF164qHDCsue9FMTPtyrs6JehgoHZHIuKz8n5bpAkSjy1UOfElZytrIe7a95gTosw%2Bv%2BKygY6pgFbBOW4%2BGd%2Fq7wFKmOkfl2glI7hPb3F8ED6o6BYHKxtC77zoahpSzdwStPffv7qeszc4h5bCSJVEAMeYvsuOnslo5HNeKB0l82QgOEDMpipW8jzV6GPSTHgtRDK2X8Mw5N244aXoRS7jnSI2ol2pqUYp3oo3kgVOhQgB4mdwzW4D2SXyKoXesJZeO8pZxfnLH7gocONKv60u0rtdVmUmRv2E%2FfhzEdl&X-Amz-Signature=786f9194c8b92679f92baa3aa3165fb1c0cf68479c4bdd8c4eb2c3edfd760a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2DBBJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFchnJUShCtx08rdGjAMvk0Vvh3M%2BFPqM0UP9cNNCI3yAiBC7ZIv7FH5oaacv2KmXwMyf7SZY8yA3VClIDX8imlplyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMupKZDuqb8XYS%2FqVxKtwD3B62JSkk0sZX6GBUvBU7TVlGTpn2yYFHql2uhtIDdhDlDkqefWm91CYHhUKq77elz9s0yutzTIPv7EZEImdeb7rMXzxRFMcUaFd77Kb5mbmpD0CpbFsgmVRh%2FerVHKcIKZSHoE4X07OTUW7fX8uZ6EodFnH7wLBr1sZ49oPQlFO0BE80HP7aOB5y0%2FxAJXa9uGuLh3zao7diWa83WhzzsDJBi9wvcGvmP0dEe072xENPqUDVWmkN%2FBokKZLTuEwiRCFTuGjTlembeyx6YkAp48BTqrrXbbXlrBoI92tqgk%2FkRE3dMEnuTsRYqQENmEdTk8l3ortL4JweBkK10Hoq60t76TX0ciCiGvgCwP37zZ7o6ikQHC3cAjkqcJ4wBcJV%2BzMwIqyFHV3wlrvSDT1O2Abz239CyaJagytAJ3KXM1wCXRkyC%2BKEKVg5HebFPYknit33pfrCg1cF3hfINjS%2FTxB0nezFS9YUqGQBXtWycOOl%2B3K63HxtcUP4nD6qt6lKsqfVVFIt%2BAyWCdRpujwsNy7CYJ9NSFV9uxjNuhlo95Nun%2BoYId%2Bjiq9M%2BOczF164qHDCsue9FMTPtyrs6JehgoHZHIuKz8n5bpAkSjy1UOfElZytrIe7a95gTosw%2Bv%2BKygY6pgFbBOW4%2BGd%2Fq7wFKmOkfl2glI7hPb3F8ED6o6BYHKxtC77zoahpSzdwStPffv7qeszc4h5bCSJVEAMeYvsuOnslo5HNeKB0l82QgOEDMpipW8jzV6GPSTHgtRDK2X8Mw5N244aXoRS7jnSI2ol2pqUYp3oo3kgVOhQgB4mdwzW4D2SXyKoXesJZeO8pZxfnLH7gocONKv60u0rtdVmUmRv2E%2FfhzEdl&X-Amz-Signature=4413d4a0cca443942996aa0c9262af6be2f488c442b61fff78b9a5666e5f6ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
