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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNLUXAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB%2BRTgcg4rQj1dNuWa2UE7SSFKe8UHCzrhZgYrN7fX%2FAiEAlVeRPRkibcTw6dvLqxuZr0UkMPBZOIq3ogbsDpdNkKAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFtUHAd3i%2FV52LiqXSrcA9htwVT33qu%2FQK5jw6kIRM9Xx12U8%2BtNTssNM5O4BvH9roC53e04tOEwjBr0BKkYPujTeZ8in3Ph0L08FelJEMKuczby58DjyNvCDrIUNuJYlDIb%2BxHEsE4WM8l%2BnawYNz4%2FjifTdjYtZT5xzBQb9sptOftqWEdTQbHBLgPRajJ6UdsogwjwB5HdvSvgPiM5nq%2FLl2PqHBKZ9lUoK0m4bKqYSlAwaBj55QQQaalkH7OfgbeqgGERAOM0t3yjsiolbrBABjiCq6y%2BI0oBN6nKfnAwHmzIkoUwhxkjtZOJQUNkr4jrWYGNVuSOctJc9tb3EWvMtCp85WV9ObTTKMaCO8qrXI9AfTshJfKjIUaJzZYyds1dQlLfaxybnp2Ud3WuOqdVpY8WU%2BhGti3hP6dKsO%2FCxYgsPyIeZzJ5KOxdjOKds6IIzzmXzKrRB0zKcdtHQfuO3FE50w0LuePFAN90SN80kqfBVSzQKMX0%2BltIX9KVQqN8F1joZsBQwMX8sNrGzfcbfuLGwCwz8nnNhW61i6p9xnQkoM0vzD7aa3q2uRNK4AjTEoUMhoNbDEkTMU4G6o6LQYUsP1Ijp3ib%2BHcBKd0frHs3oJVlO%2BYoRGwTRuqzZhs4XVAfSxPmF65mMILqiMoGOqUBeLs02pe27plVoW6TFQCz0gRQ63H%2FNxawf23sX7HzckGIPqmEraKMk%2FTLSEDoqc6ISBdkWVmZVPuTAtzSi8GwXPzEjSZXuo4Afk5D52NoLGviLWQFY%2B3xjHrBSoQgfs3Aiqjre1TU3PCju9RLvVVUG5LgkseA9xDZ1yUqF27OhrUQV4i5%2BkvFXC%2B8d9swPyYbuArbcD0a1hpzwcN2d%2FH4%2B7uyZ4Up&X-Amz-Signature=b71e2593c09a4424a41212b0e125dcf8451fb7effbe1adbac3d86de14872872c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNLUXAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB%2BRTgcg4rQj1dNuWa2UE7SSFKe8UHCzrhZgYrN7fX%2FAiEAlVeRPRkibcTw6dvLqxuZr0UkMPBZOIq3ogbsDpdNkKAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFtUHAd3i%2FV52LiqXSrcA9htwVT33qu%2FQK5jw6kIRM9Xx12U8%2BtNTssNM5O4BvH9roC53e04tOEwjBr0BKkYPujTeZ8in3Ph0L08FelJEMKuczby58DjyNvCDrIUNuJYlDIb%2BxHEsE4WM8l%2BnawYNz4%2FjifTdjYtZT5xzBQb9sptOftqWEdTQbHBLgPRajJ6UdsogwjwB5HdvSvgPiM5nq%2FLl2PqHBKZ9lUoK0m4bKqYSlAwaBj55QQQaalkH7OfgbeqgGERAOM0t3yjsiolbrBABjiCq6y%2BI0oBN6nKfnAwHmzIkoUwhxkjtZOJQUNkr4jrWYGNVuSOctJc9tb3EWvMtCp85WV9ObTTKMaCO8qrXI9AfTshJfKjIUaJzZYyds1dQlLfaxybnp2Ud3WuOqdVpY8WU%2BhGti3hP6dKsO%2FCxYgsPyIeZzJ5KOxdjOKds6IIzzmXzKrRB0zKcdtHQfuO3FE50w0LuePFAN90SN80kqfBVSzQKMX0%2BltIX9KVQqN8F1joZsBQwMX8sNrGzfcbfuLGwCwz8nnNhW61i6p9xnQkoM0vzD7aa3q2uRNK4AjTEoUMhoNbDEkTMU4G6o6LQYUsP1Ijp3ib%2BHcBKd0frHs3oJVlO%2BYoRGwTRuqzZhs4XVAfSxPmF65mMILqiMoGOqUBeLs02pe27plVoW6TFQCz0gRQ63H%2FNxawf23sX7HzckGIPqmEraKMk%2FTLSEDoqc6ISBdkWVmZVPuTAtzSi8GwXPzEjSZXuo4Afk5D52NoLGviLWQFY%2B3xjHrBSoQgfs3Aiqjre1TU3PCju9RLvVVUG5LgkseA9xDZ1yUqF27OhrUQV4i5%2BkvFXC%2B8d9swPyYbuArbcD0a1hpzwcN2d%2FH4%2B7uyZ4Up&X-Amz-Signature=55154c5493e5423b9a566173388f8e0e06c39b20149ed218747ae27979e5a277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

