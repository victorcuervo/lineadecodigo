---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWY3SRLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkA4iG2q6NnK6ASmjP4Uh4felQOvtdY%2Bm3p8PHULmfOAiAmj0jdhVYCqbvfCMQ0xQpUkpi8e11o7YaTy8nH58R7lSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMhoNAbot4oNDctGDqKtwDUKiFYBPqVvwhxxfhnd4eaO2XJccfZD%2F7VdKxRZbYRhdFTmediEClBZpOGf2X0poMVaF6qpZyb4Jlys%2B%2Bd9y0CNaH7CvL5O35HPgiEgeKL6mZLe%2F3RfQ9fGotuK0SkM%2FxX9hIQ8vroZK8P0N7FbSQacXO62slURwohLS23ZvOcfltiVJVOCYGhUH%2FkPta5LM4rL8FSREObYS%2FIwtEXUsogX6vzWaxsOORH6%2FnXRz6Pk7y%2Bram2W%2B%2FArcGqYCguPl8ZfnaqpE1HsLP65f34vALfjxb7e6HBz2fC4Jphyo4uXIM75LkWta0VzrsiHalL9Wbv%2FtBJyNT%2F9ZbABmNJRsfwJX70xoDZsmr8fnm5Qqyep6N1zHKRlcYmZFgwvpVPV0X1rYkaj4s3dZELP1jQXrJhhLuCi%2B%2BqZIlCX6beWf%2FN27yN%2FwojMPj0DaGVJiYGtnXmYMh6av6W%2FWOyZKoKSlgcjQPVmYvkVTWo1vAY1%2FJF%2FFRkZorbj3xdmkgqyoDt6298J8MsuXA3EVdaQZ%2BkQF4XgknGZ37AWvdvsi7kwBh5ArtttIY%2FE4O0lVkPIbgaFRu04r5lEyHB6URspP%2Bw7X1Fh0z%2BLgC0gKsCDHmpNj2Rhzh%2Fo6O84GYR5L8iXgw3K3JyQY6pgF6UrKRlNbJfU%2BKjl6VAHHJ1XHfPXvF0Qm0rl0Gm81X%2FFyrl%2FL6ZgIaWUzVrRTpRr0RKwIdtG4QvupQwtR%2FeqD1KsRcTMa9PK2ggGGSAqwyBCLGUNpc0GWWZadojeQo6icJR1nfADQMRArnfB1brUTPsTYdlVoyeYxzucmqIHzQw9TYUukuPqgGoqBrSmgG7pc6NFS4Pz6rGahfaPlFsLFanKet9c3V&X-Amz-Signature=658e94fea5aca0587c6156ed6d1214d639c6106c41db45458f9223c4d5433b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWY3SRLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkA4iG2q6NnK6ASmjP4Uh4felQOvtdY%2Bm3p8PHULmfOAiAmj0jdhVYCqbvfCMQ0xQpUkpi8e11o7YaTy8nH58R7lSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMhoNAbot4oNDctGDqKtwDUKiFYBPqVvwhxxfhnd4eaO2XJccfZD%2F7VdKxRZbYRhdFTmediEClBZpOGf2X0poMVaF6qpZyb4Jlys%2B%2Bd9y0CNaH7CvL5O35HPgiEgeKL6mZLe%2F3RfQ9fGotuK0SkM%2FxX9hIQ8vroZK8P0N7FbSQacXO62slURwohLS23ZvOcfltiVJVOCYGhUH%2FkPta5LM4rL8FSREObYS%2FIwtEXUsogX6vzWaxsOORH6%2FnXRz6Pk7y%2Bram2W%2B%2FArcGqYCguPl8ZfnaqpE1HsLP65f34vALfjxb7e6HBz2fC4Jphyo4uXIM75LkWta0VzrsiHalL9Wbv%2FtBJyNT%2F9ZbABmNJRsfwJX70xoDZsmr8fnm5Qqyep6N1zHKRlcYmZFgwvpVPV0X1rYkaj4s3dZELP1jQXrJhhLuCi%2B%2BqZIlCX6beWf%2FN27yN%2FwojMPj0DaGVJiYGtnXmYMh6av6W%2FWOyZKoKSlgcjQPVmYvkVTWo1vAY1%2FJF%2FFRkZorbj3xdmkgqyoDt6298J8MsuXA3EVdaQZ%2BkQF4XgknGZ37AWvdvsi7kwBh5ArtttIY%2FE4O0lVkPIbgaFRu04r5lEyHB6URspP%2Bw7X1Fh0z%2BLgC0gKsCDHmpNj2Rhzh%2Fo6O84GYR5L8iXgw3K3JyQY6pgF6UrKRlNbJfU%2BKjl6VAHHJ1XHfPXvF0Qm0rl0Gm81X%2FFyrl%2FL6ZgIaWUzVrRTpRr0RKwIdtG4QvupQwtR%2FeqD1KsRcTMa9PK2ggGGSAqwyBCLGUNpc0GWWZadojeQo6icJR1nfADQMRArnfB1brUTPsTYdlVoyeYxzucmqIHzQw9TYUukuPqgGoqBrSmgG7pc6NFS4Pz6rGahfaPlFsLFanKet9c3V&X-Amz-Signature=de8131dc4b178c62febb8c9a46275b09b5a966a692047e069d6c983306bd11c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

