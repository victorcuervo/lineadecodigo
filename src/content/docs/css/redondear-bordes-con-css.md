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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BD5O6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEqbteB7qr0tZHAX1pvyDJ7zVpQHkW%2BWRS0n7pctPe%2FAiA6bicfBqqQUAEYeiMtQ56c3ph0SW3zpmgGyWOlD7TDICqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoyIg%2FQZndrrcV8BSKtwDHfpGfWz8hTE7GtcYqdWUZ%2BeCj5ReTcpVghmqdUjhAwSR%2BA8z%2FQ4n%2FJvj%2BrQ4CjM6EFsDbAB9q6vWEaeZHaGPRdQAHoWawzw66wAuro%2FmPQLgcaJopHAgzxTtp6Fo%2FMm63Pqw5FJPymo2vrmkuHCAbIIJR8JJRSl2aBBmwmQcm4zXjHl3PqyjaSx3lP1fTp3G5zEmMW%2B1uh4KbfQL8H2CtuejGcuD2nVgCPz9kyvN7cdlvMn2h%2B90hvGGhJ3jxShkcpPz7XV3TpCF7ZvKPtQE4800uPSOlzBWLaORIoxXpdNk%2Fb0p2rIb8ImxPklvKSI4Lxe4WEXIsfPEZB9%2FRy0UoGLrt76DtDL9Z5%2BOXXA4%2FylzgOC2Vk5%2F6DfXoQu7mHnAlHYNvaoX9eTVSPYwdgC4YOUWR1CeQyyO%2BgO3Ao2UF8Sz7LLnW2aNl9kLGDoc0i8Ke21uaeUFo5J7%2BRkYjWKjggvrRZPXYFM%2F6bIdAtEhpPw3Ur2pZQKq4iC67kK8Y%2F7wc4vlz8K1pL%2BfSeeysKyMYskczUk4KqK9nKLVE0EcRj64I9WXCUPU9rvpqqSsEVFA%2B%2FXWQ3ogIvrxVnhqYHf6xxlB2xEupv%2FM%2FBDlTJwMPrgjuBXMjo7jtuZkX88wxcfXyQY6pgEy72F952lBfeS657OH%2FKeQTdy3wkYYVd1h5ByGxzZ6HPdZKBtE30SnR42SLGFjwzdPnlMI6OOxuHlpcUyBzIzvTRXPXxdHg19tQGjVcNwTbMFzUJiMPS10tGRbh8CRfw0U1zWJNB6cDRX227EAOd3Aa6PwNQ6DMZV6aNOLb0uc%2FALCyIXRJgARNiSLErBSjwrDXsZ3VtkGtvCHmVJWTQXNchRiBM0c&X-Amz-Signature=25dbd68bb1d8caaece5bf053f5ea318514e530ab74574601ea917ef1c0b46a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BD5O6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEqbteB7qr0tZHAX1pvyDJ7zVpQHkW%2BWRS0n7pctPe%2FAiA6bicfBqqQUAEYeiMtQ56c3ph0SW3zpmgGyWOlD7TDICqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoyIg%2FQZndrrcV8BSKtwDHfpGfWz8hTE7GtcYqdWUZ%2BeCj5ReTcpVghmqdUjhAwSR%2BA8z%2FQ4n%2FJvj%2BrQ4CjM6EFsDbAB9q6vWEaeZHaGPRdQAHoWawzw66wAuro%2FmPQLgcaJopHAgzxTtp6Fo%2FMm63Pqw5FJPymo2vrmkuHCAbIIJR8JJRSl2aBBmwmQcm4zXjHl3PqyjaSx3lP1fTp3G5zEmMW%2B1uh4KbfQL8H2CtuejGcuD2nVgCPz9kyvN7cdlvMn2h%2B90hvGGhJ3jxShkcpPz7XV3TpCF7ZvKPtQE4800uPSOlzBWLaORIoxXpdNk%2Fb0p2rIb8ImxPklvKSI4Lxe4WEXIsfPEZB9%2FRy0UoGLrt76DtDL9Z5%2BOXXA4%2FylzgOC2Vk5%2F6DfXoQu7mHnAlHYNvaoX9eTVSPYwdgC4YOUWR1CeQyyO%2BgO3Ao2UF8Sz7LLnW2aNl9kLGDoc0i8Ke21uaeUFo5J7%2BRkYjWKjggvrRZPXYFM%2F6bIdAtEhpPw3Ur2pZQKq4iC67kK8Y%2F7wc4vlz8K1pL%2BfSeeysKyMYskczUk4KqK9nKLVE0EcRj64I9WXCUPU9rvpqqSsEVFA%2B%2FXWQ3ogIvrxVnhqYHf6xxlB2xEupv%2FM%2FBDlTJwMPrgjuBXMjo7jtuZkX88wxcfXyQY6pgEy72F952lBfeS657OH%2FKeQTdy3wkYYVd1h5ByGxzZ6HPdZKBtE30SnR42SLGFjwzdPnlMI6OOxuHlpcUyBzIzvTRXPXxdHg19tQGjVcNwTbMFzUJiMPS10tGRbh8CRfw0U1zWJNB6cDRX227EAOd3Aa6PwNQ6DMZV6aNOLb0uc%2FALCyIXRJgARNiSLErBSjwrDXsZ3VtkGtvCHmVJWTQXNchRiBM0c&X-Amz-Signature=57e72eb32b63d37d60005ebd33ea419f5488b9ab5e6b43dc6f4559e1a19f9b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
