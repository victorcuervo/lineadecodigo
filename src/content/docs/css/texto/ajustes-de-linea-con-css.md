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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NRLPW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCursU6vsf22bbH6O4jsjPnLll6BQD8yp441rbyNDF1ewIgAimxn70I9X%2FtyHnKVSmfL67fCfX9DttCvI6r68fqaAEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBm8mWNMCTgMcUAViircA1NAnvyELoNGw6mrDVGPxEtnFxD88lD0kl6YQ81qB56GQra4mq1RbCDdYhn06VMrXonnVPM%2FG%2Bm9j2jHxCCDW%2BuRuIYSx2AI0XgBF29VOZ%2BSqrhOeBSuAb9R%2BUkjATj0kTaRWazegbiZx3HTEh8dyq4c%2BG8ScM5iQ6aXJPXBbZDG%2BCLqZh0iA91wYsWDfW1j1KISGX%2BoU5mELvLJ2%2FMmipFffnzOew%2BQwBQ98UthJLAqrRozml7dM72bPMtwVsYSuBaiXL%2But3h7l%2BG2mCvqCKf6cGqk8KB5%2FwanXOybHyXl0OVYVYiIBvZtawRYqRa6Oz%2BhOjB1Mkx%2BbyFmZlrpGRPIMq9fcp6S8ZSwCUzGsfFUHJkKQ7gzQRVpu%2BUFpO4g55sbBmKGBSVwlVjcXOYOFDVtUs9%2FPfMrSoTFjmVffvDAVyLjQnva8%2B8CamKh5Q3dz0C%2BO49zvkg2Z6Sl52Ebpn9FXSH11JUOjq6NHCYygM9kw%2FbaOGxEY0KUptgaUawqxvmrdf8ssUD10wPoSqKLuS1TdlAiafqtb5rkGG0aBnG0NQfsmpxRoNCqFrp2XDoa16vfk1HBZWtY2El6Il9yhWtD3aTjhkvXnNocLNmLEOah7SHpNRa4YBwC69f5MLu3icoGOqUBIbTcSjMOOgcw8OTrgV7OJ10gXjaeyl05Z439jYP4ngMzTqIKOnyW1mHVqhMMvqly46M6Gh7X5L%2FZFmgzzb2znrSI2XlhvJs%2F1fx340qLdOOBRyuKfDUaAJPLYBPLNkShYtt192aQxsogZjQVYQ1HAYvs2wT%2F5azXueZTRlzrV%2BOw%2FyqzCvpgy7B%2FmTAAepwT28cfIGv56R5E%2FCwiXSeVnB60JbIA&X-Amz-Signature=5e3c10f46d6f458a66567e61cfd28b17da07304445bcb6dbd89b3b6df8cf8df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NRLPW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCursU6vsf22bbH6O4jsjPnLll6BQD8yp441rbyNDF1ewIgAimxn70I9X%2FtyHnKVSmfL67fCfX9DttCvI6r68fqaAEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBm8mWNMCTgMcUAViircA1NAnvyELoNGw6mrDVGPxEtnFxD88lD0kl6YQ81qB56GQra4mq1RbCDdYhn06VMrXonnVPM%2FG%2Bm9j2jHxCCDW%2BuRuIYSx2AI0XgBF29VOZ%2BSqrhOeBSuAb9R%2BUkjATj0kTaRWazegbiZx3HTEh8dyq4c%2BG8ScM5iQ6aXJPXBbZDG%2BCLqZh0iA91wYsWDfW1j1KISGX%2BoU5mELvLJ2%2FMmipFffnzOew%2BQwBQ98UthJLAqrRozml7dM72bPMtwVsYSuBaiXL%2But3h7l%2BG2mCvqCKf6cGqk8KB5%2FwanXOybHyXl0OVYVYiIBvZtawRYqRa6Oz%2BhOjB1Mkx%2BbyFmZlrpGRPIMq9fcp6S8ZSwCUzGsfFUHJkKQ7gzQRVpu%2BUFpO4g55sbBmKGBSVwlVjcXOYOFDVtUs9%2FPfMrSoTFjmVffvDAVyLjQnva8%2B8CamKh5Q3dz0C%2BO49zvkg2Z6Sl52Ebpn9FXSH11JUOjq6NHCYygM9kw%2FbaOGxEY0KUptgaUawqxvmrdf8ssUD10wPoSqKLuS1TdlAiafqtb5rkGG0aBnG0NQfsmpxRoNCqFrp2XDoa16vfk1HBZWtY2El6Il9yhWtD3aTjhkvXnNocLNmLEOah7SHpNRa4YBwC69f5MLu3icoGOqUBIbTcSjMOOgcw8OTrgV7OJ10gXjaeyl05Z439jYP4ngMzTqIKOnyW1mHVqhMMvqly46M6Gh7X5L%2FZFmgzzb2znrSI2XlhvJs%2F1fx340qLdOOBRyuKfDUaAJPLYBPLNkShYtt192aQxsogZjQVYQ1HAYvs2wT%2F5azXueZTRlzrV%2BOw%2FyqzCvpgy7B%2FmTAAepwT28cfIGv56R5E%2FCwiXSeVnB60JbIA&X-Amz-Signature=285c53f375e38bb7e96dee4dd4d82e1296a75ef517fae8473c3afd11e23640dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

