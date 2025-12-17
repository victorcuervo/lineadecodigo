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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEK7LAUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV2B8dPZTNpj3TNz9J5uZLM%2BGM0ywPdpbC6NcP4kdvlwIgftWUuf5jXlO5ktKBh8ugO2wztusurIDvCQ0osbMx6kgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfaOXOH4QLlejkElyrcA3M81jrcF2imHN5O8N6R%2FoZPr1Mc3s2ZXIKxwbLrbY0IpFXDsXJAOmKT7SBr6qxVmhEIm1bTcsQD2PX0B5ckWO93iaQuDa9cOyhLg3ZkWHloyXYevGby%2F8FM6U4j%2FzADso8csPz35BtN1FUAZWz6KR18UGjI4outrM9iYWnZOzhvwfOin4bC7DXtsR8c1I2YPMtawe28%2FzwDl6e8PQ6S%2BcPJ3NA3bek5KER1XpM32MwY43zjiBkUoJdATXZS4%2B%2FT1rkoiLhKJ3IStO6bfV%2FGVlLHVNJCCmR7rhE6BcAbb2uy9gE6iVjku3BbK6uSb2i7eW8OknmS%2FTqstNGrCTakmFywEIMSHtQOoCBSM5DuLUHaHa88ya163S4Om8MyOsqwEG5pk7vubSc8g1xv3AmHhxJhm%2BQuavaAFzJun6aOCtsAfxpGlqv7HL2UoaUOJv7TeDTCNlUYumXNnLtUQRq10uNVLZdDuL09x0Az3MggFJpHgz0tou2cR%2Fxe47Na9x3RIy%2F3SvHylNrzrmlCHOJjbyjTpKs7c6nvZCMZu2f%2FQAKiXjaMn%2FvMkgraCrPM3G7Ffzhr5Kps0R77V5xox63U6H4hbHx5263EzqQG%2BOICvlFO41noy0vQleeY5FJyMNT%2FisoGOqUBI1nnjsv6GJAwhUnuGKHTLs2DLUOzUh9v1eX6XQky8qSHufCzFEOvwevqKWW%2B7c26ME12ssk3K3nyYtFxHDOmfrLRlhsBxkrBN9ujKzoP2uDxBVnlwqEYeMR%2FGr4VF0BtK%2Fhha2utAR7BQqe87zyyeUUWXagA1sxQMEXcAvJKyCz6uXgSFuLQKg3o11W8s1E2YaW646TbGECEMCpC%2B8pT0si4Vf0v&X-Amz-Signature=ee83648fcf689d92d6e654502c6b2c10a726d838515af7e76e4adce256a4c54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEK7LAUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV2B8dPZTNpj3TNz9J5uZLM%2BGM0ywPdpbC6NcP4kdvlwIgftWUuf5jXlO5ktKBh8ugO2wztusurIDvCQ0osbMx6kgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfaOXOH4QLlejkElyrcA3M81jrcF2imHN5O8N6R%2FoZPr1Mc3s2ZXIKxwbLrbY0IpFXDsXJAOmKT7SBr6qxVmhEIm1bTcsQD2PX0B5ckWO93iaQuDa9cOyhLg3ZkWHloyXYevGby%2F8FM6U4j%2FzADso8csPz35BtN1FUAZWz6KR18UGjI4outrM9iYWnZOzhvwfOin4bC7DXtsR8c1I2YPMtawe28%2FzwDl6e8PQ6S%2BcPJ3NA3bek5KER1XpM32MwY43zjiBkUoJdATXZS4%2B%2FT1rkoiLhKJ3IStO6bfV%2FGVlLHVNJCCmR7rhE6BcAbb2uy9gE6iVjku3BbK6uSb2i7eW8OknmS%2FTqstNGrCTakmFywEIMSHtQOoCBSM5DuLUHaHa88ya163S4Om8MyOsqwEG5pk7vubSc8g1xv3AmHhxJhm%2BQuavaAFzJun6aOCtsAfxpGlqv7HL2UoaUOJv7TeDTCNlUYumXNnLtUQRq10uNVLZdDuL09x0Az3MggFJpHgz0tou2cR%2Fxe47Na9x3RIy%2F3SvHylNrzrmlCHOJjbyjTpKs7c6nvZCMZu2f%2FQAKiXjaMn%2FvMkgraCrPM3G7Ffzhr5Kps0R77V5xox63U6H4hbHx5263EzqQG%2BOICvlFO41noy0vQleeY5FJyMNT%2FisoGOqUBI1nnjsv6GJAwhUnuGKHTLs2DLUOzUh9v1eX6XQky8qSHufCzFEOvwevqKWW%2B7c26ME12ssk3K3nyYtFxHDOmfrLRlhsBxkrBN9ujKzoP2uDxBVnlwqEYeMR%2FGr4VF0BtK%2Fhha2utAR7BQqe87zyyeUUWXagA1sxQMEXcAvJKyCz6uXgSFuLQKg3o11W8s1E2YaW646TbGECEMCpC%2B8pT0si4Vf0v&X-Amz-Signature=670b32c645481d485ac9503dc246493cb46e4e8711a28afbbb73799a42dfe77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

