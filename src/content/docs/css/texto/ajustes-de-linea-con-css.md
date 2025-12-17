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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X26MOWG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2vcih4%2FHziUDxtE0QVySP8deb%2FTnJIXbzwLIHd%2BP1wIhAN1hKXeiE7tdX0BXQZitCZv%2BK3ibJECg42EyV2OsykoTKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2BLDC7%2BN61ZXiRFicq3ANHmpJZKFBKTBNM2882CbTXrGQOppBq3jpqUiFm6vShO0jw7I4uDx%2FMM7OXCdLU4Uge4X92mf3rKPf%2BAUv0C%2F8mk8xmZJdVaFJTQJSTKXcejKa260DGpKE0znnYpDKTQNs44pXO9VXTyDCjr2C%2BgQJfGJJg4ArEQeH4AAOQOOwTFlaWw5iRaZI%2BVZvYZy1IDPqUzAsuFzIbd13LPBGe8kzj39cNHULZFHqpfw7PTw9Eel6%2FKmv3OhGRf1d6R13DlkgPXsh%2BVe1FJ%2BAhFyPrtAIRy73aoruE5i2%2BSk7nFDFCD4gc1z673TLbQyN4ixK4%2BXggnGC8ANCP39w7n%2FioxCdD0EpkbzSbyOJpuaYxhFeuvCZrkb%2F14C0JaxaMRSKLyF5Y77A8Gl3QreqPH0QsG86PftOLwmdV4PCj6JGthj%2BDxZrrm7Mqd36ZX8xWxrJjeyrQkQo6sQl9loSZxxhnqSEx%2B5WkkyYeBNIQ8DmbktY4%2B3rVOiYwblmaIsKUCncdPCxcU7tKwmEyr4Y5ixZGTOVaqnKcPTD7A2oLvTJTkrgsqHJ9nIvyMMmls4nZokp9BBuMyfIpeDS%2BEkL3Swg6V56ZJyJPMptpDURo8cZWa2w8A3oqTuD6wOCtrVE%2BxjDg6YjKBjqkAd4GntkQ%2B9ft19A2fSWEQeS%2BT%2BtDef%2F4hMtKAN0oWW0RI1h1BXur1AwYY5RVwzTmH9IDqOdgCuZ3%2FLJCELuu6oAd6QEJCDtfzrqWpKxSmCwF7UT639ixp21q9TevLuXN6r1j6ztpKuoLotBRh5tNrr%2FYrw0VIveSSxeySG8cvmVQhBBATF002jQjbO4LuXWdrf4aE8pasMYukrf50xlHLIh%2Fr5Da&X-Amz-Signature=e2d6e64550f4b6abc9b239587d1a487a6aeb604ca1265efdd3a6af6cb2bc6b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X26MOWG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV2vcih4%2FHziUDxtE0QVySP8deb%2FTnJIXbzwLIHd%2BP1wIhAN1hKXeiE7tdX0BXQZitCZv%2BK3ibJECg42EyV2OsykoTKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2BLDC7%2BN61ZXiRFicq3ANHmpJZKFBKTBNM2882CbTXrGQOppBq3jpqUiFm6vShO0jw7I4uDx%2FMM7OXCdLU4Uge4X92mf3rKPf%2BAUv0C%2F8mk8xmZJdVaFJTQJSTKXcejKa260DGpKE0znnYpDKTQNs44pXO9VXTyDCjr2C%2BgQJfGJJg4ArEQeH4AAOQOOwTFlaWw5iRaZI%2BVZvYZy1IDPqUzAsuFzIbd13LPBGe8kzj39cNHULZFHqpfw7PTw9Eel6%2FKmv3OhGRf1d6R13DlkgPXsh%2BVe1FJ%2BAhFyPrtAIRy73aoruE5i2%2BSk7nFDFCD4gc1z673TLbQyN4ixK4%2BXggnGC8ANCP39w7n%2FioxCdD0EpkbzSbyOJpuaYxhFeuvCZrkb%2F14C0JaxaMRSKLyF5Y77A8Gl3QreqPH0QsG86PftOLwmdV4PCj6JGthj%2BDxZrrm7Mqd36ZX8xWxrJjeyrQkQo6sQl9loSZxxhnqSEx%2B5WkkyYeBNIQ8DmbktY4%2B3rVOiYwblmaIsKUCncdPCxcU7tKwmEyr4Y5ixZGTOVaqnKcPTD7A2oLvTJTkrgsqHJ9nIvyMMmls4nZokp9BBuMyfIpeDS%2BEkL3Swg6V56ZJyJPMptpDURo8cZWa2w8A3oqTuD6wOCtrVE%2BxjDg6YjKBjqkAd4GntkQ%2B9ft19A2fSWEQeS%2BT%2BtDef%2F4hMtKAN0oWW0RI1h1BXur1AwYY5RVwzTmH9IDqOdgCuZ3%2FLJCELuu6oAd6QEJCDtfzrqWpKxSmCwF7UT639ixp21q9TevLuXN6r1j6ztpKuoLotBRh5tNrr%2FYrw0VIveSSxeySG8cvmVQhBBATF002jQjbO4LuXWdrf4aE8pasMYukrf50xlHLIh%2Fr5Da&X-Amz-Signature=f02703db5894951b2a200a46ac4b974c46009aa80f15d206119042dfc464ff31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

