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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXDA3SG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkgUE4IeWHzISBAendh%2FHd2lLwI8Fq7sHjY%2Blp0ITA1AiEAzQ37uGzWx5ZkWtu6XdnUVtn8LagSW7GLTgreZCDZFUUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkm8qLfmRik3IFIXircA%2FVUqYiE1bP4oG2JsO46byDdJg8qoRufNHTb5pcZC4aSy5bW8iGrUe9KjL4rq2W%2FPe7zWesp9aXEEF2xuaPMzPQPRTr7gQ6Eh4f2KvLeBVADm8Iih%2BJaBmADnKAfF9lM37xja7oc461vajBGkpKKgqIcXIWzGAbOrInLTYGFL0mVp%2FLCN%2B589ar7gbTD2H1YAi5sDmTu%2F2ApbohhawDWMddq5biOUdggva9qxsTLVHKPXaNWsSQnv%2Bkzm7XWle7JnMNwQCIPeK7gsiS2HOCSXQ%2F8ba%2FtJKD8JaaEL%2Fits1n4Nh8dePYGfZiR9bcU9Wa11snDUw96yRvrpMWM0b9VWg9hCdxMM%2Bp4qzcwQA%2FQDpQ6erSEbAawLbpYNRafhXYapB3TaVqN9g2gtnhi3fvp5E8uJOAmkbAkK07Mo9py21YF7%2F3aba79yXVixi0%2FTktQpSOCKDM%2F5ioxiA0M%2FqaBt0Zjw5XNxaJLexb7TicsbZiui3flI6%2FzxueOHAkDjHzpdqgfequvydSJRrnNnNTgixoMg8sdvbo%2BVc24avQ%2B0IeTW17uzu1Dwy1yiUW7FOcpQrDhQNxdnPkLBnRm%2BO%2F%2Bv3h%2BXGCqp8Q%2FT%2Fz5naTsCAgUQuJS0oUpYe2VpN9EMLf02skGOqUBJnYiI6JMub1oSvymqZEnyBUaJVVUZC6oUIfQf9vb1D0LXOotZOje1xW%2BClaxw0cGTg1Aw1JAR70NSfW5GexWBA4lSbH1UzseDFYPY6p3SW7WZaUp6D0A%2BBsveiVrvqHXB2aeBI1j6D0NElMW5gZ05F0fIZ9lX5dzo9xOsGPS3yOUAk%2FZtDTpmOTS%2F4Jf%2FNekiH7WJMtG4TaKYX%2BwxptpD0s1YR7a&X-Amz-Signature=ce8efb6e16fae36f5563aacdf785729d47e39e0334ed8a09616e67284c3c5b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXDA3SG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkgUE4IeWHzISBAendh%2FHd2lLwI8Fq7sHjY%2Blp0ITA1AiEAzQ37uGzWx5ZkWtu6XdnUVtn8LagSW7GLTgreZCDZFUUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkm8qLfmRik3IFIXircA%2FVUqYiE1bP4oG2JsO46byDdJg8qoRufNHTb5pcZC4aSy5bW8iGrUe9KjL4rq2W%2FPe7zWesp9aXEEF2xuaPMzPQPRTr7gQ6Eh4f2KvLeBVADm8Iih%2BJaBmADnKAfF9lM37xja7oc461vajBGkpKKgqIcXIWzGAbOrInLTYGFL0mVp%2FLCN%2B589ar7gbTD2H1YAi5sDmTu%2F2ApbohhawDWMddq5biOUdggva9qxsTLVHKPXaNWsSQnv%2Bkzm7XWle7JnMNwQCIPeK7gsiS2HOCSXQ%2F8ba%2FtJKD8JaaEL%2Fits1n4Nh8dePYGfZiR9bcU9Wa11snDUw96yRvrpMWM0b9VWg9hCdxMM%2Bp4qzcwQA%2FQDpQ6erSEbAawLbpYNRafhXYapB3TaVqN9g2gtnhi3fvp5E8uJOAmkbAkK07Mo9py21YF7%2F3aba79yXVixi0%2FTktQpSOCKDM%2F5ioxiA0M%2FqaBt0Zjw5XNxaJLexb7TicsbZiui3flI6%2FzxueOHAkDjHzpdqgfequvydSJRrnNnNTgixoMg8sdvbo%2BVc24avQ%2B0IeTW17uzu1Dwy1yiUW7FOcpQrDhQNxdnPkLBnRm%2BO%2F%2Bv3h%2BXGCqp8Q%2FT%2Fz5naTsCAgUQuJS0oUpYe2VpN9EMLf02skGOqUBJnYiI6JMub1oSvymqZEnyBUaJVVUZC6oUIfQf9vb1D0LXOotZOje1xW%2BClaxw0cGTg1Aw1JAR70NSfW5GexWBA4lSbH1UzseDFYPY6p3SW7WZaUp6D0A%2BBsveiVrvqHXB2aeBI1j6D0NElMW5gZ05F0fIZ9lX5dzo9xOsGPS3yOUAk%2FZtDTpmOTS%2F4Jf%2FNekiH7WJMtG4TaKYX%2BwxptpD0s1YR7a&X-Amz-Signature=cef1d62cda7d87f8a60d330993cfbf3e4ea0f824532ba9b7cadbddf29d066d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
