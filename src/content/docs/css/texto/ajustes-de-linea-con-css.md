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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5C7FHQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPf8tAFoLbuwqKLG4edHCUSr8ItmKOyRY9wYIfbaxaOwIgG3LhWqyH7zE0BYZVsTj5wUfXCN4NXCaPRe1fJSxyFPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5otfVzfZ%2FPZyr6ircA1VvfRHebgTEdo6HdVOCRU5omdU8nlWHyJZDBkkFUCMMg27dwaIw2nuFlgKplG%2BT7o3Q9OhRDk0kYxBt7j%2FxEChZNLdkk3MzEwKhj4IEksiGmsNb4d00nt3GXLgcpb1k%2FTCi9NEQfAJtv%2FJEPzsMWxtPlke1Dr%2BFiSFIvAg6iJXK6JsIKE9Ecxru%2FbdtZqyxvk8MUhSR3Hijq3x09GtFlro2%2BABsR9lsEWkqSfRAwg2xgKZFzKr%2FZLKiyzt%2F8xkP83ov6z%2BFBO4Klsg%2FSJbz3%2Fz6VHQRn0s9eRIBmk08NZo5njxhumPJ%2BcaSify6dZnrdhfE6lL3OXlvmUIveShXz%2F0fZN%2F9BluaikkBPneizCGBXC0cU9hxXG52RLFjMt9fJPxrArSz%2FPweXchfhk8GS1B2PeXTYh1LQxBddsiGietLQ9BiEQFQ9vNIH4qlhf50RRuekImPFDHL9W4Sa4QEX9xN0ssGDRXiPTLZ3YXX%2FoxnxqwigEZ9LdrwTCOsz%2F3Is5kfHSCrjDBleDHosTokErWZatsAAXc82G3vhS8e%2Beuf%2BaOc4YfPQaU0J9BUnyTEHBi3E0X55XtzyBVHi76BSFe6lIPllk%2F3r%2FU6bXRzXjqr0udMtzG6%2Bdwc6ISBMNWfi8oGOqUBmIZvYmWYCGOfwKG8PyFquUX0szkdp7l12MPmLB%2FXs3ESLTIRa3FKOZnIBVZEH33Fgq7VhB8nzlLaWc3NgsksZjuT7RHhdXOW3zfn5UK3nPb6awtH9FKEPKH33WkQ7q0k7Bi08Iq%2BaaxecrFPyVdwkBPlPU876Wxj19Tic0FIpaFNp8Ab%2FBW5hY9Mo5uFjIdO%2BJYg7AWnAiVaOg8hUcjVDQxRCEUH&X-Amz-Signature=fbe7ae62bff756448dba9f09cd98c2db3945fc2d2c965f828d0f0d7e71a3d3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5C7FHQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPf8tAFoLbuwqKLG4edHCUSr8ItmKOyRY9wYIfbaxaOwIgG3LhWqyH7zE0BYZVsTj5wUfXCN4NXCaPRe1fJSxyFPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5otfVzfZ%2FPZyr6ircA1VvfRHebgTEdo6HdVOCRU5omdU8nlWHyJZDBkkFUCMMg27dwaIw2nuFlgKplG%2BT7o3Q9OhRDk0kYxBt7j%2FxEChZNLdkk3MzEwKhj4IEksiGmsNb4d00nt3GXLgcpb1k%2FTCi9NEQfAJtv%2FJEPzsMWxtPlke1Dr%2BFiSFIvAg6iJXK6JsIKE9Ecxru%2FbdtZqyxvk8MUhSR3Hijq3x09GtFlro2%2BABsR9lsEWkqSfRAwg2xgKZFzKr%2FZLKiyzt%2F8xkP83ov6z%2BFBO4Klsg%2FSJbz3%2Fz6VHQRn0s9eRIBmk08NZo5njxhumPJ%2BcaSify6dZnrdhfE6lL3OXlvmUIveShXz%2F0fZN%2F9BluaikkBPneizCGBXC0cU9hxXG52RLFjMt9fJPxrArSz%2FPweXchfhk8GS1B2PeXTYh1LQxBddsiGietLQ9BiEQFQ9vNIH4qlhf50RRuekImPFDHL9W4Sa4QEX9xN0ssGDRXiPTLZ3YXX%2FoxnxqwigEZ9LdrwTCOsz%2F3Is5kfHSCrjDBleDHosTokErWZatsAAXc82G3vhS8e%2Beuf%2BaOc4YfPQaU0J9BUnyTEHBi3E0X55XtzyBVHi76BSFe6lIPllk%2F3r%2FU6bXRzXjqr0udMtzG6%2Bdwc6ISBMNWfi8oGOqUBmIZvYmWYCGOfwKG8PyFquUX0szkdp7l12MPmLB%2FXs3ESLTIRa3FKOZnIBVZEH33Fgq7VhB8nzlLaWc3NgsksZjuT7RHhdXOW3zfn5UK3nPb6awtH9FKEPKH33WkQ7q0k7Bi08Iq%2BaaxecrFPyVdwkBPlPU876Wxj19Tic0FIpaFNp8Ab%2FBW5hY9Mo5uFjIdO%2BJYg7AWnAiVaOg8hUcjVDQxRCEUH&X-Amz-Signature=0af833bf5ec665325fa33af03facab0436ec41dd08172226624be12dfa324edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

