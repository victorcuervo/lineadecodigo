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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA6PVEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJN312WXfxth0Qtz%2FENShLpLAhAk22tOUQEV8EZvxZBAIgCGiU2UOidJyTZMlOyTJM46BC8stk86bIw0FXmjGsgZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL4gLsYNxe018NXosSrcAxRxP8IrdR07SmH4mHcJRcAoyIasLR2jYSr9Wh57vIXx43s1d%2F0ar5kCAgAGIpWw5pTWIh9zrhi3MTUfoQD71%2Bn%2F1hFGYKbPE%2FVRCew36%2BVIQS8SH74MXgu4LsVLfS0Behiv5%2BpH41KVPfu%2BCyd%2Bss74AiM9gwbwc0q42g%2Bm7%2BkJvyLAKqJN4VCP281vgZmVnO%2BrPSZRWr6gfEmeAej7Z1qzQBr8uU5OyZe%2FMQdULrJZTv7CGF3Q50NN5ZdZajKcetYgM9qA1syH5lVZTjPS4z396WQopHqMoPkFIwSwBzSpjMsgECGjABB7zhLMbkYVG4gpluqCIBFwrqhYO8M34VGhpQYhcqjbuHhDeys1soBdMpaG6lOuiSGoZ8TmW8wOXuLaKdHagNpLBKiyeVTntfZ6rArlgDVzOQl89d4rYBK%2FUZbD%2BpJC%2FbNvI8CdrXZoHLmniDEKmm%2BIAVYysyhgOQZvP0h5NitaVTRZbSDS5n%2BC7VhMPGxPUX%2B0SnN1Tea9QOiUYyl4fHkJ2EccB6j%2FBjMgPG9Tc7FjaYkes7ku98eV0m1G2%2FhDm9FIb6MxVDZGJB01YjLs5gwMzxHFS7qJO8GaocDAkH9ronUZZQw49ZdhPusgnDOP2OXRdEAIMNGOisoGOqUBkYN5FmpLNIVCCyBJHOu2qQVHPftQpEeaZw43TpUdg3xVEw5L%2FRgxBiFOlDLkKJGXjgsmz3bFiQl%2FsIN60FuVJeR%2B99gPrkdG%2BTP0l0GmFV9qBYUI82SLE3D5S0Pbqu7uS9ftivD11fe9Mce0z3rYAJDFCH1zHKFJczS7HKmr6WUU3No0IfKXLwzgvpe328FNrNWBlmDF%2FsnUY5PJijZdF6AspKVs&X-Amz-Signature=85c7ea1b2b871785881bf7440e6c21e82631781576c9731de626c36aae4ec005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA6PVEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJN312WXfxth0Qtz%2FENShLpLAhAk22tOUQEV8EZvxZBAIgCGiU2UOidJyTZMlOyTJM46BC8stk86bIw0FXmjGsgZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL4gLsYNxe018NXosSrcAxRxP8IrdR07SmH4mHcJRcAoyIasLR2jYSr9Wh57vIXx43s1d%2F0ar5kCAgAGIpWw5pTWIh9zrhi3MTUfoQD71%2Bn%2F1hFGYKbPE%2FVRCew36%2BVIQS8SH74MXgu4LsVLfS0Behiv5%2BpH41KVPfu%2BCyd%2Bss74AiM9gwbwc0q42g%2Bm7%2BkJvyLAKqJN4VCP281vgZmVnO%2BrPSZRWr6gfEmeAej7Z1qzQBr8uU5OyZe%2FMQdULrJZTv7CGF3Q50NN5ZdZajKcetYgM9qA1syH5lVZTjPS4z396WQopHqMoPkFIwSwBzSpjMsgECGjABB7zhLMbkYVG4gpluqCIBFwrqhYO8M34VGhpQYhcqjbuHhDeys1soBdMpaG6lOuiSGoZ8TmW8wOXuLaKdHagNpLBKiyeVTntfZ6rArlgDVzOQl89d4rYBK%2FUZbD%2BpJC%2FbNvI8CdrXZoHLmniDEKmm%2BIAVYysyhgOQZvP0h5NitaVTRZbSDS5n%2BC7VhMPGxPUX%2B0SnN1Tea9QOiUYyl4fHkJ2EccB6j%2FBjMgPG9Tc7FjaYkes7ku98eV0m1G2%2FhDm9FIb6MxVDZGJB01YjLs5gwMzxHFS7qJO8GaocDAkH9ronUZZQw49ZdhPusgnDOP2OXRdEAIMNGOisoGOqUBkYN5FmpLNIVCCyBJHOu2qQVHPftQpEeaZw43TpUdg3xVEw5L%2FRgxBiFOlDLkKJGXjgsmz3bFiQl%2FsIN60FuVJeR%2B99gPrkdG%2BTP0l0GmFV9qBYUI82SLE3D5S0Pbqu7uS9ftivD11fe9Mce0z3rYAJDFCH1zHKFJczS7HKmr6WUU3No0IfKXLwzgvpe328FNrNWBlmDF%2FsnUY5PJijZdF6AspKVs&X-Amz-Signature=95a601cdd56dad661ac56e059f4c2fdaf3557f0acbece98f8f320a18a4b7beaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

