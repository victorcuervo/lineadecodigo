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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OREAYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20xQ%2F7mKTy5mkHxbtd%2FW0j2QUjtcYgyhpG5MrJ8E%2F6AIhALXoeJWV4xu7Al8GmiQIm56LQH9Ex4xI8EPNJIEdEY5VKv8DCHoQABoMNjM3NDIzMTgzODA1IgzKVJ0KpKNcb2ZPWAAq3AOCxtB3uEDwdpgR05DT888Iz9YdG%2FZJ0YubVadUgio2g%2B3t2HQ9%2F45t297akT7XZZ32ABl1EAcNu8a0NCVe7mdjxuIxi6eDh3UmVeKZMnIHgF9UP4Xha2anSk%2BFFrRgxo6QMpmDqtdfEMuEHh6kmuYcKKsLUGGmHIzVhzvpWvWpFFHFhUJ5LHiGrC8R8vBtACG%2FHIbznsq8yAfl8lqBHleq%2FreWHbHGzb5apMj11ue24Qx9oOYOLkcQng9x4neFpmnDW87KyND9yQNj3hgYghExUizZH3vML2H9F3yAT%2BblY70l7CvzlQYj7cmvhQpWV5%2Bd4GM9XYMDw%2FVQz5WrTvsZNr3b3wdBzo8%2FyiSjrUKkReU4bBlCwaVOHY%2FCfZ3aqTBTL97jvdyLq5fqw2wDnK5vjvHYdfMM3Pp9FSF80b9DPNuS%2F%2FpkbYRB%2FPJf1gtvhFg4ptNkISLJLPBOIB4Uq%2BtGVa%2BExyjxv9DKsVA7spi1ZtwcaZATb9n2XvyEuGh4DdFDtV%2FnSRHRCiJwNS1wxUVYX0kzZCcFFU3zuFn3h568cmqoyvIBuMhXy2Y%2BPefH1k5VLsOAhOFe0icmMoND6R51efaoDbQHwWhw8RLTLW2yFCRxkn4HZ0p%2Bcq9MFjCJ0onKBjqkAZ%2BOn3jxlMXZkxPOeRoOTw%2FVtk0ve7OWi6DUlo4USu4uMn4Evs1z4Ja0%2F6eHQZvutbi6jRCf1ENjIvFVPbp5kdNg2inoQe9N0Y%2FDk9EnfBke11DJ0Xf%2BBeXLiIulCoJK4XEwI%2BiNIumTLZX1SL33otbV7apWkPaJOs4QCCUyovw0GtNY%2Fz4pwW2aCUOnrhXB%2Bc00TsTXOfAn1fmC6kXc9C1di%2Bn8&X-Amz-Signature=a6c9a1b8228f66a460d8061350e177b57f6f6cd52b6f2c11f48064161e0d75ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OREAYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20xQ%2F7mKTy5mkHxbtd%2FW0j2QUjtcYgyhpG5MrJ8E%2F6AIhALXoeJWV4xu7Al8GmiQIm56LQH9Ex4xI8EPNJIEdEY5VKv8DCHoQABoMNjM3NDIzMTgzODA1IgzKVJ0KpKNcb2ZPWAAq3AOCxtB3uEDwdpgR05DT888Iz9YdG%2FZJ0YubVadUgio2g%2B3t2HQ9%2F45t297akT7XZZ32ABl1EAcNu8a0NCVe7mdjxuIxi6eDh3UmVeKZMnIHgF9UP4Xha2anSk%2BFFrRgxo6QMpmDqtdfEMuEHh6kmuYcKKsLUGGmHIzVhzvpWvWpFFHFhUJ5LHiGrC8R8vBtACG%2FHIbznsq8yAfl8lqBHleq%2FreWHbHGzb5apMj11ue24Qx9oOYOLkcQng9x4neFpmnDW87KyND9yQNj3hgYghExUizZH3vML2H9F3yAT%2BblY70l7CvzlQYj7cmvhQpWV5%2Bd4GM9XYMDw%2FVQz5WrTvsZNr3b3wdBzo8%2FyiSjrUKkReU4bBlCwaVOHY%2FCfZ3aqTBTL97jvdyLq5fqw2wDnK5vjvHYdfMM3Pp9FSF80b9DPNuS%2F%2FpkbYRB%2FPJf1gtvhFg4ptNkISLJLPBOIB4Uq%2BtGVa%2BExyjxv9DKsVA7spi1ZtwcaZATb9n2XvyEuGh4DdFDtV%2FnSRHRCiJwNS1wxUVYX0kzZCcFFU3zuFn3h568cmqoyvIBuMhXy2Y%2BPefH1k5VLsOAhOFe0icmMoND6R51efaoDbQHwWhw8RLTLW2yFCRxkn4HZ0p%2Bcq9MFjCJ0onKBjqkAZ%2BOn3jxlMXZkxPOeRoOTw%2FVtk0ve7OWi6DUlo4USu4uMn4Evs1z4Ja0%2F6eHQZvutbi6jRCf1ENjIvFVPbp5kdNg2inoQe9N0Y%2FDk9EnfBke11DJ0Xf%2BBeXLiIulCoJK4XEwI%2BiNIumTLZX1SL33otbV7apWkPaJOs4QCCUyovw0GtNY%2Fz4pwW2aCUOnrhXB%2Bc00TsTXOfAn1fmC6kXc9C1di%2Bn8&X-Amz-Signature=4ed444541236526119178c333e430cfc3e0ffe3ba231bfadd0edaf2908998391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

