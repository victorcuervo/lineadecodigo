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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWLE7HB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0kzjc8CeASw%2F8lxAmic%2FD2Lyi8gfVGVryTHPfEVbuBAiEAz0Iyzjqp1t21RVoNgzavt%2FvWdCCyb0IZ1vDvIttAsM8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD%2BXgW00NrOT%2B7%2FnCSrcA6qlWF7JDKp%2FuCD%2FtRWFv1tkyXBliopmiBlHsHRQpOuo2NvJp00eCbIDyU2VDSY8Y9kDylmCbNWILrcQORPlARB4mUcL9JUHASuS5JoXwbguPS1TWJV62kjIpiML7e%2BiE4kTe4H4ZfsExp%2BnOwbmk8LKKH17i%2B7HLfmQFpaPfbVdZjvV1XcU35iCV15V%2Bw0HO887G9Rdw5sJGuo3XyZMJodaZIMRy4K3pfYhXOO7xyBVhc9LMxqtVoAZQkn3wbdJ2X3BDxX0RK7%2B3TmJNShTczBMrm56FibtjYON7n%2F8CaAecc%2F9rdS%2FIrWctcaG87z7yfy5JhvBwUmovLMhunMgmLRbdTpOedhMro6BeT5PJa%2Fs0nmBrntI4J0x0n7lkYFeqFBtd2IU9bjPyIJNr43JfiBqUi8ZSEZjI72b0p2Wtiphej35CXGECLYCzmIlYv90I6ltVnWxVYSSoBIl6PeZxmSmN5%2FGKRnp0IK0ui%2FwqzrpzCknVG7RJ%2B1JGFWWa4QHGOgDkXeUhdxqNCUsWixp4S3LP3p83K%2F5UJLRAlS%2F9HZyg%2B%2FfdAiiYfu%2Bzs9dAPDcajhr%2Bqt7aZ1WZ7Rg7WGjqlIhZ6Xbf0ANyffju6x9wTkWk5RPrTe5eihSJuU0ML2MyMkGOqUB38hwhukyXvyyVVj6zbbLZp%2FWr0vDJvPqWCDBrr4EVsvreWfwbBY08MHHZtN5yrG5gQzyx2W%2FRYOvrjda5NJl4SKaMlZg73%2F%2B%2FVkDPJsOJgXYaaI2ae6OiTHAq4870vqjf9Sd8bwe%2BGyaZRngNWn4Od1mbF1wHouaMu6wopL9OXeDcitSR3Lw8bzrTUIbWypc6EiACE22GPEa8bDbRG4KN1BLWkAs&X-Amz-Signature=b388fd162c2e6d0e6409a1ac063c2d78efc0fcbaf7886bc836e9fc2586be2b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWLE7HB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0kzjc8CeASw%2F8lxAmic%2FD2Lyi8gfVGVryTHPfEVbuBAiEAz0Iyzjqp1t21RVoNgzavt%2FvWdCCyb0IZ1vDvIttAsM8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD%2BXgW00NrOT%2B7%2FnCSrcA6qlWF7JDKp%2FuCD%2FtRWFv1tkyXBliopmiBlHsHRQpOuo2NvJp00eCbIDyU2VDSY8Y9kDylmCbNWILrcQORPlARB4mUcL9JUHASuS5JoXwbguPS1TWJV62kjIpiML7e%2BiE4kTe4H4ZfsExp%2BnOwbmk8LKKH17i%2B7HLfmQFpaPfbVdZjvV1XcU35iCV15V%2Bw0HO887G9Rdw5sJGuo3XyZMJodaZIMRy4K3pfYhXOO7xyBVhc9LMxqtVoAZQkn3wbdJ2X3BDxX0RK7%2B3TmJNShTczBMrm56FibtjYON7n%2F8CaAecc%2F9rdS%2FIrWctcaG87z7yfy5JhvBwUmovLMhunMgmLRbdTpOedhMro6BeT5PJa%2Fs0nmBrntI4J0x0n7lkYFeqFBtd2IU9bjPyIJNr43JfiBqUi8ZSEZjI72b0p2Wtiphej35CXGECLYCzmIlYv90I6ltVnWxVYSSoBIl6PeZxmSmN5%2FGKRnp0IK0ui%2FwqzrpzCknVG7RJ%2B1JGFWWa4QHGOgDkXeUhdxqNCUsWixp4S3LP3p83K%2F5UJLRAlS%2F9HZyg%2B%2FfdAiiYfu%2Bzs9dAPDcajhr%2Bqt7aZ1WZ7Rg7WGjqlIhZ6Xbf0ANyffju6x9wTkWk5RPrTe5eihSJuU0ML2MyMkGOqUB38hwhukyXvyyVVj6zbbLZp%2FWr0vDJvPqWCDBrr4EVsvreWfwbBY08MHHZtN5yrG5gQzyx2W%2FRYOvrjda5NJl4SKaMlZg73%2F%2B%2FVkDPJsOJgXYaaI2ae6OiTHAq4870vqjf9Sd8bwe%2BGyaZRngNWn4Od1mbF1wHouaMu6wopL9OXeDcitSR3Lw8bzrTUIbWypc6EiACE22GPEa8bDbRG4KN1BLWkAs&X-Amz-Signature=79a563445844954466e7ebc75a011f36a311f12f8c4bee55ebb60b204ec2728f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
