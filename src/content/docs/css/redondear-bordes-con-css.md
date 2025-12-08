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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPPKDV4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK5m60fgdyuDHyo%2FpsgOlkgkiP0kU2rfJNfGD8kC9%2BmAiAeqMuEZjAk0zx%2FmP0UUOwZKMVR%2BK8ALhgZ0zQtRLqBnyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRM%2BYkrilZcYtet0EKtwDI0ST%2FgNPDeBwtkt7GWPXBG6vTVaslDeguRmi2r9Steot2IH64fri1wjrb8ftWut73sIStGa%2BvCRz%2FXCzKwonDv49dYFxFWo48DQa1SlnxkecgpFcqnHLz7Fd2KJaJq9BjcX0RyR4hNPp5B7%2Fnz%2BqVkAJmRQRwGoa7VMs4L5Gv89oR3GlfxS8PMEFrFxGAKVFYd4IXARLGqGLO9l7mwwUA6KDKV94pH91Xsgg%2BCx7%2FOiYVhppgsN%2Bq37MJuvjPxFZiy1VQK83xzLAEWAMani06vVwEIY9SsyMeei8blQ7i4vEL8U7S3zK3cueTwtEp%2F3tfl6c%2BSJOXMlbJOQR61G%2F1j3lykbs6vt79hNllH%2Fjun9OnPge%2BMRcJfGRUbYbh9pS1dimn6DLPlc7exohXmyhgZU55UxWr62D7g7g0TEdyeSWVqiv1wIidPg4n1GyHwLWKCQU6VvBtE64UPd1ldjx6ZFnVIcfiaEiKDYhlAlL6%2FNlxVuA7orrJvScF9%2B%2Fv3qYc7fzOP4Z%2F%2BJCNxReFUewmiCcKNTDa67pRloV2HvdNphDGOgPsJRQMnXcK4rYwKQsHB1ldWsS81DECOgSTKEDIHezdINP%2BDmIuVhkpOxDGEkfC86fuAADm3cFv7cwxO3ZyQY6pgH0MDK4JPprTUrdOrLna7DbKoDdub8kF%2FLXQUyRZ4evmE7LfE86Mv9u1mnXj4gXJPzQ5DbQWRSLRG43dWAdfkeLH5w75SID%2BPkIUDBZOyBw8pufEF3hMv8lUn2Utcd9ZFpfonrerOUYMil7lfs1JxvF3ChRjqgav2RWYRw0%2B76hFHnXEiTbB6Fj%2FP8wFkhnxXEAqh1seB2%2F1o4LbYbG3aFkr7dyuQGE&X-Amz-Signature=187e075058f226f669af3545e2709418e739de004d91d258f90241addc5e793f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPPKDV4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK5m60fgdyuDHyo%2FpsgOlkgkiP0kU2rfJNfGD8kC9%2BmAiAeqMuEZjAk0zx%2FmP0UUOwZKMVR%2BK8ALhgZ0zQtRLqBnyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRM%2BYkrilZcYtet0EKtwDI0ST%2FgNPDeBwtkt7GWPXBG6vTVaslDeguRmi2r9Steot2IH64fri1wjrb8ftWut73sIStGa%2BvCRz%2FXCzKwonDv49dYFxFWo48DQa1SlnxkecgpFcqnHLz7Fd2KJaJq9BjcX0RyR4hNPp5B7%2Fnz%2BqVkAJmRQRwGoa7VMs4L5Gv89oR3GlfxS8PMEFrFxGAKVFYd4IXARLGqGLO9l7mwwUA6KDKV94pH91Xsgg%2BCx7%2FOiYVhppgsN%2Bq37MJuvjPxFZiy1VQK83xzLAEWAMani06vVwEIY9SsyMeei8blQ7i4vEL8U7S3zK3cueTwtEp%2F3tfl6c%2BSJOXMlbJOQR61G%2F1j3lykbs6vt79hNllH%2Fjun9OnPge%2BMRcJfGRUbYbh9pS1dimn6DLPlc7exohXmyhgZU55UxWr62D7g7g0TEdyeSWVqiv1wIidPg4n1GyHwLWKCQU6VvBtE64UPd1ldjx6ZFnVIcfiaEiKDYhlAlL6%2FNlxVuA7orrJvScF9%2B%2Fv3qYc7fzOP4Z%2F%2BJCNxReFUewmiCcKNTDa67pRloV2HvdNphDGOgPsJRQMnXcK4rYwKQsHB1ldWsS81DECOgSTKEDIHezdINP%2BDmIuVhkpOxDGEkfC86fuAADm3cFv7cwxO3ZyQY6pgH0MDK4JPprTUrdOrLna7DbKoDdub8kF%2FLXQUyRZ4evmE7LfE86Mv9u1mnXj4gXJPzQ5DbQWRSLRG43dWAdfkeLH5w75SID%2BPkIUDBZOyBw8pufEF3hMv8lUn2Utcd9ZFpfonrerOUYMil7lfs1JxvF3ChRjqgav2RWYRw0%2B76hFHnXEiTbB6Fj%2FP8wFkhnxXEAqh1seB2%2F1o4LbYbG3aFkr7dyuQGE&X-Amz-Signature=2b18c654a3ddd21264ad357e1093392012b8c0a67388af38a79000c1c29f4997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
