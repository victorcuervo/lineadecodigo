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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPEJF2W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2GUBZ9NapPzEuOzW4Q4w%2FH%2BDi6eKwynzX2n5lFUwY9gIgN%2BBZitS55I03STn%2Bi03YZcE5B0OZ4KuVB1SP5bKYkhIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAK%2BtS0lm%2BPMXqifkSrcA1j8GJk%2FKRC8mb57u4T3lwkfy%2FRhb02%2Fb7CnShxrZEKv2HhoZm5vFUV8o9sCAVE%2FN9q4XsNa0ZSsBQjhOHUrxyt881DrAhO0Pwqq6u6pmFAbkwcJ5Fqiwp5oRou1EeJtFe3zst1qBAaOXDlv8m4bHWehLD9tq0Czvi2KdVgDwOqgPStTJAq2Jtve25oD6eyKRSnruR4J7AkF%2BkOFx7jUxhCB%2BSzgGXVDIf5mK%2BEvyw9UVF5eTasAF19TMKCkRpwxAUhaqLAukswn1uIZl7Mvh6B03LJVNqHXflw0i2teqLuZ4HfAkFzoyVIODXfC1fA3%2BupYdAi1Zp1xdsB13iDYcyZSxTq%2BdCfKErTOc%2FW4N88PYDhDR052ZkSeUj6WkDOTj8gyO3%2F6xdYI1Ud3dpxCf2U2F%2FjNcOlARppichZeWasb8ko25w6Fpun%2FIW4qooihEl2wW7UvrfGIHSiDFhiQ%2FndTf3Ablk0Ygy2%2F9aDJKCWob1u6g5ufRlDQ1FbQNwh8a5ie9GeJnK0phxyW08khIIxMVcC6649uTPNohIz37iohzOSzZlzyJSaHNNBkkdiES6N7Ivi4ZbqWtisIdI8anTYKJy9P0yo1cpwmcJnmS%2Bumy4fX0Vc26KwsLhn2MIaxyckGOqUBq411pcvEgQJk5naM5CeO7Cc7n1Ao3Vagb3zZQwG3Zd1gnbBvWub1SQ72Y35dEDpXF2SijNM%2Bw9tu9ZZlcpISwqerB4T9gSc%2BwFfskhf9ug%2B1VwLuto1kBwFbqXeg391iN0CDEr3rRSJ23opR4W08kWMgtZUjCGu3aXQrpsm8jMyeVBtM%2BomttWIfJmFqX8pcnkxi2Hc1vxxHT9JZRjYdJX9ZKxvJ&X-Amz-Signature=26383da93fd179acacce7d3d7e2a3b7e3f7106498a6b88751d2c41b38b63ad36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPEJF2W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2GUBZ9NapPzEuOzW4Q4w%2FH%2BDi6eKwynzX2n5lFUwY9gIgN%2BBZitS55I03STn%2Bi03YZcE5B0OZ4KuVB1SP5bKYkhIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAK%2BtS0lm%2BPMXqifkSrcA1j8GJk%2FKRC8mb57u4T3lwkfy%2FRhb02%2Fb7CnShxrZEKv2HhoZm5vFUV8o9sCAVE%2FN9q4XsNa0ZSsBQjhOHUrxyt881DrAhO0Pwqq6u6pmFAbkwcJ5Fqiwp5oRou1EeJtFe3zst1qBAaOXDlv8m4bHWehLD9tq0Czvi2KdVgDwOqgPStTJAq2Jtve25oD6eyKRSnruR4J7AkF%2BkOFx7jUxhCB%2BSzgGXVDIf5mK%2BEvyw9UVF5eTasAF19TMKCkRpwxAUhaqLAukswn1uIZl7Mvh6B03LJVNqHXflw0i2teqLuZ4HfAkFzoyVIODXfC1fA3%2BupYdAi1Zp1xdsB13iDYcyZSxTq%2BdCfKErTOc%2FW4N88PYDhDR052ZkSeUj6WkDOTj8gyO3%2F6xdYI1Ud3dpxCf2U2F%2FjNcOlARppichZeWasb8ko25w6Fpun%2FIW4qooihEl2wW7UvrfGIHSiDFhiQ%2FndTf3Ablk0Ygy2%2F9aDJKCWob1u6g5ufRlDQ1FbQNwh8a5ie9GeJnK0phxyW08khIIxMVcC6649uTPNohIz37iohzOSzZlzyJSaHNNBkkdiES6N7Ivi4ZbqWtisIdI8anTYKJy9P0yo1cpwmcJnmS%2Bumy4fX0Vc26KwsLhn2MIaxyckGOqUBq411pcvEgQJk5naM5CeO7Cc7n1Ao3Vagb3zZQwG3Zd1gnbBvWub1SQ72Y35dEDpXF2SijNM%2Bw9tu9ZZlcpISwqerB4T9gSc%2BwFfskhf9ug%2B1VwLuto1kBwFbqXeg391iN0CDEr3rRSJ23opR4W08kWMgtZUjCGu3aXQrpsm8jMyeVBtM%2BomttWIfJmFqX8pcnkxi2Hc1vxxHT9JZRjYdJX9ZKxvJ&X-Amz-Signature=a3cc0498e8498ae1a626db981fc03c1435aeb0cceea8c1860007f67d8642a894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
