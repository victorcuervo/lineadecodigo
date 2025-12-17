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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OR5BMEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY9kF62WAmvFzDdAW%2FTO94it2cl122UIABsjoGVZcgdAiEA2UK5ZEfTCQU0a3wnCN9XUbmKvQ9u26DIVTztLHTXygcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFYiYyzEFCwJZp9KDSrcAyq46EN5BJ1v8NWdo6aWeF12PC8Go4OG5KgRMpRHm6TJ22VVgGwkDDsj3UFT8tgwM1nGH%2Fy8GJzz1dqE3G1XNC65yfAXfY3Z6OCrZ37hhSp4oPmOUIu0%2FIsKZVPHkrnfRWschArwf3sL%2Bwyi2FFStDSn62sjelH9yES1%2BntTU%2FJCxADualLOpYDI7AqcUe53GlV8%2FFDc5yInz7lW6GCK0Xbtgy8%2FXMshFor6IWr3UFXt7uz2zObdAYycO14lN4JkJzZEE4iMlNyugQxzGucI8rTEKET6T8WplZDDq8Y2n1jbg0vkY5FXlxrhU2ZsGxycsfER9QbJRtam7G%2BY0JIrtkouc9ArfUZ3P36NVHwlrq7x%2B8%2Fh3OhoD638OtKsutjpMNsiPE3B5AgsRMoqIh9sYamIssab%2BbM5dBwx%2BM5Mzth5kPqxwqydLOXxfyAa4gi5K6ipCReqPmREvmiqnhFKzPUSZ9IyilyI9tMoRy1fAy%2BAtoes4xTXle0eCM4npnrK1gPKVNE7%2BJZibosMp9lmX5OKEd669SGKv3V%2B7FjocJ7UfI0RaLp9GfdKVOwmV6HtBmIfp8RU6AIW3zbIv1DpJ26CVbA8K%2Bh9B3y1asQ6NT8NJetOo1SYNKMbT3aSMJvPiMoGOqUBYh4w%2BFrKvz3Ah9dOQdUsE1VA3UWMhz21rAThw9yKUeYPMMUlEj9D5AOQvNLmVJWtCXLcyuLFnkyc%2FfVUHIy7TyktVXKI6RhWfGHbJ5LoOiG37mMx6vMfUR21hf5mOf5IVpyehaznz%2B%2B1GvaNcgrc%2BnCQfCiNN2OttSCgIuzfRXkuRT%2BfknLaMqEcbCLc%2BtlhkOhglgY22X3C2dXtQ%2Bo4Uq7wtk%2Fz&X-Amz-Signature=2f40a2999cf3de08f4685d7a8cdadcf2e8d7d4d2b6bfa518b7e5f5102ef9b7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OR5BMEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY9kF62WAmvFzDdAW%2FTO94it2cl122UIABsjoGVZcgdAiEA2UK5ZEfTCQU0a3wnCN9XUbmKvQ9u26DIVTztLHTXygcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFYiYyzEFCwJZp9KDSrcAyq46EN5BJ1v8NWdo6aWeF12PC8Go4OG5KgRMpRHm6TJ22VVgGwkDDsj3UFT8tgwM1nGH%2Fy8GJzz1dqE3G1XNC65yfAXfY3Z6OCrZ37hhSp4oPmOUIu0%2FIsKZVPHkrnfRWschArwf3sL%2Bwyi2FFStDSn62sjelH9yES1%2BntTU%2FJCxADualLOpYDI7AqcUe53GlV8%2FFDc5yInz7lW6GCK0Xbtgy8%2FXMshFor6IWr3UFXt7uz2zObdAYycO14lN4JkJzZEE4iMlNyugQxzGucI8rTEKET6T8WplZDDq8Y2n1jbg0vkY5FXlxrhU2ZsGxycsfER9QbJRtam7G%2BY0JIrtkouc9ArfUZ3P36NVHwlrq7x%2B8%2Fh3OhoD638OtKsutjpMNsiPE3B5AgsRMoqIh9sYamIssab%2BbM5dBwx%2BM5Mzth5kPqxwqydLOXxfyAa4gi5K6ipCReqPmREvmiqnhFKzPUSZ9IyilyI9tMoRy1fAy%2BAtoes4xTXle0eCM4npnrK1gPKVNE7%2BJZibosMp9lmX5OKEd669SGKv3V%2B7FjocJ7UfI0RaLp9GfdKVOwmV6HtBmIfp8RU6AIW3zbIv1DpJ26CVbA8K%2Bh9B3y1asQ6NT8NJetOo1SYNKMbT3aSMJvPiMoGOqUBYh4w%2BFrKvz3Ah9dOQdUsE1VA3UWMhz21rAThw9yKUeYPMMUlEj9D5AOQvNLmVJWtCXLcyuLFnkyc%2FfVUHIy7TyktVXKI6RhWfGHbJ5LoOiG37mMx6vMfUR21hf5mOf5IVpyehaznz%2B%2B1GvaNcgrc%2BnCQfCiNN2OttSCgIuzfRXkuRT%2BfknLaMqEcbCLc%2BtlhkOhglgY22X3C2dXtQ%2Bo4Uq7wtk%2Fz&X-Amz-Signature=96958390b803ea102351a222ebf920bf32bcc2f4d764983cf2589535cc464a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

