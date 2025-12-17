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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466772OXAQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeoBlTBO6mXsQv7ROu9YfsBGYswBeuYIRjipYOUCjTHgIgWLbZ4C70qrID13Dw0iIPApwdkeaCPs3j92JQfLkmNAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmfBStaRscEUgTZRCrcAztjKJmfYW02Mnw86L7aQd9H5Ptu8z93nwxM5GZLtdXPZRrhPrdlZ%2FMZALKYgSRPm4Iq4pyibeZR1sx7abVL7I88aEm5446WKK26cfF1waKZ7G1GyQqRA5SX0y1TnVBmyto6JJd%2FkagOILh%2BFxBPShl13%2FZO7XyGXaRJnCx0eFjBlWxNSRs42J9NY5UclD86%2F1XEnQ8Nrbktb6qga%2B8kMdawre7SjbKdOphJPMvlM3yKwMNobuZtdBwzlofDFS3xbmX4c78wwP8YL%2FfsvYaWv0BsKOwv61OEzL49nsCW0b%2FoylS5qPcHMzdgxlwHKVSc%2Bk4ShVQmss%2Fwu5QPnQpU3XiAp1%2F%2FKWC5g6YQeUlGWq5x8X7dOAXtR8hqSsdVNSt4gUfSW7s47obUqhVxtcfUXRDsVB%2FCwzOZD0GAWQV6%2Fl%2FxfsZKVQI7fgctgl2bVES3Wuv7mQhqu9hufMuuARl%2BxqYQBr%2BYvM0L36K%2FN8GfTxSk6QjUwKjxQyagOrMiJlLFO77%2BpWtEPrq80rEFznaU%2Fsra%2BgsYoRdDMbZM%2FBEM53DZ%2Bi%2BiDZYDKk5IcTMGzwFMLjb2jtzEqESFTs8azHi0EF7CuWnWgQzr2XOWozMvFwasZrVjtn5UICcyHes5MKGfi8oGOqUBnp0ZGsrbpP6pQ6CvF0m3Q84z2upP8RKSggmvSa2GsGKmy3Kc6vDWn8vbeZeuZQn7KV70itqRjQbvXDnuTzYrjnClkX8%2BbiI4oIMRau0h7biDnNkCAyi6Wrjrn44ngEij1la45BE8NNl2ldBi52V6s3ftt6g1Rzi%2B9y1NOemW%2B2dFd9KBxw6uJbPF%2FhoCP2RTeXT1BBxXhbHj6ydkZYQ7%2FBWt4bLk&X-Amz-Signature=b9cf5f3a4241cab89882e495288cdd6fedfd49448ad018c80a34533db5ad10a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466772OXAQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeoBlTBO6mXsQv7ROu9YfsBGYswBeuYIRjipYOUCjTHgIgWLbZ4C70qrID13Dw0iIPApwdkeaCPs3j92JQfLkmNAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmfBStaRscEUgTZRCrcAztjKJmfYW02Mnw86L7aQd9H5Ptu8z93nwxM5GZLtdXPZRrhPrdlZ%2FMZALKYgSRPm4Iq4pyibeZR1sx7abVL7I88aEm5446WKK26cfF1waKZ7G1GyQqRA5SX0y1TnVBmyto6JJd%2FkagOILh%2BFxBPShl13%2FZO7XyGXaRJnCx0eFjBlWxNSRs42J9NY5UclD86%2F1XEnQ8Nrbktb6qga%2B8kMdawre7SjbKdOphJPMvlM3yKwMNobuZtdBwzlofDFS3xbmX4c78wwP8YL%2FfsvYaWv0BsKOwv61OEzL49nsCW0b%2FoylS5qPcHMzdgxlwHKVSc%2Bk4ShVQmss%2Fwu5QPnQpU3XiAp1%2F%2FKWC5g6YQeUlGWq5x8X7dOAXtR8hqSsdVNSt4gUfSW7s47obUqhVxtcfUXRDsVB%2FCwzOZD0GAWQV6%2Fl%2FxfsZKVQI7fgctgl2bVES3Wuv7mQhqu9hufMuuARl%2BxqYQBr%2BYvM0L36K%2FN8GfTxSk6QjUwKjxQyagOrMiJlLFO77%2BpWtEPrq80rEFznaU%2Fsra%2BgsYoRdDMbZM%2FBEM53DZ%2Bi%2BiDZYDKk5IcTMGzwFMLjb2jtzEqESFTs8azHi0EF7CuWnWgQzr2XOWozMvFwasZrVjtn5UICcyHes5MKGfi8oGOqUBnp0ZGsrbpP6pQ6CvF0m3Q84z2upP8RKSggmvSa2GsGKmy3Kc6vDWn8vbeZeuZQn7KV70itqRjQbvXDnuTzYrjnClkX8%2BbiI4oIMRau0h7biDnNkCAyi6Wrjrn44ngEij1la45BE8NNl2ldBi52V6s3ftt6g1Rzi%2B9y1NOemW%2B2dFd9KBxw6uJbPF%2FhoCP2RTeXT1BBxXhbHj6ydkZYQ7%2FBWt4bLk&X-Amz-Signature=caf643b2ab3168a2a59c1081a69ddfa90874da2a00191d10928ac4b6625563ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

