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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ISPX5C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMKB8y8pjgBHcF8IuJd5B0CeBOYVF2WMtBq6z0ku5LwIhAMBCQY%2BD28wMXyrIgHmC%2BFhvWChG%2FpCeCqw465wK3%2BQwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLGLtDivlzzA3BoUq3AMJlT50cZwcKJHYrbYDS6SEzBei%2FpXAdBZCSwnBwuw8UGHc%2FD4ffQJ9zuJP5QvdVHH3Vc%2B9yZRoeTiuvkNA7AurFhJg72IflzoFwz2lOPHHg4tJ8WlHtzke5Pz5yNqsuGlJgEObnPQnMdFNaI4%2F3FhNVBp3nLh0lr61uDCw3DFMK0k5MQ6%2Bxr1aD7aePRk%2FJXdOUbiuTMTXiVM2K4spHWBLLtPedNFp30vAVVR57wPrDFDqRQKIIKaLljsgWPzqV7Srlm3SZ3agDm1Q1csVz%2Bt4oPrX%2BF%2BmiHhzb%2B%2BqmPCxI9PMCju11MzmEeBl0HDXOfnXHsbBlzPnaTO1Q6z47X9LCbUaQpcjAE3AsVC4FUGX5%2FbIo2HS3q3%2BbnMDlN%2BpC2ubOqpstjJN4nf86GDe%2BCuv57RHAOMbNAiM1WJH91flgfM4aSYGhxu6AuhqlgfhmJyPJ3Cb%2BO5HmwCAIQvlhwb%2BC51I1M84Ggvp2jYqaHLomvJb%2FqF%2FRH7cwKTofv8OIoUMl2tfQJffjNcxa2GPEkKHxC6nhJg4ur2CSL3%2B2WIiFk4k%2FVzdoPWsRzInvCRKn%2FwB3FXpnDhUxXzX%2BRUrsSWNeFAlZ9E9o405UhHgH5DsNPvdna%2FL%2BZGL94gS9zDU%2FdLJBjqkAXEWpgpDTe0c93H66TRsvV88S6u0AwZnyiPMEAq2Lhk1LaMFm0TtlnO0u4znMQSFQ0U2trpsb7PVlK%2Bv8H746M2JWV90BUQcopwYTtkV488I1bBBDoIG7rs7tDx1lLmRkvTXFKBQkR8v8vieVDjxsW%2Bi13Pn0qwnKbMdrIluJ%2BaOj8mJqlbUaIFdMSqRa5IMvR9F5sg4ue%2BWRINk7P8%2FeeppP2if&X-Amz-Signature=215c2e72d7d16fd2a4dde56c70aaa250840f2ba5a54b5262f5ca4771deeedd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ISPX5C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMKB8y8pjgBHcF8IuJd5B0CeBOYVF2WMtBq6z0ku5LwIhAMBCQY%2BD28wMXyrIgHmC%2BFhvWChG%2FpCeCqw465wK3%2BQwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLGLtDivlzzA3BoUq3AMJlT50cZwcKJHYrbYDS6SEzBei%2FpXAdBZCSwnBwuw8UGHc%2FD4ffQJ9zuJP5QvdVHH3Vc%2B9yZRoeTiuvkNA7AurFhJg72IflzoFwz2lOPHHg4tJ8WlHtzke5Pz5yNqsuGlJgEObnPQnMdFNaI4%2F3FhNVBp3nLh0lr61uDCw3DFMK0k5MQ6%2Bxr1aD7aePRk%2FJXdOUbiuTMTXiVM2K4spHWBLLtPedNFp30vAVVR57wPrDFDqRQKIIKaLljsgWPzqV7Srlm3SZ3agDm1Q1csVz%2Bt4oPrX%2BF%2BmiHhzb%2B%2BqmPCxI9PMCju11MzmEeBl0HDXOfnXHsbBlzPnaTO1Q6z47X9LCbUaQpcjAE3AsVC4FUGX5%2FbIo2HS3q3%2BbnMDlN%2BpC2ubOqpstjJN4nf86GDe%2BCuv57RHAOMbNAiM1WJH91flgfM4aSYGhxu6AuhqlgfhmJyPJ3Cb%2BO5HmwCAIQvlhwb%2BC51I1M84Ggvp2jYqaHLomvJb%2FqF%2FRH7cwKTofv8OIoUMl2tfQJffjNcxa2GPEkKHxC6nhJg4ur2CSL3%2B2WIiFk4k%2FVzdoPWsRzInvCRKn%2FwB3FXpnDhUxXzX%2BRUrsSWNeFAlZ9E9o405UhHgH5DsNPvdna%2FL%2BZGL94gS9zDU%2FdLJBjqkAXEWpgpDTe0c93H66TRsvV88S6u0AwZnyiPMEAq2Lhk1LaMFm0TtlnO0u4znMQSFQ0U2trpsb7PVlK%2Bv8H746M2JWV90BUQcopwYTtkV488I1bBBDoIG7rs7tDx1lLmRkvTXFKBQkR8v8vieVDjxsW%2Bi13Pn0qwnKbMdrIluJ%2BaOj8mJqlbUaIFdMSqRa5IMvR9F5sg4ue%2BWRINk7P8%2FeeppP2if&X-Amz-Signature=6252877ef723af5dbcb4fb7133b7fbd249bb2948053f6b06de8fd7cde66e3fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
