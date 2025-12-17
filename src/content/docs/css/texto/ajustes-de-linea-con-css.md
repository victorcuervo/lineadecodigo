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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5SGEI3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcs2vezCfV2ZcBzpCLf5gaqsZ%2Fb9KB%2FDhrJz2MTqxD2AiEA3cTXpipXzwaj560lZPGOKWpE6ap9xHNgmBB6t9wcmGoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOTR429qUqCfA4QjNyrcAzSrxGH5l8Tv7gfNh19S2sXWyc7LB4ROKlvryz9DwaTMdzT4qyvkS1PWgBQM3fTkIADNzfwU5IHcFEA59qq6CgSTALN%2Bjwt2m0sjbVRkwOU52BidvEnOrfU2JVDEDz9VUi%2BqP%2BRyh0%2BOmlE6XnZvV9NoX80iw%2Fy3qmZKwleMoMiS2MLeYukFcSadlga5RsvYJRrzDs3NXprnaLfKsUiyyCplMCw0ix2KV9pewM3YbkP9so1JmBxaS4vYlaN43Hzk7ePo%2BzFcbpKHyYiDqDU8sbfB0%2ByJKE40VO0AlFjN%2FhamX25patPZnxl1BNRrwHTwjP%2B7QvpBmNn1z6joRL1ZQ%2BK8vUf6i9NiYmH4VnrFMs9QF6Ksu6mL7vtVu4ovxM2699N9OBQYWV7pMY5F15G4BAT5aQxlqgypM4fL7XcUeQpuhHArSba1TAHxzgHqBSqLQmi7TaKs5HrkCF5Vh9zQ8N8ng%2Bb5iYUPhFHiqRreCIJwZqrbITAOd5D6tUB3XhOHpUiffk3%2BKWm87r3qAKtY%2Fz108KG5fytMMgNbM2Emabaf%2FCwS7M%2BD6xKVFwShXBGmqpWQ61qTd1RBYEJnzGblu4Mt00hAprdP8kYm3s4v5b%2FHwl5Pqh7i4m2BSnqpMNXeh8oGOqUBtJpzVpScHFEGp2tt2hns28fd0oaomxjjjPdGTo3EMCpJtgiAFsxRZ3QNgay0IoQFUy%2F8QQ2O3mwRbaAv70F%2FsBH4btcMHcHEK6%2FWS8eoFnK4ANG0na4ZfCBlVu11ikt%2F1j%2BNIwL%2F1qy7ZfJYLsIGCw7z8G9JRiX9G%2BiWgDKvebyNqnSXlaNrD%2FRwtVDi%2B9U0TcJN97m2k9l9wsn5IBKE65oZh2ap&X-Amz-Signature=1f5729f36c4bb1bfb9e5740afada7ff2f08344f7050fd9fe0960081f7be700ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5SGEI3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcs2vezCfV2ZcBzpCLf5gaqsZ%2Fb9KB%2FDhrJz2MTqxD2AiEA3cTXpipXzwaj560lZPGOKWpE6ap9xHNgmBB6t9wcmGoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOTR429qUqCfA4QjNyrcAzSrxGH5l8Tv7gfNh19S2sXWyc7LB4ROKlvryz9DwaTMdzT4qyvkS1PWgBQM3fTkIADNzfwU5IHcFEA59qq6CgSTALN%2Bjwt2m0sjbVRkwOU52BidvEnOrfU2JVDEDz9VUi%2BqP%2BRyh0%2BOmlE6XnZvV9NoX80iw%2Fy3qmZKwleMoMiS2MLeYukFcSadlga5RsvYJRrzDs3NXprnaLfKsUiyyCplMCw0ix2KV9pewM3YbkP9so1JmBxaS4vYlaN43Hzk7ePo%2BzFcbpKHyYiDqDU8sbfB0%2ByJKE40VO0AlFjN%2FhamX25patPZnxl1BNRrwHTwjP%2B7QvpBmNn1z6joRL1ZQ%2BK8vUf6i9NiYmH4VnrFMs9QF6Ksu6mL7vtVu4ovxM2699N9OBQYWV7pMY5F15G4BAT5aQxlqgypM4fL7XcUeQpuhHArSba1TAHxzgHqBSqLQmi7TaKs5HrkCF5Vh9zQ8N8ng%2Bb5iYUPhFHiqRreCIJwZqrbITAOd5D6tUB3XhOHpUiffk3%2BKWm87r3qAKtY%2Fz108KG5fytMMgNbM2Emabaf%2FCwS7M%2BD6xKVFwShXBGmqpWQ61qTd1RBYEJnzGblu4Mt00hAprdP8kYm3s4v5b%2FHwl5Pqh7i4m2BSnqpMNXeh8oGOqUBtJpzVpScHFEGp2tt2hns28fd0oaomxjjjPdGTo3EMCpJtgiAFsxRZ3QNgay0IoQFUy%2F8QQ2O3mwRbaAv70F%2FsBH4btcMHcHEK6%2FWS8eoFnK4ANG0na4ZfCBlVu11ikt%2F1j%2BNIwL%2F1qy7ZfJYLsIGCw7z8G9JRiX9G%2BiWgDKvebyNqnSXlaNrD%2FRwtVDi%2B9U0TcJN97m2k9l9wsn5IBKE65oZh2ap&X-Amz-Signature=466f505b08520b96a3e496a6487b87d719c3d46424380ac339a6fc9c23a78f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

