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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6L54SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC3uBOakgNme81zsSezMhNPZpviC4FLJCSlFXefs6WqAiEAtmbyr9yG6xSOK0WzvoxlbibtWAnNfRAH%2FWiOXLCp9isqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4EwXPkoxYLIP4USyrcA4ZPyiIb%2FlbdbatRjtzFXtv4xW2step7E31xOlYB%2FYb5l86jbZRVLn%2FeCW8aCxwtTZFLijSTR0kH7SxWj1f30XO0VgTaq6BZ7qB3V4tEZAqwhwyGkjjIzE3LOlXdeiZglExq7%2FVvqtWzXxSdD8A8dv4RC5C90oVlFsmFl7GatKRutNhyJhQxDjn2KNLa2LXBF3I%2BJkpsczwTv34vscFDrKz3BPlShZRKtwqa%2BU48AcSqQ7cC32KkKW3ExAC26QwrOcxLP9saz3VLCKiHf1jf3WCLAFE9Up0eatW9RvCPfJB%2FrCwarXNbNaDxmaytLYoaYrECgLWFNVrrTRxj0u%2BF52abJgh2ndvimhfpOQuogvzIawnhz1r%2F2cqo0zL%2B%2FvmMD3g3rvlA5xFVoiCxf4gPbyZhtlppH2UalswfACPdMv9xh1G8appdC7Y9SsLSyBPPQ5PHGQyp%2BxvuQWWP6rrQe70lyEFq7EtgPULt%2BG12mzDoh9bleDwYViN2oPUpb%2FmSNCh8EAii4qoPYhTNsoBvDUuDNDoQs0xcxkRnDlew%2FiFGsLKq%2FX%2BO9vqvmzYMTRTtScVoSSugNU6Iv%2BIxHKan%2FFUiWqTJXoUP5YPWXlKwQJK3GyzgUdFrZG6IYTM2MP2ei8oGOqUBCNHXTkFkBhE1lPc8bej2nhm7pwx%2FWuJpqJIXCskp0FO2I1zXo5k8mXiqJ3wyRWnWh3kwyBQ3OVJCbkQ0hcMKUQWvPL0ywro%2BCSPVIeAFG13cgsciOKD2ckf0r9syMrqyw6IozqUb9Lc%2Fm1xyyFCH5wK1yL6wieDoUB%2Fy9GPXagGmpsI5r20%2FStYTcCH8k9l29az%2FXjSRNtpaamT%2BXh3L18W22HFb&X-Amz-Signature=e7c3086436c8d83a84ce18d01e5bb76289191afba03ea4bbbadc033f28dc911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6L54SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC3uBOakgNme81zsSezMhNPZpviC4FLJCSlFXefs6WqAiEAtmbyr9yG6xSOK0WzvoxlbibtWAnNfRAH%2FWiOXLCp9isqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4EwXPkoxYLIP4USyrcA4ZPyiIb%2FlbdbatRjtzFXtv4xW2step7E31xOlYB%2FYb5l86jbZRVLn%2FeCW8aCxwtTZFLijSTR0kH7SxWj1f30XO0VgTaq6BZ7qB3V4tEZAqwhwyGkjjIzE3LOlXdeiZglExq7%2FVvqtWzXxSdD8A8dv4RC5C90oVlFsmFl7GatKRutNhyJhQxDjn2KNLa2LXBF3I%2BJkpsczwTv34vscFDrKz3BPlShZRKtwqa%2BU48AcSqQ7cC32KkKW3ExAC26QwrOcxLP9saz3VLCKiHf1jf3WCLAFE9Up0eatW9RvCPfJB%2FrCwarXNbNaDxmaytLYoaYrECgLWFNVrrTRxj0u%2BF52abJgh2ndvimhfpOQuogvzIawnhz1r%2F2cqo0zL%2B%2FvmMD3g3rvlA5xFVoiCxf4gPbyZhtlppH2UalswfACPdMv9xh1G8appdC7Y9SsLSyBPPQ5PHGQyp%2BxvuQWWP6rrQe70lyEFq7EtgPULt%2BG12mzDoh9bleDwYViN2oPUpb%2FmSNCh8EAii4qoPYhTNsoBvDUuDNDoQs0xcxkRnDlew%2FiFGsLKq%2FX%2BO9vqvmzYMTRTtScVoSSugNU6Iv%2BIxHKan%2FFUiWqTJXoUP5YPWXlKwQJK3GyzgUdFrZG6IYTM2MP2ei8oGOqUBCNHXTkFkBhE1lPc8bej2nhm7pwx%2FWuJpqJIXCskp0FO2I1zXo5k8mXiqJ3wyRWnWh3kwyBQ3OVJCbkQ0hcMKUQWvPL0ywro%2BCSPVIeAFG13cgsciOKD2ckf0r9syMrqyw6IozqUb9Lc%2Fm1xyyFCH5wK1yL6wieDoUB%2Fy9GPXagGmpsI5r20%2FStYTcCH8k9l29az%2FXjSRNtpaamT%2BXh3L18W22HFb&X-Amz-Signature=825fd0b407ba5bff26cd4d0052d5e1b26ee66cbeeb83a7cb833d51cad97191d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
