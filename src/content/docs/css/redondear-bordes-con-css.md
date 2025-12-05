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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLZZWZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwBmYrQ9AVKim6osl5Lbc8SylFhg2d6BfTxqGo03E76wIhAI%2Fj9vNjMuK8z96EH%2BcwTiBhJHsWYDxmddniPQC1f1O5Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwfdM43WK671oBVx%2BYq3ANVCObdwR2XcJqWhv5xgD0ZP4oUY6N0tu0fgnpBoZdFcuNe72QgljinlqzPHAWgEU6S%2FfIeHZ0yCNodvxQp3wSfuW%2FrMvFKYHC%2F9rU2pOxQ8qZwotfJidWz2UDzNH3exuo9TE6hPDCG5WUzLX2bEvFPYfsDh%2BZajglTL39SHsSO376flm4TdnDKx%2BRf%2FiwQWgD%2BKmbz%2BAnJBEjDlLk5llKySfKkrQYb3iYvzgGQQqz3X1WQhHoTdf6lyT7PGkFdBxPJarTC7eVqbl%2FJ9mhyf5QRoLGmYERfnSuUQLZ%2BZDVcPa37lEQ5DsftH9dcZBBwo%2BBoUcxOOwOi%2FU31UQxchjFCYHOKmCKa5N3%2BMhqtz%2FCENk7pQwfaFDRhIS%2FR%2FAH0LJCSNsx%2B321CXN4pprVVfw976nJ1uQCpu9T4xQeuuPDi5%2BKYICeEn7%2BLa4Urgkc0gBftfktSdmIfehM32dyAeNFUKR2NrzrDujbmYYYb%2F%2BzYHBDv7W5aj3RTsNtv5LvWG82zXdr8JU7YQiE147hJdt%2F0r5qq8vHh9xMvUSqEK6ND4RdgUaX9XFg29aVKdBoe8WrTaVZZIvCBVbGxQZzll4Ln%2BV0XgEE4LXGVmMQ6ONtD33PnD%2Fkgo8jlRMu06DCescnJBjqkAQ0KpDaXMCvdHIJiextvVCQGpU1CqB7dlncFj5XIqQywAjQLXdfCxROEx2JMg4HDsdzbrbVGuwOafpn%2Fhf0fmGPwTuuh%2B6a9S7Wcv%2F8XdOCDoYbpj1sHTnnHeUHRqeoDLQpVJTSrj%2Bcs37g3VCEigjsb6SZDNPNZyuNUd2PeMSnaEqlyPob5xIBvXTeXQvIK23t9OnWIpLautMNFxrdbAyCE0gD9&X-Amz-Signature=1a9eea71aead26c8c017cdea7919c722472907c526dbb2a4dd2c38b3ea9746fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLZZWZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwBmYrQ9AVKim6osl5Lbc8SylFhg2d6BfTxqGo03E76wIhAI%2Fj9vNjMuK8z96EH%2BcwTiBhJHsWYDxmddniPQC1f1O5Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwfdM43WK671oBVx%2BYq3ANVCObdwR2XcJqWhv5xgD0ZP4oUY6N0tu0fgnpBoZdFcuNe72QgljinlqzPHAWgEU6S%2FfIeHZ0yCNodvxQp3wSfuW%2FrMvFKYHC%2F9rU2pOxQ8qZwotfJidWz2UDzNH3exuo9TE6hPDCG5WUzLX2bEvFPYfsDh%2BZajglTL39SHsSO376flm4TdnDKx%2BRf%2FiwQWgD%2BKmbz%2BAnJBEjDlLk5llKySfKkrQYb3iYvzgGQQqz3X1WQhHoTdf6lyT7PGkFdBxPJarTC7eVqbl%2FJ9mhyf5QRoLGmYERfnSuUQLZ%2BZDVcPa37lEQ5DsftH9dcZBBwo%2BBoUcxOOwOi%2FU31UQxchjFCYHOKmCKa5N3%2BMhqtz%2FCENk7pQwfaFDRhIS%2FR%2FAH0LJCSNsx%2B321CXN4pprVVfw976nJ1uQCpu9T4xQeuuPDi5%2BKYICeEn7%2BLa4Urgkc0gBftfktSdmIfehM32dyAeNFUKR2NrzrDujbmYYYb%2F%2BzYHBDv7W5aj3RTsNtv5LvWG82zXdr8JU7YQiE147hJdt%2F0r5qq8vHh9xMvUSqEK6ND4RdgUaX9XFg29aVKdBoe8WrTaVZZIvCBVbGxQZzll4Ln%2BV0XgEE4LXGVmMQ6ONtD33PnD%2Fkgo8jlRMu06DCescnJBjqkAQ0KpDaXMCvdHIJiextvVCQGpU1CqB7dlncFj5XIqQywAjQLXdfCxROEx2JMg4HDsdzbrbVGuwOafpn%2Fhf0fmGPwTuuh%2B6a9S7Wcv%2F8XdOCDoYbpj1sHTnnHeUHRqeoDLQpVJTSrj%2Bcs37g3VCEigjsb6SZDNPNZyuNUd2PeMSnaEqlyPob5xIBvXTeXQvIK23t9OnWIpLautMNFxrdbAyCE0gD9&X-Amz-Signature=fab3bd05142b6ea5615b807551f461b7ea89f8c0265075f3ceff5da16ba09d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
