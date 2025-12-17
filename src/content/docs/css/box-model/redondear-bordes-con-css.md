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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3HPPEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlo48oraWnour42UiSwCMJtf6k8kZVJMbLM%2BdRn50xNAIhAK8E96yDTtXzKZvyBfHMzCWXh6AGJFc0dgiCfHrSYZf1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwC5r1m32xjsRUzV2Eq3AOE1LiekPRm1GG0AZMoHyKYrUzYHgwpzmLB69FwK5c4bEOFvZLJJMwjU59%2Bh1f8Fnz0xGbGBdapPHhZG7C%2FcehlCbFstpFRmgwpDpf%2FcpcRbMoM4yC%2F2rztMb6VzISW6K5kVRBK%2FqrTVUlotZFkfBUBKGQKiWOw1Cjzu3J9Lz9O10VipOPNENgPvQFToh0Fz0IiJfk1rXw4EcWakZfBrzlcgiZwY8Dm51dIhylz23m2k24YCB%2B91iHaO7GKqptz3YIz3k1U%2BTV%2BVs5XsthH5BiZv81leR2aFU4ZRfTXAhgBlNnXUBkRPRlfJNVacbFWqRXVa2wcYLsr6KJ433oXkAIWjOxGEUuwoXeJ7qnGrjp1Z1lldw0IChlqraEA9Qo1XcihQ5xoyLitZYtcXRlBIrE9drOYnQttfT%2B847qlYI2TJ5o%2Fluh3IaIuX5RwAcVT4NA8JmcFWDWwvzx3mcSV%2BnNzm7gQ2yGbkJxb8NmIYNkc7edaFjz7%2B3pfkK89l%2FwdLY4QXqoUSZKo2VCLf6TvVrO8S%2BymDgiV3tInFpVqige4ahEk7CbUmSGGRFrynpcN670KivS%2FJI6twcgG6%2F%2BE3xmA7r8OnyYuzdCZZE1wqAIz4u9X%2F8wwDQcmhgyZujCexorKBjqkAY6P0Ak61lOIJYDZ57ZupwNtnQK8PPsNOJ0%2FMGxvsBmTlFGdBb7JuNfGKYB4p2Tp%2FnyJE42B%2BtIRy5lF8urD97XV2pVcOzNgH5s7nnLC92toIdVSRV7CWFTJ8vct5V3Sl5muS8WXjM44J1hsylSlbvBMI0lmReOa%2BttK2aQHUbL1K1J8rGOOJQeTv1nJpnJEVoMzVr0BKK1RcP7eegfCONN2IKyD&X-Amz-Signature=650c456e99fb3f11a9ae3af25170ace6b93c51aec0da68dd4d700b66879dafc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3HPPEQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlo48oraWnour42UiSwCMJtf6k8kZVJMbLM%2BdRn50xNAIhAK8E96yDTtXzKZvyBfHMzCWXh6AGJFc0dgiCfHrSYZf1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwC5r1m32xjsRUzV2Eq3AOE1LiekPRm1GG0AZMoHyKYrUzYHgwpzmLB69FwK5c4bEOFvZLJJMwjU59%2Bh1f8Fnz0xGbGBdapPHhZG7C%2FcehlCbFstpFRmgwpDpf%2FcpcRbMoM4yC%2F2rztMb6VzISW6K5kVRBK%2FqrTVUlotZFkfBUBKGQKiWOw1Cjzu3J9Lz9O10VipOPNENgPvQFToh0Fz0IiJfk1rXw4EcWakZfBrzlcgiZwY8Dm51dIhylz23m2k24YCB%2B91iHaO7GKqptz3YIz3k1U%2BTV%2BVs5XsthH5BiZv81leR2aFU4ZRfTXAhgBlNnXUBkRPRlfJNVacbFWqRXVa2wcYLsr6KJ433oXkAIWjOxGEUuwoXeJ7qnGrjp1Z1lldw0IChlqraEA9Qo1XcihQ5xoyLitZYtcXRlBIrE9drOYnQttfT%2B847qlYI2TJ5o%2Fluh3IaIuX5RwAcVT4NA8JmcFWDWwvzx3mcSV%2BnNzm7gQ2yGbkJxb8NmIYNkc7edaFjz7%2B3pfkK89l%2FwdLY4QXqoUSZKo2VCLf6TvVrO8S%2BymDgiV3tInFpVqige4ahEk7CbUmSGGRFrynpcN670KivS%2FJI6twcgG6%2F%2BE3xmA7r8OnyYuzdCZZE1wqAIz4u9X%2F8wwDQcmhgyZujCexorKBjqkAY6P0Ak61lOIJYDZ57ZupwNtnQK8PPsNOJ0%2FMGxvsBmTlFGdBb7JuNfGKYB4p2Tp%2FnyJE42B%2BtIRy5lF8urD97XV2pVcOzNgH5s7nnLC92toIdVSRV7CWFTJ8vct5V3Sl5muS8WXjM44J1hsylSlbvBMI0lmReOa%2BttK2aQHUbL1K1J8rGOOJQeTv1nJpnJEVoMzVr0BKK1RcP7eegfCONN2IKyD&X-Amz-Signature=b292ba146a3582d1c35d0cc9e57ac3736b9fff4ad748856ab4448d2d0dbb66bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
