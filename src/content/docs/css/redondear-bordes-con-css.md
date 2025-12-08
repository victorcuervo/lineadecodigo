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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQH6VSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHW76dIIacpNC%2B2Ans%2Fy9FcrgUvYdqIQsSdePyftOw9gIgFCym1KmAt4u7hWRMrvGYTDmEtdk%2Ff7eGTTYt5oyjc8MqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOIoQB4O7A5EpXJCrcA4IyTw20ckyjxmUKjcfTsF1CLn2%2BBTN9ZX4WHQCBU22zzX9m0GMuIJ0N%2F1hSuhIhGub1G4tev37D8TJNV86cUkDkFWsnvVhwAWrHNu2uIQt%2F37AE7KHhAmY5D%2Fb%2FAGDtmdPK7Ea6lxxx6ZujEVqQVIDyxzEa0%2Bw7TI6qfW%2BsGATELEwBh%2BJeheYevhEk%2Bbkul7Ye%2FPTleoGt5qX2LOlu1uotzUITmToHF%2Bz8dC6a5Nlb%2FdvUKim%2F%2FltjVTGWasW3m9jwU%2FwrbsbsVT6xQ8%2B4yBroKrRbk23iLOdwYG0bGoPA4AGTOz1YoLIBI%2FLH4%2B%2FurSUEbjsz3U%2FyOasWqCS5aB%2Fkxt96I1q%2FuuCTj%2FGEG9Bj34nSw5AIbkAWF34QE6hC9ETmxcx%2F8io%2BbdoAPgGdlzzlEUy%2BCydpsHeX9Gv0fDArAjQF69y9lnlHA9KNkEuLKIvL3zNHLoePvgrQlOeWfyy9%2FTRo9lys5%2FDPzww8to1dtY890wR3ykuEhwFpuo4vqK7ZV4gDzdiEJwLXOpgQTCjQJcwxqm5TpATrK2HzRWKtWhFshvQsuBZvxq5LZO1qJNrXTfrpKhfYf3gec1B0QlAUVpiWqLKvsWaysKSS1byZt5KSXdQEGJQMbMvkMOXc3MkGOqUBh6qtuj5PwFX96ozB7A8jerer56hemgzD6lxWdryIWxyhH3qwsKyO%2FLFZfnaxTV0Vpx9WqPI050DDeSM40jjZRoS7tBm5u1Zi6dlrxgEkv6jiLCDmJ6ph3HLEhwAMkWcxtjrMbaB6VB5LM9zgFEhudRXX1luTvHbD%2FT73iqnCgJx4TXFX7s%2BPFi22K8hAXTxwdpQEtrKFVntC%2BasfxJEyxLMbMqQq&X-Amz-Signature=43a3c6d41cb3928ff2a7c23d133f21d4599de2f25fd6915782173e7aca5bcb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQH6VSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHW76dIIacpNC%2B2Ans%2Fy9FcrgUvYdqIQsSdePyftOw9gIgFCym1KmAt4u7hWRMrvGYTDmEtdk%2Ff7eGTTYt5oyjc8MqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOIoQB4O7A5EpXJCrcA4IyTw20ckyjxmUKjcfTsF1CLn2%2BBTN9ZX4WHQCBU22zzX9m0GMuIJ0N%2F1hSuhIhGub1G4tev37D8TJNV86cUkDkFWsnvVhwAWrHNu2uIQt%2F37AE7KHhAmY5D%2Fb%2FAGDtmdPK7Ea6lxxx6ZujEVqQVIDyxzEa0%2Bw7TI6qfW%2BsGATELEwBh%2BJeheYevhEk%2Bbkul7Ye%2FPTleoGt5qX2LOlu1uotzUITmToHF%2Bz8dC6a5Nlb%2FdvUKim%2F%2FltjVTGWasW3m9jwU%2FwrbsbsVT6xQ8%2B4yBroKrRbk23iLOdwYG0bGoPA4AGTOz1YoLIBI%2FLH4%2B%2FurSUEbjsz3U%2FyOasWqCS5aB%2Fkxt96I1q%2FuuCTj%2FGEG9Bj34nSw5AIbkAWF34QE6hC9ETmxcx%2F8io%2BbdoAPgGdlzzlEUy%2BCydpsHeX9Gv0fDArAjQF69y9lnlHA9KNkEuLKIvL3zNHLoePvgrQlOeWfyy9%2FTRo9lys5%2FDPzww8to1dtY890wR3ykuEhwFpuo4vqK7ZV4gDzdiEJwLXOpgQTCjQJcwxqm5TpATrK2HzRWKtWhFshvQsuBZvxq5LZO1qJNrXTfrpKhfYf3gec1B0QlAUVpiWqLKvsWaysKSS1byZt5KSXdQEGJQMbMvkMOXc3MkGOqUBh6qtuj5PwFX96ozB7A8jerer56hemgzD6lxWdryIWxyhH3qwsKyO%2FLFZfnaxTV0Vpx9WqPI050DDeSM40jjZRoS7tBm5u1Zi6dlrxgEkv6jiLCDmJ6ph3HLEhwAMkWcxtjrMbaB6VB5LM9zgFEhudRXX1luTvHbD%2FT73iqnCgJx4TXFX7s%2BPFi22K8hAXTxwdpQEtrKFVntC%2BasfxJEyxLMbMqQq&X-Amz-Signature=f90c43ec0bae0df8130ad36e67cc36da476ef500a7de330d17ed1b6e3446c1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
