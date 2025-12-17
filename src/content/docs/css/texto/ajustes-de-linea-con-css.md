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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYZ2WQO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSRPqddBHLT9ifdxe47rdQD5FThFnKKBIcjcDUO%2BzkAIgWjMRghg1Si68uOXDcBodCh5h5i86pKoeY6Pg3Ss3cngq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAWBRXesspAL911rzyrcA1KPCDyYCPNo6NDUxnUzBgGYAk6HJZ3H9%2BEPisKtvHb7Xz3a6aJYGlpOCN9x%2BiuitBIU4cGf0NPG7nuiEo4vESW%2FSuKx46XtT9yjxcCXZHAdGWqyBX4Jrj5zDTxQnlD5Zr9kOv3qfvd1537uXD4bOf6wStLHJ2lI22m2zZZ1Qv16KXML8AG1vCm%2BU4eQgDx0AUSC8fBMUxu7rOeghNSZOLFV%2BukyOxI2YLloGRPORvUEyEMvdnUKZFxDrUPwPP82hwvwSw9haazRHCfCHcLOWEiGSRVPuY1V4rsm3VlGMa7CmefOrfEepWjqgQNHmvNbhTW%2FJWkaLCaMTjFvAjH9n6g1FSHDRw%2B7YFP6DR3lSQZBrn%2ByByeoIGVU4HMBcx%2FAc5v0Dm6%2FuImuXGwPcC5eQvjhO3Ux1OY0VQPe8g0aof%2BCKhOYgF%2B39Dpi0rAyljnDqjot%2Fs2cw56UeaTshI47GpGBxGFw1d75vty5wTMfwcrAjigva5FX%2FRD4%2Bq9vR%2BZWShFneITyeNYhEErYFDY1T04inb4yn62x7h3OTC0xA0pj31JJdIqylP35ds8S3uYewPmDYiLd8jXtGDZKHQXgtXgrTsiFrMXDuluTU8PN5qCDfaOLILGg%2FY9bGAd0MJ%2B4icoGOqUBG2r54F3bRqSO9Yvqx3fW9lUC2sHH9PFG6kvqhzfVtojdsA3rwddXB9Yd1zRgc9BVS4rUuFvC7UgKdsHU894CbfErK7lPiqN0GhLnWi%2BibaC4z97s9ATPg6PksooFOLPW19R4Vuok9s35cbYKEZs8QyeTHMHogRWHWe5AZ1GF5ZR57iBQiyp0cP7ZF1a4AchZ3qbZHhnWpGFVQr0T1gsoVhsGZ7fS&X-Amz-Signature=f7b7b18be6ad8cfccccc91c11c1de1ecd5d683f354e037bd533fe0d6bd33e8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYZ2WQO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSRPqddBHLT9ifdxe47rdQD5FThFnKKBIcjcDUO%2BzkAIgWjMRghg1Si68uOXDcBodCh5h5i86pKoeY6Pg3Ss3cngq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAWBRXesspAL911rzyrcA1KPCDyYCPNo6NDUxnUzBgGYAk6HJZ3H9%2BEPisKtvHb7Xz3a6aJYGlpOCN9x%2BiuitBIU4cGf0NPG7nuiEo4vESW%2FSuKx46XtT9yjxcCXZHAdGWqyBX4Jrj5zDTxQnlD5Zr9kOv3qfvd1537uXD4bOf6wStLHJ2lI22m2zZZ1Qv16KXML8AG1vCm%2BU4eQgDx0AUSC8fBMUxu7rOeghNSZOLFV%2BukyOxI2YLloGRPORvUEyEMvdnUKZFxDrUPwPP82hwvwSw9haazRHCfCHcLOWEiGSRVPuY1V4rsm3VlGMa7CmefOrfEepWjqgQNHmvNbhTW%2FJWkaLCaMTjFvAjH9n6g1FSHDRw%2B7YFP6DR3lSQZBrn%2ByByeoIGVU4HMBcx%2FAc5v0Dm6%2FuImuXGwPcC5eQvjhO3Ux1OY0VQPe8g0aof%2BCKhOYgF%2B39Dpi0rAyljnDqjot%2Fs2cw56UeaTshI47GpGBxGFw1d75vty5wTMfwcrAjigva5FX%2FRD4%2Bq9vR%2BZWShFneITyeNYhEErYFDY1T04inb4yn62x7h3OTC0xA0pj31JJdIqylP35ds8S3uYewPmDYiLd8jXtGDZKHQXgtXgrTsiFrMXDuluTU8PN5qCDfaOLILGg%2FY9bGAd0MJ%2B4icoGOqUBG2r54F3bRqSO9Yvqx3fW9lUC2sHH9PFG6kvqhzfVtojdsA3rwddXB9Yd1zRgc9BVS4rUuFvC7UgKdsHU894CbfErK7lPiqN0GhLnWi%2BibaC4z97s9ATPg6PksooFOLPW19R4Vuok9s35cbYKEZs8QyeTHMHogRWHWe5AZ1GF5ZR57iBQiyp0cP7ZF1a4AchZ3qbZHhnWpGFVQr0T1gsoVhsGZ7fS&X-Amz-Signature=525099093341895b0756deacd3ceae780c2d0f7fdabaf26ca3af97367b927fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

