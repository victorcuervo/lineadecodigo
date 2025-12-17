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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWDXW23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWq6TqvFqIjjhE1%2Fk578fcQMwDS9r1AxQGMyIYbV2GnQIhAPwXqy7iefmp5tne5zozm6wUFiOP1EeX8n9PBDhOqHlgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybYHBWgmBBTbQf8aIq3ANYtFlG2IwTisakYyTxsZjoPcgemMnw5rOQoQGr1HQJAGPYAwwmkMJJSUfyn7SDtYenCvr6OrsEtgONckmsHy5lHoARfPNc8lvoKCbxaO08FMjpA9I6pa69sQ0DV9%2BBys6WNjIKRCUxR0gZmwgNpAmqeQvNmsgBfOWXX4Tw%2Bcy8OanHONTZJuzUWzZRfPfkSo%2BOLErQ%2FKf9GizBS3lLHMBQNq4%2FJE%2FwBaGxgBi3Zsp%2B6EfNHXwYZBuAeFWX2BtW5hMkQ7bwLAlih7Czs6N36oWoe9TamkhS6eG449TigObgu8BVS46WiN5U5IH%2FoCtAM9saGl4Bnn4IspEwY6rLwbPTaKmsnO%2BEfX1H3EmzX5%2BMVJCV4l%2F5vFAhgA%2FltQyrx6sdiL%2B8YShPoi4aESi3%2FzbOqWHQConSEAVYUROIzqpDg0PlcaFh0qmLTc%2FjvNR4GRdkT%2FOaZHkCESO4Uh5vpuMPzORhJreEBvKprBKQSPs8q5UhnfY9RwqMpfnkq8HPbMCbGp%2BCUyQm6V1973Id9iTU05n30EITntCoMXrZeXUxkmbssV7FTfVTsFPnBS%2B7YIAdU1iVxeq7kSv99Y1zV7JCWh%2BOuY3H1wWHxVv7BuAmDvVXUrsaEHwk58MZEDDpnovKBjqkAYT7St5kM9WNoiTQlkpbG8AkXKuYLDbSMfQZRvJLc%2FngtV%2B3JUEy1lXm5bLqAR4kHok2UYHt5zAqxlRGQvPwPsh4O4R5CTVobu0c6JHT5NuRLJDz3FCCeZvNdLMQq8Q6VBB0zJh63rpLDpruahuzzUn7FZBkm8rlaY1hbI9b%2FYElKkbWMCKTzVtLKps8UPFiOuE5U40wXdjehtuvErM%2B4nnXfFPk&X-Amz-Signature=32bb3aa98f9a7fb2cc05acf9676d39dbc6e5709bc4ca72809202ad6fa8c973c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWDXW23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWq6TqvFqIjjhE1%2Fk578fcQMwDS9r1AxQGMyIYbV2GnQIhAPwXqy7iefmp5tne5zozm6wUFiOP1EeX8n9PBDhOqHlgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybYHBWgmBBTbQf8aIq3ANYtFlG2IwTisakYyTxsZjoPcgemMnw5rOQoQGr1HQJAGPYAwwmkMJJSUfyn7SDtYenCvr6OrsEtgONckmsHy5lHoARfPNc8lvoKCbxaO08FMjpA9I6pa69sQ0DV9%2BBys6WNjIKRCUxR0gZmwgNpAmqeQvNmsgBfOWXX4Tw%2Bcy8OanHONTZJuzUWzZRfPfkSo%2BOLErQ%2FKf9GizBS3lLHMBQNq4%2FJE%2FwBaGxgBi3Zsp%2B6EfNHXwYZBuAeFWX2BtW5hMkQ7bwLAlih7Czs6N36oWoe9TamkhS6eG449TigObgu8BVS46WiN5U5IH%2FoCtAM9saGl4Bnn4IspEwY6rLwbPTaKmsnO%2BEfX1H3EmzX5%2BMVJCV4l%2F5vFAhgA%2FltQyrx6sdiL%2B8YShPoi4aESi3%2FzbOqWHQConSEAVYUROIzqpDg0PlcaFh0qmLTc%2FjvNR4GRdkT%2FOaZHkCESO4Uh5vpuMPzORhJreEBvKprBKQSPs8q5UhnfY9RwqMpfnkq8HPbMCbGp%2BCUyQm6V1973Id9iTU05n30EITntCoMXrZeXUxkmbssV7FTfVTsFPnBS%2B7YIAdU1iVxeq7kSv99Y1zV7JCWh%2BOuY3H1wWHxVv7BuAmDvVXUrsaEHwk58MZEDDpnovKBjqkAYT7St5kM9WNoiTQlkpbG8AkXKuYLDbSMfQZRvJLc%2FngtV%2B3JUEy1lXm5bLqAR4kHok2UYHt5zAqxlRGQvPwPsh4O4R5CTVobu0c6JHT5NuRLJDz3FCCeZvNdLMQq8Q6VBB0zJh63rpLDpruahuzzUn7FZBkm8rlaY1hbI9b%2FYElKkbWMCKTzVtLKps8UPFiOuE5U40wXdjehtuvErM%2B4nnXfFPk&X-Amz-Signature=405bb618619af71a4f2377136d5917df27e181ee0d418e0cd67f70df2d37b210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

