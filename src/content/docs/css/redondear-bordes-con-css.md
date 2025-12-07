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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4DCXJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeGIUhsYNRAPO6IVchmHn%2B4ss0nv%2FnM0NYx3t6k6pVsAiEAsfJKHZixVe36koIyAft%2B%2BktCHTa56wirqyp1j4EtAYUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1wDL6uST%2FIS3Xf%2BCrcA0Jo82aXBKS0e0PNxT51x2kOvL%2BEzs4oWw0C1B4ZxLEZA5tfInD1DJlbOZiSy6X8lDAlLG5BI%2FjEBnnPEA2paWHJQrNXTXVIHp8l0EVH9Zaj5SEvsN%2BRuv4%2FcZR0lNmzH1tHQYWyM%2BtqlByJcoN2grMJMgn%2B5XB9k594ThC5Ri4fHRIzXH%2FIM946Lfzl1%2BH5SKgYIIBN37SvTrMCFdnRVP4IQNy%2BPv3dxu1%2F7ebINTXECXkHdvLeN7sCdmRPBdG%2B6WMBJMMUu0YCcl92Ent7XrPLGHn2ufgkdZQugh1atonElyelXLRwHSszIQnw2hMJ8alK3wkmx8nDplM2aRVcjS6ubryR5JFOfB4yjTuTzwm5nSExVdMFj0G%2F1ZgM%2F35%2F6%2F7GF%2BPaJvu4%2BiqCZ9e0HcUsXf3pKyKNXHtrVYjFk1I1ZDJDJSfv4FqU60ymlkiabZqOmTcNw1izpa5uEumIyoBAYIQ7flR56p9WE5XRDca9TignA%2Fl4693%2FrepE7kUIdks8Tox9%2BZhLeXLfzpLxLKjV5%2BnLa1QYJswESCgw3EtZtaJGuL12GbsskA7%2BxdmJmkKur3EW%2BsrfGR%2BkooKLhqrUgKmJmaZa6CwpFxar7GMjg8NSC9GVI05guGucMNyo18kGOqUBJwtvrCG1iNVpIDGjqG6PrNJ8rERkySD8%2FArsnsg7IfgRunu210SyTR7DO1JZ0iqy2KBEQ1wQQym7SlObWHY4sy24dgPlTeLKitk%2BbpHtzTXT%2FES%2BRjEXayQqJUgRBWdY4iFOJTR3IfxGI4JTwCZhYM4wYrqysapbuXVYUPnqPs%2FTrVg0gLmLc6bIsyrzku5JuRqRj7ivHUCqlyIkjpBxtiQIoW6M&X-Amz-Signature=1c1020df288bffd72d032f30894ebd6fe3c05f54ce31f35e0515ac4d58453887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4DCXJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeGIUhsYNRAPO6IVchmHn%2B4ss0nv%2FnM0NYx3t6k6pVsAiEAsfJKHZixVe36koIyAft%2B%2BktCHTa56wirqyp1j4EtAYUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1wDL6uST%2FIS3Xf%2BCrcA0Jo82aXBKS0e0PNxT51x2kOvL%2BEzs4oWw0C1B4ZxLEZA5tfInD1DJlbOZiSy6X8lDAlLG5BI%2FjEBnnPEA2paWHJQrNXTXVIHp8l0EVH9Zaj5SEvsN%2BRuv4%2FcZR0lNmzH1tHQYWyM%2BtqlByJcoN2grMJMgn%2B5XB9k594ThC5Ri4fHRIzXH%2FIM946Lfzl1%2BH5SKgYIIBN37SvTrMCFdnRVP4IQNy%2BPv3dxu1%2F7ebINTXECXkHdvLeN7sCdmRPBdG%2B6WMBJMMUu0YCcl92Ent7XrPLGHn2ufgkdZQugh1atonElyelXLRwHSszIQnw2hMJ8alK3wkmx8nDplM2aRVcjS6ubryR5JFOfB4yjTuTzwm5nSExVdMFj0G%2F1ZgM%2F35%2F6%2F7GF%2BPaJvu4%2BiqCZ9e0HcUsXf3pKyKNXHtrVYjFk1I1ZDJDJSfv4FqU60ymlkiabZqOmTcNw1izpa5uEumIyoBAYIQ7flR56p9WE5XRDca9TignA%2Fl4693%2FrepE7kUIdks8Tox9%2BZhLeXLfzpLxLKjV5%2BnLa1QYJswESCgw3EtZtaJGuL12GbsskA7%2BxdmJmkKur3EW%2BsrfGR%2BkooKLhqrUgKmJmaZa6CwpFxar7GMjg8NSC9GVI05guGucMNyo18kGOqUBJwtvrCG1iNVpIDGjqG6PrNJ8rERkySD8%2FArsnsg7IfgRunu210SyTR7DO1JZ0iqy2KBEQ1wQQym7SlObWHY4sy24dgPlTeLKitk%2BbpHtzTXT%2FES%2BRjEXayQqJUgRBWdY4iFOJTR3IfxGI4JTwCZhYM4wYrqysapbuXVYUPnqPs%2FTrVg0gLmLc6bIsyrzku5JuRqRj7ivHUCqlyIkjpBxtiQIoW6M&X-Amz-Signature=7ef0b97d4d3d8f6f37b40526479c841dcf30d44791c96cbc81b85b2825cfa9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
