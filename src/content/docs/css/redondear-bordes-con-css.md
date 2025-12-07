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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LPAKMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctl2O4NyKWEhsGhO2zd6w8TuthU7%2BV%2F0N8V3Gkb6QbAIgPnUPQRC62fEsAD7LJRefG4KJ1JLYGzSnWDFT1POey%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfcNdb6fJeR%2B%2F1zFCrcA5mQnuUV5AgQL7PvgCJ0UJDfxZj782IDBuozqEfkmv3A5QRsTffjLaWbDSN%2BGrHOfu2In2XHVj1ygLYJz0UhoiMZFE%2FOhBsHST2D%2Bg2gasAI68LrMMaQEAenIfEw5Jwv2qrs8sEB6sER3IpVb8jSLOYlAEIxmC%2BY3v5NXc%2Bd%2Fv83uocAF2sVdJEmRX%2BMy8xCFESHHZQN1Oy72r7TuyCjS%2BDxMGuxnb1MWUuQk%2Fk%2B6JpRp4xSlVePHa76PFofgdppQVjb65qM7PP0emei58YAImsxbUGcZGbRCEw3EcMfb1eeBmglID79GciuqvL13rk3sj8xZFV6kXAvDyNy4RokIRc6Wim3KNh2VJW%2BEvcrhpaZqFPv%2B%2F5TlVr4kZ8oo%2FbPZ7c0ZbmzWDG5LNPpXwbrVhZ1kYJFqGwQTIpAgOIHS1xloP7KDkNLoObj0loaGzKSv3aHg4Co65J1gZPRg%2BVysHZKG%2BFXm3UQaImIr%2F6sOdHQnmhWPQ6LU6ErKgsfXBuS1ETObq02LSOkPomwDk4XbO%2FmL9t%2FZfbN40ibyQJyG%2B95x5MNreysdC%2BbdH3uVSZRL9O%2Bmn52wW7ewP8dRxUqy8u0JXwwEFIkkKUODoWMJ57bqoTAs9YssPKGriCyML%2FH18kGOqUBI9kp6mm08Sn6krOOKspvw%2BNMWD4U6DD%2F8M3ZoQXf%2BwmWzIRKp6UOwbW%2BvHDNxsPbdlHHv66HLnRWgFfo0yWIDq3njWZb5axkRLMBAyZv643HAwTBytgBg%2FhPwoUdftJZGDf4mBvCQ7EnZnCln06YokdBd%2BoPSSYMT56Xr0fTE0LjUrxNdNjc6j4g3eIJ9oRtekJSrq02%2BKDivy8OcnV3Po%2Br%2Biz9&X-Amz-Signature=b793b62bfeacd6b0c1eb8f2365bdfefe64f0f732f3af7c7b33526e6bb4a64d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LPAKMX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDctl2O4NyKWEhsGhO2zd6w8TuthU7%2BV%2F0N8V3Gkb6QbAIgPnUPQRC62fEsAD7LJRefG4KJ1JLYGzSnWDFT1POey%2FQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfcNdb6fJeR%2B%2F1zFCrcA5mQnuUV5AgQL7PvgCJ0UJDfxZj782IDBuozqEfkmv3A5QRsTffjLaWbDSN%2BGrHOfu2In2XHVj1ygLYJz0UhoiMZFE%2FOhBsHST2D%2Bg2gasAI68LrMMaQEAenIfEw5Jwv2qrs8sEB6sER3IpVb8jSLOYlAEIxmC%2BY3v5NXc%2Bd%2Fv83uocAF2sVdJEmRX%2BMy8xCFESHHZQN1Oy72r7TuyCjS%2BDxMGuxnb1MWUuQk%2Fk%2B6JpRp4xSlVePHa76PFofgdppQVjb65qM7PP0emei58YAImsxbUGcZGbRCEw3EcMfb1eeBmglID79GciuqvL13rk3sj8xZFV6kXAvDyNy4RokIRc6Wim3KNh2VJW%2BEvcrhpaZqFPv%2B%2F5TlVr4kZ8oo%2FbPZ7c0ZbmzWDG5LNPpXwbrVhZ1kYJFqGwQTIpAgOIHS1xloP7KDkNLoObj0loaGzKSv3aHg4Co65J1gZPRg%2BVysHZKG%2BFXm3UQaImIr%2F6sOdHQnmhWPQ6LU6ErKgsfXBuS1ETObq02LSOkPomwDk4XbO%2FmL9t%2FZfbN40ibyQJyG%2B95x5MNreysdC%2BbdH3uVSZRL9O%2Bmn52wW7ewP8dRxUqy8u0JXwwEFIkkKUODoWMJ57bqoTAs9YssPKGriCyML%2FH18kGOqUBI9kp6mm08Sn6krOOKspvw%2BNMWD4U6DD%2F8M3ZoQXf%2BwmWzIRKp6UOwbW%2BvHDNxsPbdlHHv66HLnRWgFfo0yWIDq3njWZb5axkRLMBAyZv643HAwTBytgBg%2FhPwoUdftJZGDf4mBvCQ7EnZnCln06YokdBd%2BoPSSYMT56Xr0fTE0LjUrxNdNjc6j4g3eIJ9oRtekJSrq02%2BKDivy8OcnV3Po%2Br%2Biz9&X-Amz-Signature=27bd32d92bdb10d1cfacacb0a6e07a3e41e1f1d302e4e297bf0fe97617f95d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
