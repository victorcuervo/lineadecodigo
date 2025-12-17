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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO7I6JY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9tNh%2F9azdqFGbgiMYS9BYuWGecp9jiFXRL6pR4Fh8TAiB9Tmh%2BH1k37GwgglqMlm7CZ2IF2%2B7ugUBi6KY5RuXjkyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyKEFaofiRtk4wDTzKtwDfc1A8%2BSPUXv5kzgIhx9c7i2Y7Od3s%2BXd3hrr%2F9nJbOhkvxOe%2FOqZVh%2FaJ3kmaqeOXtwhCs%2FjSAneCb%2BIKR4jCnL1QWhgLTwmv2ZS2OqZGJHm%2Bwq%2FvexCtVjoV49EfzoLS8n%2FmI2qouslWMKxZlZ2uOAdHQrvNcObNh6vA1PGgaYGWueK63KUn%2Be2wGRRnECCWKvfyBel5Em7t4fXmW6JrhV4exr1o6z5os3nTcGP3qtk37uMNJlyF914NoyPELVXSbqakV7T0EKittfc%2BL0k0aPx40HnUu8Xin5G1E7Y4GqXnDe2xN0%2B243tVsautol4v%2B2whu%2BQRhriqMm%2B%2BXJQnTdLRrkULt86URqzCo9Mkr%2FZPP%2B7ZD8sfpvg5SOE9ygGpttpmPm8EVWeIuDR4C9WOUtw7AGuwLs%2FugmDDhGD22Q99aEU9RfgUQPgEgm0gRXOT37rd4Ogl%2FR8Z1zpvXJ%2B3GfzdOrq52OvNmcOIG0jjzw6M5AJ7%2BGEihKsAWqZqL%2FNT1YuFFSGIEctSnci9TDtZAFinbTTxOO8nlT6LF9NlM4K8H48UeNhnzzI1Y030ESFFyI7MSH7qVr1qTNFWz9sLS8MSvzVHG%2BgIBpy4dWykZHGdsYF%2BK5eP%2FweBGUw446KygY6pgHhjORTAiGw%2B9bKa6NN2eSjLVQCsTck3uQw5ATsYBZu9TgEYhdsbV2kJVYPx3edL3icUgqciD1czwxmBfaIZaEgt7WDMkiFc0Q8UvuebIWTWpJCsiKCRibkF%2BKH0rkwL4nrpyuIvF7AZ4X4E1Irc227qpxcu%2FWJ5p9X2hHrfQRIit%2FcV%2FmaSqJEGH8ziurf9FulSWfA%2BAfX4YOIlxv4Hvy5bVMcxgbj&X-Amz-Signature=d242ffc989dd02536e16c03af486057e111b38e4858f1046588d78d2f0b06b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO7I6JY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9tNh%2F9azdqFGbgiMYS9BYuWGecp9jiFXRL6pR4Fh8TAiB9Tmh%2BH1k37GwgglqMlm7CZ2IF2%2B7ugUBi6KY5RuXjkyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyKEFaofiRtk4wDTzKtwDfc1A8%2BSPUXv5kzgIhx9c7i2Y7Od3s%2BXd3hrr%2F9nJbOhkvxOe%2FOqZVh%2FaJ3kmaqeOXtwhCs%2FjSAneCb%2BIKR4jCnL1QWhgLTwmv2ZS2OqZGJHm%2Bwq%2FvexCtVjoV49EfzoLS8n%2FmI2qouslWMKxZlZ2uOAdHQrvNcObNh6vA1PGgaYGWueK63KUn%2Be2wGRRnECCWKvfyBel5Em7t4fXmW6JrhV4exr1o6z5os3nTcGP3qtk37uMNJlyF914NoyPELVXSbqakV7T0EKittfc%2BL0k0aPx40HnUu8Xin5G1E7Y4GqXnDe2xN0%2B243tVsautol4v%2B2whu%2BQRhriqMm%2B%2BXJQnTdLRrkULt86URqzCo9Mkr%2FZPP%2B7ZD8sfpvg5SOE9ygGpttpmPm8EVWeIuDR4C9WOUtw7AGuwLs%2FugmDDhGD22Q99aEU9RfgUQPgEgm0gRXOT37rd4Ogl%2FR8Z1zpvXJ%2B3GfzdOrq52OvNmcOIG0jjzw6M5AJ7%2BGEihKsAWqZqL%2FNT1YuFFSGIEctSnci9TDtZAFinbTTxOO8nlT6LF9NlM4K8H48UeNhnzzI1Y030ESFFyI7MSH7qVr1qTNFWz9sLS8MSvzVHG%2BgIBpy4dWykZHGdsYF%2BK5eP%2FweBGUw446KygY6pgHhjORTAiGw%2B9bKa6NN2eSjLVQCsTck3uQw5ATsYBZu9TgEYhdsbV2kJVYPx3edL3icUgqciD1czwxmBfaIZaEgt7WDMkiFc0Q8UvuebIWTWpJCsiKCRibkF%2BKH0rkwL4nrpyuIvF7AZ4X4E1Irc227qpxcu%2FWJ5p9X2hHrfQRIit%2FcV%2FmaSqJEGH8ziurf9FulSWfA%2BAfX4YOIlxv4Hvy5bVMcxgbj&X-Amz-Signature=d7ebb248c566d56a074366ea409d83eb827b39d50b399aa68af2a45bf9cd48ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

