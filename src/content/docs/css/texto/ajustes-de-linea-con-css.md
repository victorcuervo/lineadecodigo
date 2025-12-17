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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RFO3OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb3iZ26jEwiq4VJOx4Pk9MXNIzGwc9Eb8GbKDTPnCytAiEAzV751U4VpE8hHWFlKux5kn4SMyxLrJyeSu%2B%2BZ0sKcSUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS8zwIgpkyEegwsMSrcA1GPuyPaxyJ9cMm7FdbscJ9aLPRCmb2gB30YuXAM%2B3Zk76EOX9ieaI4evDbjpYuU6UdroU4QXH%2BKcNvtwOXdixy7FMPeunWoMC4RimXftu0xRgSe3qZon8JzQbHTXHEeqoULBtWYJZUObkhTOK3zEQV8uX7KeYBee57IW4pVgDfFUCS0fYFTXiVm1d0VOhDXhjZNqp56c6JZw5hU%2BbO8BzJbRC3S%2Fyjolj3%2BTZWDCG49pDUHCbYExf7l0IGyl%2BWW9MVQsEHXfMP7DEtk1Q%2BHMcPMG9jtF95ZYsQQmiFnbh44R2MxhdwH1O1HA%2BCjWna4NZs91wKdSe8eyDScFxlKhbCgGw4YlGDvyrMvbrectQOABPM9ix1XxNFrKZXkE%2Fwjk%2BBU7arEBX5QO%2B%2FMY6xU%2FksxhUmKLVn4cboYyR1Sm23%2B31lfcWKi9MbJT62mBPWspqtAhqL5J0rc1bOLHNugGlKOBI3d3b5l0wo4diWAE8MdcJ96ejB8kamrKDX9uq0mF0dqNSfJu0Jlr%2BiafOYCM24OPgZ4XW%2Bx4YSU%2By3jBwPy9sVheJTmk7eLU3H2eTOKI1V0CCwhIWQq4zHzjchtUqOMEyNYnQNzbvw4Ue7NsJOxMWy1dOReHuB%2FX2VIMMCKjMoGOqUBTwC4uCGwzaSyyhGKPjP3Z8eUZbAZmd8%2F42zBZZLET5dU6X6BJjSkNEsGdZAWoV547eIPK1sf3obE7%2BmfCuYNc3EQEkyO3ZIpT9EJ%2Fy9olsA%2FE%2F7Cit96nsUgU6Lb9BovSQ3tJA9rDrcCjI0LLw3KGdCJqt2Ib%2B3zBkfwHKZQJh3SSJWvz7l74GDgdpKhs1Yam4KkCtOzxUHWTEt6WLOpCdEoCJKl&X-Amz-Signature=3f003496b7fdc99efec077bea2603ecc33253e8499000bdd180fdb69696c659e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RFO3OM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGb3iZ26jEwiq4VJOx4Pk9MXNIzGwc9Eb8GbKDTPnCytAiEAzV751U4VpE8hHWFlKux5kn4SMyxLrJyeSu%2B%2BZ0sKcSUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS8zwIgpkyEegwsMSrcA1GPuyPaxyJ9cMm7FdbscJ9aLPRCmb2gB30YuXAM%2B3Zk76EOX9ieaI4evDbjpYuU6UdroU4QXH%2BKcNvtwOXdixy7FMPeunWoMC4RimXftu0xRgSe3qZon8JzQbHTXHEeqoULBtWYJZUObkhTOK3zEQV8uX7KeYBee57IW4pVgDfFUCS0fYFTXiVm1d0VOhDXhjZNqp56c6JZw5hU%2BbO8BzJbRC3S%2Fyjolj3%2BTZWDCG49pDUHCbYExf7l0IGyl%2BWW9MVQsEHXfMP7DEtk1Q%2BHMcPMG9jtF95ZYsQQmiFnbh44R2MxhdwH1O1HA%2BCjWna4NZs91wKdSe8eyDScFxlKhbCgGw4YlGDvyrMvbrectQOABPM9ix1XxNFrKZXkE%2Fwjk%2BBU7arEBX5QO%2B%2FMY6xU%2FksxhUmKLVn4cboYyR1Sm23%2B31lfcWKi9MbJT62mBPWspqtAhqL5J0rc1bOLHNugGlKOBI3d3b5l0wo4diWAE8MdcJ96ejB8kamrKDX9uq0mF0dqNSfJu0Jlr%2BiafOYCM24OPgZ4XW%2Bx4YSU%2By3jBwPy9sVheJTmk7eLU3H2eTOKI1V0CCwhIWQq4zHzjchtUqOMEyNYnQNzbvw4Ue7NsJOxMWy1dOReHuB%2FX2VIMMCKjMoGOqUBTwC4uCGwzaSyyhGKPjP3Z8eUZbAZmd8%2F42zBZZLET5dU6X6BJjSkNEsGdZAWoV547eIPK1sf3obE7%2BmfCuYNc3EQEkyO3ZIpT9EJ%2Fy9olsA%2FE%2F7Cit96nsUgU6Lb9BovSQ3tJA9rDrcCjI0LLw3KGdCJqt2Ib%2B3zBkfwHKZQJh3SSJWvz7l74GDgdpKhs1Yam4KkCtOzxUHWTEt6WLOpCdEoCJKl&X-Amz-Signature=5016758d5d50b18b0d0656f6bee3b675823eb7ed038e13daaf3579f52417362a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

