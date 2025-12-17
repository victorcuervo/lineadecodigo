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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWYLLHH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr23dvPvD2wHBKXj0X4UUzw2e%2F9wmvYMIe8xd8SKkfAAiARDO%2FlYwkYX8cNgSWJbJFgrfTrOsPjjb%2BEpL%2F6L%2FMAwCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTqB4uQW647OpVWm7KtwDdpOo2eKOsMzwCDsTM1RNiPcSVq%2BFDmh0Ab%2FVTJxX4PaD%2F829UrC3Amynm%2FVjAZWef7ko%2BubSn0WFzjxMHWNcs9gebFsTExnfuJ%2B7wlqG8Jfc1Q%2Fnr0Qbx5T6WN7HHrZ8cm5OSMxXPQGjrDLA484BPqJuoCYGlNYAXK83fM0FM2wT3uFgWFqtfYgZOI%2BH1mtTkUdbWRDqEi6vBLpnCLBg%2FZkrhqgJ9Osp7hghUfb5ZZf0w2MEPuG3NHUaDB1DloFr6HlKHrVbjdr5p43sdG775fwkJXtDDE2sWB6kxPrimY4HLo0PgVaFP1oc9fjNM9f%2F6xpLADUpe4cWlT5Aio5khBZJ0t%2FV0NzlIUh32rFslUGi7ulThTgG5nKdMIWk%2B5abQGG6%2FH0uyTcsY1RAn1DRr6CR99V4jENXhuz3OJc0cEVrG8pGmBdEzKt%2FCSeDNSWPLZhEa%2B%2FHnc9GAW3sfJz6qc%2BmKM81xQoYx4aGam5okUVuRrJtMhOfEAij2qrf5YmJKNI5y5eo3%2BG6yLLg6hPt1j4dl6vsbuiBUM4wXCB05QWp9y8QZ%2BatEMwt6i9ut83ZwNCYHvI3CMg9Iqz5snpFb4z0l6ajruNNGuqQekBZmroK0EBiXWe0Vjc9gHIwr5%2BLygY6pgERrtv1DXQ%2FgXTmX7beJE4RT%2FIvY%2BTErLmWBg7ScIy3nt45Z0qp6Jc6KbK5LNu0ygkHtkeu7sdcjry8M3VAi3X94ykaaGPff89Q%2BXr2ouY0GezoqwR8nyAcwzpWJPDHZNnVjokfSbBTOVkA39Qxq9a1AW5%2FDwSPaUvWVRALT%2BSayIgIeqNloiFZy%2B5dquCsv%2FHe%2B6pz0tM0lWWwCPX7SQJvKkMstslb&X-Amz-Signature=3352df557b58e6108f4a9693ffc21c98b91b9122e21c09c6c90f544f3d42a515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWYLLHH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr23dvPvD2wHBKXj0X4UUzw2e%2F9wmvYMIe8xd8SKkfAAiARDO%2FlYwkYX8cNgSWJbJFgrfTrOsPjjb%2BEpL%2F6L%2FMAwCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTqB4uQW647OpVWm7KtwDdpOo2eKOsMzwCDsTM1RNiPcSVq%2BFDmh0Ab%2FVTJxX4PaD%2F829UrC3Amynm%2FVjAZWef7ko%2BubSn0WFzjxMHWNcs9gebFsTExnfuJ%2B7wlqG8Jfc1Q%2Fnr0Qbx5T6WN7HHrZ8cm5OSMxXPQGjrDLA484BPqJuoCYGlNYAXK83fM0FM2wT3uFgWFqtfYgZOI%2BH1mtTkUdbWRDqEi6vBLpnCLBg%2FZkrhqgJ9Osp7hghUfb5ZZf0w2MEPuG3NHUaDB1DloFr6HlKHrVbjdr5p43sdG775fwkJXtDDE2sWB6kxPrimY4HLo0PgVaFP1oc9fjNM9f%2F6xpLADUpe4cWlT5Aio5khBZJ0t%2FV0NzlIUh32rFslUGi7ulThTgG5nKdMIWk%2B5abQGG6%2FH0uyTcsY1RAn1DRr6CR99V4jENXhuz3OJc0cEVrG8pGmBdEzKt%2FCSeDNSWPLZhEa%2B%2FHnc9GAW3sfJz6qc%2BmKM81xQoYx4aGam5okUVuRrJtMhOfEAij2qrf5YmJKNI5y5eo3%2BG6yLLg6hPt1j4dl6vsbuiBUM4wXCB05QWp9y8QZ%2BatEMwt6i9ut83ZwNCYHvI3CMg9Iqz5snpFb4z0l6ajruNNGuqQekBZmroK0EBiXWe0Vjc9gHIwr5%2BLygY6pgERrtv1DXQ%2FgXTmX7beJE4RT%2FIvY%2BTErLmWBg7ScIy3nt45Z0qp6Jc6KbK5LNu0ygkHtkeu7sdcjry8M3VAi3X94ykaaGPff89Q%2BXr2ouY0GezoqwR8nyAcwzpWJPDHZNnVjokfSbBTOVkA39Qxq9a1AW5%2FDwSPaUvWVRALT%2BSayIgIeqNloiFZy%2B5dquCsv%2FHe%2B6pz0tM0lWWwCPX7SQJvKkMstslb&X-Amz-Signature=1d39b0ab71a97166cecdb2c3868764a9168205869cde150038b1943baa2af950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

