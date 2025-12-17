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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TIWJK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNznvvueP%2F9ffTy792PWslahCGOzfEFd2iXEmZSA2xAIgR9j51uaJajcZAhXJ2t1Xz%2BRyU4v5XYd5hiVK4H3gE5sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG8Y6IEBQgd8%2ByVGiircA%2BTTlKU6SrsD7y5%2FX9hLEIvexwOFU3GMx%2FbKwfpfut4hKDwgGzxbmZccM9d0cG7bMgDT5S7u1vMsjUnneZoxWU81eb9intJ%2Bv%2BqZMRspl35yUygGf1tCrERYhmBvNUt9rEavbw07Q4ez%2BvlzzYRKzHuAtp1emLGbTlpjlKqRamu6mRYfg2YWJlDtm4wyCmmx8wEGYInoIoTV82bpWH%2FvGxZMjIuZTOmHYeOj69QTqJxUIaMAeN%2FDXmqNlsLpd41V6PmeERxK6XdEPJUd12Nlz5sWRq8e5CZpyNSO7pD2AwOyRHqNt7xuFpEpYo32lvXHPJxFrVucroUevUwQKL68FfQWGMcMcgdS7UNgB8wiDXMmOrhyHmxD%2F9ARDf74GsKTsmX7HVHsZEX3knM9KKh%2FqgWWUnzsJvFTfhWkGL8if8Ra8xoek3niwVP2cxtszSGheNMzOQF96UTeQp%2F3fOSyFitA2D8D7zHI1LKcgVXHgqdFzVbraVGqGoTxYA2UkqaH%2Bqx3AiYUClwy%2B5itdwXgRc3qE1GZ5HeMT76Ldw1xLp7nyv%2BLZFN96prok7xkltwce2SpvpXlKZBJI0JSFpbcPyPo4Ni7Ao4pOb6uLzz8EJNZM40D8BcwUa3ZP2RzMOveh8oGOqUBsvNfsRk%2BTvlGiDqKOj0oTeZEgaai9tvCCo8ktKw6VfkJTxO9y6gdxGUmNxjvwipK%2Fitkwr3QZ3%2BSBz235qRiMSfdiQwWjbPmWY4J0ex80K5gzULZJnBhZ1mpAYnQcxsBl76jaaj6QKupzqJKPdkPoLiwv2yXWv72%2FpxX1hMcpjDCkFo%2FpGSaxowBmwanOk8GiyzhOOSBvGV6sLbdPiFegKoWVMYk&X-Amz-Signature=5896420e3944f9356b22d01bdf136680409e1d3d139b585530ae88c999b18599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TIWJK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNznvvueP%2F9ffTy792PWslahCGOzfEFd2iXEmZSA2xAIgR9j51uaJajcZAhXJ2t1Xz%2BRyU4v5XYd5hiVK4H3gE5sq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG8Y6IEBQgd8%2ByVGiircA%2BTTlKU6SrsD7y5%2FX9hLEIvexwOFU3GMx%2FbKwfpfut4hKDwgGzxbmZccM9d0cG7bMgDT5S7u1vMsjUnneZoxWU81eb9intJ%2Bv%2BqZMRspl35yUygGf1tCrERYhmBvNUt9rEavbw07Q4ez%2BvlzzYRKzHuAtp1emLGbTlpjlKqRamu6mRYfg2YWJlDtm4wyCmmx8wEGYInoIoTV82bpWH%2FvGxZMjIuZTOmHYeOj69QTqJxUIaMAeN%2FDXmqNlsLpd41V6PmeERxK6XdEPJUd12Nlz5sWRq8e5CZpyNSO7pD2AwOyRHqNt7xuFpEpYo32lvXHPJxFrVucroUevUwQKL68FfQWGMcMcgdS7UNgB8wiDXMmOrhyHmxD%2F9ARDf74GsKTsmX7HVHsZEX3knM9KKh%2FqgWWUnzsJvFTfhWkGL8if8Ra8xoek3niwVP2cxtszSGheNMzOQF96UTeQp%2F3fOSyFitA2D8D7zHI1LKcgVXHgqdFzVbraVGqGoTxYA2UkqaH%2Bqx3AiYUClwy%2B5itdwXgRc3qE1GZ5HeMT76Ldw1xLp7nyv%2BLZFN96prok7xkltwce2SpvpXlKZBJI0JSFpbcPyPo4Ni7Ao4pOb6uLzz8EJNZM40D8BcwUa3ZP2RzMOveh8oGOqUBsvNfsRk%2BTvlGiDqKOj0oTeZEgaai9tvCCo8ktKw6VfkJTxO9y6gdxGUmNxjvwipK%2Fitkwr3QZ3%2BSBz235qRiMSfdiQwWjbPmWY4J0ex80K5gzULZJnBhZ1mpAYnQcxsBl76jaaj6QKupzqJKPdkPoLiwv2yXWv72%2FpxX1hMcpjDCkFo%2FpGSaxowBmwanOk8GiyzhOOSBvGV6sLbdPiFegKoWVMYk&X-Amz-Signature=7b02399b5b6bba3f49834c56f586acf0cf12291e5631b05c92c96708d364ca7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

