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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MWHMZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvxnCqETYPacPDjLBP5eNsNaDeKzptn6d3EsxyruBnlAiEA9T315sM6ms0674Q7nYL5oJV5sm7tt1o17YY%2B2SVpGg4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRDgFsNyORXuF%2Br4CrcA%2FA9xBTXEwtHq8vlZ272wrbkjaUJwVRZiNIac2ftyNGkrXfLRGba7MVPQuPHnDy5WYRhyM2HV8nvSPNBXqIBSz9om%2BHGFSsemxbXNWY3bNsOBWFiPOhprGiThheVzrZrIGVxjssg%2B0gC9w24jqE2H8%2BruHxmYG5JnHw02V4u1J%2BeY4yzqLWqF4f%2BmTP3pgE3NZ%2F%2BLpQrmtNcKcGGPaF4229r436GTB6jZFQBiCdsLH7F1WgilUep843gP6HwzyQRgjzcJbcBnzStEnaz6NoMULQE5IIytOfkACJpW8CRp68ezKYgb%2FDryJyroGbnslbE8prJtgh8EmrQ4wCJ5BpkqPsTM5xY2IEh9DQDT9dpKLSVvI39bMCL5obHAzvKoXuyEGBiHKtxryiLIILWAUyZI4P%2BHDodvaVr1nDjm%2FNFMIk9bfg2wzdFL5ftb9ozp7pSNHYONQ2gAxKk92Z2mFZ4V6p1%2BdpCclQCM6iu%2FpWQ%2F5Z2VbcweKp6xFerYsQvluZqTAW8fx0Kzy02ItsfQ0FfUenfElC1GwG5imq11ehMx%2B6kaMczCCShVd%2F%2Fdqi0x2G8VX1y%2BAcAlQwJUS%2FiZ6OM526VKxlMYZuRnI4Fg1GmKEXL1FTMyt%2Bm%2BCF5IyGHMMygi8oGOqUB0tn1MMEaHA50rqzlgAL2UKdhAkJmxPVj18i2AyCp9HvuAAjIAAcd%2FLLSCYu3X8Q0FZlGATPCq5WxT8%2FACYtpZ%2F1HFphnitIyV2bWR88AQZG2azFV7j5ykiMcVFsuGoZGemeTeilH9UxsAoHuqflaqvkX3gyB3WyzOLjPC%2F0%2BQKlLW%2Fku23uRR00zzvjvzA51ReH7Af4nC7lA7smv3OdHl2xurjay&X-Amz-Signature=bf9558c290778ba40b41e71b8fd719526b4400ab3df5bd912b612066257bdaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MWHMZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvxnCqETYPacPDjLBP5eNsNaDeKzptn6d3EsxyruBnlAiEA9T315sM6ms0674Q7nYL5oJV5sm7tt1o17YY%2B2SVpGg4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRDgFsNyORXuF%2Br4CrcA%2FA9xBTXEwtHq8vlZ272wrbkjaUJwVRZiNIac2ftyNGkrXfLRGba7MVPQuPHnDy5WYRhyM2HV8nvSPNBXqIBSz9om%2BHGFSsemxbXNWY3bNsOBWFiPOhprGiThheVzrZrIGVxjssg%2B0gC9w24jqE2H8%2BruHxmYG5JnHw02V4u1J%2BeY4yzqLWqF4f%2BmTP3pgE3NZ%2F%2BLpQrmtNcKcGGPaF4229r436GTB6jZFQBiCdsLH7F1WgilUep843gP6HwzyQRgjzcJbcBnzStEnaz6NoMULQE5IIytOfkACJpW8CRp68ezKYgb%2FDryJyroGbnslbE8prJtgh8EmrQ4wCJ5BpkqPsTM5xY2IEh9DQDT9dpKLSVvI39bMCL5obHAzvKoXuyEGBiHKtxryiLIILWAUyZI4P%2BHDodvaVr1nDjm%2FNFMIk9bfg2wzdFL5ftb9ozp7pSNHYONQ2gAxKk92Z2mFZ4V6p1%2BdpCclQCM6iu%2FpWQ%2F5Z2VbcweKp6xFerYsQvluZqTAW8fx0Kzy02ItsfQ0FfUenfElC1GwG5imq11ehMx%2B6kaMczCCShVd%2F%2Fdqi0x2G8VX1y%2BAcAlQwJUS%2FiZ6OM526VKxlMYZuRnI4Fg1GmKEXL1FTMyt%2Bm%2BCF5IyGHMMygi8oGOqUB0tn1MMEaHA50rqzlgAL2UKdhAkJmxPVj18i2AyCp9HvuAAjIAAcd%2FLLSCYu3X8Q0FZlGATPCq5WxT8%2FACYtpZ%2F1HFphnitIyV2bWR88AQZG2azFV7j5ykiMcVFsuGoZGemeTeilH9UxsAoHuqflaqvkX3gyB3WyzOLjPC%2F0%2BQKlLW%2Fku23uRR00zzvjvzA51ReH7Af4nC7lA7smv3OdHl2xurjay&X-Amz-Signature=543e1f40b413757000a757d1eafae61f38cef3a9b8a8d1707d84bbb48de315b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
