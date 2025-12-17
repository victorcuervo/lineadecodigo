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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNXYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZamhHY1vR%2BM2LddGcP8h97XohSMwhXcYgj3ZCZCkvAIhAIRIEwRWsiEqhZy3gx02hlXvD16q8mbXHzQDEsTISwhpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbg0KZbTO86uPZSb8q3AOQgGCkizObFQImJxHDbZZ60nIA4R4o9An%2FgWV7TlcsB6s5PIpvGpDvEArgpSCN1nsUHTob01ijpq3%2B5qoFQwz2ANmZHLguC292ATkItTs8Iu%2FSZ9jMFTJpnHiBSvU9G7CXQN5Ok7eysB53uH9s7rnrxf7m1x2irDxHwJI3ypfa%2F56oBotRoI7JOp0%2BYKQ6nUrCH5ZGTKh67CdIi1t1AIOF3oS4LO4CDhZNmVVkToZNcWCnl9y1SK%2BB9ANg%2FOxAIlmz0q9m%2FOB771i7teM%2Bn9UBAg1etwqJOjOx4Z2dnwLoOQETIE5BHAK%2F8zzVT7LPr54xDxEVG5cNpOJ7VN446MB2Qg6ts8YEhwx1dyb6cOMoAM7%2BFpIZgPhzy%2BBWVxRJko5HdtFfZNWQAoCk5mS0CJBNYxdrFE9UEJEqfARLIsVpkMngBAnAVTnLRr0nHgiRiLqRkaDhFsjxFXQnCeU5XuwsVSJnf3CpipWWf2RoVrLVlvXf0EaseO4hZdg31bCghMIlKpOaJZZGaJ%2BCrv5kUi5QVHrNpZHZc%2F1YbbL2ZxblTmC9KDxGvvQdKWpAwORtZ1R%2FgBHrSXEOn1%2Ftq59XuLsDZ01XeXCAwKzxAuRCjVemkDFzegdpdCRzo%2B5TOzCCn4vKBjqkAa6WlTP3SUNIpC3sI1aZ%2BKj7erOcjGe1klFbj%2B4qodnVU0%2F1ig5krXi%2Fn9gU5HPBdAsg1c6iTAJkFYH2ufiHIcMFW8LJzRDGNpHcDv3SaZvLeP3y7MNLWa3ZzrnCxYhRgwsGru98rL6BdG7%2Bx5R8GzhGoOMiGqNdIolT3m7sTxdnMqeNrceYds0NLJbP1ADTp5HAdsIFAZa3ajfccC7D0wO%2BfBw0&X-Amz-Signature=7845b508df980adcb62e54b901623bd7647845cd650e4b69197f0fa03e0d4d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNXYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZamhHY1vR%2BM2LddGcP8h97XohSMwhXcYgj3ZCZCkvAIhAIRIEwRWsiEqhZy3gx02hlXvD16q8mbXHzQDEsTISwhpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbg0KZbTO86uPZSb8q3AOQgGCkizObFQImJxHDbZZ60nIA4R4o9An%2FgWV7TlcsB6s5PIpvGpDvEArgpSCN1nsUHTob01ijpq3%2B5qoFQwz2ANmZHLguC292ATkItTs8Iu%2FSZ9jMFTJpnHiBSvU9G7CXQN5Ok7eysB53uH9s7rnrxf7m1x2irDxHwJI3ypfa%2F56oBotRoI7JOp0%2BYKQ6nUrCH5ZGTKh67CdIi1t1AIOF3oS4LO4CDhZNmVVkToZNcWCnl9y1SK%2BB9ANg%2FOxAIlmz0q9m%2FOB771i7teM%2Bn9UBAg1etwqJOjOx4Z2dnwLoOQETIE5BHAK%2F8zzVT7LPr54xDxEVG5cNpOJ7VN446MB2Qg6ts8YEhwx1dyb6cOMoAM7%2BFpIZgPhzy%2BBWVxRJko5HdtFfZNWQAoCk5mS0CJBNYxdrFE9UEJEqfARLIsVpkMngBAnAVTnLRr0nHgiRiLqRkaDhFsjxFXQnCeU5XuwsVSJnf3CpipWWf2RoVrLVlvXf0EaseO4hZdg31bCghMIlKpOaJZZGaJ%2BCrv5kUi5QVHrNpZHZc%2F1YbbL2ZxblTmC9KDxGvvQdKWpAwORtZ1R%2FgBHrSXEOn1%2Ftq59XuLsDZ01XeXCAwKzxAuRCjVemkDFzegdpdCRzo%2B5TOzCCn4vKBjqkAa6WlTP3SUNIpC3sI1aZ%2BKj7erOcjGe1klFbj%2B4qodnVU0%2F1ig5krXi%2Fn9gU5HPBdAsg1c6iTAJkFYH2ufiHIcMFW8LJzRDGNpHcDv3SaZvLeP3y7MNLWa3ZzrnCxYhRgwsGru98rL6BdG7%2Bx5R8GzhGoOMiGqNdIolT3m7sTxdnMqeNrceYds0NLJbP1ADTp5HAdsIFAZa3ajfccC7D0wO%2BfBw0&X-Amz-Signature=10a8ab866644081debe5de37003708d370f6ac679035d5ac5d4362930a4cd84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

