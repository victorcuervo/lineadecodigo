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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSXNFDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9pCLdUGoSfsLKt3A%2BmGUYcMdDv%2BlHcJfowB4s0I3lwIgey2phtmQ3iovYv%2B%2FuNjtwNpewHbaDi5PnfxYjDlOpAYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDAWBnU3nbW1Oa%2FqcircA7oEasSK%2FDWLTGbwOf2bEv3y7eOvxiG5q71CkKOnV2nnPba4vZvIJBgjK60Gr5ecL0RELl4tVlXchXqr6mR7%2BzZ14KmkJCf7SkKpG%2FhfV4bi2D01Lybqt%2FgNWH0nebTyNdwisdDNPWhHa95D5mPKbLn7J7DoX%2FulkQuV1uXQQLvIKaOM1YV0awwiuXb87Wx3i5p3baiNyyLhaGw6LhSSI9k6sQvdGv6cVfQs2Pcqm8Q3%2FMqm0fJBYrhIlTk1nb7HCtJpll2Lt5AMYJ1egHGuytJBnx1uJEGVW3pnlR4XcXmWorOjebe5z5iXNKLO9KccQsB24gXi83a4BTqhGUn%2BpmyH9s6slp4LHonM4uTqLscyCr0u%2FGZpNA5VUVZPCsh%2FRelZLP5V%2BcBqAGVc0U2JVO15wKbIKEMH3BbMLPxb4dhY5LqpAIVzJeTxuClE9F8nUF8z3RLgFUp8zLSWXAzH93Tn2cKbn%2F2nxb74gskC1D0leffUQe33E75o%2FBYjo3Dq7iN1FLLFXeIrFVO2RdvWlyctsj4Ce8ngVTZgN4dYM%2BODIsTE4NNJYqMx3ICPMOAnEAw10eyU1WlM%2BHGeBKTV2nkP4Jc%2BcNuZzp93Xid%2Ft50jhIlK97h3dg9tvGBTMMT7h8oGOqUBN6FhpBTRDe7T0ZR2vCLljTF5x%2BXtneQfvPfXi87YQdD6OovzcZOT6VRxhV9NDHwaKTjmAhwN233%2Fk%2F7eXPwe7RqZwQsfxn8u3a%2BQfdM%2BgLNx%2FUIIJlas%2FNcLJkAO0f%2B9V4gJdeM3PKTA2KnK51gh0b2J8qfJ%2FKkeJVegA1Qc4WQjqTeL%2F7LrypqReR6V9EmbLtoB58aXNZU48pVtfanrBjYscVPH&X-Amz-Signature=8e0ec3a0a9d8e112d986d9c3ce771746c26a1c0bbbef174abfd9285b1a2be46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSXNFDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9pCLdUGoSfsLKt3A%2BmGUYcMdDv%2BlHcJfowB4s0I3lwIgey2phtmQ3iovYv%2B%2FuNjtwNpewHbaDi5PnfxYjDlOpAYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDAWBnU3nbW1Oa%2FqcircA7oEasSK%2FDWLTGbwOf2bEv3y7eOvxiG5q71CkKOnV2nnPba4vZvIJBgjK60Gr5ecL0RELl4tVlXchXqr6mR7%2BzZ14KmkJCf7SkKpG%2FhfV4bi2D01Lybqt%2FgNWH0nebTyNdwisdDNPWhHa95D5mPKbLn7J7DoX%2FulkQuV1uXQQLvIKaOM1YV0awwiuXb87Wx3i5p3baiNyyLhaGw6LhSSI9k6sQvdGv6cVfQs2Pcqm8Q3%2FMqm0fJBYrhIlTk1nb7HCtJpll2Lt5AMYJ1egHGuytJBnx1uJEGVW3pnlR4XcXmWorOjebe5z5iXNKLO9KccQsB24gXi83a4BTqhGUn%2BpmyH9s6slp4LHonM4uTqLscyCr0u%2FGZpNA5VUVZPCsh%2FRelZLP5V%2BcBqAGVc0U2JVO15wKbIKEMH3BbMLPxb4dhY5LqpAIVzJeTxuClE9F8nUF8z3RLgFUp8zLSWXAzH93Tn2cKbn%2F2nxb74gskC1D0leffUQe33E75o%2FBYjo3Dq7iN1FLLFXeIrFVO2RdvWlyctsj4Ce8ngVTZgN4dYM%2BODIsTE4NNJYqMx3ICPMOAnEAw10eyU1WlM%2BHGeBKTV2nkP4Jc%2BcNuZzp93Xid%2Ft50jhIlK97h3dg9tvGBTMMT7h8oGOqUBN6FhpBTRDe7T0ZR2vCLljTF5x%2BXtneQfvPfXi87YQdD6OovzcZOT6VRxhV9NDHwaKTjmAhwN233%2Fk%2F7eXPwe7RqZwQsfxn8u3a%2BQfdM%2BgLNx%2FUIIJlas%2FNcLJkAO0f%2B9V4gJdeM3PKTA2KnK51gh0b2J8qfJ%2FKkeJVegA1Qc4WQjqTeL%2F7LrypqReR6V9EmbLtoB58aXNZU48pVtfanrBjYscVPH&X-Amz-Signature=b3e99bc8a5defd834ebe20b92143aa5a1ae4fecbf9614e7ead1cb0cdaeff6773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

