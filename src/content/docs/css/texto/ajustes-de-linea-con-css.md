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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVD4OYLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRmGAPbks5lxiiT075xbwnam5vHIWBv1jJO4kC1GAhTAiBIWyVKeaCqwKv%2FhfpzbXh7PVoNS2bD5ACq3lIVlNJYlSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMGSuB1UmehHEghUb2KtwDieuc7RwvtZTjtSCXvpT9fAhqBED4vaaNoEb47WCVZpnmNDERT0bbFyAZRNtmEandLNZCxsifB4o0htzFPoBAR%2BGKAnRz2O6qOEcxQky2VGdhnhZFexmzVaJaS5Ew828mCYd1BCI0W70%2FnWyN2RI6ztK6uSkV9lDBXWHwWuHD4tfVYddc2eBXgDHGDfbFnSz48%2BRj3JKDsyP1VPO9to1z63R8C1CyDM4nsjbwQoqAoIHClIzHJeCD%2BVBxJdvjUMm1Gs1vnywsWeRx1LIodKUBWgvNcbJD%2Bu7EzenB9S1bQI6BdEPqG16uKx0wdWfCPrkrOVJRhAqGznskQsJP3O%2FlPD%2BnkiO97tPnpnrItDnK8mkdlCpPyB%2FTF%2FVwEcQlCzojC7D6CH4HIX4oDqhDgQx%2FuzK6cJ4TgtnYjsI1uyPHDV2CqUqyLkoWq8vLJmO31nda0zFEysTF4c0ZUGvQDdI1HtNwRCcKtDNHt3mzgKBu%2F1WI9dEKpYbSOe3S12NqtG56a4cfdmuFafhZ8OVSe3UvCgVF4l724cJGmijEj0Tb2rkTlU8TnluyOTmz%2FEp5ggGZxPVlxZDGC5AG7d2meX0CsXKcN2fWc8Y3WBlSZ3VMNnkCwY22bh5BMOhmed8wqdKJygY6pgEvVCNt8fTKlgX2CXP5CdFyLWi4oY9kYzoSN6qXEX7eWLVGlwS5owo5dfDMTL91RV37%2BnDEHhFXc35GMzmAJLI%2FshXgbYdO6UQuQwVDHImMlYQ0%2FRuWqOKZ56uWLNOGspLP33jHU6LPJNzjQ2UXfeeYLdecmWrJoQputDMIbUTIVh3hEUJzOOgVWWF5LT9VmwYMSdgWfL31oqYsohnD6mW1BSa46PG6&X-Amz-Signature=4a78d142351df7dd6c610bc70225537ebb83ac37db90fbcf66477b1dce95e85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVD4OYLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRmGAPbks5lxiiT075xbwnam5vHIWBv1jJO4kC1GAhTAiBIWyVKeaCqwKv%2FhfpzbXh7PVoNS2bD5ACq3lIVlNJYlSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMGSuB1UmehHEghUb2KtwDieuc7RwvtZTjtSCXvpT9fAhqBED4vaaNoEb47WCVZpnmNDERT0bbFyAZRNtmEandLNZCxsifB4o0htzFPoBAR%2BGKAnRz2O6qOEcxQky2VGdhnhZFexmzVaJaS5Ew828mCYd1BCI0W70%2FnWyN2RI6ztK6uSkV9lDBXWHwWuHD4tfVYddc2eBXgDHGDfbFnSz48%2BRj3JKDsyP1VPO9to1z63R8C1CyDM4nsjbwQoqAoIHClIzHJeCD%2BVBxJdvjUMm1Gs1vnywsWeRx1LIodKUBWgvNcbJD%2Bu7EzenB9S1bQI6BdEPqG16uKx0wdWfCPrkrOVJRhAqGznskQsJP3O%2FlPD%2BnkiO97tPnpnrItDnK8mkdlCpPyB%2FTF%2FVwEcQlCzojC7D6CH4HIX4oDqhDgQx%2FuzK6cJ4TgtnYjsI1uyPHDV2CqUqyLkoWq8vLJmO31nda0zFEysTF4c0ZUGvQDdI1HtNwRCcKtDNHt3mzgKBu%2F1WI9dEKpYbSOe3S12NqtG56a4cfdmuFafhZ8OVSe3UvCgVF4l724cJGmijEj0Tb2rkTlU8TnluyOTmz%2FEp5ggGZxPVlxZDGC5AG7d2meX0CsXKcN2fWc8Y3WBlSZ3VMNnkCwY22bh5BMOhmed8wqdKJygY6pgEvVCNt8fTKlgX2CXP5CdFyLWi4oY9kYzoSN6qXEX7eWLVGlwS5owo5dfDMTL91RV37%2BnDEHhFXc35GMzmAJLI%2FshXgbYdO6UQuQwVDHImMlYQ0%2FRuWqOKZ56uWLNOGspLP33jHU6LPJNzjQ2UXfeeYLdecmWrJoQputDMIbUTIVh3hEUJzOOgVWWF5LT9VmwYMSdgWfL31oqYsohnD6mW1BSa46PG6&X-Amz-Signature=03b046504d1135f7909f698063404dc9c9b4932273bd77ebf9abc8ed949f2198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

