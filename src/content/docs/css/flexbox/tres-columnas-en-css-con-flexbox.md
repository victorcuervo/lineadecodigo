---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2I4EB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT38sHHmpWjUIDjIfZS8GJvUTjmHW6EQz0qlwPQD98aAIgG%2FsUxgQFKMxf64oidoyEzPOdouLzFRPTX1WZSuD3Q0oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPl4dkNyrteYLnP5HSrcA24%2F1XckvmYnvgKAqkM9VjGM609jmAWiqXeHR2NLGAH9BI6wTydMBFEPb5PT9FdlbGul%2Ffc8P4UQmyNspyA4IRKmWPyLzxjaf%2BPivMF2B89bdb5PrGNwcjfo%2FegW5%2Bw45E7hDuZtbQz6VPOKJ4o25frBigQ1xV37hQkYvjxDbFPNt%2B2YaQBcQ%2BZilNvxzHtRx6EUgw%2Fk1B529Av%2BINd7U%2BuOS3HeuFCUSxvoo31Asc169QNH7xqzfCZ5%2B9tKjFLQgen0EG%2FJRcP3NxvpT04o114lS2hn2c3lJBR6rbnamrmUhoMJLcsxbtdNcX2zPpy%2Bkna%2FOlg0OZoBFC4TI7qCwXCuc3dmD4W5iDRObKxihGvXwSnpqtZ2m485OPB8L2%2F0pi8RXAs%2ByYDZzz2yR%2B%2B9wtiQpksWfBlgScGu4rrQlFypEmI8x2ZVeA3VDztYC6Cokh3wrwmApcnzARXD7IqoTq72dTZGw4JoIIXh8Mn4iO7y3iQP03j9FqPjyeg7M%2FB8euaXzKPJ08Asah64jnLNLB%2FnohpeE5omOEgW%2Bybznog2jvmLjRdQLIO97yNF48NksqvXho0w%2FbFlAuc1db%2BtLCE5Kbjv7sHfZhb97f8pL4eV5pK3PSZwAcPF6GiOMKOm0MkGOqUBIKpa2blyWE%2BLPsZ1%2Bqiqknecnx5lJ%2F3axEjjwcfzwT8E%2Fmzyb8ojXrFcn86qmFlo4b3bojdmS2J0w017b1vVPiLu14Poj3EB8ZgHLCx82fRF6b9%2FzGTm4TzLE79wSS%2Ba4pRmwS80ZbTV8guAsb5xmevIZjBFJI0nnLFNCwzs8YngcSSUmZAth%2FsBL20YsSoiDjyOuvmXK57ls%2FuqZq7thUNL6Rkv&X-Amz-Signature=e6c96b3a6ccb064530506f311ce9ed225b62296a4759c6536ce43422723cbc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI2I4EB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT38sHHmpWjUIDjIfZS8GJvUTjmHW6EQz0qlwPQD98aAIgG%2FsUxgQFKMxf64oidoyEzPOdouLzFRPTX1WZSuD3Q0oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPl4dkNyrteYLnP5HSrcA24%2F1XckvmYnvgKAqkM9VjGM609jmAWiqXeHR2NLGAH9BI6wTydMBFEPb5PT9FdlbGul%2Ffc8P4UQmyNspyA4IRKmWPyLzxjaf%2BPivMF2B89bdb5PrGNwcjfo%2FegW5%2Bw45E7hDuZtbQz6VPOKJ4o25frBigQ1xV37hQkYvjxDbFPNt%2B2YaQBcQ%2BZilNvxzHtRx6EUgw%2Fk1B529Av%2BINd7U%2BuOS3HeuFCUSxvoo31Asc169QNH7xqzfCZ5%2B9tKjFLQgen0EG%2FJRcP3NxvpT04o114lS2hn2c3lJBR6rbnamrmUhoMJLcsxbtdNcX2zPpy%2Bkna%2FOlg0OZoBFC4TI7qCwXCuc3dmD4W5iDRObKxihGvXwSnpqtZ2m485OPB8L2%2F0pi8RXAs%2ByYDZzz2yR%2B%2B9wtiQpksWfBlgScGu4rrQlFypEmI8x2ZVeA3VDztYC6Cokh3wrwmApcnzARXD7IqoTq72dTZGw4JoIIXh8Mn4iO7y3iQP03j9FqPjyeg7M%2FB8euaXzKPJ08Asah64jnLNLB%2FnohpeE5omOEgW%2Bybznog2jvmLjRdQLIO97yNF48NksqvXho0w%2FbFlAuc1db%2BtLCE5Kbjv7sHfZhb97f8pL4eV5pK3PSZwAcPF6GiOMKOm0MkGOqUBIKpa2blyWE%2BLPsZ1%2Bqiqknecnx5lJ%2F3axEjjwcfzwT8E%2Fmzyb8ojXrFcn86qmFlo4b3bojdmS2J0w017b1vVPiLu14Poj3EB8ZgHLCx82fRF6b9%2FzGTm4TzLE79wSS%2Ba4pRmwS80ZbTV8guAsb5xmevIZjBFJI0nnLFNCwzs8YngcSSUmZAth%2FsBL20YsSoiDjyOuvmXK57ls%2FuqZq7thUNL6Rkv&X-Amz-Signature=db690b48bb90b0b46bd0422673a9a2dbe8597cf1f488fc5f8fbf30f1c096a0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

