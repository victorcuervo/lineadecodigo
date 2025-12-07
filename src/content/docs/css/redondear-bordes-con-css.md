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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNB3LNW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdvSgOFVjZwKCUkRnOtxTT8%2FtGTdOASz24NweVBKMywIhAKDS%2F0uP8Cq6SJOendTl80e4PU1LV8FkR05K7KNQClHiKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvoVOA8Hrllti4%2BZgq3AOrcAM35P4CJWPHVoVe4n%2FQ7CMumdRzXFRylHszbeUBnfLGNrrrPVejtISeAAeQUPBc8MlMqqsd%2Fuv7NnN%2FZcRzkz6HcLxMZtNZQYTOYD1%2FP5pRwk8wcr8TdGTKr2ICcr5umyPSNYpRIY8JeFmga83ju%2FD9V7t5%2BPevh7mmQaZyRl3Q6c1f8Ccd%2FPPAf4dhnui8mLN2MIUrj75rdfDlnYXX7A2U326ruOzqjxKJ0To0dOySicuTvsVnDccwS%2BEuZMF58qsbtQo%2F%2FdGDXSsNnr9Hpa9kE3HUrf3teYk%2F1k5xhu0pkzbL1rF7QnZlNsqEtsA1RpBIh%2BqlhxUhO1d7Xcny6KVty0m0yqaZWN3HBK36pA91Hej61lwhZm%2BiDbcOBI8ELNSFUCuR2MuKa0%2F3tz55t%2BhR%2B4mmlS3V9iEO4dMsqjYdBkyNVYDBlpUpXaZ07CgCJtd5v2wAq%2F778utVQVTC66BUD89R54TCI5AuBLzOSHzICMsIDxL0SoeR1i8ezrdI1tKbs%2FW3gCZRRCsU7b0Hv8K6OmEjTZ545ENS2KXTlNERgVTOcUpvFXtG21xXH8dl6RkNbx%2FgSi5PhtEkPqtO8hhKRYcCou2oI3giMqk5RwCx8ERdc12jFDTCoDDWtdbJBjqkAblV7wSezTvFj2%2Fmrlya8PFid0zjnc%2B%2FZdEMv1s37AcEwrLF7%2BLLBX2rFrEW8rO%2FYTlFUTeV6q4M6R7IdXST1PLSerLp7zR7CZF%2Bax8FlA7Z%2BdgTWCQ%2FYlYaOzhGgjJiQ8C0I69hgcVQ5jQiZU6ZWejgNIO4gdph78yQtN%2F8gQ4vsoJWWPdqNkv14S47lTiTSHF%2FGvCBs%2BRG9ORphyFINErfulBQ&X-Amz-Signature=7d727163317b6540d6678927bdd7497895c8e1ca83d4637c79fd1e6f151fffcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNB3LNW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdvSgOFVjZwKCUkRnOtxTT8%2FtGTdOASz24NweVBKMywIhAKDS%2F0uP8Cq6SJOendTl80e4PU1LV8FkR05K7KNQClHiKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvoVOA8Hrllti4%2BZgq3AOrcAM35P4CJWPHVoVe4n%2FQ7CMumdRzXFRylHszbeUBnfLGNrrrPVejtISeAAeQUPBc8MlMqqsd%2Fuv7NnN%2FZcRzkz6HcLxMZtNZQYTOYD1%2FP5pRwk8wcr8TdGTKr2ICcr5umyPSNYpRIY8JeFmga83ju%2FD9V7t5%2BPevh7mmQaZyRl3Q6c1f8Ccd%2FPPAf4dhnui8mLN2MIUrj75rdfDlnYXX7A2U326ruOzqjxKJ0To0dOySicuTvsVnDccwS%2BEuZMF58qsbtQo%2F%2FdGDXSsNnr9Hpa9kE3HUrf3teYk%2F1k5xhu0pkzbL1rF7QnZlNsqEtsA1RpBIh%2BqlhxUhO1d7Xcny6KVty0m0yqaZWN3HBK36pA91Hej61lwhZm%2BiDbcOBI8ELNSFUCuR2MuKa0%2F3tz55t%2BhR%2B4mmlS3V9iEO4dMsqjYdBkyNVYDBlpUpXaZ07CgCJtd5v2wAq%2F778utVQVTC66BUD89R54TCI5AuBLzOSHzICMsIDxL0SoeR1i8ezrdI1tKbs%2FW3gCZRRCsU7b0Hv8K6OmEjTZ545ENS2KXTlNERgVTOcUpvFXtG21xXH8dl6RkNbx%2FgSi5PhtEkPqtO8hhKRYcCou2oI3giMqk5RwCx8ERdc12jFDTCoDDWtdbJBjqkAblV7wSezTvFj2%2Fmrlya8PFid0zjnc%2B%2FZdEMv1s37AcEwrLF7%2BLLBX2rFrEW8rO%2FYTlFUTeV6q4M6R7IdXST1PLSerLp7zR7CZF%2Bax8FlA7Z%2BdgTWCQ%2FYlYaOzhGgjJiQ8C0I69hgcVQ5jQiZU6ZWejgNIO4gdph78yQtN%2F8gQ4vsoJWWPdqNkv14S47lTiTSHF%2FGvCBs%2BRG9ORphyFINErfulBQ&X-Amz-Signature=9d7b6cab41e9829c790bfa2bedbcb2998cb59e5f360f863426e7f4ccb6ede9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
