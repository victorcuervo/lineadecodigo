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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RETTB7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqFUHJmrBj6rCWl%2F1CSSiHX5KL6UDlAE04k4%2Bc%2F%2FIu9wIhAPC0t%2BQsDKVjtk%2FLhgE2XvUEOP7%2FEjWLVEP7XA2VWtKDKv8DCH8QABoMNjM3NDIzMTgzODA1IgxZHG%2By2V0GKFULG9cq3AMuKb%2FJBhh3oQQ65U2CanwXTNfbXIqi2GXm0o2fjFMpLOQ1Y3kw6iUA3o1qKDVLHYEfiZaCyP4uXPTornXFfGa8uk5PqHidK%2B3F6D1Gd3hGOudF8wWx1C%2Bg6uQXJPS1MW%2B5L0Mae9v%2F2XJLIVnsGvAMlAJuaIRqaTTaWzg9CiQeUuhMYpkOGXXODzdk9tt1YhG%2B7JDo0CtJTC956KzDBWKXtWnljbgTJU7p%2B32Qsj3xlsRnNOmrkO0gzBimY3emS9gYlLCkn0NbP3wM1%2FByQnCPFWwXeWTyQVmLlGY7huvsoTwOi1kngBCFgjy1%2FYD1pFimNz1G96C4Eu61sCN%2Fzu1gO6TAScDTPD88C5ApZ5Z8CI4CFFGORN6FgQ%2FePV9CqJxLfKVHZiRDOV664EaMtUmEJBagxANoUvdzYGRprDlhhGn1b0rxCSQjAXrtxRJrYQfm0NegEnvCvp4kMw20oZ%2BvYKCT2EPBHGYgsq1RYiE8Ne%2FrCmUKwP5A3gS0oQRxJgamQkQrkN3Y%2Fj1%2Ba61gyR3T2u3lcWp4ZrFM6fR8v%2FX0D9AEaT4XW9gL5bAepS2%2BRunK%2BMqtrl6lltcWGICo7q5EIXkAs15gIdwx5kREzFFRJa%2BGdyryNRMmpADQdDDB4YrKBjqkAWjv%2BBMA5msuwRCwZhKoVFSK1gdOOZ263eKlDzFBQvP3ZU14f8SxQ%2BKwzpKzUFUYVuSvpkmxMVnu9vK1rCbRDKVFEP9rNZdX%2F9K8BFAifyM7dlFcOKzXil7Cwmw%2FIhNCLmsl%2Bjc8mBhPQ82GLwku6b1emxTaZUo2L9TpVz8qdpx4BdQDTw1DoKuqTXp5kmWj4%2Bf2kkqtFVO2vzaCDMS56EAun9gF&X-Amz-Signature=a12f8187ed4310b0fb5e54615cb39a43325c7d94f7322eb4b682227a2863b9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RETTB7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqFUHJmrBj6rCWl%2F1CSSiHX5KL6UDlAE04k4%2Bc%2F%2FIu9wIhAPC0t%2BQsDKVjtk%2FLhgE2XvUEOP7%2FEjWLVEP7XA2VWtKDKv8DCH8QABoMNjM3NDIzMTgzODA1IgxZHG%2By2V0GKFULG9cq3AMuKb%2FJBhh3oQQ65U2CanwXTNfbXIqi2GXm0o2fjFMpLOQ1Y3kw6iUA3o1qKDVLHYEfiZaCyP4uXPTornXFfGa8uk5PqHidK%2B3F6D1Gd3hGOudF8wWx1C%2Bg6uQXJPS1MW%2B5L0Mae9v%2F2XJLIVnsGvAMlAJuaIRqaTTaWzg9CiQeUuhMYpkOGXXODzdk9tt1YhG%2B7JDo0CtJTC956KzDBWKXtWnljbgTJU7p%2B32Qsj3xlsRnNOmrkO0gzBimY3emS9gYlLCkn0NbP3wM1%2FByQnCPFWwXeWTyQVmLlGY7huvsoTwOi1kngBCFgjy1%2FYD1pFimNz1G96C4Eu61sCN%2Fzu1gO6TAScDTPD88C5ApZ5Z8CI4CFFGORN6FgQ%2FePV9CqJxLfKVHZiRDOV664EaMtUmEJBagxANoUvdzYGRprDlhhGn1b0rxCSQjAXrtxRJrYQfm0NegEnvCvp4kMw20oZ%2BvYKCT2EPBHGYgsq1RYiE8Ne%2FrCmUKwP5A3gS0oQRxJgamQkQrkN3Y%2Fj1%2Ba61gyR3T2u3lcWp4ZrFM6fR8v%2FX0D9AEaT4XW9gL5bAepS2%2BRunK%2BMqtrl6lltcWGICo7q5EIXkAs15gIdwx5kREzFFRJa%2BGdyryNRMmpADQdDDB4YrKBjqkAWjv%2BBMA5msuwRCwZhKoVFSK1gdOOZ263eKlDzFBQvP3ZU14f8SxQ%2BKwzpKzUFUYVuSvpkmxMVnu9vK1rCbRDKVFEP9rNZdX%2F9K8BFAifyM7dlFcOKzXil7Cwmw%2FIhNCLmsl%2Bjc8mBhPQ82GLwku6b1emxTaZUo2L9TpVz8qdpx4BdQDTw1DoKuqTXp5kmWj4%2Bf2kkqtFVO2vzaCDMS56EAun9gF&X-Amz-Signature=c2e34433ef1ea6f052e52f306a01b777fd3f3a75ab283223fcb76ac833dda547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

