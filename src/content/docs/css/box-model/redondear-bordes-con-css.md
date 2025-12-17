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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KNFZNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNnH4P8hwtc3fnxhXcOXxmyLBDb21ExOaxgzPt2Jc8pAiATV5ixH2yA%2FGZnd5V155d4bUwhr6vXiqfKNG5nxXU9iir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTnbr%2FUONLe8uP29qKtwDpcNW6dq4%2Bb2usbki29XNdPPS3qrIQks7qBkrp3ngNzVr54LVvJ3ITMb2iaGXSqGVOXKagTY1NDN47aLctK6tnoe9xtstwvPHHWuv%2FX8FskzuyRRI%2BajbouesuxkAqWRefzZmDfU32v%2FArPVnzQc5CYMSm1Cj%2FWFjaUktsZtLPG3W%2BdEa9yFriRARnQerMXG2fFWYmIU%2F3y0HvewfdHiwIF%2BXVtW%2BHeFpxoapOJaOcXqGyWbSPNtu4SzqnrXRfwT9rxNC6Qp%2FdCmMCBbtPB%2FcoSCy2VU8jF4ijHmSPWzUZ%2FYPlLdRCz39UuhhfoOmEvYRl4cUH%2FegHkwwmxBFOCwkSiS4Vhdxgl5IUxylUip3vKw9wGKHRszlxV3jj8%2FbI7rvf3P%2F1Upty1NGWQ%2Bv49oVxMBMCM3rNRTsoI5EI03VopULo5Nus0EzeR8xXNcTGY7VuAn1bY70HRP%2B9fRMqvagOw8tLID9TGPxMEYw0JDW2%2BlYVugSxQnpbyawrxDdTMcY2PsT1EJ7sBHc8mtkUqgwbbZRKJR3f17dbobguUAeUfZ5Z0ewxWiyWBx4U3V4tQtwIAOTACFQPLPKZmJuxLu69Yq85EbMorjeKP2MBqwFaVuarzXNKGdiauj0KIEwxPuHygY6pgEn7R44Fe7NeAIJ9JcZdWSBFnMbcVen3eXHoUxFlz1zuV%2FcLN7x0SSt8qy5H%2FW6n%2B%2FzI3mquMWWsCKvi%2FbVvOaEEmXYJtCl54XC7RKr%2BgUeUtO9rGMvgLZz%2BzyD8jWRDjM8LFAkrlZJ6tpti9QOQgSSPTmutFwGDW7fLDMoCoKaFJik3FRO%2BigXQkeShATZ7Rn%2FMVj7odi7YGN2zlJKz0PfP3otmgH5&X-Amz-Signature=1ea2bfcb21473350a02d196f3729474d15f77eb81daa73d80c25791f249527cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KNFZNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNnH4P8hwtc3fnxhXcOXxmyLBDb21ExOaxgzPt2Jc8pAiATV5ixH2yA%2FGZnd5V155d4bUwhr6vXiqfKNG5nxXU9iir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTnbr%2FUONLe8uP29qKtwDpcNW6dq4%2Bb2usbki29XNdPPS3qrIQks7qBkrp3ngNzVr54LVvJ3ITMb2iaGXSqGVOXKagTY1NDN47aLctK6tnoe9xtstwvPHHWuv%2FX8FskzuyRRI%2BajbouesuxkAqWRefzZmDfU32v%2FArPVnzQc5CYMSm1Cj%2FWFjaUktsZtLPG3W%2BdEa9yFriRARnQerMXG2fFWYmIU%2F3y0HvewfdHiwIF%2BXVtW%2BHeFpxoapOJaOcXqGyWbSPNtu4SzqnrXRfwT9rxNC6Qp%2FdCmMCBbtPB%2FcoSCy2VU8jF4ijHmSPWzUZ%2FYPlLdRCz39UuhhfoOmEvYRl4cUH%2FegHkwwmxBFOCwkSiS4Vhdxgl5IUxylUip3vKw9wGKHRszlxV3jj8%2FbI7rvf3P%2F1Upty1NGWQ%2Bv49oVxMBMCM3rNRTsoI5EI03VopULo5Nus0EzeR8xXNcTGY7VuAn1bY70HRP%2B9fRMqvagOw8tLID9TGPxMEYw0JDW2%2BlYVugSxQnpbyawrxDdTMcY2PsT1EJ7sBHc8mtkUqgwbbZRKJR3f17dbobguUAeUfZ5Z0ewxWiyWBx4U3V4tQtwIAOTACFQPLPKZmJuxLu69Yq85EbMorjeKP2MBqwFaVuarzXNKGdiauj0KIEwxPuHygY6pgEn7R44Fe7NeAIJ9JcZdWSBFnMbcVen3eXHoUxFlz1zuV%2FcLN7x0SSt8qy5H%2FW6n%2B%2FzI3mquMWWsCKvi%2FbVvOaEEmXYJtCl54XC7RKr%2BgUeUtO9rGMvgLZz%2BzyD8jWRDjM8LFAkrlZJ6tpti9QOQgSSPTmutFwGDW7fLDMoCoKaFJik3FRO%2BigXQkeShATZ7Rn%2FMVj7odi7YGN2zlJKz0PfP3otmgH5&X-Amz-Signature=25cef1d177182c5a453089e50fc0fc611274d40234097af054b46efab4702107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
