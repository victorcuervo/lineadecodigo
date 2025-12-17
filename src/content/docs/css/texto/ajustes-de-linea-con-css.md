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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXMF34X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC19fIbHVjyDNawV1A3uc1ZGNLRjd3beqM28ZPviLONrQIhAPOu4v2ENmM1t8sq%2Ft5ckCpfHTWwwdzdDCoKWiOUUyzYKv8DCHYQABoMNjM3NDIzMTgzODA1IgxzW3U4Ng9QIXFe7Owq3AM2SvRo2zyH3UlJQ3OjChybkaB8K%2FJZwzU84YeTEXjSyAq7B8lsQcsRnLeZvCBS10n1XajlkJfR%2BstMeh7JhDD%2FcN9A4pbvl%2Bs%2Bo%2Bhq4LI4FuC4V3PtATE9a5pvZaQg3eJSdoToLk4S0cMRowLcxJdNTGjPvAHiThqbnn%2FjU%2BdtxUvlsPqm30Ui42sBNEoxkuOuuiuX1hIucJDHPFTFRox%2FIG02oNBHldaRXD5wqHCCGskrxbAzXwErDWFD0ZEDDjkEUCuoeDHvj%2BqBa1HOia9rU4hCo0yUiz0UTafb30pGXVhsBY0Ut4GvGU6ChX9ltj48bgXOedlNjpXAAikm9FT2DjxKzozRLtqPYsbkBfzVQP26mhMeguMxuYsqV%2BuM%2BGL%2Bnm0flK4sgqlSgRlyypN%2BBw2EKeknCqIQ0pdiachYUpwjfWSclvi9A%2F5QzQ%2BDJC%2FEWciyBx5hvP2WSJnBjpYYHZF9f8gHm5e3daKOm7NaSxGS2jAk9gCGS1yuILBkfgZ%2BRubrUS77r7FDpmSn0aZgjkC5%2FY6T8kakufun9Kft3xntPVVEHRxpvnm8JT5isEzNYPfShHv%2B08BH9JNgepoY3gDUy3kPCFDiK9TLecqyTt4xLs1ijt8mMGWrRTDX64jKBjqkAQv%2Fyve3USSv4dzabKD4Pqu82%2Ff75IRGK4q4m0ieFHNpUZaJDo6Qhx%2BhTZUcnqKK%2BldOV8QZWmSKoBX2%2FXNXQaXsQFLMrHVO25%2Ft4l%2BkWVbsBUpajT2saZW5y8%2Fs%2FrM%2F62L31FssBiF5ogWV4Vw9UTgtcGvq84wfnpMcBl9xUpbUqrrxUih7vwNsvJ0zTrq0lRs%2BMO1Rwzmq6S2wkog9BuY07TaL&X-Amz-Signature=94aee33913ee67829e74b15fd76cce3bca31a8e8ba38b3695e87570ff729b112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXMF34X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC19fIbHVjyDNawV1A3uc1ZGNLRjd3beqM28ZPviLONrQIhAPOu4v2ENmM1t8sq%2Ft5ckCpfHTWwwdzdDCoKWiOUUyzYKv8DCHYQABoMNjM3NDIzMTgzODA1IgxzW3U4Ng9QIXFe7Owq3AM2SvRo2zyH3UlJQ3OjChybkaB8K%2FJZwzU84YeTEXjSyAq7B8lsQcsRnLeZvCBS10n1XajlkJfR%2BstMeh7JhDD%2FcN9A4pbvl%2Bs%2Bo%2Bhq4LI4FuC4V3PtATE9a5pvZaQg3eJSdoToLk4S0cMRowLcxJdNTGjPvAHiThqbnn%2FjU%2BdtxUvlsPqm30Ui42sBNEoxkuOuuiuX1hIucJDHPFTFRox%2FIG02oNBHldaRXD5wqHCCGskrxbAzXwErDWFD0ZEDDjkEUCuoeDHvj%2BqBa1HOia9rU4hCo0yUiz0UTafb30pGXVhsBY0Ut4GvGU6ChX9ltj48bgXOedlNjpXAAikm9FT2DjxKzozRLtqPYsbkBfzVQP26mhMeguMxuYsqV%2BuM%2BGL%2Bnm0flK4sgqlSgRlyypN%2BBw2EKeknCqIQ0pdiachYUpwjfWSclvi9A%2F5QzQ%2BDJC%2FEWciyBx5hvP2WSJnBjpYYHZF9f8gHm5e3daKOm7NaSxGS2jAk9gCGS1yuILBkfgZ%2BRubrUS77r7FDpmSn0aZgjkC5%2FY6T8kakufun9Kft3xntPVVEHRxpvnm8JT5isEzNYPfShHv%2B08BH9JNgepoY3gDUy3kPCFDiK9TLecqyTt4xLs1ijt8mMGWrRTDX64jKBjqkAQv%2Fyve3USSv4dzabKD4Pqu82%2Ff75IRGK4q4m0ieFHNpUZaJDo6Qhx%2BhTZUcnqKK%2BldOV8QZWmSKoBX2%2FXNXQaXsQFLMrHVO25%2Ft4l%2BkWVbsBUpajT2saZW5y8%2Fs%2FrM%2F62L31FssBiF5ogWV4Vw9UTgtcGvq84wfnpMcBl9xUpbUqrrxUih7vwNsvJ0zTrq0lRs%2BMO1Rwzmq6S2wkog9BuY07TaL&X-Amz-Signature=93ee8764059d718dc22d27d22168d0f1701a0ccf92fc43621b724822064c805e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

