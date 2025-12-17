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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KROW2E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF65P0Z0ilZ%2Fttfpoi2EyTqNJ9LhMqSVk73a%2BwO0bSSxAiBxZTsEom7V3lbtL5uDuBV3YIt0qyN%2BcPbWQaUoRznXMyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMAWZ0Chb9hD0zrWUCKtwDSjsI1ZheGXZXrQo%2BwhLq596rNu4DdpVVgrb%2F75b2WHAnVHG989yd1J0MFaU30LYQX28xvhTpYzaCfn2oMqslLl3Du8zY5284adLpSYs3qqHdzL69Qeu9rLLQRe98rLFFO4vgY2Horcv8%2FgI1OlfehK3kFgPXsItS%2BxGKpIY1utrkGsV83vh6JUgmaifUn9N7Ir9HTEetzTbEgrQx2vq2t60FLTGdiJW%2BaspmdFmQIzYsj%2F9kPeTOlWePbrT%2F%2FvkXO%2BZHRCtgF5rgC9r14byLuksg6CyZtssOWGVUV3gp8x4Q3kjj4APmpgiChe4pzLz54%2F07WV68lP4S62RcUM8fdribdMjIMxJuyfhcZYkj8327sDtzy1ILgOFHDlc1sZKNm97VgIdMpnu41YDpGNn%2F7WNB1N0gUkQjt2fiO%2F9G3aU0UyFUoV59ITn%2BxatnWTIrHzBRbl7LiANuDJ2IvH4qq7ch967olT8RE0NOcw6kuRaRzTyiNgDs6tD7SJcSRKAFs1YhxnJUj1qqiWF%2FAVoCFjuiRIGlQFPzkB%2FQFSGocMaeHH6FK%2BcEGEjlPwCkJ64Oru0BTk1ns%2B8c1SSa4I3YP9qwRa43ZcEM1ImYTy8ITTyta0W8Wn8XUYbGwoww88WKygY6pgEa%2F2BSsF3bNGpbsvbx8bj4%2BvwzVSRH5o9pFQUcdfO5wFRaoDcz8PnRsOvZt8h0FyhZxQSWibeQ8Is1WzoiRiesnimLDJmg0EO8rk5h6pvKT4RucONZlQCW%2B0xFNfb0bhqk62ilqexLcBcQYSlcEbgnh6d%2FEQAtK34vQ1%2Bn09nkYk7oVZHBVslPuqKzqELpQYLe7FoHue2i7UpfBaUP4c28FcZITfKm&X-Amz-Signature=21b43d35d56db305215499891e14f7adb32444e4fafccc388bf404e519347f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KROW2E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF65P0Z0ilZ%2Fttfpoi2EyTqNJ9LhMqSVk73a%2BwO0bSSxAiBxZTsEom7V3lbtL5uDuBV3YIt0qyN%2BcPbWQaUoRznXMyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMAWZ0Chb9hD0zrWUCKtwDSjsI1ZheGXZXrQo%2BwhLq596rNu4DdpVVgrb%2F75b2WHAnVHG989yd1J0MFaU30LYQX28xvhTpYzaCfn2oMqslLl3Du8zY5284adLpSYs3qqHdzL69Qeu9rLLQRe98rLFFO4vgY2Horcv8%2FgI1OlfehK3kFgPXsItS%2BxGKpIY1utrkGsV83vh6JUgmaifUn9N7Ir9HTEetzTbEgrQx2vq2t60FLTGdiJW%2BaspmdFmQIzYsj%2F9kPeTOlWePbrT%2F%2FvkXO%2BZHRCtgF5rgC9r14byLuksg6CyZtssOWGVUV3gp8x4Q3kjj4APmpgiChe4pzLz54%2F07WV68lP4S62RcUM8fdribdMjIMxJuyfhcZYkj8327sDtzy1ILgOFHDlc1sZKNm97VgIdMpnu41YDpGNn%2F7WNB1N0gUkQjt2fiO%2F9G3aU0UyFUoV59ITn%2BxatnWTIrHzBRbl7LiANuDJ2IvH4qq7ch967olT8RE0NOcw6kuRaRzTyiNgDs6tD7SJcSRKAFs1YhxnJUj1qqiWF%2FAVoCFjuiRIGlQFPzkB%2FQFSGocMaeHH6FK%2BcEGEjlPwCkJ64Oru0BTk1ns%2B8c1SSa4I3YP9qwRa43ZcEM1ImYTy8ITTyta0W8Wn8XUYbGwoww88WKygY6pgEa%2F2BSsF3bNGpbsvbx8bj4%2BvwzVSRH5o9pFQUcdfO5wFRaoDcz8PnRsOvZt8h0FyhZxQSWibeQ8Is1WzoiRiesnimLDJmg0EO8rk5h6pvKT4RucONZlQCW%2B0xFNfb0bhqk62ilqexLcBcQYSlcEbgnh6d%2FEQAtK34vQ1%2Bn09nkYk7oVZHBVslPuqKzqELpQYLe7FoHue2i7UpfBaUP4c28FcZITfKm&X-Amz-Signature=a32e35000d0e8d8ee78633fb4656c9376c5c66bb61f781868787c5cc60b7357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

