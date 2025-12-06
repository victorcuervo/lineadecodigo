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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXWE5HU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeUb2j0j0IctJqaqcjjWCBTlL5sPeUANGOYN74%2BJ6d%2BAiEAgBo85OBOgDUkVtRq1Jds7C68MJ2xARu3VEK2n4NGOpoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGyQb2grWHBZ%2FyTFrircAz4%2BhBMp%2Bre9NT2S35rztDfI6mWZzESQpEIcMd5gUKz%2BykJNLSOyTKRrffF%2F33%2FZQo29Jbu%2FAo3kt4LnZTRTQzTdMnaiTamXBVEjplSqh10HGdbSIpo2uYCkBSW7UljB01d40YshMMlGJTI00NCGaaTwmOKwWVWhsiEz%2FTE%2BNUFxcXTULGGdQrKReoXD7h1SLvNea6gzqKuwNWHoeLzqZxdftI8cFV7qJcJFL1djA%2F433dAqeq7AdLWw%2BarvLzwdHnwGiYBmwbydwPL6Htk31KG7%2ByleuJawTq8ByOBT89VuZrQcH6EPr7SDKNRebA4yGCtC%2FMGM5a0v7Dj81UKWOrcWeJkH5ig5aAB6wSDW6ypueFCnxVG1wRjHwGmBTUehmTmw3%2BdbvIUr5HUwKsZ7tz7HHL%2BRWcQ560iUHyjjB04f2qBw6%2BNEj6DbuNld7XFRr%2FDkG1v2Ar7RWNOzAGlO7aOYUkxzfz6cTLGWKbZPJIDT5g%2Bv%2BA8NYO6PjStNxMg93L4Ry3fSTojhfETg17jv1mGloZbnmODQ2bjOSlmzLGJXybSTC5RS1GKQ7BRMAf9TXrsfLx7S6PztMdbkKMxLGFNoav4vw4%2BpsXbplLT%2B%2B2ux4qV1%2B%2BFG62BUtJLzMLTT0skGOqUBILcXou2UT3rohTVejaKAbiM%2F8nHBqcL5xWR080FRIqhXpibK%2FIrY3%2FvQ7rNRoarzhkOZ902SEWAXCZos%2FEdc0PGrbP1ZZ9ts1O4ii2M4NpRF7sfrtuDbCPNqPwoAjZAUKw4YzYaq1tgfdAtm2xUKmDccWtM8YR2qRO9EsiYp3X98ahfKhMegvWCuscr2Fj5CmvmvJO7U%2BaCO4D%2B1r87OmRMQHMgV&X-Amz-Signature=7a6905d78b09e08f44e50acd3d83544d8b916c770ed5edb369491ebd10986c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXWE5HU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeUb2j0j0IctJqaqcjjWCBTlL5sPeUANGOYN74%2BJ6d%2BAiEAgBo85OBOgDUkVtRq1Jds7C68MJ2xARu3VEK2n4NGOpoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGyQb2grWHBZ%2FyTFrircAz4%2BhBMp%2Bre9NT2S35rztDfI6mWZzESQpEIcMd5gUKz%2BykJNLSOyTKRrffF%2F33%2FZQo29Jbu%2FAo3kt4LnZTRTQzTdMnaiTamXBVEjplSqh10HGdbSIpo2uYCkBSW7UljB01d40YshMMlGJTI00NCGaaTwmOKwWVWhsiEz%2FTE%2BNUFxcXTULGGdQrKReoXD7h1SLvNea6gzqKuwNWHoeLzqZxdftI8cFV7qJcJFL1djA%2F433dAqeq7AdLWw%2BarvLzwdHnwGiYBmwbydwPL6Htk31KG7%2ByleuJawTq8ByOBT89VuZrQcH6EPr7SDKNRebA4yGCtC%2FMGM5a0v7Dj81UKWOrcWeJkH5ig5aAB6wSDW6ypueFCnxVG1wRjHwGmBTUehmTmw3%2BdbvIUr5HUwKsZ7tz7HHL%2BRWcQ560iUHyjjB04f2qBw6%2BNEj6DbuNld7XFRr%2FDkG1v2Ar7RWNOzAGlO7aOYUkxzfz6cTLGWKbZPJIDT5g%2Bv%2BA8NYO6PjStNxMg93L4Ry3fSTojhfETg17jv1mGloZbnmODQ2bjOSlmzLGJXybSTC5RS1GKQ7BRMAf9TXrsfLx7S6PztMdbkKMxLGFNoav4vw4%2BpsXbplLT%2B%2B2ux4qV1%2B%2BFG62BUtJLzMLTT0skGOqUBILcXou2UT3rohTVejaKAbiM%2F8nHBqcL5xWR080FRIqhXpibK%2FIrY3%2FvQ7rNRoarzhkOZ902SEWAXCZos%2FEdc0PGrbP1ZZ9ts1O4ii2M4NpRF7sfrtuDbCPNqPwoAjZAUKw4YzYaq1tgfdAtm2xUKmDccWtM8YR2qRO9EsiYp3X98ahfKhMegvWCuscr2Fj5CmvmvJO7U%2BaCO4D%2B1r87OmRMQHMgV&X-Amz-Signature=cb8f8967d935016dc781a0a8a83779557788be0dbe403dcc34d84ce2b4978735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
