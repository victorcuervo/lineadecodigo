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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2PI4C2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfevjtCOyskoOVW8ITabBDcc09%2F7HymnUMEe%2FNGnCiYwIgehYbGLL4yjO15IHV%2FIri1yjE1NVdcQ1Zq%2FE0DV%2FTNCMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM6d2xB91Y0BpMy5QSrcA4aap62Dag1JlRM9gzHp1VQZTKFV4A7mGSyXrtZEdAJPbQhUg68NM13xmlAXfdODLni9LORlQ%2Fgg68et7BDbXPMCd%2F5OR6VN5Dnaf5Pm2d%2Fk6rfbSx82WETNvsY8GsBaWIjC4R7lWOqb0bqg6AAQ8%2B2ZUOzFAKh%2B4Y45BHgzISbxYeJwoio8VjDnxt0nZNjoq5Ze4D2TvesBH%2B%2FJduw%2FIwzp9nhFdmdJvo%2BrJSEtyVG6T5CsbqZ5iRhDGjnrleGEwRR2%2FfU192kWs8UZybJkCw6hF3W7eg1gLGiatj00E%2FkY3HnBSX70jAYab%2BVefpRQTrQhMDM4pBlDH%2BNfQYsQq4P6VvqxPkBL9NNtmWQ0bYznRmk0EWp38xHiGhARBh0VGd6Jbwe2r4iRd3eqRqt64x32%2Bou4i6IjwCiF6yb8msgR4GV4APVh7c12LlP3bRGytzoal2GwHhIITDMLe%2BD1AyAl6ddyshdfNgNr9yXEtUdkrCLtOorkOoyVxmHQOSTpVslS99JIMOJ7ixrV7piDibapNfEyabhw5SGO8UtSWME6lnPMn5he%2Blu4fXZtDZbf3vDB%2FQIQ84CZLO4tKL5PGZ1KpXmy0GvKWLHoD3z%2BLhYETamw1Y0s8FQPvFRYMPPeh8oGOqUBMT%2BZWS5l6CPbmuWfIpgebjBMwi0UwnQeoL0pSAHM0lY8PAYkf6C2k7JUqGWRZY2dluYaaxPP2I4fkclJ17to%2BSRJbIrisgC7Ac%2BXfpdXAtFLSfmJk3VNJhtEYII3r7nMTcivQtZuprspF%2FUYQc5mwkLeYTVitgC5zAZrZgT%2B3%2FhRkS1O0Ruqc1wepCfWug6wx6WGIrfETpl8dIsW0npOw9xvk6Io&X-Amz-Signature=b69771b7e706cf89d593958c5dbb9a0e632787870ca7d0a50cc76f6a3c1188a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2PI4C2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfevjtCOyskoOVW8ITabBDcc09%2F7HymnUMEe%2FNGnCiYwIgehYbGLL4yjO15IHV%2FIri1yjE1NVdcQ1Zq%2FE0DV%2FTNCMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM6d2xB91Y0BpMy5QSrcA4aap62Dag1JlRM9gzHp1VQZTKFV4A7mGSyXrtZEdAJPbQhUg68NM13xmlAXfdODLni9LORlQ%2Fgg68et7BDbXPMCd%2F5OR6VN5Dnaf5Pm2d%2Fk6rfbSx82WETNvsY8GsBaWIjC4R7lWOqb0bqg6AAQ8%2B2ZUOzFAKh%2B4Y45BHgzISbxYeJwoio8VjDnxt0nZNjoq5Ze4D2TvesBH%2B%2FJduw%2FIwzp9nhFdmdJvo%2BrJSEtyVG6T5CsbqZ5iRhDGjnrleGEwRR2%2FfU192kWs8UZybJkCw6hF3W7eg1gLGiatj00E%2FkY3HnBSX70jAYab%2BVefpRQTrQhMDM4pBlDH%2BNfQYsQq4P6VvqxPkBL9NNtmWQ0bYznRmk0EWp38xHiGhARBh0VGd6Jbwe2r4iRd3eqRqt64x32%2Bou4i6IjwCiF6yb8msgR4GV4APVh7c12LlP3bRGytzoal2GwHhIITDMLe%2BD1AyAl6ddyshdfNgNr9yXEtUdkrCLtOorkOoyVxmHQOSTpVslS99JIMOJ7ixrV7piDibapNfEyabhw5SGO8UtSWME6lnPMn5he%2Blu4fXZtDZbf3vDB%2FQIQ84CZLO4tKL5PGZ1KpXmy0GvKWLHoD3z%2BLhYETamw1Y0s8FQPvFRYMPPeh8oGOqUBMT%2BZWS5l6CPbmuWfIpgebjBMwi0UwnQeoL0pSAHM0lY8PAYkf6C2k7JUqGWRZY2dluYaaxPP2I4fkclJ17to%2BSRJbIrisgC7Ac%2BXfpdXAtFLSfmJk3VNJhtEYII3r7nMTcivQtZuprspF%2FUYQc5mwkLeYTVitgC5zAZrZgT%2B3%2FhRkS1O0Ruqc1wepCfWug6wx6WGIrfETpl8dIsW0npOw9xvk6Io&X-Amz-Signature=a148b056f2107cf2c6ccea3e3205515aa2166ba472355e9f02be0db5e5873e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

