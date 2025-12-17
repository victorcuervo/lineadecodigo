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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTQZCWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh00tAvzvo%2BKaoKtlCeH9HOVboqz0yQcpP2gGjcwu25AiEAs%2FqI5MKRaxpgY8A8c%2BS1OJSheWh374by867zxlAUn0wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATHNO12wwapF5EGcCrcA0kauT1LlBaG3PTfyrl6ckdJNLJyL61%2F0xsKDo0m%2BCh9868GINPvyBVE8lXMHCOaY%2FrvQwXfPQ%2BSJjkkGp%2BFUVdU%2FZJjeQHn%2FFU%2BpJ%2ByFFK7vkWCspkvyU48Dtm%2BqdqyyxEYbzrnpz%2BWdJTVjsM%2FXPV6C8W0PMblg5r5rzy42RJXSWdMbhWqng9tCHXzPUc4Nfq%2BBiGWJhlKn8DCMpHQl05PJSNn6jjuJgVVN2gCX0URlMf5uquAlwXcz7gAwjgiba5pZ4UuqeevrzHgHy8XNY7wnAY8u2ebKznZ6bqrh7QHSWu%2Bn8K9Ao1JN%2BaYZOkeUoXOjqHSNGsU7E6b%2BwxJx91FxR0GalPOifMmlzXUQ%2B6PYXQOBm%2BnuFbcOGs%2Bqr7L8VOWSUxXenesCFvB1Hpofr486uybZrBdBSCY305s2lJqV%2FRauqi9XixNSpuHEPjoJzNDqxIDUSyXBc05XRy0k0QrE7FOgbS%2BDVSqHLXD2tCBlA1YpBVrKU2lFaukrnxUHfif1icI2Rp0UEsCpOOBGHvwQhubGkiIw2msvb4oOgKRe59HLNS0Dk0d7aS11Fqm4ASTItx33Pwb00s4s15nXlKoeL01hIuoXgaXYXdojSoDqWeUjuQKSpz9O9E%2BMPStjMoGOqUBATgTs81Wf0kPKcMvZofAEvF3cABh6mB1bH06tWyBiQ%2B1xpHCiqzwMkiTj9S3rKGaNc9n9Ik9phyuCuKedRZXdpvKYTCPmfl9JQwi00ohG1PT%2FmOdC%2BkdKGGoEynMGk3KUPGcvHtVIjvzyl%2BOHoiJ8wxGfEOYOV1OoTS%2BQgQYfOfjGcYPeggMc00YUD0HXKObE9ZWUmha49KoKrLyW0wenzjqAtii&X-Amz-Signature=992c2b8b735d9470d7918c602aadf5cb16e9cb5439ff7d5db1aecc5415c0aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTQZCWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh00tAvzvo%2BKaoKtlCeH9HOVboqz0yQcpP2gGjcwu25AiEAs%2FqI5MKRaxpgY8A8c%2BS1OJSheWh374by867zxlAUn0wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATHNO12wwapF5EGcCrcA0kauT1LlBaG3PTfyrl6ckdJNLJyL61%2F0xsKDo0m%2BCh9868GINPvyBVE8lXMHCOaY%2FrvQwXfPQ%2BSJjkkGp%2BFUVdU%2FZJjeQHn%2FFU%2BpJ%2ByFFK7vkWCspkvyU48Dtm%2BqdqyyxEYbzrnpz%2BWdJTVjsM%2FXPV6C8W0PMblg5r5rzy42RJXSWdMbhWqng9tCHXzPUc4Nfq%2BBiGWJhlKn8DCMpHQl05PJSNn6jjuJgVVN2gCX0URlMf5uquAlwXcz7gAwjgiba5pZ4UuqeevrzHgHy8XNY7wnAY8u2ebKznZ6bqrh7QHSWu%2Bn8K9Ao1JN%2BaYZOkeUoXOjqHSNGsU7E6b%2BwxJx91FxR0GalPOifMmlzXUQ%2B6PYXQOBm%2BnuFbcOGs%2Bqr7L8VOWSUxXenesCFvB1Hpofr486uybZrBdBSCY305s2lJqV%2FRauqi9XixNSpuHEPjoJzNDqxIDUSyXBc05XRy0k0QrE7FOgbS%2BDVSqHLXD2tCBlA1YpBVrKU2lFaukrnxUHfif1icI2Rp0UEsCpOOBGHvwQhubGkiIw2msvb4oOgKRe59HLNS0Dk0d7aS11Fqm4ASTItx33Pwb00s4s15nXlKoeL01hIuoXgaXYXdojSoDqWeUjuQKSpz9O9E%2BMPStjMoGOqUBATgTs81Wf0kPKcMvZofAEvF3cABh6mB1bH06tWyBiQ%2B1xpHCiqzwMkiTj9S3rKGaNc9n9Ik9phyuCuKedRZXdpvKYTCPmfl9JQwi00ohG1PT%2FmOdC%2BkdKGGoEynMGk3KUPGcvHtVIjvzyl%2BOHoiJ8wxGfEOYOV1OoTS%2BQgQYfOfjGcYPeggMc00YUD0HXKObE9ZWUmha49KoKrLyW0wenzjqAtii&X-Amz-Signature=3f0a4a638170e7cd2cde92f327cfd28bbb7dad4e6556ab641c3585c9f6ecccbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

