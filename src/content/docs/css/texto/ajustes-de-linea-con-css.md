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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726LRO42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEOSFqzGcDmjxdsgn9oFYPMd6lZhzOAj7SllO%2BQL5H4AIhAIqhXNYsFUltZ60GOxb9zeMKgE4u45F6Gf5MnGlC%2BK1GKv8DCH8QABoMNjM3NDIzMTgzODA1IgzeAZ2G1uMU%2Bp4r29Aq3AP5yrsYSBYrvK2QBBLPljqxsVSTlEWrW%2BIyvpukhpleVRR6yCSzyMJ%2BNmlEqhkvolRMFdIACmqRx7cuvVyGSXQQnTteTpkrfvx2FtJY%2F1PFDrcvnt8jZmAz%2Fg64dTdfuQBmJ3GnK6ouRdufW1hiQcBITeb4jL2VoAZq4Nxt1oenYB1kMBIvxhLqRYpUhIBCuKLshGG1IrIwoxLkF9OhP3SQGRuM2flXTQWXvF3KMtGFUBsCTp8n3tbYkIUWYyl%2BsTqD7NEScMbUTvweRUAiLVtioKe8cYA%2BpPiPN%2F1ClkO9ax4r6XyIB6vUBOmCxm%2Fhm1OY6zTN1MYSbd5vjByhvVGrLDT14m6%2FMsUSTtNuWZpmsC5aBTDYZPPryFRi4gYxO0Kqx6DfX5yCohmLiUxBKk%2BAmt4LOcfYOJISl6skYRPjrGBqJybctg9kD8x8XFPqN0uACZNwHiczAdQ6CS2%2FhpLJ0NKd%2F3PCv99VyG%2FwQE0aNdM%2FRmFYFLWIz%2BQH6g2BvDDgzpc1y%2BwtvjS1QFzWZCQVT8Xs6LVcNiwWsA2sYDOEbnGG11uHyGqP6odjWIXpE36RscFJJOT1CNrH4ITOw%2FHK%2FXJr%2By8dUguUfJyURrD4Glr14s4rcAAFyRFq9TDV4YrKBjqkARj5t8m7XgIh1OXtyZmMbs7Fx%2FNwyFHqGGWy04Bup%2FQys7Qlgs%2FkT5DQBtyjhP4t7CYcjOkDVcsyYYAjFWX6LwR%2Fe%2FQmHuT6LQbJ%2FckTXJmjHhUyEobazoEKANnE5nLumzbHZsk0k2t7BSzI%2Futl76OjRQPwICdNhIEMhFtmtJ9wgzJJeSdwQqX1GJUb4%2FmEdYKtSKniOzxPyS9o0waQfjSPyyeN&X-Amz-Signature=ce53170809ba73a5cbde5a0443fef1bcee9d064b5669a44005c50485a77e28ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726LRO42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEOSFqzGcDmjxdsgn9oFYPMd6lZhzOAj7SllO%2BQL5H4AIhAIqhXNYsFUltZ60GOxb9zeMKgE4u45F6Gf5MnGlC%2BK1GKv8DCH8QABoMNjM3NDIzMTgzODA1IgzeAZ2G1uMU%2Bp4r29Aq3AP5yrsYSBYrvK2QBBLPljqxsVSTlEWrW%2BIyvpukhpleVRR6yCSzyMJ%2BNmlEqhkvolRMFdIACmqRx7cuvVyGSXQQnTteTpkrfvx2FtJY%2F1PFDrcvnt8jZmAz%2Fg64dTdfuQBmJ3GnK6ouRdufW1hiQcBITeb4jL2VoAZq4Nxt1oenYB1kMBIvxhLqRYpUhIBCuKLshGG1IrIwoxLkF9OhP3SQGRuM2flXTQWXvF3KMtGFUBsCTp8n3tbYkIUWYyl%2BsTqD7NEScMbUTvweRUAiLVtioKe8cYA%2BpPiPN%2F1ClkO9ax4r6XyIB6vUBOmCxm%2Fhm1OY6zTN1MYSbd5vjByhvVGrLDT14m6%2FMsUSTtNuWZpmsC5aBTDYZPPryFRi4gYxO0Kqx6DfX5yCohmLiUxBKk%2BAmt4LOcfYOJISl6skYRPjrGBqJybctg9kD8x8XFPqN0uACZNwHiczAdQ6CS2%2FhpLJ0NKd%2F3PCv99VyG%2FwQE0aNdM%2FRmFYFLWIz%2BQH6g2BvDDgzpc1y%2BwtvjS1QFzWZCQVT8Xs6LVcNiwWsA2sYDOEbnGG11uHyGqP6odjWIXpE36RscFJJOT1CNrH4ITOw%2FHK%2FXJr%2By8dUguUfJyURrD4Glr14s4rcAAFyRFq9TDV4YrKBjqkARj5t8m7XgIh1OXtyZmMbs7Fx%2FNwyFHqGGWy04Bup%2FQys7Qlgs%2FkT5DQBtyjhP4t7CYcjOkDVcsyYYAjFWX6LwR%2Fe%2FQmHuT6LQbJ%2FckTXJmjHhUyEobazoEKANnE5nLumzbHZsk0k2t7BSzI%2Futl76OjRQPwICdNhIEMhFtmtJ9wgzJJeSdwQqX1GJUb4%2FmEdYKtSKniOzxPyS9o0waQfjSPyyeN&X-Amz-Signature=dae2bf2bf7204a0f0949d0700a68cf7462d1146d067dd14d32c45eccf4f50346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

