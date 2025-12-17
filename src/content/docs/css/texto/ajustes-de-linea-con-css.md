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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3GIXCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhCh0g92z%2Fh3ImeIXm6OaojdgMGiqMjoiky6p0K4ceQIgSA0%2FfdS6gJ2iRCxOMWPhHBcbI5Aojny%2BODuMVjzFHbQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP5I4%2BffThWCH91dTSrcA0U4ZIE8EMQSx%2Floty9H83F1ghJHmFNzm6LppDvUTlw4pLML0SLPJBiwtMT4pMKBaqtOhxIUGuiKUWAzwX355aMajovRbnsXDw0UXc72%2FjSbv6ojd5jdbi8b5d2Zu7LlFMLPM2Q49IYFLvtLti0MLnkApOavVj2ZJD5%2FVphTQ8BGlf1jKObA0ncsHW6nXKf7P6%2FDgK7AvGXfpYaGxTugVulglNGDOzK9ZU4p27UXPvkpidkcf50BS2mnUpFKwGEUAuVrXDitHhZ43imikxuC%2FjTEnwSTz9Rayp4VgjiJBcWUZXNmhIzIrGsBsujyZ5ewKst3CBMxOotNcQXeqnKW3iFx8m8p9wDImGNgvBrzx%2Br9XGk4U4yZDEC3wttkxEcfZoCBxXZ8wmVrCf2LhbrM40fLmFz3uq2R%2Fv41Sp4%2FE4NbdphX7bya7ZD1SjOHwfIOqMJ1Pp75uqEOXqDefHJmmgmAzQBLFjnQ1KCPOK4bBNN%2FO4%2Fz5Ic9Smj%2BH%2B29FH4229vWT5dmFsBmHjCkYEfvHGabKy8u%2BBxDRiIuJlFfDL5%2BfhjHTpIapqX7j26Pxab7IyseShmaU68ljed6zgX3XjQ7fwxdt643jm8t%2BY0Qy1kqP33Y1upf7LCybyKWMPHSicoGOqUBiIxajFcjVNzeb03AtakwWhlDanYAM%2FqnSbWtMBJ9cExEbytQjetowo1vINHI7oQI41IXsnwTI3G76WZwCxQO4WGhkrVdY0gVrocIqR37qwr84t3KHQ9yX%2B0PcXuQuSVqMIaBKXLvNNR%2BwXFs%2BRlBnelo9jDl332%2FRDTs%2BvPiBKTgeTZ9JyKa72PQTAI4BUIcmlv4NutsDnpbRN0u3W4ajmrqzqOP&X-Amz-Signature=596d660eca4a4f0a80975d69b55c3ed1bb15ca8e4145fd94c7b6e5dd9abca75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3GIXCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhCh0g92z%2Fh3ImeIXm6OaojdgMGiqMjoiky6p0K4ceQIgSA0%2FfdS6gJ2iRCxOMWPhHBcbI5Aojny%2BODuMVjzFHbQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP5I4%2BffThWCH91dTSrcA0U4ZIE8EMQSx%2Floty9H83F1ghJHmFNzm6LppDvUTlw4pLML0SLPJBiwtMT4pMKBaqtOhxIUGuiKUWAzwX355aMajovRbnsXDw0UXc72%2FjSbv6ojd5jdbi8b5d2Zu7LlFMLPM2Q49IYFLvtLti0MLnkApOavVj2ZJD5%2FVphTQ8BGlf1jKObA0ncsHW6nXKf7P6%2FDgK7AvGXfpYaGxTugVulglNGDOzK9ZU4p27UXPvkpidkcf50BS2mnUpFKwGEUAuVrXDitHhZ43imikxuC%2FjTEnwSTz9Rayp4VgjiJBcWUZXNmhIzIrGsBsujyZ5ewKst3CBMxOotNcQXeqnKW3iFx8m8p9wDImGNgvBrzx%2Br9XGk4U4yZDEC3wttkxEcfZoCBxXZ8wmVrCf2LhbrM40fLmFz3uq2R%2Fv41Sp4%2FE4NbdphX7bya7ZD1SjOHwfIOqMJ1Pp75uqEOXqDefHJmmgmAzQBLFjnQ1KCPOK4bBNN%2FO4%2Fz5Ic9Smj%2BH%2B29FH4229vWT5dmFsBmHjCkYEfvHGabKy8u%2BBxDRiIuJlFfDL5%2BfhjHTpIapqX7j26Pxab7IyseShmaU68ljed6zgX3XjQ7fwxdt643jm8t%2BY0Qy1kqP33Y1upf7LCybyKWMPHSicoGOqUBiIxajFcjVNzeb03AtakwWhlDanYAM%2FqnSbWtMBJ9cExEbytQjetowo1vINHI7oQI41IXsnwTI3G76WZwCxQO4WGhkrVdY0gVrocIqR37qwr84t3KHQ9yX%2B0PcXuQuSVqMIaBKXLvNNR%2BwXFs%2BRlBnelo9jDl332%2FRDTs%2BvPiBKTgeTZ9JyKa72PQTAI4BUIcmlv4NutsDnpbRN0u3W4ajmrqzqOP&X-Amz-Signature=8a13494e4ef81c5dfa4cc0c97a3af8b00f3eb2f5065dc9ea27dc8daa9c419d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

