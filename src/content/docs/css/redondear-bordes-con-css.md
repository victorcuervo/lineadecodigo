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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCM3N32%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYeY4iEJwuSdvbEl6cwyJsvt5yGcrNd2ISZP4pTvX8lAIhAMUTJ3BV5Kvh3T9n2cx4UsSnf0yTqtRSKcHK%2FT0He1y3Kv8DCGsQABoMNjM3NDIzMTgzODA1IgwAhMuZ4NsXdhH%2B2zoq3AOtZAmpLZlPQoQLIhdoPm9S9aPJD5sqF5xaGsJrRWf%2BxtcJ9682doiIKMmBw9%2BBRjN853MjTo33H6B1653QuatOsQWyV97vcvSW9k6cXQRUs7NW9boy0NbQ47UYIAiEj%2FDml0FXxOfjhu7HXo099nhayAaCbJMzEcyr43CQ%2Boyewhrv6O6NJpu%2FblYPdA7w20IilJnBLxpeXhhJ24idYx0GisjbTAoj5zuywM2rspQeL3YQUVU2IKogG6AFEQuooNolfi00dTucA6rjGB4TL2U%2BnAxv2e7ApB0oE%2FCn085HCIS0EfowdPeV%2B8IaohuPnSfQs20I8ekxzOnVzajUIEBkNOTLSzqRM3bh2tDHW%2FD%2FBakqD%2FwDT7BGOMs8biUI638gBo9iDCBCW17MEnQPHLzApuFESOKOZqpOdgS4W%2FYmf8NnQ8tPXQYzO%2B83d9xeb2WmG%2BpEgqydMhnt4SwSP3nsEzA%2FSVxR4jAaWfTINCIGgMva%2BYdNBnNCRv59kFW2O7I%2F7%2BHVGbs8l69bLObAUGEU8kp9B50h4ZsIBNVuWoWOHl55B3MCOrUM%2BJI71rZ9VOFafIXLYgW69ufs57%2Bzrmj8AyTl%2BFdRT8tN0Kn%2B8lIJ6w9W1cmqKDOs2seVgjCVp87JBjqkAa69S6ogZVnwAe09s6sDGLH6bkg2hM4KkeOHT2WK3bbBO7wnmHpNQ3IzI2dj6dfd76OWYuMi8xTLA9I9NdR7REi9ClB3GRFR0HYB%2B9StB%2FB%2FlKBUkOeCfbnu7EqHjTHLSCwhovye%2Bgxj73mqCAlPXuH5yvRTm8bGpnIAJ%2B9ObCmg9Di9S4LYo%2FD5RnTtiwfJYWKn4zDKy13VIJA7jNLxmqfHXoPI&X-Amz-Signature=1c3cc2d64e4c92abb3f585ad56de15c0c3fbc1138f5823f7cfd9327508c04b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCM3N32%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYeY4iEJwuSdvbEl6cwyJsvt5yGcrNd2ISZP4pTvX8lAIhAMUTJ3BV5Kvh3T9n2cx4UsSnf0yTqtRSKcHK%2FT0He1y3Kv8DCGsQABoMNjM3NDIzMTgzODA1IgwAhMuZ4NsXdhH%2B2zoq3AOtZAmpLZlPQoQLIhdoPm9S9aPJD5sqF5xaGsJrRWf%2BxtcJ9682doiIKMmBw9%2BBRjN853MjTo33H6B1653QuatOsQWyV97vcvSW9k6cXQRUs7NW9boy0NbQ47UYIAiEj%2FDml0FXxOfjhu7HXo099nhayAaCbJMzEcyr43CQ%2Boyewhrv6O6NJpu%2FblYPdA7w20IilJnBLxpeXhhJ24idYx0GisjbTAoj5zuywM2rspQeL3YQUVU2IKogG6AFEQuooNolfi00dTucA6rjGB4TL2U%2BnAxv2e7ApB0oE%2FCn085HCIS0EfowdPeV%2B8IaohuPnSfQs20I8ekxzOnVzajUIEBkNOTLSzqRM3bh2tDHW%2FD%2FBakqD%2FwDT7BGOMs8biUI638gBo9iDCBCW17MEnQPHLzApuFESOKOZqpOdgS4W%2FYmf8NnQ8tPXQYzO%2B83d9xeb2WmG%2BpEgqydMhnt4SwSP3nsEzA%2FSVxR4jAaWfTINCIGgMva%2BYdNBnNCRv59kFW2O7I%2F7%2BHVGbs8l69bLObAUGEU8kp9B50h4ZsIBNVuWoWOHl55B3MCOrUM%2BJI71rZ9VOFafIXLYgW69ufs57%2Bzrmj8AyTl%2BFdRT8tN0Kn%2B8lIJ6w9W1cmqKDOs2seVgjCVp87JBjqkAa69S6ogZVnwAe09s6sDGLH6bkg2hM4KkeOHT2WK3bbBO7wnmHpNQ3IzI2dj6dfd76OWYuMi8xTLA9I9NdR7REi9ClB3GRFR0HYB%2B9StB%2FB%2FlKBUkOeCfbnu7EqHjTHLSCwhovye%2Bgxj73mqCAlPXuH5yvRTm8bGpnIAJ%2B9ObCmg9Di9S4LYo%2FD5RnTtiwfJYWKn4zDKy13VIJA7jNLxmqfHXoPI&X-Amz-Signature=605c21a04f0e6b57b01a7e0bfb7d4d7d73f422efb09fa19b612b42548d8f2380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
