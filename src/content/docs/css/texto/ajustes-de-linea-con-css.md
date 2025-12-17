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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6L5TRQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbMG%2FjvJQnBjlo%2Byf2fr5yOc%2B1H3Ud8DEUIF2ClYImwIhAL6iovCwx4nChGY2dol%2FTSA27WYALiTdbZ2dJPVQS1KeKv8DCH0QABoMNjM3NDIzMTgzODA1IgzDpSEMsCwyLpiCxaMq3ANs152q7i%2FurQNmUsPKjXpxTo%2FZKziet42yk5ijw0Bo8yY7r%2F4A6XO%2BiNSzW9kQW5SejYkwCQWqeTxAUiUiwYwjLtB2QgRzH7zG7pMlySOLvQh9aSdvCYQrQDWkRKLPVYZHLYIm3T496QQCbhlE1mTDIVoWFrOqLsdzqLdAeNMCFN5W0gW2MmfEM34wSdcihyKaqXBKsWCs8%2FcFyR23ithgcPZ5DZGzZVONCervD40IUVRrUYryJgWDAxGjfUSgd7aBTuG7x5btV5SSZ0EYJza0bJxFZOEeYvkFbn5FvTTNxIdkkhv9S7i6HWutcv3ReqXUkaTreqDEqnwbPlBbibBIaoD%2BCXexjf36bf8f3yD%2FpSNGbHwAYn74RpjgnsxkdrKbLdVQHLPBmnWuv3GLgavZ%2FxfP4PlgsfAD4%2Bny90v4TDltpu0pesa1Qz12M6EFvIS8A08p6tIV4CdGOZNvDdaBvmwWWuxAZceDY8OLaQRSSTAHpAEwBlT0bX1VKnFpJxsvLUuOZ9oWqZ7w0dCPvWJBwQ303D%2F%2FerLkhjSuYcjSWIc%2FM9Z3i41z1WGf0AdIkNqK06JPINZtOhLdBd1UGc%2BMbEivnxSm85as%2BYzPjtX67nRWDgJ6vLIrYuVH6TDxqorKBjqkAXHeJUuoFDiyNVuC8GIQ8IH%2BuWLXEWTFlFz43sVXNPQKSrhG%2FJgY9t%2BEQ%2FGukloUMOY1uEMd7wlmlVfSyMq%2ByqlZ0dDTgvxjNuZdeV%2FHrSDOyn6gK4%2F3rfhkBgXPdUN6TTZ5vLBgKRBKu3DfHO%2BVHD04MWnuOgjRE33ccskjo7a5MZO5euRST%2BHOqvefGELTvFOFfbBr%2BtQGLBgaML7ONzuApwwb&X-Amz-Signature=6593d00c27b5501af2009be4669209299e35fd4fcde4ab775951024b6cf4f2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6L5TRQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbMG%2FjvJQnBjlo%2Byf2fr5yOc%2B1H3Ud8DEUIF2ClYImwIhAL6iovCwx4nChGY2dol%2FTSA27WYALiTdbZ2dJPVQS1KeKv8DCH0QABoMNjM3NDIzMTgzODA1IgzDpSEMsCwyLpiCxaMq3ANs152q7i%2FurQNmUsPKjXpxTo%2FZKziet42yk5ijw0Bo8yY7r%2F4A6XO%2BiNSzW9kQW5SejYkwCQWqeTxAUiUiwYwjLtB2QgRzH7zG7pMlySOLvQh9aSdvCYQrQDWkRKLPVYZHLYIm3T496QQCbhlE1mTDIVoWFrOqLsdzqLdAeNMCFN5W0gW2MmfEM34wSdcihyKaqXBKsWCs8%2FcFyR23ithgcPZ5DZGzZVONCervD40IUVRrUYryJgWDAxGjfUSgd7aBTuG7x5btV5SSZ0EYJza0bJxFZOEeYvkFbn5FvTTNxIdkkhv9S7i6HWutcv3ReqXUkaTreqDEqnwbPlBbibBIaoD%2BCXexjf36bf8f3yD%2FpSNGbHwAYn74RpjgnsxkdrKbLdVQHLPBmnWuv3GLgavZ%2FxfP4PlgsfAD4%2Bny90v4TDltpu0pesa1Qz12M6EFvIS8A08p6tIV4CdGOZNvDdaBvmwWWuxAZceDY8OLaQRSSTAHpAEwBlT0bX1VKnFpJxsvLUuOZ9oWqZ7w0dCPvWJBwQ303D%2F%2FerLkhjSuYcjSWIc%2FM9Z3i41z1WGf0AdIkNqK06JPINZtOhLdBd1UGc%2BMbEivnxSm85as%2BYzPjtX67nRWDgJ6vLIrYuVH6TDxqorKBjqkAXHeJUuoFDiyNVuC8GIQ8IH%2BuWLXEWTFlFz43sVXNPQKSrhG%2FJgY9t%2BEQ%2FGukloUMOY1uEMd7wlmlVfSyMq%2ByqlZ0dDTgvxjNuZdeV%2FHrSDOyn6gK4%2F3rfhkBgXPdUN6TTZ5vLBgKRBKu3DfHO%2BVHD04MWnuOgjRE33ccskjo7a5MZO5euRST%2BHOqvefGELTvFOFfbBr%2BtQGLBgaML7ONzuApwwb&X-Amz-Signature=39cd61e9cef48a8fbf3023697a81f388bd59183056e8fec06ca593056eb04596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

