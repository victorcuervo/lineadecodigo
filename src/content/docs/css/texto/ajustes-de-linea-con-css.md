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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCCB3XTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ7QFUZDp7xxtveYWU7TruW0Mzfri49Py6%2FaPdE2hz3AiAiJ87kYDDTcmqwOaC8Jk1A7z338On6tfTtimFUSlRXmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMM%2BDsXrVXOFTeQIiBKtwDQkDt1gwGJ2JY4tRiX68ksJopibN17b4XdkA3pJ33AaNuuJmcXtXrRpfsaQKCPvqKeJDTikM%2BG82WeWFGF5%2FugHYmap0TknLZ%2FekLHrLucVGijYNYhoMoNBaJvELtX%2FexSHGySd6CB7unrekU7kMCo9HJE8rnl5ORXZ8g3NZkZUyxLwotomNo7%2BtPQOBXZ5x4fSd%2BMHWfvoES4M4vsryxo8I9CWD2ETjg9XcXtCGAq60DLbZS3HWnmG0N6Su5InLNxkBNTAUhoOHQ%2B%2FbUZ%2BF9bj1QfUwA%2FpLTW5GwOVB8xEwN2bNnSBQMOHRZvUU%2BXg0rSiNpaT6gKk%2Bs7GMOyjn7%2BBBg2UrhwSqG4UMeLwUssPtk6J5mjlkfYzqCDDF2RpXMt3%2B9nmCiJJIVTQkBRqK27OKuubX%2BLgy6Jq0sQTZIB39wu5ZrOhV8xpyBLbd5AfQFoq3rwRe2QBeYGavAoJuS3rcmxjwUHXy221XwqKTKwhx77U7Aue33FG5vU2TKy0qTbzSu5uyYiXdh%2Bw%2FTpA2PwTlgMwTKBIRxS2Vo6xkf1Vdm24Bj%2BHgxMHAySaXVOjx9LjTj4LOQRWKPwKbp8Co1UpdYAYfrLZl1WkwLGdiasYpIADtiZbqr7wPkUbswjuqIygY6pgERn1wGA3fD2qtIVWu5hUSnZFfexr92%2FUxDr%2FS2W7x6RQV5Tzl9XI5KxHZ4tSFmjPQzLWLHZusZKy0MZr4FFpowX%2FQ1Fyn%2BxF7tkBkvVqSlLfXfj3lTFrh8qX%2BoTwZ5f3oW7Nlgbun14Xhfo7wGQQy0MsYus3IOaAHA%2BoFKj7dat5ezMNaFeBUGr%2BVcVj8UrH2hF2l0fxU%2BLtFbqeHA%2F0D60eO4qBCn&X-Amz-Signature=f9ba690067ce7d4e285b6e4238c14e67e05319b53ac8ec4a5e2477ee2c35dc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCCB3XTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ7QFUZDp7xxtveYWU7TruW0Mzfri49Py6%2FaPdE2hz3AiAiJ87kYDDTcmqwOaC8Jk1A7z338On6tfTtimFUSlRXmyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMM%2BDsXrVXOFTeQIiBKtwDQkDt1gwGJ2JY4tRiX68ksJopibN17b4XdkA3pJ33AaNuuJmcXtXrRpfsaQKCPvqKeJDTikM%2BG82WeWFGF5%2FugHYmap0TknLZ%2FekLHrLucVGijYNYhoMoNBaJvELtX%2FexSHGySd6CB7unrekU7kMCo9HJE8rnl5ORXZ8g3NZkZUyxLwotomNo7%2BtPQOBXZ5x4fSd%2BMHWfvoES4M4vsryxo8I9CWD2ETjg9XcXtCGAq60DLbZS3HWnmG0N6Su5InLNxkBNTAUhoOHQ%2B%2FbUZ%2BF9bj1QfUwA%2FpLTW5GwOVB8xEwN2bNnSBQMOHRZvUU%2BXg0rSiNpaT6gKk%2Bs7GMOyjn7%2BBBg2UrhwSqG4UMeLwUssPtk6J5mjlkfYzqCDDF2RpXMt3%2B9nmCiJJIVTQkBRqK27OKuubX%2BLgy6Jq0sQTZIB39wu5ZrOhV8xpyBLbd5AfQFoq3rwRe2QBeYGavAoJuS3rcmxjwUHXy221XwqKTKwhx77U7Aue33FG5vU2TKy0qTbzSu5uyYiXdh%2Bw%2FTpA2PwTlgMwTKBIRxS2Vo6xkf1Vdm24Bj%2BHgxMHAySaXVOjx9LjTj4LOQRWKPwKbp8Co1UpdYAYfrLZl1WkwLGdiasYpIADtiZbqr7wPkUbswjuqIygY6pgERn1wGA3fD2qtIVWu5hUSnZFfexr92%2FUxDr%2FS2W7x6RQV5Tzl9XI5KxHZ4tSFmjPQzLWLHZusZKy0MZr4FFpowX%2FQ1Fyn%2BxF7tkBkvVqSlLfXfj3lTFrh8qX%2BoTwZ5f3oW7Nlgbun14Xhfo7wGQQy0MsYus3IOaAHA%2BoFKj7dat5ezMNaFeBUGr%2BVcVj8UrH2hF2l0fxU%2BLtFbqeHA%2F0D60eO4qBCn&X-Amz-Signature=b61eda3aa9f75473e3cb99258f16d6bff41e45f5b7710a3938e5d601e8bef9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

