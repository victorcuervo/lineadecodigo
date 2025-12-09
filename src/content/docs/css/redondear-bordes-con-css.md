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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFZJ6ZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTVOigBX1SjQdNgpO33Zgw1P90XmW8jbQaMfJNpy8LAAiEA65%2BNWOEzbpE6cjojcnP3mI7ftbQPLm%2F9ABTLrX3D0J0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeyws10JB%2BaaQuT7CrcA%2FqfpebXWmCwYtP375NuT6ybK4n7%2FIYNgypf%2FJXXn71xfArhjyUOhSJh5%2Bu7NfjSNMlVEaZHqrfPtMilgZ7CoZKL8NDFc6lHmsruDFN1kHba9yIQFtMEDMq6gJ8QlHQSvQxW2avGN4Blf1JeMLveogirPcLGb0D4I6i9dqMJGw7bqvpHylS8rNN%2BAKYt8Yzkn1lRDC%2FBAC3i3WAiZJXdDJNFcu3dfXLerngdiA0wtc4GTTngoB3mVaZ5SOUshGDQGKJv9f9mQAJTUuDvFpcKLc7Vk0P2zAfEdgLOp%2BwW1yIhGgK8InaXn6u3q9rMh5NaCa05F3I6fPoA17QOv4Ig14vJg5d%2B4GUy57XpqeWB7mr5Hs174njVotZQVKZOUvHXrNdMKlHTGfBBkuxrQh3konH%2BEFvxBDxe8WqEQvzhyQc9QlJSbTLnBQPVNX6nU7AIlHjt47HQ0LV8sCIV422Xh9ZOVzH6icwXO1SCwowBhIZYs%2Fu6UqRB9jYeCiIPw%2F4yhHa4A47jTsaXwW8S%2FuaxK%2FDAGAZeMJl5mKNV7D%2F9xhU80IjXCD76se6MCIXKxGC6XaiX7LUaFEnBCFUgE11hRnG13hqiyoB8Qtt0%2Bhx%2BZSWt4C9nbw2Hc1wCJ3JcMJHF38kGOqUB1ygwwAfA94IdKGYEPyIcY5S84in9%2FcmhARKzETl86i5TQgjiJYXujtgY6f9KEzsTC4x3tULiaDadz4swFSVwsVoFPqf3TEV6Wq4g1i8MLM4rKdfHZnjD68sqp%2BzpXobLKkM4p%2BIGrhlTrPqmlbWqxAcpuR7MSG%2FuLap2qC0IfsAmqLBzGMYZIwFFHU%2FOdaboKc58mef8E46kAKUyMtFHWOGtuXCP&X-Amz-Signature=97c7e1c4d25142a1e22effff9b0ccc4b35516042852c37945a3235a5dca07072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFZJ6ZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTVOigBX1SjQdNgpO33Zgw1P90XmW8jbQaMfJNpy8LAAiEA65%2BNWOEzbpE6cjojcnP3mI7ftbQPLm%2F9ABTLrX3D0J0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeyws10JB%2BaaQuT7CrcA%2FqfpebXWmCwYtP375NuT6ybK4n7%2FIYNgypf%2FJXXn71xfArhjyUOhSJh5%2Bu7NfjSNMlVEaZHqrfPtMilgZ7CoZKL8NDFc6lHmsruDFN1kHba9yIQFtMEDMq6gJ8QlHQSvQxW2avGN4Blf1JeMLveogirPcLGb0D4I6i9dqMJGw7bqvpHylS8rNN%2BAKYt8Yzkn1lRDC%2FBAC3i3WAiZJXdDJNFcu3dfXLerngdiA0wtc4GTTngoB3mVaZ5SOUshGDQGKJv9f9mQAJTUuDvFpcKLc7Vk0P2zAfEdgLOp%2BwW1yIhGgK8InaXn6u3q9rMh5NaCa05F3I6fPoA17QOv4Ig14vJg5d%2B4GUy57XpqeWB7mr5Hs174njVotZQVKZOUvHXrNdMKlHTGfBBkuxrQh3konH%2BEFvxBDxe8WqEQvzhyQc9QlJSbTLnBQPVNX6nU7AIlHjt47HQ0LV8sCIV422Xh9ZOVzH6icwXO1SCwowBhIZYs%2Fu6UqRB9jYeCiIPw%2F4yhHa4A47jTsaXwW8S%2FuaxK%2FDAGAZeMJl5mKNV7D%2F9xhU80IjXCD76se6MCIXKxGC6XaiX7LUaFEnBCFUgE11hRnG13hqiyoB8Qtt0%2Bhx%2BZSWt4C9nbw2Hc1wCJ3JcMJHF38kGOqUB1ygwwAfA94IdKGYEPyIcY5S84in9%2FcmhARKzETl86i5TQgjiJYXujtgY6f9KEzsTC4x3tULiaDadz4swFSVwsVoFPqf3TEV6Wq4g1i8MLM4rKdfHZnjD68sqp%2BzpXobLKkM4p%2BIGrhlTrPqmlbWqxAcpuR7MSG%2FuLap2qC0IfsAmqLBzGMYZIwFFHU%2FOdaboKc58mef8E46kAKUyMtFHWOGtuXCP&X-Amz-Signature=ac3ab390fb1acfcf99a97539aa95127eae6e822ef11a987097d48bdf27d5d6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
