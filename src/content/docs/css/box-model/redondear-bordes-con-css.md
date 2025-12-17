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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO3SNKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXelWnHijmg9EfVemXg%2FjXz%2FRKD%2BYTJmRzftRErdqNzgIhALdjV%2Fb%2B4Q9DWwp2n4s59rH8WJk2JK2PRPFxRCaMijqaKv8DCHUQABoMNjM3NDIzMTgzODA1IgzwtAC%2Fmf7RgKtPIVEq3APWtlgT%2FIfs8ikcsj030cHWWsM9zOt%2BOeqbrrcSLLxvvs8VVrBIW9MMkX%2B2YFrncQxBDxcL1ZgCmYxcuBoAHVo%2FpR59n0JZySPrmuxMS6rQgjSzJy5vIBapdzgjlXnUWfWq6XbYKFTjX51aoNnu7hbfhnUBE0Q77lyFL2T7mbNywFsxb5qGVX00YW%2BoynB6wsp3ZQvGerWh23k9sEaBlqBeKH%2Fa4BkzLtn%2Bc7vlYe720E5cx9o5DZS7AWGu%2FuSPt%2FDjmuj%2FG6Uiz8Jy2Nnuh%2FJCB4cJAjMzx1UN0ywgMl4EARqfD51y%2F8w2XKyYuIM1WWHUK1HikKaU7Rjd%2BNFn6EO0tQWYLSKBxbGCqqZb8ui8S1E%2FEcDb8kwzDi4l4Ct6cKQ0yh%2Fu7WL6tR5QIrSn9%2F6eunAU413LfnIA9Nho2vWXA6RNGhypkIsOUFnqG%2BfVkYGlzjgSGKx24kzPR%2BmSQ1%2BopE7cowVCHjFQRqMqZuHVljM7jAJpCPde%2FG3rR8khfPuAxigWQiFRQ9prXa2gmgbEkooToDf7wemj11dJT9AGAP9Q8U%2B%2B8rgNcP3p5kFprSe1Ef1Y2sYo9S3IYXvRR7yxm2vqDMLWwFNlEta7H5RYav%2FoSVhw84AuCVwGXTD1zYjKBjqkATkTRUZqtWbs3QVMd2gKj7%2FOEQnmYVNQmDXj%2BueVIT66TopsEGFqadUMiLxEEV4xFOXQWmg47pAGc8uTBo5clH3Zh8s%2Ftly5iy7y5SS2P35srx7WqoDiQnp84dllrShNm7q4AC%2BGz7M80dq3WBd1iAwmm1vT0%2BcxP82FUtyHiOGal3j0BZ243bBfblbAHd8Xkl%2Fnh1D0wjq2K5AW4uqVSBL9%2F1Fu&X-Amz-Signature=f454a4422faf67587d58449bc2fd0c4f8b7a43d380030956bd7db2c3ac6355b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IO3SNKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXelWnHijmg9EfVemXg%2FjXz%2FRKD%2BYTJmRzftRErdqNzgIhALdjV%2Fb%2B4Q9DWwp2n4s59rH8WJk2JK2PRPFxRCaMijqaKv8DCHUQABoMNjM3NDIzMTgzODA1IgzwtAC%2Fmf7RgKtPIVEq3APWtlgT%2FIfs8ikcsj030cHWWsM9zOt%2BOeqbrrcSLLxvvs8VVrBIW9MMkX%2B2YFrncQxBDxcL1ZgCmYxcuBoAHVo%2FpR59n0JZySPrmuxMS6rQgjSzJy5vIBapdzgjlXnUWfWq6XbYKFTjX51aoNnu7hbfhnUBE0Q77lyFL2T7mbNywFsxb5qGVX00YW%2BoynB6wsp3ZQvGerWh23k9sEaBlqBeKH%2Fa4BkzLtn%2Bc7vlYe720E5cx9o5DZS7AWGu%2FuSPt%2FDjmuj%2FG6Uiz8Jy2Nnuh%2FJCB4cJAjMzx1UN0ywgMl4EARqfD51y%2F8w2XKyYuIM1WWHUK1HikKaU7Rjd%2BNFn6EO0tQWYLSKBxbGCqqZb8ui8S1E%2FEcDb8kwzDi4l4Ct6cKQ0yh%2Fu7WL6tR5QIrSn9%2F6eunAU413LfnIA9Nho2vWXA6RNGhypkIsOUFnqG%2BfVkYGlzjgSGKx24kzPR%2BmSQ1%2BopE7cowVCHjFQRqMqZuHVljM7jAJpCPde%2FG3rR8khfPuAxigWQiFRQ9prXa2gmgbEkooToDf7wemj11dJT9AGAP9Q8U%2B%2B8rgNcP3p5kFprSe1Ef1Y2sYo9S3IYXvRR7yxm2vqDMLWwFNlEta7H5RYav%2FoSVhw84AuCVwGXTD1zYjKBjqkATkTRUZqtWbs3QVMd2gKj7%2FOEQnmYVNQmDXj%2BueVIT66TopsEGFqadUMiLxEEV4xFOXQWmg47pAGc8uTBo5clH3Zh8s%2Ftly5iy7y5SS2P35srx7WqoDiQnp84dllrShNm7q4AC%2BGz7M80dq3WBd1iAwmm1vT0%2BcxP82FUtyHiOGal3j0BZ243bBfblbAHd8Xkl%2Fnh1D0wjq2K5AW4uqVSBL9%2F1Fu&X-Amz-Signature=e4e085f49fe621fb22ff95f54c689265f86e75c3f8aec2732a7fe96dac8eaa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
