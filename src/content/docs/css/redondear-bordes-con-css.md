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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLOWKNE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSFJBwr44KiMt46E8gv3bZiaP%2Be1pqv%2B3sYfLmq9nEgIgYz48l2oa4%2B3tCQg3Z8KCtr5x22AypNxLJVSTL%2BWZ6%2FAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0jgYIgXJ27bokF%2FyrcAzMsmxvAS%2FpyY%2FnPVHmjIhpF4%2FpuxWt0mwBBYElf%2FJ7RQui6VoZYKbPvlEdSkrNgi7RcZPpcWNmfN6bSS5a9cZSDplQ7MTR7%2Ba3x1njzrnSkcZGlzxk5rH42aOJITJHOs1IpVtut5CUUafc8e54FcvJIy6TTCV05R3e%2BegX0Hd3m5x%2BHDgAV3JLgkEq0GF5TLVBKUwuU62aM6bdQDVpGaCdSs6kqJ1t9rMSMfX2BhjeaoHbpMgJPtD3316GStXB0GEgEdkB%2Fx7n%2FjE47cB%2BIEIddunsUE%2BsFBEZE0pyK56CxnvR6V77Z6qmcPdz3p%2Bbva%2BEtSk4EqMJjpLGrUzbO2Y3nip04tyQcNkKkUUj4J3JJ3P0jswXaXAmSZ%2FbcdhUo6CzaZLo2mrFFjwrEsHFlJEM9BGCKtJKOCY4X9lhjaudFftVuwx%2B2gQYIuJgfuK5DTsyk8Glu%2Fxg%2F87Bqk1rxfX1EUIeITRrqb3job04xgz0zbRIavmj24f4MppprBhciayqp%2FSlD8hr6N1kGGchzLCEuxWxCdy%2BrVrY7kcAYUXBSAxqlpV%2FrLjZ1GQ4eCPwssawm3iOqAZ3tEb%2FZiq87CclDVYtpOSDar0jp0I279UrfWo3AZQZRTZaVcQX2MNKH38kGOqUBPpxNWFMDOaH6OC%2F72MLBfmpm8sgy3WuyYa3UxFBYQCRupBtrCDubSezdpxARkqZfGwuF%2F8JbWXtFfkrarWRBTizSmijQNgOPUkEutDQo6r3PsWlgln0qhWj1%2BzCJ5xD%2BXNjmnLpWR4zUybpVNrHa62d%2F2vbF9DuwdljLudIcUmD6QXCQL1%2BH%2FYrcep4WQAbxf4ahpQ9YgGo9kYatXJm9p00Ysx0d&X-Amz-Signature=c051435b1020d6c0922b763f5e8b5aff688da8c5c8ebbea5938f51ce63c6dbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLOWKNE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQSFJBwr44KiMt46E8gv3bZiaP%2Be1pqv%2B3sYfLmq9nEgIgYz48l2oa4%2B3tCQg3Z8KCtr5x22AypNxLJVSTL%2BWZ6%2FAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0jgYIgXJ27bokF%2FyrcAzMsmxvAS%2FpyY%2FnPVHmjIhpF4%2FpuxWt0mwBBYElf%2FJ7RQui6VoZYKbPvlEdSkrNgi7RcZPpcWNmfN6bSS5a9cZSDplQ7MTR7%2Ba3x1njzrnSkcZGlzxk5rH42aOJITJHOs1IpVtut5CUUafc8e54FcvJIy6TTCV05R3e%2BegX0Hd3m5x%2BHDgAV3JLgkEq0GF5TLVBKUwuU62aM6bdQDVpGaCdSs6kqJ1t9rMSMfX2BhjeaoHbpMgJPtD3316GStXB0GEgEdkB%2Fx7n%2FjE47cB%2BIEIddunsUE%2BsFBEZE0pyK56CxnvR6V77Z6qmcPdz3p%2Bbva%2BEtSk4EqMJjpLGrUzbO2Y3nip04tyQcNkKkUUj4J3JJ3P0jswXaXAmSZ%2FbcdhUo6CzaZLo2mrFFjwrEsHFlJEM9BGCKtJKOCY4X9lhjaudFftVuwx%2B2gQYIuJgfuK5DTsyk8Glu%2Fxg%2F87Bqk1rxfX1EUIeITRrqb3job04xgz0zbRIavmj24f4MppprBhciayqp%2FSlD8hr6N1kGGchzLCEuxWxCdy%2BrVrY7kcAYUXBSAxqlpV%2FrLjZ1GQ4eCPwssawm3iOqAZ3tEb%2FZiq87CclDVYtpOSDar0jp0I279UrfWo3AZQZRTZaVcQX2MNKH38kGOqUBPpxNWFMDOaH6OC%2F72MLBfmpm8sgy3WuyYa3UxFBYQCRupBtrCDubSezdpxARkqZfGwuF%2F8JbWXtFfkrarWRBTizSmijQNgOPUkEutDQo6r3PsWlgln0qhWj1%2BzCJ5xD%2BXNjmnLpWR4zUybpVNrHa62d%2F2vbF9DuwdljLudIcUmD6QXCQL1%2BH%2FYrcep4WQAbxf4ahpQ9YgGo9kYatXJm9p00Ysx0d&X-Amz-Signature=4ec40f286813484ea89805b6e8bf14e1e983993f4f81923a25d614acc06af6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
