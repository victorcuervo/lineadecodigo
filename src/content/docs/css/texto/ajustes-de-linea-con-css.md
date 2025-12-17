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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFG5TQ5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI0kBVtBFwWi%2BOZq9Fcrg5j6BypG6k%2BuBbMk1vxkkFkQIgHnZ1QKYN%2BTEBYjkytWqsrKTfW2rJVN8eZ4KfjRyBd1Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD4IWgTSvtlU4OQqSCrcA2BnojVUdnDTPtxVef895yRFyd1fzz%2Fc5iFiXkTD51765nN%2FU2oyEtq71Rz9tQW35OWiyc4PzyaVflupYU5NzVyaTF7NnuvmjH5u36dCvDabCeu6zZJX5HOMysoj9s%2BBLya8lNGPb8k6HJobA1xZcGJtVV9TPjECduiR6oyBBFZDJQqXlb977smDwz%2FpSajaICySNZnb1EqKsm3va1KzOWLqXqXcDQQMnR6MvxnMAS%2BX%2FolqolOcb%2BQ%2FUUR0h9t45CtRhT9GSoEKJU4grpaSqsRNRdek6jrRTv2SFdzJw0ZUY4zCRn8piGsQgk8KVlsEwcDC%2FZw3FsWkfB8YfVLsjd9aKCbE7gyojtZ4%2BWWvKkCC5lnbL5zGqMTqsAo87S3Qg%2BVqccG9Ze6qgoN8lrqUJuu231jrP0dCCAazno3SeVbJIp%2F5M%2F13JewlVBORzLmM%2BXpNgsts5I%2FhT0XxjZBsH7nqI39cobwwxfT7OndtBTKaF%2BEa9pIvWiTo3MtKxJH6aTWXVM0QsOl2hf82fNJ17V1bnxEFJ5f%2Fsj%2BZiNOpHVF%2B0mp4SwLB%2BAyd%2F88ApxeCcTYTAZGVL6IczMgAL9kUUpkMWyjTVLychE3vfhMBCGo9AMQH0Bj6RFdYF%2BQHMITfh8oGOqUBBk1IUCMKqsu9zsjsAuZRyWOEBbN%2FayCKJMPranl4U5hhtJIeCrKnELr9QSB7Oh1eIW3t%2BfW%2BL4r%2F%2BpmZ6joPMKvin2ROErHuLyXxafgChArx8eEAXeNfNrsRuPr7YagsLg8UlBujBzE1tJ9fjJ9E45L90LMzh806DkR6CqQMkHcM3ISJb2KPKum5ZqqNlmvr6bhVtTUBdyON2Q%2F1XKy4b44u1K%2Fw&X-Amz-Signature=07fc36b1fdfd5ba0386599fb7852cd6438a983bf3148595f1cdbced57a50c479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFG5TQ5G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI0kBVtBFwWi%2BOZq9Fcrg5j6BypG6k%2BuBbMk1vxkkFkQIgHnZ1QKYN%2BTEBYjkytWqsrKTfW2rJVN8eZ4KfjRyBd1Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD4IWgTSvtlU4OQqSCrcA2BnojVUdnDTPtxVef895yRFyd1fzz%2Fc5iFiXkTD51765nN%2FU2oyEtq71Rz9tQW35OWiyc4PzyaVflupYU5NzVyaTF7NnuvmjH5u36dCvDabCeu6zZJX5HOMysoj9s%2BBLya8lNGPb8k6HJobA1xZcGJtVV9TPjECduiR6oyBBFZDJQqXlb977smDwz%2FpSajaICySNZnb1EqKsm3va1KzOWLqXqXcDQQMnR6MvxnMAS%2BX%2FolqolOcb%2BQ%2FUUR0h9t45CtRhT9GSoEKJU4grpaSqsRNRdek6jrRTv2SFdzJw0ZUY4zCRn8piGsQgk8KVlsEwcDC%2FZw3FsWkfB8YfVLsjd9aKCbE7gyojtZ4%2BWWvKkCC5lnbL5zGqMTqsAo87S3Qg%2BVqccG9Ze6qgoN8lrqUJuu231jrP0dCCAazno3SeVbJIp%2F5M%2F13JewlVBORzLmM%2BXpNgsts5I%2FhT0XxjZBsH7nqI39cobwwxfT7OndtBTKaF%2BEa9pIvWiTo3MtKxJH6aTWXVM0QsOl2hf82fNJ17V1bnxEFJ5f%2Fsj%2BZiNOpHVF%2B0mp4SwLB%2BAyd%2F88ApxeCcTYTAZGVL6IczMgAL9kUUpkMWyjTVLychE3vfhMBCGo9AMQH0Bj6RFdYF%2BQHMITfh8oGOqUBBk1IUCMKqsu9zsjsAuZRyWOEBbN%2FayCKJMPranl4U5hhtJIeCrKnELr9QSB7Oh1eIW3t%2BfW%2BL4r%2F%2BpmZ6joPMKvin2ROErHuLyXxafgChArx8eEAXeNfNrsRuPr7YagsLg8UlBujBzE1tJ9fjJ9E45L90LMzh806DkR6CqQMkHcM3ISJb2KPKum5ZqqNlmvr6bhVtTUBdyON2Q%2F1XKy4b44u1K%2Fw&X-Amz-Signature=d4bc4f82e59b4f508c23e7deae4fd259267579a8daae69fe9ebd952f6fcb9f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

