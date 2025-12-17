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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVY7DYOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu04fbz1WmrQwO3cJ%2B2kut3U%2BqG226uUAIUtEGpO6kwAiB%2B%2FM6DfjWQcETCYVE%2B97IkzDqXt%2B%2F3f41PVRqn9jAmNSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5KZsZZBQSnp%2Fm9DEKtwD8ipP6qlVxR0LkJGvaaf7vkYzLl4Wkjn1%2BiY92ifuIR25D%2BJyzUrKQQeORwBrBHsIiKC0NJ0KcG1EFP7G13SzQhDV4gwD9B0SR%2BIBPNhZYWJAeTY1asBVemb8sQf63CKu7cWJiCqvkbdXt3TQD6gjuvoeZFOTHV1dZjrocaNXPvC5Cajf6M7sWEb3xiz6qpgd1BbHliFb2AUrlrsMyxEnbk4dqelQ9tqzy93z1rAGsNcI3cgyasqR0zsuF%2F5UwChCckPDQnabQmefte6FvFH%2B8w2xqoqoxYjKWq7FkUBe4OR08roWnSJA7G4iyBYkqEeHLRwTji3%2Bo5ybNbpv9mG8Os6PdPXCY46Iz3PI5vOu6jIlB7vX9CYurYv3yzbHYVL5%2BMVu0GL5DOcxUdxY9iOzAk6dAMAYdytv8ylIrYIDlVMrtXVAnuJwjtiViJhSwECE3XAX8e4mqIbP3aFwivJyAStm951QSD%2F2Z0zVH%2Bk6EZlbOMsLpJzP0NJPoziO9Muq3HXvedFsv8iE93vkfDVMddwco1pGU8DdHbeVcnhfiS4%2Fbgiya0IXP%2BDPPHwQRmLJ9bM8dvOZA8kdTBkGQp4TRxRpCTtbHAOw%2FVKDTDhw6aV6xZg1MBITkCY5yh0w87KIygY6pgH9G13VIUQs71eczGYuF%2BXnfDH9RVLROcBL8aGfvZVNVdl3rzKzL6ys01%2FfJiI0W6SLuZAWfmdbJ11Wl8dIV%2FKghEStDyplFWhS%2Ff%2BSQMWAB5mv5hFMEpxy2LnB3OULwGamXA401wAClQLiBCiBcqTVU%2FLkeL5frY5IBr3w3yrZhv9oVrH1rZoIB1%2BOJlOELgtu7D%2F%2F0ou7fGJLInQRNzHtOC05snaV&X-Amz-Signature=1d6fcc9f9317d0ead8f6cdcd193166d0114969c4dfba5b6eece7e676cf47593e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVY7DYOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu04fbz1WmrQwO3cJ%2B2kut3U%2BqG226uUAIUtEGpO6kwAiB%2B%2FM6DfjWQcETCYVE%2B97IkzDqXt%2B%2F3f41PVRqn9jAmNSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5KZsZZBQSnp%2Fm9DEKtwD8ipP6qlVxR0LkJGvaaf7vkYzLl4Wkjn1%2BiY92ifuIR25D%2BJyzUrKQQeORwBrBHsIiKC0NJ0KcG1EFP7G13SzQhDV4gwD9B0SR%2BIBPNhZYWJAeTY1asBVemb8sQf63CKu7cWJiCqvkbdXt3TQD6gjuvoeZFOTHV1dZjrocaNXPvC5Cajf6M7sWEb3xiz6qpgd1BbHliFb2AUrlrsMyxEnbk4dqelQ9tqzy93z1rAGsNcI3cgyasqR0zsuF%2F5UwChCckPDQnabQmefte6FvFH%2B8w2xqoqoxYjKWq7FkUBe4OR08roWnSJA7G4iyBYkqEeHLRwTji3%2Bo5ybNbpv9mG8Os6PdPXCY46Iz3PI5vOu6jIlB7vX9CYurYv3yzbHYVL5%2BMVu0GL5DOcxUdxY9iOzAk6dAMAYdytv8ylIrYIDlVMrtXVAnuJwjtiViJhSwECE3XAX8e4mqIbP3aFwivJyAStm951QSD%2F2Z0zVH%2Bk6EZlbOMsLpJzP0NJPoziO9Muq3HXvedFsv8iE93vkfDVMddwco1pGU8DdHbeVcnhfiS4%2Fbgiya0IXP%2BDPPHwQRmLJ9bM8dvOZA8kdTBkGQp4TRxRpCTtbHAOw%2FVKDTDhw6aV6xZg1MBITkCY5yh0w87KIygY6pgH9G13VIUQs71eczGYuF%2BXnfDH9RVLROcBL8aGfvZVNVdl3rzKzL6ys01%2FfJiI0W6SLuZAWfmdbJ11Wl8dIV%2FKghEStDyplFWhS%2Ff%2BSQMWAB5mv5hFMEpxy2LnB3OULwGamXA401wAClQLiBCiBcqTVU%2FLkeL5frY5IBr3w3yrZhv9oVrH1rZoIB1%2BOJlOELgtu7D%2F%2F0ou7fGJLInQRNzHtOC05snaV&X-Amz-Signature=a46b1a55420473730821f9f90357afc6946c79f4095dbc929b24bd3ddbde397f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

