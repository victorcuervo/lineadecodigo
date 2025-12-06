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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIGC2JD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmuVcIlzyR3chr6i0yCDlRVkPD107YEx0kMogfAFTYSAiApN9X3JeNe47gV5sfZYxDkPPxRX2kVIjJX%2FuXx4Ee38Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwENO33pCdb764IY4KtwDkUvHsldWem8DO6muJuQm5rpHlEEG6B%2Bb3XUzwhriZ7PkII6kAOry%2FTNmzuEEqskACCPGQVHG%2F20S77ER6jWelkmi%2FxvVXWEqNbgvJLetNEKkxtieOQba5tB%2BT9OX%2BbUEGPDIljEztfc2xCZdkbjtLzxj7WK0xN04Fdhhopca8ZdpU7Ve73qibG4Zmas2mw8hqM8x8QRJavN5iZjemtCAhjZ7%2FKUdSQ7qHEyRIFikhsFMhd%2B7eZ6uVIzkN7ojg2cwC%2FxjkzLCU35fJvpI3WARuTAJmdQSIej40Ui6jVQMcytynJFiUjJo8erv0eo%2B374PPS8vxw2HV9CD0WgsDmNl1e1crXRWMV6jTbwR5D%2FKzxAYrxkqtnXUvtSafNMLnt3fdlePtqf1IfFURlr%2BRNdPDZraGiuVaNKcjdNijRBF5401RxELBTWGGfOd2LPw1F6FuyNXE27L5mBBwMWpwWzkrAIPy57tmE59DnHO0ZmjFHwus%2BQ9sgDc%2Bs6wF2Q5LtxEyzJHTybKGMNqgSuwyfRK6vs2oM8Le3QuCp2bXMIEnNrvzflfNx08RHjjFeUM43mmmHAQM%2FEtMamWjsxfqVPTb5mHfbTdYnzKh67jaxFic7m0IHVHZEku6rtm4zgwuKbQyQY6pgF%2BDXdEggV%2FxpL%2B6r0gUKsldreoqteg6sofrAabDNlkOuT0PZvvGQHU2O%2FWRlT7txUODV8upGHamT3TghLD%2FWA4%2F9EEKy8hklqJvEZANclUJt%2FJnoj21HwrGaLKgnKn7BB%2FVWyRturlyp7bC7aYNQtEUFEAqDLxkgi1EH2hhYIdi%2Bf9AeGNwtxzoOmrVTD5nbmquVkbCyHm1ndzQJseWw2rAkj1vPhz&X-Amz-Signature=e1dfdfe1829e10735f3eed9e2621a9550d3b10eebb92868b34886ae3065d2d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIGC2JD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmuVcIlzyR3chr6i0yCDlRVkPD107YEx0kMogfAFTYSAiApN9X3JeNe47gV5sfZYxDkPPxRX2kVIjJX%2FuXx4Ee38Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwENO33pCdb764IY4KtwDkUvHsldWem8DO6muJuQm5rpHlEEG6B%2Bb3XUzwhriZ7PkII6kAOry%2FTNmzuEEqskACCPGQVHG%2F20S77ER6jWelkmi%2FxvVXWEqNbgvJLetNEKkxtieOQba5tB%2BT9OX%2BbUEGPDIljEztfc2xCZdkbjtLzxj7WK0xN04Fdhhopca8ZdpU7Ve73qibG4Zmas2mw8hqM8x8QRJavN5iZjemtCAhjZ7%2FKUdSQ7qHEyRIFikhsFMhd%2B7eZ6uVIzkN7ojg2cwC%2FxjkzLCU35fJvpI3WARuTAJmdQSIej40Ui6jVQMcytynJFiUjJo8erv0eo%2B374PPS8vxw2HV9CD0WgsDmNl1e1crXRWMV6jTbwR5D%2FKzxAYrxkqtnXUvtSafNMLnt3fdlePtqf1IfFURlr%2BRNdPDZraGiuVaNKcjdNijRBF5401RxELBTWGGfOd2LPw1F6FuyNXE27L5mBBwMWpwWzkrAIPy57tmE59DnHO0ZmjFHwus%2BQ9sgDc%2Bs6wF2Q5LtxEyzJHTybKGMNqgSuwyfRK6vs2oM8Le3QuCp2bXMIEnNrvzflfNx08RHjjFeUM43mmmHAQM%2FEtMamWjsxfqVPTb5mHfbTdYnzKh67jaxFic7m0IHVHZEku6rtm4zgwuKbQyQY6pgF%2BDXdEggV%2FxpL%2B6r0gUKsldreoqteg6sofrAabDNlkOuT0PZvvGQHU2O%2FWRlT7txUODV8upGHamT3TghLD%2FWA4%2F9EEKy8hklqJvEZANclUJt%2FJnoj21HwrGaLKgnKn7BB%2FVWyRturlyp7bC7aYNQtEUFEAqDLxkgi1EH2hhYIdi%2Bf9AeGNwtxzoOmrVTD5nbmquVkbCyHm1ndzQJseWw2rAkj1vPhz&X-Amz-Signature=fe4939e8e77a780c8d41c3266597f506b25839a6c97a64d5591e20d19f8d4666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
