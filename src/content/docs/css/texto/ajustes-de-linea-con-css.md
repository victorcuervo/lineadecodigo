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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDEQY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxQA7g%2BgvetUtNrUAwE7%2Ba91q%2FWoU9VVz4pkpIJ8bBHwIhAPBIxS2YyO1iA7XmXxraRfLtKnYroI5PPSazOVRN3lkbKv8DCHkQABoMNjM3NDIzMTgzODA1IgwT%2BMRJmpCXYsZuCoEq3AM3j0V9czRoipgseL7x61uexGjY2KDrc98Vasri2r4JhR7KoqI2m8XtBQtCo%2FMHHLeytbLhe2IV%2FnBrtuiInUJIIIuiU0FFf8VM%2Fhnu6gl1Bk77g7tTuZmTl4auITkrzEaFruTwFFNyBoN%2BJ8Rkry3i3YPbdmHNSu8LztK119De6p8wlN0ACfEK6wweaUgFNqKo1lTfz4I4m2cBJW9VM7mg5UiJhfXtD5BUDcm0yXfDaaH3mlzvbydT2ReZgBdodJGm%2BaEgTka%2F710%2FtW9yN3e4MgDvBZlv2GFiOuglIfjgrsk3A8syuzAWQTUX9PViTsT2oV9XIvil1z57KjByAde9pmdwpNtStfmUVrJ2WjuZdgrSQ27qo8w%2BUUkvruFeMt7L5ZN7EuLFK4%2Bb6sC%2BNCuQt38opnR6ya%2B%2FJXUrF1pZRh7pbmR4UEL2RSvUe0J3PWJBsiLKIGW9dKRJFTleM4%2BfzyoXgQZTRlZl4WJTPNzcN7JX%2BfGmuKMdBuz0NpuoxzxtsVqLQhIfSn9RvZDE%2FrZeXB5cXOMD8APbXE3iy7cCE%2BaF7FF6L%2FBH%2FyFo2Vl2Y3Nc7x4l5Rs8%2FPSE9qit2XcESC%2FCXuaxsP%2FIR2PkQCNHMWT31l5vU0%2FO1udg%2BDCA0onKBjqkAeMuvS%2FCiA28sj2aI5ensPJ5wfGEjgrElwohBlvapKQp7RlP8rnELflgS9bMp%2FbZ5LdXjOvE4JCuLN8dEfiTC6Fi0IuCLO%2FuX06LielHqPZh0sqpyqk4Z77%2BVMpo8AHgd6nwPKMj3WgYKCtBRX6yfxswMQgoZqBvaFSzs2hZKb2Gm1Uwe8eYz8442yM5p0GY6%2FOvMqUhnEKukXBD1V6dRhOIcRYn&X-Amz-Signature=bea4f9821cf1265d8adc730ba4adb1a7d46244ab9a1dec273135cb0cf2fb67f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCDEQY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxQA7g%2BgvetUtNrUAwE7%2Ba91q%2FWoU9VVz4pkpIJ8bBHwIhAPBIxS2YyO1iA7XmXxraRfLtKnYroI5PPSazOVRN3lkbKv8DCHkQABoMNjM3NDIzMTgzODA1IgwT%2BMRJmpCXYsZuCoEq3AM3j0V9czRoipgseL7x61uexGjY2KDrc98Vasri2r4JhR7KoqI2m8XtBQtCo%2FMHHLeytbLhe2IV%2FnBrtuiInUJIIIuiU0FFf8VM%2Fhnu6gl1Bk77g7tTuZmTl4auITkrzEaFruTwFFNyBoN%2BJ8Rkry3i3YPbdmHNSu8LztK119De6p8wlN0ACfEK6wweaUgFNqKo1lTfz4I4m2cBJW9VM7mg5UiJhfXtD5BUDcm0yXfDaaH3mlzvbydT2ReZgBdodJGm%2BaEgTka%2F710%2FtW9yN3e4MgDvBZlv2GFiOuglIfjgrsk3A8syuzAWQTUX9PViTsT2oV9XIvil1z57KjByAde9pmdwpNtStfmUVrJ2WjuZdgrSQ27qo8w%2BUUkvruFeMt7L5ZN7EuLFK4%2Bb6sC%2BNCuQt38opnR6ya%2B%2FJXUrF1pZRh7pbmR4UEL2RSvUe0J3PWJBsiLKIGW9dKRJFTleM4%2BfzyoXgQZTRlZl4WJTPNzcN7JX%2BfGmuKMdBuz0NpuoxzxtsVqLQhIfSn9RvZDE%2FrZeXB5cXOMD8APbXE3iy7cCE%2BaF7FF6L%2FBH%2FyFo2Vl2Y3Nc7x4l5Rs8%2FPSE9qit2XcESC%2FCXuaxsP%2FIR2PkQCNHMWT31l5vU0%2FO1udg%2BDCA0onKBjqkAeMuvS%2FCiA28sj2aI5ensPJ5wfGEjgrElwohBlvapKQp7RlP8rnELflgS9bMp%2FbZ5LdXjOvE4JCuLN8dEfiTC6Fi0IuCLO%2FuX06LielHqPZh0sqpyqk4Z77%2BVMpo8AHgd6nwPKMj3WgYKCtBRX6yfxswMQgoZqBvaFSzs2hZKb2Gm1Uwe8eYz8442yM5p0GY6%2FOvMqUhnEKukXBD1V6dRhOIcRYn&X-Amz-Signature=37012b6be6f99a45828d8f77075968e95472b723cefc554d293e0470a33a7b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

