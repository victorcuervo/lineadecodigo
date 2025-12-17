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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53WPEU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuWjFSCmHb9OwrLr4JpO8Gj7YOhVPypJnKjjI1ZHtOmAiEAxxt4MJOm6z3cmd081v9E9gteiT4GXdFvH0qj2%2Fl0Fmwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLWwx%2Bcitr%2FN7sTSsSrcA4OvQggX9HsnurZJF0Zj1zLcbe5BeDjfvyljkqaXx7W6lDPdSQMu1l7EbPOtfvVnDV%2BFU5ZgV2vMefqUpo7z9KNuEKO0HpCy1SldIDwpZXWJs3cpqyt6uLV64M%2BtZ7OBEz5tqhMqjZ6nqVjshnnpWD6SjqsR9ZxpQLolioTlbrSxFgKjecOZ2MkVIcj9vK%2FZaN%2B6dPJGY05bSbHjkED%2Bspr1SGKhPr85hLEgerVuHgUj5szsGP97FlgzzcfMJGfZyCAjT8l4szh7XGRlasc36Bijs1vBN3AF04ms7d2CN2E5YtjJ%2Fbmle%2FfrLNBI%2FPUaTyGZFfpINy5iv2dj8oln8rnu3nM0sL2RJX4JTBzyYVNVnXtpVzC87LxsZUb33Ns24iBIpi%2BqhyTNLIsz0zjdQ9TOREo6BX8OMlImifNhyXwLMJhVc49antuA%2Bb3XTqlTfjzg%2FGseiknMPjlzKQGYcOkmRsJKJi0vf3ym22mEYS2wvnYQttRzq8FWyif5bMoL4azEcZZevM2xWBkz%2BDuNd5VTgkqRYKHJ4QUZM3FEqmqR1XyLVYXPc6nh%2BanpCKtlR2AeIUEB2kj%2BWOcLuJgx%2FLzOiFldahphOF0vCU6u3RZ%2FJS1Cx5oAbFN%2Bo9AuMKO3icoGOqUB%2Fb%2FM2pPYaA4esSoi3ua4o7ORhApJALxR0Gux%2F0jf%2FaM%2BjrS9ecJb8ubyIRYVwP4U8VH3j4Pm%2FOUlMSdarMnr7eyMN9UP9LHWuwq6kSbWYdKl3k8Qk6EOs6Ws6eluDqhWy2WElEiY9jszdegFqqYicfMjp6JYUKStjyjMbn0hiASqtWAplEDXdHOalsa2HLahNo7EwbOjPErQ5aGkxCcQy7BgnvZX&X-Amz-Signature=406b9015469960049d5df2cfdb9642a8fbb9bc2be0ec4ca464ec27efce277113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53WPEU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuWjFSCmHb9OwrLr4JpO8Gj7YOhVPypJnKjjI1ZHtOmAiEAxxt4MJOm6z3cmd081v9E9gteiT4GXdFvH0qj2%2Fl0Fmwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLWwx%2Bcitr%2FN7sTSsSrcA4OvQggX9HsnurZJF0Zj1zLcbe5BeDjfvyljkqaXx7W6lDPdSQMu1l7EbPOtfvVnDV%2BFU5ZgV2vMefqUpo7z9KNuEKO0HpCy1SldIDwpZXWJs3cpqyt6uLV64M%2BtZ7OBEz5tqhMqjZ6nqVjshnnpWD6SjqsR9ZxpQLolioTlbrSxFgKjecOZ2MkVIcj9vK%2FZaN%2B6dPJGY05bSbHjkED%2Bspr1SGKhPr85hLEgerVuHgUj5szsGP97FlgzzcfMJGfZyCAjT8l4szh7XGRlasc36Bijs1vBN3AF04ms7d2CN2E5YtjJ%2Fbmle%2FfrLNBI%2FPUaTyGZFfpINy5iv2dj8oln8rnu3nM0sL2RJX4JTBzyYVNVnXtpVzC87LxsZUb33Ns24iBIpi%2BqhyTNLIsz0zjdQ9TOREo6BX8OMlImifNhyXwLMJhVc49antuA%2Bb3XTqlTfjzg%2FGseiknMPjlzKQGYcOkmRsJKJi0vf3ym22mEYS2wvnYQttRzq8FWyif5bMoL4azEcZZevM2xWBkz%2BDuNd5VTgkqRYKHJ4QUZM3FEqmqR1XyLVYXPc6nh%2BanpCKtlR2AeIUEB2kj%2BWOcLuJgx%2FLzOiFldahphOF0vCU6u3RZ%2FJS1Cx5oAbFN%2Bo9AuMKO3icoGOqUB%2Fb%2FM2pPYaA4esSoi3ua4o7ORhApJALxR0Gux%2F0jf%2FaM%2BjrS9ecJb8ubyIRYVwP4U8VH3j4Pm%2FOUlMSdarMnr7eyMN9UP9LHWuwq6kSbWYdKl3k8Qk6EOs6Ws6eluDqhWy2WElEiY9jszdegFqqYicfMjp6JYUKStjyjMbn0hiASqtWAplEDXdHOalsa2HLahNo7EwbOjPErQ5aGkxCcQy7BgnvZX&X-Amz-Signature=5f2fcfb461bffc5bbd94507d5107ece61dd51036ae11df730daba089e4438bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

