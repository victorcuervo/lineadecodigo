---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EW6E2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEsVABZczNjbCQSlfixuwS%2F6luYyZladS7E8i%2BlWzYilAiEAg5rdsdP3fNvuTCeKpKRb6PPcAJjt6iplnJHEkIGNekYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNH%2Bedh8extaE4tbRircAxjOHv5UjwuO0U7IOTHS9Wld8xoktXWEtzcmsNXHSMfEMde9DcaSDEyU1SVo2iDa18ywZKbn0YumvyAfuMfhI2efk5SVYmhqaTEkYsN7XNh78L07GYFKKaUoIOW4KcBGHfdTxSdTlqFuhfKyy%2F4Ui%2FViUkuo1j8qBnAY2R9FckDtxNcB2NOMZ0Q%2F%2FMWEa0QTDtFjsCiGZbIKWsqVgPjbRJmoW1PraKfqfeVRQfgWs7jSne1trXQyhQafn61UZjtrP2hEXDjLEmJxOi6vR5f5CtoVU1Paa%2FA2mH7DFNGDrpZXDK63%2BvbX6A03z%2FQt4xq75mBBA8bCM1kValChQDKOdDu%2BUY4BThHx2GxLG24EubErOkNb9ouBTCma8wOCcr3UWfCB0Xgbx3siXUr4vPtzboRVt4peY3%2FHh4496mR751JVkQ%2Fm%2BEgdbjM2qdCa4fSsxjfOum21RaMCt2ejPO4uK%2BA8BXvUY0vy5mgMcpXly0vgdwsPlXD4M2BznD1C%2F0yS2mej7nI1Q5XzSgMcWWfkKqbdzPnJHox7aR%2FDGZiVG3dEiNvpjAky9GWKZy%2FMKvlMc7dytPaRxeTzqwF3qGkOLNGtMZHDC71vlRdY1fYANK%2BTS3HOKLc9EJ8OOC3eMODMxMkGOqUB90QSzcDuzL7ogzgMVKd7QjATlDRw5F%2BeVIyGxBNyIe2nsKPY5g%2BC7eHJ9ltLwgMHmelS7x42bppdVwobTuusMCA4QDVNEAGXmu33tkEpetNyRLiW71fXgGdCxOflAx4EFtOk%2F7kudxgg4ZnJWZA94Va0oO4fChk%2FsiSxb5B14WNQaxVjAd3fiTjU2On1zuSl06KESowpHj8vNtWeRhRsyTv8lxHq&X-Amz-Signature=cdf12ec9bba54e5e216b77ffc481b047818a5a8c085123e713eb1e96a7995acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EW6E2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEsVABZczNjbCQSlfixuwS%2F6luYyZladS7E8i%2BlWzYilAiEAg5rdsdP3fNvuTCeKpKRb6PPcAJjt6iplnJHEkIGNekYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNH%2Bedh8extaE4tbRircAxjOHv5UjwuO0U7IOTHS9Wld8xoktXWEtzcmsNXHSMfEMde9DcaSDEyU1SVo2iDa18ywZKbn0YumvyAfuMfhI2efk5SVYmhqaTEkYsN7XNh78L07GYFKKaUoIOW4KcBGHfdTxSdTlqFuhfKyy%2F4Ui%2FViUkuo1j8qBnAY2R9FckDtxNcB2NOMZ0Q%2F%2FMWEa0QTDtFjsCiGZbIKWsqVgPjbRJmoW1PraKfqfeVRQfgWs7jSne1trXQyhQafn61UZjtrP2hEXDjLEmJxOi6vR5f5CtoVU1Paa%2FA2mH7DFNGDrpZXDK63%2BvbX6A03z%2FQt4xq75mBBA8bCM1kValChQDKOdDu%2BUY4BThHx2GxLG24EubErOkNb9ouBTCma8wOCcr3UWfCB0Xgbx3siXUr4vPtzboRVt4peY3%2FHh4496mR751JVkQ%2Fm%2BEgdbjM2qdCa4fSsxjfOum21RaMCt2ejPO4uK%2BA8BXvUY0vy5mgMcpXly0vgdwsPlXD4M2BznD1C%2F0yS2mej7nI1Q5XzSgMcWWfkKqbdzPnJHox7aR%2FDGZiVG3dEiNvpjAky9GWKZy%2FMKvlMc7dytPaRxeTzqwF3qGkOLNGtMZHDC71vlRdY1fYANK%2BTS3HOKLc9EJ8OOC3eMODMxMkGOqUB90QSzcDuzL7ogzgMVKd7QjATlDRw5F%2BeVIyGxBNyIe2nsKPY5g%2BC7eHJ9ltLwgMHmelS7x42bppdVwobTuusMCA4QDVNEAGXmu33tkEpetNyRLiW71fXgGdCxOflAx4EFtOk%2F7kudxgg4ZnJWZA94Va0oO4fChk%2FsiSxb5B14WNQaxVjAd3fiTjU2On1zuSl06KESowpHj8vNtWeRhRsyTv8lxHq&X-Amz-Signature=2087c9fe2ed0175f2c93e22492770cde37c37f2a75c1b5b3cd2e311fe301859b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
