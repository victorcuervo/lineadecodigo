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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTLIGZU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRlNi6hGYifD83wHZ93P5NVYgmC7%2Bc0tKKarBKsU4jsgIhAIJ5lZ6rt1Jw4lffm%2FiA3ePtUh9W1yEkrwDeUT6aYFmjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvBDutQ6F5OiIqsmEq3AMxajwU%2BHFFlwNpTMXIynou1eUVlNeENGKX3xlnQgeiyw5LdU61WLZ%2BQoxdFew%2BaxrrPJr77UsrnfagEaGetf3w%2BY3xZUifzicf%2FSNDJ8f%2B3GZyARO%2FenYTQfnTxZU0sS7OcBXGFopZPiSqMZovpyzAOpo%2F1mjqRPQFQM7s3ryyupu5GePIzIqqlUfcXoXKwd%2FDWpRuBW%2FMVbAGDyAVKcHRW2avEt4EjwA%2FTkNUeRJbuVUSZHPBy5ce5YJpQ52HMPaoXWVjoRYoDjYQiT7bgkBHxC%2Fwdi5cUgIZBhjORmLDwFjL0XE1yRSbtJVn1Ch69PBioCrwc%2FGOsZ9bzssfW9BAkGPInrN%2F2172NBJiJkR9Qjt132%2FqAVneq43YEDBiZkI20ZMS9NUBSIIPt0X8EzzIBMeCxVr%2FsN0XzGw1OI%2BMlli3xrp6N7q6pufsnIKQQwQaUPtiIKarA6Z6OG0eye2jZ0KwPy%2FOSnIUo%2FGlWzQaIeN29CtPJR%2BGHgzQTtGl%2BFbgEwmXcjWHCw8lyVKOJPfAUzkCl57iNSTf%2FeaDqYfEwhBLKz6S7%2FwXOQLT%2Bye9QGOn2iJGDoMROOmGx9E3nxDFedCubHfh6WXqPlBL%2FByN56t48txtK%2FEdSpivIjD2n4vKBjqkAc4Bm6UpuFTEaRuYF%2Blp4vK2VnW2ydyQbwattjK4Hf8Ms2W%2FNjQ%2BCooD3b2Z639IUN0Gd%2BRSohxD4TmcQWXrvYi3FEPWxSrRHMRlLmq0foyRuGI5jvFNKGbo0NN%2FESEKxcrzmmXPUkd8Fp4Mf0SOSyYImngytq4AXfokpO5mCYb2iZZQuY7%2BpEp11ONN96F2ffocWBclEsr4gQHCu0EaWpfFKprA&X-Amz-Signature=6b679cfdfb44193525afb88dc00ef012211448bff591bcf794c38e90579e1688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTLIGZU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRlNi6hGYifD83wHZ93P5NVYgmC7%2Bc0tKKarBKsU4jsgIhAIJ5lZ6rt1Jw4lffm%2FiA3ePtUh9W1yEkrwDeUT6aYFmjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvBDutQ6F5OiIqsmEq3AMxajwU%2BHFFlwNpTMXIynou1eUVlNeENGKX3xlnQgeiyw5LdU61WLZ%2BQoxdFew%2BaxrrPJr77UsrnfagEaGetf3w%2BY3xZUifzicf%2FSNDJ8f%2B3GZyARO%2FenYTQfnTxZU0sS7OcBXGFopZPiSqMZovpyzAOpo%2F1mjqRPQFQM7s3ryyupu5GePIzIqqlUfcXoXKwd%2FDWpRuBW%2FMVbAGDyAVKcHRW2avEt4EjwA%2FTkNUeRJbuVUSZHPBy5ce5YJpQ52HMPaoXWVjoRYoDjYQiT7bgkBHxC%2Fwdi5cUgIZBhjORmLDwFjL0XE1yRSbtJVn1Ch69PBioCrwc%2FGOsZ9bzssfW9BAkGPInrN%2F2172NBJiJkR9Qjt132%2FqAVneq43YEDBiZkI20ZMS9NUBSIIPt0X8EzzIBMeCxVr%2FsN0XzGw1OI%2BMlli3xrp6N7q6pufsnIKQQwQaUPtiIKarA6Z6OG0eye2jZ0KwPy%2FOSnIUo%2FGlWzQaIeN29CtPJR%2BGHgzQTtGl%2BFbgEwmXcjWHCw8lyVKOJPfAUzkCl57iNSTf%2FeaDqYfEwhBLKz6S7%2FwXOQLT%2Bye9QGOn2iJGDoMROOmGx9E3nxDFedCubHfh6WXqPlBL%2FByN56t48txtK%2FEdSpivIjD2n4vKBjqkAc4Bm6UpuFTEaRuYF%2Blp4vK2VnW2ydyQbwattjK4Hf8Ms2W%2FNjQ%2BCooD3b2Z639IUN0Gd%2BRSohxD4TmcQWXrvYi3FEPWxSrRHMRlLmq0foyRuGI5jvFNKGbo0NN%2FESEKxcrzmmXPUkd8Fp4Mf0SOSyYImngytq4AXfokpO5mCYb2iZZQuY7%2BpEp11ONN96F2ffocWBclEsr4gQHCu0EaWpfFKprA&X-Amz-Signature=e6ee175d62707ff9890325fab6be1c6d70a43bf868a3ea839ab302c55ecbffe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

