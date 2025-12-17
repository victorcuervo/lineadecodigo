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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOE27ZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVQJutIPTuB3jobyghj4tkblF%2BHSY9e%2FSEYF0ZnphTzAiEAtUFw6BwIkPgZL%2B66L1WwztezuakT4xrxkMiaGcX28Boq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPute0qe5aRV9FRTnSrcA7kUQZv6aUAe0rZ7saQnc4ywOxV%2Fs8aIn4G%2BsiRxe6Kr1NvbsEJaU6iNhjXMPvqJhY8ypIX8ToEY8mNBVoPWN0BGsmYNdC9zIOAwGfmbDoMhCZ42aW%2B%2Fu8HWMRAnZP8Am5HavrzcOCntV8E1q8gj4vWRPBMw4R%2F7LO3aHI486EI70lsOE4iu0QLByYjVyRyRr1IomncMvbepTk6LNUZp0vEB4HDOjy2NGi8lAx0NvlU%2BlYig2jrJwO6UzwM4T4D4NY3dm3b55eRAR3mAE36yX%2FoHDOBiE1xjYBQwPGMIsYOGpU1K8ayCTeXzkCzslUncdTBeWGbUw84HD0balFSs9n5tg8LKtws%2Fh6saW2%2F1yH%2Bp0rTrVyllwbWGF9FVNPDbda8qf1njNuK56foccrG7cmwgcBLotIO7opvKnA2b8kwFzDAlXe3GpAFlx3%2FGhWWp1fSq37ZmniHDbHp98GQJJQpb6757kccfw%2BSjeekQ0cKiOnxzxxgPBwiOQnl4L84BleR5r9Qj7BYJlq6oZK5EXDji2ya3fBywE%2Be4%2Bm1NXFYTa%2BcQ2UNoYSU9KplDuGAlspIkrEbB283TChHmlwgzUyeT4TG6cZdI5KgM6LpbmM9ckuycART%2FShOJOuTEMJCPisoGOqUBxsRd1v3Y5YzboRrCK8jWWJziFSGc3Rfj3C5WO39PwpsvMBC1nZV4bpsY0zS28Gb0I1ayeYsWojJHq2gyrqsI0RWN3fS9ny0z8%2F19EH6tCq8f%2FUQop%2FvdQuPcd96SgNS%2Fvya6EPYA4sYCNg18YvjE%2B4%2BgpH4LRNoyiyohrQWAH3q3vz2OQ3ACxzgmqqxjpEHrACNU%2BGxUZYTjD6xq1ZxLMZYjOq62&X-Amz-Signature=47f2e69428bc327fa3764e5bd8aa5864cea1830663e2875868cc4f20508ec91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOE27ZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVQJutIPTuB3jobyghj4tkblF%2BHSY9e%2FSEYF0ZnphTzAiEAtUFw6BwIkPgZL%2B66L1WwztezuakT4xrxkMiaGcX28Boq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPute0qe5aRV9FRTnSrcA7kUQZv6aUAe0rZ7saQnc4ywOxV%2Fs8aIn4G%2BsiRxe6Kr1NvbsEJaU6iNhjXMPvqJhY8ypIX8ToEY8mNBVoPWN0BGsmYNdC9zIOAwGfmbDoMhCZ42aW%2B%2Fu8HWMRAnZP8Am5HavrzcOCntV8E1q8gj4vWRPBMw4R%2F7LO3aHI486EI70lsOE4iu0QLByYjVyRyRr1IomncMvbepTk6LNUZp0vEB4HDOjy2NGi8lAx0NvlU%2BlYig2jrJwO6UzwM4T4D4NY3dm3b55eRAR3mAE36yX%2FoHDOBiE1xjYBQwPGMIsYOGpU1K8ayCTeXzkCzslUncdTBeWGbUw84HD0balFSs9n5tg8LKtws%2Fh6saW2%2F1yH%2Bp0rTrVyllwbWGF9FVNPDbda8qf1njNuK56foccrG7cmwgcBLotIO7opvKnA2b8kwFzDAlXe3GpAFlx3%2FGhWWp1fSq37ZmniHDbHp98GQJJQpb6757kccfw%2BSjeekQ0cKiOnxzxxgPBwiOQnl4L84BleR5r9Qj7BYJlq6oZK5EXDji2ya3fBywE%2Be4%2Bm1NXFYTa%2BcQ2UNoYSU9KplDuGAlspIkrEbB283TChHmlwgzUyeT4TG6cZdI5KgM6LpbmM9ckuycART%2FShOJOuTEMJCPisoGOqUBxsRd1v3Y5YzboRrCK8jWWJziFSGc3Rfj3C5WO39PwpsvMBC1nZV4bpsY0zS28Gb0I1ayeYsWojJHq2gyrqsI0RWN3fS9ny0z8%2F19EH6tCq8f%2FUQop%2FvdQuPcd96SgNS%2Fvya6EPYA4sYCNg18YvjE%2B4%2BgpH4LRNoyiyohrQWAH3q3vz2OQ3ACxzgmqqxjpEHrACNU%2BGxUZYTjD6xq1ZxLMZYjOq62&X-Amz-Signature=f383100ecabd197b323804d2c39ebdf2749f8635d8c62075c03a0771b17720a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

