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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AVG6B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCifgw84nK0UMU5%2FZ%2B%2B05PBCbUaZ%2BXH7UllMz6f2wgr9wIhAJAJlLNudJN7ae6rA7qiTFDMcLB3Dox%2F9pKXLTlT7giAKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqKzVsDvN%2Fq3T2uHwq3AM69eJxVXqT%2FN06O9YVOL15tyJGUzT4HJn9BEhbLeJC6pFs7kcR3%2BryK1SQzkWSI56%2FiA4sqybQltk6EELUJsMEPkV6Fe0h6jAhs13cd6hlfcb8BvLIDe0GVLG8S6dnynkQPudBq5MaxegVNKzxkTp4Vzb3MGCP31%2FlPQmVbKKHXv6os%2BiPp9%2FNqFhF%2Faqtx4lczzhdwkTWOEOy4JG7EK9f%2BZ68BSrRRechW3B%2Fzv7ivEzkVxqnVmDD8xX%2FKQ8tKUU%2F5YkshKdBeSyPVacOAkI2txJJJdADBBEOxES47ksanabJCmOfkMJJEnUy3kaR%2B6wTTti3Qk%2BHThdEnd67fFzfRc7YBn1yNvfNCBVGNxMT1wiem165cGG883XtTPiP2NbkeudXt5iG4Ek%2Fya7h01kQAGj2DtdQS43tcSoLsQzZ%2BSQQdIWw5i%2BSQNOAgxupVoUSfrB8TNexIO5gb3psRnPP8xnUFRoTr09BCiqLRAQW1m8069C%2Fic50QDhSob1k1t%2FD%2FgHfiwZoGN7Ge7FHdaYU0AxdvKQRzs0L8RM%2Ba0QSz%2BXR62RjunrOMzD5aJyoUhwTcjVZVCBue3eDwLyaqctXZ3gUUsT2tC223zDKmT3umhnUb6Xhropw6kjwADDcoIvKBjqkAYotvpWcjK4Ivhd0E2eyemxYUAdsDWE9l0Wl5KzckxlsoLmDdDTWvTD86DuJh1tTowDDmMuIrh6A9rKORQ4sKTVZJMVqz47c48M3YUvoavFcJzKw8OwXIvIGAiJK9kfD4Ar%2FPMX0Nr4idY%2Ffxt7jE%2BoYeKwqV5kP2eoxSNTtjj4Xo7s3hReWbg4ti951JJQ9%2F5mDjBl8dUDF8es7QfDEmB0t0mqB&X-Amz-Signature=6b4b7fa8a766d4fb5fcc4b1e932ebc731fdf870b3790df84a29099b5b120b5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AVG6B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCifgw84nK0UMU5%2FZ%2B%2B05PBCbUaZ%2BXH7UllMz6f2wgr9wIhAJAJlLNudJN7ae6rA7qiTFDMcLB3Dox%2F9pKXLTlT7giAKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqKzVsDvN%2Fq3T2uHwq3AM69eJxVXqT%2FN06O9YVOL15tyJGUzT4HJn9BEhbLeJC6pFs7kcR3%2BryK1SQzkWSI56%2FiA4sqybQltk6EELUJsMEPkV6Fe0h6jAhs13cd6hlfcb8BvLIDe0GVLG8S6dnynkQPudBq5MaxegVNKzxkTp4Vzb3MGCP31%2FlPQmVbKKHXv6os%2BiPp9%2FNqFhF%2Faqtx4lczzhdwkTWOEOy4JG7EK9f%2BZ68BSrRRechW3B%2Fzv7ivEzkVxqnVmDD8xX%2FKQ8tKUU%2F5YkshKdBeSyPVacOAkI2txJJJdADBBEOxES47ksanabJCmOfkMJJEnUy3kaR%2B6wTTti3Qk%2BHThdEnd67fFzfRc7YBn1yNvfNCBVGNxMT1wiem165cGG883XtTPiP2NbkeudXt5iG4Ek%2Fya7h01kQAGj2DtdQS43tcSoLsQzZ%2BSQQdIWw5i%2BSQNOAgxupVoUSfrB8TNexIO5gb3psRnPP8xnUFRoTr09BCiqLRAQW1m8069C%2Fic50QDhSob1k1t%2FD%2FgHfiwZoGN7Ge7FHdaYU0AxdvKQRzs0L8RM%2Ba0QSz%2BXR62RjunrOMzD5aJyoUhwTcjVZVCBue3eDwLyaqctXZ3gUUsT2tC223zDKmT3umhnUb6Xhropw6kjwADDcoIvKBjqkAYotvpWcjK4Ivhd0E2eyemxYUAdsDWE9l0Wl5KzckxlsoLmDdDTWvTD86DuJh1tTowDDmMuIrh6A9rKORQ4sKTVZJMVqz47c48M3YUvoavFcJzKw8OwXIvIGAiJK9kfD4Ar%2FPMX0Nr4idY%2Ffxt7jE%2BoYeKwqV5kP2eoxSNTtjj4Xo7s3hReWbg4ti951JJQ9%2F5mDjBl8dUDF8es7QfDEmB0t0mqB&X-Amz-Signature=526ba7280bc139c6b3fafedcc4faaf09c5dda34ad81975c7fde1fef5047d2959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

