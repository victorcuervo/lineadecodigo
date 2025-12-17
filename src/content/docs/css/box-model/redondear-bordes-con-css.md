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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTU5YPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwqdpIwSQZxNp04oUurLszJn18mwbcPgeQTMKiMpcnxAiAXEWf3s1soLeeDb26mP%2FXGcoe3bMbZQdWlz%2FskRC10yyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJrG4GodCaC5qwzUKtwDePqwtyVEtqww9UJLXueOTVHT5FabqFIIyoFqgMpoLDspXbVKZXDp4n9XHRBaPEbQ%2BbB2%2B26FshBpPDTMxoSeQAP7ZKquJx%2F%2B1Gw1F%2FAnvwjNWX1ffTv4hOHy3Gvz7670UY6X17wm9MZjonaLRk1omY2%2Bi3KXzdTN1AWGVl3bFtxOl9I%2BV4sNnt430ykE00t8Q72PWC88%2BRsOZjlK2KDoyUta2xkyZESUCsp1rtbBbEFIk85lnNA8ZhcrTFCPjafRUZNguDPTosbw6%2Fo5QrV7EyNR7TzbkuCg7IR5emJp%2FyRuk%2Fk6dAWQknyGg5NFC%2BxDelUeOlHtIM6D0V0dBguVfYYWlK7%2B%2F2ugC8%2FKySvY2a9eCDbV48x%2BjzLdOmxkaM542v5BXCR8qTVowb7Hk7v4DJYQIASKNqzstvnzUr8gZGXx8l4%2FubZqJM8ecoIizGVp%2Bef15D9LN8DV8KgPgzCuChBTPCUNwcQmss2cWkZ1UzXtC7ROZt084llyXhLhEXS99%2BqqyHkLXg2tsOKn4Y%2BHLvOpR%2FTAL3cU%2BnQ2S8IWge5EtsecLLh2JGC6l44265jPpALgTYiIyVe9hRw3to6rCqlM5ZQFy%2FX%2BCMZ5SgR%2BM7nZw06vjY%2FZybKtEPAwnp%2BLygY6pgGu13oEehFF0pck7bUat%2BVBTkGc%2FzkaRTvZFOOfUSMniW%2BBk0bOzeTwsyB6Hc2GMvKLTUVgrCGQSjuIjh1jJQG7eAtVTmo116FcDtOd2m3A%2Ba6NmAymI7cjyAYSL1YwqYX5GGCmoBt%2BSfWyINiCornmDL%2BACdWav%2Bn94dR%2BjbUatg99vOVuHaNlqEz5l%2FwKTvXYIO2Yq751FN1FF9NcazzeL3Il8lqg&X-Amz-Signature=ce53d1d827219d58eaa586ec3fe3ce06a7cf3ec54299c47469f76348c5c2307c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTU5YPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwqdpIwSQZxNp04oUurLszJn18mwbcPgeQTMKiMpcnxAiAXEWf3s1soLeeDb26mP%2FXGcoe3bMbZQdWlz%2FskRC10yyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJrG4GodCaC5qwzUKtwDePqwtyVEtqww9UJLXueOTVHT5FabqFIIyoFqgMpoLDspXbVKZXDp4n9XHRBaPEbQ%2BbB2%2B26FshBpPDTMxoSeQAP7ZKquJx%2F%2B1Gw1F%2FAnvwjNWX1ffTv4hOHy3Gvz7670UY6X17wm9MZjonaLRk1omY2%2Bi3KXzdTN1AWGVl3bFtxOl9I%2BV4sNnt430ykE00t8Q72PWC88%2BRsOZjlK2KDoyUta2xkyZESUCsp1rtbBbEFIk85lnNA8ZhcrTFCPjafRUZNguDPTosbw6%2Fo5QrV7EyNR7TzbkuCg7IR5emJp%2FyRuk%2Fk6dAWQknyGg5NFC%2BxDelUeOlHtIM6D0V0dBguVfYYWlK7%2B%2F2ugC8%2FKySvY2a9eCDbV48x%2BjzLdOmxkaM542v5BXCR8qTVowb7Hk7v4DJYQIASKNqzstvnzUr8gZGXx8l4%2FubZqJM8ecoIizGVp%2Bef15D9LN8DV8KgPgzCuChBTPCUNwcQmss2cWkZ1UzXtC7ROZt084llyXhLhEXS99%2BqqyHkLXg2tsOKn4Y%2BHLvOpR%2FTAL3cU%2BnQ2S8IWge5EtsecLLh2JGC6l44265jPpALgTYiIyVe9hRw3to6rCqlM5ZQFy%2FX%2BCMZ5SgR%2BM7nZw06vjY%2FZybKtEPAwnp%2BLygY6pgGu13oEehFF0pck7bUat%2BVBTkGc%2FzkaRTvZFOOfUSMniW%2BBk0bOzeTwsyB6Hc2GMvKLTUVgrCGQSjuIjh1jJQG7eAtVTmo116FcDtOd2m3A%2Ba6NmAymI7cjyAYSL1YwqYX5GGCmoBt%2BSfWyINiCornmDL%2BACdWav%2Bn94dR%2BjbUatg99vOVuHaNlqEz5l%2FwKTvXYIO2Yq751FN1FF9NcazzeL3Il8lqg&X-Amz-Signature=feb42f257f707aa21e93713db68adab8470d10c4fb0b3f560eb207952e89abcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
