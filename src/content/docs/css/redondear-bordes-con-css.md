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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJMBAEU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJaFwoWH03YznH90kyOuYy3mLlcgx0otJdOgm0QTNwcAiEA%2BUPhGDSf2RFkD2VgVtRk24drsJ7jiHKEMLNNOdjuWV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGlJKFP1rY0pU4OSoCrcA1XXjoyHQy3cd0UXxAisUUe1kntvBCs0e4ujvOIYO7hYudXWwQxXakkfwRfvisItxXmSsPiFBK5PO1WZLobKFBlyjS874%2FI3Gq1v98yWusKL3UwKNdMAyMVgcXgbWrRCLsS%2BnEUimP12SgV2QEIFECjqiGpd3gcxPiJ0YsRqHVhzjVrHj8pAg4cC3OZOL8UJJjQHqnKNYd1u78Q9idY3f5EyBkmF%2BNL9nNBO%2B4byVmlJw1nKJ46IZ1Vri8hXQ7nYhN9%2F%2B4xT%2BOlKls2i5NqNNA9oGnwckZOTotKTks2R1ABgESPBRaP6qYd3ZRUlXFoj1Gf%2BcIjess62pWuSi20TYa8R7MmAK3KKuz%2FZ24T5jOx1pCU9i2mJeJB%2BdEQMQxLbPTcJc6g9izmu9xJUAInCmukzkvG3aaPuWYeqjGrIlUKwhFFv%2BwQMMPlGV%2B6MoWTdyj%2F%2B0h%2FN30ozVCvH9ScHg1PCxUIekp0Rv0Y2Udh4ggkNafAlUlDU71ipaT%2FCT%2BBGhoTkegstF3r5auSziX7sg70IRu51G2L67dozLBT6FgZWsSf2OELng%2Buyd5WWPvhfmXt6vwHlMeWYsL6UwaR2vL3l3%2F86QiNPdY0ETulwK84Tm2nB5134qgaGVAJSMI2MyMkGOqUB1RTHT8YQqE33OogQsSmC7xAM6GqSDLb%2BSsRsWUyuBsI%2F9%2FITHgvIcgZb4bPAk%2B%2F8V2eBAboUHiaDx9sMjsVRz4lX7oSNmYvvKsQ11XKv%2FGzVKXrbBNdMER3edX9UgMn%2FL0nuQ3y7aQpwcnGj20FKb9XhYa68Ng%2BpgayRbsA%2BXcbaYLvJHWbzpiQjF7pbAAxFlihMZLw1IraoTbulJPRbaDrFqLMi&X-Amz-Signature=43ee302bdf9a16ea4fcf4ae1105b3a83b616defe7204cb4aed0b40b5da5148ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJMBAEU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJaFwoWH03YznH90kyOuYy3mLlcgx0otJdOgm0QTNwcAiEA%2BUPhGDSf2RFkD2VgVtRk24drsJ7jiHKEMLNNOdjuWV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGlJKFP1rY0pU4OSoCrcA1XXjoyHQy3cd0UXxAisUUe1kntvBCs0e4ujvOIYO7hYudXWwQxXakkfwRfvisItxXmSsPiFBK5PO1WZLobKFBlyjS874%2FI3Gq1v98yWusKL3UwKNdMAyMVgcXgbWrRCLsS%2BnEUimP12SgV2QEIFECjqiGpd3gcxPiJ0YsRqHVhzjVrHj8pAg4cC3OZOL8UJJjQHqnKNYd1u78Q9idY3f5EyBkmF%2BNL9nNBO%2B4byVmlJw1nKJ46IZ1Vri8hXQ7nYhN9%2F%2B4xT%2BOlKls2i5NqNNA9oGnwckZOTotKTks2R1ABgESPBRaP6qYd3ZRUlXFoj1Gf%2BcIjess62pWuSi20TYa8R7MmAK3KKuz%2FZ24T5jOx1pCU9i2mJeJB%2BdEQMQxLbPTcJc6g9izmu9xJUAInCmukzkvG3aaPuWYeqjGrIlUKwhFFv%2BwQMMPlGV%2B6MoWTdyj%2F%2B0h%2FN30ozVCvH9ScHg1PCxUIekp0Rv0Y2Udh4ggkNafAlUlDU71ipaT%2FCT%2BBGhoTkegstF3r5auSziX7sg70IRu51G2L67dozLBT6FgZWsSf2OELng%2Buyd5WWPvhfmXt6vwHlMeWYsL6UwaR2vL3l3%2F86QiNPdY0ETulwK84Tm2nB5134qgaGVAJSMI2MyMkGOqUB1RTHT8YQqE33OogQsSmC7xAM6GqSDLb%2BSsRsWUyuBsI%2F9%2FITHgvIcgZb4bPAk%2B%2F8V2eBAboUHiaDx9sMjsVRz4lX7oSNmYvvKsQ11XKv%2FGzVKXrbBNdMER3edX9UgMn%2FL0nuQ3y7aQpwcnGj20FKb9XhYa68Ng%2BpgayRbsA%2BXcbaYLvJHWbzpiQjF7pbAAxFlihMZLw1IraoTbulJPRbaDrFqLMi&X-Amz-Signature=4b63d21a6c064941bc290d3cbaa4c526732de6e0285bb938174357707b7adbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
