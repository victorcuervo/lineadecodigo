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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYQPCLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa1S3m6CB7XzH1zEBlhjthE5x2IE6JpL6GZ0Glfx%2BtPgIgTuR38BHWxruJsBiOakGlchBlNWFZtjEypJA0ydb3lrIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLp4Oye8U8v0qwit1SrcA05DLmxBQJPicRZ36seDhdGiYh4asvoSmZv7B9LQ9GtjQ4g5aTYUSsQPP3Dzlw13piGRB2No%2BrC7bAz8TgbYOoGNL7dTqGMRD83hPPGYQT8XQkmPy3N9c2p3cEpraWh0b1jukAkGe8QHZPgYOGNwxZtjuiwDpn4%2F%2FLNTmQpfsYDj5AY1uztyOyvQpjFTkTDuZAzGFKo3zvxRg8fawKkyXxm3XHZv52%2FJxj0%2FzGQBU8r9EGaqlk6gwbGlt224%2BRBQn7bRdGMMWIFfize5S5tBwzaz3cpmdElAv2FDDZ9KxnT0JvTa299Q9LWvORkcFrX9MJHxuvlugiuVau%2BcCNt1nwvYfSTiJI%2Fz13Ls5E8y5968hNzoTkoZ48uhPdR1MT70lj881DP9K8%2BGCEHD0kmZ95BHRY6O%2BS4ecQO4PBIsBS3Fo03epSkDiDywTH62DN6PQV%2B5BjEJofLbPNUQR5A6KuoeP8Utf6QrleRvPc8%2B5MxYnkN2JhGYREo5z0ZprB2eOBN%2B641K97q0xDMrFOZsglm8FK7BgdIAv%2FeoL6TF8RaMlEUx2tuYbRvZXHnnSQ%2BJFjQSnuG%2FXaNF9RmO6kF1Wih6Id3jyIl1KPMY0qNDhxZwBOxhVdt1chfYZ%2BLGMJCrisoGOqUBzu8njWXxiOkDHm4af6OwFzpa68ec%2FzGElBed%2Bi0HnLPLJq%2BD4xMxd1Xd2zJa2%2FAzxcwliCtsq1rjGjGKklW609ZcWFZcqBqNNCKTL2D752AkAl5%2Bo%2BQhkkA1MZbPuYcn0dic%2FhVrmbXa9rrqxgFN%2BqurROkHq9IHlHqfycI6jv2zpe3KM2Eh3KaJG3crJRjwNkXvFSQbvjaL6Qb0vPbQF91Brlpw&X-Amz-Signature=113f41c402ba8285c1c6a00b5b8293b91732618ca6e322b412dc5d632a7bc52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYQPCLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa1S3m6CB7XzH1zEBlhjthE5x2IE6JpL6GZ0Glfx%2BtPgIgTuR38BHWxruJsBiOakGlchBlNWFZtjEypJA0ydb3lrIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLp4Oye8U8v0qwit1SrcA05DLmxBQJPicRZ36seDhdGiYh4asvoSmZv7B9LQ9GtjQ4g5aTYUSsQPP3Dzlw13piGRB2No%2BrC7bAz8TgbYOoGNL7dTqGMRD83hPPGYQT8XQkmPy3N9c2p3cEpraWh0b1jukAkGe8QHZPgYOGNwxZtjuiwDpn4%2F%2FLNTmQpfsYDj5AY1uztyOyvQpjFTkTDuZAzGFKo3zvxRg8fawKkyXxm3XHZv52%2FJxj0%2FzGQBU8r9EGaqlk6gwbGlt224%2BRBQn7bRdGMMWIFfize5S5tBwzaz3cpmdElAv2FDDZ9KxnT0JvTa299Q9LWvORkcFrX9MJHxuvlugiuVau%2BcCNt1nwvYfSTiJI%2Fz13Ls5E8y5968hNzoTkoZ48uhPdR1MT70lj881DP9K8%2BGCEHD0kmZ95BHRY6O%2BS4ecQO4PBIsBS3Fo03epSkDiDywTH62DN6PQV%2B5BjEJofLbPNUQR5A6KuoeP8Utf6QrleRvPc8%2B5MxYnkN2JhGYREo5z0ZprB2eOBN%2B641K97q0xDMrFOZsglm8FK7BgdIAv%2FeoL6TF8RaMlEUx2tuYbRvZXHnnSQ%2BJFjQSnuG%2FXaNF9RmO6kF1Wih6Id3jyIl1KPMY0qNDhxZwBOxhVdt1chfYZ%2BLGMJCrisoGOqUBzu8njWXxiOkDHm4af6OwFzpa68ec%2FzGElBed%2Bi0HnLPLJq%2BD4xMxd1Xd2zJa2%2FAzxcwliCtsq1rjGjGKklW609ZcWFZcqBqNNCKTL2D752AkAl5%2Bo%2BQhkkA1MZbPuYcn0dic%2FhVrmbXa9rrqxgFN%2BqurROkHq9IHlHqfycI6jv2zpe3KM2Eh3KaJG3crJRjwNkXvFSQbvjaL6Qb0vPbQF91Brlpw&X-Amz-Signature=d1468cd612f5d3e58ce187a8c4bbc0be22f8c00577fa2f87e2033712e94912dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

