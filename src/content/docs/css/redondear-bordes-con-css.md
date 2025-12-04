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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J24IFZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv3B9n5uJWS6QfA%2FYs1jyZKEuJuUjPdFgWbH9e4TQxLAiBlAYySwUXqN%2FejIxfsp7%2FFvj5%2FY7w7WQXRLGmeCoDtpir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMcyDbOgKK%2Fts5xQf5KtwD4TsnYCaFong161gxyKlfRYiipNVBPfiIqwK1pw1zU4WCspuTD2k%2FaLeCLBCILEM3s0fNzkkv2lp%2BHR5Ou2Lwg83KB17P5otoROWn3XYIKNQNdVRPAO44AZgEaLZjwS32Xz0a5yYCbwm%2FC2zHEKz086FzW8y9Sta%2BmTVxego2OY9jhjGYIL5FMiWItFHUEThceeReCsRQnGZAdZi%2B09Gh07MSuZnWW8d9dvv0GSQOvd7tomswO88%2FSh6jlBCHL2UM2NFn5PIpsUDrrBdugr3vyYhQ35nniAo1cF7%2FQyatBPUgAv%2FlG8Av4U85xU81KThLT9jQFGjjE3cXVRsAsOrkwupUZt1GwaiYFy2QZ9XQ5YiOSDPDglYHC4fDqSFIoq4iYwXPjfJxtmvnC9RXgVkxvAwJcT0jmTmCvn2g46K34bp5jLJPw8ZTlk%2F8mD%2B05UPTeZUX8mU%2Bi4nxY%2BmRB4yUUPxH5cxW2Do8WyXRmS7c8DnOjyzpDNzOHZOTLS38dIRa%2FBPeqpS2eLfoTzuThq%2B30Yi%2FKODjYtZx5a3qTN5md9SLqRclDmtVdbbMPDRuPhXYcxDYvUGyhM6tvzqd%2B33Iq85t1rWTDHuPISMmsyZLPkjw73VQXcDKTTNF0wUw%2BPnGyQY6pgEdRjyEg7AX2gmyVPguz3nbao%2FpopP7zX0afxdgSkT863wpJmpGpoJVrCGKqYxL4sXbpjOMwAvPNmwuqKt9Mwrxn3lgGg49WCqTcE9gD2Ntm3JgNnOABmkYmDeUVaOn23pwe5H2FxWNe5ROZ0GMPg7hkS3VBxlPxzwgTC0Kp4Dbh0jGQ%2BRoszIBdCF5DCWs2pcCBVC2yP7Sq7O9NvCSSx%2FVLGh51TT8&X-Amz-Signature=4d826b4887b83180e7d325fdf4129ac30c6905e666608d7725a34c76e0cd33e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J24IFZV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv3B9n5uJWS6QfA%2FYs1jyZKEuJuUjPdFgWbH9e4TQxLAiBlAYySwUXqN%2FejIxfsp7%2FFvj5%2FY7w7WQXRLGmeCoDtpir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMcyDbOgKK%2Fts5xQf5KtwD4TsnYCaFong161gxyKlfRYiipNVBPfiIqwK1pw1zU4WCspuTD2k%2FaLeCLBCILEM3s0fNzkkv2lp%2BHR5Ou2Lwg83KB17P5otoROWn3XYIKNQNdVRPAO44AZgEaLZjwS32Xz0a5yYCbwm%2FC2zHEKz086FzW8y9Sta%2BmTVxego2OY9jhjGYIL5FMiWItFHUEThceeReCsRQnGZAdZi%2B09Gh07MSuZnWW8d9dvv0GSQOvd7tomswO88%2FSh6jlBCHL2UM2NFn5PIpsUDrrBdugr3vyYhQ35nniAo1cF7%2FQyatBPUgAv%2FlG8Av4U85xU81KThLT9jQFGjjE3cXVRsAsOrkwupUZt1GwaiYFy2QZ9XQ5YiOSDPDglYHC4fDqSFIoq4iYwXPjfJxtmvnC9RXgVkxvAwJcT0jmTmCvn2g46K34bp5jLJPw8ZTlk%2F8mD%2B05UPTeZUX8mU%2Bi4nxY%2BmRB4yUUPxH5cxW2Do8WyXRmS7c8DnOjyzpDNzOHZOTLS38dIRa%2FBPeqpS2eLfoTzuThq%2B30Yi%2FKODjYtZx5a3qTN5md9SLqRclDmtVdbbMPDRuPhXYcxDYvUGyhM6tvzqd%2B33Iq85t1rWTDHuPISMmsyZLPkjw73VQXcDKTTNF0wUw%2BPnGyQY6pgEdRjyEg7AX2gmyVPguz3nbao%2FpopP7zX0afxdgSkT863wpJmpGpoJVrCGKqYxL4sXbpjOMwAvPNmwuqKt9Mwrxn3lgGg49WCqTcE9gD2Ntm3JgNnOABmkYmDeUVaOn23pwe5H2FxWNe5ROZ0GMPg7hkS3VBxlPxzwgTC0Kp4Dbh0jGQ%2BRoszIBdCF5DCWs2pcCBVC2yP7Sq7O9NvCSSx%2FVLGh51TT8&X-Amz-Signature=7f1badb2bf7afec4c55747a19bbc27af37bf2acad7632568a32afc76c9d7002e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
