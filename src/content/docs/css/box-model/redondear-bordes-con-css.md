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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCPMV36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg1oAoXAOrW8JnciTTjjzHs3%2BoXB6bNLRyaDckWbr4UAiEAmSs2dthUksFZcfm8wpV21HSrsJxA8XSSzINNd4tHjTMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDzTMVT0O0l5bhISZyrcA6wsmFCsocO4KGnPeWs1R7%2FPh2jCcJy08d4%2F1kcJH4fBkmxQvkaQr4Jqi0jIed9lgOP9H%2BH3srdq5HRwjYmXQgZQzx4ijGe2o8SZjwtmhlUAOnu4lJ3eDKSYaw9QqeJmpmtPH3BaczKig5kAWIOyQMkOQB5mykNf9Qr43OIiaG9J9K94Js9hK05WJrCa%2BfI%2Bv6cJ01Mf7Rxj%2FMprL0xciBzZ0cBOhF%2F%2FufjX08Ve%2FDCGg1ztl%2FjC%2Fle53V5hP1RPew0J749t4Cyrlo2l2bOhBrwHMKnmQyBZ38CmQq71hLBfnfq4%2Fjwutu0GRJpjpDSwdDgndlzLOY5btVW3IKzdsedAdDQbc%2BH%2BwvhNL3JGaezecSBJ2GpvbW3gbT4l0%2Bi%2FtnOLOhMIIjwi3OiYH7rcQtsL90KsX7x60Xz7WeYPj6PmXnoAD1FTNbLIWGj84WLgAEPxeBXJQ3cSgzAjd9G5teGeFUusUTLtBNxz2u93sT8xkz9z5NfOJXtGhOg1RumutfRuTZFO5j9qTrYtwJ4b3fp1pSwggrIPESd0NhbeCTHxxkxab5zCnl51twzQ1gO%2FcKiEszC6XVfe8IBy2OBq%2BwOa192usr07yDSyFCKUlLud4wSMZaAafqC%2F447xMMHhisoGOqUBHsBDnJ8jvGSZ3NhAcNLwE%2FIge2v5Sjsd4Pe7a3yoa8xxAQk1UIMpmBnvr5KrIeoDdeTRa7ui82HVBfXjZTtrSpYkoohsRJPvAFjUMwj8sARHyjtdEgVfV0PDiN9j1fZyenYkQ9noFZpT1xkER8i1lgpV9c0%2FNHyiWaKSEdvsG%2Fut2ZevfIOCF2twzAMYwDIP1t5yWxYeql3BnKvWE%2FXieWWsDm0y&X-Amz-Signature=a81fac901a68b17d2885378b751bc2a67a9e65af821557e7b3b74223d95952d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCPMV36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg1oAoXAOrW8JnciTTjjzHs3%2BoXB6bNLRyaDckWbr4UAiEAmSs2dthUksFZcfm8wpV21HSrsJxA8XSSzINNd4tHjTMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDzTMVT0O0l5bhISZyrcA6wsmFCsocO4KGnPeWs1R7%2FPh2jCcJy08d4%2F1kcJH4fBkmxQvkaQr4Jqi0jIed9lgOP9H%2BH3srdq5HRwjYmXQgZQzx4ijGe2o8SZjwtmhlUAOnu4lJ3eDKSYaw9QqeJmpmtPH3BaczKig5kAWIOyQMkOQB5mykNf9Qr43OIiaG9J9K94Js9hK05WJrCa%2BfI%2Bv6cJ01Mf7Rxj%2FMprL0xciBzZ0cBOhF%2F%2FufjX08Ve%2FDCGg1ztl%2FjC%2Fle53V5hP1RPew0J749t4Cyrlo2l2bOhBrwHMKnmQyBZ38CmQq71hLBfnfq4%2Fjwutu0GRJpjpDSwdDgndlzLOY5btVW3IKzdsedAdDQbc%2BH%2BwvhNL3JGaezecSBJ2GpvbW3gbT4l0%2Bi%2FtnOLOhMIIjwi3OiYH7rcQtsL90KsX7x60Xz7WeYPj6PmXnoAD1FTNbLIWGj84WLgAEPxeBXJQ3cSgzAjd9G5teGeFUusUTLtBNxz2u93sT8xkz9z5NfOJXtGhOg1RumutfRuTZFO5j9qTrYtwJ4b3fp1pSwggrIPESd0NhbeCTHxxkxab5zCnl51twzQ1gO%2FcKiEszC6XVfe8IBy2OBq%2BwOa192usr07yDSyFCKUlLud4wSMZaAafqC%2F447xMMHhisoGOqUBHsBDnJ8jvGSZ3NhAcNLwE%2FIge2v5Sjsd4Pe7a3yoa8xxAQk1UIMpmBnvr5KrIeoDdeTRa7ui82HVBfXjZTtrSpYkoohsRJPvAFjUMwj8sARHyjtdEgVfV0PDiN9j1fZyenYkQ9noFZpT1xkER8i1lgpV9c0%2FNHyiWaKSEdvsG%2Fut2ZevfIOCF2twzAMYwDIP1t5yWxYeql3BnKvWE%2FXieWWsDm0y&X-Amz-Signature=6f179aa541b46001a95c78771570e1ad5cfd176b30fc5d6a0480adb42f1328db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
