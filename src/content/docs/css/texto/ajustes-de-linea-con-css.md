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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLRDQ7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKVdgnPew4hfRhnOlS8bHfUJudQOgry8StApJrzlCehAiEA4wWvvD0E%2FBf2oeuxzgwg2GgrX9E1EtE%2Bk6%2FOffzyhkoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbAmF9LI5FztOGTfCrcA3kjdXBAT%2BAwjUPr7FxnFdUdd6Br82Cykxgjt57RNm73u%2F9WdyHyhATbQqUyzeHsoB8Qh%2B%2BJ%2BqgUVVwU2q%2FLYVzfcuiAv7mhrX35iuqvh6jnQ246FgoE2LZssNlVCQbPKtmn1VFUMGo8Pozm8k3MbwV90zKYxmpC2hGOUWm7P4fyOUg2FI%2FQIAVbJFx7u76Nb1QM6sJhHmZE%2Fpus0EajkTYdebYeDB9WbDT0Y7dXzFcO84F%2FgxktMsalJJaXKnnRAM5yUUJ1uk7QCpLrQB%2Brigpns5BnlqGUHekPf53L7WkasmUT7HEbF6FvJia1qUf0e88RjgHKm3QP0Bgo77B5tJCj2E5aOeOZ%2By6tJpC5wvLhV0em8%2Bk%2F1yhEDQNf4RblpKxi0sZtVs5d2u7Do%2BuUvKpj1FrvkbTzXBMD271dl76fVENPGx%2BAnjx9ZJu49KR%2BCW7eVL%2FzMJpFEFmf1MASVjA0GTAfNFLaMyQm5QhJjV7lPyG9sfgbATrjSrCnb9uz4enbwhL2zZQLF6OKVCOt4grUAodUabI%2FllTzsN1Wj4oSia54csxZKSDtonuCBEKX9CbBx2xm6IykrRkLTgH4ebaudvZl%2F05V8y92JyvFlbBbt9Ny%2FrcJ8gTDjXKGMO3vicoGOqUBGEjmL86ftY3lL6BpmrvSreohXdWETDz7ESOCGH7GNPGzlpDPJaZrBb1SWMVAunfOxLcUXbD5zYEAZJqv%2B9NzLOfLlKO03Lm5qoCEHhb171M7gUF9AGfW9BTwhOIw14L650FmLwhFDDOxjrQjD%2FL6mZjogr%2FPv5m%2FFWz9BHFFSyx7tdXuOzQ4muRbrQTDvpd9SPEkT%2Bs3zNHWzD2jx0a%2BmWvtRriC&X-Amz-Signature=8678591bef7ed1a11806ce5b96b8de4609fb0a2b00aae7992530d842871c8ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLRDQ7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKVdgnPew4hfRhnOlS8bHfUJudQOgry8StApJrzlCehAiEA4wWvvD0E%2FBf2oeuxzgwg2GgrX9E1EtE%2Bk6%2FOffzyhkoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDbAmF9LI5FztOGTfCrcA3kjdXBAT%2BAwjUPr7FxnFdUdd6Br82Cykxgjt57RNm73u%2F9WdyHyhATbQqUyzeHsoB8Qh%2B%2BJ%2BqgUVVwU2q%2FLYVzfcuiAv7mhrX35iuqvh6jnQ246FgoE2LZssNlVCQbPKtmn1VFUMGo8Pozm8k3MbwV90zKYxmpC2hGOUWm7P4fyOUg2FI%2FQIAVbJFx7u76Nb1QM6sJhHmZE%2Fpus0EajkTYdebYeDB9WbDT0Y7dXzFcO84F%2FgxktMsalJJaXKnnRAM5yUUJ1uk7QCpLrQB%2Brigpns5BnlqGUHekPf53L7WkasmUT7HEbF6FvJia1qUf0e88RjgHKm3QP0Bgo77B5tJCj2E5aOeOZ%2By6tJpC5wvLhV0em8%2Bk%2F1yhEDQNf4RblpKxi0sZtVs5d2u7Do%2BuUvKpj1FrvkbTzXBMD271dl76fVENPGx%2BAnjx9ZJu49KR%2BCW7eVL%2FzMJpFEFmf1MASVjA0GTAfNFLaMyQm5QhJjV7lPyG9sfgbATrjSrCnb9uz4enbwhL2zZQLF6OKVCOt4grUAodUabI%2FllTzsN1Wj4oSia54csxZKSDtonuCBEKX9CbBx2xm6IykrRkLTgH4ebaudvZl%2F05V8y92JyvFlbBbt9Ny%2FrcJ8gTDjXKGMO3vicoGOqUBGEjmL86ftY3lL6BpmrvSreohXdWETDz7ESOCGH7GNPGzlpDPJaZrBb1SWMVAunfOxLcUXbD5zYEAZJqv%2B9NzLOfLlKO03Lm5qoCEHhb171M7gUF9AGfW9BTwhOIw14L650FmLwhFDDOxjrQjD%2FL6mZjogr%2FPv5m%2FFWz9BHFFSyx7tdXuOzQ4muRbrQTDvpd9SPEkT%2Bs3zNHWzD2jx0a%2BmWvtRriC&X-Amz-Signature=9d0da25d5cd7a418e8d9e9e83c1fd7cb4613c87b4355d9f1e2cebe829ff8484c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

