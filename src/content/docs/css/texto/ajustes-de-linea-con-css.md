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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WGWWHNL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcmnxqK71iCyAApFeIPx71lHFsCDSqpQz0NEEen7EgJAiBWIm9x2xcrMRHBcd3IUkXgC%2BlajeK%2FtgEZryr7gJOL3yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTjYSnLDkLc2c85xxKtwDxYc8vC5EGMnnZCxnBBmpsNgV7IiJLBmHUlq8I2Mi1XwaLpMAmmPF%2B37bL8JjJL8wI1DRCSAkFeLoWjBSme%2FV12PI3%2BOt1og61C9iTzXoJICY3cgvMspq6pArdBJWuINXtkoRGUC%2B5z17WzpJRCx4FCarNO3UpRt3lI8rFxfhJxh%2BpeEAkGl0qrko8pv3HhgiaQwkYtdJce%2FwbHof2Xs7ao1rMqA1IQB5imd%2B5x8gMzV7LrJBu1cLGRx4RlWZWRkXOrJwkf8iLbxx43VbJdgdu4tlYIEEcQQmHpOcSIX0DgZTOumrbNFZbPCXyUcFnZ%2BMkaLsOLrX3zPuUJ7c1jOQQVO507%2B5FeqWiSM2zljOr6DuSftylYrv0SdlWY1NEcejVesQJfKZW79Xi3M6TRgdO9FcTkkQ%2BBDSNnqCMr8f0XcOfTOeLyVcgSTE1aKxFVK0e%2FKlyM2kjoNFhv85ckP3NNaSiyz7omTciMsw%2FyYRP8p90YFgPeSKxtc2p5kIjFsoZ4c%2F9FkqX%2FZ8pKftjaMBa4NnWStEWMi72fStrdE1In8UPv6IJWwPvvD%2FTv0SURiupfAvKa12fu%2BmyYp31s6H1wItcgaop3yfG47y6z7N7MCq6WMD%2FY55%2BjEBN4wwx8WKygY6pgFzJ5Z8hdOlSzpPfg7%2BsYieUoZp16saICz1IRSRktkL0jeNTuD2IRNyWklzURHGd6cjxBpZghxB7w9IsrAYfU8Row0ETey3PLXgM1Kr5HxoUezZ%2FCGP2Kbx%2Bsi24lRoUz%2BINBhVSCtkrq8wT5SAE6F8qMPga3%2FHOFetev09NuvEIrmBNqbj4WiiqSiNdx02rjmnXUJ%2BS%2B18Oc65hu9K%2BPXERTaP2HRF&X-Amz-Signature=5448a1c40dacefbe0b68d11600f8bfedd680aefd61a2e0c955b7f51900eda1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WGWWHNL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcmnxqK71iCyAApFeIPx71lHFsCDSqpQz0NEEen7EgJAiBWIm9x2xcrMRHBcd3IUkXgC%2BlajeK%2FtgEZryr7gJOL3yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTjYSnLDkLc2c85xxKtwDxYc8vC5EGMnnZCxnBBmpsNgV7IiJLBmHUlq8I2Mi1XwaLpMAmmPF%2B37bL8JjJL8wI1DRCSAkFeLoWjBSme%2FV12PI3%2BOt1og61C9iTzXoJICY3cgvMspq6pArdBJWuINXtkoRGUC%2B5z17WzpJRCx4FCarNO3UpRt3lI8rFxfhJxh%2BpeEAkGl0qrko8pv3HhgiaQwkYtdJce%2FwbHof2Xs7ao1rMqA1IQB5imd%2B5x8gMzV7LrJBu1cLGRx4RlWZWRkXOrJwkf8iLbxx43VbJdgdu4tlYIEEcQQmHpOcSIX0DgZTOumrbNFZbPCXyUcFnZ%2BMkaLsOLrX3zPuUJ7c1jOQQVO507%2B5FeqWiSM2zljOr6DuSftylYrv0SdlWY1NEcejVesQJfKZW79Xi3M6TRgdO9FcTkkQ%2BBDSNnqCMr8f0XcOfTOeLyVcgSTE1aKxFVK0e%2FKlyM2kjoNFhv85ckP3NNaSiyz7omTciMsw%2FyYRP8p90YFgPeSKxtc2p5kIjFsoZ4c%2F9FkqX%2FZ8pKftjaMBa4NnWStEWMi72fStrdE1In8UPv6IJWwPvvD%2FTv0SURiupfAvKa12fu%2BmyYp31s6H1wItcgaop3yfG47y6z7N7MCq6WMD%2FY55%2BjEBN4wwx8WKygY6pgFzJ5Z8hdOlSzpPfg7%2BsYieUoZp16saICz1IRSRktkL0jeNTuD2IRNyWklzURHGd6cjxBpZghxB7w9IsrAYfU8Row0ETey3PLXgM1Kr5HxoUezZ%2FCGP2Kbx%2Bsi24lRoUz%2BINBhVSCtkrq8wT5SAE6F8qMPga3%2FHOFetev09NuvEIrmBNqbj4WiiqSiNdx02rjmnXUJ%2BS%2B18Oc65hu9K%2BPXERTaP2HRF&X-Amz-Signature=0f59bade4d6fb41a1a596cafb7fd3ffe468f66dfb9747464e30ea5b4ca89ea26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

