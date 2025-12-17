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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIGUYGFD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTt5clvJZ%2BmTPwQCLwPU9IQpvMMeiBfX8H0NXWLJx%2B6AiEAvhECQ2wHG2VQrT4ACEU88uvU7fdip4ngQ5vsE7YuU0Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKjUjLEOcUOsyYlNRyrcAzofdrv%2FMqXyqmL5vU0qzxAtfVM1lskd37SNeFWzEFFYbjON4NjnV07GBfg5qP71BWqHqJPXrADeVDxfcH5ZnTlYS6grjVIjYT3hVyu2r3ojZIhxQ3i0DWUUbh6EYu1i38mQS06FddYvz0sJ%2BmDc6GyfOY74R45gFod08w%2BLivT94oALdQE0Q6YVb8bFpJOiv%2BTZYidDX4tD8b9JqEHRnzBPN98om0iL19sFmzbnwnThagevLgHD4B2mG%2FyrZvyDDsPFcYntRPlMumt7nUDP%2BXU0s1mIOnGmlRh498h2yacKLDA4YL12AepNvmSUMSH9iJEhPrf25Lvk4dgPTmE6wysDBpQKgfF4KSOhjv222JL1E0lGW7eDKdJpj9F5jRlrDkmY9HDZ7rJW6A3W9QB74f%2FfAsgSzc3%2BEOiDyI81OrM6H%2FwnbzFrZ9gn6Xgbw2pVu27BO7rcUSPcadlYq1rEKyeKJQ58BfhRJe1agjEoipu6oDw2ZKMaEvU7xWIiolkb71MuNXmO5tlHj%2FyzWtl9sGSy6bbxZpOS05i8xt3HaKYDWZm9CUfKEGv6msaek%2Fyxdfr5ojU3xkuwE0jEhhV%2FzTaLARHkqONqdsCSYL%2F%2Fgfrw2EjCrUM0XWSEEPfRMJvpiMoGOqUBB3H4EIhkEq8gZww6ojcj0DagOfYqJZy%2Fya3AGsFUXrL4sfBuwHUPiR69mCii9Kh1GV%2Bg6F%2Fyl8Cva0Aq1ipydiScjqxqGzstzhUCmkrExUPBeORQQJHUBDl1nb3aC0AW6W1ppJVhpxeoASD5Zb%2BEiW9czdmbsHfzsKhK7CmDpprxiVJBAQTo%2B05AXHrWc3vaZ5dGF5hoK65chQW5mI0bFBfTfehJ&X-Amz-Signature=82c6d7ec5310d101b96acc1146061a9239093a3506701cf59d225dd7c6f06945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIGUYGFD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTt5clvJZ%2BmTPwQCLwPU9IQpvMMeiBfX8H0NXWLJx%2B6AiEAvhECQ2wHG2VQrT4ACEU88uvU7fdip4ngQ5vsE7YuU0Qq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKjUjLEOcUOsyYlNRyrcAzofdrv%2FMqXyqmL5vU0qzxAtfVM1lskd37SNeFWzEFFYbjON4NjnV07GBfg5qP71BWqHqJPXrADeVDxfcH5ZnTlYS6grjVIjYT3hVyu2r3ojZIhxQ3i0DWUUbh6EYu1i38mQS06FddYvz0sJ%2BmDc6GyfOY74R45gFod08w%2BLivT94oALdQE0Q6YVb8bFpJOiv%2BTZYidDX4tD8b9JqEHRnzBPN98om0iL19sFmzbnwnThagevLgHD4B2mG%2FyrZvyDDsPFcYntRPlMumt7nUDP%2BXU0s1mIOnGmlRh498h2yacKLDA4YL12AepNvmSUMSH9iJEhPrf25Lvk4dgPTmE6wysDBpQKgfF4KSOhjv222JL1E0lGW7eDKdJpj9F5jRlrDkmY9HDZ7rJW6A3W9QB74f%2FfAsgSzc3%2BEOiDyI81OrM6H%2FwnbzFrZ9gn6Xgbw2pVu27BO7rcUSPcadlYq1rEKyeKJQ58BfhRJe1agjEoipu6oDw2ZKMaEvU7xWIiolkb71MuNXmO5tlHj%2FyzWtl9sGSy6bbxZpOS05i8xt3HaKYDWZm9CUfKEGv6msaek%2Fyxdfr5ojU3xkuwE0jEhhV%2FzTaLARHkqONqdsCSYL%2F%2Fgfrw2EjCrUM0XWSEEPfRMJvpiMoGOqUBB3H4EIhkEq8gZww6ojcj0DagOfYqJZy%2Fya3AGsFUXrL4sfBuwHUPiR69mCii9Kh1GV%2Bg6F%2Fyl8Cva0Aq1ipydiScjqxqGzstzhUCmkrExUPBeORQQJHUBDl1nb3aC0AW6W1ppJVhpxeoASD5Zb%2BEiW9czdmbsHfzsKhK7CmDpprxiVJBAQTo%2B05AXHrWc3vaZ5dGF5hoK65chQW5mI0bFBfTfehJ&X-Amz-Signature=bc32491c4d534bb4224ca98d99bd8748695cbfbbf3e12b20de966f45f3c90f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

