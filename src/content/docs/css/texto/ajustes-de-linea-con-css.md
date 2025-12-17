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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IANG5DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrRuuE%2FnvHuFZHqg%2BamaANza5EcbXGeg%2BPCfe0GtSTTQIhAOSkXKHUGkvkRqxteXiKqYoswGUNkM9ynBaRlkns5P9SKv8DCHsQABoMNjM3NDIzMTgzODA1Igzygc7ra8JVbPFQi6Yq3AMYd5g4LDs24fKeWYDHTqzO%2FOQyB0upL4Rah0fRRbov4Wyq7g0M8IYJNfVdA4I7oApVBKjHgMJb9mRub1KCBVwBp6NzPHe79zo%2FPjhGlystMjy2zsUrtJhbSfKeoBJH3%2FwHeywf6in2By9msRIt5DDT0nRkIzBFl71Jn2xdfe0c2NY5g9sn91Vf7ZLzI7s%2BGyZ1C%2FJ0jHqm8NEzEW0JQbprMJ4fU1212zb9Xs3WFSYmMYXIdbJfEDaL1cxc1PrBbZfzGj97SinxO66iZ5pqno87C0G9ejpQoiD4rQf%2BPtD2J4pS4ZhDu471hneVhDxhKtrAHtUZyJb5U0FoeRGiaWn6DeAf6iNZ6vr3SjvAaTxXQAnQrY0i%2FLbEYwSlECejfbQak%2F7%2FQGL5qzrKnXVoco7ahJi%2FOTRYYgUEuF2k7MN8auBU15DujJS4aJGjDYUzgzBGmuxhUM3JRPKEPzBXzgahloWduYCEoDiIV3uIa864j2FFgOaBeaiOMnBW%2B46s%2F44ai2HMBQgRHvhp9BzOIMGbH1y4kxYYgKXMWN7%2BXHSPNbM9q%2F4%2Bvpca4%2BHAqR8JiWtzgGA0tMjlKFS5zuyVDFdzZdVivAdjO%2Bz0Vg%2FMk7WDCdopqEaDBo6yAIiA2jD374nKBjqkAdKVF2%2FtOFdczq7qjLiOAZUHEegI%2BipvQeWBlgS79at%2Fuw8VRmX08fC0EBTpQBvvYkuTY6DCpzvU9WqiBFCvd4KpyUs2y65OJ%2FxTeOp6l9rIZ5hESI3j%2BmwSL2deVq%2F6STadWfckXDbIp87a46egUcqCQTNsgPPFVKPU%2FobhNlYptTj32UU8WWvx6Z62%2FY%2FBLcrV40IIMtirZ9LUUeROv1NF61Yn&X-Amz-Signature=4bd6f5ff16bc2255124a2cc1fb687a84aef645cc00e69b34a7e49f9d9f0c937b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IANG5DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrRuuE%2FnvHuFZHqg%2BamaANza5EcbXGeg%2BPCfe0GtSTTQIhAOSkXKHUGkvkRqxteXiKqYoswGUNkM9ynBaRlkns5P9SKv8DCHsQABoMNjM3NDIzMTgzODA1Igzygc7ra8JVbPFQi6Yq3AMYd5g4LDs24fKeWYDHTqzO%2FOQyB0upL4Rah0fRRbov4Wyq7g0M8IYJNfVdA4I7oApVBKjHgMJb9mRub1KCBVwBp6NzPHe79zo%2FPjhGlystMjy2zsUrtJhbSfKeoBJH3%2FwHeywf6in2By9msRIt5DDT0nRkIzBFl71Jn2xdfe0c2NY5g9sn91Vf7ZLzI7s%2BGyZ1C%2FJ0jHqm8NEzEW0JQbprMJ4fU1212zb9Xs3WFSYmMYXIdbJfEDaL1cxc1PrBbZfzGj97SinxO66iZ5pqno87C0G9ejpQoiD4rQf%2BPtD2J4pS4ZhDu471hneVhDxhKtrAHtUZyJb5U0FoeRGiaWn6DeAf6iNZ6vr3SjvAaTxXQAnQrY0i%2FLbEYwSlECejfbQak%2F7%2FQGL5qzrKnXVoco7ahJi%2FOTRYYgUEuF2k7MN8auBU15DujJS4aJGjDYUzgzBGmuxhUM3JRPKEPzBXzgahloWduYCEoDiIV3uIa864j2FFgOaBeaiOMnBW%2B46s%2F44ai2HMBQgRHvhp9BzOIMGbH1y4kxYYgKXMWN7%2BXHSPNbM9q%2F4%2Bvpca4%2BHAqR8JiWtzgGA0tMjlKFS5zuyVDFdzZdVivAdjO%2Bz0Vg%2FMk7WDCdopqEaDBo6yAIiA2jD374nKBjqkAdKVF2%2FtOFdczq7qjLiOAZUHEegI%2BipvQeWBlgS79at%2Fuw8VRmX08fC0EBTpQBvvYkuTY6DCpzvU9WqiBFCvd4KpyUs2y65OJ%2FxTeOp6l9rIZ5hESI3j%2BmwSL2deVq%2F6STadWfckXDbIp87a46egUcqCQTNsgPPFVKPU%2FobhNlYptTj32UU8WWvx6Z62%2FY%2FBLcrV40IIMtirZ9LUUeROv1NF61Yn&X-Amz-Signature=ea4edb944df4c6a7487222065f6f7cb6b39807de549abe6cf03c612994dbb35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

