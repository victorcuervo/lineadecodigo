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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q62SFNZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1vcivEg%2BrXbGRCnOJmpVPNME5jFPa%2FNtBGfpiItBYkAIhALdQ4E7lXCuqu7ls0kvsFUAJtURGdJI5sCbZ9U9L0Z6AKv8DCEYQABoMNjM3NDIzMTgzODA1Igz1KB%2FY3IvHVoHZmt0q3AMXeV0DUdDm7FK4CQ4HZotBR2kxOhwF7WlAS46blkqELEyDVmVUMI7Fu%2FP4HLuYTm5FmE1usF3WbZRi42yFLiavfuHx4ho01robxp6VvzAbTNgJj%2FTX5KtSPlywtroqZkzzGAU7qXwBmlZv%2Bh%2F2fpOsHhwXi4KylJZVFnBMLjiwjbGMfICjeVkapezccfT%2F%2FlKCzZXb9nJYqFSi8bNa2sKEx%2FmAC7YPj%2FIbdypcGluJOwpVGiDCViSjjCDHeko1P69WqZvbFSM78CBJ97B8tLIsjKuxGVu2X5FqVtvKKrJjOKAxusqKhtq4NaGwVY0sUTdl485FbyUDv6%2B48xLX0hI1JXVvYyM1fwbvBraM3lqojzznx5kPVaGIKHQrMXugFtaF4lbVFjW%2BdSu00CXpuyXjzmF5jKF%2BOCl%2B8F8EiwiuHNQd2%2BGsuESJKde3ORTJj9dXH2ljYr0dtM%2FnqZjgmsrYLnMa1I9mu5h1gXDIFhYgc%2B%2FZFnt83U2gfa1oC4T2p%2F6eQxjwXH0NOTsZdvlMto9g2r5WJIWKSGP58RqNVERdSbKKjvkm1CzUAW55XW0LEW2ts4AolVY89qAMeVRqF%2BapS7cZmX%2Be5N9PR7%2BJAN7SIQCHXCWNTtjC7lmZ0zDjg8bJBjqkAevwYV13%2B13x%2FuoSyjKkGTe0RttibuT%2B6UB%2BOEhtvbPp93vrijc04OyuTT9fJoU2LO6NlJgdTCkmDK7x805YPl7R%2FPRV6K8Hs3KMj7yMlujDgYUaQogt%2FqdgrtUELuF%2FQm%2BvBKxVBu9iwpKEOMrAPMhpXbpXPJwt4e6ujmKaK3um1cTy967FqB0iOZ7WYSuMbZfelNLvoaC8W9wVPO%2BLwtJ3Bfcq&X-Amz-Signature=9c54c4e5e2d50c79a1c9d1f15a23a22e30d64885792636a20405ca76c75f60ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q62SFNZ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1vcivEg%2BrXbGRCnOJmpVPNME5jFPa%2FNtBGfpiItBYkAIhALdQ4E7lXCuqu7ls0kvsFUAJtURGdJI5sCbZ9U9L0Z6AKv8DCEYQABoMNjM3NDIzMTgzODA1Igz1KB%2FY3IvHVoHZmt0q3AMXeV0DUdDm7FK4CQ4HZotBR2kxOhwF7WlAS46blkqELEyDVmVUMI7Fu%2FP4HLuYTm5FmE1usF3WbZRi42yFLiavfuHx4ho01robxp6VvzAbTNgJj%2FTX5KtSPlywtroqZkzzGAU7qXwBmlZv%2Bh%2F2fpOsHhwXi4KylJZVFnBMLjiwjbGMfICjeVkapezccfT%2F%2FlKCzZXb9nJYqFSi8bNa2sKEx%2FmAC7YPj%2FIbdypcGluJOwpVGiDCViSjjCDHeko1P69WqZvbFSM78CBJ97B8tLIsjKuxGVu2X5FqVtvKKrJjOKAxusqKhtq4NaGwVY0sUTdl485FbyUDv6%2B48xLX0hI1JXVvYyM1fwbvBraM3lqojzznx5kPVaGIKHQrMXugFtaF4lbVFjW%2BdSu00CXpuyXjzmF5jKF%2BOCl%2B8F8EiwiuHNQd2%2BGsuESJKde3ORTJj9dXH2ljYr0dtM%2FnqZjgmsrYLnMa1I9mu5h1gXDIFhYgc%2B%2FZFnt83U2gfa1oC4T2p%2F6eQxjwXH0NOTsZdvlMto9g2r5WJIWKSGP58RqNVERdSbKKjvkm1CzUAW55XW0LEW2ts4AolVY89qAMeVRqF%2BapS7cZmX%2Be5N9PR7%2BJAN7SIQCHXCWNTtjC7lmZ0zDjg8bJBjqkAevwYV13%2B13x%2FuoSyjKkGTe0RttibuT%2B6UB%2BOEhtvbPp93vrijc04OyuTT9fJoU2LO6NlJgdTCkmDK7x805YPl7R%2FPRV6K8Hs3KMj7yMlujDgYUaQogt%2FqdgrtUELuF%2FQm%2BvBKxVBu9iwpKEOMrAPMhpXbpXPJwt4e6ujmKaK3um1cTy967FqB0iOZ7WYSuMbZfelNLvoaC8W9wVPO%2BLwtJ3Bfcq&X-Amz-Signature=40deb12504a65f3d057d0e173d2bf2d541d486907012ba68f9241da49ca2fc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
