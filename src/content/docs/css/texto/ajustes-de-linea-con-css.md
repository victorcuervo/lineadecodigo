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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDJB6XJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkQizrnFlZy6437VaaJMXPK2iQu9Ro58SNgeVDEjFKhwIgR%2FbkMIbcBr%2BPO%2BpZ57B34ubVrbfcao4C57WHZadz480q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHD5cyHjHFf%2BLknFySrcA7W%2F67qmsVrCbTqmcrU4TfS2SumsVQ1AQYgQCuP5Gp5XDqYu0ScoDjLEbyLEFhbdFumJi8kwtIIC3j04oj7CUrC3p2kUnPnO%2F0NjP5Th49oH8mSiFzgjMf9OvsJ2ni4Xdv56o4%2FmrW%2BjfVTGPCm%2Fn%2Fl%2F7dOdtX73GlBnlMlEotH3Sc32%2FerlcIAM2qO%2F6rgYob3fnnC%2BXEaDvf4E7q3rbrpup%2BJEvVivai5DEjeZXZgOxQixbvHUWxXetmoF9KKqlEPaNaUmjdB51TbSnlUmqxl3nJl%2Bz2lgqlyVEedIOf4dfYwH3xg9FgITpDsCF%2F9KId8vxwN%2FTjlE1597fx4XJBdoQPUN9VFJHWqk%2BsTkehinzhfq0ywGaqklhteHjb5dXkPq%2FxzWGXOZyzjD05mY0VAx%2FngCwFcWQkRqgJFMyvVrx2iKbcCDG6%2FxMQHa0vUdZmA5MP9xQRHn9TpT0xUYv5P%2FKJOWEvnrwasl2He2LGQ4aEAcfajp4QhBjj%2FkTEnvv0DuWLj8S32vLpacmf502IqXXSVxytdo%2ByskaZEUZ3sJAJfH76tAcpbMX8X50KdIYTJyzVJVOVnDC%2FfFzaxz94tPLB%2BGnfOFDC%2B5iwzkj%2BLIE81OVVr%2FzEQxys2DMLz7h8oGOqUBgAu6R9zdIJfBzMeE8OeKi82EEiQfXaXs16Vt3xg%2BjMSFf6VEbHbB9qOkJ5qThLeLu3NZR0zZFaZa9piz7gIHbN7AClXsgy86eHpKsep1GoWuRhj9fVRPjTZ9sHdf90n4h12T%2BZ8qEi5FGV6Nk5aoXLU750iPNWgdWdXYYC18lS%2FjTzYX72nur9ebZafGGQWOLgGSzU78ziUue%2BLkUrGn5wLRRt6u&X-Amz-Signature=9949d1fdbdda2df9855ab7c27d482aed6c463efcb3e62b95952861bcf277372b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDJB6XJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkQizrnFlZy6437VaaJMXPK2iQu9Ro58SNgeVDEjFKhwIgR%2FbkMIbcBr%2BPO%2BpZ57B34ubVrbfcao4C57WHZadz480q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHD5cyHjHFf%2BLknFySrcA7W%2F67qmsVrCbTqmcrU4TfS2SumsVQ1AQYgQCuP5Gp5XDqYu0ScoDjLEbyLEFhbdFumJi8kwtIIC3j04oj7CUrC3p2kUnPnO%2F0NjP5Th49oH8mSiFzgjMf9OvsJ2ni4Xdv56o4%2FmrW%2BjfVTGPCm%2Fn%2Fl%2F7dOdtX73GlBnlMlEotH3Sc32%2FerlcIAM2qO%2F6rgYob3fnnC%2BXEaDvf4E7q3rbrpup%2BJEvVivai5DEjeZXZgOxQixbvHUWxXetmoF9KKqlEPaNaUmjdB51TbSnlUmqxl3nJl%2Bz2lgqlyVEedIOf4dfYwH3xg9FgITpDsCF%2F9KId8vxwN%2FTjlE1597fx4XJBdoQPUN9VFJHWqk%2BsTkehinzhfq0ywGaqklhteHjb5dXkPq%2FxzWGXOZyzjD05mY0VAx%2FngCwFcWQkRqgJFMyvVrx2iKbcCDG6%2FxMQHa0vUdZmA5MP9xQRHn9TpT0xUYv5P%2FKJOWEvnrwasl2He2LGQ4aEAcfajp4QhBjj%2FkTEnvv0DuWLj8S32vLpacmf502IqXXSVxytdo%2ByskaZEUZ3sJAJfH76tAcpbMX8X50KdIYTJyzVJVOVnDC%2FfFzaxz94tPLB%2BGnfOFDC%2B5iwzkj%2BLIE81OVVr%2FzEQxys2DMLz7h8oGOqUBgAu6R9zdIJfBzMeE8OeKi82EEiQfXaXs16Vt3xg%2BjMSFf6VEbHbB9qOkJ5qThLeLu3NZR0zZFaZa9piz7gIHbN7AClXsgy86eHpKsep1GoWuRhj9fVRPjTZ9sHdf90n4h12T%2BZ8qEi5FGV6Nk5aoXLU750iPNWgdWdXYYC18lS%2FjTzYX72nur9ebZafGGQWOLgGSzU78ziUue%2BLkUrGn5wLRRt6u&X-Amz-Signature=38e1d6767358710f9baf6cb49820b6b41ff0aab0e7fdb8baa9ceb93f0e18e769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

