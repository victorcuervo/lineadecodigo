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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYV55426%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD3i7Kh5XCjaYQQ3BJ3NdDJ4teXTqnssB52HxE1kus4gIhAJx49Q%2FPoQcfr12hfAhZg%2FirIVcZBMVXTXbop32X58psKv8DCHYQABoMNjM3NDIzMTgzODA1IgwtidG75q5DH0FufrIq3AMsSftUpAl1YvxPQRrHC6c1uI3ztn%2Bo2FeiCcJJN9U0NyTolNlDubMyLdGxrGgha21SoOg4WOr1KLSI2UDzL8B%2BxYjjsanWPUIzUJx%2BWbt48%2BfRuAhVfA1PKz3nfwMV%2F789eKgtPxsY7YdW5yuZvygOLx4KgoCm9pcn7PysWnhqPjep7FMdIIjnCPbso3YqcEIiehyGExv2bm8jelbuZ3J9TPbABsgQM0wVPF5yeOvhUV8S4gxlw641fzQg2nJY1I3G1HVlHY5zRsaAurgyTLxahvhVrvBqI%2FmH98ozhSEizRspvVsqSRwrBVbuf7DI1i5ZnFh3jnY8oPszihpImDS%2F6qvGyrZcbPulJ%2BwLA%2Fop%2FBMqCHZa5EuKIwxGeiCRq2vQ7%2B81PhlkgLgMR8Qo%2F9Go2eVBjUTvntfy%2FkPK71%2BEYYBqMP%2FZ3veeNL8DVr35cohdotkp0gSUOkwamMPxGWI6eB%2FXfngnEgowSp14mJVCJ27LPIk5bRyfA%2FSDmkATgrVer8LVYkNbTtIcFIwc1Ta01G98K9mLS3BYX4WQ95vWUvx%2BjQSGlSF%2B%2FXUMhySZNly35ZyWGal7RWDCEHyiuo2wEPg4AKkNlM0ZxBrINuBZ%2B3weqzTYGEiM2LtgADD76YjKBjqkAa%2Fe3QBvSxnhZYPgap8JUWsOafA%2FDpPjZE7qC6s2RSI%2BrZU8afYvJ6L49BKrEVMHpOhOEwap50jPT98fYQmTxsr8%2F4%2BN9fX0HiXuZzmNPMZQNTQQ5UiXGBkp2jxxVKUlaXuiB7kUfiQnLTD%2FX6jVy9oZkBFVqIWtk5daDrC%2Fjx%2BuGBq6Aq4g28rYtOh%2BHPA8I%2FzvJZh4zZiUUsVNfibl5E97BnzW&X-Amz-Signature=fed4f8c307aa7b2d97c4be8eea88ea498b5128c66b8f92fca14e5d479a74b737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYV55426%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD3i7Kh5XCjaYQQ3BJ3NdDJ4teXTqnssB52HxE1kus4gIhAJx49Q%2FPoQcfr12hfAhZg%2FirIVcZBMVXTXbop32X58psKv8DCHYQABoMNjM3NDIzMTgzODA1IgwtidG75q5DH0FufrIq3AMsSftUpAl1YvxPQRrHC6c1uI3ztn%2Bo2FeiCcJJN9U0NyTolNlDubMyLdGxrGgha21SoOg4WOr1KLSI2UDzL8B%2BxYjjsanWPUIzUJx%2BWbt48%2BfRuAhVfA1PKz3nfwMV%2F789eKgtPxsY7YdW5yuZvygOLx4KgoCm9pcn7PysWnhqPjep7FMdIIjnCPbso3YqcEIiehyGExv2bm8jelbuZ3J9TPbABsgQM0wVPF5yeOvhUV8S4gxlw641fzQg2nJY1I3G1HVlHY5zRsaAurgyTLxahvhVrvBqI%2FmH98ozhSEizRspvVsqSRwrBVbuf7DI1i5ZnFh3jnY8oPszihpImDS%2F6qvGyrZcbPulJ%2BwLA%2Fop%2FBMqCHZa5EuKIwxGeiCRq2vQ7%2B81PhlkgLgMR8Qo%2F9Go2eVBjUTvntfy%2FkPK71%2BEYYBqMP%2FZ3veeNL8DVr35cohdotkp0gSUOkwamMPxGWI6eB%2FXfngnEgowSp14mJVCJ27LPIk5bRyfA%2FSDmkATgrVer8LVYkNbTtIcFIwc1Ta01G98K9mLS3BYX4WQ95vWUvx%2BjQSGlSF%2B%2FXUMhySZNly35ZyWGal7RWDCEHyiuo2wEPg4AKkNlM0ZxBrINuBZ%2B3weqzTYGEiM2LtgADD76YjKBjqkAa%2Fe3QBvSxnhZYPgap8JUWsOafA%2FDpPjZE7qC6s2RSI%2BrZU8afYvJ6L49BKrEVMHpOhOEwap50jPT98fYQmTxsr8%2F4%2BN9fX0HiXuZzmNPMZQNTQQ5UiXGBkp2jxxVKUlaXuiB7kUfiQnLTD%2FX6jVy9oZkBFVqIWtk5daDrC%2Fjx%2BuGBq6Aq4g28rYtOh%2BHPA8I%2FzvJZh4zZiUUsVNfibl5E97BnzW&X-Amz-Signature=895572ab43075c418fecf73ec8c7623ab840ce7066b5f81efecbc22044b48478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

