---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6APC7Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGqKNjxVJ3ZrRCvBXHHlYNBnmX5xukh1adCcuU16b08AiEA5WlVLQlbFRvYhm4FDbOmapPMC37C%2B2oIOFsmKCVQn5kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkxruSxy5pkmlwKyrcA69wO7w0fGEUHzpPgseXVUvcJefSRcGj0dVN3L8qOiTnskK1YcEZc6oOjLFjTjoHI84M7rYvK1sTSnqYEj4PE7nAipmoWDwX5LtvXAKXgz%2BQzeOTCgorTZLAAZPVrrMwiXKbThpYpT9DKGIncnbT66xE00XvNiKo45eTvJE7iB7%2BVJ1syYAE1KcjQubmvZvfVG6Jdyr%2Bw6Ek%2F%2BphWsh9K%2B7AmMYXpt4DT1K4kZBDM7tcM2tVZ03FPUeY%2FkIFT%2Fjbqgl7ct8yqBLUrUUcl47HD2%2B6sZGBxQ%2F0%2BuNDm65VGg5Akc%2FOIqLkl1tCJ5b3T3U4gnw9%2BL5U0Z2%2BClTSpdBWSgoZU4gvIFhUUrs2shiMtdnxI6p8dqkDy51f%2FvP4MF6qUR1tWiiWoohSjGIzWLs27IXV%2BgGKo77FuaXYg1nmCrOusFlCwnUi7tJldN8fU3vyfUAotOw8IKMoc92R7JQ9Yl2NsTJHzLfnUh%2BH2jLVFvwD6SiBX1lrPf5jRnrXdxAI%2BO0Ip8mFlFlnnDIBeLzLswVTC4Hy5Zmc%2FuYIqkZ0AY5%2B4Umk9YIgmlrXCjRvN4RDvf7txO9FYsBlnp1FMoHtJV%2BTOcJblf6UfWCVsX%2Fwbbiytp10qYZwV5l%2FAHOOMPuei8oGOqUBHk2c7AZobkb4NyVVaQ%2FFR8RlOu%2BuZmXj9PwMJ4Lv%2Bk6lgxVQavlPytklBCq%2B%2BJFuLGPtR9rL1B%2FVDcR1enarc8GD88wiBvsbHnIBmGnT7PAVBmgrvgSPPrGDc2WZJ5Yncnbs3jCLImJijLhcp8bJXn91gSIilNumTbL694MEyozuU%2BuKBRpGI26dZwSsfr8vrt4Vrr7vA6XdJVqMv3fG6Z8bE%2FrN&X-Amz-Signature=80c0efd42ecf5e85ecb2c2ea13f397be2f2bc5d35c3bef0c82abdb3f7800555a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6APC7Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGqKNjxVJ3ZrRCvBXHHlYNBnmX5xukh1adCcuU16b08AiEA5WlVLQlbFRvYhm4FDbOmapPMC37C%2B2oIOFsmKCVQn5kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVkxruSxy5pkmlwKyrcA69wO7w0fGEUHzpPgseXVUvcJefSRcGj0dVN3L8qOiTnskK1YcEZc6oOjLFjTjoHI84M7rYvK1sTSnqYEj4PE7nAipmoWDwX5LtvXAKXgz%2BQzeOTCgorTZLAAZPVrrMwiXKbThpYpT9DKGIncnbT66xE00XvNiKo45eTvJE7iB7%2BVJ1syYAE1KcjQubmvZvfVG6Jdyr%2Bw6Ek%2F%2BphWsh9K%2B7AmMYXpt4DT1K4kZBDM7tcM2tVZ03FPUeY%2FkIFT%2Fjbqgl7ct8yqBLUrUUcl47HD2%2B6sZGBxQ%2F0%2BuNDm65VGg5Akc%2FOIqLkl1tCJ5b3T3U4gnw9%2BL5U0Z2%2BClTSpdBWSgoZU4gvIFhUUrs2shiMtdnxI6p8dqkDy51f%2FvP4MF6qUR1tWiiWoohSjGIzWLs27IXV%2BgGKo77FuaXYg1nmCrOusFlCwnUi7tJldN8fU3vyfUAotOw8IKMoc92R7JQ9Yl2NsTJHzLfnUh%2BH2jLVFvwD6SiBX1lrPf5jRnrXdxAI%2BO0Ip8mFlFlnnDIBeLzLswVTC4Hy5Zmc%2FuYIqkZ0AY5%2B4Umk9YIgmlrXCjRvN4RDvf7txO9FYsBlnp1FMoHtJV%2BTOcJblf6UfWCVsX%2Fwbbiytp10qYZwV5l%2FAHOOMPuei8oGOqUBHk2c7AZobkb4NyVVaQ%2FFR8RlOu%2BuZmXj9PwMJ4Lv%2Bk6lgxVQavlPytklBCq%2B%2BJFuLGPtR9rL1B%2FVDcR1enarc8GD88wiBvsbHnIBmGnT7PAVBmgrvgSPPrGDc2WZJ5Yncnbs3jCLImJijLhcp8bJXn91gSIilNumTbL694MEyozuU%2BuKBRpGI26dZwSsfr8vrt4Vrr7vA6XdJVqMv3fG6Z8bE%2FrN&X-Amz-Signature=9f27afa7e25ede7f583b883bd26f096c9e9c5849149729690d1a94acbdb85578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

