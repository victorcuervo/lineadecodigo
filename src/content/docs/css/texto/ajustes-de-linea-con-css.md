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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYCOMPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy%2BiqUycTlPKKKypp4BNxvXDHbhKcAMbMVyOYDxih%2B%2BAiAjKu5H6s61GX2FfuZ%2BwKIYsk82YYw21wD5c0kc2oILNir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMlyg7O84CPRsJUSseKtwDNbMNgjTbjaLReXy0us2IalI3Bk1JohpaSdUxoEG7kUMN2SaxIZvizAjf2A6Sma9dHPpIQGoFya59iNY1nte3C%2B%2FhSa7sevzn55lQt9O7%2FetqK2IerahiNn7btX5Y1JyGJxwxAMrsve3hFJWDGaQDoSJFaKhfDxNNAmLoKEcH2NaoFre%2FcEduZoFRRg6pI9lJqHuMxkAo7zjQSPwTVnVzNXt0weeazk9ygDMcYxwD8huiyqqhUqVR63i2ybRdyAk8zOEsrpgQOr85lQS7RBHfYXyDyu0r4Oq6ujlyLcRYnVoiuiVU1I4BPs0Qo9L1akaXYt7cbNMGSsVteZMEVPEw0X2ICI%2FrSpa5jd8F%2F7CV8ZGhWyBVrkynYYNYBH%2Bz%2BCOLod1%2FeBJBGS2pfSonRXc3QCTKF7maujVhZQ5oi0KvLDtyjb5zCBOuHGmqrs%2Fb7v7eVBh035gwgHyOdnhX4KelEn6x5aw%2Bd9T8sxSlQhXC8rIL9F3XglD5Be1LrjNc1ENUP1aamazWrnjXHKFPc34H%2BO6ziXEwe6mLgRY4uyBYbehXBfZXTYWYH1K63DfxZzq4aTn0Jo8ttjgn82kEYC1bH%2BDOWQE9%2BUP228FjflJeKiHyD2N2WZbB0xDKft0wj6uKygY6pgGi86DxtIVW3lDtTJddKdc50A2AhLmrB05YbUtVZiU6YTMqlAxho%2BMWyRHIvV1zU6PqKQqjsUzIGtuU1%2Fib%2F8t9TRdrkK5hW5SRwyzmunGCEqIoV%2BLwN63tvDKwbQjFSmd2y3J2D3TTU2KkEQVQwPVjGhzgNkcI6pDVfipdL43AkNnFgnfly0RwbZ4U%2Fr0PFEhE%2FFvI2VoUilZyubdf2cFm7xx0Y9VW&X-Amz-Signature=68beab2c97b1031829f2848b6c36429b521124e7129096d283d1447eb697c50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYCOMPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy%2BiqUycTlPKKKypp4BNxvXDHbhKcAMbMVyOYDxih%2B%2BAiAjKu5H6s61GX2FfuZ%2BwKIYsk82YYw21wD5c0kc2oILNir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMlyg7O84CPRsJUSseKtwDNbMNgjTbjaLReXy0us2IalI3Bk1JohpaSdUxoEG7kUMN2SaxIZvizAjf2A6Sma9dHPpIQGoFya59iNY1nte3C%2B%2FhSa7sevzn55lQt9O7%2FetqK2IerahiNn7btX5Y1JyGJxwxAMrsve3hFJWDGaQDoSJFaKhfDxNNAmLoKEcH2NaoFre%2FcEduZoFRRg6pI9lJqHuMxkAo7zjQSPwTVnVzNXt0weeazk9ygDMcYxwD8huiyqqhUqVR63i2ybRdyAk8zOEsrpgQOr85lQS7RBHfYXyDyu0r4Oq6ujlyLcRYnVoiuiVU1I4BPs0Qo9L1akaXYt7cbNMGSsVteZMEVPEw0X2ICI%2FrSpa5jd8F%2F7CV8ZGhWyBVrkynYYNYBH%2Bz%2BCOLod1%2FeBJBGS2pfSonRXc3QCTKF7maujVhZQ5oi0KvLDtyjb5zCBOuHGmqrs%2Fb7v7eVBh035gwgHyOdnhX4KelEn6x5aw%2Bd9T8sxSlQhXC8rIL9F3XglD5Be1LrjNc1ENUP1aamazWrnjXHKFPc34H%2BO6ziXEwe6mLgRY4uyBYbehXBfZXTYWYH1K63DfxZzq4aTn0Jo8ttjgn82kEYC1bH%2BDOWQE9%2BUP228FjflJeKiHyD2N2WZbB0xDKft0wj6uKygY6pgGi86DxtIVW3lDtTJddKdc50A2AhLmrB05YbUtVZiU6YTMqlAxho%2BMWyRHIvV1zU6PqKQqjsUzIGtuU1%2Fib%2F8t9TRdrkK5hW5SRwyzmunGCEqIoV%2BLwN63tvDKwbQjFSmd2y3J2D3TTU2KkEQVQwPVjGhzgNkcI6pDVfipdL43AkNnFgnfly0RwbZ4U%2Fr0PFEhE%2FFvI2VoUilZyubdf2cFm7xx0Y9VW&X-Amz-Signature=ea060f761c351de13b720a7811b401457df3e23001e924c5c62c39370d573c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

