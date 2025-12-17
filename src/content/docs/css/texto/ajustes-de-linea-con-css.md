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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBV2SYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JrCGRFOwoRw7jCrtn3EdC8fBpLwZg0GCK5hpQKuWJAIhAIT5Vj88WXUcQ9BVKkrHLLft08JluklrHrDxWHSxDUP%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgyMVcKf%2F%2FlQVYGFLVQq3ANqy2S00DKyCgDd%2FZLZ21eTR8bJiy4g4bp79yvRd4c2rCotDkLWJrG%2BABi5F40zOCbAJzma6E4qRSk1ZHg3M5y6es9XgABPYXaBgkW5%2FQH5VjRw%2BYEswYtTlnFUamBMqlomvGkAaUDHgyR57VXXWSbu8%2FedpVK%2FbhKBJhPPtVqkrOa3g6btVvWQxeEokuTRvCWOkU%2FcaLEpOwvrqEOvFSMG4%2Br3ZGbaRzoXIOsxXAKvT5JrrANRuFFR3esTRlOE3eC4Lcwo1MS3XP0sQU7YlpUhHgYuXPbHfO9pK%2F4DepmYymGjhsZhhqtkQdmm9eHYVR3ANWoDOni37XXyrkDrcaM%2FQBawIIhI%2FUTR%2FfuvoB54u1SFseub0EuqI1ngftjHkf46zZXxhstXTypYkOg1lrSlOj16VsnHD931c%2BMd8Rgml31pZxgUHbSVPrGqZ5IKXpISn2VRk2TD6lEE0n%2BeUBq3pGQJ78Z0jEg5enBOcDeic8RV0PMSQswV8IsHn48sCJRz8kGLsT%2FiFtce4uAs2FuU6%2Bk6k7K8A8Fav%2B9PCNfU55%2FzgODzAPsHhIspC1miXcEhkuPc1H1Qal5%2BRR%2F2NUyBNsZsvSiYsRahYzx7hjGbAJlwC8jqWFyi8w0TFzCD8InKBjqkAWLrXYR2Hx6SajdUrIRuQeGcIniZRcTVZ1WTGZwmsibS1X2E%2BVcn%2BeJPxbgouGeaf2QNn2cdW2a9EzIJQbbKCj%2F7JkDQm3S%2FDCXGzM1itnRefLCaIyul67I4v4fjayeYa3lJwCuoiMITAYmgF6x%2FqQs4iFXK2paWxI%2F%2FprArT3u5OoN6H1plLBkPGUPPEt5Y1Scvp24LH8XZgJFJOXqtcPpFxSe3&X-Amz-Signature=f08c19bc183ab669ee3afdbe972d9274c36cc80c11d5aa8427441dfd857e6403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBV2SYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JrCGRFOwoRw7jCrtn3EdC8fBpLwZg0GCK5hpQKuWJAIhAIT5Vj88WXUcQ9BVKkrHLLft08JluklrHrDxWHSxDUP%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgyMVcKf%2F%2FlQVYGFLVQq3ANqy2S00DKyCgDd%2FZLZ21eTR8bJiy4g4bp79yvRd4c2rCotDkLWJrG%2BABi5F40zOCbAJzma6E4qRSk1ZHg3M5y6es9XgABPYXaBgkW5%2FQH5VjRw%2BYEswYtTlnFUamBMqlomvGkAaUDHgyR57VXXWSbu8%2FedpVK%2FbhKBJhPPtVqkrOa3g6btVvWQxeEokuTRvCWOkU%2FcaLEpOwvrqEOvFSMG4%2Br3ZGbaRzoXIOsxXAKvT5JrrANRuFFR3esTRlOE3eC4Lcwo1MS3XP0sQU7YlpUhHgYuXPbHfO9pK%2F4DepmYymGjhsZhhqtkQdmm9eHYVR3ANWoDOni37XXyrkDrcaM%2FQBawIIhI%2FUTR%2FfuvoB54u1SFseub0EuqI1ngftjHkf46zZXxhstXTypYkOg1lrSlOj16VsnHD931c%2BMd8Rgml31pZxgUHbSVPrGqZ5IKXpISn2VRk2TD6lEE0n%2BeUBq3pGQJ78Z0jEg5enBOcDeic8RV0PMSQswV8IsHn48sCJRz8kGLsT%2FiFtce4uAs2FuU6%2Bk6k7K8A8Fav%2B9PCNfU55%2FzgODzAPsHhIspC1miXcEhkuPc1H1Qal5%2BRR%2F2NUyBNsZsvSiYsRahYzx7hjGbAJlwC8jqWFyi8w0TFzCD8InKBjqkAWLrXYR2Hx6SajdUrIRuQeGcIniZRcTVZ1WTGZwmsibS1X2E%2BVcn%2BeJPxbgouGeaf2QNn2cdW2a9EzIJQbbKCj%2F7JkDQm3S%2FDCXGzM1itnRefLCaIyul67I4v4fjayeYa3lJwCuoiMITAYmgF6x%2FqQs4iFXK2paWxI%2F%2FprArT3u5OoN6H1plLBkPGUPPEt5Y1Scvp24LH8XZgJFJOXqtcPpFxSe3&X-Amz-Signature=4a0ecd1fa88d0d69f368025e3c8f20cae0d361948fa48a37050ff415c3070e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

