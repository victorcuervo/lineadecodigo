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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFC47P6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpe4lhhj1KW%2FgzHVNefQj1W2WDGiH3u6ZMnZjoXFIU3AiEAwBahKiWOUXJSQlgYqKOOwuLZ0aUluykaknun2qCrXVQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDXQ0hJpDzI6Tzzv6SrcA9H%2Fv8yloDfRXC23mUHb9EDMAcz45EWwLJDnsjkMzNcetW4zcktPCn4rZCMFzCvld0ra6eYSxmBrxWgjp50AqJ%2FuBaKTw7nrRwf0RBYxS8xN%2F76GbvvL8z2oX1vCcp1AoHssw3L4WPwdWbEhpPHGMg0cteRe4H4bllK53WbY8wh%2Bnk1KsmRkRHAfRkJKV6QGncSnovAtmb2harxmMJdaXFmrcTyJUAMZT4%2BZ8UgJP%2FCY69OYwS8Unpyr67NsvRiw7ud4G%2F0J5bSW4gpgP90weVH9dNNC3y1ObmLwwioLs39216py1L5nJVe8SRLbiOMnAVOkfyMfb%2F0KfvRAzOUQEV1F7Lkg0mseGqeazoCgu9%2FBcISs1IRJpbmYweKRJUQBRr0lhCn5t6jboOOHUzuTJ1Se6tlYAlpkdTPtjBEDQsanqWHJpQMO7L6AHAdyuWQ1ZHolcc5xUbhxJ4zBLPFcNYZceDzVeDinSPdtvJi8vbG3p2feQqDFp9Clos14J9yjIJQfGfbRw8n%2FnTpYXh6MSvOSBGtmCmOtll6CVs5eA1MImCWMJ2BUCqMR%2BZEUcE%2F7tEcPhJHaPAbYRlp5ppiREK%2Fnx%2FGPG9fLff3LWiAu0noboqXxHbFzrrHK6ddEMIGqyckGOqUBi0qJs07LXJXFlmKTGCg4jata8MqCOITqgi8LqcL1hmcjJNE0CWb2jayRQZv1xHB2u5Wv1KJpsneL%2Fbf48d7mtdkssj9U2jgLOBEvgEE4wxHI8En17fABfl91y%2FvNuU0juEs4cgZHefruB7fXoaJGEeCoAZr7%2FBTooOB8STfLwSgqusKkQGcOf5%2BYPfDem%2F3ZUfvPOHLO2QstTpN51rp%2BBh28K8iS&X-Amz-Signature=5ef4964afbf6c8201e61d754edd5492a8690cbe0adce3fb03af59d58071e45d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFC47P6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpe4lhhj1KW%2FgzHVNefQj1W2WDGiH3u6ZMnZjoXFIU3AiEAwBahKiWOUXJSQlgYqKOOwuLZ0aUluykaknun2qCrXVQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDXQ0hJpDzI6Tzzv6SrcA9H%2Fv8yloDfRXC23mUHb9EDMAcz45EWwLJDnsjkMzNcetW4zcktPCn4rZCMFzCvld0ra6eYSxmBrxWgjp50AqJ%2FuBaKTw7nrRwf0RBYxS8xN%2F76GbvvL8z2oX1vCcp1AoHssw3L4WPwdWbEhpPHGMg0cteRe4H4bllK53WbY8wh%2Bnk1KsmRkRHAfRkJKV6QGncSnovAtmb2harxmMJdaXFmrcTyJUAMZT4%2BZ8UgJP%2FCY69OYwS8Unpyr67NsvRiw7ud4G%2F0J5bSW4gpgP90weVH9dNNC3y1ObmLwwioLs39216py1L5nJVe8SRLbiOMnAVOkfyMfb%2F0KfvRAzOUQEV1F7Lkg0mseGqeazoCgu9%2FBcISs1IRJpbmYweKRJUQBRr0lhCn5t6jboOOHUzuTJ1Se6tlYAlpkdTPtjBEDQsanqWHJpQMO7L6AHAdyuWQ1ZHolcc5xUbhxJ4zBLPFcNYZceDzVeDinSPdtvJi8vbG3p2feQqDFp9Clos14J9yjIJQfGfbRw8n%2FnTpYXh6MSvOSBGtmCmOtll6CVs5eA1MImCWMJ2BUCqMR%2BZEUcE%2F7tEcPhJHaPAbYRlp5ppiREK%2Fnx%2FGPG9fLff3LWiAu0noboqXxHbFzrrHK6ddEMIGqyckGOqUBi0qJs07LXJXFlmKTGCg4jata8MqCOITqgi8LqcL1hmcjJNE0CWb2jayRQZv1xHB2u5Wv1KJpsneL%2Fbf48d7mtdkssj9U2jgLOBEvgEE4wxHI8En17fABfl91y%2FvNuU0juEs4cgZHefruB7fXoaJGEeCoAZr7%2FBTooOB8STfLwSgqusKkQGcOf5%2BYPfDem%2F3ZUfvPOHLO2QstTpN51rp%2BBh28K8iS&X-Amz-Signature=d8613d7073d80c5c2ac6a0a57808f98cddc1e3563f4de81ad0b8ea80085705f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
