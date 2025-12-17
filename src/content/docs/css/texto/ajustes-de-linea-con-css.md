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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZUMHUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0KAAtt5Qqj1CA6bmu%2FA0VuQqtcySQkyfo92LjkQgF4AIgcMIvtabkpM96I3jA6HgCMSIiKuRnsR9JxYfiTVbjGl8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOKkvs204p7a79iThircA%2B3EBDPACYc%2F%2FX%2BzTNd91F4vl%2BNRMGxBqKk7v0bXjmQLK8286zcvRCpIlspaG58YVt3IQHI%2BxyyX%2B0wEgQVkivhUX9uVZ77erZuH%2BCXH32ctIkCDNCvCApQz2LOwlAMoeWVUeLlvxocAPelnw6FDF4DKpney2llX4vgkF%2Fjl5SpsdfvuFn1TW8er20hU8N9HE70CgshGzEaFCyCOHsfLhpFwlsRXcKPWB8k%2F8Qb2ROHqfmCMUBfzpXV%2B%2BFtMNzI3w%2FgNazCrIxOkbak%2FXnNcJFUq817kd0AFzvhqF50s2V2Tn3ma3qL9BUFgpK6WyYA298%2B1V0gABOOyAal%2FegLZCxKcMX8EJlhsvXdf9xDVrsEQkIFMD%2Fh0q4s7fh%2B%2FmAIUUxSJ8J9OE7v6gSpK1LDyE7hvvjBlF%2BQ%2Bi0RBnJyo9hAg8660ca0N62grkb3fjwfq7D5LnaT9GL3UN9TeRlG0gF3TNsV38qWegj3C5vYdbB3m%2BQ%2B2%2FnjV35BZ%2FYukUphvZTZcfgM%2BipFJfDw%2FUpASlLIQJzH%2FpMlr5kdtGA0BynVqphBkSPNjjuObpolAVXZt%2BtrFVpA3DqBNsA6Uz3Q3xuMvCrjrXZQ7yfgCl%2Fn5KFNKqBEfx4wiRCzR1%2BUpMK%2BPisoGOqUBpNXJvzdorDWRQ%2BfhRJMjUPGdhqglkD0Enb2ok5J0Dr%2FgszxU5nYHJhwRvhASiHvJfCD6F08oI4H4ZuOWZ7C5vnTJooQpT9L3Kui0H4PpahFa2lOwenPAQqBzITjqlndrkhRUMR02jTIJYU8u5UNae0mlJpEafUt6XK%2FbkaLI7X4EKfqYtIsWWu1%2FQtwubYu2bl8LgbYcW4%2FeIEuc%2FMmSdp9r%2FyFd&X-Amz-Signature=daa90c887f90295e210d9011e7b5db1d50b0c337e298b937c0eca54f1d4ccdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZUMHUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0KAAtt5Qqj1CA6bmu%2FA0VuQqtcySQkyfo92LjkQgF4AIgcMIvtabkpM96I3jA6HgCMSIiKuRnsR9JxYfiTVbjGl8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOKkvs204p7a79iThircA%2B3EBDPACYc%2F%2FX%2BzTNd91F4vl%2BNRMGxBqKk7v0bXjmQLK8286zcvRCpIlspaG58YVt3IQHI%2BxyyX%2B0wEgQVkivhUX9uVZ77erZuH%2BCXH32ctIkCDNCvCApQz2LOwlAMoeWVUeLlvxocAPelnw6FDF4DKpney2llX4vgkF%2Fjl5SpsdfvuFn1TW8er20hU8N9HE70CgshGzEaFCyCOHsfLhpFwlsRXcKPWB8k%2F8Qb2ROHqfmCMUBfzpXV%2B%2BFtMNzI3w%2FgNazCrIxOkbak%2FXnNcJFUq817kd0AFzvhqF50s2V2Tn3ma3qL9BUFgpK6WyYA298%2B1V0gABOOyAal%2FegLZCxKcMX8EJlhsvXdf9xDVrsEQkIFMD%2Fh0q4s7fh%2B%2FmAIUUxSJ8J9OE7v6gSpK1LDyE7hvvjBlF%2BQ%2Bi0RBnJyo9hAg8660ca0N62grkb3fjwfq7D5LnaT9GL3UN9TeRlG0gF3TNsV38qWegj3C5vYdbB3m%2BQ%2B2%2FnjV35BZ%2FYukUphvZTZcfgM%2BipFJfDw%2FUpASlLIQJzH%2FpMlr5kdtGA0BynVqphBkSPNjjuObpolAVXZt%2BtrFVpA3DqBNsA6Uz3Q3xuMvCrjrXZQ7yfgCl%2Fn5KFNKqBEfx4wiRCzR1%2BUpMK%2BPisoGOqUBpNXJvzdorDWRQ%2BfhRJMjUPGdhqglkD0Enb2ok5J0Dr%2FgszxU5nYHJhwRvhASiHvJfCD6F08oI4H4ZuOWZ7C5vnTJooQpT9L3Kui0H4PpahFa2lOwenPAQqBzITjqlndrkhRUMR02jTIJYU8u5UNae0mlJpEafUt6XK%2FbkaLI7X4EKfqYtIsWWu1%2FQtwubYu2bl8LgbYcW4%2FeIEuc%2FMmSdp9r%2FyFd&X-Amz-Signature=ad655d0c01715389cf6d95b9436392c43256880a4e6cb9690cca7c09d109f909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

