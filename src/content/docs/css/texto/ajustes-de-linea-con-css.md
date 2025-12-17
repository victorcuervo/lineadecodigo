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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUM7N47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmYQrvd3D0dnSAhqNj9SB%2BDIZFcZ0MQGJ6DNeSM0acwIgaegNC7bEk5urqslRorx%2BTlTV44LZJMkKuB4m7Mu1RZUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDElvzwN1PpHhXW3v0CrcA89LHgtT0xSpSjnXCL2J%2F3fl3SEwYJNnDP%2FBh%2FqxuhCkLhWQ3l5pI7JwiH6Ou06Gqss0mcL3IK0EtuwE1oWVwCKz2jxTi45eH6icn1exuNLTr5iUBEY0eP5dJw9fuWmN1BEYaR%2BFdtwSz%2BwsU2ATO%2F1EDekJbdu7U%2FzzMOTdsscv1ubf9imn3sJoHE5PV6romIhIfFRaSILZBGYVVvQ22s9vTrEPoxJT8B5z03yGpIr1iYugJufpKWzOyShtJ8qq2rSWkFoeDuHRJSjaz65qX%2FNuKUi%2B%2F8uJ3JgfjvEUcGCDfHCI%2BSyfg4mKIvAXc2jZZ7aT59fqOirqslNpr0%2Bk64UGe8VuK9O%2BEg4ErAUx1LHHjvzrExT%2BDC7zqOovIk3PWhVSJkjogrKiMOjYpqqvqYS%2B%2Bmqh1L9cACz%2BMuYWBtib4fDr0lpikno67NZAzPmqtFjLtGPunsxQO1v9By%2BufdXdSJR2kEuty5hHkxCX05nnDJ3rcaVIhP5ROlXJBSemL7pMMLO3yR078yZ4Zy5GPNrImsgEw3y53i7iyMCCIwuL8uP%2F0TzKAqMCAuZ1XNJ306%2FvgVII27ozk727RyW3SmIPBMBf5WU8DiIX0ZUJ7lPut%2FkZ8bXZ8r2I74Q1MOPeh8oGOqUB2NqfDhmdu5ctdFFdp9H9tsLyR%2F3foSB3UA0kiDvaLGn8iSk2%2B4Zp4PIkmVHRLROQorM995agrGMU%2Fc%2B2%2BZbpehPGA5gfUKpUZZCMX5LkAv9x%2FvVDcUp2SPlvNk9tZMybY3XKMrA%2BJGuBEwbQ9Q4NvPfoCY6U99dyOFeMF5u1%2FxAhzuHRvktrY98%2BoyHYGo9kBc2K9MO9pastAADDZPSKRd%2BsiSqP&X-Amz-Signature=ae189cb4dc44f6041c10e0b0062cb377b65764a94ec33cf3899b5ffe1ef5eaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUM7N47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmYQrvd3D0dnSAhqNj9SB%2BDIZFcZ0MQGJ6DNeSM0acwIgaegNC7bEk5urqslRorx%2BTlTV44LZJMkKuB4m7Mu1RZUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDElvzwN1PpHhXW3v0CrcA89LHgtT0xSpSjnXCL2J%2F3fl3SEwYJNnDP%2FBh%2FqxuhCkLhWQ3l5pI7JwiH6Ou06Gqss0mcL3IK0EtuwE1oWVwCKz2jxTi45eH6icn1exuNLTr5iUBEY0eP5dJw9fuWmN1BEYaR%2BFdtwSz%2BwsU2ATO%2F1EDekJbdu7U%2FzzMOTdsscv1ubf9imn3sJoHE5PV6romIhIfFRaSILZBGYVVvQ22s9vTrEPoxJT8B5z03yGpIr1iYugJufpKWzOyShtJ8qq2rSWkFoeDuHRJSjaz65qX%2FNuKUi%2B%2F8uJ3JgfjvEUcGCDfHCI%2BSyfg4mKIvAXc2jZZ7aT59fqOirqslNpr0%2Bk64UGe8VuK9O%2BEg4ErAUx1LHHjvzrExT%2BDC7zqOovIk3PWhVSJkjogrKiMOjYpqqvqYS%2B%2Bmqh1L9cACz%2BMuYWBtib4fDr0lpikno67NZAzPmqtFjLtGPunsxQO1v9By%2BufdXdSJR2kEuty5hHkxCX05nnDJ3rcaVIhP5ROlXJBSemL7pMMLO3yR078yZ4Zy5GPNrImsgEw3y53i7iyMCCIwuL8uP%2F0TzKAqMCAuZ1XNJ306%2FvgVII27ozk727RyW3SmIPBMBf5WU8DiIX0ZUJ7lPut%2FkZ8bXZ8r2I74Q1MOPeh8oGOqUB2NqfDhmdu5ctdFFdp9H9tsLyR%2F3foSB3UA0kiDvaLGn8iSk2%2B4Zp4PIkmVHRLROQorM995agrGMU%2Fc%2B2%2BZbpehPGA5gfUKpUZZCMX5LkAv9x%2FvVDcUp2SPlvNk9tZMybY3XKMrA%2BJGuBEwbQ9Q4NvPfoCY6U99dyOFeMF5u1%2FxAhzuHRvktrY98%2BoyHYGo9kBc2K9MO9pastAADDZPSKRd%2BsiSqP&X-Amz-Signature=12ecc931907ea18b49019d9d9f9a985d10fe33fa8a7856a68a21f9ddc5557ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

