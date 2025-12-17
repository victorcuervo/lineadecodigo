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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3F7LQ55%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzupdWAsPICUCw59F8cOvoNCxPt2R8Y9TSopuPV%2BWlgIhAL3kGxpf4g4fGh7xTdqlerW0PfHR5uXuv7fF%2BCUucnzXKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW%2BFeSApaR8kYBWnAq3AMpdN5UMeYYgZs6tfioCkNezcvYN7XOxDx0bJxN8L9%2FYznPdtPMTAKKpNNTOXfD%2B51eNby%2BqUCNn%2FdAbn8EEbP%2FZdPwmF5eUu1r%2BNYsab9DNeFVsTVJNlDqaa3mIdN8UaqivA0Gq5GJ2Eh1egonmDENjg%2FLDppr3KVaIa6DdB%2B3m4232dFvDQliigR4Jw8kA1WVqXKSv84GeBB68srlGnmUuMTV1ki2MRVcGRbhPLCHF8iREWj9sGqTOT6NJkEU02UaQFvMIXykEtSwJTMRJG6Bd2oUTw1IpjrB0%2Bb4QVrHyCEpPWqOC5bi0IlGu9LwZHDUDuvFnfognJ4bwb3lYtKINL%2B3EFaem6zxrForIvBhfAO7IWOcXC6zBEyZxxVBLOfTRoHRMw8CIkhbqykqLsbl4YcwOXtXyc3SAhfm5ZK9vkB1WCB1Qm2NN2R0irCpcr0XPEbUYlT4gprOLPIRt9GiLxuvwLnFDZn%2B6a3MC47ASvqKJ%2Fpv6vs9DCvVQN%2FYsUXZxQM8zGKfTtGdFHRg%2FD8VtwdHy%2BKGrI7whmap%2FkfgsFghQ20mcbpFen4PniNpC7ceCzYkFV%2FM%2B3CoPoSD9WFsDNgftqF7oY%2FrO4Bv4OMpaENbmMU7JULCy8%2Bg7TC%2FrozKBjqkAQCWcdfQTgXd5a992XgqxsPh1SLn4iqjKLkTuH0jvSktZ%2B0Y%2FLAdqcuMrCLBacha9TEC0%2BRQlF1z3GgyQ0uZRen%2FGdZmfdVIBKUWv9rLtk7UfJL9lPoGLDUXEDAogEBT6tWXx6JcpmSRWuJP1zdL4MNxQOn883TBLiJedRX0ZbkbKV%2FF%2B8NGvxfpSZS5%2Bclk6PwHWWVVFOuopRXm4RADjIe%2FjMtf&X-Amz-Signature=c8c2850c56d54ff7a842813acd51582fa4a3dc844f4a422e553816abbfc4821f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3F7LQ55%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvzupdWAsPICUCw59F8cOvoNCxPt2R8Y9TSopuPV%2BWlgIhAL3kGxpf4g4fGh7xTdqlerW0PfHR5uXuv7fF%2BCUucnzXKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW%2BFeSApaR8kYBWnAq3AMpdN5UMeYYgZs6tfioCkNezcvYN7XOxDx0bJxN8L9%2FYznPdtPMTAKKpNNTOXfD%2B51eNby%2BqUCNn%2FdAbn8EEbP%2FZdPwmF5eUu1r%2BNYsab9DNeFVsTVJNlDqaa3mIdN8UaqivA0Gq5GJ2Eh1egonmDENjg%2FLDppr3KVaIa6DdB%2B3m4232dFvDQliigR4Jw8kA1WVqXKSv84GeBB68srlGnmUuMTV1ki2MRVcGRbhPLCHF8iREWj9sGqTOT6NJkEU02UaQFvMIXykEtSwJTMRJG6Bd2oUTw1IpjrB0%2Bb4QVrHyCEpPWqOC5bi0IlGu9LwZHDUDuvFnfognJ4bwb3lYtKINL%2B3EFaem6zxrForIvBhfAO7IWOcXC6zBEyZxxVBLOfTRoHRMw8CIkhbqykqLsbl4YcwOXtXyc3SAhfm5ZK9vkB1WCB1Qm2NN2R0irCpcr0XPEbUYlT4gprOLPIRt9GiLxuvwLnFDZn%2B6a3MC47ASvqKJ%2Fpv6vs9DCvVQN%2FYsUXZxQM8zGKfTtGdFHRg%2FD8VtwdHy%2BKGrI7whmap%2FkfgsFghQ20mcbpFen4PniNpC7ceCzYkFV%2FM%2B3CoPoSD9WFsDNgftqF7oY%2FrO4Bv4OMpaENbmMU7JULCy8%2Bg7TC%2FrozKBjqkAQCWcdfQTgXd5a992XgqxsPh1SLn4iqjKLkTuH0jvSktZ%2B0Y%2FLAdqcuMrCLBacha9TEC0%2BRQlF1z3GgyQ0uZRen%2FGdZmfdVIBKUWv9rLtk7UfJL9lPoGLDUXEDAogEBT6tWXx6JcpmSRWuJP1zdL4MNxQOn883TBLiJedRX0ZbkbKV%2FF%2B8NGvxfpSZS5%2Bclk6PwHWWVVFOuopRXm4RADjIe%2FjMtf&X-Amz-Signature=04bfd217897628a0c1687d6569b0549c1314bd1817cbc8c89ef779e07f6e7b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

