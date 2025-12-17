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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSLNUQN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmQtlGqKX1idOKoWFndldBfEVBPO3%2Bf5KFEl%2FQ5PW8rAiEAvv6tSy3EW0GRbDgADt%2Fq3FfuV29jcm2cbryIADmp%2FgkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxSZKaCBIC1AnO92ircA9AkeuwXSUVxjES6Oc%2Bzqg7%2BxuFJOGqgdyj0nT88q5Sw%2FgpVUfIaOH4VJlNXWysX3CQB%2F7PjZN2HIKG6wNPpHIRQPyPFdnw0%2BqzYgAZjq8rNoN8UANDp%2BKKt9TOv%2BSirebFSTPZQORx%2FDxdVStHnkrIWAmF0DprNwOpyhHnMTym68ZJKTZ%2B2NZtx2DD6TbJrHFLau45QUNn6PstJ8mD8m813SrRuYeqg72pN%2FXzfAJmAWutEKBZBLJE%2F4sSTDkTQF43h%2F4mp8%2BgCbD51lkZAEv63QBqKFCkdTjeT81GVaE5xdzdW3THV3T4aLhfYCDGxzS%2FHbJwju2TjqCWeriCxbDtxoYVwZQSmehwmsrlcmBu78bsy%2B5Ki9dILoXVmAN5OitCi4STxJLv35aU%2BlmJLm3Xy3qSfWLAD4HhlVdlbpDjPhVvXr2tDrDIWxf78B8ORvw%2F42UGPdiedEA%2BsQLpErli%2BHFaOvgh8LtVhBcVfMo92C7uudevJXuZzAFqM9U%2BxmbCUbv6tRWR8ykqtFV0SCSYHAQ5e6hcRyUrWhVGqILsB8bjS3Bb3GHIuSRFrnUdF5rWHNNJA86WxV4myFpVPzH9YRgUym4TiQ9SReiszm0%2Bf%2BuAzd8gIq%2B27a6baMOj%2FisoGOqUBbcraK9tVRQ5pVLqQlBLzHymYEMrm%2FpEgBiwhJFgkIsuBafjIP79J96livg%2BhUNRqZ078nzXF6Qrga%2F94r0h1qcwrkDCuAP%2FtzOMNPCdPJfSpzhlECNpAPicX%2ByC%2BuAgBDHi6UImT0QHRxP4xHB3MLAuf2LNlqUkzK%2FI18GQurKBstPiZ%2BVBm5O3pzWB%2B34w1XJury2r84ATDlF0wegML5LbejkBy&X-Amz-Signature=56aeb8e653cb4bffd15bbdb1d10784a1aa8a477ea4f7174f6b9f2fc9f638d515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSLNUQN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmQtlGqKX1idOKoWFndldBfEVBPO3%2Bf5KFEl%2FQ5PW8rAiEAvv6tSy3EW0GRbDgADt%2Fq3FfuV29jcm2cbryIADmp%2FgkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxSZKaCBIC1AnO92ircA9AkeuwXSUVxjES6Oc%2Bzqg7%2BxuFJOGqgdyj0nT88q5Sw%2FgpVUfIaOH4VJlNXWysX3CQB%2F7PjZN2HIKG6wNPpHIRQPyPFdnw0%2BqzYgAZjq8rNoN8UANDp%2BKKt9TOv%2BSirebFSTPZQORx%2FDxdVStHnkrIWAmF0DprNwOpyhHnMTym68ZJKTZ%2B2NZtx2DD6TbJrHFLau45QUNn6PstJ8mD8m813SrRuYeqg72pN%2FXzfAJmAWutEKBZBLJE%2F4sSTDkTQF43h%2F4mp8%2BgCbD51lkZAEv63QBqKFCkdTjeT81GVaE5xdzdW3THV3T4aLhfYCDGxzS%2FHbJwju2TjqCWeriCxbDtxoYVwZQSmehwmsrlcmBu78bsy%2B5Ki9dILoXVmAN5OitCi4STxJLv35aU%2BlmJLm3Xy3qSfWLAD4HhlVdlbpDjPhVvXr2tDrDIWxf78B8ORvw%2F42UGPdiedEA%2BsQLpErli%2BHFaOvgh8LtVhBcVfMo92C7uudevJXuZzAFqM9U%2BxmbCUbv6tRWR8ykqtFV0SCSYHAQ5e6hcRyUrWhVGqILsB8bjS3Bb3GHIuSRFrnUdF5rWHNNJA86WxV4myFpVPzH9YRgUym4TiQ9SReiszm0%2Bf%2BuAzd8gIq%2B27a6baMOj%2FisoGOqUBbcraK9tVRQ5pVLqQlBLzHymYEMrm%2FpEgBiwhJFgkIsuBafjIP79J96livg%2BhUNRqZ078nzXF6Qrga%2F94r0h1qcwrkDCuAP%2FtzOMNPCdPJfSpzhlECNpAPicX%2ByC%2BuAgBDHi6UImT0QHRxP4xHB3MLAuf2LNlqUkzK%2FI18GQurKBstPiZ%2BVBm5O3pzWB%2B34w1XJury2r84ATDlF0wegML5LbejkBy&X-Amz-Signature=11425cbace454712bc9c1f393d91198784b4db7b35bbef8424756bc8de7a9603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

