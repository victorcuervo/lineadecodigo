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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCTBVZ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf7IfQEeR549SoIBxuzpIPVuzDsIHIwRcqcX7tunitWgIhALKUrxtk9gNE9nPQbj0EAxImoYW4%2F64E%2BnNvhMv%2FNNgKKv8DCHoQABoMNjM3NDIzMTgzODA1IgybDAE2skI5XLv5pPgq3AOvydSi7JJuHDfMQRmGnz2HKaY68d5cworrD5iw%2BSOJe082fzqAq%2FZTTdPTvbBaicb6yK8e8QUeBmHWXNzlUX5Ay5EOSDG3qznAOlE0KZwttIySrRIDvro82n%2F3S%2B3BxdoQnkygAzhlc0kcBjdjlsyC0wN4u1F2vPLe5Bi80jmtvXdtjHnsKXQjoZNhJgGKTnXPJkrEplkCxF9AxgPOAk9%2BOCR8hNRL469X2ioHpQjVzwnHiNhx99gyDkGxh4TNxKDtB0S4qFXdjoUylAnN7FYM%2BZg5F%2F7x4IGgPQWtz0lYNg4LphG4dk394HLobB5AA%2BGtIoP447%2BoGuZWTdtRAHopuN%2F5bCkXPqwL8e64TCCGt4roT07dbWeQLQQSY44fAN1BS%2FaeJrlCoOyHioS8evSrg7YhgfyPreDJajczbN1q9wyE2ouiaEjddi4vhP1WWMKxsx9qTgSfGuaANUtYiomCBC6IJVg2ccSlkLW4582MR7GQFmW363ciq2MjQAkrve7BR0NoNsGXKMOPjk4zRxGBPyTfLtMJqcR3hFmZ3luWueD0DK1M4RObcffsv4RekYNWTNiliIWUfX7CTxj7bL8RTPqIozDV4p%2FiMDfKTmNiIl%2Bfm%2BomNwIu8WPLyDDr0onKBjqkATTgkxTgwyJG1yFlqFHeQKXywNsZfFNwIBYgIfg0UzogrOikdDevFsM1719euLnFaceU8z5pZ40YjMzKuyBpvOMLhUehJIBYhV7r6u3zLIv1bqzEDwtp0ZwSBkEVTEvm3tUEoTLAcTYZYOupBu8QW0fVeb1Xpq0W5ehtEJh06VvMGKKdDGVKFq66aL3wIZqDNxJR%2FdZm23cLok3cBbyrn%2B%2BW58P%2F&X-Amz-Signature=0afa5eb060966dc95f14598205b3e8d46af4a1389adf05e2bf53569bfdf9d9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCTBVZ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf7IfQEeR549SoIBxuzpIPVuzDsIHIwRcqcX7tunitWgIhALKUrxtk9gNE9nPQbj0EAxImoYW4%2F64E%2BnNvhMv%2FNNgKKv8DCHoQABoMNjM3NDIzMTgzODA1IgybDAE2skI5XLv5pPgq3AOvydSi7JJuHDfMQRmGnz2HKaY68d5cworrD5iw%2BSOJe082fzqAq%2FZTTdPTvbBaicb6yK8e8QUeBmHWXNzlUX5Ay5EOSDG3qznAOlE0KZwttIySrRIDvro82n%2F3S%2B3BxdoQnkygAzhlc0kcBjdjlsyC0wN4u1F2vPLe5Bi80jmtvXdtjHnsKXQjoZNhJgGKTnXPJkrEplkCxF9AxgPOAk9%2BOCR8hNRL469X2ioHpQjVzwnHiNhx99gyDkGxh4TNxKDtB0S4qFXdjoUylAnN7FYM%2BZg5F%2F7x4IGgPQWtz0lYNg4LphG4dk394HLobB5AA%2BGtIoP447%2BoGuZWTdtRAHopuN%2F5bCkXPqwL8e64TCCGt4roT07dbWeQLQQSY44fAN1BS%2FaeJrlCoOyHioS8evSrg7YhgfyPreDJajczbN1q9wyE2ouiaEjddi4vhP1WWMKxsx9qTgSfGuaANUtYiomCBC6IJVg2ccSlkLW4582MR7GQFmW363ciq2MjQAkrve7BR0NoNsGXKMOPjk4zRxGBPyTfLtMJqcR3hFmZ3luWueD0DK1M4RObcffsv4RekYNWTNiliIWUfX7CTxj7bL8RTPqIozDV4p%2FiMDfKTmNiIl%2Bfm%2BomNwIu8WPLyDDr0onKBjqkATTgkxTgwyJG1yFlqFHeQKXywNsZfFNwIBYgIfg0UzogrOikdDevFsM1719euLnFaceU8z5pZ40YjMzKuyBpvOMLhUehJIBYhV7r6u3zLIv1bqzEDwtp0ZwSBkEVTEvm3tUEoTLAcTYZYOupBu8QW0fVeb1Xpq0W5ehtEJh06VvMGKKdDGVKFq66aL3wIZqDNxJR%2FdZm23cLok3cBbyrn%2B%2BW58P%2F&X-Amz-Signature=bc521c6278882bef4a572831860ca14bb80ae01e26dc7b1f09bb092bdadbb2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

