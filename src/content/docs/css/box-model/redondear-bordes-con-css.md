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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQN3TCNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXgGr6o9bshjYj8Vvct%2BaHZkcgmqtSb83Tq3SIUqt7gIhAMGdOiDOcVwL20N0p0y0wIbULFiBEFjDTQ7bJiDFJFMtKv8DCHEQABoMNjM3NDIzMTgzODA1IgwmxyvOUkDmPo1qeE8q3AMCWA8pk%2FCfQDFn4ri4khmFldweFjnCWggS1WCj%2B6ZmpagIZDK0oo2BjPMMEDMVOLJX1bBxmyvKAtPq9AiRc4qyiII3Pgb1aregB2mON6ztzAZYSzwBu2O%2FJ0cCbcP9D5is0%2BWM0IB1kLs%2FhS2VVndXrKu0B0XEka0fWcO5mdKg0R03pVmKPIT1gP2UnILaydwdIhAJMwRTnVcK8Z4xib46LJW%2F00fuqsoRgk%2Ffc0IWmTrQ%2BcKXbYMtwtrURsL3mEsry3QOSzRENqM6GS8LKuW2%2BHwUnVwUuGx0%2BPZFKZ2avMyfIosEgt1JDe4TlwdmnGSpo5cpxBXN%2BNZ64aS9PzubKFl82WcYP89%2FotK8mF%2BZbfOZ4pd1aLzgbsutORajFWV6qoLq6WY3YW5yGZYWe4myakHo80Gm5xzozVUsj2L%2BX9wPYrNK0c3md5l1W5zzTQvR%2BhCzxCQmcO5zTRCYbfEKGWJkhuU09q5VJR1dKNr6%2FLmGmW3SQeokDRO0Mm9JRssiU4YmoZ%2Bw9wBL1Ri2l8iYNnFz6a%2FkxbN4o4LwAdFaGZjHXOV44laghw73NXGZ9SphPMHi7qTt%2FMiBl0pjRC1dIDRYFXCouAaXe%2BNBWAGZsPgJcr5x93bqpmsj%2FTDX3ofKBjqkAZQqvGPkhpViX%2BhRr6R59vgCRCE2VxzJolpwTdRIqbkvLXc7R1PkaCLi9dE3nVMDoMihB7eU7ioPAHbtUjaa%2FbSo5cdCMxYV3yw%2FTfhDPRf1ETZMPFQ7N6Vs5U5E%2F4vxM1asAhyRVMoboKgt64geDmJ9FV7CBi7ZFYXO4U13qJXONAVqYPwBpHkejw8wGqPD12U8SuM19qj5cW14wkHzjxfaptvB&X-Amz-Signature=b6f1020d0992fd7acfa0ead6f5212956d4f21014b5891de3a375a4517952ceda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQN3TCNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXgGr6o9bshjYj8Vvct%2BaHZkcgmqtSb83Tq3SIUqt7gIhAMGdOiDOcVwL20N0p0y0wIbULFiBEFjDTQ7bJiDFJFMtKv8DCHEQABoMNjM3NDIzMTgzODA1IgwmxyvOUkDmPo1qeE8q3AMCWA8pk%2FCfQDFn4ri4khmFldweFjnCWggS1WCj%2B6ZmpagIZDK0oo2BjPMMEDMVOLJX1bBxmyvKAtPq9AiRc4qyiII3Pgb1aregB2mON6ztzAZYSzwBu2O%2FJ0cCbcP9D5is0%2BWM0IB1kLs%2FhS2VVndXrKu0B0XEka0fWcO5mdKg0R03pVmKPIT1gP2UnILaydwdIhAJMwRTnVcK8Z4xib46LJW%2F00fuqsoRgk%2Ffc0IWmTrQ%2BcKXbYMtwtrURsL3mEsry3QOSzRENqM6GS8LKuW2%2BHwUnVwUuGx0%2BPZFKZ2avMyfIosEgt1JDe4TlwdmnGSpo5cpxBXN%2BNZ64aS9PzubKFl82WcYP89%2FotK8mF%2BZbfOZ4pd1aLzgbsutORajFWV6qoLq6WY3YW5yGZYWe4myakHo80Gm5xzozVUsj2L%2BX9wPYrNK0c3md5l1W5zzTQvR%2BhCzxCQmcO5zTRCYbfEKGWJkhuU09q5VJR1dKNr6%2FLmGmW3SQeokDRO0Mm9JRssiU4YmoZ%2Bw9wBL1Ri2l8iYNnFz6a%2FkxbN4o4LwAdFaGZjHXOV44laghw73NXGZ9SphPMHi7qTt%2FMiBl0pjRC1dIDRYFXCouAaXe%2BNBWAGZsPgJcr5x93bqpmsj%2FTDX3ofKBjqkAZQqvGPkhpViX%2BhRr6R59vgCRCE2VxzJolpwTdRIqbkvLXc7R1PkaCLi9dE3nVMDoMihB7eU7ioPAHbtUjaa%2FbSo5cdCMxYV3yw%2FTfhDPRf1ETZMPFQ7N6Vs5U5E%2F4vxM1asAhyRVMoboKgt64geDmJ9FV7CBi7ZFYXO4U13qJXONAVqYPwBpHkejw8wGqPD12U8SuM19qj5cW14wkHzjxfaptvB&X-Amz-Signature=8d24438f364086a8d3ec8cc110c88db42f826c3102a730f16afb2be6bdecf336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
