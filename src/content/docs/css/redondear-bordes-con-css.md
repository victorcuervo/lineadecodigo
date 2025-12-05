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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVOFLBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8VTHodHsD8bm1ygh5tCClBY3dcixM71hUCIL4yWKirQIhAIxxprVCoNdt4rxHVAt43wuE5pc3tqeicSFR2rmauQbjKv8DCFUQABoMNjM3NDIzMTgzODA1IgwqwwFX06sQd%2F5jxfcq3APsLb9yq9kuRMQiWUwRgZY2VQILWCW3NEVqInkpUYLpSq6ecKssH%2ByQV0zz7J299EpgKlXOtqR1TkxFScHNIOudiPFslhoCGCWkk%2B0lB%2FE2GeDl530%2Bk2tPIhLWacIINKOdMLwyN3JU7r4Xfyp7LtyJd5SCLPIwvAkuHZaF8niAgW1xEWamyAjWD%2BjKB%2BC85ptXOb09t%2F21BWZpE%2FGkzShEsvRswVgYBwi4Bm0H1uMJrljXI0lI9yPVTvcTBcDP8sddQ9MPqcXTRy%2BKbPjj%2Bz42mp3ODWRZMCpzH%2BZ4o0WUAswGf4JXLsuFyzh1AbVU%2FtLOayYrDRX0SIoEzAEf0yPalo%2FUzCfa0YlHLZATSRPGGRjE5z%2FCgNGpn2KnBnUBo%2BF8TH5hqFwzDJbZChG7ew9HaDCzAsAP9CHXauUP1DivSrjaVUADtNiul9j3gGRhG6c4VopoVnzxjlL9iVh2MjicE1HqTKMDfkRM%2BmXd3JX62R9zixpMQm4e7%2B43WjDu1CvegJ30eyjYi02wHK1vWxP7b4rp7dxkxJDEL1pWPxKyzQm5ydj8%2FmZ298WCrToAohgAvl5ppJoyhRC2F1PnspDSKFRAvqwq1IgIxW3ATfhxWhBChq5g8iY2bnLDvjDQq8nJBjqkAVmnVCxPXcOtRv6APQ4K4WIDXWHnsvR7LrdX%2B4r5%2FA6%2FR7qFxjScG5%2FpgPV5qNmEFp9dnSnDmcRyfY3mm6vr2pMOCTJSaRBgXkJSaoMRsu65p7AniJlGJaVHZSwoImE8oCWSi7OX8NFwo%2BqJPteZfwWJLpIXbzVSe9%2FP6ZmWVh%2F4SH%2BvSJviyMx0mrdvSKec%2FlhVLg%2FI947%2FduRDqfU6ONjJKM8g&X-Amz-Signature=92d14b6283edc36d85c43df779f36ef74b23c939a11ff0364b3689aba4ff74de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVOFLBM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8VTHodHsD8bm1ygh5tCClBY3dcixM71hUCIL4yWKirQIhAIxxprVCoNdt4rxHVAt43wuE5pc3tqeicSFR2rmauQbjKv8DCFUQABoMNjM3NDIzMTgzODA1IgwqwwFX06sQd%2F5jxfcq3APsLb9yq9kuRMQiWUwRgZY2VQILWCW3NEVqInkpUYLpSq6ecKssH%2ByQV0zz7J299EpgKlXOtqR1TkxFScHNIOudiPFslhoCGCWkk%2B0lB%2FE2GeDl530%2Bk2tPIhLWacIINKOdMLwyN3JU7r4Xfyp7LtyJd5SCLPIwvAkuHZaF8niAgW1xEWamyAjWD%2BjKB%2BC85ptXOb09t%2F21BWZpE%2FGkzShEsvRswVgYBwi4Bm0H1uMJrljXI0lI9yPVTvcTBcDP8sddQ9MPqcXTRy%2BKbPjj%2Bz42mp3ODWRZMCpzH%2BZ4o0WUAswGf4JXLsuFyzh1AbVU%2FtLOayYrDRX0SIoEzAEf0yPalo%2FUzCfa0YlHLZATSRPGGRjE5z%2FCgNGpn2KnBnUBo%2BF8TH5hqFwzDJbZChG7ew9HaDCzAsAP9CHXauUP1DivSrjaVUADtNiul9j3gGRhG6c4VopoVnzxjlL9iVh2MjicE1HqTKMDfkRM%2BmXd3JX62R9zixpMQm4e7%2B43WjDu1CvegJ30eyjYi02wHK1vWxP7b4rp7dxkxJDEL1pWPxKyzQm5ydj8%2FmZ298WCrToAohgAvl5ppJoyhRC2F1PnspDSKFRAvqwq1IgIxW3ATfhxWhBChq5g8iY2bnLDvjDQq8nJBjqkAVmnVCxPXcOtRv6APQ4K4WIDXWHnsvR7LrdX%2B4r5%2FA6%2FR7qFxjScG5%2FpgPV5qNmEFp9dnSnDmcRyfY3mm6vr2pMOCTJSaRBgXkJSaoMRsu65p7AniJlGJaVHZSwoImE8oCWSi7OX8NFwo%2BqJPteZfwWJLpIXbzVSe9%2FP6ZmWVh%2F4SH%2BvSJviyMx0mrdvSKec%2FlhVLg%2FI947%2FduRDqfU6ONjJKM8g&X-Amz-Signature=e07b77853d74d2d978aa5fe7397604ec066526cfcd8688e8f7149303e0d6715c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
