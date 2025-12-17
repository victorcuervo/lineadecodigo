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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUURQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjk1Hb5jKW68ggP7MLfaWv7a0OVlZKCGrR%2F0zz9eO2wIgaTQBC1FXD%2Ftd44U%2F%2FvQ6w3ymBekY5XSxw2J%2BECcqbd0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNVZlKSMIIMixAbT%2FCrcA7zaATFifNtqyGuK4bB%2BSaIszuX3eyo7IipOeGMRALSsij%2B4lCyNtTbYrRMh8g5rLtYrhgzzUBaCC86rMbTU6V3NWMHfpyoZ5EZfYGXKKPjFugNuJjAq7%2FZypDYjJVqmvbKqZW8uxj%2F9BH6GiZvmjjMDTySF82wjziLYnBs37sTQp49%2FW9YVZZQXGgr3w10ITcYyAN5WLGvmM5%2FvDqV6jQBvojHy91dIataK1QsdEVgtPQ%2FHhknjQBPGROUAxkV5bjeHwnsYIQx7s06P5X5cCIug%2FeJ8RC%2FKCtQdipnqe4vrzXhuKBIHeb%2BzNlTIDOOetZM5H1p7ok%2BY5JhQ4iCfD6WG0O2C6JyXLTAmxBCihqQI5z7yWudAGLo9NWVLJk7KGrqVlxDBEUv65r2W%2BPrCnMmpWlPLXpWAFNpKyyu3tOEMOaSxsg6BByZliHjIuAZyJQ319sDikvMxHyz4k7NLCCcksnVytNVPQb%2FbOvhpHw2dNNE3XDGDwJgrkdG6DxWauTVDS6zA8j8f0FamGJw86uVbhpbLFko0MBjaBA1aCUhqHb%2BNNrMXgHWdEGDgNDb6G5mm5RFQAnWYMNVKspN460%2BGov4efFm1fnhhGiynwOb6KFBx4h2DR7OS4r7bMNCXiMoGOqUB4TBL9L73Tos%2BwK%2BROASvr3XZY2cMCaq9Miy8WrkncmzPKnHvPkTrOwgEg7KxDgEoF9BHD5iBGnqUZ8Rrw3243j9EL2hNfxTZseib4JsM9QC%2BVbbuqCUueoQiITnYL5Jpc5qKBRiQyns%2BoKlP50bL9uqNtkIOtjqaGWHiVFN7r5ScSMlzx%2BgYuws%2B%2BJ6ydi%2BwXEtogxlnCVdmIA33OG%2FXjuK714sy&X-Amz-Signature=49f8e80840e653111f118ca726d9cb34705e2c13329a9a4dec40341931e6021d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUURQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjk1Hb5jKW68ggP7MLfaWv7a0OVlZKCGrR%2F0zz9eO2wIgaTQBC1FXD%2Ftd44U%2F%2FvQ6w3ymBekY5XSxw2J%2BECcqbd0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNVZlKSMIIMixAbT%2FCrcA7zaATFifNtqyGuK4bB%2BSaIszuX3eyo7IipOeGMRALSsij%2B4lCyNtTbYrRMh8g5rLtYrhgzzUBaCC86rMbTU6V3NWMHfpyoZ5EZfYGXKKPjFugNuJjAq7%2FZypDYjJVqmvbKqZW8uxj%2F9BH6GiZvmjjMDTySF82wjziLYnBs37sTQp49%2FW9YVZZQXGgr3w10ITcYyAN5WLGvmM5%2FvDqV6jQBvojHy91dIataK1QsdEVgtPQ%2FHhknjQBPGROUAxkV5bjeHwnsYIQx7s06P5X5cCIug%2FeJ8RC%2FKCtQdipnqe4vrzXhuKBIHeb%2BzNlTIDOOetZM5H1p7ok%2BY5JhQ4iCfD6WG0O2C6JyXLTAmxBCihqQI5z7yWudAGLo9NWVLJk7KGrqVlxDBEUv65r2W%2BPrCnMmpWlPLXpWAFNpKyyu3tOEMOaSxsg6BByZliHjIuAZyJQ319sDikvMxHyz4k7NLCCcksnVytNVPQb%2FbOvhpHw2dNNE3XDGDwJgrkdG6DxWauTVDS6zA8j8f0FamGJw86uVbhpbLFko0MBjaBA1aCUhqHb%2BNNrMXgHWdEGDgNDb6G5mm5RFQAnWYMNVKspN460%2BGov4efFm1fnhhGiynwOb6KFBx4h2DR7OS4r7bMNCXiMoGOqUB4TBL9L73Tos%2BwK%2BROASvr3XZY2cMCaq9Miy8WrkncmzPKnHvPkTrOwgEg7KxDgEoF9BHD5iBGnqUZ8Rrw3243j9EL2hNfxTZseib4JsM9QC%2BVbbuqCUueoQiITnYL5Jpc5qKBRiQyns%2BoKlP50bL9uqNtkIOtjqaGWHiVFN7r5ScSMlzx%2BgYuws%2B%2BJ6ydi%2BwXEtogxlnCVdmIA33OG%2FXjuK714sy&X-Amz-Signature=2338ae31bda010a216d360e22cf398f61269e735c76806652d460de8bcd18cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
