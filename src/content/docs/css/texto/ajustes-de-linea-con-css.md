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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYSPFKC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH536hVSxOM3X1ZbO1JTDf2KiUx%2BzhvK4NyD6AUySs7pAiA%2Bbx8sOgyyVR71bymWb2MTXk7es93bFroUdVQSf2%2BtWiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXnuQ2kzjfQTnlsSKtwDN9ShKlTMDkfiG%2B%2B3PUeK0YxDV56Nq2ctntMY9mkS3kda4%2Fr5fWnmulnRoT9ab6z%2FrwTT6jnd8SU%2BA07yxgdOnKEZkNIVqgPijZBt3rxk0Op%2B8jYSV4MCtzUG7IePesulVf5xETIUkY4uj9EspoIyf3NaGtEQE4UZ1X7SDCa7aUKbEeEdmKHzdwKa85A27FBFYOW3odgwh%2BIg7aH6tetEhOkWukQL3iY2j5IPNyK6B%2FWgbxyZYiDuid7kK%2B2wZLjp0noRf%2Ff6%2BWXC%2Buo0S2F38falmoYDC4vD5RrMHCZLCiB5yqQmtypcJMQJkMQ4jz6NDwWoJN44C0RlIjocxJQekv86k0RLUUo9TXgB7%2FnCqf45oDuAbZZjOgB%2BUfD8HksZmg7lU3mWxkB6nOBJFJguEySHcvmxiweEOzmlykAs2UcsZtO0tAgGZXJLNMB562tsuuOlI%2B1%2BEVV2LBU9qwsuHXP8ZR9Y%2FfzpZ7nTd37utAXad9B90LIWSwC38Qlw1LMh7mVWcssZJQySlFHs24I9%2FO6EWI1t4Y%2FA9eSNoVGV518cFHM1arsr4jnJVEdCU6a4%2FIf41B7eaYqpkM6upujyghf1eiecqg9%2FiyoYr6Y7dJWdwApqn1iDzc%2BEtxQw3%2F%2BKygY6pgGd1H8yeKxcelQQ9pryvcfxAtdn9VPKgJNJEswicIj%2BNxZVnCbmC0s2fM49gZfaCrIio24toNHFNEHwqGYM6KEf5TgTvFI8XJwDGQM38PUYdHkTxqpchFt2n4utu%2BwUgb0FCbzig5Fvp10DOkS10%2Bd3a%2F3ujtpVmYRkqleZg%2FI0magf1uLnacOl7PStNQ1oNIJtOGEie4Q%2FqS%2BPibwajSDEGupDrMWF&X-Amz-Signature=ea7b6908c39ccc3e8fb5dce18f3985e3638937cb1dc5f25ac7bfe54f6e4e5010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYSPFKC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH536hVSxOM3X1ZbO1JTDf2KiUx%2BzhvK4NyD6AUySs7pAiA%2Bbx8sOgyyVR71bymWb2MTXk7es93bFroUdVQSf2%2BtWiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXnuQ2kzjfQTnlsSKtwDN9ShKlTMDkfiG%2B%2B3PUeK0YxDV56Nq2ctntMY9mkS3kda4%2Fr5fWnmulnRoT9ab6z%2FrwTT6jnd8SU%2BA07yxgdOnKEZkNIVqgPijZBt3rxk0Op%2B8jYSV4MCtzUG7IePesulVf5xETIUkY4uj9EspoIyf3NaGtEQE4UZ1X7SDCa7aUKbEeEdmKHzdwKa85A27FBFYOW3odgwh%2BIg7aH6tetEhOkWukQL3iY2j5IPNyK6B%2FWgbxyZYiDuid7kK%2B2wZLjp0noRf%2Ff6%2BWXC%2Buo0S2F38falmoYDC4vD5RrMHCZLCiB5yqQmtypcJMQJkMQ4jz6NDwWoJN44C0RlIjocxJQekv86k0RLUUo9TXgB7%2FnCqf45oDuAbZZjOgB%2BUfD8HksZmg7lU3mWxkB6nOBJFJguEySHcvmxiweEOzmlykAs2UcsZtO0tAgGZXJLNMB562tsuuOlI%2B1%2BEVV2LBU9qwsuHXP8ZR9Y%2FfzpZ7nTd37utAXad9B90LIWSwC38Qlw1LMh7mVWcssZJQySlFHs24I9%2FO6EWI1t4Y%2FA9eSNoVGV518cFHM1arsr4jnJVEdCU6a4%2FIf41B7eaYqpkM6upujyghf1eiecqg9%2FiyoYr6Y7dJWdwApqn1iDzc%2BEtxQw3%2F%2BKygY6pgGd1H8yeKxcelQQ9pryvcfxAtdn9VPKgJNJEswicIj%2BNxZVnCbmC0s2fM49gZfaCrIio24toNHFNEHwqGYM6KEf5TgTvFI8XJwDGQM38PUYdHkTxqpchFt2n4utu%2BwUgb0FCbzig5Fvp10DOkS10%2Bd3a%2F3ujtpVmYRkqleZg%2FI0magf1uLnacOl7PStNQ1oNIJtOGEie4Q%2FqS%2BPibwajSDEGupDrMWF&X-Amz-Signature=f41144f364a22845ef2b2153a1dcaf756afb70e821dc53713cb223c335674586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

