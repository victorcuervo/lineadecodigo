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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657EEDEQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEymdBYg4EtfaJep9vsLPXzU6CmpzvBkAZ3c1YguRsZhAiEA9jxeHy1BSNYbDm%2FFaVWL0e5rgbUxzk4rZzaD%2B3zXKwoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEYG6bfDGKHejFV6SrcA1aqYvMpjsAs42qL7XEQTVqGrIYfZJydpTyGf4C62OxMQ2bo%2Beudqm6ECMi%2FF0EPTk4Grq2eXtXJdXIatSO1NiOYEezbNn4MFaRF6JW0WKuMNYQLb1Gh1%2FQjWlbTJuOJ5DYa%2Fr97I%2F0cid7PUqOIQfGo7W%2FlIAinkf5vdxFN%2BBKZLZo2mDQtVFVlmwryNC9PHaHdfGg30nboFAfgqo9OBrH5ixLvqfKmGAj8odE3pSGw57gAuDSt%2BR8AGnESBE6rHySghqipHls3Bk9QkJFnEa608UhSFP1MpAOADYjE1dk%2B4%2BG8HgbPOqgk%2FhfQAjpNsoCzz6msRbe%2FEFv6k4J9e3bR5X4l6CQF6UQdjyRAoKwKeCsD3nOXzpO3F%2BtOO2gFi71p59U3TTtvrZmj1Wkte%2BSF4WWXGHVkl2n4RHG2wFNU3W7mJ4j%2F2LaB%2F0ztsjcWE8tgdvb5lvbEM82e2np1U5nGJZoeJD02YFPa7EtwK%2BmD9A5F%2B15awti2eYUU364ldNE%2BIKyXuN3aw80aQagDozDuDJ%2F8TfmH6%2BcA4vpAQRmfgnphS%2BomUc5YKhiB8A5TthQJIG7iCNhHfhbd0%2BRajtiUGDr0ZIPBzFWAvSednvYjsL1DZu4ZwtBcNNPNMMufi8oGOqUBjnXuywGAdhK8g0wFQsE%2F%2Bkr5wRsJlMOEoC4FID2gk%2F1Sq%2FQdUuNxOJodYWVSCbqjkuNkxG7%2Bkfg2vlDek7cim094a%2BI2ywvNUIxr426zzLq8NO2agv9UXE9UQtNiELYxSCRS6fR5t9xnfyMJwvXWcqalvaFNkaG1ITsLZoVqAiBrAoVQJIr%2FV1wGJ3vICrTHYyf5q1VKd7g2VcS%2BY2InUtnDoot8&X-Amz-Signature=a553dde59ce4057f00c555e550c2fa4b75f33cd59f04041396a8b4b32252f9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657EEDEQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEymdBYg4EtfaJep9vsLPXzU6CmpzvBkAZ3c1YguRsZhAiEA9jxeHy1BSNYbDm%2FFaVWL0e5rgbUxzk4rZzaD%2B3zXKwoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEYG6bfDGKHejFV6SrcA1aqYvMpjsAs42qL7XEQTVqGrIYfZJydpTyGf4C62OxMQ2bo%2Beudqm6ECMi%2FF0EPTk4Grq2eXtXJdXIatSO1NiOYEezbNn4MFaRF6JW0WKuMNYQLb1Gh1%2FQjWlbTJuOJ5DYa%2Fr97I%2F0cid7PUqOIQfGo7W%2FlIAinkf5vdxFN%2BBKZLZo2mDQtVFVlmwryNC9PHaHdfGg30nboFAfgqo9OBrH5ixLvqfKmGAj8odE3pSGw57gAuDSt%2BR8AGnESBE6rHySghqipHls3Bk9QkJFnEa608UhSFP1MpAOADYjE1dk%2B4%2BG8HgbPOqgk%2FhfQAjpNsoCzz6msRbe%2FEFv6k4J9e3bR5X4l6CQF6UQdjyRAoKwKeCsD3nOXzpO3F%2BtOO2gFi71p59U3TTtvrZmj1Wkte%2BSF4WWXGHVkl2n4RHG2wFNU3W7mJ4j%2F2LaB%2F0ztsjcWE8tgdvb5lvbEM82e2np1U5nGJZoeJD02YFPa7EtwK%2BmD9A5F%2B15awti2eYUU364ldNE%2BIKyXuN3aw80aQagDozDuDJ%2F8TfmH6%2BcA4vpAQRmfgnphS%2BomUc5YKhiB8A5TthQJIG7iCNhHfhbd0%2BRajtiUGDr0ZIPBzFWAvSednvYjsL1DZu4ZwtBcNNPNMMufi8oGOqUBjnXuywGAdhK8g0wFQsE%2F%2Bkr5wRsJlMOEoC4FID2gk%2F1Sq%2FQdUuNxOJodYWVSCbqjkuNkxG7%2Bkfg2vlDek7cim094a%2BI2ywvNUIxr426zzLq8NO2agv9UXE9UQtNiELYxSCRS6fR5t9xnfyMJwvXWcqalvaFNkaG1ITsLZoVqAiBrAoVQJIr%2FV1wGJ3vICrTHYyf5q1VKd7g2VcS%2BY2InUtnDoot8&X-Amz-Signature=6a034953110b2ee8231713b3b421d7fbfc2242ba6a66b0c1f8e94dbd70d6e403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
