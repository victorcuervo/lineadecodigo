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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGUSL6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIvSuXRX4ObFDxqifypPnRGh7v5xPr824eFefVaWIVEAIgFTGYZBqpxh0wMKmNpux3v0gmMxgZrZvvtTkLQij9Ozwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAXtHfTWiC2EdF3YaCrcAyyZqZ03tattS3W3aPW7rkwgsUhB7Rwun6zn5C9GLPlDDzkoAHCxCCJmu7l%2FAGWkdkBVBDSeckEUoaOEvuv5p0Jaa%2Fr3dXst85WDpPXsv3%2FbnOaleGpjx%2FvwrqbUvcB8krl3eLDQc%2Fb31VqEIshr4R0aXaRFZ1fT2kqYDOa4WeF2goYgVNXfTrBNFhVWRjZIN1DR3deKcmjvf3U6qawRP7jgJnZ6tkjWpNfNkemnH9HJuQZzjg9%2FklyGLiDaeliL1JFHY6JCYrilq4jPpA4hXyMThDwwGG9Mx1FxQIlcs0%2BYvRsVGm7Dvu1g5XKe6Za9cD4rTuf52tqqNMxFH7ebu4XaAm5Zp0e3uYcJDyXn8tWMX8xT1xvlqxpTpwOxak8K1KMsNXumpQ2MAEkYrBqLk6uvGhn3jdXHPWQpyt8xq0HTSXT%2Bllmjljvb1cmMQ5RDmrPG5npU7fp5XHzcuBF3eUHGHeiyA5D3g%2FWrQhWkKFprd%2FXlIDgkuiiLiDNxJ%2FGo%2BnlqkVdaX9eo9hK1EdU40c8sKtrKz7hUNys%2FaC9HCFmU8koA%2Fto5VgRjMde7Qf%2FwwZhBJqr%2BMfKg5MNy9z9kTiuS63QJGGj%2FbzOydgsLGvYyg7k1WzGIEyoZAFb0MLTGzckGOqUB95jn1ZggwFLXdNP%2FxawQyAPj9Q0oxwD4xtiOqzVJGJIXWx2nfWKsWsVjRaKmbQQV6u3q%2BwmfCm4FF8Jc2OYOa41Txpejh1bC1Ld44iPIDdhMRN7UITmPM4Bb5064iTCmj%2F3NQcuyB%2FlykVvj5zjlhOhX7UlASU%2B163BjrK%2FLek3Gj4wbb%2BXP0eUUgm5P85GRsx9KfKDcsJK21yP7ftlWfzg0s808&X-Amz-Signature=7ea4e3516ade2cd9c1c0579ac3bc07acb23215fdd598af593f0f612087fc92c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGUSL6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIvSuXRX4ObFDxqifypPnRGh7v5xPr824eFefVaWIVEAIgFTGYZBqpxh0wMKmNpux3v0gmMxgZrZvvtTkLQij9Ozwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAXtHfTWiC2EdF3YaCrcAyyZqZ03tattS3W3aPW7rkwgsUhB7Rwun6zn5C9GLPlDDzkoAHCxCCJmu7l%2FAGWkdkBVBDSeckEUoaOEvuv5p0Jaa%2Fr3dXst85WDpPXsv3%2FbnOaleGpjx%2FvwrqbUvcB8krl3eLDQc%2Fb31VqEIshr4R0aXaRFZ1fT2kqYDOa4WeF2goYgVNXfTrBNFhVWRjZIN1DR3deKcmjvf3U6qawRP7jgJnZ6tkjWpNfNkemnH9HJuQZzjg9%2FklyGLiDaeliL1JFHY6JCYrilq4jPpA4hXyMThDwwGG9Mx1FxQIlcs0%2BYvRsVGm7Dvu1g5XKe6Za9cD4rTuf52tqqNMxFH7ebu4XaAm5Zp0e3uYcJDyXn8tWMX8xT1xvlqxpTpwOxak8K1KMsNXumpQ2MAEkYrBqLk6uvGhn3jdXHPWQpyt8xq0HTSXT%2Bllmjljvb1cmMQ5RDmrPG5npU7fp5XHzcuBF3eUHGHeiyA5D3g%2FWrQhWkKFprd%2FXlIDgkuiiLiDNxJ%2FGo%2BnlqkVdaX9eo9hK1EdU40c8sKtrKz7hUNys%2FaC9HCFmU8koA%2Fto5VgRjMde7Qf%2FwwZhBJqr%2BMfKg5MNy9z9kTiuS63QJGGj%2FbzOydgsLGvYyg7k1WzGIEyoZAFb0MLTGzckGOqUB95jn1ZggwFLXdNP%2FxawQyAPj9Q0oxwD4xtiOqzVJGJIXWx2nfWKsWsVjRaKmbQQV6u3q%2BwmfCm4FF8Jc2OYOa41Txpejh1bC1Ld44iPIDdhMRN7UITmPM4Bb5064iTCmj%2F3NQcuyB%2FlykVvj5zjlhOhX7UlASU%2B163BjrK%2FLek3Gj4wbb%2BXP0eUUgm5P85GRsx9KfKDcsJK21yP7ftlWfzg0s808&X-Amz-Signature=23d98037584ee23d303c2c96d13b53a9b8b8525528501c86e4d81c549648a895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
