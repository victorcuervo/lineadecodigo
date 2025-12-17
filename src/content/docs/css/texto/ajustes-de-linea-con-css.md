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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IO6PTUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEqfFyuIGuY298xj%2FEJzkBww3CNdiRL9UKyK%2Bk3lUtjgIgWFqQV52%2Bq5bn5fzUiUkRmS1DtcYSpY4F0qK9GZKf52kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGmt3RMEtcHvQr1bircA5lQ%2BhxjME5nx8vX2%2FT4%2BoD7UTK0e6MLHoVV5VDOxK0Gs4cP%2FEEz%2BOBCJCY9dVpip65Hh0evc8OrZvYMfXa0FmNO3%2FgKNlpRuqtQuFVZYk3T1dcjZ0otYz7Psr1vOUa7zQJN7sYpXDXObYaVlo3h%2F1glnW%2FxI54WZCQAi8ElBdWfhLPngk6rnCsJcILLjcSzxl3lKXk%2BqlKzWhBmsL%2F12cTk9NSlg4HXtv3HvdAwzhMvWsQHViGorsU63%2B2KxlApa9PcPlepbj9RkvMtKSmrA9u5PoKQ6d16ZR%2FdK%2BzywfvfuhvQeUm3JvcDM4PzBYW%2B8p3%2FMgAI7RGQJI0fAv5W3CL2dIVdJpi1OP%2FeijZxRGCpUuoL%2F%2BSJS1lKjhc6Bxq9sMPCnH1dsvhBTxE44z385ZaPYa%2B6Bl54FrMcYb1pda2Y6r3%2BnNTsczAqAxo2oVvHMoZWBudqfdOZX9pGiCh%2FxBPhrrjBEjjyu7EuDjpVyIF3MOA379GkdSYccnjyfnUF4aJ8HsvJ4bFET7csOp6ItytywGxaSwwHvaJRTGcKHdztrghwbKCqeJI6kEmuoQVgvgtKFkMaZV6be92fiXRqqUEt1AlnqnG%2BlxYIcWCt1G14BqxS2KKmwV4oSoAjMKafi8oGOqUBF10wWAjLG0vVzHlfQTDp1aBoI1bx9LLqF1dTypwZ1wL5Gquuyv%2F5RIXM7G62TwjtcUHXOkT9fXcjwPsci%2B9JPAftP%2Bz94xPqKVELNRCK7%2FrqRz3UQnCBAZ0mfozDciBAvtBJqahIYSvqWQ2CcVCizcjGvd6zHr9n2qRTYzKF%2FwbOe1jHjz88GA2a%2FoQ8jrN6sbqw0cAXwYFco%2Foz2C6bUTE70%2FQv&X-Amz-Signature=5aa26181b142286268873a82a5ac713e19d95c5e6ceaaa6541243a856866b22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IO6PTUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEqfFyuIGuY298xj%2FEJzkBww3CNdiRL9UKyK%2Bk3lUtjgIgWFqQV52%2Bq5bn5fzUiUkRmS1DtcYSpY4F0qK9GZKf52kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGmt3RMEtcHvQr1bircA5lQ%2BhxjME5nx8vX2%2FT4%2BoD7UTK0e6MLHoVV5VDOxK0Gs4cP%2FEEz%2BOBCJCY9dVpip65Hh0evc8OrZvYMfXa0FmNO3%2FgKNlpRuqtQuFVZYk3T1dcjZ0otYz7Psr1vOUa7zQJN7sYpXDXObYaVlo3h%2F1glnW%2FxI54WZCQAi8ElBdWfhLPngk6rnCsJcILLjcSzxl3lKXk%2BqlKzWhBmsL%2F12cTk9NSlg4HXtv3HvdAwzhMvWsQHViGorsU63%2B2KxlApa9PcPlepbj9RkvMtKSmrA9u5PoKQ6d16ZR%2FdK%2BzywfvfuhvQeUm3JvcDM4PzBYW%2B8p3%2FMgAI7RGQJI0fAv5W3CL2dIVdJpi1OP%2FeijZxRGCpUuoL%2F%2BSJS1lKjhc6Bxq9sMPCnH1dsvhBTxE44z385ZaPYa%2B6Bl54FrMcYb1pda2Y6r3%2BnNTsczAqAxo2oVvHMoZWBudqfdOZX9pGiCh%2FxBPhrrjBEjjyu7EuDjpVyIF3MOA379GkdSYccnjyfnUF4aJ8HsvJ4bFET7csOp6ItytywGxaSwwHvaJRTGcKHdztrghwbKCqeJI6kEmuoQVgvgtKFkMaZV6be92fiXRqqUEt1AlnqnG%2BlxYIcWCt1G14BqxS2KKmwV4oSoAjMKafi8oGOqUBF10wWAjLG0vVzHlfQTDp1aBoI1bx9LLqF1dTypwZ1wL5Gquuyv%2F5RIXM7G62TwjtcUHXOkT9fXcjwPsci%2B9JPAftP%2Bz94xPqKVELNRCK7%2FrqRz3UQnCBAZ0mfozDciBAvtBJqahIYSvqWQ2CcVCizcjGvd6zHr9n2qRTYzKF%2FwbOe1jHjz88GA2a%2FoQ8jrN6sbqw0cAXwYFco%2Foz2C6bUTE70%2FQv&X-Amz-Signature=d27e6e6609b290e4456e836808d1a04dd7b1cea82db31d256c3292ff02ae6d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

