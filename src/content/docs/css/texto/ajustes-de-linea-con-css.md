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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672N3K6JA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS2AcNc5MTHOMZcR2kqmj7lwVANZxUe53tMXYDNwvniAIhAKR3nmO9v%2Bt24RcnGRmjCrVaaxHq8H%2Bot%2F%2BSVtu5VgPdKv8DCH4QABoMNjM3NDIzMTgzODA1Igyde4bfSRJhBtkXTIEq3AOQKotifjji%2BAFDy33a9ixmIHJ%2FMd0VMJUm%2FedIDIDc0IlYcjHT98ZikcE1ApZyEuBLmS%2BJocierLRQp%2B9FmuICZU1ZbvJuEhMzOLU%2FYEnV3u%2F4r6QttGW%2FG5qEcsO1cIiYF2MMFkz3kXCrOZjDjKcy%2BrwA45xvhx8exkdIL%2BDJF%2FEyptg7%2BoVPQDpZ5%2BOmlLQWS0c8LeGtZbbGwXqfWqUSic2LONDig7x6l3dwBxBBA1ftoIjHKZmsPPHhGhgpyzMj0psefK7Uw4NYWqpbhDte%2BXj32GC1Kb%2F3tHDsiFN1aHNTgvZj15KM9IGDGfwvLfqyWNrA6qo1Ms3H7XTpVN3QemOIkzSa3JTbEto3gN9QwKwiPV0dwGKPRWd3Y9NpmQy93t%2F6Il35oAYe7N0SJqlrCmnaOIsMlv9T0a7hoQsabJVOyvj10UyDXIZGf%2FXJh3cALFMAkx3BMF%2B%2BGcoYL4A0AR7pkVZIu2Gnl6hLw80sLl1zBg99K5%2BebdTZ%2BdG53%2BNvZ%2B4Fa%2BgTdqbPFUYoe5Xnd7yEoVDI2JevgitTSxennlAaHneCuMUczEuyvD%2Bu7hoobWNzUCfkXmN1JRkaZqWzzkfE1JCjKfRoh3ZnamhnsUxa0FanklDvxxq6oTDnxorKBjqkAQC3%2F6EPeKORzGC8xDa0GLVcw0hRZmBx3QtGkoFu04qEP2TZaRcQy175%2FKQw04wvS1GwT3AsnibjQUneVPDHHawwrxKg7ZVHSR4UMJdg9hHYGPI33Pfr0yrnk2uYqvyyFUIYn28ggmdkA5FGONwm03YDpUwox8er8TJycn68wN66uYItpb%2Fa2WHOkVmwU3AHaszZV69QQik4FvfsFr4Tjmxi%2BsGx&X-Amz-Signature=c4d0bc305eaa2709c1c9e5e668546a8bccf1a344b795ae82ba0d243068df3958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672N3K6JA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS2AcNc5MTHOMZcR2kqmj7lwVANZxUe53tMXYDNwvniAIhAKR3nmO9v%2Bt24RcnGRmjCrVaaxHq8H%2Bot%2F%2BSVtu5VgPdKv8DCH4QABoMNjM3NDIzMTgzODA1Igyde4bfSRJhBtkXTIEq3AOQKotifjji%2BAFDy33a9ixmIHJ%2FMd0VMJUm%2FedIDIDc0IlYcjHT98ZikcE1ApZyEuBLmS%2BJocierLRQp%2B9FmuICZU1ZbvJuEhMzOLU%2FYEnV3u%2F4r6QttGW%2FG5qEcsO1cIiYF2MMFkz3kXCrOZjDjKcy%2BrwA45xvhx8exkdIL%2BDJF%2FEyptg7%2BoVPQDpZ5%2BOmlLQWS0c8LeGtZbbGwXqfWqUSic2LONDig7x6l3dwBxBBA1ftoIjHKZmsPPHhGhgpyzMj0psefK7Uw4NYWqpbhDte%2BXj32GC1Kb%2F3tHDsiFN1aHNTgvZj15KM9IGDGfwvLfqyWNrA6qo1Ms3H7XTpVN3QemOIkzSa3JTbEto3gN9QwKwiPV0dwGKPRWd3Y9NpmQy93t%2F6Il35oAYe7N0SJqlrCmnaOIsMlv9T0a7hoQsabJVOyvj10UyDXIZGf%2FXJh3cALFMAkx3BMF%2B%2BGcoYL4A0AR7pkVZIu2Gnl6hLw80sLl1zBg99K5%2BebdTZ%2BdG53%2BNvZ%2B4Fa%2BgTdqbPFUYoe5Xnd7yEoVDI2JevgitTSxennlAaHneCuMUczEuyvD%2Bu7hoobWNzUCfkXmN1JRkaZqWzzkfE1JCjKfRoh3ZnamhnsUxa0FanklDvxxq6oTDnxorKBjqkAQC3%2F6EPeKORzGC8xDa0GLVcw0hRZmBx3QtGkoFu04qEP2TZaRcQy175%2FKQw04wvS1GwT3AsnibjQUneVPDHHawwrxKg7ZVHSR4UMJdg9hHYGPI33Pfr0yrnk2uYqvyyFUIYn28ggmdkA5FGONwm03YDpUwox8er8TJycn68wN66uYItpb%2Fa2WHOkVmwU3AHaszZV69QQik4FvfsFr4Tjmxi%2BsGx&X-Amz-Signature=e6423d0f373d109c4f8311514022457abca151707cb771bafcd0da672f4c4ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

