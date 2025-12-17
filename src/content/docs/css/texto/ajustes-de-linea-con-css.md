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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKD3EE4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvWG4AYZXjDSGW%2BBeyeplXQfHS%2BBM6JV3NnCB6PVbfAIhAKUpK0zCEw9wKIenFWru7cv8BcLv67YVD41V1RR8T%2FgoKv8DCHIQABoMNjM3NDIzMTgzODA1Igyw1Kg7vkHByM%2FSmCcq3AP3Gtjg0tPeineShmmmT52%2BQEG7ViXWWNBlbcAF9b1mY12Jw%2F2lP4WRZKfhXfoxQFZAqSuVmvszHXmpzfA78lyCiYQQaE5nJU9DdJlsYM5fVSIiaH9DUCcmAP190%2FLh4qoTd2tn2OtjVe%2B8l6ZlhFgP1Ab5u0jrq8cFRcpIGY25b02CsjbUKjP2lmS8SUs2GcA1VNZmeyy0EcFr0dM%2B2zGkeH%2BmjTUmHv%2FV4XyuaYeREkRibEgxWJYSWA4lc3ALKrxz1C4xq8Wv%2BGC9G2lw4vNri6b0RfyuyCfE8jmqehbsnJNrCfEw%2FAXiz%2B1UJRa8ituIpsLadMC26yH1Ae0iRg7rRb9Xz8xgd98gjTYZPrbodhzQvM6VH0qdbK43o04jmgWR4DdeqFRhFPOVQxHAwj1MO%2FXELJPozmCGYJ18lia4qoszKas66aLoYvzdV1ynGeq%2B5%2FVK%2FH93lnWgFgl9N7um4ndJIAC924vhcbJrfUaDK7guQbP2Ex%2Bmn4RghJdZMuUwSvtJOQnQDPRtlb9Wqut7ebV%2BNITzI2F0iAEkpbzBrXHlqteNzeDy4nqMC9ywYR0WQXZAqzYrlO60atbK%2FJJAypsu5oWq0oNZX%2BIzMvBAFZTNJnIWugWsHvKVITCw%2BofKBjqkAZgIDOgPf4I2rJhD4tul0Xffj97ib%2Bcs%2FtWly9jNJ4Bk1kDTvbMGtMCSH4o58U8%2FrDc5oo13YpKDONerhvNaGzk0VYzZUXE4Z%2BozRcYMidQy0DAR0MKdg7UwFHTxSt6VO7K8aIZ1MQxqJ4QJDJSNP1byjk4NNQCrlTHxdU730PcfT%2BdYT1TBMg8upDyqfd1ZQd8yLYfDZIriAzkg0nRnJrSoTcN4&X-Amz-Signature=1781059bb9e22aa244639bd3f4e065d50e2677ba6ac1ad5ef817ca51e9c47656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKD3EE4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvWG4AYZXjDSGW%2BBeyeplXQfHS%2BBM6JV3NnCB6PVbfAIhAKUpK0zCEw9wKIenFWru7cv8BcLv67YVD41V1RR8T%2FgoKv8DCHIQABoMNjM3NDIzMTgzODA1Igyw1Kg7vkHByM%2FSmCcq3AP3Gtjg0tPeineShmmmT52%2BQEG7ViXWWNBlbcAF9b1mY12Jw%2F2lP4WRZKfhXfoxQFZAqSuVmvszHXmpzfA78lyCiYQQaE5nJU9DdJlsYM5fVSIiaH9DUCcmAP190%2FLh4qoTd2tn2OtjVe%2B8l6ZlhFgP1Ab5u0jrq8cFRcpIGY25b02CsjbUKjP2lmS8SUs2GcA1VNZmeyy0EcFr0dM%2B2zGkeH%2BmjTUmHv%2FV4XyuaYeREkRibEgxWJYSWA4lc3ALKrxz1C4xq8Wv%2BGC9G2lw4vNri6b0RfyuyCfE8jmqehbsnJNrCfEw%2FAXiz%2B1UJRa8ituIpsLadMC26yH1Ae0iRg7rRb9Xz8xgd98gjTYZPrbodhzQvM6VH0qdbK43o04jmgWR4DdeqFRhFPOVQxHAwj1MO%2FXELJPozmCGYJ18lia4qoszKas66aLoYvzdV1ynGeq%2B5%2FVK%2FH93lnWgFgl9N7um4ndJIAC924vhcbJrfUaDK7guQbP2Ex%2Bmn4RghJdZMuUwSvtJOQnQDPRtlb9Wqut7ebV%2BNITzI2F0iAEkpbzBrXHlqteNzeDy4nqMC9ywYR0WQXZAqzYrlO60atbK%2FJJAypsu5oWq0oNZX%2BIzMvBAFZTNJnIWugWsHvKVITCw%2BofKBjqkAZgIDOgPf4I2rJhD4tul0Xffj97ib%2Bcs%2FtWly9jNJ4Bk1kDTvbMGtMCSH4o58U8%2FrDc5oo13YpKDONerhvNaGzk0VYzZUXE4Z%2BozRcYMidQy0DAR0MKdg7UwFHTxSt6VO7K8aIZ1MQxqJ4QJDJSNP1byjk4NNQCrlTHxdU730PcfT%2BdYT1TBMg8upDyqfd1ZQd8yLYfDZIriAzkg0nRnJrSoTcN4&X-Amz-Signature=b9489cd7b038f4eb2aec2f524984db9ea59ab40ef7539b22d45fbc6485f3c2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

