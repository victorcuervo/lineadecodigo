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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSGDS5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Pn16kFSlvF%2BLO6AlaJrW1U7gn35C9%2FUZN5aooq5WoQIgHGwWFHBGUYTfZ5MQ%2BQZvtPucooL8VSpWJaNWu%2F6BaCYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7MeFs%2BAm8%2BADf%2FmircA%2FTf898Zlzt3z5o%2FUMvjG3k45HP8k7p2rbcwhj0DEz5%2FGYeTbJrT5U07I3r%2B%2BOFjZn4ybzDxO0VVxw%2FJUw4sGZia8BzVtEyhvwu74vXYetGoBEM43pQp3HwScRrzMVdtJPXnXT1RaXnr31Zi2pZXeidndDtcA6TaQ%2FNUoW2eokzYeiC3DLmeWrJL1AktsCgcrCP9wTs%2BAbtoxY%2FQhUfyXLatfZJdsFZxa9xA6tRbl%2Bt3Tpp5OkoC24opVKrge243SRkqMtUJNqeobOEkXRmBZSLwgHLRN6N%2BWxDyDpau%2F9cUqUeG1GiaMJs5Or8GMAixp4Jt19FRs2q4GDkbNoM8C1sh95XzZrQGAz36SlQ12Af7vP%2FWgtk7hvQBTQQWakaxlwvORRr80UEA%2BE0G2xpAGMXpeN3GJIPYVoCMz99YN5opeyFunfhtEpUWAndPAY%2B2onHoLRDmhJ5fqj8U9zEvSjMu8Ka%2BsZ%2BaN1SJc%2FeUp2G3U94LUxEoVulSA5cqbG83HFcU4vA%2B8h0ppEEQO7XWaLLG88P9VDHhMUBCfDjn5i9TKRtFSeT9MEsBxwECu7rPSeFBBFcIkbUkP%2BDs8I0P0ciszGgUjjooofoZJKVu03rtekjAx9SacfjaM4inMI3C28kGOqUBwFhgADVSEIkCA%2Bdxmdm%2BFxM5NaCBSXjYcnMLRkBfpquj7R3wTscb1sANDqSXSLIiTSd9YHrypxbSA3O%2Fmm0ge2u4f4ITjwwWqM4rAeLra4n22wJt7TU5WVO9ogUnPQcful4yTPz9qz43z4KC2JVmJLHugf%2FOa35yxgk2iNSC%2FZYqZ1lb5U9Z4IjyGXgtSziLrfvbC0ppXdzd%2B1%2FC0ArAC%2BpUieJx&X-Amz-Signature=2ea7cd71ca9c0a5bab8b9f10bc1125e4385ceb9a5627669a81e6ba8a69f8f367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSGDS5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Pn16kFSlvF%2BLO6AlaJrW1U7gn35C9%2FUZN5aooq5WoQIgHGwWFHBGUYTfZ5MQ%2BQZvtPucooL8VSpWJaNWu%2F6BaCYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7MeFs%2BAm8%2BADf%2FmircA%2FTf898Zlzt3z5o%2FUMvjG3k45HP8k7p2rbcwhj0DEz5%2FGYeTbJrT5U07I3r%2B%2BOFjZn4ybzDxO0VVxw%2FJUw4sGZia8BzVtEyhvwu74vXYetGoBEM43pQp3HwScRrzMVdtJPXnXT1RaXnr31Zi2pZXeidndDtcA6TaQ%2FNUoW2eokzYeiC3DLmeWrJL1AktsCgcrCP9wTs%2BAbtoxY%2FQhUfyXLatfZJdsFZxa9xA6tRbl%2Bt3Tpp5OkoC24opVKrge243SRkqMtUJNqeobOEkXRmBZSLwgHLRN6N%2BWxDyDpau%2F9cUqUeG1GiaMJs5Or8GMAixp4Jt19FRs2q4GDkbNoM8C1sh95XzZrQGAz36SlQ12Af7vP%2FWgtk7hvQBTQQWakaxlwvORRr80UEA%2BE0G2xpAGMXpeN3GJIPYVoCMz99YN5opeyFunfhtEpUWAndPAY%2B2onHoLRDmhJ5fqj8U9zEvSjMu8Ka%2BsZ%2BaN1SJc%2FeUp2G3U94LUxEoVulSA5cqbG83HFcU4vA%2B8h0ppEEQO7XWaLLG88P9VDHhMUBCfDjn5i9TKRtFSeT9MEsBxwECu7rPSeFBBFcIkbUkP%2BDs8I0P0ciszGgUjjooofoZJKVu03rtekjAx9SacfjaM4inMI3C28kGOqUBwFhgADVSEIkCA%2Bdxmdm%2BFxM5NaCBSXjYcnMLRkBfpquj7R3wTscb1sANDqSXSLIiTSd9YHrypxbSA3O%2Fmm0ge2u4f4ITjwwWqM4rAeLra4n22wJt7TU5WVO9ogUnPQcful4yTPz9qz43z4KC2JVmJLHugf%2FOa35yxgk2iNSC%2FZYqZ1lb5U9Z4IjyGXgtSziLrfvbC0ppXdzd%2B1%2FC0ArAC%2BpUieJx&X-Amz-Signature=f0e8557a54a5b55728caacd0ae269c6c2d4c4bb451ef4b476a1547f82cff8352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
