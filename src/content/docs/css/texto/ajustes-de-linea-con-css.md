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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UOSVGFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC24Trryv5uKXm2zDTq47CPzHwo0eRjJd%2BTFdCeWpUb6QIhALzzo0rvOWlWPkKbs1li5uSaCuCtra%2FJQq8sD1l%2F8PVBKv8DCHwQABoMNjM3NDIzMTgzODA1IgxGUAM01xhkPeubC9Yq3AOtsWJL%2B5t5ZhEUJQb%2FlQd92i8M1uSLL96BkuywSAluR5%2F4XYoGQdAY19j21SyBE72DAq%2Fi044Np3kI3Pj72elnU6iI7Rr23JiXkFKUd0e7vWxgu0iubIR4F5rs4lltTLRi4wF0hYmj6EZcc6iEInOBY5mJ90XnH07BQeqoSTXzLUqilc4ZOYhOCcFFxZabcE3U5LOHU4BHgkS9i9nsSsN8OufkL35NUZ%2BPyGQX7OVIsKP%2B47xRNToW1GojPbF2TZG7465WTYL%2FPNAQM%2Bb4cKZtlh5Ztf82U3WKpmYs03RXYwrOQehHs5%2Bg3RpoAer1CK2m01hn8kGN0YW1MdMVbpPGgy8RBGvhJNSELkpA05Ek6OQKfwQPSePfPOTb8csYNCrYFXTG8kccl8jvvRE7Dn1PWQzujY4U%2BRYZ6Qd4z3v5DuQTrWaaUKWCUbITIFALSmMvEf2vS46d1NJOEFM6XPVw%2B1dW3g1gh2ky0wYXWbryvDxosMDD1z4lRWFgTkWRAENhFr3%2BzLR4P2pxMx0sGSCbeT5mUdoFMj3BxAISqIRWoDg1P2zRhNakMw59H3Nk6SCVYtlVe2YFfTcwhwfg1h6%2FVvbpTEwQ%2FxD%2F%2BdertM%2B7%2B3BVbLFcTKLj25gn6zCWj4rKBjqkASUyZA52tbsUEwnh2L3b8zO2XeMzrprrbK6S21jsE00WcMMKVTOlMi%2BdVRR32zUlr9UWCWdrck6niJInJFuUkQM%2F5Wl4qBD2wpP4%2BO2Q5J9MvJm2CfxkPVRXRxW72Zyd7SzWing8JcaUiqWlyKwNCQ55prQI2JjjB0FdAOS7WfaJ%2F5FwmUMkQBhQMDQ2%2F5NQdXa1GCPgCtHkgeaco1FZREdnfjrB&X-Amz-Signature=93f9fbc0f17ca0597f21d44cba69364168db2cc1f56fead158e2e3823258b07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UOSVGFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC24Trryv5uKXm2zDTq47CPzHwo0eRjJd%2BTFdCeWpUb6QIhALzzo0rvOWlWPkKbs1li5uSaCuCtra%2FJQq8sD1l%2F8PVBKv8DCHwQABoMNjM3NDIzMTgzODA1IgxGUAM01xhkPeubC9Yq3AOtsWJL%2B5t5ZhEUJQb%2FlQd92i8M1uSLL96BkuywSAluR5%2F4XYoGQdAY19j21SyBE72DAq%2Fi044Np3kI3Pj72elnU6iI7Rr23JiXkFKUd0e7vWxgu0iubIR4F5rs4lltTLRi4wF0hYmj6EZcc6iEInOBY5mJ90XnH07BQeqoSTXzLUqilc4ZOYhOCcFFxZabcE3U5LOHU4BHgkS9i9nsSsN8OufkL35NUZ%2BPyGQX7OVIsKP%2B47xRNToW1GojPbF2TZG7465WTYL%2FPNAQM%2Bb4cKZtlh5Ztf82U3WKpmYs03RXYwrOQehHs5%2Bg3RpoAer1CK2m01hn8kGN0YW1MdMVbpPGgy8RBGvhJNSELkpA05Ek6OQKfwQPSePfPOTb8csYNCrYFXTG8kccl8jvvRE7Dn1PWQzujY4U%2BRYZ6Qd4z3v5DuQTrWaaUKWCUbITIFALSmMvEf2vS46d1NJOEFM6XPVw%2B1dW3g1gh2ky0wYXWbryvDxosMDD1z4lRWFgTkWRAENhFr3%2BzLR4P2pxMx0sGSCbeT5mUdoFMj3BxAISqIRWoDg1P2zRhNakMw59H3Nk6SCVYtlVe2YFfTcwhwfg1h6%2FVvbpTEwQ%2FxD%2F%2BdertM%2B7%2B3BVbLFcTKLj25gn6zCWj4rKBjqkASUyZA52tbsUEwnh2L3b8zO2XeMzrprrbK6S21jsE00WcMMKVTOlMi%2BdVRR32zUlr9UWCWdrck6niJInJFuUkQM%2F5Wl4qBD2wpP4%2BO2Q5J9MvJm2CfxkPVRXRxW72Zyd7SzWing8JcaUiqWlyKwNCQ55prQI2JjjB0FdAOS7WfaJ%2F5FwmUMkQBhQMDQ2%2F5NQdXa1GCPgCtHkgeaco1FZREdnfjrB&X-Amz-Signature=03af657d455cef8f852f94b54adfe3020c521a70fdc8ae6776911e57043291ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

