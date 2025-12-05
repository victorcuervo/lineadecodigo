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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JS6SCQB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7N9AFi0Qii9lY9nAVAMYEpqQErSJ7i704AqJKLkTnqQIhAP217VTWTGdnV0LEVQKbyoa9Mq3%2BHlmEembk0XQFbae%2BKv8DCFUQABoMNjM3NDIzMTgzODA1IgxH4jGFmil0isftj2Eq3AONJLQ0ylhARLmubv8qaBEtA73ao5m2s%2FEHrUpqXpEG1a1k%2BcFoCrglt71Juh42nilUCw4bLjvfhu73Ap3TCDRxSwBL7n40jTL%2BpzzCqpNrUhEwH3cRR33W3y27Ft5KmSrqRuYjhQhg%2BkabAFJeFYoE6ptnD2xbhgZMxo4EdkujLCQIOGYm9bAnkzBuSaHlf6JK3Uv3KpRYCCI68QwTltrn0%2Bh8pbn5oT36Lbaayl73wZEkc2sfwZxxydDJQwOskBi19WkKzvENjwqTfzuUxJ14%2FcQBIeNu1UOptgrK9aJ7nhJUg2hoUCh60KMI50y3f8%2FqrpVwtoA2QO7VBVqF9o5Wa9%2BhGKSC84pNgdM7qAMrPfquj5A5McWRh8qmx0UrnpbTAUga2Qnk9j5GNuWWE8BYUdgTegTn0uLV5t0IMOS5AIaWK6t%2By0dH4nBmpWQetmgZlRCdMPWFjYJfVhfCu%2BJPmOwDNn74FuLmcnccUGTjy4jMTINfNywBtU53KnvNLAvvNZLO44ghQyo%2BC2rCmIr8ACfw0ZvQXBymZ2Zg%2Fq8mQSlk7%2BWtXpAKIcNwlVHOpo0thTXd8z9PZjnMpFeB8O8Nho9TZxtCit9cqt8kuAD4fsN4C21Z6yumz2t3qzDeqsnJBjqkAdqZ5o%2FWjDgZsxnZmWNekEQC9n3zaQUtvyr3d5%2B2iKMSxmu6oYvxvWYTC10GX85MMXEB42UxnCpME1GaGANMuugyq24dK%2B%2BJHJnG%2FXcezYowZI50R9oMVXeAwWGK68aq24IT%2BiEpN%2F4AhowcnbOvxi4SJYRq%2BWghCcOQdiHUIiv%2FckPFTLdfGKPZiVgEQXeIQUpc5GQ6g10bbp5vAQiE%2BYdMDSfz&X-Amz-Signature=001019dad926ecf5be2bc0609bd6de73a1187b709e546d41114c3a190eb3cc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JS6SCQB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7N9AFi0Qii9lY9nAVAMYEpqQErSJ7i704AqJKLkTnqQIhAP217VTWTGdnV0LEVQKbyoa9Mq3%2BHlmEembk0XQFbae%2BKv8DCFUQABoMNjM3NDIzMTgzODA1IgxH4jGFmil0isftj2Eq3AONJLQ0ylhARLmubv8qaBEtA73ao5m2s%2FEHrUpqXpEG1a1k%2BcFoCrglt71Juh42nilUCw4bLjvfhu73Ap3TCDRxSwBL7n40jTL%2BpzzCqpNrUhEwH3cRR33W3y27Ft5KmSrqRuYjhQhg%2BkabAFJeFYoE6ptnD2xbhgZMxo4EdkujLCQIOGYm9bAnkzBuSaHlf6JK3Uv3KpRYCCI68QwTltrn0%2Bh8pbn5oT36Lbaayl73wZEkc2sfwZxxydDJQwOskBi19WkKzvENjwqTfzuUxJ14%2FcQBIeNu1UOptgrK9aJ7nhJUg2hoUCh60KMI50y3f8%2FqrpVwtoA2QO7VBVqF9o5Wa9%2BhGKSC84pNgdM7qAMrPfquj5A5McWRh8qmx0UrnpbTAUga2Qnk9j5GNuWWE8BYUdgTegTn0uLV5t0IMOS5AIaWK6t%2By0dH4nBmpWQetmgZlRCdMPWFjYJfVhfCu%2BJPmOwDNn74FuLmcnccUGTjy4jMTINfNywBtU53KnvNLAvvNZLO44ghQyo%2BC2rCmIr8ACfw0ZvQXBymZ2Zg%2Fq8mQSlk7%2BWtXpAKIcNwlVHOpo0thTXd8z9PZjnMpFeB8O8Nho9TZxtCit9cqt8kuAD4fsN4C21Z6yumz2t3qzDeqsnJBjqkAdqZ5o%2FWjDgZsxnZmWNekEQC9n3zaQUtvyr3d5%2B2iKMSxmu6oYvxvWYTC10GX85MMXEB42UxnCpME1GaGANMuugyq24dK%2B%2BJHJnG%2FXcezYowZI50R9oMVXeAwWGK68aq24IT%2BiEpN%2F4AhowcnbOvxi4SJYRq%2BWghCcOQdiHUIiv%2FckPFTLdfGKPZiVgEQXeIQUpc5GQ6g10bbp5vAQiE%2BYdMDSfz&X-Amz-Signature=7e123b50a7116b27ac3a4dc9de214a799632a59952b01f375605be6cf3442016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
