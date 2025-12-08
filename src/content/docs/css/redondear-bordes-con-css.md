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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SD2YJZB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2oF3z58GtMahV3cgwltaV0EhIeZ22aTAOZ2Sxo6CdaAiEAueBleVjb34AzZIlDcDwoaXXQ0nzqRtmroy%2FiFQ2OEbwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi18gCTF3aWGzuABircAzPCThpNGctDftBE4fqPLb%2FxK4BWrdJR99p0bv56TC3ZrNg%2FCnvdp7t4ckmeQD919C8bOsBHBbOuvwnyDeDyXtnIRSPPRe48zGErIkhZWUhakXwzP%2Bpx2WhYHg8K7RS1B%2B2EypzjN9Xbf3BFEIsCMBUIhyIlmDX9Q3yKtelrCNQKwiCo%2BfHHFHoytLCMgpOs4t1d7yw25pD%2FnqL3l%2Fyu8b12fvGcZvXA4siRxQbPfWSRX9uW0Ll73db1qVni6MC7sNVqGagFpq6JI%2BDQnKFgd3zOlUBDUY2VebG%2BSepIPJyzMGRABoNjXUOt4BXbQgNapQsmQzccQz0pha7RsARcv6fUUd5GRXfTSH03%2F1C7Ui8vMe7ILEzsm9%2B5Y1VCAFhIpRPJ9RGx%2BiYt3V995VvyyJSyNvwnT3l%2B00OCElnbHvX7ZnkJDDFYf03oFhWtBFHwtjA47ECnmsatqvx8Ae3e8ohEzOP4XhV2DJQYTXu1mYmr4oPtiiwGU8UFu71D7133ocOr%2FzXaeJDBkuJk8bfAmkcQll0jb%2FzgCB8qLHFuWI0OfQyz76DxOktOLrBONJG1H3a9DNbMLuuFNPsQg%2BWWPac0SbLJSmYu25H9FtbajtBAGVj29cqbA7c7wbIlMKCh2MkGOqUBy1EWF3YaeErF1B%2FCf8oFa7FVyqp%2Bkr0veHWvzsR%2BcuSFHQEWo2vH8YhaGsy%2FAU4%2B5E5UQ%2B6aEqtQnW6H2hUgn0r8fQ4my6zQguC229JeWBTRRSyy9VmO55GN3cyOnvGOlNvbZcuxCl0RNV%2Fu0FW7XWluIHlyjnUrmvN%2BzuuBiXF%2FG7NspaGEFvzBAWyVAJ6xssYrO90vYRdDS66WZZLfXVhkJenr&X-Amz-Signature=e5189ccc4f8a2f036c5ddf24564a03ffb29e6dcfbc0ceb87431c9c67fd0ad897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SD2YJZB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2oF3z58GtMahV3cgwltaV0EhIeZ22aTAOZ2Sxo6CdaAiEAueBleVjb34AzZIlDcDwoaXXQ0nzqRtmroy%2FiFQ2OEbwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi18gCTF3aWGzuABircAzPCThpNGctDftBE4fqPLb%2FxK4BWrdJR99p0bv56TC3ZrNg%2FCnvdp7t4ckmeQD919C8bOsBHBbOuvwnyDeDyXtnIRSPPRe48zGErIkhZWUhakXwzP%2Bpx2WhYHg8K7RS1B%2B2EypzjN9Xbf3BFEIsCMBUIhyIlmDX9Q3yKtelrCNQKwiCo%2BfHHFHoytLCMgpOs4t1d7yw25pD%2FnqL3l%2Fyu8b12fvGcZvXA4siRxQbPfWSRX9uW0Ll73db1qVni6MC7sNVqGagFpq6JI%2BDQnKFgd3zOlUBDUY2VebG%2BSepIPJyzMGRABoNjXUOt4BXbQgNapQsmQzccQz0pha7RsARcv6fUUd5GRXfTSH03%2F1C7Ui8vMe7ILEzsm9%2B5Y1VCAFhIpRPJ9RGx%2BiYt3V995VvyyJSyNvwnT3l%2B00OCElnbHvX7ZnkJDDFYf03oFhWtBFHwtjA47ECnmsatqvx8Ae3e8ohEzOP4XhV2DJQYTXu1mYmr4oPtiiwGU8UFu71D7133ocOr%2FzXaeJDBkuJk8bfAmkcQll0jb%2FzgCB8qLHFuWI0OfQyz76DxOktOLrBONJG1H3a9DNbMLuuFNPsQg%2BWWPac0SbLJSmYu25H9FtbajtBAGVj29cqbA7c7wbIlMKCh2MkGOqUBy1EWF3YaeErF1B%2FCf8oFa7FVyqp%2Bkr0veHWvzsR%2BcuSFHQEWo2vH8YhaGsy%2FAU4%2B5E5UQ%2B6aEqtQnW6H2hUgn0r8fQ4my6zQguC229JeWBTRRSyy9VmO55GN3cyOnvGOlNvbZcuxCl0RNV%2Fu0FW7XWluIHlyjnUrmvN%2BzuuBiXF%2FG7NspaGEFvzBAWyVAJ6xssYrO90vYRdDS66WZZLfXVhkJenr&X-Amz-Signature=c9292c9119a3f27b4615551b85048cdafe0d2ae4e47a9872d7af1c9495a4025b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
