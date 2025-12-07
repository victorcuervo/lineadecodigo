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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5SO2IR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnEHQHojN0yeOg9cDoL3el4lgT1ys3MtCOvV4DC2yyuAiEAg0xbToayo3dpOHSbv24xH4VkupY8Lwapfa01B%2BD6P9MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2zvitgAH1vvco8eircA5xIYhclh29VIJnNDVD5VXEdaDfusO45KMnN8AE1O4GNU5reCmlvjKuggXLoGaZhsqr6v4lZ8Yo%2Bl9WX%2FQKHKnenmyocj4Ww1ldA%2FGCC0wkTpKu%2F0bcCqRNQ5MugqBjJGHeGTNouuef4au3QjBM8i3D3n2ydSR2zDVrZZktxJZZ7ivyZ8ALKe2aXfGmtuNydYt0hNZA3FFOXBXFGdEjQxvnPSQWmvaSVE5zZjKzzjM38cSMqQ7IOuPG0uZmZKBvSiMwiUa4yEevuEBDPdLi%2F9N1jtITI5w2bBwQl%2FhUEFN2LSJdbNsmq7dVqfqwPTf8nC34ut1%2BIpChtO74pvCDz4%2Bkzb2N2M%2B03Uu%2FeFxGs461y9X7W2Rlfb8Aub2S77YE2hgBtvFu7YhFpzvo3y9VOXoVzYrZziOdOZkPkoYhznClDk%2FgmOJsrXPhWESF7qYAPUgCBCJWjCzXBNwd%2BGcr%2F1SLquDl0BSCS6oPMgWTCleX3OM5pLq7%2FhbZl%2BX7Wg5kHW5qk3SV4ef4Em5CrejPNZ15XmrduvidgdZOJvpbb09b5NvdLsdaw3zmd03EGfppo7MD6wJNWVvkj2hSa%2FznUoqqKZnPgvl4SiihhxZJR%2Ff%2FeNRODgy9dmHP7ZgTxMMrH18kGOqUBdCOqx1wQqbbeF2FCgh4Kr89UCmf3Pnfh%2FbbKBz%2B%2BcKo24dtuborUZUZ3zAHYmXuEQoG0Vg37TU8rLVjCzkLLC8LGaxSl7vKJmpmQMIKiv9nXV%2BQIAtHaJT4VylVZP0tM07gGqtIp6sOhs3YPjspmHu1%2Fc66ClbQ6vAoM9J1daHJUuhdlCWfSbR1Zlsd%2FE0Bqn4dpmgQCVb%2FFziw7gMZ%2BnedejLnm&X-Amz-Signature=c8dd3d4b21c67afd706ab748879da1eeb55af89e098d84d7c16c824cc5856c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5SO2IR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnEHQHojN0yeOg9cDoL3el4lgT1ys3MtCOvV4DC2yyuAiEAg0xbToayo3dpOHSbv24xH4VkupY8Lwapfa01B%2BD6P9MqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2zvitgAH1vvco8eircA5xIYhclh29VIJnNDVD5VXEdaDfusO45KMnN8AE1O4GNU5reCmlvjKuggXLoGaZhsqr6v4lZ8Yo%2Bl9WX%2FQKHKnenmyocj4Ww1ldA%2FGCC0wkTpKu%2F0bcCqRNQ5MugqBjJGHeGTNouuef4au3QjBM8i3D3n2ydSR2zDVrZZktxJZZ7ivyZ8ALKe2aXfGmtuNydYt0hNZA3FFOXBXFGdEjQxvnPSQWmvaSVE5zZjKzzjM38cSMqQ7IOuPG0uZmZKBvSiMwiUa4yEevuEBDPdLi%2F9N1jtITI5w2bBwQl%2FhUEFN2LSJdbNsmq7dVqfqwPTf8nC34ut1%2BIpChtO74pvCDz4%2Bkzb2N2M%2B03Uu%2FeFxGs461y9X7W2Rlfb8Aub2S77YE2hgBtvFu7YhFpzvo3y9VOXoVzYrZziOdOZkPkoYhznClDk%2FgmOJsrXPhWESF7qYAPUgCBCJWjCzXBNwd%2BGcr%2F1SLquDl0BSCS6oPMgWTCleX3OM5pLq7%2FhbZl%2BX7Wg5kHW5qk3SV4ef4Em5CrejPNZ15XmrduvidgdZOJvpbb09b5NvdLsdaw3zmd03EGfppo7MD6wJNWVvkj2hSa%2FznUoqqKZnPgvl4SiihhxZJR%2Ff%2FeNRODgy9dmHP7ZgTxMMrH18kGOqUBdCOqx1wQqbbeF2FCgh4Kr89UCmf3Pnfh%2FbbKBz%2B%2BcKo24dtuborUZUZ3zAHYmXuEQoG0Vg37TU8rLVjCzkLLC8LGaxSl7vKJmpmQMIKiv9nXV%2BQIAtHaJT4VylVZP0tM07gGqtIp6sOhs3YPjspmHu1%2Fc66ClbQ6vAoM9J1daHJUuhdlCWfSbR1Zlsd%2FE0Bqn4dpmgQCVb%2FFziw7gMZ%2BnedejLnm&X-Amz-Signature=7855760d38a54a168c815b7a546effcbc12c5b588f81ae2b966a21657de8b5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
