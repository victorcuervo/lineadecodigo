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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGKY7Y6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD59ea7Ind6og%2F0%2BFiHvBDYknBujDZcdZEV5MdZTRJFWQIgCPW7CkcWjXgpMeyrJP57zE9Cy8N0nVUi1YuhQqjJbp0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPVu5D%2BvhQzAVdCKSrcA8oWegRifeuZ6pQZEixrWFswXwAMpsJD3hUX0BlhLNHPP1cSaXQpI1NcCGgFOpirBPdHbwtIFO7IsK%2BET0z9%2BhErYC1k%2FwvBwNlT382STKa8LyPS9Yq4xEAO1R%2FQxBTbP0fgZ2EgaGco88UighyNQyCTglFRmjWEO3yxlRbezaj3SCYtag9OhF0f22KTFvyHQ%2BwsDNlreCvMQ4PiayTM%2Fdfbi5F3Je5QrgBzNRdsLToArWPXlwBguTyS9nHSoGaAsNqAIn7cs82ugJCUhgMAF%2FA1bdQSJcZmhH1CbZ4SAXmAvCa%2BGHVTYb32qQ2PG3pIDw7W85Q66bfG1TPeZz1jECjS%2FNYeIdxi2Jfz%2FJR89v0%2B4fdNGQLzHqNxNs1m5frGVH4XlySgNC%2FGxK2hN40MiyPCb9SERlY85N5sc0m4%2FFfavtKvf4B%2BVlWAPllz3IqvwdjnpVfJNIjgweHRuC0JMg0o1j7b%2BEa%2F%2ByJQcDNNkrVKeISGBvgRifapAsnW29DuGkezXZXaY4x1sCDoG2%2Ba%2FsbSvGN4zIT2PSfnYb7WFXDg7GFr1ptFJ0v4Ljap6%2Bx0S9faxo%2FBB2sSWG%2BcoXEqUTEi9VH%2B1ZEPtPJw%2BjGhA8cU68of%2B9ZeiLNbU0vEMJ%2FK3skGOqUBe5qZ2Z7Gr469IuRcWDD59L161OcEEggZjcEeApXwekfFt1y70YPNe2wtZMPfHzcFroNSgniOGxRWZHBbRuHO1ikofq3aQaxWWrRW%2BWGnRDHpLx4kJdVYLf8r4wzMwg4hoF1m2jEwM8yo%2FNnMnKsqX4oKwqOxNyf%2BF2ci9JwHICrglYAbHZ3RD1dn2cRP%2BEwAT47Z23GvPZ5pOdxjNMy%2BPVQRZdhm&X-Amz-Signature=f19d549eb9c022f6302b204bccc4706fe43ec0a518842e44508bb26bc8792b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGKY7Y6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD59ea7Ind6og%2F0%2BFiHvBDYknBujDZcdZEV5MdZTRJFWQIgCPW7CkcWjXgpMeyrJP57zE9Cy8N0nVUi1YuhQqjJbp0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPVu5D%2BvhQzAVdCKSrcA8oWegRifeuZ6pQZEixrWFswXwAMpsJD3hUX0BlhLNHPP1cSaXQpI1NcCGgFOpirBPdHbwtIFO7IsK%2BET0z9%2BhErYC1k%2FwvBwNlT382STKa8LyPS9Yq4xEAO1R%2FQxBTbP0fgZ2EgaGco88UighyNQyCTglFRmjWEO3yxlRbezaj3SCYtag9OhF0f22KTFvyHQ%2BwsDNlreCvMQ4PiayTM%2Fdfbi5F3Je5QrgBzNRdsLToArWPXlwBguTyS9nHSoGaAsNqAIn7cs82ugJCUhgMAF%2FA1bdQSJcZmhH1CbZ4SAXmAvCa%2BGHVTYb32qQ2PG3pIDw7W85Q66bfG1TPeZz1jECjS%2FNYeIdxi2Jfz%2FJR89v0%2B4fdNGQLzHqNxNs1m5frGVH4XlySgNC%2FGxK2hN40MiyPCb9SERlY85N5sc0m4%2FFfavtKvf4B%2BVlWAPllz3IqvwdjnpVfJNIjgweHRuC0JMg0o1j7b%2BEa%2F%2ByJQcDNNkrVKeISGBvgRifapAsnW29DuGkezXZXaY4x1sCDoG2%2Ba%2FsbSvGN4zIT2PSfnYb7WFXDg7GFr1ptFJ0v4Ljap6%2Bx0S9faxo%2FBB2sSWG%2BcoXEqUTEi9VH%2B1ZEPtPJw%2BjGhA8cU68of%2B9ZeiLNbU0vEMJ%2FK3skGOqUBe5qZ2Z7Gr469IuRcWDD59L161OcEEggZjcEeApXwekfFt1y70YPNe2wtZMPfHzcFroNSgniOGxRWZHBbRuHO1ikofq3aQaxWWrRW%2BWGnRDHpLx4kJdVYLf8r4wzMwg4hoF1m2jEwM8yo%2FNnMnKsqX4oKwqOxNyf%2BF2ci9JwHICrglYAbHZ3RD1dn2cRP%2BEwAT47Z23GvPZ5pOdxjNMy%2BPVQRZdhm&X-Amz-Signature=bdfa957046c76bcc9c94ae21d95d68398dfabe4212e9de51d7a4b94049012908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
