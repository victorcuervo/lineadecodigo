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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LEYLDP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxDxG2cnAFGyLfss6Br0m7BFBwRG9N9JEyRUk0iDeFQIhAMXjgj4qI5ZkyzEBay4p4TCIBYOcn9qeQa1pUuMnfuPDKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURCN8DodBvZUw9Dwq3APCaBw585J8PHn2XHdC0AO5tHw%2B8AiRH1Kb6TOftI4Hj74sKSKGB0EsbP7FmLDQa%2FrzKtNMqxuXBpfcS1mLmGXXL1yRf1i4V1fW%2BmqheFemxK26OjBfNC2L2H1yRWNoPdDNF2Szs17faKCUq59Lawz2jQsbk0DpwyogRq88Ed9vvxCyvTGjCgRrG%2BRGi%2BhW1VTPvNfBe3AzuToWcB4JeH0XGKBCyjy7tK64PnlssLmoYmEteG5nG8xN4VwrKyntfLOUrDnrPAApsGV0zNNOKSMqsL%2Ft9jXyn6q6icr%2Fi00mgHVQuh7JS43ChxomMCA95fpG51R0IImfnuE36G%2Fmwwz2MOvsiVXf9yTI3CVCA6QzSKKYd%2BEb1R4czNLyHZ1lK9ngrKdqX%2Fnzpp5LA9AKfXkjVNXUpPl9rgfAIytfGiMGyMH1aP8mvYRMWJDNVMfElxD4j5n%2Bnz50YQ6AdCjhgMvAZQSalDUSlEpoj8BBvvcDJngueeayl3jgBju52U4mveIpOdhSfxK0q3xF%2FHbWQ2lDTQobvMz9Z4%2FMMyyqDNMmYQR%2BN7YPy3EKkLYszwS%2FAFk1Ypa28n7Drodq7xCKhT%2BacBdC4tn8bNmf0T05u5FNLKbheTq3%2FBCmXg0mgzDfiozKBjqkAUkTLB5y%2Bfa8tYS38K2A4NBnNa8YbQa8FBNQVmUV1VqCZ2BLI2PCNY6HIBss22HAlIRz88rJtFdJE5%2BQRxJD4Owh8RHVRiYONcfsIYTSLlMt0kjalrW4FqtQYdWUHa4A%2FpnFkqOVp%2FRRl76lSyuuHZjKDO6FL6zcaocVluGdXEeZyu3K7O8bVEstziiaaf268K7g0k6QAEFAVvJhpJgeiVsk6Sgh&X-Amz-Signature=3449af52d90ebf286295e6e8bd3824dd80ae9ca9b032a72d3db5713fdabece5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LEYLDP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxDxG2cnAFGyLfss6Br0m7BFBwRG9N9JEyRUk0iDeFQIhAMXjgj4qI5ZkyzEBay4p4TCIBYOcn9qeQa1pUuMnfuPDKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURCN8DodBvZUw9Dwq3APCaBw585J8PHn2XHdC0AO5tHw%2B8AiRH1Kb6TOftI4Hj74sKSKGB0EsbP7FmLDQa%2FrzKtNMqxuXBpfcS1mLmGXXL1yRf1i4V1fW%2BmqheFemxK26OjBfNC2L2H1yRWNoPdDNF2Szs17faKCUq59Lawz2jQsbk0DpwyogRq88Ed9vvxCyvTGjCgRrG%2BRGi%2BhW1VTPvNfBe3AzuToWcB4JeH0XGKBCyjy7tK64PnlssLmoYmEteG5nG8xN4VwrKyntfLOUrDnrPAApsGV0zNNOKSMqsL%2Ft9jXyn6q6icr%2Fi00mgHVQuh7JS43ChxomMCA95fpG51R0IImfnuE36G%2Fmwwz2MOvsiVXf9yTI3CVCA6QzSKKYd%2BEb1R4czNLyHZ1lK9ngrKdqX%2Fnzpp5LA9AKfXkjVNXUpPl9rgfAIytfGiMGyMH1aP8mvYRMWJDNVMfElxD4j5n%2Bnz50YQ6AdCjhgMvAZQSalDUSlEpoj8BBvvcDJngueeayl3jgBju52U4mveIpOdhSfxK0q3xF%2FHbWQ2lDTQobvMz9Z4%2FMMyyqDNMmYQR%2BN7YPy3EKkLYszwS%2FAFk1Ypa28n7Drodq7xCKhT%2BacBdC4tn8bNmf0T05u5FNLKbheTq3%2FBCmXg0mgzDfiozKBjqkAUkTLB5y%2Bfa8tYS38K2A4NBnNa8YbQa8FBNQVmUV1VqCZ2BLI2PCNY6HIBss22HAlIRz88rJtFdJE5%2BQRxJD4Owh8RHVRiYONcfsIYTSLlMt0kjalrW4FqtQYdWUHa4A%2FpnFkqOVp%2FRRl76lSyuuHZjKDO6FL6zcaocVluGdXEeZyu3K7O8bVEstziiaaf268K7g0k6QAEFAVvJhpJgeiVsk6Sgh&X-Amz-Signature=65a02009d738329a910683e63f83b3f23a44478b5a2522731ecd7dbc19bddb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
