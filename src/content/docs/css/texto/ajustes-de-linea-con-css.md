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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MNZNRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8M8UOWZd7Ipzr%2BEg7i0dwA7pEuLABhisfuRs4X1ubXAiEAuoJkkc4glFfI3b1Wm%2BprDXNqdaBrOTZcRQ1G5DBKuZAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG1N3EXAC93LOS%2FT3yrcA04IUxgme%2FqYSrsCnOIpPeRR4l2JV%2FdhA844OqxImtqD%2FkuYwANg0joYitmq5rvsMG8wt8PyRxQX4Jmtgu7xuO25L8Yizbr1PJISBdtC%2BDHOurgeThojLNezjLz2YjIrns4qNoLu2ohGYMq3jXS8NHqnwxtPUvaqW2toTPmawkKRR2wRCP7QIE9T%2BkipHoX08NVRIDA4JJ9mX99%2BodyInzbuXCUB6ZrTpfG64qR3k6RJ3sLoBGw6%2B5itpAOwgVzaeKe1jfp%2FmSv58MkSYnppuObxKsRrLAfnPgTOIRbUHvNswoVh1DnqVdvYsvEUD4IvTlRCZy6irwvI%2BP0YZ%2BIOJeMKhrUQe4Qiz4XBBv4Z%2FgP0LruTsCNuUkaOR1ukdZ4P9FEs3d2dAnjuQXhk3F%2F7%2Fb2L7f2kvR%2FMI0%2F%2F%2BZL4CT4Nh3mGbdxXWVlrueLy0UYAJBmyPSI6Wvprl3DUC5sQ2STNXpz%2FwXqvUsdQS6tGvJjnnMPF2PaidKHUYmRpgkQfRaSBRw8504bkCKzTZeVO3KpGyq8r4D3DinVAe32WpKyaOr1PioueuLgFf4q8H8FeCYnl4Fn2FmcGnvTFOTdBe6mdhJYv52UpD51aLewfXewbwwnAnmEREfhPr9ElMIDSicoGOqUBsBsc2V11aTJWZ6uRvWowskjNjKJLZqQavi4Pz9A%2FUr8Ap94jwZWgSjSLF0VkDZVXy4HzT020Hu6QTzooSCdr50fXQpPm0o%2BwzT4WbjTGwkGATpD%2BDLaJhv33s3dNBuHID1vM%2Ft9l2IaqVbTfgd5%2FjXLmWqnsGSgvrVWdMvdD8QxIglWcnAKr3tm0m5Sv3k%2FdcZWv5dA1OMKJNAinOZPELGglvP4b&X-Amz-Signature=160963ce9a88f5f377096b308a42e13ede511e6f0d6ef1cdf266f3c0227a3977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MNZNRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8M8UOWZd7Ipzr%2BEg7i0dwA7pEuLABhisfuRs4X1ubXAiEAuoJkkc4glFfI3b1Wm%2BprDXNqdaBrOTZcRQ1G5DBKuZAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG1N3EXAC93LOS%2FT3yrcA04IUxgme%2FqYSrsCnOIpPeRR4l2JV%2FdhA844OqxImtqD%2FkuYwANg0joYitmq5rvsMG8wt8PyRxQX4Jmtgu7xuO25L8Yizbr1PJISBdtC%2BDHOurgeThojLNezjLz2YjIrns4qNoLu2ohGYMq3jXS8NHqnwxtPUvaqW2toTPmawkKRR2wRCP7QIE9T%2BkipHoX08NVRIDA4JJ9mX99%2BodyInzbuXCUB6ZrTpfG64qR3k6RJ3sLoBGw6%2B5itpAOwgVzaeKe1jfp%2FmSv58MkSYnppuObxKsRrLAfnPgTOIRbUHvNswoVh1DnqVdvYsvEUD4IvTlRCZy6irwvI%2BP0YZ%2BIOJeMKhrUQe4Qiz4XBBv4Z%2FgP0LruTsCNuUkaOR1ukdZ4P9FEs3d2dAnjuQXhk3F%2F7%2Fb2L7f2kvR%2FMI0%2F%2F%2BZL4CT4Nh3mGbdxXWVlrueLy0UYAJBmyPSI6Wvprl3DUC5sQ2STNXpz%2FwXqvUsdQS6tGvJjnnMPF2PaidKHUYmRpgkQfRaSBRw8504bkCKzTZeVO3KpGyq8r4D3DinVAe32WpKyaOr1PioueuLgFf4q8H8FeCYnl4Fn2FmcGnvTFOTdBe6mdhJYv52UpD51aLewfXewbwwnAnmEREfhPr9ElMIDSicoGOqUBsBsc2V11aTJWZ6uRvWowskjNjKJLZqQavi4Pz9A%2FUr8Ap94jwZWgSjSLF0VkDZVXy4HzT020Hu6QTzooSCdr50fXQpPm0o%2BwzT4WbjTGwkGATpD%2BDLaJhv33s3dNBuHID1vM%2Ft9l2IaqVbTfgd5%2FjXLmWqnsGSgvrVWdMvdD8QxIglWcnAKr3tm0m5Sv3k%2FdcZWv5dA1OMKJNAinOZPELGglvP4b&X-Amz-Signature=1b79a17571843b6bff6479b1874fbe45c57265d35cbc0c3d037f20797fceaa55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

