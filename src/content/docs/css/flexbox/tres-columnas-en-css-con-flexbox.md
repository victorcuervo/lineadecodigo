---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIT34YC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD0eb0fGIWyNkOGP8cJbbzgKotSgnLSUErDEdscv2VZwIhAKrBE8eC7EYSlJPrUUisLnKEhcxKs1V7R60EGtLEcvR2KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ4vg0bSfMNT6MdUkq3AMdoV2qH%2FaKsv4tmKdZADALqJauS%2BQmabf5mjTIRXB%2B87td%2BAk4EETnOq0OXDSFHNEInb24k%2BWEUh36o6j%2FjupksPG72Xx5DebK4azgvtaTlNu67g4wMd0SGRQ%2FRAuHnKEimq2WXEUAkItp2a%2Bwi4UdFb%2FMvkJpl8XRbtAS%2BHV1hqduqEbuKPacjsMuwedyqWHMJRTJyMYERPCv%2F%2FOMF56FxvYibFLX0MklgqGDLe8Eh72RVZyP29EvAJq%2BlK1WeNRd52a11ta2xUBiHTVN4i4mSdp4DXCzkqtBazUMSSlOoW6gBYr9c7kCi89lmC3G%2BDGfCXZTH6jIXRzTq06V1rNNDAJ%2Bh9yWG5CuvAdE1fN%2BOTMbdTeSKefejsiRXnINcpUb8o7sJzh5i33YYno20VWlHM4qRsCf4vxUczgL5DtlW3M8cF4P77%2FB68go4LKQ3ztqqTnREUrobRT7rEwtVvVl4Su24ySlAVo9YexcpCBfhYiqVBUoCCfnuMBhgaUskl72SBM379g8c89u4BVMJYpt3sLireG59KCS5dbiKfU0I1nFs7wlLmGHlxitg0D9UmHlAiNt0TuNDGg73gVWD%2BdzkL%2BqM97JdbUf04o674qAj%2F6oHt8V61OmVXOfdTCX3dzJBjqkAdyfjhyBrLnhqn2mJMP2sNpN5N6x830e72hcLCzhCpIz%2FkIogXYp%2Bn%2BfD5cXpygQlwQA4VonDWP1gm%2FT5hu9MzIS0GMJxbg1Nuz97eQRBdoYziKqRLqTTFaFGC5Pv3pqDIqMZZvLjL0%2B224Gl16uTh2TLZ6AltDo%2F2A8ItOXl3edz6fLYCiHennF2G6nzS2lYF8DwMENAcCLeb7z5Eq%2FIoCXlLZE&X-Amz-Signature=6688deece7b439de9909ba846a730b18c5757130ae214fe6bc65ec6f4417701e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIT34YC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD0eb0fGIWyNkOGP8cJbbzgKotSgnLSUErDEdscv2VZwIhAKrBE8eC7EYSlJPrUUisLnKEhcxKs1V7R60EGtLEcvR2KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ4vg0bSfMNT6MdUkq3AMdoV2qH%2FaKsv4tmKdZADALqJauS%2BQmabf5mjTIRXB%2B87td%2BAk4EETnOq0OXDSFHNEInb24k%2BWEUh36o6j%2FjupksPG72Xx5DebK4azgvtaTlNu67g4wMd0SGRQ%2FRAuHnKEimq2WXEUAkItp2a%2Bwi4UdFb%2FMvkJpl8XRbtAS%2BHV1hqduqEbuKPacjsMuwedyqWHMJRTJyMYERPCv%2F%2FOMF56FxvYibFLX0MklgqGDLe8Eh72RVZyP29EvAJq%2BlK1WeNRd52a11ta2xUBiHTVN4i4mSdp4DXCzkqtBazUMSSlOoW6gBYr9c7kCi89lmC3G%2BDGfCXZTH6jIXRzTq06V1rNNDAJ%2Bh9yWG5CuvAdE1fN%2BOTMbdTeSKefejsiRXnINcpUb8o7sJzh5i33YYno20VWlHM4qRsCf4vxUczgL5DtlW3M8cF4P77%2FB68go4LKQ3ztqqTnREUrobRT7rEwtVvVl4Su24ySlAVo9YexcpCBfhYiqVBUoCCfnuMBhgaUskl72SBM379g8c89u4BVMJYpt3sLireG59KCS5dbiKfU0I1nFs7wlLmGHlxitg0D9UmHlAiNt0TuNDGg73gVWD%2BdzkL%2BqM97JdbUf04o674qAj%2F6oHt8V61OmVXOfdTCX3dzJBjqkAdyfjhyBrLnhqn2mJMP2sNpN5N6x830e72hcLCzhCpIz%2FkIogXYp%2Bn%2BfD5cXpygQlwQA4VonDWP1gm%2FT5hu9MzIS0GMJxbg1Nuz97eQRBdoYziKqRLqTTFaFGC5Pv3pqDIqMZZvLjL0%2B224Gl16uTh2TLZ6AltDo%2F2A8ItOXl3edz6fLYCiHennF2G6nzS2lYF8DwMENAcCLeb7z5Eq%2FIoCXlLZE&X-Amz-Signature=fc04d3f0003ec8ca88e80ca8ee73873f6e25b28db3d6deb12d360f6b9ca89edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

