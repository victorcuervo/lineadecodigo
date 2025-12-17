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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRQGYLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW3CfWKTTMfI5AJcPQCCu8%2Bu5EH17givp3WGcl47cxlAiEAx6cQ4xKaZP5NjblBkvD%2FrZ7wY5izvKJ4qT%2F9TkaKMRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKp4hqSr2CcepeDLyrcA9Mrz3AcPADx9qZc8uF4n8hbhvBBDxVohfh7MzMrSSAkxTBh14gzIpE%2BUydmBGoDPfgFPbffMQNHM7ZDY90e0JXOeKhd32kVUt871RTRpNhDfU8G05Dki3q1LwVSOSIDFKzuHldlJK%2BnxfskUqu%2BAl1bH8a646%2FAMjlZLnwDmLKMxaU%2BK%2BEYur2MoWiLUlYKHPyaYAYo5qCy4e4xNjFqexFpSy28W8W68sbqMRMuEl3oznyUxiOuyJq9JtIbfLr%2BiT%2B7yjIu92ks64%2FClTqA1BhSCMs%2BjmGm29vwAlavBUZIF4XhWXnftO5NxnTlKuq7cr6GZMc79vzJCryazyLj9aab1ly%2FH9FmEHQDpQP0unGEKnSs%2BwsFWS%2FTN3f3xsf2Lzg3mIS%2BAdINwgr8FYpoa3O2JtfxmbNd9R6hm%2FqaEjx11w%2BqePtbezyazYWSEauVBSfl9NVF%2F6uZr2FstKI3SmqX4BxktDLhYwuny4yUB8DFFs7UBiiotlOznV8AJn42s%2Bx1qFR%2F6S0sbYztYEPftQcRA%2Bp51GtqeEMq64gh3eJzIx6uMzqgEPTy0ZhFcL0y8hY0nmtuzNgDZB4H05J%2F83C9QFASPk%2Bk%2BpfPz9KewFfWt7AnittKuTuW33yCMLifi8oGOqUBIHMlXlPV0jUyhd0pAQxAeY1s6tMebV6NtI%2Bo8kr8FqrYt6iRcDRwY0ZndflIDp2SVu8W28aXbS3LJ7zmxSsnYlIoWdkDLNpxAmPAgpGDi60SeGUGNwSiK7yY3BsXXIay825av%2FUhVFmheVHTIqNmb%2Bxjk%2FwNgX%2FOkfqqAsU%2Frnaj4nup0z1lrJSU4AfWv9PfJXmKSgZLGclb%2FMknNe8uUSBfVDhX&X-Amz-Signature=c198896f7bb9664512ccbf250104dd0c1b2ede62ccc61f31ca1c2f6fa8e368d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRQGYLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW3CfWKTTMfI5AJcPQCCu8%2Bu5EH17givp3WGcl47cxlAiEAx6cQ4xKaZP5NjblBkvD%2FrZ7wY5izvKJ4qT%2F9TkaKMRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKp4hqSr2CcepeDLyrcA9Mrz3AcPADx9qZc8uF4n8hbhvBBDxVohfh7MzMrSSAkxTBh14gzIpE%2BUydmBGoDPfgFPbffMQNHM7ZDY90e0JXOeKhd32kVUt871RTRpNhDfU8G05Dki3q1LwVSOSIDFKzuHldlJK%2BnxfskUqu%2BAl1bH8a646%2FAMjlZLnwDmLKMxaU%2BK%2BEYur2MoWiLUlYKHPyaYAYo5qCy4e4xNjFqexFpSy28W8W68sbqMRMuEl3oznyUxiOuyJq9JtIbfLr%2BiT%2B7yjIu92ks64%2FClTqA1BhSCMs%2BjmGm29vwAlavBUZIF4XhWXnftO5NxnTlKuq7cr6GZMc79vzJCryazyLj9aab1ly%2FH9FmEHQDpQP0unGEKnSs%2BwsFWS%2FTN3f3xsf2Lzg3mIS%2BAdINwgr8FYpoa3O2JtfxmbNd9R6hm%2FqaEjx11w%2BqePtbezyazYWSEauVBSfl9NVF%2F6uZr2FstKI3SmqX4BxktDLhYwuny4yUB8DFFs7UBiiotlOznV8AJn42s%2Bx1qFR%2F6S0sbYztYEPftQcRA%2Bp51GtqeEMq64gh3eJzIx6uMzqgEPTy0ZhFcL0y8hY0nmtuzNgDZB4H05J%2F83C9QFASPk%2Bk%2BpfPz9KewFfWt7AnittKuTuW33yCMLifi8oGOqUBIHMlXlPV0jUyhd0pAQxAeY1s6tMebV6NtI%2Bo8kr8FqrYt6iRcDRwY0ZndflIDp2SVu8W28aXbS3LJ7zmxSsnYlIoWdkDLNpxAmPAgpGDi60SeGUGNwSiK7yY3BsXXIay825av%2FUhVFmheVHTIqNmb%2Bxjk%2FwNgX%2FOkfqqAsU%2Frnaj4nup0z1lrJSU4AfWv9PfJXmKSgZLGclb%2FMknNe8uUSBfVDhX&X-Amz-Signature=fca6d8d8146b36c500ffc72772f6dc228bb69adc574fd7a528a1be6acd9932da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
