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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4MJBEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYIL%2BL1zV62F2Gr0rqR9tXvMF2%2FVn7201I03wilAngiwIgHOvOEggWE3F44RRObZMUXrBzDMprbTna3mIE8h5bP5Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD%2B9RkZVrEiPUJP%2FTSrcA7kuHXKm2%2B%2BSf4l3TTl%2BZP385Zz01imIxXF0vFFpfWzQflzKeUeCpqf4CdTPk29PApoBGPA77ZKy8qtb9BV8slw8zckdcRICIXjKuKhJd6WcFKSz5BhaMJpQQdCvA%2F9LS4YeZd6fPmxUJil2NEaC73KlWsJzZOhKrnGYG7%2FhGm%2Fk%2BS4MyirC1O34pQau1lYRAPj4Rt%2BmTr57TlbusrCZqqnitlX7H2K2gySEXYq5YJ9u0LhywU4uRYrvxTr1TKr4cTZbK5XOzx%2FwQKOQNdfh%2FUoqhDynfSaGEEeqTH5TUm8r3NjYBKElXo5py8K9%2FwMOiKO6aEMHUSnOIiV7Qr0Hqb6frggcoGo64VaDxS75FK8nrd%2BuTAgtX%2B00uSNzC1UmrchGWzGA7WL2fO%2B%2Bh9ODHbSEfqB5k6F0JqlE5KW4ZnoJJhTG2dorwBF14w3%2BHb1kymsKuYsNfbE7EnYZ5T2ALtvzlcF9BKbSsSDw7IyCP7%2FWzM8qb9yUvGneGVIW3im%2F2PLEWkp6A4QFJD7FpmLXE594g5atIts9%2FoEev5JhyJyYv6VvOmj9XpUBZcmRjEC9ShtiKV2hfEjCXVcPY97CGFApLz07s8zFzP8P2G4ygHCXsMWQ%2ByIIhY7fdCcmMIKPisoGOqUBJCH5RV1zFyB2kayurl%2FwLsavO2qhw8%2F2WQmjapWL72b%2FZ7PByXBf1B1%2FSWyQVJlQNHCQBEqXz0RcKuWiG9uILGzufWypiYFZVn%2BZt0en%2Farf1%2BdmJT6T8QaLGeZH6dx%2BVtoJ9DJgliZSFA9FIpsBb3wTwNguoHmpDtRCNRXvVLaMvcly1wkGexBPFPL0mmoByT8usygCd32aevhAA6rVIMAk2j8u&X-Amz-Signature=ca4e2510e4c1d24d583d4089bd6b31d9a05624f97dafdc910e672af411a54a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4MJBEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYIL%2BL1zV62F2Gr0rqR9tXvMF2%2FVn7201I03wilAngiwIgHOvOEggWE3F44RRObZMUXrBzDMprbTna3mIE8h5bP5Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD%2B9RkZVrEiPUJP%2FTSrcA7kuHXKm2%2B%2BSf4l3TTl%2BZP385Zz01imIxXF0vFFpfWzQflzKeUeCpqf4CdTPk29PApoBGPA77ZKy8qtb9BV8slw8zckdcRICIXjKuKhJd6WcFKSz5BhaMJpQQdCvA%2F9LS4YeZd6fPmxUJil2NEaC73KlWsJzZOhKrnGYG7%2FhGm%2Fk%2BS4MyirC1O34pQau1lYRAPj4Rt%2BmTr57TlbusrCZqqnitlX7H2K2gySEXYq5YJ9u0LhywU4uRYrvxTr1TKr4cTZbK5XOzx%2FwQKOQNdfh%2FUoqhDynfSaGEEeqTH5TUm8r3NjYBKElXo5py8K9%2FwMOiKO6aEMHUSnOIiV7Qr0Hqb6frggcoGo64VaDxS75FK8nrd%2BuTAgtX%2B00uSNzC1UmrchGWzGA7WL2fO%2B%2Bh9ODHbSEfqB5k6F0JqlE5KW4ZnoJJhTG2dorwBF14w3%2BHb1kymsKuYsNfbE7EnYZ5T2ALtvzlcF9BKbSsSDw7IyCP7%2FWzM8qb9yUvGneGVIW3im%2F2PLEWkp6A4QFJD7FpmLXE594g5atIts9%2FoEev5JhyJyYv6VvOmj9XpUBZcmRjEC9ShtiKV2hfEjCXVcPY97CGFApLz07s8zFzP8P2G4ygHCXsMWQ%2ByIIhY7fdCcmMIKPisoGOqUBJCH5RV1zFyB2kayurl%2FwLsavO2qhw8%2F2WQmjapWL72b%2FZ7PByXBf1B1%2FSWyQVJlQNHCQBEqXz0RcKuWiG9uILGzufWypiYFZVn%2BZt0en%2Farf1%2BdmJT6T8QaLGeZH6dx%2BVtoJ9DJgliZSFA9FIpsBb3wTwNguoHmpDtRCNRXvVLaMvcly1wkGexBPFPL0mmoByT8usygCd32aevhAA6rVIMAk2j8u&X-Amz-Signature=13cb833937802131f542b083b333ddd0c504d9d73b0e2992e759e464ebbbe7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
