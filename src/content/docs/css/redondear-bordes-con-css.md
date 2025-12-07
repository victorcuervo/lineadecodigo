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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQ6KF6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXbAg2ERrfxbEybZDVmd8l4UZ1naEOYC7Y9lY%2FiAfSgIhAJ3bUzrL41hL82Q2OhRCpfnu6z7SHoXL7EOA8KLIh1VcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG%2Fgo1%2BiCKwIVvJVIq3ANcDQ2MOqjA3DJUc2nTP3Q4CTtOzCMaSaJNfjKtBvB%2BefkVon7Z0t1t64PZ%2BOYPEL3CGhbtnlKatMlu7l7hAAs6m5slR8F7iZWINZKFVEmmlv3vynnfmi%2BVky%2B3qbmF%2Buu%2Bbx%2FrN47%2B7HtM0Ebt8YwpnTcrpkoBQ4XOgUyzD%2BkBIWT4Wj312Rus0roqchRoMYSt2vh%2F3B1dQ%2B%2BnIG8SgfemxaiZtu7ZbURrhSjuQKw2YR1QQgThW9wTSkihYcFnEMtwZfgm0nfvb3PT3vcmAPUBeYkEUwKIgUGFrvWMEQ6rFF48YHODDnaMYsWLwDCdQHTUj6%2B8zBel2GNmX1zExJs%2FD%2F5Ne5dkcXvAsm7Gcz4KPOqgnUJ%2BQjoFf4o0dHiYeuK4l1pObXRNtq40H2R3zGD01EVHU2wb2E2eMhlfDKi08iDSr8Mwi3A%2BZlOxPHwRu0A4Va4N3jeuKWshHXu7SOeAFzIeDR%2F14ax9CuC2Q5sRYFsX42comY009CSNISqwA%2Bi0j5PPEcT1Zf%2FvOQb8cyrxOiUldbj%2B3b7v%2B3MLhzwt6JavANe%2BvYzRxOcX693N6GzFD4QgH6m0u4CRISFD9GzC6CflDcqxsQJmHH1CCmSejSp0wpcDbuikt5jekDCF%2FdLJBjqkAcP5sNYwhQpBFZ0X4af4RmBIWH9Yw7d2N7LFxRPQ3gdNaw2%2BL4R%2F43Ds73yP8qrBZ6i3V%2BkTrtkvL4w%2FfcQalJkauH2bhsZoxNch8c5C41ULe5C0GpHrX8OLvrKMQeorbndlKik0D3qNO5Z%2FNo66Z0pqhFLAKrFBSd07rxiRYuQMNFygaYCAEoerqYWWdE8IC6djQ4pdwhx0PTGWkgIxVZ%2BceHoh&X-Amz-Signature=95d32bba49c7f44c8c9a90ebe9562dabcef5179dd823c2adfbfe67130cfa0018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQ6KF6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXbAg2ERrfxbEybZDVmd8l4UZ1naEOYC7Y9lY%2FiAfSgIhAJ3bUzrL41hL82Q2OhRCpfnu6z7SHoXL7EOA8KLIh1VcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG%2Fgo1%2BiCKwIVvJVIq3ANcDQ2MOqjA3DJUc2nTP3Q4CTtOzCMaSaJNfjKtBvB%2BefkVon7Z0t1t64PZ%2BOYPEL3CGhbtnlKatMlu7l7hAAs6m5slR8F7iZWINZKFVEmmlv3vynnfmi%2BVky%2B3qbmF%2Buu%2Bbx%2FrN47%2B7HtM0Ebt8YwpnTcrpkoBQ4XOgUyzD%2BkBIWT4Wj312Rus0roqchRoMYSt2vh%2F3B1dQ%2B%2BnIG8SgfemxaiZtu7ZbURrhSjuQKw2YR1QQgThW9wTSkihYcFnEMtwZfgm0nfvb3PT3vcmAPUBeYkEUwKIgUGFrvWMEQ6rFF48YHODDnaMYsWLwDCdQHTUj6%2B8zBel2GNmX1zExJs%2FD%2F5Ne5dkcXvAsm7Gcz4KPOqgnUJ%2BQjoFf4o0dHiYeuK4l1pObXRNtq40H2R3zGD01EVHU2wb2E2eMhlfDKi08iDSr8Mwi3A%2BZlOxPHwRu0A4Va4N3jeuKWshHXu7SOeAFzIeDR%2F14ax9CuC2Q5sRYFsX42comY009CSNISqwA%2Bi0j5PPEcT1Zf%2FvOQb8cyrxOiUldbj%2B3b7v%2B3MLhzwt6JavANe%2BvYzRxOcX693N6GzFD4QgH6m0u4CRISFD9GzC6CflDcqxsQJmHH1CCmSejSp0wpcDbuikt5jekDCF%2FdLJBjqkAcP5sNYwhQpBFZ0X4af4RmBIWH9Yw7d2N7LFxRPQ3gdNaw2%2BL4R%2F43Ds73yP8qrBZ6i3V%2BkTrtkvL4w%2FfcQalJkauH2bhsZoxNch8c5C41ULe5C0GpHrX8OLvrKMQeorbndlKik0D3qNO5Z%2FNo66Z0pqhFLAKrFBSd07rxiRYuQMNFygaYCAEoerqYWWdE8IC6djQ4pdwhx0PTGWkgIxVZ%2BceHoh&X-Amz-Signature=3235632fae4c7098fd019276097c776a87c972a752c6129a7d6ead1ceca5f9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
