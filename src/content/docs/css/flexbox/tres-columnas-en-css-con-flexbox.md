---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC5VFG54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5cv7Np75CkHml83f9kzQKcfVugjfmoTpU%2FovLiR2WgIgeaG6ThU421dTD95tXfh0%2Be%2BVIY2NMDQ9v7H8zSbFDa0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFph%2BuhbuGfEMqme7ircA9hP8E5xU4Jo%2Fns9plXQChzkNvZ5h8X7ImL4fbB%2F3%2FuvRqpyXSVFJyOdUOygjXW5zkj0LuuU3Tra7yKySHmJoSsiu8%2FfX%2Bh0vgpcGCV5Qddmwi0nb7bfy8am2YKtjNdWn1f7s7EG6xzoVnaGDRlOnx%2BBp90k2U7jUGJ%2Fkk8KCpjvdxVg9bDYVb%2BDz%2B%2B9c2Eam0GG1Snp2nWoj0dX%2F2udCjswalONZ4P2DXm1ZXzjMMJdCzM%2F1blX4Qy14D6lWTLrBaJQswu1xezu09ZWZJOuaMrukwCVw5ctGLbzyekqv%2FfWlv6z5HsqzAYCsXWavm6HToKq1eXTbifh0j7m%2Bl451p%2B%2BVSOMhDZdlJuEHH2Rmikd8IzqM0H3XUc%2B738mz4ga6qJ66K93aJfj%2FQ%2FLtA74Sri4NZ0t0Yh1Oi5%2BCCGZxjPPPOXvCedcnRTg0a8ZsBBAls7QqFutjLcuZqRvnUZacJyP1rGmVkE9uC6vbkfdfSbQH%2FLdPJO0vPqBKPr2PKqRpZfHQqgOAVxbmJVEQDVHdu662J32I7Dt1VIO7qJHiv3syal3bCjWaDIOAnnValMhsWQ4oUnTsBPXORsAIY%2Bwj7icYlDERiNL6IucnlLwMAmgXEB2fHL4cL3ASjW6MIXcxskGOqUB534UjSxkVEdKiuhZAtnJyM4ejeBErkli3y2qcQRTMN%2BkYDS2ebgAOHwmQiOOng3USvHxvjVO95R8cFDZ64Jd7SGtVlOLF7he%2F5NWyOrY2xoTlV%2BGyriPECTwWIZHthp83YimbHx0DSsGSbWzXxUTQJ0JNEGpfb9SUVw4sBEdLpjPFzsykQsDIDM7aGtof9UNAApC0pABythVEI6U8OyR%2BSsvSrH3&X-Amz-Signature=6682bf6436e5c9ab681bd231e6f8c1e7de917db35fe394b9d60113a167c2719e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC5VFG54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5cv7Np75CkHml83f9kzQKcfVugjfmoTpU%2FovLiR2WgIgeaG6ThU421dTD95tXfh0%2Be%2BVIY2NMDQ9v7H8zSbFDa0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFph%2BuhbuGfEMqme7ircA9hP8E5xU4Jo%2Fns9plXQChzkNvZ5h8X7ImL4fbB%2F3%2FuvRqpyXSVFJyOdUOygjXW5zkj0LuuU3Tra7yKySHmJoSsiu8%2FfX%2Bh0vgpcGCV5Qddmwi0nb7bfy8am2YKtjNdWn1f7s7EG6xzoVnaGDRlOnx%2BBp90k2U7jUGJ%2Fkk8KCpjvdxVg9bDYVb%2BDz%2B%2B9c2Eam0GG1Snp2nWoj0dX%2F2udCjswalONZ4P2DXm1ZXzjMMJdCzM%2F1blX4Qy14D6lWTLrBaJQswu1xezu09ZWZJOuaMrukwCVw5ctGLbzyekqv%2FfWlv6z5HsqzAYCsXWavm6HToKq1eXTbifh0j7m%2Bl451p%2B%2BVSOMhDZdlJuEHH2Rmikd8IzqM0H3XUc%2B738mz4ga6qJ66K93aJfj%2FQ%2FLtA74Sri4NZ0t0Yh1Oi5%2BCCGZxjPPPOXvCedcnRTg0a8ZsBBAls7QqFutjLcuZqRvnUZacJyP1rGmVkE9uC6vbkfdfSbQH%2FLdPJO0vPqBKPr2PKqRpZfHQqgOAVxbmJVEQDVHdu662J32I7Dt1VIO7qJHiv3syal3bCjWaDIOAnnValMhsWQ4oUnTsBPXORsAIY%2Bwj7icYlDERiNL6IucnlLwMAmgXEB2fHL4cL3ASjW6MIXcxskGOqUB534UjSxkVEdKiuhZAtnJyM4ejeBErkli3y2qcQRTMN%2BkYDS2ebgAOHwmQiOOng3USvHxvjVO95R8cFDZ64Jd7SGtVlOLF7he%2F5NWyOrY2xoTlV%2BGyriPECTwWIZHthp83YimbHx0DSsGSbWzXxUTQJ0JNEGpfb9SUVw4sBEdLpjPFzsykQsDIDM7aGtof9UNAApC0pABythVEI6U8OyR%2BSsvSrH3&X-Amz-Signature=6c28c001e27a2c8d02b207b244d3bcb28ac683b7d6938b71013235e958f70d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

