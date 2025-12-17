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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYZTU6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnofbOBfNiSLmover43X%2BAawpryiIVaaACYJt87Sr9JwIgFxV3VT%2B1YIhL%2BJPO7IVYwnHmX2RuDAfzS0GSY9kkllQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAp2UejV3hBK%2BiqvyrcA6vke0leUWNXSJR1S6449HPuNXVSsprrJtJMBoETRE2YBOhlbEPdkVzcqflEcE%2Fk3ZG95r%2FhefzXs6E91C7COpxwRIRO5M%2FGPJWdScU5vpvM34orFmPvnkyy9z5xjh30AP0GagVZ0OP11kzeorlQaDPxSg8JV8I%2BjzQ%2FNsRDWfCMG9iNymoWdixDyM7HytXnLPd8t14J0cw7dTH1hk3Od4rNJD0sG9Sl7U2i%2F9nUHU1s1Dap9T3hPysu32POkFOcjA54DeQvZPvRKwEMYNhyCBgUo9bP%2BKXbOA96JT3RRNkvVGTd2lc5tuSLBqlb3cs1v6ekG2%2BtEsg9WlswsjNvFHPakCTaxP%2FO8eoMtgy9m0rnP0AVS%2FiUH%2BPLytuaS7XytnZ%2FD8%2FjQvS5diGp1OG7WqLMlA639zytNSgW5AD0WnIPG3phFwAaLawit61WrCTHHtpWgiM85mDJfQl3%2FdNdc5aGTNT62MEJalxVv7eppeG0aGrALkk2tkY3bGsX8%2B7IDs3ZH%2BtsYDTuEjhNuGzq%2F1BA%2F77q2OLuw1BckH15wWvdJj6uk3EYlMWdGjGzf2%2FgEKpErzkl9ikv2JTSaLWkuP5%2F4pxhSVxX4R7SxYL1OjpwTwyNZfunnTY3rLYbMO2Bi8oGOqUBnaNDaTb5eDpW9JUw56rqy2YdMG1BJuaiXl5ldpz2fnyuNmfBsOA3ULWzGqKL3fopnk18PkBOD%2FR3MpFuBNAtj8dsZElmrFMBKuTyeFQYyC%2BG3bCyPHm%2FYR%2Bj%2FlI064Uha6gSMAX7DxOmYzY9bzASVCK7MKPtVMgzS9c58nHNVmJoq418zKGJHwm6aUKQn7zqygV0sq9eFdPIEVTDhsG3mRR0sde6&X-Amz-Signature=156868527ea72235b22cf236810506d11273d57e72e48159b12564f2fa23078d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYZTU6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnofbOBfNiSLmover43X%2BAawpryiIVaaACYJt87Sr9JwIgFxV3VT%2B1YIhL%2BJPO7IVYwnHmX2RuDAfzS0GSY9kkllQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAp2UejV3hBK%2BiqvyrcA6vke0leUWNXSJR1S6449HPuNXVSsprrJtJMBoETRE2YBOhlbEPdkVzcqflEcE%2Fk3ZG95r%2FhefzXs6E91C7COpxwRIRO5M%2FGPJWdScU5vpvM34orFmPvnkyy9z5xjh30AP0GagVZ0OP11kzeorlQaDPxSg8JV8I%2BjzQ%2FNsRDWfCMG9iNymoWdixDyM7HytXnLPd8t14J0cw7dTH1hk3Od4rNJD0sG9Sl7U2i%2F9nUHU1s1Dap9T3hPysu32POkFOcjA54DeQvZPvRKwEMYNhyCBgUo9bP%2BKXbOA96JT3RRNkvVGTd2lc5tuSLBqlb3cs1v6ekG2%2BtEsg9WlswsjNvFHPakCTaxP%2FO8eoMtgy9m0rnP0AVS%2FiUH%2BPLytuaS7XytnZ%2FD8%2FjQvS5diGp1OG7WqLMlA639zytNSgW5AD0WnIPG3phFwAaLawit61WrCTHHtpWgiM85mDJfQl3%2FdNdc5aGTNT62MEJalxVv7eppeG0aGrALkk2tkY3bGsX8%2B7IDs3ZH%2BtsYDTuEjhNuGzq%2F1BA%2F77q2OLuw1BckH15wWvdJj6uk3EYlMWdGjGzf2%2FgEKpErzkl9ikv2JTSaLWkuP5%2F4pxhSVxX4R7SxYL1OjpwTwyNZfunnTY3rLYbMO2Bi8oGOqUBnaNDaTb5eDpW9JUw56rqy2YdMG1BJuaiXl5ldpz2fnyuNmfBsOA3ULWzGqKL3fopnk18PkBOD%2FR3MpFuBNAtj8dsZElmrFMBKuTyeFQYyC%2BG3bCyPHm%2FYR%2Bj%2FlI064Uha6gSMAX7DxOmYzY9bzASVCK7MKPtVMgzS9c58nHNVmJoq418zKGJHwm6aUKQn7zqygV0sq9eFdPIEVTDhsG3mRR0sde6&X-Amz-Signature=09c566e8cb62c3aa009f1b483f7627e8a58b6aceb468eaa0ad0fec59ff972370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

