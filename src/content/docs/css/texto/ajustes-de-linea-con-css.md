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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJI322GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH4VSgALB8rhoZABlbZlX3j44dtkXJNOZ%2BpBLYX%2FQpXAiB085t3Wkm8kZSbxDanPMXH9n7BjT8Dzae0AA3PmDTzOCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhuJw2juDH7IHQ9INKtwDKmpmKRyQmr9petp8LXSajpnNizR2Ncf6Ot9k%2BN64fLx2oCpzVTRMrt5dzXEpqEnBU%2FDBK%2BU9YnU5Z449dUfsmak8wv0pCB6p%2FwVx4vUdcX6kichiM7fmnUgT%2FWqIYZqBwXYc6tnUOkS22XQvzvyoA1fa1%2FYSlVdB%2BNemBxQ92zi81CW9dOA%2B8n%2Fos6pKROAvxDFR7ocDTnn7EyQt6iiteYV2ZjSfK3wzEPbegCtVIYHbhzQd6rtw6JvRDEdzSzRjbG4XbxxlZzUeIexMZycSDo81Dmf7cYx0RHjeaQbhOYzyLe7ayq617suhWL4kmrLlQxQ%2F5btw%2F4PFIA88dWmPjpZl4OlyHTwa6FJgRT8zbuUQbhZw%2FtHjhEzYjfC5YLc0aPok7IriNfpjH1x2w37U2XVD%2FJMNmjeMrdeKInu3ieyRQzIDluzzSb%2B9gaiEwTqarc%2BPqiBIIb%2FdwOZFbJUCKwhWdy1ceGX0FyXYHjVLnwmhJTuWnTavXqdb5nk9kQ0Wzpz6dWcTHku9%2FNTbxbjIj%2BA790qVUAktxfGKInivusiIbYKGbJsWrzc5YbeVJSn2sFqWZ5aeUIXeRc1MCvMeo8on2ZsrMY%2BSReTjEkbl6qKTyG009MWbiyAESbAwz4OJygY6pgFbf7hT8LPC2Gb7hGtmqtUsDz1v7xD0z9gO28aTaS06cjSg%2BG8norZq49mpMNH9eGx9eVx5RPIumUFMvTGLo4YcHPyT9J4ejllpj8%2BPF0Yf488%2FRiX%2FFiYbtrNQ9ygEaiNy%2FK5GWiN8IuYIhaqMBMk20AJUqcTk%2BMDFTh4FXCb0FtFZ9%2Bv1UB%2BEDcV6Oo9xsL8Km0HcCZMRShIJWEO0SJ5e3UGsOm%2Bd&X-Amz-Signature=3b0a478b7072048319ef634557ea2b36c07cec178f91c4065338fc676fa09c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJI322GH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH4VSgALB8rhoZABlbZlX3j44dtkXJNOZ%2BpBLYX%2FQpXAiB085t3Wkm8kZSbxDanPMXH9n7BjT8Dzae0AA3PmDTzOCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhuJw2juDH7IHQ9INKtwDKmpmKRyQmr9petp8LXSajpnNizR2Ncf6Ot9k%2BN64fLx2oCpzVTRMrt5dzXEpqEnBU%2FDBK%2BU9YnU5Z449dUfsmak8wv0pCB6p%2FwVx4vUdcX6kichiM7fmnUgT%2FWqIYZqBwXYc6tnUOkS22XQvzvyoA1fa1%2FYSlVdB%2BNemBxQ92zi81CW9dOA%2B8n%2Fos6pKROAvxDFR7ocDTnn7EyQt6iiteYV2ZjSfK3wzEPbegCtVIYHbhzQd6rtw6JvRDEdzSzRjbG4XbxxlZzUeIexMZycSDo81Dmf7cYx0RHjeaQbhOYzyLe7ayq617suhWL4kmrLlQxQ%2F5btw%2F4PFIA88dWmPjpZl4OlyHTwa6FJgRT8zbuUQbhZw%2FtHjhEzYjfC5YLc0aPok7IriNfpjH1x2w37U2XVD%2FJMNmjeMrdeKInu3ieyRQzIDluzzSb%2B9gaiEwTqarc%2BPqiBIIb%2FdwOZFbJUCKwhWdy1ceGX0FyXYHjVLnwmhJTuWnTavXqdb5nk9kQ0Wzpz6dWcTHku9%2FNTbxbjIj%2BA790qVUAktxfGKInivusiIbYKGbJsWrzc5YbeVJSn2sFqWZ5aeUIXeRc1MCvMeo8on2ZsrMY%2BSReTjEkbl6qKTyG009MWbiyAESbAwz4OJygY6pgFbf7hT8LPC2Gb7hGtmqtUsDz1v7xD0z9gO28aTaS06cjSg%2BG8norZq49mpMNH9eGx9eVx5RPIumUFMvTGLo4YcHPyT9J4ejllpj8%2BPF0Yf488%2FRiX%2FFiYbtrNQ9ygEaiNy%2FK5GWiN8IuYIhaqMBMk20AJUqcTk%2BMDFTh4FXCb0FtFZ9%2Bv1UB%2BEDcV6Oo9xsL8Km0HcCZMRShIJWEO0SJ5e3UGsOm%2Bd&X-Amz-Signature=0ae835891e69bf90abd469630d6f03d77f01a8433c00f5037acfcb37783ee886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

