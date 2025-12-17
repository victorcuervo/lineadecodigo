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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RS3QTDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ubyrXbmqdrY3AlOoVAQRw38QH0TjSBnr2RPJDoiDgAiEArI4nI63xCMCb50YAsyOaAxBvO6u1PSwbZ9TKINM2QGIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmO04CsO%2FrEZZmyKSrcAx50QyZ5Hii4dY6DpNkW5HBDuiIBYghiT4dBhSHaePzedwEpG5qS6VzYTVA3aO4hTafkp3%2FBMl6vX5qFOiJhSvxGU1JYRrrQJ8Be7wULRr08iF%2FODdVvG%2BfgB%2FuBKkrznvp0AgCTu9pydi9%2F7SCMv3sJSft1DkZJo1%2FhH41a2aW3KPGHy%2BSvsPkA%2FAW6tAvhIFvkC20MCzmrDutS9m9ZzpguY5Ix4feR5wmIzS%2FXTBKVg9vanwvXN%2FXMxA0xkOHY8bKaAdSI%2FCFxx1B%2FKsw%2FPA0SJhCVPbUrQJrxianihs8bDCYKsK5rEX7UUAPgKPq9rOQePayTYnIMh1ekzYRxtIl%2FhKfLFcsBcdT4PlNX7Ula%2F0QVH0WvJHpLMoMHjzH9734vbaLBBXqDam%2B59P24TS1XMLlBE5lOTlagy0KQe8W7ZAta%2BzKDHjO5BfJ6MgCVqJ1yjGoRTzaz9AtSxv%2FqykkwqKHCx7K1V81m%2BqXyp3gAyAWCwznwj3bAt2%2F94I3t8rPncCvDA%2F6ErfOmSeG%2FbjvsFfWZhnMcd0ICMCDEHDNAXjo3dOoFNQrK%2F1BrkFmM1iftuwpNPdMIpCsRkvczie0M%2B7mLsfdMULZqgmRpZoaqiiVrntlUTsDc8njRMJGNjMoGOqUByLpfHTvBqoGIy%2FtE12FyKy7fU4kK%2BqfwiuRg4h26qdOmF1WDtuKMblwTYF7lMfvFKyQtgr9kiip0bswPx7%2FRozjch6aPOgouE55JuAbCRVL%2FS1g3hpnbMeNwmlNN1UmEL%2F7HeAAUM1v6DkyuOhP9tjUlDp0W6ONnfxivFoP6s4Zla%2Fnt0YGDwfhGDrRvLmuPBLvx2%2B5EFW4Qnkgta0IWV%2BB1UeCN&X-Amz-Signature=60b7a53778ce253b41fdefa3e1866b31edaaad10abbf03dcb9f925ff5fc67270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RS3QTDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ubyrXbmqdrY3AlOoVAQRw38QH0TjSBnr2RPJDoiDgAiEArI4nI63xCMCb50YAsyOaAxBvO6u1PSwbZ9TKINM2QGIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmO04CsO%2FrEZZmyKSrcAx50QyZ5Hii4dY6DpNkW5HBDuiIBYghiT4dBhSHaePzedwEpG5qS6VzYTVA3aO4hTafkp3%2FBMl6vX5qFOiJhSvxGU1JYRrrQJ8Be7wULRr08iF%2FODdVvG%2BfgB%2FuBKkrznvp0AgCTu9pydi9%2F7SCMv3sJSft1DkZJo1%2FhH41a2aW3KPGHy%2BSvsPkA%2FAW6tAvhIFvkC20MCzmrDutS9m9ZzpguY5Ix4feR5wmIzS%2FXTBKVg9vanwvXN%2FXMxA0xkOHY8bKaAdSI%2FCFxx1B%2FKsw%2FPA0SJhCVPbUrQJrxianihs8bDCYKsK5rEX7UUAPgKPq9rOQePayTYnIMh1ekzYRxtIl%2FhKfLFcsBcdT4PlNX7Ula%2F0QVH0WvJHpLMoMHjzH9734vbaLBBXqDam%2B59P24TS1XMLlBE5lOTlagy0KQe8W7ZAta%2BzKDHjO5BfJ6MgCVqJ1yjGoRTzaz9AtSxv%2FqykkwqKHCx7K1V81m%2BqXyp3gAyAWCwznwj3bAt2%2F94I3t8rPncCvDA%2F6ErfOmSeG%2FbjvsFfWZhnMcd0ICMCDEHDNAXjo3dOoFNQrK%2F1BrkFmM1iftuwpNPdMIpCsRkvczie0M%2B7mLsfdMULZqgmRpZoaqiiVrntlUTsDc8njRMJGNjMoGOqUByLpfHTvBqoGIy%2FtE12FyKy7fU4kK%2BqfwiuRg4h26qdOmF1WDtuKMblwTYF7lMfvFKyQtgr9kiip0bswPx7%2FRozjch6aPOgouE55JuAbCRVL%2FS1g3hpnbMeNwmlNN1UmEL%2F7HeAAUM1v6DkyuOhP9tjUlDp0W6ONnfxivFoP6s4Zla%2Fnt0YGDwfhGDrRvLmuPBLvx2%2B5EFW4Qnkgta0IWV%2BB1UeCN&X-Amz-Signature=b849bb0f7bcc031f649ce7fdc905297e5347904897982c40a3e264d2bcb91276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
