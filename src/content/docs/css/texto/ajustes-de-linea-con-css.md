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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOKXSD3Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIGrCYsOebl%2Fa6USEfyPlriUEWQhd4tDjy5l2s6mwExAiEArazPKdMF2164FNqS4uq3pxy3O6VtvA0afKzprFrZ5WAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH7Rpw9CIBKZlWPwPCrcAxn74FOOKoRWrF%2FPBDAOeYztdz8wfhyXLzbxx%2FZPT4Q2RiyG8c3MtBMy8dO%2BcSOeDXsdcp5qI3zjvRhxExhii98lBwe59yo2N%2B%2Fw7s1zHez0sn0Oa5ZUkZC81cQSF%2BsCrvT3bM%2Fdq1FKEw3zZnctGiokvn%2B3oCtnsij6tYLY5kPwwcUnjzZWwGBDcnqxv7cJo1Hub4wB4MOUpTD7eLZulzfIRLYJqvx5424bchgv%2Fk%2FbFzH9342szfwynn4ngsAYKyrMCkNwMjFPv1EfEG6YdsIIXeJyE84BWk1CwC0x8789HOTd%2FdXLB83XMKc2vt74SncOIuBekENI2OD78gLKGpd%2FrBKcKKbtD7bGOOHDKteJnJ9uB1uofGLCicljuTYQxDMw9j7N44%2FZds5UOWbo6G%2Fo%2Bj3we5yuiLir8MTWNZC%2Bt3Z3vSkrjL2Gj7JZs3fzL2AMn3ADe%2F4ipsli7%2FtqldpCAkt3wNMMiyw1FwBr1AuwV3vnMPm3wVZxQTd6pPWcrJk6h%2BB5MrVbiKqrn3yhe9Gm%2F8kRqMPJyO6QNuJEiFSOd3THdd31tTBRVYQ0ry4WuJKj1LJFSg%2B2wuc6M1oWGeLNMHUPhrEPSMwi6o4whYzT6hz4XI%2F1GvYNYiBOMN%2FOiMoGOqUBCgJ00aF13lwNJ3fF8Ya%2BHJ2Xdmo5wwd40RM9R5UEdjATs8woA12Qxw9MkqMfTiKNnzF2o%2BvQ5YcC7z8kmK51UuonhetBwJ8RNxFTv1alADTLFxc6fXIUVRpvVrginAUw%2Bjn3bVuI0mll%2BxGEENhPcVDPdyrLUJNzPiKtsG2yI8C1O352iHx5NrreD6A%2FGNg5Jv1miVMOgyNN6epYG7MFyJ1ozmEJ&X-Amz-Signature=f0eebc4baed7de1e31cf44e85dfc36d1e88ab0954c8921115e064160092e5ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOKXSD3Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIGrCYsOebl%2Fa6USEfyPlriUEWQhd4tDjy5l2s6mwExAiEArazPKdMF2164FNqS4uq3pxy3O6VtvA0afKzprFrZ5WAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH7Rpw9CIBKZlWPwPCrcAxn74FOOKoRWrF%2FPBDAOeYztdz8wfhyXLzbxx%2FZPT4Q2RiyG8c3MtBMy8dO%2BcSOeDXsdcp5qI3zjvRhxExhii98lBwe59yo2N%2B%2Fw7s1zHez0sn0Oa5ZUkZC81cQSF%2BsCrvT3bM%2Fdq1FKEw3zZnctGiokvn%2B3oCtnsij6tYLY5kPwwcUnjzZWwGBDcnqxv7cJo1Hub4wB4MOUpTD7eLZulzfIRLYJqvx5424bchgv%2Fk%2FbFzH9342szfwynn4ngsAYKyrMCkNwMjFPv1EfEG6YdsIIXeJyE84BWk1CwC0x8789HOTd%2FdXLB83XMKc2vt74SncOIuBekENI2OD78gLKGpd%2FrBKcKKbtD7bGOOHDKteJnJ9uB1uofGLCicljuTYQxDMw9j7N44%2FZds5UOWbo6G%2Fo%2Bj3we5yuiLir8MTWNZC%2Bt3Z3vSkrjL2Gj7JZs3fzL2AMn3ADe%2F4ipsli7%2FtqldpCAkt3wNMMiyw1FwBr1AuwV3vnMPm3wVZxQTd6pPWcrJk6h%2BB5MrVbiKqrn3yhe9Gm%2F8kRqMPJyO6QNuJEiFSOd3THdd31tTBRVYQ0ry4WuJKj1LJFSg%2B2wuc6M1oWGeLNMHUPhrEPSMwi6o4whYzT6hz4XI%2F1GvYNYiBOMN%2FOiMoGOqUBCgJ00aF13lwNJ3fF8Ya%2BHJ2Xdmo5wwd40RM9R5UEdjATs8woA12Qxw9MkqMfTiKNnzF2o%2BvQ5YcC7z8kmK51UuonhetBwJ8RNxFTv1alADTLFxc6fXIUVRpvVrginAUw%2Bjn3bVuI0mll%2BxGEENhPcVDPdyrLUJNzPiKtsG2yI8C1O352iHx5NrreD6A%2FGNg5Jv1miVMOgyNN6epYG7MFyJ1ozmEJ&X-Amz-Signature=7469e72a0079332b6d7e1c759aaaa4fc5ab3e0e065aab467e18e89d093ef2233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

