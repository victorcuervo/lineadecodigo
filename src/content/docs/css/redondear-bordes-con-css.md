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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5HWEQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFFG8u7zR9LdkUAlwEcZdx77nqE6RLG%2Bvf0a%2BS%2BJYhgIgKS1cs9WC6LNNdjTWkBTCwVAudVz%2F0YkVOAM5qqoa33Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCQjH7%2FX7MlEfLP5wSrcA40K%2BjNepcMb%2Bnb8zbkKZm9A3ITH6l3ucKMhRYUuZRiAbxlcFBA94JTtzqMgJ%2FZEBAc8OmT4Vmk0hXTayNUG7G0mr05OZqDjdNL0IgCqWfsXY4om%2Be0S4Bzr40YyZTN%2Fq3FdqHiVY1pjdjbcP9Uumvfukdi3HGGonmvLlfCMC0z3NAHrNA6G8GPhWOKKrr2UcQIxMKNTPM%2BObYFblswM%2F5hU2VDAcfpSdq0YGW98Gpjlfs7jyavtB%2FYsnNgUWGdESx4u7EB3tPWBaryNRecnbhPvI3zG4152Nzy55CVa%2FHRsyJwNzNvAW%2FOM8cmjiyt2BH6r4Ev7NS4432Mz7%2FqZXcc7ZTvgEN3rxmfFg5z8bz%2BRPdS78UV8bOSZzGwGSdRrb5O6MortpMhNOfynyY9CH5NSK14ywPLfc6tIzjl0%2Ftx0qkQb0sRy%2FPb%2BK0wroYkFdFQFMe0%2Bj1GAM0lltxYLBkwTC%2BkOjTd818Vmn0sV%2BCsnJC14Y1zz6%2BkkAW0g3UNfLIRBDxBcfx1Dio%2BUneEEVt%2FSq9NMZjc8QwI7mwg7pXw5ILupjqoivFQ25d2Ls4ezIuy4TA63Er1FMe37LLFdaYG4BoETLMNWc%2BnhLY5gQhgDp%2FSd5dUNMTt6u5MqMK7KyskGOqUBfWD55BVCw6JYOxw9%2FUdN1aS3JMq2h%2Bp99mjAVYBC%2FlTaHZFzFbEnC11JnD2FNc08qNGE80DcqWu9Gz%2FpkuhytBthvNjJemxvtXZmag0yCNKRkmqjJkouoR74rFjtklyeHwyp9402EDwWuhvwPGkM05VjFLMuDBjKv2PYNhfs2lt2VYb7km8ipO%2BFqOrbdPnoAd0zoFJl7P3NJSaOjfui5vzW%2BF5N&X-Amz-Signature=1b790ae77eda62f8fb91fe2c501c433e6b4b091f197f11aa3b16f1423ef15a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL5HWEQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFFG8u7zR9LdkUAlwEcZdx77nqE6RLG%2Bvf0a%2BS%2BJYhgIgKS1cs9WC6LNNdjTWkBTCwVAudVz%2F0YkVOAM5qqoa33Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCQjH7%2FX7MlEfLP5wSrcA40K%2BjNepcMb%2Bnb8zbkKZm9A3ITH6l3ucKMhRYUuZRiAbxlcFBA94JTtzqMgJ%2FZEBAc8OmT4Vmk0hXTayNUG7G0mr05OZqDjdNL0IgCqWfsXY4om%2Be0S4Bzr40YyZTN%2Fq3FdqHiVY1pjdjbcP9Uumvfukdi3HGGonmvLlfCMC0z3NAHrNA6G8GPhWOKKrr2UcQIxMKNTPM%2BObYFblswM%2F5hU2VDAcfpSdq0YGW98Gpjlfs7jyavtB%2FYsnNgUWGdESx4u7EB3tPWBaryNRecnbhPvI3zG4152Nzy55CVa%2FHRsyJwNzNvAW%2FOM8cmjiyt2BH6r4Ev7NS4432Mz7%2FqZXcc7ZTvgEN3rxmfFg5z8bz%2BRPdS78UV8bOSZzGwGSdRrb5O6MortpMhNOfynyY9CH5NSK14ywPLfc6tIzjl0%2Ftx0qkQb0sRy%2FPb%2BK0wroYkFdFQFMe0%2Bj1GAM0lltxYLBkwTC%2BkOjTd818Vmn0sV%2BCsnJC14Y1zz6%2BkkAW0g3UNfLIRBDxBcfx1Dio%2BUneEEVt%2FSq9NMZjc8QwI7mwg7pXw5ILupjqoivFQ25d2Ls4ezIuy4TA63Er1FMe37LLFdaYG4BoETLMNWc%2BnhLY5gQhgDp%2FSd5dUNMTt6u5MqMK7KyskGOqUBfWD55BVCw6JYOxw9%2FUdN1aS3JMq2h%2Bp99mjAVYBC%2FlTaHZFzFbEnC11JnD2FNc08qNGE80DcqWu9Gz%2FpkuhytBthvNjJemxvtXZmag0yCNKRkmqjJkouoR74rFjtklyeHwyp9402EDwWuhvwPGkM05VjFLMuDBjKv2PYNhfs2lt2VYb7km8ipO%2BFqOrbdPnoAd0zoFJl7P3NJSaOjfui5vzW%2BF5N&X-Amz-Signature=6ff954fb4c26f911450060305fc2311d8a3d5b2e37a32ffed1f7b30895ec039b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
