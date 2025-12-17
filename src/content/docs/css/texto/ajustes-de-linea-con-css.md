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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4P5PYRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELR6L8LHbzi9Le6NS3LHnXbC7lDHPjlV6DKkNuoKiGcAiEA7yWw0FNQkDsCJrJmtd1d%2FNJm1hqN0IFQRaAFnqqAfy4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBGNKQoe77yk2MDnJSrcA%2FXD%2BxUuXLDKgd2RWqfkywCCQKCKJENQbYQxHEEpuQ0acbqlFcLdPDAqSfpXxIfucyy%2BZX4H%2B1%2B2qaW%2FlWo45uIqr%2F4N%2B5uhbqr3rpIrEBhCzsqBYuSeaOJ%2BjB8k2fNDYr6DKhnVKcEW87tcLoMFeHWjlUbnfDkqwT2g2MalJT67Oz5t0wvy2VvDRjZS7bIpyNQpdLwcNYTkhVnrBtgos4cyb5g53g%2BIMNoo3bWf%2BT7l8zvfNWvW1LyCGI7LEjsgFeARb9ftJP5KyiAfCb%2FpNyInKE5sPWbZ1x6gKm8kvQxdGbp4fdDlUHFKqX2n19IkWuDm5tObCLaX8vM0t%2FEG7NdKP5R7kI%2BcPMvpM6HZA2JijSzdFI00lp95EBmkFZtoHfo%2Fp7fCa6uKpWPWrNv8jtJYC8VAg2IiY9jGnJqtWlLyRPXrjnx4wmybzckFAqBzyQCfxBrRz0lBK7jt2kunTmzjCAb1LmHmj5QFgmcHMN5QBUX4594emJIpnfzYDgfDtyQo%2FHNNCJW2T4TJPa4Q%2F9Ne3RXpmC%2FOmOkRLzXNb8YEAVAWJMnWbEo0RBExYcYJppblhNCYzQn%2F%2FZRRNOAOepF%2BLOptfII7j%2BPL6oKvykf9utamUNHFOKU8jnqCMNThisoGOqUBJ4QYxbZ7Y5YOh6uDDCm2kKm0G9CFeF7EhvNRn2b%2Br6U7q4fLFdMoxB4byKUGFvDatirDDTq%2BFuvOKhwdZnYWP1bhkeo7WAfADRdjYM7zKKEQUO1XDdOZz9KfLcsQTrDhXYVXGhKfakoSI9mAIBUR9aNmAfFX%2BtrKBx7VTce0heZZ9lYM9dWRDCH86daHUMINDGCQCq%2BGPghiWLz9TstAgFv19PgJ&X-Amz-Signature=a974136849a36c99d083719bb5fd9be71fb3d60dfd806ef9b2e34d4b331c6b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4P5PYRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELR6L8LHbzi9Le6NS3LHnXbC7lDHPjlV6DKkNuoKiGcAiEA7yWw0FNQkDsCJrJmtd1d%2FNJm1hqN0IFQRaAFnqqAfy4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBGNKQoe77yk2MDnJSrcA%2FXD%2BxUuXLDKgd2RWqfkywCCQKCKJENQbYQxHEEpuQ0acbqlFcLdPDAqSfpXxIfucyy%2BZX4H%2B1%2B2qaW%2FlWo45uIqr%2F4N%2B5uhbqr3rpIrEBhCzsqBYuSeaOJ%2BjB8k2fNDYr6DKhnVKcEW87tcLoMFeHWjlUbnfDkqwT2g2MalJT67Oz5t0wvy2VvDRjZS7bIpyNQpdLwcNYTkhVnrBtgos4cyb5g53g%2BIMNoo3bWf%2BT7l8zvfNWvW1LyCGI7LEjsgFeARb9ftJP5KyiAfCb%2FpNyInKE5sPWbZ1x6gKm8kvQxdGbp4fdDlUHFKqX2n19IkWuDm5tObCLaX8vM0t%2FEG7NdKP5R7kI%2BcPMvpM6HZA2JijSzdFI00lp95EBmkFZtoHfo%2Fp7fCa6uKpWPWrNv8jtJYC8VAg2IiY9jGnJqtWlLyRPXrjnx4wmybzckFAqBzyQCfxBrRz0lBK7jt2kunTmzjCAb1LmHmj5QFgmcHMN5QBUX4594emJIpnfzYDgfDtyQo%2FHNNCJW2T4TJPa4Q%2F9Ne3RXpmC%2FOmOkRLzXNb8YEAVAWJMnWbEo0RBExYcYJppblhNCYzQn%2F%2FZRRNOAOepF%2BLOptfII7j%2BPL6oKvykf9utamUNHFOKU8jnqCMNThisoGOqUBJ4QYxbZ7Y5YOh6uDDCm2kKm0G9CFeF7EhvNRn2b%2Br6U7q4fLFdMoxB4byKUGFvDatirDDTq%2BFuvOKhwdZnYWP1bhkeo7WAfADRdjYM7zKKEQUO1XDdOZz9KfLcsQTrDhXYVXGhKfakoSI9mAIBUR9aNmAfFX%2BtrKBx7VTce0heZZ9lYM9dWRDCH86daHUMINDGCQCq%2BGPghiWLz9TstAgFv19PgJ&X-Amz-Signature=0793e1ea4f28b51f05b4870078c64f0b6541aff3d0b015c530d7823a1e9d1927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

