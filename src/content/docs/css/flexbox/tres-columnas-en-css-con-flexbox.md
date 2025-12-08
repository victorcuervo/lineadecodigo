---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5IJ4OY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8W9UW%2Flg1qTZu4HqmRAvm%2Fq58XrfikAh%2F%2BouWQOTxWAIgE%2FvqBiyh%2BmmfnviALWNfP9YFE5MqObihuwW0ogLMyFAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUfZoCSh1r7FoaPVircA24xGoOn%2BmmzuEBOKk6VckDCCKKzF0xolAgUmBgdQefNgbXcFcI%2B3xYN0MlHRru5V%2FOMEYttSMatCHxa0g8cYuyYIreC2CdJt%2Baye1FHOYATGGYncFwLpJTi48RrNfj9xeY5a9hl6gfVwzGa40iWCIFXyRm62CmQNvxTGs1napw9SRTGp0l9t%2Bw6fltW%2B0Ph4fyv%2BtaPCGOy7LAsEnKPd1Wy8fWIsn6UohJolGkQ8YJKtRTDNZaxJDs4J8TnBjoSC05MuPJvVZq9TdiPXBStEf%2BZj7tWDMA7%2FjgkxKs%2FIR1WisWcqdtXXWZNGwJU3lBDKJ50KcPSmYQHNsDDgrvzDigLv03miYAPbZWo4Rkp3e76HXKcrxf6GjmrO9tm%2Fi0lXR802IF71TLg0lwatTmvBwiBmnnuRw%2FvipEtchhLLulrNrBBJMXPxrb7ZiD9He%2B6h1%2BqzlFvlCaCSx%2BKjWi0sf9hk9EucC35UjSK2WXnYANrg2xxJKxgNogbdZeR0A5Ib7BMT5CiMORhyPV7n3HfZ0poupHD%2B%2Ft9KmROVpsPhj3jFOZGLbHdr%2FG9fNeULFaOZJLKu%2BqWbwv2CER8mKpmb6nxAZmLszBEuYuRvjWEdwEAMeRvSTNGuwNDTgkmMIzQ2ckGOqUBlqai9jD%2BXB6oR5MRRmSF5RDLb5Trj7iwJzUAyXhRD%2FKXOkWYr2FKJH%2BmVC2lxiKaIyEt2Xk%2F%2Foy8yC0AvURnlyOMrF746DJGW7gqAZMf1d8CRh2tyasRK4QAlV%2FwFDK4CCuuo9EhdaD3%2BTfCww9ukEAXnQ9LP8sjmLYprax0t6bN3dakIcjHPY0ZeHOj5kh49FeOJf2VQXOyJE2A%2BHvyLPtnL25y&X-Amz-Signature=68206f9e7845268bcb805f67e99e774c4415e2e87b40eebe088b68dbf50bc8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D5IJ4OY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8W9UW%2Flg1qTZu4HqmRAvm%2Fq58XrfikAh%2F%2BouWQOTxWAIgE%2FvqBiyh%2BmmfnviALWNfP9YFE5MqObihuwW0ogLMyFAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUfZoCSh1r7FoaPVircA24xGoOn%2BmmzuEBOKk6VckDCCKKzF0xolAgUmBgdQefNgbXcFcI%2B3xYN0MlHRru5V%2FOMEYttSMatCHxa0g8cYuyYIreC2CdJt%2Baye1FHOYATGGYncFwLpJTi48RrNfj9xeY5a9hl6gfVwzGa40iWCIFXyRm62CmQNvxTGs1napw9SRTGp0l9t%2Bw6fltW%2B0Ph4fyv%2BtaPCGOy7LAsEnKPd1Wy8fWIsn6UohJolGkQ8YJKtRTDNZaxJDs4J8TnBjoSC05MuPJvVZq9TdiPXBStEf%2BZj7tWDMA7%2FjgkxKs%2FIR1WisWcqdtXXWZNGwJU3lBDKJ50KcPSmYQHNsDDgrvzDigLv03miYAPbZWo4Rkp3e76HXKcrxf6GjmrO9tm%2Fi0lXR802IF71TLg0lwatTmvBwiBmnnuRw%2FvipEtchhLLulrNrBBJMXPxrb7ZiD9He%2B6h1%2BqzlFvlCaCSx%2BKjWi0sf9hk9EucC35UjSK2WXnYANrg2xxJKxgNogbdZeR0A5Ib7BMT5CiMORhyPV7n3HfZ0poupHD%2B%2Ft9KmROVpsPhj3jFOZGLbHdr%2FG9fNeULFaOZJLKu%2BqWbwv2CER8mKpmb6nxAZmLszBEuYuRvjWEdwEAMeRvSTNGuwNDTgkmMIzQ2ckGOqUBlqai9jD%2BXB6oR5MRRmSF5RDLb5Trj7iwJzUAyXhRD%2FKXOkWYr2FKJH%2BmVC2lxiKaIyEt2Xk%2F%2Foy8yC0AvURnlyOMrF746DJGW7gqAZMf1d8CRh2tyasRK4QAlV%2FwFDK4CCuuo9EhdaD3%2BTfCww9ukEAXnQ9LP8sjmLYprax0t6bN3dakIcjHPY0ZeHOj5kh49FeOJf2VQXOyJE2A%2BHvyLPtnL25y&X-Amz-Signature=e1324fc5e25b7e296d03115e842e309b1ca1596c9155c25a530dbb2923dad209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

