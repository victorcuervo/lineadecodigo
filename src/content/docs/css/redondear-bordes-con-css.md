---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376IZUE5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGjSPPA38zGDEReWDaoVWeenld5SA16WKklgR455t2FjAiAp9y74EoonD05NuvYCE08V9LVBkSTddyozwv2PX0asByr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPszNtiARoipf0ONcKtwD%2BbbwR9kmBFn0u9uC6jYeZxrK064gurZFGGQ1GtZ1dL96W3H%2BeLXO6imDSx9%2BQuXvtkdUkQXuQHUvS0S7TlfQp9J%2BkBU325zj1Drbdv9oLTvzXL9pcIFy7z3G4o0GRVKkGJTkb46RQoO1yIA6AktjHxI%2B8j7MgugZ1KlIkr69aSrC%2FPTM3ERhqruJPa5Km4t9DB4Z%2FSxUwQVefrwV6oduwgm0RD3hq0%2Bk%2BZIUdsFEWvbaeNBLLZdoktWBJ5bmHmtZftopXXtg7yhDX043FQ8HSAk63qEGR3n%2BFRVwWNYUmM7R5oumQeK2pf%2FgNCHakNTc3JunBWum7MFGyySSNtCEIoDTeggkVWYuCgUeqELutpgNrRMRK1JuXKcsaSJh7GwTAoZzcqZcR5IDNQfWz1lTB6xmRST0tPu3ZuWp3YV59RKcW%2FVk%2FI5rFTX4Jg87aVsrk6AnOeiJuzGo3m5jhNfL8Hu1ElnYN%2Bf0wDvs1aeo8paoONQpLV7RnMSFNn4znV0cUtumxHekS8Z%2F25lVJyyg1duMYZiDnCXrqBJXbvM5s%2BtNyQM6wD%2B%2FYF4Nk61c1smz4UTEdbcQdBv9n9rTbTZ0h7spfKzHFntRzuaF5fQ7Z%2BsD0mDeBJe4%2BtXqt%2BAw4dTDyQY6pgFjvdm2kVMfu5%2F8SScFwRNriJGnuuhyhAesw0isf03aY9nC9REz%2BRNaYjSYE3z9%2FLdXH946Cgpxk20hxBpxl1s6QjReYRCrbpnzXJXiNTZQZ3ox076hIjsymIM2kbHXcz%2FzqE9jaXlkz3D5mwtnvRU7Kr0XdhXMLMnlscoMiyDCvNS9hTQ77S%2F39XMPyJ%2B6yCUIZLYNM64caWcrBbBDJVVQjRjylAaf&X-Amz-Signature=cd14b0fcc9d9f60c8d37cb00aad16a6de35864dba8daf69e5bdfd62d221e84a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376IZUE5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGjSPPA38zGDEReWDaoVWeenld5SA16WKklgR455t2FjAiAp9y74EoonD05NuvYCE08V9LVBkSTddyozwv2PX0asByr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPszNtiARoipf0ONcKtwD%2BbbwR9kmBFn0u9uC6jYeZxrK064gurZFGGQ1GtZ1dL96W3H%2BeLXO6imDSx9%2BQuXvtkdUkQXuQHUvS0S7TlfQp9J%2BkBU325zj1Drbdv9oLTvzXL9pcIFy7z3G4o0GRVKkGJTkb46RQoO1yIA6AktjHxI%2B8j7MgugZ1KlIkr69aSrC%2FPTM3ERhqruJPa5Km4t9DB4Z%2FSxUwQVefrwV6oduwgm0RD3hq0%2Bk%2BZIUdsFEWvbaeNBLLZdoktWBJ5bmHmtZftopXXtg7yhDX043FQ8HSAk63qEGR3n%2BFRVwWNYUmM7R5oumQeK2pf%2FgNCHakNTc3JunBWum7MFGyySSNtCEIoDTeggkVWYuCgUeqELutpgNrRMRK1JuXKcsaSJh7GwTAoZzcqZcR5IDNQfWz1lTB6xmRST0tPu3ZuWp3YV59RKcW%2FVk%2FI5rFTX4Jg87aVsrk6AnOeiJuzGo3m5jhNfL8Hu1ElnYN%2Bf0wDvs1aeo8paoONQpLV7RnMSFNn4znV0cUtumxHekS8Z%2F25lVJyyg1duMYZiDnCXrqBJXbvM5s%2BtNyQM6wD%2B%2FYF4Nk61c1smz4UTEdbcQdBv9n9rTbTZ0h7spfKzHFntRzuaF5fQ7Z%2BsD0mDeBJe4%2BtXqt%2BAw4dTDyQY6pgFjvdm2kVMfu5%2F8SScFwRNriJGnuuhyhAesw0isf03aY9nC9REz%2BRNaYjSYE3z9%2FLdXH946Cgpxk20hxBpxl1s6QjReYRCrbpnzXJXiNTZQZ3ox076hIjsymIM2kbHXcz%2FzqE9jaXlkz3D5mwtnvRU7Kr0XdhXMLMnlscoMiyDCvNS9hTQ77S%2F39XMPyJ%2B6yCUIZLYNM64caWcrBbBDJVVQjRjylAaf&X-Amz-Signature=787c6f6b1382df92d8abfd46f6df630d7ce95f2a5ef0153a5cb3dcd48c3c7d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
