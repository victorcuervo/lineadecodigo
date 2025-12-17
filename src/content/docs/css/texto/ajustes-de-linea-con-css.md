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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUYRJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6IcUw17RDV7%2BXU%2B6db92BE9B%2FMC1EVBMQ00XXSEq9BAiEAtEQZ6IGgXqwp9jLiGVsq3UmYOiPl%2F%2B%2BoTcIsd023H8Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHXO1BXWR%2FSl%2BUXv0yrcA6AYPuFMCSAj8GrEkOxDD3gKyP%2Fg3Q0bbAmeLSWaxgZX%2Bd2yxw3AKAibSc9kozQURoie3wPCoNA6JTTAbQwrVtG9qr9TtcicrdD20IeGl0T6EC1UhXF2Rty0eU1Jwbt8TLM5JggFlB8qCSfnpNK%2FfeC7wKQ3fnu0XgqGxob%2FOxpEpeO5GaJvj%2FSPlvBXawJngP3VCb8kH7ra9BSnqZNam0zals9DoSbpHQnnbUeHvFejMpFel5lTYZ7uN6pzMahb9Jfo7cfMEVNr%2FHcx0s2IaygdhZHmfQpvQfXitzvZqHzP2yVI1oFRaC1L%2FC7wLaOx2be6RVeD5bY%2BFsxHOJPOQYZFSePCHY4pKuWl59XQArUtPM7beoQd1%2BVHhJMTuG0A1nU59B%2F5vBje%2BgPNi%2BPW8bzBvuixsYvN%2BUOuoqkfbV9bx9zxQAvhKrjLCAR5y6vyCHAK%2FjGvQzG43An9O%2BPac9GZSd5MiNM7pC2B%2Ftfx0IwsuGTLKM%2FpLaXoY7GP%2Ba%2FIPglcqzH5TJrniQlOgVgjhnQsWBXnvvpqNScT%2F24kKBZzAdNExZBdeR759J9AVmUWOAUsbREeCsloIvxLHxBtTsktuGT3U2Zh2%2BF%2Fsa1WtnTAa0WKVnZQGa9uv9CMMIOrisoGOqUBUzXjjtgkpaZoTeQ1ravoFhC%2B68U7xyWuoFqFmY3tbbqrjTscPbarq3pr4PNBJhSKxe8a98zkfdflIbFJ9bDZw8NIWujzChD2UvreBr0vSJferxULx%2FtKzd3iDLDtGTOcRaP3MuDfv5wGMhAHDz9UKIdEREpGthjxYwEfFKnRmh%2B0ApNFbXSPol2pHLqFFOCuP1llhNZZUpmhsY8pVo5pt0wXcKrO&X-Amz-Signature=09ce990a2371bcfabd5236de41dc9ffac1144f2c06afa40edae1cfc1a2b9c572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSUYRJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6IcUw17RDV7%2BXU%2B6db92BE9B%2FMC1EVBMQ00XXSEq9BAiEAtEQZ6IGgXqwp9jLiGVsq3UmYOiPl%2F%2B%2BoTcIsd023H8Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHXO1BXWR%2FSl%2BUXv0yrcA6AYPuFMCSAj8GrEkOxDD3gKyP%2Fg3Q0bbAmeLSWaxgZX%2Bd2yxw3AKAibSc9kozQURoie3wPCoNA6JTTAbQwrVtG9qr9TtcicrdD20IeGl0T6EC1UhXF2Rty0eU1Jwbt8TLM5JggFlB8qCSfnpNK%2FfeC7wKQ3fnu0XgqGxob%2FOxpEpeO5GaJvj%2FSPlvBXawJngP3VCb8kH7ra9BSnqZNam0zals9DoSbpHQnnbUeHvFejMpFel5lTYZ7uN6pzMahb9Jfo7cfMEVNr%2FHcx0s2IaygdhZHmfQpvQfXitzvZqHzP2yVI1oFRaC1L%2FC7wLaOx2be6RVeD5bY%2BFsxHOJPOQYZFSePCHY4pKuWl59XQArUtPM7beoQd1%2BVHhJMTuG0A1nU59B%2F5vBje%2BgPNi%2BPW8bzBvuixsYvN%2BUOuoqkfbV9bx9zxQAvhKrjLCAR5y6vyCHAK%2FjGvQzG43An9O%2BPac9GZSd5MiNM7pC2B%2Ftfx0IwsuGTLKM%2FpLaXoY7GP%2Ba%2FIPglcqzH5TJrniQlOgVgjhnQsWBXnvvpqNScT%2F24kKBZzAdNExZBdeR759J9AVmUWOAUsbREeCsloIvxLHxBtTsktuGT3U2Zh2%2BF%2Fsa1WtnTAa0WKVnZQGa9uv9CMMIOrisoGOqUBUzXjjtgkpaZoTeQ1ravoFhC%2B68U7xyWuoFqFmY3tbbqrjTscPbarq3pr4PNBJhSKxe8a98zkfdflIbFJ9bDZw8NIWujzChD2UvreBr0vSJferxULx%2FtKzd3iDLDtGTOcRaP3MuDfv5wGMhAHDz9UKIdEREpGthjxYwEfFKnRmh%2B0ApNFbXSPol2pHLqFFOCuP1llhNZZUpmhsY8pVo5pt0wXcKrO&X-Amz-Signature=e2ec10b92281ef40966af44b160787434f289f5c788000734c776ca54111ee98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

