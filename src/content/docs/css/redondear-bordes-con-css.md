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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFRBGWVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2ORcZN8rsKskD35VZ5UCXkD%2F1b0t2OhNkOh70mx%2BIOAiBZtJ44%2BDAgjcb9jfUsraqiH3nxSaXePfg%2FDYtIZo7%2BgSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwZlyDUdHwGwRQTsKtwDxq3ZpFpvADt8m7xPcp4hubDnsxYuhAmJCezlUWTdK9OS6u1Bt%2BgV1C0yXq%2FuRfql%2BlGUMyLlyeF%2F3y0iqqG90gaP4HxKadxOx1DvsYHVvLw%2FZ87u8E1hyWOhiEl9cU6aYWZJezvezjoLsL87wDG%2BpfDVo91AITPG5XjCiD11J26RDAa6Ebxf15PqTbbrAB8gsXBGKQTFHHqwOhhtZA9EOdAJAlYBtsSL1B0raTE71%2BiV6w31qInYT4HuT71VBKmB3VHbAjeT0yaMYGIbKEexlgTnu9cuAfZPe8TaxxhufLh%2BnFoulPvckvbWT9WsrA4C9Cc0OkhLLsBt6dNjRssVqg7eJPWXuTwSec%2Fvns3OQjQqNVR4ziHDPKvFGqvSTVe8j%2Bwcpwiyh2i3Lz0nrQO64W32DKDXeNloTO%2F0WJ4Me65awh%2FxzciUXYjqPrsRBfLxvzqDqYKjd1P9rVzJzpDvhdjbvfN1xfa6nVwT4tw%2BmZ82zh3gRYjQlzVLwlfr8JGFGhjwmwvXIQKTOnoPLAQipXDcV0Qp10TfjT5E%2FzunjLOckCdM0BJawvPWCH%2FDuOxQshsNcpdYerUqxF%2BeB4k%2BC10NDyOosmFyhyYDSpywqjAH1piZkWqHpeq%2B6dow%2Bp7UyQY6pgHpWachDHSPY0c09K0nXoeO8g7Q0ev4ACTcn1SBWnep%2F5LydcK8eP%2Fx8bjDv2hB81kVUIYHkVtsN2OCigdUjc2DvTPF530OxD3xLhY367oae48E5JwY85YIxMtdMGpRDWX0XC2SPqCx6ZQ4P2W6h%2Fuiy9YFw4NTgrICrDBBG%2BslDlubHsH50%2F6icFX8JI%2FkfqAmTt%2FzDSv728iMD7YWHUQM4hx%2BxF4T&X-Amz-Signature=3913e2876b6cb611c8ebb8c94a85e158723be6f7f462d5b3d55a5d6fee154e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFRBGWVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2ORcZN8rsKskD35VZ5UCXkD%2F1b0t2OhNkOh70mx%2BIOAiBZtJ44%2BDAgjcb9jfUsraqiH3nxSaXePfg%2FDYtIZo7%2BgSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwZlyDUdHwGwRQTsKtwDxq3ZpFpvADt8m7xPcp4hubDnsxYuhAmJCezlUWTdK9OS6u1Bt%2BgV1C0yXq%2FuRfql%2BlGUMyLlyeF%2F3y0iqqG90gaP4HxKadxOx1DvsYHVvLw%2FZ87u8E1hyWOhiEl9cU6aYWZJezvezjoLsL87wDG%2BpfDVo91AITPG5XjCiD11J26RDAa6Ebxf15PqTbbrAB8gsXBGKQTFHHqwOhhtZA9EOdAJAlYBtsSL1B0raTE71%2BiV6w31qInYT4HuT71VBKmB3VHbAjeT0yaMYGIbKEexlgTnu9cuAfZPe8TaxxhufLh%2BnFoulPvckvbWT9WsrA4C9Cc0OkhLLsBt6dNjRssVqg7eJPWXuTwSec%2Fvns3OQjQqNVR4ziHDPKvFGqvSTVe8j%2Bwcpwiyh2i3Lz0nrQO64W32DKDXeNloTO%2F0WJ4Me65awh%2FxzciUXYjqPrsRBfLxvzqDqYKjd1P9rVzJzpDvhdjbvfN1xfa6nVwT4tw%2BmZ82zh3gRYjQlzVLwlfr8JGFGhjwmwvXIQKTOnoPLAQipXDcV0Qp10TfjT5E%2FzunjLOckCdM0BJawvPWCH%2FDuOxQshsNcpdYerUqxF%2BeB4k%2BC10NDyOosmFyhyYDSpywqjAH1piZkWqHpeq%2B6dow%2Bp7UyQY6pgHpWachDHSPY0c09K0nXoeO8g7Q0ev4ACTcn1SBWnep%2F5LydcK8eP%2Fx8bjDv2hB81kVUIYHkVtsN2OCigdUjc2DvTPF530OxD3xLhY367oae48E5JwY85YIxMtdMGpRDWX0XC2SPqCx6ZQ4P2W6h%2Fuiy9YFw4NTgrICrDBBG%2BslDlubHsH50%2F6icFX8JI%2FkfqAmTt%2FzDSv728iMD7YWHUQM4hx%2BxF4T&X-Amz-Signature=76fa71792220ceb7b192cc49105049105f37190a35e5f3e9576e9dbb223e1385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
