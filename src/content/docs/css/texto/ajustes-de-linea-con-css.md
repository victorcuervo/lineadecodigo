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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQQVA6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCftkqn7TN40SjJ9uLLA6YTRD%2FjNYduC3FqYhdVYYWSTgIgLHMsMe2uYfQAuNU26UjptINJ5IYqs3SbGxEEkU3kwBgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kT%2B8fduIuTiuC%2ByrcA0dfkqMDWmVDHncOPU16OF5%2BNnJF3EEdFu06KelBUyGIy6gYaQCMoY5uaY%2F3Irpg6mHKk8k%2BwSufKR8AwmLWYnLS68OrRcE5NsOw7Yx1ug9TeQaw1c9VZO%2BkHWA7jtsO2h7sdtS13SPAMg4QWiK9vdi6vhRWJaWtw%2FIPtEBy58tMDJeQ%2FOGpW32f6jXG2cGoAsBMSCq%2B5OuCrfWGF9p2zk6s%2FOYBHa9O%2BVdU8DRhZi1TwipNZtswdnVV6o1pRdcCtfYB1ug80hrq%2FKqpuM9ZkIjHQY4Aa4OKs3gJoflciBoErWTJuNjVZudIeKi1ME6MrTsSHQjwel%2BvtRpb62qyXkJ8rpCsTIT4Jdih0W%2F0SIGIMtuDm4umaw4E9Y8DJhPT%2B%2BgfI%2BuIq6Y32W0kyQ0A%2B4PsWPzBysn0tkW%2BrTJB6f2hNzF5Su26ey8%2B0xwgrpK%2FiFz8R2jRr3FrKQHKCRHliUsBaJ%2BTIRKVXqyUqudwwr%2BtV69O7lwX9Qxx5Tjan5Crg7xyLC2npixbxb8v%2FVr0VpnXfHv2yPG8rsBFiYw7LXY7dRMrK%2FK7BjY9IFkTyK8Da%2FlvZit1oLLzSgx3T%2Bqj2qQiUi3axjw5xycOTbRmMLjPt5GDh1hItFNVM7NhMMSfi8oGOqUB8vynf9%2FcS0%2BVGWY3RNNK4BEgZrYXyI7sdjRyd9BmrlqRn%2BFR4Xgud4BwPPDd9mhGJD%2FVQZj1XdXf2yHgHA6pdDt%2BovDmTT22VHpgTKUK0wiDNxZ5OuvncmXX9jBhHWSwXX7S5ExBoAjhmIdDwyStb2FgfnNP%2F7wSiwjUCxAUNVvvKGQ16znRkeNM6CZ9QZD%2BptHlclC8VxmkeoQvx7OX4SwD2YZO&X-Amz-Signature=1e25661bb4c160f6ff9c3ca29db87b1d88266d556a2f6e09daa2d61a8b4e8a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQQVA6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCftkqn7TN40SjJ9uLLA6YTRD%2FjNYduC3FqYhdVYYWSTgIgLHMsMe2uYfQAuNU26UjptINJ5IYqs3SbGxEEkU3kwBgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4kT%2B8fduIuTiuC%2ByrcA0dfkqMDWmVDHncOPU16OF5%2BNnJF3EEdFu06KelBUyGIy6gYaQCMoY5uaY%2F3Irpg6mHKk8k%2BwSufKR8AwmLWYnLS68OrRcE5NsOw7Yx1ug9TeQaw1c9VZO%2BkHWA7jtsO2h7sdtS13SPAMg4QWiK9vdi6vhRWJaWtw%2FIPtEBy58tMDJeQ%2FOGpW32f6jXG2cGoAsBMSCq%2B5OuCrfWGF9p2zk6s%2FOYBHa9O%2BVdU8DRhZi1TwipNZtswdnVV6o1pRdcCtfYB1ug80hrq%2FKqpuM9ZkIjHQY4Aa4OKs3gJoflciBoErWTJuNjVZudIeKi1ME6MrTsSHQjwel%2BvtRpb62qyXkJ8rpCsTIT4Jdih0W%2F0SIGIMtuDm4umaw4E9Y8DJhPT%2B%2BgfI%2BuIq6Y32W0kyQ0A%2B4PsWPzBysn0tkW%2BrTJB6f2hNzF5Su26ey8%2B0xwgrpK%2FiFz8R2jRr3FrKQHKCRHliUsBaJ%2BTIRKVXqyUqudwwr%2BtV69O7lwX9Qxx5Tjan5Crg7xyLC2npixbxb8v%2FVr0VpnXfHv2yPG8rsBFiYw7LXY7dRMrK%2FK7BjY9IFkTyK8Da%2FlvZit1oLLzSgx3T%2Bqj2qQiUi3axjw5xycOTbRmMLjPt5GDh1hItFNVM7NhMMSfi8oGOqUB8vynf9%2FcS0%2BVGWY3RNNK4BEgZrYXyI7sdjRyd9BmrlqRn%2BFR4Xgud4BwPPDd9mhGJD%2FVQZj1XdXf2yHgHA6pdDt%2BovDmTT22VHpgTKUK0wiDNxZ5OuvncmXX9jBhHWSwXX7S5ExBoAjhmIdDwyStb2FgfnNP%2F7wSiwjUCxAUNVvvKGQ16znRkeNM6CZ9QZD%2BptHlclC8VxmkeoQvx7OX4SwD2YZO&X-Amz-Signature=a944dda52eecb28056b20feba9e5ab57b3824d26e2792b2c0f03ee3b0c96846b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

