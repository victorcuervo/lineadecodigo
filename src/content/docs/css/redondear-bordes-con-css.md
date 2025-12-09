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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72UXS7B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNO7GG0l3OzikNiOfiVWkjwu8uZxR0vTueDHnsgahAPAiBd%2B%2BFVqp9Az2gqqznpSS2JzBsRyq%2FuC4wc%2FWDh4UqMOiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VGaSJtmkXQyFnIaKtwDfo6gY0LSSgTStXdDtaZGkr8L7xK3WAIZFirH4wLXvQxahRs7DDjXvc4%2BkbPV5ixitFko8NEo1b68JQ4kl9DSaljyhJVLIFQamIBMN1cuJR8cyCcrgcICywUa6jp0jMIPEtgc%2B156wAAUd5JyxijDYVBy98df13mU9qVHuyU%2FBNQurPlOgzlSdW7v1TkaOT%2FPPGRdWJCyXYpQFIW598vStqNlv198wh61pERdqLDx2%2FiU%2Bml1VzVsZT9Rn9DXtm6KeBPjU80OqaM6NWrT7JFLP%2BeJfGTEgmvpng8Xm5v9CLWs6e6wjuS2zt9fBMBjWGyxuzMNCS5c5LCNWjJZUKmBXz7fJJ7saKSujpUo7xGJRdvQ2NHeZOnPEKI2gBIM%2B9OaMzGMZqRky942E26MfyMjuhgVDZ9JrT8xxkEmVHr913WV%2B7f%2FY37c85FevNoBmxRx7Cbsk4zaMRFlsaGTTR3Ea3%2F%2FOzUeKK3cNICNWd380tTevXnX0ZOodXN%2FAtxNAQVLEZeEMT7g5mg8eT%2BCGXDzjNm3nqjcCxGf%2F7CQTkI9RMcUUn4n7lXAjiVdUr1ZiiGiEV8Dxpt3UubjMXraVY4igo0fmPcRv2jpED54WbuU97TYGSgma2OUNZPJht4wzKzfyQY6pgGx%2BPDkGxFhw8GcTJvw32SLHgYqp7HtUmAucPFoOMHEbsaD%2B1j%2BkQNGnDpTKQ2oV84vQHVbxrlqvyC4QDYwEih%2F5gWQHFYomUD%2BGlgx5aOF86bCmO92yRyJctel1MgwkjS1pFVXskQa99UXKb7EjOjpF0g%2BOO5Dxq%2BhZyvq%2FBD%2BY6uSFoHaztYOfjujnpyYq97o7qkjutdLpqmOKKSUOVR9g8uV1wsE&X-Amz-Signature=3c1fdb083a5ab560df708bda436c78eb07822f48a2d72861fd5b371d4feafb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72UXS7B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNO7GG0l3OzikNiOfiVWkjwu8uZxR0vTueDHnsgahAPAiBd%2B%2BFVqp9Az2gqqznpSS2JzBsRyq%2FuC4wc%2FWDh4UqMOiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8VGaSJtmkXQyFnIaKtwDfo6gY0LSSgTStXdDtaZGkr8L7xK3WAIZFirH4wLXvQxahRs7DDjXvc4%2BkbPV5ixitFko8NEo1b68JQ4kl9DSaljyhJVLIFQamIBMN1cuJR8cyCcrgcICywUa6jp0jMIPEtgc%2B156wAAUd5JyxijDYVBy98df13mU9qVHuyU%2FBNQurPlOgzlSdW7v1TkaOT%2FPPGRdWJCyXYpQFIW598vStqNlv198wh61pERdqLDx2%2FiU%2Bml1VzVsZT9Rn9DXtm6KeBPjU80OqaM6NWrT7JFLP%2BeJfGTEgmvpng8Xm5v9CLWs6e6wjuS2zt9fBMBjWGyxuzMNCS5c5LCNWjJZUKmBXz7fJJ7saKSujpUo7xGJRdvQ2NHeZOnPEKI2gBIM%2B9OaMzGMZqRky942E26MfyMjuhgVDZ9JrT8xxkEmVHr913WV%2B7f%2FY37c85FevNoBmxRx7Cbsk4zaMRFlsaGTTR3Ea3%2F%2FOzUeKK3cNICNWd380tTevXnX0ZOodXN%2FAtxNAQVLEZeEMT7g5mg8eT%2BCGXDzjNm3nqjcCxGf%2F7CQTkI9RMcUUn4n7lXAjiVdUr1ZiiGiEV8Dxpt3UubjMXraVY4igo0fmPcRv2jpED54WbuU97TYGSgma2OUNZPJht4wzKzfyQY6pgGx%2BPDkGxFhw8GcTJvw32SLHgYqp7HtUmAucPFoOMHEbsaD%2B1j%2BkQNGnDpTKQ2oV84vQHVbxrlqvyC4QDYwEih%2F5gWQHFYomUD%2BGlgx5aOF86bCmO92yRyJctel1MgwkjS1pFVXskQa99UXKb7EjOjpF0g%2BOO5Dxq%2BhZyvq%2FBD%2BY6uSFoHaztYOfjujnpyYq97o7qkjutdLpqmOKKSUOVR9g8uV1wsE&X-Amz-Signature=c809e96903affa13b71e7bd88975b45658b960dea96270edaa4abfea2332f285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
