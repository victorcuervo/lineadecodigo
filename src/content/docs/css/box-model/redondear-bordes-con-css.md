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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZND5DIOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Be9ingei%2B1UK8A%2FMHXetMgnpPEMCEpEn2WHKuu4%2FewIhANINF9rfG9nX2Tg8Dcxm0Wdbuuc2oISZFlXZ8m9MQ%2BzHKv8DCH8QABoMNjM3NDIzMTgzODA1Igzk%2FIgop5LfOtTQDM8q3AMnG7BGZruGCcvvHxfxrDLR7unLARmVWWCw2Bava%2FXQn4mOMoo2%2FOvTkubnvrWrOxkHnOGXyhnbomv9xcveQihiVSTJ8RRf2g6FhF2Xess3TlBvd7lvr6aGlPPtC5K8Vta2guZUwFcLlQb%2BHROLDtcWcSsqWlrSepSwDrVgG2mDKs1gRFGTR5N6zT%2FzgdPRLHW4%2Fw%2FGLVPTZruoV%2F0fEoTyjOHOzzhOr9jRZlHXeOZ5d1VdGjIcCq1OwYFEVWKm2j%2FBYm9fyEbBSCCf58UnFAXavmAd8C53WHvwQzsFB%2B1NZXLjihpo3dPY2XNOLrQmKA4y4xMVq583NSL3REiyweRGvJQAR9yGgUCIVE35FqZ3XkoO%2BnbJAdYpMUq%2FMLTwL0MbuZwheJlrgBpAmq0G6mOnXgttwqYXdmiSMxBWjHkBIGEKe96Dxrx2kVySoc1ngWF6KVwxcrJMw2eirDHbhudq%2B8%2Fd1737HZmWmmfA9zsVjHqVYeRguJUPW7In5XUcpeDO1HaKkQ5Woi57aAHKtSPWwUrgKeI1w9ehkH0MjjH9GR9GXg%2FNmDVJLVZm%2BOAZZZc3rIc4aGPv3kQqAECzxuloIaC3adc%2FuVfCh7cp6g8Qbhj3pKlJlPeH1Ri%2FkjDE4YrKBjqkAWYOQ6zWjDfV6Q%2FrTYv%2FvJXWI%2FufzI8IRMYtgUYPZB8yKFZH1jB2kj3syv%2FOS1OyiAPz5R%2BYBvRnYf3%2BGWbwW8yzARGGVnrJrA7LY8kjzJeF%2BeJ7Yzh1bpaqMK3ntuPQbvRCqk9w33bjA%2F75zW5agbZptwgbM8n0c6GK31iI1H7HoRhLjmxKPrePMg%2FvacHx5hMhwWh4%2BY281nA56z2wBTMdO2xs&X-Amz-Signature=5abc769204f51d1335542f0e9db07d01d67f431abe200ac48dc25919890524f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZND5DIOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Be9ingei%2B1UK8A%2FMHXetMgnpPEMCEpEn2WHKuu4%2FewIhANINF9rfG9nX2Tg8Dcxm0Wdbuuc2oISZFlXZ8m9MQ%2BzHKv8DCH8QABoMNjM3NDIzMTgzODA1Igzk%2FIgop5LfOtTQDM8q3AMnG7BGZruGCcvvHxfxrDLR7unLARmVWWCw2Bava%2FXQn4mOMoo2%2FOvTkubnvrWrOxkHnOGXyhnbomv9xcveQihiVSTJ8RRf2g6FhF2Xess3TlBvd7lvr6aGlPPtC5K8Vta2guZUwFcLlQb%2BHROLDtcWcSsqWlrSepSwDrVgG2mDKs1gRFGTR5N6zT%2FzgdPRLHW4%2Fw%2FGLVPTZruoV%2F0fEoTyjOHOzzhOr9jRZlHXeOZ5d1VdGjIcCq1OwYFEVWKm2j%2FBYm9fyEbBSCCf58UnFAXavmAd8C53WHvwQzsFB%2B1NZXLjihpo3dPY2XNOLrQmKA4y4xMVq583NSL3REiyweRGvJQAR9yGgUCIVE35FqZ3XkoO%2BnbJAdYpMUq%2FMLTwL0MbuZwheJlrgBpAmq0G6mOnXgttwqYXdmiSMxBWjHkBIGEKe96Dxrx2kVySoc1ngWF6KVwxcrJMw2eirDHbhudq%2B8%2Fd1737HZmWmmfA9zsVjHqVYeRguJUPW7In5XUcpeDO1HaKkQ5Woi57aAHKtSPWwUrgKeI1w9ehkH0MjjH9GR9GXg%2FNmDVJLVZm%2BOAZZZc3rIc4aGPv3kQqAECzxuloIaC3adc%2FuVfCh7cp6g8Qbhj3pKlJlPeH1Ri%2FkjDE4YrKBjqkAWYOQ6zWjDfV6Q%2FrTYv%2FvJXWI%2FufzI8IRMYtgUYPZB8yKFZH1jB2kj3syv%2FOS1OyiAPz5R%2BYBvRnYf3%2BGWbwW8yzARGGVnrJrA7LY8kjzJeF%2BeJ7Yzh1bpaqMK3ntuPQbvRCqk9w33bjA%2F75zW5agbZptwgbM8n0c6GK31iI1H7HoRhLjmxKPrePMg%2FvacHx5hMhwWh4%2BY281nA56z2wBTMdO2xs&X-Amz-Signature=f867bef8a76d757f080c51f848adce59c45ad0b896f7d6b9531021186449b7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
