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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3VNOWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqkCij9%2B4JebU2sdAxkwSXzstQ8MIVYL3c1DGTeKeuWgIhAIzEgO%2B4IIfn9HhWaSkS1cbz7bg4LyL%2Fa1C2wbMRamdSKv8DCHYQABoMNjM3NDIzMTgzODA1IgxgSRtzOpFZCAcoYXUq3APhdmD0FTguNbNsf%2BIVywBu6dGLZ49WoDRTVo951V4TVkbcRhZ8YMeBlT9DmiAKNauYrBlBc6LrMJDrb23dqyJi6tQJ3x%2BgDB2O6dIPc45elGFKjBeG272W7EbDqYIH83htJOQiaYYrt9RJMSNsOBIpJXnJnD4oncEO%2Fr5nvf1ABCamt2rxXWejppxj6IJqAa1e3cRuEL%2BY8WYSdHTxYTofWA3xxnqmbOb3nQDCqR%2FKt9rbDTMCChuHIC2QFSR3N9ziS6re2wTG1QkPTCaZss6EkgTirkUy4Rx6jIDHXhf2rORBsg9oATbESDP66fUT2mDHSmJ%2FnlEVcU4hCWsawcPjxH04wSKPaaw5cGGOffh27w%2Ba5YUmjnbs%2BjmgF7kuPBT5DbBm6pAjr5ASg%2F8EI7f%2BpIDvgrZXOuxnfgG9ExPaIJ87uRXkYxn%2BCfwD5opkc6W%2F9jt15kXkOnqgtavPTyOdGiJ5diGim2v9wHPGSAxq0OZb8o65yebRTiknAlnAEFz4T7qAbdiuw19NfQkzWyV251zaPWdFOSYI2phL0RkcvFiEYz2hVcF8xd8BiV7Jp45Rnpjlyfwsm0V0TKwn8pAlI3yb4hhTeZ7hZl8XYz8BXZWCOGda0%2BE%2FxeVvnjD26YjKBjqkAf128s2DmEd45s1g1By6ON1raIs%2Ftu9vMo9r9rp4y7wA4hnadaDcjivYv9cU5oB960ePNudxvflPe6qs6Kt1RZpQ1OljnnTfqLQeTL9PV3ntdVvyuZq6r%2Fn8hc%2FpIYAXg3p1VQFxFNJAAHOyk%2FYy%2FjRU4WUKaXeCe%2FBu6A4G%2Fwcpheu55Xn7AFgGz2XoXLQ5RiLQGPU3U8a1R56HkbYtDOYOu2rc&X-Amz-Signature=0c29d9591f32766968f0f4768b24cbcc311943a6d4b4e09045c370de16399d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3VNOWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqkCij9%2B4JebU2sdAxkwSXzstQ8MIVYL3c1DGTeKeuWgIhAIzEgO%2B4IIfn9HhWaSkS1cbz7bg4LyL%2Fa1C2wbMRamdSKv8DCHYQABoMNjM3NDIzMTgzODA1IgxgSRtzOpFZCAcoYXUq3APhdmD0FTguNbNsf%2BIVywBu6dGLZ49WoDRTVo951V4TVkbcRhZ8YMeBlT9DmiAKNauYrBlBc6LrMJDrb23dqyJi6tQJ3x%2BgDB2O6dIPc45elGFKjBeG272W7EbDqYIH83htJOQiaYYrt9RJMSNsOBIpJXnJnD4oncEO%2Fr5nvf1ABCamt2rxXWejppxj6IJqAa1e3cRuEL%2BY8WYSdHTxYTofWA3xxnqmbOb3nQDCqR%2FKt9rbDTMCChuHIC2QFSR3N9ziS6re2wTG1QkPTCaZss6EkgTirkUy4Rx6jIDHXhf2rORBsg9oATbESDP66fUT2mDHSmJ%2FnlEVcU4hCWsawcPjxH04wSKPaaw5cGGOffh27w%2Ba5YUmjnbs%2BjmgF7kuPBT5DbBm6pAjr5ASg%2F8EI7f%2BpIDvgrZXOuxnfgG9ExPaIJ87uRXkYxn%2BCfwD5opkc6W%2F9jt15kXkOnqgtavPTyOdGiJ5diGim2v9wHPGSAxq0OZb8o65yebRTiknAlnAEFz4T7qAbdiuw19NfQkzWyV251zaPWdFOSYI2phL0RkcvFiEYz2hVcF8xd8BiV7Jp45Rnpjlyfwsm0V0TKwn8pAlI3yb4hhTeZ7hZl8XYz8BXZWCOGda0%2BE%2FxeVvnjD26YjKBjqkAf128s2DmEd45s1g1By6ON1raIs%2Ftu9vMo9r9rp4y7wA4hnadaDcjivYv9cU5oB960ePNudxvflPe6qs6Kt1RZpQ1OljnnTfqLQeTL9PV3ntdVvyuZq6r%2Fn8hc%2FpIYAXg3p1VQFxFNJAAHOyk%2FYy%2FjRU4WUKaXeCe%2FBu6A4G%2Fwcpheu55Xn7AFgGz2XoXLQ5RiLQGPU3U8a1R56HkbYtDOYOu2rc&X-Amz-Signature=8ffeda4a497741fb09f1a1285bf1c82f9b14df719fb251df3f01cd69d3124a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
