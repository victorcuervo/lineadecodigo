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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4NTX7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FMCNToSe7b1x0Vxm7xIbljP4mHd3uHorICaPTKPuLSQIgNK78iIsYtweepy%2Bi0IRTWFtKib%2BvchA4KUMRGMrq4%2FAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F%2Bs7aN%2FkgD%2FsayHSrcA21D5sjWAM2IRvCXWE2pqO6U14K5P3%2FZCuT1enwEf%2FE%2BHx6go%2BfCi%2Fh8AEnTqYQhKvJQaYyfTIm4pWx5ZaCAR29inQ3nyngPT5%2BZ6YXAO9LkEXHJ3TS0ZtNCHkW9XhSrq5VYeP9a4apf0mqM3WXBE4Tt7A%2FxtsFF0JfE7vKDYfcP45Yzy7NeSe%2BmaqUfg8IySHpGFeCv8Qfl4QROVlbd5VJy1Z7wMbFymJc7Emtk1qMGDBeRGxIg8Lxx5XtwzGQGSwEAfX0U%2Bx0u1Q7PUcy%2FxNyAy860WwbGyQJid%2Bv6ilxM7gaVTvaYtWenyrbkuK7jWgHtflaNL%2FAvQirN75vFyyhr2ypAohPGtNKKF1X9Hu78DaNVLmi3bShtrlG8ShrwEmxEkb2bwN9pRBFkPJptUUabuHBE%2FweELvoDMJQ7NzbMSBML0hzrnyYaGo61vnhQGa29NFTmaYGDJF7Y5%2BvRfnBXVccJv4CAdVTtyvlL8Keqv7u6M0qPBQGfb6q7B%2BowrHqS9MHb1tJcpdU8WK%2FEwp%2FShoRApTKpufHOk7pfuHoXomfMwpCC50wP3czePU91DPyfB3G5Etm6killbJ26z6DczEyQLh2Mm77bjDdVzzhyP%2F9MQYwr09AwFPckMIufi8oGOqUBh4mFXWxyl06YtAg9C35xKnevVUmwh2rSnhCavOK6r%2B4I25oi0RV4rVq18WtA%2FuWEx8PhCWNj8jPstJKFsUfuAxBl8bg1fX6usr9os9B7mQBYe243vmWUBfwkK99mW6ikzJ5jNR5G4vJn1dvPgapC1yRudxKRjB4l4sM5zBehYii%2BnJSzyoDp3ipAVommAR37fyas%2Ba5OknKEEmTmo1qScPcWTOXZ&X-Amz-Signature=53f847728eefa2829a094595efdaa6dc8e8bb9ad195f1900a0cabbdd7fcb0e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4NTX7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FMCNToSe7b1x0Vxm7xIbljP4mHd3uHorICaPTKPuLSQIgNK78iIsYtweepy%2Bi0IRTWFtKib%2BvchA4KUMRGMrq4%2FAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F%2Bs7aN%2FkgD%2FsayHSrcA21D5sjWAM2IRvCXWE2pqO6U14K5P3%2FZCuT1enwEf%2FE%2BHx6go%2BfCi%2Fh8AEnTqYQhKvJQaYyfTIm4pWx5ZaCAR29inQ3nyngPT5%2BZ6YXAO9LkEXHJ3TS0ZtNCHkW9XhSrq5VYeP9a4apf0mqM3WXBE4Tt7A%2FxtsFF0JfE7vKDYfcP45Yzy7NeSe%2BmaqUfg8IySHpGFeCv8Qfl4QROVlbd5VJy1Z7wMbFymJc7Emtk1qMGDBeRGxIg8Lxx5XtwzGQGSwEAfX0U%2Bx0u1Q7PUcy%2FxNyAy860WwbGyQJid%2Bv6ilxM7gaVTvaYtWenyrbkuK7jWgHtflaNL%2FAvQirN75vFyyhr2ypAohPGtNKKF1X9Hu78DaNVLmi3bShtrlG8ShrwEmxEkb2bwN9pRBFkPJptUUabuHBE%2FweELvoDMJQ7NzbMSBML0hzrnyYaGo61vnhQGa29NFTmaYGDJF7Y5%2BvRfnBXVccJv4CAdVTtyvlL8Keqv7u6M0qPBQGfb6q7B%2BowrHqS9MHb1tJcpdU8WK%2FEwp%2FShoRApTKpufHOk7pfuHoXomfMwpCC50wP3czePU91DPyfB3G5Etm6killbJ26z6DczEyQLh2Mm77bjDdVzzhyP%2F9MQYwr09AwFPckMIufi8oGOqUBh4mFXWxyl06YtAg9C35xKnevVUmwh2rSnhCavOK6r%2B4I25oi0RV4rVq18WtA%2FuWEx8PhCWNj8jPstJKFsUfuAxBl8bg1fX6usr9os9B7mQBYe243vmWUBfwkK99mW6ikzJ5jNR5G4vJn1dvPgapC1yRudxKRjB4l4sM5zBehYii%2BnJSzyoDp3ipAVommAR37fyas%2Ba5OknKEEmTmo1qScPcWTOXZ&X-Amz-Signature=53bdb1330ec52b380748f7ba22e47f82c60017d75538a141e23bfbbc7cdab91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

