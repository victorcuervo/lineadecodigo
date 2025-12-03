---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZSJCS2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFXYlG3URGG1tnEHM69RbQBVDAo4WSfxHfycFmGxELoOAiA3OyOyWJJFUCljJLOoLrsc0kwC4h%2B03CDaRk4PqR4n7Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMingHmIv9O1bBPX5rKtwDUorlVmUiM%2F139fcUUWt0%2Bq09TuYEhZ2rAVC5ueFajtSyrgS4wictNVZgmL0f%2Fs4jMyAh9154iKqbnMiKrF8EK8Hxv%2FgXDdD92mPJzhFb83yFMawPKG%2BqOckVWIWkdrqAKIuVgSBvsu7VlRTfEoXWX5sQ%2Fw5y4Bc%2BVbYrMvXv2SR08KOy45JVjcprCmZrfBXArfiOBIjeOc9zBpueV2Y%2BNwH1dQFUStdAN63bdyf5foDR3p10jrqRmoYXXj6mMYC7yH8Qjsbd3xLq3dxgt1fFvCor3oKHW8WELvnQOMBB2sU3mi%2FLnQCn67uSOW9Hzowi6C3ysmxbc%2Bp9D3nwg5FHTi7uOwehQXjXJ4aqSjVTDubIS%2Bj2ATb91ebE8CBxczFpPlci%2BXhRtUxFXYY%2Fm8Wg9GzMHw4Wnv485dqyjfzIg7uJ%2B5cb7lJuytNmV%2FfY71ssGwqLG9JhQroZGVZFVLiLc8FOFRzxtvS%2Beae%2FkhBBx7ZB0%2BeqX9JrvKnTR%2BVgqlNzPS2UB%2Baons6HHWlQ4UWA3s1KpwAf%2BotfS%2F9mrjhTviUeGtwiPlqAONlIipDxA%2BfrWR9i4xP2NFEn4yCPQQ03sSDw7AmjlyDvhKF88JDWSeO0rGzt4X%2FOPK09kX0w6dzCyQY6pgF67BapMnypApQe2wt9mVTF4zybnasXZuSNqmdSaQZcJqMp%2FlFsKl6vPOCGdkNRSZ0RDmbHSQP3SfWu9gqjAz15EQT0QO8vCWpb7EYzdGkJCW1n8e7IHuodLIIf1tgp%2FcIlRads2268lTGdGW3lkl0LaxSRPgKGW4d9dym9M%2BCROGGdDeoPY8RIX9O%2FSy2JTpfHRo2%2BIg1uACUsThmhaMKj64yHcq3O&X-Amz-Signature=672ceed79de3f09f51a189eb366633e5b8fa32aaf020ff0527f9a776b52abf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZSJCS2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFXYlG3URGG1tnEHM69RbQBVDAo4WSfxHfycFmGxELoOAiA3OyOyWJJFUCljJLOoLrsc0kwC4h%2B03CDaRk4PqR4n7Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMingHmIv9O1bBPX5rKtwDUorlVmUiM%2F139fcUUWt0%2Bq09TuYEhZ2rAVC5ueFajtSyrgS4wictNVZgmL0f%2Fs4jMyAh9154iKqbnMiKrF8EK8Hxv%2FgXDdD92mPJzhFb83yFMawPKG%2BqOckVWIWkdrqAKIuVgSBvsu7VlRTfEoXWX5sQ%2Fw5y4Bc%2BVbYrMvXv2SR08KOy45JVjcprCmZrfBXArfiOBIjeOc9zBpueV2Y%2BNwH1dQFUStdAN63bdyf5foDR3p10jrqRmoYXXj6mMYC7yH8Qjsbd3xLq3dxgt1fFvCor3oKHW8WELvnQOMBB2sU3mi%2FLnQCn67uSOW9Hzowi6C3ysmxbc%2Bp9D3nwg5FHTi7uOwehQXjXJ4aqSjVTDubIS%2Bj2ATb91ebE8CBxczFpPlci%2BXhRtUxFXYY%2Fm8Wg9GzMHw4Wnv485dqyjfzIg7uJ%2B5cb7lJuytNmV%2FfY71ssGwqLG9JhQroZGVZFVLiLc8FOFRzxtvS%2Beae%2FkhBBx7ZB0%2BeqX9JrvKnTR%2BVgqlNzPS2UB%2Baons6HHWlQ4UWA3s1KpwAf%2BotfS%2F9mrjhTviUeGtwiPlqAONlIipDxA%2BfrWR9i4xP2NFEn4yCPQQ03sSDw7AmjlyDvhKF88JDWSeO0rGzt4X%2FOPK09kX0w6dzCyQY6pgF67BapMnypApQe2wt9mVTF4zybnasXZuSNqmdSaQZcJqMp%2FlFsKl6vPOCGdkNRSZ0RDmbHSQP3SfWu9gqjAz15EQT0QO8vCWpb7EYzdGkJCW1n8e7IHuodLIIf1tgp%2FcIlRads2268lTGdGW3lkl0LaxSRPgKGW4d9dym9M%2BCROGGdDeoPY8RIX9O%2FSy2JTpfHRo2%2BIg1uACUsThmhaMKj64yHcq3O&X-Amz-Signature=d015721bf3a2596ad018d2de22ba32e553768bdb6348a7753875ca8d71b510d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
