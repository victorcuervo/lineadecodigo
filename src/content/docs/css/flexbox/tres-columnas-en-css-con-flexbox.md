---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVI4HFA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8GA6ZGFvfgYAUqzi3Mq5kl5jdzcdO4WxrSqoiucZdLAiBoKVFc3dGx8KKKvQHBbbl8HhTsW5lZSZjL%2B1SyDcCxiSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWvVGUrWatCrp5KJfKtwD3u%2BpVvy4is2wYfJtzVLsuUZArjfjpIOzKGBIZFgXldvGnU1WFj3wmK7npAmYpOrAXagpq9p8rDyj4e3BuiGhqf2rXh2arHTM5Fi0eGU5I809wlyX6v%2FQ%2F14JbF8wCQjH9lHOddmTpjTqmTslGAFkyrLJ1u6b5AyKhJ2j4Efr%2FXcDNPR9lhKf%2Fpgk05xgAsMhj7BSHiW83cS1NM%2BwARiz3hh5H0XFDnE5jn1IM5B0PAxjuvWvnx4H5nrJWJnZf4nz%2BykadsHvYpqQqBHlBggYzCkuhUZJzESudxdoQMS%2BZbM6PkeEhF%2Bm6u3VavTDVo%2B4AyqejPbJmHHH4SD9eUWyyN%2Bw3n9l6mEbjn0ui9LbW5k%2Bmy16zrDKg9CXXQ9uD%2FVpgZ6uLhZrdCH1dJayvAiueCYjNlINCJaxcF6jiMRgHP0zWMQZR5kKeeoMr1SWyecJY3opNYEdHL8WI8eh3cct99f%2BZqzCXdxiIL7kTPWcns5G8HEKJO7qoI9nzSvjreBDO9Y4GdPCxtRfpuztAPJF3MYnQA4%2B9APx7FW%2B83dlV7d9ymPBK6jqHjLdohVDwHS4SyHqnPt8dUg8RcfM7Gvun7VY5aH9MODlDmTqRMVnI3Q64lH4%2FpjMAJyQC8gwx5rVyQY6pgHUPc%2FzHdAKTl1OB%2BCzFR%2FcYSSNRGgHJ7TFR2tKvPD81A4oS8m2sWGHdK6h7cYLUwUTwm7mh8c%2FKHtuvCXrVoirulzY6sG%2B48NomCf0HvQ1j7vY8U3Re3Pitv8zmMHxRqA68aEyrwfaFcu15IUGEpa5eJ9D6Gb%2BYr6gpr9hPGRMPrgsI4b%2FJ%2FN%2Bx2D9WBbEKkg19q2POTXsAHmloYxkReRgtxoBjmj5&X-Amz-Signature=a34df5234dd64c9a142c8f8842f53566f512c3e287114df52b1db0ffeaceb10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVI4HFA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8GA6ZGFvfgYAUqzi3Mq5kl5jdzcdO4WxrSqoiucZdLAiBoKVFc3dGx8KKKvQHBbbl8HhTsW5lZSZjL%2B1SyDcCxiSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWvVGUrWatCrp5KJfKtwD3u%2BpVvy4is2wYfJtzVLsuUZArjfjpIOzKGBIZFgXldvGnU1WFj3wmK7npAmYpOrAXagpq9p8rDyj4e3BuiGhqf2rXh2arHTM5Fi0eGU5I809wlyX6v%2FQ%2F14JbF8wCQjH9lHOddmTpjTqmTslGAFkyrLJ1u6b5AyKhJ2j4Efr%2FXcDNPR9lhKf%2Fpgk05xgAsMhj7BSHiW83cS1NM%2BwARiz3hh5H0XFDnE5jn1IM5B0PAxjuvWvnx4H5nrJWJnZf4nz%2BykadsHvYpqQqBHlBggYzCkuhUZJzESudxdoQMS%2BZbM6PkeEhF%2Bm6u3VavTDVo%2B4AyqejPbJmHHH4SD9eUWyyN%2Bw3n9l6mEbjn0ui9LbW5k%2Bmy16zrDKg9CXXQ9uD%2FVpgZ6uLhZrdCH1dJayvAiueCYjNlINCJaxcF6jiMRgHP0zWMQZR5kKeeoMr1SWyecJY3opNYEdHL8WI8eh3cct99f%2BZqzCXdxiIL7kTPWcns5G8HEKJO7qoI9nzSvjreBDO9Y4GdPCxtRfpuztAPJF3MYnQA4%2B9APx7FW%2B83dlV7d9ymPBK6jqHjLdohVDwHS4SyHqnPt8dUg8RcfM7Gvun7VY5aH9MODlDmTqRMVnI3Q64lH4%2FpjMAJyQC8gwx5rVyQY6pgHUPc%2FzHdAKTl1OB%2BCzFR%2FcYSSNRGgHJ7TFR2tKvPD81A4oS8m2sWGHdK6h7cYLUwUTwm7mh8c%2FKHtuvCXrVoirulzY6sG%2B48NomCf0HvQ1j7vY8U3Re3Pitv8zmMHxRqA68aEyrwfaFcu15IUGEpa5eJ9D6Gb%2BYr6gpr9hPGRMPrgsI4b%2FJ%2FN%2Bx2D9WBbEKkg19q2POTXsAHmloYxkReRgtxoBjmj5&X-Amz-Signature=93d63fb4b026cb794916bf5475deea8652733deeab8b40323cfb37957dc4744a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

