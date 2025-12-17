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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGCIZ7K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCCJjBbdJ7kGxqnxIREYRe7%2BwUP7BhrdvxqGj%2BmweVnAiAUweEtVxqVaDmpRPnHLJRdiliir%2F8iN5K5PXCcGF1rJCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMHJ%2FAiruhpsaUUx2MKtwDQyuhxTomMGApr%2B8FZIxpNLfJ5h2lOEiN2HObSN%2FdpxvaJohwRRvjj1fjWNc8I24Ay31mEHwVFpWEc0lF%2FaKZ6nZK0B9Z17gT269RIRtqKeIV4Sl2ERDgjLaLuG%2F%2F%2BIBGnhY8QqYtTTw3JYNpjcK%2BwLGXKvom0pj%2BvisfviflSnF6Li%2BWep6jsm7bmhrgk0umPAEdo2x5i5Iw2Wb7etMioYsvK6i97xe%2FVXsgV%2FXJ8EOsr9VZcGgdtpZBqSyYtky78T2xvWE2NBtt0ww2P6ZaBh4MpDgDkJQQbpMNVRtcYswRubxJJeQEhng%2Fq34v2PDVN2MyagXrvdeLQpUhjjPJD9HFQ1HRj%2FdpProQUX5iOIEnzOai7eoHnMyHac8y%2F%2Bsuf42TBOoDEI13XxGufagd9dGHTDidtMAwoz2x5V88TEhmm7pWlfCEHYyG0lmsr87Pie4%2FyKOCVrW0cFQWcxfOFDYHGLuVWRjocHoSa89BRv72WoOM1j2PDVwGXo%2Fu7SXK27f7U0vH6xszPJLcOKhwJYtkjM1le5W5jL4Vc6YSxjmssD9S6tWCVd0Vi%2BCP%2BkeQ0GxcN9MomQndi0ViyMvDWBVVz4kA%2FjeVeBALkUUIBhtd3qn9uaPVO5ZLvfcwot%2BHygY6pgH7YIqkKI3DCwzLpNQoZqXifq5F2Tvi34OoM6%2FHlWFoCq7xKLCJtYjSv%2FqpljiNT5W4Q73BncFjrNvkRa9z5TbqbjJ39uKvVmBXXycs4z6kFYo%2B%2F4VNRi5Bt%2Blc1dh5W5OgRNTXnQrtAgtc9uuni9%2B0UkTdDParWjqRlRGJaZbZ4FMJyFsIER35ZMxLCVp7VRc50QYltkJm0yqCMNpk1NiK6fj%2BX3cK&X-Amz-Signature=ce9a815e4a428211dc831b29eb7fc63d0b78a3807460c4bafab48a41453cd813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGCIZ7K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCCJjBbdJ7kGxqnxIREYRe7%2BwUP7BhrdvxqGj%2BmweVnAiAUweEtVxqVaDmpRPnHLJRdiliir%2F8iN5K5PXCcGF1rJCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMHJ%2FAiruhpsaUUx2MKtwDQyuhxTomMGApr%2B8FZIxpNLfJ5h2lOEiN2HObSN%2FdpxvaJohwRRvjj1fjWNc8I24Ay31mEHwVFpWEc0lF%2FaKZ6nZK0B9Z17gT269RIRtqKeIV4Sl2ERDgjLaLuG%2F%2F%2BIBGnhY8QqYtTTw3JYNpjcK%2BwLGXKvom0pj%2BvisfviflSnF6Li%2BWep6jsm7bmhrgk0umPAEdo2x5i5Iw2Wb7etMioYsvK6i97xe%2FVXsgV%2FXJ8EOsr9VZcGgdtpZBqSyYtky78T2xvWE2NBtt0ww2P6ZaBh4MpDgDkJQQbpMNVRtcYswRubxJJeQEhng%2Fq34v2PDVN2MyagXrvdeLQpUhjjPJD9HFQ1HRj%2FdpProQUX5iOIEnzOai7eoHnMyHac8y%2F%2Bsuf42TBOoDEI13XxGufagd9dGHTDidtMAwoz2x5V88TEhmm7pWlfCEHYyG0lmsr87Pie4%2FyKOCVrW0cFQWcxfOFDYHGLuVWRjocHoSa89BRv72WoOM1j2PDVwGXo%2Fu7SXK27f7U0vH6xszPJLcOKhwJYtkjM1le5W5jL4Vc6YSxjmssD9S6tWCVd0Vi%2BCP%2BkeQ0GxcN9MomQndi0ViyMvDWBVVz4kA%2FjeVeBALkUUIBhtd3qn9uaPVO5ZLvfcwot%2BHygY6pgH7YIqkKI3DCwzLpNQoZqXifq5F2Tvi34OoM6%2FHlWFoCq7xKLCJtYjSv%2FqpljiNT5W4Q73BncFjrNvkRa9z5TbqbjJ39uKvVmBXXycs4z6kFYo%2B%2F4VNRi5Bt%2Blc1dh5W5OgRNTXnQrtAgtc9uuni9%2B0UkTdDParWjqRlRGJaZbZ4FMJyFsIER35ZMxLCVp7VRc50QYltkJm0yqCMNpk1NiK6fj%2BX3cK&X-Amz-Signature=a89b374230eb03df6cfb79bced36db8f32998ef6e6d95b9d1e3d337c5032b536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

