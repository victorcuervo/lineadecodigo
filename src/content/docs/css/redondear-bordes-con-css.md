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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WG7Z33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ysD7qo84KoJKdngIqMe5RppqdcuHWQa%2B8sRILgyt0AiEA7gwqx6t2Qo5UX0PFV0ZP4tAY%2BZaiRe6T3IlH1odQ3l4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCo5ixj8%2FYaKQInMSrcA9y3E0NHvKjhea3AlHe9sQK3HJUNdU9l6fb0Bdqhpo4TJ32oCD6myYROibGE15ku6Nz%2FBDMyiUPVzGf1x5dCRFxx1%2FUNCA2NVNfBmHmL1DJjWGJhCUVrqSPTLgSxLX9%2Bx6gYOScMxwZVeHcI7LgvzxjSu2lhC1zh4PSJ0VOzmPkZsE5twfMzqTGogTk4ywTu8%2Bvmt8asNquUY2mUkaKNQHsEgtO9BrzISBQ3aHczGI6B6mkLMHZp%2Fxcna8ymjkUiKURsuR0EKH3bU004qyG4uESBV9eL9uwFMrPHkXX2skdXKxSZFs9AhDXxqwKFDuTv13ATpyMkWha%2Fskncr5IWUsrBWixdrvWN8aNWwFhxGoHUPEtaesOEzBiVh6QRt5jc9JAnueYDVe6c4XVAaa0nsFh%2Fa%2ByoSoyBW8pt01vMownSS%2BsQJoO8cFXQnvGdFIwM1YhX1OG7y8EbRfb%2FjfBDpFzRdCbINxVMPcZkUjaqOMsvnFhAiSN5Koy5Lj%2BgvhnMXS1DDKIsEKFMrcdccp63pDg1aUUOPOMef24yNTf15RRFJT0L7y%2BrxBlElaLQ5T5bxrKaED5sbWvgQpazPFzM2VPxDZJdayAiWk1tDIJWDeGSEMfQEbc8jp%2Fww8CoMKCMyMkGOqUBMzsPrI3gNWfljP4f9bgnnbLU30RqJkMw7juQ5DkNRKRkBQ%2BMk5w3OIuqi0SIuB%2BpOUWxSLL0bYqPthhtTWgzJI1OZJ9mCpSrpfE%2FkDulzN5AjTfP04TqKabjPBOlnCHSf79lt832pOx3pBrcwck4LwPOJggphD0abEPajyMjedp5tjpVP%2B5o2lEGJqMduW%2FlEPc%2FzoyktFk%2FvSf2VDUPU0EL5NDs&X-Amz-Signature=aaafa7fee38132b194940aadd30cd04d421667cdb5c897c6f0fe69bb49f3cfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WG7Z33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ysD7qo84KoJKdngIqMe5RppqdcuHWQa%2B8sRILgyt0AiEA7gwqx6t2Qo5UX0PFV0ZP4tAY%2BZaiRe6T3IlH1odQ3l4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCo5ixj8%2FYaKQInMSrcA9y3E0NHvKjhea3AlHe9sQK3HJUNdU9l6fb0Bdqhpo4TJ32oCD6myYROibGE15ku6Nz%2FBDMyiUPVzGf1x5dCRFxx1%2FUNCA2NVNfBmHmL1DJjWGJhCUVrqSPTLgSxLX9%2Bx6gYOScMxwZVeHcI7LgvzxjSu2lhC1zh4PSJ0VOzmPkZsE5twfMzqTGogTk4ywTu8%2Bvmt8asNquUY2mUkaKNQHsEgtO9BrzISBQ3aHczGI6B6mkLMHZp%2Fxcna8ymjkUiKURsuR0EKH3bU004qyG4uESBV9eL9uwFMrPHkXX2skdXKxSZFs9AhDXxqwKFDuTv13ATpyMkWha%2Fskncr5IWUsrBWixdrvWN8aNWwFhxGoHUPEtaesOEzBiVh6QRt5jc9JAnueYDVe6c4XVAaa0nsFh%2Fa%2ByoSoyBW8pt01vMownSS%2BsQJoO8cFXQnvGdFIwM1YhX1OG7y8EbRfb%2FjfBDpFzRdCbINxVMPcZkUjaqOMsvnFhAiSN5Koy5Lj%2BgvhnMXS1DDKIsEKFMrcdccp63pDg1aUUOPOMef24yNTf15RRFJT0L7y%2BrxBlElaLQ5T5bxrKaED5sbWvgQpazPFzM2VPxDZJdayAiWk1tDIJWDeGSEMfQEbc8jp%2Fww8CoMKCMyMkGOqUBMzsPrI3gNWfljP4f9bgnnbLU30RqJkMw7juQ5DkNRKRkBQ%2BMk5w3OIuqi0SIuB%2BpOUWxSLL0bYqPthhtTWgzJI1OZJ9mCpSrpfE%2FkDulzN5AjTfP04TqKabjPBOlnCHSf79lt832pOx3pBrcwck4LwPOJggphD0abEPajyMjedp5tjpVP%2B5o2lEGJqMduW%2FlEPc%2FzoyktFk%2FvSf2VDUPU0EL5NDs&X-Amz-Signature=820fa1451e8963f5093e90a483af5d0388de3e459a598fad3102d7a04c931c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
