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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TAPRUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCexrw%2FCDe2fmD93358rTKMhlT%2BN45qfNErCQuRSnReTwIgUKEgddytCs%2FvEO3ctxpcE823B5PU5kUaArCE96qETzQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWIagCG023JhD209ircA9xHsWwl4VxJN5POZHmSXrjdbXrPh9qBah0RJ0X93j2QpZKZ21835KnANpB2asOsZLuQvQmgTa2PdH20POTGyTFzfWhjKLakLnZee7oQsivNIS0zNEyr2VmZemnmg6KZZsKhxnKBZXWtBTFXlTZW9NJZzJdpUv9GshmdncUcGxZ9Cc1LoICEAZV74L3evzs7WhcEMJy4ymcAu0wZlX3oI8EHvR4kN%2BbDNow%2BWY257TsMav0SVe6RAoD5lTs0VN7Pn6TRHM50wvC2U7evuatRQMoCRlrIDG4uCUxQilt%2BlhuTpjlkvWKvTS3mCPCPIdE1z5erLDHe34eQkdR79WEzwFKVtq2qyh4I1xSgnVp1411%2FZJIj0O4BGsfi9OcT%2FQTGL%2BNp%2F4YRgsivhA1N86ZYD31TlGvfB7Ywi3AIHGL3pnzvrvwCjh4IdkyHvF1zo%2Br7aFMnOyoomLDK5SeE2XPu%2F1B23vi%2FVgA28qP%2BeHElX%2FlJBy7DrqNe%2F2YF0UR7tfhBq6li2CXf8eFM477tXpo1BWAKpC5sCPCi6ixGvzK60DFyGPMSDNpOOAGs2B3gzZXj5cpKIpkMsI37I64zDQwrh9RTE1ARO3dIUf2LBUFbeA9F630NxnD%2BdryMZeq%2FMMyAi8oGOqUBpkCDe96LOq4%2F1DZ59QoTsZIi6iPH5KTmfiHR5hburbIApohOt5NOLCVnOBzlsXeqK1Qfs%2BpFVD8xw2joKJF1Tl3o6sThIvkH%2F10TBGa4qPtfFn%2BGh8rOS5u%2Bbi28KfbjKc%2FNYCt8SVz8MDOfhHocYw%2F2t%2BfMH3JDnguV5zBsFIGcSLgrfqbx0a43JgZtNQ9McVsUZ4QMepN4Yxfpq5b4LgI8xeRE&X-Amz-Signature=1b62845726fe65c3b1f853e6158f4206f478ad16eb3356158996c7009def8454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3TAPRUA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCexrw%2FCDe2fmD93358rTKMhlT%2BN45qfNErCQuRSnReTwIgUKEgddytCs%2FvEO3ctxpcE823B5PU5kUaArCE96qETzQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWIagCG023JhD209ircA9xHsWwl4VxJN5POZHmSXrjdbXrPh9qBah0RJ0X93j2QpZKZ21835KnANpB2asOsZLuQvQmgTa2PdH20POTGyTFzfWhjKLakLnZee7oQsivNIS0zNEyr2VmZemnmg6KZZsKhxnKBZXWtBTFXlTZW9NJZzJdpUv9GshmdncUcGxZ9Cc1LoICEAZV74L3evzs7WhcEMJy4ymcAu0wZlX3oI8EHvR4kN%2BbDNow%2BWY257TsMav0SVe6RAoD5lTs0VN7Pn6TRHM50wvC2U7evuatRQMoCRlrIDG4uCUxQilt%2BlhuTpjlkvWKvTS3mCPCPIdE1z5erLDHe34eQkdR79WEzwFKVtq2qyh4I1xSgnVp1411%2FZJIj0O4BGsfi9OcT%2FQTGL%2BNp%2F4YRgsivhA1N86ZYD31TlGvfB7Ywi3AIHGL3pnzvrvwCjh4IdkyHvF1zo%2Br7aFMnOyoomLDK5SeE2XPu%2F1B23vi%2FVgA28qP%2BeHElX%2FlJBy7DrqNe%2F2YF0UR7tfhBq6li2CXf8eFM477tXpo1BWAKpC5sCPCi6ixGvzK60DFyGPMSDNpOOAGs2B3gzZXj5cpKIpkMsI37I64zDQwrh9RTE1ARO3dIUf2LBUFbeA9F630NxnD%2BdryMZeq%2FMMyAi8oGOqUBpkCDe96LOq4%2F1DZ59QoTsZIi6iPH5KTmfiHR5hburbIApohOt5NOLCVnOBzlsXeqK1Qfs%2BpFVD8xw2joKJF1Tl3o6sThIvkH%2F10TBGa4qPtfFn%2BGh8rOS5u%2Bbi28KfbjKc%2FNYCt8SVz8MDOfhHocYw%2F2t%2BfMH3JDnguV5zBsFIGcSLgrfqbx0a43JgZtNQ9McVsUZ4QMepN4Yxfpq5b4LgI8xeRE&X-Amz-Signature=eebb4e5a28fa3870585020f3bef82ee552cd3d96ad055905ac3cba744f1851f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

