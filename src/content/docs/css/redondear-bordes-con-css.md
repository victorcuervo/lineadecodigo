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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYECD2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl2r5DtDRbNtnipF3ybM2gOHWI7SqfW0Fn6Y2gr39pewIhAMNequLaSMKiQpUvCTP4u63d%2F3dJ7EpRXM5m42EWB9fCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUhNDOYgFOzDIOGywq3AM0stzdsp5tD2qFPbAbYQJfHFIEYghtQSRmuzU6totJrChcxoVs9L9AAhZGS3E3VngJQDg5tare25MavBtRKQw0G5oFRXpS9DJSjl8cAsX3CR39MelzQSzxCKl%2Fu%2FiylTmi%2Fiv1PIGyVPU1Egn5ip8TVxxHScCKQu1H%2BVfZIveZBdJJxtTZD5oOBOnBvFwQkrwREFuvXMW4OMj%2F5pQcRkhC3d2TGeQguxxQBGI9CjkcSBU6cMh%2B5kC8vyM0F1dZdvWyxo8lBZq4%2FPcWeannYLQV5%2BzZu8vrbvY6DHv3BAfQ2AFg%2BaBJzTZ1QTDIJ7nIg%2FlXssDM6IBeGL%2FV95z43MG20lJh4U2m%2F%2BebHh848kNbGniKESJiSYsiyReKgpvSO1Zd%2BJVizlebiMixAEy%2BNCr8I8VSQEMNGM2jxH1c0Wr7AioCIplxVI3IH9mg4XVaaM5UOkSTrR%2Bj6L7a9gsc5H1r0xBxFKo8iCj6mCXmhqRY%2BfNcyK9KcHk2F%2BWhDbw9Cdnr5aBqdLGatfM48vX8tZXfTEQuBqLV0pcdtvRBExyO%2F31xrHyo7UHP5nQsGbNsEfCzeeZr6FBNuxZWEdN%2BifQAym526x7V7SRr6Qq%2ByCpjj6W%2FDHVbjCuZz6DjgTD4s9zJBjqkAdZ0BHAq56aahFHLAR0%2FhROR%2FLh1006Xic%2B%2FzMAyDvWuULDFyZ5NeRaw5Re3oYsvUQlFmv44kT%2BjNpMmffsMhVFBJfZnHgIht2Zq9FYLSLlHk%2B1uhTRgTIhqIBHS2tp1PLj%2FKVWo%2F%2B58mAKC0QNIGRXdrkLFjrjw9qeyYzk2keKzfZfZkvkHckkdsaO7sP7%2FiwRL7eJ1jDss%2Bxua5kkA%2FaWU6vlT&X-Amz-Signature=789e209448ff7305d33737bfc4e9ee63b0a4e61a86240f61fb5720fbc20fa271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYECD2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl2r5DtDRbNtnipF3ybM2gOHWI7SqfW0Fn6Y2gr39pewIhAMNequLaSMKiQpUvCTP4u63d%2F3dJ7EpRXM5m42EWB9fCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUhNDOYgFOzDIOGywq3AM0stzdsp5tD2qFPbAbYQJfHFIEYghtQSRmuzU6totJrChcxoVs9L9AAhZGS3E3VngJQDg5tare25MavBtRKQw0G5oFRXpS9DJSjl8cAsX3CR39MelzQSzxCKl%2Fu%2FiylTmi%2Fiv1PIGyVPU1Egn5ip8TVxxHScCKQu1H%2BVfZIveZBdJJxtTZD5oOBOnBvFwQkrwREFuvXMW4OMj%2F5pQcRkhC3d2TGeQguxxQBGI9CjkcSBU6cMh%2B5kC8vyM0F1dZdvWyxo8lBZq4%2FPcWeannYLQV5%2BzZu8vrbvY6DHv3BAfQ2AFg%2BaBJzTZ1QTDIJ7nIg%2FlXssDM6IBeGL%2FV95z43MG20lJh4U2m%2F%2BebHh848kNbGniKESJiSYsiyReKgpvSO1Zd%2BJVizlebiMixAEy%2BNCr8I8VSQEMNGM2jxH1c0Wr7AioCIplxVI3IH9mg4XVaaM5UOkSTrR%2Bj6L7a9gsc5H1r0xBxFKo8iCj6mCXmhqRY%2BfNcyK9KcHk2F%2BWhDbw9Cdnr5aBqdLGatfM48vX8tZXfTEQuBqLV0pcdtvRBExyO%2F31xrHyo7UHP5nQsGbNsEfCzeeZr6FBNuxZWEdN%2BifQAym526x7V7SRr6Qq%2ByCpjj6W%2FDHVbjCuZz6DjgTD4s9zJBjqkAdZ0BHAq56aahFHLAR0%2FhROR%2FLh1006Xic%2B%2FzMAyDvWuULDFyZ5NeRaw5Re3oYsvUQlFmv44kT%2BjNpMmffsMhVFBJfZnHgIht2Zq9FYLSLlHk%2B1uhTRgTIhqIBHS2tp1PLj%2FKVWo%2F%2B58mAKC0QNIGRXdrkLFjrjw9qeyYzk2keKzfZfZkvkHckkdsaO7sP7%2FiwRL7eJ1jDss%2Bxua5kkA%2FaWU6vlT&X-Amz-Signature=c5fb68f32d330e9701d9ceba5926322954d02a1f064c9fde64da10fce35e56dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
