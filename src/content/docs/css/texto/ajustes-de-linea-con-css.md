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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQ2T6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYPSDoRYpYx%2F%2BzPB6k8ZJVU53hpqyvuGlAYB%2FQuRkbwIhAOFGiUUE9kYX5vRsBcq8fn6ZH6jO1xSmvVthmlfp%2BmG7Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyLA7KG5g4Vbq8jg%2Fkq3AMh0bRrbctiVLsI%2FmGZNh5Os%2B7hMPwih%2BMpIbU6%2FiU1FiOKMxEFSLWVglGqDuvozxOIVazRrqFeMp%2BcmM5bSgXu%2BvjAeX9NiJfY1EPAk%2F9IgUmVCPem7ib4i%2F3VqsH2CuHoBb6heiPcnsztg2snYt8dn1km7ZjFnXfbyQ4w5jaVsXUUVdkXDzmc%2FpVod9IKTTGZIgaOT8UNtEfxiR7pqMcUR7njZNrj9dBxsvZbxaU7UkClubHsmLLDGp4bWyuKWLkvmMcNzDH%2Fekb4kopZCIlp0ANzDDB%2FiSR0mqYfsOl85AeiHO0VZopbGXmlsxZdFy%2BykeHVyPUh92arzY4AgWSeWwly8FPswErlcfMKtbfESAm5h6kFCKVnxCxxGe8leglEnMvkkcHN6hehNjK3Inscp9KLE4X55xVAN5B4calQvHdTG%2Baxf2T1pjNFeqIdCZzOylFXpN%2F6wqxoIVbW%2Fu7wM%2B62Bjjm4H%2FYsaDR8TEPBicmGFlOjTk2tY8qzUpGlccFEAf5OwPddAYmhW8yH2qlZsZorrs2h52noccPfLl%2FbLvIyk8r222HyxjJG82XB3UEAelIZRc3ivjbG6J8cpAYL1orKPUpt6t06zBX4EFbkunBnEzKhdsvkTvptTC4xorKBjqkAYUtNrBVFBxfDydNTweqe74Esb6coGLoWsSvkmlv9QHobRjQ9Hl3S15Nr44FYIdwXJ3YjKECDtUS9go6Xf6wro4%2BMg8SzCrxczc2AdsKpbDBFY1agK9Lu1GFOjfnY%2FgheJrLYaKqfHZUXlYx6kwaDO8qa4LYqmgLClxdr8oPMXUMGCzEtB2dygHW7h7kw%2BHwVIIhMtTTKRWC6ToY4ENXCN%2B7kzvH&X-Amz-Signature=2a75b04511fd2e479563b472af943eec008d2386d130f5bad13fe88e8e2f9244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQ2T6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwYPSDoRYpYx%2F%2BzPB6k8ZJVU53hpqyvuGlAYB%2FQuRkbwIhAOFGiUUE9kYX5vRsBcq8fn6ZH6jO1xSmvVthmlfp%2BmG7Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyLA7KG5g4Vbq8jg%2Fkq3AMh0bRrbctiVLsI%2FmGZNh5Os%2B7hMPwih%2BMpIbU6%2FiU1FiOKMxEFSLWVglGqDuvozxOIVazRrqFeMp%2BcmM5bSgXu%2BvjAeX9NiJfY1EPAk%2F9IgUmVCPem7ib4i%2F3VqsH2CuHoBb6heiPcnsztg2snYt8dn1km7ZjFnXfbyQ4w5jaVsXUUVdkXDzmc%2FpVod9IKTTGZIgaOT8UNtEfxiR7pqMcUR7njZNrj9dBxsvZbxaU7UkClubHsmLLDGp4bWyuKWLkvmMcNzDH%2Fekb4kopZCIlp0ANzDDB%2FiSR0mqYfsOl85AeiHO0VZopbGXmlsxZdFy%2BykeHVyPUh92arzY4AgWSeWwly8FPswErlcfMKtbfESAm5h6kFCKVnxCxxGe8leglEnMvkkcHN6hehNjK3Inscp9KLE4X55xVAN5B4calQvHdTG%2Baxf2T1pjNFeqIdCZzOylFXpN%2F6wqxoIVbW%2Fu7wM%2B62Bjjm4H%2FYsaDR8TEPBicmGFlOjTk2tY8qzUpGlccFEAf5OwPddAYmhW8yH2qlZsZorrs2h52noccPfLl%2FbLvIyk8r222HyxjJG82XB3UEAelIZRc3ivjbG6J8cpAYL1orKPUpt6t06zBX4EFbkunBnEzKhdsvkTvptTC4xorKBjqkAYUtNrBVFBxfDydNTweqe74Esb6coGLoWsSvkmlv9QHobRjQ9Hl3S15Nr44FYIdwXJ3YjKECDtUS9go6Xf6wro4%2BMg8SzCrxczc2AdsKpbDBFY1agK9Lu1GFOjfnY%2FgheJrLYaKqfHZUXlYx6kwaDO8qa4LYqmgLClxdr8oPMXUMGCzEtB2dygHW7h7kw%2BHwVIIhMtTTKRWC6ToY4ENXCN%2B7kzvH&X-Amz-Signature=10421d450ea50448f5aa61272a5b93536726b633ed4f445862d3f2bcebb78170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

