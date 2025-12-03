---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTO2M4NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFCKECLzkGmGCWkbbo0oIIYutnrZm949IemPz3rF%2FbkUAiATZru%2FFGNW%2FGTlAb5vhAMTOD1AuQ7Mp8fmYH9w5ozVvyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM%2FicGDZJqKYKhtMFLKtwDPEF8ILmSW2%2Bh6urH3p9vTLAzoeco8O8hJM0Q2mwFSD9Zhehnv6H8Q52Ln%2B%2Fcs8k0uXrsI93G2e6PSMpDyeAmsSAI7Hq730R4opamNtIqATVckmzSIQ0c%2BzrSCQYgPnzq03vjBBAzsYOD6NJWTU9kBSv2IPByiylv89DOXozzotOm6pr6LK3Y4UE6A36dSp2Ni9JLSsDbut%2FK8CcFPW40t5ptvX%2FCj4Dw2NOzKdgoMh%2FAN7a24qmNOMDDUQxi8Rj%2F%2BwWo3CfvvIaqqFygU9IhMilKYUgeQv1qJRzrbpiW7LAx1VJ3NGoWIY09mIxHQt0OeN4xSoJBp4v5nx2ff35i8fqM8IRh6GiweNZvYGgrzSqrg9dqpdoVptASy8WhAgMKajL5HkfCRyElgNbytug6l8uvRYeAj1RoCK0zTVV02fQkz%2FUdJqRvvEt3MZTmunqx3XNpstvE8LfTvGFuuhlgSFjaUd0chQlrjCj7VAfRGYEE5UNk%2BUZLOgdn31bug4lmCsqsq29CFdyAf6OxusJx%2FSCkl80MXX2zVIlEePLKX6YMC2m0KXJ0HbdHZJZZnya7HR5EhY2Jx6qrlnY6R%2F7SDz9nxptHKAT97x%2BKXL8iMjH4QU1jWPcaXPBHSOUwk73CyQY6pgEX%2FPu4eZM2U%2BfuophEU1vzfncV6w8R73au2%2BTozEwWSRTLgn2WE8UrmKUEjigW92UabE%2B8zea42PzAy0B2Yb9q8jYwAnUkvr8aXLfxg5iYPETbEGzYYwCgO7gmX4FqDeX%2Bwowg5rLBN5qYFJHdpvF773TCbl5PB%2FVhrG1d%2Bvl%2BxsUyZ2PF676%2Fd86AF8waOdhMLuMTdD8YBcNGKEJwNDmvE6EwLDXM&X-Amz-Signature=dce4d61c4e13cd15143cd5e053078c9c8e3911578bcbb85c101daa4bdfb78e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTO2M4NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFCKECLzkGmGCWkbbo0oIIYutnrZm949IemPz3rF%2FbkUAiATZru%2FFGNW%2FGTlAb5vhAMTOD1AuQ7Mp8fmYH9w5ozVvyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM%2FicGDZJqKYKhtMFLKtwDPEF8ILmSW2%2Bh6urH3p9vTLAzoeco8O8hJM0Q2mwFSD9Zhehnv6H8Q52Ln%2B%2Fcs8k0uXrsI93G2e6PSMpDyeAmsSAI7Hq730R4opamNtIqATVckmzSIQ0c%2BzrSCQYgPnzq03vjBBAzsYOD6NJWTU9kBSv2IPByiylv89DOXozzotOm6pr6LK3Y4UE6A36dSp2Ni9JLSsDbut%2FK8CcFPW40t5ptvX%2FCj4Dw2NOzKdgoMh%2FAN7a24qmNOMDDUQxi8Rj%2F%2BwWo3CfvvIaqqFygU9IhMilKYUgeQv1qJRzrbpiW7LAx1VJ3NGoWIY09mIxHQt0OeN4xSoJBp4v5nx2ff35i8fqM8IRh6GiweNZvYGgrzSqrg9dqpdoVptASy8WhAgMKajL5HkfCRyElgNbytug6l8uvRYeAj1RoCK0zTVV02fQkz%2FUdJqRvvEt3MZTmunqx3XNpstvE8LfTvGFuuhlgSFjaUd0chQlrjCj7VAfRGYEE5UNk%2BUZLOgdn31bug4lmCsqsq29CFdyAf6OxusJx%2FSCkl80MXX2zVIlEePLKX6YMC2m0KXJ0HbdHZJZZnya7HR5EhY2Jx6qrlnY6R%2F7SDz9nxptHKAT97x%2BKXL8iMjH4QU1jWPcaXPBHSOUwk73CyQY6pgEX%2FPu4eZM2U%2BfuophEU1vzfncV6w8R73au2%2BTozEwWSRTLgn2WE8UrmKUEjigW92UabE%2B8zea42PzAy0B2Yb9q8jYwAnUkvr8aXLfxg5iYPETbEGzYYwCgO7gmX4FqDeX%2Bwowg5rLBN5qYFJHdpvF773TCbl5PB%2FVhrG1d%2Bvl%2BxsUyZ2PF676%2Fd86AF8waOdhMLuMTdD8YBcNGKEJwNDmvE6EwLDXM&X-Amz-Signature=0aa3c0627cb77bc4d6e15cc0514b70985e67b34699c253eed243265a8dccfee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
