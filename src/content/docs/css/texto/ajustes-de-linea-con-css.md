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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDIEWRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFZ7sxg5HxtGC7DFwWHGzTFCZ1mhHAiIIsbOiigjgqzgIhAN1hvLPC5NP8D6S%2BXVSgrUaO5gTU8vAs7kwxnGC5fLsjKv8DCHcQABoMNjM3NDIzMTgzODA1IgwYq8bTcFu9R4QWXLMq3AN45bJBY09vOxstOwdtWePL%2BQiZhn6MKtjWss1V4RgQ4YeZ0q124RhaiBajsAqvcPDmr1pBxEwVBaE03HzSbQ9rB0MU%2F5E0eB8B6WwoQuq31gJyYJzKlrYOSBI%2FBZbxFQ10CagdLZo1H%2Fxq2cW4kGQ3pr25GaQ47FCgecIo8PDcUiFPryb2zoOAsjsEGCNnCz3APQLawW7mJODwOyRzp5P6IETCkbeMB4bttr1yRQer6LtIvSbx0GSzgMHfJTZspz6618Q6%2B%2FyAWaOrhJpnjWT5DUrinQP9rdte6oaNU5qRW%2FpG0RnNe0hwJygDgHF7khhJ%2FavOOOxgNUuCmYJNg%2B0QfcvNx2tqUDRarApKiX6uHJgsFLuutryniGyT25E2VUFy%2F39hpCguHHWVhDVT8aBc7SkghOAeZ%2FFbKkksCV29DHMoIhAp4ezir7OvCh6uQ%2BzLnN14iHYtT6WT%2F9GQZCvlUeC03CVvIIgHB5h9oYi9xtxMiLLNvMn2xkkygzOUmDFlCqdG%2F2tslZBDgqTaXtYNEREjZsWcZ%2FFONJLoC7S18%2BykpdTOijMAC%2FQgTuFJHwgJ%2BMwZRWvUXtBdiF6ixNOI9G9N1%2FmhEoAQStnbHX8Q2RoGm03ji%2FRhGstUCTCFg4nKBjqkAZQSuC7NX6yQFaderRx98KghdXXDM6VnhyMLcGN3zmni%2FBlUWmDUGE02agPK6HYTeyiUVNB%2F3zYB2Y7NgmBfFOqS5RrCFlzmllFglF1gMMXjlv5x6xSwJFNMwciWXlaN3ypqIEzxDcLouP7wSIk9NLBvnchdHScF%2BnTyAzLGIWJ70qBsZ73fL2Arl%2B%2BhBUGROBQad%2FXyfnhwXbr9Bw%2BId8I%2F3dSD&X-Amz-Signature=66551d08d8ab1713acb2c717bec2c2c5f3abfbb7f8479f6c52ff1014e7f04546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDIEWRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFZ7sxg5HxtGC7DFwWHGzTFCZ1mhHAiIIsbOiigjgqzgIhAN1hvLPC5NP8D6S%2BXVSgrUaO5gTU8vAs7kwxnGC5fLsjKv8DCHcQABoMNjM3NDIzMTgzODA1IgwYq8bTcFu9R4QWXLMq3AN45bJBY09vOxstOwdtWePL%2BQiZhn6MKtjWss1V4RgQ4YeZ0q124RhaiBajsAqvcPDmr1pBxEwVBaE03HzSbQ9rB0MU%2F5E0eB8B6WwoQuq31gJyYJzKlrYOSBI%2FBZbxFQ10CagdLZo1H%2Fxq2cW4kGQ3pr25GaQ47FCgecIo8PDcUiFPryb2zoOAsjsEGCNnCz3APQLawW7mJODwOyRzp5P6IETCkbeMB4bttr1yRQer6LtIvSbx0GSzgMHfJTZspz6618Q6%2B%2FyAWaOrhJpnjWT5DUrinQP9rdte6oaNU5qRW%2FpG0RnNe0hwJygDgHF7khhJ%2FavOOOxgNUuCmYJNg%2B0QfcvNx2tqUDRarApKiX6uHJgsFLuutryniGyT25E2VUFy%2F39hpCguHHWVhDVT8aBc7SkghOAeZ%2FFbKkksCV29DHMoIhAp4ezir7OvCh6uQ%2BzLnN14iHYtT6WT%2F9GQZCvlUeC03CVvIIgHB5h9oYi9xtxMiLLNvMn2xkkygzOUmDFlCqdG%2F2tslZBDgqTaXtYNEREjZsWcZ%2FFONJLoC7S18%2BykpdTOijMAC%2FQgTuFJHwgJ%2BMwZRWvUXtBdiF6ixNOI9G9N1%2FmhEoAQStnbHX8Q2RoGm03ji%2FRhGstUCTCFg4nKBjqkAZQSuC7NX6yQFaderRx98KghdXXDM6VnhyMLcGN3zmni%2FBlUWmDUGE02agPK6HYTeyiUVNB%2F3zYB2Y7NgmBfFOqS5RrCFlzmllFglF1gMMXjlv5x6xSwJFNMwciWXlaN3ypqIEzxDcLouP7wSIk9NLBvnchdHScF%2BnTyAzLGIWJ70qBsZ73fL2Arl%2B%2BhBUGROBQad%2FXyfnhwXbr9Bw%2BId8I%2F3dSD&X-Amz-Signature=a4def7b29ff4a87be8b76c03a7307926519f6cdd6c3d0d64cfdfb76acba44842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

