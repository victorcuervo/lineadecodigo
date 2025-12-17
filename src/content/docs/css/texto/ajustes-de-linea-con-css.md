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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6STCOTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1AcyaongCvc2BPFkFNsx3Wl3BMOMz2LXIjnGHjta%2BGwIgcH01IN%2FC%2BZ1S6Wu9ixXvbf70KFP%2FiPci%2BmFxSYiu0m8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBVziG%2B2p35LpyZX9yrcAySR5q8tSV5KSpUoUAlsre9QJNKEIA1KtfdvXKP9x7WE4GRrs%2Bvpr70YixC9Bw7JzD2ih9XjKkn2z3mO9Rduk2w%2B7LWCaeWQm3rqq8sk35fpCzPvGtpSFP4AWwtN2VXGnN3yeVYB49UXohiZokHPE816e6pZ0YWVr9QU%2FtEM4l62Z38N1KfAOLyZgbehnJSuh57Jthh1jhy1dheG1LYi4KB9NJt2YEmYq1unVEcZvq7GjpeoSJNwgVPDsH5NRyH1u4Ijxx9%2F1MVGe4fnvU9yNKhCE5AwzaScRMa6cC7gkj7zaT6yY%2FoCYq4ooFcICLAkfmq2z15gogjx3HHZWSZ650M9Y3ukW6nJshIfQxQsRatUj0i2brk%2FwuGyx3h9ZC3ONRp1EYCPPNHat1UV9UhLVZTryupRLBaPGBx67FdkAvoaROg6Gn6CZNySSyTEYGsX3OtpS1db4556Hq%2B5NmuF%2BmOgGGiyK5umA2ggkRkC5uEhbGD%2FpMd68gNK4UQ24KXK442gns9UMULx8ylb7TcJ2OklwzB6KbzR7TrQxvKmtvLoKMl5RMhkiu8VH9cVqi8%2FWYpLBQVIXC0yOMbtymfYOn2V0YPxQ%2Bxw66i8zUadVJB2sJov6Cs6FhKqQIKIMJ%2BcicoGOqUB1Z8R%2BfvG5Zc67WYvtzfOI8hHbMpRY1WDgn5H6yDhDrRNwQieM2vumrJSX2oUgpx%2BhELqVW5xOkrIpsHzVPm678pAwH9b3iMw%2FAY1%2F1t4t%2BA7bw5p8PWomn8M9Eazko2C4%2B6ZoxWb0xVrc3feUeu3TlntS89gznsvvjIHbWjEXwQf1sEn0JluOZXb61wQGj1%2BgDTR%2BUssAYp9NKMJsVxgxWitqfjb&X-Amz-Signature=deaf4fd05751ed8711233a86cd354a695eec351d643747e6371ff441790949a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6STCOTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1AcyaongCvc2BPFkFNsx3Wl3BMOMz2LXIjnGHjta%2BGwIgcH01IN%2FC%2BZ1S6Wu9ixXvbf70KFP%2FiPci%2BmFxSYiu0m8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBVziG%2B2p35LpyZX9yrcAySR5q8tSV5KSpUoUAlsre9QJNKEIA1KtfdvXKP9x7WE4GRrs%2Bvpr70YixC9Bw7JzD2ih9XjKkn2z3mO9Rduk2w%2B7LWCaeWQm3rqq8sk35fpCzPvGtpSFP4AWwtN2VXGnN3yeVYB49UXohiZokHPE816e6pZ0YWVr9QU%2FtEM4l62Z38N1KfAOLyZgbehnJSuh57Jthh1jhy1dheG1LYi4KB9NJt2YEmYq1unVEcZvq7GjpeoSJNwgVPDsH5NRyH1u4Ijxx9%2F1MVGe4fnvU9yNKhCE5AwzaScRMa6cC7gkj7zaT6yY%2FoCYq4ooFcICLAkfmq2z15gogjx3HHZWSZ650M9Y3ukW6nJshIfQxQsRatUj0i2brk%2FwuGyx3h9ZC3ONRp1EYCPPNHat1UV9UhLVZTryupRLBaPGBx67FdkAvoaROg6Gn6CZNySSyTEYGsX3OtpS1db4556Hq%2B5NmuF%2BmOgGGiyK5umA2ggkRkC5uEhbGD%2FpMd68gNK4UQ24KXK442gns9UMULx8ylb7TcJ2OklwzB6KbzR7TrQxvKmtvLoKMl5RMhkiu8VH9cVqi8%2FWYpLBQVIXC0yOMbtymfYOn2V0YPxQ%2Bxw66i8zUadVJB2sJov6Cs6FhKqQIKIMJ%2BcicoGOqUB1Z8R%2BfvG5Zc67WYvtzfOI8hHbMpRY1WDgn5H6yDhDrRNwQieM2vumrJSX2oUgpx%2BhELqVW5xOkrIpsHzVPm678pAwH9b3iMw%2FAY1%2F1t4t%2BA7bw5p8PWomn8M9Eazko2C4%2B6ZoxWb0xVrc3feUeu3TlntS89gznsvvjIHbWjEXwQf1sEn0JluOZXb61wQGj1%2BgDTR%2BUssAYp9NKMJsVxgxWitqfjb&X-Amz-Signature=05eff8381c7226bb7f7d3ddf10c15fccdb61fb42b66cb49f12d7c198b08cfb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

