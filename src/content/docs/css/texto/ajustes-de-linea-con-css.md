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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCM5VEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxz6uf8JC5fexgc4kiH2vq9XOlTdF4aiTDWxg3bJYd%2FAIhAPzG5xIarIxtw5QK8D4N%2FW7%2Fz067FmHzbmD9ED045o6mKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkyA1n9ALzww1hcLgq3APzSzXsCH15%2FpKg16LM7jGuvf4%2B89H%2BdSjayWfTiGxkJ5xUzMKM8NfrnHHRpsnPWExsRkAB0qA0Tk9URQQVowed%2FHtH3QAGyY3JCKy0uEhGgUex1Nn5GerX7PkkbJLSbzO51KdMpniPi5UOwMS3qNaAamR%2FRHsqKgPUNzRMsWlYyveQ0hzSeQlNsjMJdNch%2BYGeeJ0FG%2F3Oe172PbPGxYxWXIf9uWNV6Fuyky1md6Rgy0JVhdwzbZe9RmcUTgH19O0U8zWXNag8rsQJfCmTja%2F0gNXjDFPMVcZoBX82KifSY6UfadXayZaQ6tzj1Q8TLoAbb8bhVaxwoaeSPaWjUxPswdHRBhA9C%2FMFho8rH8HQ5P8fNaK7J3BfHSfMrJrnDrXtHfxm9p9tXcwyfqYUdkz%2BYfdg2TdOYzpjFbj1qPtZjc8TKC9CxpA1pFZWTsGbTO5caoqN8sOiMcns3CaROuTXrzrUM0ep2rmX2ylErLofKpOT0UGx8RVYgRxOf2NovKLINCGbPaicT8Lw33uomoRaTFnANXGnn06tvzf06MfauU5pOSTPp0ACUaBP3S0GlwE3072y8j6zMD2Ed30IeZqocRZQ6tpmigW4FZWfyiT5K4tXpevCd17NKNqFAjCQz4jKBjqkAa3gGBfQQN8eEsRhJY3SBTevdwbhYyBidFjzX03ULTy512uFpgsEEWuF%2BKa%2Bq3x9OgXSgrFQ1RUsO4L5rN%2FQurHSlBkvgJCSMFksjXESNbCeCWShwgCsjZNiLhdlPtTKie%2Fi5BIiSxliwFG%2F2PDEf9Rj3P3wSLlP1eol5W1%2B5TiMl2qWDzgdJzkuQvQdJXYKIegPclfENSDM53SuJC85Bu2zduid&X-Amz-Signature=2451201d3778e79f0e240bbfd0684319965dc381ce2e60e1ed81cb38e9d71531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCM5VEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxz6uf8JC5fexgc4kiH2vq9XOlTdF4aiTDWxg3bJYd%2FAIhAPzG5xIarIxtw5QK8D4N%2FW7%2Fz067FmHzbmD9ED045o6mKv8DCHUQABoMNjM3NDIzMTgzODA1IgzkyA1n9ALzww1hcLgq3APzSzXsCH15%2FpKg16LM7jGuvf4%2B89H%2BdSjayWfTiGxkJ5xUzMKM8NfrnHHRpsnPWExsRkAB0qA0Tk9URQQVowed%2FHtH3QAGyY3JCKy0uEhGgUex1Nn5GerX7PkkbJLSbzO51KdMpniPi5UOwMS3qNaAamR%2FRHsqKgPUNzRMsWlYyveQ0hzSeQlNsjMJdNch%2BYGeeJ0FG%2F3Oe172PbPGxYxWXIf9uWNV6Fuyky1md6Rgy0JVhdwzbZe9RmcUTgH19O0U8zWXNag8rsQJfCmTja%2F0gNXjDFPMVcZoBX82KifSY6UfadXayZaQ6tzj1Q8TLoAbb8bhVaxwoaeSPaWjUxPswdHRBhA9C%2FMFho8rH8HQ5P8fNaK7J3BfHSfMrJrnDrXtHfxm9p9tXcwyfqYUdkz%2BYfdg2TdOYzpjFbj1qPtZjc8TKC9CxpA1pFZWTsGbTO5caoqN8sOiMcns3CaROuTXrzrUM0ep2rmX2ylErLofKpOT0UGx8RVYgRxOf2NovKLINCGbPaicT8Lw33uomoRaTFnANXGnn06tvzf06MfauU5pOSTPp0ACUaBP3S0GlwE3072y8j6zMD2Ed30IeZqocRZQ6tpmigW4FZWfyiT5K4tXpevCd17NKNqFAjCQz4jKBjqkAa3gGBfQQN8eEsRhJY3SBTevdwbhYyBidFjzX03ULTy512uFpgsEEWuF%2BKa%2Bq3x9OgXSgrFQ1RUsO4L5rN%2FQurHSlBkvgJCSMFksjXESNbCeCWShwgCsjZNiLhdlPtTKie%2Fi5BIiSxliwFG%2F2PDEf9Rj3P3wSLlP1eol5W1%2B5TiMl2qWDzgdJzkuQvQdJXYKIegPclfENSDM53SuJC85Bu2zduid&X-Amz-Signature=e81d0ac54edbeaabaa86d5e0799571afdbb7fbf9474811c29b3a2221081d809e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

