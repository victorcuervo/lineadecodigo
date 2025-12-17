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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTI222OF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabMZ1qaOrtqLZR2ehn29ZvYdh33Lctjn643lSfKbHoAIhAOg5%2Bc3GUhx6b9pys47y8Z2akUcJSY6F6c6YrsTCwnxfKv8DCHgQABoMNjM3NDIzMTgzODA1IgwqQAChpGloYUKYA8Qq3AO6WhFZzSI1d%2BjC5kpuWJVaudyotiBH2gGF4iSlY0uD1u9r2BLwjwRjZMNSpV8hsUEpmuSGyxbzwH5l7n%2FGQjEcZJM85ACeJIk9xDnW1AtFp9GAyVCEYGid0lhV9aOPKNrsKsakkalhJYfcMiui94f00BWHrDCdP1Vls9%2BniO2YVbWypRrmKEXSV1LB95tUxhaqJMIFrbWK8SNl7OdAQoVwlTk%2F51r%2FnSiBT7AKvOdiyGpG9Yji69y2ECxjXVTipqyf1qNlMwksjkxlWb8j1pNoM0RVME5jqS3HiTwU0cE38ATNGReikVBD8DCmW39IfDV89pIqghKvpdOVWex8Gvxys7Yl4vVzeqQOkIQ4ksU8WCy0jeVWHTS8WU0UBj6xtnkwguFaLuoDFtr6LfYtX2kZ%2B4%2FTQ6HhrCO55yqTE5jlbL%2BxJz79VHAO%2B3jv9Tj0OV1tfoIbTKv7es%2FrcIWHFf9s2MUWXFWqiT3dpEErajnexhoD7lfjb%2BLmG5OvjpoMRb8jDlQ8sOxPVvKXK4sZCHHWUX9lUuyw3QLTfjAuYQ6IwMzKlEzXp9LfX5AlMlM0RZT7vjO8ZG%2BCvCBL8ayOmYra5voaG4jllo887BEPebhZpWGpZHwISeMm2YJpizD1nYnKBjqkAeP0ckK1pi3YNcLBN95LyOtixx4TOesanAI%2BO9mfhv5OvLkQk6UPTbh8VM2R5e2MrJG9i0d9cIzAS853kYUaKU4A46Hf3rBxKKHpFYnQx66rx2Ox9MZ0feCsPfNs6itbZV55ZXYLxYnP9N9R02RtrHcKNP%2F8%2BE6txnwuV%2BkOPhCac4aOsHxP27%2Bfklx7QncerfwBG4pEDXU%2Bc8TWPaVJjqjj7ab0&X-Amz-Signature=b787bc780620da78af3b189899e8c4aa006ee4e6b7b51d2164ff375c3d6b46b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTI222OF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabMZ1qaOrtqLZR2ehn29ZvYdh33Lctjn643lSfKbHoAIhAOg5%2Bc3GUhx6b9pys47y8Z2akUcJSY6F6c6YrsTCwnxfKv8DCHgQABoMNjM3NDIzMTgzODA1IgwqQAChpGloYUKYA8Qq3AO6WhFZzSI1d%2BjC5kpuWJVaudyotiBH2gGF4iSlY0uD1u9r2BLwjwRjZMNSpV8hsUEpmuSGyxbzwH5l7n%2FGQjEcZJM85ACeJIk9xDnW1AtFp9GAyVCEYGid0lhV9aOPKNrsKsakkalhJYfcMiui94f00BWHrDCdP1Vls9%2BniO2YVbWypRrmKEXSV1LB95tUxhaqJMIFrbWK8SNl7OdAQoVwlTk%2F51r%2FnSiBT7AKvOdiyGpG9Yji69y2ECxjXVTipqyf1qNlMwksjkxlWb8j1pNoM0RVME5jqS3HiTwU0cE38ATNGReikVBD8DCmW39IfDV89pIqghKvpdOVWex8Gvxys7Yl4vVzeqQOkIQ4ksU8WCy0jeVWHTS8WU0UBj6xtnkwguFaLuoDFtr6LfYtX2kZ%2B4%2FTQ6HhrCO55yqTE5jlbL%2BxJz79VHAO%2B3jv9Tj0OV1tfoIbTKv7es%2FrcIWHFf9s2MUWXFWqiT3dpEErajnexhoD7lfjb%2BLmG5OvjpoMRb8jDlQ8sOxPVvKXK4sZCHHWUX9lUuyw3QLTfjAuYQ6IwMzKlEzXp9LfX5AlMlM0RZT7vjO8ZG%2BCvCBL8ayOmYra5voaG4jllo887BEPebhZpWGpZHwISeMm2YJpizD1nYnKBjqkAeP0ckK1pi3YNcLBN95LyOtixx4TOesanAI%2BO9mfhv5OvLkQk6UPTbh8VM2R5e2MrJG9i0d9cIzAS853kYUaKU4A46Hf3rBxKKHpFYnQx66rx2Ox9MZ0feCsPfNs6itbZV55ZXYLxYnP9N9R02RtrHcKNP%2F8%2BE6txnwuV%2BkOPhCac4aOsHxP27%2Bfklx7QncerfwBG4pEDXU%2Bc8TWPaVJjqjj7ab0&X-Amz-Signature=48ee2324ccc7b0bc3ca6d894445398fed911b065c3b0081febc1cecc7462914a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

