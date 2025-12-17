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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H4OHBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQJPvWkPT0zSp9wMk3re0XtHEaWn8g2V5O7KVuwqc41AiEApqRnqsEykre4A%2FcfgCO4NbXqnQYW7wP5%2FDk1FvvJvEcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7dN945saUGAkBr6yrcAzMZ28f40U2JVEGLlsEbcEYVzSJbsJHv77ceiBvi9dfPHa%2FOJ5gP7Gy%2F0E3u%2BIYPOto2GZraLQQHgs1NjUMGCeZNwKWVQSEX8DqOOeuxQHrf4o5Yy9ie3tnjkqxBmj8d0ZI%2BHnHjOEGFPwEI%2F27SDmRxkYfBAjXTRlVTjHwvkNU1VeL0TxXmFK19GXgifxir3tfZid6pEIe9AdW%2FiDweNkjC2agOWavZ8Quafmlr13br%2FxVQNMKbFilnUvUMnJQlE4G1FDqZG%2FbRG43mfLkSX1t9cDUHuCXeFdVu%2BLb9BgsUhBLSEhW%2BfGHUWHHO49JW9t4vmZH0UbR8nHD2HuMWs7Bt3V112ZvRLL8lsLVW2V6fUfxbbXoW7wGw7kqZzeEdg3HoZcc%2Bz0fWyEy9kob33xC%2BjUu7qVjAvP96fjdIz3cOMZ1HSWe8%2BNEA4H39TPtuv4dK3rghuNTRePVxsKp8UEKnwYYSGYlNc5UIcEdBEcHtVsLB8xmf%2BmNlvDjiZM%2B79Ccf%2Fjp2wjwk%2FiK6%2Bfj0P6IWK4Q5DtCJA0uIlKSZYE5QSqaqYZf3HETMLfdHZwO21GckIsKvZ0461Rd9fM4s%2F6vz8VkrkA%2FkwM0Y%2BdSHeospLq3SIlgjvdIMQM%2BzMOqBi8oGOqUBVTko4SgYQBdo6W8IbgF%2Boy9W48Sw7eHEfRpFqUqJqfx5Q2pofu6cbBICO22niUb77M9ouryOwWt0xytQmwKOsi3sAkMomW9OoOVVSEWCN5TAe4LUt8f64zVtuQAdR%2BbYc8%2F2sPn1pyTf295kbupgpWQWGMHObXnv5X8RG8q%2FVx7Pl4gEdAqI40dI5QOMftN5a5Mzq7SrKavvcCjcoLAowknG4bb1&X-Amz-Signature=83ac8215002c24acdfd809b392de0d884dd343390c3bf8a65de90a82a39e321e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H4OHBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQJPvWkPT0zSp9wMk3re0XtHEaWn8g2V5O7KVuwqc41AiEApqRnqsEykre4A%2FcfgCO4NbXqnQYW7wP5%2FDk1FvvJvEcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7dN945saUGAkBr6yrcAzMZ28f40U2JVEGLlsEbcEYVzSJbsJHv77ceiBvi9dfPHa%2FOJ5gP7Gy%2F0E3u%2BIYPOto2GZraLQQHgs1NjUMGCeZNwKWVQSEX8DqOOeuxQHrf4o5Yy9ie3tnjkqxBmj8d0ZI%2BHnHjOEGFPwEI%2F27SDmRxkYfBAjXTRlVTjHwvkNU1VeL0TxXmFK19GXgifxir3tfZid6pEIe9AdW%2FiDweNkjC2agOWavZ8Quafmlr13br%2FxVQNMKbFilnUvUMnJQlE4G1FDqZG%2FbRG43mfLkSX1t9cDUHuCXeFdVu%2BLb9BgsUhBLSEhW%2BfGHUWHHO49JW9t4vmZH0UbR8nHD2HuMWs7Bt3V112ZvRLL8lsLVW2V6fUfxbbXoW7wGw7kqZzeEdg3HoZcc%2Bz0fWyEy9kob33xC%2BjUu7qVjAvP96fjdIz3cOMZ1HSWe8%2BNEA4H39TPtuv4dK3rghuNTRePVxsKp8UEKnwYYSGYlNc5UIcEdBEcHtVsLB8xmf%2BmNlvDjiZM%2B79Ccf%2Fjp2wjwk%2FiK6%2Bfj0P6IWK4Q5DtCJA0uIlKSZYE5QSqaqYZf3HETMLfdHZwO21GckIsKvZ0461Rd9fM4s%2F6vz8VkrkA%2FkwM0Y%2BdSHeospLq3SIlgjvdIMQM%2BzMOqBi8oGOqUBVTko4SgYQBdo6W8IbgF%2Boy9W48Sw7eHEfRpFqUqJqfx5Q2pofu6cbBICO22niUb77M9ouryOwWt0xytQmwKOsi3sAkMomW9OoOVVSEWCN5TAe4LUt8f64zVtuQAdR%2BbYc8%2F2sPn1pyTf295kbupgpWQWGMHObXnv5X8RG8q%2FVx7Pl4gEdAqI40dI5QOMftN5a5Mzq7SrKavvcCjcoLAowknG4bb1&X-Amz-Signature=8cf3d8f4263e2ac599b3a1bcca1bf1896fb78465af7cd85febfe0af05a30516f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

