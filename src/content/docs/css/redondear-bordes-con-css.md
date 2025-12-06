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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWNIABW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8e2vOFBn121ZEpCF7zMOzgpInwxoyx8066Of1eepK3AiEA7qj3Nxsy36nbreDpbzzAdLfKlM0M8hd3I%2FLDVc9Urucq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEl%2FcCTr7yRqht0AlCrcA5dyREHDTcbLr8FWILzQjvLnG6kS1Pa2aCMCcHCX%2FRceBpP8ghUIfVDAXOKBaI4hfAXD6Th%2FAifB2uLeH4%2B1c0VfzUk7aNlU3hEJ3h1ZHNhBivoSkP8IxirbVSP1f4R8wSlljF01P0pucwUvxnsc5PrSoBQScwrbmVQE3Dz8s2Q4Qpn34PMLymdHRPANNN5Ga9rho0kqACFKDlsj1hpdwM%2BDS7yyLwyDdHI2QHgPF56UXkXqjjmKbfXErT457Zd3GkO2xpokFDPM75wsmy0qKjx7dnP1RfKZLJbZ%2FHI0FJJG1e9O8w1Nn8Gz4%2Fiz4Xu9UhL9yzMOTPMKfrgTUU2whxEZ8r7cMwbRBogc0kE371lYK71a39mlvro8rzrefYsDvmgCCxZG6Z9kPfteje7SVUEG%2BqpyBPwZeZdPHm10F5R3K8S%2FxdLIs6s0Wh5XBNRVjXB%2FXkyYWqiCCJ7tEcD3cE9f%2Frot%2BDAM9BVryfj5HpDc7cyDjP2CRNZ05IE5ujBIXiQ%2B6V33HgXSHx1it3V%2BlqVqrjVB6uXgKg%2FJx4WNUXb2cYGJIE2eUMVtue9hQnF6MukG%2BbGxrQXKeYzf9yJLP1DUYF9uKzouOH06lA0K0MeUzMlkNpILEg8Z4NrYMO%2BJ0MkGOqUBCzTzmNdTMMFSvJlqiCh2kWxNZsBidqKeTX6cQYpf1tga7Whysu16FdA7jzxQnObC1vXejpLWpi9PlrZdtjUfIX09WB0Z27Gq8VYYPG6%2BmAyobRIkKhLPCCd4LOSa05wwNfxuL0oIdrnk9wglGLQI6NzvXb3K0Qka7z58md0cahFJcB0KdAVPIJNkd22Y24re5LJccLIybu61RzHdq5dq4fXopXg8&X-Amz-Signature=fc5d4f9e690f9f9a9510dee1aab35c24b2aa65c52355c238c97d2dfa548b509a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWNIABW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8e2vOFBn121ZEpCF7zMOzgpInwxoyx8066Of1eepK3AiEA7qj3Nxsy36nbreDpbzzAdLfKlM0M8hd3I%2FLDVc9Urucq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEl%2FcCTr7yRqht0AlCrcA5dyREHDTcbLr8FWILzQjvLnG6kS1Pa2aCMCcHCX%2FRceBpP8ghUIfVDAXOKBaI4hfAXD6Th%2FAifB2uLeH4%2B1c0VfzUk7aNlU3hEJ3h1ZHNhBivoSkP8IxirbVSP1f4R8wSlljF01P0pucwUvxnsc5PrSoBQScwrbmVQE3Dz8s2Q4Qpn34PMLymdHRPANNN5Ga9rho0kqACFKDlsj1hpdwM%2BDS7yyLwyDdHI2QHgPF56UXkXqjjmKbfXErT457Zd3GkO2xpokFDPM75wsmy0qKjx7dnP1RfKZLJbZ%2FHI0FJJG1e9O8w1Nn8Gz4%2Fiz4Xu9UhL9yzMOTPMKfrgTUU2whxEZ8r7cMwbRBogc0kE371lYK71a39mlvro8rzrefYsDvmgCCxZG6Z9kPfteje7SVUEG%2BqpyBPwZeZdPHm10F5R3K8S%2FxdLIs6s0Wh5XBNRVjXB%2FXkyYWqiCCJ7tEcD3cE9f%2Frot%2BDAM9BVryfj5HpDc7cyDjP2CRNZ05IE5ujBIXiQ%2B6V33HgXSHx1it3V%2BlqVqrjVB6uXgKg%2FJx4WNUXb2cYGJIE2eUMVtue9hQnF6MukG%2BbGxrQXKeYzf9yJLP1DUYF9uKzouOH06lA0K0MeUzMlkNpILEg8Z4NrYMO%2BJ0MkGOqUBCzTzmNdTMMFSvJlqiCh2kWxNZsBidqKeTX6cQYpf1tga7Whysu16FdA7jzxQnObC1vXejpLWpi9PlrZdtjUfIX09WB0Z27Gq8VYYPG6%2BmAyobRIkKhLPCCd4LOSa05wwNfxuL0oIdrnk9wglGLQI6NzvXb3K0Qka7z58md0cahFJcB0KdAVPIJNkd22Y24re5LJccLIybu61RzHdq5dq4fXopXg8&X-Amz-Signature=7ba43d98dfb50b381f04234a6cb8abd12483dc25a1a0bcf4961867b6e9f41d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
