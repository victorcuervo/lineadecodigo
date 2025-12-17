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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVHKACX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7SLkyIi6O6h0%2BHlDRuKO8vjWZ0r4zlXU87mAvSyniwIhAMmgBjwONUyWVAqnzsHc15dHMX0gxfTCONTDVgVqCrNBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64WTN7XxrEawli3Aq3ANWM7x7VeGg1AwxBMjSBma%2FGqh7iRhpLPHJfcgCboJSZZSR9G5EAT6yXCga5dt4RQGCabqIDuBzku%2FLYVFsPin84rn4CsgQ0vkRvKAsscrkG1i8vz%2FZ6gahxfVKyD2Sm8SvjQqgsDFmY0aNn5qvMOFUugKECVY9E%2BfORKHztl9uwXNYrfGkLcgFMQNZRS39S5IAr89wuTf93027yxKTHRmJ7ZXWAE8FK3QpDSdK5fLP7ZdZjWXRBBmATH6FZJgjtaaxCHRINio313TMS%2B2rgklhVCRTrUTd%2Fyjg2CNXuOI8oKj3QrlmaxDYoVjzw50OS1X989qZuXeP6tXqSLaUbvbdqusP2aJjRyMQSllivlevp%2FRJvJDl3XzQxv4vSCZGyByr%2Fqz%2FpcNl83w0lC482fo7AXNVVuQs2tQNVsPE4jrsOzEjEVWLWNti9OLeeVx1z47DTVlgjqrEYjEWcdioWW6PeVW3nURSj%2Blp0i0LU6SVepPSdYfU%2B4QSYgJ%2Bv6LNqf9KXGmtbEMAKFSVTu7gYXHoKF7YLQn2hHqCRwqB7tJZgsIZ%2B5zJqTj0vm3UyR%2Fe7O%2B28cd3JPr4EbclFQpWhVio60TK2mEOSqFgd8oZoRk0jv%2BP4buM2QdsEPCeIDD0novKBjqkAWL%2FZfEcGy5JhCx6TDLwbTdOMUhDmhNsL8EHjBuQ9S15dzWTnKptFanM1AhvpdXU3DrPDFGXLR1uhO04%2BR659itClZKEG6u636RtIgDgqZkyTAoyly12qwveBXmLDK0MYmOhZQjMbcJE%2BVcfJVO4oRNwkwmwfTrybri%2B93wnOcjYDC7CZ8YbPkVp7Cbi%2BNTsySzectBcb0Rs1tQyhDm9peRn4A8F&X-Amz-Signature=2b64723a52f36609278abad1b830d436cd899e4dd8910726b5033de941f6f0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVHKACX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7SLkyIi6O6h0%2BHlDRuKO8vjWZ0r4zlXU87mAvSyniwIhAMmgBjwONUyWVAqnzsHc15dHMX0gxfTCONTDVgVqCrNBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64WTN7XxrEawli3Aq3ANWM7x7VeGg1AwxBMjSBma%2FGqh7iRhpLPHJfcgCboJSZZSR9G5EAT6yXCga5dt4RQGCabqIDuBzku%2FLYVFsPin84rn4CsgQ0vkRvKAsscrkG1i8vz%2FZ6gahxfVKyD2Sm8SvjQqgsDFmY0aNn5qvMOFUugKECVY9E%2BfORKHztl9uwXNYrfGkLcgFMQNZRS39S5IAr89wuTf93027yxKTHRmJ7ZXWAE8FK3QpDSdK5fLP7ZdZjWXRBBmATH6FZJgjtaaxCHRINio313TMS%2B2rgklhVCRTrUTd%2Fyjg2CNXuOI8oKj3QrlmaxDYoVjzw50OS1X989qZuXeP6tXqSLaUbvbdqusP2aJjRyMQSllivlevp%2FRJvJDl3XzQxv4vSCZGyByr%2Fqz%2FpcNl83w0lC482fo7AXNVVuQs2tQNVsPE4jrsOzEjEVWLWNti9OLeeVx1z47DTVlgjqrEYjEWcdioWW6PeVW3nURSj%2Blp0i0LU6SVepPSdYfU%2B4QSYgJ%2Bv6LNqf9KXGmtbEMAKFSVTu7gYXHoKF7YLQn2hHqCRwqB7tJZgsIZ%2B5zJqTj0vm3UyR%2Fe7O%2B28cd3JPr4EbclFQpWhVio60TK2mEOSqFgd8oZoRk0jv%2BP4buM2QdsEPCeIDD0novKBjqkAWL%2FZfEcGy5JhCx6TDLwbTdOMUhDmhNsL8EHjBuQ9S15dzWTnKptFanM1AhvpdXU3DrPDFGXLR1uhO04%2BR659itClZKEG6u636RtIgDgqZkyTAoyly12qwveBXmLDK0MYmOhZQjMbcJE%2BVcfJVO4oRNwkwmwfTrybri%2B93wnOcjYDC7CZ8YbPkVp7Cbi%2BNTsySzectBcb0Rs1tQyhDm9peRn4A8F&X-Amz-Signature=449b69376f492f979edcdf9b7b29a032523795f963d0ad6eeec0f02b2efc04ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

