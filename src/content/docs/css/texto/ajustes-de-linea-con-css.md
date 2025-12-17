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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C6TG6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kCPWOvF00IHKkw%2FiBWmEYQ4fLOgHFn5QxG1Bfm61hQIgEAwlE8SDhrtXVpwSrHmntjS2rhRW2Y%2FmPvpaex0b%2FgQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHltyerewl975Gis1SrcAwyIIzJmcumMrDUBo8C8UY1vnmKid2XDe8lE9ZQ84AkAH%2FfFBvsGF6ykwkbKQTnA7IXhB1QVAqhzeorLAXfnLS%2B%2FE%2BdyqKnA%2F1XC%2FtsZs5LAOvnkeCy6Xo93C80mfBqPJ8UB9OT75LBvzr3tuaAbBnpGFL%2BnMQaWgnvpzl0y5CK12xjRcO4ohfG9QbT3OiOVI1SEABw5kdneflkqV1eYdUhFkFWYKTny6sTSQp0prtnWV5imYVSUzmnHuPlX6yZcEI3UoLrhbA8wi%2B76PdAcudH%2B1%2BtodNUmaxbO0Xytb5unH1pdEqmNPuPK0kPYUnZd%2Fltr%2FAspOL8KhlPoH8K41DI9IXMIobAfpbbc%2BhYIDL%2BFL6Vi%2FdB7BPFWI5a%2BbY5JakJOAl7laCIc4gWvFbhXZmR7hr9owdEWqz%2Fr3453ZAW2TxjNjSrADfms6w01KLjTKgEX%2Bnvol8zS8PT9kU%2F0VfsoXRWxKhPs1WjbnWG7n4ql5YI62KXI4pDu6kv33enFUEZz9aPAyIBDbMZXxtTAHfcwFNotAI40PHa8Au%2Bi%2B15C%2FdwrFAes1WLje8NtHcVhWXp8SzPXQw5rr4ktG3385cChzpCmRT2z99i%2Bbbd%2Fnc7%2BmIYEKq4BYv9ZWCSYMNjriMoGOqUBss05SGtvtVOd2S2HCDYv%2Bo82i1DxAzdSNo7opQB6U6nB6viOgbP5u0Q4Q6wSJcBEuxvTi001AKX%2FbtwMeJMgw3PBV0WWt9hAsxWirf1fVxLiZWHWcG1aSwRUUyrVB8Vss0vlrIDWECcmRDAlEwJgpIQH%2FYMVW0o%2FG%2FZxP1BK%2F%2FpolX%2Fz19pGBlYZQc2K9GwIw8GFT7UGocx8oJ2cZuc%2BK5HbbVzK&X-Amz-Signature=a0955a647562d3fb50878edbcee5a9fdebcc8bcb6692943a86c0157e81ae5fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2C6TG6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kCPWOvF00IHKkw%2FiBWmEYQ4fLOgHFn5QxG1Bfm61hQIgEAwlE8SDhrtXVpwSrHmntjS2rhRW2Y%2FmPvpaex0b%2FgQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHltyerewl975Gis1SrcAwyIIzJmcumMrDUBo8C8UY1vnmKid2XDe8lE9ZQ84AkAH%2FfFBvsGF6ykwkbKQTnA7IXhB1QVAqhzeorLAXfnLS%2B%2FE%2BdyqKnA%2F1XC%2FtsZs5LAOvnkeCy6Xo93C80mfBqPJ8UB9OT75LBvzr3tuaAbBnpGFL%2BnMQaWgnvpzl0y5CK12xjRcO4ohfG9QbT3OiOVI1SEABw5kdneflkqV1eYdUhFkFWYKTny6sTSQp0prtnWV5imYVSUzmnHuPlX6yZcEI3UoLrhbA8wi%2B76PdAcudH%2B1%2BtodNUmaxbO0Xytb5unH1pdEqmNPuPK0kPYUnZd%2Fltr%2FAspOL8KhlPoH8K41DI9IXMIobAfpbbc%2BhYIDL%2BFL6Vi%2FdB7BPFWI5a%2BbY5JakJOAl7laCIc4gWvFbhXZmR7hr9owdEWqz%2Fr3453ZAW2TxjNjSrADfms6w01KLjTKgEX%2Bnvol8zS8PT9kU%2F0VfsoXRWxKhPs1WjbnWG7n4ql5YI62KXI4pDu6kv33enFUEZz9aPAyIBDbMZXxtTAHfcwFNotAI40PHa8Au%2Bi%2B15C%2FdwrFAes1WLje8NtHcVhWXp8SzPXQw5rr4ktG3385cChzpCmRT2z99i%2Bbbd%2Fnc7%2BmIYEKq4BYv9ZWCSYMNjriMoGOqUBss05SGtvtVOd2S2HCDYv%2Bo82i1DxAzdSNo7opQB6U6nB6viOgbP5u0Q4Q6wSJcBEuxvTi001AKX%2FbtwMeJMgw3PBV0WWt9hAsxWirf1fVxLiZWHWcG1aSwRUUyrVB8Vss0vlrIDWECcmRDAlEwJgpIQH%2FYMVW0o%2FG%2FZxP1BK%2F%2FpolX%2Fz19pGBlYZQc2K9GwIw8GFT7UGocx8oJ2cZuc%2BK5HbbVzK&X-Amz-Signature=a93fe46bbad14023820d459780f8a2a158834af90d4d8e286e188affee32cb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

