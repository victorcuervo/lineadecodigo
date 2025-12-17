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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHM4CBLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYD6Re4ksleaQPEc%2BkYVKK6YgMLRxV4Uh1KSTnsqYtDgIgMwyBanVJNd0Aya7d7Au2QNx3X4c41XAho8S7tj48HP4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMl%2BAwGJJosrmx36kyrcA2Z6AHI8eTQNQLZ6kxK5EtJ74dGrEOGSRB2wMfQX422hgg7gtEC4e%2FVQmne27fMGc9PNYA%2BA4Wzmtm%2FOjW5at%2FdVbznSXi5qwyw3Txw7Hzi4RTLWqTn0ojwTnp7fzLAWb0%2F9f3GJUiXUbnsQSXR7d27lV%2FyIG7O5F%2F5EvF6CNnv5hHwUREmYnSU47MxIzW9ccJrzri3v%2BLPdq5Bn%2BPAkTIeWAFQUmdCEn5VrV1gaTmugOYmLUWgVpHu1FUjDHWI8IARvqOobcj3A7nLK%2FZ92N6qLqdFNF25HuHhThdK%2BawzLtPW3J%2Bh93y2Exzbrk7Wfs5F3RshgxvKnX8ish77p1HiSh4MvN0zY0fcarinwbRwqpV3DjJ%2FGI1E17SYKZkNlu84JvuBJ7lD9vG%2FLIaZlrtFSBOccu9CkipX39HqglbcCfakawT02GAnPUj7AP9gHq0Yay8sA%2FRE8RuH7zKnngqZwPR5586HMvmm%2Bfib7Xo%2FPv4NHCEjH5vKAJfPyAsw%2BoJHYBJMdlFTpqyGQWbspufGikC26z7mcXrK2uFkzrLYxQGPuSjWJBtbByoL6dzDPGSjw%2FVGomzneF8lNLYRIfZ1eXLRSW15g%2Ft3Y3BjodTDyS%2FxFSklojjtCv%2F5jMMeqisoGOqUBF3qn7d6pp6g61tsZF1rWlrp9rClTkl5l1uL3FkrOVL8IJMEG2IEbbfx857U1y%2BWQkTw8t7e%2BWOYi9EGhDwWX%2BMtTL8DSmbl17BJaa5T2%2BGk3u4YzvPSRdJTmDOaWyzd9O2oNLevZ7nh1dA%2FTZtAFklTbyAzluZshZDLoFC3Im3eDmPck%2FzsbGrQwR8TObbzCX2TFNnNHuhWmol1zm8gbo4xiwmE9&X-Amz-Signature=ccc509eaea65281ec3935acf5b6bb1755ac151191d4371b52ac85fe06e0a09e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHM4CBLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYD6Re4ksleaQPEc%2BkYVKK6YgMLRxV4Uh1KSTnsqYtDgIgMwyBanVJNd0Aya7d7Au2QNx3X4c41XAho8S7tj48HP4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMl%2BAwGJJosrmx36kyrcA2Z6AHI8eTQNQLZ6kxK5EtJ74dGrEOGSRB2wMfQX422hgg7gtEC4e%2FVQmne27fMGc9PNYA%2BA4Wzmtm%2FOjW5at%2FdVbznSXi5qwyw3Txw7Hzi4RTLWqTn0ojwTnp7fzLAWb0%2F9f3GJUiXUbnsQSXR7d27lV%2FyIG7O5F%2F5EvF6CNnv5hHwUREmYnSU47MxIzW9ccJrzri3v%2BLPdq5Bn%2BPAkTIeWAFQUmdCEn5VrV1gaTmugOYmLUWgVpHu1FUjDHWI8IARvqOobcj3A7nLK%2FZ92N6qLqdFNF25HuHhThdK%2BawzLtPW3J%2Bh93y2Exzbrk7Wfs5F3RshgxvKnX8ish77p1HiSh4MvN0zY0fcarinwbRwqpV3DjJ%2FGI1E17SYKZkNlu84JvuBJ7lD9vG%2FLIaZlrtFSBOccu9CkipX39HqglbcCfakawT02GAnPUj7AP9gHq0Yay8sA%2FRE8RuH7zKnngqZwPR5586HMvmm%2Bfib7Xo%2FPv4NHCEjH5vKAJfPyAsw%2BoJHYBJMdlFTpqyGQWbspufGikC26z7mcXrK2uFkzrLYxQGPuSjWJBtbByoL6dzDPGSjw%2FVGomzneF8lNLYRIfZ1eXLRSW15g%2Ft3Y3BjodTDyS%2FxFSklojjtCv%2F5jMMeqisoGOqUBF3qn7d6pp6g61tsZF1rWlrp9rClTkl5l1uL3FkrOVL8IJMEG2IEbbfx857U1y%2BWQkTw8t7e%2BWOYi9EGhDwWX%2BMtTL8DSmbl17BJaa5T2%2BGk3u4YzvPSRdJTmDOaWyzd9O2oNLevZ7nh1dA%2FTZtAFklTbyAzluZshZDLoFC3Im3eDmPck%2FzsbGrQwR8TObbzCX2TFNnNHuhWmol1zm8gbo4xiwmE9&X-Amz-Signature=d0c13f74b779dc282452adc7fc34eff19ad5f3d5805f591e4cb221747445dc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

