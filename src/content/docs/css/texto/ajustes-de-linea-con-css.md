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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFWVRZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlSA38SUm%2B%2B91LE099ekF12DjqlLPGL4aMRHoX%2BpjLgIgWDvHGE1c807Vqksh8AjHyZecOoHGFdrWwztbQ15j9Ycq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPImIP46RNzsCV1MryrcA9BOj4b2gii0vsMpFipcVJy0KwwNfSkmGZYZ1hz2j9BnAuKIJOyC2doijVN5Xt7KYSpkm6d7j5MbWgxB3rmuPqOEHQfsBxgDgTkGmbdKkFaZzMtgWqkwbpn0LIlHDiAU1hHRO%2B2lvq0k1ziganLylAu7%2FZzFEZ0vo7gFLErHw5kAMDQrsO1XYR5ZqH%2BshIG9UstDca3PR2YMntqGlmkW06lxS3UjLD%2BHElvRWe8EPxuc1VbweJLgHmfi4AKnKjmoWSVOiJigFSFptqGoSLpj3K%2FgzGYbA7EGs%2F1mStPMarIj2YQ9ikFwb8sMxjxqnQPPC9EbDWo9Z345XTisFyvkNprRm1s%2F7Zu7xU8tfOlUeUTMew7JB%2FfnSuK7izREaZIg8ijS9n%2B1FJtly5OymgCOahzn3VkB89G4a2ih2TMgYiihpzbEQGzdLpM8wIys%2Bi0GZ2FATMAB6PGHD%2BC8%2F4BhAPlhRhLlQpgorCtJ1p7iOmvvZ48xY0SkMUmSxfZ6NLAI0k1VttGJr9ucq6x1fHGzYbm75t9ybB6eIb3aeqLQlVTUgw1k%2Be7xi4YspXeHEdU5Z3jbyNyNYmdQDJ5aGNxxKE3xZ3mRof%2BOfL2OVEMlpewR6hD3zNYqLnV52M1gMOb7h8oGOqUB8qZAA9b9rTopaiztucVCAU%2F%2FoYKvyOhF6JSasFTk%2FRmpzvZlepFFktdf9WB%2Fy4l%2FVsgC6J4AC7CgQlseJsE7xG4pqKT45lQIysPlVxqb2RKHjP00TTxTD4TB%2FoQY0q4Vavrk%2BbpbzDS2yUxWcObuY%2B7492oKjWx3vNvjfaz1w730VriS805GrOvbqgquC%2FDPdKPmrOHl%2B98Je3PT%2F%2ByzMwjhATKM&X-Amz-Signature=faff2cfe393f7b14a4477f2985bc36ffac80fdee97cea1bbabb106ec76338685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFWVRZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKlSA38SUm%2B%2B91LE099ekF12DjqlLPGL4aMRHoX%2BpjLgIgWDvHGE1c807Vqksh8AjHyZecOoHGFdrWwztbQ15j9Ycq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPImIP46RNzsCV1MryrcA9BOj4b2gii0vsMpFipcVJy0KwwNfSkmGZYZ1hz2j9BnAuKIJOyC2doijVN5Xt7KYSpkm6d7j5MbWgxB3rmuPqOEHQfsBxgDgTkGmbdKkFaZzMtgWqkwbpn0LIlHDiAU1hHRO%2B2lvq0k1ziganLylAu7%2FZzFEZ0vo7gFLErHw5kAMDQrsO1XYR5ZqH%2BshIG9UstDca3PR2YMntqGlmkW06lxS3UjLD%2BHElvRWe8EPxuc1VbweJLgHmfi4AKnKjmoWSVOiJigFSFptqGoSLpj3K%2FgzGYbA7EGs%2F1mStPMarIj2YQ9ikFwb8sMxjxqnQPPC9EbDWo9Z345XTisFyvkNprRm1s%2F7Zu7xU8tfOlUeUTMew7JB%2FfnSuK7izREaZIg8ijS9n%2B1FJtly5OymgCOahzn3VkB89G4a2ih2TMgYiihpzbEQGzdLpM8wIys%2Bi0GZ2FATMAB6PGHD%2BC8%2F4BhAPlhRhLlQpgorCtJ1p7iOmvvZ48xY0SkMUmSxfZ6NLAI0k1VttGJr9ucq6x1fHGzYbm75t9ybB6eIb3aeqLQlVTUgw1k%2Be7xi4YspXeHEdU5Z3jbyNyNYmdQDJ5aGNxxKE3xZ3mRof%2BOfL2OVEMlpewR6hD3zNYqLnV52M1gMOb7h8oGOqUB8qZAA9b9rTopaiztucVCAU%2F%2FoYKvyOhF6JSasFTk%2FRmpzvZlepFFktdf9WB%2Fy4l%2FVsgC6J4AC7CgQlseJsE7xG4pqKT45lQIysPlVxqb2RKHjP00TTxTD4TB%2FoQY0q4Vavrk%2BbpbzDS2yUxWcObuY%2B7492oKjWx3vNvjfaz1w730VriS805GrOvbqgquC%2FDPdKPmrOHl%2B98Je3PT%2F%2ByzMwjhATKM&X-Amz-Signature=9b1bd44aeda4786a49bdd1d163572fdb036201af9e105105fabb1fd70e0cbd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

