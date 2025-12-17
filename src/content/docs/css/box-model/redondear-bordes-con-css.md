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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAFWWE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPOHpG%2BNqrrcWXc%2FhUZMn1vXL0QIG3o4sTIpGvpl2thAiATzPll%2BwaDhPUHmLP1nok2Cm8g7Setq5gG1LBpZHnS1Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FjVGrsbMCmAT58SsKtwDRE7g4I73zqmn9gHsy%2B6%2BfPBSfbC17iO97JEOdl8PaQ8mSRzQcPp5P9dc%2Fz8t0qBdB1WCvnpEjXDAiawJPC67lneFvlsytnbSukeKwg1aeFT1up7RR8gqqMoWRIGIAMsqIfJwT9%2Bg88CWotrzI29N58OI7rMooq13W%2FspXQlvtaMJauFeJYiCuiERyE0xdSVzM6v0gbPd1jQ%2BRBPwCD5%2FYcSsoy5wPDSJcpjh0dLp5eji8akckMqhLT6ptl8c1LYS%2FtbbJYkXZOmjguy0NsW2nrajeN40NL0kLoRmHJC7JmPhR7dF4OAKXI7s5HzIkJ3HPfL4ZI0djyOnXLNEwrwMPMMEFMV2%2Bj4I3f3%2FoyrwDrh3%2FZAS8cozlCh%2BbMpVR4%2BLWbPf5D4FUAwWJmqtlP2popOqWdTySwH%2FxzuzF0s9Pof6v4r1T2SrRrdJzhS4vBwU84lCBa6TVGI0l0DaTyOCP5iwVGNCg9FsMUWFIcawzK%2F1F2T80A4wtmGlmrbpAtKAAR4hf1Q9FhAujl5Oj3P0DEZx2ghu8ZFCxiXMBoW0Si7FRMxmMlhbVXck5I%2B2yoCCqHpPI6P1ZKzEK%2Bmv9ih%2BnHvwZKoOGlCHZ7E%2BaqzoGTlwLL5lal%2BSMk1HjpowlriJygY6pgEyn%2BvbhFHGPxDgPTtkBe4fcwQzPehdpS5hU0%2FDTmEGduxeX%2BhixM1wvPSIg9zT32KOaigIqpPNJswffwdhQEx3fc3Ph%2Fu7Wz4J4D1zQZ62ZUnvrm5fJYdDkXCLTypGjZL2kewn4rY0n92InXYIXICxjQNbBY0K3EPkUqOsZZ0GXSVZJF%2BbNWof1qp8ZeRcK2pk1GTCIx64YluqIJ21iWrL5gf2Nw9e&X-Amz-Signature=2680c8a0a03925de2c4d1a7f53ab8df433059bb434ef522b1292155fc4718061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAFWWE7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPOHpG%2BNqrrcWXc%2FhUZMn1vXL0QIG3o4sTIpGvpl2thAiATzPll%2BwaDhPUHmLP1nok2Cm8g7Setq5gG1LBpZHnS1Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2FjVGrsbMCmAT58SsKtwDRE7g4I73zqmn9gHsy%2B6%2BfPBSfbC17iO97JEOdl8PaQ8mSRzQcPp5P9dc%2Fz8t0qBdB1WCvnpEjXDAiawJPC67lneFvlsytnbSukeKwg1aeFT1up7RR8gqqMoWRIGIAMsqIfJwT9%2Bg88CWotrzI29N58OI7rMooq13W%2FspXQlvtaMJauFeJYiCuiERyE0xdSVzM6v0gbPd1jQ%2BRBPwCD5%2FYcSsoy5wPDSJcpjh0dLp5eji8akckMqhLT6ptl8c1LYS%2FtbbJYkXZOmjguy0NsW2nrajeN40NL0kLoRmHJC7JmPhR7dF4OAKXI7s5HzIkJ3HPfL4ZI0djyOnXLNEwrwMPMMEFMV2%2Bj4I3f3%2FoyrwDrh3%2FZAS8cozlCh%2BbMpVR4%2BLWbPf5D4FUAwWJmqtlP2popOqWdTySwH%2FxzuzF0s9Pof6v4r1T2SrRrdJzhS4vBwU84lCBa6TVGI0l0DaTyOCP5iwVGNCg9FsMUWFIcawzK%2F1F2T80A4wtmGlmrbpAtKAAR4hf1Q9FhAujl5Oj3P0DEZx2ghu8ZFCxiXMBoW0Si7FRMxmMlhbVXck5I%2B2yoCCqHpPI6P1ZKzEK%2Bmv9ih%2BnHvwZKoOGlCHZ7E%2BaqzoGTlwLL5lal%2BSMk1HjpowlriJygY6pgEyn%2BvbhFHGPxDgPTtkBe4fcwQzPehdpS5hU0%2FDTmEGduxeX%2BhixM1wvPSIg9zT32KOaigIqpPNJswffwdhQEx3fc3Ph%2Fu7Wz4J4D1zQZ62ZUnvrm5fJYdDkXCLTypGjZL2kewn4rY0n92InXYIXICxjQNbBY0K3EPkUqOsZZ0GXSVZJF%2BbNWof1qp8ZeRcK2pk1GTCIx64YluqIJ21iWrL5gf2Nw9e&X-Amz-Signature=8a24dc7615a54a8339641688ec0df786d912eba761f0cd8c8a164274995efb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
