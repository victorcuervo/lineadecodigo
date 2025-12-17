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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HRS2GG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjsiOdpRiDUx092vPWrczknxjVhRjAlwwa44BZ66M2QIgZNMOKzd%2FUWlPPioqwjYSEEIGnOsNKheugu3cZQsotJoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDA62OaVtEDRVduMfVyrcA1wjjGFGjQHf0sjhPfPKSCPgeRtxuAf%2FSXy7kSq32BFyYpU5u%2B3Kp2P8UPqM5bVGGMw0Zh0iy4Km2dpqFkcjSJfkPcuvBoy%2FX%2FbKL9lFslgWu0WyQSiK5Oq5lUbsHSmv%2FN624FOIMPsD6sX8EFKDPGrB%2BLahRI1CHml%2F8WFkHH0uvyCHT26pecfrqP%2FCB2F1XDMVFEQxZyp9xY2gGsrGJm%2Boauj4qWT7DR3M6JFMwMcN5NAc2ehetCpL043GrPWwVBTfArNc075mb1stH1XGfC5mpGlPXeHjKpIa8%2BP5ldFk8MTg22chGTvIiET6w17QTPzS8dpIQ%2BIa0bI1XonYkum2V9fifSla1K2H%2Bv2NrcXzXeUWC3ke2Ig25JPO5CNdUM6u2sGkEIAgTkD07%2Bn1Qw6XGyA%2FuoLNAEitbFVrUCgMyz%2BKjOxzATaesBYLBgsf87cpYHMzA0%2FrXugQvTQYlBnnjuP2M6mC9zGfm2h%2BZtPMJ0XfKTG9vKmVL%2FaZPlmAFbXBCArPJSyrMGWLzs98tWf1wmoehQm1fulaum3swcSX1kyZCI2%2F4ekmgEeLBBVl4xY4PJkbMNJFaxdx1vLxn5kDL7lqiLEygShdIvids4VN6AvCUPDHVi1d88i%2FMKS4icoGOqUBPq8BdUeQMJL38BJvbeii1Xl3n1lRSp70ihUyUP8iWuUiVdpAYZQEG70C8XpbO3gLAsSSfsTYV1nUasGKiVKltfAb9BRlSVHI4ZKvZyiDmxoreWEkkjheBxLjq1vurr%2BSy%2F%2BKL6XduPKAc8w0ulvi%2B8ep6CVdjrPXf10cV0ZYxtqkmyvQpOJKE1VX8g5auST2%2FTF3i6ycVVHMCHtZ2c%2ByqzkKuEG%2B&X-Amz-Signature=bb4be5af245f24c674f9aed8dcede7618b35972e25db32eac6b3387536816a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HRS2GG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjsiOdpRiDUx092vPWrczknxjVhRjAlwwa44BZ66M2QIgZNMOKzd%2FUWlPPioqwjYSEEIGnOsNKheugu3cZQsotJoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDA62OaVtEDRVduMfVyrcA1wjjGFGjQHf0sjhPfPKSCPgeRtxuAf%2FSXy7kSq32BFyYpU5u%2B3Kp2P8UPqM5bVGGMw0Zh0iy4Km2dpqFkcjSJfkPcuvBoy%2FX%2FbKL9lFslgWu0WyQSiK5Oq5lUbsHSmv%2FN624FOIMPsD6sX8EFKDPGrB%2BLahRI1CHml%2F8WFkHH0uvyCHT26pecfrqP%2FCB2F1XDMVFEQxZyp9xY2gGsrGJm%2Boauj4qWT7DR3M6JFMwMcN5NAc2ehetCpL043GrPWwVBTfArNc075mb1stH1XGfC5mpGlPXeHjKpIa8%2BP5ldFk8MTg22chGTvIiET6w17QTPzS8dpIQ%2BIa0bI1XonYkum2V9fifSla1K2H%2Bv2NrcXzXeUWC3ke2Ig25JPO5CNdUM6u2sGkEIAgTkD07%2Bn1Qw6XGyA%2FuoLNAEitbFVrUCgMyz%2BKjOxzATaesBYLBgsf87cpYHMzA0%2FrXugQvTQYlBnnjuP2M6mC9zGfm2h%2BZtPMJ0XfKTG9vKmVL%2FaZPlmAFbXBCArPJSyrMGWLzs98tWf1wmoehQm1fulaum3swcSX1kyZCI2%2F4ekmgEeLBBVl4xY4PJkbMNJFaxdx1vLxn5kDL7lqiLEygShdIvids4VN6AvCUPDHVi1d88i%2FMKS4icoGOqUBPq8BdUeQMJL38BJvbeii1Xl3n1lRSp70ihUyUP8iWuUiVdpAYZQEG70C8XpbO3gLAsSSfsTYV1nUasGKiVKltfAb9BRlSVHI4ZKvZyiDmxoreWEkkjheBxLjq1vurr%2BSy%2F%2BKL6XduPKAc8w0ulvi%2B8ep6CVdjrPXf10cV0ZYxtqkmyvQpOJKE1VX8g5auST2%2FTF3i6ycVVHMCHtZ2c%2ByqzkKuEG%2B&X-Amz-Signature=71573fc78beb4bcdc038d8cd64bf5766847895ff9ad136f0f13df35c653cff60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

