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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXEQ5WU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoexcQL%2F3dPz31aib8YdRYFj%2BKwfUtSsHy2hEaAEjiwIhALI7ItUyE%2BnPRNIHWrJ0i%2BIOZjB26%2BiDTaiG1y79%2B0dKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2Ba8TG9Y3poMYsiYq3AM3abd8Qi7xt%2BycBQjYBub08ZkNs7LKvNw5R4lhphnVhMWSL7vqiVFbs0IIJmlLFv%2F1YmnrWyn3en9fkv%2FOrlKrE6ESyQ3kgXXE12cm4PsaZqq%2FdzEmEpZJ5OexZNOf2k2ARvgVZwrNb7wYp44BNrilo%2FeyI8jEHvFb6r1v1iqg7bjPWsFZdiHk9pMmB5BMthnLCv02xgDrnSSGim9oWyxriryagwpgev%2BvIV1vGmNeYgam%2FI%2Fvz5U2eyC16lit%2Fx6glDa0DQX6nlp7IkmkMjDS8j8QVR9Lcq63HJeuxp6GltgQmnERn0cuCoc52%2Bg1EChMvezmZH%2BF2abfNDlH4tz%2B6cD%2BhxjwYzu6bPA5hSYpv1nnXekbJ%2BlMGaO8QJvsT%2BHZQwBHfzxk1h1pXx3Fcrokx4oprfqL58Xnrvq6Exn4w3ojedIrsMidt3MF78qp%2B8SK8QH5WuQ5ewbeT60o%2F%2Fc1xnr2rHwQfAlb833vWTike5GzB0gP6uY1z4ywaUIMTCUTv%2FEFQyWCrnNvPmZU0ihJgOZdSIAXKYyaZf%2B38dssTo%2F4%2BaQl05p2bZVA0Dpr3iL5bOYCuOeY0kFMzAjNFvqQMpOLgwDZ4%2BSaN7tojVrOtcoEXcfzs0x4N1pNeTDJ7tnJBjqkARLbwsGWbkK5cO8aydXwJ00XfCV2lZpCOxm1mXfj744MKD%2BAUZ1VyTFvru8HODl%2Fj6Du67JULfFCK9k%2Fcmjx0lBP1r%2FDo9GGNFcYNibXbHq91mkfwpDw4Sn0P5R%2B7uJLI605rkcXiAlngAD9A0wffNEPfswtbLXTKCr7u0t1NWIJRsaM7HVdQlcquzOz7TM0WPj3hgxNBl7MNWjv2P%2FzFnWif4xA&X-Amz-Signature=5867ef4b8dc640a037c9a1e9f2eeed0ff8356d1719354eba8f1c10271fc017ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXEQ5WU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoexcQL%2F3dPz31aib8YdRYFj%2BKwfUtSsHy2hEaAEjiwIhALI7ItUyE%2BnPRNIHWrJ0i%2BIOZjB26%2BiDTaiG1y79%2B0dKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2Ba8TG9Y3poMYsiYq3AM3abd8Qi7xt%2BycBQjYBub08ZkNs7LKvNw5R4lhphnVhMWSL7vqiVFbs0IIJmlLFv%2F1YmnrWyn3en9fkv%2FOrlKrE6ESyQ3kgXXE12cm4PsaZqq%2FdzEmEpZJ5OexZNOf2k2ARvgVZwrNb7wYp44BNrilo%2FeyI8jEHvFb6r1v1iqg7bjPWsFZdiHk9pMmB5BMthnLCv02xgDrnSSGim9oWyxriryagwpgev%2BvIV1vGmNeYgam%2FI%2Fvz5U2eyC16lit%2Fx6glDa0DQX6nlp7IkmkMjDS8j8QVR9Lcq63HJeuxp6GltgQmnERn0cuCoc52%2Bg1EChMvezmZH%2BF2abfNDlH4tz%2B6cD%2BhxjwYzu6bPA5hSYpv1nnXekbJ%2BlMGaO8QJvsT%2BHZQwBHfzxk1h1pXx3Fcrokx4oprfqL58Xnrvq6Exn4w3ojedIrsMidt3MF78qp%2B8SK8QH5WuQ5ewbeT60o%2F%2Fc1xnr2rHwQfAlb833vWTike5GzB0gP6uY1z4ywaUIMTCUTv%2FEFQyWCrnNvPmZU0ihJgOZdSIAXKYyaZf%2B38dssTo%2F4%2BaQl05p2bZVA0Dpr3iL5bOYCuOeY0kFMzAjNFvqQMpOLgwDZ4%2BSaN7tojVrOtcoEXcfzs0x4N1pNeTDJ7tnJBjqkARLbwsGWbkK5cO8aydXwJ00XfCV2lZpCOxm1mXfj744MKD%2BAUZ1VyTFvru8HODl%2Fj6Du67JULfFCK9k%2Fcmjx0lBP1r%2FDo9GGNFcYNibXbHq91mkfwpDw4Sn0P5R%2B7uJLI605rkcXiAlngAD9A0wffNEPfswtbLXTKCr7u0t1NWIJRsaM7HVdQlcquzOz7TM0WPj3hgxNBl7MNWjv2P%2FzFnWif4xA&X-Amz-Signature=bbb9954677efa1ae47225ec1665783c721e3d3f960c630f4e580f9f138fc38bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
