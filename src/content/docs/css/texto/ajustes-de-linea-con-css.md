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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHP6DRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHbXpPHIExAXpt5RBMO0MLn9W3vDV7J4ZcatxuAqBSwIgPCzntBN5J1Mfk%2FYqFyx7mIWanIvwU36ks5CiILNOnccq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNx%2BCoYOpVGGI%2Fp1KSrcA4tqOnQjtrbEogJOb%2FJcShDdwxv0RASW0h%2BGTOATGFDOswvXdrJNhUFg1iqJlTIneDLqnPhTRiyD1KNf1%2F064P0jj9ml%2BiWDWPMmAaqNlOtyoJSEZQljNSJqjzzctjzJDDj5T7MwYgkzX7ESdNOYkcQLnM1j2FRS1pxoyw9L1JBHqRYraUGh5XdYTAFyoYrLY3NzbflhSpjlDrCLpvGHA3tr5bJy%2FDhYgLhKcqNPkD6We6klkU%2FyiUUIQwvdAgzvYXR95XL6nmG743MNIQWn5jEh9Tg5p%2BCRB1A0%2By2p3Dh6yKBZKXLYZzv2mj8TkG6xQ8YTIvgHU3zYfq5Y84j41EdV2PcHDkglp637bidHPHpJNAqfiDxnSnYWyqu54M7pA7z4BSf7TYy%2BLIxIAZf0BwEmFKNSpmMZJN1LnrJxx5gI2E6lTrjWx%2Bz6gcSu3uAXaTdDLUYewlWL2Ov5bxEeNQ7ArZScTi1tXuvadmMteG%2BXGcSBK%2FCk%2F01RPl%2FbJxjParxsRYOHOxVBaY9tYRybtshTiOMzYRyduj0603P4TcaIqR49JCxAHLwe3OpWIJIhYwwIdUAHurR0YcaTKp8kwpFYV9RB9q27%2FQZpZnck5YMgWiEFe%2BapIR3IWYlEMKiPisoGOqUBbQTd3Hi2XMDgti0tfI8D87KQ00%2FyRukaHDeqEP7iq9riY3czzGc71r2rEmRQYb5H1b%2B%2FKovcMQZslekYotZQjCAJIZXFo8G%2BNLbg8PphtscdRZgSKP8weNJVn0yoQxSlv5x2F1u8Uyy09adOb7GO6udpVLs2RiBlvmtE6X8AlmCY8di7v426f2PFRyi8DZkDRzRV99zb6NhwAwSxHbK3ASUAbQSg&X-Amz-Signature=ccbec62e269f567b8132b9020c4c8fad6be7d82275e26b6d021e2e9d4c4fce37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHP6DRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHbXpPHIExAXpt5RBMO0MLn9W3vDV7J4ZcatxuAqBSwIgPCzntBN5J1Mfk%2FYqFyx7mIWanIvwU36ks5CiILNOnccq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNx%2BCoYOpVGGI%2Fp1KSrcA4tqOnQjtrbEogJOb%2FJcShDdwxv0RASW0h%2BGTOATGFDOswvXdrJNhUFg1iqJlTIneDLqnPhTRiyD1KNf1%2F064P0jj9ml%2BiWDWPMmAaqNlOtyoJSEZQljNSJqjzzctjzJDDj5T7MwYgkzX7ESdNOYkcQLnM1j2FRS1pxoyw9L1JBHqRYraUGh5XdYTAFyoYrLY3NzbflhSpjlDrCLpvGHA3tr5bJy%2FDhYgLhKcqNPkD6We6klkU%2FyiUUIQwvdAgzvYXR95XL6nmG743MNIQWn5jEh9Tg5p%2BCRB1A0%2By2p3Dh6yKBZKXLYZzv2mj8TkG6xQ8YTIvgHU3zYfq5Y84j41EdV2PcHDkglp637bidHPHpJNAqfiDxnSnYWyqu54M7pA7z4BSf7TYy%2BLIxIAZf0BwEmFKNSpmMZJN1LnrJxx5gI2E6lTrjWx%2Bz6gcSu3uAXaTdDLUYewlWL2Ov5bxEeNQ7ArZScTi1tXuvadmMteG%2BXGcSBK%2FCk%2F01RPl%2FbJxjParxsRYOHOxVBaY9tYRybtshTiOMzYRyduj0603P4TcaIqR49JCxAHLwe3OpWIJIhYwwIdUAHurR0YcaTKp8kwpFYV9RB9q27%2FQZpZnck5YMgWiEFe%2BapIR3IWYlEMKiPisoGOqUBbQTd3Hi2XMDgti0tfI8D87KQ00%2FyRukaHDeqEP7iq9riY3czzGc71r2rEmRQYb5H1b%2B%2FKovcMQZslekYotZQjCAJIZXFo8G%2BNLbg8PphtscdRZgSKP8weNJVn0yoQxSlv5x2F1u8Uyy09adOb7GO6udpVLs2RiBlvmtE6X8AlmCY8di7v426f2PFRyi8DZkDRzRV99zb6NhwAwSxHbK3ASUAbQSg&X-Amz-Signature=5656e9cfc6537fe1b53e2fe98034f639ae757331ce819f7289857dcd0e35ac3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

