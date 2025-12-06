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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEZ3NWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FytEXzOzOvD66KP%2F2epTUMtEjQb5ygtOKZ8hg8J7LdQIgRfWimKnH1STdW%2FBZmQtBfogOvMt7lULDtmtKEhMJr1Qq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLJhcwZst0rB6IZ5vCrcA4Ijq%2Bgi8S1KfOjMKkHTnndRlSkk%2FB9DwHlKdmOw6nS2CKrLrhmapTMJcqKmFhMcPctuaCP%2Fo2b9q%2F3blUmR9o0tRhmH%2FruOCO3G3OQI7ceBYI384XOd6evcKNJCMr9n9LZcx0E0WYcpUGzD96%2FwT1dXn5ktmrXQst9NtO7ZEdgvm59bKPVPV8YevuqRXKtu9oai8yiFJnBDG7k3JeyBVj9r2mjOe85iteZQLZupd2WdkSH3H4rIoch03SlFQZCcACkm2ezFOzsGZE1dasLm0oAwugfWufAOQkaY8NkdZLivOd%2F3K9BbQTbMIjgZQNCIQPtJi8TO4myg0T0cyC22%2BhkhXoVK9l%2BiPumVjn6amtsfJoyozo%2BEmuNp0UDM7LMieJ1ZBqdWEZpz%2B6wyA%2Fj%2BIO9HED9e7de3L%2Bi0tXFobDHgxq15OlNBRryvxZwg%2Fp1xusbsiHQVASYR4XoF4Gr1Zj7VjKWU15JJ0UZ53D0Aoi1RKhhxSnjfTB8U8KTS3AZmnzawVooTEnSGL9f%2BNXmA64MTB3NEUDch2BjChdvPWkxlszZR6POZ0gsFMFy43vsleHxnnina3Og3e%2FppRD8olm8W8%2B8nLupLU7Sr%2BOLVTkIW98mxw5UORutcliLJMNLozckGOqUBG1Q3FQGfbYfnY2uXuCQr%2FEKnASqgtsPZpKC1w81JTCCTimwLzF%2FPOVLpKwy2JuIJlSMSe9ziOH4ot4qatz6PCUglsIbcP%2FStZrVM6CB03koP5q%2F1S6icmxmqYCz4%2BCHPWtZt3MGqPtHpp%2BPyVIb0EEj3EhSiSLZgCt4gvT3kIwBkYBhCsBaFLHlU1MLc3m0RYud82IY22SEjIb6oz80Gc16fEI71&X-Amz-Signature=b6464b63feb15a57906ff2b82d3be5578becb2e04f229903f227e813f081beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEZ3NWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FytEXzOzOvD66KP%2F2epTUMtEjQb5ygtOKZ8hg8J7LdQIgRfWimKnH1STdW%2FBZmQtBfogOvMt7lULDtmtKEhMJr1Qq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLJhcwZst0rB6IZ5vCrcA4Ijq%2Bgi8S1KfOjMKkHTnndRlSkk%2FB9DwHlKdmOw6nS2CKrLrhmapTMJcqKmFhMcPctuaCP%2Fo2b9q%2F3blUmR9o0tRhmH%2FruOCO3G3OQI7ceBYI384XOd6evcKNJCMr9n9LZcx0E0WYcpUGzD96%2FwT1dXn5ktmrXQst9NtO7ZEdgvm59bKPVPV8YevuqRXKtu9oai8yiFJnBDG7k3JeyBVj9r2mjOe85iteZQLZupd2WdkSH3H4rIoch03SlFQZCcACkm2ezFOzsGZE1dasLm0oAwugfWufAOQkaY8NkdZLivOd%2F3K9BbQTbMIjgZQNCIQPtJi8TO4myg0T0cyC22%2BhkhXoVK9l%2BiPumVjn6amtsfJoyozo%2BEmuNp0UDM7LMieJ1ZBqdWEZpz%2B6wyA%2Fj%2BIO9HED9e7de3L%2Bi0tXFobDHgxq15OlNBRryvxZwg%2Fp1xusbsiHQVASYR4XoF4Gr1Zj7VjKWU15JJ0UZ53D0Aoi1RKhhxSnjfTB8U8KTS3AZmnzawVooTEnSGL9f%2BNXmA64MTB3NEUDch2BjChdvPWkxlszZR6POZ0gsFMFy43vsleHxnnina3Og3e%2FppRD8olm8W8%2B8nLupLU7Sr%2BOLVTkIW98mxw5UORutcliLJMNLozckGOqUBG1Q3FQGfbYfnY2uXuCQr%2FEKnASqgtsPZpKC1w81JTCCTimwLzF%2FPOVLpKwy2JuIJlSMSe9ziOH4ot4qatz6PCUglsIbcP%2FStZrVM6CB03koP5q%2F1S6icmxmqYCz4%2BCHPWtZt3MGqPtHpp%2BPyVIb0EEj3EhSiSLZgCt4gvT3kIwBkYBhCsBaFLHlU1MLc3m0RYud82IY22SEjIb6oz80Gc16fEI71&X-Amz-Signature=438c41ad6c01e334e8ce001aca22e0662ef6574d4aced0a5c2d4dd6e369b0857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
