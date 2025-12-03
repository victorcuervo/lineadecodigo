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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWVTGXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEwP%2FYnUut%2F2i5KtCho6hF%2B%2FFG%2BFhRqRWTceBOY1A9WpAiAvqThd2yW3sd3yNsDo3RSW9nkKEZsN%2BHz3Ogu9Y77Orir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMp94qxZkYuZYCvrlUKtwDdNa987XCLM3a73YGd%2Bmo9HV0tDt7CzgYnicOToVvb7xnYYrFqc2AA1hjzx83Fz%2B6THsxTWg8tQObFeaboTGYANocbg5SXEVfjWo3ijLQrN%2Bz7Aa8p7pe9JljMK7oYdByh0zdtz0opYexO%2B0n24f6FtSgXQOPlCgew5Pe%2FsEI9EmSLX9xg8%2BXkAYclKGhMRjwipgkx7yfkCTunzZSGRk4n%2FziCOUCQHmQUiBjF%2B1zZ%2Bjq6WNu5kVrbX2VSRkjew8FMRiNRcMKDQRr2G2qa1YAi8kD%2B3n48SRSrYVtCxG7QBYDRQrTXrynx5G6BbVWGIS0D7%2FNbBjgKOgJ6M7zbIbZ84RQJmhsaXqPqIoh21DNFireBEKUWup10l3LZAx87wi3cbjKOrbJ9SqGtCjdpnpb2Vauhfj5s4QEI3BqRW%2FHPxHh7EeEiglLLrqDq6FVtooF3LnYjgyNGRxdU8Llzfs5KBLmKo0gFxp37l3FrEZf20iea0trxytgv8jvzFksaumCdZ32OHUQf6x1Y0ykCZTUIs6Mjlu%2FTHXdIAiO2h3bLsAB%2FxxyStJqqa8fvQqV0YA93mQ7Mshf7Os%2BF0wLp8bNLVcU8zj9TVSfa58YqnNqKTX7Sw44mQ%2B1%2F4XTNpQwtoG%2ByQY6pgHH9FQjpIftrA%2FvCGy2rGjpVSFBAknWvMvbUvnDUiXaPvgRqMuWh6DLbCqbBbStfTO5eNUkOXo%2FMc48IIAh1IpcUlSlhjqUErCrlZPeskY%2BzVeuvmUHIKcLFc4I0PUeSo7np34NZlHQMKn9ckXnCYjfDVhJu4BenaCPipiGsbHWXg6kSI6T09803Kuffam4n75uw2tzLx8Bf9NVStuvR6lTwXVwegj2&X-Amz-Signature=bf4c31d72dd21e0fd0e66f92effd22a08b781a0c0f46697ba36781b7782997f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJWVTGXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEwP%2FYnUut%2F2i5KtCho6hF%2B%2FFG%2BFhRqRWTceBOY1A9WpAiAvqThd2yW3sd3yNsDo3RSW9nkKEZsN%2BHz3Ogu9Y77Orir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMp94qxZkYuZYCvrlUKtwDdNa987XCLM3a73YGd%2Bmo9HV0tDt7CzgYnicOToVvb7xnYYrFqc2AA1hjzx83Fz%2B6THsxTWg8tQObFeaboTGYANocbg5SXEVfjWo3ijLQrN%2Bz7Aa8p7pe9JljMK7oYdByh0zdtz0opYexO%2B0n24f6FtSgXQOPlCgew5Pe%2FsEI9EmSLX9xg8%2BXkAYclKGhMRjwipgkx7yfkCTunzZSGRk4n%2FziCOUCQHmQUiBjF%2B1zZ%2Bjq6WNu5kVrbX2VSRkjew8FMRiNRcMKDQRr2G2qa1YAi8kD%2B3n48SRSrYVtCxG7QBYDRQrTXrynx5G6BbVWGIS0D7%2FNbBjgKOgJ6M7zbIbZ84RQJmhsaXqPqIoh21DNFireBEKUWup10l3LZAx87wi3cbjKOrbJ9SqGtCjdpnpb2Vauhfj5s4QEI3BqRW%2FHPxHh7EeEiglLLrqDq6FVtooF3LnYjgyNGRxdU8Llzfs5KBLmKo0gFxp37l3FrEZf20iea0trxytgv8jvzFksaumCdZ32OHUQf6x1Y0ykCZTUIs6Mjlu%2FTHXdIAiO2h3bLsAB%2FxxyStJqqa8fvQqV0YA93mQ7Mshf7Os%2BF0wLp8bNLVcU8zj9TVSfa58YqnNqKTX7Sw44mQ%2B1%2F4XTNpQwtoG%2ByQY6pgHH9FQjpIftrA%2FvCGy2rGjpVSFBAknWvMvbUvnDUiXaPvgRqMuWh6DLbCqbBbStfTO5eNUkOXo%2FMc48IIAh1IpcUlSlhjqUErCrlZPeskY%2BzVeuvmUHIKcLFc4I0PUeSo7np34NZlHQMKn9ckXnCYjfDVhJu4BenaCPipiGsbHWXg6kSI6T09803Kuffam4n75uw2tzLx8Bf9NVStuvR6lTwXVwegj2&X-Amz-Signature=fd59d772631a42b03984f9280f838aec7e2fa3370a1951aa59098149bcdab5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

