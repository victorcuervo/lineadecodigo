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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE364UQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYhqk8jmeFFygpI0jsFlncYHbRfe6xQ%2FYSzJ%2BG1IERIAiEAlG7Ou6sa9NYAjsVOUKP8M10bEdkyrOR8j4UJkYzCkfQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ8IJnhcyN2GpZ5SXSrcA76iCVzsJ%2BT0FJ%2FyHwr%2FKZiK0MenhtUEX%2FF6ouaJrG294vlcms6NMkBBh0mJogLbRlEOBGCi8LNtMlGM5H%2BNASQZtz0IRTR2776daeTiHZMt7C6sVvntBxKBANyh0Pq%2FUAi1SBfghFbbivwxzk2eSC2Ny2tD9OqeCrbIY7wnYk%2BlpmW2yE9faYRKs6scDoHqFSpd%2F0E%2BLm3Of5wyg4tddjaleSD%2FUdG9COulIBqTWcZtOA6VcwD5nEyUJQ2jzuWgkWqSoR1qAgI6xbEmMb7iSJGuLy0UPcmQGThKg%2FXYYjfZ7x02AZradfcpwgeRzhbXCd%2BvACeDwYVmHSSjO9Vs2j1IiWE7TZ1JzhHCMCmzO4Sq1bXbhHiazttWxnwoHTNBbsgrj4Yv9V3ZFMLvvrcXTBGhsjN2Q4zWf9r2EqMPH3SO2C%2BEwCvDrsWfC7bqj2Jp%2FHONL4LlpkM5JZEET5jAn8iW7CoIhfmGWuGl9LfdgqA3%2FLZoeJ6hcWoc515i4vJh6XOKZwS9HAm8b3DK3o%2BAiE7ugqpV19%2FsQWT0RRcrMMChBq12d0%2BFX1b9vs9JqxSp3hee5aJb%2FMPBTuRAXMX%2BxOgTRwLdmST1OYDEVurzISh7ELQqkyGKt26vVfOFMJfjisoGOqUBYbBouRkdTCyrqVVAG7fCwzLbV2pFwVVIlZxCBpi738FJqAtfNe2Sw1yKZuoX22O0AhiVuSgrZ8GfaKPFdm3fru7jlmcfTj%2FT8t4Hn2Ho2YiXKGAkerWJ2Sd3hUMbYS1UkXD%2Be%2BaKqsBIDSebmtJcXfjk%2FRbgyAw0AsHqOT5Cyse%2FK8JhPCWYhvIZXvs84TICkKx3cRjuRk0nd0AmhQUdJgdIkepp&X-Amz-Signature=5fb7d311cb3e52a9fc12b7b644d39b6c91c850a03e7e32c7851c6689dbc77859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE364UQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYhqk8jmeFFygpI0jsFlncYHbRfe6xQ%2FYSzJ%2BG1IERIAiEAlG7Ou6sa9NYAjsVOUKP8M10bEdkyrOR8j4UJkYzCkfQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ8IJnhcyN2GpZ5SXSrcA76iCVzsJ%2BT0FJ%2FyHwr%2FKZiK0MenhtUEX%2FF6ouaJrG294vlcms6NMkBBh0mJogLbRlEOBGCi8LNtMlGM5H%2BNASQZtz0IRTR2776daeTiHZMt7C6sVvntBxKBANyh0Pq%2FUAi1SBfghFbbivwxzk2eSC2Ny2tD9OqeCrbIY7wnYk%2BlpmW2yE9faYRKs6scDoHqFSpd%2F0E%2BLm3Of5wyg4tddjaleSD%2FUdG9COulIBqTWcZtOA6VcwD5nEyUJQ2jzuWgkWqSoR1qAgI6xbEmMb7iSJGuLy0UPcmQGThKg%2FXYYjfZ7x02AZradfcpwgeRzhbXCd%2BvACeDwYVmHSSjO9Vs2j1IiWE7TZ1JzhHCMCmzO4Sq1bXbhHiazttWxnwoHTNBbsgrj4Yv9V3ZFMLvvrcXTBGhsjN2Q4zWf9r2EqMPH3SO2C%2BEwCvDrsWfC7bqj2Jp%2FHONL4LlpkM5JZEET5jAn8iW7CoIhfmGWuGl9LfdgqA3%2FLZoeJ6hcWoc515i4vJh6XOKZwS9HAm8b3DK3o%2BAiE7ugqpV19%2FsQWT0RRcrMMChBq12d0%2BFX1b9vs9JqxSp3hee5aJb%2FMPBTuRAXMX%2BxOgTRwLdmST1OYDEVurzISh7ELQqkyGKt26vVfOFMJfjisoGOqUBYbBouRkdTCyrqVVAG7fCwzLbV2pFwVVIlZxCBpi738FJqAtfNe2Sw1yKZuoX22O0AhiVuSgrZ8GfaKPFdm3fru7jlmcfTj%2FT8t4Hn2Ho2YiXKGAkerWJ2Sd3hUMbYS1UkXD%2Be%2BaKqsBIDSebmtJcXfjk%2FRbgyAw0AsHqOT5Cyse%2FK8JhPCWYhvIZXvs84TICkKx3cRjuRk0nd0AmhQUdJgdIkepp&X-Amz-Signature=02f9b1c38784d39ce623416f9b868bfa564d65d722ea67416a5b28522d372223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
