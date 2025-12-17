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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E6JUJD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRcS5ME2RMTaZUy1zT3ucGrjIq71usShmveOOqoyUvXAiBnK7BGUADxbStpplnx6H84wgWXZ0uE0DbHoCzTHa6EuSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYU9pMFrieDznvcS8KtwDF68CLzPIsRbdftpigt80Ge3HBFjQWIP2Ws06p%2F435dBLHdSktxcfuKoEe9GRvBbmLDbbUropq6dmkif%2FwhCfTk5O1HwGOVYR2i1GgKwGzwsFOXmz8BnXcBXmFYyqw2VyTytC8pOmIdyCND1gO2%2B7PZuHxAaJy1x972q%2BWKTBQG6dBguVH1ixoSMFPSTEHTXpIY1QNHaK5IjNJq2LnEmQ4SnCxy2cIxKcKLPlaA926NGj%2BzJkyU0WKvhGXrES2948%2B73xg7iz%2FzPkWKlt3prJcvObRBLHWq6PVKR4Y8eju2MuPmK76jQEnhTArN98s7WDT7WrxeuqzRzXdtnfWk%2B3m6MMv766kvW8PQfsMlFmUzqDsCcicyRYbgPOwFmnc3aBMArcZg1JC3yEToKph72AaAOq2gwlgLr7k6dbybIngIImhi28HQay0qaYfyKnTsJ92EPM6xFQiO3Pao%2Bh6PEkF5abaOYgT%2B3sMrHEF5ALo4flFU%2FXjU0iPPItCJul7RnRqTS5%2BA%2BDszKHpFEZ72DmpfKBlsnUxkvxM9qqCpc2F1Lb6bklzkSTlyZHWuv1aYkKVzkCNQuZCj%2FWqVh1Rbo5LO%2F7iRSHCaH1ovpaxa41CO8OMrUYpfpY6a65JYcw4NKJygY6pgFqmdqjzpo1kF178wLARmCqJCUn6oypu2dyzOg1EBQcbtIB%2F9XMGvZeERkqZfp8TEuA0PCSjGcqMi145pTNBf72%2FrgQpNIqYtl%2Bcs0BPYaynixRMtfIAruqkkzXXeHI6x9MnaQ19oE9TT4nD72sd51EatDfr6NqXhZ%2Fkn2lc7shtt%2FfQ5m6fYMp6V2YX4H2KfW7vBdcPsII6yW5JV224XKZtgNOZk9S&X-Amz-Signature=83dd5f4532a45df33417ed54ffd3694d85e6e9bb89a2c35f13f42ecc18518c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E6JUJD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRcS5ME2RMTaZUy1zT3ucGrjIq71usShmveOOqoyUvXAiBnK7BGUADxbStpplnx6H84wgWXZ0uE0DbHoCzTHa6EuSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYU9pMFrieDznvcS8KtwDF68CLzPIsRbdftpigt80Ge3HBFjQWIP2Ws06p%2F435dBLHdSktxcfuKoEe9GRvBbmLDbbUropq6dmkif%2FwhCfTk5O1HwGOVYR2i1GgKwGzwsFOXmz8BnXcBXmFYyqw2VyTytC8pOmIdyCND1gO2%2B7PZuHxAaJy1x972q%2BWKTBQG6dBguVH1ixoSMFPSTEHTXpIY1QNHaK5IjNJq2LnEmQ4SnCxy2cIxKcKLPlaA926NGj%2BzJkyU0WKvhGXrES2948%2B73xg7iz%2FzPkWKlt3prJcvObRBLHWq6PVKR4Y8eju2MuPmK76jQEnhTArN98s7WDT7WrxeuqzRzXdtnfWk%2B3m6MMv766kvW8PQfsMlFmUzqDsCcicyRYbgPOwFmnc3aBMArcZg1JC3yEToKph72AaAOq2gwlgLr7k6dbybIngIImhi28HQay0qaYfyKnTsJ92EPM6xFQiO3Pao%2Bh6PEkF5abaOYgT%2B3sMrHEF5ALo4flFU%2FXjU0iPPItCJul7RnRqTS5%2BA%2BDszKHpFEZ72DmpfKBlsnUxkvxM9qqCpc2F1Lb6bklzkSTlyZHWuv1aYkKVzkCNQuZCj%2FWqVh1Rbo5LO%2F7iRSHCaH1ovpaxa41CO8OMrUYpfpY6a65JYcw4NKJygY6pgFqmdqjzpo1kF178wLARmCqJCUn6oypu2dyzOg1EBQcbtIB%2F9XMGvZeERkqZfp8TEuA0PCSjGcqMi145pTNBf72%2FrgQpNIqYtl%2Bcs0BPYaynixRMtfIAruqkkzXXeHI6x9MnaQ19oE9TT4nD72sd51EatDfr6NqXhZ%2Fkn2lc7shtt%2FfQ5m6fYMp6V2YX4H2KfW7vBdcPsII6yW5JV224XKZtgNOZk9S&X-Amz-Signature=47132d18bc2fce441b510ebb4b6657976a265c330bdc3626e4e3c4bd22ae9c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

