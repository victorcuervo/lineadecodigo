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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOD7TKDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqCy3Smq5NC8bb9uvcv2nAH0Cwoi%2B4cJVYRbtTOrXWqAiAtTcnHgiMJSG9NrChj0O5bkjXdtEjgdjTcLByS2MOZQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgUUrY1LARKdK1wFhKtwD1FDvVwWtk3KXNmKxOYdFZcfdDg0B9gn3TB6K843IWyZ7g%2BPFTKPx8FmAQ000YKuSE1ODXk%2BSVLGFMGaFQjlUDbCFmK8lN%2F3MX%2FJluaoRSPcwJtXMGNBVZk66q%2BOJZL18DZDrwPg%2FRUTfRATvdr%2FInocBzXQLz9%2FEJisCEZM4VamEPbUN8EyGr5j0VXojdwxASAzpExEYBtzNWdvrz%2FIEqQ75H0yxdEYUXJTU4Mw7HHmdJvy2EyGO%2B4KoKNHRJQPMnR7IQnlMcNl5%2BEltPMmHKEYSCHVy1MF0ISIPEC%2FNKd8TnfbipZzme2%2B4LsaDMfzGZzRCtRdTrb3gnah6ZUQ7j%2FLgvXg%2ByH29GmSVuI%2FDwWecZQ4Oe2%2FrJftKYS%2BeJvAWSFJN3e5nkfZLUeD38f0Dl5tP7uGJF6cph2xwkZr9vk19HrCw2x6G5xt0mqwEXQwy9iCChpXOQh%2BH0Hh3jDGRwUgTqv2s2uWiRmVCB9sMluYa%2Bvq%2F6puo4f0rblhdSTgVB5qLNl4kQFc5lhhQ3HqLTYMEtuCqJRhiJbEYKaPYXshHlqi3ibXnmyIm7%2BgodIvztY%2F1%2FXVQq1rpTVJkQGHYeaBDcrRbsnV9gyyrRsecsjPDUNHbtZmd%2FxuV8yMwr86IygY6pgEylYm7PeGSWIlKLjT2r3QyMSAX9Hz7kHdJYi1OMQCRwgP4Sf2voPVlaoBVrrR%2BComDQfKd8Xmn6CyyMqrKCclTL0%2BHlfYP%2BabSH%2BZPCGqTHuRhIiyvtIkmrhX9QFy9eI3jKRpC%2FtASqPlQ0lxh%2F3CeDqKgzqPiH38iVLAvlhDI0gH%2BiCkIiGchYx1YzQKT2oOlZoLTHD2Pm1uxTwbFCpvIUqQxGX7b&X-Amz-Signature=4b33af33700de5286c508e3bda47c1c1f150a5d503ef2ae4d25ec29e26952485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOD7TKDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqCy3Smq5NC8bb9uvcv2nAH0Cwoi%2B4cJVYRbtTOrXWqAiAtTcnHgiMJSG9NrChj0O5bkjXdtEjgdjTcLByS2MOZQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgUUrY1LARKdK1wFhKtwD1FDvVwWtk3KXNmKxOYdFZcfdDg0B9gn3TB6K843IWyZ7g%2BPFTKPx8FmAQ000YKuSE1ODXk%2BSVLGFMGaFQjlUDbCFmK8lN%2F3MX%2FJluaoRSPcwJtXMGNBVZk66q%2BOJZL18DZDrwPg%2FRUTfRATvdr%2FInocBzXQLz9%2FEJisCEZM4VamEPbUN8EyGr5j0VXojdwxASAzpExEYBtzNWdvrz%2FIEqQ75H0yxdEYUXJTU4Mw7HHmdJvy2EyGO%2B4KoKNHRJQPMnR7IQnlMcNl5%2BEltPMmHKEYSCHVy1MF0ISIPEC%2FNKd8TnfbipZzme2%2B4LsaDMfzGZzRCtRdTrb3gnah6ZUQ7j%2FLgvXg%2ByH29GmSVuI%2FDwWecZQ4Oe2%2FrJftKYS%2BeJvAWSFJN3e5nkfZLUeD38f0Dl5tP7uGJF6cph2xwkZr9vk19HrCw2x6G5xt0mqwEXQwy9iCChpXOQh%2BH0Hh3jDGRwUgTqv2s2uWiRmVCB9sMluYa%2Bvq%2F6puo4f0rblhdSTgVB5qLNl4kQFc5lhhQ3HqLTYMEtuCqJRhiJbEYKaPYXshHlqi3ibXnmyIm7%2BgodIvztY%2F1%2FXVQq1rpTVJkQGHYeaBDcrRbsnV9gyyrRsecsjPDUNHbtZmd%2FxuV8yMwr86IygY6pgEylYm7PeGSWIlKLjT2r3QyMSAX9Hz7kHdJYi1OMQCRwgP4Sf2voPVlaoBVrrR%2BComDQfKd8Xmn6CyyMqrKCclTL0%2BHlfYP%2BabSH%2BZPCGqTHuRhIiyvtIkmrhX9QFy9eI3jKRpC%2FtASqPlQ0lxh%2F3CeDqKgzqPiH38iVLAvlhDI0gH%2BiCkIiGchYx1YzQKT2oOlZoLTHD2Pm1uxTwbFCpvIUqQxGX7b&X-Amz-Signature=79e034356ab0f3cb3b44456cf00008c2ec26f3897a0fac74218dcc816abaf42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

