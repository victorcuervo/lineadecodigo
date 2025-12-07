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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQUYA6D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5dvOzKvJFRx5cz7BMXYUke%2Bk%2F6pDjI%2F7txrVtK7xW%2FAiAftqZhDbOqrdem9a7pjrfQeM9LQOk1bp2xPvNhUs%2BM1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFt90FLL3DPaqIGLfKtwDZYB%2F2IDXMHYmPbuNqKG%2Fn%2BlZ4p4nBo%2Be7lWqC0ZXft%2FLhj7ssaCrcwFN2TH%2BAlng34UFWnVlbKdCH9LANYbeG55diZJL0w2kGnmzxFy2T%2FLTYUUbnxSUUzZoXvmgTRbAKIAgYor96RmpIb1rhnd%2FQCqk5xbOhQ7LggYmSkS5w8qce2ZKVpj55Xe1nUjGZVw3h5eONRItJLq8wodP20S1peSSeXZ4kTr5d17nkxfwE3q4k6iJBtkpdYfVmqNvfXdiJfkXr91V2eRtsYCGQOiJVmdGCKV3NTRSr5ALhwWeJTCd7UwBiWJG5i%2BWR%2FOj9HuFXLtE3BQoFFk8qdAfiBeHlbXN%2Fdw8S0wrc91I0TKvElob1zPbijvS8TbZWq9wJFlIdLPuqFdbudZy1aZomX6b54CGbwU%2F%2Bsa5%2Bj1t86%2BOpUuG0v1lDpWJMN9dH6lMgLeEpVZNrib7uZ2prGLwDJG1JCg%2FnOQClOql24Y3S0%2FMFlFJNlf7mGvb6pw9IGxofU5MFR00Rmdl1x19zKRzDBHVFDMU5pPtSlxyAcP0vvEo3F%2Fg9MN8%2FhmfKoEzOhbhNq9b9bXYqqmyh69ILOpjzExU4DZYTeYcnP9%2Byj8%2Fp%2FCMDPzpaX1PRdqNF1TDwykwsZnVyQY6pgG7NJDJnAYVPCh5OCak8VPcaJvAd5Svfardv5BocL4RJdpGmWkkPpxiGLw9Cace5HOwiJJIN7Em5iEBDWm1J1e%2B5mUT82a6sD4ZqehWnOUxpXbDYCTfUZhODLG%2FCVO%2FHDoeahZcj%2FChB5a5dkdHsleEAzldvmm6iX58Qi8hFkzz%2B9R6OwHKwljCDNckcAZxwPtW6L5C9eMDbEncPCaplFRGazoWv8kG&X-Amz-Signature=b201169e35c170f985b2513b97aeceffeed8384e154189466b10ec88e42c59e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQUYA6D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5dvOzKvJFRx5cz7BMXYUke%2Bk%2F6pDjI%2F7txrVtK7xW%2FAiAftqZhDbOqrdem9a7pjrfQeM9LQOk1bp2xPvNhUs%2BM1CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFt90FLL3DPaqIGLfKtwDZYB%2F2IDXMHYmPbuNqKG%2Fn%2BlZ4p4nBo%2Be7lWqC0ZXft%2FLhj7ssaCrcwFN2TH%2BAlng34UFWnVlbKdCH9LANYbeG55diZJL0w2kGnmzxFy2T%2FLTYUUbnxSUUzZoXvmgTRbAKIAgYor96RmpIb1rhnd%2FQCqk5xbOhQ7LggYmSkS5w8qce2ZKVpj55Xe1nUjGZVw3h5eONRItJLq8wodP20S1peSSeXZ4kTr5d17nkxfwE3q4k6iJBtkpdYfVmqNvfXdiJfkXr91V2eRtsYCGQOiJVmdGCKV3NTRSr5ALhwWeJTCd7UwBiWJG5i%2BWR%2FOj9HuFXLtE3BQoFFk8qdAfiBeHlbXN%2Fdw8S0wrc91I0TKvElob1zPbijvS8TbZWq9wJFlIdLPuqFdbudZy1aZomX6b54CGbwU%2F%2Bsa5%2Bj1t86%2BOpUuG0v1lDpWJMN9dH6lMgLeEpVZNrib7uZ2prGLwDJG1JCg%2FnOQClOql24Y3S0%2FMFlFJNlf7mGvb6pw9IGxofU5MFR00Rmdl1x19zKRzDBHVFDMU5pPtSlxyAcP0vvEo3F%2Fg9MN8%2FhmfKoEzOhbhNq9b9bXYqqmyh69ILOpjzExU4DZYTeYcnP9%2Byj8%2Fp%2FCMDPzpaX1PRdqNF1TDwykwsZnVyQY6pgG7NJDJnAYVPCh5OCak8VPcaJvAd5Svfardv5BocL4RJdpGmWkkPpxiGLw9Cace5HOwiJJIN7Em5iEBDWm1J1e%2B5mUT82a6sD4ZqehWnOUxpXbDYCTfUZhODLG%2FCVO%2FHDoeahZcj%2FChB5a5dkdHsleEAzldvmm6iX58Qi8hFkzz%2B9R6OwHKwljCDNckcAZxwPtW6L5C9eMDbEncPCaplFRGazoWv8kG&X-Amz-Signature=9f62eef3090680d762fb55ae42f397732a24d7e7a8e793006610c92ceee0874b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
