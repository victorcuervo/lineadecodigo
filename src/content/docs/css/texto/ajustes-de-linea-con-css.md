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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFZVEWY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLTb77H4ebFe8U9H%2BIKiUar5%2BQBO%2FPy2vYXHI%2BFtCYAIhALgEyoLMjre%2FQh2x8M8mZxPzKcq4zg7KoaXBCzU8oC5mKv8DCHUQABoMNjM3NDIzMTgzODA1Igwyo4BrfcPVwFqrpcAq3APOnqy4GvAYqeHwBdWlyyojUL%2BuEDRNi72Sa8nveuaXJZMfCdITQHF4jXgwoIaOmAnIE0jNjDr8X233S3dkKDGwjvp4LMKp9INwdNEG8%2B7LYi9XyNPUM5zZcoeLTe3bZeB47CR4RBFMVsrCHzVBHjA6zku3gXEJ%2FGEnClBhmUqIgPHvixdXzgp0DGLrc11%2BLxFOmCU2JWqB1O2lJGN8Nr86pF6ipXXiaAX8GQZNyIYYJxObWA7BGGpapzCywAr85Znoqu5HhvC80O9ckkPfSyewr%2FPg7VH45h%2BzBYFBNh0AKvRVZZRA9exPrUORoK97O2UqctthhV%2BAO2Y3UWk%2B7QDtYdvx8eAi8lUlhpPHbba6QCK3zveYXAgKOaKBd39U2Tjdi6wrdtHH5pU%2Fg0PAsW4gpLuTZQEezHsrnAvPm2DGrL%2FkXvXBeg2z%2Bt03kbq2AFVo62%2BwciJuGZQOqFKET7fT9OdCxklH78YcmoN8ETBEn4FK5oMV6vvOO2coxFIXgvtFh%2FjVEqoFODa5UEHhzuGNfVrXofUCuK5yh2UAbAPaUGBQVApYI2%2BHQHqlV1jHDXXM5QQpjSPYyNNfw%2BJlyAUq2KG5Y%2BLIPDqzhfyEdg6UmVDRk6KETvsiMIgTcjCUzojKBjqkAQV2fE0KivRt5iCzDsgXBodH1fbtXM%2BQqzENUisuu83N1UABHa%2BmOxf%2BRcQrF6gyL5ns9FDSMr5dXWAAo2vPv46mZquSGdl25G6xz3xEIAhs1yhAeBzSe58CasuDSgmGxCjEakUzUKiIvKfFkl7D7JyODtyDCfBh2tZzIHnngiXtvTe8Y1hq0WKu%2BCBrmANOYZ%2B9pDnWzAx9VDrAobWvC7niyClf&X-Amz-Signature=c41a95c10506b19a3e953569dce331927795f63040061dee451944520361224f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFZVEWY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLTb77H4ebFe8U9H%2BIKiUar5%2BQBO%2FPy2vYXHI%2BFtCYAIhALgEyoLMjre%2FQh2x8M8mZxPzKcq4zg7KoaXBCzU8oC5mKv8DCHUQABoMNjM3NDIzMTgzODA1Igwyo4BrfcPVwFqrpcAq3APOnqy4GvAYqeHwBdWlyyojUL%2BuEDRNi72Sa8nveuaXJZMfCdITQHF4jXgwoIaOmAnIE0jNjDr8X233S3dkKDGwjvp4LMKp9INwdNEG8%2B7LYi9XyNPUM5zZcoeLTe3bZeB47CR4RBFMVsrCHzVBHjA6zku3gXEJ%2FGEnClBhmUqIgPHvixdXzgp0DGLrc11%2BLxFOmCU2JWqB1O2lJGN8Nr86pF6ipXXiaAX8GQZNyIYYJxObWA7BGGpapzCywAr85Znoqu5HhvC80O9ckkPfSyewr%2FPg7VH45h%2BzBYFBNh0AKvRVZZRA9exPrUORoK97O2UqctthhV%2BAO2Y3UWk%2B7QDtYdvx8eAi8lUlhpPHbba6QCK3zveYXAgKOaKBd39U2Tjdi6wrdtHH5pU%2Fg0PAsW4gpLuTZQEezHsrnAvPm2DGrL%2FkXvXBeg2z%2Bt03kbq2AFVo62%2BwciJuGZQOqFKET7fT9OdCxklH78YcmoN8ETBEn4FK5oMV6vvOO2coxFIXgvtFh%2FjVEqoFODa5UEHhzuGNfVrXofUCuK5yh2UAbAPaUGBQVApYI2%2BHQHqlV1jHDXXM5QQpjSPYyNNfw%2BJlyAUq2KG5Y%2BLIPDqzhfyEdg6UmVDRk6KETvsiMIgTcjCUzojKBjqkAQV2fE0KivRt5iCzDsgXBodH1fbtXM%2BQqzENUisuu83N1UABHa%2BmOxf%2BRcQrF6gyL5ns9FDSMr5dXWAAo2vPv46mZquSGdl25G6xz3xEIAhs1yhAeBzSe58CasuDSgmGxCjEakUzUKiIvKfFkl7D7JyODtyDCfBh2tZzIHnngiXtvTe8Y1hq0WKu%2BCBrmANOYZ%2B9pDnWzAx9VDrAobWvC7niyClf&X-Amz-Signature=1690389355fea8d531436a14db5cbdb5b2e660d6241a939efcd2ecec03af8cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

