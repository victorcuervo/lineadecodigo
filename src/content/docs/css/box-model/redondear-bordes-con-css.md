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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNMM3CC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ4A3Ov%2Fm9e7gu0r2WPTaBr67oXTGe55F8%2B0SWFeuoaAiEAvEo%2FXYzw1cpUU20OiNMUYmFf%2BpXQOpoPoTh2AweU3ycq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL9zojakt46ZyKuS4yrcAyGRkIjDPx9lrCtoRzibYADGw4nrp1FGIbLd%2FpmnTmTccUa9b%2FvAw5okTQR%2FxljfcwTGpEntSR40pstbKdGjcwCZJtW%2BkVtF7%2F9M0mVbun9Rj8pJZPRW5ho55yW4BhT7hTupOnkf0vmpHXHtCW%2FeGl11yzyW8%2FMlG0IDpV%2F8e4Ma%2Fqavy5kulX%2FfqyPrcWG4kbqxHIPpaGPPzlabRCapWV04bVH02WF00Pf4HCC9WVBuzB5a5R%2BBhBlV8%2B80UawDNXBIxzjZ7vHMp4pN%2FOs73F6gtRMwF2yuu2CFTyVzUF9O7uPdbKjOAAwUPlDcnNe5t5I7c%2FDSX0cwrQHkw53bsfCBkt4hyl%2Bx85hXx%2BXy2zCep079P2n0MKhAPbobDq%2FjyT0%2BNF35odgu%2B1Woc16lG%2BAAInNjzF0RgspMFHf55zk3lqavsoTJOTtYBImzray83QAZrQTwROJOEUMXDmMWGPG6lYUlHE%2B19Mt08tZQNWRwzME8O%2F9T7LskV7JmCNNTRKT%2FUdsiNHYMyJjbwkoSirWwp1MjezhIxRSmqMKEpRPwIrqKVn%2BryehxS99ghWmOFMxFxD88gafOiKV61HsA4Ni%2Bbvam0E0UdJmlcQ6wtb75lVCmoIwsoVkX7F0AMIvfh8oGOqUBMxgUlegg8qyKI%2BrQsU8arqwoysWLz68pvRtYtzQAPf669LsIOMbO1tc9KuCcRe%2FulGQpQuZLrD2l4YhYBa6hflltB%2FoSbS3%2Ble3rhwXUw5RkbVPRhCoyUFSm112LcFejrRKQYw26ccRJonC%2Bf8ItOh5ntXMJtpFrhzpYE50lTJTQzmuAy7aFi%2FwwkPVFqJETU%2F9HNdhfXhvrJWsB0I%2FCOrwnhHBK&X-Amz-Signature=fe9058d52f93e914aa958def3d59bbbc6069d0626b49d017079afdb4860cfde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNMM3CC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ4A3Ov%2Fm9e7gu0r2WPTaBr67oXTGe55F8%2B0SWFeuoaAiEAvEo%2FXYzw1cpUU20OiNMUYmFf%2BpXQOpoPoTh2AweU3ycq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL9zojakt46ZyKuS4yrcAyGRkIjDPx9lrCtoRzibYADGw4nrp1FGIbLd%2FpmnTmTccUa9b%2FvAw5okTQR%2FxljfcwTGpEntSR40pstbKdGjcwCZJtW%2BkVtF7%2F9M0mVbun9Rj8pJZPRW5ho55yW4BhT7hTupOnkf0vmpHXHtCW%2FeGl11yzyW8%2FMlG0IDpV%2F8e4Ma%2Fqavy5kulX%2FfqyPrcWG4kbqxHIPpaGPPzlabRCapWV04bVH02WF00Pf4HCC9WVBuzB5a5R%2BBhBlV8%2B80UawDNXBIxzjZ7vHMp4pN%2FOs73F6gtRMwF2yuu2CFTyVzUF9O7uPdbKjOAAwUPlDcnNe5t5I7c%2FDSX0cwrQHkw53bsfCBkt4hyl%2Bx85hXx%2BXy2zCep079P2n0MKhAPbobDq%2FjyT0%2BNF35odgu%2B1Woc16lG%2BAAInNjzF0RgspMFHf55zk3lqavsoTJOTtYBImzray83QAZrQTwROJOEUMXDmMWGPG6lYUlHE%2B19Mt08tZQNWRwzME8O%2F9T7LskV7JmCNNTRKT%2FUdsiNHYMyJjbwkoSirWwp1MjezhIxRSmqMKEpRPwIrqKVn%2BryehxS99ghWmOFMxFxD88gafOiKV61HsA4Ni%2Bbvam0E0UdJmlcQ6wtb75lVCmoIwsoVkX7F0AMIvfh8oGOqUBMxgUlegg8qyKI%2BrQsU8arqwoysWLz68pvRtYtzQAPf669LsIOMbO1tc9KuCcRe%2FulGQpQuZLrD2l4YhYBa6hflltB%2FoSbS3%2Ble3rhwXUw5RkbVPRhCoyUFSm112LcFejrRKQYw26ccRJonC%2Bf8ItOh5ntXMJtpFrhzpYE50lTJTQzmuAy7aFi%2FwwkPVFqJETU%2F9HNdhfXhvrJWsB0I%2FCOrwnhHBK&X-Amz-Signature=2f7120a1258129bb8a700fc1eee3c3972e3358d5b2b8b7c51188238a8f0fa5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
