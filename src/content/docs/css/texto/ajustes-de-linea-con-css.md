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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6PTWF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM%2FvsJ0fQUWbPEoRvvlTso6FSBxjLyGGjPPtoBjsCCVAiBm4cnl5SvV8rnYZuAe%2BFG9IfvTL%2Fczk3CKjVFVB95r0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUTXqB8Rl9q2ODQvWKtwDcT748yNAEyZIxximMuCV8Vxe7GrsquPdRdUlQwJ9tGG9Zr6msqgBLBptquQMNxZalvz4wMOtDzBg72exhdJD1zZWzMxE%2BaOh4d5qR5eLI4YHW0DTh3iZUaN%2BqEnwS4a40bqv1Xo0hhlVoLrGVBmJkMNcvhVZXJ663XWVtpZcPzBZgg%2BuGGHCUwM8riU6%2Fb%2FGREx3G4OBfopsZxgZpFLVAeiLosja6oly6JMyq%2FvWAf%2FApXCmJCihOFEQA%2FPCMF%2BSQI1aWZy1EYsBe%2FLGlwE0vYFqGEXFENAwRiGYdQzmPDIZvjoCpewuPzSyMz%2F5gMBiURnNLziy8iGfMGE%2FHX6KXwl%2B5PvI4qgDiZyJeVsXrUKKYp11zAP2tQ2NlTykJG5LctWudJoI5TRc97Z6LdLwYPEE4uJraDhzynzyi17nOHhdyuZp7R3w6ekisUsgWQRSPsaW9BqDb72V56O%2B%2FdIjhf%2F2btnIUSY2qyx1Rblh0mjpZk1MM1Fb0RPwanaBiM61evzwWZL5%2F1gpvO9Zc8BR9dFYNIZyvS2rxPO1vhihLytt0R7ChQBGPblUAKNY3n6sY2xJD%2Ftmkf%2FSO2oC2MlIQ8i5RxjpD65XSRlSk4zE9sA%2BNL8wEuHMz3tEMQsw6o6KygY6pgGjMLoMQTx%2BK41%2B38cECYX2PdcCQWATFUuxT7vpCTuqx7DyjqXxBLusDch3GIHeOFsR50nNzX6i1bfR1mpfn5hWxHVhMaL%2FIYfZ1wscarq8Lz3XBUQCVfQQgxOaBu4RxTityrGJZzZhYUwkBMslIpqoblurLKuQ7cuohrOxcQp52lfcGTP%2FERUfPhj1xs7FE3gAuVxts7vb8KGDujp8ue6dgthzt2YP&X-Amz-Signature=40965938cf87dbe1174699f31a30e4d38ff3bb1d51e135fb921458c82637ddf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6PTWF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM%2FvsJ0fQUWbPEoRvvlTso6FSBxjLyGGjPPtoBjsCCVAiBm4cnl5SvV8rnYZuAe%2BFG9IfvTL%2Fczk3CKjVFVB95r0ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUTXqB8Rl9q2ODQvWKtwDcT748yNAEyZIxximMuCV8Vxe7GrsquPdRdUlQwJ9tGG9Zr6msqgBLBptquQMNxZalvz4wMOtDzBg72exhdJD1zZWzMxE%2BaOh4d5qR5eLI4YHW0DTh3iZUaN%2BqEnwS4a40bqv1Xo0hhlVoLrGVBmJkMNcvhVZXJ663XWVtpZcPzBZgg%2BuGGHCUwM8riU6%2Fb%2FGREx3G4OBfopsZxgZpFLVAeiLosja6oly6JMyq%2FvWAf%2FApXCmJCihOFEQA%2FPCMF%2BSQI1aWZy1EYsBe%2FLGlwE0vYFqGEXFENAwRiGYdQzmPDIZvjoCpewuPzSyMz%2F5gMBiURnNLziy8iGfMGE%2FHX6KXwl%2B5PvI4qgDiZyJeVsXrUKKYp11zAP2tQ2NlTykJG5LctWudJoI5TRc97Z6LdLwYPEE4uJraDhzynzyi17nOHhdyuZp7R3w6ekisUsgWQRSPsaW9BqDb72V56O%2B%2FdIjhf%2F2btnIUSY2qyx1Rblh0mjpZk1MM1Fb0RPwanaBiM61evzwWZL5%2F1gpvO9Zc8BR9dFYNIZyvS2rxPO1vhihLytt0R7ChQBGPblUAKNY3n6sY2xJD%2Ftmkf%2FSO2oC2MlIQ8i5RxjpD65XSRlSk4zE9sA%2BNL8wEuHMz3tEMQsw6o6KygY6pgGjMLoMQTx%2BK41%2B38cECYX2PdcCQWATFUuxT7vpCTuqx7DyjqXxBLusDch3GIHeOFsR50nNzX6i1bfR1mpfn5hWxHVhMaL%2FIYfZ1wscarq8Lz3XBUQCVfQQgxOaBu4RxTityrGJZzZhYUwkBMslIpqoblurLKuQ7cuohrOxcQp52lfcGTP%2FERUfPhj1xs7FE3gAuVxts7vb8KGDujp8ue6dgthzt2YP&X-Amz-Signature=38d41cd3d85c92e28d170a8929a44812cc7b41cedd9e6eb0dac2b6a9ffb77d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

