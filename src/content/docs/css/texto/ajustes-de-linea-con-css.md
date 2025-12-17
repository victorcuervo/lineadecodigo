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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYPSBM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO%2FxM1ICrBX6NWl023ze9fIIxEUqLd4WznrSYL2dYVYAiEAjsLLAuPE8VPr2M%2BvTk5nFA7FrMn30Xq%2ByZq3tAp2dWsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIIDfqJ1Nna8EndGeircAyDBtwOoaQIfFu3wbTbr11SyXKoaDPSBlTdcN%2BiV%2B%2BOvT4oU26YkMMCIBKRGATXlxYnB6axk7iU46MBfk9QzbODGi%2Fu61IbtpQkUkCOrkPXUei2CLszp2YiKZ1F4%2BRGLic23mmU0Ly0G2IQtuHuEybFRieCxyxHpWw1zS0cDQVNCXpqbIfyyL79Xeh2nGlYLVXYB37kA0z3Ge6%2FsUViuBDVrOZtz4ixow%2FY9btd5ovXis%2FWU1YVtJ0zpkVQ8mzhCFWQsdHR9ilVPDh9sw%2FO5klDQjhw3m9c59fYh1CzWxsV69hd31Vc7ykSxDkDVGa7hitJk8XxYypcJz%2BUgQapowcAYLZE9tB2gOCgaA41HsDifY7J8dW41GDi1YTzqArZmRNk%2Fv%2FryHPftCFdXX512BeALbEoN8ksB3T%2FzUmq%2Fm5vZRF8tzw2dLMCQZjrzwjC8Zigtn8oTwZesgg82WFIVxGi41WFt4%2FodEAoVx484WqDRVi91FZgAhhdMCRcMosJweshXggECd4dMGFFzwMGERZfGM61ubpOY35IRSEh99T7fC6HdaTwWx3wi%2FN1%2BJnFpSvNtOSnbvN5RU1GaHq1%2BHK7xIQOmWjRif7xxiHgO50mFYhxTYw%2FnCVu7vYUBMKy4icoGOqUBrkUXkZmTeFEIGuXTFJWlqI0WdVHWuxsXevVHf9vZzjNlTh%2BFfzcJiOZJkXRFjFwlo5MRIxYuDh4kUNQXViL8uJGCEwKwTyOvu%2F5H7ExJFbDAEiSwtOKaJSp2UY7m7mfpbQUPtYie6%2BoKJuhMi3zFrVWRAd9U8m8RfP0rxyweB8hLWCI3KZGe7ZtwpGiDOx94JWGYHwPaIKQ4UeXvnWExn8BBuGqZ&X-Amz-Signature=a9c254ffe9c11e1e4969efcf88656879808fb85bb1b7973c696410289cdb1382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHYPSBM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO%2FxM1ICrBX6NWl023ze9fIIxEUqLd4WznrSYL2dYVYAiEAjsLLAuPE8VPr2M%2BvTk5nFA7FrMn30Xq%2ByZq3tAp2dWsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIIDfqJ1Nna8EndGeircAyDBtwOoaQIfFu3wbTbr11SyXKoaDPSBlTdcN%2BiV%2B%2BOvT4oU26YkMMCIBKRGATXlxYnB6axk7iU46MBfk9QzbODGi%2Fu61IbtpQkUkCOrkPXUei2CLszp2YiKZ1F4%2BRGLic23mmU0Ly0G2IQtuHuEybFRieCxyxHpWw1zS0cDQVNCXpqbIfyyL79Xeh2nGlYLVXYB37kA0z3Ge6%2FsUViuBDVrOZtz4ixow%2FY9btd5ovXis%2FWU1YVtJ0zpkVQ8mzhCFWQsdHR9ilVPDh9sw%2FO5klDQjhw3m9c59fYh1CzWxsV69hd31Vc7ykSxDkDVGa7hitJk8XxYypcJz%2BUgQapowcAYLZE9tB2gOCgaA41HsDifY7J8dW41GDi1YTzqArZmRNk%2Fv%2FryHPftCFdXX512BeALbEoN8ksB3T%2FzUmq%2Fm5vZRF8tzw2dLMCQZjrzwjC8Zigtn8oTwZesgg82WFIVxGi41WFt4%2FodEAoVx484WqDRVi91FZgAhhdMCRcMosJweshXggECd4dMGFFzwMGERZfGM61ubpOY35IRSEh99T7fC6HdaTwWx3wi%2FN1%2BJnFpSvNtOSnbvN5RU1GaHq1%2BHK7xIQOmWjRif7xxiHgO50mFYhxTYw%2FnCVu7vYUBMKy4icoGOqUBrkUXkZmTeFEIGuXTFJWlqI0WdVHWuxsXevVHf9vZzjNlTh%2BFfzcJiOZJkXRFjFwlo5MRIxYuDh4kUNQXViL8uJGCEwKwTyOvu%2F5H7ExJFbDAEiSwtOKaJSp2UY7m7mfpbQUPtYie6%2BoKJuhMi3zFrVWRAd9U8m8RfP0rxyweB8hLWCI3KZGe7ZtwpGiDOx94JWGYHwPaIKQ4UeXvnWExn8BBuGqZ&X-Amz-Signature=9be8c2a358d92bf6df4cf33ee521cda9b6322ff34ffae26a2b21014a504b49fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

