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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGIWT7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC32ntk%2Bcr0ooRumduQWWoPHhNuW8Y8zD91XXY5lcpurgIhAO1wTUnWc0%2FphxN4E5m9vmVCrlXhI0eiyV9aemAR8Xl8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzKD6LxnFNhyb5cHWsq3AMkIkKQAwDTNBU3Q7yjg%2Fl%2BXTt7QrNNjRUoExqPEJPvtvzWyhQuxNByO6bLkOCPrQdMb74cI0pOyiQ1E2%2BvZa5anlD4LbbqAvAISYZ%2BhE7lS0rBE45bhIWsUf65XmQp9xUzK%2F1mv9h6zOCgQg1ca9BkmXORvzJUxC5UjCth7oUDEAGOmSiJdWa0AVpxTNILHohU6T%2BbAqtfXRUk9LZeVcjPmKh1tC0OvsLaKyF7UN%2BjbJZV1E%2Be0tWyDGyBf9sapwJIdcq6DrXQ8CApjWO3%2BK0mNadHF%2FuJ7C14ie%2F6nW5X51J6xQeHIiW%2FNgrM6yDJqZJdI5pdyxzCdzSJKLnkV%2BDMawK2iHyOrrUg%2FJ7alnAunmFR8uAt16xFyA%2BfcnimR8Ivl%2BK2QS%2BoW9RCz10nSgup4qSWtjtFN6vF3ZGaKXz4OJ6wRlAHMoY26mhQKquXt3mowH1Ehs8tjxFZndnjr5Vy23HuL6S2iePLbSoLDFij8z58X2WNPnj2dRMZL1vmyYJ2lZaCveClJ%2F3E1t96NvxF0B9Rq%2B6JfA%2FonYqWOXYx8uNG%2F0duFuflXvs2rXnAl79OKehQnd9f9T32AJsNTcU7mIJvQe7jPoGbT0Xf854F%2BTkmhkD6uA5rMuQp7jC4zojKBjqkARPUIp9vX6Fy7r5Hi%2BLhUCibW5ejYG1%2BpZk6Bm%2Fnh6KTt01nebN0HVNWL7AtP74BnYQKYcDPobzbpPlIww4VSVAgzx6jIzXg%2FOk1bGYNlFVmilMeVQH3FpC22W0HK35tZOf6RkymlbypTnhtJ4nOsEzXysnXbp6C0KRhysA8OqI3EIgC0ZKswTIU6C2VShVF0H7rEBN8AGmfIAPpcEhvz6gmj5UP&X-Amz-Signature=b4e3eb62aafb085595e827872044e382d3a4d68770bbacdb1ff5a2f6fb45647a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OGIWT7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC32ntk%2Bcr0ooRumduQWWoPHhNuW8Y8zD91XXY5lcpurgIhAO1wTUnWc0%2FphxN4E5m9vmVCrlXhI0eiyV9aemAR8Xl8Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzKD6LxnFNhyb5cHWsq3AMkIkKQAwDTNBU3Q7yjg%2Fl%2BXTt7QrNNjRUoExqPEJPvtvzWyhQuxNByO6bLkOCPrQdMb74cI0pOyiQ1E2%2BvZa5anlD4LbbqAvAISYZ%2BhE7lS0rBE45bhIWsUf65XmQp9xUzK%2F1mv9h6zOCgQg1ca9BkmXORvzJUxC5UjCth7oUDEAGOmSiJdWa0AVpxTNILHohU6T%2BbAqtfXRUk9LZeVcjPmKh1tC0OvsLaKyF7UN%2BjbJZV1E%2Be0tWyDGyBf9sapwJIdcq6DrXQ8CApjWO3%2BK0mNadHF%2FuJ7C14ie%2F6nW5X51J6xQeHIiW%2FNgrM6yDJqZJdI5pdyxzCdzSJKLnkV%2BDMawK2iHyOrrUg%2FJ7alnAunmFR8uAt16xFyA%2BfcnimR8Ivl%2BK2QS%2BoW9RCz10nSgup4qSWtjtFN6vF3ZGaKXz4OJ6wRlAHMoY26mhQKquXt3mowH1Ehs8tjxFZndnjr5Vy23HuL6S2iePLbSoLDFij8z58X2WNPnj2dRMZL1vmyYJ2lZaCveClJ%2F3E1t96NvxF0B9Rq%2B6JfA%2FonYqWOXYx8uNG%2F0duFuflXvs2rXnAl79OKehQnd9f9T32AJsNTcU7mIJvQe7jPoGbT0Xf854F%2BTkmhkD6uA5rMuQp7jC4zojKBjqkARPUIp9vX6Fy7r5Hi%2BLhUCibW5ejYG1%2BpZk6Bm%2Fnh6KTt01nebN0HVNWL7AtP74BnYQKYcDPobzbpPlIww4VSVAgzx6jIzXg%2FOk1bGYNlFVmilMeVQH3FpC22W0HK35tZOf6RkymlbypTnhtJ4nOsEzXysnXbp6C0KRhysA8OqI3EIgC0ZKswTIU6C2VShVF0H7rEBN8AGmfIAPpcEhvz6gmj5UP&X-Amz-Signature=a7d1f8c51b7d0c394493f6de1e689e88251a1ea9b19cd40ddc8fb08ccf10c66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

