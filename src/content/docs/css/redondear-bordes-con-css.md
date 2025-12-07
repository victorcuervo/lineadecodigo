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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMXPBY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWdhkZz1u1%2BJC0klvC8TXWe5RiZqwJRH7%2Bid4eTi0eTAIgMna9%2Fl%2FBSg1QLelAaQCdSm98EK6P9ud8%2BDSkklloqXIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIM077GB1N%2Besd%2BxlSrcA1CEZOcGyHh25zKSo1uGmRXgBg6pBJelTLdP371DpoVs20VN2%2BZDcHyga%2FoLBL5MeT5Y69LKgbm6XxWebUU5v%2FLobXdXTcQYGxjVOKtPfSZhE6iWHTTbsfekraqbCLv6EPyEnIDbMLNz%2BKzyiRgYOiKYDlkwP33AaXAENBuR90wRn%2BEj0P0yXaBqFCv1iwCWZl%2FqXfy28uSMQ1fOBa0CeCssXZ58JPwcuTKe5Q08xFApc0Op9nN01RDayOlgywmr6DrgErqqJRlnuXMXBFP4dcr2Q3g9gHgyk1aEu2hwehHOf76cW%2FPMzRuVtEbQsJXu2GUwXwL7SiXDqh2aFjaMrkqV8vVw6cOQYD0mLjaEife2RXiAYhe83vNkbb3umwZpbReZQu12wnEilLgs%2FdnpzsNedltWO3I4g1%2F7eEv%2Bh%2B1E%2BkvLxp6mvI40cj7C9IXSEGptZcw%2FoaLUteITlF0Vo1cDS0GVc2CfTHGnfBKZQACf6mJGUs1a3cj0YBZV%2Bd%2B5GtQ05BeKNOBtrxk0Shbkxo7GmZ7ofRuhag%2B8RSSGhLCO1d8B%2FpqI6ixnx3lUhCADsSm2lZaO%2FOmsXHs6UoAfHX1tSS5%2BQnU4D5qq46mj6pABpZM5k5zOmGLCvvmrMI%2Bp18kGOqUBG58zg9jwJjHH3s1AI1DituMJadnCBJLxcbyl1MW%2FC2FmPPQuLjfaAOjesPkrwQy8xskNMM%2FBQXYwIXqJ%2BXKximPDtP04vBlLts9yC6FgtFkbT3g%2BtDFCA10UUV5MRSWjUmgETb56YT6C2wV3dz6kkj%2FyJZRlqXQTZTQzZJvQic4biYxJIohLDf9tScvE3kjTw7Zwn%2Bzv94QzK8dbg0dYIV4NGbmd&X-Amz-Signature=3e6825219459c20a5f99a33227e9759137d339a817174f9b5f627d1b68a01775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMXPBY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWdhkZz1u1%2BJC0klvC8TXWe5RiZqwJRH7%2Bid4eTi0eTAIgMna9%2Fl%2FBSg1QLelAaQCdSm98EK6P9ud8%2BDSkklloqXIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIM077GB1N%2Besd%2BxlSrcA1CEZOcGyHh25zKSo1uGmRXgBg6pBJelTLdP371DpoVs20VN2%2BZDcHyga%2FoLBL5MeT5Y69LKgbm6XxWebUU5v%2FLobXdXTcQYGxjVOKtPfSZhE6iWHTTbsfekraqbCLv6EPyEnIDbMLNz%2BKzyiRgYOiKYDlkwP33AaXAENBuR90wRn%2BEj0P0yXaBqFCv1iwCWZl%2FqXfy28uSMQ1fOBa0CeCssXZ58JPwcuTKe5Q08xFApc0Op9nN01RDayOlgywmr6DrgErqqJRlnuXMXBFP4dcr2Q3g9gHgyk1aEu2hwehHOf76cW%2FPMzRuVtEbQsJXu2GUwXwL7SiXDqh2aFjaMrkqV8vVw6cOQYD0mLjaEife2RXiAYhe83vNkbb3umwZpbReZQu12wnEilLgs%2FdnpzsNedltWO3I4g1%2F7eEv%2Bh%2B1E%2BkvLxp6mvI40cj7C9IXSEGptZcw%2FoaLUteITlF0Vo1cDS0GVc2CfTHGnfBKZQACf6mJGUs1a3cj0YBZV%2Bd%2B5GtQ05BeKNOBtrxk0Shbkxo7GmZ7ofRuhag%2B8RSSGhLCO1d8B%2FpqI6ixnx3lUhCADsSm2lZaO%2FOmsXHs6UoAfHX1tSS5%2BQnU4D5qq46mj6pABpZM5k5zOmGLCvvmrMI%2Bp18kGOqUBG58zg9jwJjHH3s1AI1DituMJadnCBJLxcbyl1MW%2FC2FmPPQuLjfaAOjesPkrwQy8xskNMM%2FBQXYwIXqJ%2BXKximPDtP04vBlLts9yC6FgtFkbT3g%2BtDFCA10UUV5MRSWjUmgETb56YT6C2wV3dz6kkj%2FyJZRlqXQTZTQzZJvQic4biYxJIohLDf9tScvE3kjTw7Zwn%2Bzv94QzK8dbg0dYIV4NGbmd&X-Amz-Signature=3a71560b62f8ceb820dd0b153c5a2f90b621c070f0ddcd5890f46d68c90fbd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
