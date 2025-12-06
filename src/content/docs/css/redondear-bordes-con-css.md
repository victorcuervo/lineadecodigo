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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7M54FYM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2DwIx5VrQu0tcfu0vFItzhR0roG6Vbjd7y2P6%2B9NMZAiEAscuIogXFwUhStVQfkJvKcZfq9QPdMbYKkwavsXS620gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOBVLyoxvzKnS8MH%2FSrcAxjk1T5khWYpd6xZiCJfKuPMa2naOjUsrNvhenAPPrR2KyWARxs9D92qnUi3%2Fri0XFBdvM%2BnClu1KCCdZWJVB79t7yG9qz2fr3s0rvtgGLXYNGW%2FBYIDa2z4Nvdfpw1LnbNzQLqgV6s56py6Dl5sB453hBxvnMFKPeces36oni455%2B%2FC43WAFxpyHtQj8THRBaVw7RkxOU4moHYwUsuupOpiBMHlok4mdqule6oRx6Agf2mxtmFVXiWexU%2FxY03CZq2klm75fwiNyXG2AQIqAbksSFcX%2BDu5LPCBujKv7s6nD%2BEZr%2BTjHobNiA%2Fa54clFhRTfUnSRqZY8HmjOgLuGoL%2BX9%2FD03nNsQJh1WNwhKxmzjspQrcZjy28xPp%2F2Q3VK0wqsPq920AftBYNbwuuGXvGb4H3LYLyOpsjrGfIa04r4hImt%2FFcRmL9qkZ2%2B6Ku3K40LXZVT1ZBTLH10HhlerAYiZjxoXxw2e9tZJNgSY%2FCZM%2BYX0%2FNRB8CBV5bPvHhLYkVIvsVA7uFwBqXgnUGHTjiDARnFbnK6GtPpdFX4Njc21UjfYDoU%2F3K5XxXfJPGpTu8KS2e4UE1SY%2BRf%2BWOyRs9SCNfbWH2DCXTe33wT5fnjmAVm1kzhcnHpzMaMM6m0MkGOqUBbcYvSWQDwOiF3pd7tfwm7d4FOxthPt7FqFr4md5oIQVWTELPyhD23ECuw2K%2FJ5KPmDIrLBBzznvUChCOcA2qk8IzMjwpW0%2BX%2Bpznxq%2BTylDgWZPMwS8pdm5kSgSH23KV5m%2FlPvx569Ov4zliq92RF%2Fr6fILg7NYV%2BY9FhewjqQnkBgKIvMryO3hUpsUrWPslHuNZr6uAcA4W4kalJmerjIT9cGnu&X-Amz-Signature=37d11bf3c66d767fd5ca54676da4556da6cf65223d09fabbd096603950e03c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7M54FYM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2DwIx5VrQu0tcfu0vFItzhR0roG6Vbjd7y2P6%2B9NMZAiEAscuIogXFwUhStVQfkJvKcZfq9QPdMbYKkwavsXS620gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOBVLyoxvzKnS8MH%2FSrcAxjk1T5khWYpd6xZiCJfKuPMa2naOjUsrNvhenAPPrR2KyWARxs9D92qnUi3%2Fri0XFBdvM%2BnClu1KCCdZWJVB79t7yG9qz2fr3s0rvtgGLXYNGW%2FBYIDa2z4Nvdfpw1LnbNzQLqgV6s56py6Dl5sB453hBxvnMFKPeces36oni455%2B%2FC43WAFxpyHtQj8THRBaVw7RkxOU4moHYwUsuupOpiBMHlok4mdqule6oRx6Agf2mxtmFVXiWexU%2FxY03CZq2klm75fwiNyXG2AQIqAbksSFcX%2BDu5LPCBujKv7s6nD%2BEZr%2BTjHobNiA%2Fa54clFhRTfUnSRqZY8HmjOgLuGoL%2BX9%2FD03nNsQJh1WNwhKxmzjspQrcZjy28xPp%2F2Q3VK0wqsPq920AftBYNbwuuGXvGb4H3LYLyOpsjrGfIa04r4hImt%2FFcRmL9qkZ2%2B6Ku3K40LXZVT1ZBTLH10HhlerAYiZjxoXxw2e9tZJNgSY%2FCZM%2BYX0%2FNRB8CBV5bPvHhLYkVIvsVA7uFwBqXgnUGHTjiDARnFbnK6GtPpdFX4Njc21UjfYDoU%2F3K5XxXfJPGpTu8KS2e4UE1SY%2BRf%2BWOyRs9SCNfbWH2DCXTe33wT5fnjmAVm1kzhcnHpzMaMM6m0MkGOqUBbcYvSWQDwOiF3pd7tfwm7d4FOxthPt7FqFr4md5oIQVWTELPyhD23ECuw2K%2FJ5KPmDIrLBBzznvUChCOcA2qk8IzMjwpW0%2BX%2Bpznxq%2BTylDgWZPMwS8pdm5kSgSH23KV5m%2FlPvx569Ov4zliq92RF%2Fr6fILg7NYV%2BY9FhewjqQnkBgKIvMryO3hUpsUrWPslHuNZr6uAcA4W4kalJmerjIT9cGnu&X-Amz-Signature=a5a805c2e7042a91b5d4013bbe1908eebd08389c480d317aedafe02c530dabfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
