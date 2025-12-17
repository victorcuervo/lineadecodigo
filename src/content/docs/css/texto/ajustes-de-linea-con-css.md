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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYC5WB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ5Ck0UruIK0mBFsZkl82qc5lgTcwgpHc%2FzEpHfwzp6QIhAIlC0wJPY4j1y3buRs49MglHu9vhuFnHR7E%2BU8m3xfJpKv8DCH8QABoMNjM3NDIzMTgzODA1Igz8t%2BYmxxfqy8PqqVUq3AM5DMbhjWyOrtCWdAZAWf4ahWt5hwSnrlSafQudI47QB1NrkcunWEJnY7hsi%2FU7991RClTjaSqGgi19QI4cUAgJQXFiDSYnj3vB5GDymuHY8EBkg%2Bdww3SgJAim2Z%2FpatW%2Box5P9mtyzlbyUKQJl33gpdvJX0dQ2OlD%2BYs%2BPbvCieyOR0GgS2S7igg%2FiXmwCPFeSk8m%2F64IA%2FNxY6ByK5Wmdnu8SH1dfrbpEIiNkcl2Md%2BSoVkt614rtHzYOS%2F5aehMQdvsIQBnzpw8cZ5HgXf4AjNtJRiVi%2Fx%2F9xGHkuFPLA35UFTk%2FFo3OCOmxHjJi%2FtvGk9596WOIMfhnYV5b2Kb7IWGLGePbbI4mklTKNQaL6L2iWPjeLk3rV%2Bh5R4zMbgk4dEaWSZpyaK5lgUeGJQPJj%2F62vLJcGv3oH%2FDoVrtrMPkAQaFd1TgnKvf3X8Yy4ic2LNLQU0%2BN1Q9RbpzC6FVXl5VEhWP42Hmlzjgv%2F6DCm5aMfbsr1EFZY3n97d5yQELVXN2nf%2FOryBmUltybzCQF0l9lL6QfV0uoXqkDyCdASiPUPAE%2F%2BRGeggCTeKRYiV06SW5RF8ran0sdEsehko%2BjtnzCS6wuy9v4sLQ%2FoWTzkgOwbJHXdDnBZG3pTDe4YrKBjqkAeGNaOq9fGr1MnafZcvQ4n98TSnsjXCfOrL5us%2FxrNsO0QWDJ5A3NIRSpiaiS26kJ5nu8P2EyLJmyzDFdE9ShkhwZHKJ4oR0b2Y7OKoAXdUefoxSeoJyIUFcaf2oVpjvtxec5Ssx5NTe8s5v4uN%2FY3VlSRmKtXqxAJp8aW%2BtWsLoVw%2B9yTPK3ZHFjKov75PjYuA6ta14TbaNY%2F02wKCU6XVa5o6K&X-Amz-Signature=0ff93f54d9e424e710dd131f44520fb5a27f773b7f205132b8412d0aa1614a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYC5WB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ5Ck0UruIK0mBFsZkl82qc5lgTcwgpHc%2FzEpHfwzp6QIhAIlC0wJPY4j1y3buRs49MglHu9vhuFnHR7E%2BU8m3xfJpKv8DCH8QABoMNjM3NDIzMTgzODA1Igz8t%2BYmxxfqy8PqqVUq3AM5DMbhjWyOrtCWdAZAWf4ahWt5hwSnrlSafQudI47QB1NrkcunWEJnY7hsi%2FU7991RClTjaSqGgi19QI4cUAgJQXFiDSYnj3vB5GDymuHY8EBkg%2Bdww3SgJAim2Z%2FpatW%2Box5P9mtyzlbyUKQJl33gpdvJX0dQ2OlD%2BYs%2BPbvCieyOR0GgS2S7igg%2FiXmwCPFeSk8m%2F64IA%2FNxY6ByK5Wmdnu8SH1dfrbpEIiNkcl2Md%2BSoVkt614rtHzYOS%2F5aehMQdvsIQBnzpw8cZ5HgXf4AjNtJRiVi%2Fx%2F9xGHkuFPLA35UFTk%2FFo3OCOmxHjJi%2FtvGk9596WOIMfhnYV5b2Kb7IWGLGePbbI4mklTKNQaL6L2iWPjeLk3rV%2Bh5R4zMbgk4dEaWSZpyaK5lgUeGJQPJj%2F62vLJcGv3oH%2FDoVrtrMPkAQaFd1TgnKvf3X8Yy4ic2LNLQU0%2BN1Q9RbpzC6FVXl5VEhWP42Hmlzjgv%2F6DCm5aMfbsr1EFZY3n97d5yQELVXN2nf%2FOryBmUltybzCQF0l9lL6QfV0uoXqkDyCdASiPUPAE%2F%2BRGeggCTeKRYiV06SW5RF8ran0sdEsehko%2BjtnzCS6wuy9v4sLQ%2FoWTzkgOwbJHXdDnBZG3pTDe4YrKBjqkAeGNaOq9fGr1MnafZcvQ4n98TSnsjXCfOrL5us%2FxrNsO0QWDJ5A3NIRSpiaiS26kJ5nu8P2EyLJmyzDFdE9ShkhwZHKJ4oR0b2Y7OKoAXdUefoxSeoJyIUFcaf2oVpjvtxec5Ssx5NTe8s5v4uN%2FY3VlSRmKtXqxAJp8aW%2BtWsLoVw%2B9yTPK3ZHFjKov75PjYuA6ta14TbaNY%2F02wKCU6XVa5o6K&X-Amz-Signature=3d101666f1660800c02cf018938e80a24a3966980a20233f444315772c0af7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

