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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7PCCUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHkCOLC%2Bw20nbvCqZC4FjE%2FPub0wSaJ7M1ZOng6g5jwIhAMkqgq9mMyUqON1XyiP2HUweIZ3XRST0ufH21LkutObBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTKxgwJ%2F7P4F%2FF4JYq3AOFEuhH0eyaZ8PV0h3lVWP6TnPg24T5%2FbaBETcXrCHaRwKZ5gobGiHUjto36xnjo7v7N6lU06YZ%2Ff3HCtJA72lr51mLkQXQEELWzGcmMkIAsr8Z5KHN0%2BILj4qdTFN4Wq7GjhIlHCb16muIMS%2BiaeWann55tDflpU7E0ShDz212OdnCQaoBWhhIUmu8vxC0OMZkBk0yp%2F6SPBvHnqDp88elVuaX2x9lV7BbxhCMbzh1SmhCVJbHCJ97u0TR7aGIKE0wRlF8SyMtKCTghtGuJ%2BrwTCaY%2By9%2BCK9yqh0a9b93iM4WaUkPEpPELh1q4WxjKSt2lacVrX47RBQZdqqW7KCiBAL%2F2DW10vUG9DhBTAtz42iDrtnNXjjGQ6lpzThqVtdcILDUufUDlLH9sYmGcken8ItYodihiuYF8yHlez0mB28W2FxvIl0RYvoiEi1BMWxZ2Yl5c4ROFzyfrJLasmOiKxfmiP5LHSXJoY117MBzmJN0ad%2BhY0NG%2B1mfe3wL6qQy8lxBpRzDUyNPYBqGdfRcWnobVw20iK9HwDf5Zkcp2DrQkI0sTFWxrOczzBW15QkCVHlaWjAL5t7198gNKY3bKbw1J7fFspiQ8%2B8uy8cnYn4fygavPjk2OhLICzDOnovKBjqkAdyWeO00Sbs5okaZKELGczefX12KB3N3z72btr3G45vkcxjnr%2Fk%2FJ366SJ06Hvmuwk5h732h9wAPLh8QEP5zK%2BuqfU9%2FrMfWZj47YXcMTrJktiREUdyhS5Q05q0E3ZR1eNQYz08DgThFdTTJILEUsPvXpltqDLOFr1nkSyfEL3%2BZKcK7nxA5C8YskxLLp30fBE8cGWp14xlP0NNdzxjSXhsrL3RV&X-Amz-Signature=dde77b569be24fd38099af7939405454f9bf1a4cb9a84bcb51d61ea26a08bb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7PCCUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHkCOLC%2Bw20nbvCqZC4FjE%2FPub0wSaJ7M1ZOng6g5jwIhAMkqgq9mMyUqON1XyiP2HUweIZ3XRST0ufH21LkutObBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTKxgwJ%2F7P4F%2FF4JYq3AOFEuhH0eyaZ8PV0h3lVWP6TnPg24T5%2FbaBETcXrCHaRwKZ5gobGiHUjto36xnjo7v7N6lU06YZ%2Ff3HCtJA72lr51mLkQXQEELWzGcmMkIAsr8Z5KHN0%2BILj4qdTFN4Wq7GjhIlHCb16muIMS%2BiaeWann55tDflpU7E0ShDz212OdnCQaoBWhhIUmu8vxC0OMZkBk0yp%2F6SPBvHnqDp88elVuaX2x9lV7BbxhCMbzh1SmhCVJbHCJ97u0TR7aGIKE0wRlF8SyMtKCTghtGuJ%2BrwTCaY%2By9%2BCK9yqh0a9b93iM4WaUkPEpPELh1q4WxjKSt2lacVrX47RBQZdqqW7KCiBAL%2F2DW10vUG9DhBTAtz42iDrtnNXjjGQ6lpzThqVtdcILDUufUDlLH9sYmGcken8ItYodihiuYF8yHlez0mB28W2FxvIl0RYvoiEi1BMWxZ2Yl5c4ROFzyfrJLasmOiKxfmiP5LHSXJoY117MBzmJN0ad%2BhY0NG%2B1mfe3wL6qQy8lxBpRzDUyNPYBqGdfRcWnobVw20iK9HwDf5Zkcp2DrQkI0sTFWxrOczzBW15QkCVHlaWjAL5t7198gNKY3bKbw1J7fFspiQ8%2B8uy8cnYn4fygavPjk2OhLICzDOnovKBjqkAdyWeO00Sbs5okaZKELGczefX12KB3N3z72btr3G45vkcxjnr%2Fk%2FJ366SJ06Hvmuwk5h732h9wAPLh8QEP5zK%2BuqfU9%2FrMfWZj47YXcMTrJktiREUdyhS5Q05q0E3ZR1eNQYz08DgThFdTTJILEUsPvXpltqDLOFr1nkSyfEL3%2BZKcK7nxA5C8YskxLLp30fBE8cGWp14xlP0NNdzxjSXhsrL3RV&X-Amz-Signature=02e992c375851ae456d3cbc24aac377c8f4da1871dbbbd21627bbdd4f991ae95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

