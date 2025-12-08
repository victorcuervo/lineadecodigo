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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFXFMSC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYbIBNmss8CRAYkbOe0O0%2BXJXKL%2FBVW7ieXjdmAFIlYAiEArPb0e6bvi269O78X%2FcTqcVTkD6sKGzXu7HQ44Ja5Q7YqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdSywKZoDw0DMRipCrcA%2BsgH0G3VUbJq5rojdRbG%2BtFMW5qCVuOruNRb%2F43aE6YR5RANRK6kxDkUjWjZJvbiIUASEL%2FhJ0UJcbOqTrDrRef69AuBxAIBBdt%2BPf4yTA6IEOoRK7wudNuXT%2BIjoAea7wKcfag6oU36QrXkjbxbso29QGQTmhOnD1kD35HrpAM7V0MUCgEcUj2Y7f1gbwqKigitVBx7K2HQxOn6A%2FlYBvzIigdagCmuZLXrIb%2FgfmIB3FmYcynt0LZ9ZIWMC%2BNBgn5FrzfOIe3vhXrmwlpTl%2BzuNjwitkccq0S0O1GZdwUVEk%2B5UpnuKV00H2DoZBsNWNAnn3fni2fFfyvhyGuH%2BROXS2%2F3ZMuNx1kMHIkcv67FnoAULhHVJfXus%2FrDaTsqzyKCVtxAdLn5dseNH%2BORQa4F%2BMIv4xtAFby0Y6MpV2unKcJAt64fV9OoygjGw9D5UHz%2B4RLNrYqOTaHRDmieQfHdh%2FkYRPBH9VW5PfRwa5gtKDTQdLDX6VASkr0QN6UvLUoRRBrTWHKkTF8gsYeZpuTnzpxCFcHcNX7BPQY7uBJR0v85%2BeofUnfSVw4VjdBuinqjqQy3NpH49%2FHNmA1KPkwdUCLXNWtr54hmlStGxfC7ypkv30xXVQ7VmufMPvk28kGOqUB6cne4B5cJQL2fuGctr0wtmoqLziAcM8qQIBTXxOjCHyK95M7YetJi17CTa9P3WEa0HXfaWmDYXqYnxR6vhdYgx4oMRXaU3eQluLBy6e%2FFl8MMV1%2F8N2hgr37a6CU2WRXJ2kPXv%2FjWpMUh8w2UD%2Bh5sQ1SKyeLwJRS52Damlf5l0DI%2F3jiu3Pmk2Fto0SwUC4pYcDbvBMyizhjzDqKFil0cnLBmsG&X-Amz-Signature=4dac21ddcd9340f0ce203a1632a9d9d927f43a48067c988597d7378f67760d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFXFMSC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYbIBNmss8CRAYkbOe0O0%2BXJXKL%2FBVW7ieXjdmAFIlYAiEArPb0e6bvi269O78X%2FcTqcVTkD6sKGzXu7HQ44Ja5Q7YqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdSywKZoDw0DMRipCrcA%2BsgH0G3VUbJq5rojdRbG%2BtFMW5qCVuOruNRb%2F43aE6YR5RANRK6kxDkUjWjZJvbiIUASEL%2FhJ0UJcbOqTrDrRef69AuBxAIBBdt%2BPf4yTA6IEOoRK7wudNuXT%2BIjoAea7wKcfag6oU36QrXkjbxbso29QGQTmhOnD1kD35HrpAM7V0MUCgEcUj2Y7f1gbwqKigitVBx7K2HQxOn6A%2FlYBvzIigdagCmuZLXrIb%2FgfmIB3FmYcynt0LZ9ZIWMC%2BNBgn5FrzfOIe3vhXrmwlpTl%2BzuNjwitkccq0S0O1GZdwUVEk%2B5UpnuKV00H2DoZBsNWNAnn3fni2fFfyvhyGuH%2BROXS2%2F3ZMuNx1kMHIkcv67FnoAULhHVJfXus%2FrDaTsqzyKCVtxAdLn5dseNH%2BORQa4F%2BMIv4xtAFby0Y6MpV2unKcJAt64fV9OoygjGw9D5UHz%2B4RLNrYqOTaHRDmieQfHdh%2FkYRPBH9VW5PfRwa5gtKDTQdLDX6VASkr0QN6UvLUoRRBrTWHKkTF8gsYeZpuTnzpxCFcHcNX7BPQY7uBJR0v85%2BeofUnfSVw4VjdBuinqjqQy3NpH49%2FHNmA1KPkwdUCLXNWtr54hmlStGxfC7ypkv30xXVQ7VmufMPvk28kGOqUB6cne4B5cJQL2fuGctr0wtmoqLziAcM8qQIBTXxOjCHyK95M7YetJi17CTa9P3WEa0HXfaWmDYXqYnxR6vhdYgx4oMRXaU3eQluLBy6e%2FFl8MMV1%2F8N2hgr37a6CU2WRXJ2kPXv%2FjWpMUh8w2UD%2Bh5sQ1SKyeLwJRS52Damlf5l0DI%2F3jiu3Pmk2Fto0SwUC4pYcDbvBMyizhjzDqKFil0cnLBmsG&X-Amz-Signature=3ec6015473dbde5221cee4f6d607c49bd6531f7f0135f8cbb2cca892660a3e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
