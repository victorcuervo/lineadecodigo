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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEG52BBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATZaRi3vqGgCWPT%2FdCHFAoM%2Btdx2QBkCECcvChtDJN5AiEA2E6Osb4NkU4w5bGm8CwsoumgkjNXMStcBPbKN3d22HMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4jHDmr5mk4FK%2FbxSrcAxMnVlhGlmxNCXpeK5bmHkfJTlXvhNZWqORzWMGjY03Z4KF%2FUQ8vqZiZLHD316r4reqF314%2FDoYSN9ArSYPPhpIixkJj9rozyD1LE55kC2Q1b5KmzJJ1XksRqp0I4FvGjAEFkrvk3Izij425LQ4aa41EosjglvYtPQQn1skHY%2BcyR0kWshp%2BqHY9xnabn49u4AXosg7e9atafYSHn4KBgwKRKAR8usNbyXS1vh8JblB70YThV1NU7zvFz9oyZa6J5PtNACInWvBPquTXVCWcLJ4%2F70EW16BKWD1BbU4DoggXAmsnQtuug2v25ODFQyfmblR6rgZ%2BA9c6t3aO%2BRDhOiMocJeO%2B2G2%2B1B%2B%2FlitJXyYxhQS%2FJds4dF%2B%2B%2FqcNVLVqds%2FvvcDEcVB9k6CHvOezntxWP2rSxzpJXdCDul8e3ULGVC9XRomm54qjG8NyVLeuaKNR3731usf51MsulNlnYBtyaGlZI58Fdu1hh6VkJ7Wj%2BsM0dTWfI0ZADt4uTRHMJ2QB9TpSSX30IBGhwLUKpyATq84T6BZyXZ%2FEDS74lHA9eNBa8cPHjPbV6ujJTZtgnef02%2F4YtrF4skYnohHATS3IecnohudcmUTu9svkh4MEcJP12tMokadZBXFMOvpiMoGOqUBh9HoAGkxZr1bxjBaHaYs91PtdqDOVlqfa2YZubw7LVIome3IHnIa7kbcnj2DMKysNoVmTQo0x8cnXcAFYygKYvr3whtUBoFeE8WlNeUiOqKvmACvsSJCO7fMQ7DzChU77vGs%2FQtnaFwmUHX1yhkjrehNQvhoGhhzS1D5vYeDPn49eXCG8PWw2LXGrh4wS6Td6su9m%2BG%2FGBveBJHTRxloHzacPTOi&X-Amz-Signature=9749a2541f456ef03305e2fd4ace3d3d7d37c0c8e1d54ccfd7c3a5ad4f7a760a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEG52BBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATZaRi3vqGgCWPT%2FdCHFAoM%2Btdx2QBkCECcvChtDJN5AiEA2E6Osb4NkU4w5bGm8CwsoumgkjNXMStcBPbKN3d22HMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJ4jHDmr5mk4FK%2FbxSrcAxMnVlhGlmxNCXpeK5bmHkfJTlXvhNZWqORzWMGjY03Z4KF%2FUQ8vqZiZLHD316r4reqF314%2FDoYSN9ArSYPPhpIixkJj9rozyD1LE55kC2Q1b5KmzJJ1XksRqp0I4FvGjAEFkrvk3Izij425LQ4aa41EosjglvYtPQQn1skHY%2BcyR0kWshp%2BqHY9xnabn49u4AXosg7e9atafYSHn4KBgwKRKAR8usNbyXS1vh8JblB70YThV1NU7zvFz9oyZa6J5PtNACInWvBPquTXVCWcLJ4%2F70EW16BKWD1BbU4DoggXAmsnQtuug2v25ODFQyfmblR6rgZ%2BA9c6t3aO%2BRDhOiMocJeO%2B2G2%2B1B%2B%2FlitJXyYxhQS%2FJds4dF%2B%2B%2FqcNVLVqds%2FvvcDEcVB9k6CHvOezntxWP2rSxzpJXdCDul8e3ULGVC9XRomm54qjG8NyVLeuaKNR3731usf51MsulNlnYBtyaGlZI58Fdu1hh6VkJ7Wj%2BsM0dTWfI0ZADt4uTRHMJ2QB9TpSSX30IBGhwLUKpyATq84T6BZyXZ%2FEDS74lHA9eNBa8cPHjPbV6ujJTZtgnef02%2F4YtrF4skYnohHATS3IecnohudcmUTu9svkh4MEcJP12tMokadZBXFMOvpiMoGOqUBh9HoAGkxZr1bxjBaHaYs91PtdqDOVlqfa2YZubw7LVIome3IHnIa7kbcnj2DMKysNoVmTQo0x8cnXcAFYygKYvr3whtUBoFeE8WlNeUiOqKvmACvsSJCO7fMQ7DzChU77vGs%2FQtnaFwmUHX1yhkjrehNQvhoGhhzS1D5vYeDPn49eXCG8PWw2LXGrh4wS6Td6su9m%2BG%2FGBveBJHTRxloHzacPTOi&X-Amz-Signature=a4b7acf0b0cc1ac239229d002e7f74578a3097a34687861ad0ef309dc720386c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

