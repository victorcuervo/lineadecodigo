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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCCD4KO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJcs6LZrai%2FO4ZtHV6BRpRLE9hwfjh%2BO8XH9u47wwW7AiEA7HOnGTsjSmpEt4PvvEpkbOWnPzpOK1187c%2FeJKZByjMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJJvpP8lxaObX3IPrircA2gvV3mUDfoFG7sBzQnIxVDGYC34JVkckuiyAtXfrJQtztNqxbxLL1SNzmV4YWpO%2FsrjzSnkDf5cyAmXD%2BvAHlnfnMXKn0iD4eD1pkS6HaVybyv%2BLcNaOW%2BXycP7uUN87Y9wST6n%2BbPRX%2BUYyljH5tn6mYDL0UQ5%2FanJQUcI1k%2B0RPJ4EQyfQzQt6kSvDU35EvhmLMLK2jl1kDhoQDZU7eVVFGoSu3uNZd0wNM6JrI4gaIjAaRzRx2Ka21iBTKjrCb0LI1ieReup0Uds0Yn1UdRuP9PbTqaB9CZi1w8ldOBQeidh7Eqr%2BUPLZ4GhXQG0qC2toHDvW8s7cPg3qXh9yxLDawAFcdZEHJidErVmhTec0bQRBj7Ra9GJlkunPdBbyqzHL3RWXKcA8%2FJ3lG0FZLU7ejL4CgAR4fic0wNygQGm5EXakrRzIWAymwbLR5QBZMPrW6nrArZPFC4QkXcrWTw%2BhJ0rJxugPdb577VdIszIykMhvBA%2ByPB6fikoWJ3ZiKcgEsooIMKEgIpD5ABt6rckTrjgzJhWb5jYKac1NpIqzJPoOB7UuPW1YVAg1VWnIqnNjDM5GAcVNAlQgnqe3%2FWpMfHIw0yxe8Wxaa9b%2BGXN39%2BqioEGvFdxG5DjMKD7h8oGOqUBquQ1RyFxKNf5NlHALpmVcp%2BluFU59LFU%2FxiUgQqjKIixPETYstsnwz6aGFcMK1%2ByAOwc6E%2FOeNOoB92A9fiNHWByo8oVQ%2B2vZMJfpvHEnrnqBjfCAUK2fhYi2rqG3U6t8ReHwR%2FaWXY5uEa%2B0cv5Rzug4rASzSze4dDgKTMhk6sRXIndhq87qi8ysJT1SLICkieUiFAzA3AW4HLPaSlLkdSK%2BgOR&X-Amz-Signature=b60f8df9acbe7724cf0267e610ebae4fafaa8ac412f320c3d2bd75f325f86d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCCD4KO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJcs6LZrai%2FO4ZtHV6BRpRLE9hwfjh%2BO8XH9u47wwW7AiEA7HOnGTsjSmpEt4PvvEpkbOWnPzpOK1187c%2FeJKZByjMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJJvpP8lxaObX3IPrircA2gvV3mUDfoFG7sBzQnIxVDGYC34JVkckuiyAtXfrJQtztNqxbxLL1SNzmV4YWpO%2FsrjzSnkDf5cyAmXD%2BvAHlnfnMXKn0iD4eD1pkS6HaVybyv%2BLcNaOW%2BXycP7uUN87Y9wST6n%2BbPRX%2BUYyljH5tn6mYDL0UQ5%2FanJQUcI1k%2B0RPJ4EQyfQzQt6kSvDU35EvhmLMLK2jl1kDhoQDZU7eVVFGoSu3uNZd0wNM6JrI4gaIjAaRzRx2Ka21iBTKjrCb0LI1ieReup0Uds0Yn1UdRuP9PbTqaB9CZi1w8ldOBQeidh7Eqr%2BUPLZ4GhXQG0qC2toHDvW8s7cPg3qXh9yxLDawAFcdZEHJidErVmhTec0bQRBj7Ra9GJlkunPdBbyqzHL3RWXKcA8%2FJ3lG0FZLU7ejL4CgAR4fic0wNygQGm5EXakrRzIWAymwbLR5QBZMPrW6nrArZPFC4QkXcrWTw%2BhJ0rJxugPdb577VdIszIykMhvBA%2ByPB6fikoWJ3ZiKcgEsooIMKEgIpD5ABt6rckTrjgzJhWb5jYKac1NpIqzJPoOB7UuPW1YVAg1VWnIqnNjDM5GAcVNAlQgnqe3%2FWpMfHIw0yxe8Wxaa9b%2BGXN39%2BqioEGvFdxG5DjMKD7h8oGOqUBquQ1RyFxKNf5NlHALpmVcp%2BluFU59LFU%2FxiUgQqjKIixPETYstsnwz6aGFcMK1%2ByAOwc6E%2FOeNOoB92A9fiNHWByo8oVQ%2B2vZMJfpvHEnrnqBjfCAUK2fhYi2rqG3U6t8ReHwR%2FaWXY5uEa%2B0cv5Rzug4rASzSze4dDgKTMhk6sRXIndhq87qi8ysJT1SLICkieUiFAzA3AW4HLPaSlLkdSK%2BgOR&X-Amz-Signature=d5a2a47971b5043aaaf5fbae840bdfb47286c5bc1f07ba9e10a32adc63f28f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

