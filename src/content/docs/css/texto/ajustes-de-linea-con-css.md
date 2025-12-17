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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656IEQIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaOxqFmWNkmmWbOWuuB5WlN22zH1fEKQu0oePHeFbDgIgGmJWsGDQ8gLQ3iLYSUQECifyYuhWP87DPBO05Hsw%2FAwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLWhs0JQGa%2BWsDV5CrcA8B83SkI06u%2BbWsphgfmIoEDVM3jLx3H4RnU5bf1zKUtog8LSmOXyd8bK%2FqwlhF6Vb7SMXWS59zDVlj8BIIFJw3O9Hw2w2uZekOYA0UElhFq3nD%2BvveP5A9gpBebBCNY23U3HEidvIX6BSqV3Uh1po%2Bu4N7Uo1FexwELpyDdCO1%2B%2Bkus4IldtKbRTMcUFTFKHYcrN7Kn7gzQ3i9ZRkdnwZ2%2FVccLiebGkJnE%2F3nC3QpApQCkIfO00oXLKUhDtUcFPrCA06yzxcijPOES0bdEObUCzA4LMFgcnseJ4jaNrXe9wKKfb%2FUp8f0zLPyHRYqNRKBUKJbRaj5ipRS8n5v4MdLPcSAmJnTEEKa2Ai1y%2FC%2FYT091VW4xXTpaRDdzDuxxFGSKCs9Dh50Hh%2BqKPjSCvSbz2boFLvffAlz77XKjanj4sVXRJgrMzE%2FA1Zy2PhFhUJDAADQJSH8l51RoMINYYHIboZ76IrSioTdUU%2BgD77%2BMfEGvc2nOPkJUD6sXloI8LWG8fjXkjPSuVSll22OuitMAexIQBEj5SQUiuvNO9EYvAQ3OC%2BG9OVDIiPNxBOnSzzzRspvzB8V%2FIjyAJpfu10PgPQNP99FaGAllzaKHafPZJbPyyYL%2Fyzx58NiSMLmgi8oGOqUBwCkFiNZAcU7P3WB7SCWfk%2Bb767k7e2xRTiyBQ4S038mmjM8DErV8l8evpbpZCCdrAfGT1gLt1AzkKLOjOtfLq1sDKoVpVFaNWNv79wE56Ai34tAUws%2BZsoYl62bMqPI7AuhrO%2FcXmQSh7x3uh1z6I49FRPlNvVzMH17I41JDc0x61ZmwDwH42yxw20LE57o6NQGTBQFTEun9B5mG3dG4Rv1hvjzK&X-Amz-Signature=04c3706df8775eac7fb475ea2bf9c66ba88582a4c0d3b526a4ff2547ab86ea25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656IEQIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaOxqFmWNkmmWbOWuuB5WlN22zH1fEKQu0oePHeFbDgIgGmJWsGDQ8gLQ3iLYSUQECifyYuhWP87DPBO05Hsw%2FAwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLWhs0JQGa%2BWsDV5CrcA8B83SkI06u%2BbWsphgfmIoEDVM3jLx3H4RnU5bf1zKUtog8LSmOXyd8bK%2FqwlhF6Vb7SMXWS59zDVlj8BIIFJw3O9Hw2w2uZekOYA0UElhFq3nD%2BvveP5A9gpBebBCNY23U3HEidvIX6BSqV3Uh1po%2Bu4N7Uo1FexwELpyDdCO1%2B%2Bkus4IldtKbRTMcUFTFKHYcrN7Kn7gzQ3i9ZRkdnwZ2%2FVccLiebGkJnE%2F3nC3QpApQCkIfO00oXLKUhDtUcFPrCA06yzxcijPOES0bdEObUCzA4LMFgcnseJ4jaNrXe9wKKfb%2FUp8f0zLPyHRYqNRKBUKJbRaj5ipRS8n5v4MdLPcSAmJnTEEKa2Ai1y%2FC%2FYT091VW4xXTpaRDdzDuxxFGSKCs9Dh50Hh%2BqKPjSCvSbz2boFLvffAlz77XKjanj4sVXRJgrMzE%2FA1Zy2PhFhUJDAADQJSH8l51RoMINYYHIboZ76IrSioTdUU%2BgD77%2BMfEGvc2nOPkJUD6sXloI8LWG8fjXkjPSuVSll22OuitMAexIQBEj5SQUiuvNO9EYvAQ3OC%2BG9OVDIiPNxBOnSzzzRspvzB8V%2FIjyAJpfu10PgPQNP99FaGAllzaKHafPZJbPyyYL%2Fyzx58NiSMLmgi8oGOqUBwCkFiNZAcU7P3WB7SCWfk%2Bb767k7e2xRTiyBQ4S038mmjM8DErV8l8evpbpZCCdrAfGT1gLt1AzkKLOjOtfLq1sDKoVpVFaNWNv79wE56Ai34tAUws%2BZsoYl62bMqPI7AuhrO%2FcXmQSh7x3uh1z6I49FRPlNvVzMH17I41JDc0x61ZmwDwH42yxw20LE57o6NQGTBQFTEun9B5mG3dG4Rv1hvjzK&X-Amz-Signature=ec4d06e04fe1aaf281cdbff8109e633730fb21605f75164c012b48de44c2f941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

