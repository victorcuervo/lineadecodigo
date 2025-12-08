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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFG4SRH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo36oL7ARGjFJcz3qZ1SZ70cwJtzGYQGaM5AsABGXusAiAX83DXKafOK6I%2FCTH5Cs4w22P4Ck%2BtyxrOKUF%2BNrCn6yqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJWVxPVLAUCKx88GKtwDzWsAIYq%2BqGjeYinUEo%2FkkNuwY57tzvApUQafpIQ%2FPRYnqa1l0xqvL5A2eDKYGj3WxFZPx2%2FQPBh6qFK1yQd8x8Z6U%2B6Bkl%2F2V6QPFuUyxAqqRNT%2B47E2wtKsCxjNgZomODwPEiwFosJmlff5Q5Yv0ONFVUOnGWoJSzjzH9ilIeeQMDr6lxfbli98zR6sEH%2BheFPCd2fu8Q9yaPxLe%2FQIWQBXIpJpasaQFqJjZsFNzWe0WpoqmqIzzB5G%2Fvg8Is9hRp%2BEpQZjtPpJ7ztEqFKNDIPIV7aNZwPsqOOtcyPu18LihIOeqR7A9jI3%2BRLZo3%2B3xw%2FXKwBMQsH8V2eJfum3dGGyqK%2F1yVHgIODu3HORJi8RDD199DyrKWt97wnP8LWDIKXfTBNYd5uyvx0rd1DoyTdX9Pl4oHF8NkwIr7aVbp0pnfFTdoLeow0doHnhC8GdQc7d6Gmg99xF1LirqV099xg03%2BXNtXQ4ure8iobiu8IrVaNjcn4doVzaVG3l3%2Bn2OspcbZIC79aKfpjIMajxFfS2xNsKdiyYAwj5Mf6B9Ff6%2BNxjUzpkuLTKueHgkT5hOXhoiHfE82IIm9S0tobot6%2FxyTSDcEVv89L5NUFeVFq6NAaZ6KJ%2FDlrxjOwwqfPayQY6pgFMG%2FslEW4CjOLlNCEp3oXo2mqdifsLzm5kSk4ED6so9W3y2s4ycnqcS2AlPzQqlNdLwf0z4hQE6C6YIAZat77CTOxky7Fc%2BEEHRf5iz3sGQMfHYXKjsqIixYBcBrdPCoFtzOyLL4jPE6dYfq23j0rIhGaEiY47bgKFXX6xUsgVCPAmO0L%2FcP%2Bv25Yzvt8BUA0%2BMcD2W5yQp0kc%2BfSY6u%2FCNvC%2F%2BFY4&X-Amz-Signature=fe222fd374a69826039a0bf94db5a59025126a3139eacc9edb41bc7ae02eb063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFG4SRH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo36oL7ARGjFJcz3qZ1SZ70cwJtzGYQGaM5AsABGXusAiAX83DXKafOK6I%2FCTH5Cs4w22P4Ck%2BtyxrOKUF%2BNrCn6yqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJWVxPVLAUCKx88GKtwDzWsAIYq%2BqGjeYinUEo%2FkkNuwY57tzvApUQafpIQ%2FPRYnqa1l0xqvL5A2eDKYGj3WxFZPx2%2FQPBh6qFK1yQd8x8Z6U%2B6Bkl%2F2V6QPFuUyxAqqRNT%2B47E2wtKsCxjNgZomODwPEiwFosJmlff5Q5Yv0ONFVUOnGWoJSzjzH9ilIeeQMDr6lxfbli98zR6sEH%2BheFPCd2fu8Q9yaPxLe%2FQIWQBXIpJpasaQFqJjZsFNzWe0WpoqmqIzzB5G%2Fvg8Is9hRp%2BEpQZjtPpJ7ztEqFKNDIPIV7aNZwPsqOOtcyPu18LihIOeqR7A9jI3%2BRLZo3%2B3xw%2FXKwBMQsH8V2eJfum3dGGyqK%2F1yVHgIODu3HORJi8RDD199DyrKWt97wnP8LWDIKXfTBNYd5uyvx0rd1DoyTdX9Pl4oHF8NkwIr7aVbp0pnfFTdoLeow0doHnhC8GdQc7d6Gmg99xF1LirqV099xg03%2BXNtXQ4ure8iobiu8IrVaNjcn4doVzaVG3l3%2Bn2OspcbZIC79aKfpjIMajxFfS2xNsKdiyYAwj5Mf6B9Ff6%2BNxjUzpkuLTKueHgkT5hOXhoiHfE82IIm9S0tobot6%2FxyTSDcEVv89L5NUFeVFq6NAaZ6KJ%2FDlrxjOwwqfPayQY6pgFMG%2FslEW4CjOLlNCEp3oXo2mqdifsLzm5kSk4ED6so9W3y2s4ycnqcS2AlPzQqlNdLwf0z4hQE6C6YIAZat77CTOxky7Fc%2BEEHRf5iz3sGQMfHYXKjsqIixYBcBrdPCoFtzOyLL4jPE6dYfq23j0rIhGaEiY47bgKFXX6xUsgVCPAmO0L%2FcP%2Bv25Yzvt8BUA0%2BMcD2W5yQp0kc%2BfSY6u%2FCNvC%2F%2BFY4&X-Amz-Signature=f9b60f0c315ffcec2cb199743f92b5427a67a53e2d2e7e89500016575020603e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
