---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP35WXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDMG8EwN8vVR46QOK%2FzHsFWrpnBfVuxCBL3RJxM%2B1WzBQIgUbOpp9syIHMrdB4KWqFf1tPTW49TL1jcWrrlB22zSVwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIgJnvNSG5uXoIrtlSrcA0oBxBleu5PHmDjCYwW1sPWsWMIt9d%2FRW85O73MzzgKxoZ%2FrbEILUU5%2BFjrfk%2BVuQQPMXE6FbEdhKLOr1eTKeC5u%2F5EmKBG%2BYFJv2fsHRRO75%2FZk56XQXxKpFnyhxI3%2B2AP%2F8w6LBY%2B8Jpgty6%2FJmN4iTytURcA71bI4NjG%2F7okb0HjZx57O0sePbx7buzwRh1HmrC%2FRFriqBPX1zd1O4iACFzoaDPlZ1Hf9%2BwMQMqvoZ9iQIPGBhGoQzK91b%2BSQ4CHyAEJNsTYAqPvlg5jzNDDVwcgrPn0SJwRjfmlu5NtjiBmUqGg%2BlQOuAky2CHYfkaQAODvzdMDI%2BNlQTsMQT6blWPXJg1LUlPGxb9jyVgVut0f%2F7lPcZU4LUhQStgVF4Q6hs9yyjzpoIdjXyUIPOY6dir0A%2FrqPR9cFu4QNwDh7GzFqi2H4xZFpOXZPMiN3GwNf%2BwQsqIPi8mhAUXWanIvzDmkGPctgwY9nBI3E1TnzZEH2qRl2nbYbnqEbFltZOpYWHnaLFUMAnWEttFU%2F%2BOM4gz%2Fm65rPHQW3D89PA8DQX2BjEpdBEUrt9hJ%2FqhIc1FHGL5jQKzwsy8P9CK61uOS9t%2BRuCnnaa5fI1702JeNoZZeHODe8YnYsIhfnMJG1w8kGOqUBrz39gxShESEaARmCzSWnj1SVtjtbq%2FH2a3vfu0KSQdE6C7W%2BxIHiPllRpZ%2BP4VDmmkQIOX5TFScsQuHgks4sS441xdEYzdNEyQP%2FmwAjQXpfsCvceZjvAqlqvPDITrWs330u2rXJX7zRrzBr%2FzNHemrqt8k%2FPJSZG%2BEz%2BLiaYtsVxO39t42eiC%2BomDO%2Bo9%2FUkSbo18oKnFQnaFCeIcZurLKvLCG2&X-Amz-Signature=86653b811474f67ad39a8f2935f44dd5408392ca20733e3b9d88d9e3aeab1a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP35WXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDMG8EwN8vVR46QOK%2FzHsFWrpnBfVuxCBL3RJxM%2B1WzBQIgUbOpp9syIHMrdB4KWqFf1tPTW49TL1jcWrrlB22zSVwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIgJnvNSG5uXoIrtlSrcA0oBxBleu5PHmDjCYwW1sPWsWMIt9d%2FRW85O73MzzgKxoZ%2FrbEILUU5%2BFjrfk%2BVuQQPMXE6FbEdhKLOr1eTKeC5u%2F5EmKBG%2BYFJv2fsHRRO75%2FZk56XQXxKpFnyhxI3%2B2AP%2F8w6LBY%2B8Jpgty6%2FJmN4iTytURcA71bI4NjG%2F7okb0HjZx57O0sePbx7buzwRh1HmrC%2FRFriqBPX1zd1O4iACFzoaDPlZ1Hf9%2BwMQMqvoZ9iQIPGBhGoQzK91b%2BSQ4CHyAEJNsTYAqPvlg5jzNDDVwcgrPn0SJwRjfmlu5NtjiBmUqGg%2BlQOuAky2CHYfkaQAODvzdMDI%2BNlQTsMQT6blWPXJg1LUlPGxb9jyVgVut0f%2F7lPcZU4LUhQStgVF4Q6hs9yyjzpoIdjXyUIPOY6dir0A%2FrqPR9cFu4QNwDh7GzFqi2H4xZFpOXZPMiN3GwNf%2BwQsqIPi8mhAUXWanIvzDmkGPctgwY9nBI3E1TnzZEH2qRl2nbYbnqEbFltZOpYWHnaLFUMAnWEttFU%2F%2BOM4gz%2Fm65rPHQW3D89PA8DQX2BjEpdBEUrt9hJ%2FqhIc1FHGL5jQKzwsy8P9CK61uOS9t%2BRuCnnaa5fI1702JeNoZZeHODe8YnYsIhfnMJG1w8kGOqUBrz39gxShESEaARmCzSWnj1SVtjtbq%2FH2a3vfu0KSQdE6C7W%2BxIHiPllRpZ%2BP4VDmmkQIOX5TFScsQuHgks4sS441xdEYzdNEyQP%2FmwAjQXpfsCvceZjvAqlqvPDITrWs330u2rXJX7zRrzBr%2FzNHemrqt8k%2FPJSZG%2BEz%2BLiaYtsVxO39t42eiC%2BomDO%2Bo9%2FUkSbo18oKnFQnaFCeIcZurLKvLCG2&X-Amz-Signature=f4db730870ed21b97ec2c19e4b7b8b4d285e023239107485e75b6ae781638589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
