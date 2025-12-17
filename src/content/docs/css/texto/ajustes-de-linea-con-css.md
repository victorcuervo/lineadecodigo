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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKXIQR3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2FauMj5749G2qp75Q8V2jqB7g3NT%2BHaNGDu7ZY5edpgIhAISF7MPHuXez6lfk8mlWiUBRUnh%2ByjkLJwCCm5wgLmVjKv8DCHsQABoMNjM3NDIzMTgzODA1IgwqwoPXbRBpxHKu%2B9Eq3ANlLXqLlZ%2B0mRAlvsT7ppl6XwE6%2BnL8t1lKtHI6FkAcLAm14AqDTuzCRluBbDg%2BX9lrO90rPP3jrFn41sAwzfsaRBpt53QGfoP2AYXUYAsn%2B%2B08CIGBQzwSa3GNVZmkfc2jK9YrWZb86qLSMSouVS1sGkUNDYq3Q6gLY2SWr09K2gFno4KsfNmUgcpTHjDk5y52qUux08d28kUw0%2FHRU1EGtI8nUa%2FT09SoueThp6ip9T%2FnFXeUpbSaYVpzWU%2BMECKkjVbcnDokxOPJWkuiEDKeZ84GzpViNiQ1kd%2B7ycdJ8av9nDcrzjOp%2FLmwC4ho19Ig%2FxA5ZxuFuNziKLFFC%2BtF9BIgYOSYUx4qWEJ%2FJkeByb4pOhKtvYTTXudx3T%2B%2BsCfy%2FxRBD3sIyC3qOAGDQJQ8nwQi%2F5Fm2h1MHmMq7nEK5Z5YpK5E5fIZJ7IqtSHX6C2yeUhiWPFgZxeuTN0jtE9Lm5w8HQOKqeQGq78jw25%2FdWtLclBwykNVCRny%2BLfTRpbZyqAqOxdtb2w6NA8XarnDMuYIYcyDMy1lJmscEVC04xNT%2BQdTGIeJRvyputpcKm6daapGAYvKZraNMbmyQrjjLao8tBs0Vksw48Np7UGEJqo1gq9hzjw5WvowszCh8InKBjqkAZDLqPS8aTdhwDUu7eRpyk0G2R1%2FrxG7%2FeGOXyYTmWP5n5CQDWEQzFmBiJjPXk5SQz4lDEp3RcAYbRncnv6Uv%2BlvdKJ8tW2CaJpOn2ViP%2FsfSZvEFB3t6sDkMIFsHa3kFBVKwIEsI%2FShLpfqQTYbNcP59aXdbS8%2Bpx4ioH%2BWOB80wJS8zU0HTK5Hmr3QOVRtlC0vWSmLlqtonYJK6HHfyBbL20o1&X-Amz-Signature=a8b7b93522ecd5f34929ef71087205aa960bb34e8d6afb28105449aee8e9920f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKXIQR3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2FauMj5749G2qp75Q8V2jqB7g3NT%2BHaNGDu7ZY5edpgIhAISF7MPHuXez6lfk8mlWiUBRUnh%2ByjkLJwCCm5wgLmVjKv8DCHsQABoMNjM3NDIzMTgzODA1IgwqwoPXbRBpxHKu%2B9Eq3ANlLXqLlZ%2B0mRAlvsT7ppl6XwE6%2BnL8t1lKtHI6FkAcLAm14AqDTuzCRluBbDg%2BX9lrO90rPP3jrFn41sAwzfsaRBpt53QGfoP2AYXUYAsn%2B%2B08CIGBQzwSa3GNVZmkfc2jK9YrWZb86qLSMSouVS1sGkUNDYq3Q6gLY2SWr09K2gFno4KsfNmUgcpTHjDk5y52qUux08d28kUw0%2FHRU1EGtI8nUa%2FT09SoueThp6ip9T%2FnFXeUpbSaYVpzWU%2BMECKkjVbcnDokxOPJWkuiEDKeZ84GzpViNiQ1kd%2B7ycdJ8av9nDcrzjOp%2FLmwC4ho19Ig%2FxA5ZxuFuNziKLFFC%2BtF9BIgYOSYUx4qWEJ%2FJkeByb4pOhKtvYTTXudx3T%2B%2BsCfy%2FxRBD3sIyC3qOAGDQJQ8nwQi%2F5Fm2h1MHmMq7nEK5Z5YpK5E5fIZJ7IqtSHX6C2yeUhiWPFgZxeuTN0jtE9Lm5w8HQOKqeQGq78jw25%2FdWtLclBwykNVCRny%2BLfTRpbZyqAqOxdtb2w6NA8XarnDMuYIYcyDMy1lJmscEVC04xNT%2BQdTGIeJRvyputpcKm6daapGAYvKZraNMbmyQrjjLao8tBs0Vksw48Np7UGEJqo1gq9hzjw5WvowszCh8InKBjqkAZDLqPS8aTdhwDUu7eRpyk0G2R1%2FrxG7%2FeGOXyYTmWP5n5CQDWEQzFmBiJjPXk5SQz4lDEp3RcAYbRncnv6Uv%2BlvdKJ8tW2CaJpOn2ViP%2FsfSZvEFB3t6sDkMIFsHa3kFBVKwIEsI%2FShLpfqQTYbNcP59aXdbS8%2Bpx4ioH%2BWOB80wJS8zU0HTK5Hmr3QOVRtlC0vWSmLlqtonYJK6HHfyBbL20o1&X-Amz-Signature=25b288aaf2e9ce0768cd4889f89410075710d61f2dfaab6ab53f310548235cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

