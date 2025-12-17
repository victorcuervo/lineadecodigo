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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVZB2RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX37fYlOBSg34G3KSGoaw49AU7%2FeiWVB%2FDcsK6WF0K%2BAIhAO66ybSIcAwfIRhZMpkXGkD%2Ftp%2F0MEvsrLzE9cJTWapnKv8DCHcQABoMNjM3NDIzMTgzODA1IgyFlpZLBkTm61qbsGQq3APB%2FFYlvLCMHnPI7AARsRsdMJOvxqvEeD1f1dULfnqfhEd4hZ17e6nxkixviOE6r0UAU3V%2FM8liPvVKpIwi%2BcJbBQeaus5CfOGAgTp7eJ191aLU%2FF%2BBhDEf4iB%2BghJGmopdVAXTigc5NkmkFx6%2FHnj%2BwE1%2BEnBksTLHyzzf8u8cMBNcTrT%2BgI2y7lraNl8NP%2Bba%2BP26SnCndRc1pQhxTl0ZqBbsuq7A9zIJkk5sC8U%2BuTW%2FvwitKLD383jD1opEFWkOIV9SAa3CcqXyEnEFuuUQAb4RGO5IMeQluGtWts%2F3x7LF2AaxUoVKUlwuluj9hDV%2BQFGRBleebVT7Eos2N6256BIsftc2uADorDXMZlDy3p7kNrYCuKlWYaHXlvM7oZTKaGP0mwVdTrS%2BbnscWPeuikztgqTJkapzobYcscLyh0vG58MCCnhqvWrFOYbe4ExBgX1GHRzsY6pfaPjVmWayq8MfaKmxg4pbmasaxGyfDNtmQgD1WYgbk1e%2B4hnaBty5MwlPYYYak2gkQJu%2BX6q2L0KpnhHT8PzY4fpvyOMCymE1QVhW%2FWcueWlf5mDc14ydNVv8Vjn2TxUodPwWIO%2BzkJV6NUvu4yYsHzP08OIIRjFETTwkeLJ5uie1MjDggonKBjqkARKY2AHXRlxzHKxFIN0fe6PiJ8nXs%2FumIYFQA6e0Sei%2Bryhkhcg9oo9DyZsnDOPiYfWi0KxStEZdId82QFDlYU2ZI3qoLDRqwbYJi8xJ1LMN8QqzdSNkHkA4gGPkatxxbnDGsZL2P7qYBOCNuhjSWVpGikC7iINxZz%2BCgw24l5iekbn76y7Lmz0SsTzVWx8cgnQJVC3kIjl5fQw3BXyLYZyvhIy1&X-Amz-Signature=e9d88cc24c35360f0374d118cc06e9f01cc40e893b7c0f037d2c158ae8fd373f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVZB2RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX37fYlOBSg34G3KSGoaw49AU7%2FeiWVB%2FDcsK6WF0K%2BAIhAO66ybSIcAwfIRhZMpkXGkD%2Ftp%2F0MEvsrLzE9cJTWapnKv8DCHcQABoMNjM3NDIzMTgzODA1IgyFlpZLBkTm61qbsGQq3APB%2FFYlvLCMHnPI7AARsRsdMJOvxqvEeD1f1dULfnqfhEd4hZ17e6nxkixviOE6r0UAU3V%2FM8liPvVKpIwi%2BcJbBQeaus5CfOGAgTp7eJ191aLU%2FF%2BBhDEf4iB%2BghJGmopdVAXTigc5NkmkFx6%2FHnj%2BwE1%2BEnBksTLHyzzf8u8cMBNcTrT%2BgI2y7lraNl8NP%2Bba%2BP26SnCndRc1pQhxTl0ZqBbsuq7A9zIJkk5sC8U%2BuTW%2FvwitKLD383jD1opEFWkOIV9SAa3CcqXyEnEFuuUQAb4RGO5IMeQluGtWts%2F3x7LF2AaxUoVKUlwuluj9hDV%2BQFGRBleebVT7Eos2N6256BIsftc2uADorDXMZlDy3p7kNrYCuKlWYaHXlvM7oZTKaGP0mwVdTrS%2BbnscWPeuikztgqTJkapzobYcscLyh0vG58MCCnhqvWrFOYbe4ExBgX1GHRzsY6pfaPjVmWayq8MfaKmxg4pbmasaxGyfDNtmQgD1WYgbk1e%2B4hnaBty5MwlPYYYak2gkQJu%2BX6q2L0KpnhHT8PzY4fpvyOMCymE1QVhW%2FWcueWlf5mDc14ydNVv8Vjn2TxUodPwWIO%2BzkJV6NUvu4yYsHzP08OIIRjFETTwkeLJ5uie1MjDggonKBjqkARKY2AHXRlxzHKxFIN0fe6PiJ8nXs%2FumIYFQA6e0Sei%2Bryhkhcg9oo9DyZsnDOPiYfWi0KxStEZdId82QFDlYU2ZI3qoLDRqwbYJi8xJ1LMN8QqzdSNkHkA4gGPkatxxbnDGsZL2P7qYBOCNuhjSWVpGikC7iINxZz%2BCgw24l5iekbn76y7Lmz0SsTzVWx8cgnQJVC3kIjl5fQw3BXyLYZyvhIy1&X-Amz-Signature=3bc2a8d75885ca66bed2e035c1aae0d9761452e0ba3e5305d23408b4f6f21900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

