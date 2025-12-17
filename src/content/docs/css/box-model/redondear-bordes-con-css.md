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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIITPP65%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BA5Un9HbT3isZaa394Php%2BFOR2azC%2BLXjyf7TgQkYhAiB37IKDh%2FsiLTlLmAxXs7J4Iej%2B1d8S33J7HwYe8WpF1SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWzuDpsSkMf75FwMCKtwD4bR86wssn0Gi430qpozkAwqLcPcyoYPEjh%2BZ1%2B%2BdRfXFYjdWQDr%2FnVRBdvRd8ue8sIb8v5H%2BRWGRI9oL0UWa9FPDHZXh9AHjcgRa7PhmPJoerGVhAAIw53qXCpJyXzymeXUOr5oT%2Fzyy%2BkPWJCG13hIBtwnStyoEJkP6bWTN%2B8nOpLuWRKfamQQTfJX58g6AgNCbrP86vbSEeWbwR53kfLw7V6QFcZTG%2BNW%2Fjo6GFHZNviEJUWsynE7qBRZPWyoHpMP8%2BF%2FNdS2gNXmSW%2Fae0nx82%2F93ZXy%2BcG0ZjjMkIN9sC63K2E2a%2B8S0jKtbwodD9I2uShdIuD%2F2IrC8Qu9oAxQU1Mcm4O6vkZMDP2JNwpTWRZKN5OI%2FfOczbzaM0qQ5Wa%2Fki%2FdtfevB9wfY8M3UyHXcDogIufcOcj7ybeHTynYkjRi11%2FODdpOlkGUHw8MfiuMUFb85pdJonCpyddRUo%2FmlmzUULLNqXzh%2FQ%2FBJH7jtgadccOJX6PrDTQsWedzHwJrMwazpPgqUYddYnLxhuw7mxTnwepoy23pYiJ5A%2FLe1Gj1%2FloDgf9qIERHInowhyLoQ3ncB6%2BvkripHIa9vCO%2BTVZj1DXlCXC3G%2BksFWNd%2Bb6cH8C3menpgpvsw5f%2BKygY6pgE63%2Bt5LwUkRV6oS6gPIBNvpVpZNrExit3FfqhLDMpbk%2Fme0obIsl8HxonbF8OT%2BN30HFPjzMZF0tgfhvbSKKC2somAVVM%2F4JjDIQPQiJSTy3ydvwz0olwJHwWowLUIPoRBQINAUqBlQ5%2BEecWjQEYnjF9aHT%2BB%2BhYEYKMDikBo80XSkj7d9PE4beRMEt7bufWpmZeSDxfHvziTaUumid7TXYRvcB37&X-Amz-Signature=2f0a61e6bbc037da676ed106e6965966d4ec45b1c479d3fb2dcbd625e80f1889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIITPP65%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BA5Un9HbT3isZaa394Php%2BFOR2azC%2BLXjyf7TgQkYhAiB37IKDh%2FsiLTlLmAxXs7J4Iej%2B1d8S33J7HwYe8WpF1SqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWzuDpsSkMf75FwMCKtwD4bR86wssn0Gi430qpozkAwqLcPcyoYPEjh%2BZ1%2B%2BdRfXFYjdWQDr%2FnVRBdvRd8ue8sIb8v5H%2BRWGRI9oL0UWa9FPDHZXh9AHjcgRa7PhmPJoerGVhAAIw53qXCpJyXzymeXUOr5oT%2Fzyy%2BkPWJCG13hIBtwnStyoEJkP6bWTN%2B8nOpLuWRKfamQQTfJX58g6AgNCbrP86vbSEeWbwR53kfLw7V6QFcZTG%2BNW%2Fjo6GFHZNviEJUWsynE7qBRZPWyoHpMP8%2BF%2FNdS2gNXmSW%2Fae0nx82%2F93ZXy%2BcG0ZjjMkIN9sC63K2E2a%2B8S0jKtbwodD9I2uShdIuD%2F2IrC8Qu9oAxQU1Mcm4O6vkZMDP2JNwpTWRZKN5OI%2FfOczbzaM0qQ5Wa%2Fki%2FdtfevB9wfY8M3UyHXcDogIufcOcj7ybeHTynYkjRi11%2FODdpOlkGUHw8MfiuMUFb85pdJonCpyddRUo%2FmlmzUULLNqXzh%2FQ%2FBJH7jtgadccOJX6PrDTQsWedzHwJrMwazpPgqUYddYnLxhuw7mxTnwepoy23pYiJ5A%2FLe1Gj1%2FloDgf9qIERHInowhyLoQ3ncB6%2BvkripHIa9vCO%2BTVZj1DXlCXC3G%2BksFWNd%2Bb6cH8C3menpgpvsw5f%2BKygY6pgE63%2Bt5LwUkRV6oS6gPIBNvpVpZNrExit3FfqhLDMpbk%2Fme0obIsl8HxonbF8OT%2BN30HFPjzMZF0tgfhvbSKKC2somAVVM%2F4JjDIQPQiJSTy3ydvwz0olwJHwWowLUIPoRBQINAUqBlQ5%2BEecWjQEYnjF9aHT%2BB%2BhYEYKMDikBo80XSkj7d9PE4beRMEt7bufWpmZeSDxfHvziTaUumid7TXYRvcB37&X-Amz-Signature=e20ddb152601f2c902640178a48ed734ed13a488172a036160522d2e50536904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
