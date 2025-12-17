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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEOEZGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HcyhUjGV3n%2BBvttEd6p3AxiVg4AVTuNSJu7ksjgxJQIhAOZbA8FvLJ0vI77zSYWU8%2FDWnL4ZnB5aPwRfMlHHwnq9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FsBIRPlHDwggntLkq3ANKaBhvMXAkC8wbjw%2BodFBAEYkGfwQ5zZDwlwDfcC%2BF0LpYgkOWcgCTJmmX8BbhO0C2P7XtQlU33il1%2FYhZoUrtbUy5jkpl%2FRYq2zmEomiHv3z%2Bf%2Bt6STIJQHBzm5LV7YMnsGuLab62ww%2BiZlDAbdt3ho5yN03eTkdtc5M2GelIDYrD559U1V2S0s8bh0jfvt2zvOTtOjJK0Zxt2liIi8oPtZ3fIjKR3%2FVQtal238zUhs%2FGWJDfTOykov7rDFv7ib3vCDggx3gIJJ59tZqoIiV00gUcO%2BBhJWQu51JhPl4R2tqa7Ca7eNatOmX%2FWvpmRjgH%2FWECB2OQVgxV6MS61Jzpw03Rx3XO7TYkquNyQL0pp%2FtIm7BirsgEj%2BtSX07mtSb21GWDJdaPhznCSb%2FGRRrWeXH3bBTvY%2FqEklvi3O%2F8pbaStkqce3sxH5bFXFJbSCq2F%2BerHkfld3ajmQcRA47dfXVU79WHiCUIJaKoN4c6IMEQSVzmVrXsT6rujg0lObsyx1O4A9zNBrsiTLRVSlfmqlAEMtbUSYDRKk%2Bpqc8I%2FzoaN13vZYaXipnEdmT97CvAlgh38ZmW%2FcOmyWEy51CEvTKi15SZtMCiDg3uXuluI8Hq5r9EzkuykqC4qTDKn4vKBjqkAcIlD5jcLK%2BzAHoeo7mosIEXWF%2BcF45VAnDH0uPRNHThzBGklu5BOPckPM7a8UY909O6dDwbLKOgCuQsGo4HAgL305SS4PMII8OzxF9JcDLiI74nPZ%2FEWi78Gmt2%2ByYxcjYxBVgHwYFr%2F%2FFY4USEs6JatFitlffZ91BPIshey1BiBLwbE89QiY%2F%2BXLL6uZylUYExyrUWENzMl1lh0tDKcpOwAquG&X-Amz-Signature=67e313976edfff264b0c6fc65bc68f02f13d290c5ad63bb890c228c6daad6ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEOEZGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HcyhUjGV3n%2BBvttEd6p3AxiVg4AVTuNSJu7ksjgxJQIhAOZbA8FvLJ0vI77zSYWU8%2FDWnL4ZnB5aPwRfMlHHwnq9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FsBIRPlHDwggntLkq3ANKaBhvMXAkC8wbjw%2BodFBAEYkGfwQ5zZDwlwDfcC%2BF0LpYgkOWcgCTJmmX8BbhO0C2P7XtQlU33il1%2FYhZoUrtbUy5jkpl%2FRYq2zmEomiHv3z%2Bf%2Bt6STIJQHBzm5LV7YMnsGuLab62ww%2BiZlDAbdt3ho5yN03eTkdtc5M2GelIDYrD559U1V2S0s8bh0jfvt2zvOTtOjJK0Zxt2liIi8oPtZ3fIjKR3%2FVQtal238zUhs%2FGWJDfTOykov7rDFv7ib3vCDggx3gIJJ59tZqoIiV00gUcO%2BBhJWQu51JhPl4R2tqa7Ca7eNatOmX%2FWvpmRjgH%2FWECB2OQVgxV6MS61Jzpw03Rx3XO7TYkquNyQL0pp%2FtIm7BirsgEj%2BtSX07mtSb21GWDJdaPhznCSb%2FGRRrWeXH3bBTvY%2FqEklvi3O%2F8pbaStkqce3sxH5bFXFJbSCq2F%2BerHkfld3ajmQcRA47dfXVU79WHiCUIJaKoN4c6IMEQSVzmVrXsT6rujg0lObsyx1O4A9zNBrsiTLRVSlfmqlAEMtbUSYDRKk%2Bpqc8I%2FzoaN13vZYaXipnEdmT97CvAlgh38ZmW%2FcOmyWEy51CEvTKi15SZtMCiDg3uXuluI8Hq5r9EzkuykqC4qTDKn4vKBjqkAcIlD5jcLK%2BzAHoeo7mosIEXWF%2BcF45VAnDH0uPRNHThzBGklu5BOPckPM7a8UY909O6dDwbLKOgCuQsGo4HAgL305SS4PMII8OzxF9JcDLiI74nPZ%2FEWi78Gmt2%2ByYxcjYxBVgHwYFr%2F%2FFY4USEs6JatFitlffZ91BPIshey1BiBLwbE89QiY%2F%2BXLL6uZylUYExyrUWENzMl1lh0tDKcpOwAquG&X-Amz-Signature=14fba40a92c202a6dfb45857054f2d8af685c7e02b842f1c008c610f083f9e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

