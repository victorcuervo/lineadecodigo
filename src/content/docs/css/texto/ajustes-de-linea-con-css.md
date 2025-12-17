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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLH7CKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC11pJtH9%2BaNTIvs9mKOlW5rhWS9D1oBJ80K6JNVRnJ9AIgLbLFxR4Mg4xK7svpKxCzHkHmRnX7Ij7ySybd6%2B3CNdkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBAP9pXUV5AeE3u%2B7SrcA6yhATkOzlWLs%2B1hSCyYT74M9QsUOdy2dUYKjWt0GiFEtkKz0z2JtjTeaE%2FnP%2FI%2BeKKaC44VDM9qUbtIa47MTkgzWwhEmQBinA6FNEzyL5cMakrnIcxRO88qorGTSw4si2cl%2Fb6LYrbUUEEblhv%2B4L6%2FRAXxcesPLW2jqcOx4ZwJCdj9UUxJ4Qfn2Tl4lxSbxZMZEsx5TxjlcTw8Ugt6asMBVI5Z3SsxO%2FKNgEUpRTNRQEQslTyheb984WRimTRwXpthwouzsSleASTSoRl9Duf8obo8kNQCtrlnAnPTUA%2FR00NAj2JdohSl1wVjyTctFc0TODj%2FL%2BbMKd6nTV4Ws%2BlaZubhPqlFP9v5Xs4%2F%2F13gOyhw4qgfsxUveQwFCKNpExHbv9EXp03Y2KqQx%2F%2Fo9j2M0Jrd%2FfDrzeDH26oIjVKPgHr4VKi8VeQ9Sq%2FfstGB5MXDFgzUbM97efzXUCQwib2xE7ujvRaxVSKHEolBj0reh%2Bwy%2Bx7%2BYbXd911BN%2FXUB6DkTj8IXT7fB8i6y8Ft0jwFJztKf%2BF3tj6JX%2FxlvHz%2Fx8%2BqZbPNi08SlpSDfFK0wf8Y9MDyq4viYbtYMzpUgsFJ4r%2B2z3waonNUZTD%2Fp4sWC2od9fBZ1sRmcPNlMJ6DicoGOqUBNf0RUBVYNl%2BnMhuQU9akKeRtTed%2FjBV4wrri%2FYoBJ34jpYSJK9jG8S03wlqE3oG4K7MWHS51XD5hEK%2BVzwEiRG1lCBqRMFUZO5VfAv7CKmV6XTUGyc17FYmjm9jxpMY7xaC1fOtGKkKQDrNXCnBfYmLEMPALtU2%2BXraTa9iyO2VFn2X077lSBwTTPJKZz7VJh%2Fi1m%2FV%2B%2FlWHRcITfe3izhsxFK5h&X-Amz-Signature=82d8d305d85113bc9bdbeaa56b0441d0994f41e07fc371e587fc382c0ed3c4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLH7CKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC11pJtH9%2BaNTIvs9mKOlW5rhWS9D1oBJ80K6JNVRnJ9AIgLbLFxR4Mg4xK7svpKxCzHkHmRnX7Ij7ySybd6%2B3CNdkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBAP9pXUV5AeE3u%2B7SrcA6yhATkOzlWLs%2B1hSCyYT74M9QsUOdy2dUYKjWt0GiFEtkKz0z2JtjTeaE%2FnP%2FI%2BeKKaC44VDM9qUbtIa47MTkgzWwhEmQBinA6FNEzyL5cMakrnIcxRO88qorGTSw4si2cl%2Fb6LYrbUUEEblhv%2B4L6%2FRAXxcesPLW2jqcOx4ZwJCdj9UUxJ4Qfn2Tl4lxSbxZMZEsx5TxjlcTw8Ugt6asMBVI5Z3SsxO%2FKNgEUpRTNRQEQslTyheb984WRimTRwXpthwouzsSleASTSoRl9Duf8obo8kNQCtrlnAnPTUA%2FR00NAj2JdohSl1wVjyTctFc0TODj%2FL%2BbMKd6nTV4Ws%2BlaZubhPqlFP9v5Xs4%2F%2F13gOyhw4qgfsxUveQwFCKNpExHbv9EXp03Y2KqQx%2F%2Fo9j2M0Jrd%2FfDrzeDH26oIjVKPgHr4VKi8VeQ9Sq%2FfstGB5MXDFgzUbM97efzXUCQwib2xE7ujvRaxVSKHEolBj0reh%2Bwy%2Bx7%2BYbXd911BN%2FXUB6DkTj8IXT7fB8i6y8Ft0jwFJztKf%2BF3tj6JX%2FxlvHz%2Fx8%2BqZbPNi08SlpSDfFK0wf8Y9MDyq4viYbtYMzpUgsFJ4r%2B2z3waonNUZTD%2Fp4sWC2od9fBZ1sRmcPNlMJ6DicoGOqUBNf0RUBVYNl%2BnMhuQU9akKeRtTed%2FjBV4wrri%2FYoBJ34jpYSJK9jG8S03wlqE3oG4K7MWHS51XD5hEK%2BVzwEiRG1lCBqRMFUZO5VfAv7CKmV6XTUGyc17FYmjm9jxpMY7xaC1fOtGKkKQDrNXCnBfYmLEMPALtU2%2BXraTa9iyO2VFn2X077lSBwTTPJKZz7VJh%2Fi1m%2FV%2B%2FlWHRcITfe3izhsxFK5h&X-Amz-Signature=28c6172653bfe9cf4c5dd4d1d1e1fcd7884acf3c3224fa8b0de97811942549a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

