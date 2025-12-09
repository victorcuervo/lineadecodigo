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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BJ2E37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sLbLLWE2Aqevu0pEkOiOfYh6LUT6SqWbC8UMsXueewIhAK1ijMUydina6Bt%2FpEkqMBRbIIIyIe8YvIuqV%2BS7BgzKKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz57R5OHnQhMfV1b6oq3AOaBQIyZr914ZiniEGvlCLzxDS4i8krONysZ68%2FwBXxOmUrLCqQn4DkL%2B7fUfJfsW4CQlTRa9mM%2BveSeIc%2Bnr40s2SdWTmdm5ynK59osdn7kPaqdudxMzSdpc6uYa7imhDn460vWAjl7k0oiMudIzMos8mAjB92WO8bPDdJPyJA9HhHNedTXKQl8oloFy6eiD6i1dgztsfHlVBMmKCZG1bvIb0Yy3eQWpcplxSClU9AWDEVL17fP4Jdp9uHWhNKnBAvGO2Ro%2BphjQSC4S5T7dANHj8izB7UKkrs690ZvpHcC6YFLElX7qfwHzQv%2B0lnE1avQTcmBLrCrO5tfbRbdmss18rAim94DNP9Mwz7uAPx2zzMF6Q8BGMlSZ8V476qPcM2Pt38r6AgMnH0ILgQae0mq%2F9UOZiebaA8lG4OOGb%2BMon2dEMewKzpao%2BGmRzlKRrd4yQ5pRLviypoPNmOG6Yr44t2dAC1caBlPgHRv6o96lC1axxg1nxZGweDRVogT2eJtZPVc1%2BU%2F5N1tCwuqJP6kqsabArrFTTuWilxtJVyu3Bamr4iTIkNkM6uiRUkPWIgKHPFT0rL4waWC%2FDR5te1q388nVRMXniEus3JwKs3YVR5KjmmnDauvcCPfDCSw93JBjqkAfceMPk2jb1Ygsb6siIGgrjuvJIh77R8rJ5q0SLAxs5ohagMW7xUmDceJc0mezRl36DGaC6okmZ9dZ6pxvv0NbzRQYyITRyHeMdXia0XmGlFW1WwF7cW6qEkwsjIbF1Xm4MF3zexfWGdIFNj94PE%2BuMN6zdL9Q4Qf4L6GBIYjbqCjlc5auXdtHAJBnbWt%2FXp3QZZdGnTrU5woUidGdhB5tCb37EO&X-Amz-Signature=0f4094aabf4ccbf64c87567980c68dd5cd95c7f7dbfe73e11bf85f79f662b4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BJ2E37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3sLbLLWE2Aqevu0pEkOiOfYh6LUT6SqWbC8UMsXueewIhAK1ijMUydina6Bt%2FpEkqMBRbIIIyIe8YvIuqV%2BS7BgzKKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz57R5OHnQhMfV1b6oq3AOaBQIyZr914ZiniEGvlCLzxDS4i8krONysZ68%2FwBXxOmUrLCqQn4DkL%2B7fUfJfsW4CQlTRa9mM%2BveSeIc%2Bnr40s2SdWTmdm5ynK59osdn7kPaqdudxMzSdpc6uYa7imhDn460vWAjl7k0oiMudIzMos8mAjB92WO8bPDdJPyJA9HhHNedTXKQl8oloFy6eiD6i1dgztsfHlVBMmKCZG1bvIb0Yy3eQWpcplxSClU9AWDEVL17fP4Jdp9uHWhNKnBAvGO2Ro%2BphjQSC4S5T7dANHj8izB7UKkrs690ZvpHcC6YFLElX7qfwHzQv%2B0lnE1avQTcmBLrCrO5tfbRbdmss18rAim94DNP9Mwz7uAPx2zzMF6Q8BGMlSZ8V476qPcM2Pt38r6AgMnH0ILgQae0mq%2F9UOZiebaA8lG4OOGb%2BMon2dEMewKzpao%2BGmRzlKRrd4yQ5pRLviypoPNmOG6Yr44t2dAC1caBlPgHRv6o96lC1axxg1nxZGweDRVogT2eJtZPVc1%2BU%2F5N1tCwuqJP6kqsabArrFTTuWilxtJVyu3Bamr4iTIkNkM6uiRUkPWIgKHPFT0rL4waWC%2FDR5te1q388nVRMXniEus3JwKs3YVR5KjmmnDauvcCPfDCSw93JBjqkAfceMPk2jb1Ygsb6siIGgrjuvJIh77R8rJ5q0SLAxs5ohagMW7xUmDceJc0mezRl36DGaC6okmZ9dZ6pxvv0NbzRQYyITRyHeMdXia0XmGlFW1WwF7cW6qEkwsjIbF1Xm4MF3zexfWGdIFNj94PE%2BuMN6zdL9Q4Qf4L6GBIYjbqCjlc5auXdtHAJBnbWt%2FXp3QZZdGnTrU5woUidGdhB5tCb37EO&X-Amz-Signature=95ca1cdfd418baee81f297868c2f016e2f0f908f3c9a61ddba1352073b1cfc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
