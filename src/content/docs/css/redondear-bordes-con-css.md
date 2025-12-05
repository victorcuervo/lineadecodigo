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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCPLV6Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hFJd7eMa7LFWQEqhoJTpyG8fOh07HojemnjpQgcsGAiEAnAj144MlVjTOgLABxGoUG5WlkiBDl9CA5U5dVDoXGoMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPH9cv6%2FPLNXejZ8wyrcA8Wt8Msp4rbo9%2Bi6zP6bdLllGlSha5eIKcyOzYgb60Ts7KuPZlb%2BKa%2BWH1PXS%2FAeDul%2F5PDZimmdVcojwY3wslfIfs6i1eAS%2B27kkU2VvAFdB%2BdlLIgdEsq%2BeA3yLBXbb0qdqfpezPbFZNAP8FeinfMo1nCrHNRwHaVXBMuSL6nOf0nh9eaGJIYoS0IJKS0p8IGoI5LK6LgNuIrUh0L%2FL4ASGuoEvBSXk4MuqJtHCeORBSfkE65aZzSFTMO6tQtpPIgKgy6ca95mdrZBsfLC0jlofYnEydeaCZYaL4ixOFTxtW6kxrsPDA74VB1dO%2FT%2F8x5ZecQTspWVqewOe8e6n5tJAavodXiOS6%2Bcz%2BdXbv%2BJJNf2CBShUku3x95Kj6c9cjezPTtlOzGXM%2FQaG%2BPW1i3ura37SEkEsi1F5QFrqrRtOs%2B%2Fknyh1L4UzAAFO6jd8ptHEBXnj8c9czcoME%2Fx6830AaNkiw6llW8fk4pg87P%2B3qrGYDTwC8QDwizdDaGwoyQHljTgAZarkQQJoV2uXBt3dBN1sUNZN7zkDo9B0o9exW69Sq2JwXH60x2tXRpF3DdxkSpFs7Z19Fk7RKrbW5YqSTIsIXuOSEC7wRUBdnPi8TztkwRF0b70AfUHMNHry8kGOqUBbfsHYVG%2FDFvsTKN%2FU2b7u0UPFEa521BGCSfDdEAqtKvc5VObuxwUahwonJu3Z7paVML3fgaQkWdS%2FtbZ2W7%2Bs4X%2FDzoOsdT6Ujj0zPNNKylzyhkL%2BjwoE%2F0Due%2B4DjqoqTS81ykJg8TqGaLAvPwgd7nY1g8ysT%2FL3ARhKqcX0xckZjvB3rvWQpQqzMzcYLoSrdD%2FBQ09xMev4oNlraCBEPgNCRfH&X-Amz-Signature=7ef17dc6007ad23889bf45a4ddeb51d9403afc2bf468e908928324b5e644284c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCPLV6Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hFJd7eMa7LFWQEqhoJTpyG8fOh07HojemnjpQgcsGAiEAnAj144MlVjTOgLABxGoUG5WlkiBDl9CA5U5dVDoXGoMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPH9cv6%2FPLNXejZ8wyrcA8Wt8Msp4rbo9%2Bi6zP6bdLllGlSha5eIKcyOzYgb60Ts7KuPZlb%2BKa%2BWH1PXS%2FAeDul%2F5PDZimmdVcojwY3wslfIfs6i1eAS%2B27kkU2VvAFdB%2BdlLIgdEsq%2BeA3yLBXbb0qdqfpezPbFZNAP8FeinfMo1nCrHNRwHaVXBMuSL6nOf0nh9eaGJIYoS0IJKS0p8IGoI5LK6LgNuIrUh0L%2FL4ASGuoEvBSXk4MuqJtHCeORBSfkE65aZzSFTMO6tQtpPIgKgy6ca95mdrZBsfLC0jlofYnEydeaCZYaL4ixOFTxtW6kxrsPDA74VB1dO%2FT%2F8x5ZecQTspWVqewOe8e6n5tJAavodXiOS6%2Bcz%2BdXbv%2BJJNf2CBShUku3x95Kj6c9cjezPTtlOzGXM%2FQaG%2BPW1i3ura37SEkEsi1F5QFrqrRtOs%2B%2Fknyh1L4UzAAFO6jd8ptHEBXnj8c9czcoME%2Fx6830AaNkiw6llW8fk4pg87P%2B3qrGYDTwC8QDwizdDaGwoyQHljTgAZarkQQJoV2uXBt3dBN1sUNZN7zkDo9B0o9exW69Sq2JwXH60x2tXRpF3DdxkSpFs7Z19Fk7RKrbW5YqSTIsIXuOSEC7wRUBdnPi8TztkwRF0b70AfUHMNHry8kGOqUBbfsHYVG%2FDFvsTKN%2FU2b7u0UPFEa521BGCSfDdEAqtKvc5VObuxwUahwonJu3Z7paVML3fgaQkWdS%2FtbZ2W7%2Bs4X%2FDzoOsdT6Ujj0zPNNKylzyhkL%2BjwoE%2F0Due%2B4DjqoqTS81ykJg8TqGaLAvPwgd7nY1g8ysT%2FL3ARhKqcX0xckZjvB3rvWQpQqzMzcYLoSrdD%2FBQ09xMev4oNlraCBEPgNCRfH&X-Amz-Signature=83edf87846e7a6810f085a33c4c27771562d4a0bca0d9843715b791bb19172ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
