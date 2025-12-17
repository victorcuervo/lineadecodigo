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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAR3YHS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4OX%2BOkRRRaw5LvamSLL4Vz4nvVgkUVSszxMyJ5GougIgL%2Fdvf%2B04ef1k3OsTMdBNVxl6Xk195URVaIyXCPlPcjYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOWC%2BpvuDEBtnwcEgSrcAyojtkkQfEO2l2aHokdlLlFwBMDMGxKVeWVoRICFaj68U9jRhwP2U6E0yjoCJH%2BWN%2BogFg4esyfPW%2F0BOwAzT6hH%2Bz6pJvzvcbrq7C2cl3dwErOQGSwWNiec1RTzAR4li2nQiVgckHQ57X4IarMgzgdFlsi1eHwYqWZEqUpX7LZRKXKsMaSsdIYwiTY5OuAox6mrFa6Jk2aHZp6a7IslIkHha4mliNPZCJzN6Woh6VHODyxRZPcAOgG77l02nM6vdW58PKziQjAalombEh55q5ukz4lzalPy1Ko8YWOW9F3klTHGWSjM%2FYPcr4i63HsUzeTfL3cks1B7LjsiEhuEu6AXVD6pemFw6XAnn9aPrembUSK1YyFm1jUrlie0u6h2h6FACFbBeyc4%2BUVBxig1%2B53fp5u5ESWfB4nbIRlT%2BjjB5SgaO4945FNdKI32Dak40VQgztSg5rqNXMGtzUlilbPP3j7eK8WdgRZXBCmxypMVnfSo%2F5fl50xs1OZEcUvdnZK1DBFEtLHKfnBFqjYck9%2BvAidVbJHXsCX6iHM41hLWWjQjUnbAXVfXJdjBhetizuGbU7og2TzXDDFk20QXVBdXO6x%2FFRGX%2FJ%2FXJJWO3%2FFhDe%2FII2RRDoWnmDSIMJj7h8oGOqUB0HnEmpFr4HwpZU9FK6b85IS5uVYh1xEmW%2BoCFJDSFxL4oCe6CTqqFFNZpf7glZPHWUeLahyZmztCJjNhUKtV%2B6nm3jfZYNcncwtLcMuVbAkzC2856TsJOY1KwmoG%2B1IAg%2BPHCeY%2Bv6P4qo9PxoxCWSnt%2B65J2m9j%2BCM94FW8RUisPE4owlgP%2Fje6gt%2FlAgTa8cNHqdtYF9v14jgJtbLjuM20VGrZ&X-Amz-Signature=dd5a3b67e044e93f17d8d06587c82e369a1c88c84fcbc427fdf9f56a0b6e62bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAR3YHS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4OX%2BOkRRRaw5LvamSLL4Vz4nvVgkUVSszxMyJ5GougIgL%2Fdvf%2B04ef1k3OsTMdBNVxl6Xk195URVaIyXCPlPcjYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOWC%2BpvuDEBtnwcEgSrcAyojtkkQfEO2l2aHokdlLlFwBMDMGxKVeWVoRICFaj68U9jRhwP2U6E0yjoCJH%2BWN%2BogFg4esyfPW%2F0BOwAzT6hH%2Bz6pJvzvcbrq7C2cl3dwErOQGSwWNiec1RTzAR4li2nQiVgckHQ57X4IarMgzgdFlsi1eHwYqWZEqUpX7LZRKXKsMaSsdIYwiTY5OuAox6mrFa6Jk2aHZp6a7IslIkHha4mliNPZCJzN6Woh6VHODyxRZPcAOgG77l02nM6vdW58PKziQjAalombEh55q5ukz4lzalPy1Ko8YWOW9F3klTHGWSjM%2FYPcr4i63HsUzeTfL3cks1B7LjsiEhuEu6AXVD6pemFw6XAnn9aPrembUSK1YyFm1jUrlie0u6h2h6FACFbBeyc4%2BUVBxig1%2B53fp5u5ESWfB4nbIRlT%2BjjB5SgaO4945FNdKI32Dak40VQgztSg5rqNXMGtzUlilbPP3j7eK8WdgRZXBCmxypMVnfSo%2F5fl50xs1OZEcUvdnZK1DBFEtLHKfnBFqjYck9%2BvAidVbJHXsCX6iHM41hLWWjQjUnbAXVfXJdjBhetizuGbU7og2TzXDDFk20QXVBdXO6x%2FFRGX%2FJ%2FXJJWO3%2FFhDe%2FII2RRDoWnmDSIMJj7h8oGOqUB0HnEmpFr4HwpZU9FK6b85IS5uVYh1xEmW%2BoCFJDSFxL4oCe6CTqqFFNZpf7glZPHWUeLahyZmztCJjNhUKtV%2B6nm3jfZYNcncwtLcMuVbAkzC2856TsJOY1KwmoG%2B1IAg%2BPHCeY%2Bv6P4qo9PxoxCWSnt%2B65J2m9j%2BCM94FW8RUisPE4owlgP%2Fje6gt%2FlAgTa8cNHqdtYF9v14jgJtbLjuM20VGrZ&X-Amz-Signature=2a5149a0fbfe675ce7bb37dfcce112eb915f0b53f86e97ce4e55c405dc27e0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

