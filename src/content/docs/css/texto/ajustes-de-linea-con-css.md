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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLU6ATQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9eVRR7K0Ss8t2YbqFO98panurCL%2FI0ZvZY751cMUF7AiB34BhjomKWa6dtDCe6vBswCg39Fg86L%2BFhY3fHkyfkKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZrOpR3acQgm4A%2FHKtwDPKyy6HfZH1LmzJwh%2FecJ%2BJz9cW2h9M27AkAyJcYIjwdaR%2BRKoz9DHELh3ec2YXl%2Br2jOFx%2Buv54EFghZsPsx7ivSpeej6HXiZVfjqKIjHn66gfvJUaQAiLylGf57Yl18jqHwiTH7ad7dCKU3I8wKHkfLaH15uAl5K6JkmyE7b9xcc9bJXXoG%2FCw8rlNsRE77RGPyCcRYEVZUWdrOUDsn9TyypgGNRQVVy7vO%2BpZKZmricDMNM2XFiWws%2FZcF7MjHtf6lUaxYke1VgkMuG7LF4RRnfyM03ak7yzrDCdr5uYUn8jxHWFQuegatEmxXXas%2BPG96bq1YG9zDTSXbC6IO95fNAAiX%2BAJzK8JD5pvrl2kOKHMI2JPENTGzJqdYiuNGQCxNldIV04Ak%2FDpkX6r39yBdYpuLlwwhnH1JQXI7e4QxRuUQ2eqAXPoYIDsTbhDgz%2F%2FryEyhZmS8x9c02ub4PogKzbFVdkK40d7bULpGu4dtpQcn4HYqN%2FmOgrRV2WgECIg%2FqxeSEOmwuPNddNeYhXtc7tKgfRP24aChaScgidv%2FFe7vgh8moi5QpxvBcYBEpk7HbVMiSvvlzMOGMdM%2Bbac3IsT2xPRWVijmNJW0%2BPrU0Cy6FODCIxzsEEgwwZ%2BLygY6pgEuQI1H85JIPQibGxhEt%2FZ5%2FfOEQgql21z4AqukZHkDVVgFkLw5q9%2BZ1OOA4eXn1e2JfSgYpUUisPH6ogr0QxbCyRYkXAbU4RNMEiNAbLWIROyv0lj1icYMKSfLHIHryOANjElxRsWQTF6Towf9HDTnfErDgFbL2iyPIBTc%2FzkxG9H9feBngbY31rTHQ6CCjLrX9Ed4ZVhkfR1b6%2FsZBIBAq6Uis1oz&X-Amz-Signature=252e63e86aacfc23ea4c36f1e9f37a7be641348908493edf99f4e740afd5d0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLU6ATQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9eVRR7K0Ss8t2YbqFO98panurCL%2FI0ZvZY751cMUF7AiB34BhjomKWa6dtDCe6vBswCg39Fg86L%2BFhY3fHkyfkKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZrOpR3acQgm4A%2FHKtwDPKyy6HfZH1LmzJwh%2FecJ%2BJz9cW2h9M27AkAyJcYIjwdaR%2BRKoz9DHELh3ec2YXl%2Br2jOFx%2Buv54EFghZsPsx7ivSpeej6HXiZVfjqKIjHn66gfvJUaQAiLylGf57Yl18jqHwiTH7ad7dCKU3I8wKHkfLaH15uAl5K6JkmyE7b9xcc9bJXXoG%2FCw8rlNsRE77RGPyCcRYEVZUWdrOUDsn9TyypgGNRQVVy7vO%2BpZKZmricDMNM2XFiWws%2FZcF7MjHtf6lUaxYke1VgkMuG7LF4RRnfyM03ak7yzrDCdr5uYUn8jxHWFQuegatEmxXXas%2BPG96bq1YG9zDTSXbC6IO95fNAAiX%2BAJzK8JD5pvrl2kOKHMI2JPENTGzJqdYiuNGQCxNldIV04Ak%2FDpkX6r39yBdYpuLlwwhnH1JQXI7e4QxRuUQ2eqAXPoYIDsTbhDgz%2F%2FryEyhZmS8x9c02ub4PogKzbFVdkK40d7bULpGu4dtpQcn4HYqN%2FmOgrRV2WgECIg%2FqxeSEOmwuPNddNeYhXtc7tKgfRP24aChaScgidv%2FFe7vgh8moi5QpxvBcYBEpk7HbVMiSvvlzMOGMdM%2Bbac3IsT2xPRWVijmNJW0%2BPrU0Cy6FODCIxzsEEgwwZ%2BLygY6pgEuQI1H85JIPQibGxhEt%2FZ5%2FfOEQgql21z4AqukZHkDVVgFkLw5q9%2BZ1OOA4eXn1e2JfSgYpUUisPH6ogr0QxbCyRYkXAbU4RNMEiNAbLWIROyv0lj1icYMKSfLHIHryOANjElxRsWQTF6Towf9HDTnfErDgFbL2iyPIBTc%2FzkxG9H9feBngbY31rTHQ6CCjLrX9Ed4ZVhkfR1b6%2FsZBIBAq6Uis1oz&X-Amz-Signature=5f2bec161fa945077f7be84a33be30d499a9fb6cc857b90fa270f740d4fb1b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

