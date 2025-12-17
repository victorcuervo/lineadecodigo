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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJUBTWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYTj%2FEhAYeYzUtVJX34t8qTuoblTvukAEg6E1N9xU%2F%2FAiEA7B7X5Uc%2B7UnUYYYkGUZuTUEOQWkTR7ClEML6t25t54Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMvFh4UjNn9iIlDPircAwrmVLIMOOXXughpR0ERv4givWHzk94bNBNcD7cGdZ9tSEvOP8IJ6fIBrLfUxAxMID2SL8N6EnVNc0EUjbaJP4ayRLsCezksEc4h3dZAVYKgoBrp8ab%2B5qn8TqMYsnU9WLw5nCDFSc2MRecwZMSiXN6ioVmerxPZqp5b5aj4c%2BJyLc1gbEty9zOdmbWk8WsxcstIcBkJ%2BKoLuDTBKXh1kQMRjwucEatKoZGnI3wrjmEWFnneMUMI%2F6plBUCSrdMnDKY9fUvsrHCSC4Tg3YaHAgPowUqwtAjUgnm2A2blhyR8tL02jUqnooWhNoJFPKCbZz582uvv728yymCKffpZikR%2FOpneUidio%2FcKpxNGG3qOjtQ%2F3pwyPudB94OllLGWST5q26OlNmEQxeruntZzhvlKHkqPvnGlals3efK8chNxLedIRcQSQTGGSf2PPvfCBZSH3S1AYQ6OJlogFK4QMUWhUW6i7bZs2WsWjqZgBmgSigsm0E%2FqeZnP5FvMZ3LOSeW6k9NpMmFZDngE4Tgeul6DId86Sc2Ydt2BiEYq55ZVCctZ4w2I4l0CSwJYlPh6i9XJAJrGjmRDHq3QhbdZRMNnX%2BkVZsgsGoVMfdnTIfKr9pGs9ql%2BNafWbb2aMIDTicoGOqUBvtGdiNSSNhIV981yOmKGSUFTwrcJGwRhMPNBGzNrwOg2mfkGTh53IdEUHj%2FzPsi5X7i%2BOby%2Bk8%2BU9drjCXEanB7AvG0nEPpAlSPxecbnVtSpD7fgTQDIAqv2oVBgf37YsPqvhziImROTR3bvemNT469u3B2O8%2B0KKAg96MEQJWdubweeEXSdWWASCzfESSDutEfxPsh36bOFvuM%2BgxEgNscuGUfC&X-Amz-Signature=8474890cdf43d2ade16c40e303d87609491b51040d97a4371ae2f5a7456ee867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJUBTWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYTj%2FEhAYeYzUtVJX34t8qTuoblTvukAEg6E1N9xU%2F%2FAiEA7B7X5Uc%2B7UnUYYYkGUZuTUEOQWkTR7ClEML6t25t54Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMvFh4UjNn9iIlDPircAwrmVLIMOOXXughpR0ERv4givWHzk94bNBNcD7cGdZ9tSEvOP8IJ6fIBrLfUxAxMID2SL8N6EnVNc0EUjbaJP4ayRLsCezksEc4h3dZAVYKgoBrp8ab%2B5qn8TqMYsnU9WLw5nCDFSc2MRecwZMSiXN6ioVmerxPZqp5b5aj4c%2BJyLc1gbEty9zOdmbWk8WsxcstIcBkJ%2BKoLuDTBKXh1kQMRjwucEatKoZGnI3wrjmEWFnneMUMI%2F6plBUCSrdMnDKY9fUvsrHCSC4Tg3YaHAgPowUqwtAjUgnm2A2blhyR8tL02jUqnooWhNoJFPKCbZz582uvv728yymCKffpZikR%2FOpneUidio%2FcKpxNGG3qOjtQ%2F3pwyPudB94OllLGWST5q26OlNmEQxeruntZzhvlKHkqPvnGlals3efK8chNxLedIRcQSQTGGSf2PPvfCBZSH3S1AYQ6OJlogFK4QMUWhUW6i7bZs2WsWjqZgBmgSigsm0E%2FqeZnP5FvMZ3LOSeW6k9NpMmFZDngE4Tgeul6DId86Sc2Ydt2BiEYq55ZVCctZ4w2I4l0CSwJYlPh6i9XJAJrGjmRDHq3QhbdZRMNnX%2BkVZsgsGoVMfdnTIfKr9pGs9ql%2BNafWbb2aMIDTicoGOqUBvtGdiNSSNhIV981yOmKGSUFTwrcJGwRhMPNBGzNrwOg2mfkGTh53IdEUHj%2FzPsi5X7i%2BOby%2Bk8%2BU9drjCXEanB7AvG0nEPpAlSPxecbnVtSpD7fgTQDIAqv2oVBgf37YsPqvhziImROTR3bvemNT469u3B2O8%2B0KKAg96MEQJWdubweeEXSdWWASCzfESSDutEfxPsh36bOFvuM%2BgxEgNscuGUfC&X-Amz-Signature=33afafdb618111e8c2fa56a3fbf9cfd73c98d95bc00fd8a5b8f738f7fb0fe80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

