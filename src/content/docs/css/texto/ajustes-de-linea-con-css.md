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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WLY5CR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6rZQaOtZZ6hjXGb0ie0FAF9fiRqAashWjU9Y%2Fmef%2FQIhAOfEAKzuN%2F95tX%2B6q7hvAz6WTAeilT2PtsjzF%2FLy6So4Kv8DCHwQABoMNjM3NDIzMTgzODA1IgxQqs3YGgNMmIHLd8wq3AOT0DqVSP7%2BXyL14GwiC0VvnbRJJA513T27GLYEKtvEO8IPsKtUvimVvha7XmGGQ6dhSiAm%2BHqj9O7gWAhz6z5LvR5LMrtiq%2FWGZBePhczW6MV9EF8wuQe4hYXY2uRfUvb0LKdfhVn2CAH1YEsogYySaNu2hM8zKvr8Qhm1MPd6uWh5%2FWo0FbWskBQVn679cE9QVKztofxUwicuo%2FNmLLiCF4dyeoqcBxpScas1pXkCNgZiadwGjE7RXgy5ijfQicDPJnrL4q0cQ0iHKIlNjbK5zcBgGLA54zJtG28rK7wUTmVcOszJOQMv4EaRApCP8izPNiniKvaVlaH631a7GayMLlalk0%2BNldw5%2Fmal5KfTXBrOJbr0BD29n%2BoVVu4ijh4fy9Qw%2F9NJ1d%2FGFjq3j1ZEikRVrTGeJ8abN67cZqewi%2BcPiXJfLIsUzoGl10aQI15O2RsJz9B0h%2F1kXhSPc9WcElMUYCH6IlnYwqSr2oxNX%2B6qSqKSmYZMFz1MOcpG1ci7lINGpodyuMG9tq3lQJjO%2FqrP85oDvzumfWr2u4kNkc6Aw%2FzJJ3NEjrryUCGJw7dcBAfbecQNt2fxkV4C5F4iixREAs03JPtStsQJz6Zo5aMb%2FgcNvmp1KFbqpTCdj4rKBjqkAbZASwPXDli%2BotTNffHlE25pVaBVMah3x8NiEC3sH2WAA5akB4nD%2B3wrHky6Ljd1GESp5psbvXMEdg8PuFhW7nPeyg3rFxtNIhHV92keKyYECjISoKlSboDE348NdtgS%2B8qsutzeRx%2B3BXurS7vvDlqKqly2FPwfEpVVkp5zAUzQftK8DT%2BJlbVqlySt1nrVXCyAoKRSONTiQZCOCEk1y1Wb%2Bzxq&X-Amz-Signature=71297fca6c351042336510e6262e788fd003f590db0cff2d5a02d14547b6e00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WLY5CR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6rZQaOtZZ6hjXGb0ie0FAF9fiRqAashWjU9Y%2Fmef%2FQIhAOfEAKzuN%2F95tX%2B6q7hvAz6WTAeilT2PtsjzF%2FLy6So4Kv8DCHwQABoMNjM3NDIzMTgzODA1IgxQqs3YGgNMmIHLd8wq3AOT0DqVSP7%2BXyL14GwiC0VvnbRJJA513T27GLYEKtvEO8IPsKtUvimVvha7XmGGQ6dhSiAm%2BHqj9O7gWAhz6z5LvR5LMrtiq%2FWGZBePhczW6MV9EF8wuQe4hYXY2uRfUvb0LKdfhVn2CAH1YEsogYySaNu2hM8zKvr8Qhm1MPd6uWh5%2FWo0FbWskBQVn679cE9QVKztofxUwicuo%2FNmLLiCF4dyeoqcBxpScas1pXkCNgZiadwGjE7RXgy5ijfQicDPJnrL4q0cQ0iHKIlNjbK5zcBgGLA54zJtG28rK7wUTmVcOszJOQMv4EaRApCP8izPNiniKvaVlaH631a7GayMLlalk0%2BNldw5%2Fmal5KfTXBrOJbr0BD29n%2BoVVu4ijh4fy9Qw%2F9NJ1d%2FGFjq3j1ZEikRVrTGeJ8abN67cZqewi%2BcPiXJfLIsUzoGl10aQI15O2RsJz9B0h%2F1kXhSPc9WcElMUYCH6IlnYwqSr2oxNX%2B6qSqKSmYZMFz1MOcpG1ci7lINGpodyuMG9tq3lQJjO%2FqrP85oDvzumfWr2u4kNkc6Aw%2FzJJ3NEjrryUCGJw7dcBAfbecQNt2fxkV4C5F4iixREAs03JPtStsQJz6Zo5aMb%2FgcNvmp1KFbqpTCdj4rKBjqkAbZASwPXDli%2BotTNffHlE25pVaBVMah3x8NiEC3sH2WAA5akB4nD%2B3wrHky6Ljd1GESp5psbvXMEdg8PuFhW7nPeyg3rFxtNIhHV92keKyYECjISoKlSboDE348NdtgS%2B8qsutzeRx%2B3BXurS7vvDlqKqly2FPwfEpVVkp5zAUzQftK8DT%2BJlbVqlySt1nrVXCyAoKRSONTiQZCOCEk1y1Wb%2Bzxq&X-Amz-Signature=736a3e9709cb0ad50aa257e9b4dc5955b79092281c6936cbb1480bc3f9ddc8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

