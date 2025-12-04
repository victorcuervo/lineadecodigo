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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRFLKNV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDgzcdblpH%2ByEcA6KzBNWjVgehTYPWwEF5d%2FsAXEZQ%2BSgIhAP90O3UgjYBElySTbS%2FHTTaTfTn7olwTEbySi1Izo%2B1OKv8DCEUQABoMNjM3NDIzMTgzODA1IgxbDpeZhom2KHWpzMIq3AOa6QZGEy8aYQ9g9Kx4G1jTjZaixzvSWuA0qyXur7Vulvp%2FT94scG%2B7Am7LQh%2B86LBq7wosMfiQ04xqkyEU5%2BXY%2B5eOewQDhHyW%2B7DtRL6Lbf5W67xISK8S1YpaoWbN9uTSwHUZHvdWmMeDdW1SQ8flyazjapuIDYnxYVrEnKM2MvaClsoi%2F3BOpfbKACh%2F%2FVFAyRWv0YuNCYvKHPbinEC%2BLL9%2Bx0tZdX72rUqHEdd%2B50YjvY43wR6gorjnk3lFtuMCSgXdSC1YR2FgnD8FQjHElPKWgl2XF4poHhH%2Fmpqzt2ZBUOpW5OzzSKp%2BtY2kChPW1Aamyu8bCBYiZ01eOHWCNRrvqd0dP4oNyCi%2BIY9r%2ByuUcCIoRsoFnOzIbeW7NczbhQEKVQ8FHWW9fjD744Y5Xmo%2B9Mgwkni0TQ1JrynSp6f9ESEah8C3j0OXLKprkCdDkafnmm0lUU38ilSLC4fdwprjUZmX2E2hfvgLYshKOyxY0rp5LgkP%2FKX23N24EiGWLFIBpsbrO7NfvyAWv%2BEL%2BYPf9QbvGrDhjJWmHXwgmDzs54ZfRaMSnP3KOhJhzjtn7fk7jgXAqBBLjSnb5rgsmhRdcvW0xRdsLnRBpTFXsLUFfNiqFyd%2B1N246zDY5sXJBjqkARwSYPqd%2FBps%2B3nvxoSBvo8zFnkkWnbE3TC4TVStPMfMRl%2FR2vZXgA51s5RmphFs1E8tbhvJzU5ssHdtXO%2BSu31SC8abxWlxmfFITRHqpxpbCaML4%2FG%2Bc0IjMrwHnkfNCbkrlL4Iv9mh4hi2fVCYVTA2%2BYDQ90xinaRVxAk7rpNTUUnZQmELd29QhoP4rc6FPWjjd%2B%2F8duLi1eupM6R6hQOOy%2FYm&X-Amz-Signature=2369011820b013c96736886ac235fefa579d30b7be677b9a94a8ffc25152f22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRFLKNV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDgzcdblpH%2ByEcA6KzBNWjVgehTYPWwEF5d%2FsAXEZQ%2BSgIhAP90O3UgjYBElySTbS%2FHTTaTfTn7olwTEbySi1Izo%2B1OKv8DCEUQABoMNjM3NDIzMTgzODA1IgxbDpeZhom2KHWpzMIq3AOa6QZGEy8aYQ9g9Kx4G1jTjZaixzvSWuA0qyXur7Vulvp%2FT94scG%2B7Am7LQh%2B86LBq7wosMfiQ04xqkyEU5%2BXY%2B5eOewQDhHyW%2B7DtRL6Lbf5W67xISK8S1YpaoWbN9uTSwHUZHvdWmMeDdW1SQ8flyazjapuIDYnxYVrEnKM2MvaClsoi%2F3BOpfbKACh%2F%2FVFAyRWv0YuNCYvKHPbinEC%2BLL9%2Bx0tZdX72rUqHEdd%2B50YjvY43wR6gorjnk3lFtuMCSgXdSC1YR2FgnD8FQjHElPKWgl2XF4poHhH%2Fmpqzt2ZBUOpW5OzzSKp%2BtY2kChPW1Aamyu8bCBYiZ01eOHWCNRrvqd0dP4oNyCi%2BIY9r%2ByuUcCIoRsoFnOzIbeW7NczbhQEKVQ8FHWW9fjD744Y5Xmo%2B9Mgwkni0TQ1JrynSp6f9ESEah8C3j0OXLKprkCdDkafnmm0lUU38ilSLC4fdwprjUZmX2E2hfvgLYshKOyxY0rp5LgkP%2FKX23N24EiGWLFIBpsbrO7NfvyAWv%2BEL%2BYPf9QbvGrDhjJWmHXwgmDzs54ZfRaMSnP3KOhJhzjtn7fk7jgXAqBBLjSnb5rgsmhRdcvW0xRdsLnRBpTFXsLUFfNiqFyd%2B1N246zDY5sXJBjqkARwSYPqd%2FBps%2B3nvxoSBvo8zFnkkWnbE3TC4TVStPMfMRl%2FR2vZXgA51s5RmphFs1E8tbhvJzU5ssHdtXO%2BSu31SC8abxWlxmfFITRHqpxpbCaML4%2FG%2Bc0IjMrwHnkfNCbkrlL4Iv9mh4hi2fVCYVTA2%2BYDQ90xinaRVxAk7rpNTUUnZQmELd29QhoP4rc6FPWjjd%2B%2F8duLi1eupM6R6hQOOy%2FYm&X-Amz-Signature=6b508a3d16bcb55f3c60f24d45a641b3770a31e8949e20b9f7361c3c6264ec2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
