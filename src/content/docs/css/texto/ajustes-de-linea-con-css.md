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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGGFEI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuiRgc74Hgb1hjY%2FaZrihr6o8l7KxW%2FgWjA87%2Bxb9Q%2BAiApl3SaaBxdDw9YTrh643s7DeBl6%2F566heddNJqYXRBBSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMUbv9F27ZJ5cTIr0EKtwDJjGlrJ%2FeZ%2BsvngIeF5WkeZmiWfL60V4Bw4g05UsoiJ%2FfbEnk1erlc6e3h7YVNdeAbWpcXOAftA51AkVpjkWYORlDGhbLR9f47r5OP4MpLUY%2BLFCTwWsc29spOEnmR9mjbi%2F8QTM5cx7q85SDNIS5h8v7xMn3kLEnZlK6TJIBYbzD72EnIS3SaGpD%2FdsYxXKJh549CRp0TbOUuhZTekc470fyOXAh%2FXrPD1grZPKS34cU2AXWK2IrZW%2Fr6NF46EohxK4RSABCtEziw43UvSJGnMOV8Rq%2FYcvqsMnbJIx%2BTcqt4xJSKeRXSzq%2FoN1Wv24dj1qNWJhLxGHFKIKV9nPqqZYj3HvgGFcrWwPAXNjg3x%2FNMi%2BZBiNQTJzq5QVSlUA%2Fyk01ATQOdmKjHdEY%2FOmcT%2FaFLh3dboIa1DdXyS9W7VvbJXnTORLrQssmtfyloNeDDQ2AVi%2B1hfsCG9jbEWCifJDqSjaXbQyMZsHbWB79rRrXMS2LwpSDlhxvEDtb%2FYv2uKoODOeU9p9Oe3w35CN4cNZrN3tOAcESJPyM9QDZ%2BLVsMmIl6zSyJhEO7PIXQU562WtwflHhi1vkfwdhqkIY8uMfgYA9%2BZS48vleLjB%2B0i9mKzonD3uzOQkayJcw9peIygY6pgFIfzF6t3wzUH6pgPR02lT3qcfsanTzEDkBlemEv8CilVHI4UXBraom1y06H4YrLbYJhORtWJapja8nE2%2FcjD0trQoWm3Fhd7kvxXlFrDD82yXZlJ5XEpqtd187%2BPpQ4eomkluQ%2BFepBHOkF2BV4lbzcpM9mvgBNqh6IXRAWaH1nM6s4tsYnZNmzH4tAYGcVKJnP2qdYwgyKvqrzTXTnzQObXFlriw5&X-Amz-Signature=c1c8176c74075f09903e1b2ce8d4fa4bcfb8e05c8e2bcf7d8eb8815289202967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGGFEI2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuiRgc74Hgb1hjY%2FaZrihr6o8l7KxW%2FgWjA87%2Bxb9Q%2BAiApl3SaaBxdDw9YTrh643s7DeBl6%2F566heddNJqYXRBBSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMUbv9F27ZJ5cTIr0EKtwDJjGlrJ%2FeZ%2BsvngIeF5WkeZmiWfL60V4Bw4g05UsoiJ%2FfbEnk1erlc6e3h7YVNdeAbWpcXOAftA51AkVpjkWYORlDGhbLR9f47r5OP4MpLUY%2BLFCTwWsc29spOEnmR9mjbi%2F8QTM5cx7q85SDNIS5h8v7xMn3kLEnZlK6TJIBYbzD72EnIS3SaGpD%2FdsYxXKJh549CRp0TbOUuhZTekc470fyOXAh%2FXrPD1grZPKS34cU2AXWK2IrZW%2Fr6NF46EohxK4RSABCtEziw43UvSJGnMOV8Rq%2FYcvqsMnbJIx%2BTcqt4xJSKeRXSzq%2FoN1Wv24dj1qNWJhLxGHFKIKV9nPqqZYj3HvgGFcrWwPAXNjg3x%2FNMi%2BZBiNQTJzq5QVSlUA%2Fyk01ATQOdmKjHdEY%2FOmcT%2FaFLh3dboIa1DdXyS9W7VvbJXnTORLrQssmtfyloNeDDQ2AVi%2B1hfsCG9jbEWCifJDqSjaXbQyMZsHbWB79rRrXMS2LwpSDlhxvEDtb%2FYv2uKoODOeU9p9Oe3w35CN4cNZrN3tOAcESJPyM9QDZ%2BLVsMmIl6zSyJhEO7PIXQU562WtwflHhi1vkfwdhqkIY8uMfgYA9%2BZS48vleLjB%2B0i9mKzonD3uzOQkayJcw9peIygY6pgFIfzF6t3wzUH6pgPR02lT3qcfsanTzEDkBlemEv8CilVHI4UXBraom1y06H4YrLbYJhORtWJapja8nE2%2FcjD0trQoWm3Fhd7kvxXlFrDD82yXZlJ5XEpqtd187%2BPpQ4eomkluQ%2BFepBHOkF2BV4lbzcpM9mvgBNqh6IXRAWaH1nM6s4tsYnZNmzH4tAYGcVKJnP2qdYwgyKvqrzTXTnzQObXFlriw5&X-Amz-Signature=a89a462e65e9379afd2707e044f807f392ea1c570c9f4f80979e28f6adc73d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

