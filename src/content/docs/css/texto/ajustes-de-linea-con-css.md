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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQUZYMTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnO32A2Ktp2AHmJQrw%2F8KxdP12xZBkvCV25lAKqISnpwIgVhmL3HmLP63T0pK%2FqQKxy1PuDMZtv4jVPRTfRH6i9eEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJ95Iksf6UzjBngBAircA5l863oB5NuVzq8B7XHSkxWvfVv1p4PpwwpbWRRE6FLX6nDzAbmAgD4u1NXFIbrZ9V3lRvjMLjUB7EwuTjwt5d%2FX57KDSBBo69E%2BoOVVN5uPvEhCr2WHPmCNCapI0iC%2BunDMGUTWTxX0iBHF%2B2FpGVWOMyDUeRI%2FDVRlIB6MsG%2FKpbh73YqAykv2s7pzas%2FgehgT8ostjo%2FV4HVAOpCNzZMw0qPpVI%2BHh72HWKfYaNYBbZX7C472580uHTUzmGZF7apth3%2FLU%2FL%2FqukzC8bUYgowzG0W76gZv01rXSaD%2FEwKHJswwtp53mz4y9elv2P8DA9UniVQ%2B8AVwAvOGLOl%2Bt3DK1tUfzr%2BeTYZthP%2BKHm4p0SaI25U755QyS1Jx0PYGTmdnD%2FNNqXYUXbClI0DTN6o2lK6d%2BLDTnqv7VT%2FEPuvWOFp5VnivkAxENBOzxUN2eVtQUX9j8kYW9%2BskbEStWkXLzKW4u%2FZ7Z%2BE687mbnPhKgmfbTnN64jF%2BH%2BrdsyBU1lDlepHJ6PocHDCGAjuDfYLaGb3JMJrkz5zhFuJNg7631kr%2FbNrCKiKEA7Ez4bz4fAkauQJIyA3U4Jn522MbNLfMoxr0t5Ho92dBoizmJb%2F5PtSbRWyprir2xzhMKTGisoGOqUBpGQZf7Uou%2Bi976K%2Bf7UV7zFD%2Fc6YRDvwlq9K1gep6kGXHuGQy0gHSm5OxXNKed8FRkSUVY%2BaXZGYoNidigU7%2F4KhDWA1N9Le6zHKpIlA6V2s2HXBwHJNcvXMHRZQPjf7R8SzemR1xNWDs80kOTQWhEPz1icWRDz08sruIyF94hj27bkzqrBRL0n22xkwrOF%2BadpzhSH%2BSip19bJ%2BlKSuW2cyTGhz&X-Amz-Signature=063fa6df4e66fbadb2ec831754faa4ca70b617ad155de282c80f6403943d5471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQUZYMTZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnO32A2Ktp2AHmJQrw%2F8KxdP12xZBkvCV25lAKqISnpwIgVhmL3HmLP63T0pK%2FqQKxy1PuDMZtv4jVPRTfRH6i9eEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJ95Iksf6UzjBngBAircA5l863oB5NuVzq8B7XHSkxWvfVv1p4PpwwpbWRRE6FLX6nDzAbmAgD4u1NXFIbrZ9V3lRvjMLjUB7EwuTjwt5d%2FX57KDSBBo69E%2BoOVVN5uPvEhCr2WHPmCNCapI0iC%2BunDMGUTWTxX0iBHF%2B2FpGVWOMyDUeRI%2FDVRlIB6MsG%2FKpbh73YqAykv2s7pzas%2FgehgT8ostjo%2FV4HVAOpCNzZMw0qPpVI%2BHh72HWKfYaNYBbZX7C472580uHTUzmGZF7apth3%2FLU%2FL%2FqukzC8bUYgowzG0W76gZv01rXSaD%2FEwKHJswwtp53mz4y9elv2P8DA9UniVQ%2B8AVwAvOGLOl%2Bt3DK1tUfzr%2BeTYZthP%2BKHm4p0SaI25U755QyS1Jx0PYGTmdnD%2FNNqXYUXbClI0DTN6o2lK6d%2BLDTnqv7VT%2FEPuvWOFp5VnivkAxENBOzxUN2eVtQUX9j8kYW9%2BskbEStWkXLzKW4u%2FZ7Z%2BE687mbnPhKgmfbTnN64jF%2BH%2BrdsyBU1lDlepHJ6PocHDCGAjuDfYLaGb3JMJrkz5zhFuJNg7631kr%2FbNrCKiKEA7Ez4bz4fAkauQJIyA3U4Jn522MbNLfMoxr0t5Ho92dBoizmJb%2F5PtSbRWyprir2xzhMKTGisoGOqUBpGQZf7Uou%2Bi976K%2Bf7UV7zFD%2Fc6YRDvwlq9K1gep6kGXHuGQy0gHSm5OxXNKed8FRkSUVY%2BaXZGYoNidigU7%2F4KhDWA1N9Le6zHKpIlA6V2s2HXBwHJNcvXMHRZQPjf7R8SzemR1xNWDs80kOTQWhEPz1icWRDz08sruIyF94hj27bkzqrBRL0n22xkwrOF%2BadpzhSH%2BSip19bJ%2BlKSuW2cyTGhz&X-Amz-Signature=703633cd4490a0a76114bd6b72e79b00c60672ddb4a30740b558bbaf3be7f859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

