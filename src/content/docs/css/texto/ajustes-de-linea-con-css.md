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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEMX4GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcQmxS7tHNY9H3Jt5YxTOU4hrTyVnniVv%2ByX%2BULax%2F7AiEA7qB8A57stzonLzXIVPTjspF%2FLBzspFdoLO0vij8r%2FYMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNBJpy7b3AXxdw07pircA8GaeDn%2BnBg8LR2ZWOez8RSFE0fkJNTOHYp%2FBdZfefK%2BpNGVd2ZkHi5CZFdWaa3ffQoC2z8p0ntbu1O5%2B03Rt8tK9EuPoXqV9oAWMeAwzlr5DUf8wb31KTJvoWZu43YB2NpVq3qefcFeO8gyeQVacqBklM2EOxTu6cMrKAyjfpNvlm%2F2sKlKL33qTlhLV1KeOG7CoSYZVXnc1eFqLhZJ2iVcWdNMlktmeH2FFdBWXzJOJv89iQNMiKz8NVz8VtkFPxGU%2B5afDuueKWLbUuiYZQVaI%2Fp641KBxHUQSxAFPrhEpq3u%2FQS%2FzZDNQ%2B6kyusYiN4aIXMC0TCBbJckr%2F9rhRP833Wf6hJbwg0OjVUOSt0EmD8iRiPOip%2Fhccq7HfZo4m1QqR3PnXw%2BB%2B4Nbpir3xIbRgBsXmzKcO61JrWe5YfYcbSmf8jE2YZOya8SvHBW%2FahTNoBQ9Zzop5fvM8h6LTM156puB6z58SMJIgcg0kxIm1x4jaKb%2FRCypqwbXEvBPTwE63cdeCkR%2Fx%2FyiFAr1n%2Bt%2FnxkITNCgvwGopQUXHi3DwkfbnBwWSqCAY00qdRCu6j%2FfK4UKRHm9cap1gpFZnFYL6yC1cAiyE0ZNXAK9LJCj7WdC5KVwuy%2BpvtwMKzhisoGOqUBsE3jYJv60dINa25N2y4Au4RxXYFqhVtCmvsYxTTffh5S3lYumPAMox1n7SSPpXKnEUot2nXJEVydOB6NmARyvonr71yEae8mVO%2B73AKrtxFJaD61Ap9xqn5GhiPO5kSGNCx1useWDzQh6KbrX5ezXTuhwI02dNTt6A32NilrYR3c0Eh2r9JQ4hyGMbwt6pRpzri55ca%2FUtPCXULlecBcthjQK2zm&X-Amz-Signature=4d8171b93e7ed403dd7e68dbe2abebd7eac57c175a425e4af4d70530bf35a449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEMX4GU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcQmxS7tHNY9H3Jt5YxTOU4hrTyVnniVv%2ByX%2BULax%2F7AiEA7qB8A57stzonLzXIVPTjspF%2FLBzspFdoLO0vij8r%2FYMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNBJpy7b3AXxdw07pircA8GaeDn%2BnBg8LR2ZWOez8RSFE0fkJNTOHYp%2FBdZfefK%2BpNGVd2ZkHi5CZFdWaa3ffQoC2z8p0ntbu1O5%2B03Rt8tK9EuPoXqV9oAWMeAwzlr5DUf8wb31KTJvoWZu43YB2NpVq3qefcFeO8gyeQVacqBklM2EOxTu6cMrKAyjfpNvlm%2F2sKlKL33qTlhLV1KeOG7CoSYZVXnc1eFqLhZJ2iVcWdNMlktmeH2FFdBWXzJOJv89iQNMiKz8NVz8VtkFPxGU%2B5afDuueKWLbUuiYZQVaI%2Fp641KBxHUQSxAFPrhEpq3u%2FQS%2FzZDNQ%2B6kyusYiN4aIXMC0TCBbJckr%2F9rhRP833Wf6hJbwg0OjVUOSt0EmD8iRiPOip%2Fhccq7HfZo4m1QqR3PnXw%2BB%2B4Nbpir3xIbRgBsXmzKcO61JrWe5YfYcbSmf8jE2YZOya8SvHBW%2FahTNoBQ9Zzop5fvM8h6LTM156puB6z58SMJIgcg0kxIm1x4jaKb%2FRCypqwbXEvBPTwE63cdeCkR%2Fx%2FyiFAr1n%2Bt%2FnxkITNCgvwGopQUXHi3DwkfbnBwWSqCAY00qdRCu6j%2FfK4UKRHm9cap1gpFZnFYL6yC1cAiyE0ZNXAK9LJCj7WdC5KVwuy%2BpvtwMKzhisoGOqUBsE3jYJv60dINa25N2y4Au4RxXYFqhVtCmvsYxTTffh5S3lYumPAMox1n7SSPpXKnEUot2nXJEVydOB6NmARyvonr71yEae8mVO%2B73AKrtxFJaD61Ap9xqn5GhiPO5kSGNCx1useWDzQh6KbrX5ezXTuhwI02dNTt6A32NilrYR3c0Eh2r9JQ4hyGMbwt6pRpzri55ca%2FUtPCXULlecBcthjQK2zm&X-Amz-Signature=218ade50dd5dbb85ebeeb6c332f1b4bb9f2ad747ce08cf3a9535923645ee992f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

