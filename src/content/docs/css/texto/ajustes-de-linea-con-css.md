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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FPV6JO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBH0JNncUlx55hLXLBjbu4Z9DsUis8deInK4nomuZAGAiBl77HVQE5ASoZi%2BXihFAng6qiL3qihMnB8XZhRGBOTnyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIQCWfyoIPu4jgLdoKtwDuk4cD785lylk9Wm4qDCmRr15SfRplsCX5hMzrhuAl2SNPb6T4hyRdJYeL5QsJpJpKbRSLy8O5dFPVsxfp%2B6it6WCWc%2ByDXuzxaShCnKIbG4mgokChGcBkPwjuWNph6swlJhY0t7AFzoBnXvVDt19Yiq5Mxngal0PlpOaTOUgHwdjkVDMSyN2gvhpGGcK6%2FwBNncMA%2FIKlyc3EdsIMqNxdmIg1fWPk86Q9hPhkmWbpEAMM3e3J1UGnMXFX9uNMizaCZr9vhAsJH%2F7iIDSeuTfm4H21wzEzm%2Fvaq%2FZwJpuw1XWbGheTKFZh%2F%2FmVVcb3PiuFIXmPi%2Fe%2BNv82qKO60RiffTnsX0GdC7HU5qLYV%2BPHdPyYCmm%2BTe4t1lJHbHMULRm3zZFQ2jldcynRkar9QunNPhwEorNr%2Fu4SjUCFAdfMt%2FzcFKstGTUN2mWdHcFY0M3IG0DrsRPMVHi%2F%2BO%2Bp%2FU2Du5RseJZpW9BHy3sVHCgbY4s8seiW3NagDXjnKNMfjBzzZaGIQSDA3qPKaYy7oiPurKHPJ8EFyXZQeaYzXQe2itNCyI1IE5bHst%2BQ5U2arCiYJttSh3t45G%2FRartdpnd1OLJuxrTv3ebshjZSnpI0wt5s6oiqiu1lJezPYkwiLeJygY6pgF3ZXOJcA9%2Bnm%2F1sai80QLyIRHdlTqyzm65vAhG%2BXHjgdU7Ge6gTUKxIKboBjnIUrFiDqvvMqZpnEBHeXaflEsW7vRzxmbBse3zvxXtCUp3%2FFLc9OY77HHrxoXksDKkF07HGCOxUE0jyeWv1HHkgOeuehwPmP574fkvUK%2BMRkSsBxxa8vEC7Fhrz8Y0bD1YnLfQPb9EMMyIxttnpTb0xCWsG2bGsFKS&X-Amz-Signature=b69a4ea461f15b7fd99d50596c7bf13a3c20f1e6a47498802cab776f5eee8b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FPV6JO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBH0JNncUlx55hLXLBjbu4Z9DsUis8deInK4nomuZAGAiBl77HVQE5ASoZi%2BXihFAng6qiL3qihMnB8XZhRGBOTnyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIQCWfyoIPu4jgLdoKtwDuk4cD785lylk9Wm4qDCmRr15SfRplsCX5hMzrhuAl2SNPb6T4hyRdJYeL5QsJpJpKbRSLy8O5dFPVsxfp%2B6it6WCWc%2ByDXuzxaShCnKIbG4mgokChGcBkPwjuWNph6swlJhY0t7AFzoBnXvVDt19Yiq5Mxngal0PlpOaTOUgHwdjkVDMSyN2gvhpGGcK6%2FwBNncMA%2FIKlyc3EdsIMqNxdmIg1fWPk86Q9hPhkmWbpEAMM3e3J1UGnMXFX9uNMizaCZr9vhAsJH%2F7iIDSeuTfm4H21wzEzm%2Fvaq%2FZwJpuw1XWbGheTKFZh%2F%2FmVVcb3PiuFIXmPi%2Fe%2BNv82qKO60RiffTnsX0GdC7HU5qLYV%2BPHdPyYCmm%2BTe4t1lJHbHMULRm3zZFQ2jldcynRkar9QunNPhwEorNr%2Fu4SjUCFAdfMt%2FzcFKstGTUN2mWdHcFY0M3IG0DrsRPMVHi%2F%2BO%2Bp%2FU2Du5RseJZpW9BHy3sVHCgbY4s8seiW3NagDXjnKNMfjBzzZaGIQSDA3qPKaYy7oiPurKHPJ8EFyXZQeaYzXQe2itNCyI1IE5bHst%2BQ5U2arCiYJttSh3t45G%2FRartdpnd1OLJuxrTv3ebshjZSnpI0wt5s6oiqiu1lJezPYkwiLeJygY6pgF3ZXOJcA9%2Bnm%2F1sai80QLyIRHdlTqyzm65vAhG%2BXHjgdU7Ge6gTUKxIKboBjnIUrFiDqvvMqZpnEBHeXaflEsW7vRzxmbBse3zvxXtCUp3%2FFLc9OY77HHrxoXksDKkF07HGCOxUE0jyeWv1HHkgOeuehwPmP574fkvUK%2BMRkSsBxxa8vEC7Fhrz8Y0bD1YnLfQPb9EMMyIxttnpTb0xCWsG2bGsFKS&X-Amz-Signature=dd216f81dbfb163f654b3a602d3c6fa91063d32ef97ec645fcabed6c76279e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

