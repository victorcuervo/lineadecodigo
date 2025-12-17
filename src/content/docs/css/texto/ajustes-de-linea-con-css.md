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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GS3EE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdsPU2XdaWMcxZIiLqAKlcwPfzhfEbkU9N%2B7hLVHZ%2FQwIhAI%2B%2Frya2H7Hm8BWFdXCm90QXn2Buno8GpDSuPyuVGHZ3Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzRHRbae0M6oRUulIwq3APCoRHWvnUpIsDa3mhm11TPqI7U12bZb%2B0oGvxAawsf5K5B1pHZMu73hVuoJuuadCOzbmNZKKtYJCmjFRBDhUljhgdNogJf5xYyL1QlmRl7wrw93BSNShHkexUyg92WHMEza5id8bsR7zoyOrhgDw621cNuRMkEiko4Vv1pJr8BNFbAlzzl5YUBVFOkRel1GMifkL%2Fl0ojZKlsKFiOxOgX3GVJqT78kPyb3pmbUVf0NIuoh1z2nII8MXB%2BPW1ajOX90n3HWDB31p5aTkBFyESjLQzTDlRN7u7aRrlbVxTZeSB7MsBGGC%2Fs%2BL4uSYD622jiqDplEDV0DyAB%2FncyqhqGrYhaZWSmQYDQ%2F6Yx0o8TmKbh%2BcrkXoZa5JfabwKKGziC3dJ99CSt30C0%2BLUtBR2uJIuI8SqCLVEfEBr79Y2SmFQYHjQwn3t%2FGm7MhNFGGPcj8hHLHf6Y%2BSjEefY3Zentoooe%2FAmJhtfpC7R5Xig%2F48FohTGsOgGCc7IENkqKUouQJBTHcPEP3S3YANUk0HKAw1MVpJW8D7%2Fm5fYWxT%2FxlrcaipFDXO9E466KY0KuHFo00D3937GaV8xOL9uDwCpD1VRJNUye35oPunsMKJ0x3tBCb76z5KElt3cMebzDSnYnKBjqkATLqpdyxuQJlDda7wFSJ%2FopWhgLB9E%2F12SQrVHBQA0quNrS4IJWftX7dhowDCFrz9tIgb1y3hu4ap0IrMpwK5dzO1Gaku4DVe6fzTv4OB7ytszO4%2BgbcPl9almKKUKm44u5BPrA42mLdp1EkM9P%2BG%2FXfGhljpjw90R4aZcKPYYTURnnb0FgSnYuISdh4ri8P%2BqIZ9N1ikEXAbnGcTHga3F23WyHQ&X-Amz-Signature=a0aadff6f56f32fb124c11904e4f74723967dee6f8920ef30ab5bd3cc3ccb4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3GS3EE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdsPU2XdaWMcxZIiLqAKlcwPfzhfEbkU9N%2B7hLVHZ%2FQwIhAI%2B%2Frya2H7Hm8BWFdXCm90QXn2Buno8GpDSuPyuVGHZ3Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzRHRbae0M6oRUulIwq3APCoRHWvnUpIsDa3mhm11TPqI7U12bZb%2B0oGvxAawsf5K5B1pHZMu73hVuoJuuadCOzbmNZKKtYJCmjFRBDhUljhgdNogJf5xYyL1QlmRl7wrw93BSNShHkexUyg92WHMEza5id8bsR7zoyOrhgDw621cNuRMkEiko4Vv1pJr8BNFbAlzzl5YUBVFOkRel1GMifkL%2Fl0ojZKlsKFiOxOgX3GVJqT78kPyb3pmbUVf0NIuoh1z2nII8MXB%2BPW1ajOX90n3HWDB31p5aTkBFyESjLQzTDlRN7u7aRrlbVxTZeSB7MsBGGC%2Fs%2BL4uSYD622jiqDplEDV0DyAB%2FncyqhqGrYhaZWSmQYDQ%2F6Yx0o8TmKbh%2BcrkXoZa5JfabwKKGziC3dJ99CSt30C0%2BLUtBR2uJIuI8SqCLVEfEBr79Y2SmFQYHjQwn3t%2FGm7MhNFGGPcj8hHLHf6Y%2BSjEefY3Zentoooe%2FAmJhtfpC7R5Xig%2F48FohTGsOgGCc7IENkqKUouQJBTHcPEP3S3YANUk0HKAw1MVpJW8D7%2Fm5fYWxT%2FxlrcaipFDXO9E466KY0KuHFo00D3937GaV8xOL9uDwCpD1VRJNUye35oPunsMKJ0x3tBCb76z5KElt3cMebzDSnYnKBjqkATLqpdyxuQJlDda7wFSJ%2FopWhgLB9E%2F12SQrVHBQA0quNrS4IJWftX7dhowDCFrz9tIgb1y3hu4ap0IrMpwK5dzO1Gaku4DVe6fzTv4OB7ytszO4%2BgbcPl9almKKUKm44u5BPrA42mLdp1EkM9P%2BG%2FXfGhljpjw90R4aZcKPYYTURnnb0FgSnYuISdh4ri8P%2BqIZ9N1ikEXAbnGcTHga3F23WyHQ&X-Amz-Signature=45a6c8342b16c80ea588535867880c8e98d50232b4c82016a3d7d2ef79cf93d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

