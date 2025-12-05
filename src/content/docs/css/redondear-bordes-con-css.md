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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665636O6XW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkc3TFMtFTOzdgsKCVPjwX9WBMsUACsF7QihfEqMbKwIgOUNzn87WBbkNqaIcLGUbWvk6xINOhyGL3jYP9mL7Vu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKpwauS2W9tTouRJ1CrcA49rM5V5W1h%2B8wyf%2FPP9IJlyMdLKGLvl1IIGvogFOfa38tddUa7rilTFWypo%2FCjtZrLROno4tzkgTQ9VK4jFikqB8Je%2B482jgsv9JAEg7e3YqT1pmG4xBiZBETOfSywwrdsvMoJGzGUpbW0tfapDjTFtH%2BBI0gClkpSjN4P4oen1fRq9oKpazv4SrhhNme55ZbTyYLC7oSC7Hy0InOby66%2FedWZq5%2FEYidbwms3eIWQwnqNaP77mfGz1yNryI6uwIbTw8%2Bt%2FG4w5YqJ4%2Bqx2yLYtNXSvgQ60vuzuDP33ln%2F9vZq4vj1Z56fLIDx0lMdOAHFh39KjnO%2Fx2CRyQI1DCONoF%2F41p%2FenUR5Dky%2BZwxy88Q5aUDHc5jDf9OL3LjtJDiMzQSNKu%2BtjKdNqA1CvxkZgAdxIRft7rd6Yek1Nlj8LLlIsBvJtWZ25N95XBCMaw67h29HtcRIyykBarscPsDO2xtV1L7T2mzXxe61w4g7gsN%2Fc7bf0b8jc0D%2Bv675x42LU1SQq0Vn4WMsoDqexQSFsCVIm901z8qfyUBcbbZc2Qqp5w5v3BiaqN8zF3PxrAQ4Md4roXfTKcx012ibX2DbkJfx2MEuvby9jdcLbvx5iqgT2RuEwADoyZpfSMJzPyskGOqUBhXLRyYSuBWR2p30DL61F69sv8%2BQxdZP8jWLspCy5DbHT19KJ9o9eIsr1xVTsTPV6Pc64sP8YwuwbWokWesdTQykuqINTO9XYn3peapgA8WBhuadxXPGnWs%2BBb1SVFkPX4LH4PELhG%2Bx3xmxA9911cWAxK17%2FiQcP7gM7XD1O1OKfe1yrb230emsw0GIsckZ3phBhPCzJRAcXjsg5%2B8inam%2FPaShQ&X-Amz-Signature=a778edcc91d69ae19ad9a32b58d887c53ee944580b562f0ef8432091a9622f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665636O6XW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkc3TFMtFTOzdgsKCVPjwX9WBMsUACsF7QihfEqMbKwIgOUNzn87WBbkNqaIcLGUbWvk6xINOhyGL3jYP9mL7Vu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKpwauS2W9tTouRJ1CrcA49rM5V5W1h%2B8wyf%2FPP9IJlyMdLKGLvl1IIGvogFOfa38tddUa7rilTFWypo%2FCjtZrLROno4tzkgTQ9VK4jFikqB8Je%2B482jgsv9JAEg7e3YqT1pmG4xBiZBETOfSywwrdsvMoJGzGUpbW0tfapDjTFtH%2BBI0gClkpSjN4P4oen1fRq9oKpazv4SrhhNme55ZbTyYLC7oSC7Hy0InOby66%2FedWZq5%2FEYidbwms3eIWQwnqNaP77mfGz1yNryI6uwIbTw8%2Bt%2FG4w5YqJ4%2Bqx2yLYtNXSvgQ60vuzuDP33ln%2F9vZq4vj1Z56fLIDx0lMdOAHFh39KjnO%2Fx2CRyQI1DCONoF%2F41p%2FenUR5Dky%2BZwxy88Q5aUDHc5jDf9OL3LjtJDiMzQSNKu%2BtjKdNqA1CvxkZgAdxIRft7rd6Yek1Nlj8LLlIsBvJtWZ25N95XBCMaw67h29HtcRIyykBarscPsDO2xtV1L7T2mzXxe61w4g7gsN%2Fc7bf0b8jc0D%2Bv675x42LU1SQq0Vn4WMsoDqexQSFsCVIm901z8qfyUBcbbZc2Qqp5w5v3BiaqN8zF3PxrAQ4Md4roXfTKcx012ibX2DbkJfx2MEuvby9jdcLbvx5iqgT2RuEwADoyZpfSMJzPyskGOqUBhXLRyYSuBWR2p30DL61F69sv8%2BQxdZP8jWLspCy5DbHT19KJ9o9eIsr1xVTsTPV6Pc64sP8YwuwbWokWesdTQykuqINTO9XYn3peapgA8WBhuadxXPGnWs%2BBb1SVFkPX4LH4PELhG%2Bx3xmxA9911cWAxK17%2FiQcP7gM7XD1O1OKfe1yrb230emsw0GIsckZ3phBhPCzJRAcXjsg5%2B8inam%2FPaShQ&X-Amz-Signature=be7d21e8bf9f311dd7256ea8ec52068fbfbbcd6602c7021df8b0081c4e152164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
