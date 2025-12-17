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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E7GOG5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxn2ojryiip6cl8%2Bae6gfoK4ZF7Ux0WliYEXT6tdp%2FGQIhAKqBHDFXPd9tim7SWSBdMLkNniL9GeW%2Bxq%2BfyR5J1ycPKv8DCHQQABoMNjM3NDIzMTgzODA1IgzTsMlYHhVF6CA%2FQiEq3AM%2BL3s4LIVvQHzwp%2BzylxoanuURvIbmfUWEy9Rd2xlGhPhKn3NV8HLGAuDsZN0yTwnA29CjhPW2a6Wk%2Bj0in5lRF4zaP%2BaKOK1rdKECfhvVWJ6YL96wvdHoMvwu751lZk8Du6c74EMm4ETNRDuO1L3HN8tQdwHs3lV2AOergFEYDV6huwR07KH7SWb4zOR%2F3H4uoVelqlHOe9cVn8eWqxniLe6fqjCa8Sd%2FIMUAfnTqHAaSucsBgXMpKsee3JWpPWe8avJ3jiLGJDvkcp%2BlinEn5Y59yzTXZSztrwo6LDqEWsoEeOm7aU9VwIiF9ZZZRNzxDuLIG%2Fbmr8g7oJ9GDh2%2BEadJZjuj1s%2BIjg3KjEu5piSEU8hhS%2FMGQhrkS9%2F89dsm0euCZXyZ33DlVFgMqmJChtkgNdjf6b3HRptWNF2fXqgmKKV1U3%2FLU%2B6PsDvd83ajNjoNpOhH%2Fyz%2FZWr%2F6BJ3ARXVS%2FfrlGFf8QsHAZXuaaVlYM1vaRTrZ7WCpe2%2BzGYGzdc6hlvLJogZPxczOjOmHZKT4W4Y0CGreZqQbICqCUudwNfdJYqXNR6roprcYoOt5PkX%2F26%2BlVh%2FVL1EcO%2BtI7Mgn%2BXsUPkegZlvFY3UisjERqaSAI697Lmb6DDPsojKBjqkAUNHF06m5uEQVCkfDSlLkIfGLFo%2BLafckYe3PDbERbpEr0N3IMNh260P6ACbBleKPkkqPpCVmxHnW8p2dYE18nUDGEV%2BRbqhPybp6vOl1ovRH85t2kzaTSK%2FhCcEgNqgzGKgP7yN82KJ3ezKcGlMAvE%2BR7DuElAG2Ivoua3sONE8bYZf5GqCMwRo0P8quMpkk6vd66i0NnzNV5o9B0yzBmuZ5Vg3&X-Amz-Signature=9cb7ccae6f180d7d8e3a8de2f58474890f1c803242a001c0ed5c6be6bb44c81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E7GOG5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxn2ojryiip6cl8%2Bae6gfoK4ZF7Ux0WliYEXT6tdp%2FGQIhAKqBHDFXPd9tim7SWSBdMLkNniL9GeW%2Bxq%2BfyR5J1ycPKv8DCHQQABoMNjM3NDIzMTgzODA1IgzTsMlYHhVF6CA%2FQiEq3AM%2BL3s4LIVvQHzwp%2BzylxoanuURvIbmfUWEy9Rd2xlGhPhKn3NV8HLGAuDsZN0yTwnA29CjhPW2a6Wk%2Bj0in5lRF4zaP%2BaKOK1rdKECfhvVWJ6YL96wvdHoMvwu751lZk8Du6c74EMm4ETNRDuO1L3HN8tQdwHs3lV2AOergFEYDV6huwR07KH7SWb4zOR%2F3H4uoVelqlHOe9cVn8eWqxniLe6fqjCa8Sd%2FIMUAfnTqHAaSucsBgXMpKsee3JWpPWe8avJ3jiLGJDvkcp%2BlinEn5Y59yzTXZSztrwo6LDqEWsoEeOm7aU9VwIiF9ZZZRNzxDuLIG%2Fbmr8g7oJ9GDh2%2BEadJZjuj1s%2BIjg3KjEu5piSEU8hhS%2FMGQhrkS9%2F89dsm0euCZXyZ33DlVFgMqmJChtkgNdjf6b3HRptWNF2fXqgmKKV1U3%2FLU%2B6PsDvd83ajNjoNpOhH%2Fyz%2FZWr%2F6BJ3ARXVS%2FfrlGFf8QsHAZXuaaVlYM1vaRTrZ7WCpe2%2BzGYGzdc6hlvLJogZPxczOjOmHZKT4W4Y0CGreZqQbICqCUudwNfdJYqXNR6roprcYoOt5PkX%2F26%2BlVh%2FVL1EcO%2BtI7Mgn%2BXsUPkegZlvFY3UisjERqaSAI697Lmb6DDPsojKBjqkAUNHF06m5uEQVCkfDSlLkIfGLFo%2BLafckYe3PDbERbpEr0N3IMNh260P6ACbBleKPkkqPpCVmxHnW8p2dYE18nUDGEV%2BRbqhPybp6vOl1ovRH85t2kzaTSK%2FhCcEgNqgzGKgP7yN82KJ3ezKcGlMAvE%2BR7DuElAG2Ivoua3sONE8bYZf5GqCMwRo0P8quMpkk6vd66i0NnzNV5o9B0yzBmuZ5Vg3&X-Amz-Signature=9c104a80dc59e98971eee697e3edf366ed27609b6036e77ee94d7c6b2af92dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

