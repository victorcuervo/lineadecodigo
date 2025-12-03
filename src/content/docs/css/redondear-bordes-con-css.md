---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BQUM5U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAea7ohBLXBK9wNYxPPNMHFLN8czOgno18auwrHlqDpaAiEA43y6PIm%2FK4VESK%2FiIMTubgCbtp0v%2B4tk7%2BICvAUfgPEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBPllcWERO8G4jlq9CrcA%2FarQxwSg7cBhh%2FAi0DCPtcLcQztt%2FQoixQEFWUFgrfd%2FB5Onm0ICEwg6NJ92hKXPFgQn1sja57YpodcQblkbloC3D5lfFRTLKuof5xZ%2Fd%2FsXJBXFzJhmzK5cnJozFvJO17GJtikiLul5OZ0KdXQ7Y4nB%2Bz%2BDanzknKxLrJ64c9jc1I8L43JaRQtOdMipimimXQlVQZxCbRhlcfNHdD9xpN9zQRsTOqdcCTpBqQFoCNPzsTWLfZng%2FRqpnUKimyhSFjLzulPWJQCuGSSJXbUaSqPK45UF2nm1xybupPDaY%2B5q8yETgcDfyB8z9k9vmglTkOl7FMWxxHGtrPCpY1zJfsIfkKg7xinFKHXCNRisdzWzM2kT%2BuGZo0UR4rEcDfZKueSbfX0MC7klvOfJbuOpudq9rBkgsJeSWmcI%2FtPF0gvbbojzDXeEVTTTLWmSu55ZD0KFPae19NLN3Prz7%2B8nH6KHhTvjLvQOtQeNu9WxMx2EcuzGHyaOS8z89wjvwMVj3uEG%2FcjyvkVGtIlEGliLDH4TYP%2B9Ktt48rCZhpxRvtRd%2FNDoPYJW9gXcLW079Hx7%2BarfF5F2FwBaO0O0Cp8AfEJZznKxMnH4MHSXY%2FMojKCzFwdPDCxVRDSGj9IMKvcwskGOqUBFaVPzeLnfTSB7%2FzKE7j%2BQtjduRQDn6S6%2B6%2FCfo%2BTHZbpg9bQ50JQhAo4z7VaNvDc%2FOiFKiipC43hD4Ox2nRM7XuHdAFom3vhW9ijDS1uCH%2F6athFU4cJD6aiVYDM56pbPzu3cHzf4xrcmRbzW9pvI4vtRy4THbPOMRDDU%2Fomq%2Bzjg3XDaQPHz0Fv5MzVQac09F7YsFuD04c5V%2F%2FeKsGiUrEELT96&X-Amz-Signature=4823dd67344783bf216eb1f9c696fb45e28b479151266bd61e834eb8cd45dc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BQUM5U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAea7ohBLXBK9wNYxPPNMHFLN8czOgno18auwrHlqDpaAiEA43y6PIm%2FK4VESK%2FiIMTubgCbtp0v%2B4tk7%2BICvAUfgPEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBPllcWERO8G4jlq9CrcA%2FarQxwSg7cBhh%2FAi0DCPtcLcQztt%2FQoixQEFWUFgrfd%2FB5Onm0ICEwg6NJ92hKXPFgQn1sja57YpodcQblkbloC3D5lfFRTLKuof5xZ%2Fd%2FsXJBXFzJhmzK5cnJozFvJO17GJtikiLul5OZ0KdXQ7Y4nB%2Bz%2BDanzknKxLrJ64c9jc1I8L43JaRQtOdMipimimXQlVQZxCbRhlcfNHdD9xpN9zQRsTOqdcCTpBqQFoCNPzsTWLfZng%2FRqpnUKimyhSFjLzulPWJQCuGSSJXbUaSqPK45UF2nm1xybupPDaY%2B5q8yETgcDfyB8z9k9vmglTkOl7FMWxxHGtrPCpY1zJfsIfkKg7xinFKHXCNRisdzWzM2kT%2BuGZo0UR4rEcDfZKueSbfX0MC7klvOfJbuOpudq9rBkgsJeSWmcI%2FtPF0gvbbojzDXeEVTTTLWmSu55ZD0KFPae19NLN3Prz7%2B8nH6KHhTvjLvQOtQeNu9WxMx2EcuzGHyaOS8z89wjvwMVj3uEG%2FcjyvkVGtIlEGliLDH4TYP%2B9Ktt48rCZhpxRvtRd%2FNDoPYJW9gXcLW079Hx7%2BarfF5F2FwBaO0O0Cp8AfEJZznKxMnH4MHSXY%2FMojKCzFwdPDCxVRDSGj9IMKvcwskGOqUBFaVPzeLnfTSB7%2FzKE7j%2BQtjduRQDn6S6%2B6%2FCfo%2BTHZbpg9bQ50JQhAo4z7VaNvDc%2FOiFKiipC43hD4Ox2nRM7XuHdAFom3vhW9ijDS1uCH%2F6athFU4cJD6aiVYDM56pbPzu3cHzf4xrcmRbzW9pvI4vtRy4THbPOMRDDU%2Fomq%2Bzjg3XDaQPHz0Fv5MzVQac09F7YsFuD04c5V%2F%2FeKsGiUrEELT96&X-Amz-Signature=96b06d44abdda3323de1a102437412ac57caf9ae7c89bef0b7e1115f2868d26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
