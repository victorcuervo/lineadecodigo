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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6B53NHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCevWIo5de9CnhySEgaAD6SYHzwHmeuvJypuHjM01KfmgIganktN2mxij6Bl7%2FmSmfWb2l3z1OD0Ke3RgQqhRGj5B8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET0iZJ4qvSUcJjZ%2BircAw3fHVbBYsfCbMOL1ZWoWpwka%2FvXIeabQw4UW%2F37XsgvhoNIZIv5r%2BkFUsvXczBW5QMBXIgEM1aXeCWb62tboONFHNNcbKm7od0amzVSJo8x3kES%2FQbCGSc0hzCAlCwg%2BL%2FG5c696D7lNYrax3nzOG%2FqFGaSWjM4KHTxsYCXF8vrYrbRp37DWqmgRDnrj3eRZ8vqSGs%2BmUBeDg25DsJ5ukjaLeDaQB1IOqVcLbVZchBQvyOrA4tYM3NlNB3Z2h4FZ4Unh50x7UlBfTp3%2BS6mCzrcN7vYTy%2BYb1tYK7Yb3H5WxZ%2FpdLkbl%2FoZ%2B7t2yUO3kHYPWpPJmSCFXeWtm%2BKb8%2FJ6nFRnQ72fuAx5WuMpte6je5j1XbUoX7uA9V1eZVSYDmoEovI748bjA6mpBpRPDtYEPINPun%2BGyzDvocfGvEp6wn7pMPXaxap7RUuL8k7EQ%2FASsckIwRSClWKYl9tbQyCtn7RFhQFMdvs7Wmh%2Fe7iOWGwf0f3D18IOR2S%2Bszj1k%2F7pqRCCRSWVPbfqY1Sx5Aqkd1%2FDqnthuQyXo7dngOrFrifM45dHFvsMcL%2BzvHugpCTLA3FV34kJWt5rqqTcPpzLtP3%2B%2BnNVQS7WQ5KxiR2KN40uH4kf%2BQGoCsEvMMGfi8oGOqUBf84g7SiBv%2Bm%2FB%2FYhJ53c%2FIzDYrGm5WwM5IRmDG63fHJpGSxmoyuwMBRID06uOk%2FzbH2Oz4i78mcS0MQccZLMFhXNn%2FjvEHSWoA1xg%2F1imST8PROFOVuk5qfeDbABW7EPv0llVlX82k5BH1osYrH8CwtAppGf%2FCZvGWsq2SXw7x5JHx63I42GHaK1RqYH8iajf1iy6ZyrVAIiTn4QmGcYSzQtyuN6&X-Amz-Signature=632d5a1b3bff136539ac32da9c6a23db9439a0a7945db3e9c934dfe6253f2295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6B53NHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCevWIo5de9CnhySEgaAD6SYHzwHmeuvJypuHjM01KfmgIganktN2mxij6Bl7%2FmSmfWb2l3z1OD0Ke3RgQqhRGj5B8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET0iZJ4qvSUcJjZ%2BircAw3fHVbBYsfCbMOL1ZWoWpwka%2FvXIeabQw4UW%2F37XsgvhoNIZIv5r%2BkFUsvXczBW5QMBXIgEM1aXeCWb62tboONFHNNcbKm7od0amzVSJo8x3kES%2FQbCGSc0hzCAlCwg%2BL%2FG5c696D7lNYrax3nzOG%2FqFGaSWjM4KHTxsYCXF8vrYrbRp37DWqmgRDnrj3eRZ8vqSGs%2BmUBeDg25DsJ5ukjaLeDaQB1IOqVcLbVZchBQvyOrA4tYM3NlNB3Z2h4FZ4Unh50x7UlBfTp3%2BS6mCzrcN7vYTy%2BYb1tYK7Yb3H5WxZ%2FpdLkbl%2FoZ%2B7t2yUO3kHYPWpPJmSCFXeWtm%2BKb8%2FJ6nFRnQ72fuAx5WuMpte6je5j1XbUoX7uA9V1eZVSYDmoEovI748bjA6mpBpRPDtYEPINPun%2BGyzDvocfGvEp6wn7pMPXaxap7RUuL8k7EQ%2FASsckIwRSClWKYl9tbQyCtn7RFhQFMdvs7Wmh%2Fe7iOWGwf0f3D18IOR2S%2Bszj1k%2F7pqRCCRSWVPbfqY1Sx5Aqkd1%2FDqnthuQyXo7dngOrFrifM45dHFvsMcL%2BzvHugpCTLA3FV34kJWt5rqqTcPpzLtP3%2B%2BnNVQS7WQ5KxiR2KN40uH4kf%2BQGoCsEvMMGfi8oGOqUBf84g7SiBv%2Bm%2FB%2FYhJ53c%2FIzDYrGm5WwM5IRmDG63fHJpGSxmoyuwMBRID06uOk%2FzbH2Oz4i78mcS0MQccZLMFhXNn%2FjvEHSWoA1xg%2F1imST8PROFOVuk5qfeDbABW7EPv0llVlX82k5BH1osYrH8CwtAppGf%2FCZvGWsq2SXw7x5JHx63I42GHaK1RqYH8iajf1iy6ZyrVAIiTn4QmGcYSzQtyuN6&X-Amz-Signature=4fd2205af96c7f95f2699a7df8862ad221104b9f229d9336e26b6700c4f1da08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

