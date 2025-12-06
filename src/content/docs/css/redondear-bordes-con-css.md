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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3STPZDH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG2TXtrb%2Beupr8V6FR1y%2FK3RorhObSAMyMboDlWo8jmgIgLB2p0bXBk6Wu0qXqzY4aun%2FeuuAgn0icWxrZ%2B8%2FQJ78q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHG%2FGvtwoHLHpofPxyrcA8HzP1w6bD817IevNT4CQ39zS9XKG9XvRA5ZVeP22UZguNfgBuMtCTUWrtq1zEOKJRptHxudlvRW%2FaDtu79mo6gHtkyNqz8XWoA4pUW0WUHC8%2FUiTPqsk4PRCJyGhF%2FXU4n6%2FWyFCumbzOwG7ix4M1Apjshz6FQG70PITSL%2BjWQN08HVAO0yudj3b25y1zmlwLI4lkEAPlwz0PmRG9RX9F2V8JnPKPYyHhhtiXuMEPbS0uC9RNMeKs6mzq0JQis%2Bu6%2BR1%2FcWXQlRnb%2Fq6M7CQl77P6T%2FQFXHA06L1lXioLfZgM8LkMtEq7u%2FkNV4jtGF8QtbgmIl7UO2xXmwbFNAAubG9JDsm%2BAPismIPxiGZS08HC6F2IZ4pqbPT9UFUUdLHtAVW4WxSOpo1brP51Cb%2BqYdMaQeNGiWwGXx56gzN%2FIWOrmmIQGD5TD34i3xujBgRmS1LcepV7uBdsly9YYcSs676RnJeKlFHbA%2B99TUEkzOHZIMQy3NKRzi85UKJ%2BFVkl4Ozt5Gu93N4liO4H2SWYXZMGVEPLbuXjXL6hYMza9z8rr%2FXPITw01%2BGpY0OTOtyQkicWgTJbGa1peBCs7MN%2FE1C7aQ79Itu8Zqrqa94NwctOpfh8uaL97NDhcVMP%2FozckGOqUBcF2nz%2FawkgcWA57e07z7XcWz6YnlC%2Fk8M53QYLRsOjg26l7XC2b0h3cTPykKnM866ohluoF2mH2HfpGNgCKFOuYUBJ9pUYnYQbRWdr1QV9zP1yBVPXG2cQjOVZIC87GNLfnCwfcnhQtSfRBcIIqhe33IVFylBFcURiyLxWwWE3roPhoWSpBprk3yB38P8c7p%2F0UjIZUWvacVM%2FkA2Qn1fMFxKkzp&X-Amz-Signature=511abe9dd6b8cf967979c347b2cc999a245a8380d3311ea60380cce2a3e5f8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3STPZDH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG2TXtrb%2Beupr8V6FR1y%2FK3RorhObSAMyMboDlWo8jmgIgLB2p0bXBk6Wu0qXqzY4aun%2FeuuAgn0icWxrZ%2B8%2FQJ78q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHG%2FGvtwoHLHpofPxyrcA8HzP1w6bD817IevNT4CQ39zS9XKG9XvRA5ZVeP22UZguNfgBuMtCTUWrtq1zEOKJRptHxudlvRW%2FaDtu79mo6gHtkyNqz8XWoA4pUW0WUHC8%2FUiTPqsk4PRCJyGhF%2FXU4n6%2FWyFCumbzOwG7ix4M1Apjshz6FQG70PITSL%2BjWQN08HVAO0yudj3b25y1zmlwLI4lkEAPlwz0PmRG9RX9F2V8JnPKPYyHhhtiXuMEPbS0uC9RNMeKs6mzq0JQis%2Bu6%2BR1%2FcWXQlRnb%2Fq6M7CQl77P6T%2FQFXHA06L1lXioLfZgM8LkMtEq7u%2FkNV4jtGF8QtbgmIl7UO2xXmwbFNAAubG9JDsm%2BAPismIPxiGZS08HC6F2IZ4pqbPT9UFUUdLHtAVW4WxSOpo1brP51Cb%2BqYdMaQeNGiWwGXx56gzN%2FIWOrmmIQGD5TD34i3xujBgRmS1LcepV7uBdsly9YYcSs676RnJeKlFHbA%2B99TUEkzOHZIMQy3NKRzi85UKJ%2BFVkl4Ozt5Gu93N4liO4H2SWYXZMGVEPLbuXjXL6hYMza9z8rr%2FXPITw01%2BGpY0OTOtyQkicWgTJbGa1peBCs7MN%2FE1C7aQ79Itu8Zqrqa94NwctOpfh8uaL97NDhcVMP%2FozckGOqUBcF2nz%2FawkgcWA57e07z7XcWz6YnlC%2Fk8M53QYLRsOjg26l7XC2b0h3cTPykKnM866ohluoF2mH2HfpGNgCKFOuYUBJ9pUYnYQbRWdr1QV9zP1yBVPXG2cQjOVZIC87GNLfnCwfcnhQtSfRBcIIqhe33IVFylBFcURiyLxWwWE3roPhoWSpBprk3yB38P8c7p%2F0UjIZUWvacVM%2FkA2Qn1fMFxKkzp&X-Amz-Signature=dd61c0b2412ecfb15de8f43c3e0130adb0d3923cb3b4bfd9868a5f6c6634062e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
