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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ONDYM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAO6UZqGD3f%2Fx3GpjBtikznJ44hQW3jtrqxkVfRmyHVAiEArABuHcwSyZ4rm6CWG8Cxp7kUGJzZ1keE1RNaU6N6JWoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFWNKnSSVzI%2FvxEh%2BSrcA9T2vEiP54TE5Zqoz%2B4v02wZqOYf5K7WxrmAVsx8euRVJozc%2BPF%2BRQxPFkYEq7R2GQVUXRRqIjloBTmflA0GV7R8WTzxMQVnl4q8QNQFGg4egpllXAwO4eNCKQnVqGFtG600sChslRxqZHuVEPjmW8GRZq2T3Rihur7dXb0zHhT9wbcBBDGHJbwq8Zx14kSjbsw9WuajHP4aaog0c4jLH1Jz%2BOZD3WK40uDBsuhptFUHnTa8qUC2qsW1jBe7pe0ZJMvK%2BJMoJlQL8tw4UV9OAE26HxMsYs%2BiWLRWUSUVzX6KPvAZ6gkSowZAk5TGxlRwtu4OuCpYQnS8zzr%2BxIshCvZ7B4tLRqfUiHz2zpOlExeWwg7%2FQc7mHMTfIANDppJdJR7Qw5NnWUusTaH6ghnMCk1g7sEVT%2Bx8NCvOpBSsmqglUVd5uuYlaSNwbSnznSOkWbdw4VcM2Rb8O4f7Ii2zHpKaLsT%2BaNwXiAu0nEisgvTlvcgYAbFzJS8V1UExBaZfHHPDYCOULeAS%2BhKFKE9T3deVslVnYlvp17jk%2Bkw5YcVNOeMMzuHC29TpS1eOC%2BHfMpJwHxbKSMVa1Y4JmbOVG9TGMWkdOXbvC2RKyOcpMmQxIrjLZax2D0wdTDxBMIbwicoGOqUBLSEGjRxmkVqN%2BPF%2FfbDPyOntz3H69rEuWsnD4OiO1tELgAtqHlaTrBD2EyYHElwZ2X%2FLFsgQDDjN15Q7w6oSqS8cGLFTzj5V1%2BMo8tVtsIgsBU65p%2FTTsP%2FktdioG8YgldVwJK%2BE8dGRvyPoWyyzTtaJX3QfrZfHVu4YTGgGl7jATNB%2BR44K5QjbHS8XvpghGZCkcbHmG0wEjRnTZxRHXXfOwNew&X-Amz-Signature=7910e6649db4563c01747cd076689ed16560c2e7ab53466802c1e2ec3906952b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ONDYM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAO6UZqGD3f%2Fx3GpjBtikznJ44hQW3jtrqxkVfRmyHVAiEArABuHcwSyZ4rm6CWG8Cxp7kUGJzZ1keE1RNaU6N6JWoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFWNKnSSVzI%2FvxEh%2BSrcA9T2vEiP54TE5Zqoz%2B4v02wZqOYf5K7WxrmAVsx8euRVJozc%2BPF%2BRQxPFkYEq7R2GQVUXRRqIjloBTmflA0GV7R8WTzxMQVnl4q8QNQFGg4egpllXAwO4eNCKQnVqGFtG600sChslRxqZHuVEPjmW8GRZq2T3Rihur7dXb0zHhT9wbcBBDGHJbwq8Zx14kSjbsw9WuajHP4aaog0c4jLH1Jz%2BOZD3WK40uDBsuhptFUHnTa8qUC2qsW1jBe7pe0ZJMvK%2BJMoJlQL8tw4UV9OAE26HxMsYs%2BiWLRWUSUVzX6KPvAZ6gkSowZAk5TGxlRwtu4OuCpYQnS8zzr%2BxIshCvZ7B4tLRqfUiHz2zpOlExeWwg7%2FQc7mHMTfIANDppJdJR7Qw5NnWUusTaH6ghnMCk1g7sEVT%2Bx8NCvOpBSsmqglUVd5uuYlaSNwbSnznSOkWbdw4VcM2Rb8O4f7Ii2zHpKaLsT%2BaNwXiAu0nEisgvTlvcgYAbFzJS8V1UExBaZfHHPDYCOULeAS%2BhKFKE9T3deVslVnYlvp17jk%2Bkw5YcVNOeMMzuHC29TpS1eOC%2BHfMpJwHxbKSMVa1Y4JmbOVG9TGMWkdOXbvC2RKyOcpMmQxIrjLZax2D0wdTDxBMIbwicoGOqUBLSEGjRxmkVqN%2BPF%2FfbDPyOntz3H69rEuWsnD4OiO1tELgAtqHlaTrBD2EyYHElwZ2X%2FLFsgQDDjN15Q7w6oSqS8cGLFTzj5V1%2BMo8tVtsIgsBU65p%2FTTsP%2FktdioG8YgldVwJK%2BE8dGRvyPoWyyzTtaJX3QfrZfHVu4YTGgGl7jATNB%2BR44K5QjbHS8XvpghGZCkcbHmG0wEjRnTZxRHXXfOwNew&X-Amz-Signature=151c994299c557e2d9cdb5ecf126033146bb10347e59fd661fd5bcb6d7ee2bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

