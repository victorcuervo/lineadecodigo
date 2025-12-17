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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7R5T3XD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5MuEyW29Ij%2FZyOL1%2BWEQTcZLld31X5B9rdZB9QMKYRwIhAIBOL2le5jmcurw0M36LtkpYaSoQyzojQHO44LRJ1zW6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN%2FF%2BvKIvpUyagy00q3ANWbhUXyqDd3K3c1rZJnqTR1G48VXFCJXOHbTC3djHn%2Bz5wfagzKq4adFmiEHuR2Bb1pcY35gk7UsSc9bkwZSNLBoHHElnmAAg7hqeDAncHz08FgRI4IufvwXfMbO20%2BZC24jmvULAxMZYNYxPIs9RXmQmZWnSkqVMDWfNO8FbRZkyb5VyYoG8qbdWbzl0DFhLXILOGzRlDLKm%2BaZIzH1Xs8m%2BCYPIqXERBnNGe1ukAGUD7RZnXPDtG5rx3oPlpyC0UiJtCysWxqUDLrN%2FuoNRSwhNOpQmlxGZNv%2BQe4oLo27WqMZ0Xxtcbq926BM9%2Bxw%2BeymsvRs0W%2FR0S72KBVipIRowh0M8CN9ZbFm5%2Bb6SEsNEHQh%2BL1%2B5ltw2VuCColDpKz7oHclPOfwkm%2BlUb55ru0n6SqxBWrDtaDPjB3NFjysZCicIgsAu6aciwfQl4IixsrdZQPBDMYZSiUrSDzmghk5%2FYpVGcfXyZbhVdEmmiEP3InpC7wpvmfr3RJI2Y4fcd8098%2FL%2BvVgH2NWsQEFqxa74OabHO%2Bbvdx%2Fqrlbeu91lIrR04JW%2B3rIFLg5PT3pG0bn95hwNLMWo%2F%2Fam4aOYg9h5qnlWgl0ud8hXvS%2FifRtjx8ck%2FN9Cy0GSP3jCZn4vKBjqkAf%2FE6sQAZlDxeGoV8bKzoX41ZvdGpfFEJcrCAEm7g3%2BeI6X8ZUsDTXeWvyN7O8fUJljnjPxp%2BV3R8XD%2B8OUqBT32wIke0bMWxjc41nsBc29sr53dDN6SKm3srvRDBLXL%2FDBdD5X7Ss0DicQKA41KrxZdR0aeVTEmZwwG%2FtKf%2Bptt7BAolu3uNb8WKelgEZwW6OZwcxAAX2FgYDvw5EQEx9phYUkh&X-Amz-Signature=0cfb1cb6910c1226c185adbb60d83b000a8e7575c988d73b4f485d30dc999060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7R5T3XD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5MuEyW29Ij%2FZyOL1%2BWEQTcZLld31X5B9rdZB9QMKYRwIhAIBOL2le5jmcurw0M36LtkpYaSoQyzojQHO44LRJ1zW6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN%2FF%2BvKIvpUyagy00q3ANWbhUXyqDd3K3c1rZJnqTR1G48VXFCJXOHbTC3djHn%2Bz5wfagzKq4adFmiEHuR2Bb1pcY35gk7UsSc9bkwZSNLBoHHElnmAAg7hqeDAncHz08FgRI4IufvwXfMbO20%2BZC24jmvULAxMZYNYxPIs9RXmQmZWnSkqVMDWfNO8FbRZkyb5VyYoG8qbdWbzl0DFhLXILOGzRlDLKm%2BaZIzH1Xs8m%2BCYPIqXERBnNGe1ukAGUD7RZnXPDtG5rx3oPlpyC0UiJtCysWxqUDLrN%2FuoNRSwhNOpQmlxGZNv%2BQe4oLo27WqMZ0Xxtcbq926BM9%2Bxw%2BeymsvRs0W%2FR0S72KBVipIRowh0M8CN9ZbFm5%2Bb6SEsNEHQh%2BL1%2B5ltw2VuCColDpKz7oHclPOfwkm%2BlUb55ru0n6SqxBWrDtaDPjB3NFjysZCicIgsAu6aciwfQl4IixsrdZQPBDMYZSiUrSDzmghk5%2FYpVGcfXyZbhVdEmmiEP3InpC7wpvmfr3RJI2Y4fcd8098%2FL%2BvVgH2NWsQEFqxa74OabHO%2Bbvdx%2Fqrlbeu91lIrR04JW%2B3rIFLg5PT3pG0bn95hwNLMWo%2F%2Fam4aOYg9h5qnlWgl0ud8hXvS%2FifRtjx8ck%2FN9Cy0GSP3jCZn4vKBjqkAf%2FE6sQAZlDxeGoV8bKzoX41ZvdGpfFEJcrCAEm7g3%2BeI6X8ZUsDTXeWvyN7O8fUJljnjPxp%2BV3R8XD%2B8OUqBT32wIke0bMWxjc41nsBc29sr53dDN6SKm3srvRDBLXL%2FDBdD5X7Ss0DicQKA41KrxZdR0aeVTEmZwwG%2FtKf%2Bptt7BAolu3uNb8WKelgEZwW6OZwcxAAX2FgYDvw5EQEx9phYUkh&X-Amz-Signature=46f2d58994e0de7d2f605e898903f691acf0aa3d8f4cdc9284d6d433f2517c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

