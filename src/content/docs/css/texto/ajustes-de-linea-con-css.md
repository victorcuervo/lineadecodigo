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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOC6OMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDzB2UueWbBacxgvqcvAhkKP4jzozs0G75lrhqwropgIgZh8XrQR3BW4zSBswwaCbCFzInVD2lL6PRbp1GS2w128q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDvQ304U0GsRgnSTrSrcAwbd%2B%2BkbNVm2O87PjOi%2Bie8cQBGUptxzx916ECnbV%2FtXzHuTXWmOU5cbrYL12w%2BphPGhJvL3h%2FXOx8yK1FyrIoqz2%2FziB8%2FPgUFm6k68yF8snFgd3jH5Mf5OboN83Bf4T2ZTGCTywWQxKCb499svDtM33k6f3KhLxoluspSBzsC%2FFxdj1JVb%2Fq7bGeZcjVIkMDoRrNdzeboLky9yGUvp1koqrJy%2B%2BzsotzsBDKjuZzvEO4hfXD0kn0%2Bkpp2XKvbQvw%2BI6S60ycDp1qVEtoO9mA8nd4tn8t%2Fq8S%2FTrjyR1NMNVRZil6gb%2FrtRwCzvv5sZpnmOEhZAwBf3GYblYQGcdPP5%2BfUdo6d349vY80iJKumcKxsq%2F1MLxWGtYH%2BwUxDJABZ5vvUnOD1cvMOScKlaQ45DdkydnOrjkhsWegOwRT9UgJB2ArrfSWd1NdlrZVgsyHYaTvV9z7IPoeUAxzGeTP81l2XoPCEWlU9fzP7%2FRdZP%2BambnfIQwkpyjO9ySe4qtXCil7%2BdC7jvSe43LE4rF2tQLJEEZq%2BzZF3pdZzV5R%2BRGm7pfHIQEtauMJEjJPreraFCEUYzbDfjMCm82ZxHn5LUxR83ylsodwcJXJjsPvD77Xwc5vK72lswMRW%2FMMPfh8oGOqUBDVapxH7C9QFqRDC31psze8bEQW7SM1hKIawC3FvWZmAdwYftmruYWQ2M0NofzFGP8MOVPeuo3by5mO9LMTMnRykkZBqYv5FcZ%2BXrL9MRfvJhwCnp88C%2B9HgyVm2Z5AKSd2UuyuOPx9Vr3mEvj0D8tn3t3ZzH0xYKiiPptB%2F18fDVkjbZOzheu8Xv3rYaYXbud2Btx3%2FpZqxZPvc0lvATa1osp5vK&X-Amz-Signature=05c7d76c605c958d89e0305fbecffbcaabce97e452dd6487a6625e414a4947e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOC6OMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDzB2UueWbBacxgvqcvAhkKP4jzozs0G75lrhqwropgIgZh8XrQR3BW4zSBswwaCbCFzInVD2lL6PRbp1GS2w128q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDvQ304U0GsRgnSTrSrcAwbd%2B%2BkbNVm2O87PjOi%2Bie8cQBGUptxzx916ECnbV%2FtXzHuTXWmOU5cbrYL12w%2BphPGhJvL3h%2FXOx8yK1FyrIoqz2%2FziB8%2FPgUFm6k68yF8snFgd3jH5Mf5OboN83Bf4T2ZTGCTywWQxKCb499svDtM33k6f3KhLxoluspSBzsC%2FFxdj1JVb%2Fq7bGeZcjVIkMDoRrNdzeboLky9yGUvp1koqrJy%2B%2BzsotzsBDKjuZzvEO4hfXD0kn0%2Bkpp2XKvbQvw%2BI6S60ycDp1qVEtoO9mA8nd4tn8t%2Fq8S%2FTrjyR1NMNVRZil6gb%2FrtRwCzvv5sZpnmOEhZAwBf3GYblYQGcdPP5%2BfUdo6d349vY80iJKumcKxsq%2F1MLxWGtYH%2BwUxDJABZ5vvUnOD1cvMOScKlaQ45DdkydnOrjkhsWegOwRT9UgJB2ArrfSWd1NdlrZVgsyHYaTvV9z7IPoeUAxzGeTP81l2XoPCEWlU9fzP7%2FRdZP%2BambnfIQwkpyjO9ySe4qtXCil7%2BdC7jvSe43LE4rF2tQLJEEZq%2BzZF3pdZzV5R%2BRGm7pfHIQEtauMJEjJPreraFCEUYzbDfjMCm82ZxHn5LUxR83ylsodwcJXJjsPvD77Xwc5vK72lswMRW%2FMMPfh8oGOqUBDVapxH7C9QFqRDC31psze8bEQW7SM1hKIawC3FvWZmAdwYftmruYWQ2M0NofzFGP8MOVPeuo3by5mO9LMTMnRykkZBqYv5FcZ%2BXrL9MRfvJhwCnp88C%2B9HgyVm2Z5AKSd2UuyuOPx9Vr3mEvj0D8tn3t3ZzH0xYKiiPptB%2F18fDVkjbZOzheu8Xv3rYaYXbud2Btx3%2FpZqxZPvc0lvATa1osp5vK&X-Amz-Signature=2535febfbece7f0e9e635af7bfc7de729384e887901f37d28a4e025bb7cfd7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

