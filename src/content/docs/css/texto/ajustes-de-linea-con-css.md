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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ53IBNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJd1wmcxKnfI%2FtSnFs4F9VxldzZAdwGqtCQRQqbd69AIhALl6pqXW%2F5hZYqgnvxNaBtJbmf%2BN1wxgwOZuS%2Bj4Cm9kKv8DCHUQABoMNjM3NDIzMTgzODA1IgwvS%2BPR1Mix8GpdF1Aq3AOCKoHxMOfpt6MG%2Fc%2BKoMGvvJJn29SGdLQuMA2xH4B5r2tBkApl%2FbdCgj2sQL0f%2F%2BxVADA8OP34q%2BbxgaWXzjygvW4ymY%2FTYVrUYjeLjn5BKIH%2FG%2F0qQvTjsuTiqtB0BRH6%2F8jOtSkTbSoJdPRZzbDGScgoOnNj5EDi5ylwFANh1x3vDXqGBUfAKhgDU%2B7FTvu2KTXNdqSB6cilsWqMGqT9Z3I77DpBzcoI7RmGdYXSJhcgk0NmAjWUo5IesYHzFRLfjzuc%2BtemtPDzfq1UuGp7OSPyUKJKkkNQA5FZ3EfuhncHpActyVRLhp%2BVg3t4jNNHe3iUzc1Px%2BEmvaA6gQZx%2BzSPm%2BNlSdLtlzj3BPGbSOT0OGzDUjUDjZvBI2Q1g6B0bQ5KekqhBfa9P3pq97rL7K5qsSUn%2FGe9D8rJeT95MT4sAgdTdFCIPa48W%2F6WsJ6Phh4%2BbCVcz1m6wjER5ANwcBBKr%2Fau6ep1vty8N11WqufGKuIUWQU2teDKlOUw17%2FWL8HY4lxnA6%2FGPALtvPkVDdKh9whLWhVhStLS1b6RBUCmmsXwLmA6mgUETPTa4AIeIl4WnINS8IvK6bO4AnXI3dvb4AWoNwO0Hmv%2BT%2Bju7fIvW%2BVhiIauuRFwXzDFzojKBjqkAdL7xB7QKesWLuCVIB6hOJzgxdu87BpfnBm0kFXtcqhaCBc9PfOFF04SZs%2F4xGe5lxMgiRv%2B%2F6YkBnn2b7II6PT%2FbEL%2FUMM%2BIWiiDASBcB4E%2BlbXmrC6rod%2B%2BzQYbYZz5OSXZw0C2iYWZL5TGI8JglLPT1IM%2B6OEBdnawlWW%2FVDwlM1FoaURJBcSBjzLi2MJos5qZU5x%2FuDu2ZtvJcf0azbykV5E&X-Amz-Signature=0df760b37b4cf8b3c9ce188999a2e837d1ddd8fb2640f8a6ec2988f037d48049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ53IBNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJd1wmcxKnfI%2FtSnFs4F9VxldzZAdwGqtCQRQqbd69AIhALl6pqXW%2F5hZYqgnvxNaBtJbmf%2BN1wxgwOZuS%2Bj4Cm9kKv8DCHUQABoMNjM3NDIzMTgzODA1IgwvS%2BPR1Mix8GpdF1Aq3AOCKoHxMOfpt6MG%2Fc%2BKoMGvvJJn29SGdLQuMA2xH4B5r2tBkApl%2FbdCgj2sQL0f%2F%2BxVADA8OP34q%2BbxgaWXzjygvW4ymY%2FTYVrUYjeLjn5BKIH%2FG%2F0qQvTjsuTiqtB0BRH6%2F8jOtSkTbSoJdPRZzbDGScgoOnNj5EDi5ylwFANh1x3vDXqGBUfAKhgDU%2B7FTvu2KTXNdqSB6cilsWqMGqT9Z3I77DpBzcoI7RmGdYXSJhcgk0NmAjWUo5IesYHzFRLfjzuc%2BtemtPDzfq1UuGp7OSPyUKJKkkNQA5FZ3EfuhncHpActyVRLhp%2BVg3t4jNNHe3iUzc1Px%2BEmvaA6gQZx%2BzSPm%2BNlSdLtlzj3BPGbSOT0OGzDUjUDjZvBI2Q1g6B0bQ5KekqhBfa9P3pq97rL7K5qsSUn%2FGe9D8rJeT95MT4sAgdTdFCIPa48W%2F6WsJ6Phh4%2BbCVcz1m6wjER5ANwcBBKr%2Fau6ep1vty8N11WqufGKuIUWQU2teDKlOUw17%2FWL8HY4lxnA6%2FGPALtvPkVDdKh9whLWhVhStLS1b6RBUCmmsXwLmA6mgUETPTa4AIeIl4WnINS8IvK6bO4AnXI3dvb4AWoNwO0Hmv%2BT%2Bju7fIvW%2BVhiIauuRFwXzDFzojKBjqkAdL7xB7QKesWLuCVIB6hOJzgxdu87BpfnBm0kFXtcqhaCBc9PfOFF04SZs%2F4xGe5lxMgiRv%2B%2F6YkBnn2b7II6PT%2FbEL%2FUMM%2BIWiiDASBcB4E%2BlbXmrC6rod%2B%2BzQYbYZz5OSXZw0C2iYWZL5TGI8JglLPT1IM%2B6OEBdnawlWW%2FVDwlM1FoaURJBcSBjzLi2MJos5qZU5x%2FuDu2ZtvJcf0azbykV5E&X-Amz-Signature=c034a4c7ba1eab39a5cec925f915fe8d4645d3bd8def36511b2c7f5597a77b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

