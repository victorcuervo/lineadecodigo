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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63QBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCovMlyfFVhc5mN%2FHSqwFaa5P4usimmpf0Zs%2FBgWMTEAiBHejdQ4iNZyRi4BUfx1ABFtgt5NN6m2f4Bue%2F3wgXomSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTxxpIsrbbW64SCnKtwDEM6nA0RViK%2FPUt9MoAuLWLJsHzAM1r8%2BHRIJ4yDUlFieArgsZ1BpghTaKF4umqezdjNeNuCUQtWiHwtCrYCWbNaYmlnatJFfw%2BppS1Dlrjba6IZ5zun4XUA%2FAjlyHa2zDcBWE%2BKA5BLdPOCAnghgMva7J5Tmbi6nGR8a0JQpQVCDK7TjWZxFuRFB9nnOfIbtIE%2BPic0d3hhHyW9Wv7P7Cjl1QXB5u%2BOpfVSQ%2BH%2F%2BTPEIySUiMty8RGxokODpZ7VdWzK3DRESG0Xsp031rrmzedfD6lTeyjj7AV0fCFXfq8sQ1IFqxEhMpKQH25cDQdaXk%2BTzVpZqNAD690DnbGC8jpDCd7saFLrBChRqxwczwy02S7CKROTiUWyD%2BShvxnS1cwbM3tV8yqyLVU0Rcqzu6K3r4GZvS3YeGV0%2BC%2FVx85jOSGyCnC%2B%2BWKLr1wwwkDN8aHvAKDjGa74VDF1H%2Bjj15ek48bb4k9kdVTmOZKyItEHwrQhUkkDMliolo9zn%2Boj2DdMXGz7ynDkzy0F981zO%2FMS%2F1XJcxvhYf2VziMigjoWxAdZerVBiS5SVK2DFI4cnwnq2W2ckbsF59NEePk071AlO7CespOdid3%2BImTfVS0duRO79C2qbp%2BBqnhQwuZ%2BLygY6pgFIA4cOm05dPuIu0IHv%2Bs8ufThmXd2yDiWtprM4T5Bg6BtqAnWMbW6DrETeXOspatTKwfuWxHYRqbynpXkPb%2F1JlgsyT5%2FTA2wKhWqQRgc0LU%2BIuj4HVrXrVN8I6J6phJK90cTkQMJ9qC03fN%2BJ8BLgxwe3TuajkhyeQXqcZ%2BMIEet3uayLLH7GHR1vbIqMUlwiRYa5YXw4I9BUwqOA82JV6PD1%2B8HF&X-Amz-Signature=62042c931ec7905a4e817d898188b114a2e97b5bc708a86af13b93521591ca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GA63QBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCovMlyfFVhc5mN%2FHSqwFaa5P4usimmpf0Zs%2FBgWMTEAiBHejdQ4iNZyRi4BUfx1ABFtgt5NN6m2f4Bue%2F3wgXomSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTxxpIsrbbW64SCnKtwDEM6nA0RViK%2FPUt9MoAuLWLJsHzAM1r8%2BHRIJ4yDUlFieArgsZ1BpghTaKF4umqezdjNeNuCUQtWiHwtCrYCWbNaYmlnatJFfw%2BppS1Dlrjba6IZ5zun4XUA%2FAjlyHa2zDcBWE%2BKA5BLdPOCAnghgMva7J5Tmbi6nGR8a0JQpQVCDK7TjWZxFuRFB9nnOfIbtIE%2BPic0d3hhHyW9Wv7P7Cjl1QXB5u%2BOpfVSQ%2BH%2F%2BTPEIySUiMty8RGxokODpZ7VdWzK3DRESG0Xsp031rrmzedfD6lTeyjj7AV0fCFXfq8sQ1IFqxEhMpKQH25cDQdaXk%2BTzVpZqNAD690DnbGC8jpDCd7saFLrBChRqxwczwy02S7CKROTiUWyD%2BShvxnS1cwbM3tV8yqyLVU0Rcqzu6K3r4GZvS3YeGV0%2BC%2FVx85jOSGyCnC%2B%2BWKLr1wwwkDN8aHvAKDjGa74VDF1H%2Bjj15ek48bb4k9kdVTmOZKyItEHwrQhUkkDMliolo9zn%2Boj2DdMXGz7ynDkzy0F981zO%2FMS%2F1XJcxvhYf2VziMigjoWxAdZerVBiS5SVK2DFI4cnwnq2W2ckbsF59NEePk071AlO7CespOdid3%2BImTfVS0duRO79C2qbp%2BBqnhQwuZ%2BLygY6pgFIA4cOm05dPuIu0IHv%2Bs8ufThmXd2yDiWtprM4T5Bg6BtqAnWMbW6DrETeXOspatTKwfuWxHYRqbynpXkPb%2F1JlgsyT5%2FTA2wKhWqQRgc0LU%2BIuj4HVrXrVN8I6J6phJK90cTkQMJ9qC03fN%2BJ8BLgxwe3TuajkhyeQXqcZ%2BMIEet3uayLLH7GHR1vbIqMUlwiRYa5YXw4I9BUwqOA82JV6PD1%2B8HF&X-Amz-Signature=68b082685fcb98051db34617d09d5268614db9bd4c5d42fd85f47fc77209fa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

