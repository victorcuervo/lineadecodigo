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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGMKIOB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAJVUC%2BRCc2qWTk9w0u3b1p9dCEr6bHXD3Sxm1RqXrwAIgU4Ls%2FZh%2BvhSUVHN25XL7VOa3bW7yY4OEk4f2ha0PdDkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC%2B2pZ51%2BpkWQ8GTDSrcA%2BVC04GBKGd0kmPrvJe4nWdXq52qrpdZ2xn%2BS9QOpwXt2U5%2BoLkDiy9YOLLL5dymPXL21JBKaWMTJ89mULxEAX8IZGC88sbF1oCixZkRMDjeCoDJagJiehDBplRcF3mNFFlCyP6yvx0sQ69jqUZQF0B0gQOcUdR6h2vcSeUIVEtGBDeD5o1QonsC7NVNpWZ8XG%2Bhx66jMe7bBAbzr2a05i6AEswDQeQuaw6egLBUcKQ%2FRchBdfABCA496k7mMBg0hsDbtSPhe6CJLAySR1XWt5TlBaacAKIYI9VeW80wI5gxLOSc3Qp3ceUjy1i1XXbuNnxaxVo20uTZuhORNW9FkH0XVHJ3uUfCgensf0uBaawwOJByesm5WHU7egZit8Rf%2Bs4Zc1wkyr%2FnnTQbsQQtXHA9bHyQGNPoErSABhOkUrC6%2BPd6eRt5cGz9NSmAXSm2q1sjtKm7icl2JrCwEdIHqkn8m0XBAngL7W0BkRkRsSHHGAo5FFxctfYSPJQqIym1OaJV%2B8Ou4Wdbjh1242B%2B6hTz62deMwHN%2BaFe0rTmvUalqJeAKXc2DYL%2BJg1quUiJwggsMR1WMInOsFlNrqEIQGHLYsaVKxwF%2F64wRAQlxhtCTDsL%2BNDC9ODp8e0PMJzT0skGOqUB1dQfgzl9pYzDf37uxh%2FgKLEx%2BMcdsogUNHQPVhiI10gLsttrJho7cjlhlDprtJwg7Lp%2BNxIi7cGs07K9WryPp7IsueDxoAGKdzd9MSbgKW8u4g%2BmVGFH6A3lRvrUSVJRgqXk59U%2FvMrDVJaT7t5GJ%2BijlfOKFF9x4yItsxUbVmmT6KNa1snT5yg5mqRiwrKX5xhMtm%2BBJCdzyrZbgcjK5XSRLq4B&X-Amz-Signature=a10f76e28dc8d451291fb1c8a0182400e3f3eaffa60bf235636deeca83717eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGMKIOB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAJVUC%2BRCc2qWTk9w0u3b1p9dCEr6bHXD3Sxm1RqXrwAIgU4Ls%2FZh%2BvhSUVHN25XL7VOa3bW7yY4OEk4f2ha0PdDkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC%2B2pZ51%2BpkWQ8GTDSrcA%2BVC04GBKGd0kmPrvJe4nWdXq52qrpdZ2xn%2BS9QOpwXt2U5%2BoLkDiy9YOLLL5dymPXL21JBKaWMTJ89mULxEAX8IZGC88sbF1oCixZkRMDjeCoDJagJiehDBplRcF3mNFFlCyP6yvx0sQ69jqUZQF0B0gQOcUdR6h2vcSeUIVEtGBDeD5o1QonsC7NVNpWZ8XG%2Bhx66jMe7bBAbzr2a05i6AEswDQeQuaw6egLBUcKQ%2FRchBdfABCA496k7mMBg0hsDbtSPhe6CJLAySR1XWt5TlBaacAKIYI9VeW80wI5gxLOSc3Qp3ceUjy1i1XXbuNnxaxVo20uTZuhORNW9FkH0XVHJ3uUfCgensf0uBaawwOJByesm5WHU7egZit8Rf%2Bs4Zc1wkyr%2FnnTQbsQQtXHA9bHyQGNPoErSABhOkUrC6%2BPd6eRt5cGz9NSmAXSm2q1sjtKm7icl2JrCwEdIHqkn8m0XBAngL7W0BkRkRsSHHGAo5FFxctfYSPJQqIym1OaJV%2B8Ou4Wdbjh1242B%2B6hTz62deMwHN%2BaFe0rTmvUalqJeAKXc2DYL%2BJg1quUiJwggsMR1WMInOsFlNrqEIQGHLYsaVKxwF%2F64wRAQlxhtCTDsL%2BNDC9ODp8e0PMJzT0skGOqUB1dQfgzl9pYzDf37uxh%2FgKLEx%2BMcdsogUNHQPVhiI10gLsttrJho7cjlhlDprtJwg7Lp%2BNxIi7cGs07K9WryPp7IsueDxoAGKdzd9MSbgKW8u4g%2BmVGFH6A3lRvrUSVJRgqXk59U%2FvMrDVJaT7t5GJ%2BijlfOKFF9x4yItsxUbVmmT6KNa1snT5yg5mqRiwrKX5xhMtm%2BBJCdzyrZbgcjK5XSRLq4B&X-Amz-Signature=2e86c181af0fca011238a5d6ba859e9da38c843ddbe9a971144f444a87e3f787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
