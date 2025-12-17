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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV72ILBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSkMinweKDu%2FUv47idtjXNRnmWyh5Wa6qdMCIEejabTQIgdd4IjlyLCgOjVJuXWFkTDbPf8NtcLc%2F5QFlSSLmNhkQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDYdwJS8UT28GAtDzCrcA%2Fe5%2FVJapIlBTGoKWxa6l2mCl4RZeoGvSZNWCP7j%2F%2BnKs9b9LkR0TYjf%2B4A5fcSO7sBc2dJaZSfnecXuRq0EBL1koT6CzFT7%2FvBgAPR0T5397QuXEqHeC3ahKD%2FngMgCKCiWA4aeyUZjajMyfDJX5iZFzshmryo7piSgwNlDsLcYYsdZoVeEB7DS3WrEBOk8lLcU2Osyet95BqyJtJrujGZwcZGuzvc7cWsOlSYYyV%2BRppYGVXfFR35dmwgPE2O39HWUObWj%2FpHLQgQpvxDCPXmv81AGhU3vLX7mykXJDzVUOkLVUfgdhf9Lnu%2FiGVHvF9p01SSyxdjRCu%2FMM16MUgZKvChUag%2BNQ%2FeQ5QKHykoV3hdsDjl61giA2rMpbZJw5YgE6ddjQN%2BZFlSe0MmL20ogKrjJJCoutY289U7IHvnwA56zp9eCd5RuyuqkWbNz4D1TYIrxMj6gIrWx1jMXdQ1TRiqsRfrJtAvXSAvZRDzIHB8ioNg1OkK5lA2%2Bc6E%2BNMCpTgE25UA4SXuj2%2BfR31inDF2g3XHOJfODuf%2BvvlOYwINvNUKSaMcY5X1hr4%2FRDrVg4g5pWP%2FbPQ5EtozEdjECgRv%2B4yV5olkp8GdjJeb1C3%2Fw5CfqgonE4EfQMJyXiMoGOqUBbkIEoPukViUyUiEKcv5F7zbQqezD%2BIRrXqq9pAD7KmLlmuagBy%2BoGoUwWcvCWL6%2B7ScoSbkj7FSnYWEsBSsPCkOssunWd0pud7NLBCRYFB2s4cKQdo1kVXmr1jAT1JUqAKn3dAXrXnDxSNDX7ayR3Y5zOkbuL%2BV9c03FYERJE5Elo6MV2Q1X60vjL7pZ7IGL%2BQE8Q1kK4HJwKyieMhumIH5TOaw1&X-Amz-Signature=d9cc1741b10592f7a22218166d8a12ce1fa87977dac10d0809cf7ebc1192c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV72ILBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSkMinweKDu%2FUv47idtjXNRnmWyh5Wa6qdMCIEejabTQIgdd4IjlyLCgOjVJuXWFkTDbPf8NtcLc%2F5QFlSSLmNhkQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDYdwJS8UT28GAtDzCrcA%2Fe5%2FVJapIlBTGoKWxa6l2mCl4RZeoGvSZNWCP7j%2F%2BnKs9b9LkR0TYjf%2B4A5fcSO7sBc2dJaZSfnecXuRq0EBL1koT6CzFT7%2FvBgAPR0T5397QuXEqHeC3ahKD%2FngMgCKCiWA4aeyUZjajMyfDJX5iZFzshmryo7piSgwNlDsLcYYsdZoVeEB7DS3WrEBOk8lLcU2Osyet95BqyJtJrujGZwcZGuzvc7cWsOlSYYyV%2BRppYGVXfFR35dmwgPE2O39HWUObWj%2FpHLQgQpvxDCPXmv81AGhU3vLX7mykXJDzVUOkLVUfgdhf9Lnu%2FiGVHvF9p01SSyxdjRCu%2FMM16MUgZKvChUag%2BNQ%2FeQ5QKHykoV3hdsDjl61giA2rMpbZJw5YgE6ddjQN%2BZFlSe0MmL20ogKrjJJCoutY289U7IHvnwA56zp9eCd5RuyuqkWbNz4D1TYIrxMj6gIrWx1jMXdQ1TRiqsRfrJtAvXSAvZRDzIHB8ioNg1OkK5lA2%2Bc6E%2BNMCpTgE25UA4SXuj2%2BfR31inDF2g3XHOJfODuf%2BvvlOYwINvNUKSaMcY5X1hr4%2FRDrVg4g5pWP%2FbPQ5EtozEdjECgRv%2B4yV5olkp8GdjJeb1C3%2Fw5CfqgonE4EfQMJyXiMoGOqUBbkIEoPukViUyUiEKcv5F7zbQqezD%2BIRrXqq9pAD7KmLlmuagBy%2BoGoUwWcvCWL6%2B7ScoSbkj7FSnYWEsBSsPCkOssunWd0pud7NLBCRYFB2s4cKQdo1kVXmr1jAT1JUqAKn3dAXrXnDxSNDX7ayR3Y5zOkbuL%2BV9c03FYERJE5Elo6MV2Q1X60vjL7pZ7IGL%2BQE8Q1kK4HJwKyieMhumIH5TOaw1&X-Amz-Signature=064b6b3a433513a3970a19d6e740d04197ec128f5576b49b9916835b41bc77b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

