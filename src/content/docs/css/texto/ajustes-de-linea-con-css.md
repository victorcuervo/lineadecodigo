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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOEA5UDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMiugJv%2B0U7FoGj5vPb5l8kA1%2Bt8MCB4PfOp7BPp%2FcQIhALq4tk9jDJRbCiMcHnHMN%2Fk%2BC3LaGKNSonWNePIv067uKv8DCH0QABoMNjM3NDIzMTgzODA1IgwKzOlxPqShn%2Bpk38Qq3ANnLtC%2B5dTJTBPpprf1uP3FhRk83vd4rR%2FGXS44erd%2Fy8Z%2Ff9wiieOizSBYg%2Fa9sXuiCbEeTg%2F6%2BhBXH%2BGpfCLvgVqTPHPDCwwalumlMDHPhFDx0kGwTVLLhJrS5jE22p8GCkxTldGwHeGLC0vGjWGdLjIPHUZlgiemqIMDTqxvzvuPFUy8b7aRMQoJUKLyPDCQ8ZrPuY9x9IZl52HrDXG1%2FRh19y6ovW6%2BZ6e8dlEyS0k8lSpc2vsU4NUaXlfXit%2BAvr8Rov7k2At5RN5r6YmJdzEHDPHWDpEh7DiC32WlUZhwc2gAWMo%2BHcsblQDk0NS%2FWDeL1CwmzkwMU%2BKsS8j4I5Efm5%2FPuVMG2sLYI%2BhUFmtxiSckDjROg1G24DMd7aaDU8ttQCNPR5Jh7PljSe2ib3flpZ%2FQHXJK4z8ZHpK%2FdWp4ImWjhlewBwTDz7zNzV22jxR55riMcgKeNqu3O8epL6mItReNjSH0z%2BnWfgPHoEltp0K58IMDPUX0egSjCmlreuw7fmAt%2B%2FI%2F6hajx6daf72Aa7P7qx5KZVepdot6swk%2FPgd%2FWhhvmKunBKpPh6AdPez1eOaBKNRNERpayOWAQVYaanEpPJ0rFgBXYl%2Fogq%2FCZyatlbM%2FO0SC5jD%2FqorKBjqkAS%2FWCst8UTRcXbSTfW80e49tdd7FEFU3xKd2bfFH8%2B7xUqoufoUxKc3ym3m6SATr0u1u095IRObS9zjUhIeps%2B0SU5%2FnemDz6LntXPLdNKIIzQCDV6VZidfL19kXDw1L9qkQ0TQjIOU%2BuRQhvTknOeCUERDXorzEjwvvSy3k8X0Gho%2BNuRcnhhE5jXesJiiF8fExq2ifKGNxhDyw8WKuJ6uG9bFb&X-Amz-Signature=d6ebcc74a80ca16b9f8aa3a063ba0f21b1b563b591a5619b962fd5284893296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOEA5UDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMiugJv%2B0U7FoGj5vPb5l8kA1%2Bt8MCB4PfOp7BPp%2FcQIhALq4tk9jDJRbCiMcHnHMN%2Fk%2BC3LaGKNSonWNePIv067uKv8DCH0QABoMNjM3NDIzMTgzODA1IgwKzOlxPqShn%2Bpk38Qq3ANnLtC%2B5dTJTBPpprf1uP3FhRk83vd4rR%2FGXS44erd%2Fy8Z%2Ff9wiieOizSBYg%2Fa9sXuiCbEeTg%2F6%2BhBXH%2BGpfCLvgVqTPHPDCwwalumlMDHPhFDx0kGwTVLLhJrS5jE22p8GCkxTldGwHeGLC0vGjWGdLjIPHUZlgiemqIMDTqxvzvuPFUy8b7aRMQoJUKLyPDCQ8ZrPuY9x9IZl52HrDXG1%2FRh19y6ovW6%2BZ6e8dlEyS0k8lSpc2vsU4NUaXlfXit%2BAvr8Rov7k2At5RN5r6YmJdzEHDPHWDpEh7DiC32WlUZhwc2gAWMo%2BHcsblQDk0NS%2FWDeL1CwmzkwMU%2BKsS8j4I5Efm5%2FPuVMG2sLYI%2BhUFmtxiSckDjROg1G24DMd7aaDU8ttQCNPR5Jh7PljSe2ib3flpZ%2FQHXJK4z8ZHpK%2FdWp4ImWjhlewBwTDz7zNzV22jxR55riMcgKeNqu3O8epL6mItReNjSH0z%2BnWfgPHoEltp0K58IMDPUX0egSjCmlreuw7fmAt%2B%2FI%2F6hajx6daf72Aa7P7qx5KZVepdot6swk%2FPgd%2FWhhvmKunBKpPh6AdPez1eOaBKNRNERpayOWAQVYaanEpPJ0rFgBXYl%2Fogq%2FCZyatlbM%2FO0SC5jD%2FqorKBjqkAS%2FWCst8UTRcXbSTfW80e49tdd7FEFU3xKd2bfFH8%2B7xUqoufoUxKc3ym3m6SATr0u1u095IRObS9zjUhIeps%2B0SU5%2FnemDz6LntXPLdNKIIzQCDV6VZidfL19kXDw1L9qkQ0TQjIOU%2BuRQhvTknOeCUERDXorzEjwvvSy3k8X0Gho%2BNuRcnhhE5jXesJiiF8fExq2ifKGNxhDyw8WKuJ6uG9bFb&X-Amz-Signature=d4a6c8358619fe28490cc327a6a3d6f142317d9a275e1e793e62f16d1096f59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

