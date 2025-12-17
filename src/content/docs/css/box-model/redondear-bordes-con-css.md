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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT62LVSH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUXUZgPnvJjKw2zlTxQCCDWokQfGY%2BetQTR9lEYjd68gIhAKs88G0Fvx0IQBTQH%2FjzipjhMy8o%2B3Q6VEVKl0RfglC6Kv8DCHcQABoMNjM3NDIzMTgzODA1Igw71U7cztgV5YBMnYEq3AMfhRrQVqQmpKi9FpUakI0adFP9vMnQPOIlOjtrsPPuJMAiHBj2eFDyt34HTCpONoUHUtlpYn%2FZRCGEoVNXKNWNfrhVJIg83hAg3hpLh1DNY2FTUdfGS0KbUpg0r30QYj%2BCmzEtL7xA806D8KeDX0rhfH7v1zHDQWlcukaKFxQCEi9vNCTXuElIvyfct8fTeE30%2F3%2FNpBaTNEwDNcZlEjGBmq5cEbacb%2B%2BrYkvn9KKJ0LcHigiCKDaWLUtkacD4f4Fib9FE%2F%2Fbp%2FzO0ECJPIEEDZDql%2Fzym%2BV7Gj4OsWafOk5rJ940gbN7m6jmBNNbez3x63uQLNYAgZn1EEXL69kWJUleYPf0xvEhUXkq9eUog2un52TjHphu9IBYeSAYPxnKnXZnNRlrpU6ijjPIXqxlyKqjJ5ZQjfF2n%2BgKL5bub2i2q8Auhcp2GSSpI1voESXMgW63asQCr6%2BaKv5qdgg57MtT367T0haGzBg5gvj0DPe1YX%2BYDqd3dXwBqLxUoCT%2FS%2FNI%2BCobHN6Dsx6e9Qcq0rmaniJRafuEy1GPwootwoda11Gyoek6%2BDDN3YudFXEFtFgsgfJVIoA8uw%2FANSA4nw4CACoMm%2FVwZQr4ROKx2lq%2FGT48BF08HJQjiejD8gYnKBjqkAVHToKI5WL5IxORbo7PQkaqu3NXobHGCK4nOOz2%2FjXoPV07vBEccyBzVMRpLcMEit74SAIT4X5f1emc7EZSVwUUljqpmKceA4fLQLKr21P0waLloc3WfYvduKNmP8qxh06nnFrs%2BdwNFl44TjndPEYdrP%2Fn0199ilwqGj5oFo3Ske2znICPFJZi%2BTd6P%2BQf6tW%2BHukVsVAqJAbcyfCpg58ijLbuE&X-Amz-Signature=8ed31697ffcd6ec575fbc25c23e82b542339ebda10c0c414082b3b01f3045f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT62LVSH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUXUZgPnvJjKw2zlTxQCCDWokQfGY%2BetQTR9lEYjd68gIhAKs88G0Fvx0IQBTQH%2FjzipjhMy8o%2B3Q6VEVKl0RfglC6Kv8DCHcQABoMNjM3NDIzMTgzODA1Igw71U7cztgV5YBMnYEq3AMfhRrQVqQmpKi9FpUakI0adFP9vMnQPOIlOjtrsPPuJMAiHBj2eFDyt34HTCpONoUHUtlpYn%2FZRCGEoVNXKNWNfrhVJIg83hAg3hpLh1DNY2FTUdfGS0KbUpg0r30QYj%2BCmzEtL7xA806D8KeDX0rhfH7v1zHDQWlcukaKFxQCEi9vNCTXuElIvyfct8fTeE30%2F3%2FNpBaTNEwDNcZlEjGBmq5cEbacb%2B%2BrYkvn9KKJ0LcHigiCKDaWLUtkacD4f4Fib9FE%2F%2Fbp%2FzO0ECJPIEEDZDql%2Fzym%2BV7Gj4OsWafOk5rJ940gbN7m6jmBNNbez3x63uQLNYAgZn1EEXL69kWJUleYPf0xvEhUXkq9eUog2un52TjHphu9IBYeSAYPxnKnXZnNRlrpU6ijjPIXqxlyKqjJ5ZQjfF2n%2BgKL5bub2i2q8Auhcp2GSSpI1voESXMgW63asQCr6%2BaKv5qdgg57MtT367T0haGzBg5gvj0DPe1YX%2BYDqd3dXwBqLxUoCT%2FS%2FNI%2BCobHN6Dsx6e9Qcq0rmaniJRafuEy1GPwootwoda11Gyoek6%2BDDN3YudFXEFtFgsgfJVIoA8uw%2FANSA4nw4CACoMm%2FVwZQr4ROKx2lq%2FGT48BF08HJQjiejD8gYnKBjqkAVHToKI5WL5IxORbo7PQkaqu3NXobHGCK4nOOz2%2FjXoPV07vBEccyBzVMRpLcMEit74SAIT4X5f1emc7EZSVwUUljqpmKceA4fLQLKr21P0waLloc3WfYvduKNmP8qxh06nnFrs%2BdwNFl44TjndPEYdrP%2Fn0199ilwqGj5oFo3Ske2znICPFJZi%2BTd6P%2BQf6tW%2BHukVsVAqJAbcyfCpg58ijLbuE&X-Amz-Signature=6a3640ff40033105c0e23d37778128f5dc5a8f8931158ca6e37e9a6f9aad096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
