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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSYJ3H2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrPd3OfJee6AVmbQDiNp8i9e3YZwEhrDUz5K8BOlyFZAiASTfW%2Fc3Tx88YvFa562s5do2fm7blOVIUkYRBMk0A9gSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLgutLZ2SRtKyk1%2BKtwDHy0Ua38KEhOUZrqug2dF3wNQhKG8gNV4pAhfWy1A%2FUd7t3W0BijCuqIyigrJnakUkL6JBrm4L9RhVTaRsHyMO7PNzfIVRm%2BdoM5Zw0fkvFIyg6Inu%2BtAgdtPEVqRxgmPH%2Fo7ZNr4IDdnJRwd00Ip21EgERzUc2QZE%2BS60blrt7mYEk6rSk%2B1a7GTuA2rRFuJrBcdu1AUrq9eXNHRU3QkDbsNx8bgS7byytACEDzyxawl8bSmo53rQUOwCd7QpxgD1tJ55hfIhOPOjG4d5QM88CM58tMf1sA%2BKMF7e1Bi%2FsWt3dXGC6JlDyULK7wJgT%2BTtZHNNM8SPTVIHnaoAHjluOA1egLMvmlESFs%2FVLP%2FgFaTZC4InQ8U8zMJSffMfZpG%2BVYjRk7%2BdnzbKpyjbY4FzUzQTsv%2BdyNldlACq266Kadddvm%2BFNq1ceEkEZ6fr54G%2BxmZ2cwZwViw%2BUZFB6%2FHdihDgF%2Fo5KNpgrMzmIaUtihDNWsPJzaDp2le%2Fk%2BQt2w04XIP%2FPFjpkFuuYRyNw7QgXYOHLaVl%2F9pbHxBTfI8wmZ7XPvKj8CUjw7PGiZoCOZVFzuO7cV0Ttkwct4pudfjIs5xFw00pycW9r0W0cjwIp0CAumWvbW45GR7uUkwmYGLygY6pgGMlxAXoJUf1Encuhpf%2BbD4QvZaq8qcukNcr4tl%2FW39nZN%2BFzlvqsZ6CWJnqy5AFhX7HsI1RGOQ5pSimaBtjUEbw8JXvUCUBDlxBNMD9ocpeAUUm3ZZVUhOb%2Bz53zsjpRIgR3nUZXHFoVGjbpJXKd%2F0GeOs836tcsl72DMuApGFcmMHYwAY1BUnhssqi2BPvS1e2Uwi2ZzoWiKQgEsUHgUd9V0903p%2F&X-Amz-Signature=8041562ab4322776e790dbc2222493d89d3b3d51934aee4e002f413c9ae82a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSYJ3H2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrPd3OfJee6AVmbQDiNp8i9e3YZwEhrDUz5K8BOlyFZAiASTfW%2Fc3Tx88YvFa562s5do2fm7blOVIUkYRBMk0A9gSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLgutLZ2SRtKyk1%2BKtwDHy0Ua38KEhOUZrqug2dF3wNQhKG8gNV4pAhfWy1A%2FUd7t3W0BijCuqIyigrJnakUkL6JBrm4L9RhVTaRsHyMO7PNzfIVRm%2BdoM5Zw0fkvFIyg6Inu%2BtAgdtPEVqRxgmPH%2Fo7ZNr4IDdnJRwd00Ip21EgERzUc2QZE%2BS60blrt7mYEk6rSk%2B1a7GTuA2rRFuJrBcdu1AUrq9eXNHRU3QkDbsNx8bgS7byytACEDzyxawl8bSmo53rQUOwCd7QpxgD1tJ55hfIhOPOjG4d5QM88CM58tMf1sA%2BKMF7e1Bi%2FsWt3dXGC6JlDyULK7wJgT%2BTtZHNNM8SPTVIHnaoAHjluOA1egLMvmlESFs%2FVLP%2FgFaTZC4InQ8U8zMJSffMfZpG%2BVYjRk7%2BdnzbKpyjbY4FzUzQTsv%2BdyNldlACq266Kadddvm%2BFNq1ceEkEZ6fr54G%2BxmZ2cwZwViw%2BUZFB6%2FHdihDgF%2Fo5KNpgrMzmIaUtihDNWsPJzaDp2le%2Fk%2BQt2w04XIP%2FPFjpkFuuYRyNw7QgXYOHLaVl%2F9pbHxBTfI8wmZ7XPvKj8CUjw7PGiZoCOZVFzuO7cV0Ttkwct4pudfjIs5xFw00pycW9r0W0cjwIp0CAumWvbW45GR7uUkwmYGLygY6pgGMlxAXoJUf1Encuhpf%2BbD4QvZaq8qcukNcr4tl%2FW39nZN%2BFzlvqsZ6CWJnqy5AFhX7HsI1RGOQ5pSimaBtjUEbw8JXvUCUBDlxBNMD9ocpeAUUm3ZZVUhOb%2Bz53zsjpRIgR3nUZXHFoVGjbpJXKd%2F0GeOs836tcsl72DMuApGFcmMHYwAY1BUnhssqi2BPvS1e2Uwi2ZzoWiKQgEsUHgUd9V0903p%2F&X-Amz-Signature=5fdbf108f99a5a590a0c067f3666b0cf779bc55b0956539db7e0786fe7ccb7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

