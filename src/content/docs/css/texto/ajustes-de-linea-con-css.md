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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXPKXL3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrMmiqh7pLcQlPsDoTse%2FoeMqjUCpO%2FNsRYIQ2QxFKRAiAb8wdAfZNSl8edp%2Fep63DbE%2FTRbYrzk4zSkTFGEAbJfSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLF4Tw7QIpWoaVvz5KtwDa2dZ8jQiQxb4KHwmg81EP4LIshgCctNruyASjrrvIVGGfmi1t%2BOg7EY61Yydqvlx45PkW%2BkBAeH2W1BmmCA4R8E8BS7fmv71QfB9h8RN%2BOU%2FBW6nZxfVK3WBui4x2qw97LvZAuXOgU9eHSZa8FN5plKh7dBvryTNtge6cZFRe%2BFKzLcleepwadXAfioyLdQI2lcojIhMcSYv%2Fw6apoABcCU265%2FDQntsNRPtCX%2BMRJ2VyB2kSUq%2FzqeCbGemXDYTcpDsZhm0sVbvmjyDymS%2FbAEOH2ltFtPfPvtQfaSRuYDJgVLPP9Tt%2Fd40x1nbFhIhN46xFIbvvQFyvhMzgERNb57wTOJEfLyr1QGIu1XEB8AS4r5Gf196EQwBwCq2eeGW88%2FYZIVF%2BDd4mx24v57yhYUdFVXVFREtS4l068zlKX2oIAwNlUkp4eY0GtCY5oTezHXZGzaj1TUTQmAXYaqi3OYqkrJF3p9sOWGBvH0s6lMzlZsIMVwEhqx1a9%2F%2B2GXe5zZGeK2ComC0%2BKX1gnMXZet%2FYrjgnFkIa55TCA3Vd%2BmtaMt10Dl9dJNE8dE%2FUGiaSftWy2Xw%2Bs6WzrT42tgya28Tk%2BzY0LFRXhnXjE4QfXym1L0xKxPPEkSoAiwwpM6IygY6pgFJQbfyorJb8N8%2Fwjrg83QssIOOpn%2BYtuHG%2BzzhjzfR%2F3lwH%2BC9Bt%2BL3ettT4qj%2FyQ4lcuQVuNpg%2Fu4XLitmjpcJRC6nscEsVq0TRsMgG0pws%2FIfW4IBx1kiZF18hh9ACSuHtjRiq%2FRvPQiiv1%2FRzGFuth9t5TRU7ltwrcYAPfyZpJBJr6AfGIKu3T92BZrCGoz0DLEPT%2BuI0rS44fT0aGskhQZj7IE&X-Amz-Signature=4b29620f8118c82047d8a1f1097c34b680217ad2f4ea5951611c54c93d915f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXPKXL3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrMmiqh7pLcQlPsDoTse%2FoeMqjUCpO%2FNsRYIQ2QxFKRAiAb8wdAfZNSl8edp%2Fep63DbE%2FTRbYrzk4zSkTFGEAbJfSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLF4Tw7QIpWoaVvz5KtwDa2dZ8jQiQxb4KHwmg81EP4LIshgCctNruyASjrrvIVGGfmi1t%2BOg7EY61Yydqvlx45PkW%2BkBAeH2W1BmmCA4R8E8BS7fmv71QfB9h8RN%2BOU%2FBW6nZxfVK3WBui4x2qw97LvZAuXOgU9eHSZa8FN5plKh7dBvryTNtge6cZFRe%2BFKzLcleepwadXAfioyLdQI2lcojIhMcSYv%2Fw6apoABcCU265%2FDQntsNRPtCX%2BMRJ2VyB2kSUq%2FzqeCbGemXDYTcpDsZhm0sVbvmjyDymS%2FbAEOH2ltFtPfPvtQfaSRuYDJgVLPP9Tt%2Fd40x1nbFhIhN46xFIbvvQFyvhMzgERNb57wTOJEfLyr1QGIu1XEB8AS4r5Gf196EQwBwCq2eeGW88%2FYZIVF%2BDd4mx24v57yhYUdFVXVFREtS4l068zlKX2oIAwNlUkp4eY0GtCY5oTezHXZGzaj1TUTQmAXYaqi3OYqkrJF3p9sOWGBvH0s6lMzlZsIMVwEhqx1a9%2F%2B2GXe5zZGeK2ComC0%2BKX1gnMXZet%2FYrjgnFkIa55TCA3Vd%2BmtaMt10Dl9dJNE8dE%2FUGiaSftWy2Xw%2Bs6WzrT42tgya28Tk%2BzY0LFRXhnXjE4QfXym1L0xKxPPEkSoAiwwpM6IygY6pgFJQbfyorJb8N8%2Fwjrg83QssIOOpn%2BYtuHG%2BzzhjzfR%2F3lwH%2BC9Bt%2BL3ettT4qj%2FyQ4lcuQVuNpg%2Fu4XLitmjpcJRC6nscEsVq0TRsMgG0pws%2FIfW4IBx1kiZF18hh9ACSuHtjRiq%2FRvPQiiv1%2FRzGFuth9t5TRU7ltwrcYAPfyZpJBJr6AfGIKu3T92BZrCGoz0DLEPT%2BuI0rS44fT0aGskhQZj7IE&X-Amz-Signature=7252dbe7204e13a2a4dfe478fa5b30cb950d790f18b6c6acd58daaa550fddb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

