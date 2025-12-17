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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNEXTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdX5QWjrZIXJCqxiHhaRZaywFYh32leDF60g7dmLS2kQIgPbWqEjw6sSfTKslxANQyb30TaQ9%2B7hinGiNPWUXO43Uq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFxiMsHs357KJYc2uircA%2BHb47eE1sA%2Bnb7vUz0hGTMk75g739DugxBkayToZCicSFcEpi9c0PTE4NJMWU%2FQa6NTCtqn0fol7mZoUN7%2BnAbqGBhl%2FhPQQq4NIYcCh%2FQkh8eWgUc5%2Bkaem%2Bu7NuXVkmgdERdg9V9I7htlPMFuvf%2FCoS%2BLHam51VZQ2T8ie6Ghj5cvjVCcyY3HGGCw%2B9RXI9pvVohxQOjgCAKHnmsORMer9cMHhMHLSAORpbkuvhsWq3wi9cGoqmbXujLM3b%2BbTwKONBex7VLW9F3hAETdzTXBE%2B4eGQEddEN7qEnmzBH7W%2B%2FzwdF3DGh9LEdBL4viYu1qxqjxAywfWrN6OwVYyjspGuHe4IoWe%2Fon3OZFP%2Bp0b0FGsQaJIuPNpCSUdaNyaGrYXRPSAATWRxtJgtJtaMH2OGkUeJyDmQedZQu9yxBBgP1%2FSAJM5eA4Nh6CMvpdmT2RtDYvchmJ%2FavBgsPEcy2oFt3%2B7O92MQ433PuCoSF7MQhdrxYUJcFO3Hs9XXIdvr4MMlSDqQIHbcJS7tP5G42Cv%2FBwFpkIAsAglktEaSQnBTtMnvJ9M75vUGarSU9qES2O%2Bz1BVJ0IOcw0FEUxjzucazPp%2BNnJSVAEgAOLKPor4NIArGGzV8FCTZxgMPaqisoGOqUBXkc7U41ofPEmQ4F6aYa4os5z9gYopEV1laghCgUy3I8o6NYgQBZVrxPnomyy4zHMWZWmBJSMQ%2FbJ%2BrUW5ljx7OtWCI6e3KsSUjeeXUlfpVCjBnbF%2Bad8WkL%2FJtWJ3SOo%2F20q6hyYDAKkYEKDvOp3RVdFrxMONAzvVHtmApcUq2eI6VBILbXzcXGZs1u9kclTQ3MkoUMl9A6N%2FjhVY%2FXt3ta%2BXllr&X-Amz-Signature=51bf4873878690f23283814a1e0d9001d8154ae961eb1d709e83ea6c801efd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNEXTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdX5QWjrZIXJCqxiHhaRZaywFYh32leDF60g7dmLS2kQIgPbWqEjw6sSfTKslxANQyb30TaQ9%2B7hinGiNPWUXO43Uq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFxiMsHs357KJYc2uircA%2BHb47eE1sA%2Bnb7vUz0hGTMk75g739DugxBkayToZCicSFcEpi9c0PTE4NJMWU%2FQa6NTCtqn0fol7mZoUN7%2BnAbqGBhl%2FhPQQq4NIYcCh%2FQkh8eWgUc5%2Bkaem%2Bu7NuXVkmgdERdg9V9I7htlPMFuvf%2FCoS%2BLHam51VZQ2T8ie6Ghj5cvjVCcyY3HGGCw%2B9RXI9pvVohxQOjgCAKHnmsORMer9cMHhMHLSAORpbkuvhsWq3wi9cGoqmbXujLM3b%2BbTwKONBex7VLW9F3hAETdzTXBE%2B4eGQEddEN7qEnmzBH7W%2B%2FzwdF3DGh9LEdBL4viYu1qxqjxAywfWrN6OwVYyjspGuHe4IoWe%2Fon3OZFP%2Bp0b0FGsQaJIuPNpCSUdaNyaGrYXRPSAATWRxtJgtJtaMH2OGkUeJyDmQedZQu9yxBBgP1%2FSAJM5eA4Nh6CMvpdmT2RtDYvchmJ%2FavBgsPEcy2oFt3%2B7O92MQ433PuCoSF7MQhdrxYUJcFO3Hs9XXIdvr4MMlSDqQIHbcJS7tP5G42Cv%2FBwFpkIAsAglktEaSQnBTtMnvJ9M75vUGarSU9qES2O%2Bz1BVJ0IOcw0FEUxjzucazPp%2BNnJSVAEgAOLKPor4NIArGGzV8FCTZxgMPaqisoGOqUBXkc7U41ofPEmQ4F6aYa4os5z9gYopEV1laghCgUy3I8o6NYgQBZVrxPnomyy4zHMWZWmBJSMQ%2FbJ%2BrUW5ljx7OtWCI6e3KsSUjeeXUlfpVCjBnbF%2Bad8WkL%2FJtWJ3SOo%2F20q6hyYDAKkYEKDvOp3RVdFrxMONAzvVHtmApcUq2eI6VBILbXzcXGZs1u9kclTQ3MkoUMl9A6N%2FjhVY%2FXt3ta%2BXllr&X-Amz-Signature=b98cf9aa6dae7905ce4e9036a9282c228ebf943c400378e27951c14e574897dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

