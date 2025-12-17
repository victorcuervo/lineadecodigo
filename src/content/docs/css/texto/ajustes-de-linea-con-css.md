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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWESMTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HUupZ5TX7WnTnzc4z4ZkKGMkqK0RPX78JuJMC3xEfAiEAqk5aSRyuCiOMXCebc8hkvAAHJSYPr1EasAV0hTewXcYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIm%2BW6SsdANWYIdKMircA2Ym3hA0g4VFAcRUXudDEb4NkVL2DOlHdCbFuEbLF3Fw5FdCbrHTLQ05%2Fo5UWAVWLsmNW%2BBzIoK3YZkHz83XA7M4Uxbqn9opIZpTTAkBrEIO5Irq5wdK1TVyhh1qIZaqohYn3RJKnEtSY3X1dw6h7peNamtnEyMwvyoiw3ICz18b8U0XRAgz%2BS0tnTkIFaYs%2BwvYWzgRe7rAbT7ymAtNrLlODOqjKTV5ycOKH%2FxbHkmKVuWbSFAj0kzDVeZ4pOEZTaX4e16kyukbNZ2qlS6iQ8t3sEXnzNf%2Fttwcb0tZSgKfxG%2FsnDZ%2FOSLWTjcdRmnD14z6vD94dP%2FAxAZf1k3eO68wpgeZMKfy9u2PZlUA6RPrHjTDUQDM2gckXPMjWJxlGvO3nvl37ElHTdyoDPXWtW4fmI53ECuCcObrVxtZx3X7Wkq8Cb9a4u2mQYP70f4SwRplPbiY3SkcwJGSwTZI%2BH%2FXDNpg2GIgo%2F%2F%2FpQbt05gxbTO4mfY72pY9T%2B52qkXwrqQTGOJqurGjXX9fpQKeIQ4g5OMN1VAvEk2TgNw98r7Yj5R%2Fkx5kmFzId26Z9oVQ8hsIP3fc75U5e4vpDzioJC9Cjch68xtIhe8h2EgEN4zn%2BM6IdymjJVNRpzL%2BMKucicoGOqUBvdYXvxJ2jNcOAgkuHseCp4%2F54LTUeSwrDScJ1MfYS394IoUlNGIQvm7wAWvN4QCJ5pzkMoguYLCnXghBn1e1aOvNVkzo4PU0Y%2FbeE83i5mSN%2B6vxU9jfpzLxK7Dqy8mun4XFLyK3dxjvxNTuUJQw1BjdNu9is5y2aeS0NsSyhIwhs66lFLPwbnsxPPNZNC30rpVzfxZOEYocO526Cn%2FaZhMAM516&X-Amz-Signature=2b1e89f9dd7aebca2ee53352f477372c6a3f3f2e366be82243985aa1207e274f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWESMTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7HUupZ5TX7WnTnzc4z4ZkKGMkqK0RPX78JuJMC3xEfAiEAqk5aSRyuCiOMXCebc8hkvAAHJSYPr1EasAV0hTewXcYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIm%2BW6SsdANWYIdKMircA2Ym3hA0g4VFAcRUXudDEb4NkVL2DOlHdCbFuEbLF3Fw5FdCbrHTLQ05%2Fo5UWAVWLsmNW%2BBzIoK3YZkHz83XA7M4Uxbqn9opIZpTTAkBrEIO5Irq5wdK1TVyhh1qIZaqohYn3RJKnEtSY3X1dw6h7peNamtnEyMwvyoiw3ICz18b8U0XRAgz%2BS0tnTkIFaYs%2BwvYWzgRe7rAbT7ymAtNrLlODOqjKTV5ycOKH%2FxbHkmKVuWbSFAj0kzDVeZ4pOEZTaX4e16kyukbNZ2qlS6iQ8t3sEXnzNf%2Fttwcb0tZSgKfxG%2FsnDZ%2FOSLWTjcdRmnD14z6vD94dP%2FAxAZf1k3eO68wpgeZMKfy9u2PZlUA6RPrHjTDUQDM2gckXPMjWJxlGvO3nvl37ElHTdyoDPXWtW4fmI53ECuCcObrVxtZx3X7Wkq8Cb9a4u2mQYP70f4SwRplPbiY3SkcwJGSwTZI%2BH%2FXDNpg2GIgo%2F%2F%2FpQbt05gxbTO4mfY72pY9T%2B52qkXwrqQTGOJqurGjXX9fpQKeIQ4g5OMN1VAvEk2TgNw98r7Yj5R%2Fkx5kmFzId26Z9oVQ8hsIP3fc75U5e4vpDzioJC9Cjch68xtIhe8h2EgEN4zn%2BM6IdymjJVNRpzL%2BMKucicoGOqUBvdYXvxJ2jNcOAgkuHseCp4%2F54LTUeSwrDScJ1MfYS394IoUlNGIQvm7wAWvN4QCJ5pzkMoguYLCnXghBn1e1aOvNVkzo4PU0Y%2FbeE83i5mSN%2B6vxU9jfpzLxK7Dqy8mun4XFLyK3dxjvxNTuUJQw1BjdNu9is5y2aeS0NsSyhIwhs66lFLPwbnsxPPNZNC30rpVzfxZOEYocO526Cn%2FaZhMAM516&X-Amz-Signature=5f292bcb35f63900a3338f17548879c004f2bc2afc9fc9c0953da8c20369df73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

