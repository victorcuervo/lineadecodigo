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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXDATMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMYeBMQvTtu33aFwVWWiVPEJ49kHhmxxFv%2BpW3nXonGAiEA58%2Fw4rQcU0TJpcCEfXTz3rKYOOoqfHCu2n7UQTG39OkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzT3YrF6TUGBP3ZryrcA5HFNUkYHRNf9qreL70%2Bn1%2BpzxcE068G3n5lBjKr430JvdgNwSskSCU9yOD%2BaDoJTQoyUZUMNk%2Fluik%2FWYe4PF6cjRguu4EuGOtWn1Lzjb81cQOIOF3CKIzkPulOfiaSnNAqQaKALhRLTOt9bko2S4IixFJcjzCfco1ZJhoX3hnnCVfNEIjLdFo%2BCI%2BATKALqlJ6yegBFKnPOGSQTq7JYIaEkGv2%2BmpcZR1RXVhxYY%2FNFFJvyeo44KZ5%2F3ddj7qxhtcd%2BxOlbNQdQANxMZu%2F3wKKx%2BS7eYuYJRbxSMMuO%2BcuPA%2B4LYPuwlRveEoWoqlDngrVvYAiAegkc3OjkQvumWBFB%2BOtBCL0JDx0AoCHkbzuOWKwGL7m2RbOcIQcnzWvaqqge8f9fSNX4Kb0RmZhQ%2BJpAbOyoqQphjxyupfNyjT35f%2Fkizm7zV%2B9ZXXETkDwAUu%2Bjbfbw7FhYEOzKM4VWm6MCRkLBpELmviQAnkekvYWKqApFh9k6afKx5nnuVh6DEkQv4eLa4hNgn9ScNrMjw9RSf1U1eebFazq759usS%2BKUkUrqQ0%2FOHIPqgsCUcTOlLcT9dE8GAj88hIXKsgzvw5uE6qojaQtYtxtkD82MLQ3UzsliWRbHOaI4IOOMPWtjMoGOqUBLV5V7tMImSO8kMTRDVub0ItJQumTg%2BkeLslqO%2Bc4zYSkqYAvlRhRXl0bAGX9gRRAjpUho2bsnjp0M0i18G%2FFcHuY%2FjaqFxc39eB%2BVbwJVF%2FRmFJG0mP6kSGIaTWFcuP2Ybt4ghd31HIOemgWaMeuuuDNh3tzHaiAB%2B4OnXuGOUMonb2dV7p1gCRv%2Fy2KrKUt%2BSFihFOYgTNy71lvnqvpeszcGDy7&X-Amz-Signature=1d3da2a266c16e64abd9fd91793ad9b516aebdf84aab64fc2d82365a9afadd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXDATMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMYeBMQvTtu33aFwVWWiVPEJ49kHhmxxFv%2BpW3nXonGAiEA58%2Fw4rQcU0TJpcCEfXTz3rKYOOoqfHCu2n7UQTG39OkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzT3YrF6TUGBP3ZryrcA5HFNUkYHRNf9qreL70%2Bn1%2BpzxcE068G3n5lBjKr430JvdgNwSskSCU9yOD%2BaDoJTQoyUZUMNk%2Fluik%2FWYe4PF6cjRguu4EuGOtWn1Lzjb81cQOIOF3CKIzkPulOfiaSnNAqQaKALhRLTOt9bko2S4IixFJcjzCfco1ZJhoX3hnnCVfNEIjLdFo%2BCI%2BATKALqlJ6yegBFKnPOGSQTq7JYIaEkGv2%2BmpcZR1RXVhxYY%2FNFFJvyeo44KZ5%2F3ddj7qxhtcd%2BxOlbNQdQANxMZu%2F3wKKx%2BS7eYuYJRbxSMMuO%2BcuPA%2B4LYPuwlRveEoWoqlDngrVvYAiAegkc3OjkQvumWBFB%2BOtBCL0JDx0AoCHkbzuOWKwGL7m2RbOcIQcnzWvaqqge8f9fSNX4Kb0RmZhQ%2BJpAbOyoqQphjxyupfNyjT35f%2Fkizm7zV%2B9ZXXETkDwAUu%2Bjbfbw7FhYEOzKM4VWm6MCRkLBpELmviQAnkekvYWKqApFh9k6afKx5nnuVh6DEkQv4eLa4hNgn9ScNrMjw9RSf1U1eebFazq759usS%2BKUkUrqQ0%2FOHIPqgsCUcTOlLcT9dE8GAj88hIXKsgzvw5uE6qojaQtYtxtkD82MLQ3UzsliWRbHOaI4IOOMPWtjMoGOqUBLV5V7tMImSO8kMTRDVub0ItJQumTg%2BkeLslqO%2Bc4zYSkqYAvlRhRXl0bAGX9gRRAjpUho2bsnjp0M0i18G%2FFcHuY%2FjaqFxc39eB%2BVbwJVF%2FRmFJG0mP6kSGIaTWFcuP2Ybt4ghd31HIOemgWaMeuuuDNh3tzHaiAB%2B4OnXuGOUMonb2dV7p1gCRv%2Fy2KrKUt%2BSFihFOYgTNy71lvnqvpeszcGDy7&X-Amz-Signature=37b33999a3a198b058168275173d740d05b447d22593aa81a2afca78328a7a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

