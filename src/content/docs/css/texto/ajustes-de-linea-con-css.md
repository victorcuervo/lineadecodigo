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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLAT354%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB0htaN1TBE4DWkYmB7RfyUgOOF9tel%2BJZ%2F2OZGW8TXQIgDxmqqENUKiI5PSRQCjdCQoXoK1tVXMX%2B%2BUcvrTM1%2BLgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGeBpNdJkDp6%2BXXZuircA9ryZO4F9iLS4%2BCmkt3%2FdUtAE5lISRVYNKOzUPosh%2BkR5jh0AP29iZ%2BM2mrbjI7I4AVeQmGC3LHfk1Zaz2t20xeBqLiYoPIUF1Hg55kUm%2BwnqfZG05MYAnNF9GO%2B9bNIZ2ex0guDTlc7haU6YzI6ytH9OUX19Nu0LEkO2R9pv9fAiKEv%2BJWLaOz6MGZK28oaEyD42h9BGbZcS5wyPdTGwbn64XmhmsfZNA%2BFvaFqCVvCyErxPnhRNalJLQqng%2ByTGHrMjvVOYgEBVdhgqtPYQcbWyUlkCRtvx7283HGnXsOETBAsqqJdY%2BkbojElkesnZyIcFOW8V6D2EAxVwmDeQbhAkDYMywNZ4ouaj9bmOkvb2XiwMYUzzAKAQoYodp%2FMd4OfMU%2FGe9TTKTV5swi97ERCCD4DgNYaHpUDXVKVpSLSJEXKjZnvHD3Uj3KLx1%2FYYHYUQfij9QdJdQwuldIqvXTGjk6zRlqoqrg0g8cFiqzIevNfPGcCrfQwdMYrNlm06k8C7%2FSg%2BFUlh5rju4i3Y%2FSqv6MbEa4HCRtBCtLGpICQoghzluK5QVHC%2F670DODgSf2YwMD%2BbUtQtMS5hpMmuFIhkaZY2DwKK1dFX7%2B17y9bV5bpXXbRlvKFMTn%2FMPS3icoGOqUBZU7eZgSqNF2fagmeuwzjFJ3GcT81tNzmrHrbF8ZIHPT7fh8IEd9xM%2Bv0EeyTjFFQw96s7Xdq2470%2BuCgHC7ZcOu1LzrpG1wPfs0cTnVU3Kzm4svHz1Q%2BccX%2B3tPys567N6ZVSl3%2BkojlYFlrxITwHLfcDvVC2VmzN6BEGau3VkUsgbdBfRrfEzcLaxwsFyNS5dpR55P7UmzBEvLh6NQIqOKlS6c%2B&X-Amz-Signature=fc00200ab796ba984856fb8c5c46bfc50783aa331e4736ae5fde0405aeea4b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLAT354%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB0htaN1TBE4DWkYmB7RfyUgOOF9tel%2BJZ%2F2OZGW8TXQIgDxmqqENUKiI5PSRQCjdCQoXoK1tVXMX%2B%2BUcvrTM1%2BLgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGeBpNdJkDp6%2BXXZuircA9ryZO4F9iLS4%2BCmkt3%2FdUtAE5lISRVYNKOzUPosh%2BkR5jh0AP29iZ%2BM2mrbjI7I4AVeQmGC3LHfk1Zaz2t20xeBqLiYoPIUF1Hg55kUm%2BwnqfZG05MYAnNF9GO%2B9bNIZ2ex0guDTlc7haU6YzI6ytH9OUX19Nu0LEkO2R9pv9fAiKEv%2BJWLaOz6MGZK28oaEyD42h9BGbZcS5wyPdTGwbn64XmhmsfZNA%2BFvaFqCVvCyErxPnhRNalJLQqng%2ByTGHrMjvVOYgEBVdhgqtPYQcbWyUlkCRtvx7283HGnXsOETBAsqqJdY%2BkbojElkesnZyIcFOW8V6D2EAxVwmDeQbhAkDYMywNZ4ouaj9bmOkvb2XiwMYUzzAKAQoYodp%2FMd4OfMU%2FGe9TTKTV5swi97ERCCD4DgNYaHpUDXVKVpSLSJEXKjZnvHD3Uj3KLx1%2FYYHYUQfij9QdJdQwuldIqvXTGjk6zRlqoqrg0g8cFiqzIevNfPGcCrfQwdMYrNlm06k8C7%2FSg%2BFUlh5rju4i3Y%2FSqv6MbEa4HCRtBCtLGpICQoghzluK5QVHC%2F670DODgSf2YwMD%2BbUtQtMS5hpMmuFIhkaZY2DwKK1dFX7%2B17y9bV5bpXXbRlvKFMTn%2FMPS3icoGOqUBZU7eZgSqNF2fagmeuwzjFJ3GcT81tNzmrHrbF8ZIHPT7fh8IEd9xM%2Bv0EeyTjFFQw96s7Xdq2470%2BuCgHC7ZcOu1LzrpG1wPfs0cTnVU3Kzm4svHz1Q%2BccX%2B3tPys567N6ZVSl3%2BkojlYFlrxITwHLfcDvVC2VmzN6BEGau3VkUsgbdBfRrfEzcLaxwsFyNS5dpR55P7UmzBEvLh6NQIqOKlS6c%2B&X-Amz-Signature=332b549591b55a4d8b845151b8962db42f630a1090682acc4af6b1981013d0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

