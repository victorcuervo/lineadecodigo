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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO553HVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDir9dySBlAWKklGQsBW7q%2Fa6CFzwLQO1jT75iRpJ56DQIgd1onFfZGTP4Se5g83t4Tpo7aE2Mc3ieb4XCrQiohhZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDT0YuWwF03qrRdqQyrcA83dee3s%2Fu%2FG7o0x%2F0kt4GOfrrzL9h7JgL88eb7eCRVN3CQPhhSsZDhyXZW8GvnuMHceGx0eCaJtZFMfjki7jxvqJIa5UFOaGvkW5APa9gPPleWRLRkXhUHN91BW%2FWHxlPU5RJztL03HnHm1jxNLm%2BA5MWnjuBHMyrtSmOfjxsNqy6o%2B4PufcnUjE6OVYZjjJBrB6A7JRMgSJMjqcni%2F768MXOa7IOIJTS8koMV%2FFLZsRCFzboohIVkJb6jsHL%2FtN6dSd64wGgf%2FX3uNPSlurqTBIf2VFuaNWFv00Toa7oly4JVtDhgOGobBVBYY39jYYYn1p3cPXewoCgy1z%2BAEWMHfLSmqNSSNjFSkiDJK%2Fm8IGVZ89TR8221XYXqXvL5hWRACuLBEcw7%2F%2BH2SyVTATKMvn6oaTIIBVCgj3Fo%2BC%2FftLDHwh79HY5BjP3GEokC0ei8zYvGhpJkCb03E8zTKA87sxU6ZJdLIv%2FqgtT7uo1VnT3HG6QlSxeB3WF8l5yefP8%2BUhhXwABc%2FU8iAApbyMzd%2B4dCLUILBL5UeANDwLKj5VSai%2Bgo252gNcWFrZsTkPz7s06VCxApiWU9r6e64S1vypCe7sYueuHcROmblCd9ATd3pmyFz%2F1q%2FNOVLMKiPisoGOqUB5RPrhi6a0M56kk%2BrAkOK5iUfJTuAXU5c8HXwonM8ZiZtPTmNN7%2BTr7pUToFxTQxMTmXb92jqdjL5x3Zk1%2B3XXlLEylzxiMd8hU5D8ntf0BFAlH1iG5X4bvh15iHjsjyKwUETlK1WoQq5p46F3xNdYWqTFTbphvYrkPX0tIdn9Y5w3S2iUsgK6JeJGRocbrBe%2Broeo6js3pvEKj79YzV9X5%2BtKn4g&X-Amz-Signature=7e5a8a924dd8dd257bf559faaee1845fc6b94c69cfa0ae142fd1b1b461a73595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO553HVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDir9dySBlAWKklGQsBW7q%2Fa6CFzwLQO1jT75iRpJ56DQIgd1onFfZGTP4Se5g83t4Tpo7aE2Mc3ieb4XCrQiohhZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDT0YuWwF03qrRdqQyrcA83dee3s%2Fu%2FG7o0x%2F0kt4GOfrrzL9h7JgL88eb7eCRVN3CQPhhSsZDhyXZW8GvnuMHceGx0eCaJtZFMfjki7jxvqJIa5UFOaGvkW5APa9gPPleWRLRkXhUHN91BW%2FWHxlPU5RJztL03HnHm1jxNLm%2BA5MWnjuBHMyrtSmOfjxsNqy6o%2B4PufcnUjE6OVYZjjJBrB6A7JRMgSJMjqcni%2F768MXOa7IOIJTS8koMV%2FFLZsRCFzboohIVkJb6jsHL%2FtN6dSd64wGgf%2FX3uNPSlurqTBIf2VFuaNWFv00Toa7oly4JVtDhgOGobBVBYY39jYYYn1p3cPXewoCgy1z%2BAEWMHfLSmqNSSNjFSkiDJK%2Fm8IGVZ89TR8221XYXqXvL5hWRACuLBEcw7%2F%2BH2SyVTATKMvn6oaTIIBVCgj3Fo%2BC%2FftLDHwh79HY5BjP3GEokC0ei8zYvGhpJkCb03E8zTKA87sxU6ZJdLIv%2FqgtT7uo1VnT3HG6QlSxeB3WF8l5yefP8%2BUhhXwABc%2FU8iAApbyMzd%2B4dCLUILBL5UeANDwLKj5VSai%2Bgo252gNcWFrZsTkPz7s06VCxApiWU9r6e64S1vypCe7sYueuHcROmblCd9ATd3pmyFz%2F1q%2FNOVLMKiPisoGOqUB5RPrhi6a0M56kk%2BrAkOK5iUfJTuAXU5c8HXwonM8ZiZtPTmNN7%2BTr7pUToFxTQxMTmXb92jqdjL5x3Zk1%2B3XXlLEylzxiMd8hU5D8ntf0BFAlH1iG5X4bvh15iHjsjyKwUETlK1WoQq5p46F3xNdYWqTFTbphvYrkPX0tIdn9Y5w3S2iUsgK6JeJGRocbrBe%2Broeo6js3pvEKj79YzV9X5%2BtKn4g&X-Amz-Signature=7aa714f5c06c57f23d75467d073d83f185564af8230d52055f4ea2e7f9d38249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
