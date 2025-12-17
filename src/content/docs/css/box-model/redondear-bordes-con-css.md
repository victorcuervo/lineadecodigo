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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDBYH5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWWu4Mo8QZ2jXR6l08PrMW0BLQpwq4ROz7McycaihnWAiEAvHs1rL4Vdw6krrLjLEFoVXTUx7mvAch8qM3Eb3U5600qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1g0jK4zGj7hxNGzCrcA3PJXnX%2FwLHYTKAR0Q5l3aA3cpEIM0MNvKbQEus8%2BPMEjz2yzNJRoYIjkkv6vXoNYskn2sSdg9eyV3X2uqKv1t%2FiDfsTbmDCB5Tm%2B3hcOL1ytHSemb9GCUG2kTol3KXYtdjmTwniCND5%2FEEtIm0IaYHUzHI%2BODh5NldKl6fzwef%2BQFOV%2BzqWsocII08ucfdRH2RnfTVsweG53pZgYo9zL%2FeMOwdp3KYM7AkFTcoVGj%2Ff5xvudhYxfsaSi8c%2Fqu9W6VD6G%2Bw7w4A9H%2BtT5h8DhBEn9xunUO572x4TWkb3QSi1dsDDAcglCfyEeaBF9eCW9ce9BU5%2FUIREqZHYJSjlPhgKEBXlahS%2FhbPwoXJbOdZNXvcViTaldMZrlJVYDSyxHZyNKALPUfjmLPmaBLlQIGwr7Z8x4%2BgIBBYs4CxsYumBtO0Dl6nKf6DS1gNbDseuyrF4bQgRyNnTB1hIN%2FQv3l4u8z%2F6mcF6mxQNOwUaT3hjAhqqA6dbUiV%2FuduK1704T08Hpn%2FczOSU8IwHQ8Z%2Bo%2FtCcvX%2BqGm19PZ4o%2FgKN73lwonDs0i551BkYY5xhnZH%2BKtNYSq1OzD8WE5VJJ%2FwaJSofHiM7sPFTrXTGPva16Xo9YMeXD6hxFWbXJAEMMifi8oGOqUBLVgjmjYqGEzpslxY4Wc5f%2B4p1UPq1KIn95djNqRYgACjgDZHhvDCuiSkpSHKFWc7bjWvOGu8AEdvJmXoJS%2FnR6ZB6wPMzC5SMFIx1EViCfWBSvGnsgKJRPaKWVKxiVmFChp741ZreG7%2F1e8rfiiOWAsgfS%2FrD9fc1bGT0wMQQF%2FUk1s8v%2BkTnceAmhcmcw5VIjPYvkdkF8KtSGZcaD1VBIla0V2C&X-Amz-Signature=7ed8d555969a2d2629189f266e8c440d5890ce6e9664d28a1b3f61063add7915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDBYH5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWWu4Mo8QZ2jXR6l08PrMW0BLQpwq4ROz7McycaihnWAiEAvHs1rL4Vdw6krrLjLEFoVXTUx7mvAch8qM3Eb3U5600qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1g0jK4zGj7hxNGzCrcA3PJXnX%2FwLHYTKAR0Q5l3aA3cpEIM0MNvKbQEus8%2BPMEjz2yzNJRoYIjkkv6vXoNYskn2sSdg9eyV3X2uqKv1t%2FiDfsTbmDCB5Tm%2B3hcOL1ytHSemb9GCUG2kTol3KXYtdjmTwniCND5%2FEEtIm0IaYHUzHI%2BODh5NldKl6fzwef%2BQFOV%2BzqWsocII08ucfdRH2RnfTVsweG53pZgYo9zL%2FeMOwdp3KYM7AkFTcoVGj%2Ff5xvudhYxfsaSi8c%2Fqu9W6VD6G%2Bw7w4A9H%2BtT5h8DhBEn9xunUO572x4TWkb3QSi1dsDDAcglCfyEeaBF9eCW9ce9BU5%2FUIREqZHYJSjlPhgKEBXlahS%2FhbPwoXJbOdZNXvcViTaldMZrlJVYDSyxHZyNKALPUfjmLPmaBLlQIGwr7Z8x4%2BgIBBYs4CxsYumBtO0Dl6nKf6DS1gNbDseuyrF4bQgRyNnTB1hIN%2FQv3l4u8z%2F6mcF6mxQNOwUaT3hjAhqqA6dbUiV%2FuduK1704T08Hpn%2FczOSU8IwHQ8Z%2Bo%2FtCcvX%2BqGm19PZ4o%2FgKN73lwonDs0i551BkYY5xhnZH%2BKtNYSq1OzD8WE5VJJ%2FwaJSofHiM7sPFTrXTGPva16Xo9YMeXD6hxFWbXJAEMMifi8oGOqUBLVgjmjYqGEzpslxY4Wc5f%2B4p1UPq1KIn95djNqRYgACjgDZHhvDCuiSkpSHKFWc7bjWvOGu8AEdvJmXoJS%2FnR6ZB6wPMzC5SMFIx1EViCfWBSvGnsgKJRPaKWVKxiVmFChp741ZreG7%2F1e8rfiiOWAsgfS%2FrD9fc1bGT0wMQQF%2FUk1s8v%2BkTnceAmhcmcw5VIjPYvkdkF8KtSGZcaD1VBIla0V2C&X-Amz-Signature=9412e987093605f095be81a9bd59caa4706bcd061c9c00c65a88086a6e6254c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
