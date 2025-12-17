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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXHRQ4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFef4rkYKTRiKlHhgrs7c8Jcxl%2B1kdmbfRyBW8h1eMQpAiB3Ot1b1Oa%2BAxL%2FzLDrXqM8W5q9TgvuEDJIcheNiSfgsyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5PkAANUhmN5B%2BbwzKtwD55%2FGTpC1HfOahaTH4bMqGMrUhilTHhHseClupBa2dlL4EIv1MNcSOIpql6n67D1Ac7rAxz1RrdUM9PElk7Dk3nHeKd8GxFw99ZKphuIOI5Zvjf52XqtHhEnBpGM6mh12w8BiywHhBCedtgZhRjNfYKlVPDtHNlheF2KWEjPfxx%2F8wScLJWISIiGy3bUI3jfJsnjIW5xKEh0lRLsE1ouvxQcV1rd5%2FyiKs90hl1TPmfbP%2FBfouWD7TcFLxzmm8ng7OivL2i8VwhL9a5JA4wC7do9b2pmD%2B1sZTQr7icNdstZRkIkidfsrnCklO%2FynGagvLeQvx30U7ccAytB2Zv7D%2Farfb%2BAXv%2Fol6x1VVMwVPtQvPuDwR%2FVDHjkK%2BJbcsQuGdUMExBs5SEyb5y4bl%2BBNuvCKjCHZBRy3tKxfxZ8cyb06we2VNFx1pjR7Rq4QKDsbsjFCWLteZVya6zKB2ophmYY0jwU5h6FjK7v8kipLiyJ5lOlDPYV%2FFrWhKLsKOmrWSPmt%2BiDr5P1mcSXIOStFrkicKUmKy4P7KJaI0i94G02LlVuFTglphktg8OduY9IJ3I%2FkogFDpPuLqufBpvcHbRNHSYeeN2SDYnN4473%2BZEmjz6bQedk2DOPopsIw8s2IygY6pgFW6b6k7uTOgivDPUBFEG7MytXNvKwYujpnStAdYSWedMLPcQ8on5RFGur8u3jtnPq4AS%2FAs0yp0Zwr01zftaW4lwJM3KleHYr0TO619rcsK0zQ8btZjrOXuvDSPM%2FPmzQxsCEGHh00oe%2B2xOALnwIWP1%2BZwh3eJCXSNskZBHDKFwzj4vLkRqRDp20sYIZ6x6TzinASChBNV5URR%2FDKvx4lDhJrBwUr&X-Amz-Signature=686d77127cb4351752f37f190121c56e95d2fad0db0778fc928bfe11a9a0eca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXHRQ4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFef4rkYKTRiKlHhgrs7c8Jcxl%2B1kdmbfRyBW8h1eMQpAiB3Ot1b1Oa%2BAxL%2FzLDrXqM8W5q9TgvuEDJIcheNiSfgsyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5PkAANUhmN5B%2BbwzKtwD55%2FGTpC1HfOahaTH4bMqGMrUhilTHhHseClupBa2dlL4EIv1MNcSOIpql6n67D1Ac7rAxz1RrdUM9PElk7Dk3nHeKd8GxFw99ZKphuIOI5Zvjf52XqtHhEnBpGM6mh12w8BiywHhBCedtgZhRjNfYKlVPDtHNlheF2KWEjPfxx%2F8wScLJWISIiGy3bUI3jfJsnjIW5xKEh0lRLsE1ouvxQcV1rd5%2FyiKs90hl1TPmfbP%2FBfouWD7TcFLxzmm8ng7OivL2i8VwhL9a5JA4wC7do9b2pmD%2B1sZTQr7icNdstZRkIkidfsrnCklO%2FynGagvLeQvx30U7ccAytB2Zv7D%2Farfb%2BAXv%2Fol6x1VVMwVPtQvPuDwR%2FVDHjkK%2BJbcsQuGdUMExBs5SEyb5y4bl%2BBNuvCKjCHZBRy3tKxfxZ8cyb06we2VNFx1pjR7Rq4QKDsbsjFCWLteZVya6zKB2ophmYY0jwU5h6FjK7v8kipLiyJ5lOlDPYV%2FFrWhKLsKOmrWSPmt%2BiDr5P1mcSXIOStFrkicKUmKy4P7KJaI0i94G02LlVuFTglphktg8OduY9IJ3I%2FkogFDpPuLqufBpvcHbRNHSYeeN2SDYnN4473%2BZEmjz6bQedk2DOPopsIw8s2IygY6pgFW6b6k7uTOgivDPUBFEG7MytXNvKwYujpnStAdYSWedMLPcQ8on5RFGur8u3jtnPq4AS%2FAs0yp0Zwr01zftaW4lwJM3KleHYr0TO619rcsK0zQ8btZjrOXuvDSPM%2FPmzQxsCEGHh00oe%2B2xOALnwIWP1%2BZwh3eJCXSNskZBHDKFwzj4vLkRqRDp20sYIZ6x6TzinASChBNV5URR%2FDKvx4lDhJrBwUr&X-Amz-Signature=16b182b0d0584f1c7a8bdd29e8c9b621993ba3b237e8039aeef88668fd97e442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

