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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667U4BXG4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConduOD7qyBjcmizgTQZX1AywQbYyijQ1ufkV6a6KzkgIgV1sTNCvKKJSOUoJY6NcE9H6vkvMxCjHrJHVu3Nd%2BZScqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBriYKDz%2FIKCngLsXircA1dl%2BV%2BsbDKyu2sRT3l9WuTTerwU%2BZzQJphXXS0foHMfQwgoOSXiq%2Bf7IiaDTIKkTD9pgstia2VbH5jIP8xRIkblrscVrepf1Dvbln2umW8TQcKF1ULykvZ1bKeul4me2G1u02x%2BbEJ51NyEIpGde2CaL6VsSf%2FS83mFrkWRqXRB3tPp4sGik495EIOY4ho3ckWu%2BFvlUyG2LeJXQ6jnffmUKy%2BBgqaI9Fo5lzkx5OtZzxJULNS1Ac2ZQXszEPC6SByg39FJuHetrX29gfmoWqiAmLp0%2BsKvIrivUk5Yt3JUQ0IJw9SofjxZ6cIiwJBbg9W6wq58ILoNNq3DjfxF0XShAyjzGWpMbSMNMFFYxzjvKruqTMy068Y84U8t6OiqRr8gFv7iCD%2BC4iMZU8BjDgHG%2F0SAO0L7Hem8qWXZ0xE8mNMjMawQbR3dvRGrMKPGHoXMyiyAb159JZ%2BPShqx1unFdQdcxK9dpObWe0rvMBp8Wie5XVHIVi3OLZ6TAnhSIEUg9482I67nEPsYEiRMtkBNvTsKxN6m9gZgrBj63iXroJgf7c%2B2EW6mcA%2F2aqeiCad0ba6%2B7KBhz16KeEu%2BJ7aoY8XpO5GG7AHm85JVdftcX9EON3PePUOuBO7BMMSfi8oGOqUBWaDPzbDMBUhStAAF637xzYjfxe%2BFXatD8FRAvokxTVIgMXXlz7lSzywOWv8%2Fnyo5YU44imu0abw08rEPzia6H9OL%2FD69lWcQAAhWgbODjK9WulydKPcyU4NA4nxd2f5RCs89Lj4UVP2o6Dx1UFT5xdKiPnHLsM3jeaFUPR2oH8Fbk9e9%2BipE739azQeDXkKCilRSUCoPtV%2FpKyi376wtW8oT0mS6&X-Amz-Signature=caecc654e1c329ace359df2c9ecbb2446077b82ef1a4c3caf8255ab7208ae34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667U4BXG4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQConduOD7qyBjcmizgTQZX1AywQbYyijQ1ufkV6a6KzkgIgV1sTNCvKKJSOUoJY6NcE9H6vkvMxCjHrJHVu3Nd%2BZScqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBriYKDz%2FIKCngLsXircA1dl%2BV%2BsbDKyu2sRT3l9WuTTerwU%2BZzQJphXXS0foHMfQwgoOSXiq%2Bf7IiaDTIKkTD9pgstia2VbH5jIP8xRIkblrscVrepf1Dvbln2umW8TQcKF1ULykvZ1bKeul4me2G1u02x%2BbEJ51NyEIpGde2CaL6VsSf%2FS83mFrkWRqXRB3tPp4sGik495EIOY4ho3ckWu%2BFvlUyG2LeJXQ6jnffmUKy%2BBgqaI9Fo5lzkx5OtZzxJULNS1Ac2ZQXszEPC6SByg39FJuHetrX29gfmoWqiAmLp0%2BsKvIrivUk5Yt3JUQ0IJw9SofjxZ6cIiwJBbg9W6wq58ILoNNq3DjfxF0XShAyjzGWpMbSMNMFFYxzjvKruqTMy068Y84U8t6OiqRr8gFv7iCD%2BC4iMZU8BjDgHG%2F0SAO0L7Hem8qWXZ0xE8mNMjMawQbR3dvRGrMKPGHoXMyiyAb159JZ%2BPShqx1unFdQdcxK9dpObWe0rvMBp8Wie5XVHIVi3OLZ6TAnhSIEUg9482I67nEPsYEiRMtkBNvTsKxN6m9gZgrBj63iXroJgf7c%2B2EW6mcA%2F2aqeiCad0ba6%2B7KBhz16KeEu%2BJ7aoY8XpO5GG7AHm85JVdftcX9EON3PePUOuBO7BMMSfi8oGOqUBWaDPzbDMBUhStAAF637xzYjfxe%2BFXatD8FRAvokxTVIgMXXlz7lSzywOWv8%2Fnyo5YU44imu0abw08rEPzia6H9OL%2FD69lWcQAAhWgbODjK9WulydKPcyU4NA4nxd2f5RCs89Lj4UVP2o6Dx1UFT5xdKiPnHLsM3jeaFUPR2oH8Fbk9e9%2BipE739azQeDXkKCilRSUCoPtV%2FpKyi376wtW8oT0mS6&X-Amz-Signature=96fdbc83668dc5c2706bc2e94dc9b817306436334687a869826baa135eb0ef55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

