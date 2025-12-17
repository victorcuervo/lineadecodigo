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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD73ECBD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb%2BK7PnWGFQvUjqLchglsMvfbIB%2BPnwlORWiZP27HIGAiEAufxbjAQJzHfT1BzgZsT1jVBSbocSP302Refyfaf3%2BAcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDG%2BmMs3LHQ0mEepDASrcA%2BE9iQb3Q5fQzaYq8FVKnK4agKeGOSo4nlX0AtM6NDyfE3aGxYcuLzrvjo0vVpn4JDw%2BupN1TStGqapbh%2FsIjGHrALf0qLWikaIYZS1azvTfqtetnUsru8MVOAfWzoROAT%2Fijh5RkWZxnD5FQ7U6enaZfXBjEBEkNZsimn%2F3MgFSen6DZ0%2Bmu3Tbc6AYJBTRn4w1Eug4U7NaGU1Oi5cQaj4MzUi4rVlOPYfAI6cSNCnS8mbuO2%2B9FDcVe48k6B6T9Q0KM9lZbijFU%2F3n0nWPUVYstvb9mGECirTVkTSJkDVBLAGa3mLUIiNjjePFBs1AqpqUe6f%2Fki8ImYXZosns2y2PUe2dwVESUcl0fswxyqtuClggj4GndnPit2LM0z%2FHG9%2Bzsq5ncmRJKxJ%2BKY9st6mTQBI6KnTa%2B1u6pnMhnS%2FtaSqueQSg0cHjr3gR%2F57ACUwJHVBYwviTXeK%2BI7sIzDi%2BGW5Dc%2BcNxTbUJHJfXWGmaIaazmfqIzLJHjTG6GJEw2sHyf3HB3aeXvPYt%2FhP5T2J%2Fy%2FsoPiuhGiho83RGIPBXAmS7rFsC60q1TxfSpkjOAX2oggcj%2BPIy%2BxS0qSWDCg7cpsgc%2FHrxriT1noU7w5rhidCqb86pV9BRw%2FfMK6dicoGOqUB3qKzKUMYi83z9vHx6bZA9zdqfJmWCPcderCNH10X3mXwD1LX41zdN5XgSyc3jLvEbZV67kvKbA7g64pRGBie7ip7zUmDsO7YjHO2WvdFZpLs5ZvjenA1%2BTxCvaBHBM0xt%2Bf2YpsanJNYhzmYSjlTpkyL1yvqHYRQfveYNczbTkdE5uaqoQuBK7ak5NccA6R1n%2FvEe4C2YFxH%2BAE%2F96Rsw9ZLEGgj&X-Amz-Signature=aa080817be5bba2c2676a16c0e3fd9dcf578b183098e72f8b72be42e965be427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD73ECBD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb%2BK7PnWGFQvUjqLchglsMvfbIB%2BPnwlORWiZP27HIGAiEAufxbjAQJzHfT1BzgZsT1jVBSbocSP302Refyfaf3%2BAcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDG%2BmMs3LHQ0mEepDASrcA%2BE9iQb3Q5fQzaYq8FVKnK4agKeGOSo4nlX0AtM6NDyfE3aGxYcuLzrvjo0vVpn4JDw%2BupN1TStGqapbh%2FsIjGHrALf0qLWikaIYZS1azvTfqtetnUsru8MVOAfWzoROAT%2Fijh5RkWZxnD5FQ7U6enaZfXBjEBEkNZsimn%2F3MgFSen6DZ0%2Bmu3Tbc6AYJBTRn4w1Eug4U7NaGU1Oi5cQaj4MzUi4rVlOPYfAI6cSNCnS8mbuO2%2B9FDcVe48k6B6T9Q0KM9lZbijFU%2F3n0nWPUVYstvb9mGECirTVkTSJkDVBLAGa3mLUIiNjjePFBs1AqpqUe6f%2Fki8ImYXZosns2y2PUe2dwVESUcl0fswxyqtuClggj4GndnPit2LM0z%2FHG9%2Bzsq5ncmRJKxJ%2BKY9st6mTQBI6KnTa%2B1u6pnMhnS%2FtaSqueQSg0cHjr3gR%2F57ACUwJHVBYwviTXeK%2BI7sIzDi%2BGW5Dc%2BcNxTbUJHJfXWGmaIaazmfqIzLJHjTG6GJEw2sHyf3HB3aeXvPYt%2FhP5T2J%2Fy%2FsoPiuhGiho83RGIPBXAmS7rFsC60q1TxfSpkjOAX2oggcj%2BPIy%2BxS0qSWDCg7cpsgc%2FHrxriT1noU7w5rhidCqb86pV9BRw%2FfMK6dicoGOqUB3qKzKUMYi83z9vHx6bZA9zdqfJmWCPcderCNH10X3mXwD1LX41zdN5XgSyc3jLvEbZV67kvKbA7g64pRGBie7ip7zUmDsO7YjHO2WvdFZpLs5ZvjenA1%2BTxCvaBHBM0xt%2Bf2YpsanJNYhzmYSjlTpkyL1yvqHYRQfveYNczbTkdE5uaqoQuBK7ak5NccA6R1n%2FvEe4C2YFxH%2BAE%2F96Rsw9ZLEGgj&X-Amz-Signature=74c8051cba776e9e856dd141c4f1f6347eafa146eca881662ee39a0c7fdd4db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

