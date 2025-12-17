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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GSBPL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlP29xt8ONYdxVUifGjbj3DezZkmRq2UcYXEJoxpkwGAiEA0QMcPpdQFzDVdFJ4sXkSbMVu5uF5iytzyIyCbIALZZEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNNCWixtQeJHvfgqpyrcA3TdMb05FQj%2FdcqOSJ%2BWs3%2BJNJOwkZehktM0iosnqu%2BXhp%2B3u7P0aNm7mSM2e%2F%2BvsFna7Iq0xJdGhWj2u4YhRvUu6r4NGxOSHUAiLJcFOLo806r7WRQffJL%2F6GF5lc6zZUz2LRxHVzz9StMAf1ZK7yDEmuLZt4YqfXU4VViqxJiuxrpAGZA16oAHnPKbvZ4owV3PmvvQXwvRgvzUlnCsplPHA4k5BG82mauhLrOYbqOlx44v3Yz%2BR5zIqVWYBVkR6Oav9hbEjg8S%2BIdbVI7ZCwGxNWS1ksrplTQNBN%2F3AhaSxLSOd1JMvDrSkLZslEBnNtasvlhl3nNVVC1QLYNDGhBVWkOhhAuXdoyNTE3A385V3MRRFUwGklZmOZGqnMEosEJ9J8O48q7vzjMPF4l80js4KVE9kaUciFwd2ZbVxfPEf%2Botze2wIy4dFxZQFL%2BIB4x%2Ft27l%2BS1Y8iJIeHViyU1F6Poj2i%2BWaKUc%2Bj4GgPezC1Uy4YeedZ1gM6Kr%2FWp5BfaQe7tQAcpWEsblstN%2B2%2BuAeExHWSTtma6P60VuNBN6bIvIH0A2slU6G2Hfdjip%2BiitOCrnQxdlepuzqf99OX4iC%2Fn1j6zwc3Hh8V0zkUuABDw6c%2Fswd3TW1uwUMITqiMoGOqUBRjHq2UjvFUnXzf1g5KPuapu3VkhGyjaWtkC5gKAizYsayt8mTQjWaObux0K2HQH0ikr%2BuOeNP7kc3Nk5Gmcc6gw8jn%2FF4pJoQ6tzg%2FXnTDPsbh1CFD%2Bj9cpNbzVfcZF8Kh8xLvxBIWhb0pQ1Xu2kezcsQD2beqbKPM9Y2Ax7NGTXj5LOqCqWTchoKCbp85GAsTXFbB06goKqVkaj0%2B63Kkzhkn8V&X-Amz-Signature=97c99a8f9805334fd0072e154b068b6024eaff654c5aa46db90ff4ff03960a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GSBPL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlP29xt8ONYdxVUifGjbj3DezZkmRq2UcYXEJoxpkwGAiEA0QMcPpdQFzDVdFJ4sXkSbMVu5uF5iytzyIyCbIALZZEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNNCWixtQeJHvfgqpyrcA3TdMb05FQj%2FdcqOSJ%2BWs3%2BJNJOwkZehktM0iosnqu%2BXhp%2B3u7P0aNm7mSM2e%2F%2BvsFna7Iq0xJdGhWj2u4YhRvUu6r4NGxOSHUAiLJcFOLo806r7WRQffJL%2F6GF5lc6zZUz2LRxHVzz9StMAf1ZK7yDEmuLZt4YqfXU4VViqxJiuxrpAGZA16oAHnPKbvZ4owV3PmvvQXwvRgvzUlnCsplPHA4k5BG82mauhLrOYbqOlx44v3Yz%2BR5zIqVWYBVkR6Oav9hbEjg8S%2BIdbVI7ZCwGxNWS1ksrplTQNBN%2F3AhaSxLSOd1JMvDrSkLZslEBnNtasvlhl3nNVVC1QLYNDGhBVWkOhhAuXdoyNTE3A385V3MRRFUwGklZmOZGqnMEosEJ9J8O48q7vzjMPF4l80js4KVE9kaUciFwd2ZbVxfPEf%2Botze2wIy4dFxZQFL%2BIB4x%2Ft27l%2BS1Y8iJIeHViyU1F6Poj2i%2BWaKUc%2Bj4GgPezC1Uy4YeedZ1gM6Kr%2FWp5BfaQe7tQAcpWEsblstN%2B2%2BuAeExHWSTtma6P60VuNBN6bIvIH0A2slU6G2Hfdjip%2BiitOCrnQxdlepuzqf99OX4iC%2Fn1j6zwc3Hh8V0zkUuABDw6c%2Fswd3TW1uwUMITqiMoGOqUBRjHq2UjvFUnXzf1g5KPuapu3VkhGyjaWtkC5gKAizYsayt8mTQjWaObux0K2HQH0ikr%2BuOeNP7kc3Nk5Gmcc6gw8jn%2FF4pJoQ6tzg%2FXnTDPsbh1CFD%2Bj9cpNbzVfcZF8Kh8xLvxBIWhb0pQ1Xu2kezcsQD2beqbKPM9Y2Ax7NGTXj5LOqCqWTchoKCbp85GAsTXFbB06goKqVkaj0%2B63Kkzhkn8V&X-Amz-Signature=03d123c5486cdb95aa0480214eb77a5f3120b1384ce5cc18af36feb87235adcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

