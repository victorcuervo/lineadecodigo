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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQEHAW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgjYyJMrnWDgpNsxm1iRnays8Wb0%2Bc%2BjEYEvXSEXpngIgR31A7MDQorMdjKtaOGvw8Cv%2BHmMn5fbzYqa5NK2pfS8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFu8RlaZkqjl%2FikmyrcA0XkcqoKaxX2T2BCS5Smk5SZnMqI4H7mtBBLIm%2BBADRmm0GBrvluXgJjOrRBSiN8pcOpRtdVFJBWolGRZoqDroJM1c2FCr%2FKQnU9TIv1opGDwdwixCeyYnGZZzWuq1INcUKxpm8ikVeZu%2BMZGHk07y7Xi88V2PC3bJs8U3uxcAU94wvGQEMU9r1QLFeAgOqdfEObhjUEO6o%2BEhpUTs3Dvqd8v1zGtfvYRk5GPJs%2BnmMi9Ndk9FU1E16fWF%2BhdiInH%2FEdziPVZaNsf1OFEaTqDhhTZMipPCGEpAQQwLT1tW2Evgp509I6D%2F7uth9CdJq2GFrz0%2BVD2Xh7lri5pt7WjqZ5%2BNU5AiAOCD%2BoBUSbAzMcfASeWDYt5wLY1A6U%2BjCY2CCN3qSMtqxGFjkZ3ukn3efXGLxzVvxKX%2BGuOK7RJHmP9D%2F5D2bUvQqfovQ%2Fs%2FQ4Vx4GesyShGf8VOFoHL%2Bp%2Fk7zRTQ8ggsi84QLjmidDIqhq3g4o1xZuxMNtmcJG5ZE0oDtFtd%2FHOzTxbQMaLVnnbl%2Fa160lGD4Ja9NIU4Z3lmBGvFldEKtcKoRnFkqhFgdz66goyNub5SQysO2NRRexeEPDgeuc5afVs501888vWbfgE8dch06B%2BbSIDTwMPDo3ckGOqUB2TAVdt7pQ1NSvg8uF%2BeXirF7eWwntaYCaHPheh8w5b3hECuWas7UKegd5hd6pUzwRJ4axQQu9G7QWGMpzv0CDDPoZZZlJY1FGfx834dNl6l6gHIPd38OsGOQKvRS1uvjuIxb%2F5nGsPiILlfmwKlG73SuS3IV6Gd7HxGnYv6kpYcR09jT5X0o0qGIYmO6UtR15tiwj1IpaL3GnhdED7BPV%2FEeez4m&X-Amz-Signature=f5e8bb13b33239ba66149380102bf8bdf94f5cfb318b1e1760d6a8d91cd6363a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQEHAW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIgjYyJMrnWDgpNsxm1iRnays8Wb0%2Bc%2BjEYEvXSEXpngIgR31A7MDQorMdjKtaOGvw8Cv%2BHmMn5fbzYqa5NK2pfS8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFu8RlaZkqjl%2FikmyrcA0XkcqoKaxX2T2BCS5Smk5SZnMqI4H7mtBBLIm%2BBADRmm0GBrvluXgJjOrRBSiN8pcOpRtdVFJBWolGRZoqDroJM1c2FCr%2FKQnU9TIv1opGDwdwixCeyYnGZZzWuq1INcUKxpm8ikVeZu%2BMZGHk07y7Xi88V2PC3bJs8U3uxcAU94wvGQEMU9r1QLFeAgOqdfEObhjUEO6o%2BEhpUTs3Dvqd8v1zGtfvYRk5GPJs%2BnmMi9Ndk9FU1E16fWF%2BhdiInH%2FEdziPVZaNsf1OFEaTqDhhTZMipPCGEpAQQwLT1tW2Evgp509I6D%2F7uth9CdJq2GFrz0%2BVD2Xh7lri5pt7WjqZ5%2BNU5AiAOCD%2BoBUSbAzMcfASeWDYt5wLY1A6U%2BjCY2CCN3qSMtqxGFjkZ3ukn3efXGLxzVvxKX%2BGuOK7RJHmP9D%2F5D2bUvQqfovQ%2Fs%2FQ4Vx4GesyShGf8VOFoHL%2Bp%2Fk7zRTQ8ggsi84QLjmidDIqhq3g4o1xZuxMNtmcJG5ZE0oDtFtd%2FHOzTxbQMaLVnnbl%2Fa160lGD4Ja9NIU4Z3lmBGvFldEKtcKoRnFkqhFgdz66goyNub5SQysO2NRRexeEPDgeuc5afVs501888vWbfgE8dch06B%2BbSIDTwMPDo3ckGOqUB2TAVdt7pQ1NSvg8uF%2BeXirF7eWwntaYCaHPheh8w5b3hECuWas7UKegd5hd6pUzwRJ4axQQu9G7QWGMpzv0CDDPoZZZlJY1FGfx834dNl6l6gHIPd38OsGOQKvRS1uvjuIxb%2F5nGsPiILlfmwKlG73SuS3IV6Gd7HxGnYv6kpYcR09jT5X0o0qGIYmO6UtR15tiwj1IpaL3GnhdED7BPV%2FEeez4m&X-Amz-Signature=1c12b58c62c0130310d33b08f7e65ba65e137ab48663cf3c86b5b17b9035f10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
