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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODFMPDW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2FW4q9F8GGdNY1K5GmJSctJX%2FdarSwbHBGicaAh3EWAiB%2BGyNjGoLKSwtEFKYeO6Yt6KYaV%2F8Q6p20%2Bm2myMYKJyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B5FR6ZFVwwI6OfpoKtwDJ891HUUVLqT6n7Bg%2BkGNTjxahrAOBZ2CAMh68rl6T%2BzW89vPl3Y9c89Uqg3%2Ba7A0mxZkb6mLhC%2FYm8PraQGl5iDom3z9CswUlooKORTAW6Y9r398z98Z1Cn12T%2FSiURnXpErYQOtv0AnsSWWwW8DpRPiqZpbjr3CesyiU4VYuU20DToyfU78beiXD3f72JH6qCAsud77%2F4dhn3SupOJTzerBkv9ihfxHHqFQk%2B7LKKOxrOV2DXX81Y2E3E%2BMFcAIX75wt4jn4MDn191EQsD08TDMaBeqQhBjuZnyaC1%2FiIxkNT8ej%2BDh%2Bbzhy6%2FWpf%2FoPuSiSWKiJX%2BL7fYG%2F5TZlDzAK8KHcGN%2B2V4K%2FqslKKZ0pLe%2FlJ1Wq57NSL2x%2Fd0effPfHSKH%2FNYa9VXNb6CEzw4Y1d4XJH94PfEAPHjq26kb%2Bj9VkunYd4ttv%2B4LLF4i0Y497%2FqtogoOvsC6GfsPSUdZGvxeveaZKw%2F5Ld85t9jvJ1XmKCUjXoj5RxPWaVzc3mGLOvaDvEXcBCa5qKY9AOuJDemXWQFt5ifskjQ8W3flOqmHh02aDM9s%2BPdJkmElse0KR0WjDbufSY75uqxS7emJdUEmiH0RrXaWBEPaptEU7W1ozCVbgQCgztowgPGJygY6pgGk5MAyHxcWAePnS8h70iit6itSDMx1L3isNtP8lgyzMD%2BzGAnmEcUq5DyDdoAcFAPBW0nO1bPjPlV8K23sanYte%2BLa2OWNgITg2TrEfoH5%2Bcuym4k2X5vnewokEsuXCXsm4d9ppaoVLdprxAPFiBVcajHGJ%2BVcX9s%2BR1Gnf8xxMomLoC3yAAOMxDuEeqhpmlZFcYgJhTer7%2FOe1MNvNoB%2BdcLEbw0h&X-Amz-Signature=4cc69d6a8f137a58f794a110fbd8bab19e7435309df81da136c946895f837d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODFMPDW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb%2FW4q9F8GGdNY1K5GmJSctJX%2FdarSwbHBGicaAh3EWAiB%2BGyNjGoLKSwtEFKYeO6Yt6KYaV%2F8Q6p20%2Bm2myMYKJyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B5FR6ZFVwwI6OfpoKtwDJ891HUUVLqT6n7Bg%2BkGNTjxahrAOBZ2CAMh68rl6T%2BzW89vPl3Y9c89Uqg3%2Ba7A0mxZkb6mLhC%2FYm8PraQGl5iDom3z9CswUlooKORTAW6Y9r398z98Z1Cn12T%2FSiURnXpErYQOtv0AnsSWWwW8DpRPiqZpbjr3CesyiU4VYuU20DToyfU78beiXD3f72JH6qCAsud77%2F4dhn3SupOJTzerBkv9ihfxHHqFQk%2B7LKKOxrOV2DXX81Y2E3E%2BMFcAIX75wt4jn4MDn191EQsD08TDMaBeqQhBjuZnyaC1%2FiIxkNT8ej%2BDh%2Bbzhy6%2FWpf%2FoPuSiSWKiJX%2BL7fYG%2F5TZlDzAK8KHcGN%2B2V4K%2FqslKKZ0pLe%2FlJ1Wq57NSL2x%2Fd0effPfHSKH%2FNYa9VXNb6CEzw4Y1d4XJH94PfEAPHjq26kb%2Bj9VkunYd4ttv%2B4LLF4i0Y497%2FqtogoOvsC6GfsPSUdZGvxeveaZKw%2F5Ld85t9jvJ1XmKCUjXoj5RxPWaVzc3mGLOvaDvEXcBCa5qKY9AOuJDemXWQFt5ifskjQ8W3flOqmHh02aDM9s%2BPdJkmElse0KR0WjDbufSY75uqxS7emJdUEmiH0RrXaWBEPaptEU7W1ozCVbgQCgztowgPGJygY6pgGk5MAyHxcWAePnS8h70iit6itSDMx1L3isNtP8lgyzMD%2BzGAnmEcUq5DyDdoAcFAPBW0nO1bPjPlV8K23sanYte%2BLa2OWNgITg2TrEfoH5%2Bcuym4k2X5vnewokEsuXCXsm4d9ppaoVLdprxAPFiBVcajHGJ%2BVcX9s%2BR1Gnf8xxMomLoC3yAAOMxDuEeqhpmlZFcYgJhTer7%2FOe1MNvNoB%2BdcLEbw0h&X-Amz-Signature=111755a41ae06ffb8702e0c3ef3dd3f66dc953dfd4f7f0526877afa9cf587d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

