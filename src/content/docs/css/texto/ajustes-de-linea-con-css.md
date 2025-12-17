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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R3AATBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeMdRZQR7kiD0XZJlDuu2pDWH9heKSEFhfbiKPDiN3xQIhAL0mz1NU5MJeYSHzcoPlh%2BuIrEImJcKALUFPv1fflHkNKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsa92DL8tIRbJ88FEq3AMkl5l9xTcaKFYcPze9zdss%2F9MPIeTUR9qBQm0Z%2BoBQ%2FPPJfEj2AQyihG0wz941LcieZcexcsKQqS%2B5kf6Vrl253v5qvpTnnSlfrznPRDW4GPCyZkm5aiyR1Gwo2Z0ZthowjlARylCGI8dVc2U7f9xclyGbHZAH9Vu6tugN3US%2B7bMSsR7txJXDg%2Fh%2FqR0Hcgm7e4ybTbBTHxqThCVGMuWlWLaSzGtwZGwAvI7fnD1qrQYjIrZYTkmHUnONhxh0grg5x5oUkI4lhAT3g0jdUQ4pJ4YNlRpfnDXnuhmU%2FrII2nPkx5hrdAqfwuwKbH2Ma9xKIGbgenP1VcUX79rOfwybEHpxBqq5hb6DYdHDAzCAMJFDA5pu5FwENcUmi7yzk0PhcJqXh1UqKtLOZYxbZBtSm35WR57o%2FLasfSNOetkxHcXpJk4qACuZpGb1O8jGv8UjkqGOSz7A%2BGsWD9QM7hwSDsVnGDQukPqCt1mWyHOtuMrPeDJuoVqsSnYxtIojE6L6j0YXE%2FswCctBR5yKYYGoq0OlFh5Xd0I0qEfBazB7NIkly584jyymAtdRSifTycSG3Kx304Ty%2Fw56bEWTUvMzQnVMv50bNQSXRVLqZjZCQJJumwJnPezW41gnBDCnoIvKBjqkAYHgKStiuuD5jaCJwX69cGmbae27YujdAGqeuAEcENC2bzGzR2jzjdnr6ODO3MqO8pc4%2BrkFENlmIG5j0rvEgHSGRQztQEnTQXdsdkjnKie8qYnR1l2WfXJOVM3Wp38IN%2BUaXxro8mcMGnCEqdHieYKlMP7YEsuq6nClpEDgQf%2B7nlbbNBJ7U9TtWwXXwME4LGatCoJGcRtQW0wPE815KJnSSGdM&X-Amz-Signature=97b0e5b1444717400c1ae501337bbec1bda36afe514f6ba7654429c301289fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R3AATBN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeMdRZQR7kiD0XZJlDuu2pDWH9heKSEFhfbiKPDiN3xQIhAL0mz1NU5MJeYSHzcoPlh%2BuIrEImJcKALUFPv1fflHkNKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsa92DL8tIRbJ88FEq3AMkl5l9xTcaKFYcPze9zdss%2F9MPIeTUR9qBQm0Z%2BoBQ%2FPPJfEj2AQyihG0wz941LcieZcexcsKQqS%2B5kf6Vrl253v5qvpTnnSlfrznPRDW4GPCyZkm5aiyR1Gwo2Z0ZthowjlARylCGI8dVc2U7f9xclyGbHZAH9Vu6tugN3US%2B7bMSsR7txJXDg%2Fh%2FqR0Hcgm7e4ybTbBTHxqThCVGMuWlWLaSzGtwZGwAvI7fnD1qrQYjIrZYTkmHUnONhxh0grg5x5oUkI4lhAT3g0jdUQ4pJ4YNlRpfnDXnuhmU%2FrII2nPkx5hrdAqfwuwKbH2Ma9xKIGbgenP1VcUX79rOfwybEHpxBqq5hb6DYdHDAzCAMJFDA5pu5FwENcUmi7yzk0PhcJqXh1UqKtLOZYxbZBtSm35WR57o%2FLasfSNOetkxHcXpJk4qACuZpGb1O8jGv8UjkqGOSz7A%2BGsWD9QM7hwSDsVnGDQukPqCt1mWyHOtuMrPeDJuoVqsSnYxtIojE6L6j0YXE%2FswCctBR5yKYYGoq0OlFh5Xd0I0qEfBazB7NIkly584jyymAtdRSifTycSG3Kx304Ty%2Fw56bEWTUvMzQnVMv50bNQSXRVLqZjZCQJJumwJnPezW41gnBDCnoIvKBjqkAYHgKStiuuD5jaCJwX69cGmbae27YujdAGqeuAEcENC2bzGzR2jzjdnr6ODO3MqO8pc4%2BrkFENlmIG5j0rvEgHSGRQztQEnTQXdsdkjnKie8qYnR1l2WfXJOVM3Wp38IN%2BUaXxro8mcMGnCEqdHieYKlMP7YEsuq6nClpEDgQf%2B7nlbbNBJ7U9TtWwXXwME4LGatCoJGcRtQW0wPE815KJnSSGdM&X-Amz-Signature=724cb6abe8a210e9a79f39c637acdfc86180372b78b467431e72c19e9b589d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

