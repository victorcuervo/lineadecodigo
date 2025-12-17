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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IIJFSZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK6EkOct%2BkwXF9Yyq%2F9ZgG%2BTJHt4in7LHCZZX4qE93uAiASVZKClznZ0%2BOL8ktZDGxY48hUcwMeZrD0J9%2F7qNkU7Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMk7%2F0v50e70UnqqQ9KtwDShRh%2Fvxc00EkwTzJSDwDLOs1Q%2F%2F%2Bklzmg1rL7xmxEnLuWxSWy0jFVp4mQ%2F7vhe2Iyg5W5wYJb%2BLoMg35L9fEU38kCnFAUuo663eTCTDZr9lObcJjRumuRNEVxsJm0dpii8wTah2DNHCLvgaC5st1ADJ3gv%2BIVhYF32Cb6ZkQRP9mjnf6hKbFfA1mW1Zh681tMIYmkqs5a%2BZNdzpt9%2BwqbCoWRp%2Bjd%2B10D%2BcihYIu9QGd7bd4OR5WLBOxwaeJWEOxwTGWfEnK7XiaHJJUEQtT3GAEGjWll23I%2BS6t0F19P32rYXId5dmzpxmkDG3568DS22wJ7%2FLZcUhVbfUxF%2F9EeDthGqD09OFfNqySZpSsK4zKvfiDaR%2BWx5%2FzZHV8O1TcWwgAnbQwiQZqRs4oKXo31l%2F7kG4ndmlGxMlZkfAFxYvE6ZC8lg4wLgFSl%2FYa%2FD0QrSO63hzl5Wou0XDC9qTIeoFdpjqZH2Dha6B%2FnBO28qqhUiBXjRV39siodcWqYXKZaSBzBXGWIFX2GbnNkmvJH5XaVtjOKpDNTY0%2BzqQTj4NPzXn22y2HYdPh46uVFN0KfoarElwyemOieoWsH6VhXtJgVJmTIvv4kK8AIshwvwmqQkgvtToMT3xatV0wtuGKygY6pgEiK1Rotb76i6sGpDzDIKhubyPQCbOHSOpY4ycHlyDOp3RydTK1EgRl%2B5nkVJtPObFBfj0Tz0ZTFqnolROyA32VmA%2F5h0Lrs1kic00qQzzqQ7Cpuh9KYzXwhffAhfM6wxneZQefoNGI6PIO7vjMs6KC0hU7VT67D6rwfpwWxUt1q7A%2B9bDXZ1%2F4%2BvmUePal9WhSHbnTo3RDTraHrp%2BhYm5lRiitqGDU&X-Amz-Signature=f9966bf237989b6b2d3a0682cfc950ed1cfbb273372c2ae4b40fdcbefb4b24e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IIJFSZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK6EkOct%2BkwXF9Yyq%2F9ZgG%2BTJHt4in7LHCZZX4qE93uAiASVZKClznZ0%2BOL8ktZDGxY48hUcwMeZrD0J9%2F7qNkU7Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMk7%2F0v50e70UnqqQ9KtwDShRh%2Fvxc00EkwTzJSDwDLOs1Q%2F%2F%2Bklzmg1rL7xmxEnLuWxSWy0jFVp4mQ%2F7vhe2Iyg5W5wYJb%2BLoMg35L9fEU38kCnFAUuo663eTCTDZr9lObcJjRumuRNEVxsJm0dpii8wTah2DNHCLvgaC5st1ADJ3gv%2BIVhYF32Cb6ZkQRP9mjnf6hKbFfA1mW1Zh681tMIYmkqs5a%2BZNdzpt9%2BwqbCoWRp%2Bjd%2B10D%2BcihYIu9QGd7bd4OR5WLBOxwaeJWEOxwTGWfEnK7XiaHJJUEQtT3GAEGjWll23I%2BS6t0F19P32rYXId5dmzpxmkDG3568DS22wJ7%2FLZcUhVbfUxF%2F9EeDthGqD09OFfNqySZpSsK4zKvfiDaR%2BWx5%2FzZHV8O1TcWwgAnbQwiQZqRs4oKXo31l%2F7kG4ndmlGxMlZkfAFxYvE6ZC8lg4wLgFSl%2FYa%2FD0QrSO63hzl5Wou0XDC9qTIeoFdpjqZH2Dha6B%2FnBO28qqhUiBXjRV39siodcWqYXKZaSBzBXGWIFX2GbnNkmvJH5XaVtjOKpDNTY0%2BzqQTj4NPzXn22y2HYdPh46uVFN0KfoarElwyemOieoWsH6VhXtJgVJmTIvv4kK8AIshwvwmqQkgvtToMT3xatV0wtuGKygY6pgEiK1Rotb76i6sGpDzDIKhubyPQCbOHSOpY4ycHlyDOp3RydTK1EgRl%2B5nkVJtPObFBfj0Tz0ZTFqnolROyA32VmA%2F5h0Lrs1kic00qQzzqQ7Cpuh9KYzXwhffAhfM6wxneZQefoNGI6PIO7vjMs6KC0hU7VT67D6rwfpwWxUt1q7A%2B9bDXZ1%2F4%2BvmUePal9WhSHbnTo3RDTraHrp%2BhYm5lRiitqGDU&X-Amz-Signature=eaf20ade93ba087ea8f78dea3969510ae1b594a77d7f24983fc874881d4c1ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

