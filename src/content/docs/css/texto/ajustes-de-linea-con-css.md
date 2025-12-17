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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYFGQAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxRqYUSaJCJnFq3IXktvXFT8lOPwXoRJkiLgVw7JY0PgIgOZDfNEkyR%2F5sY9M4VKSggwv5hMs14A%2BZO1TnJAxzQicq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDALENQ4WmP2G4KyJWyrcA9%2FMUq2HqTMJb9dOK%2FcgM%2BhulxJVRqBD24n8staMhQi6tIZwPJn2%2FcJ4%2B%2BK9pJkInguQlRie08hOpS6Fy5dFz%2FFhg%2FD9QoeOyOF3%2Fa%2BcnHzuRh%2BDqH4UdHjwKzULvYcUX3Eg7Ny0BQ5jY0tsLvhtsaBlkBeVAkmu2clWd1MM61JTYBuIZ2W445nEi7yqO162%2F5HhNJAR1c%2FtOBGdYP1huLdIOiAxepCOtYRMIcRWHr7L%2FIKAG4o7qJhhB1jRwGg5AKUILpcleKT%2F2Iaeqf89P55bsNXtzghWBjf7DHq%2FCypB9xivh2AcxwRTyIgrxyQZfhzrJ42CHtYwwHb9HoVE7UUNzVZeldRDrB%2BGomCcVUp3NQ0p29eZ916mk1F0aoQIEA48oXfSN4kyTrbPpSDFx9nnBBKdGcWmtZ5zv%2BJfPsHblOQMJQyu8z7Z%2BEwAVcTpM5snRljHHBn%2FUGmjUdLjldVm0l%2F3PVkitaOWDGenz93c5UKKoTKc7WMvonUlMQL6vRHQ%2Fg8Y5HZwT5GzJmLCP9slSsbXoAiLryzRpY89DpoBzfKKB9kYkIb1di1d7tYoBfvZZavPIChKoyrGlyI3r%2BZ6fj9XolveifeB8jHhQN9KP3XqQchpfNMKLGykMKLjisoGOqUBzyAuKUFnmysnf8b6wc5ol%2FnvmeLxhtu0f1PbuhBA5j8Fl5ITgliNgb7r%2Bq%2BnsYiEZpJhxh2DCXtANpkBBUDyCErxYrLsz%2Bfi%2Br%2BAEqSUSPVdJUElDZgpEkwk7IWpGuaCSU1RN112OaTvgu25Li5nEVP80s95j2tQ2sdR6UhrSEu4H3yBBVcbLWWxpH7uJiAjdR3bWmm9p%2FuHxPaqwRiBEXpBHSai&X-Amz-Signature=2725a8fd4aa32fbff7b7268edf814569cc7edd2c979464569c0e02d538c2a03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHYFGQAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxRqYUSaJCJnFq3IXktvXFT8lOPwXoRJkiLgVw7JY0PgIgOZDfNEkyR%2F5sY9M4VKSggwv5hMs14A%2BZO1TnJAxzQicq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDALENQ4WmP2G4KyJWyrcA9%2FMUq2HqTMJb9dOK%2FcgM%2BhulxJVRqBD24n8staMhQi6tIZwPJn2%2FcJ4%2B%2BK9pJkInguQlRie08hOpS6Fy5dFz%2FFhg%2FD9QoeOyOF3%2Fa%2BcnHzuRh%2BDqH4UdHjwKzULvYcUX3Eg7Ny0BQ5jY0tsLvhtsaBlkBeVAkmu2clWd1MM61JTYBuIZ2W445nEi7yqO162%2F5HhNJAR1c%2FtOBGdYP1huLdIOiAxepCOtYRMIcRWHr7L%2FIKAG4o7qJhhB1jRwGg5AKUILpcleKT%2F2Iaeqf89P55bsNXtzghWBjf7DHq%2FCypB9xivh2AcxwRTyIgrxyQZfhzrJ42CHtYwwHb9HoVE7UUNzVZeldRDrB%2BGomCcVUp3NQ0p29eZ916mk1F0aoQIEA48oXfSN4kyTrbPpSDFx9nnBBKdGcWmtZ5zv%2BJfPsHblOQMJQyu8z7Z%2BEwAVcTpM5snRljHHBn%2FUGmjUdLjldVm0l%2F3PVkitaOWDGenz93c5UKKoTKc7WMvonUlMQL6vRHQ%2Fg8Y5HZwT5GzJmLCP9slSsbXoAiLryzRpY89DpoBzfKKB9kYkIb1di1d7tYoBfvZZavPIChKoyrGlyI3r%2BZ6fj9XolveifeB8jHhQN9KP3XqQchpfNMKLGykMKLjisoGOqUBzyAuKUFnmysnf8b6wc5ol%2FnvmeLxhtu0f1PbuhBA5j8Fl5ITgliNgb7r%2Bq%2BnsYiEZpJhxh2DCXtANpkBBUDyCErxYrLsz%2Bfi%2Br%2BAEqSUSPVdJUElDZgpEkwk7IWpGuaCSU1RN112OaTvgu25Li5nEVP80s95j2tQ2sdR6UhrSEu4H3yBBVcbLWWxpH7uJiAjdR3bWmm9p%2FuHxPaqwRiBEXpBHSai&X-Amz-Signature=f49e244f932edd67a4738948e3b2619846209108fac58f36403b1b104a3cbbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

