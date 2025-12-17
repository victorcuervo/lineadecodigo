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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYH64D4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwgMejtIDkgnK913jo6JNQ3%2FCOSOREyAnZfv7lXR9oAiAeTZmqeALK3uIpe9Dn3RSv0kx%2FILQhWw1wcVPuplYERSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH5qdGUGilNEH4%2BYjKtwDfl1ZYRTNlyEAYpcx4gjlNb3B2qZGig6iCzsGx9A%2FRoWu4t7%2FWeV%2BapvznELtpWnvWbUbopYhOy1tkurne7224W4hnO7%2FdHUoL3tqH38rw4xC0tByIEuSZMu86MoBjfjEG1ytJlzDCZKbdcmDbuxrrMTtoC8nN0ni42r%2BCAXoTNPhOdwFxjvfuPYGI6%2B9cVp6pHm2Bz71ZaJqACgrGsq9GOxxRUDu7K4BqsUwTtfAS2v1tXt6VndoVxe8%2BqI4%2BSQu%2FYtd3ssK9H9%2FEqpkN70k%2BuAN9zYhzTIXZb%2FevvMdLuM%2BHWG5QL0SLv3V4CYZspg9AaAFtplNOqyOIIYMJFmJ%2FdgQfJ%2BYoKKu%2BjPA1ojVYCQvJsY1it0CPxIcd75ND2Nc%2Bg6ZZJuZwznYqDaE%2Fqo6s5HxfFW65Tk4ul2fC42QAS%2FKi6dIcN1q%2Fc1Sx1GnFL4Sa6cE7y33wEPPOAWLPBhnZuTKljD5QIUc1qjLwlQCfVT7xXSE%2F3D3%2FK7ssw6nyQ2Pxw2%2BnC4engminBAiTjkBL7Qg%2FrbXzfcv8GOHUXztaoUKXqqEFK31v0I9eIVCvXS%2BpaIZPZTzWaV5jEOWAbf5Fqr5iP53JG0pLetJ7wfYXfq6y1r2RJinLWmCZkswtoGLygY6pgFwWhgtl5Qe04ZEtxWY5NAOur0DKtRuBAOUEC3t5JhBH0yoiZFoLiR7fII5egskefM6hq%2B7lp51YQfIVQXwvEu%2BSiGMksmTQdc80unGs7TuGCddWHZX28cNv5e0E7n7yszOsSSuvEFUSSocewPOunZriyBly4AjojYAjeC5QWOoxdCV5WKzJ8kXI8x%2BPIMh7XV3c2SMP8vK6rSUDucdUkm%2BIPXrVnqM&X-Amz-Signature=247f372bc73d8b1f09be85420bc91cb52b29a51e6d888e296977c0c0cd96ca8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYH64D4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpwgMejtIDkgnK913jo6JNQ3%2FCOSOREyAnZfv7lXR9oAiAeTZmqeALK3uIpe9Dn3RSv0kx%2FILQhWw1wcVPuplYERSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH5qdGUGilNEH4%2BYjKtwDfl1ZYRTNlyEAYpcx4gjlNb3B2qZGig6iCzsGx9A%2FRoWu4t7%2FWeV%2BapvznELtpWnvWbUbopYhOy1tkurne7224W4hnO7%2FdHUoL3tqH38rw4xC0tByIEuSZMu86MoBjfjEG1ytJlzDCZKbdcmDbuxrrMTtoC8nN0ni42r%2BCAXoTNPhOdwFxjvfuPYGI6%2B9cVp6pHm2Bz71ZaJqACgrGsq9GOxxRUDu7K4BqsUwTtfAS2v1tXt6VndoVxe8%2BqI4%2BSQu%2FYtd3ssK9H9%2FEqpkN70k%2BuAN9zYhzTIXZb%2FevvMdLuM%2BHWG5QL0SLv3V4CYZspg9AaAFtplNOqyOIIYMJFmJ%2FdgQfJ%2BYoKKu%2BjPA1ojVYCQvJsY1it0CPxIcd75ND2Nc%2Bg6ZZJuZwznYqDaE%2Fqo6s5HxfFW65Tk4ul2fC42QAS%2FKi6dIcN1q%2Fc1Sx1GnFL4Sa6cE7y33wEPPOAWLPBhnZuTKljD5QIUc1qjLwlQCfVT7xXSE%2F3D3%2FK7ssw6nyQ2Pxw2%2BnC4engminBAiTjkBL7Qg%2FrbXzfcv8GOHUXztaoUKXqqEFK31v0I9eIVCvXS%2BpaIZPZTzWaV5jEOWAbf5Fqr5iP53JG0pLetJ7wfYXfq6y1r2RJinLWmCZkswtoGLygY6pgFwWhgtl5Qe04ZEtxWY5NAOur0DKtRuBAOUEC3t5JhBH0yoiZFoLiR7fII5egskefM6hq%2B7lp51YQfIVQXwvEu%2BSiGMksmTQdc80unGs7TuGCddWHZX28cNv5e0E7n7yszOsSSuvEFUSSocewPOunZriyBly4AjojYAjeC5QWOoxdCV5WKzJ8kXI8x%2BPIMh7XV3c2SMP8vK6rSUDucdUkm%2BIPXrVnqM&X-Amz-Signature=9fce99566ce61245b3b9cda5538d4e7759cbc91105cd41c102e65e6a7531bcf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

