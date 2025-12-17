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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPSV5Q6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi5%2BZlsbbQqSPx%2BXoCf6aZmZ7VVx0r5VYBJNvTnMAx8AiEA%2Bru2vhsTjA%2BtPTtyK%2F07irYv%2Bbft3BmZfzVyUBBaOroq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGN4T98U4HeDVQV59CrcAw8N1YnCw%2FFZj1DUuCbbtVaXgnA9EBnPJDNyni%2BR9NocMawpBx7jpunnAOYdnWPF8dlgfdM3PCOPhP881NCTixbZ5FGQfcilApIlZQjjWbkjcpwWrYMeeQGZf1kMpi6GbH63LWXmWHPasi3nYodZRasb%2B48BGJMWFbqqMZSpT0h5LjsMM4DR3XhyzdC7XgwQi7Vg1Pl%2BKy6YPMFmqTwO%2BFDz4FLLgaQubfGwn4oRG%2Fw1uvcBV%2FHmqkGKdsFStUyflB%2FMZw7Squ9BWtyWaYoCXgLJ7XUam79QGxgN%2Blc3eexT2bmuCqiBznBgdgbD7c%2FD1NEf8dc5gEPiMuZMgKLFQmpes4MCi6ukR4SFBcEIeY8kUKxT22klJMvjIJ74qpQusNRrfB3kqPlL6fQX4ZKArnY%2F9saR9eyUku5g41eA%2FWXgB1zjRF8FGyxjvvMiiIcMfMcllodt9pI8biSO74rQiYOdYHiMy92AcAKx0L5rV2QnRKwvz8ALSkTSonIYzLB6FX5xlqT%2FCwzl7qsfD7rN%2FJx7Jla8Nuf8n6AkEzGjbHWeTXbFgMkotTMQ5llglv62CFZK7deox2%2FLJ33lZYLL2ngjRdRLzaeIpaNhOA0KhrLROhleRF00DcoSC%2FKiMNeyiMoGOqUBq2oJjjeqWSCzEo%2B3KyPZsJrwuHXhhaILCe9fbCcL4jnTX%2FL3CABkkPS%2FfRgbD63LqN8XPHAXYGBIQabl1ppMT97cVjMIQCndGBGxZbI4JsWDkJhyHozGSiiFYr7w%2FQc68j%2BcKEr2%2B4JGJUYytZ96ovptxpErEAzZHp6P8NzxoC1iY2seMitmgxQNhvzDCOxSCJFXjKx7MQDjwJO94tm%2BoceQreWJ&X-Amz-Signature=ce688ba273d266ff15f25f462a76d360d7630b3d7d40f7f27aa217b73186947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPSV5Q6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi5%2BZlsbbQqSPx%2BXoCf6aZmZ7VVx0r5VYBJNvTnMAx8AiEA%2Bru2vhsTjA%2BtPTtyK%2F07irYv%2Bbft3BmZfzVyUBBaOroq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGN4T98U4HeDVQV59CrcAw8N1YnCw%2FFZj1DUuCbbtVaXgnA9EBnPJDNyni%2BR9NocMawpBx7jpunnAOYdnWPF8dlgfdM3PCOPhP881NCTixbZ5FGQfcilApIlZQjjWbkjcpwWrYMeeQGZf1kMpi6GbH63LWXmWHPasi3nYodZRasb%2B48BGJMWFbqqMZSpT0h5LjsMM4DR3XhyzdC7XgwQi7Vg1Pl%2BKy6YPMFmqTwO%2BFDz4FLLgaQubfGwn4oRG%2Fw1uvcBV%2FHmqkGKdsFStUyflB%2FMZw7Squ9BWtyWaYoCXgLJ7XUam79QGxgN%2Blc3eexT2bmuCqiBznBgdgbD7c%2FD1NEf8dc5gEPiMuZMgKLFQmpes4MCi6ukR4SFBcEIeY8kUKxT22klJMvjIJ74qpQusNRrfB3kqPlL6fQX4ZKArnY%2F9saR9eyUku5g41eA%2FWXgB1zjRF8FGyxjvvMiiIcMfMcllodt9pI8biSO74rQiYOdYHiMy92AcAKx0L5rV2QnRKwvz8ALSkTSonIYzLB6FX5xlqT%2FCwzl7qsfD7rN%2FJx7Jla8Nuf8n6AkEzGjbHWeTXbFgMkotTMQ5llglv62CFZK7deox2%2FLJ33lZYLL2ngjRdRLzaeIpaNhOA0KhrLROhleRF00DcoSC%2FKiMNeyiMoGOqUBq2oJjjeqWSCzEo%2B3KyPZsJrwuHXhhaILCe9fbCcL4jnTX%2FL3CABkkPS%2FfRgbD63LqN8XPHAXYGBIQabl1ppMT97cVjMIQCndGBGxZbI4JsWDkJhyHozGSiiFYr7w%2FQc68j%2BcKEr2%2B4JGJUYytZ96ovptxpErEAzZHp6P8NzxoC1iY2seMitmgxQNhvzDCOxSCJFXjKx7MQDjwJO94tm%2BoceQreWJ&X-Amz-Signature=8d345a33e6b213ab3faedeb7c06fa7d36cd0c2173c6fbba3acbea3db7c4af390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

