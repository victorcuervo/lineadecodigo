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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YF4FGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSisMB7x%2FaRGP3%2F5kipQ10AsmpJ4BfrMqwh94kgkvNfAiEArz%2BUhfcb0OytPwzI0bj6JiH4Zvjg5RDce3r6%2Bj9lit4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnlKC4gvE9dNbx3uCrcA5YKL72Hg1fdqyzFXQtStjCr3Tr1KByO64ejDGt1vYvAMiOoCXEHCAkMvpRkdFAcGZ0W1eeU6zJ%2BiMuAsQhlw9xDbZp3Hb3rvxWVmtU%2Fw1Kxz54VBh6HOA2qQNtH464O%2B8y6ENQnPZCqiq1smK%2F3dMrkSzjbg7FjqcB74mQkAKpaYI1uZJEz9NCEdHyxY3jE60XiR0xjE0L6Oa6KN3IHGUmzV89b7U%2BZ6lPY197D5lO7Jp4b%2FAwTaEzUu2StL03XXSP0NlINMuh%2BMaHdKb4Ymr9Or0Yrn%2BFNC%2FFs9oqXVRhp%2FV0Drr29roIem5Ut7p1%2F4GYMMJhLrkZKrw54C02iNzVSAL%2BWaDGsRx%2F4OE%2BYmQv%2BcsN%2BRZ2gT4rnsUDnRhqa2HCLkgsMgjtWAQhkEn2%2B5ajkKe75bnK1v%2BiXHhooewa503UhZYFc1X5l81SrCNhYgqiBF4AE%2FN10s6zV%2BH5lmJwGHNp7%2F2sUQOZ4jcUXE6xu1Re5LNiiWOo2DUVBDiEjJvt5iYywxyAEscSYUa5i%2FdudjdA%2FPduWQYNNA%2Fio01rUTFW4yRMNwsiNq0sVC2Drgjm%2FuWGKD3cdmi5mNberXkp51m3ZpEFOAh4P20wW0UPFi5X8AIK92M%2Ff5xToMLnOiMoGOqUBJl4eMUGLsaM3%2BO5L6XyZ%2B0VbuFu1xgzwR2dP111qkRagg6nzzYJpUC2cso77KtxMhBaow0yC9tdZPlcHTXLlxqKW0FgByKLsJAfQ3VAzABHixuM%2F11dpUyr7d7h733iaGzodP2cra9iUOs%2BbOx3f9DGI8X81hDKtufW%2F13OpGVlEVdWHgIgWbFxBPgZDIbkG8fOMohH8EGUcbbrBgCZk3ST97e1q&X-Amz-Signature=942dda612cac063c37c77b83176413ff79f0abdb50c1b61f684d8bc7afd13551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YF4FGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSisMB7x%2FaRGP3%2F5kipQ10AsmpJ4BfrMqwh94kgkvNfAiEArz%2BUhfcb0OytPwzI0bj6JiH4Zvjg5RDce3r6%2Bj9lit4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnlKC4gvE9dNbx3uCrcA5YKL72Hg1fdqyzFXQtStjCr3Tr1KByO64ejDGt1vYvAMiOoCXEHCAkMvpRkdFAcGZ0W1eeU6zJ%2BiMuAsQhlw9xDbZp3Hb3rvxWVmtU%2Fw1Kxz54VBh6HOA2qQNtH464O%2B8y6ENQnPZCqiq1smK%2F3dMrkSzjbg7FjqcB74mQkAKpaYI1uZJEz9NCEdHyxY3jE60XiR0xjE0L6Oa6KN3IHGUmzV89b7U%2BZ6lPY197D5lO7Jp4b%2FAwTaEzUu2StL03XXSP0NlINMuh%2BMaHdKb4Ymr9Or0Yrn%2BFNC%2FFs9oqXVRhp%2FV0Drr29roIem5Ut7p1%2F4GYMMJhLrkZKrw54C02iNzVSAL%2BWaDGsRx%2F4OE%2BYmQv%2BcsN%2BRZ2gT4rnsUDnRhqa2HCLkgsMgjtWAQhkEn2%2B5ajkKe75bnK1v%2BiXHhooewa503UhZYFc1X5l81SrCNhYgqiBF4AE%2FN10s6zV%2BH5lmJwGHNp7%2F2sUQOZ4jcUXE6xu1Re5LNiiWOo2DUVBDiEjJvt5iYywxyAEscSYUa5i%2FdudjdA%2FPduWQYNNA%2Fio01rUTFW4yRMNwsiNq0sVC2Drgjm%2FuWGKD3cdmi5mNberXkp51m3ZpEFOAh4P20wW0UPFi5X8AIK92M%2Ff5xToMLnOiMoGOqUBJl4eMUGLsaM3%2BO5L6XyZ%2B0VbuFu1xgzwR2dP111qkRagg6nzzYJpUC2cso77KtxMhBaow0yC9tdZPlcHTXLlxqKW0FgByKLsJAfQ3VAzABHixuM%2F11dpUyr7d7h733iaGzodP2cra9iUOs%2BbOx3f9DGI8X81hDKtufW%2F13OpGVlEVdWHgIgWbFxBPgZDIbkG8fOMohH8EGUcbbrBgCZk3ST97e1q&X-Amz-Signature=2a28d9f032860d74d3dd4ca1ebb82b05f9a1060297fefde1cfe5e2c033268138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
