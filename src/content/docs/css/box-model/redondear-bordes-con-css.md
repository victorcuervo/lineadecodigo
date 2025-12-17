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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHCWCSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFopvPrlXg3zJLnKzgtqCl8zRsX5VbIprr9GKPApLifqAiBGWRbCYySNkynF%2FhqQYFAneStlLvDb8tzzbfM77vbVRCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4sAva27eVst74AIaKtwDEXjjDuegbLj%2BqIfPugAEa2BU1JeksXAuSVSGJ6mI343AgBGaKys%2BSqv45%2FmAuRr%2FwvW2CnfcwFspaLOsjMmgAioxMu1WO24hJjpaI5qr6MHesgjJK28BnZ7WNiRQ5qM8RDqwUBkkjA2T0B0n2yszldRWeySQP3dWK2HNMsley5Vm%2B03vb7syPn7hmO2kvNfDiRWItMBIlpv%2BadKQ9UM4yTb%2F8EyaLBcZDe4jSILPWovW%2FzXawy1XKS%2BdfJvK9K26fOhZZyxMjrmRHjydMIkLDSiruQ7c3NHog5TDKULPXcq74HqxXfaonO3lcw8sV%2FOsE%2FFaBaF9IQwvT0kVAKCDH6B0WcS9J5LBkXPsItju9TueH0Vvo0Vdp%2BZtHqfM6J3be6Fwp28XwoDA5Uw6LFQV71cQOnxP5gntp%2BtaTQvCKqtwIeW5Lkz9oQtKiMq2%2Fas0Xvcsb2ZwLF6UVV1BPgX3iQG2cefvOck3PketO6io%2BXRJuTXOpWCu62KQ0IR3SRv%2F8ejtXRGHuNfJo%2BDeVcEMYr4g3JMgQpSUxFMiDyHQF7%2BMae3%2BSLjE2y0Z3INABCt5a2%2FmP7x9Wnw%2BLIfGXHXWgj%2ByCOyuiOmVoN76AGBDkzBf%2BL6hr0H1Ac%2BxWWAwvp2JygY6pgHhJR9hGU3Femp3rlM12E26jZStiz7V%2BZzbOTikG4WfaST3oEaHESnUYD25VoDHxyxNMVJdWkOBleayi2xfzBMrHzKHV1jl9B9ERRymD0ZvFxCB6ktfEBjkiitc9ZXsrk2fRGUF6EdlrkNikBbZXEomBTJX%2BESrXnUbCdEVPoyhqINA%2FefrfCQ1%2FiV2DTRs4RSLMoooZY6ismIG%2BHx7vhEepoC8p7nE&X-Amz-Signature=834334b87ffe659083cf15266e96956c07f54d6b5e34fe9fe2ab3da5ec69c647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHCWCSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFopvPrlXg3zJLnKzgtqCl8zRsX5VbIprr9GKPApLifqAiBGWRbCYySNkynF%2FhqQYFAneStlLvDb8tzzbfM77vbVRCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4sAva27eVst74AIaKtwDEXjjDuegbLj%2BqIfPugAEa2BU1JeksXAuSVSGJ6mI343AgBGaKys%2BSqv45%2FmAuRr%2FwvW2CnfcwFspaLOsjMmgAioxMu1WO24hJjpaI5qr6MHesgjJK28BnZ7WNiRQ5qM8RDqwUBkkjA2T0B0n2yszldRWeySQP3dWK2HNMsley5Vm%2B03vb7syPn7hmO2kvNfDiRWItMBIlpv%2BadKQ9UM4yTb%2F8EyaLBcZDe4jSILPWovW%2FzXawy1XKS%2BdfJvK9K26fOhZZyxMjrmRHjydMIkLDSiruQ7c3NHog5TDKULPXcq74HqxXfaonO3lcw8sV%2FOsE%2FFaBaF9IQwvT0kVAKCDH6B0WcS9J5LBkXPsItju9TueH0Vvo0Vdp%2BZtHqfM6J3be6Fwp28XwoDA5Uw6LFQV71cQOnxP5gntp%2BtaTQvCKqtwIeW5Lkz9oQtKiMq2%2Fas0Xvcsb2ZwLF6UVV1BPgX3iQG2cefvOck3PketO6io%2BXRJuTXOpWCu62KQ0IR3SRv%2F8ejtXRGHuNfJo%2BDeVcEMYr4g3JMgQpSUxFMiDyHQF7%2BMae3%2BSLjE2y0Z3INABCt5a2%2FmP7x9Wnw%2BLIfGXHXWgj%2ByCOyuiOmVoN76AGBDkzBf%2BL6hr0H1Ac%2BxWWAwvp2JygY6pgHhJR9hGU3Femp3rlM12E26jZStiz7V%2BZzbOTikG4WfaST3oEaHESnUYD25VoDHxyxNMVJdWkOBleayi2xfzBMrHzKHV1jl9B9ERRymD0ZvFxCB6ktfEBjkiitc9ZXsrk2fRGUF6EdlrkNikBbZXEomBTJX%2BESrXnUbCdEVPoyhqINA%2FefrfCQ1%2FiV2DTRs4RSLMoooZY6ismIG%2BHx7vhEepoC8p7nE&X-Amz-Signature=53717398bb2d991f19e5a25a12b8a00f4113658cd7ca2f2288a9e69479ce7c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
