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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY52ZOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDw4d%2F15hvCM6RiUHKOIdU91fDpxuNZvnXpw1mZkSdL4AIhAKQXGRwP%2BX1%2Bn5ARCB%2B15yp0eueK9S8seVXQjprqSpvCKv8DCDwQABoMNjM3NDIzMTgzODA1Igy8Wi6GLQn32oDdulEq3ANBOvBC2Cb%2FdAPhqCWAA%2BUYpsE4vJ0ZjlQ74OLjs%2FUYAk36Iz8t8R4FRGxVjIuAy5QfXQDBdMg4C0bUWIRhqwQw7UEu68yipqXS%2FR2QMM%2BR1TJ5IdEcm8b7ts0%2B3XoAunjFwx2Em2306ocOqp78jC8lA%2BqW2iH24yX4dCKjtR1TGTWKFTe8xNLx4YZrvmNLIeUi%2BienE571laHB0Gyj9869K320joEwmzr6%2FF36TAxvDPrvW56taygTVPOAOAQZtUNzIj0RO1SFmaG8S8auxCDx6pCXjiWLMZZCwCxBqRqMkVNjnWcQISKgSg1RUhb6LAX8R%2Bbc3bq8wkoTh6VpOknx0i2jJb38XGRtyfM%2BtcVVVJHLODNUA6ltX9Gv9ju%2BZpMizkJMGDS%2Bt63ojsMEviTAY8IeGMxLZWKi9fwY88WFssculAKyMX4SxX9LZwD%2FIlA6SdfvngaeMmkLCfQgF9nUClRGlu4b%2FgNUF8%2BmtAQ96Df8C0fdFPNNRlECk597cpzUxupFB0CLXz3ScLzkOIO%2BpYTSk8oRZiGJ8z2o7HoG4jvoED0zOVwH5wss4EAHSioStAORfNPADBvAOA55aV3aIu6Cqy33l1bGfsIzEPTBgSgjpTqgGSLOVKdMdjCD9cPJBjqkAXlUOA87G%2B4A%2B79fR96xmzBUG%2BQ%2BfcFs96VhaztZjFdl7%2BS2kEXwDSzqo50bq5npCJgRzk3m0NdG6meWdOLNE1vC0DpuPRnphgcmHgtaNMBP7ibS66FlwfGi%2BwRYmS9ce48qTXY6gxyvla1nOzuQ90z6rFTL%2BdO%2BLrqVh1OIEDBN0RuJJv0l6n6%2FZhwbVRufGxs%2BIIBWOPW%2B5BtNgSYpGeqZrW%2Ff&X-Amz-Signature=44cb204f86b184bc1159522a5c4c521ba98d0b10ca991c2fbaaaf380e70ea29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY52ZOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDw4d%2F15hvCM6RiUHKOIdU91fDpxuNZvnXpw1mZkSdL4AIhAKQXGRwP%2BX1%2Bn5ARCB%2B15yp0eueK9S8seVXQjprqSpvCKv8DCDwQABoMNjM3NDIzMTgzODA1Igy8Wi6GLQn32oDdulEq3ANBOvBC2Cb%2FdAPhqCWAA%2BUYpsE4vJ0ZjlQ74OLjs%2FUYAk36Iz8t8R4FRGxVjIuAy5QfXQDBdMg4C0bUWIRhqwQw7UEu68yipqXS%2FR2QMM%2BR1TJ5IdEcm8b7ts0%2B3XoAunjFwx2Em2306ocOqp78jC8lA%2BqW2iH24yX4dCKjtR1TGTWKFTe8xNLx4YZrvmNLIeUi%2BienE571laHB0Gyj9869K320joEwmzr6%2FF36TAxvDPrvW56taygTVPOAOAQZtUNzIj0RO1SFmaG8S8auxCDx6pCXjiWLMZZCwCxBqRqMkVNjnWcQISKgSg1RUhb6LAX8R%2Bbc3bq8wkoTh6VpOknx0i2jJb38XGRtyfM%2BtcVVVJHLODNUA6ltX9Gv9ju%2BZpMizkJMGDS%2Bt63ojsMEviTAY8IeGMxLZWKi9fwY88WFssculAKyMX4SxX9LZwD%2FIlA6SdfvngaeMmkLCfQgF9nUClRGlu4b%2FgNUF8%2BmtAQ96Df8C0fdFPNNRlECk597cpzUxupFB0CLXz3ScLzkOIO%2BpYTSk8oRZiGJ8z2o7HoG4jvoED0zOVwH5wss4EAHSioStAORfNPADBvAOA55aV3aIu6Cqy33l1bGfsIzEPTBgSgjpTqgGSLOVKdMdjCD9cPJBjqkAXlUOA87G%2B4A%2B79fR96xmzBUG%2BQ%2BfcFs96VhaztZjFdl7%2BS2kEXwDSzqo50bq5npCJgRzk3m0NdG6meWdOLNE1vC0DpuPRnphgcmHgtaNMBP7ibS66FlwfGi%2BwRYmS9ce48qTXY6gxyvla1nOzuQ90z6rFTL%2BdO%2BLrqVh1OIEDBN0RuJJv0l6n6%2FZhwbVRufGxs%2BIIBWOPW%2B5BtNgSYpGeqZrW%2Ff&X-Amz-Signature=d686f912a60bca513264bc1bf54edea4f996deccf91beb605dbff538328e361e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
