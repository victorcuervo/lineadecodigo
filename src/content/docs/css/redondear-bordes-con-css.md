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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZW7QDA2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUpPW4PV8IWJp4%2Bdq1JkmFE2MvGCREjpkTQOpnSnfx%2FAiBVLdVpV%2BPl53JOq80BvKBW0h8Vgix8pp9mKkEKjwW3NyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F8Ruca%2B7nbAkCI5DKtwDv1s1gdERF%2FvKrLnnxEZnfDI1oncYlRDn8FRLuC%2B2iLYzq6alTZjf1yxJWYc2%2FsHVKfcc76zro5Gd145U6L40sGKOs0r0cRrsy6E4jResdasySxzFQRsp4fB4EW%2Fl26QPUUighvURdra%2BVssavQVgLVkQWyV6WhDNMsUmgiR1kENpisMMV%2BDfAqxgAy1QTgOPtMAFCCcsTgjdlWYgASXfugLZe1LpKt5pDw3JNun5CgolA%2FobxuoXW2XWsPXjKsITWAjhnyEUV9GbWBSgc3KtMvGmlKUP7nYAzR8q128BrXzizeqpetBpfmFD7plkWq8GAEo%2BuiDIoCtOCVLKqb3oycAbpHTuH2WLZSorf%2FTVvBe6NjOZpzvNGaon3ZxEOUFvB7A4x1LTSFRCK6RIxsobjLMH6opj1tK0WxAsLQA7YmjNx%2B5nye92HbfNyO5nkJB7HScz%2B0OxqCI3m%2Fq1B3Ofh8NPat8g%2FBXcoKh4G9RwKyvt8VFXo2EjHpieBDQWnkRBu4PtvBq3R%2Bcl9onRVgKu5X0swppVXH9gD2hqkBdgFmRpeZgZOZ5jlEmTGnTGQUOqflkMeE6UW1sMM1tySQZPEMnWq3WCYy2I6nkjZpo4T082%2B3b7gksvgSZHO2cwq%2F3SyQY6pgGYUMXASkCPyAmNgs2NNT2OpVqhn7rKyBhLIWLePJTpkVQOVippxd8xRZo%2BGYKS4DeLk%2BmnwRaeF1EOXg6Ziny4RqgbHAyUrSL7WDm%2FrD9eHc5rBIPgWAb%2BW6kr2TuIqYMQcKNJqB%2FSybxY0PtUPUQ2pLXgjeeGEeZVkWbRqFFdEiT0wkF1zRJAhlXnvkJme1ryHtszAhKtcQvubMitHUuyKhC498aU&X-Amz-Signature=5f00d0340e0065ef2ed8be12d25be77945abf4257bacabad9b47ed8eccc12490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZW7QDA2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUpPW4PV8IWJp4%2Bdq1JkmFE2MvGCREjpkTQOpnSnfx%2FAiBVLdVpV%2BPl53JOq80BvKBW0h8Vgix8pp9mKkEKjwW3NyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F8Ruca%2B7nbAkCI5DKtwDv1s1gdERF%2FvKrLnnxEZnfDI1oncYlRDn8FRLuC%2B2iLYzq6alTZjf1yxJWYc2%2FsHVKfcc76zro5Gd145U6L40sGKOs0r0cRrsy6E4jResdasySxzFQRsp4fB4EW%2Fl26QPUUighvURdra%2BVssavQVgLVkQWyV6WhDNMsUmgiR1kENpisMMV%2BDfAqxgAy1QTgOPtMAFCCcsTgjdlWYgASXfugLZe1LpKt5pDw3JNun5CgolA%2FobxuoXW2XWsPXjKsITWAjhnyEUV9GbWBSgc3KtMvGmlKUP7nYAzR8q128BrXzizeqpetBpfmFD7plkWq8GAEo%2BuiDIoCtOCVLKqb3oycAbpHTuH2WLZSorf%2FTVvBe6NjOZpzvNGaon3ZxEOUFvB7A4x1LTSFRCK6RIxsobjLMH6opj1tK0WxAsLQA7YmjNx%2B5nye92HbfNyO5nkJB7HScz%2B0OxqCI3m%2Fq1B3Ofh8NPat8g%2FBXcoKh4G9RwKyvt8VFXo2EjHpieBDQWnkRBu4PtvBq3R%2Bcl9onRVgKu5X0swppVXH9gD2hqkBdgFmRpeZgZOZ5jlEmTGnTGQUOqflkMeE6UW1sMM1tySQZPEMnWq3WCYy2I6nkjZpo4T082%2B3b7gksvgSZHO2cwq%2F3SyQY6pgGYUMXASkCPyAmNgs2NNT2OpVqhn7rKyBhLIWLePJTpkVQOVippxd8xRZo%2BGYKS4DeLk%2BmnwRaeF1EOXg6Ziny4RqgbHAyUrSL7WDm%2FrD9eHc5rBIPgWAb%2BW6kr2TuIqYMQcKNJqB%2FSybxY0PtUPUQ2pLXgjeeGEeZVkWbRqFFdEiT0wkF1zRJAhlXnvkJme1ryHtszAhKtcQvubMitHUuyKhC498aU&X-Amz-Signature=f6ff4a576346887360df7faf2772016820632895bdf71a188bd16d910f95317a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
