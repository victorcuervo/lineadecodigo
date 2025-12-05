---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRWUZUH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Cevfv4ZPh2C1Nz%2Fq8Oa9IrTj3eXq5HGSWpnZ4zmNGQIhAN3awbCzyJr3IVYuXTOkYNgYc%2Btdy8F4uELPcYGxSQC%2BKv8DCFsQABoMNjM3NDIzMTgzODA1Igx%2BB5k6mJPMfTRTfJ8q3AMBuycEc%2FzAtLYqeGOXuApw9LcGZ20%2BD0UaO5vPsH%2FvdK4t7jLC0oqhk9BNLsKPBaejF3Z%2BvjIwBSO43D6avVCDMjbzUfZUfjBUJ1MbreQDBaK%2FmK31Kac8bvaWb4QJv5iAkaQUgLRsOBUzlYTNuYQVMqdj0edMY57vzA%2FtvRVlIsUR%2BWJ6owOocEXgE4WICkuoPNCcCHrKc3wAph2CKoT0G%2F722LeqNHr2FEbIXLgc%2B%2F4543%2FKyiUqjDlfIuIkMu6%2F4i2xFkc2Q9lQUMIZE8rcBSrEhnUGv4d1ZInYZmaJW77Jg2%2BqqOqDEnLD4%2B1CgKpqza3Zj6PneG%2F7jmQ8vL2mNmGNcuPX63hseQ27mjNqhdlAcykuWgcjMLr%2BSs6tpG%2B3y7VM7s3zew0icNJzNcMD3wuIs%2B2VOvCidTeFfTdfU2K9n8Rwx8t%2BUZAGRhJRYug6z6I1KG6jNUWLaaXyCcDlysD7qBq%2FDdODdSuIoSAH7tfDfWQDmAq%2BnKH6omNH5cbNsz7agYA1sdWC%2F%2BGVo2bPJAceQ6TZSRJqGw34rJFDS42cZz%2BffTPCOrgCi8R%2B0bllnEdzdeesXIQZmL15lUdEsQBRRkkfF2JPmhZcK%2FesdGD%2BtGwA5Il8iE7N%2FjCe1MrJBjqkAUlG8yfOgJcGKVqoi7aXxWwyDM1Lx3ZUGoPGtRs0nWZf8m0alHgJofwtxZDId5OPxo%2FoMmsDe3qFNF4G%2F9czxnNNDRWDB5m5W1r0FwjXfhG%2BYrsG7NAK%2FLa9w0l9w8CXCsUhuY%2FqRCVYVmrD3UCTmkIGpU2PehjjOV9jEA59b14%2FkdWnAfwOZ0ly99qialvlgJeBBVRO4sSarQUQd0MKRjsZoNHM&X-Amz-Signature=568d66961684928e2e50e568181129370bda6708a22d7c1f15eebe435a46d55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRWUZUH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Cevfv4ZPh2C1Nz%2Fq8Oa9IrTj3eXq5HGSWpnZ4zmNGQIhAN3awbCzyJr3IVYuXTOkYNgYc%2Btdy8F4uELPcYGxSQC%2BKv8DCFsQABoMNjM3NDIzMTgzODA1Igx%2BB5k6mJPMfTRTfJ8q3AMBuycEc%2FzAtLYqeGOXuApw9LcGZ20%2BD0UaO5vPsH%2FvdK4t7jLC0oqhk9BNLsKPBaejF3Z%2BvjIwBSO43D6avVCDMjbzUfZUfjBUJ1MbreQDBaK%2FmK31Kac8bvaWb4QJv5iAkaQUgLRsOBUzlYTNuYQVMqdj0edMY57vzA%2FtvRVlIsUR%2BWJ6owOocEXgE4WICkuoPNCcCHrKc3wAph2CKoT0G%2F722LeqNHr2FEbIXLgc%2B%2F4543%2FKyiUqjDlfIuIkMu6%2F4i2xFkc2Q9lQUMIZE8rcBSrEhnUGv4d1ZInYZmaJW77Jg2%2BqqOqDEnLD4%2B1CgKpqza3Zj6PneG%2F7jmQ8vL2mNmGNcuPX63hseQ27mjNqhdlAcykuWgcjMLr%2BSs6tpG%2B3y7VM7s3zew0icNJzNcMD3wuIs%2B2VOvCidTeFfTdfU2K9n8Rwx8t%2BUZAGRhJRYug6z6I1KG6jNUWLaaXyCcDlysD7qBq%2FDdODdSuIoSAH7tfDfWQDmAq%2BnKH6omNH5cbNsz7agYA1sdWC%2F%2BGVo2bPJAceQ6TZSRJqGw34rJFDS42cZz%2BffTPCOrgCi8R%2B0bllnEdzdeesXIQZmL15lUdEsQBRRkkfF2JPmhZcK%2FesdGD%2BtGwA5Il8iE7N%2FjCe1MrJBjqkAUlG8yfOgJcGKVqoi7aXxWwyDM1Lx3ZUGoPGtRs0nWZf8m0alHgJofwtxZDId5OPxo%2FoMmsDe3qFNF4G%2F9czxnNNDRWDB5m5W1r0FwjXfhG%2BYrsG7NAK%2FLa9w0l9w8CXCsUhuY%2FqRCVYVmrD3UCTmkIGpU2PehjjOV9jEA59b14%2FkdWnAfwOZ0ly99qialvlgJeBBVRO4sSarQUQd0MKRjsZoNHM&X-Amz-Signature=a015dd5cc509029d381ed42542fadfa22c1c8a00472466068df721d67eeec920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

