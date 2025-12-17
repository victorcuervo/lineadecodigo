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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA27ZQ77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ndrPPqWhxSm2xEHRujhuKihPNKaviD26CqH%2BtmTYjAIhAMo5bxciZ2zIw8QtQ6CzCaQxyDKte7yBwkuWrB70%2FJtpKv8DCHIQABoMNjM3NDIzMTgzODA1Igyn8joO%2Bl1xFN4ezioq3APSGOQQEgQ6Rp1TCg%2FwbbEsHInWfD5uRNOphLsg3Im06Aacet%2Fl1YDyLV4tJCpGkisZ5oPH4%2FCk28SUopqkoN9qfUrF5W4HIwAZRJaR46XVTbFq%2Fv3zBhc8hL5qnNxKYrDTXAC9yPKZXyQoDnL1VecuFfTlDXyiaSZWUqjqZirMsYAx5FrbVDpuyQrjwEPlgQRQpMpooeJ2lT1mvXbVQpA60dCflNCcTiNbeo3m6L1BL%2B8ipea2uNYTKmBjH3%2BmdkT4xCj5eMX3S4HYryu8KTARIb4r0QWqW0ws6b%2FxkJ0Yba432pxigfs5j4P2CH6THbeIJm8IPYgy%2B1SVcbgdL%2FnF6Yn8JnOj77vvbuBkKN2KZFmMS2Bz9MAVl9WYmjldr0AYwRxtW0yByxuCB%2BG3JAMfzsAZfavZ6UqUU3FjYtdpKEo1onS23qm0cOhlbKdwDQ%2BL%2BBWsPjlv8noZU1XWgiIfMih7NuP0AlrKrnjHklXhA9isMv9WqgXQvuJu7goOVs9hRWxTiveGigEgtmxyx%2BxH6ChLUQKSDKYo8bmCpptd6YcuVJ6UGqa2u%2FtGj99N5U3f%2BGx7IgER4AG4d305vRxhyxjYgSiBbg%2BOKL%2FIdLiecPKTehhkS2nRiaSnbDCt%2B4fKBjqkAUvqFCnowr0mUI2INxa2yW1BRgIfsF5XPZan%2FGcLViCgxdKkE8aUib6WISJTY4ulELdkGtEmBqedRSrFihsknPoetp0Qz%2FUyRsHqlVTOyUMa3ja5mBIGCt1smd3cTh6lKXPROfNJYkF5eA2MHraDsd%2FKbmBJ%2BbrperhuJ1GMO9IGPiBq%2BnrtjjKG6TjDnpgbQMNyMiFo6OwB2vANeBVat%2FAA88L6&X-Amz-Signature=709946f2fc3bd459a6c87b45d3616bd22dc35096dabac5f4de8d0b8a875c86d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA27ZQ77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ndrPPqWhxSm2xEHRujhuKihPNKaviD26CqH%2BtmTYjAIhAMo5bxciZ2zIw8QtQ6CzCaQxyDKte7yBwkuWrB70%2FJtpKv8DCHIQABoMNjM3NDIzMTgzODA1Igyn8joO%2Bl1xFN4ezioq3APSGOQQEgQ6Rp1TCg%2FwbbEsHInWfD5uRNOphLsg3Im06Aacet%2Fl1YDyLV4tJCpGkisZ5oPH4%2FCk28SUopqkoN9qfUrF5W4HIwAZRJaR46XVTbFq%2Fv3zBhc8hL5qnNxKYrDTXAC9yPKZXyQoDnL1VecuFfTlDXyiaSZWUqjqZirMsYAx5FrbVDpuyQrjwEPlgQRQpMpooeJ2lT1mvXbVQpA60dCflNCcTiNbeo3m6L1BL%2B8ipea2uNYTKmBjH3%2BmdkT4xCj5eMX3S4HYryu8KTARIb4r0QWqW0ws6b%2FxkJ0Yba432pxigfs5j4P2CH6THbeIJm8IPYgy%2B1SVcbgdL%2FnF6Yn8JnOj77vvbuBkKN2KZFmMS2Bz9MAVl9WYmjldr0AYwRxtW0yByxuCB%2BG3JAMfzsAZfavZ6UqUU3FjYtdpKEo1onS23qm0cOhlbKdwDQ%2BL%2BBWsPjlv8noZU1XWgiIfMih7NuP0AlrKrnjHklXhA9isMv9WqgXQvuJu7goOVs9hRWxTiveGigEgtmxyx%2BxH6ChLUQKSDKYo8bmCpptd6YcuVJ6UGqa2u%2FtGj99N5U3f%2BGx7IgER4AG4d305vRxhyxjYgSiBbg%2BOKL%2FIdLiecPKTehhkS2nRiaSnbDCt%2B4fKBjqkAUvqFCnowr0mUI2INxa2yW1BRgIfsF5XPZan%2FGcLViCgxdKkE8aUib6WISJTY4ulELdkGtEmBqedRSrFihsknPoetp0Qz%2FUyRsHqlVTOyUMa3ja5mBIGCt1smd3cTh6lKXPROfNJYkF5eA2MHraDsd%2FKbmBJ%2BbrperhuJ1GMO9IGPiBq%2BnrtjjKG6TjDnpgbQMNyMiFo6OwB2vANeBVat%2FAA88L6&X-Amz-Signature=c47bbd4a9f2c55130f2bee34dc7f31543fa0d5b7a890146ec343929bf020ed7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

