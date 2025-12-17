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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI6PSC2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTg8OcAe%2BrjhRxhUoTGjHZ2ClsYQy1g4pY6JRAMEWMCgIgGjyLjgJ%2Bbyc4s7NQyJYWOmt%2FfrXP5yeS9lDLhszADR8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNA88jXbxacYcZ2s2SrcA%2BbJquWuRRT0UCFIix4YOcgaNOAp6xlEU%2FA7ji%2FMx%2BRvL4OCE4bow2zqxM2aPBf8AnZ5gNmlqWm%2Bj4vF2KiG3LyrKX%2FX%2Bz2rx4GuXyl6MtRvb39g%2BIDl5K%2Bh%2FWFGsKGzfQmrd%2B83Y3HsH8bVrSLmk7XoIiUA9f3Z9V%2BG%2F4vHsN%2FMFQjJyPvkjZfFqTOXs4BqbONEWdfId4MJN8rcxdtdbU24vEEDI3LF%2FjbeweFNihxP2DlHC7Zc%2BCcRfH%2BS9OCDhRhgB9%2F2fM0JYXTjgXf%2BJ5GyUyT%2Bb7PuUW5OF%2FtYTmZobkz6%2BNp1HAOoMsp3obXP4K5Y5vehV0hotRs%2FOJ3ILLWenO%2BLrrPNU1qYfy%2FXxzF7QG6eP3czF8xOoSY8qNs87qhFXCpSgZE7t6JqgCNMZVTxx%2FyTDQyj%2Fgnk%2B%2BGt9PzNSZUm4z5ZJec%2FzKn90ms2cfRvyxNQKN4pGz%2B1BTpFFZ8gWc6l7ugyJsKhxBWqySFD2hYQONgpf0mSr8tB1eyzy4%2FfzgpPb9imyeCin6r99zTFtvYnhN3YU7rvCoKXaBRnjKOWBA6x3%2FE4ejgAcMICEseU2nuR6Xu73QO1V%2F6515LOYPrcmUW2Hg2pi1wtcfTcLgjsxWexV64ilCD8MIrwicoGOqUBHhcL%2FlVfsL1FI4xQTRcDh5OEKRLM1KYyc8%2BeiYqLXxj1xYCi1WB96JIVi9quS6my9SrHC6DpreVw4%2BdD%2BfQ2OQHjZ6PFPok9xvApHUyZZQnEK2Xv2QrNx2izLTYhgQ24XvWtvMigOsWrBxCdMoxFEfouceVJbak7MhcMZjdJfoHh8gr711D3dwNtMqd5mF9sFUWqKpEkMWqxaENbN%2Fr%2FwRTGkOAA&X-Amz-Signature=ae2d536b10de9e21ea9cb9e2b0b3ae8a6a47dafcdc8e7495dfcd3d3976ffbb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI6PSC2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTg8OcAe%2BrjhRxhUoTGjHZ2ClsYQy1g4pY6JRAMEWMCgIgGjyLjgJ%2Bbyc4s7NQyJYWOmt%2FfrXP5yeS9lDLhszADR8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNA88jXbxacYcZ2s2SrcA%2BbJquWuRRT0UCFIix4YOcgaNOAp6xlEU%2FA7ji%2FMx%2BRvL4OCE4bow2zqxM2aPBf8AnZ5gNmlqWm%2Bj4vF2KiG3LyrKX%2FX%2Bz2rx4GuXyl6MtRvb39g%2BIDl5K%2Bh%2FWFGsKGzfQmrd%2B83Y3HsH8bVrSLmk7XoIiUA9f3Z9V%2BG%2F4vHsN%2FMFQjJyPvkjZfFqTOXs4BqbONEWdfId4MJN8rcxdtdbU24vEEDI3LF%2FjbeweFNihxP2DlHC7Zc%2BCcRfH%2BS9OCDhRhgB9%2F2fM0JYXTjgXf%2BJ5GyUyT%2Bb7PuUW5OF%2FtYTmZobkz6%2BNp1HAOoMsp3obXP4K5Y5vehV0hotRs%2FOJ3ILLWenO%2BLrrPNU1qYfy%2FXxzF7QG6eP3czF8xOoSY8qNs87qhFXCpSgZE7t6JqgCNMZVTxx%2FyTDQyj%2Fgnk%2B%2BGt9PzNSZUm4z5ZJec%2FzKn90ms2cfRvyxNQKN4pGz%2B1BTpFFZ8gWc6l7ugyJsKhxBWqySFD2hYQONgpf0mSr8tB1eyzy4%2FfzgpPb9imyeCin6r99zTFtvYnhN3YU7rvCoKXaBRnjKOWBA6x3%2FE4ejgAcMICEseU2nuR6Xu73QO1V%2F6515LOYPrcmUW2Hg2pi1wtcfTcLgjsxWexV64ilCD8MIrwicoGOqUBHhcL%2FlVfsL1FI4xQTRcDh5OEKRLM1KYyc8%2BeiYqLXxj1xYCi1WB96JIVi9quS6my9SrHC6DpreVw4%2BdD%2BfQ2OQHjZ6PFPok9xvApHUyZZQnEK2Xv2QrNx2izLTYhgQ24XvWtvMigOsWrBxCdMoxFEfouceVJbak7MhcMZjdJfoHh8gr711D3dwNtMqd5mF9sFUWqKpEkMWqxaENbN%2Fr%2FwRTGkOAA&X-Amz-Signature=b2ae2fc43145f10c2bec1ea976213541ed445c1b2fc4f3d8f3be5b038ed81544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
