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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBECVKK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYJfT1JwAJLOx5fK8shOueHrH07w4upJmoqnduom%2FQRAiEAhzaJJ0vYNo2al7aEBfLFl61zSRLmInoPPumlJrOaMhwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFqZ1hJladyCsKyKtircAxBe92bxwozGkAV4E9rgwkP763%2BsUvB6XBUtmFML1ARHdVKJy%2BYyUEbsNfc8tmS0BRQ3HwjsRibqOxMCECUxOc9UKASN0cwwnX1VMk7cjMLt%2BLZPY149173e3bgpD67IXkIP4sbPW%2FjwUqD1ehjGqlZiTSry%2B3xKlijzTcmbRDhbmg7wcEz%2FVw8FcosHu3jG6HuPerw6dfybrnrZOOie5Kcbku1wRK6cHkn6de1%2BK78PoqEm6k79hxnNkg1D5ZNLc7v%2FI0J3iGg0h0FqNWuOX9gHpfnDBgX7VYs0r4kbO44WVyuGdKtPkF6abcHDCkIA7s%2FqXP7jkuTuHpBk5IE9xERiwWlnDDunmK93CT0HPJyng2d5uaVIqqtVIlOw1WkZTUr7tWoe0n8bGHEnZa0F84Y4RZfdnODy34z6iAae11%2FO280IEny5ti7m%2FSEqdKLsGbRxxwMQi1T1Z6aIL1kBB1prCU1XcpsosQJ0%2FWCF8L9FlJZ5U1z6NavzHux8UF1WMVtIgJ0DYYxz71QYXOW0zPsPoRlnUBGKRnNC%2BTlkortJCPAfXa3c6zjh%2BQgBQhsd8TCcy7SetG6vhlPSNtZ1TIF%2FSMtGbBsN0avlPIYFwMId2wWKSoOc%2FUjYMBJJMKzGisoGOqUBtWuEIg7cLKzWh9NvcLArvilX2qNNss%2FtMuTJBtwZw411YclGRn%2FQOW%2F9cZsm4ELC5uHmd9av1xhfAAl2awyqfHY0zMboCupBmh5RxZiG%2Fjl0OwJScJ%2F5qI%2FcBGIHAEhOKqeLeaWOvFQxGL2S%2FrI%2Fmgl9xkgFKDHyiHc3cBFca6YLmy%2FR4uArLKnglsjMSm9a%2BbAoA%2Fd%2BvbiKvC4GvkfFCNf5DEGY&X-Amz-Signature=c3275f88001618533ab12bc907eb1ae383ffe6348c24dae207d8b01b0842499e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBECVKK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYJfT1JwAJLOx5fK8shOueHrH07w4upJmoqnduom%2FQRAiEAhzaJJ0vYNo2al7aEBfLFl61zSRLmInoPPumlJrOaMhwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFqZ1hJladyCsKyKtircAxBe92bxwozGkAV4E9rgwkP763%2BsUvB6XBUtmFML1ARHdVKJy%2BYyUEbsNfc8tmS0BRQ3HwjsRibqOxMCECUxOc9UKASN0cwwnX1VMk7cjMLt%2BLZPY149173e3bgpD67IXkIP4sbPW%2FjwUqD1ehjGqlZiTSry%2B3xKlijzTcmbRDhbmg7wcEz%2FVw8FcosHu3jG6HuPerw6dfybrnrZOOie5Kcbku1wRK6cHkn6de1%2BK78PoqEm6k79hxnNkg1D5ZNLc7v%2FI0J3iGg0h0FqNWuOX9gHpfnDBgX7VYs0r4kbO44WVyuGdKtPkF6abcHDCkIA7s%2FqXP7jkuTuHpBk5IE9xERiwWlnDDunmK93CT0HPJyng2d5uaVIqqtVIlOw1WkZTUr7tWoe0n8bGHEnZa0F84Y4RZfdnODy34z6iAae11%2FO280IEny5ti7m%2FSEqdKLsGbRxxwMQi1T1Z6aIL1kBB1prCU1XcpsosQJ0%2FWCF8L9FlJZ5U1z6NavzHux8UF1WMVtIgJ0DYYxz71QYXOW0zPsPoRlnUBGKRnNC%2BTlkortJCPAfXa3c6zjh%2BQgBQhsd8TCcy7SetG6vhlPSNtZ1TIF%2FSMtGbBsN0avlPIYFwMId2wWKSoOc%2FUjYMBJJMKzGisoGOqUBtWuEIg7cLKzWh9NvcLArvilX2qNNss%2FtMuTJBtwZw411YclGRn%2FQOW%2F9cZsm4ELC5uHmd9av1xhfAAl2awyqfHY0zMboCupBmh5RxZiG%2Fjl0OwJScJ%2F5qI%2FcBGIHAEhOKqeLeaWOvFQxGL2S%2FrI%2Fmgl9xkgFKDHyiHc3cBFca6YLmy%2FR4uArLKnglsjMSm9a%2BbAoA%2Fd%2BvbiKvC4GvkfFCNf5DEGY&X-Amz-Signature=da83635c34fdf5c81776534705e812da959cfc63459f22b45b9e07755f03219a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

