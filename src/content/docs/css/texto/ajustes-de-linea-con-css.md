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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P6KVLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F0J2HNqnAiKVzlrkPj6568XmcNH0TmeGop4%2BcRslhJAiBgqFQBhxW36%2B0grxfOR0hDDjRpG7IEyH2dCV%2FVnyYNxyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMTBcctDo6AMHO%2BFXnKtwDme2gl0xocfWbBENEI6RUqcwV8cIyE2FJcePGYQd5sfk9mjv0o9WaWDMWDu6eXHyDnqo40EztznwV6ZjTw6Vb76GdGr%2FyUC4o6mp%2Fw%2BdCzcKVNKNDkPOGMeJJbEd9k82SsS7qvUCzJ05vXE43qyXZWdWQUholHGSgxBKaXb1FnXT%2BqPg1Eme0GQIq4P32VO7xWlS0ronZ5mfHfhxyj7GpxVHBRbQbF%2Bq6gIboDY9F3ia8doYFD1QfVjBFk8%2FA4etyRx4s0fUUvixOXhXoTa6YDDQAUxSiYySc8gnFDxwhE4UMQM%2F2PnFhiDmBNJ9kOPR%2BKtsF26Or9XHrVb34VWmn09BnvL72aP1JNN5JmyK96mT6LBls8CbfK5KX0LdPOGwc4BpcwwKd8ZceGKzXJj8rQ5QDTLUAGSIkKe7zdEMgdo7oPltNQOMB0Hgsvi5MDgbDxCqrs1ve3lkGCnvymWjn6xXCXGs2EV1pq%2BTPzS5c9jQJmwC2ZT%2Bg%2F7kGKanwyvamXpA0zXt9bnYX%2Fdxm%2FpzrEz66Rz%2F4E88e5LW8QPEF6eZ%2BrBten%2BjZx86RMGQZjBlVbfBlhtvtHbfBScs1KpKD5tU8kNXDoG%2BlrlTvB1l05uiiAF0hflRYRkuLJvEw4umIygY6pgHk%2FUuE438S8WMc8DYFUXZEmUBR0A%2Fl0WCJBAILWC2K%2Bc5%2F46jFBVzfNhFpl89qoGLljChu6%2BTi1tiAJqfN967yhg58iKjvMFOcawwZ47q9%2ByHlnqdYo1KPYV75HN%2FAE%2Fhx9lqrojBu4%2FHqSSGoIR47%2BpbeYY5amqyXhhT6M56KPof0AwrcPAiJoeZM2sewNXWE5cC18zKlT6J6nquPgu6r3czgAC6c&X-Amz-Signature=b7f6f8b8f64464a338092de0dd45a9043ac7e10d391d73d371d5ff790af71631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675P6KVLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F0J2HNqnAiKVzlrkPj6568XmcNH0TmeGop4%2BcRslhJAiBgqFQBhxW36%2B0grxfOR0hDDjRpG7IEyH2dCV%2FVnyYNxyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMTBcctDo6AMHO%2BFXnKtwDme2gl0xocfWbBENEI6RUqcwV8cIyE2FJcePGYQd5sfk9mjv0o9WaWDMWDu6eXHyDnqo40EztznwV6ZjTw6Vb76GdGr%2FyUC4o6mp%2Fw%2BdCzcKVNKNDkPOGMeJJbEd9k82SsS7qvUCzJ05vXE43qyXZWdWQUholHGSgxBKaXb1FnXT%2BqPg1Eme0GQIq4P32VO7xWlS0ronZ5mfHfhxyj7GpxVHBRbQbF%2Bq6gIboDY9F3ia8doYFD1QfVjBFk8%2FA4etyRx4s0fUUvixOXhXoTa6YDDQAUxSiYySc8gnFDxwhE4UMQM%2F2PnFhiDmBNJ9kOPR%2BKtsF26Or9XHrVb34VWmn09BnvL72aP1JNN5JmyK96mT6LBls8CbfK5KX0LdPOGwc4BpcwwKd8ZceGKzXJj8rQ5QDTLUAGSIkKe7zdEMgdo7oPltNQOMB0Hgsvi5MDgbDxCqrs1ve3lkGCnvymWjn6xXCXGs2EV1pq%2BTPzS5c9jQJmwC2ZT%2Bg%2F7kGKanwyvamXpA0zXt9bnYX%2Fdxm%2FpzrEz66Rz%2F4E88e5LW8QPEF6eZ%2BrBten%2BjZx86RMGQZjBlVbfBlhtvtHbfBScs1KpKD5tU8kNXDoG%2BlrlTvB1l05uiiAF0hflRYRkuLJvEw4umIygY6pgHk%2FUuE438S8WMc8DYFUXZEmUBR0A%2Fl0WCJBAILWC2K%2Bc5%2F46jFBVzfNhFpl89qoGLljChu6%2BTi1tiAJqfN967yhg58iKjvMFOcawwZ47q9%2ByHlnqdYo1KPYV75HN%2FAE%2Fhx9lqrojBu4%2FHqSSGoIR47%2BpbeYY5amqyXhhT6M56KPof0AwrcPAiJoeZM2sewNXWE5cC18zKlT6J6nquPgu6r3czgAC6c&X-Amz-Signature=2be8678ae5e991fd8d8de65cda13750d9c0579329fc7e9ecfa7fb744155aec30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

