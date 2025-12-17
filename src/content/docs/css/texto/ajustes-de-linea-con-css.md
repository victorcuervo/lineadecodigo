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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCZ6643%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu%2F3VuCPvKME5QR9G4HBB0%2FKJqS0SAszm2ccLF0qnwXgIgLfAvZfbFwCMZyOw33C%2FWqNVgK4gx6vhdPCYBv%2Fi3ohIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjJF9OPscMrsZJuWCrcAwDoNMECyJCfVkbbYKC%2FvkEGyz1eeo0jh6cClMxK1j24q2AybavOyqS1zwlOgv%2FXOgr4OpAYwI5AHX%2FAJO1BCGmoLAdzFYUebxNAL5ccwXnTexNkzEx3nQt6VkaofaqS431YSO2vC%2F91VDNK1NmNvZCl76tWp7vqOQ4QpvmcWo2RSso4DUe6s2oP7rOpYrN9Ok%2B6moeAU8Sn8TyWh69dCuFBWo2PYjmx4bkR370YNaQjwWE528HafMz1P4p1%2FJyZgwxUrRb3%2FSVyGe4bX2L4Qgk83TWeUUmAd08wCJ%2B0kbA8ZMYWeQdu3xdfpNqD1lyiWYUqWuoGd5IRdi753ZeDv%2B068ZPevIL%2B0DIqShAVBTbBnwLFgKAjYGNgDdvaGCgS8kwJ38wFOzauKfEt2Q61808yHGzWKnrIa5xNxs0NQ8AuPF%2Fgd%2FgeLccZiuHvwYK3oP2%2BygUxxlqcX2bs8E5PA8DJu79MpgoL5CVgAQD%2FFq356%2B1nLuy3CdKEAUWnd3xF5V9IBJ42fQI0LISGBsRBP0io5zUwInpvuCS5q5E1A7MsnsA%2Bjq6HsNkeXYtt4ZTJ0GMxdVU0lfOYEN4IYDWkXth5RVAIhLTpTIhde4E7SCd5f00rE1BicPSITHzzMM%2BujMoGOqUBMwQwvRxfOfbpnAA8wHph25qdLYQdhiOsOf2EBO%2FkR0Z8VUFfEqAqacgVsylWfVrucYg2W6iLTPcjDFkjrWIIecS%2F2zHXQLFl8HbT8SeJXFUiBP6t%2ByyiqKMwHPekXS8cZOEBr7BQF16EvNU4moOiwTFpLn9OZTr%2FB8NcJVl2b%2B5M4O3gtOA7fRyUJ5hxez4E%2Bj7NGdIHvOgdR8VtnTEtvvEt7Rwi&X-Amz-Signature=942b4115a245b7d1e365024c3fcd47f19fb8e40325b07b925054f68fe262b278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCZ6643%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu%2F3VuCPvKME5QR9G4HBB0%2FKJqS0SAszm2ccLF0qnwXgIgLfAvZfbFwCMZyOw33C%2FWqNVgK4gx6vhdPCYBv%2Fi3ohIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjJF9OPscMrsZJuWCrcAwDoNMECyJCfVkbbYKC%2FvkEGyz1eeo0jh6cClMxK1j24q2AybavOyqS1zwlOgv%2FXOgr4OpAYwI5AHX%2FAJO1BCGmoLAdzFYUebxNAL5ccwXnTexNkzEx3nQt6VkaofaqS431YSO2vC%2F91VDNK1NmNvZCl76tWp7vqOQ4QpvmcWo2RSso4DUe6s2oP7rOpYrN9Ok%2B6moeAU8Sn8TyWh69dCuFBWo2PYjmx4bkR370YNaQjwWE528HafMz1P4p1%2FJyZgwxUrRb3%2FSVyGe4bX2L4Qgk83TWeUUmAd08wCJ%2B0kbA8ZMYWeQdu3xdfpNqD1lyiWYUqWuoGd5IRdi753ZeDv%2B068ZPevIL%2B0DIqShAVBTbBnwLFgKAjYGNgDdvaGCgS8kwJ38wFOzauKfEt2Q61808yHGzWKnrIa5xNxs0NQ8AuPF%2Fgd%2FgeLccZiuHvwYK3oP2%2BygUxxlqcX2bs8E5PA8DJu79MpgoL5CVgAQD%2FFq356%2B1nLuy3CdKEAUWnd3xF5V9IBJ42fQI0LISGBsRBP0io5zUwInpvuCS5q5E1A7MsnsA%2Bjq6HsNkeXYtt4ZTJ0GMxdVU0lfOYEN4IYDWkXth5RVAIhLTpTIhde4E7SCd5f00rE1BicPSITHzzMM%2BujMoGOqUBMwQwvRxfOfbpnAA8wHph25qdLYQdhiOsOf2EBO%2FkR0Z8VUFfEqAqacgVsylWfVrucYg2W6iLTPcjDFkjrWIIecS%2F2zHXQLFl8HbT8SeJXFUiBP6t%2ByyiqKMwHPekXS8cZOEBr7BQF16EvNU4moOiwTFpLn9OZTr%2FB8NcJVl2b%2B5M4O3gtOA7fRyUJ5hxez4E%2Bj7NGdIHvOgdR8VtnTEtvvEt7Rwi&X-Amz-Signature=703a25248399f33be2134d2011f25827e1ebf00d4cbe99ba105e99acea5fd208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

