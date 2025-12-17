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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5TQAMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0JgwGKEwhz16TaEOefRaX8GH94zxJIxVWpcV6TUs05AiBvcApQf44Ur0hMzMRYZd5ZNUneF8TOevO3Ra%2FoMXPqxSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0RPIXPsvmM9wkVkKtwD%2Fd%2BftfE%2FhlKBYAAjasPff3%2B7XOrKfijJrpFwFPVvjjBo9p5oIVq9eOH7ep3v7%2BmZa3cCi2DrYxzJcuYVGMYHtZxQvGYLjM2gu2wBwgPz6EligRuuMIX%2BEW%2BKMIH3xy%2Fx5AuoA6mfJaPNiP7JF%2FgkF9SZ2CfR20YgXHYRIo9SryoQ2vHVcCPj6%2BQYM3i%2B69It%2BjkhPzkciG4IVtLcCuN7RFCzxteYwJArMzfSnOZ%2FWlA%2FPjTIEUDS%2Frfofg5fdexDq7fTIanyyj6C8A%2BYXyCifFiMWr61e1PPk5zk4j9LPdmJYIJaUzgBNWNdpHNvnObDmMfMNPy%2FyYUvGg4iTtpucStKjLbI9PNr%2B3cgKc3J0h1Z628AAncSz22fmnQ8USpPhZlC0mWaZ2C%2BAhELMT9d659ZrRRuN2XeVgx2L4r0pq48BtBLen3gcmfFQgVSWBc48h3o97RQbZ%2FazBp7NOxAm%2BOe%2BB5yJaNwV%2BH%2B5HyxkZC3lWvEWAX9FI9B6eyoITEZCuu4%2FEIon8YSt5K7XEka7Wq1LI%2BHqPZW95bS0iMffHpZBSxnMlMM16%2BhFagTRgQZOBt8uwvPlNJmmzq0Z9zavQh7aIavGbuow6dVDtOIl2rQEusbzdTyB0bbwZ0w34qMygY6pgFQdbd%2F0PqNY1K9nTRfD6a4dYq0c5ifWMDS0kr9ZoE7Fmt53oP66EVdrFjfVj0JTZCMFAYK6org3bmplULog6jMzG%2FiWo2mCIM6m3glOi%2FaLkTsvobnwW0FQpkkieOmQvLXSKtE04dB4zbxs3xOkAVii%2FhsCb5JINmGfflo01%2BdP4kYoBeE%2F2HERohFa%2BcyFD1qs47JH0pPySSBA9zHzfOjS35mQW5t&X-Amz-Signature=58eff6d7cc9517ff8117ba0825b77a69babff6851f4cf8dfdec4f86bce9710c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5TQAMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0JgwGKEwhz16TaEOefRaX8GH94zxJIxVWpcV6TUs05AiBvcApQf44Ur0hMzMRYZd5ZNUneF8TOevO3Ra%2FoMXPqxSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0RPIXPsvmM9wkVkKtwD%2Fd%2BftfE%2FhlKBYAAjasPff3%2B7XOrKfijJrpFwFPVvjjBo9p5oIVq9eOH7ep3v7%2BmZa3cCi2DrYxzJcuYVGMYHtZxQvGYLjM2gu2wBwgPz6EligRuuMIX%2BEW%2BKMIH3xy%2Fx5AuoA6mfJaPNiP7JF%2FgkF9SZ2CfR20YgXHYRIo9SryoQ2vHVcCPj6%2BQYM3i%2B69It%2BjkhPzkciG4IVtLcCuN7RFCzxteYwJArMzfSnOZ%2FWlA%2FPjTIEUDS%2Frfofg5fdexDq7fTIanyyj6C8A%2BYXyCifFiMWr61e1PPk5zk4j9LPdmJYIJaUzgBNWNdpHNvnObDmMfMNPy%2FyYUvGg4iTtpucStKjLbI9PNr%2B3cgKc3J0h1Z628AAncSz22fmnQ8USpPhZlC0mWaZ2C%2BAhELMT9d659ZrRRuN2XeVgx2L4r0pq48BtBLen3gcmfFQgVSWBc48h3o97RQbZ%2FazBp7NOxAm%2BOe%2BB5yJaNwV%2BH%2B5HyxkZC3lWvEWAX9FI9B6eyoITEZCuu4%2FEIon8YSt5K7XEka7Wq1LI%2BHqPZW95bS0iMffHpZBSxnMlMM16%2BhFagTRgQZOBt8uwvPlNJmmzq0Z9zavQh7aIavGbuow6dVDtOIl2rQEusbzdTyB0bbwZ0w34qMygY6pgFQdbd%2F0PqNY1K9nTRfD6a4dYq0c5ifWMDS0kr9ZoE7Fmt53oP66EVdrFjfVj0JTZCMFAYK6org3bmplULog6jMzG%2FiWo2mCIM6m3glOi%2FaLkTsvobnwW0FQpkkieOmQvLXSKtE04dB4zbxs3xOkAVii%2FhsCb5JINmGfflo01%2BdP4kYoBeE%2F2HERohFa%2BcyFD1qs47JH0pPySSBA9zHzfOjS35mQW5t&X-Amz-Signature=1f84434253468fea7dd6c772f67c8fab662dc83f895d4a05ebee981d056afe44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

