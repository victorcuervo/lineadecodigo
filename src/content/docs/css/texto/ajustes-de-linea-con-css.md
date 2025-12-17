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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CA4YZ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfkqSfIVDjDAlioChZBklWuuifiHSk3JZVB%2F8gsfSKUQIhANe88HbY%2BHza1IgE4G%2FgrkygE%2B7Voncpc9jL3X9HVT%2BiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6%2FRVF%2FJQABc6ufloq3ANImFWi7Xc%2Be6AFLJt3yDGZTtt6uKe77gZaRinBDxLykLmc3VAOWOPmTbgygt8P6cXnjsj4zFRjij0fOY5pXT%2FgoGplE6084C%2FJi53sgCl3%2BKRZk5UuilAfzqGJOXOCdkXeDR1zV49KmQvBtjtHwgmHw3NfCxdl1JweNXyLJkVe3RLw5oqu87j6yxws0Sx5EBDSZZ0NqATu4EiImgnTAq5yYab%2B9yRWfGndEBlynLCJbhcAun21XYZvOZl7yhj1nggZmDerNL8PP%2FtpzFHKMt3l1n8WlpKXNaOJ3tYSe2DEFzz%2BDi%2BaG3QDXkShxigBrhtmu3zg%2FJp%2FmRF9q3KqmLD5psl39uxvGVq1sgKTgUZKaIL%2FjIxR9kwgK0%2FVEov09HUW28F1mpH069ntMB8C5AiZRRr9cicGSLRd2%2F9nyI1jeaEWZPC8aPzSl0IWSqxoSjlBEzM3iHQGPJGixGeGvR5jhekf%2BLqry23n4eKzMhgKlp4ivSPjH0Dn7EEyOJVNvEXBGykC6OtNE5cDHA4eHrOnFbj%2BTkQ3J3djkNt4ewx19opGPepwjF5lvNL%2FCGCyV3DRuTrDmepsjgQpe54W4ugpyzN9iQBopPfLpg9PtDoM1o3yVJE2uIm4%2FhiUTzCMgYvKBjqkAU24RMuxrh%2F%2B0oshNXWJnx69yz0hcIChMpsWmut2RJPytfDEwwpMgKRmucCQNKw217k1zcwSPJCB7kDIG6YNOJrX6Z%2F2zTKqT4QobiDSNBO%2BfTMflbLwFmDczyXgxqeCDu3NxRe4mLCOUL4C%2BHfC%2FCyYlli6608KC5aVB40IyfnLGPA2y5yjUEBJlSTeZLxocGNHa232oGMCkDjVbY2lASRBwWia&X-Amz-Signature=f9278a7f32e3b85bc133ab66cbced690fae38a934d654bf3b4da8deaf8d40500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CA4YZ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfkqSfIVDjDAlioChZBklWuuifiHSk3JZVB%2F8gsfSKUQIhANe88HbY%2BHza1IgE4G%2FgrkygE%2B7Voncpc9jL3X9HVT%2BiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6%2FRVF%2FJQABc6ufloq3ANImFWi7Xc%2Be6AFLJt3yDGZTtt6uKe77gZaRinBDxLykLmc3VAOWOPmTbgygt8P6cXnjsj4zFRjij0fOY5pXT%2FgoGplE6084C%2FJi53sgCl3%2BKRZk5UuilAfzqGJOXOCdkXeDR1zV49KmQvBtjtHwgmHw3NfCxdl1JweNXyLJkVe3RLw5oqu87j6yxws0Sx5EBDSZZ0NqATu4EiImgnTAq5yYab%2B9yRWfGndEBlynLCJbhcAun21XYZvOZl7yhj1nggZmDerNL8PP%2FtpzFHKMt3l1n8WlpKXNaOJ3tYSe2DEFzz%2BDi%2BaG3QDXkShxigBrhtmu3zg%2FJp%2FmRF9q3KqmLD5psl39uxvGVq1sgKTgUZKaIL%2FjIxR9kwgK0%2FVEov09HUW28F1mpH069ntMB8C5AiZRRr9cicGSLRd2%2F9nyI1jeaEWZPC8aPzSl0IWSqxoSjlBEzM3iHQGPJGixGeGvR5jhekf%2BLqry23n4eKzMhgKlp4ivSPjH0Dn7EEyOJVNvEXBGykC6OtNE5cDHA4eHrOnFbj%2BTkQ3J3djkNt4ewx19opGPepwjF5lvNL%2FCGCyV3DRuTrDmepsjgQpe54W4ugpyzN9iQBopPfLpg9PtDoM1o3yVJE2uIm4%2FhiUTzCMgYvKBjqkAU24RMuxrh%2F%2B0oshNXWJnx69yz0hcIChMpsWmut2RJPytfDEwwpMgKRmucCQNKw217k1zcwSPJCB7kDIG6YNOJrX6Z%2F2zTKqT4QobiDSNBO%2BfTMflbLwFmDczyXgxqeCDu3NxRe4mLCOUL4C%2BHfC%2FCyYlli6608KC5aVB40IyfnLGPA2y5yjUEBJlSTeZLxocGNHa232oGMCkDjVbY2lASRBwWia&X-Amz-Signature=38705838fa008a9cb639930bec8fd41b440c5028e11bdfc6df51939f30ac7219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

