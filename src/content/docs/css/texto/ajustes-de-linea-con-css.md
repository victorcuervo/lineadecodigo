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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMUXOO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEvYaNmgOXpWdtKRWEBhojzTNjyLgAPzcec2%2BnOn3I%2FAIhAO3Wpxj%2Foip%2FVGGp6JiBFXf8gqtowc9ni1ts%2Fnc0aRgcKv8DCHsQABoMNjM3NDIzMTgzODA1IgzzocJ0TXclW95FZwwq3ANI1Wy2sw5bX6ArgJz26J00MnzqRZoefQLScyT3LkkG6wyYI9aMwD3ZGd%2B8CDRNTdypdeAN%2FtmpbuUWL6cDoJbrmOLWOie4M52eDJ2ladenEHJm7lfsNJfzAq9ZXmRjlr3kfug7a1nmcRo2FwXbcKlapdybbhaQy72QDX%2FmgepxUUVp9OhufIjT623eXFFpY2cHTOG9pUDOqgN0NE3LgRQcPJTD6Xn%2F%2B74i9vz9ULshBpyBFwmcV1eyMsBY5iuTn8WNVM6i%2B9B9Li1ylLb7vG7ZFdSDJkGVRVVXBsikVWOxOQV%2FkJCDu5nQk6DvPubowYeb3FhBORB0EOCh94wjbxa0Zv8hlHKomyHlc%2BQlG1Vc1%2BUYDlfV9UDf17Thu%2B2w2SiQ45QjMPl6Q%2BrMPj9RqgMyjE%2B9CEJ9TXSHf%2BSfeCvGRo1Ycn5etiOOg%2BaM8Gc9oFSAtkd0ZI3q%2FPhvWuwngQE1C%2Bw3wu5SuCzdBO%2BxCescehS9czhs89jfMwWH6qOHr5UN4hMkRiUXRtqlCbLjxXurnBkf9xtp21y4RoVahkELwq18U8LnEvoZHWW0OqvFV1YsqOY6nFB8mT049IfOEvVYW1UPdkE%2FTyuP7DZ9AdLkAjn7Ukgxd4P1NikfDDDd8InKBjqkAa4BR6e7UsrVY0rOeEBKvNRPHD70uxOGcu90npUQsYgiOmPkIQlWyukXFttralgReXkHlp%2BrmgncB5Uxw5Xl9ozImeJ6f20VpAEkGAQfnqpTO3P4I2hnlAwmTqi72jnbTNG8ZkL49%2BeyA5u8PHZtkrH6twCE8JvxOtLWYFzvuzZ0X2gW5%2FsICOLzQ1puApczVepq1YwqB1v%2FuzneOvPwgo9SgUo1&X-Amz-Signature=394f9229d94155a95ef7fd04321bfc713675753f1a8c2c8214c970dda9a1336d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMUXOO5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEvYaNmgOXpWdtKRWEBhojzTNjyLgAPzcec2%2BnOn3I%2FAIhAO3Wpxj%2Foip%2FVGGp6JiBFXf8gqtowc9ni1ts%2Fnc0aRgcKv8DCHsQABoMNjM3NDIzMTgzODA1IgzzocJ0TXclW95FZwwq3ANI1Wy2sw5bX6ArgJz26J00MnzqRZoefQLScyT3LkkG6wyYI9aMwD3ZGd%2B8CDRNTdypdeAN%2FtmpbuUWL6cDoJbrmOLWOie4M52eDJ2ladenEHJm7lfsNJfzAq9ZXmRjlr3kfug7a1nmcRo2FwXbcKlapdybbhaQy72QDX%2FmgepxUUVp9OhufIjT623eXFFpY2cHTOG9pUDOqgN0NE3LgRQcPJTD6Xn%2F%2B74i9vz9ULshBpyBFwmcV1eyMsBY5iuTn8WNVM6i%2B9B9Li1ylLb7vG7ZFdSDJkGVRVVXBsikVWOxOQV%2FkJCDu5nQk6DvPubowYeb3FhBORB0EOCh94wjbxa0Zv8hlHKomyHlc%2BQlG1Vc1%2BUYDlfV9UDf17Thu%2B2w2SiQ45QjMPl6Q%2BrMPj9RqgMyjE%2B9CEJ9TXSHf%2BSfeCvGRo1Ycn5etiOOg%2BaM8Gc9oFSAtkd0ZI3q%2FPhvWuwngQE1C%2Bw3wu5SuCzdBO%2BxCescehS9czhs89jfMwWH6qOHr5UN4hMkRiUXRtqlCbLjxXurnBkf9xtp21y4RoVahkELwq18U8LnEvoZHWW0OqvFV1YsqOY6nFB8mT049IfOEvVYW1UPdkE%2FTyuP7DZ9AdLkAjn7Ukgxd4P1NikfDDDd8InKBjqkAa4BR6e7UsrVY0rOeEBKvNRPHD70uxOGcu90npUQsYgiOmPkIQlWyukXFttralgReXkHlp%2BrmgncB5Uxw5Xl9ozImeJ6f20VpAEkGAQfnqpTO3P4I2hnlAwmTqi72jnbTNG8ZkL49%2BeyA5u8PHZtkrH6twCE8JvxOtLWYFzvuzZ0X2gW5%2FsICOLzQ1puApczVepq1YwqB1v%2FuzneOvPwgo9SgUo1&X-Amz-Signature=d444faf88614900011f817b17bcc55d77fd6cb69f96724a0f94577f1a126ec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

