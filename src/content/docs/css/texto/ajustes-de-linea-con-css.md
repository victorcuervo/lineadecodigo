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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGW4Q3R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIGTXkyQRBcbjQsF8CEvt9y3TsGNy1iYu1tYoPU8vcegIgFQLxbHc87H8dEIEiZQa9eRWBUL2TPBzRq6KUA4MP1O0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJqCWGBgxIMxJjWGISrcAzfQb9SQw56%2FFoP3VMVeVLivxn4zlkQTro373IhwjmJyiEgwJ2U8ICWzUNnQkIfqxtVnT4OIstpVeAYWN%2FAUb3q89Iv6UQdlf9yxgiX%2FuXybge1zlVbjN5QvRo0EQwJdOczG9y5481eC%2FBEz7Qhcbj4WRoV2dyHf21g3jgqXidsnG5nAP54wGVjhbnfIi%2B7dMT4K7WL8jkvEDu9%2FaSutbh6UdOIwx5R8mVttbTUUO0FtH8kS6jFAPgXRorOa6yuTdPrqr5Eykk2lah8mRPsCrtosV58jm%2F2jha3GqY3udb8ucndYtf25QI456AtslGPBkn5EqsoxY%2BF%2BCz7CKorTI259RSFMXSHoCnbnaJ5Ayw4OVJlFEz3Ek7Meu%2BksYj3xWgdo5b7zEKAUmmcDiVHhDs1pP4MLwk0J1YX2C%2BcebmMZiZWhd5LRnbyvbDU2T1Ok4yVW8g0kAipstcYk9dS%2FOZLZsqcVGhgf7ujUhQK8%2FqL0H7pZcObAys4W6lGl9vQJnY00KVUkSXJ4C8S5aHe0L2WOwdaiAU7I%2FbBP7HqdGeGY4QvCBSeX8QS8va2GREIcrDf1l8VVY1IO4RGphur7jg4H3bmxDLdLoPTwekAc%2BYFYH3OWcdZvFRZPdRp1MMv6h8oGOqUBA0ZQhf79oTxKuk%2B9u%2BG0XTjApEYmVoBCM4TInHPE%2FAnpasx8qO%2FJr9y1202bFIjDTizpoTlZ9gzuyoqdkXy0EAwlR0KiPD6EUcbZiOdZ3RJxa95s4hZbDcNCopFoWhKl4M20kcg1vzVBp7ZrWgeKGVnXmXNezQUjfayM9fos16G4ZM9S%2FeiPLmBvH2gwuvhgWyVHf4I8nhi3qmjnQicJrJPrtGJz&X-Amz-Signature=0ce276a5b95b93aea7a6a5c41cec86e2c9602d6751637b167c067c506d696970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGW4Q3R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIGTXkyQRBcbjQsF8CEvt9y3TsGNy1iYu1tYoPU8vcegIgFQLxbHc87H8dEIEiZQa9eRWBUL2TPBzRq6KUA4MP1O0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJqCWGBgxIMxJjWGISrcAzfQb9SQw56%2FFoP3VMVeVLivxn4zlkQTro373IhwjmJyiEgwJ2U8ICWzUNnQkIfqxtVnT4OIstpVeAYWN%2FAUb3q89Iv6UQdlf9yxgiX%2FuXybge1zlVbjN5QvRo0EQwJdOczG9y5481eC%2FBEz7Qhcbj4WRoV2dyHf21g3jgqXidsnG5nAP54wGVjhbnfIi%2B7dMT4K7WL8jkvEDu9%2FaSutbh6UdOIwx5R8mVttbTUUO0FtH8kS6jFAPgXRorOa6yuTdPrqr5Eykk2lah8mRPsCrtosV58jm%2F2jha3GqY3udb8ucndYtf25QI456AtslGPBkn5EqsoxY%2BF%2BCz7CKorTI259RSFMXSHoCnbnaJ5Ayw4OVJlFEz3Ek7Meu%2BksYj3xWgdo5b7zEKAUmmcDiVHhDs1pP4MLwk0J1YX2C%2BcebmMZiZWhd5LRnbyvbDU2T1Ok4yVW8g0kAipstcYk9dS%2FOZLZsqcVGhgf7ujUhQK8%2FqL0H7pZcObAys4W6lGl9vQJnY00KVUkSXJ4C8S5aHe0L2WOwdaiAU7I%2FbBP7HqdGeGY4QvCBSeX8QS8va2GREIcrDf1l8VVY1IO4RGphur7jg4H3bmxDLdLoPTwekAc%2BYFYH3OWcdZvFRZPdRp1MMv6h8oGOqUBA0ZQhf79oTxKuk%2B9u%2BG0XTjApEYmVoBCM4TInHPE%2FAnpasx8qO%2FJr9y1202bFIjDTizpoTlZ9gzuyoqdkXy0EAwlR0KiPD6EUcbZiOdZ3RJxa95s4hZbDcNCopFoWhKl4M20kcg1vzVBp7ZrWgeKGVnXmXNezQUjfayM9fos16G4ZM9S%2FeiPLmBvH2gwuvhgWyVHf4I8nhi3qmjnQicJrJPrtGJz&X-Amz-Signature=544e7697ba290ee206d1854a49fc77456e801a394cc149680e2ffeebd10a7333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

