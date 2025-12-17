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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2TTI5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPc5P%2FsgMLKf34AbMj%2BNi7X9RQFYq3qmJZAav3yNw62AiEAxwMkaWZNKa74OnwEtRhLUCqTRipBrWw7oPHZ4rWnJYMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOnwU9i0b9SJTeTv8yrcA3d4ewp4gpbmdLzQ00bprr1e2TO7VDi28PEwlSRylLNYNALT5I2j23kfDTc9ZW7K0PtHcpFJWmAEiv0voV2okYh3QAQHaIAxDpKH%2FE6z37QnxXyPfipJrJeQwDGGfU3OY4pOM70lcZ%2BlYkBaG5IYUHLP6ErzoA7rJDi13YWpClhay4aMUEw9mYwucLIVdNugwS%2Bqenlo%2Bla5XTqu9mn4qhmimaGsUu6%2FohBeKQPAuLAK0NB49pHF77Ow%2BjsVw%2FPYc6ahibL41t%2FAXdlDHw5llTsEVyTIL6V7qpbQVmr7dO6TaFklFDk7lbHYo4%2Fil1GY3N1Tvo91RoKNlK0uaJQGRCg35K4e26McM%2FqTzQPzexlwoNRAUnj%2BjlP%2B%2FwxchbqZDXIltY2iGG0h%2F%2FmWQUetuIYKP8VbPRLP4ikkaZwC7g8N89oz5Jf6O5qZlXQTWITB33zyXh5u5DEIdkR7hU11fOmBjW8k9BC7vqGCQ8%2F7L62MGMVRH9BnH5sbH57c0wNr%2F7S6b8YlGwJEQ5ktohOc%2BBV3ekyecQp%2B0nyPvxbFWBoOMMFddP0EdILsJE7u2351WhW0d5%2FabpSGSjvvU1Jc5qJJSYFA4ktUbHnTgOmw%2ByFbBR9vYUldWnf7HadZMOzSicoGOqUBKj3mnGtOOp6J53FvsYGH9lpoiucozPxoNURPtHNfO5C%2FpX3BZxbt9wNRfEKP0XuJUSGtbSoUN8QaQ6Jzkj6CjUMq5ol9z0jN8LO%2BUcqAf7KLoKY%2BkbAZvlpe%2BL3d6GqouC1d3bSet6AM2njHwFuPs%2FXPoA%2FYwW%2B6%2B0anSKup4IRkxSrDWql5U%2BM48%2BZzIDm5keO962em8YquynC4mj8d9AkNNPDU&X-Amz-Signature=b3c349b1551f8d35cb62330806b0f140c5ec6a0167a14a77a21f371915181fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y2TTI5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPc5P%2FsgMLKf34AbMj%2BNi7X9RQFYq3qmJZAav3yNw62AiEAxwMkaWZNKa74OnwEtRhLUCqTRipBrWw7oPHZ4rWnJYMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOnwU9i0b9SJTeTv8yrcA3d4ewp4gpbmdLzQ00bprr1e2TO7VDi28PEwlSRylLNYNALT5I2j23kfDTc9ZW7K0PtHcpFJWmAEiv0voV2okYh3QAQHaIAxDpKH%2FE6z37QnxXyPfipJrJeQwDGGfU3OY4pOM70lcZ%2BlYkBaG5IYUHLP6ErzoA7rJDi13YWpClhay4aMUEw9mYwucLIVdNugwS%2Bqenlo%2Bla5XTqu9mn4qhmimaGsUu6%2FohBeKQPAuLAK0NB49pHF77Ow%2BjsVw%2FPYc6ahibL41t%2FAXdlDHw5llTsEVyTIL6V7qpbQVmr7dO6TaFklFDk7lbHYo4%2Fil1GY3N1Tvo91RoKNlK0uaJQGRCg35K4e26McM%2FqTzQPzexlwoNRAUnj%2BjlP%2B%2FwxchbqZDXIltY2iGG0h%2F%2FmWQUetuIYKP8VbPRLP4ikkaZwC7g8N89oz5Jf6O5qZlXQTWITB33zyXh5u5DEIdkR7hU11fOmBjW8k9BC7vqGCQ8%2F7L62MGMVRH9BnH5sbH57c0wNr%2F7S6b8YlGwJEQ5ktohOc%2BBV3ekyecQp%2B0nyPvxbFWBoOMMFddP0EdILsJE7u2351WhW0d5%2FabpSGSjvvU1Jc5qJJSYFA4ktUbHnTgOmw%2ByFbBR9vYUldWnf7HadZMOzSicoGOqUBKj3mnGtOOp6J53FvsYGH9lpoiucozPxoNURPtHNfO5C%2FpX3BZxbt9wNRfEKP0XuJUSGtbSoUN8QaQ6Jzkj6CjUMq5ol9z0jN8LO%2BUcqAf7KLoKY%2BkbAZvlpe%2BL3d6GqouC1d3bSet6AM2njHwFuPs%2FXPoA%2FYwW%2B6%2B0anSKup4IRkxSrDWql5U%2BM48%2BZzIDm5keO962em8YquynC4mj8d9AkNNPDU&X-Amz-Signature=260394ebc88e5ee5c765ee4d342c35c4c792c22e025816449280ca0d0ab53974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

