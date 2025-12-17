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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOACKDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg5WTkreoKD1Ddob01eJs46uBMKsOYOSQrk287mGtdoQIhAMPCKELL8xaZykk1rEPcwqhKPmv2DYtQu9AtC4b6%2FP9eKv8DCH0QABoMNjM3NDIzMTgzODA1IgyNJCz9TkV1ftkFfeMq3APjTmSvyY86NWYoXukqsXKZhqudBrVj%2Bhel6cBbMj8bG10j%2FvSXRH9ku4PPDGroy%2B6Qgz7a6Wz5WcXUfNVNzoZVfClVV%2F0kw5As9PZ0JCWreWOJvWoD7mPt5P9klOpQtOtSO%2FMEV22Am%2FuYs3P%2BefFS8bhf0xuBpRB0GptbtUMwkx3SeSM08bCDhKb04np8Xm%2BhbIQFTdA13LksBD2pX5jOMrc2mRCf4ZMBgzB%2FsiV4dB8s6f0FBr85uoPJO15iGQFruRuFOjaiN64gw1lb1l6QdxZb8ctN4FBrvVFCeC5Q9swainQ5RPJ9WRjs6O5gOBJ0tjD3%2B4YbVWFeDwZIanDytl1ppwqHUjxFgpa8XaEySFXJbkqtXDLAsEe3s5m9saNzY1UOh2AB%2BBaPSHOWsZXs2CFgIvX8dXQrU9Mw%2FVz5yVmOUFP4Df1cK8WIoEGa2fjUzBGd%2FZj5fP%2FCcPtrZYXXldeud4Z%2FIGpwPrl5Gu8ZzsSe8Ns7s4d6Hva6vWEV8R%2BSvFBD7rTvPbRfXqJlN1a5KC%2BH9fRu91EuV59GA1LECVKJtGQIgMkwwKjjfChFHM6tFwmVSNxIjO4a8%2BzaQVTH3iHZgAugAhRYIwtD8nS5G4i9%2BmuwPtvqIyOVATDDqorKBjqkAR5WWJy9BdZkjsjXO6dC3ad3AKjOrkyiOa6jA5fy%2BvFmoSxNwlbBrIe8mDLExyowOJIqNR1OINryCYv6yiXQkXB1rsO5nEUawC%2F6aES9zZ1yMGzLWw3dmqwmDx%2FLfDa2XKE3eZHIFCsCcJ7u0SlKoUzJcTf6drWzT58jsqZXeUlR%2B%2FzoCbp6pzNKLLQl00QjbPY%2FDD68Eok3XpqdqGvJAodiFsFc&X-Amz-Signature=45cb1c563f94d1febd1c0ce0a29ede117d503567f3e22343a603b5e4cf563d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOACKDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg5WTkreoKD1Ddob01eJs46uBMKsOYOSQrk287mGtdoQIhAMPCKELL8xaZykk1rEPcwqhKPmv2DYtQu9AtC4b6%2FP9eKv8DCH0QABoMNjM3NDIzMTgzODA1IgyNJCz9TkV1ftkFfeMq3APjTmSvyY86NWYoXukqsXKZhqudBrVj%2Bhel6cBbMj8bG10j%2FvSXRH9ku4PPDGroy%2B6Qgz7a6Wz5WcXUfNVNzoZVfClVV%2F0kw5As9PZ0JCWreWOJvWoD7mPt5P9klOpQtOtSO%2FMEV22Am%2FuYs3P%2BefFS8bhf0xuBpRB0GptbtUMwkx3SeSM08bCDhKb04np8Xm%2BhbIQFTdA13LksBD2pX5jOMrc2mRCf4ZMBgzB%2FsiV4dB8s6f0FBr85uoPJO15iGQFruRuFOjaiN64gw1lb1l6QdxZb8ctN4FBrvVFCeC5Q9swainQ5RPJ9WRjs6O5gOBJ0tjD3%2B4YbVWFeDwZIanDytl1ppwqHUjxFgpa8XaEySFXJbkqtXDLAsEe3s5m9saNzY1UOh2AB%2BBaPSHOWsZXs2CFgIvX8dXQrU9Mw%2FVz5yVmOUFP4Df1cK8WIoEGa2fjUzBGd%2FZj5fP%2FCcPtrZYXXldeud4Z%2FIGpwPrl5Gu8ZzsSe8Ns7s4d6Hva6vWEV8R%2BSvFBD7rTvPbRfXqJlN1a5KC%2BH9fRu91EuV59GA1LECVKJtGQIgMkwwKjjfChFHM6tFwmVSNxIjO4a8%2BzaQVTH3iHZgAugAhRYIwtD8nS5G4i9%2BmuwPtvqIyOVATDDqorKBjqkAR5WWJy9BdZkjsjXO6dC3ad3AKjOrkyiOa6jA5fy%2BvFmoSxNwlbBrIe8mDLExyowOJIqNR1OINryCYv6yiXQkXB1rsO5nEUawC%2F6aES9zZ1yMGzLWw3dmqwmDx%2FLfDa2XKE3eZHIFCsCcJ7u0SlKoUzJcTf6drWzT58jsqZXeUlR%2B%2FzoCbp6pzNKLLQl00QjbPY%2FDD68Eok3XpqdqGvJAodiFsFc&X-Amz-Signature=4ec2d66757e273a831fc149f5292561607e6da3b7d3db0bb6ea491d9b159804f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

