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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS2IKPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfmtGeohBDh%2Bg1Eilu7AnPswxFCEIdQhMI3QyI6YwuNAiAeqibqgSm%2FEweMR%2FR%2BjekUjxazRL8GUaMIH3VRo9CJaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTeYFtf0OGBqHYuzuKtwDUjTzeatF51pR5mVutu%2FsN7OJOOFQdWUfV9lKHsndr7qmYO0J1dOB%2FR2eeqU%2BvsiVO3d8HJN0gs7Yqh5ppcKrfDmvDXiFsW7s2l7wzfVXuui4E%2BSqoCTCAad69OA%2FwEYnO9FDkSA4KsQrqNfrvid7iROKjVFDWG7CkU5FG71U0EUWUsDoSjFCCkcGbDeCcdtWJrI23Ssh4IDfkGBvTlOjynam36%2F4VA9i2jAvl23ozwj6i4qbOjh00Nd2rOO0vfU5wV%2BCysmK2azlBrE3u01M1SceqwuxwAO%2BDQbJHNTMwmoMy2u5Q49IPa0eHUVXxdoVn2fQrZO%2BnC%2F10y6SvLCeU2Shs5osOiqhyBmbo2tN0u9BEzWeiuSM8jCIOAHXh8SFXFKIadwgUGevzA1WfSM2nlm9czlDqv9QYRuO5UCj3sAAfpnKLUEha8U9ezeMEniKqlJ6X7XgugSZWPIKKwnFYCWY61Wh3pRhPFinwrLANllz8jDd85WbwMSLGhMYemHXI8VyBSylYj1mLxFY8A76Z2%2BfYMPJVdWpG2m1wMCeSJxNwh5FcsTE3d4MQ2U7dh4DcQCHDa0I06CJBd74ssRkSbE8d3AcQqPSF2GNY%2BfhqKMrkN1J7JAWv%2FMEJk4wlp%2BLygY6pgHsen1bxVfVVKE4fTbIoOM4MhxqKiuRiadm8sUAX8V666%2FXsqmmSYgFh%2BRTRTlasqwwv5Q%2F3DY1DqGFV%2F24Kx7GXuC%2BNMrsYPNXMUPNbkLfWclOEXjnOM7P%2FbQv9o2XtTyFNwmTcy2LR3Xu0dP%2BVPijU9gOTu9HnIMb5Et5x1HcyqsBqvtWGTL90PxcMMlLXB3QpRtfaT9a%2BQ8auQBnwTKEUvTzkoHF&X-Amz-Signature=ef17c75fbf8c758a438fb6e45e4d933376904c8214d06ba66f3d7e12017fc413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AS2IKPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfmtGeohBDh%2Bg1Eilu7AnPswxFCEIdQhMI3QyI6YwuNAiAeqibqgSm%2FEweMR%2FR%2BjekUjxazRL8GUaMIH3VRo9CJaCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTeYFtf0OGBqHYuzuKtwDUjTzeatF51pR5mVutu%2FsN7OJOOFQdWUfV9lKHsndr7qmYO0J1dOB%2FR2eeqU%2BvsiVO3d8HJN0gs7Yqh5ppcKrfDmvDXiFsW7s2l7wzfVXuui4E%2BSqoCTCAad69OA%2FwEYnO9FDkSA4KsQrqNfrvid7iROKjVFDWG7CkU5FG71U0EUWUsDoSjFCCkcGbDeCcdtWJrI23Ssh4IDfkGBvTlOjynam36%2F4VA9i2jAvl23ozwj6i4qbOjh00Nd2rOO0vfU5wV%2BCysmK2azlBrE3u01M1SceqwuxwAO%2BDQbJHNTMwmoMy2u5Q49IPa0eHUVXxdoVn2fQrZO%2BnC%2F10y6SvLCeU2Shs5osOiqhyBmbo2tN0u9BEzWeiuSM8jCIOAHXh8SFXFKIadwgUGevzA1WfSM2nlm9czlDqv9QYRuO5UCj3sAAfpnKLUEha8U9ezeMEniKqlJ6X7XgugSZWPIKKwnFYCWY61Wh3pRhPFinwrLANllz8jDd85WbwMSLGhMYemHXI8VyBSylYj1mLxFY8A76Z2%2BfYMPJVdWpG2m1wMCeSJxNwh5FcsTE3d4MQ2U7dh4DcQCHDa0I06CJBd74ssRkSbE8d3AcQqPSF2GNY%2BfhqKMrkN1J7JAWv%2FMEJk4wlp%2BLygY6pgHsen1bxVfVVKE4fTbIoOM4MhxqKiuRiadm8sUAX8V666%2FXsqmmSYgFh%2BRTRTlasqwwv5Q%2F3DY1DqGFV%2F24Kx7GXuC%2BNMrsYPNXMUPNbkLfWclOEXjnOM7P%2FbQv9o2XtTyFNwmTcy2LR3Xu0dP%2BVPijU9gOTu9HnIMb5Et5x1HcyqsBqvtWGTL90PxcMMlLXB3QpRtfaT9a%2BQ8auQBnwTKEUvTzkoHF&X-Amz-Signature=c2440d080c27830430e28289ec243d3b0a4bd1bb05cb5b34e94833a48b9eeab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

