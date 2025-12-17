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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAMARXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr5gFPrOBMSxghWlidsT9CxPFPxqZ%2BpkEN3qGyFDsjwwIhAJy8V1HYOWiKuSKJNQkE37OdgOplNor6FraSYaA9LHnlKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbeOgYgvdLfRDZUS4q3AOLRHGpvBQLDKhkPdJWUEoA62P0qukKgIBg%2BeewnP8XlhO5O2mhc4%2FPkOoRBtnVC8x49MegxXokrTEIsykksAHbqNH6ZFXWdmUeUGUtlUbxDk2I%2B0c7PWAwcf7cwqq%2FA%2Bu%2ByisDvaAi18gAHviUCrehKB3kJLrWjiVPqKPJqpyJZV0suKPpRnPfpVZIYxrOIOP5e%2FdQN%2BWlvKcAjz4%2FCpSib5lBeju%2BfLJr9fZYza47fdy%2Bb2m2tmkurrTfxZuRz2XPYzsnCn7EErUvDuW8kL5Kf2XLF38OWv9LL2QC6p4sGtywRBEuuv3WLuQeDg5CErbBtTpPQ1P90hZklCPFmJgTTvWPazK%2FAm6QMOwcwZjcyPKrx9g5ijkAuFjKgUuV9np2%2B4BLhWWK5L7WlKjHYuRoJzb6LSPiUNvmFWQd5mkkbMzWUc6ijzZ7Qn83Q8vFJVsR0CqZymcOaibU4inmgL85pO1ZHl08A1sFjT1MsHnT%2Ba5KRBqMeliSmJB9dL7VndI1G9F%2ByRiIw1riV0hYDEDg9lQJgILX0x7QizKiOw5AY10c%2BCHJoS%2BBxZXaazXrRvvB%2Fe8rN2R9q5V2rA4%2FnT3WatFKtKap2GHNBSX7G3IhXMNQZWTLuva6KrnvoTCR6ojKBjqkAX5Q0%2F6CAYNd70hmJFz8masi%2FAK1O0dq2BL62AWnqgn2GpQcBY%2Fojzze8SZLH67c1E0rPNaJOeIrbhTEmusYholt8GXMvwprwi7UIKpSNB8QovY%2FY0QYW8DgC4iMGNebPC5%2Bu141AoQhvek3%2BmnuX1VJdBISxgBF5zA%2FHafr2XguXOOfLof7Qc%2FPTNBgfbEU%2BB7QPRkMvm95jCy8TeKqaHgVVFqw&X-Amz-Signature=e9ad1217dc47f4d8f75edf4e51e916fca005288854bcebe65e5009f6b1b35345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAMARXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr5gFPrOBMSxghWlidsT9CxPFPxqZ%2BpkEN3qGyFDsjwwIhAJy8V1HYOWiKuSKJNQkE37OdgOplNor6FraSYaA9LHnlKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbeOgYgvdLfRDZUS4q3AOLRHGpvBQLDKhkPdJWUEoA62P0qukKgIBg%2BeewnP8XlhO5O2mhc4%2FPkOoRBtnVC8x49MegxXokrTEIsykksAHbqNH6ZFXWdmUeUGUtlUbxDk2I%2B0c7PWAwcf7cwqq%2FA%2Bu%2ByisDvaAi18gAHviUCrehKB3kJLrWjiVPqKPJqpyJZV0suKPpRnPfpVZIYxrOIOP5e%2FdQN%2BWlvKcAjz4%2FCpSib5lBeju%2BfLJr9fZYza47fdy%2Bb2m2tmkurrTfxZuRz2XPYzsnCn7EErUvDuW8kL5Kf2XLF38OWv9LL2QC6p4sGtywRBEuuv3WLuQeDg5CErbBtTpPQ1P90hZklCPFmJgTTvWPazK%2FAm6QMOwcwZjcyPKrx9g5ijkAuFjKgUuV9np2%2B4BLhWWK5L7WlKjHYuRoJzb6LSPiUNvmFWQd5mkkbMzWUc6ijzZ7Qn83Q8vFJVsR0CqZymcOaibU4inmgL85pO1ZHl08A1sFjT1MsHnT%2Ba5KRBqMeliSmJB9dL7VndI1G9F%2ByRiIw1riV0hYDEDg9lQJgILX0x7QizKiOw5AY10c%2BCHJoS%2BBxZXaazXrRvvB%2Fe8rN2R9q5V2rA4%2FnT3WatFKtKap2GHNBSX7G3IhXMNQZWTLuva6KrnvoTCR6ojKBjqkAX5Q0%2F6CAYNd70hmJFz8masi%2FAK1O0dq2BL62AWnqgn2GpQcBY%2Fojzze8SZLH67c1E0rPNaJOeIrbhTEmusYholt8GXMvwprwi7UIKpSNB8QovY%2FY0QYW8DgC4iMGNebPC5%2Bu141AoQhvek3%2BmnuX1VJdBISxgBF5zA%2FHafr2XguXOOfLof7Qc%2FPTNBgfbEU%2BB7QPRkMvm95jCy8TeKqaHgVVFqw&X-Amz-Signature=27188230522f41b2137fb02546b4e1dd0bc502fe466198f342d87ab9d9ffa14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

