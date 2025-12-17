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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4AMJQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUY8xx4lgtwfEqb8k4k0g98HIVN304TSOfPDjd9Z3tQIgJVXb0AxQyWlqi0e%2BaaylwzcW650iTtaSTOcQjEKor5gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi3qUY6TjO9G%2BaWcircA1azr06mqJGv45hsnJUkmBoXNvtWKjzbJhDtoDku91x3SLQqrtiyjP%2FkzXf8SJuovM5xvYWZECIFqjoYeDcxtDrdT4IdSq%2FPN%2BS5xeFEh26ZerZTVZO5cF1ttZlTxv87xJp%2FHChu0%2Bw0XKOL9S7emlRr3KgZBLwqmyhRcv7X3jvMSiHa%2Fn00YKbNTx%2FbHOLDteziB7FvD9n9%2BH%2BS8oXJ7VrDGsBi9uvlHmhYOFD0b6ciC9BcItLDocSE9UOYa3p6oVzd1Q2uu4n0YOTWASMB9Ios%2BcVor0GC1cqoNPt%2B8O9k5xc2SRsoIjIKMRZ29PYdiu%2BnOZ5iRtyicySpgTnJWQPYJOtvqBimkpzNF1zYN7K6G9snxKaiNJgFG5xKm0jQgjoW9gQ09obAWqo14fuEzAKZuj8BCyzExMYGCj%2B4Wx7349YaN%2Bd7uCt8LigBYtndDPTlkG7v5kL03xydSIulBDgB8DieoUaol98Jm%2FnsYRdHo9Lw007L6P7mmIhy9%2FmqExYKv7G3PyY7zdz3FPIwIsP%2BWqSB3tS19ntj%2BU75mg7vgK4EycN1RI1zyUxy3zjWZhYmXc7uo%2Bprb94%2Fumn93NfGML9lM2XYgaCK%2By19ICYunxg1eTcbsy6EbF9XMKiujMoGOqUB%2F59kwtYy%2Fx8a3nOmeVzWhX6BW9Em2q3J%2FcOC47RLc3SB5wg6TPZUHXoONCy30oqGFlmnLpQrFAPZcPRCfwT%2FK0k3b%2Bf423F4xcMwnMFLjgRpU08xXGY1iju%2BUqJGB5RA1svWhT6hYePk3OQhAY%2BT0B3Lf7CAvpwMiRjvbwXzcbTUqnBqJuWdDzpc4DlYlvIhY%2Flg2tl5JIc%2FKtKBdW%2FmdS9%2BrPsO&X-Amz-Signature=e4d5d419eb356b1c8e2b30c6cdd19841b156a1ec4c0e19da35ba3b9b3d366e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4AMJQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUY8xx4lgtwfEqb8k4k0g98HIVN304TSOfPDjd9Z3tQIgJVXb0AxQyWlqi0e%2BaaylwzcW650iTtaSTOcQjEKor5gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi3qUY6TjO9G%2BaWcircA1azr06mqJGv45hsnJUkmBoXNvtWKjzbJhDtoDku91x3SLQqrtiyjP%2FkzXf8SJuovM5xvYWZECIFqjoYeDcxtDrdT4IdSq%2FPN%2BS5xeFEh26ZerZTVZO5cF1ttZlTxv87xJp%2FHChu0%2Bw0XKOL9S7emlRr3KgZBLwqmyhRcv7X3jvMSiHa%2Fn00YKbNTx%2FbHOLDteziB7FvD9n9%2BH%2BS8oXJ7VrDGsBi9uvlHmhYOFD0b6ciC9BcItLDocSE9UOYa3p6oVzd1Q2uu4n0YOTWASMB9Ios%2BcVor0GC1cqoNPt%2B8O9k5xc2SRsoIjIKMRZ29PYdiu%2BnOZ5iRtyicySpgTnJWQPYJOtvqBimkpzNF1zYN7K6G9snxKaiNJgFG5xKm0jQgjoW9gQ09obAWqo14fuEzAKZuj8BCyzExMYGCj%2B4Wx7349YaN%2Bd7uCt8LigBYtndDPTlkG7v5kL03xydSIulBDgB8DieoUaol98Jm%2FnsYRdHo9Lw007L6P7mmIhy9%2FmqExYKv7G3PyY7zdz3FPIwIsP%2BWqSB3tS19ntj%2BU75mg7vgK4EycN1RI1zyUxy3zjWZhYmXc7uo%2Bprb94%2Fumn93NfGML9lM2XYgaCK%2By19ICYunxg1eTcbsy6EbF9XMKiujMoGOqUB%2F59kwtYy%2Fx8a3nOmeVzWhX6BW9Em2q3J%2FcOC47RLc3SB5wg6TPZUHXoONCy30oqGFlmnLpQrFAPZcPRCfwT%2FK0k3b%2Bf423F4xcMwnMFLjgRpU08xXGY1iju%2BUqJGB5RA1svWhT6hYePk3OQhAY%2BT0B3Lf7CAvpwMiRjvbwXzcbTUqnBqJuWdDzpc4DlYlvIhY%2Flg2tl5JIc%2FKtKBdW%2FmdS9%2BrPsO&X-Amz-Signature=e0302b6a8f14d2b289455d5985f2a6a8faabe32a061702848731c5ea2b4800be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

