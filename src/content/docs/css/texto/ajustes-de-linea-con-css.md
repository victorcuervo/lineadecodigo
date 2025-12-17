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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7CILXW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp3yxDM9Z7fw%2FG243CHr5otHw%2BPhVvve5E3mXJYhMFjAiA8Tny9RM01pVnp173d%2BOj7KPEojt21CN2ofcdqDugIdir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLZh8Z84ZxwDZ4i2LKtwDnzDZn0HpSfK4aK4gVY6e5nC74aBqL0W4OUq7ob%2FTbIN7eE0umFvxwZs5YRqmOSxoAzLE%2BCtGkK3TGxTAtbppgPdWHyPAbqtn5GPmhh%2FsguHLmf3m2YOT9wWMNWVYEb%2Fq7lRjl34cXGfUKmp5NVVQWY%2B91tsoo1QgRHdqFfONohx6llI1RvSdR7hNg67bYhjy3UUdpncqc8Zvv4D9fhbkYDyg7aqkKC%2FhtnWcenk0Epli%2BEozEULcRyosXRQwfmGt9I70iz6uLfooiDmF8sdB0uw0ncTNaktOXMdVQ2UH5cdrRiMpLAwLU6R0iO626PTDSr6Bbb801OZjqBu%2BB6c561TF99%2Fo1JQEdBvSK%2Fr7JOULGBLRkTP2%2BBqqfbutLgBnNF7fGi%2FDcECfJv424DomjMQ8FyU5%2BblQluojS%2FUcCuLQwAkRJgDm26RC%2FOWD%2BTmXwQXW1mO1NUxLdv7HjfnQaZnYs7BnIQsWFbJiajyumNDy0RxISv16MR2gPRur%2BK4GAWkpwG24N70ISCRFos1m2Ov5mRbBHJOCSw%2BbjcZNwPOT%2F4z0qw97SAtWFvNQ%2FWs%2BUv3toysHP4SOVoOmVAETabFZI8vOMjhGC13HdfQxc6eK1ec8MjmzbXu0Q%2BAwmM6IygY6pgFtcZxi9OKlC9LhdVUhM2eKLCa8g6yU53V6Fz1e9Bxwk8%2F2REi5XDedigDtZWQObpeln6dQUDUgU84L6xi9X0VeJiTEXlHKLIZ%2BFO1%2BS9Y3%2F1PIrH11GyqWiqKgt16svlNzFWDlDGe4J2ZdbMykmJNrP8sG%2B%2Fu%2FcFIQY0wLDbcvyfNbpQSQaIeMQfc5y%2BII%2BGr8uRLIhxod6H2i85xRF8SmljxDxvgY&X-Amz-Signature=3af835aa235658be9965224afe4dc23c29b4e98f2c482ab54825d795fe246738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7CILXW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp3yxDM9Z7fw%2FG243CHr5otHw%2BPhVvve5E3mXJYhMFjAiA8Tny9RM01pVnp173d%2BOj7KPEojt21CN2ofcdqDugIdir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLZh8Z84ZxwDZ4i2LKtwDnzDZn0HpSfK4aK4gVY6e5nC74aBqL0W4OUq7ob%2FTbIN7eE0umFvxwZs5YRqmOSxoAzLE%2BCtGkK3TGxTAtbppgPdWHyPAbqtn5GPmhh%2FsguHLmf3m2YOT9wWMNWVYEb%2Fq7lRjl34cXGfUKmp5NVVQWY%2B91tsoo1QgRHdqFfONohx6llI1RvSdR7hNg67bYhjy3UUdpncqc8Zvv4D9fhbkYDyg7aqkKC%2FhtnWcenk0Epli%2BEozEULcRyosXRQwfmGt9I70iz6uLfooiDmF8sdB0uw0ncTNaktOXMdVQ2UH5cdrRiMpLAwLU6R0iO626PTDSr6Bbb801OZjqBu%2BB6c561TF99%2Fo1JQEdBvSK%2Fr7JOULGBLRkTP2%2BBqqfbutLgBnNF7fGi%2FDcECfJv424DomjMQ8FyU5%2BblQluojS%2FUcCuLQwAkRJgDm26RC%2FOWD%2BTmXwQXW1mO1NUxLdv7HjfnQaZnYs7BnIQsWFbJiajyumNDy0RxISv16MR2gPRur%2BK4GAWkpwG24N70ISCRFos1m2Ov5mRbBHJOCSw%2BbjcZNwPOT%2F4z0qw97SAtWFvNQ%2FWs%2BUv3toysHP4SOVoOmVAETabFZI8vOMjhGC13HdfQxc6eK1ec8MjmzbXu0Q%2BAwmM6IygY6pgFtcZxi9OKlC9LhdVUhM2eKLCa8g6yU53V6Fz1e9Bxwk8%2F2REi5XDedigDtZWQObpeln6dQUDUgU84L6xi9X0VeJiTEXlHKLIZ%2BFO1%2BS9Y3%2F1PIrH11GyqWiqKgt16svlNzFWDlDGe4J2ZdbMykmJNrP8sG%2B%2Fu%2FcFIQY0wLDbcvyfNbpQSQaIeMQfc5y%2BII%2BGr8uRLIhxod6H2i85xRF8SmljxDxvgY&X-Amz-Signature=921a0b12e972347e0201601b49bc4b3d30b8391f0ef1d076db335aed38531383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

