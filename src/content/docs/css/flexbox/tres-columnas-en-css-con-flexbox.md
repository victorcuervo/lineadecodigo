---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHJSHWC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICcIYlb2BYtffdTH7FtGhJCY270Jx112mhqgsHjr4j4WAiEA3Q1ZimyL5535d8g2nukNjfsO5DAd7dVWj6FdpeGClygq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBhewbwlBa1xc4iY8ircA1NQRglf2svpNwBF0H8kzbPG9L58Ehv6TbTfW%2BgMtp7TLjhcxpT9N%2FECO1G3oPKCP7HHi07kw9H1yXo2T2oFtEZU5cwVA9WQ1onGiSA4gRDVr7NbBZOktrQ3lIPmtKNaqi%2BxOoqzJ8W%2FeW1%2F6tf6fa7r8l1Ht7LdIh8J%2Bbj0OQSVEfvLn%2FzacRqw1O64tN47LhC0M0JUL2wWqMQm1BatmP3S%2BDBr9qC6fRJvl57ezYkUiQqZJ0U9JCcEHZ3aYLTh6Z%2B%2FyoXk5h4CSGC2Ii16A%2BZ4UmUUYg90bJ8u99573BTw8s4AoPBn86U1K4HfxnU1ZmlJbRv%2B9y2TvJd8hKXzpF0EGM%2BYUdZvrsg7fPkCoElFDChP8rjyMXynlJ8rpF47tkANtwZLn6S5EB%2F1n%2Bzt0Bl68j7x0VZL%2FZNkouWQ2fXhs6h3vu5bzYEPala3qcgqroZ6TUqzWvInnWbo6Ef7FZ9iDmxyydV9OBl7XngfC0rLjkAHUz1efwBhbbz0BnJ3pomV8M6vrzhTsjhOJypCLvTgyP3yRGm4YC%2BHyP7w5WWhOBjCbKzJZ9G5Hgv9jRggXt7pU9INvUdYAB6H49iS3lEqnCdh4b7eXBVWWWl61NyKFNew%2BdzMg0JFszNwMKiExskGOqUBTVFmm2b7AEuQK%2FV1yrauzU94BLEP%2F7ZQEFac92eg3vXb4FbNI32L9fIZO0uzQ15tFrfVBK0tPhEiKVTsBCONaEgdahvpx0AqukpzbofC9g7ZNJu8n80%2BcWT%2Blj6lx1ywPx24Uy0pdZY06Y0Qd4x4syUHaOm9Xgcu6cXcDHI5zifOrvzc3Fpoz41nUF2Jb%2FtHzrvHJczdAXrb3gt6hZylFQRp4ayU&X-Amz-Signature=fce14aaccd13a77546460f418d6a162a5b34d92926ec03bc2de2d36d930052f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHJSHWC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICcIYlb2BYtffdTH7FtGhJCY270Jx112mhqgsHjr4j4WAiEA3Q1ZimyL5535d8g2nukNjfsO5DAd7dVWj6FdpeGClygq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBhewbwlBa1xc4iY8ircA1NQRglf2svpNwBF0H8kzbPG9L58Ehv6TbTfW%2BgMtp7TLjhcxpT9N%2FECO1G3oPKCP7HHi07kw9H1yXo2T2oFtEZU5cwVA9WQ1onGiSA4gRDVr7NbBZOktrQ3lIPmtKNaqi%2BxOoqzJ8W%2FeW1%2F6tf6fa7r8l1Ht7LdIh8J%2Bbj0OQSVEfvLn%2FzacRqw1O64tN47LhC0M0JUL2wWqMQm1BatmP3S%2BDBr9qC6fRJvl57ezYkUiQqZJ0U9JCcEHZ3aYLTh6Z%2B%2FyoXk5h4CSGC2Ii16A%2BZ4UmUUYg90bJ8u99573BTw8s4AoPBn86U1K4HfxnU1ZmlJbRv%2B9y2TvJd8hKXzpF0EGM%2BYUdZvrsg7fPkCoElFDChP8rjyMXynlJ8rpF47tkANtwZLn6S5EB%2F1n%2Bzt0Bl68j7x0VZL%2FZNkouWQ2fXhs6h3vu5bzYEPala3qcgqroZ6TUqzWvInnWbo6Ef7FZ9iDmxyydV9OBl7XngfC0rLjkAHUz1efwBhbbz0BnJ3pomV8M6vrzhTsjhOJypCLvTgyP3yRGm4YC%2BHyP7w5WWhOBjCbKzJZ9G5Hgv9jRggXt7pU9INvUdYAB6H49iS3lEqnCdh4b7eXBVWWWl61NyKFNew%2BdzMg0JFszNwMKiExskGOqUBTVFmm2b7AEuQK%2FV1yrauzU94BLEP%2F7ZQEFac92eg3vXb4FbNI32L9fIZO0uzQ15tFrfVBK0tPhEiKVTsBCONaEgdahvpx0AqukpzbofC9g7ZNJu8n80%2BcWT%2Blj6lx1ywPx24Uy0pdZY06Y0Qd4x4syUHaOm9Xgcu6cXcDHI5zifOrvzc3Fpoz41nUF2Jb%2FtHzrvHJczdAXrb3gt6hZylFQRp4ayU&X-Amz-Signature=4930f10cbf72ab4a9047eee68be9c2308f2ed52e92f8d238e53c5e42e951726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

