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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBBTWS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwPbQCDeuocIObV1mdmJNuk1MeumkTk%2Bku33ROpmvEQIhAM5DMNKjeS79FAG6KyrZUxvCKCwiCOaPdH%2BhqcAXdMI1Kv8DCH0QABoMNjM3NDIzMTgzODA1Igwbpspv0bBQ%2FvCzGtkq3ANLl4cDBEiZKF%2BWi72Ce6icPcT%2BSHl7VXO%2FonFM8VxjGi%2BcJDjArLhTmXfT5Apo5GoxDcP9Na6zxFM1cEVdTUa3Iqgu%2Bfead%2F8OtpTlJkojrcuSWbzGpBTzqj76rQ5Oioj6LBwBPQwq6vquI6zNteXQoCn1N%2BnHqo8QOLnqTf8mlqOO3m%2FngJjgJBSvK%2BBxxOUNBSr697ihbxhegvntI1PY7I0426o20a9ANWVM4knxMtCkwPu7EvN4Qz%2BA2bw7eL7EIr3HJuIHdj0RGwjP5y7B6WBYTVsvD%2BAoOF7LALlt%2FVWa%2Brf5Ltlnuci5vsvYoiJe1sgMV0090CLBI3NjgArnwS8%2F82fudjGSFudkIspgCPAIfhDW2ukq%2BdXiRWMQZr%2BPH7LeruEYcMj54wmZz9fvgWxqrWU3Y0jXXKR8SBZl%2BPZ9ngRkoEjH61lqsu3ag18XEqH%2FQFB2nkGD%2BdYFW4NYL8QI6tpW6TRN4XZhf%2FW7z4KSmtFWZQq4F6PXtYhdASk%2FA7jUizwLJZj4nlVImK%2FxvQkTHDNGy6RlcOo30%2BKoYa0t0%2BRHHGnnzZ4%2FnTTZK6zCD%2BnnFzHJGchTet7h7EwTNo21jek9mE1lGcUKU4xY7YwLs6W%2Fb6k8Um37EzD3qorKBjqkAd33aiyciVgkobVeQwLooo69mz0iRBuLhXWi39ihdlU61TtLeSITOth4R%2F9eh8n%2Fgje2wMT1D6IvU43Th0OfCr5ibKybTTZ3J0kI3%2F8k0MCaJbuoswWeVUd7onaMsKQyixZLRajaRLppvX6xFWeQCVb%2FqIwqENYYbknTjYqhToVnqsevJwMKt0sr7e5wymj%2BRFOlm%2Bu4MY1bb4676Nc5EfiE%2BypR&X-Amz-Signature=50729dc8ed2e3407cc2e91548fea40eac42ea965a91592b51461c5033c1e15da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBBTWS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvwPbQCDeuocIObV1mdmJNuk1MeumkTk%2Bku33ROpmvEQIhAM5DMNKjeS79FAG6KyrZUxvCKCwiCOaPdH%2BhqcAXdMI1Kv8DCH0QABoMNjM3NDIzMTgzODA1Igwbpspv0bBQ%2FvCzGtkq3ANLl4cDBEiZKF%2BWi72Ce6icPcT%2BSHl7VXO%2FonFM8VxjGi%2BcJDjArLhTmXfT5Apo5GoxDcP9Na6zxFM1cEVdTUa3Iqgu%2Bfead%2F8OtpTlJkojrcuSWbzGpBTzqj76rQ5Oioj6LBwBPQwq6vquI6zNteXQoCn1N%2BnHqo8QOLnqTf8mlqOO3m%2FngJjgJBSvK%2BBxxOUNBSr697ihbxhegvntI1PY7I0426o20a9ANWVM4knxMtCkwPu7EvN4Qz%2BA2bw7eL7EIr3HJuIHdj0RGwjP5y7B6WBYTVsvD%2BAoOF7LALlt%2FVWa%2Brf5Ltlnuci5vsvYoiJe1sgMV0090CLBI3NjgArnwS8%2F82fudjGSFudkIspgCPAIfhDW2ukq%2BdXiRWMQZr%2BPH7LeruEYcMj54wmZz9fvgWxqrWU3Y0jXXKR8SBZl%2BPZ9ngRkoEjH61lqsu3ag18XEqH%2FQFB2nkGD%2BdYFW4NYL8QI6tpW6TRN4XZhf%2FW7z4KSmtFWZQq4F6PXtYhdASk%2FA7jUizwLJZj4nlVImK%2FxvQkTHDNGy6RlcOo30%2BKoYa0t0%2BRHHGnnzZ4%2FnTTZK6zCD%2BnnFzHJGchTet7h7EwTNo21jek9mE1lGcUKU4xY7YwLs6W%2Fb6k8Um37EzD3qorKBjqkAd33aiyciVgkobVeQwLooo69mz0iRBuLhXWi39ihdlU61TtLeSITOth4R%2F9eh8n%2Fgje2wMT1D6IvU43Th0OfCr5ibKybTTZ3J0kI3%2F8k0MCaJbuoswWeVUd7onaMsKQyixZLRajaRLppvX6xFWeQCVb%2FqIwqENYYbknTjYqhToVnqsevJwMKt0sr7e5wymj%2BRFOlm%2Bu4MY1bb4676Nc5EfiE%2BypR&X-Amz-Signature=7c23029da0d1b1219c4c6b4d39faa10209bd4b3858a4bebbd1079d078f6611af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

