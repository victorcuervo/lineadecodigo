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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6OYUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnZ0Rcug1QHO%2FesUcsX4cH5tmWjvHq4L%2BKZVYrbEx4HQIhAPEOlcrWN0fgu4y1m0CTC35nY5T7lxTyRzicTpssLxkYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4kLwS%2F32HtVbH%2FYsq3AOScKCtaDCUpvH1b3fA1mS4dxCnEYvm7WDentYTgNB%2F1Vab8GGreP6G51xHwYlI8QNoQn83pumwALPj4hOPPsOJridRpaw90nVxR2Iimc91w%2B73Euz5n4OT541W3tMmyZ7f7MajeOVMmqIp%2BwOJIyoqd7T4eg0vciO55i%2Bjl1ZwWM2t2u54NaFoT9SnTz19l7cctnBLbC%2FOyudKcFLcT5i8AfDPrl1ypMxwzQKhD%2F%2BBnF52FjvOMO8BJkHevTmeF7FlySdnlPFHf3BoHQhpJ3HwgxFbBWOUo5XPP9Q%2BXcMj9W0qqNno62JWKYN9WKwMYahZZyjNs%2Fsr%2FjZm7%2FcurVEF85QDgDfpiDZD%2FN6BADekavWhMFNTkE%2Fqh0k5DMJOaJnkxBq4k4FOO0CUbdDvgVuvS16JVeY2qd7IbbZnu2PC9fv68Wx%2FrwfnoYT3U4OSeIBGWNKF6Qk6Jl0L1fGrpvod8P%2BBisG8o8ZFSoZaj1%2F4JCKIOEPZigBU%2Bgqjb5CRhcQpdQaiQRAjXDKRPV2Ft3XMzrAUbTj%2BtT8f8MU5wjXg4huB5%2FvQ7nfnCIFbA94cSE7a3e9XWFFCz2HVoFEgtVVZ8zJZP7LcUB6jZTKq3iBQbJb2H9J1Ik8HC3LcvDCIoIvKBjqkAYS7LK7yABJvr1Wotggeh7SeP0pePMy8dIso6W5KVBfbS7ZWqOZrwSoDqEO6nU%2FFSODy1n3yp%2Bua0BnCSqiBWA%2B3tuQntnHmpCz5Zxr7jv1vPNGtWT4rlgSyz6fH5HFxzSYE9c4VwsX08dmyuxCtqGOA5cbxGj4isGEJ6NKQ3za7FkeC7bJdngbSeoc43zqH8sNGnx9drDDMRB6q2XAX1ijyiR3N&X-Amz-Signature=91a434be417aa09b0e7e55429133be1588a026341561c231c7a909f49de78655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6OYUC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnZ0Rcug1QHO%2FesUcsX4cH5tmWjvHq4L%2BKZVYrbEx4HQIhAPEOlcrWN0fgu4y1m0CTC35nY5T7lxTyRzicTpssLxkYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4kLwS%2F32HtVbH%2FYsq3AOScKCtaDCUpvH1b3fA1mS4dxCnEYvm7WDentYTgNB%2F1Vab8GGreP6G51xHwYlI8QNoQn83pumwALPj4hOPPsOJridRpaw90nVxR2Iimc91w%2B73Euz5n4OT541W3tMmyZ7f7MajeOVMmqIp%2BwOJIyoqd7T4eg0vciO55i%2Bjl1ZwWM2t2u54NaFoT9SnTz19l7cctnBLbC%2FOyudKcFLcT5i8AfDPrl1ypMxwzQKhD%2F%2BBnF52FjvOMO8BJkHevTmeF7FlySdnlPFHf3BoHQhpJ3HwgxFbBWOUo5XPP9Q%2BXcMj9W0qqNno62JWKYN9WKwMYahZZyjNs%2Fsr%2FjZm7%2FcurVEF85QDgDfpiDZD%2FN6BADekavWhMFNTkE%2Fqh0k5DMJOaJnkxBq4k4FOO0CUbdDvgVuvS16JVeY2qd7IbbZnu2PC9fv68Wx%2FrwfnoYT3U4OSeIBGWNKF6Qk6Jl0L1fGrpvod8P%2BBisG8o8ZFSoZaj1%2F4JCKIOEPZigBU%2Bgqjb5CRhcQpdQaiQRAjXDKRPV2Ft3XMzrAUbTj%2BtT8f8MU5wjXg4huB5%2FvQ7nfnCIFbA94cSE7a3e9XWFFCz2HVoFEgtVVZ8zJZP7LcUB6jZTKq3iBQbJb2H9J1Ik8HC3LcvDCIoIvKBjqkAYS7LK7yABJvr1Wotggeh7SeP0pePMy8dIso6W5KVBfbS7ZWqOZrwSoDqEO6nU%2FFSODy1n3yp%2Bua0BnCSqiBWA%2B3tuQntnHmpCz5Zxr7jv1vPNGtWT4rlgSyz6fH5HFxzSYE9c4VwsX08dmyuxCtqGOA5cbxGj4isGEJ6NKQ3za7FkeC7bJdngbSeoc43zqH8sNGnx9drDDMRB6q2XAX1ijyiR3N&X-Amz-Signature=d644f43ab14968b0a678b220fff151a51678d095ed4ad85e44eb6a01e7c3f5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

