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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU4PA2K7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDISwmDvm3WmiuLDylIPYp2P2dlqIXYN2hGrMDAahwzkAiEAgfpEPQYFkgRaQJsOsb0HVzfks%2F9IHZObJkz3De4V6%2FUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq77aSRxCwYwjCp2SrcA%2F57Mr2pwy0Vwz7csM%2FtHLiVMT52UHd8C4jDmQzjBYblZnrOJBOkkZsDxqkWBJ%2F3HhRPUS5smFMTJZWh5fxHtHlPrBT0LIe3zyfh2%2FiIwKdN%2Btd7SmpLuUkhVOLBwi3rqxogdxOe4siF9wJ92ZWUKrz9EdzAKDE0ZzNsPQfkQuIc4Qr2t3zPLMtWW21EhnxbU%2F0R7cQYiT2A2JrhA%2FNXGnCYrTaI3LETk9o%2B0sWQDeH70Rfyt6cB5tzMsxMQMa04O%2B8oGCEdqrh9ouaoxWS4b1weH5UfEE07nYLObjMpXUCIIQlePH%2BmP3AsNtCgjbUX8ccN5s5HDLRrll8bwyDB5vyViJuu1Nn0C4z4MFf0MNwoMSXCY3v5Caha8Q0iK6s6szhiPSLoepWB%2FU8cVB2cHWp1MkdHT5Zsyx9AKSIYhsodasEDhFik42HR7i4t0n4mTqomlOzGdH7l5LrYnsQse2BxhjBQshph7cr1SwB36ZXLysLakdXpU3Q9Ejd4363%2B8EdWo41Pk3T2rPyPu7OX2DJ3QavdKiqu15vLaFFFfHjYdAh%2FEYrjN4BSZ69%2FWL1wG4ynqlUb0G6hFR8nPegzCMtIgoR%2FHHZmJazvH1egQtuo0lSblpV2b8KRDuXqMPWc1MkGOqUBH81MIuoxQtQLbJUFJoNGHKM1eS3JIIbfVGUSfu2pWT2%2BLd4Iqa4KeW2dKcs31aQ6AokcgMZN%2Fvk%2BBJBU%2FDuA755eHg4X85simAFAibPxQh%2FR1PjvPCzo75%2FZBS2ApjprCbw%2B81mzDylftvXR2%2FohsVHoI53%2BvoSUA6xWHispr8zrTPYoH8mqgVLxxKJFpK0H9uDQ93esw7ZHw5ET4ZGaCGaq3C%2Bk&X-Amz-Signature=6475fe437f3f5bfbf68fc7e0bc7128dc40d21bce3e947b965153e729a7529b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU4PA2K7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDISwmDvm3WmiuLDylIPYp2P2dlqIXYN2hGrMDAahwzkAiEAgfpEPQYFkgRaQJsOsb0HVzfks%2F9IHZObJkz3De4V6%2FUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq77aSRxCwYwjCp2SrcA%2F57Mr2pwy0Vwz7csM%2FtHLiVMT52UHd8C4jDmQzjBYblZnrOJBOkkZsDxqkWBJ%2F3HhRPUS5smFMTJZWh5fxHtHlPrBT0LIe3zyfh2%2FiIwKdN%2Btd7SmpLuUkhVOLBwi3rqxogdxOe4siF9wJ92ZWUKrz9EdzAKDE0ZzNsPQfkQuIc4Qr2t3zPLMtWW21EhnxbU%2F0R7cQYiT2A2JrhA%2FNXGnCYrTaI3LETk9o%2B0sWQDeH70Rfyt6cB5tzMsxMQMa04O%2B8oGCEdqrh9ouaoxWS4b1weH5UfEE07nYLObjMpXUCIIQlePH%2BmP3AsNtCgjbUX8ccN5s5HDLRrll8bwyDB5vyViJuu1Nn0C4z4MFf0MNwoMSXCY3v5Caha8Q0iK6s6szhiPSLoepWB%2FU8cVB2cHWp1MkdHT5Zsyx9AKSIYhsodasEDhFik42HR7i4t0n4mTqomlOzGdH7l5LrYnsQse2BxhjBQshph7cr1SwB36ZXLysLakdXpU3Q9Ejd4363%2B8EdWo41Pk3T2rPyPu7OX2DJ3QavdKiqu15vLaFFFfHjYdAh%2FEYrjN4BSZ69%2FWL1wG4ynqlUb0G6hFR8nPegzCMtIgoR%2FHHZmJazvH1egQtuo0lSblpV2b8KRDuXqMPWc1MkGOqUBH81MIuoxQtQLbJUFJoNGHKM1eS3JIIbfVGUSfu2pWT2%2BLd4Iqa4KeW2dKcs31aQ6AokcgMZN%2Fvk%2BBJBU%2FDuA755eHg4X85simAFAibPxQh%2FR1PjvPCzo75%2FZBS2ApjprCbw%2B81mzDylftvXR2%2FohsVHoI53%2BvoSUA6xWHispr8zrTPYoH8mqgVLxxKJFpK0H9uDQ93esw7ZHw5ET4ZGaCGaq3C%2Bk&X-Amz-Signature=1b11e32531da07905cc7b56cd6cf261c7ff04c245407378a0bbca29968e8cd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
