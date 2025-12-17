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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCFZM35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX2EteWcTIJai3y3avM8ZMpp0GrNUoUNjxpz6ipjgt%2BAiEA9uUsMWmJVIB0rpTGMjdLIKfvaxHiv%2BpPtNiBsrGSR38qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANOWv7CkYxOUJiGXircA5IMlTUKBBCy132NkLuOU3CgpeNv4jVwCKPOBwWLltEIrTKJTektSABNLXRQoTAR%2BxUrOE7treix8pjLf00NgyiXpeqMmTcANW%2B6U2oNvgcuoL6NU7JpZZwlk5PcZF%2BwtLFjMQNxF8cgas32cv7btncPFtcnMrgiTZ0pLTe5r5TS3xZXA1OX2lgLz8uI%2Fszxarpg5ys1yKQyAE9VvxPKbx90KWGoQcc7eILf%2BQksm6tTv6MzKnM1y3n67gaMON5H9uwCC1z5hpc%2Bs%2FFKXhrJWmu82U3%2BHBh2LGNnmCJ8tbmDdQeGgKaU8G66cFwg5KIPTYR5DV1S1rCDZ8TinnrMGaXlJ0YWlpbfyO4qXEqVdrGwmu5WVGvO2yKPC2S6KQprLdPfrmKqOBSoCzY3RvKY71Io4RNxJpCkdaWlIbCmFMZNMc0Xj3ghXd9rR%2F56ITbgsowS4FzJWPkR9Z9dQQwllJ%2FBgLfNEj1C%2FYMczRKfPSDWAi%2FvpZTyHj510Qr2obevddLLWRfWXqWg98Xwr1sA24IEWuLPLbbsmejLuPkVPIifrOlzhzsOMbOWwcpwNt2Vo2w0Po2NiXKYTyohcN3jMRar0nqMcF%2FDniLCmyLWX6IjjbTiavdOW4Z4JgH0MJSujMoGOqUBd%2FL1iySpIOfjAx2jXwGUm4ZoiZu5F5SAUFzeVuBxWSHtR59ixWJMvFXPHYJYpjM5KZX0CNtUGdZTyWOVywGvtYjXQAIKO4O%2BIekPFs6ugOBljNxhWmtgfIT%2Buu9tWPKx6r%2B%2BUWaPKGbdlDvkBz6mFBunNJF6S9PzFTVYQs2Xrcolrl8K54ZHVIQQClYKvTljgTjDcViY1FjXooD6ZGtr2WSp73aC&X-Amz-Signature=d62ceda1abbbd018b251c2a6424af0640a2d68e055cd776213cf31ec9b5bb915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCFZM35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX2EteWcTIJai3y3avM8ZMpp0GrNUoUNjxpz6ipjgt%2BAiEA9uUsMWmJVIB0rpTGMjdLIKfvaxHiv%2BpPtNiBsrGSR38qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANOWv7CkYxOUJiGXircA5IMlTUKBBCy132NkLuOU3CgpeNv4jVwCKPOBwWLltEIrTKJTektSABNLXRQoTAR%2BxUrOE7treix8pjLf00NgyiXpeqMmTcANW%2B6U2oNvgcuoL6NU7JpZZwlk5PcZF%2BwtLFjMQNxF8cgas32cv7btncPFtcnMrgiTZ0pLTe5r5TS3xZXA1OX2lgLz8uI%2Fszxarpg5ys1yKQyAE9VvxPKbx90KWGoQcc7eILf%2BQksm6tTv6MzKnM1y3n67gaMON5H9uwCC1z5hpc%2Bs%2FFKXhrJWmu82U3%2BHBh2LGNnmCJ8tbmDdQeGgKaU8G66cFwg5KIPTYR5DV1S1rCDZ8TinnrMGaXlJ0YWlpbfyO4qXEqVdrGwmu5WVGvO2yKPC2S6KQprLdPfrmKqOBSoCzY3RvKY71Io4RNxJpCkdaWlIbCmFMZNMc0Xj3ghXd9rR%2F56ITbgsowS4FzJWPkR9Z9dQQwllJ%2FBgLfNEj1C%2FYMczRKfPSDWAi%2FvpZTyHj510Qr2obevddLLWRfWXqWg98Xwr1sA24IEWuLPLbbsmejLuPkVPIifrOlzhzsOMbOWwcpwNt2Vo2w0Po2NiXKYTyohcN3jMRar0nqMcF%2FDniLCmyLWX6IjjbTiavdOW4Z4JgH0MJSujMoGOqUBd%2FL1iySpIOfjAx2jXwGUm4ZoiZu5F5SAUFzeVuBxWSHtR59ixWJMvFXPHYJYpjM5KZX0CNtUGdZTyWOVywGvtYjXQAIKO4O%2BIekPFs6ugOBljNxhWmtgfIT%2Buu9tWPKx6r%2B%2BUWaPKGbdlDvkBz6mFBunNJF6S9PzFTVYQs2Xrcolrl8K54ZHVIQQClYKvTljgTjDcViY1FjXooD6ZGtr2WSp73aC&X-Amz-Signature=7fce5a9f06ebc9deec787bd3e452eefa08ad2c998fec6977bef21441b4fb0949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

