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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTGDGIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsjD0okRfLQI4LervPFxN3jSNz0zCDSB1I1HGcg9utEAiA3KJQqJAIK8TedQT6e1PGdFwF0Ao9A4SQDKDDysQIW7Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJziBCgH1RyvE2Ul8KtwDSItGE91%2BAJIDixyUV93MgZ8u%2B8SYA%2BzPflLacdZlo8iR0A1XGK%2Fw2i6MXCtDg18xUVsDg0w%2FBbWtxXid7oYBMRPhTBbfi8zTQ1UhLuPGmQ6dMEcB3q1M7eiNQ4H6cR7DBg%2BHIAnQOAKKBnFMv9UKLBIXn4pJjmozDCzNHWhNGfdONhwDSOug6cbIdZ4IrNwgq4I3%2FBUFVDf2X2LCQDlC9FvC4JlLHYY8Yxq9gzKv74gsTGyvYARamHn8r3PoM5FF2nRwH%2BLP0lkSWegE2ROgJ9JwuVWdbzZazopNuUs8DzQLNScD8K5%2FnQ0d0ZrEvhf4%2FE2X24id2ikmbErA28l4CgxrGB4HUeA299QE40dB9IQbAGOD3YXAKNsikCtmGW4jk61ID%2B4%2BgL6Y09NpuVxY1RP0ZQTy7OUD2BwFxOStMuEwC%2BNcQNdGVU54tqOmGKLfsPeaUhtHd6wzcp%2FNCzBbfkkbSZdkMzZVO4VqwNaYnfWfMI4Gm3cvPhyAAD3sVIejk6Jo8BoQ%2F3gyFtsABZE4fEnfpDhq0lIlS1ZRO2rtFTLOTVu0YsFqWKycfUxf0GS1i9O%2BnY%2BPloGsKATzfDwe2uzdtf5SnV%2Fqb8voUbbvpIbwgG0hYAGXGOf8atcw9rKIygY6pgFcbUimJHSfjZPpMfwhN2XfTV8Y0jvcj%2BbLvDGSILXXPPE3SyfZm0teFaGeyc8RBcsCxmnblB6%2B8V%2FLoind8jbxNQZ1pvSApI6ktw42zsCC7LjVB0x2w%2BHWkxcfS2pcDbPeWgoHZDxrclmRHOzMtq0XmeYf7Lnml8wY5M2gI7t8uNT9O0fUunZhFCt4TTsZ3od71K55IrZtth2MWsWItWKIsyaQHjA7&X-Amz-Signature=196863ae3707569a829f24a1fc6ad71194a55f5af41d88978eedb034d4b3413f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTGDGIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsjD0okRfLQI4LervPFxN3jSNz0zCDSB1I1HGcg9utEAiA3KJQqJAIK8TedQT6e1PGdFwF0Ao9A4SQDKDDysQIW7Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJziBCgH1RyvE2Ul8KtwDSItGE91%2BAJIDixyUV93MgZ8u%2B8SYA%2BzPflLacdZlo8iR0A1XGK%2Fw2i6MXCtDg18xUVsDg0w%2FBbWtxXid7oYBMRPhTBbfi8zTQ1UhLuPGmQ6dMEcB3q1M7eiNQ4H6cR7DBg%2BHIAnQOAKKBnFMv9UKLBIXn4pJjmozDCzNHWhNGfdONhwDSOug6cbIdZ4IrNwgq4I3%2FBUFVDf2X2LCQDlC9FvC4JlLHYY8Yxq9gzKv74gsTGyvYARamHn8r3PoM5FF2nRwH%2BLP0lkSWegE2ROgJ9JwuVWdbzZazopNuUs8DzQLNScD8K5%2FnQ0d0ZrEvhf4%2FE2X24id2ikmbErA28l4CgxrGB4HUeA299QE40dB9IQbAGOD3YXAKNsikCtmGW4jk61ID%2B4%2BgL6Y09NpuVxY1RP0ZQTy7OUD2BwFxOStMuEwC%2BNcQNdGVU54tqOmGKLfsPeaUhtHd6wzcp%2FNCzBbfkkbSZdkMzZVO4VqwNaYnfWfMI4Gm3cvPhyAAD3sVIejk6Jo8BoQ%2F3gyFtsABZE4fEnfpDhq0lIlS1ZRO2rtFTLOTVu0YsFqWKycfUxf0GS1i9O%2BnY%2BPloGsKATzfDwe2uzdtf5SnV%2Fqb8voUbbvpIbwgG0hYAGXGOf8atcw9rKIygY6pgFcbUimJHSfjZPpMfwhN2XfTV8Y0jvcj%2BbLvDGSILXXPPE3SyfZm0teFaGeyc8RBcsCxmnblB6%2B8V%2FLoind8jbxNQZ1pvSApI6ktw42zsCC7LjVB0x2w%2BHWkxcfS2pcDbPeWgoHZDxrclmRHOzMtq0XmeYf7Lnml8wY5M2gI7t8uNT9O0fUunZhFCt4TTsZ3od71K55IrZtth2MWsWItWKIsyaQHjA7&X-Amz-Signature=8fd719712ed1df6d69d83f6d5bf67b687b62cc5ae9d6f6f694c4ea4a0dbd2572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
