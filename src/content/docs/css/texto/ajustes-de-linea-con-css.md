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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USKE2N3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlofwnyWYPC33S6XoqdVjJoZJFtrvPj7ZsHwt965JYdAiEAvoDtAfwDEFCFAmZ%2FlIb4AHBLfosrlW%2Fa6LPoo577vIAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCCsjwZSgRJSBDjEbyrcA%2Bqy%2BUkSChEgZD%2F0JjM26jMhjwMTiURcsBSWzocagsPFq5MGC7G%2FjXpa0TBFdh9EqzpTm2JP5vgNZ8Gs5J5dGbP1UY1ohOt4FjzmyVJ0UBESBA%2FfZUV7l4DDWkVZxWN27EhWgYKACeOhCjK7Dw6AVCQLUk59eZ0WckFDU4bbW4slKNCszwb0lgv%2FnDxruT78QZcMhiJt0cd1zT%2F6TQw7TF65pn6oK5BuHYT%2Ff04EHa8v5ASiSC%2FRHYBjPHixb97L%2FwSejTNVp7Htw21qYgXiN49PlI6XJOB11OhMp8M7v0l5BBCDr3UzruO9tYZnuY4I7k%2FGwkOx4eoA4bHQU8u%2FXVEogIshT4uqhOqnnuy7gHK7IjH1N6E0qpJMH3lEhS8Qzld%2B%2Fynv7JGBccTkQbTKK9%2Bxj7P2YfjLHSpeOK7DKo7cbROpjgyrenW%2Fi09h1ldHAGC0LnXJcgp3oFRUAVNykzRDFZUQv8YBdIL1pw0KrmZJPic8OrO%2FeeK%2B%2FtKBCSB5fqmWh0xlyMNScz6tnup1r%2F3bDDkZ018iIcaXETo0tk7yWKA6bmW0sOzkj%2FHj%2Bg%2B4NPYyLW0TtX350X2PQHr1HTil2a%2Fzq9cuS7FeODij2YCm0NFA0ghIxT7IzHFkMNCdicoGOqUBVI%2FmuAJO1Gz6%2BHzxijaafXOjlsUt%2FIykflMuetibyYYK0t5E9YqV5Ww%2FBrDUOsHZssuHocrRz58uLby6%2B8%2BPAQ16ltOAFvEPu6Rxqi6TeWIMxHZyITuA1bKd1V%2F4KGJEtd993AgTeV3m4nU6GHDTyeQg85Xvw9LAawBg6r9zEzyM1fCUG3pAT5QjErF7cdTYzzJKmQWoILgzGQR8hdW6bHJm7F4Z&X-Amz-Signature=d80e24b89c2b1eb2e582093ab0847abb66c36ceec970e1a3fc8d1721a0407613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USKE2N3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlofwnyWYPC33S6XoqdVjJoZJFtrvPj7ZsHwt965JYdAiEAvoDtAfwDEFCFAmZ%2FlIb4AHBLfosrlW%2Fa6LPoo577vIAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCCsjwZSgRJSBDjEbyrcA%2Bqy%2BUkSChEgZD%2F0JjM26jMhjwMTiURcsBSWzocagsPFq5MGC7G%2FjXpa0TBFdh9EqzpTm2JP5vgNZ8Gs5J5dGbP1UY1ohOt4FjzmyVJ0UBESBA%2FfZUV7l4DDWkVZxWN27EhWgYKACeOhCjK7Dw6AVCQLUk59eZ0WckFDU4bbW4slKNCszwb0lgv%2FnDxruT78QZcMhiJt0cd1zT%2F6TQw7TF65pn6oK5BuHYT%2Ff04EHa8v5ASiSC%2FRHYBjPHixb97L%2FwSejTNVp7Htw21qYgXiN49PlI6XJOB11OhMp8M7v0l5BBCDr3UzruO9tYZnuY4I7k%2FGwkOx4eoA4bHQU8u%2FXVEogIshT4uqhOqnnuy7gHK7IjH1N6E0qpJMH3lEhS8Qzld%2B%2Fynv7JGBccTkQbTKK9%2Bxj7P2YfjLHSpeOK7DKo7cbROpjgyrenW%2Fi09h1ldHAGC0LnXJcgp3oFRUAVNykzRDFZUQv8YBdIL1pw0KrmZJPic8OrO%2FeeK%2B%2FtKBCSB5fqmWh0xlyMNScz6tnup1r%2F3bDDkZ018iIcaXETo0tk7yWKA6bmW0sOzkj%2FHj%2Bg%2B4NPYyLW0TtX350X2PQHr1HTil2a%2Fzq9cuS7FeODij2YCm0NFA0ghIxT7IzHFkMNCdicoGOqUBVI%2FmuAJO1Gz6%2BHzxijaafXOjlsUt%2FIykflMuetibyYYK0t5E9YqV5Ww%2FBrDUOsHZssuHocrRz58uLby6%2B8%2BPAQ16ltOAFvEPu6Rxqi6TeWIMxHZyITuA1bKd1V%2F4KGJEtd993AgTeV3m4nU6GHDTyeQg85Xvw9LAawBg6r9zEzyM1fCUG3pAT5QjErF7cdTYzzJKmQWoILgzGQR8hdW6bHJm7F4Z&X-Amz-Signature=ff7a3bc9c48a8297eb552e96adad56c54b11dc71f710dabb866ebe9ddace24b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

