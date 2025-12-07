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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLXYBM5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgtiiNtd2YlOPawGR3IKiHB0Lp%2BDwO8RC8Jdz7mM1fIAiEAyhVSU8VHtnaXuYKIKTfQPLq%2FHF754jxTbfz1n2dqx0EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAtvqv%2BGW1RoWHYJircA6bhBReEIP7tj%2BgNatYITHEMF7%2Bvc1%2F9dHBTNc2VmcOuX%2Fc3gGNvjPxzRuSI7VIVZA9G73ED6Sb24UYGTIhpXv8InK95V6jh3EZV6%2Btru2V8bOB2mKBN%2FZ0Ln3%2BRMvkcZ09BMCSEAJIsGlW9pdqLGTtTuA1wHSlJ4DRvk5lhfUq9OYQsSLfnpBmkGTnfp4oSGiBKXQXi7s%2Boq97KSOqN9pTWbCBA70C4pVbAbFwqD%2FmQ6wJ1h2WQSPgS9yIbofo4rcY3QnWruyUTP39TAwXuEk2ywiJyp2jLv6oZnc%2BxDZUAC60IgDjFQMBKHbB%2FcZlVRX4Nvc5mk2JXD2AOc2T09dpOzapOwiPF2WtMMFdpfB4vciGf9K%2FvitDrsRzlcWjPPYek%2Bb1Ia%2BIWvTIzscQZm3%2Bx8CltCDyo9o%2BKUOCF%2F0fhYnu5P8GVpAF8h5Och3MsH3rI9GrKh4TG1F24l8CDsYseocaZLdGo60%2BAqz%2FSmrGkocTIjGWZ9ykyByzpBOQ%2FZmAE3S3Y5PYC84tBvHtxBdj%2Bzx3shvLZ3uLaE%2B1rqpHtYMf2y1eM6CroUNt05iWlqHu%2BatDiYRhYCmUjR5IB%2BEbTDiRw%2BTrxMfj0PRTNMby67rYsKyk8jhlaHTUXMPf90skGOqUBKUlRMQdeSEIAlYU2C6Wn%2BUP%2FbwNw4bwRcUJT22n%2BusB5P0jEaXhfPSVQLG5hCtfIBMRbQrEuxaOONioosGaCU5ykEbAfZLnB0TOcQhpnIcY5u%2FK522yLxqzS8t%2F5E7AA2rsdBpMneg%2FA4rTJwamIFwNvcvF83P4GGEtP8fSJz%2Bal4f2iP70WezfPH%2FFUZjd9k6qk2scvbzioJeIqmraWeoNuDV8I&X-Amz-Signature=62b54b174d0f5b05fa865c45e8f2bcfd7d6605d6e29cd53edabab7b10ec86be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLXYBM5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgtiiNtd2YlOPawGR3IKiHB0Lp%2BDwO8RC8Jdz7mM1fIAiEAyhVSU8VHtnaXuYKIKTfQPLq%2FHF754jxTbfz1n2dqx0EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAtvqv%2BGW1RoWHYJircA6bhBReEIP7tj%2BgNatYITHEMF7%2Bvc1%2F9dHBTNc2VmcOuX%2Fc3gGNvjPxzRuSI7VIVZA9G73ED6Sb24UYGTIhpXv8InK95V6jh3EZV6%2Btru2V8bOB2mKBN%2FZ0Ln3%2BRMvkcZ09BMCSEAJIsGlW9pdqLGTtTuA1wHSlJ4DRvk5lhfUq9OYQsSLfnpBmkGTnfp4oSGiBKXQXi7s%2Boq97KSOqN9pTWbCBA70C4pVbAbFwqD%2FmQ6wJ1h2WQSPgS9yIbofo4rcY3QnWruyUTP39TAwXuEk2ywiJyp2jLv6oZnc%2BxDZUAC60IgDjFQMBKHbB%2FcZlVRX4Nvc5mk2JXD2AOc2T09dpOzapOwiPF2WtMMFdpfB4vciGf9K%2FvitDrsRzlcWjPPYek%2Bb1Ia%2BIWvTIzscQZm3%2Bx8CltCDyo9o%2BKUOCF%2F0fhYnu5P8GVpAF8h5Och3MsH3rI9GrKh4TG1F24l8CDsYseocaZLdGo60%2BAqz%2FSmrGkocTIjGWZ9ykyByzpBOQ%2FZmAE3S3Y5PYC84tBvHtxBdj%2Bzx3shvLZ3uLaE%2B1rqpHtYMf2y1eM6CroUNt05iWlqHu%2BatDiYRhYCmUjR5IB%2BEbTDiRw%2BTrxMfj0PRTNMby67rYsKyk8jhlaHTUXMPf90skGOqUBKUlRMQdeSEIAlYU2C6Wn%2BUP%2FbwNw4bwRcUJT22n%2BusB5P0jEaXhfPSVQLG5hCtfIBMRbQrEuxaOONioosGaCU5ykEbAfZLnB0TOcQhpnIcY5u%2FK522yLxqzS8t%2F5E7AA2rsdBpMneg%2FA4rTJwamIFwNvcvF83P4GGEtP8fSJz%2Bal4f2iP70WezfPH%2FFUZjd9k6qk2scvbzioJeIqmraWeoNuDV8I&X-Amz-Signature=2641625f666cc68c5582000c394f12af82f2bea92e77d9a65ec8425838c7b45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
