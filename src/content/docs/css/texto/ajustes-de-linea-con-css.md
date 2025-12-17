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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RW2UBRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FbhXFqVGdIkslm8Ucp5xPTbIf3EKtUDSzoYA%2F1eHCbgIhAKOh2Q6Px4NLK3yIHZoOQ6j%2F2E1dEUTjuht2rpLT%2Fme2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3XhM4qlYhX80APw4q3AMtVQ9P2qnpZ5zDbj1FjH6eZe5b5sb4ANk2e2DfkuLCOO56h8me0y%2B0SAZZf%2BcWgockjUi5NciEmpwdTKqWm3z1Hqfnj%2FoOgE54un0LM%2BQUv7Ml30V%2Bpwq6PoVFC%2BApHlvZRySvBJswc1yJ2Tdho6mbtaJ%2BLX0i5aDsJaNT%2BGl7BB0MSLblsT75A%2F4ha%2BD3m658kODYtlD0XdiPpBl6m0pkxTgxNSdLurZBzLRerJK6%2BnNEbSvKyOnltxfNpNzes1o3olTOusnohBctLLMMtcB6nudGO3g0PgsUfmTh%2FNTRofGl0GCVtkPwude3XrjZM%2F1MdLNJF%2BUsCn9BrkrjIINz99wOAWrIQNTZwRT5nIetitxMH0G8ILm%2FNi8OvkFVVMEOpAWWkZjGTNy0Dqu6HQyEFj7WvfnvO10zKh%2FEdqoNkJ3%2FcTBliNoZHyA12iPBQM9HpXb1m2Az2Nv%2BrbW9jnpF4CyBg4zZhbFOwhyi%2BJiWtxZUGuxtfh%2FcU0P3Y62XEtwH8vj9NlY7ORBDsvtp8qtqL2FYKfDiqlQ3CTnmy8RX6tS82omznT1ZqQbDJqNxgOnISR8xQgDJKY7uwVViEvGv0vwP958CQTYv%2FC5loitG0nBwmIgABdgfHLe2kDCygIvKBjqkAUgpSZZ4bcBuexq56p8Zlrtd%2FNaWWvqs%2FJAU8bL0vPaAcADgk2asP9jXGKNcIHewhRVm2SOY7mqfUVVNjN%2BAfh2YGu4gY7H%2Bejz1ZlUkU4C5xSWDh1Ot%2BPN%2ByXgBkhUntKXiBQbBmgLAfzQyty665ddfE7aLYLJ8frCZnlB9X9hWpNMUoN2PzWVMLXY%2Fe6MESyWX4Caku3UVAJh6uT9lSUSt7WIy&X-Amz-Signature=9863ca8b9135d98e48b13fdbcd75762d2497c1812b286237ef35c2ff5d34b2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RW2UBRX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FbhXFqVGdIkslm8Ucp5xPTbIf3EKtUDSzoYA%2F1eHCbgIhAKOh2Q6Px4NLK3yIHZoOQ6j%2F2E1dEUTjuht2rpLT%2Fme2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3XhM4qlYhX80APw4q3AMtVQ9P2qnpZ5zDbj1FjH6eZe5b5sb4ANk2e2DfkuLCOO56h8me0y%2B0SAZZf%2BcWgockjUi5NciEmpwdTKqWm3z1Hqfnj%2FoOgE54un0LM%2BQUv7Ml30V%2Bpwq6PoVFC%2BApHlvZRySvBJswc1yJ2Tdho6mbtaJ%2BLX0i5aDsJaNT%2BGl7BB0MSLblsT75A%2F4ha%2BD3m658kODYtlD0XdiPpBl6m0pkxTgxNSdLurZBzLRerJK6%2BnNEbSvKyOnltxfNpNzes1o3olTOusnohBctLLMMtcB6nudGO3g0PgsUfmTh%2FNTRofGl0GCVtkPwude3XrjZM%2F1MdLNJF%2BUsCn9BrkrjIINz99wOAWrIQNTZwRT5nIetitxMH0G8ILm%2FNi8OvkFVVMEOpAWWkZjGTNy0Dqu6HQyEFj7WvfnvO10zKh%2FEdqoNkJ3%2FcTBliNoZHyA12iPBQM9HpXb1m2Az2Nv%2BrbW9jnpF4CyBg4zZhbFOwhyi%2BJiWtxZUGuxtfh%2FcU0P3Y62XEtwH8vj9NlY7ORBDsvtp8qtqL2FYKfDiqlQ3CTnmy8RX6tS82omznT1ZqQbDJqNxgOnISR8xQgDJKY7uwVViEvGv0vwP958CQTYv%2FC5loitG0nBwmIgABdgfHLe2kDCygIvKBjqkAUgpSZZ4bcBuexq56p8Zlrtd%2FNaWWvqs%2FJAU8bL0vPaAcADgk2asP9jXGKNcIHewhRVm2SOY7mqfUVVNjN%2BAfh2YGu4gY7H%2Bejz1ZlUkU4C5xSWDh1Ot%2BPN%2ByXgBkhUntKXiBQbBmgLAfzQyty665ddfE7aLYLJ8frCZnlB9X9hWpNMUoN2PzWVMLXY%2Fe6MESyWX4Caku3UVAJh6uT9lSUSt7WIy&X-Amz-Signature=8305aba6321d9de14eac2ab2812048d547a6660d67582cb3940ef7bca6fe8f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

