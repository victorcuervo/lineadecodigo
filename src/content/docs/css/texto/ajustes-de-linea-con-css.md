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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGQ2VLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcguTBn7Tbh4aoaz4ZWZ4UsOiTkMFS1B1T2%2BKddeVRNwIgCMkBXXo%2FBH41u12iyP4K7%2BQnzmj3OOkjYoEi%2FWL7GUsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FNRZ%2BAl1940jICISrcA9aQ%2F2wEIU%2FV8s2%2Fg7FODZXooVcOMgxq8P15%2Bz98DmF0FZeKMxPRRPtOiP1rk%2BcOjTnNkka3LYtnyDNx3zLNNCT8IV8qDT5BL1iNIya9JWFc%2B4cWeygVthLmCVvcFdjakDUw6r6phw2Cm9JhFWS4%2BLZr03bI1zahc9gwl0g93paNgcGHwN%2Fpxmf9V4B9vr9Lk97449LKdVX3NDP%2BJdqsLf7I7dQ71rJeIpfypWW4qAvicRYKSnOpGoje8Z8Myf6Dz4cVeAs8OBBQdT%2Bzg899W5QFNVPswfF9AbsqOGvfynqvEUXh9EEudqWkXtsrDxAFXdubHiXA7%2FQ04PxpYtkwOBU3gbCxi1lZu8qlPTAQMBDR0U%2BX3pEEQ86Pu%2FckJXP4mg1ouHT9UtTxB6CfRHLFpREGUBnzNof4LnoN5%2Bw9Bixpzq5M8iDpnrqCQlINpFFaMErYWQ7Y0C%2BhgqHfKYS8WyO0T6T%2Fj6165WNw1XbsLvHWzObUkCgWR4I0gVc%2FTdZq98nfvNXOkxgKjNDqt%2FUzxU0KAa2McYvAglrBm1%2B0gok38CMn2qYSf79xF%2FyT7RaAcJNsWyrK6c4pwa9tXtIc9kJiyw77xfMkd7QOqASOsACu3gGcMG9xhnMhdm3zMJGfi8oGOqUBAPj8xrgXOyz9Of30vjB50u8enVtX5clOyNheGoB4piZTlxqyvoCOG6%2FZIhEzgV6%2Fzv8Rnj37hC8EHVRjKCm5wASbhqv8IbWF004NjwxXXzv1CkIKMQeTXJ1nebBgCk%2BlJcv8I7CacSKECm6fe5SBCodFuz0qG%2FBb5N4B9D6%2F3GCD3VUZ1TOW4XHquA1Lf%2BVtHGDHRUymBpibkV3VOkaa7125UdG7&X-Amz-Signature=1c0e4976791b22541ad5151459f92ca725af41503c555ac0c6def219fd9acea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGQ2VLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcguTBn7Tbh4aoaz4ZWZ4UsOiTkMFS1B1T2%2BKddeVRNwIgCMkBXXo%2FBH41u12iyP4K7%2BQnzmj3OOkjYoEi%2FWL7GUsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FNRZ%2BAl1940jICISrcA9aQ%2F2wEIU%2FV8s2%2Fg7FODZXooVcOMgxq8P15%2Bz98DmF0FZeKMxPRRPtOiP1rk%2BcOjTnNkka3LYtnyDNx3zLNNCT8IV8qDT5BL1iNIya9JWFc%2B4cWeygVthLmCVvcFdjakDUw6r6phw2Cm9JhFWS4%2BLZr03bI1zahc9gwl0g93paNgcGHwN%2Fpxmf9V4B9vr9Lk97449LKdVX3NDP%2BJdqsLf7I7dQ71rJeIpfypWW4qAvicRYKSnOpGoje8Z8Myf6Dz4cVeAs8OBBQdT%2Bzg899W5QFNVPswfF9AbsqOGvfynqvEUXh9EEudqWkXtsrDxAFXdubHiXA7%2FQ04PxpYtkwOBU3gbCxi1lZu8qlPTAQMBDR0U%2BX3pEEQ86Pu%2FckJXP4mg1ouHT9UtTxB6CfRHLFpREGUBnzNof4LnoN5%2Bw9Bixpzq5M8iDpnrqCQlINpFFaMErYWQ7Y0C%2BhgqHfKYS8WyO0T6T%2Fj6165WNw1XbsLvHWzObUkCgWR4I0gVc%2FTdZq98nfvNXOkxgKjNDqt%2FUzxU0KAa2McYvAglrBm1%2B0gok38CMn2qYSf79xF%2FyT7RaAcJNsWyrK6c4pwa9tXtIc9kJiyw77xfMkd7QOqASOsACu3gGcMG9xhnMhdm3zMJGfi8oGOqUBAPj8xrgXOyz9Of30vjB50u8enVtX5clOyNheGoB4piZTlxqyvoCOG6%2FZIhEzgV6%2Fzv8Rnj37hC8EHVRjKCm5wASbhqv8IbWF004NjwxXXzv1CkIKMQeTXJ1nebBgCk%2BlJcv8I7CacSKECm6fe5SBCodFuz0qG%2FBb5N4B9D6%2F3GCD3VUZ1TOW4XHquA1Lf%2BVtHGDHRUymBpibkV3VOkaa7125UdG7&X-Amz-Signature=afaf7eb2a69ff3a2fc9ba342ba73179cc9b43b0e32753506ce1b4688b58dd73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

