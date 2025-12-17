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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU73PGJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmamOxFHKhHFqQZZUFpDJieYRGmKs9XsXr6bjcIBFcAIgK6fB%2BDXzVtNVO5fNHciteNmkA8La49HaIeUIhr0mETAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG58o%2Fxx5CwPrWniJSrcA8i5DgpbbuBiGJQIqaPvdnAP4Rjy0OWjVuY1d4WkdKcPIFdxvhqInbxYyGLa9I8eB9vCcE%2B8pSNNeUAEW81qQTGUhhakWjy9%2F0S5gMxxSxrKpBJhcZNzbNKRr9vOPxrcPz1zBKulAXd0PcU3D9Ts4%2B6z1ZNjkWAw7YcSxLzGMohU0m6lF6gj5lw%2BHL5Jr8X7GZ4GnKNKN0kkt8VzpL%2FgjTnnFbMVe7SJ5qVs1hz0XWWnw5hXs0MKSTdf3WKGv3K0%2FC6AWY1Kh2fecyuYJVo21w1ScGL4%2Bhg4xlz%2FiY%2FNZC97P%2FMjO3IQanl9SEf6RGbtSc1yT6KQvXx8E1QJJ5lWLAlSOa4uXnmXuKB%2FHu%2B%2FtbeItICqjplFQ43rlcWh5V%2FvEKvfKUfRejm%2Bf44qRge%2FEXkMSzOuGZ8KiqCpiYhcIU56FnKwarHAArHKdR4qohRNMth8IxUjdqr5ch4NAVGKMdP5w%2Fa0NM9U%2BsT2zBhUbtsJpE2ljjwNOlMGwTbgnYNtLfZh%2BQxdp13fI0bJgFZHPqZZxt99m0s8gPF9Gv8v6py8o75ds2CRgfIXD2TdUdCMB1o3WMpkfir7evco4fH7migRTg0gPo3OkCzQOSPFOU1O3g1r6Ji9b%2BFfEh6qMOHvicoGOqUB2PBBRRAUgOaeSkoo8heHL8EH7xkLF8BW4q5EYKzilkZ0WJYuSLR0rQlPh4q8JRSlm0zDnF2Z%2FfiSRF%2F335vVLxsKUY27gcI2Omuet0a3Sy1YLA694mOifGAW2aaqitdMh5OBiC6ZD7lPuX2L5qysu%2FdjXu3FDykllODkL%2B%2FKNl5GjpWQtPnv0QbmUo6MzMAxWx8KWaH5VvTqiyM4KxscWJsEFgxP&X-Amz-Signature=ae865bfe87405b321a9fa8c1828f22ee76407b7ac3a859e5dbd9be0a00562770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU73PGJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmamOxFHKhHFqQZZUFpDJieYRGmKs9XsXr6bjcIBFcAIgK6fB%2BDXzVtNVO5fNHciteNmkA8La49HaIeUIhr0mETAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG58o%2Fxx5CwPrWniJSrcA8i5DgpbbuBiGJQIqaPvdnAP4Rjy0OWjVuY1d4WkdKcPIFdxvhqInbxYyGLa9I8eB9vCcE%2B8pSNNeUAEW81qQTGUhhakWjy9%2F0S5gMxxSxrKpBJhcZNzbNKRr9vOPxrcPz1zBKulAXd0PcU3D9Ts4%2B6z1ZNjkWAw7YcSxLzGMohU0m6lF6gj5lw%2BHL5Jr8X7GZ4GnKNKN0kkt8VzpL%2FgjTnnFbMVe7SJ5qVs1hz0XWWnw5hXs0MKSTdf3WKGv3K0%2FC6AWY1Kh2fecyuYJVo21w1ScGL4%2Bhg4xlz%2FiY%2FNZC97P%2FMjO3IQanl9SEf6RGbtSc1yT6KQvXx8E1QJJ5lWLAlSOa4uXnmXuKB%2FHu%2B%2FtbeItICqjplFQ43rlcWh5V%2FvEKvfKUfRejm%2Bf44qRge%2FEXkMSzOuGZ8KiqCpiYhcIU56FnKwarHAArHKdR4qohRNMth8IxUjdqr5ch4NAVGKMdP5w%2Fa0NM9U%2BsT2zBhUbtsJpE2ljjwNOlMGwTbgnYNtLfZh%2BQxdp13fI0bJgFZHPqZZxt99m0s8gPF9Gv8v6py8o75ds2CRgfIXD2TdUdCMB1o3WMpkfir7evco4fH7migRTg0gPo3OkCzQOSPFOU1O3g1r6Ji9b%2BFfEh6qMOHvicoGOqUB2PBBRRAUgOaeSkoo8heHL8EH7xkLF8BW4q5EYKzilkZ0WJYuSLR0rQlPh4q8JRSlm0zDnF2Z%2FfiSRF%2F335vVLxsKUY27gcI2Omuet0a3Sy1YLA694mOifGAW2aaqitdMh5OBiC6ZD7lPuX2L5qysu%2FdjXu3FDykllODkL%2B%2FKNl5GjpWQtPnv0QbmUo6MzMAxWx8KWaH5VvTqiyM4KxscWJsEFgxP&X-Amz-Signature=011afa2c0e719667d255447c23b26516dc015f05841db25e060e0b19339b8335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

