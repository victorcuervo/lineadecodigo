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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMS56YAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3s%2FILdx9m5xW7TfeniV4ip5mNi2ywrBgVEU2yDfw4TgIhANC3JVpn9jnjO8qX%2BWQ0la96wn6rLGTKjqNPdaO44bZoKv8DCHwQABoMNjM3NDIzMTgzODA1IgxCHCWg51EX4Gq6O%2FMq3APej2BmdUHCH4dfkbLv3mtZn2%2FSXw2sDlq4B7uusaW23RGQ8Wc2wM5SFhxQXZ%2FHuZ05VTXDDwpRIxGkxtJCH1HKp2ASgg6OXo0xJXjugVOIL9pMygTmURc3CSvinNq4gHuKGkzscsNfbKDqEvPtqPQmuDcBCUgvhyo21m6abfxR%2FLPVc1%2FewX0ze992CvV4hqBG1l5PtVkB%2BWXMN3NlmGEr01tGM9hsBr0LQbq6xo4qgHQz3aSBX5nIxI%2B2CCU9b6f6rRyw2HjyMtxWR6W%2BCWNLYcYs5MBhmxHSMBsUVYnpW%2FDLR6IOATJuokWzUvcLkXoIr8MSp3Lc0BFUbKou19Q%2Fq7%2BQfLeW5Jfb9qWxlgHPsD8PjcMgK65pV73C9%2BfwARb7rd5hDB5Rs%2F%2B72cL4UjZDZRmTEMqvKQc%2BeKBhDZr8wKbc9dqteNyQ3wlV6Pw3XcHw%2BWQbGV87bLN%2BIz%2Fnvj6rdrnfiuQzBZSyElTthY4TCyaZ8Mgz2DNd1Uyw7JZ4T%2FysaECJbSSiE6kMhcnRucQQJNpbRbqHC%2F8CDe63dZNgMkcPh8tcn82UCKVFyu2p4rzjaWyuHQokomYFpLXJxgZvXVm5Voz%2BQr7nlASdKSFAwiMJuEGfcEzlitFsWDD2jorKBjqkAeq%2BYpZipfEceIAFVpXPC%2FxNxQ2Fv165DFCiQjkdw7lyNX%2F%2BwTVkGh9yR%2B6CDdljRyVeBYiQzcWXpQPT%2B25rBUAkfKijVxB1y0wUq8vV6yfq3TmXzkEwywnt4RKzc8cx%2BM%2BSb17ZscF%2FCK3hMHBCerXm%2FV6Zxv9I48OOnD%2FcCiLczloLl64U0IR9XIGPej%2BTFZfNE%2FgBk5CfUF2AFJK%2BcN%2BXeZVI&X-Amz-Signature=8bbef4fdf2143b12fa0d7c94bedf1dfe9ce5c917e485dfb9dbd674dec2de6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMS56YAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3s%2FILdx9m5xW7TfeniV4ip5mNi2ywrBgVEU2yDfw4TgIhANC3JVpn9jnjO8qX%2BWQ0la96wn6rLGTKjqNPdaO44bZoKv8DCHwQABoMNjM3NDIzMTgzODA1IgxCHCWg51EX4Gq6O%2FMq3APej2BmdUHCH4dfkbLv3mtZn2%2FSXw2sDlq4B7uusaW23RGQ8Wc2wM5SFhxQXZ%2FHuZ05VTXDDwpRIxGkxtJCH1HKp2ASgg6OXo0xJXjugVOIL9pMygTmURc3CSvinNq4gHuKGkzscsNfbKDqEvPtqPQmuDcBCUgvhyo21m6abfxR%2FLPVc1%2FewX0ze992CvV4hqBG1l5PtVkB%2BWXMN3NlmGEr01tGM9hsBr0LQbq6xo4qgHQz3aSBX5nIxI%2B2CCU9b6f6rRyw2HjyMtxWR6W%2BCWNLYcYs5MBhmxHSMBsUVYnpW%2FDLR6IOATJuokWzUvcLkXoIr8MSp3Lc0BFUbKou19Q%2Fq7%2BQfLeW5Jfb9qWxlgHPsD8PjcMgK65pV73C9%2BfwARb7rd5hDB5Rs%2F%2B72cL4UjZDZRmTEMqvKQc%2BeKBhDZr8wKbc9dqteNyQ3wlV6Pw3XcHw%2BWQbGV87bLN%2BIz%2Fnvj6rdrnfiuQzBZSyElTthY4TCyaZ8Mgz2DNd1Uyw7JZ4T%2FysaECJbSSiE6kMhcnRucQQJNpbRbqHC%2F8CDe63dZNgMkcPh8tcn82UCKVFyu2p4rzjaWyuHQokomYFpLXJxgZvXVm5Voz%2BQr7nlASdKSFAwiMJuEGfcEzlitFsWDD2jorKBjqkAeq%2BYpZipfEceIAFVpXPC%2FxNxQ2Fv165DFCiQjkdw7lyNX%2F%2BwTVkGh9yR%2B6CDdljRyVeBYiQzcWXpQPT%2B25rBUAkfKijVxB1y0wUq8vV6yfq3TmXzkEwywnt4RKzc8cx%2BM%2BSb17ZscF%2FCK3hMHBCerXm%2FV6Zxv9I48OOnD%2FcCiLczloLl64U0IR9XIGPej%2BTFZfNE%2FgBk5CfUF2AFJK%2BcN%2BXeZVI&X-Amz-Signature=ea5e9edbbfa3a1bb04f530524634fa81ae123c02e5cb741a3c4917701f2297b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
