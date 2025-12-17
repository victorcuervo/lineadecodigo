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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4P3WGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgR%2B1GMCMH74s5y2ls83JRWIaGoAb51cdFlDthMUnghwIgL%2FqI7i2bw2qAMRCtzWS%2F7JFbNcDhVtNR%2F06HU4v6vAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7BFtiyKF%2FwsTzApyrcA8eyTxda9ijXNhv0EYa3DayIlDjhJw9E8%2FO%2Fv4wNu%2Fz%2BhX%2BhGJsL89Uy7yFDZSqXV9l0JLbt3XZsL%2BYR3yb%2Ff1WuT%2BVCKPMHnmgqeHxk%2BC78jdFGZi9ec0vkyUN18g%2Bezso%2Fcy4Ag2GvgVT9MA7KQF62N7%2FGW9oiHUD4%2BomxEEOgVLqTRlyNKquUqxhkiIy%2BNtNhaJDQ4gmz6CE1jAp4LJhc74kUCQFG%2B1FuDqDcP3JDO7fFy%2Fg%2BBx7UIx0G4ccKpQjsjQl3JAnjEkjUSsrODKN1W1h%2FYGPjULdWwqWh7isssjyrLdYwjS06BOB0U7JvHqqmj1tCxlOlLmMQ0Uo7h%2BwG70G%2BN3a5VMraI76%2BISjt9tYiJld5xp79Oxs4ttRCTHVvP7JltajenZRQaAqhfBnkESZy83Otf0aNqHQ52wLio7cBjHLhSR32mcZwp%2B9ce89wXEbFjw30PFlr%2BMMYzx3uFAj9FkEH3Bu%2BB70uoUsJl5IQUawfbKdJhMVfDMkPl%2FJ9k5G73lGja77LGpAWPJNKEKK9sk4as6tlmLpm55GkoOuGj08pUD9eKQ66z7FXDbBUD%2FvMG02H8vB6519x5Wfo9KQGlQVKndvz5i3fLTVoVenP%2BzZ4bmgb%2BrzfMLCfi8oGOqUBUCi5nr0ZXUsGiSQ83X7edgxU1MvcBeM3OBea1FnvwNIEDbCNNSuaOdGEVH4F%2BST%2BcNWkPo%2B2Kg6SUpqea7A8N4p8BBW1osOCKsMMUWTTx0x%2BnE7pn5eflEWuj7dYUSnTu51TunclF0j6W6cYueVMZh%2F9jZ2PZ%2BOS5UvHIBlnVGL5htBfP0T0hq4FH%2F11qexGOctjxztJKz6ymse1LDtiqTXXPe%2Bo&X-Amz-Signature=3e96e186806fd919e944f2dcc6f59b8b26e26e3f1d568869192824b14ebe7631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4P3WGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgR%2B1GMCMH74s5y2ls83JRWIaGoAb51cdFlDthMUnghwIgL%2FqI7i2bw2qAMRCtzWS%2F7JFbNcDhVtNR%2F06HU4v6vAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7BFtiyKF%2FwsTzApyrcA8eyTxda9ijXNhv0EYa3DayIlDjhJw9E8%2FO%2Fv4wNu%2Fz%2BhX%2BhGJsL89Uy7yFDZSqXV9l0JLbt3XZsL%2BYR3yb%2Ff1WuT%2BVCKPMHnmgqeHxk%2BC78jdFGZi9ec0vkyUN18g%2Bezso%2Fcy4Ag2GvgVT9MA7KQF62N7%2FGW9oiHUD4%2BomxEEOgVLqTRlyNKquUqxhkiIy%2BNtNhaJDQ4gmz6CE1jAp4LJhc74kUCQFG%2B1FuDqDcP3JDO7fFy%2Fg%2BBx7UIx0G4ccKpQjsjQl3JAnjEkjUSsrODKN1W1h%2FYGPjULdWwqWh7isssjyrLdYwjS06BOB0U7JvHqqmj1tCxlOlLmMQ0Uo7h%2BwG70G%2BN3a5VMraI76%2BISjt9tYiJld5xp79Oxs4ttRCTHVvP7JltajenZRQaAqhfBnkESZy83Otf0aNqHQ52wLio7cBjHLhSR32mcZwp%2B9ce89wXEbFjw30PFlr%2BMMYzx3uFAj9FkEH3Bu%2BB70uoUsJl5IQUawfbKdJhMVfDMkPl%2FJ9k5G73lGja77LGpAWPJNKEKK9sk4as6tlmLpm55GkoOuGj08pUD9eKQ66z7FXDbBUD%2FvMG02H8vB6519x5Wfo9KQGlQVKndvz5i3fLTVoVenP%2BzZ4bmgb%2BrzfMLCfi8oGOqUBUCi5nr0ZXUsGiSQ83X7edgxU1MvcBeM3OBea1FnvwNIEDbCNNSuaOdGEVH4F%2BST%2BcNWkPo%2B2Kg6SUpqea7A8N4p8BBW1osOCKsMMUWTTx0x%2BnE7pn5eflEWuj7dYUSnTu51TunclF0j6W6cYueVMZh%2F9jZ2PZ%2BOS5UvHIBlnVGL5htBfP0T0hq4FH%2F11qexGOctjxztJKz6ymse1LDtiqTXXPe%2Bo&X-Amz-Signature=a28a603bee214b1cffeb6170f06c41c0e0c67ec8d0016c9ebe751ed923d0c137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

