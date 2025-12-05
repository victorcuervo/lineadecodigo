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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNEBXE4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXFPWO0Hh6yfzL%2BCX5qQuDbyRiXOwJwHwJ6CdpPL9oAAiAe0bY1BhwQlMZDKip6QoD94TqhA7Zgm1gF8VhLRAnx2Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzC78Jl0NE16CYUZaKtwDD5Ntytmiq4NVqUISh7EzIYtrarpuQA1PRejxmeVchv4pZtK1P2nmIhDTdRdgIeJ%2BHwK3xXOacz9idYePWPUEp2s66aK70r4xbRsbKpCAmxdLZlnlZr55TFddlN1zfRuuBycUL4Czcu7hBF1rqoUAzpo3l%2FUjuGIxWYymdsKZLiUqPWai6RLTrqnwlWlYXsTeSqSR4u7QgBgpjiPt92Zhx5QMhE2n9MGdgVzw4cl9mdJ73NgMNTzYu3C1O621qweM0PcPNOF9YjeWGSITcDUK3BemWSoU9cs7Pl4ba2yBdp7P7dqT2y5kdZLrcsWIOSIb%2BSx2eqSt5cMmCZvtZdtOM3KM3U%2FmofHw1MhGBFBqPd4%2FzQzZrwijGniaBilp6P%2FV3BRDpZPNnLoPhlp9ETM8mqvZxTP4souROgchY8%2FLRyvvBQ0DaoTNwsKaagHdNYykUQLy9lNbD%2Bk1lyEz3XToMM1F%2BBDcuMGSg9ZseY5TycOvbGBGG14jqkcF1jS8LAbwI%2FLXqndMTh1ku93D3UEFRiSH9mSgcoK4gWeLA9mO4cNgznRQiZFziZmgaZ8Lzp7RaL8eRX4t3lVEInwgGK006s%2FHTPY4M6HcJQLOrzoSlkLtsv6z%2BMw4yduK%2ByowufDLyQY6pgEoh%2B4HSU90JwOFNPSltEc6F2M48dp%2BkpZI%2BGxmoIZSbmi%2BCt4qOGTyxzJHvnAEyy5WMmHlFNsmklbaTbMQiE%2FS1IuX%2BTo04wUSbk%2FjdxjQb6ffBpgOxmlGCUTEP8DXViAJnj3F7oUjVlYBoPFUo6VaIzJuZsPvfWllz%2B6g4%2Bnf%2F0x%2FiYbz%2F8BjYQiikvwu834AoaU2obzq9LRwLfLeDRkTvd7UbgNJ&X-Amz-Signature=5ba212a156b70acb02a980b1efa778106b14fc43c496246e9a9593ba7ce0c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNEBXE4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXFPWO0Hh6yfzL%2BCX5qQuDbyRiXOwJwHwJ6CdpPL9oAAiAe0bY1BhwQlMZDKip6QoD94TqhA7Zgm1gF8VhLRAnx2Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzC78Jl0NE16CYUZaKtwDD5Ntytmiq4NVqUISh7EzIYtrarpuQA1PRejxmeVchv4pZtK1P2nmIhDTdRdgIeJ%2BHwK3xXOacz9idYePWPUEp2s66aK70r4xbRsbKpCAmxdLZlnlZr55TFddlN1zfRuuBycUL4Czcu7hBF1rqoUAzpo3l%2FUjuGIxWYymdsKZLiUqPWai6RLTrqnwlWlYXsTeSqSR4u7QgBgpjiPt92Zhx5QMhE2n9MGdgVzw4cl9mdJ73NgMNTzYu3C1O621qweM0PcPNOF9YjeWGSITcDUK3BemWSoU9cs7Pl4ba2yBdp7P7dqT2y5kdZLrcsWIOSIb%2BSx2eqSt5cMmCZvtZdtOM3KM3U%2FmofHw1MhGBFBqPd4%2FzQzZrwijGniaBilp6P%2FV3BRDpZPNnLoPhlp9ETM8mqvZxTP4souROgchY8%2FLRyvvBQ0DaoTNwsKaagHdNYykUQLy9lNbD%2Bk1lyEz3XToMM1F%2BBDcuMGSg9ZseY5TycOvbGBGG14jqkcF1jS8LAbwI%2FLXqndMTh1ku93D3UEFRiSH9mSgcoK4gWeLA9mO4cNgznRQiZFziZmgaZ8Lzp7RaL8eRX4t3lVEInwgGK006s%2FHTPY4M6HcJQLOrzoSlkLtsv6z%2BMw4yduK%2ByowufDLyQY6pgEoh%2B4HSU90JwOFNPSltEc6F2M48dp%2BkpZI%2BGxmoIZSbmi%2BCt4qOGTyxzJHvnAEyy5WMmHlFNsmklbaTbMQiE%2FS1IuX%2BTo04wUSbk%2FjdxjQb6ffBpgOxmlGCUTEP8DXViAJnj3F7oUjVlYBoPFUo6VaIzJuZsPvfWllz%2B6g4%2Bnf%2F0x%2FiYbz%2F8BjYQiikvwu834AoaU2obzq9LRwLfLeDRkTvd7UbgNJ&X-Amz-Signature=4bacf662edee4f65122c710ead09341cd74bcbdf24e401d9b861c393a9c3021a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
