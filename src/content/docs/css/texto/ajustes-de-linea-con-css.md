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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US25EGQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2F3fMqENkIf4O15h68alUBfV9lwUPTDwBgoot21rkbAIhALRjyCOQjcrJynxCrLj19htwWGN2l0%2FWgiWHKIeeLlzQKv8DCHUQABoMNjM3NDIzMTgzODA1IgzYSLkfBLJO4WAdET8q3APYqtzCkRecPanNnprFnelfWtbVwq9Dgillu%2F9ehVslmmnW40c5TQaezr2cXO%2BvddXYwicaYiDSPz%2BSB0B%2FcXYT4eyHPiw8M89M0zdeQK1kN%2B5VxBFAv69hxeqYHM%2FmfUEM8actZ9y9VsRFLFpwe8eMmWb9qYh39ovFA%2FJuATbw63qJ%2ByqZDf9z722vn4947EiSybg%2BTSNfqDFmIHqedVldOgAtsY4NT1ZFsUEWcJG8KTMHCdhtSbUKxVIkrJQqxUnKFARh1Uh6BAbLAXoD%2FeB%2FtsVuQ7pwbG33HEyl7BfgW7D9hJFla36rant%2BC8M%2F4EEWoRJjMiN%2FIEKkA9LEf7hlpkfy2sLOq2L7nN3sC3VJXYPRs2%2F4CtEvHmbildttJvA20XAjnA%2FDjhyU%2BPSJF%2BlDG2uKnA1AWkwmastPGNaAqhXj2fOq8wluHbMm%2FQqmYp%2BsvUGhCXtynPSXin9CYZzmF7u6i08tvHIXcA9%2F3yKrvCAXKsFcjX53HcoDB4jStBVpY0WwrQLcp8yKrJ1UAakPHxsLpb2%2F2zuzoR8oKWTKnpHFEUy8pqQAqXOdhE8jEiY9AgflWkNPS6S6G55yvOr%2BE2XrwmIBKnPNeLIPsAr5Lce6fr4lq%2BaQ10rZmDCizojKBjqkASEUjdn0VMEUgk8jLrMuHabFbpfBbDcgIw5trTxhSBvmymPZ%2F1WcyhtkVnHA9BlqdpOv3JQYpMhm4aGUXW4bDfnWNMvOacENcs2%2F%2FpwD%2Bhxx3omo2RsegQeVhB%2FL7YodUY4He92jl0ukA0oZ%2Bfo8NVnkY1wuChCn5bUD0gch5fMHjE7ZbqHU4634SvCPhh1hFk4QQI0eV81MkC%2FmMXzUFFJ%2F5uLa&X-Amz-Signature=a9c7df64db04a20239e8247cbbf5a11785e46e1e79a906f3386a5cf843e66c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US25EGQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5%2F3fMqENkIf4O15h68alUBfV9lwUPTDwBgoot21rkbAIhALRjyCOQjcrJynxCrLj19htwWGN2l0%2FWgiWHKIeeLlzQKv8DCHUQABoMNjM3NDIzMTgzODA1IgzYSLkfBLJO4WAdET8q3APYqtzCkRecPanNnprFnelfWtbVwq9Dgillu%2F9ehVslmmnW40c5TQaezr2cXO%2BvddXYwicaYiDSPz%2BSB0B%2FcXYT4eyHPiw8M89M0zdeQK1kN%2B5VxBFAv69hxeqYHM%2FmfUEM8actZ9y9VsRFLFpwe8eMmWb9qYh39ovFA%2FJuATbw63qJ%2ByqZDf9z722vn4947EiSybg%2BTSNfqDFmIHqedVldOgAtsY4NT1ZFsUEWcJG8KTMHCdhtSbUKxVIkrJQqxUnKFARh1Uh6BAbLAXoD%2FeB%2FtsVuQ7pwbG33HEyl7BfgW7D9hJFla36rant%2BC8M%2F4EEWoRJjMiN%2FIEKkA9LEf7hlpkfy2sLOq2L7nN3sC3VJXYPRs2%2F4CtEvHmbildttJvA20XAjnA%2FDjhyU%2BPSJF%2BlDG2uKnA1AWkwmastPGNaAqhXj2fOq8wluHbMm%2FQqmYp%2BsvUGhCXtynPSXin9CYZzmF7u6i08tvHIXcA9%2F3yKrvCAXKsFcjX53HcoDB4jStBVpY0WwrQLcp8yKrJ1UAakPHxsLpb2%2F2zuzoR8oKWTKnpHFEUy8pqQAqXOdhE8jEiY9AgflWkNPS6S6G55yvOr%2BE2XrwmIBKnPNeLIPsAr5Lce6fr4lq%2BaQ10rZmDCizojKBjqkASEUjdn0VMEUgk8jLrMuHabFbpfBbDcgIw5trTxhSBvmymPZ%2F1WcyhtkVnHA9BlqdpOv3JQYpMhm4aGUXW4bDfnWNMvOacENcs2%2F%2FpwD%2Bhxx3omo2RsegQeVhB%2FL7YodUY4He92jl0ukA0oZ%2Bfo8NVnkY1wuChCn5bUD0gch5fMHjE7ZbqHU4634SvCPhh1hFk4QQI0eV81MkC%2FmMXzUFFJ%2F5uLa&X-Amz-Signature=30ef237f1a176ade902829767dcb3536a6c75e87a6beef9215d238af77753807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

