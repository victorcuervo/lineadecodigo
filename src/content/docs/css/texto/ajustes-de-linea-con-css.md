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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVR3PHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs%2Bal4DwSkT2TlXivVREpRF3CN8TSJMtw5wDD53HnVGgIgchqqH8dsCfSZlB6l6Co24UDj67VikLl4rT5zkK5aB9Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCb88CqDBNhYaInqiSrcA%2FGibs4OciZDrqaUU%2BDnZmZC7ZJip7lXG11ptecBNglnN9ZVELG6MyKcn0hNZWJOjaxWkaNDF3bek27LcsNhlo%2FSP8ecF6soaUGkJKSKSAzSkBITehrr%2Fu9z3WWAx9jVnnIWa9yMkGTA%2Bg3HdurDa3UcV9btUqV2rpg791Bkdy%2BWu3599HWlgoLRI5WDygSueIMmeF%2FvVoAEV11cLOBKNxPCaOmo6UXANyMfvKw93TjjqEjpVLXDS2TZ9Ani2FzvTkdIg2EH3adP%2F6zKYZ9W8tWHP3ZUrLrOjB5m6HJ%2FgmSS27eacCYv2MIUtwqte8zvJ9F%2ByGIeZQg3oj56db6HD%2FBJk2X6C%2FnqzUAWWLJcYrI8pNOsgQcxJpZB27zRc5pBqxCGOpCHl4toVr7QX1Cb71H4TvDHRLlVNGD5CMLWNdSOQ9EkSB%2FrLNch1c15fnNsqoEd5AFAv860RlIcfyiglynSq6HWOzftHOV%2FxT4wP%2F0UvZrE7pPdUPuAZi1qvU7x3aoVLhKGwxI%2BY%2BEXX8DjRMk4xDUOx1Amcbt2vI6F3y6jOq3bFadWU8iFT0bPO95a3idNic8uXTJ66PSbVcDqc4eqF28pH%2FapKeojAZKN8E85L3LYGKTZPLB0snfMMPm3icoGOqUBpHhoEKhAWJHHdb4MpBtktJQlndhpVvB01Rn5Qeq6TR2sgIedrqHSu3OuTsHZGFdafkFO2qUPmeInMV0en92K4UvuDbIEuo5SlQHtyWGCTW2UCsKfVDbPA8QvDxq3OBqXPGF76c3kip5YjEjyJQDlrg4uDeDPKTo%2FQKnFtdHxRuHQueyFlW1%2BSgm6VhuvrmNXBe1TUkilP6elrTCFcgcbtkSRuVzi&X-Amz-Signature=041e960651dbf2f32739ce6b18ee5915085fd791910bc5b3cc9ec53e68720eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVR3PHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs%2Bal4DwSkT2TlXivVREpRF3CN8TSJMtw5wDD53HnVGgIgchqqH8dsCfSZlB6l6Co24UDj67VikLl4rT5zkK5aB9Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCb88CqDBNhYaInqiSrcA%2FGibs4OciZDrqaUU%2BDnZmZC7ZJip7lXG11ptecBNglnN9ZVELG6MyKcn0hNZWJOjaxWkaNDF3bek27LcsNhlo%2FSP8ecF6soaUGkJKSKSAzSkBITehrr%2Fu9z3WWAx9jVnnIWa9yMkGTA%2Bg3HdurDa3UcV9btUqV2rpg791Bkdy%2BWu3599HWlgoLRI5WDygSueIMmeF%2FvVoAEV11cLOBKNxPCaOmo6UXANyMfvKw93TjjqEjpVLXDS2TZ9Ani2FzvTkdIg2EH3adP%2F6zKYZ9W8tWHP3ZUrLrOjB5m6HJ%2FgmSS27eacCYv2MIUtwqte8zvJ9F%2ByGIeZQg3oj56db6HD%2FBJk2X6C%2FnqzUAWWLJcYrI8pNOsgQcxJpZB27zRc5pBqxCGOpCHl4toVr7QX1Cb71H4TvDHRLlVNGD5CMLWNdSOQ9EkSB%2FrLNch1c15fnNsqoEd5AFAv860RlIcfyiglynSq6HWOzftHOV%2FxT4wP%2F0UvZrE7pPdUPuAZi1qvU7x3aoVLhKGwxI%2BY%2BEXX8DjRMk4xDUOx1Amcbt2vI6F3y6jOq3bFadWU8iFT0bPO95a3idNic8uXTJ66PSbVcDqc4eqF28pH%2FapKeojAZKN8E85L3LYGKTZPLB0snfMMPm3icoGOqUBpHhoEKhAWJHHdb4MpBtktJQlndhpVvB01Rn5Qeq6TR2sgIedrqHSu3OuTsHZGFdafkFO2qUPmeInMV0en92K4UvuDbIEuo5SlQHtyWGCTW2UCsKfVDbPA8QvDxq3OBqXPGF76c3kip5YjEjyJQDlrg4uDeDPKTo%2FQKnFtdHxRuHQueyFlW1%2BSgm6VhuvrmNXBe1TUkilP6elrTCFcgcbtkSRuVzi&X-Amz-Signature=a4349812e8ef2118e458b88a3ce2ecaf5be4758da7ad22abc4832441cd56a983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

