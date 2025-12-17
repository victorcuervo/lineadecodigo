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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TP25SV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET6IrGEV%2FgKqJLwSpWP6q31B4H%2B4AETskFfeCKtUZnTAiA4rl%2FA73kJWprk057A7niezkctuoHKj2oj%2FVLnKGdoVSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKzueZJ4DCMbR0lJ3KtwDaQOSejl78CxfY%2FZ3eYxaBnC%2Fl%2FQdWXXzS4e%2FpcBUDAMG7S37b3rP1hbtX%2FVTubTR5tmM2SHUbSJMXrasB%2BG3AuUGubeg9UCofpOTacBF86uNNXClzPRMWvk4EwNqHTpjaYV0utBGz4x2e4iaemw0hD%2F94wAvVtaXH1uiBl8ezDv3Td0Vm2OsIEdopI6qQFycwF08v%2BXctwrnvPrqm9pUChuaWsNcRG%2F0lmfDuFvyVFZOpabx2Lul5NTLUE0JdlPuqf1SbEKBWVB50aIYCUTu6Joo%2FRCR4m1bLpyi0Rb4ZzvjuYEhEGTmSKwkeJXWL0kN5T6Cca%2B0azH38N8g8OghidJsdN8cxb5UFOfSbIxlXGC1IMvmiAHW4WucDRx%2BXgr9zJQ%2FhSCqJuV5wqWQxQ4IXJ6e0RfxpOG%2F2FLK3CgK8iSB66sNPtvrSyucb2uPvZOhNyGRF7exyyrNJzEPy70b8DfyekYzDik9HjjRTxLFOqUBOGUqDCaFDTeeSldIEtoh5ZQvYs34Cg0cC6MzFB7e%2B3cKXzEfvYOysqbHyLA%2FRAo%2BC1zA1KXCV8zUXb%2BBPxKmNR7Fa5JfCCmJc4WFnqIQh1PzKigWcwQ%2FC7nXz3gAEyRLgzf8kbAFpEz%2BUk0w1oKJygY6pgHicOl%2FbZW4hWNmXf1Kse5syuQLmxy72cXQvWgYXn1yU7dReOA3mzsyiNu5NsaTKA2ztkG30YMGKAm3yUHF3uDKvHzVR0x7H%2FwU%2BoFw1x5paErpVVtslVWb4lhCMVyHF4BDLACX4sM3yOTJjgpIQwi72L5Htu55l2JX4MZmcNvnY1Wfw%2Fov%2F1Qv8C2WEj58nnZm1Rz8DEbieSax8QkFBxACscy%2BOYCt&X-Amz-Signature=5100d02da28af148d49664252505eeeda17f463da0aea0346ce82792946af647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TP25SV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET6IrGEV%2FgKqJLwSpWP6q31B4H%2B4AETskFfeCKtUZnTAiA4rl%2FA73kJWprk057A7niezkctuoHKj2oj%2FVLnKGdoVSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKzueZJ4DCMbR0lJ3KtwDaQOSejl78CxfY%2FZ3eYxaBnC%2Fl%2FQdWXXzS4e%2FpcBUDAMG7S37b3rP1hbtX%2FVTubTR5tmM2SHUbSJMXrasB%2BG3AuUGubeg9UCofpOTacBF86uNNXClzPRMWvk4EwNqHTpjaYV0utBGz4x2e4iaemw0hD%2F94wAvVtaXH1uiBl8ezDv3Td0Vm2OsIEdopI6qQFycwF08v%2BXctwrnvPrqm9pUChuaWsNcRG%2F0lmfDuFvyVFZOpabx2Lul5NTLUE0JdlPuqf1SbEKBWVB50aIYCUTu6Joo%2FRCR4m1bLpyi0Rb4ZzvjuYEhEGTmSKwkeJXWL0kN5T6Cca%2B0azH38N8g8OghidJsdN8cxb5UFOfSbIxlXGC1IMvmiAHW4WucDRx%2BXgr9zJQ%2FhSCqJuV5wqWQxQ4IXJ6e0RfxpOG%2F2FLK3CgK8iSB66sNPtvrSyucb2uPvZOhNyGRF7exyyrNJzEPy70b8DfyekYzDik9HjjRTxLFOqUBOGUqDCaFDTeeSldIEtoh5ZQvYs34Cg0cC6MzFB7e%2B3cKXzEfvYOysqbHyLA%2FRAo%2BC1zA1KXCV8zUXb%2BBPxKmNR7Fa5JfCCmJc4WFnqIQh1PzKigWcwQ%2FC7nXz3gAEyRLgzf8kbAFpEz%2BUk0w1oKJygY6pgHicOl%2FbZW4hWNmXf1Kse5syuQLmxy72cXQvWgYXn1yU7dReOA3mzsyiNu5NsaTKA2ztkG30YMGKAm3yUHF3uDKvHzVR0x7H%2FwU%2BoFw1x5paErpVVtslVWb4lhCMVyHF4BDLACX4sM3yOTJjgpIQwi72L5Htu55l2JX4MZmcNvnY1Wfw%2Fov%2F1Qv8C2WEj58nnZm1Rz8DEbieSax8QkFBxACscy%2BOYCt&X-Amz-Signature=4bbf9a7b8eb8e28436719c422939816203ae61dde70504cdddec3a2fe42dff09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
