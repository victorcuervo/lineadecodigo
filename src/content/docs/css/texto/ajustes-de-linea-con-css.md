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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMX52H54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD%2F33TOg3y68UMOGCKCiGSQjkxsQE%2FUg4V9Mb9l2BrsAiEA6JIZHisN%2FIp4Yu7lWCWpI%2FbmwgLWN6soQfDkqBd7hnQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCzzDRg%2BfmUnIwZOMCrcA916p1DQfBhV3YTt6e5f%2Fhh9xdTIYMlrCi1cl9sXBBLWSUrMZYH5ieWy1KjGNySAyoDjCAfPfuezXbpkNxLBdvMWsZTBnGjO%2FNgJ2yZLHxk7pD6%2F1a8ycMta8sLqczha91ZOTpez4LU1uWnngT1Vulv6SV829SkBL51J3rNVPqstD0rPvn4gCUxd2FV1StCBVjde6OZKnHpO4nYtTdjKvl7w5lb%2B9rt3jhzsi0GxrWYJXjuiu2YRx03jb%2F8RYAqPl4Zuld6HQ0KKfjOU%2BnfftwotaIdVIots5DWg6tlkxhxkQPBW0zPIRiQuVI%2BEZjQjm%2FktSJvEPW7SKwWYk%2BkNTVsA0zhzXCNxNi1Odd9G%2BJIqtwuIN0mQEhRfUaJ%2FvQwcpjb7dWoXdKc%2BTb4%2FdzOrP%2FDc3p7Qynf2mt8DcJuQ4uB2DgS8lZ1fkTpeHoqdcUHiWz1m%2BiDLGp9oATh27JO9VJ%2BV%2Fcf%2Bt3x%2BhOJDVmqcg231ikvzw23GQ2%2FDwylQeS6L6nOgl8BnEecHQhO25pk1fyMFSMDH0O8PNGJ6F29r0Ke8aaMpwjZCLh7HaEKhrY%2FEWE7yLx96JKbylo3fPzOIReyDjTnFZxts6FPl1tWVNUxHHy%2B606jRpjLpyiw5MNn7h8oGOqUBClMqns3Gr8VWApUk7VfhNMCtONbkv%2Bg2svYeWg3THYukBQmXuacaK18bKjsbqE7jg2hNnR1UYcXQcr7%2BSqjm9h6adTAIPLF5Y0WVYZYohkP9FMddPddU2gs04rkDICdqFaQ0yFVWVGMcjZ7zxUqAXglCuT5tIUDNpYSIdmxvo%2FlWvmjQnrQCzWIZ1ecDLMvlOF9l%2F5nidWWnUFxksLQlV6kRNI2M&X-Amz-Signature=45300d26d64cbb307cf33a71f3ae376620d27415a8b43b83a938153dc93d0290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMX52H54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD%2F33TOg3y68UMOGCKCiGSQjkxsQE%2FUg4V9Mb9l2BrsAiEA6JIZHisN%2FIp4Yu7lWCWpI%2FbmwgLWN6soQfDkqBd7hnQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCzzDRg%2BfmUnIwZOMCrcA916p1DQfBhV3YTt6e5f%2Fhh9xdTIYMlrCi1cl9sXBBLWSUrMZYH5ieWy1KjGNySAyoDjCAfPfuezXbpkNxLBdvMWsZTBnGjO%2FNgJ2yZLHxk7pD6%2F1a8ycMta8sLqczha91ZOTpez4LU1uWnngT1Vulv6SV829SkBL51J3rNVPqstD0rPvn4gCUxd2FV1StCBVjde6OZKnHpO4nYtTdjKvl7w5lb%2B9rt3jhzsi0GxrWYJXjuiu2YRx03jb%2F8RYAqPl4Zuld6HQ0KKfjOU%2BnfftwotaIdVIots5DWg6tlkxhxkQPBW0zPIRiQuVI%2BEZjQjm%2FktSJvEPW7SKwWYk%2BkNTVsA0zhzXCNxNi1Odd9G%2BJIqtwuIN0mQEhRfUaJ%2FvQwcpjb7dWoXdKc%2BTb4%2FdzOrP%2FDc3p7Qynf2mt8DcJuQ4uB2DgS8lZ1fkTpeHoqdcUHiWz1m%2BiDLGp9oATh27JO9VJ%2BV%2Fcf%2Bt3x%2BhOJDVmqcg231ikvzw23GQ2%2FDwylQeS6L6nOgl8BnEecHQhO25pk1fyMFSMDH0O8PNGJ6F29r0Ke8aaMpwjZCLh7HaEKhrY%2FEWE7yLx96JKbylo3fPzOIReyDjTnFZxts6FPl1tWVNUxHHy%2B606jRpjLpyiw5MNn7h8oGOqUBClMqns3Gr8VWApUk7VfhNMCtONbkv%2Bg2svYeWg3THYukBQmXuacaK18bKjsbqE7jg2hNnR1UYcXQcr7%2BSqjm9h6adTAIPLF5Y0WVYZYohkP9FMddPddU2gs04rkDICdqFaQ0yFVWVGMcjZ7zxUqAXglCuT5tIUDNpYSIdmxvo%2FlWvmjQnrQCzWIZ1ecDLMvlOF9l%2F5nidWWnUFxksLQlV6kRNI2M&X-Amz-Signature=e7d0e18bb58a43cdc393f4bb16d99efa906f3e0f1153b8332c4b5e4598b3febb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

