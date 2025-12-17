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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEEE52C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvZfDOOGzThbi3NECaQ%2Bw5iev6CZrL95UCDD4zh7Z0zQIgFyu9dRPv0dwN%2FDwZy2B%2BO4cWboaZ0KqPPirR8eXnfDkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaTGH9XPvht%2FxJzfircA3c7hQz6iH61pckESxInenNyLvF1NWMrtaECpIy4zoO10XLWxVmWSzM3wk%2BDxL%2FuHFP6i%2Fvvz%2FSR4CuuL05OfUKqcSO0yKBR09HsvPnecAPOSM2FPe5pcOCUXvFDUT9YpvV2dxsc6WzKd%2B%2BDuT%2FQovwADsn12jOQ0R87apLmNScxosA2FRz%2FF%2B6S0lejqieHa8dJpntxL%2BPkVOPMgxub%2Fen2KFCmI69MMxBR0CK8UA7r3e0%2FV6Oc06AjlzRLCcx4kvlpsK%2Fs2XAmOXf7afyPq8VMV%2F0%2B8%2Fz6K16sdwKsL%2BqN4Uvr1HlJnfNcOGaQAg3bxWKUiLlNeZuBXSVGvVzfUz3NWcQmIYLNFLBgFu2cG4MDZ2EXh%2BAzGkP%2F5AAbKwTt6LJ8xsG9rHx3LTW66AZ%2FoZftYDDklSjWmO2dvMYAc9epdbBygVRlcjWWrknyAt5n4uXvI0w%2BD4ysgWSLXjJDjoUHVt7F%2BYsr9elNN932mEkdBuHk5JVtShNl157GiV5riBzXizc3YB72nCZ9gXvN8%2B3XXIFJ%2F9Y0fdtvVcZy%2BkPDCRKIkQeAcvbtcAfoQvzvpzKqgJ93HUhXHcqhN7zTYMoLwLezY4BxaXfpQ%2FKIeCdv3XF0%2BzE5frNZRKsKMM3GisoGOqUBz46DPJ%2FC685uUlGwDhC5PYitOlamOdFg%2B2n96VnclTvW98r3%2B3UDS0%2FaSqnbB5oJRXouZlO2ZicJj%2FPhaSEvbY9a4lvNPzklcy6553jheMyCdqH6wbUvOMBaeNBFLKaHDzuuFqKaqNg%2BQKLbPZx3w0WTXJy1d%2FlIX7bhjHi1mDBVyOzfyr1gOWMltdle2N495Aat%2BtxbJRIyB7kEdtL7a4juPmSH&X-Amz-Signature=aca6c5f3d5fb867519cb326eab790ca8b820f45ed9dbdf0a0ee939afe0688fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEEE52C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvZfDOOGzThbi3NECaQ%2Bw5iev6CZrL95UCDD4zh7Z0zQIgFyu9dRPv0dwN%2FDwZy2B%2BO4cWboaZ0KqPPirR8eXnfDkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaTGH9XPvht%2FxJzfircA3c7hQz6iH61pckESxInenNyLvF1NWMrtaECpIy4zoO10XLWxVmWSzM3wk%2BDxL%2FuHFP6i%2Fvvz%2FSR4CuuL05OfUKqcSO0yKBR09HsvPnecAPOSM2FPe5pcOCUXvFDUT9YpvV2dxsc6WzKd%2B%2BDuT%2FQovwADsn12jOQ0R87apLmNScxosA2FRz%2FF%2B6S0lejqieHa8dJpntxL%2BPkVOPMgxub%2Fen2KFCmI69MMxBR0CK8UA7r3e0%2FV6Oc06AjlzRLCcx4kvlpsK%2Fs2XAmOXf7afyPq8VMV%2F0%2B8%2Fz6K16sdwKsL%2BqN4Uvr1HlJnfNcOGaQAg3bxWKUiLlNeZuBXSVGvVzfUz3NWcQmIYLNFLBgFu2cG4MDZ2EXh%2BAzGkP%2F5AAbKwTt6LJ8xsG9rHx3LTW66AZ%2FoZftYDDklSjWmO2dvMYAc9epdbBygVRlcjWWrknyAt5n4uXvI0w%2BD4ysgWSLXjJDjoUHVt7F%2BYsr9elNN932mEkdBuHk5JVtShNl157GiV5riBzXizc3YB72nCZ9gXvN8%2B3XXIFJ%2F9Y0fdtvVcZy%2BkPDCRKIkQeAcvbtcAfoQvzvpzKqgJ93HUhXHcqhN7zTYMoLwLezY4BxaXfpQ%2FKIeCdv3XF0%2BzE5frNZRKsKMM3GisoGOqUBz46DPJ%2FC685uUlGwDhC5PYitOlamOdFg%2B2n96VnclTvW98r3%2B3UDS0%2FaSqnbB5oJRXouZlO2ZicJj%2FPhaSEvbY9a4lvNPzklcy6553jheMyCdqH6wbUvOMBaeNBFLKaHDzuuFqKaqNg%2BQKLbPZx3w0WTXJy1d%2FlIX7bhjHi1mDBVyOzfyr1gOWMltdle2N495Aat%2BtxbJRIyB7kEdtL7a4juPmSH&X-Amz-Signature=a985f7b36a64e30406936f9851a22ba0acc35b13076e708e336b624bc92cf33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

