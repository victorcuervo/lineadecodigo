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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2JW5XT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi8bgaqk2LVCIG3wSRWzTDT602FzhglEgmcOKLtgwaegIhAKr%2B1wcOVgoKIqy%2B4eEdKZxnBfaIUoecP21nu%2B7PNo1rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVpDRzxJdyhPhNDv4q3AMIcqsEBb2B1Imdn9nBjRRCUHNmxheD1rtyOUQ1KL6hg5GQuLXioXWrhcto%2Ff%2BCYAnhBRF3Sd7yj74InBjXE8R4DW5EjrwAWKAOjCdsynL3a5FvJ%2FPtnBosQsuMxgdc3QIUouSfPQMCzQEcIy9Z3VPtvPCD0%2FTVVgCLejlzRQAtj%2FuLFVhF5tldOpzVo4cnKhh27NVGNih%2FvtTlZfBFG4GZkWokeEQP30LoWmE%2BbIrPemJL1aaN0WO921KayaISRRWr1xlorsc7zi27RBHEN8q0OoKibOFTaWCXovgwS0EW0NH83GXlm7gAuLzWlGk2yQsTmKaLQR0tphsVbVR9wD4P5ug8eLNYPudanTU8dvXjJBpcdSuOuVDaeiB2SPoyJY5JQq3Lu1Ki%2F79hFX4srWjzEqWPZtnKdHj%2FdMp%2ByBekfKi8%2FLumfoujFCSUc4SQtxgUnyBbBXMoE9P313wasSdXtGvDyUlVniSx13ATS9jpAmnytCwEgum6nL3Q1tWg%2F0W%2Fu%2F%2B5HAY60yqby7VOSC1M1tOEooqLovOCR227fT3KHBu4tRZrIUxvLLDEuYCffkuAWSqmJ2swusfziQazWf6iS1LKtrZ2xPaAyz3sckwxA1Id4gb2S1uc4jlsWTCN7tnJBjqkAfaKafslHQ%2BHm%2FlfptXaaDei0CsN2vV%2FMevemuS4FiUSgGh1%2FuEs3FNcy2u1rMPj%2Fvlvq95vw2LeGu3pYSjPINFb4faSsiYsLRKy%2FOkszMUPZf123R1y0SBDFyswAho07wYm1%2BwZCxxwuWJsudaRcrbQUW0g2vQGCz7l%2BE%2By7Fv3j%2BQ%2FgQ2yi%2Br6g2deQl0IjqpCqQSBOTZ%2FUbFQB2csBmhZ%2BSVj&X-Amz-Signature=0311c8ab4b31b55d51182862be0fd2640da9a75a20c89368a76265ea1bca4845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2JW5XT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi8bgaqk2LVCIG3wSRWzTDT602FzhglEgmcOKLtgwaegIhAKr%2B1wcOVgoKIqy%2B4eEdKZxnBfaIUoecP21nu%2B7PNo1rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVpDRzxJdyhPhNDv4q3AMIcqsEBb2B1Imdn9nBjRRCUHNmxheD1rtyOUQ1KL6hg5GQuLXioXWrhcto%2Ff%2BCYAnhBRF3Sd7yj74InBjXE8R4DW5EjrwAWKAOjCdsynL3a5FvJ%2FPtnBosQsuMxgdc3QIUouSfPQMCzQEcIy9Z3VPtvPCD0%2FTVVgCLejlzRQAtj%2FuLFVhF5tldOpzVo4cnKhh27NVGNih%2FvtTlZfBFG4GZkWokeEQP30LoWmE%2BbIrPemJL1aaN0WO921KayaISRRWr1xlorsc7zi27RBHEN8q0OoKibOFTaWCXovgwS0EW0NH83GXlm7gAuLzWlGk2yQsTmKaLQR0tphsVbVR9wD4P5ug8eLNYPudanTU8dvXjJBpcdSuOuVDaeiB2SPoyJY5JQq3Lu1Ki%2F79hFX4srWjzEqWPZtnKdHj%2FdMp%2ByBekfKi8%2FLumfoujFCSUc4SQtxgUnyBbBXMoE9P313wasSdXtGvDyUlVniSx13ATS9jpAmnytCwEgum6nL3Q1tWg%2F0W%2Fu%2F%2B5HAY60yqby7VOSC1M1tOEooqLovOCR227fT3KHBu4tRZrIUxvLLDEuYCffkuAWSqmJ2swusfziQazWf6iS1LKtrZ2xPaAyz3sckwxA1Id4gb2S1uc4jlsWTCN7tnJBjqkAfaKafslHQ%2BHm%2FlfptXaaDei0CsN2vV%2FMevemuS4FiUSgGh1%2FuEs3FNcy2u1rMPj%2Fvlvq95vw2LeGu3pYSjPINFb4faSsiYsLRKy%2FOkszMUPZf123R1y0SBDFyswAho07wYm1%2BwZCxxwuWJsudaRcrbQUW0g2vQGCz7l%2BE%2By7Fv3j%2BQ%2FgQ2yi%2Br6g2deQl0IjqpCqQSBOTZ%2FUbFQB2csBmhZ%2BSVj&X-Amz-Signature=dd58803f09df0d145e6af42827954571dd14edfdd1d18c8304fa6ce0c3290105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
