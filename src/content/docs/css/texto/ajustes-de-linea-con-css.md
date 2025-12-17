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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BGM3F6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNTy5iDQGluSFy%2FnS8JDmH%2FVsHEH8s5mOsm8519GVPgwIhAPpgGoNMCCVWCZFgcS6lv%2FV7lICpx9h29oRWsgeqV7wdKv8DCHUQABoMNjM3NDIzMTgzODA1IgzXWCcXCRTpq2PHWRMq3APZEH8lQox7sezpmhjyALBtlKZf7%2Be%2FfJ95qQQpA%2FZ3Pn8hBIxhFLOiLWwRhyw5ahT7UE00QAwTPcaYhNvJ7RvCMmVuPm%2Bx4kHXvK3WBSuVMv9aJKBKDVtywsIKsYSsN24j5qUcCtoJk5XaEKgPXQGilRMWRj34mHsna1LZ4x9ImtR5wytK%2BPl11ufdPWiQJkipD%2BXNv9%2BCcLgF58LU17wkbw4a9BO1oVZxhXYEsUfhDKM4yjy%2B2BTJf%2FvjLcHn0WgiKb4aWruoKA63VcSycE3AZS%2FObDlrte24DUckuXdvqMBiNI%2BoUQCGeDbIjtQOuGBDHKsHtcWoWH4lNUjETBErZROl8V5pqaYZAu9%2BNNbh9lJQYr3uHFwLMLT9RYTSahT8OmpyhEnPn9RmlbBq2%2BgS7%2BikfflXk82pysQu%2BUTHvywi7tqEGh%2BKmToLlg%2FfVQrd815cFLb0AATbZIi1v3CBsTtasH8HVy3pTrAu1psLF9kH0s%2FTX5fx8dRr2oRPZUcOwdssJfAdkOcx1Fy03R%2BHdW1HzAUfIi0PaQq9g%2BImp1FZt7CwDso%2BV0ydXdhF0wGWA6OxlSHushP3%2Bc3b9jtwg%2FsjRS4mex1uhZxgABEc2Zc1YPDn%2BiyMyxz0tjCbzojKBjqkAavIJ6hIkynXcGdepbHWsOMb4yKIdoQgOJKvQzhHaLOYo%2BMo8BzuiGosxacIPU6DEyU8OF5E0NZ7E5BJIOBX%2BoWIYisXNP6bZZ1Bywz6oPGNXCd2RxXRgaojIrVYA0aXRfUeHsT0CUybbXr7SUbOwRkdxSjBXrzH7JGOaG%2FQPhJvE9VRf5YdbjD95r2aVyricRMtvOLL2nM%2FQ2S5n3cOHPwwdfVD&X-Amz-Signature=dd0f7fa7fce86912f6f5016c0148bc4ae9ffe8fe4b4040e724d931d45a138118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BGM3F6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNTy5iDQGluSFy%2FnS8JDmH%2FVsHEH8s5mOsm8519GVPgwIhAPpgGoNMCCVWCZFgcS6lv%2FV7lICpx9h29oRWsgeqV7wdKv8DCHUQABoMNjM3NDIzMTgzODA1IgzXWCcXCRTpq2PHWRMq3APZEH8lQox7sezpmhjyALBtlKZf7%2Be%2FfJ95qQQpA%2FZ3Pn8hBIxhFLOiLWwRhyw5ahT7UE00QAwTPcaYhNvJ7RvCMmVuPm%2Bx4kHXvK3WBSuVMv9aJKBKDVtywsIKsYSsN24j5qUcCtoJk5XaEKgPXQGilRMWRj34mHsna1LZ4x9ImtR5wytK%2BPl11ufdPWiQJkipD%2BXNv9%2BCcLgF58LU17wkbw4a9BO1oVZxhXYEsUfhDKM4yjy%2B2BTJf%2FvjLcHn0WgiKb4aWruoKA63VcSycE3AZS%2FObDlrte24DUckuXdvqMBiNI%2BoUQCGeDbIjtQOuGBDHKsHtcWoWH4lNUjETBErZROl8V5pqaYZAu9%2BNNbh9lJQYr3uHFwLMLT9RYTSahT8OmpyhEnPn9RmlbBq2%2BgS7%2BikfflXk82pysQu%2BUTHvywi7tqEGh%2BKmToLlg%2FfVQrd815cFLb0AATbZIi1v3CBsTtasH8HVy3pTrAu1psLF9kH0s%2FTX5fx8dRr2oRPZUcOwdssJfAdkOcx1Fy03R%2BHdW1HzAUfIi0PaQq9g%2BImp1FZt7CwDso%2BV0ydXdhF0wGWA6OxlSHushP3%2Bc3b9jtwg%2FsjRS4mex1uhZxgABEc2Zc1YPDn%2BiyMyxz0tjCbzojKBjqkAavIJ6hIkynXcGdepbHWsOMb4yKIdoQgOJKvQzhHaLOYo%2BMo8BzuiGosxacIPU6DEyU8OF5E0NZ7E5BJIOBX%2BoWIYisXNP6bZZ1Bywz6oPGNXCd2RxXRgaojIrVYA0aXRfUeHsT0CUybbXr7SUbOwRkdxSjBXrzH7JGOaG%2FQPhJvE9VRf5YdbjD95r2aVyricRMtvOLL2nM%2FQ2S5n3cOHPwwdfVD&X-Amz-Signature=aa02c90befcdcb94b5c5ee75c35aa66a35c51efcbef6ff56de0829f948b92920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

