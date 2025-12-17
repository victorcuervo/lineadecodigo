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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMNSDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB98Eq0w5IckQ1pHE78%2Bs7VliGZS6JyrKpw%2BjBhAPdAIhAN8JQmQGkIuZ0K4lbyTblW%2Bx5J0fc2kTuVCCpZOsTawMKv8DCHgQABoMNjM3NDIzMTgzODA1Igw7jYbtfemLP0%2FJzX8q3AMnq4s7y2WNnIC%2FVY%2BnLetfiH5XdVuuBoced0huZaN6AOiWpWH8qLs8IOf0CKtsXFnh6RPTkrKAwW78W33AWcA%2BENPQ05VH0SohfFfDGV8VZ3ihkUtQJYtl7UV7Rg2lkMiSMahwhR2GcUl8bJX7bgOfYeqpFzk0u8Z3k%2Bj8twpZH3LdwCregeAZizxxCbT2sfUxaDk63uLLy0KvB2EZkAS%2F2o0DKTnW8tPOtp2CNgGf3UzxbnESohSLcSbrOofjUcL%2BxFcpGihKEmtsK4u%2BH6Al4NXr%2FwEUh9HubSb%2Fl81CGReoGT5iPsvk0x3zVkhRbqtCEbz%2Fv1Wo4%2B9TZVJKuYDyMXE7U832dwpC%2BzBd9Zt9ZaqLHHLlSQ1h%2Fzd34uxlygQuAZVy9ubxaCXRAHWVog1CoUQu9j0tqx0LqEWjbv6CWb9cM%2BioK5Rw8Sykd6ZsLqcUpI40QKctR5Fm9shfm%2BBKsFeJAGbE%2FPSoqPa0mGNauBNznCEdXh%2BMlkSgsGr8qYPdFMza4EOZ4Tl8eNzFSqQ7KagYXcRuNlVw6BDiJpNS6PqIfjWOc%2BgC8vI0hEinkqadPt5A2zizQN8dkQ%2FdrwqjO2mcj17HP6XvX01fXorc6%2FGzs6hcM%2FBAeBqrUTDKnYnKBjqkAa7EMfI4zZhJYCt1NqErcw6mLCmC9lkKAPUME6Qq20ahxwAmJiBr1hcTe2Fgnq9S69Ig4GKnVRot11qyRnO%2FmSZHs8wBO1RyEYtQ7fRa%2BHuV9DesbL2jPCyV6BGJSLy7peFB1fqf2nc43ftyIyZWGMjCka0OQ5OpCTDnWXa5HdbOXjWMG%2FuCFey83ruGJuTk1QWKKs4v4FtD7VeVid7q%2BSahmt7Y&X-Amz-Signature=bc105f49d2848bff2d5fcea15f3f25c0e21b812cc2d5401edecf156cdfeb9528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFMNSDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB98Eq0w5IckQ1pHE78%2Bs7VliGZS6JyrKpw%2BjBhAPdAIhAN8JQmQGkIuZ0K4lbyTblW%2Bx5J0fc2kTuVCCpZOsTawMKv8DCHgQABoMNjM3NDIzMTgzODA1Igw7jYbtfemLP0%2FJzX8q3AMnq4s7y2WNnIC%2FVY%2BnLetfiH5XdVuuBoced0huZaN6AOiWpWH8qLs8IOf0CKtsXFnh6RPTkrKAwW78W33AWcA%2BENPQ05VH0SohfFfDGV8VZ3ihkUtQJYtl7UV7Rg2lkMiSMahwhR2GcUl8bJX7bgOfYeqpFzk0u8Z3k%2Bj8twpZH3LdwCregeAZizxxCbT2sfUxaDk63uLLy0KvB2EZkAS%2F2o0DKTnW8tPOtp2CNgGf3UzxbnESohSLcSbrOofjUcL%2BxFcpGihKEmtsK4u%2BH6Al4NXr%2FwEUh9HubSb%2Fl81CGReoGT5iPsvk0x3zVkhRbqtCEbz%2Fv1Wo4%2B9TZVJKuYDyMXE7U832dwpC%2BzBd9Zt9ZaqLHHLlSQ1h%2Fzd34uxlygQuAZVy9ubxaCXRAHWVog1CoUQu9j0tqx0LqEWjbv6CWb9cM%2BioK5Rw8Sykd6ZsLqcUpI40QKctR5Fm9shfm%2BBKsFeJAGbE%2FPSoqPa0mGNauBNznCEdXh%2BMlkSgsGr8qYPdFMza4EOZ4Tl8eNzFSqQ7KagYXcRuNlVw6BDiJpNS6PqIfjWOc%2BgC8vI0hEinkqadPt5A2zizQN8dkQ%2FdrwqjO2mcj17HP6XvX01fXorc6%2FGzs6hcM%2FBAeBqrUTDKnYnKBjqkAa7EMfI4zZhJYCt1NqErcw6mLCmC9lkKAPUME6Qq20ahxwAmJiBr1hcTe2Fgnq9S69Ig4GKnVRot11qyRnO%2FmSZHs8wBO1RyEYtQ7fRa%2BHuV9DesbL2jPCyV6BGJSLy7peFB1fqf2nc43ftyIyZWGMjCka0OQ5OpCTDnWXa5HdbOXjWMG%2FuCFey83ruGJuTk1QWKKs4v4FtD7VeVid7q%2BSahmt7Y&X-Amz-Signature=1538393cc038072d44155b41e42da1e7340c2d9af4e187ca86995a92cd0a494d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

