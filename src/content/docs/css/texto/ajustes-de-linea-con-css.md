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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSPRVEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1SC0Li2mwdv589OdtymD5Mgc6xjsPpL4Hv8KewpW%2BWgIgbDX9sBMOPscDJ0gxnWe2bEUs4U6x8R2yGIBNyr6LS2Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDsdm5%2FnJvAbhPOj%2FCrcA8Hj3dOh3JlfqDJaAz05J5HI4hneamZXtCSLCWoy7NGP50KbW1fAhfAoD3ad51jP4dBAzGfxuuBOv%2BPbonlArgTh%2BxCWlIIuuexM6p%2B53Oh8kIiCwAHaO48UEpPXinWvaFM1VelC%2BxxmrlB%2BVV4qfSP%2FvYeyIQnRCtvtUYskglOIGLYWJVV9JdMyQQoSoWapIC75fWtaL7XI6wvlnnJEpso9siPRy8ac0uzcWT5ZiHxijwj8LFTobepg1YeTbnj1fnVsgzpQj%2BLAnqaSBuvADAEQkNQnfVuR2qaqokspNfPijoXpD78bD6i0%2BeZd1F61p%2BaDjdvwpH7TcrPKn3mU45xf0SMG%2F1QIl58N3YCNmkPSmP7Ks%2FC67jl7wXaYioIyHwahhsDp0sflAoSZ3HeG2a9NxuevTAv%2Bz9ASibhsW%2BR6e5HiK4tgl4Q%2Be5ByiSeaLws8%2BKAZyEK%2Fa9r97egeHgljVvXmYJ5Vq0NvNNp%2BNFdFTz9EIrb4Y8lggUDt1WyaLi40GfD0EHd9wNM7wl5iHoj9XkKSdyzh7dS9RpHrIx9HcnTmlu22GXtZ689TfBieRQM2xH7ST%2BN1zPN1apAvExEq17bftx7bbka0GNZmKBTfjFMaf3%2FV9yrJ%2FvdmMNayiMoGOqUBYOY7W42sSNcwIwByFRYEKIGWgYuMkkMLjZrgO4IXCZEO5s2c%2BJscIWuX82GN%2FrrUlqRiYnPig7epcJdohTLijVnXrbjCIZEkOQz4UocwyAXQhI3ttgfvBm59gszHLx4twLfF8JU4osKvEOFtzQWX5qLNdaDgpv8NzsC9T3DxqDH9ftkrOH0x%2BFajfvJPV30pMJfVNVxryoAtCZDzHLi%2BewXtbR5F&X-Amz-Signature=dd35b6e96442828620407aecd22ba8f88817d1f8f933e7cbcaf681ee658a11f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSPRVEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1SC0Li2mwdv589OdtymD5Mgc6xjsPpL4Hv8KewpW%2BWgIgbDX9sBMOPscDJ0gxnWe2bEUs4U6x8R2yGIBNyr6LS2Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDsdm5%2FnJvAbhPOj%2FCrcA8Hj3dOh3JlfqDJaAz05J5HI4hneamZXtCSLCWoy7NGP50KbW1fAhfAoD3ad51jP4dBAzGfxuuBOv%2BPbonlArgTh%2BxCWlIIuuexM6p%2B53Oh8kIiCwAHaO48UEpPXinWvaFM1VelC%2BxxmrlB%2BVV4qfSP%2FvYeyIQnRCtvtUYskglOIGLYWJVV9JdMyQQoSoWapIC75fWtaL7XI6wvlnnJEpso9siPRy8ac0uzcWT5ZiHxijwj8LFTobepg1YeTbnj1fnVsgzpQj%2BLAnqaSBuvADAEQkNQnfVuR2qaqokspNfPijoXpD78bD6i0%2BeZd1F61p%2BaDjdvwpH7TcrPKn3mU45xf0SMG%2F1QIl58N3YCNmkPSmP7Ks%2FC67jl7wXaYioIyHwahhsDp0sflAoSZ3HeG2a9NxuevTAv%2Bz9ASibhsW%2BR6e5HiK4tgl4Q%2Be5ByiSeaLws8%2BKAZyEK%2Fa9r97egeHgljVvXmYJ5Vq0NvNNp%2BNFdFTz9EIrb4Y8lggUDt1WyaLi40GfD0EHd9wNM7wl5iHoj9XkKSdyzh7dS9RpHrIx9HcnTmlu22GXtZ689TfBieRQM2xH7ST%2BN1zPN1apAvExEq17bftx7bbka0GNZmKBTfjFMaf3%2FV9yrJ%2FvdmMNayiMoGOqUBYOY7W42sSNcwIwByFRYEKIGWgYuMkkMLjZrgO4IXCZEO5s2c%2BJscIWuX82GN%2FrrUlqRiYnPig7epcJdohTLijVnXrbjCIZEkOQz4UocwyAXQhI3ttgfvBm59gszHLx4twLfF8JU4osKvEOFtzQWX5qLNdaDgpv8NzsC9T3DxqDH9ftkrOH0x%2BFajfvJPV30pMJfVNVxryoAtCZDzHLi%2BewXtbR5F&X-Amz-Signature=af3ccd5e743178d55cbf401230f4fcaa5297e14689f8fa2f1141b0bc10006d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

