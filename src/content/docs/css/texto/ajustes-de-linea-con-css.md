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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626NHHF3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhMDcozsFqgUuw7A5MxjLB55AfAB3wVaxVW9fzuYPCUAiAQ5FexZ1Yp%2FSMxlc6cwrs4%2FIwNcg%2ByUVq4XVE3XCzgzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmz9KUeASLQlJ%2BBVPKtwDDY0%2BbI%2F44tMAL0WfoFikCfDDniVRn2i3v7vHmI%2FX8o4q8JyUztPAWgWgXuTWpK9CoMCMX5sPNRuSAXWy5XwT848bqLlycHGSBAu7a1Tz65VS6aNmK4hEMvH0AoGUV9hFuYM%2Br8wJfRRmLU3FdtAlzurSMwBgv6wRoqNMexAjDw51gt4sHymwsOF6sW7%2BHJIWHTer0KaUIlerYpId4tujEFLz5tM6AP%2FwKgTW4KzjqfHp3FqVIdUYkUErmKTp3iH4VOhjmIjWlEo3dR959kJFHqIrKk5kqXITIX6pEx%2Bl5JKqmc5ZvNvJKagxZ2xSCzvqGmkJH%2BdsUyfOi1FoFGN4X8BGFrWIRJAMigyuCS%2BNyWiI6cyQBRKbv7%2BHMKiCUXDTOdkYB9GcgX3Fgbv1NRs6U6MgifzBjbVvlCQYvmBrgN9tmZXRHqVaG%2FwLo1Ho4ipLJQ%2F1mCUd2kk9umhv8GvIhH284BMP6gwFCXbC0v993zrSgXPgyuhmyHpV7BNE3HDDlMqV3eexrXm6EA0i6mgOO%2BsX6D80Rw2N58qvITbHP%2BdbM7SRZgatxyIT60llo3kVKkYdKbyN4ndPSbqjjGH2YrgEUf0N3J2MA%2FgVsKbK5wVXZwrRtQyJBFmVhO4wyqCLygY6pgEiccPJJVyyOAd5AGphDycP0t%2BMJpilByNpq9I2jIFxfCuiACWMbtYdj7l98Anhl2lywqBQIThR64f92BKkfBN4Z4fPnFKgVVihGXVXPMWTvxAauESaJlCrdRVUhrVOOoOJYI1Jvct03IBfyJoJVNo%2BEw0vmqq2kug8ejSLzWLX73jNhL3qfnJc9bJKIdgakFyfC6wet3QTqpLa4LUqi%2F9vdcOTaWDK&X-Amz-Signature=86512107b9501097868e57b58e33fdd1fd944e0eed90786e1468da67df96ffc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626NHHF3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhMDcozsFqgUuw7A5MxjLB55AfAB3wVaxVW9fzuYPCUAiAQ5FexZ1Yp%2FSMxlc6cwrs4%2FIwNcg%2ByUVq4XVE3XCzgzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmz9KUeASLQlJ%2BBVPKtwDDY0%2BbI%2F44tMAL0WfoFikCfDDniVRn2i3v7vHmI%2FX8o4q8JyUztPAWgWgXuTWpK9CoMCMX5sPNRuSAXWy5XwT848bqLlycHGSBAu7a1Tz65VS6aNmK4hEMvH0AoGUV9hFuYM%2Br8wJfRRmLU3FdtAlzurSMwBgv6wRoqNMexAjDw51gt4sHymwsOF6sW7%2BHJIWHTer0KaUIlerYpId4tujEFLz5tM6AP%2FwKgTW4KzjqfHp3FqVIdUYkUErmKTp3iH4VOhjmIjWlEo3dR959kJFHqIrKk5kqXITIX6pEx%2Bl5JKqmc5ZvNvJKagxZ2xSCzvqGmkJH%2BdsUyfOi1FoFGN4X8BGFrWIRJAMigyuCS%2BNyWiI6cyQBRKbv7%2BHMKiCUXDTOdkYB9GcgX3Fgbv1NRs6U6MgifzBjbVvlCQYvmBrgN9tmZXRHqVaG%2FwLo1Ho4ipLJQ%2F1mCUd2kk9umhv8GvIhH284BMP6gwFCXbC0v993zrSgXPgyuhmyHpV7BNE3HDDlMqV3eexrXm6EA0i6mgOO%2BsX6D80Rw2N58qvITbHP%2BdbM7SRZgatxyIT60llo3kVKkYdKbyN4ndPSbqjjGH2YrgEUf0N3J2MA%2FgVsKbK5wVXZwrRtQyJBFmVhO4wyqCLygY6pgEiccPJJVyyOAd5AGphDycP0t%2BMJpilByNpq9I2jIFxfCuiACWMbtYdj7l98Anhl2lywqBQIThR64f92BKkfBN4Z4fPnFKgVVihGXVXPMWTvxAauESaJlCrdRVUhrVOOoOJYI1Jvct03IBfyJoJVNo%2BEw0vmqq2kug8ejSLzWLX73jNhL3qfnJc9bJKIdgakFyfC6wet3QTqpLa4LUqi%2F9vdcOTaWDK&X-Amz-Signature=d416e89140aafb4c46dd256c947f5a3d8d1df186e0199a24b72dbdac801d1e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

