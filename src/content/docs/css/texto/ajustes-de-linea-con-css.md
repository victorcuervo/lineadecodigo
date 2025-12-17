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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2O3TNYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWRjO2Zy7Xx0JHNVXJvEpL41%2F4pHuWZNHoDoEpUcHvwAiEA%2FFQdkrHAkoj8MCgdqNtId8S%2BAZ9M7ZnndogLJtjZImwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGV2YFRaS51Pa1VsoyrcA8557ixGIIFKYysYcLJ%2FPq%2F5BJvx92g%2BuvJePHZGit8EQrorTRAUnsVIAQR9eqdkIsi6yCYxJeER8FqDGpJQ3yc2020GVRbXl%2BXB%2Bx18MRIHVtFGir66V%2FRt26A5Ja9vCXa9nfSvKyOLOFygyb5%2FNKG7yLPs9dFhvA5ftyhnvnEV%2Fwh6gMMb0eL7Iv2x7pWd0w%2Fpd8EdOVVmcaQWFedRkZ3iPJv6lkRdNWHM5kcKGNKKfBNWGrMnKY0KhCsy38dsskYRUHETlvG%2B3KpBtvxal7LINgkZUoDu4n7ZairBMcw5t5Pf6HMlcjbOkKmhbMpc%2B88zslX%2BCEn6pnQA35wy0nHab8b9zWn%2BTeNRmuXJMipTXqSrNGm%2FE4zqyUpzKBlJP%2Bke%2B7yTojTNfJGZ6saHQA1xNw1X53rUHnN7h5TtqIoiQZc0XuxcB59zcrMi23ShEyPeRoJAKwEM8SlyJh%2F7LXCObnliwwAOMwuHNbp5wLV5XafB9TuEcZ%2FMKaz9%2FQfmtHY1Vo6bCogEcIBBI6J6Hd0fSwJ6oYI5xuqPUDnwYmffd5Pvt2addAmxMjLFPjER%2Bj9Nd2RMA%2BMXR%2Bb%2BynLZtvnPA8HpAK%2BL%2B1KYf84yb2YThChqICb45DT1sEYnMKC4icoGOqUBY7WWsrat5i1W2Z9Pi2HNswIqCG1n%2FwrVSvXv2OdK1s9pl8eZIeTZamKXAof7PMnRLvQzf%2FQc4VNmY1pmxzer9TiQ8JtTGfb5RuabSKMNW7bTm2y5mGO97dZ0vOo0QcbUzTbiFslgeddRUPnulLojL025KmBewwRvqULR%2BbTqJWgtZEfo1m%2Byb2Rs7TxSgrIQv4z3Do%2FYJ5P5ReHiCyi9eqNHzFrO&X-Amz-Signature=def55d0364a0d33dbb967ca05e6fed748ff95a7ebf27bef49541389ab31d35c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2O3TNYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWRjO2Zy7Xx0JHNVXJvEpL41%2F4pHuWZNHoDoEpUcHvwAiEA%2FFQdkrHAkoj8MCgdqNtId8S%2BAZ9M7ZnndogLJtjZImwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGV2YFRaS51Pa1VsoyrcA8557ixGIIFKYysYcLJ%2FPq%2F5BJvx92g%2BuvJePHZGit8EQrorTRAUnsVIAQR9eqdkIsi6yCYxJeER8FqDGpJQ3yc2020GVRbXl%2BXB%2Bx18MRIHVtFGir66V%2FRt26A5Ja9vCXa9nfSvKyOLOFygyb5%2FNKG7yLPs9dFhvA5ftyhnvnEV%2Fwh6gMMb0eL7Iv2x7pWd0w%2Fpd8EdOVVmcaQWFedRkZ3iPJv6lkRdNWHM5kcKGNKKfBNWGrMnKY0KhCsy38dsskYRUHETlvG%2B3KpBtvxal7LINgkZUoDu4n7ZairBMcw5t5Pf6HMlcjbOkKmhbMpc%2B88zslX%2BCEn6pnQA35wy0nHab8b9zWn%2BTeNRmuXJMipTXqSrNGm%2FE4zqyUpzKBlJP%2Bke%2B7yTojTNfJGZ6saHQA1xNw1X53rUHnN7h5TtqIoiQZc0XuxcB59zcrMi23ShEyPeRoJAKwEM8SlyJh%2F7LXCObnliwwAOMwuHNbp5wLV5XafB9TuEcZ%2FMKaz9%2FQfmtHY1Vo6bCogEcIBBI6J6Hd0fSwJ6oYI5xuqPUDnwYmffd5Pvt2addAmxMjLFPjER%2Bj9Nd2RMA%2BMXR%2Bb%2BynLZtvnPA8HpAK%2BL%2B1KYf84yb2YThChqICb45DT1sEYnMKC4icoGOqUBY7WWsrat5i1W2Z9Pi2HNswIqCG1n%2FwrVSvXv2OdK1s9pl8eZIeTZamKXAof7PMnRLvQzf%2FQc4VNmY1pmxzer9TiQ8JtTGfb5RuabSKMNW7bTm2y5mGO97dZ0vOo0QcbUzTbiFslgeddRUPnulLojL025KmBewwRvqULR%2BbTqJWgtZEfo1m%2Byb2Rs7TxSgrIQv4z3Do%2FYJ5P5ReHiCyi9eqNHzFrO&X-Amz-Signature=ae345b783b5018e69ce89467f1ff87bca93e570c48fbb40275e046b93833c66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

