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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK7OMWXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnq%2BI0dc5vX7WEa35g%2FEXeokU%2BZwgkEKMH3lUPEWsM9gIhAO2HpjMpxY%2BNnZhmK6JdktI1qhmPVQ2mPDw6w9XaSop8KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQKVjbgpEFe7I1LR0q3ANcG3rRN9tUfCXp7sNVfCKiTgMDWdK6t54azDJ2vOpViDi0nsXx9Jy7KT9MRO60wEglVNDuRZA2SfL7UOPoN3S2JCE0ihH%2F1sWXK6kATfGSmzAt8VG%2Bc8BDoB%2Fo206QwIrlZrH0Y9YevW1vBpNz2HcXnDUnUgr5t3BHt3QfFhVWTwddl6KLj6RUt9rtWoWENhjV4WCKQDBTuaMw2S1Yfwt6yV9UL4SHSLY5GU3AsI6YZ7JtPBYJR1gQ7YYDP1oTSUnpGyXMxFQQ%2FKkk44US9w2kWUHF6J%2FMlKdzzhvelgQsR1JaKnP006KFqYFvgqQnDNwKD4A7JEUAQKeaVSX8612zOLQ3%2BL%2BwTlHuT1zf1oNzYEQwBHdloKlX5RbVE%2BgYT9iKucdEZue6lVn1om2wcLjozhhEInS0coTGDTueZGFTZ0et66QqpAjopQflJ0%2BDs0VGRnYTNM7q47nQQIGAmiPG6eePLFNoTh90PzLyXmekqWM9pPDIXjOenSoSbur8VfJas2uhUsWGG6ht24xA%2B7Rl9Hb0HMFcFrTubrx4wPE%2B%2BFS5JafH4o8wWQZQNHeaVjFZjKXyanpR1t1QP6Rl4f9TzaCw7YrXMRILbo7Lh%2FhNENgm3Ys2Z%2Bc3LEZPNTDx%2F4rKBjqkARSPOC%2BbWEjnZSUyJ5yJbfZgt3kWTwKL7IOXEOAYhka8VcoNbtUt9jWBr%2Fb852vFeAwEhwAMOC5FlhwuMWSmMj7zDY0kGepTvrqP27L8eK6Euajif2%2FduU5VEUr8LiSZaY4BhtAdCtIOqLvLQnVBCbtn3zWt9dlQcJ%2BRk7NeG1Fj9o2HjjmHgorXCGRo84gwmv9QbN1%2FgpJVvgsxvYw3FZWIFpTg&X-Amz-Signature=e9186b6ba3553005029527cfa269c7c3a065dff52cdeeb01027e80ca0f97931d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK7OMWXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnq%2BI0dc5vX7WEa35g%2FEXeokU%2BZwgkEKMH3lUPEWsM9gIhAO2HpjMpxY%2BNnZhmK6JdktI1qhmPVQ2mPDw6w9XaSop8KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQKVjbgpEFe7I1LR0q3ANcG3rRN9tUfCXp7sNVfCKiTgMDWdK6t54azDJ2vOpViDi0nsXx9Jy7KT9MRO60wEglVNDuRZA2SfL7UOPoN3S2JCE0ihH%2F1sWXK6kATfGSmzAt8VG%2Bc8BDoB%2Fo206QwIrlZrH0Y9YevW1vBpNz2HcXnDUnUgr5t3BHt3QfFhVWTwddl6KLj6RUt9rtWoWENhjV4WCKQDBTuaMw2S1Yfwt6yV9UL4SHSLY5GU3AsI6YZ7JtPBYJR1gQ7YYDP1oTSUnpGyXMxFQQ%2FKkk44US9w2kWUHF6J%2FMlKdzzhvelgQsR1JaKnP006KFqYFvgqQnDNwKD4A7JEUAQKeaVSX8612zOLQ3%2BL%2BwTlHuT1zf1oNzYEQwBHdloKlX5RbVE%2BgYT9iKucdEZue6lVn1om2wcLjozhhEInS0coTGDTueZGFTZ0et66QqpAjopQflJ0%2BDs0VGRnYTNM7q47nQQIGAmiPG6eePLFNoTh90PzLyXmekqWM9pPDIXjOenSoSbur8VfJas2uhUsWGG6ht24xA%2B7Rl9Hb0HMFcFrTubrx4wPE%2B%2BFS5JafH4o8wWQZQNHeaVjFZjKXyanpR1t1QP6Rl4f9TzaCw7YrXMRILbo7Lh%2FhNENgm3Ys2Z%2Bc3LEZPNTDx%2F4rKBjqkARSPOC%2BbWEjnZSUyJ5yJbfZgt3kWTwKL7IOXEOAYhka8VcoNbtUt9jWBr%2Fb852vFeAwEhwAMOC5FlhwuMWSmMj7zDY0kGepTvrqP27L8eK6Euajif2%2FduU5VEUr8LiSZaY4BhtAdCtIOqLvLQnVBCbtn3zWt9dlQcJ%2BRk7NeG1Fj9o2HjjmHgorXCGRo84gwmv9QbN1%2FgpJVvgsxvYw3FZWIFpTg&X-Amz-Signature=0c33d8a4c0aed0cfd9bd256a197ae3f76e65e0dfd7a90166e4ff2688af4b8f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

