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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFMZRSW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3KrVpLp8xOULJ6pIh4bnyz0v%2BPTivT%2FVzsvc%2FvrJ7lAiEAw1xr%2FmKhB8ygvfvdrzQZ7fSuPjnSCstJpNQbJgCMUp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOn72VWKBfICqgcDyCrcA8ILYLv20PO81NUN2BsUvatW%2FT2fbb3IZ4aP6wErcMuUgacwzpCtDwMCP18D3sje%2FBmICOMk0CxY8QVxzFQFURe%2FEgUwmtsJJfAuhhp39Gsw2N9ciKNjBuzHgjMxp4okcXRbO778xBf6kAy%2BW5LzPDI5osca0nEl8bSD4NTSmPNAdxLK8hal3Y2OciZOngPYb5E9KIb72qLG2YzAtK%2Fn42ywISYnsLGAKJiKQgoklAghHz9kosX7Y8RjFrtHylaxJumJ8UERc9kWbvN5HgJQ9D08NJmjy2otsy%2FEaSwRKbaTzAjhioRvbPisqquRuuhA4COCPsLKN1ItU%2FpaW14mmIZWCscDI14crusE595Ar7vJMkzmAI8wgrlqCN6u8b1s1l1tbax0efwmSgPyXmlt5wktYPfPvLWqI2AckgEYsGC9bcQwp6aFiXwRw539I%2FkyC9yaRQMAEsuwQZQ9UP37HEfZDWRfFFNjWyQ2ePszJRtlUA5g8rts6CmxtVT8su%2FGo3He4qVNorhEwstSEQZsIA6EKaI8xUobRr%2F0YAafjCw2HW7RJy6xmxfDRm3ESVdfQ1F4Suc93N8VKmhUcxoOZowanvkMAHMuhLBYlRMinc0CeqBwneCsCvaLKEUPMKHfh8oGOqUB0Agzj8REGTsKTaauPplzYzf5j3Qemqyo7mo0kT7mwqkCz9RnLOcTpV9uaEH61aynlbvd1eANr5zydPcXjrZQ49bjvHZlg3bwOjyUaE5dh96PUSHO%2B91Ao5HEGNMmeu7LB7ORTVgGOW5Gkv5Jqcp5LZjimCKjFxL7c0U63XTTwBu2a7E9vz7UzaEs3s6edHwM21T%2Bli56IA5gyzjYe9KEqor8JLGy&X-Amz-Signature=bdb25072e2d726849b2723b6d5de13950a0add6f537705f70fed6060c7355421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFMZRSW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3KrVpLp8xOULJ6pIh4bnyz0v%2BPTivT%2FVzsvc%2FvrJ7lAiEAw1xr%2FmKhB8ygvfvdrzQZ7fSuPjnSCstJpNQbJgCMUp8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOn72VWKBfICqgcDyCrcA8ILYLv20PO81NUN2BsUvatW%2FT2fbb3IZ4aP6wErcMuUgacwzpCtDwMCP18D3sje%2FBmICOMk0CxY8QVxzFQFURe%2FEgUwmtsJJfAuhhp39Gsw2N9ciKNjBuzHgjMxp4okcXRbO778xBf6kAy%2BW5LzPDI5osca0nEl8bSD4NTSmPNAdxLK8hal3Y2OciZOngPYb5E9KIb72qLG2YzAtK%2Fn42ywISYnsLGAKJiKQgoklAghHz9kosX7Y8RjFrtHylaxJumJ8UERc9kWbvN5HgJQ9D08NJmjy2otsy%2FEaSwRKbaTzAjhioRvbPisqquRuuhA4COCPsLKN1ItU%2FpaW14mmIZWCscDI14crusE595Ar7vJMkzmAI8wgrlqCN6u8b1s1l1tbax0efwmSgPyXmlt5wktYPfPvLWqI2AckgEYsGC9bcQwp6aFiXwRw539I%2FkyC9yaRQMAEsuwQZQ9UP37HEfZDWRfFFNjWyQ2ePszJRtlUA5g8rts6CmxtVT8su%2FGo3He4qVNorhEwstSEQZsIA6EKaI8xUobRr%2F0YAafjCw2HW7RJy6xmxfDRm3ESVdfQ1F4Suc93N8VKmhUcxoOZowanvkMAHMuhLBYlRMinc0CeqBwneCsCvaLKEUPMKHfh8oGOqUB0Agzj8REGTsKTaauPplzYzf5j3Qemqyo7mo0kT7mwqkCz9RnLOcTpV9uaEH61aynlbvd1eANr5zydPcXjrZQ49bjvHZlg3bwOjyUaE5dh96PUSHO%2B91Ao5HEGNMmeu7LB7ORTVgGOW5Gkv5Jqcp5LZjimCKjFxL7c0U63XTTwBu2a7E9vz7UzaEs3s6edHwM21T%2Bli56IA5gyzjYe9KEqor8JLGy&X-Amz-Signature=a450abeb5e13c90082e4b73d1cf38c7041a13987f82a1aa895e43568efd6a5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

