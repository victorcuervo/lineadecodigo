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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2BSSDP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuV9DPkeGIiioLI8Fauw5ldrfpWqOOJP2zS1x%2FtJ6E7AiEA7QrD8OQksT8JfcSC2WA4JtczaOowxsFQRXGGTb4DMP0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFauERdb9mVYLmasOCrcA3fBTBBADWF7swnPwffotRceTxNRTnn0HNibDKMhRxUaeGn7ZWVPaGrOBujzdqg8fLnTET4MEU5fj%2BWmkZ7UiSV7YnJo2BUxfmCdfjuFdWPgE7KnfQRfadDgGb%2BRWJrR9WCJP0pQlvTWWVIQllyOJZ%2FGSwqPn8vZ5d0B%2BYUOI%2FzvIdmGL%2B%2BoHLyLHAc0ctuuL1gAKVmCo6JmSP713OP31WusfAdWEd2mwqyfC9i1c1zqsLhPX1NXYzzp8jXOH9KjT%2Fok3Eo%2FCqcNDOSrI%2FCzJjblBwMbb5lB%2BBZO2Gd%2BDIy0y6qmKS5OMbFLYp8IEcFi8X%2BCNs3CV%2FVHHoqFbi4d3R7onKlDzzQOp4JWznheZ0EH%2FONpe4Vajt%2FUTBNBJ%2FLSytnyANeXpmWYKHlDHJABf5ykA7L4ufjGk8VzDAFgR6iPtkm%2BWyTwI0xO1o7FdghbZ4%2FafIwrkdUHY%2Bt9dwztwLtN04wsko74wiije5VY8G3zEfeRWSvTVUjmF6FcBF33AsXBCUWApzuQo1xxP3BgxzvdGzuGlJZP%2FqPCquJa2DBCbZPRDcEdlhUP45SXzpqr3XxO7j6Z1b9z5eUuygQD6kMDFDaBinioW6PzER3zzPKyaSLwkZ6F0FsptRK9MKHwicoGOqUBdLg0uYlbI8K%2F%2FSGLTHULVp5I1NZ8xwCYh4MNzdmEcY7IXUSvYwMgliufrx%2FJro2DxKQ2Gj81By5ApgPslxiN1qNoLCh1pCjmWUvxLMjRxXnHq5SXe98aPOfvcv0%2FRYlQoFm%2FjelEWAEpyjEC4V5Vkv8t7yg%2BEV3UodYyOzsulaMaBECKh2ooikgyk98JcP3sDSt5eD3aQXd0YHZGATkOthfZwVht&X-Amz-Signature=cfcfeb178ef847980c2ee9acb32578a633a28903c4c66354de2aaaedd51abb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2BSSDP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuV9DPkeGIiioLI8Fauw5ldrfpWqOOJP2zS1x%2FtJ6E7AiEA7QrD8OQksT8JfcSC2WA4JtczaOowxsFQRXGGTb4DMP0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFauERdb9mVYLmasOCrcA3fBTBBADWF7swnPwffotRceTxNRTnn0HNibDKMhRxUaeGn7ZWVPaGrOBujzdqg8fLnTET4MEU5fj%2BWmkZ7UiSV7YnJo2BUxfmCdfjuFdWPgE7KnfQRfadDgGb%2BRWJrR9WCJP0pQlvTWWVIQllyOJZ%2FGSwqPn8vZ5d0B%2BYUOI%2FzvIdmGL%2B%2BoHLyLHAc0ctuuL1gAKVmCo6JmSP713OP31WusfAdWEd2mwqyfC9i1c1zqsLhPX1NXYzzp8jXOH9KjT%2Fok3Eo%2FCqcNDOSrI%2FCzJjblBwMbb5lB%2BBZO2Gd%2BDIy0y6qmKS5OMbFLYp8IEcFi8X%2BCNs3CV%2FVHHoqFbi4d3R7onKlDzzQOp4JWznheZ0EH%2FONpe4Vajt%2FUTBNBJ%2FLSytnyANeXpmWYKHlDHJABf5ykA7L4ufjGk8VzDAFgR6iPtkm%2BWyTwI0xO1o7FdghbZ4%2FafIwrkdUHY%2Bt9dwztwLtN04wsko74wiije5VY8G3zEfeRWSvTVUjmF6FcBF33AsXBCUWApzuQo1xxP3BgxzvdGzuGlJZP%2FqPCquJa2DBCbZPRDcEdlhUP45SXzpqr3XxO7j6Z1b9z5eUuygQD6kMDFDaBinioW6PzER3zzPKyaSLwkZ6F0FsptRK9MKHwicoGOqUBdLg0uYlbI8K%2F%2FSGLTHULVp5I1NZ8xwCYh4MNzdmEcY7IXUSvYwMgliufrx%2FJro2DxKQ2Gj81By5ApgPslxiN1qNoLCh1pCjmWUvxLMjRxXnHq5SXe98aPOfvcv0%2FRYlQoFm%2FjelEWAEpyjEC4V5Vkv8t7yg%2BEV3UodYyOzsulaMaBECKh2ooikgyk98JcP3sDSt5eD3aQXd0YHZGATkOthfZwVht&X-Amz-Signature=c0383806e786ced7f78872eac358551da0efdae1e41bf9495eebd598448aef4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

