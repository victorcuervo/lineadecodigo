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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBT6HGM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmQfq2j86PUn4YldduI3yWTCveKYwz%2Brefyyhxo7La%2BAiEAxMNS8vIjHtSJipBu2WB5Dsj%2F8l0FnqCGe7U0sxemkpUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPX453A8s1ODB0A6MCrcA7YSHbNLvwnVvucLMnWlSYWFAtSWsoBDwWdyL76zWv%2FymQ6LDOW6DpcjFRKi0vKZUHMvArgf3vELHH%2B3zcXTYqXu%2Br2bRQi3XjfhTAEos%2FeZI8HXjiPI5pBXRPUVNrvAFCiy6IrKWBH8kuOeQfmEnlP%2BaumX2A%2FiVyP7jPrY2NGFsSSZ%2BFTH2vORReqeMTvmd5WrRxt%2FOnEVvptZk%2Bcd7LB%2Fc1GNx%2FrpbejbZ0GzCypY7QwvhRyWirQYPL%2BA7CK5SSdN2%2B8H3TsZsVVqN3k95kc%2BzUgHnVeayfH5kTsWIrzwuo1Pox68Xt5r4ALNg2BFrPC%2BehpFeLQXZl2ZcbxzCot4DXpkcZ0St9D3ltFHKwiJ1po6nq4GKbHsrk30JOrv0ZyDp1arM4h2kUAAOvyADwO2R%2BGxoiv5q%2B5yHl%2BV6obTNscsxZCsFZQZp4p2UbcwgUiyqNzxVGolEJy7oiXt4GCz5aj1%2B%2Bc3gwco%2FEaCtkDQx4MJtGREdCxfgWEEn8yw1uBh9rsGhgJGSl2oNjGM1WeiJbpMg8dZ4KGyUYNwp2wZAfA%2F7PGcadz8wp4bQpeUSqupYxr5gGyxl9PQnC457iHwyDMMd44%2F5knEbIV5%2F01oQWzpTMU%2BHAOfTZrqMNn90skGOqUBTBUUd1ifjJ36aFJLYTLNDox9vpUVepC17wOj6J65uTMACXyaJAP5vp%2Bh%2BjA%2BypNZ6n8juUv87I1BAgEOBLud8MpJW1kZYR5DCkETHobZ0k0DFHimXmgY%2FdQ2ncD3GqzbHHht3Gn5XoWLupX1IhKk1zG8ED%2FCVhup4afBjcTsMslKK%2FrQ2P2yvoh2WMHQtnn6jjPCRKetLu1dDiO4Hhm0wueTMJnm&X-Amz-Signature=f4d0ca105e883684b82917f3c9be60077d73aae30498317d53969ef8ae2b0ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBT6HGM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmQfq2j86PUn4YldduI3yWTCveKYwz%2Brefyyhxo7La%2BAiEAxMNS8vIjHtSJipBu2WB5Dsj%2F8l0FnqCGe7U0sxemkpUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPX453A8s1ODB0A6MCrcA7YSHbNLvwnVvucLMnWlSYWFAtSWsoBDwWdyL76zWv%2FymQ6LDOW6DpcjFRKi0vKZUHMvArgf3vELHH%2B3zcXTYqXu%2Br2bRQi3XjfhTAEos%2FeZI8HXjiPI5pBXRPUVNrvAFCiy6IrKWBH8kuOeQfmEnlP%2BaumX2A%2FiVyP7jPrY2NGFsSSZ%2BFTH2vORReqeMTvmd5WrRxt%2FOnEVvptZk%2Bcd7LB%2Fc1GNx%2FrpbejbZ0GzCypY7QwvhRyWirQYPL%2BA7CK5SSdN2%2B8H3TsZsVVqN3k95kc%2BzUgHnVeayfH5kTsWIrzwuo1Pox68Xt5r4ALNg2BFrPC%2BehpFeLQXZl2ZcbxzCot4DXpkcZ0St9D3ltFHKwiJ1po6nq4GKbHsrk30JOrv0ZyDp1arM4h2kUAAOvyADwO2R%2BGxoiv5q%2B5yHl%2BV6obTNscsxZCsFZQZp4p2UbcwgUiyqNzxVGolEJy7oiXt4GCz5aj1%2B%2Bc3gwco%2FEaCtkDQx4MJtGREdCxfgWEEn8yw1uBh9rsGhgJGSl2oNjGM1WeiJbpMg8dZ4KGyUYNwp2wZAfA%2F7PGcadz8wp4bQpeUSqupYxr5gGyxl9PQnC457iHwyDMMd44%2F5knEbIV5%2F01oQWzpTMU%2BHAOfTZrqMNn90skGOqUBTBUUd1ifjJ36aFJLYTLNDox9vpUVepC17wOj6J65uTMACXyaJAP5vp%2Bh%2BjA%2BypNZ6n8juUv87I1BAgEOBLud8MpJW1kZYR5DCkETHobZ0k0DFHimXmgY%2FdQ2ncD3GqzbHHht3Gn5XoWLupX1IhKk1zG8ED%2FCVhup4afBjcTsMslKK%2FrQ2P2yvoh2WMHQtnn6jjPCRKetLu1dDiO4Hhm0wueTMJnm&X-Amz-Signature=9622f4624a38f5df4a0f8875896657a203cbd9fb6b068fa5d321aba41e5f8902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
