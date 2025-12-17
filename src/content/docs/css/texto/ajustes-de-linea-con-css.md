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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EJ5YHX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgNwXQ%2BtCnRSJe%2F%2B8nO%2F0WwEdG7ZlHIfB9oj3Nf5i4gIhANZRq%2BlCd6QmOSC0ZCBQVM6WpnbN%2FgHhehwbQm0%2BJhUSKv8DCHgQABoMNjM3NDIzMTgzODA1Igwg4igwJIebo5cBWJUq3AOG4tyF7hYeFxauW%2BWXAX9LhwB40RlD1nXmWgs1FvhC8g4BYdfhzyYIjq9V5oj0XzJEJXjuCbFkFKUICrKqEDoNKG3dJnvBpB71ueIvoKCkJ90TmEjMCNR9FYzu0kQHMF%2Bu1VQT6NuM%2FVf390VcPPNiV8XqNk%2BB0G4oqLVN0jKer0cubPsswMdP0Bv%2BNx2n6RpdXqHemsRAQrZPQ91qhS9pSzaNbgsw%2FVIOh9Sxz9TDNB7BL%2FBeje%2B3957hVHDxs3UMMpfzUWvXX4IPjAVcn13bSASGvU0ZuzQOQ4ZXcZq20%2FroKlbN6EDSXcygh6Iw1eFRizyY7ETfDuy3k4ve0CE5WR2Iart%2Bu1sFF21JDldUqoDqaef0%2FbhFeiuTW8zoTpRaqSE9NjppKKgoCl5TGeycdxXPHzaqzwqKC%2BdpJLAB7ozrpbUmhR9TNsz5erwowlejS2OM2Cc5RR2Ijn5AKszOAh2bPg8NYitIZMLj8Cnqoo%2F3xs%2BZLXdHsvavtoDWM4y29%2FwbWu4UBg5IXA1ueyh5h2sOVy%2FgrEp%2FMxp7LigTrNzR9QhjfTIurPsgur32eyup3PwIVCPmkGrPdqLc%2BBPcOJNYDIC858f1m%2BsPLHVo5pePMoTqnVsMqfzq3DCsnYnKBjqkAQ5CGsC%2FiJPu6AB%2BrOdF%2BHSvqrHbCrFnVQagztT4IOrWekGth1mpNhFVoUYbtRYbQyhBRg4K1WM7%2FjgSLRGY1ZHD7i%2BEth3f84aeJriP3N6lK81wl5cUsqwmbfuBZiFamwc%2FD90BkctYW1%2F9AvJXK3LTSU6G%2BKFtQM%2Bm0%2B4bDs2%2FZGte1Ld9dxjKY5QfOhSNSMKR4b7MVGI9BM%2BU8WAK05eBIZG7&X-Amz-Signature=4dc51e33c2c15b6946cab4db88bb737e685a75495d3760ab7f879ca5f7d0d051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EJ5YHX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgNwXQ%2BtCnRSJe%2F%2B8nO%2F0WwEdG7ZlHIfB9oj3Nf5i4gIhANZRq%2BlCd6QmOSC0ZCBQVM6WpnbN%2FgHhehwbQm0%2BJhUSKv8DCHgQABoMNjM3NDIzMTgzODA1Igwg4igwJIebo5cBWJUq3AOG4tyF7hYeFxauW%2BWXAX9LhwB40RlD1nXmWgs1FvhC8g4BYdfhzyYIjq9V5oj0XzJEJXjuCbFkFKUICrKqEDoNKG3dJnvBpB71ueIvoKCkJ90TmEjMCNR9FYzu0kQHMF%2Bu1VQT6NuM%2FVf390VcPPNiV8XqNk%2BB0G4oqLVN0jKer0cubPsswMdP0Bv%2BNx2n6RpdXqHemsRAQrZPQ91qhS9pSzaNbgsw%2FVIOh9Sxz9TDNB7BL%2FBeje%2B3957hVHDxs3UMMpfzUWvXX4IPjAVcn13bSASGvU0ZuzQOQ4ZXcZq20%2FroKlbN6EDSXcygh6Iw1eFRizyY7ETfDuy3k4ve0CE5WR2Iart%2Bu1sFF21JDldUqoDqaef0%2FbhFeiuTW8zoTpRaqSE9NjppKKgoCl5TGeycdxXPHzaqzwqKC%2BdpJLAB7ozrpbUmhR9TNsz5erwowlejS2OM2Cc5RR2Ijn5AKszOAh2bPg8NYitIZMLj8Cnqoo%2F3xs%2BZLXdHsvavtoDWM4y29%2FwbWu4UBg5IXA1ueyh5h2sOVy%2FgrEp%2FMxp7LigTrNzR9QhjfTIurPsgur32eyup3PwIVCPmkGrPdqLc%2BBPcOJNYDIC858f1m%2BsPLHVo5pePMoTqnVsMqfzq3DCsnYnKBjqkAQ5CGsC%2FiJPu6AB%2BrOdF%2BHSvqrHbCrFnVQagztT4IOrWekGth1mpNhFVoUYbtRYbQyhBRg4K1WM7%2FjgSLRGY1ZHD7i%2BEth3f84aeJriP3N6lK81wl5cUsqwmbfuBZiFamwc%2FD90BkctYW1%2F9AvJXK3LTSU6G%2BKFtQM%2Bm0%2B4bDs2%2FZGte1Ld9dxjKY5QfOhSNSMKR4b7MVGI9BM%2BU8WAK05eBIZG7&X-Amz-Signature=a5e7ef89a64e2d410756379f92a7a1d574ae223ee4e2860afb81c44eb330d69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

