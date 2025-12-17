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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDFTSH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOIZT1t878JYaFmBNxwuwOBMyt38yl6I32dLQ98nbp1AiBhaX1BQl7vm%2BwS7FOnSbuEBSq7fP8FYZtDrPzLlrYgziqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7qkpKB1XsOTo3wIKtwDIXVgZTlbEHeucMrhutosu%2FzMR3AM%2Fs9Iw9Smue8i4%2B7%2F%2FJ6HNKyMD%2BTKRTeqUXesgrjbuiC5PXgAdxmRzeeevLxhIGPSmyvqw1EtRjcDN0%2BOcmQGPTnvc%2B4ylQDAiIxMDZ%2Fa%2FBBGRXLfRphwfdrYgYIuvaa85RrqVeL%2Fvpsyzw0IMJ%2B1zyJgTEOcHtiqBUUsj3ZKODcOLhRK0o5G3SgrPQIBKzufwVAq768r6fnQpWpfCwXYlY1EJpRY1tMQmvy5rK7rWh6ecmVWP4gt1o5qBw%2BSN12TvGKsk%2BJ7%2BCXA2TRA032JlOBVQxcVnnen%2BOJKaqqoFjKcaM9tMZzcII4z6N5Y%2BvC07zlU8PaJ0o061obx9fe4maSHVTR%2Br%2FXaTRFfyQrTg4pNJmgNFZop7wD6Wqj3FIqwXWRMunX23DrD1CeRD4oFM%2BT1%2FM%2BqbDvDWJaaMsQaH6G%2B%2FSG8X2vfO4lmeVT66BUbuZz4JNjNkfj%2Fywv2jmKBGBEvr4bZ2Xff4J%2Fqg6NNecBV%2FZ%2Fzf9GdugMYbk2at9v6RNU%2FmmM%2Fk5D4yiQsOKJveYBmOayeTQXdd%2B1gViLDDydapiiU04tHYY2fiMVZSjwzI7Fb1oXP9ssCp5Jt9JRl%2BRT8e5YGuFAw%2BouMygY6pgHNwExbozFbnx7DSYFEl1yr5wGuPdHN8tIKvn79sENaUECk%2BzjFyjHqJseSRW4X0Y87%2FaCV9xbhYnRJ2KecLRt2d%2FWMo6pVpkZsBBSgA1i4eurhLrQ08lIf9hvN1jQupAz5rLPCcL8PimNIqlCe6wvhDittsQfxplgTJjwH1%2BeETSaENCHdcJkT6PYqfyvUlUCMaZXoP63aLhdhjKV7jxjpFXTzteck&X-Amz-Signature=052070dc6c0df1e2030a3f1f2bbea3ca301399cb647f7eb96efa8665fa7bf023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDFTSH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOIZT1t878JYaFmBNxwuwOBMyt38yl6I32dLQ98nbp1AiBhaX1BQl7vm%2BwS7FOnSbuEBSq7fP8FYZtDrPzLlrYgziqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7qkpKB1XsOTo3wIKtwDIXVgZTlbEHeucMrhutosu%2FzMR3AM%2Fs9Iw9Smue8i4%2B7%2F%2FJ6HNKyMD%2BTKRTeqUXesgrjbuiC5PXgAdxmRzeeevLxhIGPSmyvqw1EtRjcDN0%2BOcmQGPTnvc%2B4ylQDAiIxMDZ%2Fa%2FBBGRXLfRphwfdrYgYIuvaa85RrqVeL%2Fvpsyzw0IMJ%2B1zyJgTEOcHtiqBUUsj3ZKODcOLhRK0o5G3SgrPQIBKzufwVAq768r6fnQpWpfCwXYlY1EJpRY1tMQmvy5rK7rWh6ecmVWP4gt1o5qBw%2BSN12TvGKsk%2BJ7%2BCXA2TRA032JlOBVQxcVnnen%2BOJKaqqoFjKcaM9tMZzcII4z6N5Y%2BvC07zlU8PaJ0o061obx9fe4maSHVTR%2Br%2FXaTRFfyQrTg4pNJmgNFZop7wD6Wqj3FIqwXWRMunX23DrD1CeRD4oFM%2BT1%2FM%2BqbDvDWJaaMsQaH6G%2B%2FSG8X2vfO4lmeVT66BUbuZz4JNjNkfj%2Fywv2jmKBGBEvr4bZ2Xff4J%2Fqg6NNecBV%2FZ%2Fzf9GdugMYbk2at9v6RNU%2FmmM%2Fk5D4yiQsOKJveYBmOayeTQXdd%2B1gViLDDydapiiU04tHYY2fiMVZSjwzI7Fb1oXP9ssCp5Jt9JRl%2BRT8e5YGuFAw%2BouMygY6pgHNwExbozFbnx7DSYFEl1yr5wGuPdHN8tIKvn79sENaUECk%2BzjFyjHqJseSRW4X0Y87%2FaCV9xbhYnRJ2KecLRt2d%2FWMo6pVpkZsBBSgA1i4eurhLrQ08lIf9hvN1jQupAz5rLPCcL8PimNIqlCe6wvhDittsQfxplgTJjwH1%2BeETSaENCHdcJkT6PYqfyvUlUCMaZXoP63aLhdhjKV7jxjpFXTzteck&X-Amz-Signature=3f1009c17a7e68882d068f27cf8f6d63f96face226f47823b3e0199873d1075a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

