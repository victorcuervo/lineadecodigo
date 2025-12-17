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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYIYQFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPUbM%2FQjxcfvU9ZVA3Ac8uDBAtp2DIit9zlQNpv%2FgveAiAm4z3IueB6VQBRctJJlvCQ%2F1RmOlkyCMnAgey2QH%2BM3yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJ9RNNK4JwW4S%2FX1wKtwDKZFvhWAQGfqrSeeJ93sCc9INkSmG5PhfnHrexX%2FXHziMwNJE5CKk3d3g7pDgyPJV2IOYG0JB%2Bfc4dlUx4P4lSljJa%2F0TFjJGSYKFkPtMg7K0KJcYYjbMJOJAq11xssEW2qXXqPIWzMTJOHc7n8WevvscNAEdXQyiHg9JG%2FJByeugSv5RLAWn9LJl6i3XAcrPpwppI%2Bk3IYKMSQxPVW6bAYJq9oJrxDshjAxMQlDP52arJXbdODJjIhbVsYyVnot0V828z2raQ%2FierpWJG0V%2BTf8IRyxM7Q9PcqLghN%2BnbBK6hy0dK1iM2%2By%2FUemJAnCma%2BUMfAC8IXa1SzieV5aEdssvJEgyintXbUJWdOM5hvHar%2BMYescMRabGnn2les7JaceVnD6WQtfkXpYUgveicOKOQ0DB9SATaXQ9gWgDBHdlpMkEYenyfn9g1nze73iqoVUMiARphONO%2FW9WXD4arMvabOK9jE%2FTFM8Wq42%2FXjzhAepyc5yH56E%2Bm4yZ%2FdGdDsrIugNfUeLZB4W5FezbjMJqQo4zU1od2G%2Fwtk4Pov6k%2BnrK6Sf3NtBQzM9wvQGG023FUBXoIAWx4P1vYDedfSY0PUUNLDD2sHbQKSc2S8O1sbLp3FjML69K7Sow1N6HygY6pgFXbWzzhtwAbc6e0K0V29%2BisNqp7P0uJze%2FJeUlFv4PqTJaYnVhDyJ87ubO%2B5oHELe2FgyDDEhbYgzoE7o3XU50jBPCTln%2Fsiyf6Ce1fC2YA9KyQbDExTx8aXAP3s3uJHHbYYNFWYEEHTsOHncJ6JQQaP26g4PvHHxm%2FJ%2BVKAmQXsOdH%2FHPzSsPILSldtCPguFPoNJREt4FJD9c8WcXncXnn4ej%2Fym3&X-Amz-Signature=639e01e70678e82bdd490a0a9df1768ce4da13a157a7933e81f0384b04aa6df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYIYQFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPUbM%2FQjxcfvU9ZVA3Ac8uDBAtp2DIit9zlQNpv%2FgveAiAm4z3IueB6VQBRctJJlvCQ%2F1RmOlkyCMnAgey2QH%2BM3yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJ9RNNK4JwW4S%2FX1wKtwDKZFvhWAQGfqrSeeJ93sCc9INkSmG5PhfnHrexX%2FXHziMwNJE5CKk3d3g7pDgyPJV2IOYG0JB%2Bfc4dlUx4P4lSljJa%2F0TFjJGSYKFkPtMg7K0KJcYYjbMJOJAq11xssEW2qXXqPIWzMTJOHc7n8WevvscNAEdXQyiHg9JG%2FJByeugSv5RLAWn9LJl6i3XAcrPpwppI%2Bk3IYKMSQxPVW6bAYJq9oJrxDshjAxMQlDP52arJXbdODJjIhbVsYyVnot0V828z2raQ%2FierpWJG0V%2BTf8IRyxM7Q9PcqLghN%2BnbBK6hy0dK1iM2%2By%2FUemJAnCma%2BUMfAC8IXa1SzieV5aEdssvJEgyintXbUJWdOM5hvHar%2BMYescMRabGnn2les7JaceVnD6WQtfkXpYUgveicOKOQ0DB9SATaXQ9gWgDBHdlpMkEYenyfn9g1nze73iqoVUMiARphONO%2FW9WXD4arMvabOK9jE%2FTFM8Wq42%2FXjzhAepyc5yH56E%2Bm4yZ%2FdGdDsrIugNfUeLZB4W5FezbjMJqQo4zU1od2G%2Fwtk4Pov6k%2BnrK6Sf3NtBQzM9wvQGG023FUBXoIAWx4P1vYDedfSY0PUUNLDD2sHbQKSc2S8O1sbLp3FjML69K7Sow1N6HygY6pgFXbWzzhtwAbc6e0K0V29%2BisNqp7P0uJze%2FJeUlFv4PqTJaYnVhDyJ87ubO%2B5oHELe2FgyDDEhbYgzoE7o3XU50jBPCTln%2Fsiyf6Ce1fC2YA9KyQbDExTx8aXAP3s3uJHHbYYNFWYEEHTsOHncJ6JQQaP26g4PvHHxm%2FJ%2BVKAmQXsOdH%2FHPzSsPILSldtCPguFPoNJREt4FJD9c8WcXncXnn4ej%2Fym3&X-Amz-Signature=bdbd14a3f830b872af47ee0a81add79b6b283a96215eb03a4adf524ea0d816ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

