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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPJHEYS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7NVmUpIujbsO5KRBzfSvsTSDL31dtIKVYnxLJsTkGngIhAM8O5ZJytkbl5LXMDlIkH%2Bv31OJhIOW%2FKIK%2FFVwOs1CoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyJNnK7aO6DhiD40Iq3ANkNDrpWdbrs9ycsqUiYLYMR21rryJbrVUxirpMHUvf278pONMgzH9jFKTWApK0sVUvvNrHG27%2FoicoHC7iOzW4ZJPFlJzKYcUPpA8B2RxFbcy20KQEcPLBDefQE1Ye7En8FklU1Cg4EpB9XLj4KsT4bZHVPN92Ssir%2FRGEZ0w%2Fg4%2FvcWDjIxqg3OD70qnjh5TQCN76p5HTvFCtUNsUrnCpLYyJieAtTi4fqd357n97PegRHOk0xXKoHpQ%2B%2BmigcUwCATAbORYSQ3iHaFiZuQ78xGgGliaQWWEZ4KVUkMnrgf%2BbpPBHgtMhJtr0q1BpbQ%2BcTlOLSO%2BhElp0I8auF%2F2nf2XxvHTlJHuvOG8bgENDb3gk6jUDDOnLNSfZ4mY7pcaQRMxvdbXTR7qtqNkwmn%2FGdHZVqwva%2FBOujjZc5dg8P5Ky69%2B0JH7KE7LduL%2Bv7RMXrjnjjEnoyIp7B5UakQ%2FW0NzqZzBl0e12Jl%2Bl0%2F%2F%2B0fSWfGxPibBRem4LesfWzi7URaoyc7eKgWfc1VrJLvO3HVkvTrKEUTIeAY7d38etBKmw1mFmX5v6Ho2eKJAZGkca8PD5fwdRoVWKJKscZ8GoKjng%2FRZcr5jZqRGNOmMFz%2B4%2BeL6k4J9TICY8mDCm3NzJBjqkARiQ05rO%2Fy6nP0UWoeZ24x6YKQbthBk%2Fy4Fa8jKdJsoWk82kNhXcrlxb%2FWBvwKwHIq7nfYn54MIdoGXzMtTa7UPTjpIvs8JBRsozDbjdzSGfwUXg%2FtP4GAJOvlTWxef6DadHKKEGotu7Z2hffGJCCV%2FGA%2Fc17lyZ%2B%2Bv5fkrNmKGunNXcA4DN3ruuPwcIHOtmgPTNMTvq1Bb31smcBuSwD3g65LAr&X-Amz-Signature=15ad1e2b2034d62eca124cf02ea52a18ee07ea1a9e1c95815b4d21d2c88827dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPJHEYS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7NVmUpIujbsO5KRBzfSvsTSDL31dtIKVYnxLJsTkGngIhAM8O5ZJytkbl5LXMDlIkH%2Bv31OJhIOW%2FKIK%2FFVwOs1CoKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyJNnK7aO6DhiD40Iq3ANkNDrpWdbrs9ycsqUiYLYMR21rryJbrVUxirpMHUvf278pONMgzH9jFKTWApK0sVUvvNrHG27%2FoicoHC7iOzW4ZJPFlJzKYcUPpA8B2RxFbcy20KQEcPLBDefQE1Ye7En8FklU1Cg4EpB9XLj4KsT4bZHVPN92Ssir%2FRGEZ0w%2Fg4%2FvcWDjIxqg3OD70qnjh5TQCN76p5HTvFCtUNsUrnCpLYyJieAtTi4fqd357n97PegRHOk0xXKoHpQ%2B%2BmigcUwCATAbORYSQ3iHaFiZuQ78xGgGliaQWWEZ4KVUkMnrgf%2BbpPBHgtMhJtr0q1BpbQ%2BcTlOLSO%2BhElp0I8auF%2F2nf2XxvHTlJHuvOG8bgENDb3gk6jUDDOnLNSfZ4mY7pcaQRMxvdbXTR7qtqNkwmn%2FGdHZVqwva%2FBOujjZc5dg8P5Ky69%2B0JH7KE7LduL%2Bv7RMXrjnjjEnoyIp7B5UakQ%2FW0NzqZzBl0e12Jl%2Bl0%2F%2F%2B0fSWfGxPibBRem4LesfWzi7URaoyc7eKgWfc1VrJLvO3HVkvTrKEUTIeAY7d38etBKmw1mFmX5v6Ho2eKJAZGkca8PD5fwdRoVWKJKscZ8GoKjng%2FRZcr5jZqRGNOmMFz%2B4%2BeL6k4J9TICY8mDCm3NzJBjqkARiQ05rO%2Fy6nP0UWoeZ24x6YKQbthBk%2Fy4Fa8jKdJsoWk82kNhXcrlxb%2FWBvwKwHIq7nfYn54MIdoGXzMtTa7UPTjpIvs8JBRsozDbjdzSGfwUXg%2FtP4GAJOvlTWxef6DadHKKEGotu7Z2hffGJCCV%2FGA%2Fc17lyZ%2B%2Bv5fkrNmKGunNXcA4DN3ruuPwcIHOtmgPTNMTvq1Bb31smcBuSwD3g65LAr&X-Amz-Signature=5cd19e8d1e80af21a617e51322af5bd80d48477cf88f89fd1b6766fc7742a8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
