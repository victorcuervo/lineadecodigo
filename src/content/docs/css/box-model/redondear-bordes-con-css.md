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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH4GQM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPqlhy7WH2Tm84d25vXwVbm15QcbTHg6YaygMeb4j2wIhAMDH2HzcNda5B4nt9FZHJI4E3b%2Bfumi%2FdrAVfjE9Z8geKv8DCHkQABoMNjM3NDIzMTgzODA1IgzzqOK7neVjZQ85%2FjEq3ANhzJGPIteizKukBuLicwBQ9IlEqCON28mD1Le6rvdNYLkwAeWMVz8FooC4L4a0VRkkcR%2FQHbTOtboBYOq2WLP4pk46qHM1azSn%2BFiY2nEF6SqwxbT0PpvCKGdUJMTsGX2bf4VAKbzGWVllC9s2xnZ0eB%2BnptSeovsdvrgMrWwut6UryHPAR7ggxI2F2ZnSPVSPHr1PWhzs13CLZbqcu5C6sfOA1Sbxu%2FkuKvQ0jaOQ7G%2BWwoLmnbykv3a2GkiicxWT374gsWdeQ0LDHpQ%2FEQ8H0q9zUn9kH5shpEht4Jvy9G%2BgTZ5uHU8nbn56VvifKs5kgQEIQIeJ0k%2B%2FVPyNPEFRf1pn1lyaK%2BzPxCQVOOqc0IqRhPDOY6qLuF2LU9z8BjVgmtTNzNXbLnRmxDuHJLAS2nvCjwc%2BpRz0jQXyvFQvG0uDlBILFk3oa5wJuvwBEqSLoo7TkzWED1VFJ98XYUou1CDcABDw10c98917D7HZDolAIpf6OvAWB%2BZdpyw%2BXA3dkiT0hgOAB4HcFzzSoniFdq3UQM0VynnYfjx0okrMQauamK12N0JfSthDdlT19H7y38WKghb%2Bl4%2BaQArFaigB0WlKf7DZrEKceuyh81llCLGCDQSV1CW%2BeFX8%2FzCz0onKBjqkAZQnAJ4Lxon%2BljQsmfrztppHs%2BCupNY2PbADPpDjxzmxFin1RqZkxVv3JVvvNmckNG6FazcsCXXM5Tp8Rvcw08IFgKFus76X6uEHdY6tCOMmwGFDbiVXxiiZDPaR%2Br%2BBWO%2BO8TrC4AwVKc0toJPBqT1ExrImvDYdNyqNcMX%2Bv7EyoQKxiHl2cs07gZ6mSFJ4CYfzBJjSSoa6BP3BaHae%2BUXsVHn1&X-Amz-Signature=ed3dfaf350e9dbad3930a0b8f762cd1862e7ed1ee02ed406f6a77e96d0c58789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDH4GQM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhPqlhy7WH2Tm84d25vXwVbm15QcbTHg6YaygMeb4j2wIhAMDH2HzcNda5B4nt9FZHJI4E3b%2Bfumi%2FdrAVfjE9Z8geKv8DCHkQABoMNjM3NDIzMTgzODA1IgzzqOK7neVjZQ85%2FjEq3ANhzJGPIteizKukBuLicwBQ9IlEqCON28mD1Le6rvdNYLkwAeWMVz8FooC4L4a0VRkkcR%2FQHbTOtboBYOq2WLP4pk46qHM1azSn%2BFiY2nEF6SqwxbT0PpvCKGdUJMTsGX2bf4VAKbzGWVllC9s2xnZ0eB%2BnptSeovsdvrgMrWwut6UryHPAR7ggxI2F2ZnSPVSPHr1PWhzs13CLZbqcu5C6sfOA1Sbxu%2FkuKvQ0jaOQ7G%2BWwoLmnbykv3a2GkiicxWT374gsWdeQ0LDHpQ%2FEQ8H0q9zUn9kH5shpEht4Jvy9G%2BgTZ5uHU8nbn56VvifKs5kgQEIQIeJ0k%2B%2FVPyNPEFRf1pn1lyaK%2BzPxCQVOOqc0IqRhPDOY6qLuF2LU9z8BjVgmtTNzNXbLnRmxDuHJLAS2nvCjwc%2BpRz0jQXyvFQvG0uDlBILFk3oa5wJuvwBEqSLoo7TkzWED1VFJ98XYUou1CDcABDw10c98917D7HZDolAIpf6OvAWB%2BZdpyw%2BXA3dkiT0hgOAB4HcFzzSoniFdq3UQM0VynnYfjx0okrMQauamK12N0JfSthDdlT19H7y38WKghb%2Bl4%2BaQArFaigB0WlKf7DZrEKceuyh81llCLGCDQSV1CW%2BeFX8%2FzCz0onKBjqkAZQnAJ4Lxon%2BljQsmfrztppHs%2BCupNY2PbADPpDjxzmxFin1RqZkxVv3JVvvNmckNG6FazcsCXXM5Tp8Rvcw08IFgKFus76X6uEHdY6tCOMmwGFDbiVXxiiZDPaR%2Br%2BBWO%2BO8TrC4AwVKc0toJPBqT1ExrImvDYdNyqNcMX%2Bv7EyoQKxiHl2cs07gZ6mSFJ4CYfzBJjSSoa6BP3BaHae%2BUXsVHn1&X-Amz-Signature=a2d09c4905eb243ee16f63d9d89998ba65842d1f9d2740361f3c1011030336e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
