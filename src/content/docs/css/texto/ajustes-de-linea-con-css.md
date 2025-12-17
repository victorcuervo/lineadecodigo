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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMI2EC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb2oWXPLDDu6nclvHfveB8cetHWAJRcWT2ODyH28%2FIRAiBNfRQigi4juWhvDkel2LuBegVKNXingz1FSN6oXc3G6CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXS3K0T8hwIgI6gErKtwDg995qVwCj4Dmqhxsu3euti68poNllZeXRcpjnDubtkufF%2FIhDaePm3YnuwsNczykVbN6AONtd0KqV7uA0sY1D5yxUw%2F%2FkUrh40KFNxMazMAEMh4BNt4oUmIc%2FOREoizEuu6D5VnMSkfRDJnggX0mY%2B%2BDQGbAJS%2FLl%2B0t0i4EgRNFbL4AWmgxw6KzwLJAGv7j0wpYYKnto7xuQMxb7nJEREqigDhHkfFkywVFrncYKT0i05omhqv%2B7fUsXHwMKFImTuB80KdAmrekFP4mnDCuWNRPucb443ZqP6uKTaTsAZw6WEVV1kpp2eYp0OD0x6vek0UybrnnEpsmiwZD7nde7WGCCUydYHC3TpQcfZPjM5ee2qsrJ%2F8FkOtCST0lrVsEcfuYNdIbx1pXm41r4OuXfANtcv8PAEEHkox9zOOuOBWiAZwJk8J0kx9mnGQsXZbJSnIMhlnChfLZnDfe5YpdIgmqyYzNxfNHQdvNiQA51hELqJvhU%2Fi6LQmIj7phg7Tvmz64b0Qu9uyLPOkvQhCGT74%2B%2FWNAQa67Wl%2B7U%2FfE%2Ffq2IJpdz29Xdbzs2B%2B6FaRNE%2BJUXwh%2B8EDsdLUix8397Td1dvGznC1kXb6kYk7Rx7uXr2AhlKQvgqHVzBsw9Z6LygY6pgHmkuHmKVOZqVjXH2TJfG3EXW0xB8fOSgpXj%2B4TnxDE0bHjkx0cI82nUhHlGUT0T%2BVJ64kY0cAa7sRtWMh9SvzPQmhP2ytdLd99tWf9DjRLue0U4RtHr8I8G2Eh%2Fh556A1MuesGgqM29xP5RddYePfDSAa8sCDMipd9E2qpHw1jxfF%2BRVOOwhiKkapxYj5QmziAJ%2FTUowoigJ%2FoDJJ2nyElIqfiSk5J&X-Amz-Signature=9f69d4b9c811b45271998b3918d76a7b014cf0eca61abb7bbb8236ff2130c6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFMI2EC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb2oWXPLDDu6nclvHfveB8cetHWAJRcWT2ODyH28%2FIRAiBNfRQigi4juWhvDkel2LuBegVKNXingz1FSN6oXc3G6CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXS3K0T8hwIgI6gErKtwDg995qVwCj4Dmqhxsu3euti68poNllZeXRcpjnDubtkufF%2FIhDaePm3YnuwsNczykVbN6AONtd0KqV7uA0sY1D5yxUw%2F%2FkUrh40KFNxMazMAEMh4BNt4oUmIc%2FOREoizEuu6D5VnMSkfRDJnggX0mY%2B%2BDQGbAJS%2FLl%2B0t0i4EgRNFbL4AWmgxw6KzwLJAGv7j0wpYYKnto7xuQMxb7nJEREqigDhHkfFkywVFrncYKT0i05omhqv%2B7fUsXHwMKFImTuB80KdAmrekFP4mnDCuWNRPucb443ZqP6uKTaTsAZw6WEVV1kpp2eYp0OD0x6vek0UybrnnEpsmiwZD7nde7WGCCUydYHC3TpQcfZPjM5ee2qsrJ%2F8FkOtCST0lrVsEcfuYNdIbx1pXm41r4OuXfANtcv8PAEEHkox9zOOuOBWiAZwJk8J0kx9mnGQsXZbJSnIMhlnChfLZnDfe5YpdIgmqyYzNxfNHQdvNiQA51hELqJvhU%2Fi6LQmIj7phg7Tvmz64b0Qu9uyLPOkvQhCGT74%2B%2FWNAQa67Wl%2B7U%2FfE%2Ffq2IJpdz29Xdbzs2B%2B6FaRNE%2BJUXwh%2B8EDsdLUix8397Td1dvGznC1kXb6kYk7Rx7uXr2AhlKQvgqHVzBsw9Z6LygY6pgHmkuHmKVOZqVjXH2TJfG3EXW0xB8fOSgpXj%2B4TnxDE0bHjkx0cI82nUhHlGUT0T%2BVJ64kY0cAa7sRtWMh9SvzPQmhP2ytdLd99tWf9DjRLue0U4RtHr8I8G2Eh%2Fh556A1MuesGgqM29xP5RddYePfDSAa8sCDMipd9E2qpHw1jxfF%2BRVOOwhiKkapxYj5QmziAJ%2FTUowoigJ%2FoDJJ2nyElIqfiSk5J&X-Amz-Signature=4a2cef6634db2a7ac66efe1ca80c2081b07845aa51c7476d49a38db28cc9a73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

