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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XMHG45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxV%2B2AlHdEdDDWfdo4GxXwZcB6JwezvEeAUP8%2F%2FeAjwIhAO0Qt0NDZeH71IoiJCtAY6jZhRr4WRwdqUPE2w9roISaKv8DCHwQABoMNjM3NDIzMTgzODA1IgzN6bH%2FYQYwvWzSe%2BYq3ANXp%2FuMiQaciyw4UdQvEvbadXORbZRMDknA%2BgiBMj2GTWcV2sF5gVn9U32%2FTggI5nu5H3VNhwt5NkjgVwxNHpX8MyNJgeGwglV8VYcMHrTYy%2BA%2FrGmMakblfsrCwfFOy0pklXztGh5g6RsYGAcwFOJtyHByNJvWbv4lP8LgNDbS%2BIPXuHAuDf6wLdUvMcS70xNHMdWM0NPQgYckrVseNobTWcl96U28xBmwIeMvzxTeU%2BRFABrKD1ThCM7i%2Fm9VsbX9d1%2Be8wFUsiDaaHwX5rJUGzTCjF2%2FoSWjUDXO3ScYmrLYri%2BVaiGNOtJoh2jM3r9LcYhbb5tN6EloTFonutqTFeaT%2BAC89aODyBYKx1mRVi4BpxUl8XcdSUWRwdUarrrZVmmZzYawBvKtNsl4DlgJS%2FtL0nwTnOMIlMTAVavqVK7UmjOare2f2cK%2FvHdhr5ftjgE5CdVr%2Fl1%2BgNAzHfj5GniJTyNMEmyaRxfFrI%2BNQg2UC25EeGEbsLKHPgP7n2lMFdVHItsW1vZbVYPcG8Z3oxC%2BZAyMqPd6n4JvcdjVAWVhhMpD%2FoSvI87eatXWnGuiEqFwaR9CZdOhUFjOXAvIJPiL8VBl3XGd33aPEoW%2BIYC4rZK95K63T%2BZxcDDlj4rKBjqkAaXG1LBCszmB6exGVIZGN5KIYtCsGh%2BBPQnDy2VhZClZgjdFPCAgAjJtSPkIYmLuZZA4lo5bG%2Fc62fWHNJFj0J92Ey6qSrDVRQtkhboIe3C5nnz2zi%2FpnDvaWKowFfdjAWad62s5rhzbyQLUzpwiHmdmhny0gyEmG8RYD6hyYrcf8Xd4s%2FuOnPjrrGhTyBUyPRlLEdxLBsw%2F7cZIHd2EFePW24M%2B&X-Amz-Signature=4d5475b2b6bb3836bc8557c80dd18cca35b9d1524684ae0233f7ae68fd20c316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XMHG45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxV%2B2AlHdEdDDWfdo4GxXwZcB6JwezvEeAUP8%2F%2FeAjwIhAO0Qt0NDZeH71IoiJCtAY6jZhRr4WRwdqUPE2w9roISaKv8DCHwQABoMNjM3NDIzMTgzODA1IgzN6bH%2FYQYwvWzSe%2BYq3ANXp%2FuMiQaciyw4UdQvEvbadXORbZRMDknA%2BgiBMj2GTWcV2sF5gVn9U32%2FTggI5nu5H3VNhwt5NkjgVwxNHpX8MyNJgeGwglV8VYcMHrTYy%2BA%2FrGmMakblfsrCwfFOy0pklXztGh5g6RsYGAcwFOJtyHByNJvWbv4lP8LgNDbS%2BIPXuHAuDf6wLdUvMcS70xNHMdWM0NPQgYckrVseNobTWcl96U28xBmwIeMvzxTeU%2BRFABrKD1ThCM7i%2Fm9VsbX9d1%2Be8wFUsiDaaHwX5rJUGzTCjF2%2FoSWjUDXO3ScYmrLYri%2BVaiGNOtJoh2jM3r9LcYhbb5tN6EloTFonutqTFeaT%2BAC89aODyBYKx1mRVi4BpxUl8XcdSUWRwdUarrrZVmmZzYawBvKtNsl4DlgJS%2FtL0nwTnOMIlMTAVavqVK7UmjOare2f2cK%2FvHdhr5ftjgE5CdVr%2Fl1%2BgNAzHfj5GniJTyNMEmyaRxfFrI%2BNQg2UC25EeGEbsLKHPgP7n2lMFdVHItsW1vZbVYPcG8Z3oxC%2BZAyMqPd6n4JvcdjVAWVhhMpD%2FoSvI87eatXWnGuiEqFwaR9CZdOhUFjOXAvIJPiL8VBl3XGd33aPEoW%2BIYC4rZK95K63T%2BZxcDDlj4rKBjqkAaXG1LBCszmB6exGVIZGN5KIYtCsGh%2BBPQnDy2VhZClZgjdFPCAgAjJtSPkIYmLuZZA4lo5bG%2Fc62fWHNJFj0J92Ey6qSrDVRQtkhboIe3C5nnz2zi%2FpnDvaWKowFfdjAWad62s5rhzbyQLUzpwiHmdmhny0gyEmG8RYD6hyYrcf8Xd4s%2FuOnPjrrGhTyBUyPRlLEdxLBsw%2F7cZIHd2EFePW24M%2B&X-Amz-Signature=8795cbaab023ed99be8aad044f89cdd4823bbfd25ddfa4885ba83c688a624394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

