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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEUG2VM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCerHjQ5SHTGgHoqhMw4MR2Qi9uG1AvLJWyTcUZtp7x8AIgXmXvf8vfiyVJJxIWIm4r3EKPPor5NpNdZ90ZyhiDeAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsX0AgZgbWTgv8ixircA437apllIVMOC5FQQerlwQVHEQHvSDhTY3oFcE5Q3Od%2BR3Pg5LCgWGIN1ahQTL9LumcpPxUUptfFHBMDh22JvWT8N%2FPlOjAvqLsMeTsvHimZ%2F33bxpsOaQ8Gm%2FCptbLgu5qj3z%2BWqsW7%2FrSDKVCBqssRWGtpdlpLHG2a6n479QUcIYFThu98z5tZuR0IYbJcJH0kWZe0XChYMS2oz5U32kgX1TAHll%2FAz0LzT1CDyrMh7rVQ3T%2FyJ6DmNK6rzUfz16OVpNIyt1iQT7tP7G0Oah6lB2QCQ%2FTVulzgq%2BfK5QkjF3wndkLrHxzmALzUKkZzxFFnpQhOW37eWUoixH9n0fq8wOVY2NGo%2Fv%2FEl9JwiS3SMszFa6eIJ25Un9GU5hwSu9OnHAEbtA%2BVOqoyvv2MJBMXYXOWZ5Gotox3Fm92%2F6bzEvP0HHSikHbP91iblRcn8VMeyJZGKgtCnwhKvniEP%2BRw7t6LO088ysStypLMZdeFav75reVLw3Oa%2BMBy83VZ1gYdcy6m%2FMwhnRFsnW1bmtO60h5YmrOnjdM07xNqR2hTNRynLL4B22oXmFYGEzk1HnfdWnWQeuJbZrhHT1dEnS4ALEqAzoMKDQkb0ugRiOtlrZVeUJ7hUrRuPBmLMNz90skGOqUBLsdidyEArYEX8kH3sofO800ZTE2BGOYbOM1ncGEBEETGtZdhDZ6EFYXrmZu4dLsh%2FWxemhj2LkFj84iOtKAX2Ke2%2F0tmjx7OPU33kPDMCxo6jrPfgs1bK19GatGZhpwDiKueHxhdyaYARxtMVxuX9RbmqSZCr2vB7CUOFIpPMixlrBJoSO7EuyupP%2Bfum%2FaEciA0uTjGSIfAV0f6X7a%2FDRp7UVqr&X-Amz-Signature=a68836079445bd7ed24d2bc295835909022a66277f4533874405233a73218261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEUG2VM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCerHjQ5SHTGgHoqhMw4MR2Qi9uG1AvLJWyTcUZtp7x8AIgXmXvf8vfiyVJJxIWIm4r3EKPPor5NpNdZ90ZyhiDeAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsX0AgZgbWTgv8ixircA437apllIVMOC5FQQerlwQVHEQHvSDhTY3oFcE5Q3Od%2BR3Pg5LCgWGIN1ahQTL9LumcpPxUUptfFHBMDh22JvWT8N%2FPlOjAvqLsMeTsvHimZ%2F33bxpsOaQ8Gm%2FCptbLgu5qj3z%2BWqsW7%2FrSDKVCBqssRWGtpdlpLHG2a6n479QUcIYFThu98z5tZuR0IYbJcJH0kWZe0XChYMS2oz5U32kgX1TAHll%2FAz0LzT1CDyrMh7rVQ3T%2FyJ6DmNK6rzUfz16OVpNIyt1iQT7tP7G0Oah6lB2QCQ%2FTVulzgq%2BfK5QkjF3wndkLrHxzmALzUKkZzxFFnpQhOW37eWUoixH9n0fq8wOVY2NGo%2Fv%2FEl9JwiS3SMszFa6eIJ25Un9GU5hwSu9OnHAEbtA%2BVOqoyvv2MJBMXYXOWZ5Gotox3Fm92%2F6bzEvP0HHSikHbP91iblRcn8VMeyJZGKgtCnwhKvniEP%2BRw7t6LO088ysStypLMZdeFav75reVLw3Oa%2BMBy83VZ1gYdcy6m%2FMwhnRFsnW1bmtO60h5YmrOnjdM07xNqR2hTNRynLL4B22oXmFYGEzk1HnfdWnWQeuJbZrhHT1dEnS4ALEqAzoMKDQkb0ugRiOtlrZVeUJ7hUrRuPBmLMNz90skGOqUBLsdidyEArYEX8kH3sofO800ZTE2BGOYbOM1ncGEBEETGtZdhDZ6EFYXrmZu4dLsh%2FWxemhj2LkFj84iOtKAX2Ke2%2F0tmjx7OPU33kPDMCxo6jrPfgs1bK19GatGZhpwDiKueHxhdyaYARxtMVxuX9RbmqSZCr2vB7CUOFIpPMixlrBJoSO7EuyupP%2Bfum%2FaEciA0uTjGSIfAV0f6X7a%2FDRp7UVqr&X-Amz-Signature=ada83db879116266ed6238284b34c61517a431f9670ba72977b10d8a92cbe208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
