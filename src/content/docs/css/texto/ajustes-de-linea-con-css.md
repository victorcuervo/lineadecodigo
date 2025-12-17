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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BL3O7AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC56MAGB3RQyiTXZjesKSOUXcLhuTd6EGJG1W8Pdu3%2BkAIgB7I%2Fr44Y06avNHlkAR5YSRoPJEBOYB4UXMJqnDuPAnoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzavQLNiQTQJWzyZCrcA%2Fm9wmxQbcMhGCZaFwkH%2FjJldwJmqR%2F9br9j08fkiB9mzQuYruSq70yZcMZcrITMwtCROwcy0ZgtPpLcSFunA15Pu9%2B6V8fY%2FCWV%2Fi3meKO3EmRMfcosCF6q3LYMpBHsrk3ZZjj3ijDEtBvL7velB%2BMdWIDwM3ME%2FRG4pHmaf%2FbcuV0kTR5Vvd%2Bg4i2CgmAM%2FgKW5mWjLZHjTLK0ZkbA6vQh%2Bnb6fr8YasetxNICEHFqC7G1V2UHrv8026duPn8Vx8u5M%2BzHIIxqcSr8vOnKAg4OYZt0FPlBuZZ8agpsW9V9SmFhpFrgO7pRFA%2FAresSSZfIIH9vtqHGFleyO0AFWpj2rJi4gpRqX5KgBTSAaV4COvcYiQF2dPJJA6b6C%2B0N1o9KAbJoYE2IUEcJH2s5a2R%2BfnZd8EFAwWy6iOPnwI69IvJw4%2BimSSlzIUOUfZmnQSYGxqdXatduPEmw5rQe9WkqxscO%2Fyl%2FENZBC0IUohT7V%2FL71MlnNOQctqYEFNrPoWorI4MyG1pWjqYJ5leedQ9Afrd9dpGOmAYfW5%2FOZlp2hY0qVYBLHz%2Bw69ZTPy6CyqeNfg5XMJhnD6vJlhOkp1bnxHCqzk9JwnzuzBWSHTWBjd2b8R1nE8vZc6pLMO2Bi8oGOqUBkIuPkV3JJ0U%2FdM4O%2BaDgNInn1RpukWqWZM10VROoO%2FKW%2FRcKDp9V%2B2k%2BFGzyFK76EfK2GulkTDtDVjYA%2Bzi%2FY9CYffTquIGErbvW6%2FVvfjqiCN8XodrsV8EjNhQvg%2BxbqiaVcn%2FtkLb7O%2BP%2F%2F9SDaHKfXc8vVhgOoHDqAJ0gyksLtPQ8OrZuTu4quHI6Ubz%2FfQvk6vR9oQpJDfqS7YIIvnxmRD7A&X-Amz-Signature=73dc17e70c46b94b50fd0458ceb2d895e7691fc6dcc801c698171c6df6d34a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BL3O7AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC56MAGB3RQyiTXZjesKSOUXcLhuTd6EGJG1W8Pdu3%2BkAIgB7I%2Fr44Y06avNHlkAR5YSRoPJEBOYB4UXMJqnDuPAnoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzavQLNiQTQJWzyZCrcA%2Fm9wmxQbcMhGCZaFwkH%2FjJldwJmqR%2F9br9j08fkiB9mzQuYruSq70yZcMZcrITMwtCROwcy0ZgtPpLcSFunA15Pu9%2B6V8fY%2FCWV%2Fi3meKO3EmRMfcosCF6q3LYMpBHsrk3ZZjj3ijDEtBvL7velB%2BMdWIDwM3ME%2FRG4pHmaf%2FbcuV0kTR5Vvd%2Bg4i2CgmAM%2FgKW5mWjLZHjTLK0ZkbA6vQh%2Bnb6fr8YasetxNICEHFqC7G1V2UHrv8026duPn8Vx8u5M%2BzHIIxqcSr8vOnKAg4OYZt0FPlBuZZ8agpsW9V9SmFhpFrgO7pRFA%2FAresSSZfIIH9vtqHGFleyO0AFWpj2rJi4gpRqX5KgBTSAaV4COvcYiQF2dPJJA6b6C%2B0N1o9KAbJoYE2IUEcJH2s5a2R%2BfnZd8EFAwWy6iOPnwI69IvJw4%2BimSSlzIUOUfZmnQSYGxqdXatduPEmw5rQe9WkqxscO%2Fyl%2FENZBC0IUohT7V%2FL71MlnNOQctqYEFNrPoWorI4MyG1pWjqYJ5leedQ9Afrd9dpGOmAYfW5%2FOZlp2hY0qVYBLHz%2Bw69ZTPy6CyqeNfg5XMJhnD6vJlhOkp1bnxHCqzk9JwnzuzBWSHTWBjd2b8R1nE8vZc6pLMO2Bi8oGOqUBkIuPkV3JJ0U%2FdM4O%2BaDgNInn1RpukWqWZM10VROoO%2FKW%2FRcKDp9V%2B2k%2BFGzyFK76EfK2GulkTDtDVjYA%2Bzi%2FY9CYffTquIGErbvW6%2FVvfjqiCN8XodrsV8EjNhQvg%2BxbqiaVcn%2FtkLb7O%2BP%2F%2F9SDaHKfXc8vVhgOoHDqAJ0gyksLtPQ8OrZuTu4quHI6Ubz%2FfQvk6vR9oQpJDfqS7YIIvnxmRD7A&X-Amz-Signature=da24e8af7e3e4cbada855032914a6ea2c3b8e4c671615c928af9990ba13d8897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

