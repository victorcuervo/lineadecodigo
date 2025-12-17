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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA5UCPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2B1bkeUVgbM%2BbB4%2FzuhlJVrDZB2HnbKYCaOUjfXUJywIgPmFvPkeivF505aVZ07DV%2BzOY1NC0zNv%2BmKBtHwnofCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9MyD67ZSyf5aer1SrcA%2Bno2oLC2mbMKmPQQgAlUJ2gJBcvW3%2FFKiW0Z1VeraTOLHdrzs4H0veAwmr3%2F1zYW3eSKUp9atjG%2FVALEvHhIR7gW9Pst2kijrRm05b2rGSEghUnHTTdby%2Fs9%2BS81nBS3dI82DkT9rahf4HmTtyaSoMQYxpOR5dn3gMTJBjCPep6qb%2BJ1iYhScbQyvtiFA2tgphFMt%2BrxliOFgdR4cTD9s8f82obN59Zg4oOz1o%2F35mM5Yl%2FYegPXgJ9qdbXkO80aqDSp0T1YHq27OeD0y9rWra8DUu%2BegbS3r2gtwfr1neCnwheWsje0Aec%2BQW4%2F679kDrtwJWJ%2B4oEg%2BOPOQr6Qu214oYNUvLgp5XdeSq5tijEar33Ngn9doqFYOBMKXqBTAse3aMF1JnQ3iczayaaXptREDZ4GHPA%2Fpzn460xvVOEePKzIjqDUppB%2BL3QyrZ8EKGZ3ILt2KTQ0PFuDoG8bu%2FHGwiApsHdQRwK83EMYTopeu5hZJy5ak4rjAOPt%2FbzZ2l6NGUhU2%2FAEHLSwoEQ1H%2FqGWTb9gGfH4bDT%2BpOFH%2FrtTU2X8MDsERx52aO2iWrMAv8MSIXEdBJUG1no7Dyi34oUD4PVi9oJdMeV%2FsXcg9khwElL7StDmqm1DBUMP%2Bfi8oGOqUBLKJ73PjHmaZh9ZW%2Fe%2Fuk4Dms29n8FDzMHy5wyxPNdiipR5t3EoTXB2Yg%2FzsUZt2n6XRgXTq1j%2F4Ca8eOweYie3HlVoHyb%2FgshRbwKI8q%2BCtCoy%2Fr9GYYnkwjyXHXNepJ%2FdUBAZWNe4TU2k3%2BCZ6TeLpsk8MYw4eyAB1Df9N1V0%2BYWIYr3rVBbnMdOFAvgAbeiyXMApbOfewmt54T7lbE%2BVfcVuvt&X-Amz-Signature=b44f0cf5482d84e2e2234c6e8c9e51de543e1ead5d70d8114770974b50adffa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA5UCPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2B1bkeUVgbM%2BbB4%2FzuhlJVrDZB2HnbKYCaOUjfXUJywIgPmFvPkeivF505aVZ07DV%2BzOY1NC0zNv%2BmKBtHwnofCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9MyD67ZSyf5aer1SrcA%2Bno2oLC2mbMKmPQQgAlUJ2gJBcvW3%2FFKiW0Z1VeraTOLHdrzs4H0veAwmr3%2F1zYW3eSKUp9atjG%2FVALEvHhIR7gW9Pst2kijrRm05b2rGSEghUnHTTdby%2Fs9%2BS81nBS3dI82DkT9rahf4HmTtyaSoMQYxpOR5dn3gMTJBjCPep6qb%2BJ1iYhScbQyvtiFA2tgphFMt%2BrxliOFgdR4cTD9s8f82obN59Zg4oOz1o%2F35mM5Yl%2FYegPXgJ9qdbXkO80aqDSp0T1YHq27OeD0y9rWra8DUu%2BegbS3r2gtwfr1neCnwheWsje0Aec%2BQW4%2F679kDrtwJWJ%2B4oEg%2BOPOQr6Qu214oYNUvLgp5XdeSq5tijEar33Ngn9doqFYOBMKXqBTAse3aMF1JnQ3iczayaaXptREDZ4GHPA%2Fpzn460xvVOEePKzIjqDUppB%2BL3QyrZ8EKGZ3ILt2KTQ0PFuDoG8bu%2FHGwiApsHdQRwK83EMYTopeu5hZJy5ak4rjAOPt%2FbzZ2l6NGUhU2%2FAEHLSwoEQ1H%2FqGWTb9gGfH4bDT%2BpOFH%2FrtTU2X8MDsERx52aO2iWrMAv8MSIXEdBJUG1no7Dyi34oUD4PVi9oJdMeV%2FsXcg9khwElL7StDmqm1DBUMP%2Bfi8oGOqUBLKJ73PjHmaZh9ZW%2Fe%2Fuk4Dms29n8FDzMHy5wyxPNdiipR5t3EoTXB2Yg%2FzsUZt2n6XRgXTq1j%2F4Ca8eOweYie3HlVoHyb%2FgshRbwKI8q%2BCtCoy%2Fr9GYYnkwjyXHXNepJ%2FdUBAZWNe4TU2k3%2BCZ6TeLpsk8MYw4eyAB1Df9N1V0%2BYWIYr3rVBbnMdOFAvgAbeiyXMApbOfewmt54T7lbE%2BVfcVuvt&X-Amz-Signature=3508edbb8f0fa1785b213e2873b350903ad5d0b207c066d7db3e165593ea1d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
