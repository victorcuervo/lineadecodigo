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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPMP77G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDztJotkXOPlXc41SG8tuLqD4f4%2B7QIXYw0scy09%2Bb5LQIgA7aNvuzJLTzM4avT%2FpbwwtbmtmkLKylVOPF9GG1cQJcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNdSEpp2wYbXOtKWcSrcA%2BzpQZuxsb0nDe0kZ8wIcrhIlPi1pM1mXrxuO%2BSpw%2BtehoRQm3EAQzJXFa8Tmuv6uXCPkix9XwJQccAdP25Snzjl1GtGm15Rl69ctSYndE0yz0RfU0FOuyzKxfNzjy1GRF2j4L3wzziNiAXZsgs6R%2BShyXwsQd7UwOIHY%2F90EVRlACPBtiyeE%2Bs2gDorV6iyNFcfvSF5XmhAmyw9uK8%2BAKHRAa9FZbqjo0GaFWwF8in%2FR35YEi27kBUWk%2BwmMWgS9%2Fnf27e%2F1vg%2Bet5N84O1l1q9HywfliTIIIG31fbI0Ypl8vAOLMTXM3Y0u0HKmycpHNxsEIGK59%2F53Gzj6hsPVRjwJBgAzcQJd0zyRQVGVbxY3l0Ar3X%2FhyCHuv7dxrVfUcVmdfU0UTmdtQsSFL0UVo7YXbIez%2B7VoJTPr39l8fxzXZbYj%2FS6U45l3B8bMPOANLyG6FUfMc0vBMiMPUeIQ663rbPUi7hmoUDmSoUfw85dZPZoKu1mh1kUyut3rS%2B%2FehcPbBL52%2FUiQbFMbEgIpXASn1ZdEIoheRtz0osFj1LT2Q8aqcpRGFVTlowHsaftZ%2FHtEQMNbQJLFB2DrrBvKItDp61P0ACRknB6nATjJrizd7GDsHIgLQH%2BSoSSMLPI0ckGOqUBlWcWcIAHYI3GETy6%2Fqd5WDWN4VCwB23DF%2FmfjbzosaDAl1QSirG6z6yfhXB7n6JxgSe8snQG%2BBToyQNebxfUU6w5bVSFVXN2adcMWSJDd5c3goTyPka0I4TeYfezjDWEQacakrQmNZwuZTFi9pWkXvFwwu92cHo9EDcXTcT8mWzGnLJJ1peWiKFohk6R7lOElPGTdTzPEo27tx8C1oaK967ET8Pj&X-Amz-Signature=2f2865b93e5762268c76ff021e7bf0ecf4635b93ef02b4c7c5a2f19d0b400688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPMP77G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDztJotkXOPlXc41SG8tuLqD4f4%2B7QIXYw0scy09%2Bb5LQIgA7aNvuzJLTzM4avT%2FpbwwtbmtmkLKylVOPF9GG1cQJcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNdSEpp2wYbXOtKWcSrcA%2BzpQZuxsb0nDe0kZ8wIcrhIlPi1pM1mXrxuO%2BSpw%2BtehoRQm3EAQzJXFa8Tmuv6uXCPkix9XwJQccAdP25Snzjl1GtGm15Rl69ctSYndE0yz0RfU0FOuyzKxfNzjy1GRF2j4L3wzziNiAXZsgs6R%2BShyXwsQd7UwOIHY%2F90EVRlACPBtiyeE%2Bs2gDorV6iyNFcfvSF5XmhAmyw9uK8%2BAKHRAa9FZbqjo0GaFWwF8in%2FR35YEi27kBUWk%2BwmMWgS9%2Fnf27e%2F1vg%2Bet5N84O1l1q9HywfliTIIIG31fbI0Ypl8vAOLMTXM3Y0u0HKmycpHNxsEIGK59%2F53Gzj6hsPVRjwJBgAzcQJd0zyRQVGVbxY3l0Ar3X%2FhyCHuv7dxrVfUcVmdfU0UTmdtQsSFL0UVo7YXbIez%2B7VoJTPr39l8fxzXZbYj%2FS6U45l3B8bMPOANLyG6FUfMc0vBMiMPUeIQ663rbPUi7hmoUDmSoUfw85dZPZoKu1mh1kUyut3rS%2B%2FehcPbBL52%2FUiQbFMbEgIpXASn1ZdEIoheRtz0osFj1LT2Q8aqcpRGFVTlowHsaftZ%2FHtEQMNbQJLFB2DrrBvKItDp61P0ACRknB6nATjJrizd7GDsHIgLQH%2BSoSSMLPI0ckGOqUBlWcWcIAHYI3GETy6%2Fqd5WDWN4VCwB23DF%2FmfjbzosaDAl1QSirG6z6yfhXB7n6JxgSe8snQG%2BBToyQNebxfUU6w5bVSFVXN2adcMWSJDd5c3goTyPka0I4TeYfezjDWEQacakrQmNZwuZTFi9pWkXvFwwu92cHo9EDcXTcT8mWzGnLJJ1peWiKFohk6R7lOElPGTdTzPEo27tx8C1oaK967ET8Pj&X-Amz-Signature=6d7a45a3d107f47fc2868ca29721df0e8b777af987cedc7ae4d7f771b354c410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
