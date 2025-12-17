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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFB24S4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLypY%2BN180Ta5bfcjH2Y4M%2BaPKBCm5g7RKXOjWAG5WmwIhAJ5UJ4YUZ%2FBgdXKkzu%2BRR5cZS2OYLcvMFQuKi7w%2F1JBGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxsQHmvo7RkrePF6Kwq3ANdSs%2FAkuhXS4NE3PzBHBaR1J4Q5nXn5d6yuDZIkcTspcH2OfbWXOwYCBm9pJrj%2FZURdnQY37KRMUnxX0tUag7a2min2QeIvaiUApPaQmr1fYgc%2B8%2FaG3vTx1bKqX2vdg8xlpq6oyQzXhti%2Fuc28zRYEwL1M4Jvfzud4df%2FY4vAYDbKkDfMtx68olCJekm8aKX14SQLu%2Bgrx4JH20DnBomihb4fSnpUdKCRFPCoJQhIP%2FXS6JllTPamHbWqgsux4%2Bwldwhp58RdPqR2oqSsRWLKyZ25GFEMvk4Mzy6V43mheFlxsUmDzd0dh6DvfIsS%2Fl%2B3oqIFkM0cku36G11gu%2BNxm%2BSadal3aYpL3O65R3XTkzGBHn3xM0aNFPQ1lSdr9M3qmAl0UfirhSaer%2F%2Fu9tnSN8lnLKTTGuOeG54Q3lfdzEatr29qpQZZ%2Fc6lbsOYHBuOGLRXdDQbZMV%2Bmktcl70dOkpifHXarVIWxCrv7%2F0u8TaT9uSgRgzMRZhCIeWm9pJNcAcoZ0V3wjnTjdZfRNf2K98p9UD5ADiH7zYCoswG8HmdEl7caeTW74EJCpn5MEyuzSqCbkTlhsgsi%2FWyqhoPnvfPMIQdVIhVi9tD8QjurGzNmF6MR94BV7svWzCgt4nKBjqkAYapcdMli%2FORbKUxMAFqOebMnAZMNSIwAyuaDOXk8yp2mqCmg%2FHViWJF1sQcfAQb%2FwvUOXzjBp4Wmw4v16g%2FN5e8xTSR15A0pBD4ck5R44eDOKZn1CkPugW1VQJPcKHFJRrQ4vqpV0Eo%2B9W8vCHIygYJ3%2BoHcXnVsSjTMqxlTsaz7uET3dRMGCtYBZVB5Gls%2Bjmk28orVyTGSNM%2BZ4VQeZnPa0W7&X-Amz-Signature=b50890da9fc732ee5c68a9afd90f512a273ce47d62691c56a83740633d5dcbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFB24S4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLypY%2BN180Ta5bfcjH2Y4M%2BaPKBCm5g7RKXOjWAG5WmwIhAJ5UJ4YUZ%2FBgdXKkzu%2BRR5cZS2OYLcvMFQuKi7w%2F1JBGKv8DCHkQABoMNjM3NDIzMTgzODA1IgxsQHmvo7RkrePF6Kwq3ANdSs%2FAkuhXS4NE3PzBHBaR1J4Q5nXn5d6yuDZIkcTspcH2OfbWXOwYCBm9pJrj%2FZURdnQY37KRMUnxX0tUag7a2min2QeIvaiUApPaQmr1fYgc%2B8%2FaG3vTx1bKqX2vdg8xlpq6oyQzXhti%2Fuc28zRYEwL1M4Jvfzud4df%2FY4vAYDbKkDfMtx68olCJekm8aKX14SQLu%2Bgrx4JH20DnBomihb4fSnpUdKCRFPCoJQhIP%2FXS6JllTPamHbWqgsux4%2Bwldwhp58RdPqR2oqSsRWLKyZ25GFEMvk4Mzy6V43mheFlxsUmDzd0dh6DvfIsS%2Fl%2B3oqIFkM0cku36G11gu%2BNxm%2BSadal3aYpL3O65R3XTkzGBHn3xM0aNFPQ1lSdr9M3qmAl0UfirhSaer%2F%2Fu9tnSN8lnLKTTGuOeG54Q3lfdzEatr29qpQZZ%2Fc6lbsOYHBuOGLRXdDQbZMV%2Bmktcl70dOkpifHXarVIWxCrv7%2F0u8TaT9uSgRgzMRZhCIeWm9pJNcAcoZ0V3wjnTjdZfRNf2K98p9UD5ADiH7zYCoswG8HmdEl7caeTW74EJCpn5MEyuzSqCbkTlhsgsi%2FWyqhoPnvfPMIQdVIhVi9tD8QjurGzNmF6MR94BV7svWzCgt4nKBjqkAYapcdMli%2FORbKUxMAFqOebMnAZMNSIwAyuaDOXk8yp2mqCmg%2FHViWJF1sQcfAQb%2FwvUOXzjBp4Wmw4v16g%2FN5e8xTSR15A0pBD4ck5R44eDOKZn1CkPugW1VQJPcKHFJRrQ4vqpV0Eo%2B9W8vCHIygYJ3%2BoHcXnVsSjTMqxlTsaz7uET3dRMGCtYBZVB5Gls%2Bjmk28orVyTGSNM%2BZ4VQeZnPa0W7&X-Amz-Signature=a68b62b696c21a9f3806feb3868ca08dd419e2dda90244e80e5f768a818d8757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

