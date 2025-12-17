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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSEZDVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZZJixj0Nh7m5Tp0G26xNjr3jtfWuiYeMbdC7kN5wSpAiApKHUimHAKRCBqmH%2FJ2o6FjlbxPPpr2g6PPDnyvj4NKSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMhdI%2B%2FQhJl9nJ6b33KtwDQLOKIvbow7N843QYXAiKMgm3u6cTsinOGVlhUhMDno3QdR4kqBcfweR6UlRO0F%2FEnxSKytdMAGSg36NYa6Ony8%2BXlFHqccu26mbNf33f8zjnO1W%2BcBEmWN2kmksKYi5801MINuOM0j9NgGTXuzmA%2BnG%2BeWUoecuSwY0T5BMO1iUmIupL2igPxUbYOMpme0e9FSH9mJZri3B1VXP0hPaZrjkgbKIbUH7jLNJaf%2Bxc5YWt66g4mcq%2B8M6L%2BBUwJZpgZTJ3lwJnXKZNoTE2CPN%2FtTVwnIq7H6IpHQs5qQd2Vyrd4S8FUrfM1udOTqSsuONbgsPAI%2B1MSEHzpZHQmEu4JmwL9SUxty4Af4cn8YyxZ8%2B2%2FR6vqJrvvjalYeJ3F2b20TfT38Das9PN3P1U7lAefNHFtJw6uo322ayfeSIND4aBNKHKlfY3hm1V5N9BfrT3dO61U5DTbgErg2BLyg8YqBASO%2FIovrRbeJ7FUb8FXZ36UugR6XKGN6UFJACs%2Fv0yhQNWFgCW6LKB7Win5KnnS1gJmmq4TAm7wJl4jiHQhRDE5uyCzMpEvtVGiXe8z3HQCKRKt9lcT5qirc9IxSDanxwkNeXoljWlZ06o0WMrA9hQc%2BvRNwxUrjgHQzIwzPCJygY6pgHoHKtOHUMyGw33ECHTburNnvyrbrHnbDqbD6GaKplz2w8Gm4obZi4Sa345Q28MEMa%2FUptgeHYb8ZJpRqAgOqBZkAYoCykY%2B%2BDzP2zxZn1yLWButiYEnoBgAf995Y%2FrwecZ5g29mSnLubNa1ikAP%2FHiB5Cq4d9hDhFmOjMoeSByX1kIJuPV4haqzd4k069xhzYSIQyxsrl3E2D0xAHxG7G7r6YzB6a%2F&X-Amz-Signature=832f5ac29cef0b51b19373a1841576ea8af103286d48b475bce2d4189bac0bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSEZDVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZZJixj0Nh7m5Tp0G26xNjr3jtfWuiYeMbdC7kN5wSpAiApKHUimHAKRCBqmH%2FJ2o6FjlbxPPpr2g6PPDnyvj4NKSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMhdI%2B%2FQhJl9nJ6b33KtwDQLOKIvbow7N843QYXAiKMgm3u6cTsinOGVlhUhMDno3QdR4kqBcfweR6UlRO0F%2FEnxSKytdMAGSg36NYa6Ony8%2BXlFHqccu26mbNf33f8zjnO1W%2BcBEmWN2kmksKYi5801MINuOM0j9NgGTXuzmA%2BnG%2BeWUoecuSwY0T5BMO1iUmIupL2igPxUbYOMpme0e9FSH9mJZri3B1VXP0hPaZrjkgbKIbUH7jLNJaf%2Bxc5YWt66g4mcq%2B8M6L%2BBUwJZpgZTJ3lwJnXKZNoTE2CPN%2FtTVwnIq7H6IpHQs5qQd2Vyrd4S8FUrfM1udOTqSsuONbgsPAI%2B1MSEHzpZHQmEu4JmwL9SUxty4Af4cn8YyxZ8%2B2%2FR6vqJrvvjalYeJ3F2b20TfT38Das9PN3P1U7lAefNHFtJw6uo322ayfeSIND4aBNKHKlfY3hm1V5N9BfrT3dO61U5DTbgErg2BLyg8YqBASO%2FIovrRbeJ7FUb8FXZ36UugR6XKGN6UFJACs%2Fv0yhQNWFgCW6LKB7Win5KnnS1gJmmq4TAm7wJl4jiHQhRDE5uyCzMpEvtVGiXe8z3HQCKRKt9lcT5qirc9IxSDanxwkNeXoljWlZ06o0WMrA9hQc%2BvRNwxUrjgHQzIwzPCJygY6pgHoHKtOHUMyGw33ECHTburNnvyrbrHnbDqbD6GaKplz2w8Gm4obZi4Sa345Q28MEMa%2FUptgeHYb8ZJpRqAgOqBZkAYoCykY%2B%2BDzP2zxZn1yLWButiYEnoBgAf995Y%2FrwecZ5g29mSnLubNa1ikAP%2FHiB5Cq4d9hDhFmOjMoeSByX1kIJuPV4haqzd4k069xhzYSIQyxsrl3E2D0xAHxG7G7r6YzB6a%2F&X-Amz-Signature=392f40b5f2745b773fd110090ad10322265417fedd0669eac766032be12e143c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

