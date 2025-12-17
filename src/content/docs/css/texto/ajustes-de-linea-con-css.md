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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WRCH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEQswHaZk%2B%2Fm%2FP6T9vKkIBbyJv8qiV%2FG3IWUay141moQIgDeHVuqQgGyLk7b64j8DfaTiW7rpHrt%2Fsu24JPAqRYdAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxEeTDYbuhEyGVz5yrcA0BacRcc9N1G0eKxGDWC%2FZRum0ouJ9DHtRbwlgc%2B3YxGTsBw6%2BMiAN9x1iZOOA6vtxchsseB%2B%2Fx9WBgGfIjoS0ZpoBSWsZ8bs1qGYBFUT2MKUN8%2F32%2F53ULYA7wqOvqN8oQSO9%2FWCwhGNtWB6XgY1e%2FAvWt0Ib1hr9OnhzBU2%2B6Jrky%2F8W98moEqgjfbsj%2FaWuSXAQDz3a13DT%2BS9DEEwIDE0xOTTt%2FnKpexBwO2Je843Fph7veUURgRdnXtIycxhkyzFG2OJJ7mqf7KY6mSvVF%2BmbKXtQT40JB4RbWPJvNbJXJ6LDYLHEpK8aJ6vnapNBurkPMRbpP4CFfT1tlzwGiZC7XqaUaf%2FX6RhbKcmgHcWFVBYfakfcO195H2%2FcQTaHH%2F%2Bol63xdGWffYditOFxAXdlRsYUMdRUgT6T9YJwC%2BkEG5U0ZrCiIpn09zf6qa%2Fn2Mt2lYva7XKkr6pSLcNCei0UmIthQzi%2BnthKJ9lcpJa0QQtWSDBL3rhvTXYAyyzk%2FPoZ4uMlTKioagzbC%2FcqkPUUMzGXZiPjM6JsEpu6ZIJKr7w9E15uRTR4uL5VFk8IKIwKGBsjch1%2FeJC9fvt41OQoI1zMkioOSeujcTVyQ9EAFy0U5O1HpdAPvJMNutjMoGOqUBWlXnYsZV8LdPQscdFd5T0SuJkn8JQ5jEGqiy6HPa2TqKdqjOUex1lZcvji0joaaNdcgxyBISzIPSQb38XFGVmkId1GBTbgYofF09qXypG4kePANuctgC1tZfJhQ8pJyFUuICuBY39lDAHvE4ltF71zaWGAp1ptrC0ACeKy%2BN9C4FW6NJQ%2B501Iy%2BgvmGJrLd6ikwy5tOvNRZTVz9svloIMfAaZ51&X-Amz-Signature=e7742341df7a36aa57db88bc5f6dea2b5b3d5a8e181d4879a8b5c4c77d9eaf9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WRCH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEQswHaZk%2B%2Fm%2FP6T9vKkIBbyJv8qiV%2FG3IWUay141moQIgDeHVuqQgGyLk7b64j8DfaTiW7rpHrt%2Fsu24JPAqRYdAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxEeTDYbuhEyGVz5yrcA0BacRcc9N1G0eKxGDWC%2FZRum0ouJ9DHtRbwlgc%2B3YxGTsBw6%2BMiAN9x1iZOOA6vtxchsseB%2B%2Fx9WBgGfIjoS0ZpoBSWsZ8bs1qGYBFUT2MKUN8%2F32%2F53ULYA7wqOvqN8oQSO9%2FWCwhGNtWB6XgY1e%2FAvWt0Ib1hr9OnhzBU2%2B6Jrky%2F8W98moEqgjfbsj%2FaWuSXAQDz3a13DT%2BS9DEEwIDE0xOTTt%2FnKpexBwO2Je843Fph7veUURgRdnXtIycxhkyzFG2OJJ7mqf7KY6mSvVF%2BmbKXtQT40JB4RbWPJvNbJXJ6LDYLHEpK8aJ6vnapNBurkPMRbpP4CFfT1tlzwGiZC7XqaUaf%2FX6RhbKcmgHcWFVBYfakfcO195H2%2FcQTaHH%2F%2Bol63xdGWffYditOFxAXdlRsYUMdRUgT6T9YJwC%2BkEG5U0ZrCiIpn09zf6qa%2Fn2Mt2lYva7XKkr6pSLcNCei0UmIthQzi%2BnthKJ9lcpJa0QQtWSDBL3rhvTXYAyyzk%2FPoZ4uMlTKioagzbC%2FcqkPUUMzGXZiPjM6JsEpu6ZIJKr7w9E15uRTR4uL5VFk8IKIwKGBsjch1%2FeJC9fvt41OQoI1zMkioOSeujcTVyQ9EAFy0U5O1HpdAPvJMNutjMoGOqUBWlXnYsZV8LdPQscdFd5T0SuJkn8JQ5jEGqiy6HPa2TqKdqjOUex1lZcvji0joaaNdcgxyBISzIPSQb38XFGVmkId1GBTbgYofF09qXypG4kePANuctgC1tZfJhQ8pJyFUuICuBY39lDAHvE4ltF71zaWGAp1ptrC0ACeKy%2BN9C4FW6NJQ%2B501Iy%2BgvmGJrLd6ikwy5tOvNRZTVz9svloIMfAaZ51&X-Amz-Signature=a84a73ee8f7662e0f0bc6092a76a42a39b8935f4c9a431f78fa62c0b12fc7301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

