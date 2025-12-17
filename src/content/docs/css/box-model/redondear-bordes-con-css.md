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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNITNMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVkBMM1vK9NSLFKwsvL69oHqb%2F0zHoXZScPx27uDrPeAiEA1P5%2F9MjHlidUac1laV2tmLAkrvq0cL35hJeMXxuyCaAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV0WPdyGomkPjBE9ircA69bFFAnMNeYnkp%2Bj7kblVlETcO3Mz4lkhAE8Du3YArcIYJrwmY5RutrEy3isoTwcz38snpw3Lo6ZWs9080vBC%2FdPd9LpVG6vsyH3MKMR0eXqaCMSC8nyHFpABc4RcwROL25YLXlvP3tfJAoMA9aPvcjY4XZhtv%2BpzN78tUieA%2F%2Bvjx6AvbthIvy8ABV%2FxWT8YqdfV9ntiGUq%2FsxsTnqsXH4rI5bAgpa8FA5KENcqnmiUx5NaS9WTslOdFc02Emoaek7LOQi0WA6zWUAfmExO60H0WpmQjXavqrCEcr%2F%2FHvyi33De%2BRLNS9O0a6getBtOU88NK9gmhm%2FHUc5qYE9JvUhZWs0wILLI7U4jOvVIlovx32JUmAloJkXEEou8rtnSM0tXRUWmYDNDNTPJY8QguqPzKO3nIlMrDfNaPlLSn53zlIlsVZxECEuuVf0UTpCk5rj6rBAiwSDE0WNMaw5oPYILsY1IOyOP%2FNOQ2hGkXHMWaPF2%2F593NgAtVYNxmjK6ArsUSGkfz%2FgQy0LGoKPJ5uLnZ2AlsSGvpipTEKpZg7RM50outbB8N59cy%2Bdwuovy0cZdGcFv17Tm1kAF5vIgkRPfeCT%2B9LJhfw%2B09Z%2FLUMn1%2FhnNkfb5OXCMYJaMMaAi8oGOqUBS1GzKodniJ6ySciZ92QRboZ6HipNkK1rI7sOwC17DRFWymI%2BDObLzTmplgvj4TpSC8qCSb%2Fe9RXlv7X%2BRoH5Ef6NZHEwIbPu%2FVW7x27ouVoylLzd3IXCR32MGRaSqoaWtlnwR%2BohRwkR7GEJWP40XswUwLNMOrsIRxFdvN%2B%2FRJGub5zLIJV2zkS%2BalXoNb4yx5UVEPqOBKGe7QMx0zYDravdxwzt&X-Amz-Signature=8fa09812c67f832ee45ccd0d85283ae1f690b7b0e3ef96890ac610d13e140a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNITNMH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVkBMM1vK9NSLFKwsvL69oHqb%2F0zHoXZScPx27uDrPeAiEA1P5%2F9MjHlidUac1laV2tmLAkrvq0cL35hJeMXxuyCaAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV0WPdyGomkPjBE9ircA69bFFAnMNeYnkp%2Bj7kblVlETcO3Mz4lkhAE8Du3YArcIYJrwmY5RutrEy3isoTwcz38snpw3Lo6ZWs9080vBC%2FdPd9LpVG6vsyH3MKMR0eXqaCMSC8nyHFpABc4RcwROL25YLXlvP3tfJAoMA9aPvcjY4XZhtv%2BpzN78tUieA%2F%2Bvjx6AvbthIvy8ABV%2FxWT8YqdfV9ntiGUq%2FsxsTnqsXH4rI5bAgpa8FA5KENcqnmiUx5NaS9WTslOdFc02Emoaek7LOQi0WA6zWUAfmExO60H0WpmQjXavqrCEcr%2F%2FHvyi33De%2BRLNS9O0a6getBtOU88NK9gmhm%2FHUc5qYE9JvUhZWs0wILLI7U4jOvVIlovx32JUmAloJkXEEou8rtnSM0tXRUWmYDNDNTPJY8QguqPzKO3nIlMrDfNaPlLSn53zlIlsVZxECEuuVf0UTpCk5rj6rBAiwSDE0WNMaw5oPYILsY1IOyOP%2FNOQ2hGkXHMWaPF2%2F593NgAtVYNxmjK6ArsUSGkfz%2FgQy0LGoKPJ5uLnZ2AlsSGvpipTEKpZg7RM50outbB8N59cy%2Bdwuovy0cZdGcFv17Tm1kAF5vIgkRPfeCT%2B9LJhfw%2B09Z%2FLUMn1%2FhnNkfb5OXCMYJaMMaAi8oGOqUBS1GzKodniJ6ySciZ92QRboZ6HipNkK1rI7sOwC17DRFWymI%2BDObLzTmplgvj4TpSC8qCSb%2Fe9RXlv7X%2BRoH5Ef6NZHEwIbPu%2FVW7x27ouVoylLzd3IXCR32MGRaSqoaWtlnwR%2BohRwkR7GEJWP40XswUwLNMOrsIRxFdvN%2B%2FRJGub5zLIJV2zkS%2BalXoNb4yx5UVEPqOBKGe7QMx0zYDravdxwzt&X-Amz-Signature=df9988e2a05b3a87348195fd4a8bd641dd6d0e470a6bbf76c53ad34957d79c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
