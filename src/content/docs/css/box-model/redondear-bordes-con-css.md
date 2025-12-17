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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6PTWF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM%2FvsJ0fQUWbPEoRvvlTso6FSBxjLyGGjPPtoBjsCCVAiBm4cnl5SvV8rnYZuAe%2BFG9IfvTL%2Fczk3CKjVFVB95r0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUTXqB8Rl9q2ODQvWKtwDcT748yNAEyZIxximMuCV8Vxe7GrsquPdRdUlQwJ9tGG9Zr6msqgBLBptquQMNxZalvz4wMOtDzBg72exhdJD1zZWzMxE%2BaOh4d5qR5eLI4YHW0DTh3iZUaN%2BqEnwS4a40bqv1Xo0hhlVoLrGVBmJkMNcvhVZXJ663XWVtpZcPzBZgg%2BuGGHCUwM8riU6%2Fb%2FGREx3G4OBfopsZxgZpFLVAeiLosja6oly6JMyq%2FvWAf%2FApXCmJCihOFEQA%2FPCMF%2BSQI1aWZy1EYsBe%2FLGlwE0vYFqGEXFENAwRiGYdQzmPDIZvjoCpewuPzSyMz%2F5gMBiURnNLziy8iGfMGE%2FHX6KXwl%2B5PvI4qgDiZyJeVsXrUKKYp11zAP2tQ2NlTykJG5LctWudJoI5TRc97Z6LdLwYPEE4uJraDhzynzyi17nOHhdyuZp7R3w6ekisUsgWQRSPsaW9BqDb72V56O%2B%2FdIjhf%2F2btnIUSY2qyx1Rblh0mjpZk1MM1Fb0RPwanaBiM61evzwWZL5%2F1gpvO9Zc8BR9dFYNIZyvS2rxPO1vhihLytt0R7ChQBGPblUAKNY3n6sY2xJD%2Ftmkf%2FSO2oC2MlIQ8i5RxjpD65XSRlSk4zE9sA%2BNL8wEuHMz3tEMQsw6o6KygY6pgGjMLoMQTx%2BK41%2B38cECYX2PdcCQWATFUuxT7vpCTuqx7DyjqXxBLusDch3GIHeOFsR50nNzX6i1bfR1mpfn5hWxHVhMaL%2FIYfZ1wscarq8Lz3XBUQCVfQQgxOaBu4RxTityrGJZzZhYUwkBMslIpqoblurLKuQ7cuohrOxcQp52lfcGTP%2FERUfPhj1xs7FE3gAuVxts7vb8KGDujp8ue6dgthzt2YP&X-Amz-Signature=6c313b5de9c9b6cec0d9662f5d048f80703d1f4c3a22ecec7c6e322e04d4473c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6PTWF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM%2FvsJ0fQUWbPEoRvvlTso6FSBxjLyGGjPPtoBjsCCVAiBm4cnl5SvV8rnYZuAe%2BFG9IfvTL%2Fczk3CKjVFVB95r0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUTXqB8Rl9q2ODQvWKtwDcT748yNAEyZIxximMuCV8Vxe7GrsquPdRdUlQwJ9tGG9Zr6msqgBLBptquQMNxZalvz4wMOtDzBg72exhdJD1zZWzMxE%2BaOh4d5qR5eLI4YHW0DTh3iZUaN%2BqEnwS4a40bqv1Xo0hhlVoLrGVBmJkMNcvhVZXJ663XWVtpZcPzBZgg%2BuGGHCUwM8riU6%2Fb%2FGREx3G4OBfopsZxgZpFLVAeiLosja6oly6JMyq%2FvWAf%2FApXCmJCihOFEQA%2FPCMF%2BSQI1aWZy1EYsBe%2FLGlwE0vYFqGEXFENAwRiGYdQzmPDIZvjoCpewuPzSyMz%2F5gMBiURnNLziy8iGfMGE%2FHX6KXwl%2B5PvI4qgDiZyJeVsXrUKKYp11zAP2tQ2NlTykJG5LctWudJoI5TRc97Z6LdLwYPEE4uJraDhzynzyi17nOHhdyuZp7R3w6ekisUsgWQRSPsaW9BqDb72V56O%2B%2FdIjhf%2F2btnIUSY2qyx1Rblh0mjpZk1MM1Fb0RPwanaBiM61evzwWZL5%2F1gpvO9Zc8BR9dFYNIZyvS2rxPO1vhihLytt0R7ChQBGPblUAKNY3n6sY2xJD%2Ftmkf%2FSO2oC2MlIQ8i5RxjpD65XSRlSk4zE9sA%2BNL8wEuHMz3tEMQsw6o6KygY6pgGjMLoMQTx%2BK41%2B38cECYX2PdcCQWATFUuxT7vpCTuqx7DyjqXxBLusDch3GIHeOFsR50nNzX6i1bfR1mpfn5hWxHVhMaL%2FIYfZ1wscarq8Lz3XBUQCVfQQgxOaBu4RxTityrGJZzZhYUwkBMslIpqoblurLKuQ7cuohrOxcQp52lfcGTP%2FERUfPhj1xs7FE3gAuVxts7vb8KGDujp8ue6dgthzt2YP&X-Amz-Signature=a363263cd93403ca4695ee79c1c4c309ce003dbee4ca79f99f6fd525c8a6c120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
