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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYESHTL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVbhfVaWn4cbP%2BWWkqo6iPjnWAz%2FEEq%2Bpz06DQXrYpVwIhALIUm7wZWxTAAt7%2Bmp3NA3s6VqUeZ%2BSsPIk8vUnLvvMTKv8DCH4QABoMNjM3NDIzMTgzODA1Igxw3OnlBkBmklrVip0q3AOnsapkH9BC71TZUHr6L%2FiA1Xt15t6kgvB40ZGDCn%2FD3kztHpee0P%2FYQEnkDv8hoXm5R6iu9uEz2yihEjiHD2yKup0iigeOuhM74%2FXkiI6lRXmPABIKnJzbtv3PJanOUrfsOdabi%2BPHxYoqArdjV02wW7bksb6kiA9vhcTfPMdPbD%2BDOPRrjlJLWbArw82a8bTU2lzBSw%2FBpnI%2BfkHyk2yMrZ6ddDypJP%2Bmx7We74W1zzFEfZ6zGY%2B1H%2FmyofJ4S1FYhWChN03WJsxnDrB3J18%2FyX6RZ%2FxYoW%2BHgwTpvPDWuS7cMQUpF7QaJOnHKnBLG1gIsxJI64Az2WGZASBQMdya%2FQn1ExpWBn5jZFxkJ2ep2YzcAuF40o5tC0XW5ekaTnDg4D0SPnIy7FqKq9TiahtMlE1eihGKO3YrH1w8bkve7FiOLhah7mH%2FNZkCGKHKXvCNpOTRyJdvkBW8jyFgcL6%2BWypqBxgNAbWDRm58W0faz9j1pjLQpIR8SIYgdMOtwQcV9ReZMZxEaN4WymZT0LilOkCK9Ss6F%2B5rWWaAGJzVgSTToq%2BdGy1aD6GOOMMFvnrBlmX2MllNK5KH8MBCsF%2FHJj4acFM50PhvLuQskkd%2Fvewo06%2FYKcnYGM13MjDBxorKBjqkAeY566xJmPGmbsAi8n1Ky61s%2B4MMuFDoMpLbqxv3Dd6UNSYYVmZDlKfnl%2F5JQKH23Gk%2BQ4McOrr9h23anHo2EQklMUarcuTw7wA10Zr9219wCvxie398yNrOY1Zcmcc6f%2FiHU%2FK0YJV1tzw%2FKQDcRpp63yXxxpddgIeMcpg9u5BfUmz%2BuJGy2yWirG%2BCdbLkfByoctRC2orKYuh7KX32GFNWeLNk&X-Amz-Signature=1506fd3a703a7c162ba18f7940930ac25a5998b46de96bfc3f33becd49f89ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYESHTL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVbhfVaWn4cbP%2BWWkqo6iPjnWAz%2FEEq%2Bpz06DQXrYpVwIhALIUm7wZWxTAAt7%2Bmp3NA3s6VqUeZ%2BSsPIk8vUnLvvMTKv8DCH4QABoMNjM3NDIzMTgzODA1Igxw3OnlBkBmklrVip0q3AOnsapkH9BC71TZUHr6L%2FiA1Xt15t6kgvB40ZGDCn%2FD3kztHpee0P%2FYQEnkDv8hoXm5R6iu9uEz2yihEjiHD2yKup0iigeOuhM74%2FXkiI6lRXmPABIKnJzbtv3PJanOUrfsOdabi%2BPHxYoqArdjV02wW7bksb6kiA9vhcTfPMdPbD%2BDOPRrjlJLWbArw82a8bTU2lzBSw%2FBpnI%2BfkHyk2yMrZ6ddDypJP%2Bmx7We74W1zzFEfZ6zGY%2B1H%2FmyofJ4S1FYhWChN03WJsxnDrB3J18%2FyX6RZ%2FxYoW%2BHgwTpvPDWuS7cMQUpF7QaJOnHKnBLG1gIsxJI64Az2WGZASBQMdya%2FQn1ExpWBn5jZFxkJ2ep2YzcAuF40o5tC0XW5ekaTnDg4D0SPnIy7FqKq9TiahtMlE1eihGKO3YrH1w8bkve7FiOLhah7mH%2FNZkCGKHKXvCNpOTRyJdvkBW8jyFgcL6%2BWypqBxgNAbWDRm58W0faz9j1pjLQpIR8SIYgdMOtwQcV9ReZMZxEaN4WymZT0LilOkCK9Ss6F%2B5rWWaAGJzVgSTToq%2BdGy1aD6GOOMMFvnrBlmX2MllNK5KH8MBCsF%2FHJj4acFM50PhvLuQskkd%2Fvewo06%2FYKcnYGM13MjDBxorKBjqkAeY566xJmPGmbsAi8n1Ky61s%2B4MMuFDoMpLbqxv3Dd6UNSYYVmZDlKfnl%2F5JQKH23Gk%2BQ4McOrr9h23anHo2EQklMUarcuTw7wA10Zr9219wCvxie398yNrOY1Zcmcc6f%2FiHU%2FK0YJV1tzw%2FKQDcRpp63yXxxpddgIeMcpg9u5BfUmz%2BuJGy2yWirG%2BCdbLkfByoctRC2orKYuh7KX32GFNWeLNk&X-Amz-Signature=c14ad5af1c21a676cb39561cb40085a0f294bb9b31f0e390023840eb69c28b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

