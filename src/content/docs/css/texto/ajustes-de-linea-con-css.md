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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKW64Y5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoIrEV%2FaW8y8wxcPiWx2il6X%2BARD%2BWg%2BBjgn9ZREpF9gIgEr5tTb5dzEVNZhlN65c3ueub2yMTAue3EUAlR1hz7a0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZvPAqXqvzpcMONJSrcA%2FhJr2ZavgLzdytMErgnIT1QOjT0V7QgHz%2FidAf3LDWEkUOTXNv943sw7UI5K4cvU3mTVtYiRtUf98tCh%2FpNrjtd6vFIR9mNX4N1ZktknOptdpD3bsIT4PoUJM0r%2BeXbWJZB7dQWvwQwqpM6Gdgg7hwewlK%2F%2FtmqrCZrpEqSxqfGUmBNwqPt3OUbrMxjq9knCyP9ayjVAHimq%2B3zWAPtNqlNwapvFUYiDSL9tYkIFRr%2FjZabwwEKuOyDZF1Syx2xAlSksGUd6qbTEFD6ZXHChPhSP65sbsqO0i7U1%2BbacrF0188rLyZJNZ4W652nbAzBgLTiG9b1Ze0IPadhktYcOk7bSXTheKmNn16OQf3Emd9bw1fJveikLZMK2lPUNKmSHJuSuCHBhKWSifqX3zDD6ozGtUMmiW%2FElmF%2B3z2sZiuZgRzxURU5VrrdD8u3lOxlJyQpBOKlmYGKPU5S%2BYFW3O1uhIEFqL7YXzj890y%2F8afohxh1vCtCugVMYnk5WMTRiGs056MXRcOBjZL6RJ89cig5boXvL0NfAne2CHHOsM4oScN1E7u%2FS9zBgqHODfAYiCYYG0zIhMuyZ%2BNV%2FP0eIaxKy6xRU2IWZqtS6NzIZYnvhs23vhIBV4rCagWHMICgi8oGOqUBKosRhAxv5R4%2Fv4pb6ZOwEMeJebeSxXDO6lv8mf2HfcI55mul81uFbnefIYU5N8jl6UQKj%2Ff1xX1FUEsOuw8FMOXYF2BrHkHwC6BGjhiA6h%2FY6FPWE33%2FdB14op4BOgy%2FAaFmxm62dLH4gB6bg8mwXHp%2BcUicCfvc8hU2yh8L2CLhyI8rpBqY10oTK6J7ZlruwCJnpUauLnfRUQ7H610IbC2O4co%2B&X-Amz-Signature=d4b676d341640a31479212a7e120e651e00748d33d5b9d9b1741aa4042cf6efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKW64Y5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoIrEV%2FaW8y8wxcPiWx2il6X%2BARD%2BWg%2BBjgn9ZREpF9gIgEr5tTb5dzEVNZhlN65c3ueub2yMTAue3EUAlR1hz7a0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZvPAqXqvzpcMONJSrcA%2FhJr2ZavgLzdytMErgnIT1QOjT0V7QgHz%2FidAf3LDWEkUOTXNv943sw7UI5K4cvU3mTVtYiRtUf98tCh%2FpNrjtd6vFIR9mNX4N1ZktknOptdpD3bsIT4PoUJM0r%2BeXbWJZB7dQWvwQwqpM6Gdgg7hwewlK%2F%2FtmqrCZrpEqSxqfGUmBNwqPt3OUbrMxjq9knCyP9ayjVAHimq%2B3zWAPtNqlNwapvFUYiDSL9tYkIFRr%2FjZabwwEKuOyDZF1Syx2xAlSksGUd6qbTEFD6ZXHChPhSP65sbsqO0i7U1%2BbacrF0188rLyZJNZ4W652nbAzBgLTiG9b1Ze0IPadhktYcOk7bSXTheKmNn16OQf3Emd9bw1fJveikLZMK2lPUNKmSHJuSuCHBhKWSifqX3zDD6ozGtUMmiW%2FElmF%2B3z2sZiuZgRzxURU5VrrdD8u3lOxlJyQpBOKlmYGKPU5S%2BYFW3O1uhIEFqL7YXzj890y%2F8afohxh1vCtCugVMYnk5WMTRiGs056MXRcOBjZL6RJ89cig5boXvL0NfAne2CHHOsM4oScN1E7u%2FS9zBgqHODfAYiCYYG0zIhMuyZ%2BNV%2FP0eIaxKy6xRU2IWZqtS6NzIZYnvhs23vhIBV4rCagWHMICgi8oGOqUBKosRhAxv5R4%2Fv4pb6ZOwEMeJebeSxXDO6lv8mf2HfcI55mul81uFbnefIYU5N8jl6UQKj%2Ff1xX1FUEsOuw8FMOXYF2BrHkHwC6BGjhiA6h%2FY6FPWE33%2FdB14op4BOgy%2FAaFmxm62dLH4gB6bg8mwXHp%2BcUicCfvc8hU2yh8L2CLhyI8rpBqY10oTK6J7ZlruwCJnpUauLnfRUQ7H610IbC2O4co%2B&X-Amz-Signature=848f9131af980080b5147c4d4d073c57b8cbecc6ad6179126476dd8d8911f321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

