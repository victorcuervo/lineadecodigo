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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBFK36J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx3g6tCtFU0Fim2%2Fu%2BTTMZcIKJX2XpNhWoC14MYJbqVAIgdZrN6soC9NN8Tj%2BxuDTkeIxBMGkljOuB1Cl5a5ks8UkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpN8%2BbF8iavgftZXSrcA%2FUUAgGZb%2Fhq6z99AJGDMGNeKpTC4sB1eR2XQDjqXr61asQ%2BZrqpNu4yn4M9lmFBnP1z33UgFPioEhBDLxs%2Fpedc%2Fa8ScO5v0jT%2B7ql0Q4U9nU73tZGaG756AAiMKtIAeSwJjzgSzjAl6DxjUi%2FqxGL93Bqv8fCl2udTkFTWO9scLaAmeywO6kjLlgwKz1FIF0N1%2BYPRxYdjNz663RutYA8XkanI4YwTk3rXgF3alvcpn0c7IY4FP%2Fw1r%2FVcC1h0OqrgVRLHFZdMc%2BHTQmlsVXxiqSpC%2FY%2FDtxaHL%2FgqgT8uoqTfPYR%2FMyKszZbxJU7IcOrEMuoPoqFC26ugePAv3rZPMl5gvIgZU2o8dgSFnRsHymRDDZDLeVC9DcoiM3D%2BlOtNhDdU2ISw1aGa%2FfVxXwtqYwHl%2BkBkWTHSndlwqq076MDK6u2eunCTYA3HqGJoPPzGg5mxtsnnvRm0atFyRXxjCEzq2wzzhLvclK4Z9dKfw%2FtsGCwnHAeS7T3MaXb2Sl5aXonJtR3Q75N%2B3iBkqCbV4eFgW%2FXYD4AWB9XXAEOLWtCeyxXVijpa39OJZPpEK1E9QcheEbae0r619TxU%2F56sDACOYKGu2j4ETpiU4l%2FxihYWk4FD2v%2BAHOrTMM2ujMoGOqUBtN9ZsB7f%2BfElpQCt9YfnKIxqaPQmJOH2UhRKE8cqiYMrbn781WzTx%2FUu8csBa4o0MYGy5SDBWDszOoFdNmhUB4ejvZDeldUYG5UpAoMEFYLw5GthVp74eRCuPhSXJxp%2FaeJzn1YYS%2FFfTit4VbdJSvMg2d2uKyjFeveJ9XlNtspgiiSGSUvIo%2FaWYMANBNT%2B7b2W%2Be0To%2Fo6%2BnCQwGt5s8nerlqy&X-Amz-Signature=1dbd1f1c8e295a3243e20525c64532110c3c03828b4b259adfc3b9171ea29b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBFK36J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx3g6tCtFU0Fim2%2Fu%2BTTMZcIKJX2XpNhWoC14MYJbqVAIgdZrN6soC9NN8Tj%2BxuDTkeIxBMGkljOuB1Cl5a5ks8UkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpN8%2BbF8iavgftZXSrcA%2FUUAgGZb%2Fhq6z99AJGDMGNeKpTC4sB1eR2XQDjqXr61asQ%2BZrqpNu4yn4M9lmFBnP1z33UgFPioEhBDLxs%2Fpedc%2Fa8ScO5v0jT%2B7ql0Q4U9nU73tZGaG756AAiMKtIAeSwJjzgSzjAl6DxjUi%2FqxGL93Bqv8fCl2udTkFTWO9scLaAmeywO6kjLlgwKz1FIF0N1%2BYPRxYdjNz663RutYA8XkanI4YwTk3rXgF3alvcpn0c7IY4FP%2Fw1r%2FVcC1h0OqrgVRLHFZdMc%2BHTQmlsVXxiqSpC%2FY%2FDtxaHL%2FgqgT8uoqTfPYR%2FMyKszZbxJU7IcOrEMuoPoqFC26ugePAv3rZPMl5gvIgZU2o8dgSFnRsHymRDDZDLeVC9DcoiM3D%2BlOtNhDdU2ISw1aGa%2FfVxXwtqYwHl%2BkBkWTHSndlwqq076MDK6u2eunCTYA3HqGJoPPzGg5mxtsnnvRm0atFyRXxjCEzq2wzzhLvclK4Z9dKfw%2FtsGCwnHAeS7T3MaXb2Sl5aXonJtR3Q75N%2B3iBkqCbV4eFgW%2FXYD4AWB9XXAEOLWtCeyxXVijpa39OJZPpEK1E9QcheEbae0r619TxU%2F56sDACOYKGu2j4ETpiU4l%2FxihYWk4FD2v%2BAHOrTMM2ujMoGOqUBtN9ZsB7f%2BfElpQCt9YfnKIxqaPQmJOH2UhRKE8cqiYMrbn781WzTx%2FUu8csBa4o0MYGy5SDBWDszOoFdNmhUB4ejvZDeldUYG5UpAoMEFYLw5GthVp74eRCuPhSXJxp%2FaeJzn1YYS%2FFfTit4VbdJSvMg2d2uKyjFeveJ9XlNtspgiiSGSUvIo%2FaWYMANBNT%2B7b2W%2Be0To%2Fo6%2BnCQwGt5s8nerlqy&X-Amz-Signature=cd0a4e6438cb6abc85a85854eeb4ec632755dfc38bcb24c8d20b5cfdf66f4844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

