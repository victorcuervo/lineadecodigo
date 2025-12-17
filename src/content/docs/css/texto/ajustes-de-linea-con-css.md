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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6F7AB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBURpDniRYddyBKYeLApuG0DeReFbt2sep1Dqp2DuPw1AiEArb3kdrpSDkunz%2Fr9tUBLFDzspbX0m67Brtw%2FvVqEIwoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDC4gWiphSbSqHleJ8SrcA6uGvXaUEpkcsLIQTArEO3ePuaTibI%2BrEISy9v13lbVGbwXqN6G7%2BrRZq3qhvF4KhKXw9Omjcnpj%2BUarLQOwPezNggij4fKFDNmDYtzn7BzEzBmSJp0BHKGCzg7aKuOgyZG08lt0%2B98UExJ0E5OkqD4VZLESj%2FvyCnBEBdrPffxFlSrJ3adpAbOZVHlJLhGUJyX0UAaopiPjJMiOFwWLed97JeCTbBAzV73YSCz8RBKThZUfZAHYvTPriwBk29Q5TGRTpvYLpufJcStDwM5YtMwdrQtJhJJ1M4wa43lKrK23m6fH3xeAzHCRsCeTgMYGGiLmlTlfmwZXwO9uZMsKBIYpPhf9ciTGaefQSL0jQ09KkVcUhLudBr5Ws%2Fob0l02WD0X2cu4pQ23WwEOWU1mkdlHa3j2LrmCumcZpotOkWwPacsRk5K4%2BPJhUPXt9HOINPgkOEQZYQm%2FcAO1eGQWJnJdKcd13leV6rcuzT9ti%2B2NkGzLPFF8uBKrBpVL7UXpf69sOXSGsaUOMw5RQxDfGzAROe%2BlqhyFZxjqs3qML%2Bs4sPxRxfrZkjY5KHpCyPTKSyDLH06KPWQQdlX8iXH%2FWHEctyFv%2F1gLAFTi3P44eBdTBLHSkFP1js0lMG3dMM7wicoGOqUBpGvFqfidx0IapggJb%2FrwYxaJ6ETUQcNPty7sIMpqDYY%2FCilxzcCpDQ0rzVwINR0RY%2B%2B%2B6vqfqqGDFAHkMbtIaihXx99vNOUZgZqVHELL%2FNhPLhT5AgNXn3i1vAraAi6zwAQlH7b%2F%2BnJ79dAKw1oAQD9bF77hzOzmh6Xm7bMW1WBV1wAtEN0aMM17QRHoheQJivKzicECkLLdOqq921JhGv%2B%2BhOlM&X-Amz-Signature=5c89d1b666b5475cd524995cde5ba5439fd19d36a822fea3cc1eb23d50d6843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6F7AB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBURpDniRYddyBKYeLApuG0DeReFbt2sep1Dqp2DuPw1AiEArb3kdrpSDkunz%2Fr9tUBLFDzspbX0m67Brtw%2FvVqEIwoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDC4gWiphSbSqHleJ8SrcA6uGvXaUEpkcsLIQTArEO3ePuaTibI%2BrEISy9v13lbVGbwXqN6G7%2BrRZq3qhvF4KhKXw9Omjcnpj%2BUarLQOwPezNggij4fKFDNmDYtzn7BzEzBmSJp0BHKGCzg7aKuOgyZG08lt0%2B98UExJ0E5OkqD4VZLESj%2FvyCnBEBdrPffxFlSrJ3adpAbOZVHlJLhGUJyX0UAaopiPjJMiOFwWLed97JeCTbBAzV73YSCz8RBKThZUfZAHYvTPriwBk29Q5TGRTpvYLpufJcStDwM5YtMwdrQtJhJJ1M4wa43lKrK23m6fH3xeAzHCRsCeTgMYGGiLmlTlfmwZXwO9uZMsKBIYpPhf9ciTGaefQSL0jQ09KkVcUhLudBr5Ws%2Fob0l02WD0X2cu4pQ23WwEOWU1mkdlHa3j2LrmCumcZpotOkWwPacsRk5K4%2BPJhUPXt9HOINPgkOEQZYQm%2FcAO1eGQWJnJdKcd13leV6rcuzT9ti%2B2NkGzLPFF8uBKrBpVL7UXpf69sOXSGsaUOMw5RQxDfGzAROe%2BlqhyFZxjqs3qML%2Bs4sPxRxfrZkjY5KHpCyPTKSyDLH06KPWQQdlX8iXH%2FWHEctyFv%2F1gLAFTi3P44eBdTBLHSkFP1js0lMG3dMM7wicoGOqUBpGvFqfidx0IapggJb%2FrwYxaJ6ETUQcNPty7sIMpqDYY%2FCilxzcCpDQ0rzVwINR0RY%2B%2B%2B6vqfqqGDFAHkMbtIaihXx99vNOUZgZqVHELL%2FNhPLhT5AgNXn3i1vAraAi6zwAQlH7b%2F%2BnJ79dAKw1oAQD9bF77hzOzmh6Xm7bMW1WBV1wAtEN0aMM17QRHoheQJivKzicECkLLdOqq921JhGv%2B%2BhOlM&X-Amz-Signature=931859d280f1fd379ef28e824bdfb4349d35138bffb64f001e8c67fd8eaf3117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

