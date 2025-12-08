---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMIC3RD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbzV2J3kT4SaFDwEf5QIWk1Jr0To9FSaIQDKTINTcSQAiEAusLtgQgISiOSP46sbmEfHmWKsBjF7T5cKNOxe8h1NrIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpVlmv0hFO8BnhZtCrcA%2F0kmB5a978QfC5QqLdBOcWdTwehjD973oGpw%2FJkedMg8Qf8xJ0QTue3KhWHyfG0cHUXSOE0lPmjk5mVvFjsAlYPw8qqZ5GQ%2FePB4QcLMLqOujZlccYFePzkTzC9a34xkiKXqY4tsX%2FPcKNQJ68QaZXbyxlITFVVnIL2S%2Bd95cWC1xryfocZ9l4Z0PkDuLs%2FcblyKPXeSFNT8sxALBo64jifL1SOsewKhFsUmnGSjjt%2BjOLSCyrTtD9EN%2BOAUhHDpS6MHtR1Ioxl7w8rHwf5KvqE2taLlLce1ZfHB7yF4pLAqFVYMJ9gprhs49u3IqL%2BxickbAFz3DkRsIqTmlRQuJY%2B%2F%2FtRgzkxxzHqs4ShPrjQAGI8xI5yv%2BqPohKKA1d9fRzhD%2FwWroZQla1z3O6QMCxyn4%2F1f6djfxlXN0dIv2ZZgrKydu%2FCroL6oXI9tk70c3x4aQd6Tj4l3uGrv5bbIjOJT%2ByDW7Y1ui5TAjTfMgg2PPHlUXvGD7Dx%2BQmH4gCK8xLHtf4vy4R0gSzjPPknqgnt9MaIwIfGD1AwSyoWr6Ol1BJK%2FOTpnwIQkwL164I%2BDM8uBRFdpEejrY%2FyfpAelp1YqrO1jojgNgp8PaG54xY8G7kqLYrZ%2F9p5T9SjMPmG3MkGOqUBnWqsM%2BPAseZwKohAkBWQqlboS4n64iZ%2BYR4nBtqvcwV2IgGjMx0fsEuYhtu%2FQKiEg8olLJ5tRClrd184m9q9E4il6md5LFtgBtCu9jJdxvRuIVszlXhlQNnsdpHhqj9zs%2Bzf19VqUDtbNrFLoVNgj2ZYGSQJqdh7WK7JuWYKiRbIDrX%2Bj8vULUpTbEyEr4t15xU2jPrHGqE%2FUBtZyhuqUEocdesX&X-Amz-Signature=72b7f50c29704064365ddc3b58090017995b769dc3184f1ebdac8e13e59592f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMIC3RD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbzV2J3kT4SaFDwEf5QIWk1Jr0To9FSaIQDKTINTcSQAiEAusLtgQgISiOSP46sbmEfHmWKsBjF7T5cKNOxe8h1NrIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpVlmv0hFO8BnhZtCrcA%2F0kmB5a978QfC5QqLdBOcWdTwehjD973oGpw%2FJkedMg8Qf8xJ0QTue3KhWHyfG0cHUXSOE0lPmjk5mVvFjsAlYPw8qqZ5GQ%2FePB4QcLMLqOujZlccYFePzkTzC9a34xkiKXqY4tsX%2FPcKNQJ68QaZXbyxlITFVVnIL2S%2Bd95cWC1xryfocZ9l4Z0PkDuLs%2FcblyKPXeSFNT8sxALBo64jifL1SOsewKhFsUmnGSjjt%2BjOLSCyrTtD9EN%2BOAUhHDpS6MHtR1Ioxl7w8rHwf5KvqE2taLlLce1ZfHB7yF4pLAqFVYMJ9gprhs49u3IqL%2BxickbAFz3DkRsIqTmlRQuJY%2B%2F%2FtRgzkxxzHqs4ShPrjQAGI8xI5yv%2BqPohKKA1d9fRzhD%2FwWroZQla1z3O6QMCxyn4%2F1f6djfxlXN0dIv2ZZgrKydu%2FCroL6oXI9tk70c3x4aQd6Tj4l3uGrv5bbIjOJT%2ByDW7Y1ui5TAjTfMgg2PPHlUXvGD7Dx%2BQmH4gCK8xLHtf4vy4R0gSzjPPknqgnt9MaIwIfGD1AwSyoWr6Ol1BJK%2FOTpnwIQkwL164I%2BDM8uBRFdpEejrY%2FyfpAelp1YqrO1jojgNgp8PaG54xY8G7kqLYrZ%2F9p5T9SjMPmG3MkGOqUBnWqsM%2BPAseZwKohAkBWQqlboS4n64iZ%2BYR4nBtqvcwV2IgGjMx0fsEuYhtu%2FQKiEg8olLJ5tRClrd184m9q9E4il6md5LFtgBtCu9jJdxvRuIVszlXhlQNnsdpHhqj9zs%2Bzf19VqUDtbNrFLoVNgj2ZYGSQJqdh7WK7JuWYKiRbIDrX%2Bj8vULUpTbEyEr4t15xU2jPrHGqE%2FUBtZyhuqUEocdesX&X-Amz-Signature=f8bc4f5de9bcfc066c6e5326a27894641944392ffe8f8922da71e7748b2df434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

