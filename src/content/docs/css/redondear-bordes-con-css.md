---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VN6WH75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICO%2BAQKIFgvKdkEv%2FO1LWqyFQmRrSsIo4wwn8mL2HJ8QAiEA3tP3AU0fBmrrVMPcx7RZIRS1%2BCeOStPJeqjjUmck5tcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDE%2BN%2BNipRejWX9OCLCrcA2B0kscYW0cJBb0iCGQmc%2BSFV6marANe3MdQuQNTRNOeKQUjMz2ue2UGpWMQGimGCVx1M1wGgjYkLW4FK12q8wpOcEX6QaklYCddZugeNaWIqywYY0UjzAQxc6tLGAXcBz9elocaLuToPnq%2Ffjr8Mib66AxQii%2FBzz5XHvrDewW%2BLZXSh6wb%2FrPpJEQPUwyNPzp7Q8OwzwtxDYEHlK5s1ZlPGQdBfAsAwd2Vk0efx5DWH%2B1%2F71DyTc1PDnnxv%2FHUKNMsy3z3IsALpaaV%2FoPU6Q7DLMOD1Lz1LZHt81vguL0EmlATKQxiEFf9XRPa3Jc32pPZKf%2FM%2Fx2oNPs6foKKAxjwyR7NV19Rx4TEIa58OO%2BP7ZMAZaUQkTuwIHHnxGbQcPrnTlnvG5DzqZ%2FQgigzmpluleNP8AZ4WyFS6ELoJDK8dteHm%2By1BRL6bOwHgf2ZyENo5kax%2BR18CrULGa7hgUl1sJIpP3mxVaj%2F9LLcs13nwLFUWFZ%2Bg%2FMxGO9gLxCA8Os19KealW2b%2B%2FX6LtKzVXec%2FIoXWU6wMnx79pwcV5USKGOE6aAiBfAdvFtSaX4aLmjfFI9jBGBvrfHw9WJZeX34sxnIP2YlVROkGAOQn%2Famphhm%2FULZMsi9fQGwMMGExskGOqUBSLhY86R1oXyHwem6PIyp6cIKFG32DpYsb5OfiGwBYuBQdwo3rnPGL4DckS%2BwbG3KHu1bHvsu4yPpWDIG%2Bwd%2F%2Fw2ocKIeLbqq9E6nYJPMefMH%2BpNASed6ViVjuZhdeXmn19X3%2F0Cn711SFpu4%2FLdWLu4tR8BE0xcfpkF7kzi2TPPSdMj5crY6n41XP%2BUQDMXsRKSkil3GI%2FLt6c5Or3xwGbuJ%2Fc8P&X-Amz-Signature=f15308d7213f4d303f8aab94972fd1eafdc91bbb3e2760a5a86514ebfd98fccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VN6WH75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICO%2BAQKIFgvKdkEv%2FO1LWqyFQmRrSsIo4wwn8mL2HJ8QAiEA3tP3AU0fBmrrVMPcx7RZIRS1%2BCeOStPJeqjjUmck5tcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDE%2BN%2BNipRejWX9OCLCrcA2B0kscYW0cJBb0iCGQmc%2BSFV6marANe3MdQuQNTRNOeKQUjMz2ue2UGpWMQGimGCVx1M1wGgjYkLW4FK12q8wpOcEX6QaklYCddZugeNaWIqywYY0UjzAQxc6tLGAXcBz9elocaLuToPnq%2Ffjr8Mib66AxQii%2FBzz5XHvrDewW%2BLZXSh6wb%2FrPpJEQPUwyNPzp7Q8OwzwtxDYEHlK5s1ZlPGQdBfAsAwd2Vk0efx5DWH%2B1%2F71DyTc1PDnnxv%2FHUKNMsy3z3IsALpaaV%2FoPU6Q7DLMOD1Lz1LZHt81vguL0EmlATKQxiEFf9XRPa3Jc32pPZKf%2FM%2Fx2oNPs6foKKAxjwyR7NV19Rx4TEIa58OO%2BP7ZMAZaUQkTuwIHHnxGbQcPrnTlnvG5DzqZ%2FQgigzmpluleNP8AZ4WyFS6ELoJDK8dteHm%2By1BRL6bOwHgf2ZyENo5kax%2BR18CrULGa7hgUl1sJIpP3mxVaj%2F9LLcs13nwLFUWFZ%2Bg%2FMxGO9gLxCA8Os19KealW2b%2B%2FX6LtKzVXec%2FIoXWU6wMnx79pwcV5USKGOE6aAiBfAdvFtSaX4aLmjfFI9jBGBvrfHw9WJZeX34sxnIP2YlVROkGAOQn%2Famphhm%2FULZMsi9fQGwMMGExskGOqUBSLhY86R1oXyHwem6PIyp6cIKFG32DpYsb5OfiGwBYuBQdwo3rnPGL4DckS%2BwbG3KHu1bHvsu4yPpWDIG%2Bwd%2F%2Fw2ocKIeLbqq9E6nYJPMefMH%2BpNASed6ViVjuZhdeXmn19X3%2F0Cn711SFpu4%2FLdWLu4tR8BE0xcfpkF7kzi2TPPSdMj5crY6n41XP%2BUQDMXsRKSkil3GI%2FLt6c5Or3xwGbuJ%2Fc8P&X-Amz-Signature=39c03a8c168f974f4afbd129b591b2a0889f77f6e99b0873d71bdc86b7c70015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
