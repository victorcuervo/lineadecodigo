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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMXBB6LL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BQOGq8hmw3QQ0RKrlR%2BDuvUAdG54xlsGHjH%2F%2FUGbLGgIhAK3xNUT0zghR0OdA1r47goh%2FlE7XUJOp4Zic8NPEmXZZKv8DCHQQABoMNjM3NDIzMTgzODA1IgykO7EDnwRs5XUuFIgq3AMjOgNxcS%2Fpr%2BDQrgGyvuYO6%2BroWgvKO%2BI1eECN41DVyA97KyLSkxk43mfNARDoCslpN80%2BCwvRRFkTvTEqPsRzQOwOSob6FHxvEAJIdRbrB%2BQ7yET2kAXUgSTQux66m5CppxXCYQj%2FKGbidD0peO3YkKS5dvMH%2FZ15qV2nsieYZhzoi%2F1oOF947I15tSchhgUjrQQv7gvwoglzzHBIj5YNsKFux05dHyA%2BVu4Ye4PFMiapSxx2XVjXrXgxk1dPZdEdyRiZvfQKbpWhXJXWRgsjxmzidhm3NOmUoGq1aiPSVEt9rD%2BNzMJM7JiN3PnRbScOeHK8sAEQqDsBdzkYqcuT5a%2BA5Qqh90WWhikVFrrxa%2FfY%2BMTB4s6fmYiHr1%2BSP9XcJyBGryozs2fCO8Ae%2FBdwWQnzDJ4L9soCpbeDmbDAulu5lU8%2BWFKpIs248DFx0ZzPFJaX%2B3CWsrtjipC4Gkm%2FI2NCfLJ8hYZGDjNtI93A13T3%2BzfqXZc0j%2Fo6jB6r5m53ObtDot%2FIOO3%2F3tHdHS6rrrzjjER1ap6FtPQ8r60l81c5MlUd%2B1G32RIVDh2bTvKvHhvoAN0TwPjSS4qW6IL%2FYfUcxBdX0%2Bl2VxNwkYkXNYbb%2Bc%2BozfoaM6OD3DDBsYjKBjqkAeTGG5vLVoAEz%2FuUlgFIEcSHPJ8VYfIZTo6eht%2BpdhiUwOp1Xx8RVPjs3DXUcjilYHgPrSmHIydiH6XZalN645H7yFAgx%2B%2FHM7xgnVnb%2FFNxsIgxxRhnho5egsjSVacDxt2TDEgMdou57edzn1umv8A%2B%2BWfeJapqhCKIj07UFaoqwZl7Gt%2BFcGksImniC0tsr2NpZfmhSQIegr2vQxvsmj8%2FGCd%2F&X-Amz-Signature=5ce0e2b5c2b0721e8d24210c512d5b2cfce59aad4fe34ebb38d061c4bffe9830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMXBB6LL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BQOGq8hmw3QQ0RKrlR%2BDuvUAdG54xlsGHjH%2F%2FUGbLGgIhAK3xNUT0zghR0OdA1r47goh%2FlE7XUJOp4Zic8NPEmXZZKv8DCHQQABoMNjM3NDIzMTgzODA1IgykO7EDnwRs5XUuFIgq3AMjOgNxcS%2Fpr%2BDQrgGyvuYO6%2BroWgvKO%2BI1eECN41DVyA97KyLSkxk43mfNARDoCslpN80%2BCwvRRFkTvTEqPsRzQOwOSob6FHxvEAJIdRbrB%2BQ7yET2kAXUgSTQux66m5CppxXCYQj%2FKGbidD0peO3YkKS5dvMH%2FZ15qV2nsieYZhzoi%2F1oOF947I15tSchhgUjrQQv7gvwoglzzHBIj5YNsKFux05dHyA%2BVu4Ye4PFMiapSxx2XVjXrXgxk1dPZdEdyRiZvfQKbpWhXJXWRgsjxmzidhm3NOmUoGq1aiPSVEt9rD%2BNzMJM7JiN3PnRbScOeHK8sAEQqDsBdzkYqcuT5a%2BA5Qqh90WWhikVFrrxa%2FfY%2BMTB4s6fmYiHr1%2BSP9XcJyBGryozs2fCO8Ae%2FBdwWQnzDJ4L9soCpbeDmbDAulu5lU8%2BWFKpIs248DFx0ZzPFJaX%2B3CWsrtjipC4Gkm%2FI2NCfLJ8hYZGDjNtI93A13T3%2BzfqXZc0j%2Fo6jB6r5m53ObtDot%2FIOO3%2F3tHdHS6rrrzjjER1ap6FtPQ8r60l81c5MlUd%2B1G32RIVDh2bTvKvHhvoAN0TwPjSS4qW6IL%2FYfUcxBdX0%2Bl2VxNwkYkXNYbb%2Bc%2BozfoaM6OD3DDBsYjKBjqkAeTGG5vLVoAEz%2FuUlgFIEcSHPJ8VYfIZTo6eht%2BpdhiUwOp1Xx8RVPjs3DXUcjilYHgPrSmHIydiH6XZalN645H7yFAgx%2B%2FHM7xgnVnb%2FFNxsIgxxRhnho5egsjSVacDxt2TDEgMdou57edzn1umv8A%2B%2BWfeJapqhCKIj07UFaoqwZl7Gt%2BFcGksImniC0tsr2NpZfmhSQIegr2vQxvsmj8%2FGCd%2F&X-Amz-Signature=f3c76058e11fcf67e5bac2fa19c8e942f10080f2a72fb94825d071bbc7c4618a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

