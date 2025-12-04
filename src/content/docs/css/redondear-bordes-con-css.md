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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ANE43P4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCtuL%2BqvjvNhPSBaR4ou0e%2FMfKn9dNEOOwenQZUffj49QIhAK5PwXAZjplrttvZTvACeNIkTMQPikE9Oxob5WLuKNGvKv8DCDoQABoMNjM3NDIzMTgzODA1IgxoUMJSoCFJSR%2B4l2sq3ANWFsQewAsEN23NcuCQzTEKvn4Wah9bolOZGje%2BqALy5TooVjjSwAeHXxvgwzxg9Rp5ESptvgPmDCyweRCIcdaTsmgVKG%2BYSsaluJUt4hZCCQCl%2FXtmkEptOrIqMsBaj1DoA8%2FxFpd91Fe49P7sLYIBkax18XcKwi%2BINEuVscg7EmNZYyAS4eLztcbpBCmcrBymg6leh6%2BFZtijrRbEp5mTdRPdJKXTG4V5kSxwsXJZyLAokqnBwmgd0N%2F%2Fj6wrVFleZJHaeTFPNltuDNpBkzQ2oKcuekM%2BdNY760fsHR%2BrHK8nzImhqHXX50kqn1Y6mAnLMHDddZ8u9NQAftpYGMw5oTNWMyv6dXvnfYUpFf07YupqaBqqe%2BalLWeLggj%2BIYPlvrA%2B6Be71WjQIP2YxaGP8Fv4QhfnGxxMSGNNAWO6vvE0HIY8OSw5H%2FWoBlzqqE4IA6pdw8Vl%2F3QqWqSPbtxqOluxOZ9cCBOlFYrzyjQUqG9FS2tvZs1Buklt1OwRmqIaRsEnYNMHF%2FTy%2BFl4oxA1EizWcN7XAjZnIBkzpozzcJvYw8duhv2nab6mGsXSgzc3OTlI%2BjbxGqgUFZPZ22kO18Ht8lcVMAPZIdJxXW8s46dozxRWoRmcfGn2iTCvtcPJBjqkAS4HZfeyXr6i8ajNuCgxzbv6YpBN21RoRxPHOZbB1quviZq4TjiyBD%2FKp0IBSjPIuwUlk8M7EZbulmdcfT4nHYcUxRvmcsC%2FcNk93bkjgcxGQ%2FT8E8qqfH6tZTYlb4K2gWskReDl1wmtxKDl6NwnvW6ljMxJLLBTLYp3XBYERRPyd%2BWFkoVCusbjkAEzhA2yOnDzUrfoud0HyVtpaLdYNTLQ9NRZ&X-Amz-Signature=45a30a2246bdce1fb0f0fca777eb3012e96e90750cc623dcdbdf28a88c110bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ANE43P4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCtuL%2BqvjvNhPSBaR4ou0e%2FMfKn9dNEOOwenQZUffj49QIhAK5PwXAZjplrttvZTvACeNIkTMQPikE9Oxob5WLuKNGvKv8DCDoQABoMNjM3NDIzMTgzODA1IgxoUMJSoCFJSR%2B4l2sq3ANWFsQewAsEN23NcuCQzTEKvn4Wah9bolOZGje%2BqALy5TooVjjSwAeHXxvgwzxg9Rp5ESptvgPmDCyweRCIcdaTsmgVKG%2BYSsaluJUt4hZCCQCl%2FXtmkEptOrIqMsBaj1DoA8%2FxFpd91Fe49P7sLYIBkax18XcKwi%2BINEuVscg7EmNZYyAS4eLztcbpBCmcrBymg6leh6%2BFZtijrRbEp5mTdRPdJKXTG4V5kSxwsXJZyLAokqnBwmgd0N%2F%2Fj6wrVFleZJHaeTFPNltuDNpBkzQ2oKcuekM%2BdNY760fsHR%2BrHK8nzImhqHXX50kqn1Y6mAnLMHDddZ8u9NQAftpYGMw5oTNWMyv6dXvnfYUpFf07YupqaBqqe%2BalLWeLggj%2BIYPlvrA%2B6Be71WjQIP2YxaGP8Fv4QhfnGxxMSGNNAWO6vvE0HIY8OSw5H%2FWoBlzqqE4IA6pdw8Vl%2F3QqWqSPbtxqOluxOZ9cCBOlFYrzyjQUqG9FS2tvZs1Buklt1OwRmqIaRsEnYNMHF%2FTy%2BFl4oxA1EizWcN7XAjZnIBkzpozzcJvYw8duhv2nab6mGsXSgzc3OTlI%2BjbxGqgUFZPZ22kO18Ht8lcVMAPZIdJxXW8s46dozxRWoRmcfGn2iTCvtcPJBjqkAS4HZfeyXr6i8ajNuCgxzbv6YpBN21RoRxPHOZbB1quviZq4TjiyBD%2FKp0IBSjPIuwUlk8M7EZbulmdcfT4nHYcUxRvmcsC%2FcNk93bkjgcxGQ%2FT8E8qqfH6tZTYlb4K2gWskReDl1wmtxKDl6NwnvW6ljMxJLLBTLYp3XBYERRPyd%2BWFkoVCusbjkAEzhA2yOnDzUrfoud0HyVtpaLdYNTLQ9NRZ&X-Amz-Signature=7e41e44d9304939e06bd78f72700030877162d816ab4c0b69c097a1dd182c653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
