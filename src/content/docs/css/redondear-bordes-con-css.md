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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRNDVC4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGtYcXzk50wRxuLTq4LAG5oZUVSq4KTPY4FARU2pxdHgIhAMI5gOB0VLWmy%2FAYPnu%2F3A5N%2Ft0Mq9jhX4arbjb3HBZ0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyiB0oqWoXhElNdWr0q3APD2icORQHW2NK%2FlNwnqbD9Ma%2BGQvthhDnZbS69CvxPKGqTvNrZtdVNPo2DQkXhrUV%2FPRBSxXo71i5HmjhB8GArcbqLyCGy%2B3ICIQ5dEEaldHJsp3wsjLFHk2thfvvoG2FZmL2yLU8OCy8WJHaio62Kzh5tNgl49eu5ByS%2BMO8elboOcJ73wQLcRm8vx6gjBovPCIXSuM9qtrACGwvjQQW5EqFPUct6AainIHHJvTplAoAcz%2FTsW5sY1cac0XUOqoSs1q%2FwFjDA46NcK8NF1Hw6lb9TJceHCWdn7sliU6bv9zvfncuR53R3WU81oYotCe%2FlXRiJ8r4Lc%2FhA%2BXm%2FXDD7T1PN3CWm%2BKQGx0oWOqCyhCgrHtUYoYIHeVpOvY9fmidBgr26jixDRX26pzfMi7f0w05FjAJ47Rojm7nAmWSKFBGAZJaWXtJCW88QroNt2OSeYSFc5HalDWUxBL9FW9E31o6%2FKpLSJWVV1B7g%2BOtzcRvirOGEGJ5Np35TL%2BVGJH61vWD2IwByE1Uk%2F7IgpoF8JuApIngehiu9EHuMvGtrhCaTwCcp4%2F%2B2tBwN%2Foun6NXPjCOgM00zKex10OEHO492EMzeUK0xagW6UONEZ3Ro09qL5Cbjo%2Bj67GvW6TDDptDJBjqkAYxk7Ry3GFzPF73D4G2JBSIj%2FAVinN5JuCK0phSVjr6ZkUVbV%2BpnlVJ3rWdnv6j4%2F3Cyqnl93ZjuahtXR3WbfHCq%2BnEpwNGWVe5ecRGNWl6%2BKOTZ1HWq0nLg0TexMdPY7k%2BYftd2WwaNL69W%2FMydNyIR%2BeJ7ardQ73Ku5x%2Fadiorh2GLrFgdkFQ14xfirenZeb2TuZRv25lbUoLfhD7NK5rO3b2Z&X-Amz-Signature=98e07965e874a63cea055508b2fb0f464c1f877fbb22b8744c384cbf8397ca21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRNDVC4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGtYcXzk50wRxuLTq4LAG5oZUVSq4KTPY4FARU2pxdHgIhAMI5gOB0VLWmy%2FAYPnu%2F3A5N%2Ft0Mq9jhX4arbjb3HBZ0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyiB0oqWoXhElNdWr0q3APD2icORQHW2NK%2FlNwnqbD9Ma%2BGQvthhDnZbS69CvxPKGqTvNrZtdVNPo2DQkXhrUV%2FPRBSxXo71i5HmjhB8GArcbqLyCGy%2B3ICIQ5dEEaldHJsp3wsjLFHk2thfvvoG2FZmL2yLU8OCy8WJHaio62Kzh5tNgl49eu5ByS%2BMO8elboOcJ73wQLcRm8vx6gjBovPCIXSuM9qtrACGwvjQQW5EqFPUct6AainIHHJvTplAoAcz%2FTsW5sY1cac0XUOqoSs1q%2FwFjDA46NcK8NF1Hw6lb9TJceHCWdn7sliU6bv9zvfncuR53R3WU81oYotCe%2FlXRiJ8r4Lc%2FhA%2BXm%2FXDD7T1PN3CWm%2BKQGx0oWOqCyhCgrHtUYoYIHeVpOvY9fmidBgr26jixDRX26pzfMi7f0w05FjAJ47Rojm7nAmWSKFBGAZJaWXtJCW88QroNt2OSeYSFc5HalDWUxBL9FW9E31o6%2FKpLSJWVV1B7g%2BOtzcRvirOGEGJ5Np35TL%2BVGJH61vWD2IwByE1Uk%2F7IgpoF8JuApIngehiu9EHuMvGtrhCaTwCcp4%2F%2B2tBwN%2Foun6NXPjCOgM00zKex10OEHO492EMzeUK0xagW6UONEZ3Ro09qL5Cbjo%2Bj67GvW6TDDptDJBjqkAYxk7Ry3GFzPF73D4G2JBSIj%2FAVinN5JuCK0phSVjr6ZkUVbV%2BpnlVJ3rWdnv6j4%2F3Cyqnl93ZjuahtXR3WbfHCq%2BnEpwNGWVe5ecRGNWl6%2BKOTZ1HWq0nLg0TexMdPY7k%2BYftd2WwaNL69W%2FMydNyIR%2BeJ7ardQ73Ku5x%2Fadiorh2GLrFgdkFQ14xfirenZeb2TuZRv25lbUoLfhD7NK5rO3b2Z&X-Amz-Signature=46f11f23d8e9ed84eab4c2c15dec39293d3d85ccbae25f3e5a7d074d44d3eb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
