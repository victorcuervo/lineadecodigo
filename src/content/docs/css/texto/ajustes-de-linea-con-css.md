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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGP2SQYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuRFw%2FZcHqGP3VmB%2B9GJU2rYbtcZHMDEHNrK1YjSZUYwIhALEJfRQvT3J30e7eCsYdaargXjRig1oVxTRjwCP%2FBxjyKv8DCHQQABoMNjM3NDIzMTgzODA1IgxvGRlwEvThkTmf78kq3AOYsh%2FJyt%2B9E6rhJpygqHKzq4XusT0pOu8DLmZBmp%2BeRBY9P3zsfJyLelU3O6jon%2F5I%2BTSipiI1hOgWXbF4GelP0dRY%2F23q4VlLhZxZULjqZQSufcBTXZwEmNgLjWRejtDeRJuok638Og2dPmjyzvDXgKEJqASP%2BBJfq6FV2mtx8ShmVTB9CB%2BgHo%2BYikFvUZqFq1EUY5%2BScCV2DyWY7Af6LaUJP5WHKGJvBGtRx9H4eZ7kzjm0sWsYA1KfxBgnhorHbzSLRr5AyW8t1n0b%2FMFQEObMTVg%2B0kvzsEgh7H9gbi1YKhPExSJtxrQp1kS7dFn5rkrgizmz991tZpPW0eO1IHJZy2NJ8MXqGMxSzd6CUxmixwJvvjVD3KppKtsFlkWCNCjEDjYlOuFj1EEru9klCFtWinNg2xnAvXebAY3KqhxlwTUp23jhHzkVAxDR2IgEJxTlY%2B%2FEG0jo7cqnd6eVmIMFdPFHvUByZyd7Kc4TAB66EsE20iJN6RZMALDkNUr714zOEFDEQQtyblCv4K%2BhAzPiLNbxTH%2BvCaxljrZknlPFRp8CQGq5oJ3%2B5wUWM%2Fdzy8TiPpP51PZMgZMep3RdymMMufn410lAlcqquw1ydqu7MKNtfTorO9hpLDCJs4jKBjqkASNf30kIBFW%2FOvEsXaBF8gcaDy4H8f84Vz8ERiLvH3rYGS1oGXd9MpsDaGh6YIeNcXfUDqn0vDTFsUb1aKLfepEDRlw%2FzxAFszP%2B0Zvht6LTV4BXPqT%2Bh4XwSN26WB9vuhM6vHiZ8QPH4uJLmJTnxPWUS8YAE0u%2FQTQo2Ee%2BRyssg5KbP4%2FwRX2xodUIJZEffJz%2F6QsNfXbqdclM9Y1CNbEBztWO&X-Amz-Signature=0da1b9bfe37c3af3a3c74504fffa02017be0956c77f95bd44ab398eb22dc7725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGP2SQYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuRFw%2FZcHqGP3VmB%2B9GJU2rYbtcZHMDEHNrK1YjSZUYwIhALEJfRQvT3J30e7eCsYdaargXjRig1oVxTRjwCP%2FBxjyKv8DCHQQABoMNjM3NDIzMTgzODA1IgxvGRlwEvThkTmf78kq3AOYsh%2FJyt%2B9E6rhJpygqHKzq4XusT0pOu8DLmZBmp%2BeRBY9P3zsfJyLelU3O6jon%2F5I%2BTSipiI1hOgWXbF4GelP0dRY%2F23q4VlLhZxZULjqZQSufcBTXZwEmNgLjWRejtDeRJuok638Og2dPmjyzvDXgKEJqASP%2BBJfq6FV2mtx8ShmVTB9CB%2BgHo%2BYikFvUZqFq1EUY5%2BScCV2DyWY7Af6LaUJP5WHKGJvBGtRx9H4eZ7kzjm0sWsYA1KfxBgnhorHbzSLRr5AyW8t1n0b%2FMFQEObMTVg%2B0kvzsEgh7H9gbi1YKhPExSJtxrQp1kS7dFn5rkrgizmz991tZpPW0eO1IHJZy2NJ8MXqGMxSzd6CUxmixwJvvjVD3KppKtsFlkWCNCjEDjYlOuFj1EEru9klCFtWinNg2xnAvXebAY3KqhxlwTUp23jhHzkVAxDR2IgEJxTlY%2B%2FEG0jo7cqnd6eVmIMFdPFHvUByZyd7Kc4TAB66EsE20iJN6RZMALDkNUr714zOEFDEQQtyblCv4K%2BhAzPiLNbxTH%2BvCaxljrZknlPFRp8CQGq5oJ3%2B5wUWM%2Fdzy8TiPpP51PZMgZMep3RdymMMufn410lAlcqquw1ydqu7MKNtfTorO9hpLDCJs4jKBjqkASNf30kIBFW%2FOvEsXaBF8gcaDy4H8f84Vz8ERiLvH3rYGS1oGXd9MpsDaGh6YIeNcXfUDqn0vDTFsUb1aKLfepEDRlw%2FzxAFszP%2B0Zvht6LTV4BXPqT%2Bh4XwSN26WB9vuhM6vHiZ8QPH4uJLmJTnxPWUS8YAE0u%2FQTQo2Ee%2BRyssg5KbP4%2FwRX2xodUIJZEffJz%2F6QsNfXbqdclM9Y1CNbEBztWO&X-Amz-Signature=4f59545a3461deb9b51efada5de3fdcb47a6166293afce34efea4d0bbfbd352e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

