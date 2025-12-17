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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TNYUQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdpsM9tTVVw0fn%2FrcDzOFwgfW37P2MfN6%2B1rLU3WhGgIhAOdCl9gT6ZtnQ3ehZ%2B1crRYfj7y0rCrca5uHrB3LrFijKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBsXNM%2F1sYx16Bq0Mq3APQmWkQn%2BZ5QnrgfxSdK%2Bjaazg004ylV%2BDazL23m7ndYBNRMRwarDAwHqHlek4P0d73uY7g9knn50PzmmO9aEy0Onfr5d3P4O0mL70K8IguyPFrCMa5liT%2BeIb8WELL0u%2BAnb%2Btjfr5juABlpCcnMH%2BmV4Z8smYA7f91SK%2BXe%2Fkmo8UUjMAyScYDw8%2BZQ0Lhe8Zs7n1pt4zXIp0VuZx%2Fh5BNgmcVKPRhSe6vPCpVaK%2BrrPjOXriUDAaYb5FWyzAXnImLe%2B8CkS3X2OdXkGo8Z0ZR2ezRJEIaGtDxOYD1P0eBnKGhQgV5oS2YL2ZuyeHttOeSolBm0LnbOaW2Be2Oeos%2FhTjvW8ywyQeMXrqEa1iUsav6WUQDY7Jw0zqWp%2FtHnJhklXE2kxKE8%2FWzzZ0amT4aXJ0L9naEV2IlKzGR3W5V%2Bl32vR67bFSUdBBp53verbb2Jm3FSZrWfbf2JeTtjvQiSFTmZIFTbLBXRPeM1Rrx9SEsyQSFmH%2F0Zy0A0pa1smAoZAwordSrpK2HQwRXh373Nty%2FrNO%2BQ4Gq2GgLmKBcCXYu4heDzyVu4NaN7aya%2BsdE4bmlzdLZjAcOUOMyt9T9tlAOV4iWt6epWp759VepccjYDeVUfIamesujDDNnovKBjqkAS%2FxJdYP1Db4Ev6tfGrPUvFe%2FQHAV1dXsq6MDYSBrcYa5sY%2F7NV328rF2GqV9JkE46OvuKMlcEP0JhS6r9%2BcNeN39YRmikgkNsqIeP%2BiLcebIC6tCnfd1kNioBFPnJzU%2FKr8iZcZvSblq4D5P4x2yqIVulVJ8C5VcY2fbxfxxZ3uxLYlpy2%2BeqxH1jSZhIi05WzSxwQbCoQgkCQW77muCAZF6mr0&X-Amz-Signature=a2bcab84235d2549714c708c2a432d26410c2fedad42f6e4d2e5d93649b15a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TNYUQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdpsM9tTVVw0fn%2FrcDzOFwgfW37P2MfN6%2B1rLU3WhGgIhAOdCl9gT6ZtnQ3ehZ%2B1crRYfj7y0rCrca5uHrB3LrFijKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBsXNM%2F1sYx16Bq0Mq3APQmWkQn%2BZ5QnrgfxSdK%2Bjaazg004ylV%2BDazL23m7ndYBNRMRwarDAwHqHlek4P0d73uY7g9knn50PzmmO9aEy0Onfr5d3P4O0mL70K8IguyPFrCMa5liT%2BeIb8WELL0u%2BAnb%2Btjfr5juABlpCcnMH%2BmV4Z8smYA7f91SK%2BXe%2Fkmo8UUjMAyScYDw8%2BZQ0Lhe8Zs7n1pt4zXIp0VuZx%2Fh5BNgmcVKPRhSe6vPCpVaK%2BrrPjOXriUDAaYb5FWyzAXnImLe%2B8CkS3X2OdXkGo8Z0ZR2ezRJEIaGtDxOYD1P0eBnKGhQgV5oS2YL2ZuyeHttOeSolBm0LnbOaW2Be2Oeos%2FhTjvW8ywyQeMXrqEa1iUsav6WUQDY7Jw0zqWp%2FtHnJhklXE2kxKE8%2FWzzZ0amT4aXJ0L9naEV2IlKzGR3W5V%2Bl32vR67bFSUdBBp53verbb2Jm3FSZrWfbf2JeTtjvQiSFTmZIFTbLBXRPeM1Rrx9SEsyQSFmH%2F0Zy0A0pa1smAoZAwordSrpK2HQwRXh373Nty%2FrNO%2BQ4Gq2GgLmKBcCXYu4heDzyVu4NaN7aya%2BsdE4bmlzdLZjAcOUOMyt9T9tlAOV4iWt6epWp759VepccjYDeVUfIamesujDDNnovKBjqkAS%2FxJdYP1Db4Ev6tfGrPUvFe%2FQHAV1dXsq6MDYSBrcYa5sY%2F7NV328rF2GqV9JkE46OvuKMlcEP0JhS6r9%2BcNeN39YRmikgkNsqIeP%2BiLcebIC6tCnfd1kNioBFPnJzU%2FKr8iZcZvSblq4D5P4x2yqIVulVJ8C5VcY2fbxfxxZ3uxLYlpy2%2BeqxH1jSZhIi05WzSxwQbCoQgkCQW77muCAZF6mr0&X-Amz-Signature=fa7c08d017b98b78983a9378087c31c677fb85405dd664cc38318691f51bb15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

