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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJTOMDI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvD2W1PkBwnH29hLscVnQYoy5ulUEt50oh6yDTetmEAiEAj2%2Bi1JnnfjnuGIqUXSozlsW%2BGb4UGrEx8nVN8Gn%2FfNAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2DeoOCSDLccAqSCyrcA6RWvaapQYwyBL%2FePhAPHY2np4SOMxOWy5FZFdnlHmOGGcWSltFmtv8kbH6nm27jedhgcH1xLKUCjOZf5XBOxwNn2wSeXcyTuTGQZBDNY1pU88RiV1oZ5d9oe%2B3CPV2wW2ytWhRshjueYMiDX%2FX6%2BTLG7xDvZc2AyW0xeK3RssnwEPZRW9DufSgce51ZHccEK1o0IX6qZYs0ikBpNhohwiK4NJKzHn80SrSeTnWleXoQ5K7y26Lhrtx8JmP0plO3MUjkk0ik%2FCHcijx2XxYDOWRbEJFlifne9fouoA%2F7xXtCsa2gEDPej7z4DAyDMs0fH7zwN1IYQKa%2FMQKL%2BxEMZl8MBf1olvfceGhXurz72vaG2NVe1buTCbSwjHWMIJ4ESX%2FeJuBeZRQbSsDoL5GmHiZqbgaNhnnNsj%2FXFp8DgNwzC7iEX5BDfcmOr%2BCLB4567MpFakR62fVhKh55tPn897ysUmfPAoAIIEMyWycYXBRX4Uf8t5OPeC6JmeK4QOIh1o3BjBQO5eBDT2fkYURpp1frvreduYw9G0iA%2BlYqzMtO03T8Mvx0r%2BXmt%2F37y2qCs08UIuoTs3v9HDKDVUs57zAMBzB1oFzz6PvBdF2SGDPwUqmRj0ZtlqNblcjwMJSujMoGOqUBCVc%2FIV3mss5v5MR1Uz1thweNOphv7Pc2%2FaPgbGBU6bzkl3GFaLe0%2BEL5dT%2FJE2Sws7rlOvqsmxK%2Fe8Z3usEW3d7n%2BwR4JruM7FJuqhA%2FXKhgwMMpFc0vrOIEK4AcsoseSly2tr8mOl0ZgNzgOld%2BxsPRKWVxWy9lPXQD3U4PLhPoNeirU99BXAFiX1aCHEnFfxFeH%2Bc%2B3GLdIB70lPDao%2FXUKXsa&X-Amz-Signature=6a0347ed068574374d614b4202734cb767a0a03d74b6bb65f0dd5531ee9869c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJTOMDI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRvD2W1PkBwnH29hLscVnQYoy5ulUEt50oh6yDTetmEAiEAj2%2Bi1JnnfjnuGIqUXSozlsW%2BGb4UGrEx8nVN8Gn%2FfNAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2DeoOCSDLccAqSCyrcA6RWvaapQYwyBL%2FePhAPHY2np4SOMxOWy5FZFdnlHmOGGcWSltFmtv8kbH6nm27jedhgcH1xLKUCjOZf5XBOxwNn2wSeXcyTuTGQZBDNY1pU88RiV1oZ5d9oe%2B3CPV2wW2ytWhRshjueYMiDX%2FX6%2BTLG7xDvZc2AyW0xeK3RssnwEPZRW9DufSgce51ZHccEK1o0IX6qZYs0ikBpNhohwiK4NJKzHn80SrSeTnWleXoQ5K7y26Lhrtx8JmP0plO3MUjkk0ik%2FCHcijx2XxYDOWRbEJFlifne9fouoA%2F7xXtCsa2gEDPej7z4DAyDMs0fH7zwN1IYQKa%2FMQKL%2BxEMZl8MBf1olvfceGhXurz72vaG2NVe1buTCbSwjHWMIJ4ESX%2FeJuBeZRQbSsDoL5GmHiZqbgaNhnnNsj%2FXFp8DgNwzC7iEX5BDfcmOr%2BCLB4567MpFakR62fVhKh55tPn897ysUmfPAoAIIEMyWycYXBRX4Uf8t5OPeC6JmeK4QOIh1o3BjBQO5eBDT2fkYURpp1frvreduYw9G0iA%2BlYqzMtO03T8Mvx0r%2BXmt%2F37y2qCs08UIuoTs3v9HDKDVUs57zAMBzB1oFzz6PvBdF2SGDPwUqmRj0ZtlqNblcjwMJSujMoGOqUBCVc%2FIV3mss5v5MR1Uz1thweNOphv7Pc2%2FaPgbGBU6bzkl3GFaLe0%2BEL5dT%2FJE2Sws7rlOvqsmxK%2Fe8Z3usEW3d7n%2BwR4JruM7FJuqhA%2FXKhgwMMpFc0vrOIEK4AcsoseSly2tr8mOl0ZgNzgOld%2BxsPRKWVxWy9lPXQD3U4PLhPoNeirU99BXAFiX1aCHEnFfxFeH%2Bc%2B3GLdIB70lPDao%2FXUKXsa&X-Amz-Signature=50c91b09c543c4716bed9b5796f90b0846ca098ef44b58210ac1ea4a708ad749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
