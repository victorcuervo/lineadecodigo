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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2E7752%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlhhr6p%2BxzTqTi2LJppOM%2BbNhzjldggQ1NWpXXT%2BV8yAiBOKYP4u196nWle8b%2BmeW97xzjGagjrqFPXzpBB4uTRaiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUxBa9EWeMMXlTmmSKtwDyRpnyg%2Fmr%2B9bOwMMkwEnOLMlFTAbBg37%2FMQ6A89Y4tTN3c13NKcqIocEZViDWlCmVVWEU76wf3tZRHnFfJyl4xOgyX8WamZbqHWHXelSWq1h0Ao0OamjE1vQExG8DdNuMREyVeeChObuzIwBVbbPpD2WW4937voBLK39lOBttgiUnvL%2FOldcsgbXbAkB64TiIF8cLlpoFesv6CCuIuYeWquOvhT18ZyCShwLLTd4YjRFMTy9GZCiQ%2BxLAn%2BP6AYxP8m0XZ80TXtEfStXbXhcBl7%2BLYY5hDoe6F4RW2dJ%2F7xoIvIsWNbussI%2BK7doVGFzCg3Y3FgSibr%2BH1taRkd9uged%2BJp377nNGYTkTgRKUeWkfY%2FH%2B0e7iEm9SWVf9quanaWmVaItz950h8I1AbVj7rW1gnUZTRLQ0xo3BSFV8tMm3Treer1J%2FAtSu6wmw8Bjt7uuODGwk7pRFtqmBsFA%2FoTHa8LNAks0PXN%2BJjcpIEoNmTi1%2FS3Kf%2BV2iIFYA%2FRjPdrc55dPZFhmFgq%2FproN3F7vg%2Fkc1KYFxhqKqtPvzfAIGbUefATu6NyDrkNqlAhDIHUiM0UBLwkXWr2ivdp0RnKuW%2FGg0GI51jaavA5dsGTkgCvZ0kP9yX8ZDV4wyJ%2BLygY6pgHsyCEjdwCl7d2FMs81jr9IxJCnDwK7a2%2FLNPwpBPptZcqQj33nZAZ2Hk8U2cuIZS4CjNPuRJmI8aHntb9F9Zt6esDPyZVvYakTA6MNvgux9fOLUTnQpNQT4fYKcEbqRn4HZu3r82UOKgLUEDCP4ci5KZCn4Wdf4lNrykCM%2FK4aYkrjZXXtyDoHGlXxq37pJfXc3q%2B05v7JObCu6PoZIeKDnnebbNun&X-Amz-Signature=2f27133590eeb5199c35d5118f2059f2f2f68f818349b52879aa20682955dd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2E7752%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlhhr6p%2BxzTqTi2LJppOM%2BbNhzjldggQ1NWpXXT%2BV8yAiBOKYP4u196nWle8b%2BmeW97xzjGagjrqFPXzpBB4uTRaiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUxBa9EWeMMXlTmmSKtwDyRpnyg%2Fmr%2B9bOwMMkwEnOLMlFTAbBg37%2FMQ6A89Y4tTN3c13NKcqIocEZViDWlCmVVWEU76wf3tZRHnFfJyl4xOgyX8WamZbqHWHXelSWq1h0Ao0OamjE1vQExG8DdNuMREyVeeChObuzIwBVbbPpD2WW4937voBLK39lOBttgiUnvL%2FOldcsgbXbAkB64TiIF8cLlpoFesv6CCuIuYeWquOvhT18ZyCShwLLTd4YjRFMTy9GZCiQ%2BxLAn%2BP6AYxP8m0XZ80TXtEfStXbXhcBl7%2BLYY5hDoe6F4RW2dJ%2F7xoIvIsWNbussI%2BK7doVGFzCg3Y3FgSibr%2BH1taRkd9uged%2BJp377nNGYTkTgRKUeWkfY%2FH%2B0e7iEm9SWVf9quanaWmVaItz950h8I1AbVj7rW1gnUZTRLQ0xo3BSFV8tMm3Treer1J%2FAtSu6wmw8Bjt7uuODGwk7pRFtqmBsFA%2FoTHa8LNAks0PXN%2BJjcpIEoNmTi1%2FS3Kf%2BV2iIFYA%2FRjPdrc55dPZFhmFgq%2FproN3F7vg%2Fkc1KYFxhqKqtPvzfAIGbUefATu6NyDrkNqlAhDIHUiM0UBLwkXWr2ivdp0RnKuW%2FGg0GI51jaavA5dsGTkgCvZ0kP9yX8ZDV4wyJ%2BLygY6pgHsyCEjdwCl7d2FMs81jr9IxJCnDwK7a2%2FLNPwpBPptZcqQj33nZAZ2Hk8U2cuIZS4CjNPuRJmI8aHntb9F9Zt6esDPyZVvYakTA6MNvgux9fOLUTnQpNQT4fYKcEbqRn4HZu3r82UOKgLUEDCP4ci5KZCn4Wdf4lNrykCM%2FK4aYkrjZXXtyDoHGlXxq37pJfXc3q%2B05v7JObCu6PoZIeKDnnebbNun&X-Amz-Signature=24f823ecb0a2defda2120da3f4899655f346ae8d3c6f62d0b4cd54d061054225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
