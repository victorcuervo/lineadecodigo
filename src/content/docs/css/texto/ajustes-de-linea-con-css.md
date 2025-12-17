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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UABDUJJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1bfKalzIIsK73RsgzCrRBOgGOTRNMOnl%2B%2FW2AGDM5CwIgQjz2DFayfbbk130r7UO9ilZRlPymWJwl0zfdT4l2roUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFSABquSkwTnBSqNCrcA%2FzHvyxpVS6qmpasYwC2KbPIUGyw4pS01D45muhxdbhtmlEhAt%2Bc5Ez%2FQIrPGbeJ1D341dFuYYSEHEjCTpBGRVQnoWuuek%2B3nLSufWimKzH8VHDdwXf%2Fq8bOM5MLoj%2B9T6H89iAXBYbi1AMymm3KX%2FoJOTib683kx1MQdAMU8hO08VcaVyOWppK7NMwwL26bmsmGzfz%2BFxvxvoFsSw4Lcy%2FldQ1GGGa%2FcMtImgddPlfPvVNxaaMfSUxwPuigmQClPCEhc%2BuQ85xBokvxQNzRDbCPK3gvzyo6PDIMNlEa2%2FyNysagpCamJXSE9jpsLhWEE6W9AG%2FjkjBcizI%2BrKPzLZfLaAmzlXGdLm%2FToJWDAJb7b1CdyQRNMmyC87G45f6N3ZRxN78MWJmGIJf9bFRtQ4igkNyBC%2Fy4B7h6%2FBhEK0qxHu%2Fe3jgKHSYEq4qpotAs%2FoSHF2XAWAFVYNmHp3p8abQaQzpSLDqDXeCOM71BtAHQ1YGg8Py6Mo9fawyTOv0YyVj80ogZNONZGk%2FaPPapv6RFUjbfTShAJNLiGKwHxEERi5VjAb77lVa4Oxh6OWgR5WY1xxnSY6VoNTuG9F5BGaeqbwOsVGNjOO7QBuZDfnMgN5%2FY2s%2BqkXR9Y5YkMLGLjMoGOqUB1uFnwBUf9T5ZHuy%2FptT7btxe1bv1LulhlQDiJcb6lKc%2FutFc09WOwPTWdQ2A%2Fy3DWdQPN54vM9sRWSRfG1LVfsRovKBB6xqhLYZcuDf3ed3aBt2yztQC8ys1AnSYAUf9VaRHEGQuZGVCRGP0642HKGCMPxiFRjIcB0tIAWSRsCNNQjWgtdCKhse0zatVBvgifPyFXbtRdB2mp57Lnh1%2Fu5rfVk5Y&X-Amz-Signature=54544f05bcdc664198d1fcbdf892745a896a86bb2ec153adfb7f4ed255f2da4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UABDUJJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1bfKalzIIsK73RsgzCrRBOgGOTRNMOnl%2B%2FW2AGDM5CwIgQjz2DFayfbbk130r7UO9ilZRlPymWJwl0zfdT4l2roUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFSABquSkwTnBSqNCrcA%2FzHvyxpVS6qmpasYwC2KbPIUGyw4pS01D45muhxdbhtmlEhAt%2Bc5Ez%2FQIrPGbeJ1D341dFuYYSEHEjCTpBGRVQnoWuuek%2B3nLSufWimKzH8VHDdwXf%2Fq8bOM5MLoj%2B9T6H89iAXBYbi1AMymm3KX%2FoJOTib683kx1MQdAMU8hO08VcaVyOWppK7NMwwL26bmsmGzfz%2BFxvxvoFsSw4Lcy%2FldQ1GGGa%2FcMtImgddPlfPvVNxaaMfSUxwPuigmQClPCEhc%2BuQ85xBokvxQNzRDbCPK3gvzyo6PDIMNlEa2%2FyNysagpCamJXSE9jpsLhWEE6W9AG%2FjkjBcizI%2BrKPzLZfLaAmzlXGdLm%2FToJWDAJb7b1CdyQRNMmyC87G45f6N3ZRxN78MWJmGIJf9bFRtQ4igkNyBC%2Fy4B7h6%2FBhEK0qxHu%2Fe3jgKHSYEq4qpotAs%2FoSHF2XAWAFVYNmHp3p8abQaQzpSLDqDXeCOM71BtAHQ1YGg8Py6Mo9fawyTOv0YyVj80ogZNONZGk%2FaPPapv6RFUjbfTShAJNLiGKwHxEERi5VjAb77lVa4Oxh6OWgR5WY1xxnSY6VoNTuG9F5BGaeqbwOsVGNjOO7QBuZDfnMgN5%2FY2s%2BqkXR9Y5YkMLGLjMoGOqUB1uFnwBUf9T5ZHuy%2FptT7btxe1bv1LulhlQDiJcb6lKc%2FutFc09WOwPTWdQ2A%2Fy3DWdQPN54vM9sRWSRfG1LVfsRovKBB6xqhLYZcuDf3ed3aBt2yztQC8ys1AnSYAUf9VaRHEGQuZGVCRGP0642HKGCMPxiFRjIcB0tIAWSRsCNNQjWgtdCKhse0zatVBvgifPyFXbtRdB2mp57Lnh1%2Fu5rfVk5Y&X-Amz-Signature=c96fb27961a3d7b9b9a77d46e34730e41aca061d428682466540b243a3d5518d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

