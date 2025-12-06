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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KU6KGCX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4hJbT54BXbRYtgs2Ve7kvaVUHd7%2FZTLBwD31fnRcowIhANH7MZx6VIMvyZewfh%2BCMXWD5VPj%2BaQ4gtEbVtvHGqNlKv8DCHoQABoMNjM3NDIzMTgzODA1IgzD1kulGDs6O833TO4q3AOr4Kjvj9JHHnesSbcNaBWB5oQa9sbbWsdz4g1xKarTOSsoZWEDr7kl3tG88Q6tB0NlyQ4SauNzLC7b8LvDN0BiiaVFNmyJke8Dv%2FbeWwy%2F8RRtaJR2fe3OoWrnxBc98o%2FCupwDpl6VsQsUz%2FEewsTj%2FfsDxD329J9mqgxBHE7ljtbnlfwYAoAijhR%2FnUWwby7D0KO1XXf%2FEcPaMoXUxgqzxCDfKnstxXobUWvl5GKb8%2FogfzfB2gxeWU3%2FuNDhAFyCqGTrRxQJq4XtzFptjL7EKCk8ZPyCdUqNvUWETxZ32dPqSmHyb3m5M2an6j7Sn265fB1ucuODJBTxmoSdjShYS514PTMkOpPcYG828e2duflE9XvL8DkLsJnmgc3udObM7L2o%2Frpkt3akyi510b%2F87ADszySGdIw2QamimLt7UEc3oKyfUywnEZXocnzIeuttOvWSAvsJjNTk7OCPmGj%2Bvi95pPsLepnK79E4TnXobTtf7vuaYea3MkYUYATL8PsrADuKbhcxa1%2BjuLV2tl1RcsABmKIYMmnkeG2ASKIl6pAGSHF0lNgwjOSL9S2OD%2FSggPtiSzXkzdbErRxJIucokgOG07SrANqHVugdGCdC1g2jpE6CV800cY7slDCFx9HJBjqkAeEnNJoBWJOgvXJ2iHXVq7vGGcm8%2BZFaMCGxEwKZExVOxCdxcYe1A8KbTvFLXRuphor4RQ9lHUzcC%2BaUEoQFDGUZNRg8UtM8pxsmbxQD5cel9y8FoLwAAvcE0ZC7P6rhmYqKH5hUMBMsuHj7wdKl0%2Bzb5fXORsHsNF9CfXiLFM4hTyPWQDKv4X2pChg2lEdiqgniqa%2BTbgVhuQaLXTu30V122aCo&X-Amz-Signature=06eb78ed6aa73d636e508cd336c02fcde509a11fad1c8f997ac158fa2fd38e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KU6KGCX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4hJbT54BXbRYtgs2Ve7kvaVUHd7%2FZTLBwD31fnRcowIhANH7MZx6VIMvyZewfh%2BCMXWD5VPj%2BaQ4gtEbVtvHGqNlKv8DCHoQABoMNjM3NDIzMTgzODA1IgzD1kulGDs6O833TO4q3AOr4Kjvj9JHHnesSbcNaBWB5oQa9sbbWsdz4g1xKarTOSsoZWEDr7kl3tG88Q6tB0NlyQ4SauNzLC7b8LvDN0BiiaVFNmyJke8Dv%2FbeWwy%2F8RRtaJR2fe3OoWrnxBc98o%2FCupwDpl6VsQsUz%2FEewsTj%2FfsDxD329J9mqgxBHE7ljtbnlfwYAoAijhR%2FnUWwby7D0KO1XXf%2FEcPaMoXUxgqzxCDfKnstxXobUWvl5GKb8%2FogfzfB2gxeWU3%2FuNDhAFyCqGTrRxQJq4XtzFptjL7EKCk8ZPyCdUqNvUWETxZ32dPqSmHyb3m5M2an6j7Sn265fB1ucuODJBTxmoSdjShYS514PTMkOpPcYG828e2duflE9XvL8DkLsJnmgc3udObM7L2o%2Frpkt3akyi510b%2F87ADszySGdIw2QamimLt7UEc3oKyfUywnEZXocnzIeuttOvWSAvsJjNTk7OCPmGj%2Bvi95pPsLepnK79E4TnXobTtf7vuaYea3MkYUYATL8PsrADuKbhcxa1%2BjuLV2tl1RcsABmKIYMmnkeG2ASKIl6pAGSHF0lNgwjOSL9S2OD%2FSggPtiSzXkzdbErRxJIucokgOG07SrANqHVugdGCdC1g2jpE6CV800cY7slDCFx9HJBjqkAeEnNJoBWJOgvXJ2iHXVq7vGGcm8%2BZFaMCGxEwKZExVOxCdxcYe1A8KbTvFLXRuphor4RQ9lHUzcC%2BaUEoQFDGUZNRg8UtM8pxsmbxQD5cel9y8FoLwAAvcE0ZC7P6rhmYqKH5hUMBMsuHj7wdKl0%2Bzb5fXORsHsNF9CfXiLFM4hTyPWQDKv4X2pChg2lEdiqgniqa%2BTbgVhuQaLXTu30V122aCo&X-Amz-Signature=680c686dc2f6759d42bfdff9802a5df861e8ea088c9b1f262b33b01241a3a7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
