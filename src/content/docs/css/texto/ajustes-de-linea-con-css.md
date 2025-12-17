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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SZVDQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTkMX40bLCG%2BxnQnFBomyCuO%2Fd84pftKJjpvzYJCh%2FjAIhAJd9Ejp59lHv0iMlB8dEGF81IckqJa7f4KF2NIcHR6kSKv8DCHkQABoMNjM3NDIzMTgzODA1IgzKGcIHFIOCl%2BldO7kq3APT18dHXmN30mtphplYFu4jZ5h2ptAppWQbmZH1JgKRxAdLLRRjbbV5FQ3cmoAY5XBGIx45SkjoYeV3IpAxSW%2B8G%2Bd7Gw3K0CQE3e9N6tX%2F0ZX3I7Ym6t0DlJH5vtPa38%2B%2F3EToy7jd6qFTV2CwCZHP3%2BzBB%2FjtenLMvDtJ6%2F27gTALvjkOtI2fLxmmNyTRCeV2qpJFoYuPgzVvmc%2F%2B4wZdfqO%2BWLjgqp54HcUIEmGwVwuajwEC8aXaMt4qRShvFyWcmTC87rUOM6W5tNFv3boKg8S6M%2FrZteLHm2rQ%2BADNWVptNl6U%2FhdaJrNS%2BbE9Y%2F4uy2hEz0WbJVBGTxnbgvr5RUoBVJPodmbEHvS4BJW4vg5MjHk1Hlz8JS9opo6Nq%2B9v5ImZlHlF1YXmnlWY5KtMzpA%2BOIaksXRy0DIOvnngJKVMMrxXC4GD2snzEmq5fZ1rCeauwwgJICNTEg5MTG0xEI7p1vEKC5HGvwa5kwLNGRqdjsWTesdeP18uItCx0GMeAJLrxiuSrOxu3VpcHmQ9SLRdVssCNT3pznfpetyO22RU0ME3Uctc%2F29krddHeA2s%2BlUivZ27NS3nHM1MQDpZYBWKr9k3Z3k5QNdxLGpdX8a9Q9Y4Nh3iPgGQFzC10onKBjqkARZhg%2FRQ7rXJ7DdmJ87XQin8dwooBu35ZVzmXr5S63a7xrFMlDYMFLZqPQAe5HRmv94yrfDvfIzghZOZEGh3zcdujCEMX0ig5p7SSVWXotEFfBqDrmWC0ud73VXrFOCMavpu4kuudND6x8dAInlw1VvtoliKALfOYd53TEtY6LJgh%2BB0xdyzcrukR3K7oXEYycrLSYuOLrWSO4h%2FZLvtYTeZnqIp&X-Amz-Signature=4c278431f007e19a3ccd9ef089c2b12269b4f9e446edcc4485ce5ac0eb8ea6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SZVDQ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTkMX40bLCG%2BxnQnFBomyCuO%2Fd84pftKJjpvzYJCh%2FjAIhAJd9Ejp59lHv0iMlB8dEGF81IckqJa7f4KF2NIcHR6kSKv8DCHkQABoMNjM3NDIzMTgzODA1IgzKGcIHFIOCl%2BldO7kq3APT18dHXmN30mtphplYFu4jZ5h2ptAppWQbmZH1JgKRxAdLLRRjbbV5FQ3cmoAY5XBGIx45SkjoYeV3IpAxSW%2B8G%2Bd7Gw3K0CQE3e9N6tX%2F0ZX3I7Ym6t0DlJH5vtPa38%2B%2F3EToy7jd6qFTV2CwCZHP3%2BzBB%2FjtenLMvDtJ6%2F27gTALvjkOtI2fLxmmNyTRCeV2qpJFoYuPgzVvmc%2F%2B4wZdfqO%2BWLjgqp54HcUIEmGwVwuajwEC8aXaMt4qRShvFyWcmTC87rUOM6W5tNFv3boKg8S6M%2FrZteLHm2rQ%2BADNWVptNl6U%2FhdaJrNS%2BbE9Y%2F4uy2hEz0WbJVBGTxnbgvr5RUoBVJPodmbEHvS4BJW4vg5MjHk1Hlz8JS9opo6Nq%2B9v5ImZlHlF1YXmnlWY5KtMzpA%2BOIaksXRy0DIOvnngJKVMMrxXC4GD2snzEmq5fZ1rCeauwwgJICNTEg5MTG0xEI7p1vEKC5HGvwa5kwLNGRqdjsWTesdeP18uItCx0GMeAJLrxiuSrOxu3VpcHmQ9SLRdVssCNT3pznfpetyO22RU0ME3Uctc%2F29krddHeA2s%2BlUivZ27NS3nHM1MQDpZYBWKr9k3Z3k5QNdxLGpdX8a9Q9Y4Nh3iPgGQFzC10onKBjqkARZhg%2FRQ7rXJ7DdmJ87XQin8dwooBu35ZVzmXr5S63a7xrFMlDYMFLZqPQAe5HRmv94yrfDvfIzghZOZEGh3zcdujCEMX0ig5p7SSVWXotEFfBqDrmWC0ud73VXrFOCMavpu4kuudND6x8dAInlw1VvtoliKALfOYd53TEtY6LJgh%2BB0xdyzcrukR3K7oXEYycrLSYuOLrWSO4h%2FZLvtYTeZnqIp&X-Amz-Signature=7ad82e81898279d2aa71b79697e60e320e69a4157deb43d050a1618d542791b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

