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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYCMTGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKTEeLV%2F8mickkGnt0C%2B2gy1QpZNLozNdJ0ApbAFHNLAiEArt9eMYjl5rQMEEHIY%2FQl6OtihO34g0bmyo0bZb3pfuYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDWPRjoUmHeoEPhR2SrcA1g1E3hZRChYBzPcUawDnQiuCMd6Fp%2BG4lPdhzdXbhd%2FA9XhfKqYwyhvcFJGkvaHcZJ0fDVIZM%2BPDjsxQshqPbgBoIy77lbgc0Z548O7i8xdWZ484ULh7f%2BJg9cRo3Vdx0H1FCQ2caUuysxFFhShdw03Mm10Y6yh16FHiEndnAdELHOOcm1oImOwg%2BK7S33z6x%2B0tWAikrf2wvYmuYJUMQM9QRMCfzL25JIjRFosBa4iTxq9d8arJKpkrOcJJlhUucE4kTQF6fnXtlunbacpJfEmgRpttfbbS6mozfF5iU0G9zJB7h%2B9yx2I6glVjwnrNWOcfRppogsaaCoNAqpVEMOdq0ZF1UnZx4IzkAZe8dKpA2ZUm9MnMwQNmQiDmYNJtU2qr25tp6qtA9UTBYMZ2v0nY0OF3rtjBbXfZU7l4aOpGqtan2NAMGnMO9YttYDRaCJdL9I9Lmc%2FEbZzN8I0yFFAlsCkzsIPcrJPb9nFZxiqspX9UMQzxMgEn1JIM2fMvinJj1dogoVvxyIhjCgECOfivorbyQ0cA3k5MnsI9gEUf%2FNHv4gn%2FRKqGx9PBsH7bLfR%2FlMiDMqEvKcKIM7I%2BT7%2Bg8b7l%2BpuoN87VDIRbeoZ0tB0%2B0Y5WFOiGBk6MPm3icoGOqUBs0VM6Du52UlgTXVWwncCim5sGVGtUAFZEHyqm1g3eAjUkMPuN5TwW4XVhdOww7UMY8OzHUxfPR%2FMpRPaDJMSlRt%2BQ4isNYf6aFBB9fSPpRGWxj78NuEiw7puWCXcixu5FA9sylrsN9so%2FgFrGWopIbzCWT14MHJ%2FvnO5pbiIMRGZz%2FPm7j2FSkRL4PCCokiD5Shy2MxJNtcoGRG7CF2CmygkFtLs&X-Amz-Signature=118e4eef7c4d492d812824ba87c43436f8d442b34c706b7e3e345455e8b2ce71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYCMTGL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKTEeLV%2F8mickkGnt0C%2B2gy1QpZNLozNdJ0ApbAFHNLAiEArt9eMYjl5rQMEEHIY%2FQl6OtihO34g0bmyo0bZb3pfuYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDWPRjoUmHeoEPhR2SrcA1g1E3hZRChYBzPcUawDnQiuCMd6Fp%2BG4lPdhzdXbhd%2FA9XhfKqYwyhvcFJGkvaHcZJ0fDVIZM%2BPDjsxQshqPbgBoIy77lbgc0Z548O7i8xdWZ484ULh7f%2BJg9cRo3Vdx0H1FCQ2caUuysxFFhShdw03Mm10Y6yh16FHiEndnAdELHOOcm1oImOwg%2BK7S33z6x%2B0tWAikrf2wvYmuYJUMQM9QRMCfzL25JIjRFosBa4iTxq9d8arJKpkrOcJJlhUucE4kTQF6fnXtlunbacpJfEmgRpttfbbS6mozfF5iU0G9zJB7h%2B9yx2I6glVjwnrNWOcfRppogsaaCoNAqpVEMOdq0ZF1UnZx4IzkAZe8dKpA2ZUm9MnMwQNmQiDmYNJtU2qr25tp6qtA9UTBYMZ2v0nY0OF3rtjBbXfZU7l4aOpGqtan2NAMGnMO9YttYDRaCJdL9I9Lmc%2FEbZzN8I0yFFAlsCkzsIPcrJPb9nFZxiqspX9UMQzxMgEn1JIM2fMvinJj1dogoVvxyIhjCgECOfivorbyQ0cA3k5MnsI9gEUf%2FNHv4gn%2FRKqGx9PBsH7bLfR%2FlMiDMqEvKcKIM7I%2BT7%2Bg8b7l%2BpuoN87VDIRbeoZ0tB0%2B0Y5WFOiGBk6MPm3icoGOqUBs0VM6Du52UlgTXVWwncCim5sGVGtUAFZEHyqm1g3eAjUkMPuN5TwW4XVhdOww7UMY8OzHUxfPR%2FMpRPaDJMSlRt%2BQ4isNYf6aFBB9fSPpRGWxj78NuEiw7puWCXcixu5FA9sylrsN9so%2FgFrGWopIbzCWT14MHJ%2FvnO5pbiIMRGZz%2FPm7j2FSkRL4PCCokiD5Shy2MxJNtcoGRG7CF2CmygkFtLs&X-Amz-Signature=430ccadaf405bcec8c0153a72d32be0a5b2cc2960130e384b87e12623cdb86be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

