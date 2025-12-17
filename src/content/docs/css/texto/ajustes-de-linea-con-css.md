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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6ELEUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM%2F6yzv0uc%2FbBpmKVEjHSJkvNvIwF8AqSDjfR0EFBfJAiEA51q%2Fb80L9XjkuJMnal%2FGjdIO%2B4%2Fh3PmJeQfZEIpoE68q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHab3VE00%2BppzLNXTyrcAwGoLj30JLaaWTLlV9%2BBfmMGR46vK7Dqe0B2TAgCxe3nOrT1eks8Lw%2B%2BbvDd0DJNgpGw%2FfaWUuy5EAj3x0W82duZ7lhtmglCJi29kpIH6hv0H1dI36uUfgSP2vgxcxHq5%2FNoDQyvlJM4AMkgCdo4RO7BVb1%2Fh40fn%2FWYa1cu6jsTe5J4EBPPd%2F40lDQRb%2BhW%2BzBhFOR1rcUh3R%2Bqdqr8q53NuZcD018QqGvDTqR1nXFzTX3jIf9qnN1Ji5DoEhEePcPjiHEkWl9S%2B3jWTqgrxP%2FAQILHJRfepxk4BEvD3pvXdm1eUjm%2BtZreg5v8oXVEagB5xOkaSIRAP78%2FHPhDOC776ANbZWleSKQA%2Fv8sBgYLX3qAnj1PwqF5UQHeM5diO05hfpxmJ8ai8DwJzET3PVUo1IyODbiZ71WUgNpK0o2zVEwBCE87HdzRpKqUkxCmeOXusm%2BbwqTUqZF0zvGeduZXawnlaBolQP2cL8IA1uEswXBWAiaNH9hFp0j9FKQrZ0he0ykWnKrY7ZuvHClPnlhSAejCpu12xdk6fCsu%2FOYr%2Bd6HEgwDEYnZukQoCi5mUGkmB4%2BO%2F8m1J%2BRR9066Tdb6AHlFGrh0jqi0HvS8q%2BDnvSQwIQlIPHWcFEESMNTFisoGOqUBIUJwUd0kTrXf2XL2nRqPyhwY%2FkP4VtuBaPvg%2FYCmOcHRJPywrLHWQozcWSdZ%2F1dil4EIZar8hUYXd8VtxRD36fso7E4UTi6p%2BctYCJc%2F4Rh9ASWl87wcP0mVDEDjs7hzm9t86KONLz6arZSCbNnwqY4rKOLTTaq3Ibf94UtJYl8h27S0lurI0Omg9mSKsMRK%2B9dMKAXkpFreCuNKH1R%2FpwkOvFXr&X-Amz-Signature=4f0e09869a1c0cafeecdb7590a3ba608fa721b4256544a0b3607785f8cd60144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6ELEUF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM%2F6yzv0uc%2FbBpmKVEjHSJkvNvIwF8AqSDjfR0EFBfJAiEA51q%2Fb80L9XjkuJMnal%2FGjdIO%2B4%2Fh3PmJeQfZEIpoE68q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHab3VE00%2BppzLNXTyrcAwGoLj30JLaaWTLlV9%2BBfmMGR46vK7Dqe0B2TAgCxe3nOrT1eks8Lw%2B%2BbvDd0DJNgpGw%2FfaWUuy5EAj3x0W82duZ7lhtmglCJi29kpIH6hv0H1dI36uUfgSP2vgxcxHq5%2FNoDQyvlJM4AMkgCdo4RO7BVb1%2Fh40fn%2FWYa1cu6jsTe5J4EBPPd%2F40lDQRb%2BhW%2BzBhFOR1rcUh3R%2Bqdqr8q53NuZcD018QqGvDTqR1nXFzTX3jIf9qnN1Ji5DoEhEePcPjiHEkWl9S%2B3jWTqgrxP%2FAQILHJRfepxk4BEvD3pvXdm1eUjm%2BtZreg5v8oXVEagB5xOkaSIRAP78%2FHPhDOC776ANbZWleSKQA%2Fv8sBgYLX3qAnj1PwqF5UQHeM5diO05hfpxmJ8ai8DwJzET3PVUo1IyODbiZ71WUgNpK0o2zVEwBCE87HdzRpKqUkxCmeOXusm%2BbwqTUqZF0zvGeduZXawnlaBolQP2cL8IA1uEswXBWAiaNH9hFp0j9FKQrZ0he0ykWnKrY7ZuvHClPnlhSAejCpu12xdk6fCsu%2FOYr%2Bd6HEgwDEYnZukQoCi5mUGkmB4%2BO%2F8m1J%2BRR9066Tdb6AHlFGrh0jqi0HvS8q%2BDnvSQwIQlIPHWcFEESMNTFisoGOqUBIUJwUd0kTrXf2XL2nRqPyhwY%2FkP4VtuBaPvg%2FYCmOcHRJPywrLHWQozcWSdZ%2F1dil4EIZar8hUYXd8VtxRD36fso7E4UTi6p%2BctYCJc%2F4Rh9ASWl87wcP0mVDEDjs7hzm9t86KONLz6arZSCbNnwqY4rKOLTTaq3Ibf94UtJYl8h27S0lurI0Omg9mSKsMRK%2B9dMKAXkpFreCuNKH1R%2FpwkOvFXr&X-Amz-Signature=5ffeb8aedab2ca0e2f44c6a7c0624f0a88dd37aea5233c2d90cb265b72ef6f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

