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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHBHZJC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1uruu4vbpsjFix3skxhOxLY%2Fn5YT%2F9rK6M4wwppMVOAiEA64FuEm57z2NM3dFXIWYzVe9YHkiU178iXI9m83%2Fn%2FCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdpX5RJcbVV51CdECrcAyhdqxTrgipSSSfnFeLoTJMeeaUwX4NX2q7G4lB8%2BiiDcq6pNqGQheTMH595y%2FU1eO%2FY1FOu2029UGmnMHbG1R84SOaVLs2p%2BmF4Vh0XNr5pknWEqV6AxPZAgEfJka5SO8%2BbBPCYfxizg%2BWgR5pTIqUorTr2grHhQUCNaLvwOulVKX30s%2F%2BHkUifnkXppTzEaVe2HOUjpnaEmaYSf%2BYLspVBqUOP4prKLRqPrCxHRTUowv8FdaZRTYF2vtD17WHh8IVc9YsodQD062okTrqRHEX9CJNOsTBbXmKx1Yez5Dw%2FPSVytrQ%2Fm1TO45IqNEmmURB4c0yRCc3Of3qRFfn%2BCMGLyw%2B%2BFjgBnzst4Bn%2BHqSLy0kuKjk2wLB%2BEytwRpompuaKdlOpA6Tkbx0f4knknSHYem7h4mRJCxoZErjeeg3I2qMBgJ4QiSw5%2B2x7ntjMl5R8WdQJHFi7xU5p443KedcTonozZ0fZuGhK8hw82djf%2FCWdDkXOsJPWD9er9jBB51Hwoq6LHOB5%2F8nhpPhPk5GU3Oq0wNmbxLFu12RtY%2F8SFVN0Hbsh8H36jAoHmSZCXbTPTRQZbCrppPVNjjV%2BSAb8dT2Lajog05FkWonk7lwRD0%2F4Ww3Ra8U%2FjD8NMJ2gi8oGOqUBxqedvIi9WbFkQniUmnAQp7ODj0kZVvNEXjMK2eJVeIIAhHQvSHaV6Zn%2BeJGxmVRIe7SEYcXZUA3AZXXy6fzN9NDxeLI631b0pTgRX0bW6SpadIUk1jRwfAkhivBItC5PpPm5TujK5a8%2F%2FvxxMmGH9VpYOO%2FmQSHF5HE1H0DMYTBKaOXnrNz6nlrJO0JwzUJ3lu9lcyqHBURantiP6XPJN2PFqDUT&X-Amz-Signature=fe199ae9bf02124e0e0497bb5d0ca66b0d7b29c3abfca85a3386805085645c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHBHZJC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1uruu4vbpsjFix3skxhOxLY%2Fn5YT%2F9rK6M4wwppMVOAiEA64FuEm57z2NM3dFXIWYzVe9YHkiU178iXI9m83%2Fn%2FCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdpX5RJcbVV51CdECrcAyhdqxTrgipSSSfnFeLoTJMeeaUwX4NX2q7G4lB8%2BiiDcq6pNqGQheTMH595y%2FU1eO%2FY1FOu2029UGmnMHbG1R84SOaVLs2p%2BmF4Vh0XNr5pknWEqV6AxPZAgEfJka5SO8%2BbBPCYfxizg%2BWgR5pTIqUorTr2grHhQUCNaLvwOulVKX30s%2F%2BHkUifnkXppTzEaVe2HOUjpnaEmaYSf%2BYLspVBqUOP4prKLRqPrCxHRTUowv8FdaZRTYF2vtD17WHh8IVc9YsodQD062okTrqRHEX9CJNOsTBbXmKx1Yez5Dw%2FPSVytrQ%2Fm1TO45IqNEmmURB4c0yRCc3Of3qRFfn%2BCMGLyw%2B%2BFjgBnzst4Bn%2BHqSLy0kuKjk2wLB%2BEytwRpompuaKdlOpA6Tkbx0f4knknSHYem7h4mRJCxoZErjeeg3I2qMBgJ4QiSw5%2B2x7ntjMl5R8WdQJHFi7xU5p443KedcTonozZ0fZuGhK8hw82djf%2FCWdDkXOsJPWD9er9jBB51Hwoq6LHOB5%2F8nhpPhPk5GU3Oq0wNmbxLFu12RtY%2F8SFVN0Hbsh8H36jAoHmSZCXbTPTRQZbCrppPVNjjV%2BSAb8dT2Lajog05FkWonk7lwRD0%2F4Ww3Ra8U%2FjD8NMJ2gi8oGOqUBxqedvIi9WbFkQniUmnAQp7ODj0kZVvNEXjMK2eJVeIIAhHQvSHaV6Zn%2BeJGxmVRIe7SEYcXZUA3AZXXy6fzN9NDxeLI631b0pTgRX0bW6SpadIUk1jRwfAkhivBItC5PpPm5TujK5a8%2F%2FvxxMmGH9VpYOO%2FmQSHF5HE1H0DMYTBKaOXnrNz6nlrJO0JwzUJ3lu9lcyqHBURantiP6XPJN2PFqDUT&X-Amz-Signature=9dc7f47fd36615e5a15ab87804752652bd8dcb838fab92d3e2bc24a73e22618c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

