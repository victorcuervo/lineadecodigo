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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJDYDWMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dV7hrF5ou2GxsxxjkesSSv3aFaM69EothANRaYS4jgIhAJ0Z4iCVUtp52hwWQJJBNSHdUjerf4s3XkYJxUgak3vBKv8DCHkQABoMNjM3NDIzMTgzODA1Igx6ARRCy6FhA6Arzvgq3AORb3twxge5w8OBpTeJzd6qyk9Xamh8FL12Kk6VQmqLBMa9I6v2qil6lQko3zohgs676DanKDceGC1TuRqerCd0ev%2F%2BtIP1YTeG0nRoEhh09gs6YjZPjVgBNBbA6ZsdMwWZYyEhU4otbUXK8aU6A1zH5GrdE8nj1T6uLKVYYXYjfgelBUiTNTGaGDdi8j1LF4fCmV00wXSZQ846H3JM46%2FTBfYIb9ybJbh4NIptSyaWlblcHO19Ga9Kt5a6wukuhJlDzbRN2F3wv4HVggcN50LWaEdgu00K66kQJckyUssh0P%2Bk7he3WfEcWNP8SU02iGTLMbvgHKcoBVXydFThOF43C4lyoIkutk%2BMctI4S9xfPiT8w%2Fc9YQbAKFVeaGhxVQwlO7%2F8ThejYr%2FCZigfyxUB5eNYx1RZ7nKU0xKQvqNqICEjAhgPMG2asI2CXS1KW6XK%2FKb5sYrND1daLwgTNtFnT5mECeyZb8%2BI41iS1SM2yBrknbRFCtuK%2FCG%2FQ%2B2wAPt%2BF0DsuHPulhUWAmZXZbgCdhswsY5EySsNM0exmi6kAKbWkuMcWm17hbZWyjRJkjFZqXDppQNIi4ZXQVyPIP97jOs7m5I50toM9ToalY%2BpIuPV6VK8MsoaDgIDiDD90InKBjqkAfDL90v3w6BM2fe04tVKzm4CC4lzjNc2r4TFXRaTwgOGwDPD0gIWKyvtF5umceDCWD1Ds0sb9tiq%2FAMfgjZhzJoOx8eJObL3lK17vC3pttgtFj3xaxlURjt3zeEY9Ib1J1LekB6MethZLJuXOi4%2FFygWjDUQMBf4JjsyHTuH1ULNqfYYqRCe%2FB4NOG8WHh%2BlZsl261UcZpj9G7nwbHaHwnIyAlv9&X-Amz-Signature=b819926bbac07831578024180eed705f2f75a455b2f63bf25d35c5b867d11ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJDYDWMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0dV7hrF5ou2GxsxxjkesSSv3aFaM69EothANRaYS4jgIhAJ0Z4iCVUtp52hwWQJJBNSHdUjerf4s3XkYJxUgak3vBKv8DCHkQABoMNjM3NDIzMTgzODA1Igx6ARRCy6FhA6Arzvgq3AORb3twxge5w8OBpTeJzd6qyk9Xamh8FL12Kk6VQmqLBMa9I6v2qil6lQko3zohgs676DanKDceGC1TuRqerCd0ev%2F%2BtIP1YTeG0nRoEhh09gs6YjZPjVgBNBbA6ZsdMwWZYyEhU4otbUXK8aU6A1zH5GrdE8nj1T6uLKVYYXYjfgelBUiTNTGaGDdi8j1LF4fCmV00wXSZQ846H3JM46%2FTBfYIb9ybJbh4NIptSyaWlblcHO19Ga9Kt5a6wukuhJlDzbRN2F3wv4HVggcN50LWaEdgu00K66kQJckyUssh0P%2Bk7he3WfEcWNP8SU02iGTLMbvgHKcoBVXydFThOF43C4lyoIkutk%2BMctI4S9xfPiT8w%2Fc9YQbAKFVeaGhxVQwlO7%2F8ThejYr%2FCZigfyxUB5eNYx1RZ7nKU0xKQvqNqICEjAhgPMG2asI2CXS1KW6XK%2FKb5sYrND1daLwgTNtFnT5mECeyZb8%2BI41iS1SM2yBrknbRFCtuK%2FCG%2FQ%2B2wAPt%2BF0DsuHPulhUWAmZXZbgCdhswsY5EySsNM0exmi6kAKbWkuMcWm17hbZWyjRJkjFZqXDppQNIi4ZXQVyPIP97jOs7m5I50toM9ToalY%2BpIuPV6VK8MsoaDgIDiDD90InKBjqkAfDL90v3w6BM2fe04tVKzm4CC4lzjNc2r4TFXRaTwgOGwDPD0gIWKyvtF5umceDCWD1Ds0sb9tiq%2FAMfgjZhzJoOx8eJObL3lK17vC3pttgtFj3xaxlURjt3zeEY9Ib1J1LekB6MethZLJuXOi4%2FFygWjDUQMBf4JjsyHTuH1ULNqfYYqRCe%2FB4NOG8WHh%2BlZsl261UcZpj9G7nwbHaHwnIyAlv9&X-Amz-Signature=6e6862f449fe875dd4de1fdde555ef05ebafbe71844338f30dbd6436fafbb7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

