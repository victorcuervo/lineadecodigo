---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MG2ZY2O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDha4F%2F4LzhQZyujI9Lu%2BsgOhs%2BLMxWPxurtjfIoQ9tVgIhAP9hoc9fEbn6oRtBaUo5NDsapinL8mO5%2BJhlY6ZKSTRYKv8DCD4QABoMNjM3NDIzMTgzODA1Igxqtl5CTQPKha9vBAMq3APqi4vKXjJyNPcTYF4oB74hVs6Bi%2Bk5VESv3KxIMXkMC44QGDD66wanxVvnBmcd8OFOOSoSStOognpPJNDjEkNwiAHPsi5X2QTqEhp6oqsa1ZV1D03eQNiJWDNexdDsEx%2F23AAJZ33PtzXfNoi99zXSzdg3oVmvmAfsFFpf85mW5F0wpBFeBqmX56cg%2Bt1zGyKVxlLKHTUvtv6FesYLtZpRX4qhw6z73x16%2BQk40eeERCkcy%2Fn7LILHWYe1CD2PAWk4QHdbEUA6aOaerijE4rKhQvAE1BdO5UcLJZI5OfjZL0PVclhUCW0ZLHOtyos2DSXT5FFXUKkRXlGwQOZLPiXFb9bpjuY4ReQlTZrGCjvAB6x5DpfImmNqe10HTrp2OSb4XEXuQapwVZm1wjC1Lovp2IUfwwxFzpYQGOf%2Ba6SJ%2BNIj5QVhCGutA2EcOGVQ1dV9Nznu2YLbRx0u4fORgZ6skQ59b4ucHo3OnHwge4fXSTGlHNaf5c4GatRzkPOmOd9StjnvI%2B2p05gH7Z5RYd2PkP4%2B03aZhBlEPdus06JV3xW9z0EwEtOtwQExTbdH0%2FfwKVj2916Ekpx7B6d0ZnoxxejjHz%2BoW2VJw3J7T3NRM4yrINTdyGSgq0QakTCTrsTJBjqkAS%2F%2BnI%2FDL7%2F45GVNybYq9kGQOtuTslxwg7E%2FK04OXSgsD6NgJ6fHfa5InLb3ofhPQc28DfvZ00jzCkZHVwH6PdbZYkWpaIJzBP32k5nT5IwqSBfgajHh%2BnTlgvcvjTHhvY%2FilbX5EE%2FUIsTGmtImSWWczzWc7fmYP0y0w7hi1pACNarzD9xxKw%2B%2Fk2Nprne%2F0Dq%2B2k5U6RIE8MZ0KDPLVbTWBYRz&X-Amz-Signature=6ba56491af37104fc8860f00ffa8b38f84d66735b35a3b78dee5d7435aec5438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MG2ZY2O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDha4F%2F4LzhQZyujI9Lu%2BsgOhs%2BLMxWPxurtjfIoQ9tVgIhAP9hoc9fEbn6oRtBaUo5NDsapinL8mO5%2BJhlY6ZKSTRYKv8DCD4QABoMNjM3NDIzMTgzODA1Igxqtl5CTQPKha9vBAMq3APqi4vKXjJyNPcTYF4oB74hVs6Bi%2Bk5VESv3KxIMXkMC44QGDD66wanxVvnBmcd8OFOOSoSStOognpPJNDjEkNwiAHPsi5X2QTqEhp6oqsa1ZV1D03eQNiJWDNexdDsEx%2F23AAJZ33PtzXfNoi99zXSzdg3oVmvmAfsFFpf85mW5F0wpBFeBqmX56cg%2Bt1zGyKVxlLKHTUvtv6FesYLtZpRX4qhw6z73x16%2BQk40eeERCkcy%2Fn7LILHWYe1CD2PAWk4QHdbEUA6aOaerijE4rKhQvAE1BdO5UcLJZI5OfjZL0PVclhUCW0ZLHOtyos2DSXT5FFXUKkRXlGwQOZLPiXFb9bpjuY4ReQlTZrGCjvAB6x5DpfImmNqe10HTrp2OSb4XEXuQapwVZm1wjC1Lovp2IUfwwxFzpYQGOf%2Ba6SJ%2BNIj5QVhCGutA2EcOGVQ1dV9Nznu2YLbRx0u4fORgZ6skQ59b4ucHo3OnHwge4fXSTGlHNaf5c4GatRzkPOmOd9StjnvI%2B2p05gH7Z5RYd2PkP4%2B03aZhBlEPdus06JV3xW9z0EwEtOtwQExTbdH0%2FfwKVj2916Ekpx7B6d0ZnoxxejjHz%2BoW2VJw3J7T3NRM4yrINTdyGSgq0QakTCTrsTJBjqkAS%2F%2BnI%2FDL7%2F45GVNybYq9kGQOtuTslxwg7E%2FK04OXSgsD6NgJ6fHfa5InLb3ofhPQc28DfvZ00jzCkZHVwH6PdbZYkWpaIJzBP32k5nT5IwqSBfgajHh%2BnTlgvcvjTHhvY%2FilbX5EE%2FUIsTGmtImSWWczzWc7fmYP0y0w7hi1pACNarzD9xxKw%2B%2Fk2Nprne%2F0Dq%2B2k5U6RIE8MZ0KDPLVbTWBYRz&X-Amz-Signature=c4e4b13098fe78fa1abb75b3c0ed519b2aad1a1ce456373e9d4ae16be4716ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

