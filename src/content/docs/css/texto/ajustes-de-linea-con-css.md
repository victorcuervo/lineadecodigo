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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PMNS6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3O6S%2B%2Fi2vQLkHNZwd9VHGEo4Jwd4gcyQIvksSDnqBwIgXdkNceVPfcynTSxgTmfjTjl3q9LyoXgBIIfr1IV9RC8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD67OZwSrxeS474Q1SrcAyTujQx9HhKAjfAtXB%2FprEollWasrYUlKa%2Bheet7IihSlp0JhkJkvZ5ZM4Ecr2sAzXoPV42vEs6MYNUJ8a1QY2NLMG%2FPUrn%2BrZO87f2%2BcVzdBCVnroHr6VGHzb24D4bgS%2B2oI990SZi13HLmfIZUNWG%2Bm2kBXlE2Dzml%2FUynEOVNDbm77uTPmVkTvh8aSOeNOAuYU5XnxMMvmyR4sbPraSx6tGR%2BazfTk3dHPa63UpAFAeJ62TIyU2ViCB8tzh8XJ1qa1jwbQ3sqaTWXTUgF6EGEk0vLWKSmIPo2j%2BgRsz8NO33b%2BevQEbextIkKG%2BDGbJ2sZaf1KHyclO4rkrWXB9G4Yw4nJqmXBU5Xp9SOlnz8BF21uYydPt94RqUqWYWo%2BcZI1pM89fwIcJyysuG8GHLnfsEiuXYHu10ylB3ApcwvX%2ByQrrlYfAsW%2FUmRZ87jJXSGuhqBIYpKWTxjSgvqgG2nBvpHgq%2BlsZ0v%2FfcXyaIUTfxK9d8vk63QvDhD%2BiH4qUiKSK%2ByhCjfop%2BL4flt0RpQILSeWD8F3kj6Cpoim76xRohzeCRckXUvfo9cjFGjacfnRB8IKtSlUBfwOVgTObaKQLSW7WD1JscCNbPFVOjbSRb8H30qwnE97mJSMI6ujMoGOqUBfy4d0NvWbCC0GjcSoGkzY7LHogSnO98NlAOpCReAvNhKtTl7j%2Fe%2Fkm1TniouiLJdqlDORm6M7LVEsUrSSJYHrluH9jqLxmGk37h5ayMAhw9EJ4Ai4tDsHusHY7OucwcqFsmN1R7M0cfSUz%2FQfHi2EsTDJNO4X5v2fMy82eM%2BAy2Jo5xv7M8hMLrCKBLCWg7iXPJhAk9LhP%2BQV5yksZL4ddP7fzEB&X-Amz-Signature=d95d9d674de81a686f0b2f4fdc72ff055d35e19f82c0e11b6b44153162810bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PMNS6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3O6S%2B%2Fi2vQLkHNZwd9VHGEo4Jwd4gcyQIvksSDnqBwIgXdkNceVPfcynTSxgTmfjTjl3q9LyoXgBIIfr1IV9RC8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD67OZwSrxeS474Q1SrcAyTujQx9HhKAjfAtXB%2FprEollWasrYUlKa%2Bheet7IihSlp0JhkJkvZ5ZM4Ecr2sAzXoPV42vEs6MYNUJ8a1QY2NLMG%2FPUrn%2BrZO87f2%2BcVzdBCVnroHr6VGHzb24D4bgS%2B2oI990SZi13HLmfIZUNWG%2Bm2kBXlE2Dzml%2FUynEOVNDbm77uTPmVkTvh8aSOeNOAuYU5XnxMMvmyR4sbPraSx6tGR%2BazfTk3dHPa63UpAFAeJ62TIyU2ViCB8tzh8XJ1qa1jwbQ3sqaTWXTUgF6EGEk0vLWKSmIPo2j%2BgRsz8NO33b%2BevQEbextIkKG%2BDGbJ2sZaf1KHyclO4rkrWXB9G4Yw4nJqmXBU5Xp9SOlnz8BF21uYydPt94RqUqWYWo%2BcZI1pM89fwIcJyysuG8GHLnfsEiuXYHu10ylB3ApcwvX%2ByQrrlYfAsW%2FUmRZ87jJXSGuhqBIYpKWTxjSgvqgG2nBvpHgq%2BlsZ0v%2FfcXyaIUTfxK9d8vk63QvDhD%2BiH4qUiKSK%2ByhCjfop%2BL4flt0RpQILSeWD8F3kj6Cpoim76xRohzeCRckXUvfo9cjFGjacfnRB8IKtSlUBfwOVgTObaKQLSW7WD1JscCNbPFVOjbSRb8H30qwnE97mJSMI6ujMoGOqUBfy4d0NvWbCC0GjcSoGkzY7LHogSnO98NlAOpCReAvNhKtTl7j%2Fe%2Fkm1TniouiLJdqlDORm6M7LVEsUrSSJYHrluH9jqLxmGk37h5ayMAhw9EJ4Ai4tDsHusHY7OucwcqFsmN1R7M0cfSUz%2FQfHi2EsTDJNO4X5v2fMy82eM%2BAy2Jo5xv7M8hMLrCKBLCWg7iXPJhAk9LhP%2BQV5yksZL4ddP7fzEB&X-Amz-Signature=9bba1c841b648cb08fb38cc3e2326fc5d91aa05af433c9af74eb1aeaac262662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

