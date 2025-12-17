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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCL75C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0OSUd37dK5iOacWPXOPz%2FwcTcKJAebEUH%2FYibuR6G5wIgFkK6SLm6zPD9zx%2FsOj4V55YZzvcGe5h7tBOMb4SNygEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIs4ahAoSkqXtHfCCrcA6qFLPQtnmMux0yna9SZUscXI3Zws2t8n8BPZfSMYNLNLQkHXGnDWe7vexvC8cY9b894X2%2F3pMDnU83gm4GLUbYDReOB6dypiq7FM6%2BI9O01waZnNqVmYx8Mg1g9Y1VsVzoYmNNjfQQqbgJdS82wPMvqPOhI2wh2SIt7poVCJvYzP6LmWqsfZUOuyLMuFygLei%2Fs16Q2jFRd6jfEO%2BxDEoYjIpRIRI2s7WSawoozXTNyfM%2FsIr79jn0H9lgmxjvBHKcxozCTt2cOtabZKJD6xNDTe8h2HXxSJ8pB3z6Ixaj3KBMi4ou5OJTJqsOcwthbkIbVZx4zEuT2VlN%2FAU6kradNi5OKgkmB%2B%2BtHd1yS%2F074Ejq0X5D2yaAW6Qcsn7NLgxOUpdalu%2FqUpFG72zBMaOkWAuk8ZBV9PjBnH1wOUvUr8x1zk6TWfcwtnHc9IxSXxtTtapLuXFbMtJNhfyooh9Yt%2FtK0Fm7lk7Hk8U5ddkzRVtVpUG2CxJmbBYLCTVRkCC5PD6bUQxr7YiwIK8MXD95d3z%2B2OO9kfd%2FjDkieEE7QhXQ2x2%2BR9qR1BNbZ%2BSitdbG%2FYMfCEJULvO3YHOEsXm6Monp1TYALh0Tnk%2Bx%2BF9fVRwutRDxAVToGP3ZzMNCfi8oGOqUB49s4WV5mHGeF8dR1vK37iQzSo7Wb5wanffm4zcGRlKZskwzVa7lPS9So9u7Z3HWvtBPweWvNSOgcKNDM9XM3SzyPncNun1bEIZ4rArpsviTt3c3u5DnpezcgIHY%2FsmS2vY7xAiYTM1A6qlbDDGyT1bfeG8gSOnuryCAg8%2FEBGxkJ9k8hEX5tYQ6Ureoakl77wIvM3JkqEuhaAam%2B%2BLDPDGrkOvbN&X-Amz-Signature=4a4f5fcdb23b3ef7f58e7e7439a90ab5506850660998c0ad39211542e574672d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCL75C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0OSUd37dK5iOacWPXOPz%2FwcTcKJAebEUH%2FYibuR6G5wIgFkK6SLm6zPD9zx%2FsOj4V55YZzvcGe5h7tBOMb4SNygEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIs4ahAoSkqXtHfCCrcA6qFLPQtnmMux0yna9SZUscXI3Zws2t8n8BPZfSMYNLNLQkHXGnDWe7vexvC8cY9b894X2%2F3pMDnU83gm4GLUbYDReOB6dypiq7FM6%2BI9O01waZnNqVmYx8Mg1g9Y1VsVzoYmNNjfQQqbgJdS82wPMvqPOhI2wh2SIt7poVCJvYzP6LmWqsfZUOuyLMuFygLei%2Fs16Q2jFRd6jfEO%2BxDEoYjIpRIRI2s7WSawoozXTNyfM%2FsIr79jn0H9lgmxjvBHKcxozCTt2cOtabZKJD6xNDTe8h2HXxSJ8pB3z6Ixaj3KBMi4ou5OJTJqsOcwthbkIbVZx4zEuT2VlN%2FAU6kradNi5OKgkmB%2B%2BtHd1yS%2F074Ejq0X5D2yaAW6Qcsn7NLgxOUpdalu%2FqUpFG72zBMaOkWAuk8ZBV9PjBnH1wOUvUr8x1zk6TWfcwtnHc9IxSXxtTtapLuXFbMtJNhfyooh9Yt%2FtK0Fm7lk7Hk8U5ddkzRVtVpUG2CxJmbBYLCTVRkCC5PD6bUQxr7YiwIK8MXD95d3z%2B2OO9kfd%2FjDkieEE7QhXQ2x2%2BR9qR1BNbZ%2BSitdbG%2FYMfCEJULvO3YHOEsXm6Monp1TYALh0Tnk%2Bx%2BF9fVRwutRDxAVToGP3ZzMNCfi8oGOqUB49s4WV5mHGeF8dR1vK37iQzSo7Wb5wanffm4zcGRlKZskwzVa7lPS9So9u7Z3HWvtBPweWvNSOgcKNDM9XM3SzyPncNun1bEIZ4rArpsviTt3c3u5DnpezcgIHY%2FsmS2vY7xAiYTM1A6qlbDDGyT1bfeG8gSOnuryCAg8%2FEBGxkJ9k8hEX5tYQ6Ureoakl77wIvM3JkqEuhaAam%2B%2BLDPDGrkOvbN&X-Amz-Signature=5d3734a97eb5e70993a43b92c3d0260448cf6f60e61c8198f81392169fc3c2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

