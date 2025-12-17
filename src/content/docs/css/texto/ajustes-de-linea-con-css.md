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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYU2FJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClo3ss9XMbwGtDtLVFkEytgr4t8lcaH3wmdm8HkpPrBwIgbKiEdf%2F1XDNoPfUr1jpx5W%2BR5g5R9iL04Pk%2B04p7l%2Fsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCaVDvkNf%2Fq7okYAWSrcA9GrsBibsyoeRe0RV3xfoiN0SN5nZjuSHT0qT3eoS%2F9iCPERiGb5YigR0zXXkjqEdYgVVYDrg8VPNHWg%2FhVgwZ%2BqhnCH5O302FKoyls2ZTA%2B5IdBmTvjWjqLSgaLa2bdqi40amZdnFNvtucXKgl12yooLKrlgzt6ntOlQOItJzK1JKnHojwHagGs72Nw%2FJRqC1zFk8t2yCKLhoqi3aMJbIl%2FRv%2FXFas0XxrLAoCZ%2BlsQw%2FVFbvSVukMjwaWGSaK31eyV8SeOnTLVCIslidrUHHImG5zZaNdmCbVi20L5z3RTyA9eUgNeRy2JlmGhy08EKBFPsBlK88WgTgeB%2FkV6cWSvN%2B540RMBIljduZCoK1Mq7CwE%2BUvjzxy7%2BwHk%2Bin7ILjutFUJnRtrE0XqmUMkuSSA4OP%2FYu6XrX8LRYJ%2Fkm4pyDTCK9PFxVlQ13aI3HFeXfqaOsjwBs288%2FlqpTMrC%2BanQR%2BDnodmacFWt007HyLUAqv7A0ZBMSZa4152lXl3sn%2B3trb63kGAf3sJ5R1uH2TMms1J3e9gLgXupB1uyT5%2FAqkW2gw92RCvi2LR6Qf3QW7S3%2BqrVWXVeXdckCc5066W0OC43xeu0zfHGs%2FRN2wmph2NKqWQKIqSaC1gMICPisoGOqUB5Yl7%2Bs4bXVeJYnMoZ9MdCWk41LlEM5ijOwNq%2B7Zhs9Sz41D52IOVKhn1vQ%2F3fW%2F2Omk8MN6qk3hb16VM5xEWGnqDIRHPmnBckDLx0p1sWUBE6NkcVVfI1UXevSKbGIHvCLktSxGM%2B%2BQmEOXIztr0skk4P16niTEY5UW6IRMNWKlW3vq6gMrmR45tQFMBwELCqZTNQug0nydXrBY%2FC9Wsb55d95QW&X-Amz-Signature=394fd1f68f83f221f871dc1f728ae71537eb8e4246289aef86fd6b8a1ca34f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYU2FJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClo3ss9XMbwGtDtLVFkEytgr4t8lcaH3wmdm8HkpPrBwIgbKiEdf%2F1XDNoPfUr1jpx5W%2BR5g5R9iL04Pk%2B04p7l%2Fsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCaVDvkNf%2Fq7okYAWSrcA9GrsBibsyoeRe0RV3xfoiN0SN5nZjuSHT0qT3eoS%2F9iCPERiGb5YigR0zXXkjqEdYgVVYDrg8VPNHWg%2FhVgwZ%2BqhnCH5O302FKoyls2ZTA%2B5IdBmTvjWjqLSgaLa2bdqi40amZdnFNvtucXKgl12yooLKrlgzt6ntOlQOItJzK1JKnHojwHagGs72Nw%2FJRqC1zFk8t2yCKLhoqi3aMJbIl%2FRv%2FXFas0XxrLAoCZ%2BlsQw%2FVFbvSVukMjwaWGSaK31eyV8SeOnTLVCIslidrUHHImG5zZaNdmCbVi20L5z3RTyA9eUgNeRy2JlmGhy08EKBFPsBlK88WgTgeB%2FkV6cWSvN%2B540RMBIljduZCoK1Mq7CwE%2BUvjzxy7%2BwHk%2Bin7ILjutFUJnRtrE0XqmUMkuSSA4OP%2FYu6XrX8LRYJ%2Fkm4pyDTCK9PFxVlQ13aI3HFeXfqaOsjwBs288%2FlqpTMrC%2BanQR%2BDnodmacFWt007HyLUAqv7A0ZBMSZa4152lXl3sn%2B3trb63kGAf3sJ5R1uH2TMms1J3e9gLgXupB1uyT5%2FAqkW2gw92RCvi2LR6Qf3QW7S3%2BqrVWXVeXdckCc5066W0OC43xeu0zfHGs%2FRN2wmph2NKqWQKIqSaC1gMICPisoGOqUB5Yl7%2Bs4bXVeJYnMoZ9MdCWk41LlEM5ijOwNq%2B7Zhs9Sz41D52IOVKhn1vQ%2F3fW%2F2Omk8MN6qk3hb16VM5xEWGnqDIRHPmnBckDLx0p1sWUBE6NkcVVfI1UXevSKbGIHvCLktSxGM%2B%2BQmEOXIztr0skk4P16niTEY5UW6IRMNWKlW3vq6gMrmR45tQFMBwELCqZTNQug0nydXrBY%2FC9Wsb55d95QW&X-Amz-Signature=cf29997ddee3a52a09bb67481e5ac6cc0697961004dcecfc510c3c97f3a5251e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

