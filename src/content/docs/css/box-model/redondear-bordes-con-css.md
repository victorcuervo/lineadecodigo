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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5L7MG5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCuhD2puPJn6A1VEgpUiTLG8UtKkJG7UZWwbkJbbbsgIhAPEpIc53bzeFzT0VUaSAEJYXM5e5ri0Qnn7csk82F0ZLKv8DCHYQABoMNjM3NDIzMTgzODA1IgxpEuSGjto23Zn0bL8q3AM0mFLRnJwIfuLX7i%2BctIexxwyj5hizoT0Jth9GsbRBWa269IVtphLjsT4edKsugnrysdpJyN%2BOdVOiMagu48NTgDcBcX1kg54ywccD8FYh5VDNSd0z4UUTcsZZiz9ItkkQYyxHWdI25z2iEGBozUlLNAlePg%2BPZi4rZKmufK7j12Ogpy%2BWicvif3ftnzs5VcUOyOrQiSEWKWhkHCPIKc4uMzoO1U5alXrIaHNAkCeoKpHTkjBdwuRLslxzkxnjUrrbFJBsfQDqoW66D2k4Ws95pgiIdUcXAejIGF5S0iUTc3e7aesy8bhS%2BFXAjK3y6%2B0lwNlSZ8gpPa0Cv9UnuFE5U7QF4MZe1OgXZJWo7El9i%2BBeDrh6l5z2NECl8CQtorFwrxvx3yJVpvpTjOkWJ7Ke2muByLuOPNVe7jfHWqGQ0b1OkntYJLWodwLKMchdySK4Eigg9TNKwJrJLKCVHSE1LQzuGLswjw%2Bo0zOPVekaeSbxo6jZcDInoX%2BIV8q3RxDnlZocxH7svX8NVF5%2BqUBSr9WLyLU50VKexQFRBiKfRKb7vbOecSYoCxFaQ7hQrXN3Dtxaj04FLZbby47CrSD2b%2FV631ANohXnI0O8kSHTDNuk2UmWzr553lxmUDCP6YjKBjqkAX3%2B0DYICHJVPqIRRhtMX%2FFkTe94D%2BvMQ%2B%2F1T3bCtfIVbWtXISfvPT3OqVqpBB0iajBDvNnnhXRQHv57BnYmeyHO450%2BXSAHk0fhLi8CJHbtoIOH5Qk0Fa3akgXNQgMlsI3A9OjHpxTpzW7XodZtqMJtyOM5Z1O40cwrqg3oUgPj5BuM%2Fv2yLV3rS1vzob2c9HKpUJ3ZZZ79fr9bXdr%2B83l08BEz&X-Amz-Signature=1d997617fde8945b3760f0cd5cf8257d6d93adb462119427cc4077023ea5ef12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5L7MG5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCuhD2puPJn6A1VEgpUiTLG8UtKkJG7UZWwbkJbbbsgIhAPEpIc53bzeFzT0VUaSAEJYXM5e5ri0Qnn7csk82F0ZLKv8DCHYQABoMNjM3NDIzMTgzODA1IgxpEuSGjto23Zn0bL8q3AM0mFLRnJwIfuLX7i%2BctIexxwyj5hizoT0Jth9GsbRBWa269IVtphLjsT4edKsugnrysdpJyN%2BOdVOiMagu48NTgDcBcX1kg54ywccD8FYh5VDNSd0z4UUTcsZZiz9ItkkQYyxHWdI25z2iEGBozUlLNAlePg%2BPZi4rZKmufK7j12Ogpy%2BWicvif3ftnzs5VcUOyOrQiSEWKWhkHCPIKc4uMzoO1U5alXrIaHNAkCeoKpHTkjBdwuRLslxzkxnjUrrbFJBsfQDqoW66D2k4Ws95pgiIdUcXAejIGF5S0iUTc3e7aesy8bhS%2BFXAjK3y6%2B0lwNlSZ8gpPa0Cv9UnuFE5U7QF4MZe1OgXZJWo7El9i%2BBeDrh6l5z2NECl8CQtorFwrxvx3yJVpvpTjOkWJ7Ke2muByLuOPNVe7jfHWqGQ0b1OkntYJLWodwLKMchdySK4Eigg9TNKwJrJLKCVHSE1LQzuGLswjw%2Bo0zOPVekaeSbxo6jZcDInoX%2BIV8q3RxDnlZocxH7svX8NVF5%2BqUBSr9WLyLU50VKexQFRBiKfRKb7vbOecSYoCxFaQ7hQrXN3Dtxaj04FLZbby47CrSD2b%2FV631ANohXnI0O8kSHTDNuk2UmWzr553lxmUDCP6YjKBjqkAX3%2B0DYICHJVPqIRRhtMX%2FFkTe94D%2BvMQ%2B%2F1T3bCtfIVbWtXISfvPT3OqVqpBB0iajBDvNnnhXRQHv57BnYmeyHO450%2BXSAHk0fhLi8CJHbtoIOH5Qk0Fa3akgXNQgMlsI3A9OjHpxTpzW7XodZtqMJtyOM5Z1O40cwrqg3oUgPj5BuM%2Fv2yLV3rS1vzob2c9HKpUJ3ZZZ79fr9bXdr%2B83l08BEz&X-Amz-Signature=8f1aab04e3265be74f2b4efb6348f028f3f9d196c7ec2b65b2712b5011461fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
