---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNYAZZB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEUD9RPhv5tDpM7iZAIYIBZokejY5At0WyCEYrPXR6JpAiAJD4kBgJ6nrOKB4P38tJlT%2F27g2%2Bd2NIWvoigea%2B8VSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BLmNxXKCKgTgvtfRKtwDrlg7sug%2Brud0QB6%2FpPe7VqkERJeeY6ttfr5Ai%2BoBxfpl%2Bej5l1lLe1xo67J1HeQy4FYToAebCZODkJGcasuwuy%2FsF%2FUxoyLbqYazVokmrnyN71oEURzdxDqG4m7CRseTHkwVy%2Btw7snm4HqKfW79WU%2BPawfgxJDdJq8z6IIewbp0HiJPiZyagjSAUDV6qc3%2FuSLXAri%2FyX6JilUD9SV6KYxowgxVqROWPbB9bAtoUWxq6Uud67Ei4JOsG0oITl243w75JukKw2zb9omVIUd%2B6n%2FNjkPewlIERI8t%2BHId9gfLq20Kd90B4I2xoAvBNGlDMNIsOBAlg80d%2BJC66dyGkD%2BqCUWkGrCxQW4QiG9y9f0pHt7T6hQ%2BF%2FKIREmx6ntc9j8HXHoA1ZKtGDAJZAcxQl8egR2YdnhsI6hLoHFMlbrF8BndbzEoR8W4YEuQJQDNi6Z%2Bi6vFqAzQTPIqqtfuHII4ZO62Y408UCWMeGaWpIf7oT%2Bfj%2F0MoTAHjHviy48rOe2DyXL42%2FNcHqBhpvQ%2BYqskMPLCf6qf357HPFbR1aWNd6q0NKk0eP5NEHBPYPaxqyDMXkUE%2FLMgbXhOFYv79NXgTnpTOWutakQigrZ%2BNBzMgpdLU0gHKNlJUPQw7OnAyQY6pgGq2XmnC1Spq8Jhjv6muqcWc2qpKY%2B4m2bj9Mq4tyrqqSKswhOk70CxLotSfaXdwEELs28hFbqT6xLI6GM6oGW0hXeWTr4JzW18whRpelmYDB9UuxpxDk65UjZRdgtoNzC9bZjWe4NeyLl%2FrVEG9xomcb7QVuEhFjzmapKpr9dShBIFvVbLZd6Vt2fbv7izoq%2FtfZxcN%2BXegILtGbaByxHDBQEkESU5&X-Amz-Signature=33a7f26b19233b21f8cd5d5f0a81a736d65fb78c2b068629df10d7f153f0b632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNYAZZB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEUD9RPhv5tDpM7iZAIYIBZokejY5At0WyCEYrPXR6JpAiAJD4kBgJ6nrOKB4P38tJlT%2F27g2%2Bd2NIWvoigea%2B8VSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BLmNxXKCKgTgvtfRKtwDrlg7sug%2Brud0QB6%2FpPe7VqkERJeeY6ttfr5Ai%2BoBxfpl%2Bej5l1lLe1xo67J1HeQy4FYToAebCZODkJGcasuwuy%2FsF%2FUxoyLbqYazVokmrnyN71oEURzdxDqG4m7CRseTHkwVy%2Btw7snm4HqKfW79WU%2BPawfgxJDdJq8z6IIewbp0HiJPiZyagjSAUDV6qc3%2FuSLXAri%2FyX6JilUD9SV6KYxowgxVqROWPbB9bAtoUWxq6Uud67Ei4JOsG0oITl243w75JukKw2zb9omVIUd%2B6n%2FNjkPewlIERI8t%2BHId9gfLq20Kd90B4I2xoAvBNGlDMNIsOBAlg80d%2BJC66dyGkD%2BqCUWkGrCxQW4QiG9y9f0pHt7T6hQ%2BF%2FKIREmx6ntc9j8HXHoA1ZKtGDAJZAcxQl8egR2YdnhsI6hLoHFMlbrF8BndbzEoR8W4YEuQJQDNi6Z%2Bi6vFqAzQTPIqqtfuHII4ZO62Y408UCWMeGaWpIf7oT%2Bfj%2F0MoTAHjHviy48rOe2DyXL42%2FNcHqBhpvQ%2BYqskMPLCf6qf357HPFbR1aWNd6q0NKk0eP5NEHBPYPaxqyDMXkUE%2FLMgbXhOFYv79NXgTnpTOWutakQigrZ%2BNBzMgpdLU0gHKNlJUPQw7OnAyQY6pgGq2XmnC1Spq8Jhjv6muqcWc2qpKY%2B4m2bj9Mq4tyrqqSKswhOk70CxLotSfaXdwEELs28hFbqT6xLI6GM6oGW0hXeWTr4JzW18whRpelmYDB9UuxpxDk65UjZRdgtoNzC9bZjWe4NeyLl%2FrVEG9xomcb7QVuEhFjzmapKpr9dShBIFvVbLZd6Vt2fbv7izoq%2FtfZxcN%2BXegILtGbaByxHDBQEkESU5&X-Amz-Signature=dc9390a670cecb8f6b71a122b9144ed4cc70fac1f6cf45108806ce2f7117d456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

