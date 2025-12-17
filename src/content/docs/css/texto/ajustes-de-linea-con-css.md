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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPRUVLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDaNMnn7LRmgt3e6l04I7g4cr423qs9Vm8NCLAgeKUuAiEA2u%2By0ilO5lewf9tUCjeWj4PNCCcRDOyMlOCQokTOmTgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDECaAE9rFnVZp9SdaSrcA3g8ES2KHfbLMP8nFXavMvb5QII0TXAPI0HAMR%2FDsUN2B7uycWj1N6bQOzbBPgyLDOPhv7IRaJlzox8%2FrwCFWYo32Lp4yAB9HkUg%2F38woor71vykLHjO5DbQkzJIpJ16dEgqnU7bLZCpcAbmy00xM9quLVEA5LX6FhSOlAKOG8wNbyjVDsV4aOtiCmdGQTMd4lZFyg1APwzJJ%2F%2FS8srEqbhZidEM%2Bx%2BxUIjx440Pko8R6aDakX%2B3pV%2FpPYL%2Beppoz59RyjzLMizdB7tLUuOLxNWzoahmImMLbu1BO2XjXbClUaXAkcdr%2B28YTBru%2F%2FYn6CIT19VaEfBCgoyUbWhIV2UTSEREQ8BKptVt6bpHlemcAkfIh9axn0IHgy6FckhigGVRoZ436i7qUlwdRzk9k4LF8sGN%2FqL9AT3pPYuHshJ4xiaxo3e6UU8cK3C0%2FQM1aPALFo8v6xJmwU4lJnfbj6aHQQfFQbIYXL8iWiu3QaYWs9Hm7jUz%2BWJviKxE3pEdG40jyT7%2FNtG8gF%2B9BGEtSVwSONNoqtGSS4%2BqmNS2XqZRnq4mxxh9lZ0d9zqyl5XgGMF%2FHd4yW8E%2F4iRb9pGBXR04aQmplQ%2FOzNiFtN7gue%2FECXn8W3NM7yll07TpMKH7h8oGOqUBf%2FKQtLAswg3tE6MWPOUzKvey5YSMOnXQ%2FwPYmrZXhmLlGgM6ePOTD7Em%2FC74joR2dUpWu2%2F5UYB3KLtc%2FLHmrvlYc%2BumsOn9s5xWOg8bLk3xmLaDa0PX65RXH5n85bt%2FYANHu1iUjggZwTGQVhvLTfsjdPpXE6kcpIn8q4ZjTKUBcnfflgkkaiWpaJEfPLYUwfrC6aoITjCxrIznqceY17bBxEXC&X-Amz-Signature=9548f74e54fb684b43792c4cfff90f3aa0f569b7bbc3ccefd2f8317b9ea5cbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPRUVLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDaNMnn7LRmgt3e6l04I7g4cr423qs9Vm8NCLAgeKUuAiEA2u%2By0ilO5lewf9tUCjeWj4PNCCcRDOyMlOCQokTOmTgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDECaAE9rFnVZp9SdaSrcA3g8ES2KHfbLMP8nFXavMvb5QII0TXAPI0HAMR%2FDsUN2B7uycWj1N6bQOzbBPgyLDOPhv7IRaJlzox8%2FrwCFWYo32Lp4yAB9HkUg%2F38woor71vykLHjO5DbQkzJIpJ16dEgqnU7bLZCpcAbmy00xM9quLVEA5LX6FhSOlAKOG8wNbyjVDsV4aOtiCmdGQTMd4lZFyg1APwzJJ%2F%2FS8srEqbhZidEM%2Bx%2BxUIjx440Pko8R6aDakX%2B3pV%2FpPYL%2Beppoz59RyjzLMizdB7tLUuOLxNWzoahmImMLbu1BO2XjXbClUaXAkcdr%2B28YTBru%2F%2FYn6CIT19VaEfBCgoyUbWhIV2UTSEREQ8BKptVt6bpHlemcAkfIh9axn0IHgy6FckhigGVRoZ436i7qUlwdRzk9k4LF8sGN%2FqL9AT3pPYuHshJ4xiaxo3e6UU8cK3C0%2FQM1aPALFo8v6xJmwU4lJnfbj6aHQQfFQbIYXL8iWiu3QaYWs9Hm7jUz%2BWJviKxE3pEdG40jyT7%2FNtG8gF%2B9BGEtSVwSONNoqtGSS4%2BqmNS2XqZRnq4mxxh9lZ0d9zqyl5XgGMF%2FHd4yW8E%2F4iRb9pGBXR04aQmplQ%2FOzNiFtN7gue%2FECXn8W3NM7yll07TpMKH7h8oGOqUBf%2FKQtLAswg3tE6MWPOUzKvey5YSMOnXQ%2FwPYmrZXhmLlGgM6ePOTD7Em%2FC74joR2dUpWu2%2F5UYB3KLtc%2FLHmrvlYc%2BumsOn9s5xWOg8bLk3xmLaDa0PX65RXH5n85bt%2FYANHu1iUjggZwTGQVhvLTfsjdPpXE6kcpIn8q4ZjTKUBcnfflgkkaiWpaJEfPLYUwfrC6aoITjCxrIznqceY17bBxEXC&X-Amz-Signature=d2b8c47b6aacbb7859d38c155b857a16b871e35c255729cdb2a49c8105dfd9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

