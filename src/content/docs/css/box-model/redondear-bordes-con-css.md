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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRDZUJFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSVtip2Vq6sVyt7e5DOeDlgI4dge5dhTFrWLPJ0SumtgIgWtI9d4VrJi8tXyNcJPNhokyteHChnn4OGs9d6jY7ZQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrK3QPKfoicjiKqUircA5uI%2FjzGNPH7Fsqt0jdhuXeRTOHPSEjFM4jv91tersR41ZlulnD7a3wcQiapB3%2Bu9kmliUdiM7YPXNOe1tfU0SKxNeWjah5OAfX8WIvV3koIXCDyWiKCXFa7s4yqMLJXLDxioknfXz%2BGequz426NhKx1FbVo1h2Fxps3bP27h6YbhbQVszzUhVih329zROoUDIGjebe3OJkuQPk%2FGCA74H14Lj7iTiu%2FUOfmIev0fHNko2rseEgqHY8Z6805iAUIU9R01ZlRZqgr%2FlXIs6XMnQJjQyp29SzQiMxbLVaUFT94P%2BuHAg70QX1zL2m4S6lMCkU6JDcl7IBjX6XpHvQEYXD3qXxaMYM%2BtLSov3D%2Bd0pshrDC4lLEkoi24LBR4mSosSDq4uPQ%2F0NWQ3gySOmHi61HqqEybXquZtC7k%2Bkra2W%2F2t05QccP%2Ff%2FLVToOAFCvwXFBzZ5ct32dVLbLWXbcHPjZC3RGdm0zrMPWt2hlkSrIp7JqI5fAjNqoXzAv3eMnXE%2BCGCxpFk7n0ecCuL0h6URFTpjFMbMr%2B3E%2Fe6nOdgVK%2Fu%2FYpx%2B2hmUB1Ps48PSWuUSUeFhoyRgTdVn4uZJh%2FDSnOg3oPlKSQ9o0QUxYdjaYKCABMHiOJBTaaPg4MOmei8oGOqUBE4CDkXyX0H3LcewEWbyoAHKXZu4qkAhTq82nN1uXukn13g1DSKbI6Y38TkpN1nw8rJA5wTITvd0SVpzHlUWPlMpXt2800dwfVhFMtzJ9BXpMLREAE1B2TTfTr2ZDJUGyeuouFDNYTNxgEbwziBtAENahYf6jNHIVSu5DBZIZraG2ZtpLCuGkO8X26tfFS7Dp%2B%2FWjBtC%2Ba24TxFD%2F0T2ZXSr79N6E&X-Amz-Signature=7039e514f26a451ba2d44d1820141f9c3b6b769b056fd04153914c75145e02f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRDZUJFI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSVtip2Vq6sVyt7e5DOeDlgI4dge5dhTFrWLPJ0SumtgIgWtI9d4VrJi8tXyNcJPNhokyteHChnn4OGs9d6jY7ZQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrK3QPKfoicjiKqUircA5uI%2FjzGNPH7Fsqt0jdhuXeRTOHPSEjFM4jv91tersR41ZlulnD7a3wcQiapB3%2Bu9kmliUdiM7YPXNOe1tfU0SKxNeWjah5OAfX8WIvV3koIXCDyWiKCXFa7s4yqMLJXLDxioknfXz%2BGequz426NhKx1FbVo1h2Fxps3bP27h6YbhbQVszzUhVih329zROoUDIGjebe3OJkuQPk%2FGCA74H14Lj7iTiu%2FUOfmIev0fHNko2rseEgqHY8Z6805iAUIU9R01ZlRZqgr%2FlXIs6XMnQJjQyp29SzQiMxbLVaUFT94P%2BuHAg70QX1zL2m4S6lMCkU6JDcl7IBjX6XpHvQEYXD3qXxaMYM%2BtLSov3D%2Bd0pshrDC4lLEkoi24LBR4mSosSDq4uPQ%2F0NWQ3gySOmHi61HqqEybXquZtC7k%2Bkra2W%2F2t05QccP%2Ff%2FLVToOAFCvwXFBzZ5ct32dVLbLWXbcHPjZC3RGdm0zrMPWt2hlkSrIp7JqI5fAjNqoXzAv3eMnXE%2BCGCxpFk7n0ecCuL0h6URFTpjFMbMr%2B3E%2Fe6nOdgVK%2Fu%2FYpx%2B2hmUB1Ps48PSWuUSUeFhoyRgTdVn4uZJh%2FDSnOg3oPlKSQ9o0QUxYdjaYKCABMHiOJBTaaPg4MOmei8oGOqUBE4CDkXyX0H3LcewEWbyoAHKXZu4qkAhTq82nN1uXukn13g1DSKbI6Y38TkpN1nw8rJA5wTITvd0SVpzHlUWPlMpXt2800dwfVhFMtzJ9BXpMLREAE1B2TTfTr2ZDJUGyeuouFDNYTNxgEbwziBtAENahYf6jNHIVSu5DBZIZraG2ZtpLCuGkO8X26tfFS7Dp%2B%2FWjBtC%2Ba24TxFD%2F0T2ZXSr79N6E&X-Amz-Signature=0f4e2eb0b7bd049e678970092bf221db8b1abd71911764f884fd605cc507afa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
