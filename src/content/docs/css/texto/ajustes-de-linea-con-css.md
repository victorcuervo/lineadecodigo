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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIR63CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADw0MLNNDSQ%2BMNzzaR3ZwjY2%2BXNg6HciJ3h9rVQCkwIhALvWW0i0bGpfLXU%2FZMStnlowi1ghNKOX2Ve8fTf35emrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBwZ%2BFKTEBY%2BQLfC8q3APIHNtVkGfETD%2FXOSV5n9xl8qQ%2BQCCLxjFKKbNFoW9M0Kh%2B6Y0Gpc4I0lyOoPPm%2FSm0BL%2FdwZO8Fn%2BCkCab8kaTAdoGrABg1BPFzd2Yz3zIZ6wqVJBn40b7gPrdaGjPXPy%2F3YGxEveVbTPOk7Ybbc68aTjN0OKUzc9%2BcMG2f3eA3YWdIwxX7xi16EWe4QzYNXqzlh89LSq4bGpwsMZpeouB1%2B1OmXJU9R99jAvxDo%2Bao0kduUmMtJMI6C%2F4n8wbABS52eQj7dwZ1GiokFJGxtlXGrJgDg%2Bu57wu0rvTG61bSAa%2BzoD7xTnt21DPDQln9TFqk1UFmJZWbHRpin8ctezi57WekFv8kroQA%2F2VYT8xSyh1VaJuU8MRMxEXVMxyF8wqnzquSrytEDh9qRxDQ95Tws0haNg3MvVGcxmSgOwY3JiggjG8wNaXbq5ppqxvaSzbwOhbZK%2BKyjON6ElO%2FUxxb7hUEol0B%2Ba4n%2FucIx0fhgPchd6xvtP5VcfuktmU9gqDdg7wtbOBzdQUNr6lHJAcfJeKYuNIElVZfSLl0UsV3FkYCBexCZs3XxsJzlwxfzeIFC7PWrYznwtloZadjGp6Cjv%2Bs5FOQrnxL9ygrRU%2BW8WWRcQYdPvKA%2FjmWDDknovKBjqkAWDQDFuxXyt%2B%2BBgmOwsHiV9nOjYQfiVl%2FH6GdTxFZNJ4GoizzckBJIbiUCMRah2DzTjEHNPk3ucujUIxKMxQ9gQeekgPN9m%2FVhK3f4zAq1GaHUBIB1hLhyDYmnOzjtoCSpHkqvBi15TpvrmdD%2FT7b32FOo%2FMU7u106vZfTMmjx7J4mJhHwbrezgtn6ybIAGvX1IZIRV1gM5Dqy4bHcYaVbibdQ9a&X-Amz-Signature=db3e987fcbded1c050b7cf23fe6f3199fbd5c924999267574c277e2b8c8cf8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIR63CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADw0MLNNDSQ%2BMNzzaR3ZwjY2%2BXNg6HciJ3h9rVQCkwIhALvWW0i0bGpfLXU%2FZMStnlowi1ghNKOX2Ve8fTf35emrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBwZ%2BFKTEBY%2BQLfC8q3APIHNtVkGfETD%2FXOSV5n9xl8qQ%2BQCCLxjFKKbNFoW9M0Kh%2B6Y0Gpc4I0lyOoPPm%2FSm0BL%2FdwZO8Fn%2BCkCab8kaTAdoGrABg1BPFzd2Yz3zIZ6wqVJBn40b7gPrdaGjPXPy%2F3YGxEveVbTPOk7Ybbc68aTjN0OKUzc9%2BcMG2f3eA3YWdIwxX7xi16EWe4QzYNXqzlh89LSq4bGpwsMZpeouB1%2B1OmXJU9R99jAvxDo%2Bao0kduUmMtJMI6C%2F4n8wbABS52eQj7dwZ1GiokFJGxtlXGrJgDg%2Bu57wu0rvTG61bSAa%2BzoD7xTnt21DPDQln9TFqk1UFmJZWbHRpin8ctezi57WekFv8kroQA%2F2VYT8xSyh1VaJuU8MRMxEXVMxyF8wqnzquSrytEDh9qRxDQ95Tws0haNg3MvVGcxmSgOwY3JiggjG8wNaXbq5ppqxvaSzbwOhbZK%2BKyjON6ElO%2FUxxb7hUEol0B%2Ba4n%2FucIx0fhgPchd6xvtP5VcfuktmU9gqDdg7wtbOBzdQUNr6lHJAcfJeKYuNIElVZfSLl0UsV3FkYCBexCZs3XxsJzlwxfzeIFC7PWrYznwtloZadjGp6Cjv%2Bs5FOQrnxL9ygrRU%2BW8WWRcQYdPvKA%2FjmWDDknovKBjqkAWDQDFuxXyt%2B%2BBgmOwsHiV9nOjYQfiVl%2FH6GdTxFZNJ4GoizzckBJIbiUCMRah2DzTjEHNPk3ucujUIxKMxQ9gQeekgPN9m%2FVhK3f4zAq1GaHUBIB1hLhyDYmnOzjtoCSpHkqvBi15TpvrmdD%2FT7b32FOo%2FMU7u106vZfTMmjx7J4mJhHwbrezgtn6ybIAGvX1IZIRV1gM5Dqy4bHcYaVbibdQ9a&X-Amz-Signature=faf389ea6e306d738c5758ee7a51401012f20bcd598788b4212188f5b8017835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

