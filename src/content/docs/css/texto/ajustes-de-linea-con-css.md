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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKV4BKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0vSORIR7sROndSt4rezvRHajm2LfMbOuFNj22hNF%2BRAIgagU%2B4n8MKSTSuaMXfJdLygN8xmZXMm%2B1VhbfXJB4BRMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE6gAnWSouV5ogv6dSrcA2eCGchq%2ByveSdw5RfZPct0daHyKyyscbVOb0mvHYSlf7TIaAr6yQ83qLpNDdGT9Dt%2FegjzW4VESIrhsKPxr1v%2BNQ9OnIXgzdC1eAM2tqOT2n12IYblVhKXp96cNfqAfi0JcZySN9d3fBfbvV%2F8gDIzhNyFhIJpBSdjOOsJEbyOmHgEW0Lf9AyQqvST%2Bm58nVLgeOgE1UOiSvJPVvEA5xaQkYYvBPTu5%2BtrQZ6PRGEUjhAmNIKN1ypRvBfc%2Ffpw%2B48yGIWF5vsJk8A4uYyLR7JREZMoGlyX1RrWCh6kdZmW6lTg%2FxWlWWD1T78iqICXkfNL%2FnhbyQ5uT8mrqrAEvUnmVirvevIoZ%2FprwHWOxAZAmhA9UtPXAlZNPBGA9eWKIAA%2Ba9X7H3HCIQticmDkD1HzcqdfzXLbVFKzOVEXiiJOS3a3KfyLBKIKjC19lIo0%2Blx7dhF5QETaCGGNoy4VA%2BhwujUHTXjsIDl%2FM3cbhVGHwnnKrm4Q4m%2F8pZ7fFFkUdYYn7%2BQuASadtdQ6eqv74neOKcgnKqQ%2BwCuQe6yBLAl2S1HCyRhULIYBA8Js9tH%2F7lAyqrkYw0fTePXV6TnDEJWvEZNcoEF%2FpLalmEnbo6Y5vQFlkagq%2BAIPE2jngMPDhisoGOqUBLDqWNuNbGFQZvUozMhdwiYGIJCHLJFB8jGD7NOVCILj1iY1y5m%2B0Nwh0Yukp4fjFNSuldL95UjMqueNsBBCNiFqLPfLnVTveOnAmENs6PDSlvF1rO6ne6AH7DkNZppQYJSmj9DHVL3fxdHmTVuhrJ0aicLXUPkGNjNrQuOYXbaZjSqVH1WD%2BC5Y5M2S%2BHVC9ZnEEBkFJXUhFzUdPJqn75gL0k0aK&X-Amz-Signature=d7a4f101351c4d1163088d30ffb01c6b35120e34ae44909295cdcc463ac29f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKV4BKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0vSORIR7sROndSt4rezvRHajm2LfMbOuFNj22hNF%2BRAIgagU%2B4n8MKSTSuaMXfJdLygN8xmZXMm%2B1VhbfXJB4BRMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE6gAnWSouV5ogv6dSrcA2eCGchq%2ByveSdw5RfZPct0daHyKyyscbVOb0mvHYSlf7TIaAr6yQ83qLpNDdGT9Dt%2FegjzW4VESIrhsKPxr1v%2BNQ9OnIXgzdC1eAM2tqOT2n12IYblVhKXp96cNfqAfi0JcZySN9d3fBfbvV%2F8gDIzhNyFhIJpBSdjOOsJEbyOmHgEW0Lf9AyQqvST%2Bm58nVLgeOgE1UOiSvJPVvEA5xaQkYYvBPTu5%2BtrQZ6PRGEUjhAmNIKN1ypRvBfc%2Ffpw%2B48yGIWF5vsJk8A4uYyLR7JREZMoGlyX1RrWCh6kdZmW6lTg%2FxWlWWD1T78iqICXkfNL%2FnhbyQ5uT8mrqrAEvUnmVirvevIoZ%2FprwHWOxAZAmhA9UtPXAlZNPBGA9eWKIAA%2Ba9X7H3HCIQticmDkD1HzcqdfzXLbVFKzOVEXiiJOS3a3KfyLBKIKjC19lIo0%2Blx7dhF5QETaCGGNoy4VA%2BhwujUHTXjsIDl%2FM3cbhVGHwnnKrm4Q4m%2F8pZ7fFFkUdYYn7%2BQuASadtdQ6eqv74neOKcgnKqQ%2BwCuQe6yBLAl2S1HCyRhULIYBA8Js9tH%2F7lAyqrkYw0fTePXV6TnDEJWvEZNcoEF%2FpLalmEnbo6Y5vQFlkagq%2BAIPE2jngMPDhisoGOqUBLDqWNuNbGFQZvUozMhdwiYGIJCHLJFB8jGD7NOVCILj1iY1y5m%2B0Nwh0Yukp4fjFNSuldL95UjMqueNsBBCNiFqLPfLnVTveOnAmENs6PDSlvF1rO6ne6AH7DkNZppQYJSmj9DHVL3fxdHmTVuhrJ0aicLXUPkGNjNrQuOYXbaZjSqVH1WD%2BC5Y5M2S%2BHVC9ZnEEBkFJXUhFzUdPJqn75gL0k0aK&X-Amz-Signature=d2d9c436e535f3b40cd95186d44a0ce8f22a2676e2d8d0b6d28189c9a575b181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

