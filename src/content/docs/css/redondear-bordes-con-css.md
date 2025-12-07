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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNPN52I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGSklSGDfNqLqEWmlbbE35dTYACbOONSiaqQxsg1nQowIhAMwNeI3yAQ8BlMSY%2BlcsIqipbPI3vpAKtashZP%2BCnLd8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEY2jjRuMpj6yBVugq3ANNVkraPq7DjRLaqzbgk0LKpMJ1rn625yEIVs1%2FY8flZKDNCLEu2OMpzgZXT8CDEp0Aze%2BzTeAUDgJ2Ec1cXbJ9xvAFcbnI0XizQOKyApI9CbNKPF6J4%2BL7stNNnsQRtJSqDMQHcc23wR2PLb%2BsMk0XMJJlICJQZ%2FTtuT%2F8dPfvouCMX9uwyjZj%2BedcV%2FjQpNZINNcx%2BNDuU8MCfVdD24V8cJOxivUQtj6zfIgZDG88US23UJxjVzbxrJzG%2F45TXKO7NNAjVS72wFj%2BEXipLir5onqd4gkc%2Bi20d8SDMu4E4cRpn7Xro8OHJhqVueU3%2BCUQWqNERVRGMFkt9LtWVScZqOg2cHc5B5bi8NdObG3tDiJP6j5CCBdIoIfKDVqlH%2BWsHH1uDCasiNn1Klu5Of4jsac8MfdT5LksmakoAyqlhqxim1n%2FR2roX6LZYySps9jhQVgI6QBDRn13BvPFZaYwomgZ6DnKcaKWY4wsXhO3CxSqKUwlGZQN9Jb7M4gGvbLA%2F4R1QnEyoclpgagbZZQJgiiHZqytSLIx9TzZQ3Rdl%2FJTQ%2BqtUZowjhhzSDvPm7ShPfTImdKw5hRbMyNfroT%2BG7hnCFXPDpf%2F8H5QDQMzxhCIkvWka5WxaUC41zCemdXJBjqkAf6s%2BL9yp1twUDGaTC%2B7rerf9CZDVuAjAWJ8WpGwiKNfOIzxYTyoXA93NLpBFDtbQQKtniiCHO2l%2FN7hHjdjuD0YocERqBz4jaQXEVlxVeS5w6anLM826NLRUTXcRlCyccCITgFYby81ZopCajgcS2wIPzZ%2FDok0r1vhoJSvdNjzxX1RH2XyBmkdc1KUSE3asX89%2FIn0r9hHguRn03Mzttoh10Ur&X-Amz-Signature=8881a822f112f061861b97b737edd987180f701672d2e4ec528bf6a13c9d8973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNPN52I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGSklSGDfNqLqEWmlbbE35dTYACbOONSiaqQxsg1nQowIhAMwNeI3yAQ8BlMSY%2BlcsIqipbPI3vpAKtashZP%2BCnLd8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEY2jjRuMpj6yBVugq3ANNVkraPq7DjRLaqzbgk0LKpMJ1rn625yEIVs1%2FY8flZKDNCLEu2OMpzgZXT8CDEp0Aze%2BzTeAUDgJ2Ec1cXbJ9xvAFcbnI0XizQOKyApI9CbNKPF6J4%2BL7stNNnsQRtJSqDMQHcc23wR2PLb%2BsMk0XMJJlICJQZ%2FTtuT%2F8dPfvouCMX9uwyjZj%2BedcV%2FjQpNZINNcx%2BNDuU8MCfVdD24V8cJOxivUQtj6zfIgZDG88US23UJxjVzbxrJzG%2F45TXKO7NNAjVS72wFj%2BEXipLir5onqd4gkc%2Bi20d8SDMu4E4cRpn7Xro8OHJhqVueU3%2BCUQWqNERVRGMFkt9LtWVScZqOg2cHc5B5bi8NdObG3tDiJP6j5CCBdIoIfKDVqlH%2BWsHH1uDCasiNn1Klu5Of4jsac8MfdT5LksmakoAyqlhqxim1n%2FR2roX6LZYySps9jhQVgI6QBDRn13BvPFZaYwomgZ6DnKcaKWY4wsXhO3CxSqKUwlGZQN9Jb7M4gGvbLA%2F4R1QnEyoclpgagbZZQJgiiHZqytSLIx9TzZQ3Rdl%2FJTQ%2BqtUZowjhhzSDvPm7ShPfTImdKw5hRbMyNfroT%2BG7hnCFXPDpf%2F8H5QDQMzxhCIkvWka5WxaUC41zCemdXJBjqkAf6s%2BL9yp1twUDGaTC%2B7rerf9CZDVuAjAWJ8WpGwiKNfOIzxYTyoXA93NLpBFDtbQQKtniiCHO2l%2FN7hHjdjuD0YocERqBz4jaQXEVlxVeS5w6anLM826NLRUTXcRlCyccCITgFYby81ZopCajgcS2wIPzZ%2FDok0r1vhoJSvdNjzxX1RH2XyBmkdc1KUSE3asX89%2FIn0r9hHguRn03Mzttoh10Ur&X-Amz-Signature=ce2f4185cdb4015704bd856fb0ddcf805b8a234ba4ace93c078489f3868b9b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
